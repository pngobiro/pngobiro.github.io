import os
import requests
from bs4 import BeautifulSoup
import re
import urllib3

# Suppress insecure request warnings
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

BASE_URL = "https://exambank.mmust.ac.ke"
DEST_DIR = "pastpapers/mmust"

def sanitize_filename(name):
    return re.sub(r'[\\/*?:"<>|]', "", name)

def get_bitstream_link(item_url):
    try:
        response = requests.get(item_url, verify=False)
        response.raise_for_status()
        soup = BeautifulSoup(response.text, 'html.parser')
        for a in soup.find_all('a'):
            href = a.get('href', '')
            if 'bitstream' in href and not 'isAllowed=n' in href:
                return BASE_URL + href, a.text.strip()
        return None, None
    except Exception as e:
        print(f"Error fetching item {item_url}: {e}")
        return None, None

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

def scrape_collection(collection_handle, category_name):
    print(f"Scraping Collection: {category_name} ({collection_handle})")
    cat_dir = os.path.join(DEST_DIR, category_name)
    if not os.path.exists(cat_dir):
        os.makedirs(cat_dir)

    url = f"{BASE_URL}/xmlui/handle/123456789/{collection_handle}"
    try:
        response = requests.get(url, verify=False)
        response.raise_for_status()
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Get item links
        item_links = []
        for a in soup.find_all('a'):
            href = a.get('href', '')
            if '/xmlui/handle/123456789/' in href and not any(x in href for x in ['browse', 'show=full', 'recent-submissions']):
                # Filter out the collection link itself
                if href.strip('/') != f'xmlui/handle/123456789/{collection_handle}':
                    full_link = BASE_URL + href
                    if full_link not in item_links:
                        item_links.append(full_link)

        for item_link in item_links:
            bitstream_url, bitstream_name = get_bitstream_link(item_link)
            if bitstream_url:
                try:
                    resp = requests.get(item_link, verify=False)
                    item_soup = BeautifulSoup(resp.text, 'html.parser')
                    item_title = item_soup.find('title').text.strip().replace(" - MMUST Exams Bank", "")
                except:
                    item_title = bitstream_name

                safe_title = sanitize_filename(item_title)
                safe_filename = sanitize_filename(bitstream_name)
                if not safe_filename.lower().endswith(".pdf"): safe_filename += ".pdf"
                
                file_path = os.path.join(cat_dir, f"{safe_title}_{safe_filename}")
                if len(file_path) > 250: file_path = file_path[:250]

                if not os.path.exists(file_path):
                    download_file(bitstream_url, file_path)
                else:
                    print(f"      Skipping existing file.")
    except Exception as e:
        print(f"Error scraping {collection_handle}: {e}")

def main():
    # Corrected Nursing Handles from community-list
    HANDLES = {
        "BSc Nursing": "231",
        "BSc Clinical Nursing": "7635",
        "MSc Advanced Nursing": "238",
        "MSc Nursing": "7641",
        "PhD Nursing": "239",
        "MSc Nursing Trauma": "7638"
    }

    for name, handle in HANDLES.items():
        scrape_collection(handle, name)

if __name__ == "__main__":
    main()