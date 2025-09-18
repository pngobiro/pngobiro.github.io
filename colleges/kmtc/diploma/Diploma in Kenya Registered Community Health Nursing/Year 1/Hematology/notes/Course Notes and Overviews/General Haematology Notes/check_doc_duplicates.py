#!/usr/bin/env python3
import os
import glob
import subprocess
from docx import Document
from difflib import SequenceMatcher
import sys

def extract_text_docx(filepath):
    """Extract text from .docx using python-docx"""
    try:
        doc = Document(filepath)
        return '\n'.join([para.text for para in doc.paragraphs])
    except Exception as e:
        print(f"Error reading {filepath}: {e}")
        return ""

def extract_text_doc(filepath):
    """Extract text from .doc using antiword"""
    try:
        result = subprocess.run(['antiword', filepath], capture_output=True, text=True, timeout=30)
        if result.returncode == 0:
            return result.stdout
        else:
            print(f"Antiword failed for {filepath}: {result.stderr}")
            return ""
    except Exception as e:
        print(f"Error running antiword on {filepath}: {e}")
        return ""

def similar(a, b, threshold=0.9):
    """Check if two strings are similar above threshold"""
    return SequenceMatcher(None, a, b).ratio() > threshold

# Activate venv if not already (but for script, assume run with venv)
# To run: source docx_venv/bin/activate && python check_doc_duplicates.py

doc_files = glob.glob("*.doc") + glob.glob("*.docx")
if not doc_files:
    print("No .doc or .docx files found.")
    sys.exit(0)

texts = {}
for file in doc_files:
    if file.endswith('.docx'):
        text = extract_text_docx(file)
    else:  # .doc
        text = extract_text_doc(file)
    texts[file] = text
    print(f"Extracted {len(text)} chars from {file}")

print("\nChecking for duplicates (similarity > 90%):")
duplicates = []
for i, (file1, text1) in enumerate(texts.items()):
    for file2, text2 in list(texts.items())[i+1:]:
        if text1 and text2 and similar(text1, text2):
            sim = SequenceMatcher(None, text1, text2).ratio()
            duplicates.append((file1, file2, sim))
            print(f"Potential duplicate: {file1} vs {file2} (similarity: {sim:.2%})")

if duplicates:
    print("\nSummary of potential duplicates:")
    for f1, f2, sim in duplicates:
        print(f"- {f1} ≈ {f2} ({sim:.2%})")
else:
    print("No duplicates found.")