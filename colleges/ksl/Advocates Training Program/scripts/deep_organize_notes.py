#!/usr/bin/env python3
"""
Advanced script to organize ATP notes by actually reading file contents.
This script will:
1. Read actual content from files (PDF, DOCX, etc.)
2. Identify themes based on content
3. Remove duplicates
4. Create organized folder structure
"""

import os
import json
import shutil
import hashlib
from pathlib import Path
from collections import defaultdict
import re

# Try to import document processing libraries
try:
    import PyPDF2
    HAS_PYPDF2 = True
except ImportError:
    HAS_PYPDF2 = False
    print("Warning: PyPDF2 not installed. PDF content extraction will be limited.")

try:
    from docx import Document
    HAS_DOCX = True
except ImportError:
    HAS_DOCX = False
    print("Warning: python-docx not installed. DOCX content extraction will be limited.")

def get_file_hash(filepath):
    """Calculate MD5 hash of a file."""
    hash_md5 = hashlib.md5()
    with open(filepath, "rb") as f:
        for chunk in iter(lambda: f.read(4096), b""):
            hash_md5.update(chunk)
    return hash_md5.hexdigest()

def extract_text_from_pdf(filepath):
    """Extract text from PDF file."""
    text = ""
    if HAS_PYPDF2:
        try:
            with open(filepath, 'rb') as f:
                reader = PyPDF2.PdfReader(f)
                for page in reader.pages[:3]:  # Read first 3 pages
                    try:
                        text += page.extract_text() + "\n"
                    except Exception:
                        continue
        except Exception as e:
            text = f"[Error reading PDF: {e}]"
    else:
        text = "[PDF content extraction not available]"
    return text[:3000]  # Return first 3000 chars

def extract_text_from_docx(filepath):
    """Extract text from DOCX file."""
    text = ""
    if HAS_DOCX:
        try:
            doc = Document(filepath)
            for para in doc.paragraphs[:50]:  # Read first 50 paragraphs
                text += para.text + "\n"
        except Exception as e:
            text = f"[Error reading DOCX: {e}]"
    else:
        text = "[DOCX content extraction not available]"
    return text[:3000]

def extract_file_content(filepath):
    """Extract text content from various file types."""
    ext = os.path.splitext(filepath)[1].lower()

    if ext == '.pdf':
        return extract_text_from_pdf(filepath)
    elif ext == '.docx':
        return extract_text_from_docx(filepath)
    elif ext == '.doc':
        return "[DOC file - conversion needed]"
    elif ext in ['.ppt', '.pptx']:
        return "[Presentation file - conversion needed]"
    else:
        # Try to read as text
        try:
            with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
                return f.read(3000)
        except Exception:
            return "[Could not extract content]"

