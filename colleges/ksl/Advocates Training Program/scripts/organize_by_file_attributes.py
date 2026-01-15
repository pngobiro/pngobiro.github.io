#!/usr/bin/env python3
"""
Enhanced ATP Materials Organization Script using File Type and Size
This script uses file extensions, sizes, and naming patterns for better categorization.
"""

import os
import shutil
import re
from pathlib import Path

def get_file_size_mb(filepath):
    """Get file size in MB."""
    try:
        return os.path.getsize(filepath) / (1024 * 1024)
    except:
        return 0

def categorize_by_attributes(filename, filepath):
    """
    Categorize files using type, size, and naming patterns.
    Returns: 'books', 'notes', or 'past_papers'
    """
    filename_lower = filename.lower()
    file_ext = Path(filename).suffix.lower()
    file_size_mb = get_file_size_mb(filepath)
    
    # File type indicators
    presentation_types = ['.pptx', '.ppt']
    document_types = ['.pdf', '.doc', '.docx']
    
    # Size-based categorization (rough guidelines)
    # Large files (>10MB) are often comprehensive books/textbooks
    # Medium files (1-10MB) could be notes, papers, or smaller books
    # Small files (<1MB) are often assignments, forms, templates
    
    print(f"  Analyzing: {filename}")
    print(f"    Type: {file_ext}, Size: {file_size_mb:.2f}MB")
    
    # BOOKS - Authoritative sources, large reference materials
    book_indicators = [
        # Official legal documents
        ('act', 'Official legal act'),
        ('code', 'Legal code'),
        ('rules', 'Official rules'),
        ('cap ', 'Chapter/Cap reference'),
        ('statute', 'Legal statute'),
        
        # Authoritative texts (often larger files)
        ('handbook', 'Official handbook'),
        ('commentary', 'Legal commentary'),
        ('essentials of', 'Textbook'),
        ('principles of', 'Textbook'),
        ('law of', 'Legal textbook'),
        ('bench book', 'Judicial reference'),
        
        # Publisher/author indicators
        ('z-lib.org', 'Published book'),
        ('nodrm', 'Published book'),
        ('carolina academic press', 'Published textbook'),
    ]
    
    # Check for book indicators
    for indicator, reason in book_indicators:
        if indicator in filename_lower:
            print(f"    → BOOKS ({reason})")
            return 'books'
    
    # Large PDF files (>5MB) are likely comprehensive books/references
    if file_ext == '.pdf' and file_size_mb > 5:
        # But exclude obvious exam papers and course materials
        if not any(pattern in filename_lower for pattern in [
            'course outline', 'project work', 'assignment', 'marking scheme',
            'revision chart', 'exam', 'paper'
        ]):
            print(f"    → BOOKS (Large PDF: {file_size_mb:.1f}MB)")
            return 'books'
    
    # PAST PAPERS - Exams, course admin, historical materials
    past_paper_indicators = [
        # Year patterns
        (r'\b(19|20)\d{2}\b', 'Contains year'),
        (r'(july|november|march|october|april)_\d{4}', 'Exam date format'),
        
        # Exam-related terms
        ('past paper', 'Past paper'),
        ('exam', 'Examination'),
        ('marking scheme', 'Marking scheme'),
        ('revision chart', 'Revision material'),
        ('atp revision', 'ATP revision'),
        
        # Course administration
        ('course outline', 'Course outline'),
        ('project work', 'Project assignment'),
        ('assignment', 'Assignment'),
        ('syllabus', 'Syllabus'),
        
        # Historical/archival materials
        ('2008 - 2011', 'Historical compilation'),
        ('best performed', 'Past performance'),
        ('per topic 2008', 'Historical topic review'),
    ]
    
    for pattern, reason in past_paper_indicators:
        if re.search(pattern, filename_lower):
            print(f"    → PAST PAPERS ({reason})")
            return 'past_papers'
    
    # NOTES - Active study materials, lectures, working documents
    
    # Presentation files are almost always notes/lectures
    if file_ext in presentation_types:
        print(f"    → NOTES (Presentation file)")
        return 'notes'
    
    # Small files are often templates, forms, working documents
    if file_size_mb < 1 and file_ext in ['.doc', '.docx']:
        print(f"    → NOTES (Small working document)")
        return 'notes'
    
    note_indicators = [
        # Lecture materials
        ('lecture', 'Lecture material'),
        ('lesson', 'Lesson material'),
        ('firm ', 'Firm exercise'),
        ('class ', 'Class material'),
        
        # Study aids
        ('notes', 'Study notes'),
        ('summary', 'Summary'),
        ('quick notes', 'Quick reference'),
        ('revision', 'Revision material'),
        
        # Working documents
        ('sample', 'Sample document'),
        ('template', 'Template'),
        ('form', 'Form'),
        ('precedent', 'Legal precedent'),
        ('draft', 'Draft document'),
        ('specimen', 'Specimen'),
        
        # Practical materials
        ('application', 'Application form'),
        ('memo', 'Memorandum'),
        ('letter', 'Letter template'),
        ('agreement', 'Agreement template'),
        ('contract', 'Contract template'),
    ]
    
    for indicator, reason in note_indicators:
        if indicator in filename_lower:
            print(f"    → NOTES ({reason})")
            return 'notes'
    
    # Default categorization based on file type and size
    if file_ext == '.pdf':
        if file_size_mb > 10:
            print(f"    → BOOKS (Large PDF reference: {file_size_mb:.1f}MB)")
            return 'books'
        elif file_size_mb > 2:
            print(f"    → NOTES (Medium PDF: {file_size_mb:.1f}MB)")
            return 'notes'
        else:
            print(f"    → NOTES (Small PDF: {file_size_mb:.1f}MB)")
            return 'notes'
    
    # Default to notes for other document types
    print(f"    → NOTES (Default)")
    return 'notes'

