#!/usr/bin/env python3
"""
Script to organize ATP notes by theme, identify duplicates, and peek inside files
to get correct information since filenames can be misleading.
"""

import os
import hashlib
import json
from pathlib import Path
import re
from collections import defaultdict

# File signature patterns for different document types
SIGNATURES = {
    'pdf': b'%PDF-',
    'docx': b'PK\x03\x04',
    'doc': b'\xd0\xcf\x11\xe0\xa1\xb1\x1a\xe1',
    'pptx': b'PK\x03\x04',
    'ppt': b'\xd0\xcf\x11\xe0\xa1\xb1\x1a\xe1',
}

def get_file_hash(filepath):
    """Calculate MD5 hash of a file for duplicate detection."""
    hash_md5 = hashlib.md5()
    with open(filepath, "rb") as f:
        for chunk in iter(lambda: f.read(4096), b""):
            hash_md5.update(chunk)
    return hash_md5.hexdigest()

def get_file_size(filepath):
    """Get file size in bytes."""
    return os.path.getsize(filepath)

def detect_file_type(filepath):
    """Detect actual file type based on content."""
    try:
        with open(filepath, 'rb') as f:
            header = f.read(8)
            for ext, sig in SIGNATURES.items():
                if header.startswith(sig):
                    return ext
    except Exception as e:
        print(f"Error reading {filepath}: {e}")
    return 'unknown'

def extract_text_content(filepath):
    """
    Extract text content from files to understand actual content.
    This is a simplified version - for production, use proper libraries.
    """
    file_type = detect_file_type(filepath)
    content = {
        'filename': os.path.basename(filepath),
        'path': filepath,
        'type': file_type,
        'size': get_file_size(filepath),
        'hash': get_file_hash(filepath),
        'content_preview': '',
        'keywords': []
    }

    # For text-based files, try to extract some content
    if file_type in ['docx', 'doc', 'pdf']:
        # In a real implementation, use python-docx, PyPDF2, etc.
        # For now, we'll just note that we need to extract content
        content['content_preview'] = f"[{file_type.upper()} file - needs proper extraction]"
    elif file_type == 'unknown':
        # Try to read as text
        try:
            with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
                text = f.read(2000)  # Read first 2000 chars
                content['content_preview'] = text[:500]
                # Extract potential keywords
                words = re.findall(r'\b[A-Z]{2,}\b', text)
                content['keywords'] = list(set(words[:10]))
        except Exception:
            pass

    return content

def identify_theme_from_filename(filename):
    """Identify potential theme from filename."""
    filename_lower = filename.lower()

    themes = {
        'Civil Litigation': ['civil', 'plaint', 'defence', 'injunction', 'damages', 'tort', 'contract'],
        'Criminal Litigation': ['criminal', 'charge', 'plea', 'bail', 'arrest', 'prosecution', 'sentence'],
        'Probate & Administration': ['probate', 'succession', 'estate', 'will', 'administration', 'testate', 'intestate'],
        'Legal Writing & Drafting': ['drafting', 'writing', 'legal', 'agreement', 'contract', 'precedent'],
        'Trial Advocacy': ['trial', 'advocacy', 'examination', 'cross', 'evidence', 'witness', 'court'],
        'Professional Ethics': ['ethics', 'professional', 'advocate', 'conduct', 'lien', 'account'],
        'Legal Practice Management': ['management', 'practice', 'firm', 'office', 'client', 'billing'],
        'Conveyancing': ['conveyance', 'land', 'property', 'transfer', 'title', 'lease', 'mortgage'],
        'Commercial Transactions': ['commercial', 'partnership', 'company', 'business', 'trade', 'transaction']
    }

    # Count matches for each theme
    theme_scores = defaultdict(int)
    for theme, keywords in themes.items():
        for keyword in keywords:
            if keyword in filename_lower:
                theme_scores[theme] += 1

    # Return the theme with highest score
    if theme_scores:
        return max(theme_scores.items(), key=lambda x: x[1])[0]
    return 'Other'

def scan_notes_folders(base_path):
    """Scan all Notes folders and collect file information."""
    all_files = []
    subjects = []

    # Find all subject folders
    for item in os.listdir(base_path):
        item_path = os.path.join(base_path, item)
        if os.path.isdir(item_path) and item.startswith('ATP'):
            notes_path = os.path.join(item_path, 'Notes')
            if os.path.exists(notes_path):
                subjects.append((item, notes_path))

    print(f"Found {len(subjects)} subjects with Notes folders")

    # Scan each Notes folder
    for subject, notes_path in subjects:
        print(f"\nScanning: {subject}")
        for root, dirs, files in os.walk(notes_path):
            for file in files:
                filepath = os.path.join(root, file)
                try:
                    file_info = extract_text_content(filepath)
                    file_info['subject_folder'] = subject
                    file_info['guessed_theme'] = identify_theme_from_filename(file)
                    all_files.append(file_info)
                except Exception as e:
                    print(f"  Error processing {file}: {e}")

    return all_files

