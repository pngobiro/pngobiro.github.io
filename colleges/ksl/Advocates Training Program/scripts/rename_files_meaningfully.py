#!/usr/bin/env python3
"""
Script to rename files with meaningful names based on their actual content.
This will extract key information from documents and create descriptive filenames.
"""

import os
import re
import shutil
from pathlib import Path
from datetime import datetime

def extract_text_from_pdf(filepath):
    """Extract text from PDF using command-line tools."""
    try:
        result = os.popen(f'pdftotext "{filepath}" - 2>/dev/null | head -n 300').read()
        if result.strip():
            return result[:5000]
    except Exception:
        pass

    try:
        result = os.popen(f'strings "{filepath}" 2>/dev/null | head -n 500').read()
        if result.strip():
            return result[:5000]
    except Exception:
        pass

    return ""

def extract_text_from_docx(filepath):
    """Extract text from DOCX using command-line tools."""
    try:
        result = os.popen(f'unzip -p "{filepath}" word/document.xml 2>/dev/null | grep -oP \'[^<>]{10,100}\' | head -n 300').read()
        if result.strip():
            return result[:5000]
    except Exception:
        pass

    return ""

def extract_file_content(filepath):
    """Extract text content from various file types."""
    ext = os.path.splitext(filepath)[1].lower()

    if ext == '.pdf':
        return extract_text_from_pdf(filepath)
    elif ext == '.docx':
        return extract_text_from_docx(filepath)
    elif ext == '.doc':
        return ""
    elif ext in ['.ppt', '.pptx']:
        try:
            result = os.popen(f'unzip -p "{filepath}" ppt/slides/slide1.xml 2>/dev/null | grep -oP \'[^<>]{10,100}\' | head -n 200').read()
            if result.strip():
                return result[:5000]
        except Exception:
            pass
        return ""
    else:
        try:
            with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
                return f.read(5000)
        except Exception:
            return ""

