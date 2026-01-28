#!/usr/bin/env python3
"""
Quick utilities for querying and filtering documents by course.
"""

import json
from pathlib import Path


class CourseQuery:
    """Query and filter documents by course"""
    
    def __init__(self, json_file='studocu_documents.json'):
        with open(json_file) as f:
            self.data = json.load(f)
        self.documents = self.data['documents']
    
    def by_course_id(self, course_id: str) -> list:
        """Get all documents for a course ID"""
        return [d for d in self.documents if d.get('course_id') == course_id]
    
    def by_course_name(self, course_name: str) -> list:
        """Get all documents matching a course name (partial match)"""
        course_name_lower = course_name.lower()
        return [d for d in self.documents 
                if d.get('course_name', '').lower().find(course_name_lower) >= 0]
    
    def by_category(self, category: str) -> list:
        """Get all documents in a category"""
        return [d for d in self.documents 
                if d.get('course_category', '').lower() == category.lower()]
    
    def downloaded(self, course_id: str = None) -> list:
        """Get downloaded documents, optionally filtered by course"""
        docs = [d for d in self.documents if d.get('downloaded', False)]
        if course_id:
            docs = [d for d in docs if d.get('course_id') == course_id]
        return docs
    
    def not_downloaded(self, course_id: str = None) -> list:
        """Get not-downloaded documents, optionally filtered by course"""
        docs = [d for d in self.documents if not d.get('downloaded', False)]
        if course_id:
            docs = [d for d in docs if d.get('course_id') == course_id]
        return docs
    
    def by_document_id(self, doc_id: int) -> dict:
        """Get a specific document by ID"""
        for d in self.documents:
            if d.get('document_id') == doc_id:
                return d
        return None
    
    def summary(self) -> dict:
        """Get summary statistics"""
        courses = {}
        for doc in self.documents:
            cid = doc.get('course_id')
            if cid:
                if cid not in courses:
                    courses[cid] = {
                        'name': doc.get('course_name'),
                        'category': doc.get('course_category'),
                        'total': 0,
                        'downloaded': 0
                    }
                courses[cid]['total'] += 1
                if doc.get('downloaded', False):
                    courses[cid]['downloaded'] += 1
        return courses


def main():
    """Interactive query tool"""
    import argparse
    
    parser = argparse.ArgumentParser(description='Query StudoCU documents by course')
    parser.add_argument('--json-file', default='studocu_documents.json')
    
    subparsers = parser.add_subparsers(dest='command', help='Command')
    
    # Course ID lookup
    course_parser = subparsers.add_parser('course', help='Get documents for a course')
    course_parser.add_argument('course_id', help='Course ID (e.g., KRCHN, RIS, HRIT)')
    
    # Category lookup
    cat_parser = subparsers.add_parser('category', help='Get documents by category')
    cat_parser.add_argument('category', help='Category (e.g., Nursing, Clinical)')
    
    # Search
    search_parser = subparsers.add_parser('search', help='Search documents by course name')
    search_parser.add_argument('name', help='Course name (partial match)')
    
    # Download status
    dl_parser = subparsers.add_parser('downloads', help='Show download status')
    dl_parser.add_argument('--course', help='Filter by course ID')
    dl_parser.add_argument('--missing', action='store_true', help='Show only not downloaded')
    
    # Summary
    subparsers.add_parser('summary', help='Show course summary')
    
    args = parser.parse_args()
    
    query = CourseQuery(args.json_file)
    
    if args.command == 'course':
        docs = query.by_course_id(args.course_id)
        print(f"\n📚 {args.course_id}: {len(docs)} documents\n")
        for i, doc in enumerate(docs, 1):
            status = "✅" if doc.get('downloaded') else "❌"
            print(f"{i}. {status} {doc['title'][:60]}...")
    
    elif args.command == 'category':
        docs = query.by_category(args.category)
        print(f"\n📚 {args.category}: {len(docs)} documents\n")
        for i, doc in enumerate(docs, 1):
            status = "✅" if doc.get('downloaded') else "❌"
            print(f"{i}. {status} {doc['title'][:60]}...")
    
    elif args.command == 'search':
        docs = query.by_course_name(args.name)
        print(f"\n🔍 Search '{args.name}': {len(docs)} documents\n")
        for i, doc in enumerate(docs, 1):
            status = "✅" if doc.get('downloaded') else "❌"
            print(f"{i}. {status} {doc['title'][:60]}...")
    
    elif args.command == 'downloads':
        if args.missing:
            docs = query.not_downloaded(args.course)
            title = "❌ Not Downloaded"
        else:
            docs = query.downloaded(args.course)
            title = "✅ Downloaded"
        
        if args.course:
            title += f" ({args.course})"
        
        print(f"\n{title}: {len(docs)} documents\n")
        for i, doc in enumerate(docs[:20], 1):
            print(f"{i}. {doc['title'][:60]}...")
        if len(docs) > 20:
            print(f"... and {len(docs) - 20} more")
    
    elif args.command == 'summary':
        summary = query.summary()
        print("\n" + "="*80)
        print("COURSE SUMMARY")
        print("="*80 + "\n")
        
        for cid in sorted(summary.keys()):
            course = summary[cid]
            pct = (course['downloaded'] / course['total'] * 100) if course['total'] > 0 else 0
            print(f"{cid}: {course['name']}")
            print(f"  Total: {course['total']} | Downloaded: {course['downloaded']} ({pct:.0f}%)")
    
    else:
        parser.print_help()


if __name__ == '__main__':
    main()
