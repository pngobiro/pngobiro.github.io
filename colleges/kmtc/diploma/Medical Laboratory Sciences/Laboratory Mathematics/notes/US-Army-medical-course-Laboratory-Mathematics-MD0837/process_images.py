import re
import os
import requests
from collections import defaultdict

# Configuration
mmd_file = "US-Army-medical-course-Laboratory-Mathematics-MD0837.mmd"
output_mmd_file = "US-Army-medical-course-Laboratory-Mathematics-MD0837.processed.mmd"
image_dir = "assets/images"

# Ensure image directory exists
os.makedirs(image_dir, exist_ok=True)

# Read MMD content
with open(mmd_file, "r") as f:
    content = f.read()

# Regex to find images: ![](url)
# Mathpix URLs look like: https://cdn.mathpix.com/cropped/[ID]g-[PageNum].jpg?...
image_pattern = re.compile(r'!\[\]\((https://cdn\.mathpix\.com/cropped/([^)]+))\)')

# Track sequence numbers for each page
page_sequences = defaultdict(int)

def process_image(match):
    full_url = match.group(1)
    url_path = match.group(2) # e.g. 2025_05_28_...g-08.jpg?height=...
    
    # Extract ID and PageNum from the filename part
    # Format usually: [ID]g-[PageNum].jpg
    # Example: 99ba290c-45c7-4b63-9fb5-b6088ced36aa-001.jpg
    
    filename_part = url_path.split('?')[0]
    
    # Try to parse ID and PageNum
    # It seems the format is [ID]-[PageNum].jpg based on the grep output
    # grep output: ...99ba290c-45c7-4b63-9fb5-b6088ced36aa-001.jpg
    
    if '-' in filename_part:
        # Split by last hyphen to get page number
        base_parts = filename_part.rsplit('-', 1)
        if len(base_parts) == 2:
            id_part = base_parts[0]
            page_part = base_parts[1].replace('.jpg', '')
            
            # Increment sequence for this page
            page_sequences[page_part] += 1
            seq_num = page_sequences[page_part]
            
            # Construct new filename: [ID]-[PageNum]-[SeqNum].jpg
            # Note: The prompt asks for [ID]g-[PageNum]-[SeqNum].ext
            # But the grep output shows the ID doesn't end in 'g'. 
            # I will stick to the prompt's logic: ID + Page + Seq.
            # Let's just use the original filename base + sequence.
            
            new_filename = f"{id_part}-{page_part}-{seq_num}.jpg"
            local_path = os.path.join(image_dir, new_filename)
            
            # Download if not exists
            if not os.path.exists(local_path):
                print(f"Downloading {new_filename}...")
                try:
                    response = requests.get(full_url)
                    if response.status_code == 200:
                        with open(local_path, "wb") as img_file:
                            img_file.write(response.content)
                    else:
                        print(f"Failed to download {full_url}: Status {response.status_code}")
                except Exception as e:
                    print(f"Error downloading {full_url}: {e}")
            else:
                print(f"Skipping {new_filename} (already exists)")
            
            # Return the new markdown image syntax
            # The HTML files will be in 'topics/', so images are in '../assets/images/'
            return f'![]({os.path.join("..", image_dir, new_filename)})'
            
    return match.group(0) # Return original if parsing fails

# Replace all images
new_content = image_pattern.sub(process_image, content)

# Write processed MMD
with open(output_mmd_file, "w") as f:
    f.write(new_content)

print("Done processing images.")
