#!/usr/bin/env python3
"""
Extract HTML, JS, and JSON files from content.txt
"""
import re
import os
import json

def extract_files_from_content(content_file='content.txt'):
    """Extract all code blocks from content.txt and save them as separate files"""
    
    with open(content_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Split content into sections by "code" markers (handles both "code Html" and "code JSON")
    sections = re.split(r'\ncode\s+(Html|JavaScript|Json|JSON)\s*\n', content)
    
    matches = []
    for i in range(1, len(sections), 2):
        if i + 1 < len(sections):
            file_type = sections[i]
            # Normalize JSON to Json
            if file_type == 'JSON':
                file_type = 'Json'
            code_content = sections[i + 1]
            # Clean up the content - stop at next major section
            code_content = re.split(r'\n(?:Model\s+Thinking|Quiz \d+:|info Google|Focus:)', code_content)[0]
            matches.append((file_type, code_content))
    
    print(f"Found {len(matches)} code blocks")
    
    # Create output directories
    os.makedirs('output', exist_ok=True)
    os.makedirs('output/topics', exist_ok=True)
    os.makedirs('output/quizzes', exist_ok=True)
    os.makedirs('output/js', exist_ok=True)
    
    html_count = 0
    json_count = 0
    js_count = 0
    
    for file_type, code_content in matches:
        code_content = code_content.strip()
        
        if file_type == 'Html':
            html_count += 1
            # Determine filename based on content
            if '<title>Monitoring, Evaluation, and Reporting - Table of Contents</title>' in code_content:
                filename = 'output/index.html'
            elif 'Concepts in Community Health Information System' in code_content:
                filename = 'output/topics/topic-01-concepts.html'
            elif 'Data Collection and Reporting' in code_content:
                filename = 'output/topics/topic-02-data-collection.html'
            elif 'Monitoring, Evaluation Frameworks and Performance' in code_content or 'Monitoring, Evaluation and Reporting Community Health Performance' in code_content:
                filename = 'output/topics/topic-03-evaluation.html'
            elif 'Facilitative Supervision in the Community' in code_content:
                filename = 'output/topics/topic-04-supervision.html'
            else:
                filename = f'output/page-{html_count}.html'
            
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(code_content)
            print(f"✓ Saved: {filename}")
        
        elif file_type == 'Json':
            json_count += 1
            try:
                # Parse JSON to get the title
                json_data = json.loads(code_content)
                quiz_id = json_data.get('id', f'quiz-{json_count}')
                order = json_data.get('order', json_count)
                filename = f'output/quizzes/topic-0{order}-quiz.json'
                
                with open(filename, 'w', encoding='utf-8') as f:
                    json.dump(json_data, f, indent=2, ensure_ascii=False)
                print(f"✓ Saved: {filename} - {json_data.get('title', 'Untitled')}")
            except json.JSONDecodeError as e:
                print(f"✗ Error parsing JSON block {json_count}: {e}")
                filename = f'output/quizzes/quiz-{json_count}-error.txt'
                with open(filename, 'w', encoding='utf-8') as f:
                    f.write(code_content)
                print(f"  Saved raw content to: {filename}")
        
        elif file_type == 'JavaScript':
            js_count += 1
            filename = f'output/js/script-{js_count}.js'
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(code_content)
            print(f"✓ Saved: {filename}")
    
    print(f"\n{'='*60}")
    print(f"Extraction Complete!")
    print(f"{'='*60}")
    print(f"HTML files: {html_count}")
    print(f"JSON files: {json_count}")
    print(f"JS files: {js_count}")
    print(f"Total: {html_count + json_count + js_count} files")
    print(f"\nFiles saved to: ./output/")

if __name__ == '__main__':
    extract_files_from_content()
