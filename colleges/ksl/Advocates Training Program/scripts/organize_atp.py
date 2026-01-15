#!/usr/bin/env python3
"""
Script to organize ATP files by subject into Notes, Past Papers, and Books folders.
"""

import os
import shutil
from pathlib import Path

# Base directory
BASE_DIR = Path("/home/ngobiro/projects/pngobiro.github.io/colleges/ksl/Advocates Training Program")

# Subject mappings
SUBJECTS = {
    "ATP 100": "Civil Litigation",
    "ATP 101": "Criminal Litigation",
    "ATP 102": "Probate and Administration",
    "ATP 103": "Legal Writing and Drafting",
    "ATP 104": "Trial Advocacy",
    "ATP 105": "Professional Ethics",
    "ATP 106": "Legal Practice Management",
    "ATP 107": "Conveyancing",
    "ATP 108": "Commercial Transactions"
}

# File type mappings
NOTE_KEYWORDS = ["notes", "lecture", "course outline", "outline", "compiled", "summary", "guide", "handbook", "manual"]
PAPER_KEYWORDS = ["revision", "past paper", "question", "exam", "test", "project", "assignment", "practice question"]
BOOK_KEYWORDS = ["book", "textbook", "commentary", "principles", "handbook", "manual"]

def classify_file(filename):
    """Classify a file based on its name."""
    filename_lower = filename.lower()

    # Check for books first
    for keyword in BOOK_KEYWORDS:
        if keyword in filename_lower:
            return "Books"

    # Check for past papers
    for keyword in PAPER_KEYWORDS:
        if keyword in filename_lower:
            return "Past Papers"

    # Check for notes
    for keyword in NOTE_KEYWORDS:
        if keyword in filename_lower:
            return "Notes"

    # Default to Notes for general files
    return "Notes"

def organize_civil_litigation():
    """Organize Civil Litigation files."""
    subject_code = "ATP 100"
    subject_name = "Civil Litigation"
    target_dir = BASE_DIR / f"{subject_code} - {subject_name}"

    print(f"Organizing {subject_name}...")

    # From DRIVE 2 - KSL
    source_dir = BASE_DIR / "DRIVE 2/Kenya School of Law (KSL)-20251229T064315Z-1-001/Kenya School of Law (KSL)/ATP 100-Civil Litigation"

    if source_dir.exists():
        for file in source_dir.glob("*"):
            if file.is_file():
                classification = classify_file(file.name)
                dest_dir = target_dir / classification
                dest_dir.mkdir(parents=True, exist_ok=True)
                dest_file = dest_dir / file.name

                if not dest_file.exists():
                    shutil.copy2(file, dest_file)
                    print(f"  Copied: {file.name} -> {classification}")

    # From MKO Drive - Summary Notes
    mko_summary = BASE_DIR / "DRIVE 1- (MKO)/merged_output/MKO Drive/Summary Notes"
    if mko_summary.exists():
        file = mko_summary / "Civil Litigation - ATP Revision .pdf"
        if file.exists():
            dest_dir = target_dir / "Past Papers"
            dest_dir.mkdir(parents=True, exist_ok=True)
            shutil.copy2(file, dest_dir / file.name)
            print(f"  Copied: {file.name} -> Past Papers")

    # From MKO Drive - Quick Notes
    mko_quick = BASE_DIR / "DRIVE 1- (MKO)/merged_output/MKO Drive/MKO Quick Notes"
    if mko_quick.exists():
        file = mko_quick / "MKO Civil Quick Notes.pdf"
        if file.exists():
            dest_dir = target_dir / "Notes"
            dest_dir.mkdir(parents=True, exist_ok=True)
            shutil.copy2(file, dest_dir / file.name)
            print(f"  Copied: {file.name} -> Notes")

    # From MKO Drive - Comprehensive Notes
    mko_comprehensive = BASE_DIR / "DRIVE 1- (MKO)/merged_output/MKO Drive/Comprehensive Notes/Civil"
    if mko_comprehensive.exists():
        dest_dir = target_dir / "Notes"
        dest_dir.mkdir(parents=True, exist_ok=True)
        for file in mko_comprehensive.glob("*"):
            if file.is_file():
                dest_file = dest_dir / file.name
                if not dest_file.exists():
                    shutil.copy2(file, dest_file)
                    print(f"  Copied: {file.name} -> Notes")

    # From MKO Drive - CLE Past Papers
    mko_papers = BASE_DIR / "DRIVE 1- (MKO)/merged_output/MKO Drive/CLE Past Papers/Civil Litigation"
    if mko_papers.exists():
        dest_dir = target_dir / "Past Papers"
        dest_dir.mkdir(parents=True, exist_ok=True)
        for file in mko_papers.glob("*"):
            if file.is_file():
                dest_file = dest_dir / file.name
                if not dest_file.exists():
                    shutil.copy2(file, dest_file)
                    print(f"  Copied: {file.name} -> Past Papers")

    # From 9 PS Revision
    ps_revision = BASE_DIR / "DRIVE 4/9 PS REVISION-20251229T071605Z-1-001/9 PS REVISION/CIVIL LITIGATION"
    if ps_revision.exists():
        dest_dir = target_dir / "Past Papers"
        dest_dir.mkdir(parents=True, exist_ok=True)
        for file in ps_revision.glob("*"):
            if file.is_file():
                dest_file = dest_dir / file.name
                if not dest_file.exists():
                    shutil.copy2(file, dest_file)
                    print(f"  Copied: {file.name} -> Past Papers")

    # Project Work
    project_dir = BASE_DIR / "DRIVE 2/Kenya School of Law (KSL)-20251229T064315Z-1-001/Kenya School of Law (KSL)/Project Work"
    if project_dir.exists():
        dest_dir = target_dir / "Past Papers"
        dest_dir.mkdir(parents=True, exist_ok=True)
        for file in project_dir.glob("**/ATP 100*"):
            if file.is_file():
                dest_file = dest_dir / file.name
                if not dest_file.exists():
                    shutil.copy2(file, dest_file)
                    print(f"  Copied: {file.name} -> Past Papers")

    print(f"✓ {subject_name} organized!\n")

