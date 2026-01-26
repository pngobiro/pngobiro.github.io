#!/usr/bin/env python3
import os
import sys
import json
import shutil
import argparse
from pathlib import Path
from datetime import datetime
from collections import defaultdict
import PyPDF2

# ANSI colors for better CLI output
class Colors:
    HEADER = '\033[95m'
    BLUE = '\033[94m'
    GREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'

class ExamManager:
    def __init__(self, root_dir):
        self.root_dir = Path(root_dir).resolve()
        self.subjects = []
        
    def log(self, message, color=Colors.ENDC):
        print(f"{color}{message}{Colors.ENDC}")

    def scan_for_subjects(self):
        """Finds all subjects by looking for specific subdirectories."""
        self.subjects = []
        # Walk through the directory tree
        for root, dirs, files in os.walk(self.root_dir):
            path = Path(root)
            # Identify a subject folder if it has 'pastpapers' or 'notes'
            if 'pastpapers' in dirs or 'notes' in dirs:
                # Exclude the root folder itself if it happens to have these
                if path != self.root_dir and 'UNPROCESSED' not in path.parts:
                    self.subjects.append(path)
        
        # Sort subjects by name
        self.subjects.sort()
        return self.subjects

    def get_subject_status(self, subject_path):
        """Reads the status JSON for a given subject."""
        status_file = subject_path / "pastpapers" / "processing-status.json"
        if status_file.exists():
            try:
                with open(status_file, 'r') as f:
                    return json.load(f)
            except json.JSONDecodeError:
                return None
        return None

    def create_dashboard(self):
        """Generates a high-level report of all subjects."""
        self.scan_for_subjects()
        
        print(f"\n{Colors.HEADER}{Colors.BOLD}EXAM MANAGER DASHBOARD{Colors.ENDC}")
        print(f"Root: {self.root_dir}")
        print("-" * 80)
        print(f"{'Subject':<40} | {'Total':<6} | {'Unproc.':<8} | {'HTML Gen':<8} | {'Last Update'}")
        print("-" * 80)

        total_files_global = 0
        total_unprocessed_global = 0

        for subject in self.subjects:
            status = self.get_subject_status(subject)
            name = subject.name
            
            if status:
                stats = status.get('statistics', {})
                total = stats.get('total_files', 0)
                unproc = stats.get('unprocessed', 0)
                html = stats.get('html_generated', 0)
                last_update = status.get('last_updated', 'N/A')[:10] # Date only
                
                total_files_global += total
                total_unprocessed_global += unproc
                
                # Highlight unprocessed count if > 0
                unproc_str = f"{Colors.WARNING}{unproc}{Colors.ENDC}" if unproc > 0 else str(unproc)
                
                print(f"{name:<40} | {total:<6} | {unproc_str:<17} | {html:<8} | {last_update}")
            else:
                print(f"{name:<40} | {Colors.FAIL}No Status File{Colors.ENDC}")

        print("-" * 80)
        print(f"{Colors.BOLD}TOTALS:{Colors.ENDC} {len(self.subjects)} Subjects | {total_files_global} Files | {total_unprocessed_global} Unprocessed")
        print("-" * 80)

    def scan_new_files(self, subject_name=None):
        """Scans UNPROCESSED folders and updates the tracking JSON."""
        self.scan_for_subjects()
        
        targets = self.subjects
        if subject_name:
            targets = [s for s in self.subjects if s.name == subject_name]
            if not targets:
                self.log(f"Subject '{subject_name}' not found.", Colors.FAIL)
                return

        for subject in targets:
            unprocessed_dir = subject / "pastpapers" / "UNPROCESSED"
            status_file = subject / "pastpapers" / "processing-status.json"
            
            if not unprocessed_dir.exists():
                continue

            # Load or init status
            if status_file.exists():
                with open(status_file, 'r') as f:
                    status_data = json.load(f)
            else:
                status_data = {
                    "subject": subject.name,
                    "last_updated": datetime.now().isoformat(),
                    "files": [],
                    "statistics": {}
                }

            # Find PDFs
            pdfs = list(unprocessed_dir.glob("*.pdf"))
            added_count = 0
            
            for pdf in pdfs:
                # Check duplication
                if not any(f['filename'] == pdf.name for f in status_data['files']):
                    new_entry = {
                        "filename": pdf.name,
                        "original_location": "UNPROCESSED/",
                        "current_location": "UNPROCESSED/",
                        "status": "unprocessed",
                        "processing_steps": {
                            "discovered": datetime.now().isoformat()
                        },
                        "notes": "Discovered by ExamManager"
                    }
                    status_data['files'].append(new_entry)
                    added_count += 1
            
            if added_count > 0:
                self.log(f"[{subject.name}] Found {added_count} new files.", Colors.GREEN)
                self.update_statistics(status_data)
                with open(status_file, 'w') as f:
                    json.dump(status_data, f, indent=2)
            else:
                # self.log(f"[{subject.name}] No new files.")
                pass

    def update_statistics(self, data):
        """Recalculates statistics for a status object."""
        stats = defaultdict(int)
        stats["total_files"] = len(data["files"])
        for f in data["files"]:
            status = f.get("status", "unknown")
            stats[status] += 1
        data["statistics"] = dict(stats)
        data["last_updated"] = datetime.now().isoformat()

    def split_pdf(self, input_path, output_path, page_ranges):
        """Splits a PDF based on page ranges (1-based)"""
        input_path = Path(input_path)
        output_path = Path(output_path)
        
        if not input_path.exists():
            self.log(f"Error: Input file {input_path} not found.", Colors.FAIL)
            return

        try:
            reader = PyPDF2.PdfReader(str(input_path))
            writer = PyPDF2.PdfWriter()
            total_pages = len(reader.pages)
            
            # Parse ranges
            pages_to_extract = set()
            for part in page_ranges.split(','):
                part = part.strip()
                if '-' in part:
                    start, end = part.split('-')
                    start = int(start)
                    end = int(end)
                else:
                    start = int(part)
                    end = int(part)
                
                # Add pages (convert 1-based to 0-based)
                # Adjust for potential out of bounds
                for i in range(start, end + 1):
                    if 1 <= i <= total_pages:
                        pages_to_extract.add(i - 1)
                    else:
                        self.log(f"Warning: Page {i} out of bounds (Total: {total_pages})", Colors.WARNING)

            # Sort pages
            sorted_pages = sorted(list(pages_to_extract))
            
            if not sorted_pages:
                self.log("No valid pages selected.", Colors.FAIL)
                return

            for p_idx in sorted_pages:
                writer.add_page(reader.pages[p_idx])

            # Ensure output directory exists
            output_path.parent.mkdir(parents=True, exist_ok=True)
            
            with open(output_path, "wb") as f:
                writer.write(f)
            
            self.log(f"Successfully created {output_path} with {len(sorted_pages)} pages.", Colors.GREEN)
            
        except Exception as e:
            self.log(f"Error splitting PDF: {e}", Colors.FAIL)

