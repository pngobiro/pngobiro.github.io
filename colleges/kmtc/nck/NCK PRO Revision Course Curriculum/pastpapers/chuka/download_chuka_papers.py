import os
import requests
import json
import re
import urllib3

# Suppress insecure request warnings
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

BASE_URL = "https://repository.chuka.ac.ke"
API_BASE_URL = "https://repository.chuka.ac.ke/server/api"
DEST_DIR = "pastpapers/chuka"

def sanitize_filename(name):
    # Remove problematic characters
    if not name: return "Unknown"
    name = re.sub(r'[\\/*?:",<>|]', " ", name)
    return name.strip()

def download_file(url, filepath):
    try:
        response = requests.get(url, verify=False, stream=True)
        response.raise_for_status()
        with open(filepath, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)
        print(f"Downloaded: {filepath}")
        return True
    except Exception as e:
        print(f"Error downloading {url}: {e}")
        return False

def get_items(collection_uuid, page=0, size=20):
    url = f"{API_BASE_URL}/discover/search/objects?scope={collection_uuid}&dsoType=ITEM&size={size}&page={page}&sort=dc.date.accessioned,DESC"
    try:
        response = requests.get(url, verify=False)
        response.raise_for_status()
        return response.json()
    except Exception as e:
        print(f"Error fetching items page {page} for collection {collection_uuid}: {e}")
        return None

def get_bundles(item_uuid):
    url = f"{API_BASE_URL}/core/items/{item_uuid}/bundles"
    try:
        response = requests.get(url, verify=False)
        if response.status_code != 200: return None
        return response.json()
    except Exception as e:
        print(f"Error fetching bundles for {item_uuid}: {e}")
        return None

def get_bitstreams(bundle_uuid):
    url = f"{API_BASE_URL}/core/bundles/{bundle_uuid}/bitstreams"
    try:
        response = requests.get(url, verify=False)
        if response.status_code != 200: return None
        return response.json()
    except Exception as e:
        print(f"Error fetching bitstreams for {bundle_uuid}: {e}")
        return None

def process_collection(col_name, col_uuid):
    print(f"Processing Collection: {col_name} ({col_uuid})")
    col_dir = os.path.join(DEST_DIR, sanitize_filename(col_name))
    if not os.path.exists(col_dir):
        os.makedirs(col_dir)

    initial_data = get_items(col_uuid, size=20)
    if not initial_data:
        print(f"  Failed to fetch initial data for {col_name}")
        return
        
    embedded = initial_data.get('_embedded', {})
    search_result = embedded.get('searchResult', {})
    page_info = search_result.get('page', {})
    
    total_pages = page_info.get('totalPages', 0)
    print(f"  Total pages to process: {total_pages}")

    for page in range(total_pages):
        print(f"  Processing page {page + 1}/{total_pages}")
        items_data = get_items(col_uuid, page=page, size=20)
        
        if not items_data: continue
        
        objects = items_data.get('_embedded', {}).get('searchResult', {}).get('_embedded', {}).get('objects', [])
        
        for obj in objects:
            # DSpace 7 search results often embed the item in indexableObject
            item_data = obj.get('_embedded', {}).get('indexableObject')
            if not item_data:
                # Try following the link
                links = obj.get('_links', {})
                if 'indexableObject' not in links: continue
                item_url = links['indexableObject']['href']
                try:
                    item_data = requests.get(item_url, verify=False).json()
                except:
                    continue

            if not item_data: continue
            
            item_name = item_data.get('name')
            if not item_name:
                metadata = item_data.get('metadata', {})
                titles = metadata.get('dc.title', [])
                if titles:
                    item_name = titles[0].get('value')
            
            if not item_name:
                item_name = "Unknown"
            
            item_uuid = item_data.get('id')
            
            # Fetch bundles
            bundles_data = get_bundles(item_uuid)
            if not bundles_data or '_embedded' not in bundles_data:
                continue
                
            for bundle in bundles_data['_embedded']['bundles']:
                if bundle['name'] == 'ORIGINAL':
                    bitstreams_data = get_bitstreams(bundle['uuid'])
                    if not bitstreams_data or '_embedded' not in bitstreams_data:
                        continue
                        
                    for bitstream in bitstreams_data['_embedded']['bitstreams']:
                        if bitstream['name'].lower().endswith('.pdf'):
                            content_url = bitstream['_links']['content']['href']
                            
                            safe_title = sanitize_filename(item_name)
                            safe_bs_name = sanitize_filename(bitstream['name'])
                            
                            if safe_bs_name.lower().startswith(safe_title.lower().split(':')[0]):
                                final_filename = safe_bs_name
                            else:
                                final_filename = f"{safe_title}_{safe_bs_name}"
                                
                            if len(final_filename) > 250: final_filename = final_filename[:250]
                            
                            file_path = os.path.join(col_dir, final_filename)
                            
                            if not os.path.exists(file_path):
                                print(f"    Downloading: {item_name}")
                                download_file(content_url, file_path)

def main():
    if not os.path.exists(DEST_DIR):
        os.makedirs(DEST_DIR)

    COLLECTIONS = {
        "Nursing": "55698492-4947-4585-b0f9-b70f4bb72f73",
        "Public Health": "a7de3d64-58d6-4528-af3c-22ad396ab238"
    }

    for name, uuid in COLLECTIONS.items():
        process_collection(name, uuid)

if __name__ == "__main__":
    main()
