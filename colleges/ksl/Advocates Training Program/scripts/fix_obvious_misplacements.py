#!/usr/bin/env python3
"""
Quick fix for obvious file misplacements in ATP folders.
This script addresses the most common organizational issues.
"""

import os
import shutil
from pathlib import Path

def fix_obvious_misplacements():
    """
    Fix the most obvious file misplacements across all ATP folders.
    """
    print("Fixing obvious file misplacements...")
    
    moves_made = []
    
    # Get all ATP folders
    atp_folders = [d for d in os.listdir('.') if d.startswith('ATP ') and os.path.isdir(d)]
    
    for folder in atp_folders:
        print(f"\nChecking {folder}...")
        
        # Define the three main subfolders
        books_path = os.path.join(folder, 'Books')
        notes_path = os.path.join(folder, 'Notes')
        papers_path = os.path.join(folder, 'Past Papers')
        
        # Ensure all folders exist
        for path in [books_path, notes_path, papers_path]:
            os.makedirs(path, exist_ok=True)
        
        # Check Past Papers folder for non-exam files
        if os.path.exists(papers_path):
            for filename in os.listdir(papers_path):
                filepath = os.path.join(papers_path, filename)
                if os.path.isfile(filepath):
                    filename_lower = filename.lower()
                    
                    # Files that should be in Notes instead of Past Papers
                    should_be_notes = any([
                        'revision chart' in filename_lower and 'final' in filename_lower,
                        'assignment' in filename_lower and not any(year in filename_lower for year in ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024']),
                        'compiled' in filename_lower and 'litigation' in filename_lower,
                        'applications under' in filename_lower,
                        'impacts of' in filename_lower,
                        'joinder vs enjoinder' in filename_lower,
                        'interested parties' in filename_lower,
                        'jurisdiction atp' in filename_lower,
                        filename_lower.startswith('all civil drafting') and not ('2008' in filename_lower or '2009' in filename_lower),
                        'specimen charges' in filename_lower,
                        'pre trial preparation' in filename_lower and 'project' in filename_lower
                    ])
                    
                    # Files that should be in Books instead of Past Papers  
                    should_be_books = any([
                        'appellate jurisdiction act' in filename_lower,
                        'cap9.pdf' in filename_lower,
                        'subsidiary' in filename_lower and 'act' in filename_lower
                    ])
                    
                    if should_be_notes:
                        target_path = os.path.join(notes_path, filename)
                        try:
                            shutil.move(filepath, target_path)
                            moves_made.append(f"{folder}: {filename} (Past Papers → Notes)")
                            print(f"  ✓ Moved to Notes: {filename}")
                        except Exception as e:
                            print(f"  ✗ Error moving {filename}: {e}")
                    
                    elif should_be_books:
                        target_path = os.path.join(books_path, filename)
                        try:
                            shutil.move(filepath, target_path)
                            moves_made.append(f"{folder}: {filename} (Past Papers → Books)")
                            print(f"  ✓ Moved to Books: {filename}")
                        except Exception as e:
                            print(f"  ✗ Error moving {filename}: {e}")
        
        # Check Notes folder for files that should be in Books
        if os.path.exists(notes_path):
            for filename in os.listdir(notes_path):
                filepath = os.path.join(notes_path, filename)
                if os.path.isfile(filepath):
                    filename_lower = filename.lower()
                    
                    # Files that should be in Books
                    should_be_books = any([
                        filename_lower.endswith('act.pdf'),
                        filename_lower.endswith('code.pdf'),
                        filename_lower.endswith('rules.pdf'),
                        'civil procedure rules' in filename_lower,
                        'criminal procedure code' in filename_lower,
                        'penal code' in filename_lower,
                        'succession act' in filename_lower,
                        'appellate jurisdiction' in filename_lower,
                        'bench book' in filename_lower,
                        'commentary on' in filename_lower,
                        'essentials of' in filename_lower and ('procedure' in filename_lower or 'criminal' in filename_lower),
                        'handbook' in filename_lower and ('criminal' in filename_lower or 'civil' in filename_lower),
                        'judicial review by' in filename_lower,
                        'procedure in the law' in filename_lower
                    ])
                    
                    if should_be_books:
                        target_path = os.path.join(books_path, filename)
                        # Check if file already exists in Books
                        if not os.path.exists(target_path):
                            try:
                                shutil.move(filepath, target_path)
                                moves_made.append(f"{folder}: {filename} (Notes → Books)")
                                print(f"  ✓ Moved to Books: {filename}")
                            except Exception as e:
                                print(f"  ✗ Error moving {filename}: {e}")
                        else:
                            print(f"  ! File already exists in Books: {filename}")
        
        # Check Books folder for files that should be in Notes
        if os.path.exists(books_path):
            for filename in os.listdir(books_path):
                filepath = os.path.join(books_path, filename)
                if os.path.isfile(filepath):
                    filename_lower = filename.lower()
                    
                    # Files that should be in Notes (lecture materials, presentations)
                    should_be_notes = any([
                        filename_lower.endswith('.pptx'),
                        filename_lower.endswith('.ppt'),
                        'lecture' in filename_lower,
                        'summary' in filename_lower and not ('act' in filename_lower or 'code' in filename_lower),
                        'identification rules 2018.docx' in filename_lower  # This is a working document, not the official rules
                    ])
                    
                    if should_be_notes:
                        target_path = os.path.join(notes_path, filename)
                        # Check if file already exists in Notes
                        if not os.path.exists(target_path):
                            try:
                                shutil.move(filepath, target_path)
                                moves_made.append(f"{folder}: {filename} (Books → Notes)")
                                print(f"  ✓ Moved to Notes: {filename}")
                            except Exception as e:
                                print(f"  ✗ Error moving {filename}: {e}")
                        else:
                            print(f"  ! File already exists in Notes: {filename}")
    
    print(f"\n=== Summary ===")
    print(f"Total files moved: {len(moves_made)}")
    
    if moves_made:
        print("\nFiles moved:")
        for move in moves_made:
            print(f"  - {move}")
    
    return moves_made

def main():
    print("ATP Materials Quick Fix Script")
    print("=" * 40)
    print("This script will fix the most obvious file misplacements.")
    print("It will move files between Books, Notes, and Past Papers folders")
    print("based on clear indicators in filenames.\n")
    
    response = input("Do you want to proceed? (y/n): ").strip().lower()
    
    if response == 'y' or response == 'yes':
        moves = fix_obvious_misplacements()
        print(f"\nCompleted! {len(moves)} files were reorganized.")
    else:
        print("Operation cancelled.")

if __name__ == "__main__":
    main()