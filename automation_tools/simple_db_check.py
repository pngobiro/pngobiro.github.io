#!/usr/bin/env python3
"""
Simple Database Link Checker
Check topics and pastpapers via wrangler with proper Node.js version
"""

import os
import json
import subprocess
from pathlib import Path
from typing import Dict, List
import argparse
from datetime import datetime

class SimpleDatabaseChecker:
    def __init__(self, base_path: str):
        self.base_path = Path(base_path)
        self.broken_links = {
            'topics': [],
            'pastpapers': []
        }
    
    def check_database_links(self) -> Dict:
        """Check database via wrangler with nvm"""
        print("🔍 Checking database via Cloudflare Wrangler (with nvm)...")
        
        # Check topics
        print("📄 Checking topic links...")
        topics = self.get_topics_from_db()
        self.check_topics_links(topics)
        
        # Check pastpapers
        print("📋 Checking pastpaper links...")
        pastpapers = self.get_pastpapers_from_db()
        self.check_pastpapers_links(pastpapers)
        
        return self.generate_report()
    
    def run_wrangler_command(self, sql_query: str) -> List[Dict]:
        """Run wrangler command with proper Node.js version via nvm"""
        try:
            # Use nvm to ensure proper Node.js version
            cmd = f'''
            source ~/.nvm/nvm.sh && 
            nvm use 20 && 
            wrangler d1 execute kmtc_revision_db --command "{sql_query}" --json --remote
            '''
            
            result = subprocess.run(
                ['bash', '-c', cmd], 
                capture_output=True, 
                text=True, 
                cwd='../../kmtc-ttc-cloudflare-backend_api'
            )
            
            if result.returncode == 0:
                output = result.stdout.strip()
                if output:
                    # Find JSON array start (skip "Now using node..." line)
                    lines = output.split('\n')
                    json_start_idx = None
                    for i, line in enumerate(lines):
                        if line.strip().startswith('['):
                            json_start_idx = i
                            break
                    
                    if json_start_idx is not None:
                        # Join all lines from JSON start to end
                        json_text = '\n'.join(lines[json_start_idx:])
                        try:
                            data = json.loads(json_text)
                            if isinstance(data, list) and len(data) > 0:
                                first_result = data[0]
                                if isinstance(first_result, dict) and 'results' in first_result:
                                    return first_result.get('results', [])
                        except json.JSONDecodeError as e:
                            print(f"❌ JSON decode error: {e}")
                            print(f"JSON text preview: {json_text[:300]}...")
                return []
            else:
                print(f"❌ Wrangler command failed: {result.stderr}")
                return []
                
        except Exception as e:
            print(f"❌ Error running wrangler command: {e}")
            return []
    
    def get_topics_from_db(self) -> List[Dict]:
        """Get topics with URLs from database"""
        sql = "SELECT id, name, topicUrl, subject_id FROM Topics WHERE topicUrl IS NOT NULL AND topicUrl != ''"
        topics = self.run_wrangler_command(sql)
        print(f"📊 Found {len(topics)} topics with URLs in database")
        return topics
    
    def get_pastpapers_from_db(self) -> List[Dict]:
        """Get pastpapers with URLs from database"""
        sql = "SELECT id, name, url, subject_id FROM PastPapers WHERE url IS NOT NULL AND url != ''"
        pastpapers = self.run_wrangler_command(sql)
        print(f"📊 Found {len(pastpapers)} pastpapers with URLs in database")
        return pastpapers
    
    def check_topics_links(self, topics: List[Dict]):
        """Check topic URLs for broken links"""
        for topic in topics:
            topic_id = topic.get('id')
            topic_name = topic.get('name', 'Unknown')
            topic_url = topic.get('topicUrl')
            
            if not topic_url:
                continue
            
            # Check if the file exists
            file_exists, file_path, issue = self.check_url_exists(topic_url)
            
            if not file_exists:
                self.broken_links['topics'].append({
                    'id': topic_id,
                    'name': topic_name,
                    'subject_id': topic.get('subject_id'),
                    'issue': issue,
                    'url': topic_url,
                    'expected_path': file_path
                })
    
    def check_pastpapers_links(self, pastpapers: List[Dict]):
        """Check pastpaper URLs for broken links"""
        for pastpaper in pastpapers:
            paper_id = pastpaper.get('id')
            paper_name = pastpaper.get('name', 'Unknown')
            paper_url = pastpaper.get('url')
            
            if not paper_url:
                continue
            
            # Check if the file exists
            file_exists, file_path, issue = self.check_url_exists(paper_url)
            
            if not file_exists:
                self.broken_links['pastpapers'].append({
                    'id': paper_id,
                    'name': paper_name,
                    'subject_id': pastpaper.get('subject_id'),
                    'issue': issue,
                    'url': paper_url,
                    'expected_path': file_path
                })
    
    def check_url_exists(self, url: str) -> tuple[bool, str, str]:
        """Check if a URL points to an existing file"""
        from urllib.parse import urlparse, unquote
        
        if not url:
            return False, "", "empty_url"
        
        # Clean URL
        clean_url = url.split('#')[0].split('?')[0]
        
        # Handle different URL formats
        if clean_url.startswith('http://') or clean_url.startswith('https://'):
            parsed = urlparse(clean_url)
            file_path = parsed.path.lstrip('/')
        elif clean_url.startswith('/'):
            file_path = clean_url.lstrip('/')
        else:
            file_path = clean_url
        
        # URL decode the path (handles %20 -> space, etc.)
        file_path = unquote(file_path)
        
        # Convert to filesystem path
        full_path = self.base_path / file_path
        
        # Check if file exists
        if full_path.exists():
            if full_path.is_file():
                return True, str(file_path), "ok"
            elif full_path.is_dir():
                # Check for index.html in directory
                index_file = full_path / 'index.html'
                if index_file.exists():
                    return True, str(file_path), "ok"
                else:
                    return False, str(file_path), "directory_no_index"
        
        return False, str(file_path), "file_not_found"
    
    def generate_report(self) -> Dict:
        """Generate comprehensive report"""
        total_broken_topics = len(self.broken_links['topics'])
        total_broken_pastpapers = len(self.broken_links['pastpapers'])
        total_broken = total_broken_topics + total_broken_pastpapers
        
        # Categorize issues
        issue_summary = {
            'file_not_found': 0,
            'directory_no_index': 0,
            'empty_url': 0
        }
        
        for item in self.broken_links['topics'] + self.broken_links['pastpapers']:
            issue_type = item.get('issue', 'unknown')
            if issue_type in issue_summary:
                issue_summary[issue_type] += 1
        
        report = {
            'timestamp': datetime.now().isoformat(),
            'summary': {
                'total_broken_links': total_broken,
                'broken_topics': total_broken_topics,
                'broken_pastpapers': total_broken_pastpapers,
                'issue_breakdown': issue_summary
            },
            'broken_links': self.broken_links
        }
        
        return report
    
    def print_summary(self, report: Dict):
        """Print formatted summary"""
        print("\n" + "="*60)
        print("🔗 DATABASE BROKEN LINKS REPORT")
        print("="*60)
        
        summary = report['summary']
        
        if summary['total_broken_links'] == 0:
            print("✅ No broken links found! All database URLs are valid.")
        else:
            print(f"⚠️  Found {summary['total_broken_links']} broken links:")
            print(f"  📄 Broken Topics: {summary['broken_topics']}")
            print(f"  📋 Broken Pastpapers: {summary['broken_pastpapers']}")
            
            print(f"\n📊 Issue Types:")
            for issue_type, count in summary['issue_breakdown'].items():
                if count > 0:
                    icon = "🔴" if count > 10 else "🟡"
                    print(f"  {icon} {issue_type.replace('_', ' ').title()}: {count}")
            
            print(f"\n🔍 Broken Links Details:")
            
            # Show broken topics
            if summary['broken_topics'] > 0:
                print(f"\n📄 Broken Topics ({summary['broken_topics']}):")
                for i, topic in enumerate(report['broken_links']['topics'][:10], 1):
                    print(f"  {i}. {topic['name']}")
                    print(f"     🔗 URL: {topic['url']}")
                    print(f"     ❌ Issue: {topic['issue']}")
                    print(f"     📂 Expected: {topic['expected_path']}")
                    print()
                
                if len(report['broken_links']['topics']) > 10:
                    remaining = len(report['broken_links']['topics']) - 10
                    print(f"     ... and {remaining} more broken topics")
            
            # Show broken pastpapers
            if summary['broken_pastpapers'] > 0:
                print(f"\n📋 Broken Pastpapers ({summary['broken_pastpapers']}):")
                for i, paper in enumerate(report['broken_links']['pastpapers'][:10], 1):
                    print(f"  {i}. {paper['name']}")
                    print(f"     🔗 URL: {paper['url']}")
                    print(f"     ❌ Issue: {paper['issue']}")
                    print(f"     📂 Expected: {paper['expected_path']}")
                    print()
                
                if len(report['broken_links']['pastpapers']) > 10:
                    remaining = len(report['broken_links']['pastpapers']) - 10
                    print(f"     ... and {remaining} more broken pastpapers")
        
        print("="*60)
    
    def save_report(self, report: Dict, output_file: str):
        """Save detailed report to file"""
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(report, f, indent=2, ensure_ascii=False)
        print(f"📄 Detailed report saved to: {output_file}")

def main():
    parser = argparse.ArgumentParser(description='Check database links for topics and pastpapers')
    parser.add_argument('--base-path', default='..', help='Base path to content files')
    parser.add_argument('--output', help='Output file for detailed report (JSON)')
    
    args = parser.parse_args()
    
    # Initialize checker
    checker = SimpleDatabaseChecker(args.base_path)
    
    # Run checks
    report = checker.check_database_links()
    
    # Print summary
    checker.print_summary(report)
    
    # Save detailed report
    if args.output:
        checker.save_report(report, args.output)
    else:
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        default_output = f"db_broken_links_{timestamp}.json"
        checker.save_report(report, default_output)

if __name__ == '__main__':
    main()