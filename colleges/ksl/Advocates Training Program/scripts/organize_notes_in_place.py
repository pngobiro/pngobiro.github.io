#!/usr/bin/env python3
"""
Script to organize notes within each subject's Notes folder.
This script will:
1. Analyze file contents to identify themes/topics
2. Create theme-based subfolders within each Notes folder
3. Remove duplicates
4. Rename and organize files based on actual content
"""

import os
import json
import shutil
import hashlib
from pathlib import Path
from collections import defaultdict
import re

def get_file_hash(filepath):
    """Calculate MD5 hash of a file."""
    hash_md5 = hashlib.md5()
    with open(filepath, "rb") as f:
        for chunk in iter(lambda: f.read(4096), b""):
            hash_md5.update(chunk)
    return hash_md5.hexdigest()

def extract_text_from_pdf(filepath):
    """Extract text from PDF using command-line tools."""
    try:
        # Try pdftotext
        result = os.popen(f'pdftotext "{filepath}" - 2>/dev/null | head -n 200').read()
        if result.strip():
            return result[:3000]
    except Exception:
        pass

    # Try strings command as fallback
    try:
        result = os.popen(f'strings "{filepath}" 2>/dev/null | head -n 300').read()
        if result.strip():
            return result[:3000]
    except Exception:
        pass

    return "[Could not extract PDF content]"

def extract_text_from_docx(filepath):
    """Extract text from DOCX using command-line tools."""
    try:
        # Try unzip to extract docx content (docx is a zip)
        result = os.popen(f'unzip -p "{filepath}" word/document.xml 2>/dev/null | grep -oP \'[^<>]{10,100}\' | head -n 200').read()
        if result.strip():
            return result[:3000]
    except Exception:
        pass

    return "[Could not extract DOCX content]"

def extract_file_content(filepath):
    """Extract text content from various file types."""
    ext = os.path.splitext(filepath)[1].lower()

    if ext == '.pdf':
        return extract_text_from_pdf(filepath)
    elif ext == '.docx':
        return extract_text_from_docx(filepath)
    elif ext == '.doc':
        return "[DOC file - needs conversion]"
    elif ext in ['.ppt', '.pptx']:
        # Try unzip for pptx
        try:
            result = os.popen(f'unzip -p "{filepath}" ppt/slides/slide1.xml 2>/dev/null | grep -oP \'[^<>]{10,100}\' | head -n 100').read()
            if result.strip():
                return result[:3000]
        except Exception:
            pass
        return "[Presentation file]"
    else:
        # Try to read as text
        try:
            with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
                return f.read(3000)
        except Exception:
            return "[Could not extract content]"