def analyze_and_organize_subject(subject_path, dry_run=False):
    """
    Analyze and organize files in a subject folder using file attributes.
    """
    print(f"\n{'='*60}")
    print(f"ANALYZING: {os.path.basename(subject_path)}")
    print(f"{'='*60}")
    
    moves_to_make = []
    
    # Check each subfolder
    for subfolder in ['Books', 'Notes', 'Past Papers']:
        subfolder_path = os.path.join(subject_path, subfolder)
        if not os.path.exists(subfolder_path):
            continue
            
        print(f"\n--- Checking {subfolder} folder ---")
        
        files = [f for f in os.listdir(subfolder_path) 
                if os.path.isfile(os.path.join(subfolder_path, f))]
        
        if not files:
            print("  (No files)")
            continue
            
        for filename in files:
            filepath = os.path.join(subfolder_path, filename)
            
            # Determine proper category
            proper_category = categorize_by_attributes(filename, filepath)
            current_category = subfolder.lower().replace(' ', '_')
            
            if proper_category != current_category:
                # Map category to folder name
                category_to_folder = {
                    'books': 'Books',
                    'notes': 'Notes', 
                    'past_papers': 'Past Papers'
                }
                
                target_folder = category_to_folder[proper_category]
                
                moves_to_make.append({
                    'file': filename,
                    'from_path': filepath,
                    'from_folder': subfolder,
                    'to_folder': target_folder,
                    'to_path': os.path.join(subject_path, target_folder, filename),
                    'reason': f"File attributes suggest {proper_category}",
                    'size_mb': get_file_size_mb(filepath)
                })
                
                print(f"    *** SHOULD MOVE: {subfolder} → {target_folder}")
            else:
                print(f"    ✓ Correctly placed in {subfolder}")
    
    # Execute moves if not dry run
    if not dry_run and moves_to_make:
        print(f"\n--- Executing {len(moves_to_make)} moves ---")
        
        for move in moves_to_make:
            # Ensure target folder exists
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
                print(f"  ✓ Moved: {move['file']} ({move['size_mb']:.1f}MB)")
                print(f"    {move['from_folder']} → {move['to_folder']}")
            except Exception as e:
                print(f"  ✗ Error moving {move['file']}: {e}")
    
    return moves_to_make