def analyze_content_theme(text, filename):
    """
    Analyze content to determine the actual theme.
    Returns the most likely theme based on keywords found in content.
    """
    text_lower = text.lower()

    # Define themes with keywords (content-based)
    theme_keywords = {
        'Civil Litigation': {
            'keywords': ['civil', 'plaint', 'defence', 'defense', 'injunction', 'damages',
                        'tort', 'contract', 'breach', 'negligence', 'defamation', 'suit',
                        'summons', 'decree', 'judgment', 'overriding objective', 'caveat',
                        'interlocutory', 'originating summons', 'chamber summons'],
            'weight': 2.0
        },
        'Criminal Litigation': {
            'keywords': ['criminal', 'charge', 'plea', 'bail', 'bond', 'arrest',
                        'prosecution', 'sentence', 'plead guilty', 'not guilty',
                        'habeas corpus', 'identification parade', 'extradition',
                        'inquest', 'private prosecution', 'offence', 'accused'],
            'weight': 2.0
        },
        'Probate & Administration': {
            'keywords': ['probate', 'succession', 'estate', 'will', 'testament',
                        'administrator', 'executor', 'intestate', 'testate',
                        'letters of administration', 'grant of probate', 'beneficiary',
                        'deceased', 'heir', 'inheritance'],
            'weight': 2.0
        },
        'Legal Writing & Drafting': {
            'keywords': ['drafting', 'legal writing', 'agreement', 'contract',
                        'precedent', 'affidavit', 'statutory declaration', 'pleading',
                        'memorandum', 'opinion', 'legal opinion', 'letter writing',
                        'brief', 'legal document'],
            'weight': 1.5
        },
        'Trial Advocacy': {
            'keywords': ['trial', 'advocacy', 'examination', 'cross-examination',
                        're-examination', 'evidence', 'witness', 'court',
                        'opening statement', 'closing argument', 'objection',
                        'exhibit', 'testimony', 'advocate'],
            'weight': 2.0
        },
        'Professional Ethics': {
            'keywords': ['ethics', 'professional', 'advocate', 'conduct',
                        'advocates act', 'lien', 'account', 'client confidentiality',
                        'conflict of interest', 'professional misconduct', 'advocate-client',
                        'professional responsibility'],
            'weight': 2.0
        },
        'Legal Practice Management': {
            'keywords': ['management', 'practice', 'firm', 'office', 'client',
                        'billing', 'accounting', 'file management', 'case management',
                        'law firm', 'practice area', 'timekeeping', 'professional fees'],
            'weight': 1.5
        },
        'Conveyancing': {
            'keywords': ['conveyance', 'land', 'property', 'transfer', 'title',
                        'lease', 'mortgage', 'charge', 'registration', 'land registry',
                        'tenancy', 'landlord', 'tenant', 'land control', 'title deed'],
            'weight': 2.0
        },
        'Commercial Transactions': {
            'keywords': ['commercial', 'partnership', 'company', 'business',
                        'trade', 'transaction', 'partnership act', 'company act',
                        'business name', 'sole proprietorship', 'merger', 'acquisition',
                        'commercial agreement', 'business law'],
            'weight': 2.0
        }
    }

    # Score each theme based on keyword matches
    theme_scores = defaultdict(float)
    for theme, data in theme_keywords.items():
        for keyword in data['keywords']:
            # Count occurrences
            count = text_lower.count(keyword)
            if count > 0:
                theme_scores[theme] += count * data['weight']

        # Also check filename
        filename_lower = filename.lower()
        for keyword in data['keywords']:
            if keyword in filename_lower:
                theme_scores[theme] += data['weight'] * 2  # Give more weight to filename matches

    # Return the theme with highest score, or 'Other' if no clear match
    if theme_scores:
        best_theme = max(theme_scores.items(), key=lambda x: x[1])
        if best_theme[1] > 1.0:  # Minimum threshold
            return best_theme[0]

    return 'Other'

def scan_and_analyze_files(base_path):
    """Scan all Notes folders and analyze their content."""
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
                    # Extract content
                    content = extract_file_content(filepath)

                    file_info = {
                        'filename': file,
                        'path': filepath,
                        'subject_folder': subject,
                        'hash': get_file_hash(filepath),
                        'content_preview': content[:500],
                        'analyzed_theme': analyze_content_theme(content, file)
                    }
                    all_files.append(file_info)
                    print(f"  Analyzed: {file} -> {file_info['analyzed_theme']}")

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

def create_organized_structure(base_path, files, duplicates):
    """
    Create an organized folder structure by theme.
    This will create a new 'Organized Notes' folder.
    """
    organized_path = os.path.join(base_path, "Organized Notes")

    # Create theme folders
    themes = set(f['analyzed_theme'] for f in files)
    for theme in sorted(themes):
        theme_path = os.path.join(organized_path, theme)
        os.makedirs(theme_path, exist_ok=True)

    # Track which files we've already copied (to handle duplicates)
    copied_hashes = set()

    # Copy files to appropriate theme folders
    for file_info in files:
        file_hash = file_info['hash']

        # Skip if we've already copied this file (duplicate)
        if file_hash in copied_hashes:
            continue

        # Mark as copied
        copied_hashes.add(file_hash)

        # Determine destination
        theme = file_info['analyzed_theme']
        dest_path = os.path.join(organized_path, theme, file_info['filename'])

        # Copy file
        try:
            shutil.copy2(file_info['path'], dest_path)
            print(f"Copied: {file_info['filename']} -> {theme}/")
        except Exception as e:
            print(f"Error copying {file_info['filename']}: {e}")

    return organized_path

