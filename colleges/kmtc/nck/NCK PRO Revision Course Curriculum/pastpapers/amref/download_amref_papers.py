import os
import requests
import json
import re

# Base API URL
API_BASE = "https://pastpapers.amref.ac.ke/server/api"

# Collections to process
COLLECTIONS = {
    "Fundamentals of Nursing": "8e5329e8-70cf-4368-9816-311f5a344cd6",
    "Medical Surgical Nursing I": "79f30acd-d3bb-49ee-8e7a-928f098108d7",
    "Midwifery I": "0f76bfdf-ca22-4013-9f68-93472696d790",
    "Pediatric Nursing and IMCI": "4c277bf7-7551-41ab-aa1e-68a5eb93ae49",
    "Pharmacology I": "c92e8817-c48e-4b4b-a732-9b062e1890b5",
    "Community Health I": "deb31275-d241-4421-98f8-9b311cbeab4c",
    "Pharmacology II": "8f8ced40-f34a-4b10-9183-d1b770edcdcc",
    "Medical Surgical Nursing II": "321b7600-fd45-4de3-9706-de52e2323787",
    "Midwifery II": "43f953e1-5481-4f55-a4a2-f2eea6148e90",
    "Community Health Nursing": "deb31275-d241-4421-98f8-9b311cbeab4c" 
}

# Adjusted to run from the current directory if the script is placed inside pastpapers/amref
# or if run from root with the script path. 
# Let's assume it writes to the current folder if run from inside, or relative.
# For safety, I'll keep it writing to 'pastpapers/amref' relative to CWD if run from root.
# But if moved inside, we might want it to write to '.' 
# Let's stick to the original path logic for now, assuming execution from root.
DEST_DIR = "pastpapers/amref"

def sanitize_filename(name):
    return re.sub(r'[\\/*?:",<>|]', "", name)

def get_items(collection_uuid):
    url = f"{API_BASE}/discover/search/objects?scope={collection_uuid}&dsoType=ITEM"
    try:
        response = requests.get(url, verify=False)
        response.raise_for_status()
        data = response.json()
        if "_embedded" in data and "searchResult" in data["_embedded"]:
             return data["_embedded"]["searchResult"]["_embedded"]["objects"]
        return []
    except Exception as e:
        print(f"Error fetching items for {collection_uuid}: {e}")
        return []

def get_bitstreams(item_uuid, bundles_url):
    try:
        # First get bundles
        response = requests.get(bundles_url, verify=False)
        response.raise_for_status()
        data = response.json()
        
        if "_embedded" in data and "bundles" in data["_embedded"]:
            for bundle in data["_embedded"]["bundles"]:
                if bundle["name"] == "ORIGINAL":
                    # Found ORIGINAL bundle, now get its bitstreams
                    bitstreams_url = bundle["_links"]["bitstreams"]["href"]
                    bs_response = requests.get(bitstreams_url, verify=False)
                    bs_response.raise_for_status()
                    bs_data = bs_response.json()
                    
                    if "_embedded" in bs_data and "bitstreams" in bs_data["_embedded"]:
                        return bs_data["_embedded"]["bitstreams"]
        return []
    except Exception as e:
        print(f"Error fetching bitstreams for {item_uuid}: {e}")
        return []

def download_file(url, filepath):
    try:
        response = requests.get(url, verify=False, stream=True)
        response.raise_for_status()
        with open(filepath, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)
        print(f"Downloaded: {filepath}")
    except Exception as e:
        print(f"Error downloading {url}: {e}")

def main():
    if not os.path.exists(DEST_DIR):
        os.makedirs(DEST_DIR)

    for col_name, col_uuid in COLLECTIONS.items():
        print(f"Processing Collection: {col_name}")
        col_dir = os.path.join(DEST_DIR, sanitize_filename(col_name))
        if not os.path.exists(col_dir):
            os.makedirs(col_dir)

        items = get_items(col_uuid)
        print(f"Found {len(items)} items in {col_name}")

        for item_obj in items:
            item = item_obj["_embedded"]["indexableObject"]
            item_name = item["name"]
            item_uuid = item["uuid"]
            
            # Get bundles link from item
            if "_links" in item and "bundles" in item["_links"]:
                bundles_url = item["_links"]["bundles"]["href"]
                
                print(f"  Processing Item: {item_name}")
                bitstreams = get_bitstreams(item_uuid, bundles_url)
                
                for bitstream in bitstreams:
                    file_name = bitstream["name"]
                    if "_links" in bitstream and "content" in bitstream["_links"]:
                        download_url = bitstream["_links"]["content"]["href"]
                        
                        # Use item name as prefix to ensure clarity if filename is generic
                        safe_filename = sanitize_filename(f"{item_name}_{file_name}")
                        # Truncate if too long
                        if len(safe_filename) > 200:
                            safe_filename = safe_filename[:200]
                            
                        file_path = os.path.join(col_dir, safe_filename)
                        
                        if not os.path.exists(file_path):
                            download_file(download_url, file_path)
                        else:
                            print(f"    Skipping existing file: {file_path}")

if __name__ == "__main__":
    main()
