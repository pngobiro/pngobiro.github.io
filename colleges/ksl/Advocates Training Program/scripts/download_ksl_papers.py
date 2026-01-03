#!/usr/bin/env python3
"""
Download missing ATP past papers from KSL repository.
"""

import requests
from bs4 import BeautifulSoup
import re
from pathlib import Path
import time
from urllib.parse import urljoin

BASE_URL = "https://repository.ksl.ac.ke"
TARGET_URL = f"{BASE_URL}/handle/ksl/52"
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

def extract_paper_info(soup):
    """Extract paper information from repository page."""
    papers = []
    
    # Find all item links
    items = soup.find_all('a', href=re.compile(r'/handle/ksl/'))
    
    for item in items:
        title = item.get_text(strip=True)
        link = item.get('href', '')
        
        # Skip non-paper links
        if not link or 'ksl/52' in link:
            continue
        
        full_link = urljoin(BASE_URL, link)
        papers.append({
            'title': title,
            'link': full_link
        })
    
    return papers

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
        
        print(f"✓ Downloaded: {dest_path.name}")
        return True
    except Exception as e:
        print(f"✗ Error downloading {url}: {e}")
        return False

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
    if 'july' in title_lower:
        session = 'July'
    elif 'november' in title_lower:
        session = 'November'
    elif 'march' in title_lower:
        session = 'March'
    elif 'october' in title_lower:
        session = 'October'
    
    return subject, year, session

def main():
    print("=" * 80)
    print("DOWNLOADING MISSING ATP PAST PAPERS FROM KSL REPOSITORY")
    print("=" * 80)
    print()
    
    # Fetch main repository page
    print("Fetching repository index...")
    soup = get_soup(TARGET_URL)
    
    if not soup:
        print("Failed to fetch repository page")
        return
    
    # Extract paper information
    papers = extract_paper_info(soup)
    print(f"Found {len(papers)} papers in repository")
    print()
    
    # Classify and download papers
    downloaded = 0
    skipped = 0
    failed = 0
    
    for paper in papers:
        subject, year, session = classify_paper(paper['title'])
        
        if not subject:
            print(f"? Skip (no subject): {paper['title'][:60]}...")
            skipped += 1
            continue
        
        if not year:
            print(f"? Skip (no year): {paper['title'][:60]}...")
            skipped += 1
            continue
        
        # Determine destination
        subject_name = f"{subject} - {SUBJECT_MAPPINGS[subject]}"
        dest_dir = OUTPUT_DIR / subject_name / "Past Papers"
        
        # Create filename
        filename = f"{year}_{session}_{subject}.pdf" if session else f"{year}_{subject}.pdf"
        dest_path = dest_dir / filename
        
        # Check if already exists
        if dest_path.exists():
            print(f"⊘ Exists: {filename}")
            skipped += 1
            continue
        
        # Download
        print(f"Downloading: {paper['title'][:60]}...")
        if download_file(paper['link'], dest_path):
            downloaded += 1
        else:
            failed += 1
        
        # Rate limiting
        time.sleep(1)
    
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
