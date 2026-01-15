import json
import os
import re
from datetime import datetime

base_dir = "/home/ngobiro/projects/pngobiro.github.io/colleges/kmtc/diploma/Diploma in Clinical Medicine and Surgery/Surgery/pastpapers"
unprocessed_dir = os.path.join(base_dir, "UNPROCESSED")
processed_dir = os.path.join(base_dir, "PROCESSED")
status_file = os.path.join(base_dir, "processing-status.json")

def analyze_mmd(file_path):
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Defaults
    year = "Unknown"
    session = "Unknown"
    paper_type = "Unknown"
    
    # Extract Year
    year_match = re.search(r'\b20\d{2}\b', content)
    if year_match:
        year = year_match.group(0)
    
    # Extract Session (Month)
    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    for month in months:
        if re.search(r'\b' + month + r'\b', content, re.IGNORECASE):
            session = month
            break
            
    # Extract Paper Type
    if re.search(r'FINAL QUALIFYING|FQE', content, re.IGNORECASE):
        paper_type = "FQE"
    elif re.search(r'CAT|CONTINUOUS ASSESSMENT', content, re.IGNORECASE):
        paper_type = "CAT"
    elif re.search(r'SUPPLEMENTARY|RETAKE', content, re.IGNORECASE):
        paper_type = "SUPPLEMENTARY"
    elif re.search(r'END OF SEMESTER', content, re.IGNORECASE):
        paper_type = "END_OF_SEMESTER"
        
    # Count Questions (heuristic: look for numbered lists or "Question X")
    questions = len(re.findall(r'^\d+\.|^Q\d+', content, re.MULTILINE))
    
    return {
        "year": year,
        "session": session,
        "paper_type": paper_type,
        "questions_count": questions
    }

def update_status_with_analysis():
    with open(status_file, 'r') as f:
        data = json.load(f)
        
    for entry in data['files']:
        if entry['status'] == 'unprocessed':
            mmd_filename = entry['filename'].replace('.pdf', '_ocr.mmd')
            
            # Check in UNPROCESSED first
            mmd_path = os.path.join(unprocessed_dir, mmd_filename)
            found_location = "UNPROCESSED/"
            
            if not os.path.exists(mmd_path):
                # Check in PROCESSED
                mmd_path = os.path.join(processed_dir, mmd_filename)
                found_location = "PROCESSED/"
            
            if os.path.exists(mmd_path):
                print(f"Analyzing {mmd_filename}...")
                analysis = analyze_mmd(mmd_path)
                
                entry['status'] = 'mmd_generated'
                entry['current_location'] = found_location
                entry['mmd_filename'] = mmd_filename
                entry['paper_type'] = analysis['paper_type']
                entry['year'] = analysis['year']
                entry['session'] = analysis['session']
                entry['questions_count'] = analysis['questions_count']
                
                # Generate HTML filename
                short_session = analysis['session'][0].lower() if analysis['session'] != "Unknown" else "u"
                type_slug = analysis['paper_type'].lower().replace('_', '-')
                entry['html_filename'] = f"{analysis['year']}{short_session}-{type_slug}.html"
                
                entry['processing_steps']['mmd_generated'] = datetime.now().isoformat()
                
    # Update statistics
    data['statistics']['mmd_generated'] = sum(1 for f in data['files'] if f.get('status') == 'mmd_generated')
    data['statistics']['unprocessed'] = sum(1 for f in data['files'] if f.get('status') == 'unprocessed')
    data['last_updated'] = datetime.now().isoformat()
    
    with open(status_file, 'w') as f:
        json.dump(data, f, indent=2)
        
    print("Updated processing-status.json with MMD analysis.")

if __name__ == "__main__":
    update_status_with_analysis()