def main():
    parser = argparse.ArgumentParser(description="Exam Manager AI Agent")
    parser.add_argument('action', choices=['dashboard', 'scan', 'list', 'split'], help='Action to perform')
    parser.add_argument('--subject', help='Specific subject to target (for scan)')
    parser.add_argument('--file', help='Input PDF file path (for split)')
    parser.add_argument('--out', help='Output PDF file path (for split)')
    parser.add_argument('--pages', help='Page ranges e.g. "1-5,8,10-12" (for split)')
    
    args = parser.parse_args()
    
    manager = ExamManager(os.getcwd())
    
    if args.action == 'dashboard':
        manager.create_dashboard()
    elif args.action == 'scan':
        print("Scanning for new files...")
        manager.scan_new_files(args.subject)
        manager.create_dashboard()
    elif args.action == 'list':
        subjects = manager.scan_for_subjects()
        for s in subjects:
            print(s.name)
    elif args.action == 'split':
        if not args.file or not args.out or not args.pages:
            print(f"{Colors.FAIL}Error: --file, --out, and --pages are required for split action.{Colors.ENDC}")
            print('Example: ./exam_manager.py split --file "large_exam.pdf" --out "section_a.pdf" --pages "1-10"')
            sys.exit(1)
        manager.split_pdf(args.file, args.out, args.pages)

if __name__ == "__main__":
    main()