def main():
    """Main function with enhanced file attribute analysis."""
    print("ATP Materials Organization - File Attribute Analysis")
    print("=" * 60)
    
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
    print("1. Analyze all subjects (dry run - no moves)")
    print("2. Analyze and organize all subjects")
    print("3. Analyze specific subject")
    print("4. Show file size distribution")
    
    choice = input("\nEnter choice (1-4): ").strip()
    
    if choice == '1':
        # Dry run analysis
        print("\n" + "="*60)
        print("DRY RUN - ANALYSIS ONLY (No files will be moved)")
        print("="*60)
        
        total_moves = 0
        for folder in atp_folders:
            moves = analyze_and_organize_subject(folder, dry_run=True)
            total_moves += len(moves)
        
        print(f"\n{'='*60}")
        print(f"SUMMARY: {total_moves} files would be moved")
        print(f"{'='*60}")
    
    elif choice == '2':
        # Full organization
        response = input("This will move files. Continue? (y/n): ").strip().lower()
        if response in ['y', 'yes']:
            total_moves = 0
            for folder in atp_folders:
                moves = analyze_and_organize_subject(folder, dry_run=False)
                total_moves += len(moves)
            
            print(f"\n{'='*60}")
            print(f"COMPLETED: {total_moves} files moved")
            print(f"{'='*60}")
    
    elif choice == '3':
        # Specific subject
        print("\nSubjects:")
        for i, folder in enumerate(atp_folders, 1):
            print(f"{i}. {folder}")
        
        try:
            idx = int(input("Enter subject number: ")) - 1
            if 0 <= idx < len(atp_folders):
                dry = input("Dry run only? (y/n): ").strip().lower() in ['y', 'yes']
                moves = analyze_and_organize_subject(atp_folders[idx], dry_run=dry)
                print(f"\n{len(moves)} moves {'would be made' if dry else 'completed'}")
        except ValueError:
            print("Invalid input")
    
    elif choice == '4':
        # File size analysis
        print("\n" + "="*60)
        print("FILE SIZE DISTRIBUTION ANALYSIS")
        print("="*60)
        
        size_categories = {
            'tiny': (0, 0.1),      # < 100KB
            'small': (0.1, 1),     # 100KB - 1MB  
            'medium': (1, 5),      # 1MB - 5MB
            'large': (5, 20),      # 5MB - 20MB
            'huge': (20, float('inf'))  # > 20MB
        }
        
        for folder in atp_folders:
            print(f"\n--- {folder} ---")
            
            for subfolder in ['Books', 'Notes', 'Past Papers']:
                subfolder_path = os.path.join(folder, subfolder)
                if not os.path.exists(subfolder_path):
                    continue
                
                print(f"\n{subfolder}:")
                
                files_by_size = {cat: [] for cat in size_categories}
                
                for filename in os.listdir(subfolder_path):
                    filepath = os.path.join(subfolder_path, filename)
                    if os.path.isfile(filepath):
                        size_mb = get_file_size_mb(filepath)
                        
                        for cat, (min_size, max_size) in size_categories.items():
                            if min_size <= size_mb < max_size:
                                files_by_size[cat].append((filename, size_mb))
                                break
                
                for cat, files in files_by_size.items():
                    if files:
                        min_size, max_size = size_categories[cat]
                        size_range = f"{min_size}-{max_size if max_size != float('inf') else '∞'}MB"
                        print(f"  {cat.upper()} ({size_range}): {len(files)} files")
                        
                        # Show largest files in each category
                        files.sort(key=lambda x: x[1], reverse=True)
                        for filename, size in files[:3]:  # Top 3
                            print(f"    {size:6.1f}MB - {filename}")
                        if len(files) > 3:
                            print(f"    ... and {len(files)-3} more")

if __name__ == "__main__":
    main()