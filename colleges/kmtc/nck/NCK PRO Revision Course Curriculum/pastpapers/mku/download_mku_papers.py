import os
import requests
import json
import re

# Base API URL
API_BASE = "https://pastexams.mku.ac.ke/server/api"

# Collections to process
COLLECTIONS = {
    "Bachelor of Science in Nursing": "176564ca-5b7c-4f67-b9ee-cd4886ee3b89",
    "Master of Science in Nursing": "3f810d84-a328-40f9-9e62-ffe281994484"
}

DEST_DIR = "pastpapers/mku"

def sanitize_filename(name):
    return re.sub(r'[\\/*?:\"<>|]', "", name)

def get_items_from_collection(collection_uuid):
    url = f"{API_BASE}/discover/search/objects?scope={collection_uuid}&dsoType=ITEM&size=100" # Fetch first 100 for now
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

def search_items(query):
    url = f"{API_BASE}/discover/search/objects?query={query}&dsoType=ITEM&size=50"
    try:
        response = requests.get(url, verify=False)
        response.raise_for_status()
        data = response.json()
        if "_embedded" in data and "searchResult" in data["_embedded"]:
             return data["_embedded"]["searchResult"]["_embedded"]["objects"]
        return []
    except Exception as e:
        print(f"Error searching items for {query}: {e}")
        return []

def get_bitstreams(item_uuid, bundles_url):
    try:
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

    # 1. Download from specific collections
    for col_name, col_uuid in COLLECTIONS.items():
        print(f"Processing Collection: {col_name}")
        col_dir = os.path.join(DEST_DIR, sanitize_filename(col_name))
        if not os.path.exists(col_dir):
            os.makedirs(col_dir)

        items = get_items_from_collection(col_uuid)
        print(f"Found {len(items)} items in {col_name}")

        for item_obj in items:
            item = item_obj["_embedded"]["indexableObject"]
            item_name = item["name"]
            item_uuid = item["uuid"]
            
            # Get bundles link from item
            bundles_url = item["_links"]["bundles"]["href"]
            
            print(f"  Processing Item: {item_name}")
            bitstreams = get_bitstreams(item_uuid, bundles_url)
            
            for bitstream in bitstreams:
                file_name = bitstream["name"]
                download_url = bitstream["_links"]["content"]["href"]
                
                safe_filename = sanitize_filename(f"{item_name}_{file_name}")
                if len(safe_filename) > 200:
                    safe_filename = safe_filename[:200]
                    
                file_path = os.path.join(col_dir, safe_filename)
                
                if not os.path.exists(file_path):
                    download_file(download_url, file_path)
                else:
                    print(f"    Skipping existing file: {file_path}")

    # 2. Search for Diploma Nursing papers
    print("Searching for Diploma Nursing papers...")
    diploma_query = "Diploma Nursing"
    diploma_items = search_items(diploma_query)
    print(f"Found {len(diploma_items)} items for '{diploma_query}'")
    
    diploma_dir = os.path.join(DEST_DIR, "Diploma in Nursing")
    if not os.path.exists(diploma_dir):
        os.makedirs(diploma_dir)

    for item_obj in diploma_items:
        item = item_obj["_embedded"]["indexableObject"]
        item_name = item["name"]
        item_uuid = item["uuid"]
        
        # Get bundles link from item
        bundles_url = item["_links"]["bundles"]["href"]
        
        print(f"  Processing Item: {item_name}")
        bitstreams = get_bitstreams(item_uuid, bundles_url)
        
        for bitstream in bitstreams:
            file_name = bitstream["name"]
            download_url = bitstream["_links"]["content"]["href"]
            
            safe_filename = sanitize_filename(f"{item_name}_{file_name}")
            if len(safe_filename) > 200:
                safe_filename = safe_filename[:200]
                
            file_path = os.path.join(diploma_dir, safe_filename)
            
            if not os.path.exists(file_path):
                download_file(download_url, file_path)
            else:
                print(f"    Skipping existing file: {file_path}")

if __name__ == "__main__":
    main()
