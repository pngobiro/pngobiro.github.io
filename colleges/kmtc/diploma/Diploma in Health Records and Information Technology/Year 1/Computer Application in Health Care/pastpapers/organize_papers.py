import os
import json
import shutil
from datetime import datetime

base_dir = os.getcwd()
unprocessed_dir = os.path.join(base_dir, "UNPROCESSED")
fqe_dir = os.path.join(base_dir, "FQE")
not_relevant_dir = os.path.join(base_dir, "NOT_RELEVANT")

# Ensure directories exist
os.makedirs(fqe_dir, exist_ok=True)
os.makedirs(not_relevant_dir, exist_ok=True)

# Mapping: original_prefix -> (new_name_base, category_dir, year, session, type)
# Session codes: f=Feb, j=July/June, o=Oct
mapping = {
    "10_PDFsam": ("2021f-fqe-theory", fqe_dir, "2021", "February", "FQE"),
    "15_PDFsam": ("2021f-fqe-practical", fqe_dir, "2021", "February", "FQE"),
    "19_PDFsam": ("2021o-fqe-theory", fqe_dir, "2021", "October", "FQE"),
    "24_PDFsam": ("2021o-fqe-practical", fqe_dir, "2021", "October", "FQE"),
    "28_PDFsam": ("2020f-fqe-theory", fqe_dir, "2020", "February", "FQE"),
    "33_PDFsam": ("2020f-fqe-practical", fqe_dir, "2020", "February", "FQE"),
    "36_PDFsam": ("2022f-fqe-theory", fqe_dir, "2022", "February", "FQE"),
    "40_PDFsam": ("2022f-fqe-practical", fqe_dir, "2022", "February", "FQE"),
    "43_PDFsam": ("2021j-fqe-theory", fqe_dir, "2021", "July", "FQE"),
    "48_PDFsam": ("2021j-fqe-practical", fqe_dir, "2021", "July", "FQE"),
    "2_PDFsam": ("2022j-fqe-theory", fqe_dir, "2022", "June", "FQE"),
    "7_PDFsam": ("2022j-fqe-practical", fqe_dir, "2022", "June", "FQE"),
    "Final Exam": ("2023j-fqe-practical", fqe_dir, "2023", "July", "FQE"),
    "HPR-3216": ("Meru-University-2021-Exam", not_relevant_dir, "2021", "Unknown", "NOT_RELEVANT")
}

files_data = []

for filename in os.listdir(unprocessed_dir):
    if not filename.endswith(".pdf"):
        continue
        
    # Find matching key
    key = None
    for k in mapping:
        if filename.startswith(k):
            key = k
            break
            
    if key:
        new_base, target_dir, year, session, p_type = mapping[key]
        
        # Paths
        old_pdf = os.path.join(unprocessed_dir, filename)
        old_mmd = os.path.join(unprocessed_dir, filename.replace(".pdf", "_ocr.mmd"))
        
        new_pdf_name = new_base + ".html" # Wait, prompt says html filename in status, but file itself? 
        # Prompt: "Move PDF from UNPROCESSED to category folder"
        # Prompt: "File Naming Conventions... Past Papers: [year][session]-[type].html"
        # But the PDF should probably be kept as PDF or renamed?
        # Usually we keep the PDF as source. I'll rename the PDF to match the HTML base.
        new_pdf_name = new_base + ".pdf"
        new_mmd_name = new_base + "_ocr.mmd"
        
        new_pdf_path = os.path.join(target_dir, new_pdf_name)
        new_mmd_path = os.path.join(target_dir, new_mmd_name)
        
        # Move files
        print(f"Moving {filename} to {new_pdf_path}")
        shutil.move(old_pdf, new_pdf_path)
        if os.path.exists(old_mmd):
            shutil.move(old_mmd, new_mmd_path)
            
        # Add to JSON data
        files_data.append({
            "filename": new_pdf_name,
            "original_location": "UNPROCESSED/" + filename,
            "current_location": os.path.basename(target_dir) + "/",
            "status": "mmd_generated", # Since we have MMD
            "processing_steps": {
                "pdf_received": datetime.now().isoformat(),
                "mmd_generated": datetime.now().isoformat()
            },
            "paper_type": p_type,
            "year": year,
            "session": session,
            "html_filename": new_base + ".html",
            "mmd_filename": new_mmd_name,
            "notes": "Renamed and moved from UNPROCESSED"
        })

# Create processing-status.json
status_data = {
    "subject": "Computer Application in Health Care",
    "last_updated": datetime.now().isoformat(),
    "files": files_data,
    "statistics": {
        "total_files": len(files_data),
        "unprocessed": 0,
        "mmd_generated": len(files_data), # All moved have MMD
        "mmd_reviewed": 0,
        "html_generated": 0,
        "qa_added": 0,
        "verified": 0,
        "completed": 0
    },
    "next_steps": ["Review MMD files", "Generate HTML"]
}

with open(os.path.join(base_dir, "processing-status.json"), "w") as f:
    json.dump(status_data, f, indent=2)

print("Organization complete.")
