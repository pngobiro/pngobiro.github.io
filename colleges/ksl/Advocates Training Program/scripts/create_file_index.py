#!/usr/bin/env python3
"""
Script to create a text file for each subject containing:
- Full path of each file
- Relative path
- Text excerpt from each file
One text file per subject covering all files in the Notes folder.
"""

import os
import sys
from pathlib import Path

# Add virtual environment to path for python-docx
sys.path.insert(0, '/tmp/docx_env/lib/python3.12/site-packages')

try:
    from docx import Document
    HAS_DOCX = True
except ImportError:
    HAS_DOCX = False
    print("Warning: python-docx not available")

try:
    from pptx import Presentation
    HAS_PPTX = True
except ImportError:
    HAS_PPTX = False
    print("Warning: python-pptx not available")

def extract_text_from_pdf(filepath):
    """Extract text from PDF using command-line tools."""
    try:
        result = os.popen(f'pdftotext "{filepath}" - 2>/dev/null | head -n 100').read()
        if result.strip():
            return result[:2000]
    except Exception:
        pass

    try:
        result = os.popen(f'strings "{filepath}" 2>/dev/null | head -n 200').read()
        if result.strip():
            return result[:2000]
    except Exception:
        pass

    return "[Could not extract PDF content]"

def extract_text_from_docx(filepath):
    """Extract text from DOCX using python-docx library."""
    if HAS_DOCX:
        try:
            doc = Document(filepath)
            text = []
            for para in doc.paragraphs[:100]:  # Read first 100 paragraphs
                if para.text.strip():
                    text.append(para.text)
            return ' '.join(text)[:2000]
        except Exception as e:
            return f"[Error reading DOCX: {e}]"
    else:
        # Fallback to unzip method
        try:
            result = os.popen(f'unzip -p "{filepath}" word/document.xml 2>/dev/null | grep -oP \'[^<>]{10,100}\' | head -n 100').read()
            if result.strip():
                return result[:2000]
        except Exception:
            pass
        return "[Could not extract DOCX content]"

def extract_text_from_pptx(filepath):
    """Extract text from PPTX using unzip method."""
    try:
        # Extract text from slide XML files, filtering out XML tags
        result = os.popen(f'unzip -p "{filepath}" ppt/slides/slide*.xml 2>/dev/null | sed \'s/<[^>]*>//g\' | grep -v "^[[:space:]]*$" | head -n 100').read()
        if result.strip() and len(result) > 100:
            return result[:2000]
    except Exception as e:
        pass

    # Fallback: use strings command to extract readable text
    try:
        result = os.popen(f'strings -n 10 "{filepath}" 2>/dev/null | grep -v "^[[:space:]]*$" | grep -v "ppt/slides" | grep -v "Content_Types" | head -n 100').read()
        if result.strip() and len(result) > 100:
            return result[:2000]
    except Exception as e:
        pass

    return "[Could not extract PPTX content]"

def extract_file_content(filepath):
    """Extract text content from various file types."""
    ext = os.path.splitext(filepath)[1].lower()

    if ext == '.pdf':
        return extract_text_from_pdf(filepath)
    elif ext == '.docx':
        return extract_text_from_docx(filepath)
    elif ext == '.doc':
        return "[DOC file - conversion needed]"
    elif ext == '.pptx':
        return extract_text_from_pptx(filepath)
    elif ext == '.ppt':
        return "[PPT file - conversion needed]"
    else:
        try:
            with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
                return f.read(2000)
        except Exception:
            return "[Could not extract content]"

def process_subject_notes(subject_path, base_path):
    """Process all files in a subject's Notes folder and create index."""
    notes_path = os.path.join(subject_path, 'Notes')

    if not os.path.exists(notes_path):
        print(f"Notes folder not found: {notes_path}")
        return

    subject_name = os.path.basename(subject_path)
    output_file = os.path.join(subject_path, f"{subject_name}_FILE_INDEX.txt")

    print(f"Processing: {subject_name}")

    # Collect all files
    all_files = []
    for root, dirs, files in os.walk(notes_path):
        # Skip backup folders
        dirs[:] = [d for d in dirs if 'DUPLICATES_BACKUP' not in d]

        for file in files:
            filepath = os.path.join(root, file)
            all_files.append(filepath)

    all_files.sort()

    # Create index file
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write("=" * 100 + "\n")
        f.write(f"FILE INDEX FOR: {subject_name}\n")
        f.write(f"Notes Folder: {notes_path}\n")
        f.write(f"Total Files: {len(all_files)}\n")
        f.write("=" * 100 + "\n\n")

        for i, filepath in enumerate(all_files, 1):
            filename = os.path.basename(filepath)
            relative_path = os.path.relpath(filepath, notes_path)

            f.write(f"\n{'=' * 100}\n")
            f.write(f"FILE #{i}: {filename}\n")
            f.write(f"{'=' * 100}\n")
            f.write(f"Full Path: {filepath}\n")
            f.write(f"Relative Path: {relative_path}\n")
            f.write(f"File Size: {os.path.getsize(filepath):,} bytes\n")

            # Extract content
            try:
                content = extract_file_content(filepath)

                # Clean up content
                content = content.strip()
                # Remove excessive whitespace
                content = ' '.join(content.split())

                f.write(f"\n--- CONTENT EXCERPT ---\n")
                f.write(content[:1500])
                if len(content) > 1500:
                    f.write("\n... [Content truncated]")
                f.write("\n--- END EXCERPT ---\n")

            except Exception as e:
                f.write(f"\n--- ERROR EXTRACTING CONTENT ---\n")
                f.write(f"Error: {e}\n")
                f.write("--- END ERROR ---\n")

            f.write("\n")

    print(f"  Created: {output_file}")
    print(f"  Indexed {len(all_files)} files")

def main():
    base_path = "/home/ngobiro/projects/pngobiro.github.io/colleges/ksl/Advocates Training Program"

    print("=" * 100)
    print("CREATE FILE INDEX FOR EACH SUBJECT")
    print("=" * 100)
    print("\nThis script will create a text file for each subject containing:")
    print("- Full path of each file")
    print("- Relative path")
    print("- Text excerpt from each file\n")

    # Find all subject folders
    subject_folders = []
    for item in os.listdir(base_path):
        item_path = os.path.join(base_path, item)
        if os.path.isdir(item_path) and item.startswith('ATP'):
            subject_folders.append(item_path)

    subject_folders.sort()

    print(f"Found {len(subject_folders)} subject folders\n")

    # Process each subject
    for subject_path in subject_folders:
        process_subject_notes(subject_path, base_path)

    print("\n" + "=" * 100)
    print("COMPLETE")
    print("=" * 100)
    print(f"\nCreated {len(subject_folders)} index files:")
    for subject_path in subject_folders:
        subject_name = os.path.basename(subject_path)
        index_file = os.path.join(subject_path, f"{subject_name}_FILE_INDEX.txt")
        print(f"  - {index_file}")

if __name__ == "__main__":
    main()