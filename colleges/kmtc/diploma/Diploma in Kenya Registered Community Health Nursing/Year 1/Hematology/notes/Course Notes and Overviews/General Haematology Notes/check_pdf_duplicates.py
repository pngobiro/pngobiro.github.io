#!/usr/bin/env python3
import os
import subprocess
import glob
from difflib import SequenceMatcher
import sys

def extract_text_pdf(filepath):
    """Extract text from PDF using pdftotext"""
    txt_file = filepath + '.txt'
    try:
        result = subprocess.run(['pdftotext', '-layout', filepath, txt_file], capture_output=True, timeout=60)
        if result.returncode == 0:
            with open(txt_file, 'r', encoding='utf-8') as f:
                text = f.read()
            os.unlink(txt_file)  # Clean up temp file
            return text
        else:
            print(f"pdftotext failed for {filepath}: {result.stderr.decode()}")
            return ""
    except Exception as e:
        print(f"Error extracting {filepath}: {e}")
        return ""

def similar(a, b, threshold=0.9):
    """Check if two strings are similar above threshold"""
    if not a or not b:
        return False
    return SequenceMatcher(None, a, b).ratio() > threshold

# Find all PDFs
pdf_files = glob.glob("pdf_downloads/*.pdf") + glob.glob("HEMATOLOGY1/*.pdf")
if not pdf_files:
    print("No PDF files found.")
    sys.exit(0)

texts = {}
for file in pdf_files:
    text = extract_text_pdf(file)
    texts[file] = text
    print(f"Extracted {len(text)} chars from {os.path.basename(file)}")

print("\nChecking for duplicates (similarity > 90%):")
duplicates = []
for i, (file1, text1) in enumerate(texts.items()):
    for file2, text2 in list(texts.items())[i+1:]:
        if text1 and text2 and similar(text1, text2):
            sim = SequenceMatcher(None, text1, text2).ratio()
            duplicates.append((file1, file2, sim))
            print(f"Potential duplicate: {os.path.basename(file1)} vs {os.path.basename(file2)} (similarity: {sim:.2%})")

if duplicates:
    print("\nSummary of potential duplicates:")
    for f1, f2, sim in duplicates:
        print(f"- {os.path.basename(f1)} ≈ {os.path.basename(f2)} ({sim:.2%})")
else:
    print("No duplicates found among PDFs.")