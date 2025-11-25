#!/usr/bin/env python3
"""
Medical Education Content Organization Script
Organizes files into subject-based structure with notes and past papers categorization
"""

import os
import shutil
import re
from pathlib import Path
import argparse
from typing import Dict, List, Tuple

# ============================================================================
# SUBJECT MAPPINGS - CUSTOMIZE FOR EACH COURSE/PROGRAM
# ============================================================================
# These mappings are specific to "Diploma in Health Records & Information Technology"
# For other courses (Nursing, Clinical Medicine, Pharmacy, etc.), create different mappings
# based on that course's curriculum and subject names.
# ============================================================================

# Subject mapping based on medical knowledge
SUBJECT_MAPPINGS = {
    "Community Health": ["community health", "public health", "community medicine"],
    "Epidemiology": ["epidemiology", "disease surveillance", "outbreak"],
    "Health Statistics": ["health statistics", "vital statistics", "biostatistics", "statistics"],
    "Medical Demography": ["demography", "population studies", "medical demography"],
    "Health Records Management": ["health records", "medical records", "records management", "hrm"],
    "Health Data Classification": ["health data", "data classification", "icd", "coding", "hdc"],
    "Health Information Systems": ["health information", "his", "information systems", "information system"],
    "Computer Applications in Health Care": ["computer application", "computer", "health it", "medical informatics", "database"],
    "Human Anatomy and Physiology": ["anatomy", "physiology", "human anatomy", "a&p", "a & p"],
    "Human Pathology": ["pathology", "medical pathology", "pat"],
    "Medical Terminology": ["medical terminology", "medical language", "terminology"],
    "First Aid": ["first aid", "emergency response", "emergency"],
    "HIV/AIDS & STIs": ["hiv", "aids", "sti", "std", "sexually transmitted"],
    "Mental Health": ["mental health", "psychiatry", "psychology", "meh"],
    "Research Methods": ["research", "research methods", "research methodology"],
    "Monitoring and Evaluation": ["m&e", "m & e", "monitoring", "evaluation", "moe"],
    "Health Systems Management": ["health systems", "health management", "hsm"],
    "Human Resource Management": ["hrm", "human resources", "human resource"],
    "Human Psychology": ["psychology", "human psychology"],
}

# Past paper type identification patterns
PASTPAPER_TYPES = {
    "CATs": [r"\bcat\b", r"c\.a\.t", r"continuous assessment"],
    "FQE": [r"\bfqe\b", r"final qualifying"],
    "SUPPLEMENTARY": [r"\bsupp\b", r"supplementary", r"retake"],
    "END_OF_SEMESTER": [r"end of semester", r"\beos\b", r"semester exam"],
    "END_OF_YEAR": [r"end of year", r"\beoy\b", r"annual exam", r"end of year"],
    "PRACTICAL": [r"practical", r"lab exam", r"marking key", r"marking scheme"],
}

def identify_subject(filename: str, content_hint: str = "") -> str:
    """Identify subject from filename or content"""
    filename_lower = filename.lower()
    content_lower = content_hint.lower()
    
    # Check filename and content against subject keywords
    for subject, keywords in SUBJECT_MAPPINGS.items():
        for keyword in keywords:
            if keyword in filename_lower or keyword in content_lower:
                return subject
    
    return "Uncategorized"

def identify_pastpaper_type(filename: str) -> str:
    """Identify past paper type using regex patterns"""
    filename_lower = filename.lower()
    
    for paper_type, patterns in PASTPAPER_TYPES.items():
        for pattern in patterns:
            if re.search(pattern, filename_lower, re.IGNORECASE):
                return paper_type
    
    return "NOT_RELEVANT"

def is_pastpaper(filename: str) -> bool:
    """Determine if a file is a past paper"""
    filename_lower = filename.lower()
    
    # Check for past paper indicators
    pastpaper_indicators = [
        r"\bcat\b", r"exam", r"test", r"fqe", r"supp", 
        r"end of", r"practical", r"marking", r"revision questions"
    ]
    
    for indicator in pastpaper_indicators:
        if re.search(indicator, filename_lower, re.IGNORECASE):
            return True
    
    return False

