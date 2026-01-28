#!/usr/bin/env python3
"""
Extract Year 1 Semester 1 documents from studocu_exam_documents.json
and create a separate JSON file.
"""

import json
import re
from pathlib import Path
from datetime import datetime


def extract_year1_sem1_documents(input_file: str, output_file: str = 'studocu_year1_sem1_documents.json') -> dict:
    """
    Extract documents with 'Year 1 Sem 1' in title from exam documents.
    """
    print("="*80)
    print("EXTRACTING YEAR 1 SEMESTER 1 DOCUMENTS")
    print("="*80 + "\n")
    
    print(f"📖 Loading {input_file}...")
    with open(input_file, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    # Pattern to match Year 1 Sem 1 documents
    pattern = re.compile(r'year\s*1\s*sem\s*1', re.IGNORECASE)
    
    # Filter documents
    year1_sem1_docs = []
    for doc in data['documents']:
        if pattern.search(doc['title']):
            year1_sem1_docs.append(doc)
    
    print(f"Found {len(year1_sem1_docs)} documents with 'Year 1 Sem 1' pattern\n")
    
    # Create new data structure with metadata
    output_data = {
        "metadata": {
            "last_updated": datetime.now().isoformat(),
            "source_file": input_file,
            "source_total_documents": len(data['documents']),
            "extracted_documents": len(year1_sem1_docs),
            "institution": "Kenya Medical Training College",
            "level": "Year 1 Semester 1"
        },
        "documents": year1_sem1_docs
    }
    
    # Save to new JSON file
    print(f"💾 Saving {len(year1_sem1_docs)} documents to {output_file}...\n")
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(output_data, f, indent=2, ensure_ascii=False)
    
    # Print summary
    print("="*80)
    print("EXTRACTION SUMMARY")
    print("="*80)
    print(f"\nExtracted {len(year1_sem1_docs)} Year 1 Semester 1 documents")
    print("\nDocuments found:")
    for i, doc in enumerate(year1_sem1_docs, 1):
        print(f"  {i}. {doc['title']}")
        print(f"     Document ID: {doc['document_id']}")
        print(f"     URL: {doc['url']}")
    
    print("\n" + "="*80 + "\n")
    
    return {
        'total_extracted': len(year1_sem1_docs),
        'output_file': output_file,
        'documents': year1_sem1_docs
    }


def main():
    """Main execution"""
    import argparse
    
    parser = argparse.ArgumentParser(
        description='Extract Year 1 Semester 1 documents from exam documents'
    )
    parser.add_argument(
        '--input-file',
        default='studocu_exam_documents.json',
        help='Input JSON file'
    )
    parser.add_argument(
        '--output-file',
        default='studocu_year1_sem1_documents.json',
        help='Output JSON file'
    )
    
    args = parser.parse_args()
    
    # Extract Year 1 Sem 1 documents
    if Path(args.input_file).exists():
        results = extract_year1_sem1_documents(args.input_file, args.output_file)
        print(f"✅ Successfully created {args.output_file}")
        print(f"   Contains {results['total_extracted']} documents")
    else:
        print(f"❌ Error: {args.input_file} not found")
        return 1
    
    return 0


if __name__ == "__main__":
    import sys
    sys.exit(main())