def organize_criminal_litigation():
    """Organize Criminal Litigation files."""
    subject_code = "ATP 101"
    subject_name = "Criminal Litigation"
    target_dir = BASE_DIR / f"{subject_code} - {subject_name}"

    print(f"Organizing {subject_name}...")

    # From DRIVE 2 - KSL
    source_dir = BASE_DIR / "DRIVE 2/Kenya School of Law (KSL)-20251229T064315Z-1-001/Kenya School of Law (KSL)/ATP 101-Criminal Litigation"

    if source_dir.exists():
        for file in source_dir.glob("*"):
            if file.is_file():
                classification = classify_file(file.name)
                dest_dir = target_dir / classification
                dest_dir.mkdir(parents=True, exist_ok=True)
                dest_file = dest_dir / file.name

                if not dest_file.exists():
                    shutil.copy2(file, dest_file)
                    print(f"  Copied: {file.name} -> {classification}")

    # From MKO Drive
    mko_summary = BASE_DIR / "DRIVE 1- (MKO)/merged_output/MKO Drive/Summary Notes"
    if mko_summary.exists():
        file = mko_summary / "Criminal Litigation - ATP Revision .pdf"
        if file.exists():
            dest_dir = target_dir / "Past Papers"
            dest_dir.mkdir(parents=True, exist_ok=True)
            shutil.copy2(file, dest_dir / file.name)
            print(f"  Copied: {file.name} -> Past Papers")

    mko_quick = BASE_DIR / "DRIVE 1- (MKO)/merged_output/MKO Drive/MKO Quick Notes"
    if mko_quick.exists():
        file = mko_quick / "MKO Criminal Quick Notes.pdf"
        if file.exists():
            dest_dir = target_dir / "Notes"
            dest_dir.mkdir(parents=True, exist_ok=True)
            shutil.copy2(file, dest_dir / file.name)
            print(f"  Copied: {file.name} -> Notes")

    mko_comprehensive = BASE_DIR / "DRIVE 1- (MKO)/merged_output/MKO Drive/Comprehensive Notes/Criminal"
    if mko_comprehensive.exists():
        dest_dir = target_dir / "Notes"
        dest_dir.mkdir(parents=True, exist_ok=True)
        for file in mko_comprehensive.glob("*"):
            if file.is_file():
                dest_file = dest_dir / file.name
                if not dest_file.exists():
                    shutil.copy2(file, dest_file)
                    print(f"  Copied: {file.name} -> Notes")

    mko_papers = BASE_DIR / "DRIVE 1- (MKO)/merged_output/MKO Drive/CLE Past Papers/Criminal Litigation"
    if mko_papers.exists():
        dest_dir = target_dir / "Past Papers"
        dest_dir.mkdir(parents=True, exist_ok=True)
        for file in mko_papers.glob("*"):
            if file.is_file():
                dest_file = dest_dir / file.name
                if not dest_file.exists():
                    shutil.copy2(file, dest_file)
                    print(f"  Copied: {file.name} -> Past Papers")

    # From 9 PS Revision
    ps_revision = BASE_DIR / "DRIVE 4/9 PS REVISION-20251229T071605Z-1-001/9 PS REVISION/CRIMINAL LITIGATION"
    if ps_revision.exists():
        dest_dir = target_dir / "Past Papers"
        dest_dir.mkdir(parents=True, exist_ok=True)
        for file in ps_revision.glob("*"):
            if file.is_file():
                dest_file = dest_dir / file.name
                if not dest_file.exists():
                    shutil.copy2(file, dest_file)
                    print(f"  Copied: {file.name} -> Past Papers")

    print(f"✓ {subject_name} organized!\n")

