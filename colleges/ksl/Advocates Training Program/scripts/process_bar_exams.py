#!/usr/bin/env python3
"""
Process Bar Exams folder and move files to respective subject folders.
"""

import os
import shutil
from pathlib import Path

BASE_DIR = Path("/home/ngobiro/projects/pngobiro.github.io/colleges/ksl/Advocates Training Program")
BAR_EXAMS_DIR = BASE_DIR / "Bar Exams"

# Subject mappings based on file patterns
SUBJECT_PATTERNS = {
    "ATP 100 - Civil Litigation": [
        "civil", "civil litigation", "civil procedure", "appeals", "review",
        "judicial review", "injunction", "chamber summons", "originating summons",
        "plaint", "decree", "execution", "garnishee", "objection", "interlocutory"
    ],
    "ATP 101 - Criminal Litigation": [
        "criminal", "criminal litigation", "criminal procedure", "charge", "plea",
        "arrest", "bail", "bond", "habeas corpus", "extradition", "identification",
        "private prosecution", "inquest", "penal code", "sentencing"
    ],
    "ATP 102 - Probate and Administration": [
        "probate", "administration", "succession", "will", "estate", "intestate",
        "testament", "grant", "letters", "public trustee"
    ],
    "ATP 103 - Legal Writing and Drafting": [
        "legal writing", "drafting", "letter", "memo", "opinion", "contract",
        "legislative", "cabinet", "statutory", "affidavit"
    ],
    "ATP 104 - Trial Advocacy": [
        "trial advocacy", "advocacy", "opening", "closing", "objection",
        "witness", "cross", "cab rank", "court etiquette", "trial lawyer"
    ],
    "ATP 105 - Professional Ethics": [
        "professional ethics", "ethics", "advocate", "lien", "conflict",
        "confidentiality", "duty", "legal profession", "lsk"
    ],
    "ATP 106 - Legal Practice Management": [
        "legal practice management", "practice management", "lpm", "firm",
        "office", "management", "billing", "client", "accounting"
    ],
    "ATP 107 - Conveyancing": [
        "conveyancing", "land", "transfer", "title", "lease", "mortgage",
        "tenancy", "charge", "registration", "property"
    ],
    "ATP 108 - Commercial Transactions": [
        "commercial", "transactions", "company", "partnership", "insolvency",
        "bankruptcy", "merger", "acquisition", "tax", "payment", "security",
        "negotiable", "agreement", "contract"
    ]
}

def classify_file(filename):
    """Classify a file into a subject based on its name."""
    filename_lower = filename.lower()
    
    for subject, patterns in SUBJECT_PATTERNS.items():
        for pattern in patterns:
            if pattern in filename_lower:
                return subject
    
    return None

def process_bar_exams():
    """Process all files in Bar Exams directory."""
    print("=" * 60)
    print("PROCESSING BAR EXAMS FILES")
    print("=" * 60)
    print()
    
    # Process individual files
    files_moved = 0
    files_skipped = 0
    
    for file in BAR_EXAMS_DIR.glob("*"):
        if file.is_file():
            subject = classify_file(file.name)
            
            if subject:
                # Determine destination folder
                if "revision" in file.name.lower() or "chart" in file.name.lower():
                    dest_subfolder = "Past Papers"
                elif "past paper" in file.name.lower() or "question" in file.name.lower():
                    dest_subfolder = "Past Papers"
                elif "marking" in file.name.lower():
                    dest_subfolder = "Past Papers"
                else:
                    dest_subfolder = "Notes"
                
                dest_dir = BASE_DIR / subject / dest_subfolder
                dest_dir.mkdir(parents=True, exist_ok=True)
                dest_file = dest_dir / file.name
                
                if not dest_file.exists():
                    shutil.move(file, dest_file)
                    print(f"✓ Moved: {file.name} -> {subject}/{dest_subfolder}/")
                    files_moved += 1
                else:
                    print(f"⊘ Exists: {file.name} already in {subject}/{dest_subfolder}/")
                    files_skipped += 1
            else:
                print(f"? Skip: {file.name} (no matching subject)")
                files_skipped += 1
    
    # Process year folders (July/November/March/June/October)
    year_folders = [
        "July 2012", "July 2013", "July 2014", "July 2015", "July 2016",
        "July 2017", "July 2018", "July 2019",
        "November 2012", "November 2013", "November 2014", "November 2015",
        "November 2016", "November 2017", "November 2018", "November 2019",
        "November 2021",
        "March 2023", "June 2021", "October 2022"
    ]
    
    for folder_name in year_folders:
        folder_path = BAR_EXAMS_DIR / folder_name
        if folder_path.exists() and folder_path.is_dir():
            print(f"\n--- Processing {folder_name} ---")
            
            for file in folder_path.glob("*"):
                if file.is_file():
                    subject = classify_file(file.name)
                    
                    if subject:
                        dest_dir = BASE_DIR / subject / "Past Papers"
                        dest_dir.mkdir(parents=True, exist_ok=True)
                        new_filename = f"{folder_name.replace(' ', '_')}_{file.name}"
                        dest_file = dest_dir / new_filename
                        
                        if not dest_file.exists():
                            shutil.move(str(file), str(dest_file))
                            print(f"✓ Moved: {file.name} -> {subject}/Past Papers/")
                            files_moved += 1
                        else:
                            print(f"⊘ Exists: {file.name} already in {subject}/Past Papers/")
                            files_skipped += 1
                    else:
                        print(f"? Skip: {file.name} (no matching subject)")
                        files_skipped += 1
    
    # Process special folders
    special_folders = ["Marking Schemes", "Past Papers with Answers"]
    
    for folder_name in special_folders:
        folder_path = BAR_EXAMS_DIR / folder_name
        if folder_path.exists() and folder_path.is_dir():
            print(f"\n--- Processing {folder_name} ---")
            
            for file in folder_path.glob("*"):
                if file.is_file():
                    subject = classify_file(file.name)
                    
                    if subject:
                        dest_dir = BASE_DIR / subject / "Past Papers"
                        dest_dir.mkdir(parents=True, exist_ok=True)
                        dest_file = dest_dir / file.name
                        
                        if not dest_file.exists():
                            shutil.move(str(file), str(dest_file))
                            print(f"✓ Moved: {file.name} -> {subject}/Past Papers/")
                            files_moved += 1
                        else:
                            print(f"⊘ Exists: {file.name} already in {subject}/Past Papers/")
                            files_skipped += 1
                    else:
                        print(f"? Skip: {file.name} (no matching subject)")
                        files_skipped += 1
    
    print()
    print("=" * 60)
    print(f"SUMMARY: {files_moved} files moved, {files_skipped} files skipped")
    print("=" * 60)

if __name__ == "__main__":
    os.chdir(BASE_DIR)
    process_bar_exams()
