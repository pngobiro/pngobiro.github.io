#!/usr/bin/env python3
"""
Organize and rename downloaded files using AI-enhanced metadata.
Renames files from '12345.pdf' to '12345 - Clean Title.pdf' based on enhanced JSON data.
"""

import json
import os
import re
import argparse
from pathlib import Path

def sanitize_filename(name: str) -> str:
    """Remove characters invalid for filenames"""
    # Remove invalid chars
    name = re.sub(r'[<>:"/\\|?*]', '', name)
    # Collapse multiple spaces
    name = re.sub(r'\s+', ' ', name).strip()
    return name[:150] # Limit length

def rename_downloads(json_file: str, downloads_dir: str, dry_run: bool = False):
    """
    Rename files in downloads directory based on enhanced metadata.
    """
    if not os.path.exists(json_file):
        print(f"Error: JSON file not found: {json_file}")
        return

    if not os.path.exists(downloads_dir):
        print(f"Error: Downloads directory not found: {downloads_dir}")
        return

    print(f"Loading metadata from {json_file}...")
    with open(json_file, 'r', encoding='utf-8') as f:
        data = json.load(f)
        documents = data.get('documents', [])

    # Map document ID to enhanced title
    doc_map = {}
    for doc in documents:
        if doc.get('document_id') and doc.get('enhanced_title'):
            doc_map[doc['document_id']] = doc['enhanced_title']

    print(f"Found {len(doc_map)} documents with enhanced titles.")
    print(f"Scanning {downloads_dir}...\n")

    renamed_count = 0
    
    for filename in os.listdir(downloads_dir):
        # Skip hidden files
        if filename.startswith('.'):
            continue
            
        file_path = os.path.join(downloads_dir, filename)
        
        # Check if file matches pattern (ID at start)
        match = re.match(r'^(\d+)', filename)
        if not match:
            continue
            
        doc_id = int(match.group(1))
        
        if doc_id in doc_map:
            enhanced_title = sanitize_filename(doc_map[doc_id])
            extension = os.path.splitext(filename)[1]
            
            new_filename = f"{doc_id} - {enhanced_title}{extension}"
            new_path = os.path.join(downloads_dir, new_filename)
            
            if filename != new_filename:
                print(f"RENAME: {filename}")
                print(f"    TO: {new_filename}")
                
                if not dry_run:
                    try:
                        os.rename(file_path, new_path)
                        renamed_count += 1
                        print("    ✅ Done")
                    except OSError as e:
                        print(f"    ❌ Error: {e}")
                else:
                    print("    (Dry run - no change)")
                print("-" * 40)
    
    if dry_run:
        print(f"\nDry run complete. Found {renamed_count} files to rename.")
    else:
        print(f"\nComplete. Renamed {renamed_count} files.")

def main():
    parser = argparse.ArgumentParser(description='Rename downloaded files using enhanced metadata')
    parser.add_argument('--json-file', required=True, help='Path to enhanced JSON file')
    parser.add_argument('--downloads-dir', default='./downloads', help='Path to downloads folder')
    parser.add_argument('--dry-run', action='store_true', help='Show changes without renaming')
    
    args = parser.parse_args()
    
    rename_downloads(args.json_file, args.downloads_dir, args.dry_run)

if __name__ == "__main__":
    main()