def organize_subject(subject_code, subject_name, source_patterns):
    """Generic function to organize a subject."""
    target_dir = BASE_DIR / f"{subject_code} - {subject_name}"

    print(f"Organizing {subject_name}...")

    for pattern in source_patterns:
        source_dir = BASE_DIR / pattern

        if source_dir.exists():
            for file in source_dir.glob("*"):
                if file.is_file():
                    classification = classify_file(file.name)
                    dest_dir = target_dir / classification
                    dest_dir.mkdir(parents=True, exist_ok=True)
                    dest_file = dest_dir / file.name

                    if not dest_file.exists():
                        shutil.copy2(file, dest_file)
                        print(f"  Copied: {file.name} -> {classification}")

    # Check MKO Drive for this subject
    mko_summary = BASE_DIR / "DRIVE 1- (MKO)/merged_output/MKO Drive/Summary Notes"
    if mko_summary.exists():
        file = mko_summary / f"{subject_name} - ATP Revision .pdf"
        if file.exists():
            dest_dir = target_dir / "Past Papers"
            dest_dir.mkdir(parents=True, exist_ok=True)
            shutil.copy2(file, dest_dir / file.name)
            print(f"  Copied: {file.name} -> Past Papers")

    mko_quick = BASE_DIR / "DRIVE 1- (MKO)/merged_output/MKO Drive/MKO Quick Notes"
    if mko_quick.exists():
        file = mko_quick / f"MKO {subject_name.split()[0]} Quick Notes.pdf"
        if file.exists():
            dest_dir = target_dir / "Notes"
            dest_dir.mkdir(parents=True, exist_ok=True)
            shutil.copy2(file, dest_dir / file.name)
            print(f"  Copied: {file.name} -> Notes")

    # Check 9 PS Revision
    ps_revision = BASE_DIR / "DRIVE 4/9 PS REVISION-20251229T071605Z-1-001/9 PS REVISION"
    if ps_revision.exists():
        subject_folder = ps_revision / subject_name.upper().replace(" AND ADMINISTRATION", " AND ADMIN").replace(" AND DRAFTING", "")
        if not subject_folder.exists():
            subject_folder = ps_revision / subject_name.upper()
        if subject_folder.exists():
            dest_dir = target_dir / "Past Papers"
            dest_dir.mkdir(parents=True, exist_ok=True)
            for file in subject_folder.glob("*"):
                if file.is_file():
                    dest_file = dest_dir / file.name
                    if not dest_file.exists():
                        shutil.copy2(file, dest_file)
                        print(f"  Copied: {file.name} -> Past Papers")

    print(f"✓ {subject_name} organized!\n")

def main():
    """Main function to organize all subjects."""
    os.chdir(BASE_DIR)

    print("=" * 60)
    print("ORGANIZING ATP FILES BY SUBJECT")
    print("=" * 60)
    print()

    # Organize each subject
    organize_civil_litigation()
    organize_criminal_litigation()

    # Probate and Administration
    organize_subject(
        "ATP 102",
        "Probate and Administration",
        ["DRIVE 2/Kenya School of Law (KSL)-20251229T064315Z-1-001/Kenya School of Law (KSL)/ATP 102-Probate & Administration"]
    )

    # Legal Writing and Drafting
    organize_subject(
        "ATP 103",
        "Legal Writing and Drafting",
        ["DRIVE 2/Kenya School of Law (KSL)-20251229T064315Z-1-001/Kenya School of Law (KSL)/ATP 103-Legal Writing and Drafting"]
    )

    # Trial Advocacy
    organize_subject(
        "ATP 104",
        "Trial Advocacy",
        ["DRIVE 2/Kenya School of Law (KSL)-20251229T064315Z-1-001/Kenya School of Law (KSL)/ATP 104-Trial Advocacy"]
    )

    # Professional Ethics
    organize_subject(
        "ATP 105",
        "Professional Ethics",
        ["DRIVE 2/Kenya School of Law (KSL)-20251229T064315Z-1-001/Kenya School of Law (KSL)/ATP 105-Professional Ethics"]
    )

    # Legal Practice Management
    organize_subject(
        "ATP 106",
        "Legal Practice Management",
        ["DRIVE 2/Kenya School of Law (KSL)-20251229T064315Z-1-001/Kenya School of Law (KSL)/ATP 106-Legal Practice Management"]
    )

    # Conveyancing
    organize_subject(
        "ATP 107",
        "Conveyancing",
        ["DRIVE 2/Kenya School of Law (KSL)-20251229T064315Z-1-001/Kenya School of Law (KSL)/ATP 107-Conveyancing"]
    )

    # Commercial Transactions
    organize_subject(
        "ATP 108",
        "Commercial Transactions",
        ["DRIVE 2/Kenya School of Law (KSL)-20251229T064315Z-1-001/Kenya School of Law (KSL)/ATP 108-Commercial Transactions"]
    )

    print("=" * 60)
    print("ORGANIZATION COMPLETE!")
    print("=" * 60)

if __name__ == "__main__":
    main()