def generate_meaningful_name(text, original_name, subject):
    """
    Generate a meaningful filename based on content.
    Looks for titles, headings, and key phrases in the document.
    """
    text_lower = text.lower()

    # Try to find a title in the first few lines
    lines = text.split('\n')[:20]

    # Common title patterns
    title_patterns = [
        r'^(chapter|topic|lecture|session|unit|module)\s+\d+[:\.\-]?\s*(.+)$',
        r'^(the\s+)?(.+?)(\s+(act|law|rules|code|guide|manual|handbook|notes|outline|syllabus))$',
        r'^(introduction\s+to\s+.+)$',
        r'^(.+?)(\s+(principles|fundamentals|basics|overview|summary|revision|notes))$',
        r'^(.+?)(\s+(procedure|process|guide|handbook|manual))$',
        r'^\s*(.+?)(\s+(in\s+kenya|under\s+.+?act))$',
        r'^\s*[A-Z][A-Z\s]{10,80}$',  # All caps titles
    ]

    # Look for potential titles in first lines
    for line in lines:
        if not line:
            continue
        line = line.strip()
        if len(line) > 10 and len(line) < 100:
            # Check if it matches title patterns
            for pattern in title_patterns:
                match = re.match(pattern, line, re.IGNORECASE)
                if match:
                    title = match.group(2) if match.lastindex >= 2 else match.group(0)
                    # Clean up the title
                    title = re.sub(r'[^\w\s\-]', '', title)
                    title = re.sub(r'\s+', '_', title)
                    title = title.strip('_')
                    if len(title) > 5:
                        return title.upper()

    # Look for section headings
    heading_patterns = [
        r'(introduction\s+to\s+.+)',
        r'(overview\s+of\s+.+)',
        r'(principles\s+of\s+.+)',
        r'(fundamentals\s+of\s+.+)',
        r'(guide\s+to\s+.+)',
        r'(manual\s+on\s+.+)',
        r'(handbook\s+for\s+.+)',
        r'(notes\s+on\s+.+)',
        r'(revision\s+notes?\s+on\s+.+)',
        r'(summary\s+of\s+.+)',
        r'(procedure\s+for\s+.+)',
        r'(process\s+of\s+.+)',
    ]

    for pattern in heading_patterns:
        matches = re.findall(pattern, text, re.IGNORECASE)
        if matches:
            title = matches[0]
            title = re.sub(r'[^\w\s\-]', '', title)
            title = re.sub(r'\s+', '_', title)
            title = title.strip('_')
            if len(title) > 5:
                return title.upper()

    # Look for key phrases and topics
    key_phrases = {
        'ATP 106': {
            'office practice': 'OFFICE_PRACTICE',
            'law firm': 'LAW_FIRM_MANAGEMENT',
            'client management': 'CLIENT_MANAGEMENT',
            'file management': 'FILE_MANAGEMENT',
            'accounting': 'ACCOUNTING',
            'billing': 'BILLING',
            'time keeping': 'TIME_KEEPING',
            'marketing': 'MARKETING',
            'staff': 'STAFF_MANAGEMENT',
            'technology': 'LEGAL_TECHNOLOGY',
            'professional fees': 'PROFESSIONAL_FEES',
            'trust account': 'TRUST_ACCOUNT',
            'office administration': 'OFFICE_ADMINISTRATION',
        },
        'ATP 100': {
            'civil litigation': 'CIVIL_LITIGATION',
            'pre trial': 'PRE_TRIAL_PROCESSES',
            'plaint': 'PLAINT_DRAFTING',
            'defence': 'DEFENCE_DRAFTING',
            'summons': 'SUMMONS',
            'injunction': 'INJUNCTIONS',
            'jurisdiction': 'JURISDICTION',
            'judicial review': 'JUDICIAL_REVIEW',
            'execution': 'EXECUTION_OF_DECREES',
            'appeal': 'APPEALS',
            'review': 'REVIEW_APPLICATIONS',
            'costs': 'COSTS',
            'case management': 'CASE_MANAGEMENT',
            'overriding objective': 'OVERRIDING_OBJECTIVE',
            'third party': 'THIRD_PARTY_PROCEEDINGS',
        },
        'ATP 101': {
            'criminal litigation': 'CRIMINAL_LITIGATION',
            'arrest': 'ARREST_PROCEDURES',
            'charge': 'CHARGE_SHEET',
            'bail': 'BAIL_AND_BOND',
            'plea': 'PLEA_BARGAINING',
            'trial': 'CRIMINAL_TRIAL',
            'sentencing': 'SENTENCING',
            'habeas corpus': 'HABEAS_CORPUS',
            'extradition': 'EXTRADITION',
            'inquest': 'INQUESTS',
            'private prosecution': 'PRIVATE_PROSECUTION',
            'identification': 'IDENTIFICATION_PARADE',
        },
        'ATP 103': {
            'legal writing': 'LEGAL_WRITING',
            'drafting': 'LEGAL_DRAFTING',
            'agreement': 'AGREEMENT_DRAFTING',
            'affidavit': 'AFFIDAVIT_DRAFTING',
            'pleading': 'PLEADING_DRAFTING',
            'legal opinion': 'LEGAL_OPINION',
            'letter': 'LEGAL_LETTER',
            'memorandum': 'MEMORANDUM',
            'precedent': 'LEGAL_PRECEDENT',
        },
        'ATP 104': {
            'trial advocacy': 'TRIAL_ADVOCACY',
            'examination': 'EXAMINATION_TECHNIQUES',
            'cross examination': 'CROSS_EXAMINATION',
            'opening statement': 'OPENING_STATEMENTS',
            'closing argument': 'CLOSING_ARGUMENTS',
            'evidence': 'EVIDENCE_LAW',
            'witness': 'WITNESS_EXAMINATION',
            'objection': 'OBJECTION_RULES',
        },
        'ATP 105': {
            'ethics': 'PROFESSIONAL_ETHICS',
            'advocate conduct': 'ADVOCATE_CONDUCT',
            'client': 'CLIENT_RELATIONS',
            'conflict': 'CONFLICT_OF_INTEREST',
            'lien': 'ADVOCATES_LIEN',
            'account': 'ACCOUNTABILITY',
            'confidentiality': 'CLIENT_CONFIDENTIALITY',
            'misconduct': 'PROFESSIONAL_MISCONDUCT',
            'advocates act': 'ADVOCATES_ACT',
        },
        'ATP 102': {
            'probate': 'PROBATE',
            'succession': 'SUCCESSION',
            'will': 'WILL_DRAFTING',
            'administration': 'ESTATE_ADMINISTRATION',
            'intestate': 'INTESTATE_SUCCESSION',
            'beneficiary': 'BENEFICIARIES',
            'executor': 'EXECUTOR_DUTIES',
        },
        'ATP 107': {
            'conveyancing': 'CONVEYANCING',
            'land': 'LAND_LAW',
            'transfer': 'PROPERTY_TRANSFER',
            'lease': 'LEASE_AGREEMENTS',
            'mortgage': 'MORTGAGES',
            'title': 'TITLE_REGISTRATION',
            'stamp duty': 'STAMP_DUTY',
        },
        'ATP 108': {
            'commercial': 'COMMERCIAL_TRANSACTIONS',
            'partnership': 'PARTNERSHIP_LAW',
            'company': 'COMPANY_LAW',
            'business': 'BUSINESS_REGISTRATION',
            'merger': 'MERGERS_ACQUISITIONS',
            'securities': 'SECURITIES',
            'banking': 'BANKING_LAW',
            'insurance': 'INSURANCE_LAW',
        }
    }

    # Check for key phrases based on subject
    for subj_prefix, phrases in key_phrases.items():
        if subj_prefix in subject:
            for phrase, replacement in phrases.items():
                if phrase in text_lower:
                    return replacement

    # If no match found, return a simplified original name
    # Remove ATP codes and numbers, keep meaningful words
    name_without_ext = os.path.splitext(original_name)[0]
    name_without_atp = re.sub(r'^ATP\s*\d+\s*[-–]?\s*', '', name_without_ext, flags=re.IGNORECASE)
    name_cleaned = re.sub(r'^\d+[\.\-]?\s*', '', name_without_atp)  # Remove leading numbers
    name_cleaned = re.sub(r'[^\w\s\-]', '', name_cleaned)
    name_cleaned = re.sub(r'\s+', '_', name_cleaned)
    name_cleaned = name_cleaned.strip('_')

    if len(name_cleaned) > 3:
        return name_cleaned.upper()

    return "DOCUMENT"