def find_duplicates(files):
    """Find duplicate files based on hash."""
    hash_map = defaultdict(list)
    for file_info in files:
        hash_map[file_info['hash']].append(file_info)

    duplicates = {h: files for h, files in hash_map.items() if len(files) > 1}
    return duplicates

def generate_report(files, duplicates, output_path):
    """Generate a comprehensive report."""
    report = {
        'summary': {
            'total_files': len(files),
            'duplicate_groups': len(duplicates),
            'total_duplicates': sum(len(files) for files in duplicates.values())
        },
        'files_by_theme': defaultdict(list),
        'files_by_subject': defaultdict(list),
        'duplicates': {},
        'misplaced_files': []
    }

    # Organize by theme and subject
    for file_info in files:
        report['files_by_theme'][file_info['guessed_theme']].append(file_info['filename'])
        report['files_by_subject'][file_info['subject_folder']].append(file_info['filename'])

        # Check if file might be misplaced (theme doesn't match subject)
        subject_theme = file_info['subject_folder'].split(' - ')[1]
        if file_info['guessed_theme'] != 'Other' and subject_theme not in file_info['guessed_theme']:
            report['misplaced_files'].append({
                'filename': file_info['filename'],
                'path': file_info['path'],
                'subject': file_info['subject_folder'],
                'guessed_theme': file_info['guessed_theme']
            })

    # Format duplicates
    for hash_val, dup_files in duplicates.items():
        report['duplicates'][hash_val[:8]] = [f['path'] for f in dup_files]

    # Convert defaultdicts to regular dicts
    report['files_by_theme'] = dict(report['files_by_theme'])
    report['files_by_subject'] = dict(report['files_by_subject'])

    # Write report
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(report, f, indent=2, ensure_ascii=False)

    return report

def main():
    base_path = "/home/ngobiro/projects/pngobiro.github.io/colleges/ksl/Advocates Training Program"
    output_path = os.path.join(base_path, "scripts", "notes_organization_report.json")

    print("=" * 80)
    print("ATP Notes Organization Analysis")
    print("=" * 80)

    # Scan all files
    print("\nStep 1: Scanning all Notes folders...")
    files = scan_notes_folders(base_path)
    print(f"Found {len(files)} files")

    # Find duplicates
    print("\nStep 2: Identifying duplicates...")
    duplicates = find_duplicates(files)
    print(f"Found {len(duplicates)} groups of duplicate files")

    # Generate report
    print("\nStep 3: Generating report...")
    report = generate_report(files, duplicates, output_path)
    print(f"Report saved to: {output_path}")

    # Print summary
    print("\n" + "=" * 80)
    print("SUMMARY")
    print("=" * 80)
    print(f"Total files analyzed: {report['summary']['total_files']}")
    print(f"Duplicate groups: {report['summary']['duplicate_groups']}")
    print(f"Total duplicate files: {report['summary']['total_duplicates']}")
    print(f"Potentially misplaced files: {len(report['misplaced_files'])}")

    print("\nFiles by theme:")
    for theme, file_list in sorted(report['files_by_theme'].items()):
        print(f"  {theme}: {len(file_list)} files")

    print("\nFiles by subject:")
    for subject, file_list in sorted(report['files_by_subject'].items()):
        print(f"  {subject}: {len(file_list)} files")

    if duplicates:
        print("\n" + "=" * 80)
        print("DUPLICATE FILES")
        print("=" * 80)
        for hash_short, paths in list(duplicates.items())[:5]:  # Show first 5 groups
            print(f"\nHash: {hash_short}...")
            for path in paths:
                print(f"  - {path}")
        if len(duplicates) > 5:
            print(f"\n... and {len(duplicates) - 5} more duplicate groups")

    if report['misplaced_files']:
        print("\n" + "=" * 80)
        print("POTENTIALLY MISPLACED FILES")
        print("=" * 80)
        for item in report['misplaced_files'][:10]:  # Show first 10
            print(f"\n{item['filename']}")
            print(f"  Location: {item['subject']}")
            print(f"  Guessed theme: {item['guessed_theme']}")
        if len(report['misplaced_files']) > 10:
            print(f"\n... and {len(report['misplaced_files']) - 10} more potentially misplaced files")

    print("\n" + "=" * 80)
    print("Analysis complete!")
    print("=" * 80)

if __name__ == "__main__":
    main()