#!/usr/bin/env python3
import subprocess
import sys

pdf_file = sys.argv[1]
num_pages = int(sys.argv[2]) if len(sys.argv) > 2 else 10

# Use pdftotext to extract text from each page
for i in range(1, num_pages + 1):
    print(f"\n{'='*60}")
    print(f"PAGE {i}")
    print('='*60)
    result = subprocess.run(
        ['pdftotext', '-f', str(i), '-l', str(i), '-layout', pdf_file, '-'],
        capture_output=True,
        text=True
    )
    print(result.stdout)
