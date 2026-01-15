#!/usr/bin/env python3
"""
Categorize Past Papers into subcategories:
- Bar Exams (exam papers by year/session)
- Assignments (project work, assignments, firm work)
- Course Outlines (syllabi, course guides)
- Revision Materials (revision charts, ATP revision, marking schemes)
- Historical Materials (compiled notes from past years)
"""

import os
import shutil
from pathlib import Path

def categorize_past_paper(filename):
    """
    Categorize a past paper file into specific subcategories.
    Returns: (category, reason)
    """
    filename_lower = filename.lower()
    
    # BAR EXAMS - Actual examination papers
    exam_indicators = [
        # Date patterns for exams
        r'july_\d{4}', r'november_\d{4}', r'march_\d{4}', r'october_\d{4}', r'april_\d{4}',
        # Exam session patterns
        'july 2', 'november 2', 'march 2', 'october 2', 'april 2',
        # Exam paper indicators
        'exam', 'paper', 'bar exam'
    ]
    
    import re
    for pattern in exam_indicators:
        if re.search(pattern, filename_lower):
            # But exclude assignments and course materials
            if not any(term in filename_lower for term in ['assignment', 'project', 'course outline', 'revision']):
                return 'Bar Exams', f"Examination paper ({pattern})"
    
    # ASSIGNMENTS - Project work, assignments, firm exercises
    assignment_indicators = [
        'assignment', 'project work', 'firm ', 'class assignment',
        'project', 'firm work', 'class work', 'group work'
    ]
    
    for indicator in assignment_indicators:
        if indicator in filename_lower:
            return 'Assignments', f"Assignment/Project ({indicator})"
    
    # COURSE OUTLINES - Administrative course materials
    outline_indicators = [
        'course outline', 'syllabus', 'course guide', 'curriculum',
        'course structure', 'program outline'
    ]
    
    for indicator in outline_indicators:
        if indicator in filename_lower:
            return 'Course Outlines', f"Course administration ({indicator})"
    
    # REVISION MATERIALS - Study aids and exam prep
    revision_indicators = [
        'revision chart', 'atp revision', 'marking scheme', 'revision',
        'quick notes', 'summary', 'review', 'study guide'
    ]
    
    for indicator in revision_indicators:
        if indicator in filename_lower:
            return 'Revision Materials', f"Study aid ({indicator})"
    
    # HISTORICAL MATERIALS - Compiled materials from past years
    historical_indicators = [
        '2008 - 2011', '2008-2011', 'compiled', 'complete notes',
        'historical', 'archive'
    ]
    
    for indicator in historical_indicators:
        if indicator in filename_lower:
            return 'Historical Materials', f"Historical compilation ({indicator})"
    
    # Default to Bar Exams if it has year patterns
    if re.search(r'\b(19|20)\d{2}\b', filename_lower):
        return 'Bar Exams', "Contains year (likely exam paper)"
    
    # Default category
    return 'Other', "Uncategorized past paper"

def organize_past_papers_folder(subject_path, dry_run=True):
    """
    Organize the Past Papers folder into subcategories.
    """
    past_papers_path = os.path.join(subject_path, 'Past Papers')
    
    if not os.path.exists(past_papers_path):
        print(f"No Past Papers folder found in {subject_path}")
        return []
    
    print(f"\n{'='*60}")
    print(f"ORGANIZING PAST PAPERS: {os.path.basename(subject_path)}")
    print(f"{'='*60}")
    
    # Get all files in Past Papers folder
    files = [f for f in os.listdir(past_papers_path) 
             if os.path.isfile(os.path.join(past_papers_path, f))]
    
    if not files:
        print("No files found in Past Papers folder")
        return []
    
    # Categorize files
    categories = {}
    moves_to_make = []
    
    for filename in files:
        filepath = os.path.join(past_papers_path, filename)
        category, reason = categorize_past_paper(filename)
        
        if category not in categories:
            categories[category] = []
        categories[category].append((filename, reason))
        
        # Create target path
        target_folder = os.path.join(past_papers_path, category)
        target_path = os.path.join(target_folder, filename)
        
        moves_to_make.append({
            'file': filename,
            'from_path': filepath,
            'to_folder': category,
            'to_path': target_path,
            'reason': reason
        })
    
    # Show categorization summary
    print(f"\nCategorization Summary:")
    print(f"Total files: {len(files)}")
    
    for category, file_list in sorted(categories.items()):
        print(f"\n{category}: {len(file_list)} files")
        for filename, reason in sorted(file_list)[:5]:  # Show first 5
            print(f"  • {filename} - {reason}")
        if len(file_list) > 5:
            print(f"  ... and {len(file_list) - 5} more")
    
    # Execute moves if not dry run
    if not dry_run:
        print(f"\n--- Creating folders and moving files ---")
        
        for move in moves_to_make:
            # Create target folder
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
    
    return moves_to_make

