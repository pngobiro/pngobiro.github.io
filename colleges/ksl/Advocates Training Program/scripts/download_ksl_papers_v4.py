#!/usr/bin/env python3
"""
Download ATP past papers from KSL repository using direct bitstream links.
"""

import requests
from bs4 import BeautifulSoup
import re
from pathlib import Path
import time
from urllib.parse import urljoin, unquote

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
        return None

def find_all_bitstream_links(soup):
    """Find all bitstream download links."""
    links = []
    for link in soup.find_all('a', href=re.compile(r'/bitstream/handle/ksl/\d+/')):
        href = link.get('href', '')
        full_url = urljoin(BASE_URL, href)
        # Extract filename from URL
        filename = unquote(href.split('/')[-1].split('?')[0])
        links.append({
            'url': full_url,
            'filename': filename
        })
    return links

def classify_paper(filename):
    """Classify a paper by subject and year."""
    filename_lower = filename.lower()
    
    # Detect subject
    subject = None
    for code, name in SUBJECT_MAPPINGS.items():
        if code.lower() in filename_lower or name.lower() in filename_lower:
            subject = code
            break
    
    # Detect year
    year_match = re.search(r'20(1[0-9]|2[0-4])', filename)
    year = year_match.group() if year_match else None
    
    # Detect session
    session = None
    if 'july' in filename_lower or 'jul' in filename_lower:
        session = 'July'
    elif 'november' in filename_lower or 'nov' in filename_lower:
        session = 'November'
    elif 'march' in filename_lower or 'mar' in filename_lower:
        session = 'March'
    elif 'october' in filename_lower or 'oct' in filename_lower:
        session = 'October'
    elif 'april' in filename_lower or 'apr' in filename_lower:
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
        return False

def main():
    print("=" * 80)
    print("从 KSL 仓库下载 ATP 过去试卷")
    print("=" * 80)
    print()
    
    # Scan multiple handle ranges
    handle_ranges = [
        (300, 400),  # Based on the example handle 359
        (200, 300),
        (100, 200),
        (400, 500),
    ]
    
    all_papers = []
    
    for start, end in handle_ranges:
        print(f"扫描句柄范围: {start}-{end}")
        
        for handle_num in range(start, end):
            handle_url = f"{BASE_URL}/handle/ksl/{handle_num}"
            soup = get_soup(handle_url)
            
            if soup:
                # Find bitstream links
                bitstream_links = find_all_bitstream_links(soup)
                
                for paper in bitstream_links:
                    subject, year, session = classify_paper(paper['filename'])
                    
                    if subject and year:
                        all_papers.append({
                            'subject': subject,
                            'year': year,
                            'session': session,
                            'url': paper['url'],
                            'filename': paper['filename']
                        })
            
            # Rate limiting
            time.sleep(0.5)
        
        print(f"  找到 {len(all_papers)} 个试卷")
        print()
    
    print(f"总共找到 {len(all_papers)} 个试卷")
    print()
    
    # Download papers
    downloaded = 0
    skipped = 0
    failed = 0
    
    for i, paper in enumerate(all_papers, 1):
        print(f"[{i}/{len(all_papers)}] {paper['filename'][:70]}...")
        
        # Determine destination
        subject_name = f"{paper['subject']} - {SUBJECT_MAPPINGS[paper['subject']]}"
        dest_dir = OUTPUT_DIR / subject_name / "Past Papers"
        
        # Create filename
        session_str = f"_{paper['session']}" if paper['session'] else ""
        filename = f"{paper['year']}{session_str}_{paper['subject']}.pdf"
        dest_path = dest_dir / filename
        
        # Check if already exists
        if dest_path.exists():
            print(f"  ⊘ 已存在")
            skipped += 1
            continue
        
        # Download
        if download_file(paper['url'], dest_path):
            print(f"  ✓ 下载成功")
            downloaded += 1
        else:
            print(f"  ✗ 下载失败")
            failed += 1
        
        time.sleep(1)
    
    print()
    print("=" * 80)
    print(f"下载摘要")
    print("=" * 80)
    print(f"已下载: {downloaded}")
    print(f"已跳过: {skipped}")
    print(f"失败: {failed}")
    print("=" * 80)

if __name__ == "__main__":
    main()