def generate_detailed_report(files, duplicates, output_path):
    """Generate a detailed report with content analysis."""
    report = {
        'summary': {
            'total_files': len(files),
            'unique_files': len(set(f['hash'] for f in files)),
            'duplicate_groups': len(duplicates),
            'total_duplicate_files': sum(len(files) for files in duplicates.values())
        },
        'files_by_analyzed_theme': defaultdict(list),
        'files_by_subject': defaultdict(list),
        'duplicates': {},
        'misplaced_files': [],
        'content_analysis': []
    }

    # Organize data
    for file_info in files:
        report['files_by_analyzed_theme'][file_info['analyzed_theme']].append({
            'filename': file_info['filename'],
            'path': file_info['path']
        })
        report['files_by_subject'][file_info['subject_folder']].append({
            'filename': file_info['filename'],
            'analyzed_theme': file_info['analyzed_theme']
        })

        # Check if file might be misplaced
        subject_theme = file_info['subject_folder'].split(' - ')[1]
        if file_info['analyzed_theme'] != 'Other':
            # Check if analyzed theme doesn't match subject
            if subject_theme not in file_info['analyzed_theme']:
                report['misplaced_files'].append({
                    'filename': file_info['filename'],
                    'path': file_info['path'],
                    'subject': file_info['subject_folder'],
                    'analyzed_theme': file_info['analyzed_theme'],
                    'content_preview': file_info['content_preview'][:200]
                })

    # Format duplicates
    for hash_val, dup_files in duplicates.items():
        report['duplicates'][hash_val[:8]] = [
            {
                'filename': f['filename'],
                'path': f['path'],
                'analyzed_theme': f['analyzed_theme']
            }
            for f in dup_files
        ]

    # Convert defaultdicts
    report['files_by_analyzed_theme'] = dict(report['files_by_analyzed_theme'])
    report['files_by_subject'] = dict(report['files_by_subject'])

    # Write report
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(report, f, indent=2, ensure_ascii=False)

    return report

def main():
    base_path = "/home/ngobiro/projects/pngobiro.github.io/colleges/ksl/Advocates Training Program"
    report_path = os.path.join(base_path, "scripts", "detailed_notes_analysis.json")

    print("=" * 80)
    print("Deep ATP Notes Organization Analysis")
    print("=" * 80)

    # Scan and analyze files
    print("\nStep 1: Scanning and analyzing file contents...")
    files = scan_and_analyze_files(base_path)
    print(f"\nAnalyzed {len(files)} files")

    # Find duplicates
    print("\nStep 2: Identifying duplicates...")
    duplicates = find_duplicates(files)
    print(f"Found {len(duplicates)} groups of duplicate files")

    # Generate detailed report
    print("\nStep 3: Generating detailed report...")
    report = generate_detailed_report(files, duplicates, report_path)
    print(f"Report saved to: {report_path}")

    # Print summary
    print("\n" + "=" * 80)
    print("DETAILED SUMMARY")
    print("=" * 80)
    print(f"Total files analyzed: {report['summary']['total_files']}")
    print(f"Unique files: {report['summary']['unique_files']}")
    print(f"Duplicate groups: {report['summary']['duplicate_groups']}")
    print(f"Total duplicate files: {report['summary']['total_duplicate_files']}")
    print(f"Potentially misplaced files: {len(report['misplaced_files'])}")

    print("\nFiles by analyzed theme:")
    for theme, file_list in sorted(report['files_by_analyzed_theme'].items()):
        print(f"  {theme}: {len(file_list)} files")

    print("\n" + "=" * 80)
    print("TOP 10 DUPLICATE GROUPS")
    print("=" * 80)
    for i, (hash_short, dup_list) in enumerate(list(report['duplicates'].items())[:10], 1):
        print(f"\n{i}. Hash: {hash_short}...")
        for item in dup_list:
            print(f"   - {item['filename']} ({item['analyzed_theme']})")

    print("\n" + "=" * 80)
    print("TOP 10 POTENTIALLY MISPLACED FILES")
    print("=" * 80)
    for i, item in enumerate(report['misplaced_files'][:10], 1):
        print(f"\n{i}. {item['filename']}")
        print(f"   Location: {item['subject']}")
        print(f"   Analyzed theme: {item['analyzed_theme']}")
        print(f"   Content preview: {item['content_preview'][:100]}...")

    print("\n" + "=" * 80)
    print("Analysis complete!")
    print("=" * 80)

if __name__ == "__main__":
    main()