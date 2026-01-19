import os
import requests
from bs4 import BeautifulSoup
import re
import urllib3

# Suppress insecure request warnings
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

BASE_URL = "https://pastpapers.ku.ac.ke"
DEST_DIR = "pastpapers/ku"

def sanitize_filename(name):
    # Remove problematic characters, but keep spaces for readability
    name = re.sub(r'[\\/*?:\"<>|]', "", name)
    return name.strip()

def get_item_links(collection_url):
    links = []
    try:
        response = requests.get(collection_url, verify=False)
        response.raise_for_status()
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # In DSpace 6 (JSPUI), item lists are often in table 'ds-table' or ul 'ds-artifact-list'
        # Or simply links with /handle/ prefix
        for a in soup.find_all('a'):
            href = a.get('href', '')
            # Filter for item handles (usually /handle/123456789/ID)
            # Avoid collection/community handles which might be listed
            if '/handle/123456789/' in href and not any(x in href for x in ['browse', 'discover', 'search-filter', '?']):
                full_link = BASE_URL + href
                if full_link not in links and full_link != collection_url:
                     links.append(full_link)
        return links
    except Exception as e:
        print(f"Error fetching collection {collection_url}: {e}")
        return []

def get_bitstream_link(item_url):
    try:
        response = requests.get(item_url, verify=False)
        response.raise_for_status()
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Look for the bitstream link
        # In DSpace JSPUI, often under "Files in this item"
        for a in soup.find_all('a'):
            href = a.get('href', '')
            if '/bitstream/handle/' in href and 'isAllowed=y' in href:
                 return BASE_URL + href, a.text.strip()
        
        # Fallback: sometimes links don't have isAllowed=y explicitly in the anchor text
        for a in soup.find_all('a'):
             href = a.get('href', '')
             if '/bitstream/handle/' in href and href.lower().endswith('.pdf?sequence=1'):
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

def main():
    if not os.path.exists(DEST_DIR):
        os.makedirs(DEST_DIR)

    # Collections identified from community-list
    # We will fetch items from these pages.
    # Note: DSpace pagination might be needed if > 20 items. 
    # For simplicity, we grab what's on the main collection page first.
    
    COLLECTIONS = {
        "School of Nursing": "https://pastpapers.ku.ac.ke/handle/123456789/4397",
        "Community and Reproductive Health Nursing": "https://pastpapers.ku.ac.ke/handle/123456789/4446",
        "Medical Surgical Nursing": "https://pastpapers.ku.ac.ke/handle/123456789/4445"
    }

    for col_name, col_url in COLLECTIONS.items():
        print(f"Processing Collection: {col_name}")
        col_dir = os.path.join(DEST_DIR, sanitize_filename(col_name))
        if not os.path.exists(col_dir):
            os.makedirs(col_dir)

        # Handle pagination manually if needed, or just grab the list
        # Often DSpace has ?offset=0, ?offset=20
        # Let's try grabbing first 2 pages
        for offset in [0, 20]:
            page_url = f"{col_url}?offset={offset}"
            print(f"  Fetching items from: {page_url}")
            item_links = get_item_links(page_url)
            
            for item_link in item_links:
                # Avoid re-processing the collection link itself if it appears
                if item_link.split('?')[0] == col_url: continue

                bitstream_url, bitstream_name = get_bitstream_link(item_link)
                
                if bitstream_url:
                    try:
                        resp = requests.get(item_link, verify=False)
                        item_soup = BeautifulSoup(resp.text, 'html.parser')
                        # Title is usually in <td class="metadataFieldValue"> for dc.title
                        # Or just take the page title
                        # In DSpace JSPUI item view: table.ds-includeSet-table
                        # Let's try page title first
                        item_title = item_soup.find('title').text.strip().replace("Kenyatta University Digital Repository:", "").strip()
                    except:
                        item_title = bitstream_name

                    safe_title = sanitize_filename(item_title)
                    safe_filename = sanitize_filename(bitstream_name or "past_paper.pdf")
                    if not safe_filename.lower().endswith(".pdf"): safe_filename += ".pdf"
                    
                    # Combine for a descriptive filename
                    final_filename = f"{safe_title}_{safe_filename}"
                    if len(final_filename) > 250: final_filename = final_filename[:250]
                    
                    file_path = os.path.join(col_dir, final_filename)

                    if not os.path.exists(file_path):
                        download_file(bitstream_url, file_path)
                    else:
                         # Simple check to avoid re-downloading
                         pass
                         # print(f"      Skipping existing file: {file_path}")

if __name__ == "__main__":
    main()
