#!/usr/bin/env python3
"""
Script to process and organize zipped materials in ATP folders.
Extracts zip files and organizes contents based on file type and content.
"""

import os
import zipfile
import shutil
import tempfile
from pathlib import Path

def get_file_category(filename, file_size):
    """Determine if a file should go to Books, Notes, or Past Papers based on filename and size."""
    filename_lower = filename.lower()
    
    # Past Papers indicators
    past_paper_keywords = [
        'exam', 'test', 'quiz', 'assignment', 'coursework', 'paper',
        'bar exam', 'revision', 'past paper', 'mock', 'practice'
    ]
    
    # Books indicators (usually larger files)
    book_keywords = [
        'textbook', 'handbook', 'manual', 'guide', 'reference',
        'law of', 'principles of', 'introduction to'
    ]
    
    # Notes indicators
    note_keywords = [
        'notes', 'lecture', 'summary', 'outline', 'handout',
        'presentation', 'slides', 'material'
    ]
    
    # Check file extension
    if filename_lower.endswith(('.pptx', '.ppt')):
        return 'Notes'  # Presentations go to Notes
    
    # Check for past paper keywords
    if any(keyword in filename_lower for keyword in past_paper_keywords):
        return 'Past Papers'
    
    # Check for book keywords or large PDF files (likely books)
    if any(keyword in filename_lower for keyword in book_keywords) or \
       (filename_lower.endswith('.pdf') and file_size > 5000000):  # 5MB+
        return 'Books'
    
    # Check for note keywords
    if any(keyword in filename_lower for keyword in note_keywords):
        return 'Notes'
    
    # Default categorization based on file type and size
    if filename_lower.endswith('.pdf'):
        if file_size > 2000000:  # 2MB+
            return 'Books'
        else:
            return 'Notes'
    elif filename_lower.endswith(('.docx', '.doc', '.txt')):
        return 'Notes'
    else:
        return 'Notes'  # Default to Notes

def extract_and_organize_zip(zip_path, subject_folder):
    """Extract zip file and organize contents into appropriate folders."""
    print(f"\nProcessing: {zip_path}")
    
    # Create temporary directory for extraction
    with tempfile.TemporaryDirectory() as temp_dir:
        try:
            # Extract zip file
            with zipfile.ZipFile(zip_path, 'r') as zip_ref:
                zip_ref.extractall(temp_dir)
                print(f"Extracted {len(zip_ref.namelist())} files")
            
            # Process extracted files
            moved_files = {'Books': [], 'Notes': [], 'Past Papers': []}
            
            for root, dirs, files in os.walk(temp_dir):
                for file in files:
                    if file.startswith('.'):  # Skip hidden files
                        continue
                        
                    file_path = os.path.join(root, file)
                    file_size = os.path.getsize(file_path)
                    
                    # Determine category
                    category = get_file_category(file, file_size)
                    
                    # Create destination folder if it doesn't exist
                    dest_folder = os.path.join(subject_folder, category)
                    os.makedirs(dest_folder, exist_ok=True)
                    
                    # Move file to appropriate folder
                    dest_path = os.path.join(dest_folder, file)
                    
                    # Handle duplicate filenames
                    counter = 1
                    original_dest = dest_path
                    while os.path.exists(dest_path):
                        name, ext = os.path.splitext(original_dest)
                        dest_path = f"{name}_{counter}{ext}"
                        counter += 1
                    
                    shutil.move(file_path, dest_path)
                    moved_files[category].append(file)
                    print(f"  → {category}: {file}")
            
            # Remove the original zip file after successful extraction
            os.remove(zip_path)
            print(f"Removed original zip file: {os.path.basename(zip_path)}")
            
            return moved_files
            
        except zipfile.BadZipFile:
            print(f"Error: {zip_path} is not a valid zip file")
            return None
        except Exception as e:
            print(f"Error processing {zip_path}: {str(e)}")
            return None

def find_and_process_all_zips():
    """Find all zip files in ATP folders and process them."""
    print("=== Processing Zipped Materials ===")
    
    total_processed = 0
    total_files_extracted = 0
    
    # Find all zip files
    for root, dirs, files in os.walk('.'):
        for file in files:
            if file.lower().endswith('.zip'):
                zip_path = os.path.join(root, file)
                
                # Determine which ATP subject this belongs to
                path_parts = Path(zip_path).parts
                subject_folder = None
                
                for part in path_parts:
                    if part.startswith('ATP '):
                        subject_folder = part
                        break
                
                if subject_folder:
                    subject_path = os.path.join('.', subject_folder)
                    moved_files = extract_and_organize_zip(zip_path, subject_path)
                    
                    if moved_files:
                        total_processed += 1
                        for category, files_list in moved_files.items():
                            total_files_extracted += len(files_list)
                        
                        print(f"\nSummary for {subject_folder}:")
                        for category, files_list in moved_files.items():
                            if files_list:
                                print(f"  {category}: {len(files_list)} files")
    
    print(f"\n=== Processing Complete ===")
    print(f"Processed {total_processed} zip files")
    print(f"Extracted and organized {total_files_extracted} files")
    
    if total_processed == 0:
        print("No zip files found to process.")

if __name__ == "__main__":
    find_and_process_all_zips()