def create_subject_structure(base_path: Path, subject: str) -> Dict[str, Path]:
    """Create standard folder structure for a subject"""
    subject_dir = base_path / subject
    
    # Create main folders
    notes_dir = subject_dir / "notes"
    pastpapers_dir = subject_dir / "pastpapers"
    
    # Create past paper type folders
    pastpaper_categories = [
        "CATs", "FQE", "SUPPLEMENTARY", "END_OF_SEMESTER",
        "END_OF_YEAR", "PRACTICAL", "NOT_RELEVANT"
    ]
    
    # Create all directories
    notes_dir.mkdir(parents=True, exist_ok=True)
    pastpapers_dir.mkdir(parents=True, exist_ok=True)
    
    category_dirs = {}
    for category in pastpaper_categories:
        category_dir = pastpapers_dir / category
        category_dir.mkdir(parents=True, exist_ok=True)
        category_dirs[category] = category_dir
    
    return {
        "subject": subject_dir,
        "notes": notes_dir,
        "pastpapers": pastpapers_dir,
        **category_dirs
    }

def organize_file(file_path: Path, base_path: Path, dry_run: bool = False) -> Tuple[str, Path]:
    """Organize a single file into appropriate location"""
    # Identify subject
    subject = identify_subject(file_path.name)
    
    # Create subject structure
    dirs = create_subject_structure(base_path, subject)
    
    # Determine if it's a past paper or notes
    if is_pastpaper(file_path.name):
        paper_type = identify_pastpaper_type(file_path.name)
        dest_dir = dirs.get(paper_type, dirs["NOT_RELEVANT"])
    else:
        dest_dir = dirs["notes"]
    
    # Destination file path
    dest_file = dest_dir / file_path.name
    
    # Avoid overwriting existing files
    if dest_file.exists():
        # Add number suffix
        counter = 1
        stem = dest_file.stem
        suffix = dest_file.suffix
        while dest_file.exists():
            dest_file = dest_dir / f"{stem}_{counter}{suffix}"
            counter += 1
    
    # Move or copy file
    if not dry_run:
        try:
            shutil.copy2(file_path, dest_file)
            print(f"✓ Copied: {file_path.name}")
            print(f"  → {dest_file.relative_to(base_path)}")
        except Exception as e:
            print(f"✗ Error copying {file_path.name}: {e}")
            return "error", dest_file
    else:
        print(f"[DRY RUN] Would copy: {file_path.name}")
        print(f"  → {dest_file.relative_to(base_path)}")
    
    return subject, dest_file

def organize_directory(base_path: str, dry_run: bool = False):
    """Organize all files in directory into subject structure"""
    base_path = Path(base_path)
    
    print(f"\n{'='*70}")
    print(f"Medical Education Content Organization")
    print(f"{'='*70}")
    print(f"Base directory: {base_path}")
    print(f"Mode: {'DRY RUN (no files will be moved)' if dry_run else 'LIVE (files will be copied)'}")
    print(f"{'='*70}\n")
    
    # Find all PDF and DOCX files
    file_extensions = ["*.pdf", "*.doc", "*.docx"]
    all_files = []
    
    for ext in file_extensions:
        all_files.extend(base_path.rglob(ext))
    
    print(f"Found {len(all_files)} files to organize\n")
    
    # Track statistics
    stats = {
        "total": len(all_files),
        "organized": 0,
        "errors": 0,
        "by_subject": {},
        "by_type": {}
    }
    
    # Organize each file
    for file_path in all_files:
        # Skip files already in organized structure
        if any(part in ["notes", "pastpapers", "CATs", "FQE", "SUPPLEMENTARY"] 
               for part in file_path.parts):
            print(f"⊘ Skipping (already organized): {file_path.name}")
            continue
        
        subject, dest_file = organize_file(file_path, base_path, dry_run)
        
        if subject != "error":
            stats["organized"] += 1
            stats["by_subject"][subject] = stats["by_subject"].get(subject, 0) + 1
        else:
            stats["errors"] += 1
    
    # Print summary
    print(f"\n{'='*70}")
    print(f"Organization Summary")
    print(f"{'='*70}")
    print(f"Total files found: {stats['total']}")
    print(f"Files organized: {stats['organized']}")
    print(f"Errors: {stats['errors']}")
    print(f"\nFiles by subject:")
    for subject, count in sorted(stats["by_subject"].items()):
        print(f"  {subject}: {count}")
    print(f"{'='*70}\n")

if __name__ == "__main__":
    import sys
    
    if len(sys.argv) < 2:
        print("Usage: python organize_subjects.py <directory> [--dry-run]")
        print("\nExample:")
        print('  python organize_subjects.py "Year 1" --dry-run')
        print('  python organize_subjects.py "Year 1"')
        sys.exit(1)
    
    directory = sys.argv[1]
    dry_run = "--dry-run" in sys.argv
    
    organize_directory(directory, dry_run)
