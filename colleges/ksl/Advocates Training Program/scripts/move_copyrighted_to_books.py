#!/usr/bin/env python3
"""
Move copyrighted materials (books, textbooks, commentaries) to Books folders.
"""

import os
import shutil
from pathlib import Path

BASE_DIR = Path("/home/ngobiro/projects/pngobiro.github.io/colleges/ksl/Advocates Training Program")

# Keywords that indicate copyrighted books/materials
BOOK_KEYWORDS = [
    "book", "textbook", "handbook", "manual", "guide", "principles",
    "commentary", "essentials", "introduction", "treatise", "reference",
    "kiage", "musyoka", "lumumba", "odunga", "anderson", "garner",
    "steve ouma", "mary angawa", "peter kaluma", "ogoola", "flood",
    "keith-evans", "wydick", "oscola", "bryan garner", "mark anderson",
    "richard c. wydick", "plain english", "legislative drafting",
    "bench book", "procedure handbook", "criminal procedure handbook",
    "act", "cap", "legislation", "rules", "code", "regulations"
]

def is_book_file(filename):
    """Check if file is likely a copyrighted book/material."""
    filename_lower = filename.lower()
    
    for keyword in BOOK_KEYWORDS:
        if keyword in filename_lower:
            return True
    
    # Check for author names
    authors = [
        "kiage", "musyoka", "lumumba", "kaluma", "ogoola", "ouma",
        "angawa", "anderson", "garner", "wydick", "flood", "keith",
        "steve", "mary", "peter"
    ]
    
    for author in authors:
        if author in filename_lower:
            return True
    
    return False

def move_books_to_books_folder():
    """Move book files from Notes to Books folders."""
    print("=" * 60)
    print("MOVING COPYRIGHTED MATERIALS TO BOOKS FOLDERS")
    print("=" * 60)
    print()
    
    total_moved = 0
    
    for subject_dir in BASE_DIR.glob("ATP 10*"):
        if subject_dir.is_dir():
            subject_name = subject_dir.name
            
            notes_dir = subject_dir / "Notes"
            books_dir = subject_dir / "Books"
            
            if not notes_dir.exists():
                continue
            
            books_dir.mkdir(parents=True, exist_ok=True)
            
            # Check files in Notes folder
            for file in notes_dir.glob("*"):
                if file.is_file() and is_book_file(file.name):
                    dest_file = books_dir / file.name
                    
                    if not dest_file.exists():
                        shutil.move(str(file), str(dest_file))
                        print(f"✓ Moved: {file.name}")
                        print(f"  From: {subject_name}/Notes/")
                        print(f"  To:   {subject_name}/Books/")
                        print()
                        total_moved += 1
                    else:
                        print(f"⊘ Exists: {file.name} already in Books")
    
    print("=" * 60)
    print(f"TOTAL: {total_moved} files moved to Books folders")
    print("=" * 60)

if __name__ == "__main__":
    os.chdir(BASE_DIR)
    move_books_to_books_folder()
