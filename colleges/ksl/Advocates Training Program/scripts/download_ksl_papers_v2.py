#!/usr/bin/env python3
"""
Download missing ATP past papers from KSL repository - Enhanced version.
"""

import requests
from bs4 import BeautifulSoup
import re
from pathlib import Path
import time
from urllib.parse import urljoin

BASE_URL = "https://repository.ksl.ac.ke"
OUTPUT_DIR = Path("/home/ngobiro/projects/pngobiro.github.io/colleges/ksl/Advocates Training Program")

# Subject mappings
SUBJECT_MAPPINGS = {
    "ATP 100": "Civil Litigation",
    "ATP 101": "Criminal Litigation",
    "ATP 102": "Probate and Administration",
    "ATP 103": "Legal Writing and Drafting",
    "ATP 104": "Trial Advocacy",
    "ATP 105": "Professional Ethics",
    "ATP 106": "Legal Practice Management",
    "ATP 107": "Conveyancing",
    "ATP 108": "Commercial Transactions"
}

def get_soup(url):
    """Fetch and parse a webpage."""
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
        response = requests.get(url, headers=headers, timeout=30)
        response.raise_for_status()
        return BeautifulSoup(response.content, 'html.parser')
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return None

def find_download_link(soup):
    """Find the actual download link in a repository item page."""
    # Look for common download link patterns
    download_links = []
    
    # Pattern 1: Direct file links
    for link in soup.find_all('a', href=True):
        href = link.get('href', '')
        if any(ext in href.lower() for ext in ['.pdf', '.doc', '.docx']):
            full_link = urljoin(BASE_URL, href)
            download_links.append(full_link)
    
    # Pattern 2: Bitstream links
    bitstream_links = soup.find_all('a', href=re.compile(r'/bitstream/handle/'))
    for link in bitstream_links:
        full_link = urljoin(BASE_URL, link.get('href'))
        download_links.append(full_link)
    
    return download_links[0] if download_links else None

def classify_paper(title):
    """Classify a paper by subject and year."""
    title_lower = title.lower()
    
    # Detect subject
    subject = None
    for code, name in SUBJECT_MAPPINGS.items():
        if code.lower() in title_lower or name.lower() in title_lower:
            subject = code
            break
    
    # Detect year
    year_match = re.search(r'20(1[0-9]|2[0-4])', title)
    year = year_match.group() if year_match else None
    
    # Detect session
    session = None
    if 'july' in title_lower or 'jul' in title_lower:
        session = 'July'
    elif 'november' in title_lower or 'nov' in title_lower:
        session = 'November'
    elif 'march' in title_lower or 'mar' in title_lower:
        session = 'March'
    elif 'october' in title_lower or 'oct' in title_lower:
        session = 'October'
    elif 'april' in title_lower or 'apr' in title_lower:
        session = 'April'
    
    return subject, year, session

def download_file(url, dest_path):
    """Download a file from URL to destination path."""
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
        response = requests.get(url, headers=headers, timeout=60, stream=True)
        response.raise_for_status()
        
        dest_path.parent.mkdir(parents=True, exist_ok=True)
        
        with open(dest_path, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                if chunk:
                    f.write(chunk)
        
        return True
    except Exception as e:
        print(f"  ✗ Error: {e}")
        return False

def main():
    print("=" * 80)
    print("DOWNLOADING ATP PAST PAPERS FROM KSL REPOSITORY")
    print("=" * 80)
    print()
    
    # Start from main handle
    start_url = f"{BASE_URL}/handle/ksl/52"
    
    print(f"Fetching: {start_url}")
    soup = get_soup(start_url)
    
    if not soup:
        print("Failed to fetch repository page")
        return
    
    # Find all item links
    items = []
    for link in soup.find_all('a', href=True):
        href = link.get('href', '')
        if '/handle/ksl/' in href and href != '/handle/ksl/52':
            full_url = urljoin(BASE_URL, href)
            title = link.get_text(strip=True)
            items.append({'title': title, 'url': full_url})
    
    print(f"Found {len(items)} items to check")
    print()
    
    # Process each item
    downloaded = 0
    skipped = 0
    failed = 0
    
    for i, item in enumerate(items, 1):
        print(f"[{i}/{len(items)}] Checking: {item['title'][:60]}...")
        
        # Classify the paper
        subject, year, session = classify_paper(item['title'])
        
        if not subject:
            print(f"  ⊘ Skip: No subject detected")
            skipped += 1
            continue
        
        if not year:
            print(f"  ⊘ Skip: No year detected")
            skipped += 1
            continue
        
        # Determine destination
        subject_name = f"{subject} - {SUBJECT_MAPPINGS[subject]}"
        dest_dir = OUTPUT_DIR / subject_name / "Past Papers"
        
        # Create filename
        session_str = f"_{session}" if session else ""
        filename = f"{year}{session_str}_{subject}.pdf"
        dest_path = dest_dir / filename
        
        # Check if already exists
        if dest_path.exists():
            print(f"  ⊘ Exists: {filename}")
            skipped += 1
            continue
        
        # Fetch item page to find download link
        item_soup = get_soup(item['url'])
        if not item_soup:
            print(f"  ✗ Failed to fetch item page")
            failed += 1
            continue
        
        # Find download link
        download_link = find_download_link(item_soup)
        if not download_link:
            print(f"  ✗ No download link found")
            failed += 1
            continue
        
        # Download
        print(f"  → Downloading to: {filename}")
        if download_file(download_link, dest_path):
            print(f"  ✓ Success")
            downloaded += 1
        else:
            print(f"  ✗ Download failed")
            failed += 1
        
        # Rate limiting
        time.sleep(2)
        
        print()
    
    print("=" * 80)
    print("DOWNLOAD SUMMARY")
    print("=" * 80)
    print(f"Downloaded: {downloaded}")
    print(f"Skipped: {skipped}")
    print(f"Failed: {failed}")
    print("=" * 80)

if __name__ == "__main__":
    main()
