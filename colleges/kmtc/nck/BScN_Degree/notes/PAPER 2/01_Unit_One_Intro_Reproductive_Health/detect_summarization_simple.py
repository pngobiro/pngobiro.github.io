#!/usr/bin/env python3
"""
Simple Summarization Detection Script (No ML Dependencies)

This script analyzes an HTML file to detect if it has been summarized or shortened
compared to the source text content using rule-based analysis.
"""

import re
import sys
from pathlib import Path
from typing import Dict, List, Tuple
from bs4 import BeautifulSoup


class SummarizationDetector:
    """Detects if content has been summarized using rule-based analysis."""
    
    def __init__(self, html_file: str, source_file: str):
        self.html_file = Path(html_file)
        self.source_file = Path(source_file)
        self.html_text = ""
        self.source_text = ""
        self.results = {
            'html_file': str(html_file),
            'source_file': str(source_file),
            'summary_indicators': [],
            'overall_assessment': '',
            'coverage_metrics': {},
            'html_sections': {},
            'source_sections': {}
        }
    
    def load_files(self, source_start_line=None, source_end_line=None):
        """Load both HTML and source text files."""
        try:
            # Load HTML file
            with open(self.html_file, 'r', encoding='utf-8') as f:
                self.html_text = f.read()
            
            # Load source file (with optional line range)
            with open(self.source_file, 'r', encoding='utf-8') as f:
                all_lines = f.readlines()
                if source_start_line is not None and source_end_line is not None:
                    # Extract specific line range (1-indexed)
                    self.source_text = ''.join(all_lines[source_start_line-1:source_end_line])
                else:
                    self.source_text = ''.join(all_lines)
            
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
    
    def generate_assessment(self, indicators: List[str], length_metrics: Dict) -> str:
        """Generate overall assessment based on indicators."""
        if not indicators:
            return "✅ CONTENT APPEARS COMPLETE: No significant summarization detected"
        
        # Count severity of indicators
        severe_count = sum(1 for ind in indicators if 'LOW' in ind or 'MISSING' in ind)
        moderate_count = len(indicators) - severe_count
        
        if severe_count >= 3:
            return f"⛔ HEAVILY SUMMARIZED: {severe_count} severe indicators found"
        elif severe_count >= 1 or moderate_count >= 3:
            return f"⚠️  MODERATELY SUMMARIZED: {severe_count} severe, {moderate_count} moderate indicators"
        else:
            return f"ℹ️  LIGHTLY SUMMARIZED: {len(indicators)} minor indicators"
    
    def analyze(self, source_start_line=None, source_end_line=None):
        """Run full analysis."""
        if not self.load_files(source_start_line, source_end_line):
            return False
        
        # Extract text from HTML
        html_readable_text = self.extract_text_from_html()
        source_readable_text = self.extract_text_from_source()
        
        # Analyze length metrics
        length_metrics = self.analyze_length_ratio(html_readable_text, source_readable_text)
        self.results['coverage_metrics'] = length_metrics
        
        # Count sections in both files
        html_sections = self.count_sections(self.html_text)
        source_sections = self.count_sections(self.source_text)
        
        self.results['html_sections'] = html_sections
        self.results['source_sections'] = source_sections
        
        # Detect summarization indicators
        indicators = self.detect_summarization_indicators(
            html_sections, 
            source_sections,
            length_metrics
        )
        self.results['summary_indicators'] = indicators
        
        # Generate overall assessment
        assessment = self.generate_assessment(indicators, length_metrics)
        self.results['overall_assessment'] = assessment
        
        return True
    
    def print_results(self):
        """Print analysis results."""
        print("=" * 80)
        print("SUMMARIZATION DETECTION REPORT (Rule-Based Analysis)")
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
        print("SUMMARIZATION INDICATORS")
        print("-" * 80)
        if self.results['summary_indicators']:
            for indicator in self.results['summary_indicators']:
                print(f"  {indicator}")
        else:
            print("  No summarization indicators detected")
        print()
        
        print("-" * 80)
        print("OVERALL ASSESSMENT")
        print("-" * 80)
        print(f"  {self.results['overall_assessment']}")
        print()
        
        print("=" * 80)


def main():
    """Main entry point."""
    if len(sys.argv) < 3:
        print("Usage: python3 detect_summarization_simple.py <html_file> <source_file> [source_start_line] [source_end_line]")
        print()
        print("Arguments:")
        print("  html_file           Path to the HTML file to analyze")
        print("  source_file         Path to the source text file (content_cleaned.txt)")
        print("  source_start_line   (Optional) Start line in source file (1-indexed)")
        print("  source_end_line     (Optional) End line in source file (1-indexed)")
        print()
        print("Line Ranges for Topics:")
        print("  Topic 01: Lines 1-300   (Historical Background)")
        print("  Topic 02: Lines 301-545 (Adolescent and Youth Health)")
        print("  Topic 03: Lines 546-750 (Gender Issues and Reproductive Health Rights)")
        print("  Topic 04: Lines 751+    (Safe Motherhood and Child Survival)")
        sys.exit(1)
    
    html_file = sys.argv[1]
    source_file = sys.argv[2]
    
    # Optional line range parameters
    source_start_line = int(sys.argv[3]) if len(sys.argv) > 3 else None
    source_end_line = int(sys.argv[4]) if len(sys.argv) > 4 else None
    
    detector = SummarizationDetector(html_file, source_file)
    
    # Pass line range to analyze
    if detector.analyze(source_start_line, source_end_line):
        detector.print_results()
    else:
        print("Failed to analyze files")
        sys.exit(1)


if __name__ == "__main__":
    main()