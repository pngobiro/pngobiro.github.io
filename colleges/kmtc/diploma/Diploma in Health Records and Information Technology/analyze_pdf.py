#!/usr/bin/env python3
import sys
import argparse
from pathlib import Path
import subprocess

def get_page_text(pdf_path, page_num):
    """Extracts text from a specific page using pdftotext (1-based index)."""
    try:
        result = subprocess.run(
            ['pdftotext', '-f', str(page_num), '-l', str(page_num), str(pdf_path), '-'],
            capture_output=True,
            text=True,
            check=True
        )
        # Return first 200 chars flattened
        text = result.stdout.strip()[:200].replace('\n', ' ')
        return text if text else "[No text found / Image]"
    except subprocess.CalledProcessError:
        return "[Error reading page]"

def analyze_pdf(pdf_path, interval=5):
    """Samples pages from the PDF to help identify sections."""
    print(f"Analyzing: {pdf_path}")
    print("-" * 60)
    print(f"{ 'Page':<6} | {'Content Preview'}")
    print("-" * 60)
    
    # Get total pages first (rough estimate or use tools, here we just try until failure/empty)
    # Actually, let's use pdfinfo if available or just loop reasonable amount
    # Or just use pypdf to get count
    try:
        import PyPDF2
        with open(pdf_path, 'rb') as f:
            reader = PyPDF2.PdfReader(f)
            total_pages = len(reader.pages)
    except ImportError:
        print("PyPDF2 not found, scanning first 100 pages max.")
        total_pages = 100

    for i in range(1, total_pages + 1, interval):
        text = get_page_text(pdf_path, i)
        print(f"{i:<6} | {text}")
        
    print("-" * 60)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Analyze PDF structure by sampling pages.")
    parser.add_argument('file', help='Path to PDF file')
    parser.add_argument('--interval', type=int, default=5, help='Page interval to sample (default: 5)')
    
    args = parser.parse_args()
    analyze_pdf(args.file, args.interval)
