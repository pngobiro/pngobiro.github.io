#!/usr/bin/env python3
"""
AI-Powered Query Optimizer for StudoCU Scraper
Uses Google Gemini AI to improve search queries and analyze results for better document discovery.
"""

import json
import re
from typing import List, Dict, Optional
from collections import Counter
import google.generativeai as genai
import os
from pathlib import Path

# Load environment variables from .env file
try:
    from dotenv import load_dotenv
    load_dotenv()
except ImportError:
    print("Warning: python-dotenv not installed. Install with: pip install python-dotenv")
    print("Falling back to system environment variables only.")

# Try to import SEARCH_QUERY from config.py
try:
    from config import SEARCH_QUERY
except ImportError:
    SEARCH_QUERY = None


class AIQueryOptimizer:
    """Uses Google Gemini AI to optimize search queries and analyze results"""
    
    def __init__(self, api_key: Optional[str] = None):
        """Initialize with Google Gemini API key"""
        self.api_key = api_key or os.environ.get('GEMINI_API_KEY')
        if not self.api_key:
            raise ValueError("GEMINI_API_KEY not found in environment variables")
        genai.configure(api_key=self.api_key)
        self.model = genai.GenerativeModel('gemini-3-flash-preview')
    
    def optimize_base_topic(self, user_input: str) -> str:
        """Refine a broad or messy user topic into a clean base keyword"""
        if not user_input or len(user_input.split()) <= 2:
            return user_input
            
        print(f"🧠 Smartening up topic: '{user_input}'...")
        prompt = f"""Refine this educational search topic into a clean, 2-4 word primary search keyword.
        
User Input: "{user_input}"

Rules:
1. Keep the most important keywords (Subject, Institution, Level).
2. Remove filler words ("find", "papers", "about", "everything").
3. Return ONLY the refined keyword string.

Example Input: "I am looking for nursing exam papers for year 1 kmtc"
Example Output: "KMTC Nursing Year 1"

Refined Topic:"""
        
        try:
            response = self.model.generate_content(prompt)
            refined = response.text.strip()
            # Remove any quotes the AI might add
            refined = refined.replace('"', '').replace("'", "")
            print(f"   ✓ Refined to: '{refined}'")
            return refined
        except Exception:
            return user_input

    def generate_search_variations(self, base_query: str, context: str = "", course_name: str = "") -> List[str]:
        """
        Generate multiple search query variations to find more documents.
        
        Args:
            base_query: Original search query (e.g., "Kenya Medical Training College Year 1 Semester 2")
            context: Additional context about what you're looking for
            course_name: Course name for Kenyan educational context (e.g., "Diploma in Nursing - KMTC")
        
        Returns:
            List of optimized search query variations
        """
        # Build context with course information
        full_context = context if context else "Educational documents"
        if course_name:
            full_context = f"Course: {course_name}. {full_context}"
        
        prompt = f"""Given this search query for educational documents: "{base_query}"
        
Context: {full_context}

This is for Kenyan educational institutions. Generate 5-7 OPTIMIZED, SHORT, SMART search queries.
IMPORTANT: Shorter, keyword-focused queries often give better results on this platform than long sentences.

Guidelines:
1. FOCUS ON KEYWORDS: Use specific subjects + "KMTC" or course codes (e.g. "Anatomy KMTC", "Nursing FQE")
2. REMOVE FILLER WORDS: Avoid "year 1 semester 2 of..." and use "Year 1 Sem 2" or just subject names.
3. USE ABBREVIATIONS: Use common Kenyan abbreviations (e.g., "KRCHN", "KECHN", "FQE").
4. TARGET SPECIFIC SUBJECTS: Break down broad queries into specific subjects (e.g., "Microbiology", "Pharmacology").
5. COMBINE EFFECTIVELY: "Subject + Level" (e.g. "Community Health Year 1").

Return ONLY the queries, one per line, without numbering or explanation."""

        response = self.model.generate_content(prompt)
        queries = [q.strip() for q in response.text.strip().split('\n') if q.strip()]
        return queries
    
    def analyze_results_quality(self, documents: List[Dict]) -> Dict:
        """
        Analyze scraped documents to identify patterns and suggest improvements.
        
        Args:
            documents: List of document dictionaries from scraper
        
        Returns:
            Analysis report with insights and recommendations
        """
        if not documents:
            return {"error": "No documents to analyze"}
        
        # Extract document info for analysis
        titles = [doc.get('title', '') for doc in documents]
        types = [doc.get('type', '') for doc in documents if doc.get('type')]
        courses = [doc.get('course', '') for doc in documents if doc.get('course')]
        
        summary = f"""Analyze these {len(documents)} educational documents:

Document Titles (first 20):
{chr(10).join(titles[:20])}

Document Types: {', '.join(set(types)) if types else 'Not specified'}
Courses: {', '.join(set(courses[:10])) if courses else 'Not specified'}

Provide:
1. Main topics/subjects covered
2. Quality assessment (are these relevant documents?)
3. Missing topics that should be searched for
4. Recommended additional search queries (3-5 specific queries)
5. Any patterns or issues in the results

Be concise and actionable."""

        response = self.model.generate_content(summary)
        
        return {
            "analysis": response.text,
            "total_documents": len(documents),
            "unique_types": len(set(types)),
            "unique_courses": len(set(courses))
        }
    
    def categorize_documents(self, documents: List[Dict]) -> Dict[str, List[Dict]]:
        """
        Use AI to intelligently categorize documents by subject/topic.
        
        Args:
            documents: List of document dictionaries
        
        Returns:
            Dictionary mapping categories to document lists
        """
        if not documents:
            return {}
        
        # Get titles for categorization
        titles_text = '\n'.join([f"{i+1}. {doc.get('title', 'Untitled')}" 
                                 for i, doc in enumerate(documents[:50])])
        
        prompt = f"""Categorize these educational documents into logical subject groups.

Documents:
{titles_text}

Return a JSON object where keys are category names and values are lists of document numbers.
Example: {{"Anatomy": [1, 5, 12], "Pharmacology": [2, 8], "Nursing Practice": [3, 4, 9]}}

Only return the JSON, no explanation."""

        response = self.model.generate_content(prompt)
        
        try:
            # Extract JSON from response
            response_text = response.text.strip()
            # Remove markdown code blocks if present
            if '```json' in response_text:
                response_text = response_text.split('```json')[1].split('```')[0].strip()
            elif '```' in response_text:
                response_text = response_text.split('```')[1].split('```')[0].strip()
            
            categories_map = json.loads(response_text)
            
            # Map back to actual documents
            categorized = {}
            for category, doc_numbers in categories_map.items():
                categorized[category] = [documents[i-1] for i in doc_numbers 
                                        if 0 < i <= len(documents)]
            
            return categorized
        except Exception as e:
            print(f"Error parsing categorization: {e}")
            return {"Uncategorized": documents}
    
    def suggest_missing_topics(self, documents: List[Dict], curriculum: str) -> List[str]:
        """
        Compare scraped documents against a curriculum to find missing topics.
        
        Args:
            documents: List of scraped documents
            curriculum: Description of expected curriculum/syllabus
        
        Returns:
            List of missing topics to search for
        """
        titles = [doc.get('title', '') for doc in documents]
        titles_text = '\n'.join(titles[:30])
        
        prompt = f"""Given this curriculum/program: "{curriculum}"

And these available documents:
{titles_text}

What important topics are MISSING? List 5-10 specific topics/subjects that should be searched for.
Return only the topic names, one per line."""

        response = self.model.generate_content(prompt)
        
        missing = [topic.strip() for topic in response.text.strip().split('\n') 
                  if topic.strip()]
        return missing
    
    def generate_smart_filters(self, documents: List[Dict]) -> Dict[str, List[str]]:
        """
        Analyze documents and suggest useful filters for narrowing results.
        
        Args:
            documents: List of document dictionaries
        
        Returns:
            Dictionary of filter categories and their values
        """
        # Extract metadata
        types = [doc.get('type', '') for doc in documents if doc.get('type')]
        courses = [doc.get('course', '') for doc in documents if doc.get('course')]
        years = [doc.get('academic_year', '') for doc in documents if doc.get('academic_year')]
        
        type_counts = Counter(types).most_common(10)
        course_counts = Counter(courses).most_common(10)
        year_counts = Counter(years).most_common(5)
        
        return {
            "document_types": [t[0] for t in type_counts],
            "courses": [c[0] for c in course_counts],
            "academic_years": [y[0] for y in year_counts],
            "type_distribution": dict(type_counts),
            "course_distribution": dict(course_counts)
        }
    
    def enhance_metadata(self, documents: List[Dict]) -> List[Dict]:
        """
        Use AI to clean and standardize document titles and metadata.
        
        Args:
            documents: List of document dictionaries
        
        Returns:
            List of documents with added 'enhanced_title' and 'subject_tag' fields
        """
        if not documents:
            return []
        
        enhanced_docs = []
        batch_size = 20
        
        print(f"Enhancing metadata for {len(documents)} documents (in batches of {batch_size})...")
        
        for i in range(0, len(documents), batch_size):
            batch = documents[i:i+batch_size]
            titles_text = '\n'.join([f"{j+1}. {doc.get('title', 'Untitled')}" for j, doc in enumerate(batch)])
            
            prompt = f"""Clean and standardize these educational document titles.
            
Tasks:
1. Remove file extensions (.pdf, .docx), "Scan", "Page 1", etc.
2. Fix capitalization (Title Case).
3. Extract the main subject if clear (e.g. "Anatomy", "Nursing", "Microbiology").
4. Keep the original meaning but make it professional.

Documents:
{titles_text}

Return a JSON array of objects, each having "clean_title" and "subject".
Example: [{{"clean_title": "Anatomy Final Exam 2023", "subject": "Anatomy"}}, ...]"""

            try:
                response = self.model.generate_content(prompt)
                response_text = response.text.strip()
                
                # Extract JSON
                if '```json' in response_text:
                    response_text = response_text.split('```json')[1].split('```')[0].strip()
                elif '```' in response_text:
                    response_text = response_text.split('```')[1].split('```')[0].strip()
                
                enhanced_batch_data = json.loads(response_text)
                
                # Merge back
                for j, doc in enumerate(batch):
                    if j < len(enhanced_batch_data):
                        doc['enhanced_title'] = enhanced_batch_data[j].get('clean_title', doc['title'])
                        doc['subject_tag'] = enhanced_batch_data[j].get('subject', 'General')
                    enhanced_docs.append(doc)
                    
            except Exception as e:
                print(f"Error enhancing batch {i//batch_size + 1}: {e}")
                enhanced_docs.extend(batch) # Fallback to original
                
        return enhanced_docs

