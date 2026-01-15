#!/usr/bin/env python3
"""
Create a comprehensive file tree structure showing all files in the organized ATP folders.
"""

import os
from pathlib import Path

BASE_DIR = Path("/home/ngobiro/projects/pngobiro.github.io/colleges/ksl/Advocates Training Program")

def print_tree(directory, prefix="", max_files=15):
    """Print a tree structure of the directory."""
    items = sorted([item for item in directory.iterdir() if item.is_dir()])
    files = sorted([item for item in directory.iterdir() if item.is_file()])
    
    # Print subdirectories
    for i, item in enumerate(items):
        is_last = (i == len(items) - 1) and len(files) == 0
        current_prefix = "└── " if is_last else "├── "
        print(f"{prefix}{current_prefix}{item.name}/")
        
        # Recursively print subdirectory contents
        next_prefix = prefix + ("    " if is_last else "│   ")
        
        # Get subdirectories and files
        subdirs = sorted([d for d in item.iterdir() if d.is_dir()])
        subfiles = sorted([f for f in item.iterdir() if f.is_file()])
        
        # Print subdirectories
        for j, subdir in enumerate(subdirs):
            is_sublast = (j == len(subdirs) - 1) and len(subfiles) == 0
            sub_current = "└── " if is_sublast else "├── "
            print(f"{next_prefix}{sub_current}{subdir.name}/")
            
            # Print files in subdirectory
            subfiles_list = sorted([f for f in subdir.iterdir() if f.is_file()])
            if subfiles_list:
                for k, subfile in enumerate(subfiles_list):
                    is_file_last = (k == len(subfiles_list) - 1)
                    file_prefix = "└── " if is_file_last else "├── "
                    print(f"{next_prefix}    {file_prefix}{subfile.name}")
            
            # Add spacing if not last
            if not is_sublast:
                print(f"{next_prefix}│")
        
        # Print files directly in directory
        if subfiles:
            for k, file in enumerate(subfiles):
                is_file_last = (k == len(subfiles) - 1)
                file_prefix = "└── " if is_file_last else "├── "
                print(f"{next_prefix}{file_prefix}{file.name}")
        
        # Add spacing if not last
        if not is_last:
            print(f"{prefix}│")
    
    # Print files in current directory
    if files:
        for i, file in enumerate(files):
            is_last = (i == len(files) - 1)
            current_prefix = "└── " if is_last else "├── "
            print(f"{prefix}{current_prefix}{file.name}")

def create_detailed_tree():
    """Create a detailed tree structure for analysis."""
    print("=" * 100)
    print("ADVOCATES TRAINING PROGRAM - COMPLETE FILE TREE STRUCTURE")
    print("=" * 100)
    print()
    
    # Get all ATP subject directories
    atp_dirs = sorted([d for d in BASE_DIR.iterdir() if d.is_dir() and d.name.startswith("ATP 10")])
    
    for i, subject_dir in enumerate(atp_dirs):
        print(f"{'=' * 100}")
        print(f"{subject_dir.name}")
        print(f"{'=' * 100}")
        
        # Count files in each subfolder
        books_count = len(list((subject_dir / "Books").glob("*"))) if (subject_dir / "Books").exists() else 0
        notes_count = len(list((subject_dir / "Notes").glob("*"))) if (subject_dir / "Notes").exists() else 0
        past_papers_count = len(list((subject_dir / "Past Papers").glob("*"))) if (subject_dir / "Past Papers").exists() else 0
        
        print(f"Total: {books_count + notes_count + past_papers_count} files")
        print(f"  Books: {books_count}")
        print(f"  Notes: {notes_count}")
        print(f"  Past Papers: {past_papers_count}")
        print()
        
        # Print detailed tree
        print_tree(subject_dir)
        print()
    
    # Print other directories
    other_dirs = sorted([d for d in BASE_DIR.iterdir() if d.is_dir() and not d.name.startswith("ATP 10") and not d.name.startswith("DRIVE")])
    
    if other_dirs:
        print(f"{'=' * 100}")
        print("OTHER DIRECTORIES")
        print(f"{'=' * 100}")
        print()
        
        for other_dir in other_dirs:
            print(f"{'=' * 100}")
            print(f"{other_dir.name}/")
            print(f"{'=' * 100}")
            
            # Count files
            file_count = len(list(other_dir.glob("*")))
            print(f"Total: {file_count} files")
            print()
            
            # List files (up to 20)
            files = sorted([f for f in other_dir.glob("*") if f.is_file()])
            for i, file in enumerate(files[:20]):
                print(f"  {file.name}")
            
            if len(files) > 20:
                print(f"  ... and {len(files) - 20} more files")
            print()

if __name__ == "__main__":
    os.chdir(BASE_DIR)
    create_detailed_tree()