def analyze_content_topic(text, filename, subject):
    """
    Analyze content to determine the specific topic/sub-theme.
    Returns the most likely topic based on keywords.
    """
    text_lower = text.lower()

    # Define specific topics based on subject
    topic_keywords = {}

    if 'civil litigation' in subject.lower():
        topic_keywords = {
            'Pre-trial Processes': ['pre-trial', 'pre trial', 'demand letter', 'client interview', 'preliminary'],
            'Pleadings': ['plaint', 'defence', 'defense', 'statement of claim', 'statement of defence', 'reply', 'pleading'],
            'Summons & Service': ['summons', 'service', 'originating summons', 'chamber summons', 'service of summons'],
            'Applications': ['application', 'injunction', 'interlocutory', 'notice of motion', 'chamber summons'],
            'Jurisdiction': ['jurisdiction', 'competence', 'jurisdictional', 'court jurisdiction'],
            'Judicial Review': ['judicial review', 'certiorari', 'mandamus', 'prohibition', 'judicial review application'],
            'Trial Process': ['trial', 'evidence', 'witness', 'examination', 'cross-examination', 'testimony'],
            'Judgment & Decree': ['judgment', 'decree', 'judgement', 'court decision', 'ruling'],
            'Execution': ['execution', 'garnishee', 'attachment', 'warrant of execution', 'decree'],
            'Appeals': ['appeal', 'appellate', 'court of appeal', 'memorandum of appeal', 'appeal process'],
            'Review': ['review', 'review application', 'review of judgment'],
            'Costs': ['costs', 'taxation of costs', 'legal costs', 'attorney fees'],
            'Case Management': ['case management', 'pre-trial conference', 'directions', 'case conference'],
            'Overriding Objective': ['overriding objective', 'overriding', 'expeditious', 'fair'],
            'Third Party': ['third party', 'third-party notice', 'third party proceedings'],
            'Striking Out': ['strike out', 'struck out', 'dismiss', 'dismissal']
        }
    elif 'criminal litigation' in subject.lower():
        topic_keywords = {
            'Arrest': ['arrest', 'arrest warrant', 'police arrest', 'arrest without warrant'],
            'Charges': ['charge', 'charge sheet', 'information', 'charging', 'complaint'],
            'Bail & Bond': ['bail', 'bond', 'bail application', 'bond terms', 'surety'],
            'Pleas': ['plea', 'plead guilty', 'plea bargaining', 'not guilty', 'plea taking'],
            'Trial': ['trial', 'criminal trial', 'prosecution', 'defense', 'trial process'],
            'Sentencing': ['sentence', 'sentencing', 'punishment', 'penalty', 'imprisonment'],
            'Habeas Corpus': ['habeas corpus', 'unlawful detention', 'illegal detention'],
            'Extradition': ['extradition', 'extradite', 'surrender', 'international'],
            'Inquests': ['inquest', 'coroner', 'death inquiry', 'post-mortem'],
            'Private Prosecution': ['private prosecution', 'private prosecutor', 'citizen prosecution'],
            'Identification': ['identification', 'identification parade', 'dock identification', 'witness identification'],
            'Evidence': ['evidence', 'witness', 'testimony', 'exhibit', 'admissibility']
        }
    elif 'probate' in subject.lower() or 'succession' in subject.lower():
        topic_keywords = {
            'Wills': ['will', 'testament', 'testator', 'testamentary', 'will writing'],
            'Probate': ['probate', 'grant of probate', 'probate application', 'executor'],
            'Administration': ['administration', 'administrator', 'letters of administration', 'intestate'],
            'Succession': ['succession', 'estate succession', 'inheritance', 'heir'],
            'Beneficiaries': ['beneficiary', 'benefit', 'inherit', 'share'],
            'Estate Management': ['estate', 'deceased estate', 'estate administration', 'estate assets'],
            'Disputes': ['dispute', 'contest', 'challenge', 'will dispute', 'succession dispute']
        }
    elif 'legal writing' in subject.lower() or 'drafting' in subject.lower():
        topic_keywords = {
            'Legal Writing': ['legal writing', 'writing', 'effective writing', 'clear writing'],
            'Drafting': ['drafting', 'draft', 'legal drafting', 'document drafting'],
            'Agreements': ['agreement', 'contract', 'legal agreement', 'commercial agreement'],
            'Affidavits': ['affidavit', 'statutory declaration', 'affirmation', 'deponent'],
            'Pleadings': ['pleading', 'plaint', 'defence', 'statement of claim', 'statement of defence'],
            'Legal Opinions': ['legal opinion', 'opinion', 'legal advice', 'advisory'],
            'Letters': ['letter', 'legal letter', 'client letter', 'correspondence'],
            'Memoranda': ['memorandum', 'memo', 'internal memo', 'office memorandum'],
            'Precedents': ['precedent', 'sample', 'template', 'form', 'model'],
            'Grammar & Style': ['grammar', 'style', 'punctuation', 'syntax', 'language']
        }
    elif 'trial advocacy' in subject.lower():
        topic_keywords = {
            'Examination': ['examination', 'examination in chief', 'direct examination', 'examine'],
            'Cross-Examination': ['cross', 'cross-examination', 'cross examination', 'crossing'],
            'Re-Examination': ['re-examination', 'reexamination', 're-direct'],
            'Opening Statements': ['opening', 'opening statement', 'opening address'],
            'Closing Arguments': ['closing', 'closing argument', 'summing up', 'final address'],
            'Evidence': ['evidence', 'evidential', 'admissibility', 'exhibit'],
            'Witnesses': ['witness', 'testimony', 'expert witness', 'lay witness'],
            'Objections': ['objection', 'sustained', 'overruled', 'objection rule'],
            'Courtroom Skills': ['courtroom', 'advocacy skills', 'presentation', 'persuasion'],
            'Case Theory': ['case theory', 'theme', 'story', 'narrative']
        }
    elif 'professional ethics' in subject.lower():
        topic_keywords = {
            'Advocate Conduct': ['conduct', 'advocate conduct', 'behavior', 'professionalism'],
            'Client Relations': ['client', 'client-advocate', 'client confidentiality', 'fiduciary'],
            'Conflict of Interest': ['conflict', 'conflict of interest', 'conflict situation'],
            'Advocates Lien': ['lien', 'advocates lien', 'retainer', 'fees'],
            'Accountability': ['account', 'accountability', 'accounting', 'trust account'],
            'Professional Misconduct': ['misconduct', 'disciplinary', 'complaint', 'disciplinary action'],
            'Advocates Act': ['advocates act', 'statute', 'regulation', 'rules'],
            'Confidentiality': ['confidential', 'confidentiality', 'privilege', 'privileged'],
            'Professional Fees': ['fees', 'professional fees', 'billing', 'charges'],
            'Ethics Rules': ['ethics', 'ethical', 'code of ethics', 'professional rules']
        }
    elif 'legal practice management' in subject.lower():
        topic_keywords = {
            'Firm Management': ['firm', 'law firm', 'practice', 'management'],
            'Client Management': ['client', 'client management', 'client relations', 'client service'],
            'File Management': ['file', 'file management', 'case file', 'document management'],
            'Office Administration': ['office', 'administration', 'office management', 'staff'],
            'Accounting': ['accounting', 'financial', 'bookkeeping', 'accounts'],
            'Billing': ['billing', 'invoicing', 'fees collection', 'payment'],
            'Time Management': ['time', 'timekeeping', 'billing hours', 'productivity'],
            'Marketing': ['marketing', 'business development', 'promotion', 'networking'],
            'Technology': ['technology', 'software', 'legal tech', 'automation'],
            'Human Resources': ['staff', 'employees', 'hiring', 'training', 'hr']
        }
    elif 'conveyancing' in subject.lower():
        topic_keywords = {
            'Land Registration': ['registration', 'land registration', 'title', 'title deed'],
            'Transfers': ['transfer', 'property transfer', 'conveyance', 'transfer of land'],
            'Leases': ['lease', 'tenancy', 'landlord', 'tenant', 'rental'],
            'Mortgages': ['mortgage', 'charge', 'security', 'lender', 'borrower'],
            'Land Control': ['land control', 'consent', 'board', 'land control board'],
            'Title Documents': ['title', 'title deed', 'certificate of title', 'search'],
            'Property Law': ['property', 'land law', 'real property', 'immovable property'],
            'Stamp Duty': ['stamp duty', 'taxation', 'land tax', 'fees'],
            'Agreements': ['agreement', 'sale agreement', 'purchase agreement', 'contract'],
            'Disputes': ['dispute', 'boundary dispute', 'ownership dispute', 'land dispute']
        }
    elif 'commercial' in subject.lower():
        topic_keywords = {
            'Partnerships': ['partnership', 'partner', 'partnership act', 'partnership agreement'],
            'Companies': ['company', 'companies act', 'corporation', 'limited company'],
            'Business Names': ['business name', 'sole proprietorship', 'registration'],
            'Commercial Agreements': ['commercial agreement', 'business agreement', 'trade agreement'],
            'Mergers & Acquisitions': ['merger', 'acquisition', 'takeover', 'consolidation'],
            'Securities': ['securities', 'shares', 'stock', 'capital', 'investment'],
            'Banking': ['banking', 'bank', 'financial institution', 'loan'],
            'Insurance': ['insurance', 'policy', 'insurer', 'insured'],
            'Intellectual Property': ['intellectual property', 'patent', 'trademark', 'copyright'],
            'Commercial Contracts': ['commercial contract', 'business contract', 'trade contract']
        }

    # Score each topic based on keyword matches
    topic_scores = defaultdict(float)
    for topic, keywords in topic_keywords.items():
        for keyword in keywords:
            count = text_lower.count(keyword)
            if count > 0:
                topic_scores[topic] += count

        # Also check filename
        filename_lower = filename.lower()
        for keyword in keywords:
            if keyword in filename_lower:
                topic_scores[topic] += 2  # Give more weight to filename matches

    # Return the topic with highest score, or 'General' if no clear match
    if topic_scores:
        best_topic = max(topic_scores.items(), key=lambda x: x[1])
        if best_topic[1] > 0:
            return best_topic[0]

    return 'General'

