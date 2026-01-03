#!/usr/bin/env python3
"""
Analyze all Past Papers folders to check if files are actually past papers.
"""

import os
from pathlib import Path
from collections import defaultdict

BASE_DIR = Path("/home/ngobiro/projects/pngobiro.github.io/colleges/ksl/Advocates Training Program")

# Keywords that indicate actual past papers
PAST_PAPER_KEYWORDS = [
    "past paper", "question", "exam", "test", "paper", "assessment",
    "revision", "assignment", "project", "marking", "scheme", "answer",
    "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019",
    "2020", "2021", "2022", "2023", "2024", "july", "november",
    "march", "june", "october", "april", "august", "september"
]

# Keywords that indicate lecture materials (not past papers)
LECTURE_KEYWORDS = [
    "lecture", "notes", "outline", "guide", "handbook", "manual",
    "introduction", "tutorial", "seminar", "presentation", "slides",
    "course", "module", "topic", "chapter", "lesson", "firm", "class"
]

def analyze_file(filename):
    """Analyze a file and determine if it's likely a past paper."""
    filename_lower = filename.lower()
    
    # Check for past paper indicators
    past_paper_score = sum(1 for kw in PAST_PAPER_KEYWORDS if kw in filename_lower)
    
    # Check for lecture indicators
    lecture_score = sum(1 for kw in LECTURE_KEYWORDS if kw in filename_lower)
    
    # Check file extension
    if filename_lower.endswith('.ppt') or filename_lower.endswith('.pptx'):
        # PowerPoint files are usually lectures, not past papers
        lecture_score += 2
    
    # Determine classification
    if past_paper_score >= 2 and lecture_score < 2:
        return "PAST PAPER"
    elif lecture_score >= 2:
        return "LECTURE/NOTES"
    elif past_paper_score > lecture_score:
        return "LIKELY PAST PAPER"
    elif lecture_score > past_paper_score:
        return "LIKELY LECTURE"
    else:
        return "UNCLEAR"

def analyze_past_papers_folders():
    """Analyze all Past Papers folders."""
    print("=" * 80)
    print("ANALYSIS OF PAST PAPERS FOLDERS")
    print("=" * 80)
    print()
    
    total_files = 0
    total_past_papers = 0
    total_lectures = 0
    total_unclear = 0
    
    for subject_dir in sorted(BASE_DIR.glob("ATP 10*")):
        if subject_dir.is_dir():
            subject_name = subject_dir.name
            past_papers_dir = subject_dir / "Past Papers"
            
            if not past_papers_dir.exists():
                continue
            
            print(f"{'=' * 80}")
            print(f"SUBJECT: {subject_name}")
            print(f"{'=' * 80}")
            
            classification = defaultdict(list)
            file_types = defaultdict(int)
            
            for file in past_papers_dir.glob("*"):
                if file.is_file():
                    total_files += 1
                    file_ext = file.suffix.lower()
                    file_types[file_ext] += 1
                    
                    result = analyze_file(file.name)
                    classification[result].append(file.name)
                    
                    if result == "PAST PAPER" or result == "LIKELY PAST PAPER":
                        total_past_papers += 1
                    elif result == "LECTURE/NOTES" or result == "LIKELY LECTURE":
                        total_lectures += 1
                    else:
                        total_unclear += 1
            
            # Print summary
            print(f"Total files: {len(classification['PAST PAPER']) + len(classification['LIKELY PAST PAPER']) + len(classification['LECTURE/NOTES']) + len(classification['LIKELY LECTURE']) + len(classification['UNCLEAR'])}")
            print(f"\nFile types:")
            for ext, count in sorted(file_types.items()):
                print(f"  {ext}: {count}")
            
            print(f"\nClassification:")
            print(f"  ✓ PAST PAPERS: {len(classification['PAST PAPER'])}")
            print(f"  ~ Likely Past Papers: {len(classification['LIKELY PAST PAPER'])}")
            print(f"  ✗ LECTURE/NOTES (should be moved): {len(classification['LECTURE/NOTES'])}")
            print(f"  ~ Likely Lectures (should be moved): {len(classification['LIKELY LECTURE'])}")
            print(f"  ? Unclear: {len(classification['UNCLEAR'])}")
            
            # Show files that should be moved
            if classification['LECTURE/NOTES']:
                print(f"\n⚠ FILES THAT SHOULD BE MOVED TO NOTES ({len(classification['LECTURE/NOTES'])}):")
                for f in classification['LECTURE/NOTES'][:10]:  # Show first 10
                    print(f"  - {f}")
                if len(classification['LECTURE/NOTES']) > 10:
                    print(f"  ... and {len(classification['LECTURE/NOTES']) - 10} more")
            
            if classification['LIKELY LECTURE']:
                print(f"\n⚠ LIKELY LECTURE FILES ({len(classification['LIKELY LECTURE'])}):")
                for f in classification['LIKELY LECTURE'][:10]:
                    print(f"  - {f}")
                if len(classification['LIKELY LECTURE']) > 10:
                    print(f"  ... and {len(classification['LIKELY LECTURE']) - 10} more")
            
            print()
    
    print("=" * 80)
    print("OVERALL SUMMARY")
    print("=" * 80)
    print(f"Total files analyzed: {total_files}")
    print(f"  ✓ Actual Past Papers: {total_past_papers}")
    print(f"  ✗ Lecture Materials (should be moved): {total_lectures}")
    print(f"  ? Unclear: {total_unclear}")
    print()

if __name__ == "__main__":
    os.chdir(BASE_DIR)
    analyze_past_papers_folders()
