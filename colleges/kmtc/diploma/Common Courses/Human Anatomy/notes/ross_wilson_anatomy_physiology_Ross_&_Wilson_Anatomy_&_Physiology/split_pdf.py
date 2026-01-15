#!/usr/bin/env python3
"""
PDF splitting utility - split PDF files by pages, ranges, or size.
"""

import os
import sys
import argparse
from pathlib import Path
from typing import List, Tuple, Optional

try:
    from pypdf import PdfReader, PdfWriter
except ImportError:
    try:
        from PyPDF2 import PdfReader, PdfWriter
    except ImportError:
        print("❌ Error: Please install pypdf or PyPDF2:")
        print("   pip install pypdf")
        print("   or")
        print("   pip install PyPDF2")
        sys.exit(1)


class PDFSplitter:
    """Split PDF files in various ways."""
    
    def __init__(self, input_file: str, output_folder: str = "split_pages"):
        """
        Initialize the PDF splitter.
        
        Args:
            input_file: Path to the PDF file to split
            output_folder: Folder where split PDFs will be saved
        """
        self.input_file = input_file
        self.output_folder = output_folder
        self.reader = None
        self.total_pages = 0
        
    def validate_input(self) -> bool:
        """Validate input file exists and is a valid PDF."""
        if not os.path.exists(self.input_file):
            print(f"❌ Error: Input file '{self.input_file}' not found.")
            return False
        
        if not os.path.isfile(self.input_file):
            print(f"❌ Error: '{self.input_file}' is not a file.")
            return False
        
        try:
            self.reader = PdfReader(self.input_file)
            self.total_pages = len(self.reader.pages)
            print(f"📄 PDF loaded: {self.total_pages} pages")
            return True
        except Exception as e:
            print(f"❌ Error: Cannot read PDF file '{self.input_file}': {e}")
            return False
    
    def create_output_folder(self) -> bool:
        """Create output folder if it doesn't exist."""
        try:
            Path(self.output_folder).mkdir(parents=True, exist_ok=True)
            return True
        except Exception as e:
            print(f"❌ Error: Cannot create folder '{self.output_folder}': {e}")
            return False
    
    def split_by_pages(self, pages_per_file: int = 1) -> bool:
        """
        Split PDF into files with specified number of pages each.
        
        Args:
            pages_per_file: Number of pages per output file
        """
        if not self.validate_input() or not self.create_output_folder():
            return False
        
        base_name = Path(self.input_file).stem
        file_count = 0
        
        print(f"\n🔄 Splitting into files with {pages_per_file} page(s) each...")
        
        for start_page in range(0, self.total_pages, pages_per_file):
            end_page = min(start_page + pages_per_file, self.total_pages)
            file_count += 1
            
            # Create new PDF writer
            writer = PdfWriter()
            
            # Add pages to writer
            for page_num in range(start_page, end_page):
                writer.add_page(self.reader.pages[page_num])
            
            # Generate output filename
            if pages_per_file == 1:
                output_file = f"{base_name}_page_{start_page + 1:03d}.pdf"
            else:
                output_file = f"{base_name}_pages_{start_page + 1:03d}-{end_page:03d}.pdf"
            
            output_path = os.path.join(self.output_folder, output_file)
            
            # Save the split PDF
            try:
                with open(output_path, 'wb') as output_pdf:
                    writer.write(output_pdf)
                print(f"  ✓ Created: {output_file} (pages {start_page + 1}-{end_page})")
            except Exception as e:
                print(f"  ❌ Error creating {output_file}: {e}")
                return False
        
        print(f"\n✅ Split complete! Created {file_count} files in '{self.output_folder}/'")
        return True
    
    def split_by_ranges(self, ranges: List[str]) -> bool:
        """
        Split PDF by specified page ranges.
        
        Args:
            ranges: List of page ranges (e.g., ["1-5", "6-10", "11"])
        """
        if not self.validate_input() or not self.create_output_folder():
            return False
        
        base_name = Path(self.input_file).stem
        
        print(f"\n🔄 Splitting by specified ranges...")
        
        for i, range_str in enumerate(ranges, 1):
            try:
                # Parse range
                if '-' in range_str:
                    start, end = map(int, range_str.split('-'))
                else:
                    start = end = int(range_str)
                
                # Validate range
                if start < 1 or end > self.total_pages or start > end:
                    print(f"  ⚠ Skipping invalid range: {range_str} (valid: 1-{self.total_pages})")
                    continue
                
                # Create new PDF writer
                writer = PdfWriter()
                
                # Add pages to writer (convert to 0-based indexing)
                for page_num in range(start - 1, end):
                    writer.add_page(self.reader.pages[page_num])
                
                # Generate output filename
                if start == end:
                    output_file = f"{base_name}_page_{start:03d}.pdf"
                else:
                    output_file = f"{base_name}_pages_{start:03d}-{end:03d}.pdf"
                
                output_path = os.path.join(self.output_folder, output_file)
                
                # Save the split PDF
                with open(output_path, 'wb') as output_pdf:
                    writer.write(output_pdf)
                print(f"  ✓ Created: {output_file} (pages {start}-{end})")
                
            except ValueError:
                print(f"  ❌ Invalid range format: {range_str} (use format: '1-5' or '10')")
            except Exception as e:
                print(f"  ❌ Error processing range {range_str}: {e}")
        
        print(f"\n✅ Range splitting complete!")
        return True
    
    def extract_pages(self, page_numbers: List[int]) -> bool:
        """
        Extract specific pages into separate files.
        
        Args:
            page_numbers: List of page numbers to extract (1-based)
        """
        if not self.validate_input() or not self.create_output_folder():
            return False
        
        base_name = Path(self.input_file).stem
        
        print(f"\n🔄 Extracting specific pages...")
        
        for page_num in page_numbers:
            try:
                # Validate page number
                if page_num < 1 or page_num > self.total_pages:
                    print(f"  ⚠ Skipping invalid page: {page_num} (valid: 1-{self.total_pages})")
                    continue
                
                # Create new PDF writer
                writer = PdfWriter()
                writer.add_page(self.reader.pages[page_num - 1])  # Convert to 0-based
                
                # Generate output filename
                output_file = f"{base_name}_page_{page_num:03d}.pdf"
                output_path = os.path.join(self.output_folder, output_file)
                
                # Save the extracted page
                with open(output_path, 'wb') as output_pdf:
                    writer.write(output_pdf)
                print(f"  ✓ Extracted: {output_file}")
                
            except Exception as e:
                print(f"  ❌ Error extracting page {page_num}: {e}")
        
        print(f"\n✅ Page extraction complete!")
        return True
    
    def info(self) -> bool:
        """Display information about the PDF."""
        if not self.validate_input():
            return False
        
        print(f"\n{'='*60}")
        print(f"📄 PDF Information: {os.path.basename(self.input_file)}")
        print(f"{'='*60}")
        print(f"  📊 Pages: {self.total_pages}")
        
        # Try to get metadata
        try:
            metadata = self.reader.metadata
            if metadata:
                print(f"  📝 Metadata:")
                if metadata.title:
                    print(f"     • Title: {metadata.title}")
                if metadata.author:
                    print(f"     • Author: {metadata.author}")
                if metadata.subject:
                    print(f"     • Subject: {metadata.subject}")
                if metadata.creator:
                    print(f"     • Creator: {metadata.creator}")
                if metadata.producer:
                    print(f"     • Producer: {metadata.producer}")
        except:
            pass
        
        # File size
        try:
            file_size = os.path.getsize(self.input_file) / (1024 * 1024)
            print(f"  💾 File size: {file_size:.2f} MB")
        except:
            pass
        
        print(f"{'='*60}\n")
        return True


