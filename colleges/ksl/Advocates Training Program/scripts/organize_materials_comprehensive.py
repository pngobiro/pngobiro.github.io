#!/usr/bin/env python3
"""
Comprehensive ATP Materials Organization Script
This script helps organize ATP course materials into proper Books, Notes, and Past Papers folders.
"""

import os
import shutil
import re
from pathlib import Path

def get_file_category(filename):
    """
    Determine the appropriate category for a file based on its name and content type.
    Returns: 'books', 'notes', or 'past_papers'
    """
    filename_lower = filename.lower()
    
    # Past Papers indicators
    past_paper_indicators = [
        r'\b(19|20)\d{2}\b',  # Years (1900-2099)
        'past paper', 'exam', 'july', 'november', 'march', 'october', 'april',
        'marking scheme', 'revision chart', 'atp revision',
        r'july_\d{4}', r'november_\d{4}', r'march_\d{4}', r'october_\d{4}',
        'per topic 2008', 'best performed'
    ]
    
    # Books indicators (authoritative texts, acts, codes, handbooks)
    book_indicators = [
        'act', 'code', 'rules', 'handbook', 'commentary', 'procedure',
        'cap ', 'chapter', 'statute', 'law of', 'essentials of',
        'bench book', 'legal notice', 'penal code', 'criminal procedure code',
        'civil procedure', 'succession act', 'probate', 'administration',
        'judicial review by', 'course guideline', 'procedure in the law'
    ]
    
    # Check for past papers first (most specific)
    for indicator in past_paper_indicators:
        if re.search(indicator, filename_lower):
            return 'past_papers'
    
    # Check for books (authoritative sources)
    for indicator in book_indicators:
        if indicator in filename_lower:
            return 'books'
    
    # Everything else goes to notes (lecture notes, assignments, samples, etc.)
    return 'notes'

def should_move_file(filepath, current_folder):
    """
    Determine if a file should be moved based on its current location and proper category.
    """
    filename = os.path.basename(filepath)
    proper_category = get_file_category(filename)
    
    # Map folder names to categories
    folder_mapping = {
        'books': 'books',
        'notes': 'notes', 
        'past papers': 'past_papers'
    }
    
    current_category = folder_mapping.get(current_folder.lower())
    
    return proper_category != current_category, proper_category

def organize_subject_folder(subject_path):
    """
    Organize files within a single subject folder.
    """
    print(f"\n=== Organizing {os.path.basename(subject_path)} ===")
    
    moves_made = []
    
    # Check each subfolder
    for subfolder in ['Books', 'Notes', 'Past Papers']:
        subfolder_path = os.path.join(subject_path, subfolder)
        if not os.path.exists(subfolder_path):
            continue
            
        print(f"\nChecking {subfolder} folder...")
        
        # Get all files in this subfolder
        for filename in os.listdir(subfolder_path):
            filepath = os.path.join(subfolder_path, filename)
            
            # Skip directories
            if os.path.isdir(filepath):
                continue
                
            # Check if file should be moved
            should_move, proper_category = should_move_file(filepath, subfolder)
            
            if should_move:
                # Map category to folder name
                category_to_folder = {
                    'books': 'Books',
                    'notes': 'Notes',
                    'past_papers': 'Past Papers'
                }
                
                target_folder = category_to_folder[proper_category]
                target_path = os.path.join(subject_path, target_folder)
                
                # Ensure target folder exists
                os.makedirs(target_path, exist_ok=True)
                
                # Create target file path
                target_filepath = os.path.join(target_path, filename)
                
                # Handle duplicate filenames
                counter = 1
                original_target = target_filepath
                while os.path.exists(target_filepath):
                    name, ext = os.path.splitext(filename)
                    target_filepath = os.path.join(target_path, f"{name}_{counter}{ext}")
                    counter += 1
                
                try:
                    shutil.move(filepath, target_filepath)
                    move_info = {
                        'file': filename,
                        'from': subfolder,
                        'to': target_folder,
                        'reason': f"File categorized as {proper_category}"
                    }
                    moves_made.append(move_info)
                    print(f"  ✓ Moved: {filename}")
                    print(f"    From: {subfolder} → To: {target_folder}")
                    
                except Exception as e:
                    print(f"  ✗ Error moving {filename}: {e}")
    
    return moves_made

