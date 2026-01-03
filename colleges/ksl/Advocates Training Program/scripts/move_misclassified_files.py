#!/usr/bin/env python3
"""
Move misclassified files from Past Papers to Notes or Books folders.
"""

import os
import shutil
from pathlib import Path

BASE_DIR = Path("/home/ngobiro/projects/pngobiro.github.io/colleges/ksl/Advocates Training Program")

# Keywords that indicate lecture materials
LECTURE_KEYWORDS = [
    "lecture", "notes", "outline", "guide", "handbook", "manual",
    "introduction", "tutorial", "seminar", "presentation", "slides",
    "course", "module", "topic", "chapter", "lesson", "firm", "class",
    "assignment", "work", "overview", "procedure", "process"
]

# Keywords that indicate books (should go to Books)
BOOK_KEYWORDS = [
    "book", "textbook", "handbook", "manual", "guide", "principles",
    "commentary", "essentials", "treatise", "reference", "handbook",
    "kiage", "musyoka", "lumumba", "kaluma", "ogoola", "ouma",
    "angawa", "anderson", "garner", "wydick", "flood"
]

def determine_destination(filename):
    """Determine if file should go to Notes or Books."""
    filename_lower = filename.lower()
    
    # Check if it's a book
    for keyword in BOOK_KEYWORDS:
        if keyword in filename_lower:
            return "Books"
    
    # Check if it's a lecture/notes
    for keyword in LECTURE_KEYWORDS:
        if keyword in filename_lower:
            return "Notes"
    
    # PowerPoint files are usually lectures
    if filename_lower.endswith('.ppt') or filename_lower.endswith('.pptx'):
        return "Notes"
    
    # Default to Notes
    return "Notes"

def move_misclassified_files():
    """Move misclassified files from Past Papers to appropriate folders."""
    print("=" * 80)
    print("MOVING MISCLASSIFIED FILES FROM PAST PAPERS")
    print("=" * 80)
    print()
    
    total_moved = 0
    moved_to_notes = 0
    moved_to_books = 0
    
    for subject_dir in sorted(BASE_DIR.glob("ATP 10*")):
        if subject_dir.is_dir():
            subject_name = subject_dir.name
            past_papers_dir = subject_dir / "Past Papers"
            notes_dir = subject_dir / "Notes"
            books_dir = subject_dir / "Books"
            
            if not past_papers_dir.exists():
                continue
            
            notes_dir.mkdir(parents=True, exist_ok=True)
            books_dir.mkdir(parents=True, exist_ok=True)
            
            files_to_move = []
            
            for file in past_papers_dir.glob("*"):
                if file.is_file():
                    filename_lower = file.name.lower()
                    
                    # Check if it's a lecture material
                    is_lecture = any(kw in filename_lower for kw in LECTURE_KEYWORDS)
                    is_ppt = filename_lower.endswith('.ppt') or filename_lower.endswith('.pptx')
                    
                    if is_lecture or is_ppt:
                        destination = determine_destination(file.name)
                        files_to_move.append((file, destination))
            
            if files_to_move:
                print(f"{'=' * 80}")
                print(f"SUBJECT: {subject_name}")
                print(f"{'=' * 80}")
                
                for file, destination in files_to_move:
                    if destination == "Books":
                        dest_dir = books_dir
                        moved_to_books += 1
                    else:
                        dest_dir = notes_dir
                        moved_to_notes += 1
                    
                    dest_file = dest_dir / file.name
                    
                    if not dest_file.exists():
                        shutil.move(str(file), str(dest_file))
                        print(f"✓ Moved: {file.name} -> {destination}/")
                        total_moved += 1
                    else:
                        print(f"⊘ Exists: {file.name} already in {destination}/")
                
                print()
    
    print("=" * 80)
    print(f"SUMMARY: {total_moved} files moved")
    print(f"  → Notes: {moved_to_notes}")
    print(f"  → Books: {moved_to_books}")
    print("=" * 80)

if __name__ == "__main__":
    os.chdir(BASE_DIR)
    move_misclassified_files()
