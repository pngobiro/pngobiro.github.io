#!/usr/bin/env python3
"""
Organize the "Other Materials" folder by moving files to their appropriate ATP subject folders.
This script will:
1. Move revision charts to the appropriate subject's Past Papers/Revision Materials
2. Move oral exam materials to a dedicated Oral Exams folder
3. Move subject-specific materials to their respective ATP folders
"""

import os
import shutil
from pathlib import Path

def identify_subject_from_filename(filename):
    """
    Identify which ATP subject a file belongs to based on filename.
    Returns: (atp_folder, category) or None
    """
    filename_lower = filename.lower()
    
    # Subject mappings
    subject_mappings = {
        'civil': ('ATP 100 - Civil Litigation', 'civil litigation', 'civil procedure', 'civil'),
        'criminal': ('ATP 101 - Criminal Litigation', 'criminal litigation'),
        'probate': ('ATP 102 - Probate and Administration', 'probate', 'succession'),
        'legal writing': ('ATP 103 - Legal Writing and Drafting', 'legal writing', 'drafting'),
        'trial advocacy': ('ATP 104 - Trial Advocacy', 'trial advocacy', 'advocacy'),
        'professional ethics': ('ATP 105 - Professional Ethics', 'professional ethics', 'ethics'),
        'legal practice': ('ATP 106 - Legal Practice Management', 'legal practice', 'practice management'),
        'conveyancing': ('ATP 107 - Conveyancing', 'conveyancing'),
        'commercial': ('ATP 108 - Commercial Transactions', 'commercial', 'commercial transactions')
    }
    
    # Check for subject keywords in filename
    for subject_key, keywords in subject_mappings.items():
        atp_folder = keywords[0]  # First item is the folder name
        search_terms = keywords[1:] if len(keywords) > 1 else [subject_key]
        
        for term in search_terms:
            if term in filename_lower:
                # Determine category
                if 'revision chart' in filename_lower:
                    return (atp_folder, 'Revision Materials')
                elif 'oral' in filename_lower:
                    return (atp_folder, 'Oral Materials')
                else:
                    return (atp_folder, 'Notes')
    
    # Special cases for commercial law terms
    commercial_terms = ['company', 'commercial agreements', 'mergers', 'acquisitions', 
                       'insolvency', 'bankruptcy', 'movable property', 'tax']
    
    for term in commercial_terms:
        if term in filename_lower:
            if 'revision chart' in filename_lower:
                return ('ATP 108 - Commercial Transactions', 'Revision Materials')
            else:
                return ('ATP 108 - Commercial Transactions', 'Notes')
    
    return None

