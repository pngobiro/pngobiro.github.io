#!/usr/bin/env python3
"""
Process remaining unclassified Bar Exam files (oral questions and numbered files).
"""

import os
import shutil
from pathlib import Path

BASE_DIR = Path("/home/ngobiro/projects/pngobiro.github.io/colleges/ksl/Advocates Training Program")
BAR_EXAMS_DIR = BASE_DIR / "Bar Exams"
ORALS_DIR = BASE_DIR / "Other Materials" / "Orals"

def process_numbered_files():
    """Process numbered files (ATP-100.pdf, ATP-101.pdf, etc.)"""
    print("Processing numbered files...")
    
    # Mapping for numbered files
    atp_mapping = {
        "ATP-100": "ATP 100 - Civil Litigation",
        "ATP-101": "ATP 101 - Criminal Litigation",
        "ATP-102": "ATP 102 - Probate and Administration",
        "ATP-103": "ATP 103 - Legal Writing and Drafting",
        "ATP-104": "ATP 104 - Trial Advocacy",
        "ATP-105": "ATP 105 - Professional Ethics",
        "ATP-106": "ATP 106 - Legal Practice Management",
        "ATP-107": "ATP 107 - Conveyancing",
        "ATP-108": "ATP 108 - Commercial Transactions",
    }
    
    moved = 0
    
    for file in BAR_EXAMS_DIR.glob("*.pdf"):
        if file.is_file():
            filename = file.name.replace("-", "").replace("_", "").upper()
            
            for prefix, subject in atp_mapping.items():
                if prefix.replace("-", "") in filename:
                    dest_dir = BASE_DIR / subject / "Past Papers"
                    dest_dir.mkdir(parents=True, exist_ok=True)
                    dest_file = dest_dir / file.name
                    
                    if not dest_file.exists():
                        shutil.move(str(file), str(dest_file))
                        print(f"✓ Moved: {file.name} -> {subject}/Past Papers/")
                        moved += 1
                    break
    
    return moved

def process_oral_files():
    """Move all oral-related files to Orals directory"""
    print("\nProcessing oral-related files...")
    
    ORALS_DIR.mkdir(parents=True, exist_ok=True)
    
    moved = 0
    
    for file in BAR_EXAMS_DIR.glob("*"):
        if file.is_file():
            filename_lower = file.name.lower()
            
            # Check if it's an oral-related file
            if any(keyword in filename_lower for keyword in [
                "oral", "orals", "tips", "sample", "question", "brief",
                "case", "week", "all april", "all oct", "atp november"
            ]):
                dest_file = ORALS_DIR / file.name
                
                if not dest_file.exists():
                    shutil.move(str(file), str(dest_file))
                    print(f"✓ Moved: {file.name} -> Orals/")
                    moved += 1
    
    return moved

def process_general_files():
    """Process general bar exam files"""
    print("\nProcessing general bar exam files...")
    
    moved = 0
    
    for file in BAR_EXAMS_DIR.glob("*"):
        if file.is_file():
            filename_lower = file.name.lower()
            
            # General bar exam files
            if any(keyword in filename_lower for keyword in [
                "cle", "april", "set", "document from", "results"
            ]):
                dest_file = ORALS_DIR / file.name
                
                if not dest_file.exists():
                    shutil.move(str(file), str(dest_file))
                    print(f"✓ Moved: {file.name} -> Orals/")
                    moved += 1
    
    return moved

def main():
    print("=" * 60)
    print("PROCESSING REMAINING BAR EXAMS FILES")
    print("=" * 60)
    print()
    
    total_moved = 0
    total_moved += process_numbered_files()
    total_moved += process_oral_files()
    total_moved += process_general_files()
    
    print()
    print("=" * 60)
    print(f"TOTAL: {total_moved} additional files moved")
    print("=" * 60)

if __name__ == "__main__":
    os.chdir(BASE_DIR)
    main()
