#!/usr/bin/env python3
"""Split large PDF into smaller chunks for OCR processing"""

from PyPDF2 import PdfReader, PdfWriter
import sys

def split_pdf(input_pdf, output_prefix, pages_per_chunk=40):
    """Split PDF into chunks of specified size"""
    reader = PdfReader(input_pdf)
    total_pages = len(reader.pages)
    
    print(f"Total pages: {total_pages}")
    
    chunk_num = 1
    start_page = 0
    
    while start_page < total_pages:
        end_page = min(start_page + pages_per_chunk, total_pages)
        
        writer = PdfWriter()
        for page_num in range(start_page, end_page):
            writer.add_page(reader.pages[page_num])
        
        output_file = f"{output_prefix}-part{chunk_num}.pdf"
        with open(output_file, 'wb') as output:
            writer.write(output)
        
        print(f"Created {output_file} (pages {start_page + 1}-{end_page})")
        
        start_page = end_page
        chunk_num += 1

if __name__ == "__main__":
    split_pdf("Okell Notes Surgery.pdf", "okell", 40)
    print("PDF splitting complete!")