def main():
    """Example usage of AI Query Optimizer"""
    import argparse
    
    parser = argparse.ArgumentParser(description='AI-powered query optimization for StudoCU scraper (using Google Gemini)')
    parser.add_argument('--action', choices=['variations', 'analyze', 'categorize', 'missing', 'prioritize', 'enhance'], 
                       required=True, help='Action to perform')
    parser.add_argument('--query', help='Base search query for variations')
    parser.add_argument('--json-file', default='studocu_year1_sem2_documents.json',
                       help='JSON file with scraped documents')
    parser.add_argument('--curriculum', help='Curriculum description for missing topics')
    parser.add_argument('--priority', choices=['high', 'medium', 'all'], default='high',
                       help='Priority level for document downloads')
    parser.add_argument('--api-key', help='Google Gemini API key (or set GEMINI_API_KEY env var)')
    
    args = parser.parse_args()
    
    try:
        optimizer = AIQueryOptimizer(api_key=args.api_key)
        
        if args.action == 'variations':
            # Use provided query or fallback to config
            query_to_use = args.query or SEARCH_QUERY
            
            if not query_to_use:
                print("Error: --query argument is required (and SEARCH_QUERY not found in config.py)")
                return
            
            print(f"\n🔍 Generating search variations for: '{query_to_use}'\n")
            variations = optimizer.generate_search_variations(query_to_use)
            print("Suggested search queries:")
            for i, query in enumerate(variations, 1):
                print(f"  {i}. {query}")
        
        elif args.action == 'enhance':
            print(f"\n✨ Enhancing metadata for: {args.json_file}\n")
            with open(args.json_file, 'r') as f:
                data = json.load(f)
                documents = data.get('documents', [])
            
            enhanced_documents = optimizer.enhance_metadata(documents)
            
            # Save enhanced results
            output_file = args.json_file.replace('.json', '_enhanced.json')
            data['documents'] = enhanced_documents
            with open(output_file, 'w') as f:
                json.dump(data, f, indent=2)
            
            print(f"\n✅ Saved enhanced metadata to: {output_file}")
            print("Sample enhanced titles:")
            for doc in enhanced_documents[:5]:
                 print(f"  Original: {doc.get('title')}")
                 print(f"  Enhanced: {doc.get('enhanced_title')}")
                 print(f"  Subject:  {doc.get('subject_tag')}\n")
        
        elif args.action == 'analyze':
            print(f"\n📊 Analyzing documents from: {args.json_file}\n")
            with open(args.json_file, 'r') as f:
                data = json.load(f)
                documents = data.get('documents', [])
            
            analysis = optimizer.analyze_results_quality(documents)
            print(f"Total documents: {analysis['total_documents']}")
            print(f"Unique types: {analysis['unique_types']}")
            print(f"Unique courses: {analysis['unique_courses']}\n")
            print("Analysis:")
            print(analysis['analysis'])
        
        elif args.action == 'categorize':
            print(f"\n📚 Categorizing documents from: {args.json_file}\n")
            with open(args.json_file, 'r') as f:
                data = json.load(f)
                documents = data.get('documents', [])
            
            categories = optimizer.categorize_documents(documents)
            print(f"Found {len(categories)} categories:\n")
            for category, docs in categories.items():
                print(f"  {category}: {len(docs)} documents")
            
            # Save categorized results
            output_file = args.json_file.replace('.json', '_categorized.json')
            with open(output_file, 'w') as f:
                json.dump(categories, f, indent=2)
            print(f"\n✅ Saved categorized results to: {output_file}")
        
        elif args.action == 'missing':
            if not args.curriculum:
                print("Error: --curriculum required for missing topics action")
                return
            
            print(f"\n🔎 Finding missing topics for: {args.curriculum}\n")
            with open(args.json_file, 'r') as f:
                data = json.load(f)
                documents = data.get('documents', [])
            
            missing = optimizer.suggest_missing_topics(documents, args.curriculum)
            print("Missing topics to search for:")
            for i, topic in enumerate(missing, 1):
                print(f"  {i}. {topic}")
        
        elif args.action == 'prioritize':
            print(f"\n⭐ Prioritizing documents from: {args.json_file}\n")
            with open(args.json_file, 'r') as f:
                data = json.load(f)
                documents = data.get('documents', [])
            
            prioritized = optimizer.generate_download_urls(documents, args.priority)
            print(f"Top {len(prioritized)} documents to download ({args.priority} priority):\n")
            for i, doc in enumerate(prioritized[:20], 1):
                print(f"  {i}. {doc.get('title', 'Untitled')[:70]}...")
                print(f"     Priority Score: {doc.get('ai_priority', 'N/A')}")
            
            # Save prioritized list
            output_file = args.json_file.replace('.json', f'_prioritized_{args.priority}.json')
            with open(output_file, 'w') as f:
                json.dump({"prioritized_documents": prioritized}, f, indent=2)
            print(f"\n✅ Saved prioritized list to: {output_file}")
    
    except Exception as e:
        print(f"❌ Error: {e}")
        print("\nMake sure you have:")
        print("1. Installed google-generativeai: pip install google-generativeai")
        print("2. Set GEMINI_API_KEY environment variable or pass it with --api-key")
        print("3. Get your API key from: https://makersuite.google.com/app/apikey")


if __name__ == "__main__":
    main()