def organize_notes_folder(notes_path):
    """Organize files within a single Notes folder."""
    print(f"\n{'='*80}")
    print(f"Organizing: {notes_path}")
    print(f"{'='*80}")

    # Get all files
    files = []
    for item in os.listdir(notes_path):
        item_path = os.path.join(notes_path, item)
        if os.path.isfile(item_path):
            files.append(item)

    print(f"Found {len(files)} files")

    # Analyze each file
    file_info_list = []
    for filename in files:
        filepath = os.path.join(notes_path, filename)
        try:
            content = extract_file_content(filepath)
            subject = os.path.basename(os.path.dirname(notes_path))
            topic = analyze_content_topic(content, filename, subject)

            file_info = {
                'filename': filename,
                'path': filepath,
                'hash': get_file_hash(filepath),
                'topic': topic,
                'content_preview': content[:200]
            }
            file_info_list.append(file_info)
            print(f"  {filename} -> {topic}")
        except Exception as e:
            print(f"  Error processing {filename}: {e}")

    # Find duplicates
    hash_map = defaultdict(list)
    for file_info in file_info_list:
        hash_map[file_info['hash']].append(file_info)

    duplicates = {h: files for h, files in hash_map.items() if len(files) > 1}

    if duplicates:
        print(f"\nFound {len(duplicates)} duplicate groups:")
        for hash_val, dup_files in duplicates.items():
            print(f"  Hash {hash_val[:8]}:")
            for f in dup_files:
                print(f"    - {f['filename']}")

    # Create topic folders
    topics = set(f['topic'] for f in file_info_list)
    for topic in sorted(topics):
        topic_path = os.path.join(notes_path, topic)
        if not os.path.exists(topic_path):
            os.makedirs(topic_path)
            print(f"\nCreated folder: {topic}")

    # Move files to topic folders (keeping one copy of duplicates)
    moved_hashes = set()
    for file_info in file_info_list:
        if file_info['hash'] in moved_hashes:
            # This is a duplicate, skip it
            continue

        moved_hashes.add(file_info['hash'])

        # Move file to topic folder
        topic = file_info['topic']
        src = file_info['path']
        dst = os.path.join(notes_path, topic, file_info['filename'])

        if src != dst:  # Only move if not already in the right place
            try:
                shutil.move(src, dst)
                print(f"  Moved: {file_info['filename']} -> {topic}/")
            except Exception as e:
                print(f"  Error moving {file_info['filename']}: {e}")

    # Report duplicates that were not moved
    duplicate_files_to_remove = []
    for hash_val, dup_files in duplicates.items():
        # Keep the first file, mark others for potential removal
        for file_info in dup_files[1:]:
            if os.path.exists(file_info['path']):
                duplicate_files_to_remove.append(file_info)

    if duplicate_files_to_remove:
        print(f"\n{len(duplicate_files_to_remove)} duplicate files can be removed:")
        for f in duplicate_files_to_remove:
            print(f"  - {f['filename']} (duplicate of {dup_files[0]['filename']})")

    return {
        'total_files': len(files),
        'topics': list(topics),
        'duplicate_groups': len(duplicates),
        'duplicate_files': len(duplicate_files_to_remove),
        'organized_files': len(file_info_list) - len(duplicate_files_to_remove)
    }