def main():
    """
    Main function to categorize past papers across all ATP subjects.
    """
    print("ATP Past Papers Categorization Script")
    print("=" * 50)
    
    # Get all ATP folders
    atp_folders = [d for d in os.listdir('.') if d.startswith('ATP ') and os.path.isdir(d)]
    atp_folders.sort()
    
    if not atp_folders:
        print("No ATP folders found.")
        return
    
    print(f"Found {len(atp_folders)} ATP subjects:")
    for folder in atp_folders:
        print(f"  - {folder}")
    
    print("\nOptions:")
    print("1. Preview categorization (dry run)")
    print("2. Categorize all subjects")
    print("3. Categorize specific subject")
    print("4. Show categorization rules")
    
    choice = input("\nEnter choice (1-4): ").strip()
    
    if choice == '1':
        # Dry run for all subjects
        print("\n" + "="*60)
        print("PREVIEW MODE - No files will be moved")
        print("="*60)
        
        total_moves = 0
        for folder in atp_folders:
            moves = organize_past_papers_folder(folder, dry_run=True)
            total_moves += len(moves)
        
        print(f"\n{'='*60}")
        print(f"SUMMARY: {total_moves} files would be categorized")
        print(f"{'='*60}")
    
    elif choice == '2':
        # Categorize all subjects
        response = input("This will create subfolders and move files. Continue? (y/n): ").strip().lower()
        if response in ['y', 'yes']:
            total_moves = 0
            for folder in atp_folders:
                moves = organize_past_papers_folder(folder, dry_run=False)
                total_moves += len(moves)
            
            print(f"\n{'='*60}")
            print(f"COMPLETED: {total_moves} files categorized")
            print(f"{'='*60}")
    
    elif choice == '3':
        # Specific subject
        print("\nSubjects:")
        for i, folder in enumerate(atp_folders, 1):
            print(f"{i}. {folder}")
        
        try:
            idx = int(input("Enter subject number: ")) - 1
            if 0 <= idx < len(atp_folders):
                dry = input("Preview only? (y/n): ").strip().lower() in ['y', 'yes']
                moves = organize_past_papers_folder(atp_folders[idx], dry_run=dry)
                print(f"\n{len(moves)} files {'would be' if dry else 'were'} categorized")
        except ValueError:
            print("Invalid input")
    
    elif choice == '4':
        # Show categorization rules
        print("\n" + "="*60)
        print("PAST PAPERS CATEGORIZATION RULES")
        print("="*60)
        print()
        print("📋 BAR EXAMS:")
        print("  • Files with exam date patterns (July_2019_, November_2018_)")
        print("  • Files containing 'exam', 'paper' (but not assignments)")
        print("  • Files with years that aren't course materials")
        print()
        print("📝 ASSIGNMENTS:")
        print("  • Files with 'assignment', 'project work', 'firm'")
        print("  • Class assignments and group work")
        print("  • Student project submissions")
        print()
        print("📚 COURSE OUTLINES:")
        print("  • Files with 'course outline', 'syllabus'")
        print("  • Administrative course materials")
        print("  • Curriculum and program guides")
        print()
        print("📖 REVISION MATERIALS:")
        print("  • Files with 'revision chart', 'ATP revision'")
        print("  • Marking schemes and study guides")
        print("  • Quick notes and summaries")
        print()
        print("🗂️ HISTORICAL MATERIALS:")
        print("  • Compiled materials (2008-2011)")
        print("  • Complete notes from past years")
        print("  • Archived course materials")
        print()
        print("❓ OTHER:")
        print("  • Files that don't fit other categories")
        print("  • Miscellaneous past papers")

if __name__ == "__main__":
    main()