def parse_ranges(range_str: str) -> List[str]:
    """Parse comma-separated ranges."""
    return [r.strip() for r in range_str.split(',') if r.strip()]


def parse_pages(pages_str: str) -> List[int]:
    """Parse comma-separated page numbers."""
    pages = []
    for p in pages_str.split(','):
        try:
            pages.append(int(p.strip()))
        except ValueError:
            print(f"⚠ Warning: Invalid page number '{p.strip()}' ignored")
    return pages


def main():
    """Main entry point with argument parsing."""
    parser = argparse.ArgumentParser(
        description='Split PDF files by pages, ranges, or extract specific pages.',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  %(prog)s document.pdf                    # Split into individual pages
  %(prog)s document.pdf --pages 5          # Split into files with 5 pages each
  %(prog)s document.pdf --ranges "1-10,11-20,21-30"  # Split by ranges
  %(prog)s document.pdf --extract "1,5,10" # Extract specific pages
  %(prog)s document.pdf --info             # Show PDF information
        """
    )
    
    parser.add_argument('input_file', help='Input PDF file to split')
    parser.add_argument('-o', '--output', default='split_pages',
                        help='Output folder for split files (default: split_pages)')
    parser.add_argument('-p', '--pages', type=int, default=1,
                        help='Number of pages per output file (default: 1)')
    parser.add_argument('-r', '--ranges', type=str,
                        help='Page ranges to split (e.g., "1-5,6-10,11")')
    parser.add_argument('-e', '--extract', type=str,
                        help='Specific pages to extract (e.g., "1,5,10")')
    parser.add_argument('-i', '--info', action='store_true',
                        help='Show PDF information only')
    
    args = parser.parse_args()
    
    # Create splitter
    splitter = PDFSplitter(args.input_file, args.output)
    
    # Execute requested operation
    if args.info:
        success = splitter.info()
    elif args.ranges:
        ranges = parse_ranges(args.ranges)
        success = splitter.split_by_ranges(ranges)
    elif args.extract:
        pages = parse_pages(args.extract)
        success = splitter.extract_pages(pages)
    else:
        success = splitter.split_by_pages(args.pages)
    
    sys.exit(0 if success else 1)


if __name__ == "__main__":
    main()