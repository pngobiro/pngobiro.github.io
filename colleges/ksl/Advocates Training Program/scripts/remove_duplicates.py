#!/usr/bin/env python3
"""
Script to remove duplicate files identified during organization.
This will create a backup first, then remove duplicates.
"""

import os
import shutil
import hashlib
from pathlib import Path
from datetime import datetime

def get_file_hash(filepath):
    """Calculate MD5 hash of a file."""
    hash_md5 = hashlib.md5()
    with open(filepath, "rb") as f:
        for chunk in iter(lambda: f.read(4096), b""):
            hash_md5.update(chunk)
    return hash_md5.hexdigest()

def find_and_remove_duplicates(notes_path, dry_run=True):
    """Find and remove duplicate files in a Notes folder."""
    print(f"\n{'='*80}")
    print(f"Processing: {notes_path}")
    print(f"{'='*80}")

    # Collect all files recursively
    all_files = []
    for root, dirs, files in os.walk(notes_path):
        for file in files:
            filepath = os.path.join(root, file)
            all_files.append(filepath)

    print(f"Found {len(all_files)} files")

    # Group by hash
    hash_map = {}
    for filepath in all_files:
        try:
            file_hash = get_file_hash(filepath)
            if file_hash not in hash_map:
                hash_map[file_hash] = []
            hash_map[file_hash].append(filepath)
        except Exception as e:
            print(f"Error hashing {filepath}: {e}")

    # Find duplicates
    duplicates = {h: files for h, files in hash_map.items() if len(files) > 1}

    if not duplicates:
        print("No duplicates found")
        return 0

    print(f"\nFound {len(duplicates)} duplicate groups:")

    duplicates_to_remove = []
    for hash_val, dup_files in duplicates.items():
        print(f"\nHash: {hash_val[:8]}...")
        # Keep the first file (usually the one in a topic folder)
        for i, filepath in enumerate(dup_files):
            rel_path = os.path.relpath(filepath, notes_path)
            if i == 0:
                print(f"  KEEP: {rel_path}")
            else:
                print(f"  REMOVE: {rel_path}")
                duplicates_to_remove.append(filepath)

    print(f"\nTotal duplicates to remove: {len(duplicates_to_remove)}")

    if dry_run:
        print("\n[DRY RUN] No files will be removed.")
        print("Run again with dry_run=False to actually remove duplicates.")
    else:
        # Create backup folder
        backup_path = os.path.join(notes_path, "DUPLICATES_BACKUP_" + datetime.now().strftime("%Y%m%d_%H%M%S"))
        os.makedirs(backup_path, exist_ok=True)
        print(f"\nCreated backup folder: {backup_path}")

        # Move duplicates to backup
        for filepath in duplicates_to_remove:
            try:
                filename = os.path.basename(filepath)
                # Handle duplicate filenames in backup
                backup_filepath = os.path.join(backup_path, filename)
                counter = 1
                while os.path.exists(backup_filepath):
                    name, ext = os.path.splitext(filename)
                    backup_filepath = os.path.join(backup_path, f"{name}_{counter}{ext}")
                    counter += 1

                shutil.move(filepath, backup_filepath)
                print(f"  Moved: {os.path.basename(filepath)} -> backup/")
            except Exception as e:
                print(f"  Error moving {filepath}: {e}")

        print(f"\nMoved {len(duplicates_to_remove)} duplicate files to backup folder")

    return len(duplicates_to_remove)

def main():
    base_path = "/home/ngobiro/projects/pngobiro.github.io/colleges/ksl/Advocates Training Program"

    print("=" * 80)
    print("Remove Duplicate Files")
    print("=" * 80)
    print("\nThis script will identify and remove duplicate files from Notes folders")
    print("Duplicates will be moved to backup folders for safety.\n")

    # Find all Notes folders
    notes_folders = []
    for item in os.listdir(base_path):
        item_path = os.path.join(base_path, item)
        if os.path.isdir(item_path) and item.startswith('ATP'):
            notes_path = os.path.join(item_path, 'Notes')
            if os.path.exists(notes_path):
                notes_folders.append(notes_path)

    print(f"Found {len(notes_folders)} Notes folders")

    # Process each folder
    total_duplicates = 0
    for notes_path in notes_folders:
        duplicates = find_and_remove_duplicates(notes_path, dry_run=False)
        total_duplicates += duplicates

    print("\n" + "=" * 80)
    print("SUMMARY")
    print("=" * 80)
    print(f"Total duplicates found: {total_duplicates}")
    print("\nTo actually remove duplicates, edit this script and set dry_run=False")

if __name__ == "__main__":
    main()