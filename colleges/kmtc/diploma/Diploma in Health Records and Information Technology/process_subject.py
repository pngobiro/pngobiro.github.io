#!/usr/bin/env python3
import os
import sys
import json
import shutil
import subprocess
from datetime import datetime
from pathlib import Path

# Configuration
MATHPIX_SERVER_PATH = "/home/ngobiro/.local/share/Roo-Code/MCP/mathpix-ocr-server/build/index.js"

def get_timestamp():
    return datetime.now().astimezone().isoformat()

def load_status(status_file):
    if status_file.exists():
        with open(status_file, 'r') as f:
            return json.load(f)
    return {
        "subject": "Unknown",
        "last_updated": get_timestamp(),
        "files": [],
        "statistics": {
            "total_files": 0,
            "unprocessed": 0,
            "mmd_generated": 0,
            "mmd_reviewed": 0,
            "html_generated": 0,
            "qa_added": 0,
            "verified": 0,
            "completed": 0
        },
        "next_steps": []
    }

def save_status(status_file, data):
    data["last_updated"] = get_timestamp()
    
    # Update statistics
    stats = {k: 0 for k in data["statistics"]}
    stats["total_files"] = len(data["files"])
    
    for file_entry in data["files"]:
        status = file_entry.get("status", "unprocessed")
        if status in stats:
            stats[status] += 1
            
    data["statistics"] = stats
    
    with open(status_file, 'w') as f:
        json.dump(data, f, indent=2)

def process_directory(subject_path, subfolder):
    target_dir = subject_path / subfolder
    unprocessed_dir = target_dir / "UNPROCESSED"
    status_file = target_dir / "processing-status.json"
    
    if not unprocessed_dir.exists():
        print(f"Skipping {subfolder}: UNPROCESSED folder not found")
        return

    print(f"\nProcessing {subfolder} in {subject_path.name}...")
    
    # Load or create status file
    status_data = load_status(status_file)
    if status_data["subject"] == "Unknown":
        status_data["subject"] = subject_path.name
    
    # Find PDF files
    pdf_files = list(unprocessed_dir.glob("*.pdf"))
    
    if not pdf_files:
        print("No PDF files found in UNPROCESSED")
        return

    for pdf_file in pdf_files:
        print(f"Found: {pdf_file.name}")
        
        # Check if already tracked
        existing_entry = next((f for f in status_data["files"] if f["filename"] == pdf_file.name), None)
        
        if not existing_entry:
            # Add new entry
            new_entry = {
                "filename": pdf_file.name,
                "original_location": "UNPROCESSED/",
                "current_location": "UNPROCESSED/",
                "status": "unprocessed",
                "processing_steps": {
                    "pdf_received": get_timestamp(),
                    "mmd_generated": "pending",
                    "mmd_reviewed": "pending",
                    "html_generated": "pending",
                    "qa_added": "pending",
                    "verified": "pending"
                },
                "paper_type": "unknown",
                "year": "unknown",
                "session": "unknown",
                "html_filename": "pending",
                "mmd_filename": "pending",
                "questions_count": "unknown",
                "sections": [],
                "notes": "Auto-detected by process_subject.py"
            }
            status_data["files"].append(new_entry)
            existing_entry = new_entry
            print("  -> Added to tracking system")

        # Convert to MMD if needed
        if existing_entry["status"] == "unprocessed":
            mmd_filename = f"{pdf_file.stem}_ocr.mmd"
            mmd_path = unprocessed_dir / mmd_filename
            
            print(f"  -> Converting to MMD...")
            try:
                # Run Mathpix OCR
                cmd = ["node", MATHPIX_SERVER_PATH, str(pdf_file)]
                with open(mmd_path, "w") as outfile:
                    subprocess.run(cmd, stdout=outfile, check=True)
                
                # Update status
                existing_entry["status"] = "mmd_generated"
                existing_entry["processing_steps"]["mmd_generated"] = get_timestamp()
                existing_entry["mmd_filename"] = mmd_filename
                print("  -> MMD conversion successful")
                
            except subprocess.CalledProcessError as e:
                print(f"  -> Error converting to MMD: {e}")
            except Exception as e:
                print(f"  -> Unexpected error: {e}")
        
        else:
            print(f"  -> Already processed (Status: {existing_entry['status']})")

    # Save updates
    save_status(status_file, status_data)
    print(f"Updated status file: {status_file}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python process_subject.py <subject_directory>")
        sys.exit(1)
        
    subject_dir = Path(sys.argv[1])
    
    if not subject_dir.exists():
        print(f"Error: Directory {subject_dir} not found")
        sys.exit(1)
        
    # Process pastpapers
    process_directory(subject_dir, "pastpapers")
    
    # Process notes (optional, if structure exists)
    process_directory(subject_dir, "notes")
