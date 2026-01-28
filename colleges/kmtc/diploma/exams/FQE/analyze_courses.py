#!/usr/bin/env python3
"""
Analyze StudoCU documents and extract course information.
Adds course_id and course_name fields based on URL patterns.
"""

import json
import re
from pathlib import Path
from collections import defaultdict
from datetime import datetime


# Course mapping - maps URL course slugs to standardized course IDs and names
COURSE_MAPPING = {
    # Community Health & Nursing
    'kenya-registered-community-health-nursing': {
        'id': 'KRCHN',
        'name': 'Diploma in Kenya Registered Community Health Nursing',
        'category': 'Nursing'
    },
    'community-health-nursing': {
        'id': 'CHN',
        'name': 'Community Health Nursing',
        'category': 'Nursing'
    },
    'nursing-midwifery': {
        'id': 'NM',
        'name': 'Nursing & Midwifery',
        'category': 'Nursing'
    },
    'fundamentals-of-nursing': {
        'id': 'FN',
        'name': 'Fundamentals of Nursing',
        'category': 'Nursing'
    },
    
    # Health Records & IT
    'health-records-and-information-technology': {
        'id': 'HRIT',
        'name': 'Diploma in Health Records and Information Technology',
        'category': 'Health IT'
    },
    'health-records-information-technology': {
        'id': 'HRIT',
        'name': 'Diploma in Health Records and Information Technology',
        'category': 'Health IT'
    },
    'health-information-management': {
        'id': 'HIM',
        'name': 'Health Information Management',
        'category': 'Health IT'
    },
    
    # Medical & Clinical
    'clinical-medicine': {
        'id': 'CM',
        'name': 'Diploma in Clinical Medicine',
        'category': 'Clinical'
    },
    'orthopaedic-technology': {
        'id': 'OT',
        'name': 'Diploma in Orthopaedic Technology',
        'category': 'Clinical'
    },
    'radiography-and-imaging-sciences': {
        'id': 'RIS',
        'name': 'Diploma in Radiography and Imaging Sciences',
        'category': 'Medical Imaging'
    },
    
    # Allied Health
    'emergency-medical-technician': {
        'id': 'EMT',
        'name': 'Diploma in Emergency Medical Technician',
        'category': 'Emergency Services'
    },
    'pediatric-nursing-care': {
        'id': 'PNC',
        'name': 'Pediatric Nursing Care',
        'category': 'Nursing'
    },
    'maternal-newborn-health': {
        'id': 'MNH',
        'name': 'Maternal and Newborn Health',
        'category': 'Nursing'
    },
    'dental-technology': {
        'id': 'DT',
        'name': 'Diploma in Dental Technology',
        'category': 'Allied Health'
    },
    'nutrition-and-dietetics': {
        'id': 'ND',
        'name': 'Diploma in Nutrition and Dietetics',
        'category': 'Allied Health'
    },
    'health-system-management': {
        'id': 'HSM',
        'name': 'Health System Management',
        'category': 'Management'
    },
    
    # General
    'final-qualifying-exam': {
        'id': 'FQE',
        'name': 'Final Qualifying Exam',
        'category': 'General'
    },
    'fundamentals-of-psychiatry': {
        'id': 'FP',
        'name': 'Fundamentals of Psychiatry',
        'category': 'Clinical'
    },
    'human-psychology': {
        'id': 'HP',
        'name': 'Human Psychology',
        'category': 'General'
    },
}


def extract_course_from_url(url: str) -> dict:
    """
    Extract course information from StudoCU URL.
    Returns dict with course_id, course_name, and category.
    """
    # Pattern: /document/college/COURSE_NAME/DOCUMENT_NAME/ID
    match = re.search(r'/document/([^/]+)/([^/]+)/', url)
    
    if match:
        college, course_slug = match.groups()
        
        # Check if we have a mapping for this course
        if course_slug in COURSE_MAPPING:
            mapping = COURSE_MAPPING[course_slug]
            return {
                'course_id': mapping['id'],
                'course_name': mapping['name'],
                'course_slug': course_slug,
                'category': mapping['category'],
                'source': 'url_matched'
            }
        else:
            # If not in mapping, create a generic entry
            course_name = course_slug.replace('-', ' ').title()
            return {
                'course_id': None,
                'course_name': course_name,
                'course_slug': course_slug,
                'category': 'Unknown',
                'source': 'url_extracted'
            }
    
    return {
        'course_id': None,
        'course_name': None,
        'course_slug': None,
        'category': None,
        'source': 'not_found'
    }


