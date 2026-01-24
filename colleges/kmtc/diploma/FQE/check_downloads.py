#!/usr/bin/env python3
"""
Check downloaded StudoCU documents and mark them in the JSON.
Compares downloaded files with document IDs in studocu_documents.json
and adds a 'downloaded' field to track which documents have been saved.
"""

import json
import os
import re
from pathlib import Path
from datetime import datetime


def extract_doc_id_from_filename(filename: str) -> int:
    """
    Extract StudoCU document ID from downloaded filename.
    StudoCU files typically follow patterns like:
    - document_id-title.pdf
    - Some documents might have numbers in the filename
    """
    # Try to extract the first large number that could be a document ID
    # Document IDs are typically 8-10 digits
    matches = re.findall(r'\b(\d{8,10})\b', filename)
    if matches:
        return int(matches[0])
    return None


def scan_downloads(downloads_dir: str = "./downloads") -> dict:
    """
    Scan downloads directory and extract document IDs.
    Returns dict mapping document_id -> (filename, path)
    """
    downloaded_docs = {}
    
    if not os.path.exists(downloads_dir):
        print(f"⚠️  Downloads directory not found: {downloads_dir}")
        return downloaded_docs
    
    print(f"📂 Scanning {downloads_dir}...")
    
    for filename in os.listdir(downloads_dir):
        filepath = os.path.join(downloads_dir, filename)
        
        # Skip directories
        if os.path.isdir(filepath):
            continue
        
        # Extract document ID
        doc_id = extract_doc_id_from_filename(filename)
        
        if doc_id:
            downloaded_docs[doc_id] = {
                'filename': filename,
                'path': filepath,
                'size': os.path.getsize(filepath),
                'modified': datetime.fromtimestamp(os.path.getmtime(filepath)).isoformat()
            }
            print(f"  ✓ Found: {filename} (ID: {doc_id})")
    
    print(f"📊 Total files scanned: {len(downloaded_docs)}\n")
    return downloaded_docs


def update_json_with_downloads(json_file: str, downloaded_docs: dict, output_file: str = None) -> int:
    """
    Update JSON file with download status.
    Returns number of documents marked as downloaded.
    """
    if output_file is None:
        output_file = json_file
    
    print(f"📖 Loading {json_file}...")
    
    with open(json_file, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    total_docs = len(data['documents'])
    matched_count = 0
    
    print(f"🔍 Comparing {total_docs} documents...\n")
    
    # Update documents
    for doc in data['documents']:
        doc_id = doc.get('document_id')
        
        if doc_id and doc_id in downloaded_docs:
            doc['downloaded'] = True
            doc['download_info'] = downloaded_docs[doc_id]
            matched_count += 1
            print(f"  ✅ Matched: {doc['title'][:50]}...")
            print(f"     File: {downloaded_docs[doc_id]['filename']}")
        else:
            # Ensure the field exists even if not downloaded
            if 'downloaded' not in doc:
                doc['downloaded'] = False
    
    print(f"\n💾 Saving updated data to {output_file}...")
    
    # Update metadata
    data['metadata']['last_updated'] = datetime.now().isoformat()
    data['metadata']['documents_downloaded'] = matched_count
    data['metadata']['total_documents'] = total_docs
    
    # Write updated JSON
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    print(f"\n{'='*80}")
    print(f"✅ UPDATE SUMMARY")
    print(f"{'='*80}")
    print(f"Total documents: {total_docs}")
    print(f"Downloaded documents found: {matched_count}")
    print(f"Not downloaded: {total_docs - matched_count}")
    print(f"Match rate: {(matched_count/total_docs*100):.1f}%")
    print(f"{'='*80}\n")
    
    return matched_count


def generate_download_report(json_file: str) -> None:
    """Generate a report of download status."""
    print(f"📋 Generating download report...\n")
    
    with open(json_file, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    downloaded = [doc for doc in data['documents'] if doc.get('downloaded', False)]
    not_downloaded = [doc for doc in data['documents'] if not doc.get('downloaded', False)]
    
    print(f"{'='*80}")
    print(f"DOWNLOAD STATUS REPORT")
    print(f"{'='*80}\n")
    
    print(f"✅ Downloaded ({len(downloaded)} documents):")
    for i, doc in enumerate(downloaded[:10], 1):
        print(f"  {i}. {doc['title'][:60]}...")
    if len(downloaded) > 10:
        print(f"  ... and {len(downloaded) - 10} more")
    
    print(f"\n❌ Not Downloaded ({len(not_downloaded)} documents):")
    for i, doc in enumerate(not_downloaded[:10], 1):
        print(f"  {i}. {doc['title'][:60]}...")
    if len(not_downloaded) > 10:
        print(f"  ... and {len(not_downloaded) - 10} more")
    
    print(f"\n{'='*80}\n")


def main():
    """Main execution"""
    import argparse
    
    parser = argparse.ArgumentParser(
        description='Check downloaded StudoCU documents and update JSON'
    )
    parser.add_argument(
        '--downloads-dir',
        default='./downloads',
        help='Path to downloads directory (default: ./downloads)'
    )
    parser.add_argument(
        '--json-file',
        default='studocu_documents.json',
        help='Path to StudoCU documents JSON (default: studocu_documents.json)'
    )
    parser.add_argument(
        '--output-file',
        default=None,
        help='Output JSON file (default: same as input)'
    )
    parser.add_argument(
        '--report',
        action='store_true',
        help='Generate download status report'
    )
    
    args = parser.parse_args()
    
    print("\n" + "="*80)
    print("STUDOCU DOWNLOAD CHECKER")
    print("="*80 + "\n")
    
    # Scan downloads
    downloaded_docs = scan_downloads(args.downloads_dir)
    
    # Update JSON
    if os.path.exists(args.json_file):
        matched = update_json_with_downloads(args.json_file, downloaded_docs, args.output_file)
        
        # Generate report if requested
        if args.report:
            output = args.output_file or args.json_file
            generate_download_report(output)
    else:
        print(f"❌ Error: JSON file not found: {args.json_file}")
        return 1
    
    return 0


if __name__ == "__main__":
    import sys
    sys.exit(main())
