import os
import re
from bs4 import BeautifulSoup
from difflib import SequenceMatcher, get_close_matches

# Path to the .mmd source file
MMD_FILE = 'BASIC_OPHTHALMOLOGY.mmd'
# Directory containing HTML files
topics_dir = 'topics'

def fuzzy_in_list(item, candidates, cutoff=0.8):
    """Return True if item is a close match to any candidate."""
    matches = get_close_matches(item, candidates, n=1, cutoff=cutoff)
    return bool(matches)

def get_paragraphs_from_html(soup):
    return [p.get_text(strip=True) for p in soup.find_all('p') if p.get_text(strip=True)]


def get_section_content_from_mmd(mmd_content, section_title):
    """Extract paragraphs from the .mmd file for a given section title (between this and the next section header)."""
    # Find all section headers and their positions
    section_pattern = re.compile(r'^(#+)\s*(.+)', re.MULTILINE)
    matches = list(section_pattern.finditer(mmd_content))
    # Find the section that best matches the title
    best_idx = None
    best_ratio = 0
    for i, m in enumerate(matches):
        ratio = SequenceMatcher(None, m.group(2).strip().lower(), section_title.strip().lower()).ratio()
        if ratio > best_ratio:
            best_ratio = ratio
            best_idx = i
    if best_idx is None or best_ratio < 0.6:
        return []  # No good match found
    start = matches[best_idx].end()
    end = matches[best_idx + 1].start() if best_idx + 1 < len(matches) else len(mmd_content)
    section_text = mmd_content[start:end]
    # Split by double newlines, filter out headings and images
    paras = [p.strip() for p in section_text.split('\n\n') if p.strip() and not p.strip().startswith('#') and not p.strip().startswith('![')]
    return paras

# Read the .mmd file
with open(MMD_FILE, 'r', encoding='utf-8') as f:
    mmd_content = f.read()

# Extract all section/subsection headers and image references from .mmd
section_pattern = re.compile(r'^(#+)\s*(.+)', re.MULTILINE)
image_pattern = re.compile(r'!\[.*?\]\((.*?)\)')

mmd_sections = [m.group(2).strip() for m in section_pattern.finditer(mmd_content)]
mmd_images = set(os.path.basename(img) for img in image_pattern.findall(mmd_content))

# List all HTML files except index.html
html_files = [f for f in os.listdir(topics_dir) if f.endswith('.html') and f != 'index.html']

for html_file in html_files:
    html_path = os.path.join(topics_dir, html_file)
    with open(html_path, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')

    # Extract headings (h1-h4) and image srcs from HTML
    html_headings = [h.get_text(strip=True) for h in soup.find_all(re.compile('^h[1-4]$'))]
    html_images = set(os.path.basename(img['src']) for img in soup.find_all('img') if img.has_attr('src'))
    html_paragraphs = get_paragraphs_from_html(soup)

    # Check for omitted content comments
    omitted_comments = [c for c in soup.find_all(string=lambda text: isinstance(text, type(soup.Comment))) if 'omitted' in c or '...' in c]

    # Fuzzy compare sections
    missing_sections = [s for s in mmd_sections if not fuzzy_in_list(s, html_headings, cutoff=0.8)]
    # Compare images
    missing_images = [img for img in mmd_images if img not in html_images]


    # Find the main heading in the HTML (assume h1 or h2 is the chapter title)
    main_heading = None
    for tag in ['h1', 'h2']:
        h = soup.find(tag)
        if h and h.get_text(strip=True):
            main_heading = h.get_text(strip=True)
            break
    if not main_heading:
        main_heading = html_file.replace('.html', '').replace('-', ' ').title()

    # Extract only the relevant section from the .mmd file
    mmd_section_paragraphs = get_section_content_from_mmd(mmd_content, main_heading)

    # Fuzzy compare paragraphs (report those with no close match in HTML)
    missing_paragraphs = []
    for para in mmd_section_paragraphs:
        if not fuzzy_in_list(para, html_paragraphs, cutoff=0.7):
            missing_paragraphs.append(para)

    print(f'\n==== {html_file} ===')
    if missing_sections:
        print('Missing or unmatched sections:')
        for s in missing_sections:
            print('  -', s)
    else:
        print('No missing sections.')

    if missing_images:
        print('Missing images:')
        for img in missing_images:
            print('  -', img)
    else:
        print('No missing images.')

    if missing_paragraphs:
        print(f'Missing or unmatched paragraphs (showing up to 5):')
        for para in missing_paragraphs[:5]:
            print('  -', para[:120].replace('\n', ' ') + ('...' if len(para) > 120 else ''))
        if len(missing_paragraphs) > 5:
            print(f'  ...and {len(missing_paragraphs)-5} more.')
    else:
        print('No missing paragraphs.')

    if omitted_comments:
        print('Omitted content comments found:')
        for c in omitted_comments:
            print('  -', c.strip())
    else:
        print('No omitted content comments found.')