def analyze_and_update_json(json_file: str, output_file: str = None) -> dict:
    """
    Analyze JSON and add course information to each document.
    """
    if output_file is None:
        output_file = json_file
    
    print("="*80)
    print("COURSE ANALYSIS AND EXTRACTION")
    print("="*80 + "\n")
    
    print(f"📖 Loading {json_file}...")
    with open(json_file, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    documents = data['documents']
    course_stats = defaultdict(int)
    matched_courses = defaultdict(int)
    
    print(f"🔍 Analyzing {len(documents)} documents...\n")
    
    # Process each document
    for doc in documents:
        course_info = extract_course_from_url(doc['url'])
        
        # Add course information
        doc['course_id'] = course_info.get('course_id')
        doc['course_name'] = course_info.get('course_name')
        doc['course_slug'] = course_info.get('course_slug')
        doc['course_category'] = course_info.get('category')
        
        # Track statistics
        if course_info.get('course_id'):
            matched_courses[course_info['course_id']] += 1
        if course_info.get('course_name'):
            course_stats[course_info['course_name']] += 1
    
    # Save updated JSON
    print(f"💾 Saving updated data to {output_file}...\n")
    data['metadata']['last_updated'] = datetime.now().isoformat()
    data['metadata']['courses_identified'] = len(matched_courses)
    
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    # Print summary
    print("="*80)
    print("COURSE IDENTIFICATION SUMMARY")
    print("="*80)
    print(f"\nMatched Courses (with IDs): {len(matched_courses)}")
    for course_id in sorted(matched_courses.keys()):
        count = matched_courses[course_id]
        print(f"  • {course_id}: {count} documents")
    
    # Filter out courses with no documents
    courses_with_content = {k: v for k, v in course_stats.items() if v > 0}
    
    print(f"\nAll Identified Courses: {len(courses_with_content)}")
    for course_name in sorted(courses_with_content.keys(), key=lambda x: -courses_with_content[x]):
        count = courses_with_content[course_name]
        print(f"  • {course_name}: {count} documents")
    
    print("\n" + "="*80 + "\n")
    
    return {
        'total_documents': len(documents),
        'matched_courses': matched_courses,
        'all_courses': course_stats
    }


def export_course_index(json_file: str, output_file: str = 'course_index.json') -> None:
    """
    Export a separate index of all courses with their documents.
    """
    print(f"📋 Generating course index...\n")
    
    with open(json_file, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    # Build course index
    course_index = {}
    
    for doc in data['documents']:
        course_id = doc.get('course_id')
        course_name = doc.get('course_name')
        
        if not course_id or not course_name:
            continue
        
        if course_id not in course_index:
            course_index[course_id] = {
                'course_id': course_id,
                'course_name': course_name,
                'category': doc.get('course_category'),
                'documents': []
            }
        
        course_index[course_id]['documents'].append({
            'title': doc['title'],
            'document_id': doc['document_id'],
            'downloaded': doc.get('downloaded', False),
            'url': doc['url']
        })
    
    # Save index
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(course_index, f, indent=2, ensure_ascii=False)
    
    print(f"✅ Course index saved to {output_file}")
    print(f"\n📊 Indexed Courses:")
    for course_id in sorted(course_index.keys()):
        course = course_index[course_id]
        print(f"  • {course_id}: {course['course_name']} ({len(course['documents'])} docs)")


def main():
    """Main execution"""
    import argparse
    
    parser = argparse.ArgumentParser(
        description='Analyze documents and extract course information'
    )
    parser.add_argument(
        '--json-file',
        default='studocu_documents.json',
        help='Input JSON file'
    )
    parser.add_argument(
        '--output-file',
        default=None,
        help='Output JSON file (default: same as input)'
    )
    parser.add_argument(
        '--index',
        action='store_true',
        help='Generate course index file'
    )
    
    args = parser.parse_args()
    
    # Analyze and update
    if Path(args.json_file).exists():
        results = analyze_and_update_json(args.json_file, args.output_file)
        
        # Generate index if requested
        if args.index:
            output = args.output_file or args.json_file
            export_course_index(output)
    else:
        print(f"❌ Error: {args.json_file} not found")
        return 1
    
    return 0


if __name__ == "__main__":
    import sys
    sys.exit(main())