def organize_other_materials(dry_run=True):
    """
    Organize the Other Materials folder.
    """
    other_materials_path = 'Other Materials'
    
    if not os.path.exists(other_materials_path):
        print("Other Materials folder not found.")
        return
    
    print("🗂️  ORGANIZING OTHER MATERIALS FOLDER")
    print("=" * 50)
    
    moves_to_make = []
    oral_materials = []
    unassigned_files = []
    
    # Process main folder files
    for filename in os.listdir(other_materials_path):
        filepath = os.path.join(other_materials_path, filename)
        
        # Skip directories for now
        if os.path.isdir(filepath):
            continue
            
        print(f"\n📄 Analyzing: {filename}")
        
        # Check if it's oral-related
        if 'oral' in filename.lower() or 'jsc interview' in filename.lower():
            oral_materials.append({
                'file': filename,
                'from_path': filepath,
                'reason': 'Oral exam material'
            })
            print(f"   → ORAL MATERIALS (Oral exam material)")
            continue
        
        # Try to identify subject
        subject_info = identify_subject_from_filename(filename)
        
        if subject_info:
            atp_folder, category = subject_info
            
            # Create target path
            if category == 'Revision Materials':
                target_folder = os.path.join(atp_folder, 'Past Papers', 'Revision Materials')
            else:
                target_folder = os.path.join(atp_folder, category)
            
            target_path = os.path.join(target_folder, filename)
            
            moves_to_make.append({
                'file': filename,
                'from_path': filepath,
                'to_folder': atp_folder,
                'to_subfolder': category,
                'to_path': target_path,
                'reason': f"Subject-specific material"
            })
            
            print(f"   → {atp_folder} / {category}")
        else:
            unassigned_files.append(filename)
            print(f"   → UNASSIGNED (couldn't identify subject)")
    
    # Process Orals subfolder
    orals_folder = os.path.join(other_materials_path, 'Orals')
    if os.path.exists(orals_folder):
        print(f"\n📁 Processing Orals subfolder...")
        
        for filename in os.listdir(orals_folder):
            filepath = os.path.join(orals_folder, filename)
            
            if os.path.isfile(filepath):
                oral_materials.append({
                    'file': filename,
                    'from_path': filepath,
                    'reason': 'From Orals subfolder'
                })
    
    # Show summary
    print(f"\n{'='*50}")
    print(f"📊 ORGANIZATION SUMMARY")
    print(f"{'='*50}")
    print(f"Files to move to ATP subjects: {len(moves_to_make)}")
    print(f"Oral materials to consolidate: {len(oral_materials)}")
    print(f"Unassigned files: {len(unassigned_files)}")
    
    # Show moves by subject
    if moves_to_make:
        print(f"\n📋 MOVES BY SUBJECT:")
        moves_by_subject = {}
        for move in moves_to_make:
            subject = move['to_folder']
            if subject not in moves_by_subject:
                moves_by_subject[subject] = []
            moves_by_subject[subject].append(move)
        
        for subject in sorted(moves_by_subject.keys()):
            moves = moves_by_subject[subject]
            print(f"\n  {subject}: {len(moves)} files")
            for move in moves[:3]:  # Show first 3
                print(f"    • {move['file']} → {move['to_subfolder']}")
            if len(moves) > 3:
                print(f"    ... and {len(moves) - 3} more")
    
    # Show oral materials
    if oral_materials:
        print(f"\n🎤 ORAL MATERIALS: {len(oral_materials)} files")
        for oral in oral_materials[:5]:  # Show first 5
            print(f"  • {oral['file']}")
        if len(oral_materials) > 5:
            print(f"  ... and {len(oral_materials) - 5} more")
    
    # Show unassigned
    if unassigned_files:
        print(f"\n❓ UNASSIGNED FILES: {len(unassigned_files)} files")
        for file in unassigned_files:
            print(f"  • {file}")
    
    # Execute moves if not dry run
    if not dry_run:
        print(f"\n{'='*50}")
        print(f"🚀 EXECUTING MOVES")
        print(f"{'='*50}")
        
        # Create Oral Exams folder
        oral_exams_folder = 'Oral Exams'
        if oral_materials:
            os.makedirs(oral_exams_folder, exist_ok=True)
            print(f"\n📁 Created: {oral_exams_folder}")
            
            for oral in oral_materials:
                target_path = os.path.join(oral_exams_folder, oral['file'])
                
                # Handle duplicates
                counter = 1
                while os.path.exists(target_path):
                    name, ext = os.path.splitext(oral['file'])
                    target_path = os.path.join(oral_exams_folder, f"{name}_{counter}{ext}")
                    counter += 1
                
                try:
                    shutil.move(oral['from_path'], target_path)
                    print(f"  ✓ Moved: {oral['file']}")
                except Exception as e:
                    print(f"  ✗ Error moving {oral['file']}: {e}")
        
        # Move subject-specific files
        for move in moves_to_make:
            # Create target directory
            target_dir = os.path.dirname(move['to_path'])
            os.makedirs(target_dir, exist_ok=True)
            
            # Handle duplicates
            target_path = move['to_path']
            counter = 1
            while os.path.exists(target_path):
                name, ext = os.path.splitext(move['file'])
                target_path = os.path.join(target_dir, f"{name}_{counter}{ext}")
                counter += 1
            
            try:
                shutil.move(move['from_path'], target_path)
                print(f"  ✓ Moved: {move['file']} → {move['to_folder']}")
            except Exception as e:
                print(f"  ✗ Error moving {move['file']}: {e}")
        
        # Clean up empty Orals folder if it exists
        orals_folder = os.path.join(other_materials_path, 'Orals')
        if os.path.exists(orals_folder) and not os.listdir(orals_folder):
            try:
                os.rmdir(orals_folder)
                print(f"  ✓ Removed empty Orals folder")
            except:
                pass
        
        # Check if Other Materials folder is now empty (except for unassigned files)
        remaining_files = [f for f in os.listdir(other_materials_path) 
                          if os.path.isfile(os.path.join(other_materials_path, f))]
        
        if not remaining_files:
            print(f"\n🎉 Other Materials folder is now empty and organized!")
        else:
            print(f"\n📝 {len(remaining_files)} files remain in Other Materials (unassigned)")
    
    return {
        'moves_to_make': moves_to_make,
        'oral_materials': oral_materials,
        'unassigned_files': unassigned_files
    }

def main():
    """
    Main function to organize Other Materials.
    """
    print("OTHER MATERIALS FOLDER ORGANIZER")
    print("=" * 40)
    print("This script will:")
    print("• Move revision charts to appropriate ATP subject folders")
    print("• Consolidate oral exam materials into an 'Oral Exams' folder")
    print("• Move subject-specific files to their ATP folders")
    print("• Leave unidentifiable files in Other Materials")
    print()
    
    print("Options:")
    print("1. Preview organization (dry run)")
    print("2. Execute organization")
    
    choice = input("\nEnter choice (1-2): ").strip()
    
    if choice == '1':
        print("\n" + "="*50)
        print("PREVIEW MODE - No files will be moved")
        print("="*50)
        organize_other_materials(dry_run=True)
    
    elif choice == '2':
        response = input("This will move files from Other Materials. Continue? (y/n): ").strip().lower()
        if response in ['y', 'yes']:
            organize_other_materials(dry_run=False)
        else:
            print("Organization cancelled.")
    
    else:
        print("Invalid choice.")

if __name__ == "__main__":
    main()