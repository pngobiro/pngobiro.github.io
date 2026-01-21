import os
import re

def get_session_code(month):
    month = month.lower()
    if 'jan' in month: return 'j'
    if 'feb' in month: return 'f'
    if 'mar' in month: return 'm'
    if 'apr' in month: return 'a'
    if 'may' in month: return 'm'
    if 'jun' in month: return 'j'
    if 'jul' in month: return 'j'
    if 'aug' in month: return 'a'
    if 'sep' in month: return 's'
    if 'oct' in month: return 'o'
    if 'nov' in month: return 'n'
    if 'dec' in month: return 'd'
    return 'x'

def extract_papers(text):
    # Split by the college header which usually starts a new paper
    papers = re.split(r'KENYA MEDICAL TRAINING COLLEGE', text)
    
    extracted_count = 0
    for p in papers:
        if not p.strip():
            continue
            
        full_p = "KENYA MEDICAL TRAINING COLLEGE" + p
        
        # Check if it's a General Paper
        if "GENERAL PAPER" not in full_p.upper():
            continue
            
        # Extract Date
        date_match = re.search(r'DATE:\s*(\d+)(?:st|nd|rd|th)?\s+([A-Z,a-z]+),?\s+(\d{4})', full_p)
        if not date_match:
             # Try alternative date format
            date_match = re.search(r'DATE:\s*(\d+)\s+([A-Z,a-z]+)\s+(\d{4})', full_p)
            
        if date_match:
            day = date_match.group(1)
            month = date_match.group(2)
            year = date_match.group(3)
            session = get_session_code(month)
            
            filename = f"{year}{session}-fqe_ocr.mmd"
            target_dir = "KMTC/General Paper/FQE"
            os.makedirs(target_dir, exist_ok=True)
            
            # Handle duplicates
            base_path = os.path.join(target_dir, filename)
            final_path = base_path
            counter = 1
            while os.path.exists(final_path):
                final_path = base_path.replace("_ocr.mmd", f"-{counter}_ocr.mmd")
                counter += 1
                
            with open(final_path, 'w') as f:
                f.write(full_p.strip())
            print(f"Extracted: {final_path}")
            extracted_count += 1
        else:
            print("Date not found in a paper section.")

    print(f"Total General Papers extracted: {extracted_count}")

if __name__ == "__main__":
    try:
        with open("merged_content.md", "r") as f:
            content = f.read()
        extract_papers(content)
    except FileNotFoundError:
        print("Error: merged_content.md not found.")