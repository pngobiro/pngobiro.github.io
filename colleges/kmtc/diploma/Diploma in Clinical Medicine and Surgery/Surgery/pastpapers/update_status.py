import json
import os
from datetime import datetime

base_dir = "/home/ngobiro/projects/pngobiro.github.io/colleges/kmtc/diploma/Diploma in Clinical Medicine and Surgery/Surgery/pastpapers"
unprocessed_dir = os.path.join(base_dir, "UNPROCESSED")
status_file = os.path.join(base_dir, "processing-status.json")

def update_status():
    with open(status_file, 'r') as f:
        data = json.load(f)

    existing_files = {f['filename'] for f in data['files']}
    
    unprocessed_files = [f for f in os.listdir(unprocessed_dir) if f.endswith('.pdf')]
    
    added_count = 0
    for filename in unprocessed_files:
        if filename not in existing_files:
            new_entry = {
                "filename": filename,
                "original_location": "UNPROCESSED/",
                "current_location": "UNPROCESSED/",
                "status": "unprocessed",
                "processing_steps": {
                    "pdf_received": datetime.now().isoformat()
                }
            }
            data['files'].append(new_entry)
            added_count += 1
            print(f"Added {filename}")

    # Update statistics
    total_files = len(data['files'])
    completed = sum(1 for f in data['files'] if f.get('status') == 'completed')
    unprocessed = sum(1 for f in data['files'] if f.get('status') == 'unprocessed')
    
    data['statistics']['total_files'] = total_files
    data['statistics']['completed'] = completed
    data['statistics']['unprocessed'] = unprocessed
    data['last_updated'] = datetime.now().isoformat()

    with open(status_file, 'w') as f:
        json.dump(data, f, indent=2)
    
    print(f"Updated processing-status.json. Added {added_count} new files.")

if __name__ == "__main__":
    update_status()