def find_duplicate_files(subject_path):
    """
    Find potential duplicate files across folders within a subject.
    """
    print(f"\n=== Checking for duplicates in {os.path.basename(subject_path)} ===")
    
    all_files = {}
    duplicates = []
    
    # Collect all files
    for subfolder in ['Books', 'Notes', 'Past Papers']:
        subfolder_path = os.path.join(subject_path, subfolder)
        if not os.path.exists(subfolder_path):
            continue
            
        for filename in os.listdir(subfolder_path):
            filepath = os.path.join(subfolder_path, filename)
            if os.path.isfile(filepath):
                # Normalize filename for comparison
                normalized_name = filename.lower().replace(' ', '').replace('_', '').replace('-', '')
                
                if normalized_name in all_files:
                    duplicates.append({
                        'name': filename,
                        'locations': [all_files[normalized_name], filepath]
                    })
                else:
                    all_files[normalized_name] = filepath
    
    if duplicates:
        print("Potential duplicates found:")
        for dup in duplicates:
            print(f"  - {dup['name']}")
            for loc in dup['locations']:
                print(f"    {loc}")
    else:
        print("No obvious duplicates found.")
    
    return duplicates

def main():
    """
    Main function to organize all ATP materials.
    """
    print("ATP Materials Organization Script")
    print("=" * 50)
    
    # Get all ATP subject folders
    atp_folders = [d for d in os.listdir('.') if d.startswith('ATP ') and os.path.isdir(d)]
    atp_folders.sort()
    
    if not atp_folders:
        print("No ATP folders found in current directory.")
        return
    
    print(f"Found {len(atp_folders)} ATP subject folders:")
    for folder in atp_folders:
        print(f"  - {folder}")
    
    # Ask user what to do
    print("\nOptions:")
    print("1. Organize all subjects automatically")
    print("2. Check for duplicates only")
    print("3. Organize specific subject")
    print("4. Preview moves without executing")
    
    choice = input("\nEnter your choice (1-4): ").strip()
    
    if choice == '1':
        # Organize all subjects
        all_moves = []
        for folder in atp_folders:
            moves = organize_subject_folder(folder)
            all_moves.extend(moves)
        
        print(f"\n=== Summary ===")
        print(f"Total files moved: {len(all_moves)}")
        
        if all_moves:
            print("\nMoves made:")
            for move in all_moves:
                print(f"  {move['file']}: {move['from']} → {move['to']}")
    
    elif choice == '2':
        # Check for duplicates only
        for folder in atp_folders:
            find_duplicate_files(folder)
    
    elif choice == '3':
        # Organize specific subject
        print("\nAvailable subjects:")
        for i, folder in enumerate(atp_folders, 1):
            print(f"{i}. {folder}")
        
        try:
            subject_choice = int(input("Enter subject number: ")) - 1
            if 0 <= subject_choice < len(atp_folders):
                moves = organize_subject_folder(atp_folders[subject_choice])
                print(f"\nMoved {len(moves)} files.")
            else:
                print("Invalid choice.")
        except ValueError:
            print("Invalid input.")
    
    elif choice == '4':
        # Preview mode
        print("\n=== PREVIEW MODE (No files will be moved) ===")
        for folder in atp_folders:
            print(f"\n--- {folder} ---")
            # This would need a preview version of organize_subject_folder
            # For now, just show what would be categorized
            for subfolder in ['Books', 'Notes', 'Past Papers']:
                subfolder_path = os.path.join(folder, subfolder)
                if os.path.exists(subfolder_path):
                    print(f"\n{subfolder}:")
                    for filename in os.listdir(subfolder_path):
                        if os.path.isfile(os.path.join(subfolder_path, filename)):
                            category = get_file_category(filename)
                            current_category = subfolder.lower().replace(' ', '_')
                            if category != current_category:
                                print(f"  MOVE: {filename} → {category}")
                            else:
                                print(f"  OK: {filename}")
    
    else:
        print("Invalid choice.")

if __name__ == "__main__":
    main()