def main():
    base_path = "/home/ngobiro/projects/pngobiro.github.io/colleges/ksl/Advocates Training Program"

    print("=" * 80)
    print("ATP Notes Organization - In-Place")
    print("=" * 80)
    print("\nThis script will organize files within each subject's Notes folder")
    print("by creating topic-based subfolders and removing duplicates.\n")

    # Find all Notes folders
    notes_folders = []
    for item in os.listdir(base_path):
        item_path = os.path.join(base_path, item)
        if os.path.isdir(item_path) and item.startswith('ATP'):
            notes_path = os.path.join(item_path, 'Notes')
            if os.path.exists(notes_path):
                notes_folders.append(notes_path)

    print(f"Found {len(notes_folders)} Notes folders to organize")

    # Organize each folder
    results = {}
    for notes_path in notes_folders:
        subject = os.path.basename(os.path.dirname(notes_path))
        results[subject] = organize_notes_folder(notes_path)

    # Print final summary
    print("\n" + "=" * 80)
    print("FINAL SUMMARY")
    print("=" * 80)

    for subject, result in results.items():
        print(f"\n{subject}:")
        print(f"  Total files: {result['total_files']}")
        print(f"  Topics created: {len(result['topics'])}")
        print(f"  Duplicate groups: {result['duplicate_groups']}")
        print(f"  Duplicate files: {result['duplicate_files']}")
        print(f"  Organized files: {result['organized_files']}")

    print("\n" + "=" * 80)
    print("Organization complete!")
    print("=" * 80)

if __name__ == "__main__":
    main()