def rename_files_in_folder(folder_path, dry_run=True):
    """Rename files in a folder with meaningful names."""
    print(f"\n{'='*80}")
    print(f"Processing: {folder_path}")
    print(f"{'='*80}")

    # Get subject name from parent folder
    subject = os.path.basename(os.path.dirname(os.path.dirname(folder_path)))

    files_renamed = 0
    files_skipped = 0

    for item in os.listdir(folder_path):
        item_path = os.path.join(folder_path, item)

        if os.path.isfile(item_path):
            # Skip backup folders
            if 'DUPLICATES_BACKUP' in item_path:
                continue

            ext = os.path.splitext(item)[1].lower()

            # Only process document files
            if ext not in ['.pdf', '.docx', '.doc', '.ppt', '.pptx']:
                continue

            # Skip files that already have meaningful names
            # (not starting with ATP or just numbers)
            if not re.match(r'^(ATP\s*\d+|[\d\.\-]+)', item, re.IGNORECASE):
                files_skipped += 1
                continue

            try:
                # Extract content
                content = extract_file_content(item_path)

                if not content:
                    files_skipped += 1
                    continue

                # Generate meaningful name
                new_name = generate_meaningful_name(content, item, subject)

                if new_name == "DOCUMENT" or new_name == item:
                    files_skipped += 1
                    continue

                new_filename = f"{new_name}{ext}"
                new_path = os.path.join(folder_path, new_filename)

                # Check if new name already exists
                if os.path.exists(new_path):
                    counter = 1
                    while os.path.exists(new_path):
                        new_filename = f"{new_name}_{counter}{ext}"
                        new_path = os.path.join(folder_path, new_filename)
                        counter += 1

                print(f"\n{item}")
                print(f"  -> {new_filename}")
                print(f"  Content preview: {content[:150].strip()}...")

                if not dry_run:
                    shutil.move(item_path, new_path)
                    print(f"  [RENAMED]")
                else:
                    print(f"  [DRY RUN]")

                files_renamed += 1

            except Exception as e:
                print(f"  Error processing {item}: {e}")
                files_skipped += 1

    print(f"\nFiles renamed: {files_renamed}")
    print(f"Files skipped: {files_skipped}")

    return files_renamed

def process_all_notes_folders(base_path, dry_run=True):
    """Process all Notes folders."""
    notes_folders = []

    for item in os.listdir(base_path):
        item_path = os.path.join(base_path, item)
        if os.path.isdir(item_path) and item.startswith('ATP'):
            # Process all subfolders in Notes
            notes_path = os.path.join(item_path, 'Notes')
            if os.path.exists(notes_path):
                for subfolder in os.listdir(notes_path):
                    subfolder_path = os.path.join(notes_path, subfolder)
                    if os.path.isdir(subfolder_path):
                        notes_folders.append(subfolder_path)

    print(f"Found {len(notes_folders)} topic folders to process")

    total_renamed = 0
    for folder_path in notes_folders:
        renamed = rename_files_in_folder(folder_path, dry_run)
        total_renamed += renamed

    return total_renamed

def main():
    base_path = "/home/ngobiro/projects/pngobiro.github.io/colleges/ksl/Advocates Training Program"

    print("=" * 80)
    print("Rename Files with Meaningful Names")
    print("=" * 80)
    print("\nThis script will rename files with meaningful names based on their content.")
    print("Files like 'ATP 106 - A.pdf' will be renamed to 'OFFICE_PRACTICE.pdf'\n")

    dry_run = False  # Set to False to actually rename files

    total_renamed = process_all_notes_folders(base_path, dry_run)

    print("\n" + "=" * 80)
    print("SUMMARY")
    print("=" * 80)
    print(f"Total files that would be renamed: {total_renamed}")

    if dry_run:
        print("\n[DRY RUN] No files were actually renamed.")
        print("To rename files, edit this script and set dry_run=False")
    else:
        print(f"\nRenamed {total_renamed} files")

if __name__ == "__main__":
    main()