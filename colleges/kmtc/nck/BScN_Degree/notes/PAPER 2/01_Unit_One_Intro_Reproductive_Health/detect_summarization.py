#!/usr/bin/env python3
"""
Summarization Detection Script with ML Support

This script analyzes an HTML file to detect if it has been summarized or shortened
compared to the source text content. It uses both rule-based analysis and machine learning
algorithms (TF-IDF similarity, Cosine Similarity) to identify signs of summarization.
"""

import re
import sys
import numpy as np
from pathlib import Path
from typing import Dict, List, Tuple
from bs4 import BeautifulSoup
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.cluster import KMeans
from collections import Counter


class SummarizationDetector:
    """Detects if content has been summarized using rule-based and ML analysis."""
    
    def __init__(self, html_file: str, source_file: str):
        self.html_file = Path(html_file)
        self.source_file = Path(source_file)
        self.html_text = ""
        self.source_text = ""
        self.html_sentences = []
        self.source_sentences = []
        self.results = {
            'html_file': str(html_file),
            'source_file': str(source_file),
            'summary_indicators': [],
            'ml_indicators': [],
            'overall_assessment': '',
            'coverage_metrics': {},
            'ml_metrics': {}
        }
    
    def load_files(self):
        """Load both HTML and source text files."""
        try:
            # Load HTML file
            with open(self.html_file, 'r', encoding='utf-8') as f:
                self.html_text = f.read()
            
            # Load source file
            with open(self.source_file, 'r', encoding='utf-8') as f:
                self.source_text = f.read()
            
            return True
        except Exception as e:
            print(f"Error loading files: {e}")
            return False
    
    def extract_text_from_html(self):
        """Extract readable text content from HTML."""
        soup = BeautifulSoup(self.html_text, 'html.parser')
        
        # Remove script and style elements
        for element in soup(['script', 'style', 'noscript', 'nav', 'footer']):
            element.decompose()
        
        # Get text content
        text = soup.get_text(separator=' ', strip=True)
        
        # Clean up whitespace
        text = re.sub(r'\s+', ' ', text)
        
        return text
    
    def extract_text_from_source(self):
        """Extract text content from source (HTML format)."""
        soup = BeautifulSoup(self.source_text, 'html.parser')
        
        # Remove script and style elements
        for element in soup(['script', 'style', 'noscript']):
            element.decompose()
        
        # Get text content
        text = soup.get_text(separator=' ', strip=True)
        
        # Clean up whitespace
        text = re.sub(r'\s+', ' ', text)
        
        return text
    
    def analyze_length_ratio(self, html_text: str, source_text: str) -> Dict:
        """Analyze length ratios between texts."""
        html_words = html_text.split()
        source_words = source_text.split()
        
        html_chars = len(html_text)
        source_chars = len(source_text)
        
        html_word_count = len(html_words)
        source_word_count = len(source_words)
        
        word_ratio = html_word_count / source_word_count if source_word_count > 0 else 0
        char_ratio = html_chars / source_chars if source_chars > 0 else 0
        
        return {
            'html_word_count': html_word_count,
            'source_word_count': source_word_count,
            'html_char_count': html_chars,
            'source_char_count': source_chars,
            'word_ratio': word_ratio,
            'char_ratio': char_ratio
        }
    
    def count_sections(self, text: str) -> Dict:
        """Count various types of sections and markers."""
        # Count headings
        h1_count = len(re.findall(r'<h1[^>]*>', text, re.IGNORECASE))
        h2_count = len(re.findall(r'<h2[^>]*>', text, re.IGNORECASE))
        h3_count = len(re.findall(r'<h3[^>]*>', text, re.IGNORECASE))
        h4_count = len(re.findall(r'<h4[^>]*>', text, re.IGNORECASE))
        
        # Count lists
        ul_count = len(re.findall(r'<ul[^>]*>', text, re.IGNORECASE))
        ol_count = len(re.findall(r'<ol[^>]*>', text, re.IGNORECASE))
        
        # Count paragraphs
        p_count = len(re.findall(r'<p[^>]*>', text, re.IGNORECASE))
        
        # Count list items
        li_count = len(re.findall(r'<li[^>]*>', text, re.IGNORECASE))
        
        # Count callouts
        callout_count = len(re.findall(r'callout--', text))
        
        # Count collapsible sections
        collapsible_count = len(re.findall(r'<details', text, re.IGNORECASE))
        
        return {
            'h1_count': h1_count,
            'h2_count': h2_count,
            'h3_count': h3_count,
            'h4_count': h4_count,
            'ul_count': ul_count,
            'ol_count': ol_count,
            'p_count': p_count,
            'li_count': li_count,
            'callout_count': callout_count,
            'collapsible_count': collapsible_count
        }
    
    def extract_headings(self, text: str) -> List[str]:
        """Extract all heading text from HTML."""
        headings = []
        
        # Extract h1 headings
        h1_pattern = r'<h1[^>]*>(.*?)</h1>'
        for match in re.finditer(h1_pattern, text, re.IGNORECASE | re.DOTALL):
            heading_text = re.sub(r'<[^>]+>', '', match.group(1))
            heading_text = re.sub(r'\s+', ' ', heading_text).strip()
            if heading_text:
                headings.append(('h1', heading_text))
        
        # Extract h2 headings
        h2_pattern = r'<h2[^>]*>(.*?)</h2>'
        for match in re.finditer(h2_pattern, text, re.IGNORECASE | re.DOTALL):
            heading_text = re.sub(r'<[^>]+>', '', match.group(1))
            heading_text = re.sub(r'\s+', ' ', heading_text).strip()
            if heading_text:
                headings.append(('h2', heading_text))
        
        # Extract h3 headings
        h3_pattern = r'<h3[^>]*>(.*?)</h3>'
        for match in re.finditer(h3_pattern, text, re.IGNORECASE | re.DOTALL):
            heading_text = re.sub(r'<[^>]+>', '', match.group(1))
            heading_text = re.sub(r'\s+', ' ', heading_text).strip()
            if heading_text:
                headings.append(('h3', heading_text))
        
        return headings
    
    def extract_list_items(self, text: str) -> List[str]:
        """Extract all list items from HTML."""
        items = []
        
        li_pattern = r'<li[^>]*>(.*?)</li>'
        for match in re.finditer(li_pattern, text, re.IGNORECASE | re.DOTALL):
            item_text = re.sub(r'<[^>]+>', '', match.group(1))
            item_text = re.sub(r'\s+', ' ', item_text).strip()
            if item_text:
                items.append(item_text)
        
        return items
    
    def extract_key_phrases(self, text: str) -> List[str]:
        """Extract key phrases that indicate important content."""
        phrases = []
        
        # Extract bold text
        bold_pattern = r'<strong[^>]*>(.*?)</strong>'
        for match in re.finditer(bold_pattern, text, re.IGNORECASE | re.DOTALL):
            phrase = re.sub(r'<[^>]+>', '', match.group(1))
            phrase = re.sub(r'\s+', ' ', phrase).strip()
            if phrase and len(phrase) > 3:
                phrases.append(phrase)
        
        # Extract emphasized text
        em_pattern = r'<em[^>]*>(.*?)</em>'
        for match in re.finditer(em_pattern, text, re.IGNORECASE | re.DOTALL):
            phrase = re.sub(r'<[^>]+>', '', match.group(1))
            phrase = re.sub(r'\s+', ' ', phrase).strip()
            if phrase and len(phrase) > 3:
                phrases.append(phrase)
        
        return phrases
    
    def detect_summarization_indicators(
        self, 
        html_content: Dict, 
        source_content: Dict,
        length_metrics: Dict
    ) -> List[str]:
        """Detect indicators that content has been summarized."""
        indicators = []
        
        # Check 1: Length ratio too low
        if length_metrics['word_ratio'] < 0.5:
            indicators.append(f"⚠️  LOW WORD COVERAGE: HTML has only {length_metrics['word_ratio']*100:.1f}% of source word count")
        elif length_metrics['word_ratio'] < 0.7:
            indicators.append(f"⚠️  MODERATE WORD COVERAGE: HTML has {length_metrics['word_ratio']*100:.1f}% of source word count")
        
        # Check 2: Missing major sections
        h2_ratio = html_content['h2_count'] / source_content['h2_count'] if source_content['h2_count'] > 0 else 1
        if h2_ratio < 0.5:
            indicators.append(f"⚠️  MISSING SECTIONS: HTML has only {h2_ratio*100:.1f}% of source H2 headings")
        
        # Check 3: Missing list items
        li_ratio = html_content['li_count'] / source_content['li_count'] if source_content['li_count'] > 0 else 1
        if li_ratio < 0.5:
            indicators.append(f"⚠️  MISSING LIST ITEMS: HTML has only {li_ratio*100:.1f}% of source list items")
        
        # Check 4: Missing paragraphs
        p_ratio = html_content['p_count'] / source_content['p_count'] if source_content['p_count'] > 0 else 1
        if p_ratio < 0.5:
            indicators.append(f"⚠️  MISSING PARAGRAPHS: HTML has only {p_ratio*100:.1f}% of source paragraphs")
        
        # Check 5: Missing callouts
        callout_ratio = html_content['callout_count'] / source_content['callout_count'] if source_content['callout_count'] > 0 else 1
        if callout_ratio < 0.5:
            indicators.append(f"⚠️  MISSING CALLOUTS: HTML has only {callout_ratio*100:.1f}% of source callouts")
        
        # Check 6: Missing collapsible sections
        collapsible_ratio = html_content['collapsible_count'] / source_content['collapsible_count'] if source_content['collapsible_count'] > 0 else 1
        if collapsible_ratio < 0.5:
            indicators.append(f"⚠️  MISSING COLLAPSIBLE SECTIONS: HTML has only {collapsible_ratio*100:.1f}% of source collapsible sections")
        
        # Check 7: Short average paragraph length (may indicate condensation)
        html_avg_p_length = length_metrics['html_char_count'] / html_content['p_count'] if html_content['p_count'] > 0 else 0
        source_avg_p_length = length_metrics['source_char_count'] / source_content['p_count'] if source_content['p_count'] > 0 else 0
        
        if html_avg_p_length > 0 and source_avg_p_length > 0:
            if html_avg_p_length / source_avg_p_length < 0.6:
                indicators.append(f"⚠️  CONDENSED CONTENT: Average paragraph length is {html_avg_p_length/source_avg_p_length*100:.1f}% of source")
        
        return indicators
    
    def generate_assessment(self, indicators: List[str], length_metrics: Dict, ml_metrics: Dict) -> str:
        """Generate overall assessment combining rule-based and ML indicators."""
        if not indicators:
            return "✅ CONTENT APPEARS COMPLETE: No summarization detected (Rule-based + ML analysis)"
        
        # Count severity of indicators
        severe_count = sum(1 for ind in indicators if '🔴' in ind or 'LOW' in ind or 'MISSING' in ind)
        moderate_count = sum(1 for ind in indicators if '🟡' in ind or 'MODERATE' in ind)
        minor_count = len(indicators) - severe_count - moderate_count
        
        # Consider TF-IDF similarity for ML weighting
        tfidf_sim = ml_metrics.get('tfidf_similarity', 1.0)
        
        # Adjust assessment based on ML confidence
        if tfidf_sim < 0.3:
            # ML strongly suggests summarization
            if severe_count >= 1:
                return f"⛔ HEAVILY SUMMARIZED (ML-CONFIRMED): {severe_count} severe, {moderate_count} moderate indicators | TF-IDF: {tfidf_sim:.3f}"
            else:
                return f"⚠️  MODERATELY SUMMARIZED (ML-CONFIRMED): {moderate_count} moderate indicators | TF-IDF: {tfidf_sim:.3f}"
        elif tfidf_sim < 0.5:
            # ML suggests possible summarization
            if severe_count >= 2:
                return f"⚠️  MODERATELY SUMMARIZED: {severe_count} severe, {moderate_count} moderate indicators | TF-IDF: {tfidf_sim:.3f}"
            elif severe_count >= 1 or moderate_count >= 2:
                return f"⚠️  LIGHTLY TO MODERATELY SUMMARIZED: {severe_count} severe, {moderate_count} moderate indicators | TF-IDF: {tfidf_sim:.3f}"
            else:
                return f"ℹ️  LIGHTLY SUMMARIZED: {minor_count} minor indicators | TF-IDF: {tfidf_sim:.3f}"
        else:
            # ML suggests content is similar
            if severe_count >= 3:
                return f"⚠️  MODERATELY SUMMARIZED: {severe_count} severe indicators | TF-IDF: {tfidf_sim:.3f}"
            elif severe_count >= 1 or moderate_count >= 3:
                return f"ℹ️  LIGHTLY SUMMARIZED: {severe_count} severe, {moderate_count} moderate indicators | TF-IDF: {tfidf_sim:.3f}"
            else:
                return f"ℹ️  LIGHTLY SUMMARIZED: {len(indicators)} minor indicators | TF-IDF: {tfidf_sim:.3f}"
    
    def extract_sentences(self, text: str) -> List[str]:
        """Extract sentences from text."""
        # Split by common sentence delimiters
        sentences = re.split(r'[.!?]+', text)
        # Clean and filter
        sentences = [s.strip() for s in sentences if len(s.strip()) > 10]
        return sentences
    
    def calculate_tfidf_similarity(self, html_text: str, source_text: str) -> Dict:
        """Calculate TF-IDF similarity between texts."""
        try:
            vectorizer = TfidfVectorizer(max_features=1000, stop_words='english')
            tfidf_matrix = vectorizer.fit_transform([html_text, source_text])
            similarity = cosine_similarity(tfidf_matrix[0:1], tfidf_matrix[1:2])[0][0]
            return {'tfidf_similarity': float(similarity)}
        except Exception as e:
            return {'tfidf_similarity': 0.0}
    
    def calculate_sentence_overlap(self, html_sentences: List[str], source_sentences: List[str]) -> Dict:
        """Calculate Jaccard similarity between sentence sets."""
        try:
            html_set = set(html_sentences)
            source_set = set(source_sentences)
            
            # Calculate Jaccard similarity
            intersection = len(html_set & source_set)
            union = len(html_set | source_set)
            jaccard_sim = intersection / union if union > 0 else 0
            
            # Calculate source coverage
            coverage = intersection / len(source_set) if len(source_set) > 0 else 0
            
            return {
                'jaccard_similarity': float(jaccard_sim),
                'source_coverage': float(coverage)
            }
        except Exception as e:
            return {'jaccard_similarity': 0.0, 'source_coverage': 0.0}
    
    def detect_content_clusters(self, html_text: str, source_text: str) -> Dict:
        """Detect content clusters using n-gram analysis."""
        try:
            # Extract 3-grams
            def extract_ngrams(text, n=3):
                words = text.lower().split()
                ngrams = [' '.join(words[i:i+n]) for i in range(len(words)-n+1)]
                return set(ngrams)
            
            html_ngrams = extract_ngrams(html_text, 3)
            source_ngrams = extract_ngrams(source_text, 3)
            
            # Find overlaps
            overlap = html_ngrams & source_ngrams
            html_unique = html_ngrams - source_ngrams
            source_unique = source_ngrams - html_ngrams
            
            # Calculate ratios
            overlap_ratio = len(overlap) / len(source_ngrams) if len(source_ngrams) > 0 else 0
            
            return {
                'phrase_overlap_ratio': float(overlap_ratio),
                'html_unique_phrases': len(html_unique),
                'source_unique_phrases': len(source_unique)
            }
        except Exception as e:
            return {'phrase_overlap_ratio': 0.0, 'html_unique_phrases': 0, 'source_unique_phrases': 0}
    
    def analyze_sentence_length_distribution(self, html_sentences: List[str], source_sentences: List[str]) -> Dict:
        """Analyze sentence length distribution to detect condensation."""
        try:
            html_lengths = [len(s.split()) for s in html_sentences]
            source_lengths = [len(s.split()) for s in source_sentences]
            
            if not html_lengths or not source_lengths:
                return {}
            
            html_avg = np.mean(html_lengths)
            source_avg = np.mean(source_lengths)
            html_std = np.std(html_lengths)
            source_std = np.std(source_lengths)
            
            return {
                'html_avg_sentence_length': float(html_avg),
                'source_avg_sentence_length': float(source_avg),
                'html_sentence_std': float(html_std),
                'source_sentence_std': float(source_std),
                'length_ratio': float(html_avg / source_avg) if source_avg > 0 else 1.0
            }
        except Exception as e:
            return {}
    
    def detect_ml_summarization_indicators(
        self,
        html_sections: Dict,
        source_sections: Dict,
        length_metrics: Dict,
        ml_metrics: Dict
    ) -> List[str]:
        """Detect summarization indicators using ML-based methods."""
        indicators = []
        
        tfidf_sim = ml_metrics.get('tfidf_similarity', 1.0)
        jaccard_sim = ml_metrics.get('jaccard_similarity', 1.0)
        source_coverage = ml_metrics.get('source_coverage', 1.0)
        phrase_overlap = ml_metrics.get('phrase_overlap_ratio', 1.0)
        missing_phrases = ml_metrics.get('source_unique_phrases', 0)
        
        # TF-IDF indicator
        if tfidf_sim < 0.3:
            indicators.append(f"🔴 SEVERE: TF-IDF similarity very low ({tfidf_sim:.3f}) - suggests major content differences")
        elif tfidf_sim < 0.5:
            indicators.append(f"🟡 MODERATE: TF-IDF similarity reduced ({tfidf_sim:.3f}) - suggests possible summarization")
        
        # Jaccard similarity indicator
        if jaccard_sim < 0.3:
            indicators.append(f"🔴 SEVERE: Low sentence overlap (Jaccard: {jaccard_sim:.3f})")
        elif jaccard_sim < 0.5:
            indicators.append(f"🟡 MODERATE: Reduced sentence overlap (Jaccard: {jaccard_sim:.3f})")
        
        # Source coverage indicator
        if source_coverage < 0.4:
            indicators.append(f"🔴 SEVERE: Low source coverage ({source_coverage*100:.1f}%)")
        elif source_coverage < 0.6:
            indicators.append(f"🟡 MODERATE: Moderate source coverage ({source_coverage*100:.1f}%)")
        
        # Phrase overlap indicator
        if phrase_overlap < 0.3:
            indicators.append(f"🔴 SEVERE: Low phrase overlap ({phrase_overlap*100:.1f}%)")
        elif phrase_overlap < 0.5:
            indicators.append(f"🟡 MODERATE: Moderate phrase overlap ({phrase_overlap*100:.1f}%)")
        
        # Missing phrases indicator
        if missing_phrases > 20:
            indicators.append(f"🔴 SEVERE: {missing_phrases} unique phrases in source not found in HTML")
        elif missing_phrases > 10:
            indicators.append(f"🟡 MODERATE: {missing_phrases} unique phrases in source not found in HTML")
        
        return indicators
    
    def analyze(self):
        """Run full analysis with ML support."""
        if not self.load_files():
            return False
        
        # Extract text from HTML
        html_readable_text = self.extract_text_from_html()
        source_readable_text = self.extract_text_from_source()
        
        # Extract sentences for ML analysis
        self.html_sentences = self.extract_sentences(html_readable_text)
        self.source_sentences = self.extract_sentences(source_readable_text)
        
        # Analyze length metrics
        length_metrics = self.analyze_length_ratio(html_readable_text, source_readable_text)
        self.results['coverage_metrics'] = length_metrics
        
        # Count sections in both files
        html_sections = self.count_sections(self.html_text)
        source_sections = self.count_sections(self.source_text)
        
        self.results['html_sections'] = html_sections
        self.results['source_sections'] = source_sections
        
        # ML Analysis 1: TF-IDF Similarity
        tfidf_metrics = self.calculate_tfidf_similarity(html_readable_text, source_readable_text)
        
        # ML Analysis 2: Sentence Overlap (Jaccard)
        overlap_metrics = self.calculate_sentence_overlap(self.html_sentences, self.source_sentences)
        
        # ML Analysis 3: Content Clustering (n-gram overlap)
        cluster_metrics = self.detect_content_clusters(html_readable_text, source_readable_text)
        
        # ML Analysis 4: Sentence Length Distribution
        length_dist = self.analyze_sentence_length_distribution(self.html_sentences, self.source_sentences)
        
        # Combine ML metrics
        self.results['ml_metrics'] = {
            **tfidf_metrics,
            **overlap_metrics,
            **cluster_metrics,
            'length_distribution': length_dist
        }
        
        # Detect rule-based indicators
        indicators = self.detect_summarization_indicators(
            html_sections, 
            source_sections,
            length_metrics
        )
        self.results['summary_indicators'] = indicators
        
        # Detect ML-based indicators
        ml_indicators = self.detect_ml_summarization_indicators(
            html_sections,
            source_sections,
            length_metrics,
            self.results['ml_metrics']
        )
        
        # Generate overall assessment (combining both methods)
        all_indicators = indicators + ml_indicators
        assessment = self.generate_assessment(all_indicators, length_metrics, self.results['ml_metrics'])
        self.results['overall_assessment'] = assessment
        
        return True
    
    def print_results(self):
        """Print analysis results with ML metrics."""
        print("=" * 80)
        print("SUMMARIZATION DETECTION REPORT (With ML Analysis)")
        print("=" * 80)
        print()
        
        print(f"HTML File: {self.results['html_file']}")
        print(f"Source File: {self.results['source_file']}")
        print()
        
        print("-" * 80)
        print("LENGTH COMPARISON")
        print("-" * 80)
        metrics = self.results['coverage_metrics']
        print(f"Word Count:  HTML = {metrics['html_word_count']:,} | Source = {metrics['source_word_count']:,} | Ratio = {metrics['word_ratio']:.2%}")
        print(f"Char Count:  HTML = {metrics['html_char_count']:,} | Source = {metrics['source_char_count']:,} | Ratio = {metrics['char_ratio']:.2%}")
        print()
        
        print("-" * 80)
        print("SECTION COUNTS")
        print("-" * 80)
        html_secs = self.results['html_sections']
        source_secs = self.results['source_sections']
        
        for key in ['h1_count', 'h2_count', 'h3_count', 'h4_count', 'ul_count', 'ol_count', 
                    'p_count', 'li_count', 'callout_count', 'collapsible_count']:
            html_val = html_secs.get(key, 0)
            source_val = source_secs.get(key, 0)
            ratio = html_val / source_val if source_val > 0 else 1
            print(f"{key:20s}: HTML = {html_val:3d} | Source = {source_val:3d} | Ratio = {ratio:.2%}")
        print()
        
        print("-" * 80)
        print("ML-BASED METRICS")
        print("-" * 80)
        ml_metrics = self.results['ml_metrics']
        
        print(f"TF-IDF Similarity:        {ml_metrics.get('tfidf_similarity', 0):.4f} (0-1 scale, higher = more similar)")
        print(f"Jaccard Similarity:       {ml_metrics.get('jaccard_similarity', 0):.4f} (0-1 scale, higher = more similar)")
        print(f"Source Coverage:          {ml_metrics.get('source_coverage', 0):.4f} (0-1 scale, higher = more complete)")
        print(f"Phrase Overlap Ratio:     {ml_metrics.get('phrase_overlap_ratio', 0):.4f} (0-1 scale)")
        print(f"HTML Unique Phrases:      {ml_metrics.get('html_unique_phrases', 0)}")
        print(f"Source Unique Phrases:    {ml_metrics.get('source_unique_phrases', 0)}")
        print()
        
        # Sentence length distribution
        length_dist = ml_metrics.get('length_distribution', {})
        if length_dist:
            print("Sentence Length Distribution:")
            print(f"  HTML Avg:  {length_dist.get('html_avg_sentence_length', 0):.1f} words/sentence")
            print(f"  Source Avg: {length_dist.get('source_avg_sentence_length', 0):.1f} words/sentence")
            print(f"  HTML Std:   {length_dist.get('html_sentence_std', 0):.1f}")
            print(f"  Source Std: {length_dist.get('source_sentence_std', 0):.1f}")
            print(f"  Ratio:      {length_dist.get('length_ratio', 1):.3f} (HTML vs Source)")
        print()
        
        print("-" * 80)
        print("RULE-BASED INDICATORS")
        print("-" * 80)
        if self.results['summary_indicators']:
            for indicator in self.results['summary_indicators']:
                print(f"  {indicator}")
        else:
            print("  No rule-based indicators detected")
        print()
        
        print("-" * 80)
        print("ML-BASED INDICATORS")
        print("-" * 80)
        if self.results['ml_indicators']:
            for indicator in self.results['ml_indicators']:
                print(f"  {indicator}")
        else:
            print("  No ML indicators detected")
        print()
        
        print("-" * 80)
        print("OVERALL ASSESSMENT")
        print("-" * 80)
        print(f"  {self.results['overall_assessment']}")
        print()
        
        print("=" * 80)


def main():
    """Main entry point."""
    if len(sys.argv) != 3:
        print("Usage: python detect_summarization.py <html_file> <source_file>")
        print()
        print("Arguments:")
        print("  html_file    Path to the HTML file to analyze")
        print("  source_file  Path to the source text file (content_cleaned.txt)")
        sys.exit(1)
    
    html_file = sys.argv[1]
    source_file = sys.argv[2]
    
    detector = SummarizationDetector(html_file, source_file)
    
    if detector.analyze():
        detector.print_results()
    else:
        print("Failed to analyze files")
        sys.exit(1)


if __name__ == "__main__":
    main()