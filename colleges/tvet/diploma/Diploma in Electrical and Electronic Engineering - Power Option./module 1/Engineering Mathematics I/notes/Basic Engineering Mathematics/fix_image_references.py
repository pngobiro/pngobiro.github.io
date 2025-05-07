import os
import re
from pathlib import Path

def find_matching_image(base_name):
    """Find the matching image file with the correct prefix"""
    prefix = "2025_05_06_6087c43bc92deffd8bd0g-"
    # Try different variations (with and without -1, -2 suffixes)
    variations = [
        f"{prefix}{base_name}",
        f"{prefix}{base_name}-1",
        f"{prefix}{base_name}-2",
        f"{prefix}{base_name}-3",
        f"{prefix}{base_name}-4"
    ]
    
    for variation in variations:
        if (assets_dir / f"{variation}.jpg").exists():
            return f"{variation}.jpg"
    return None

def fix_html_file(html_file):
    """Fix image references in a single HTML file"""
    with open(html_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Pattern to match img src attributes
    pattern = r'(<img[^>]*src=["\'])([^"\']*)(["\'][^>]*>)'
    matches = re.finditer(pattern, content)
    
    modified = False
    
    for match in matches:
        full_tag = match.group(0)
        src_attr = match.group(1)
        old_path = match.group(2)
        closing = match.group(3)
        
        # Skip if it already has the correct prefix
        if "2025_05_06_6087c43bc92deffd8bd0g" in old_path:
            continue
        
        # Extract the base name (like 208, 209, etc.)
        base_name = old_path.split('/')[-1].split('.')[0]
        
        # Find the correct image name
        new_image_name = find_matching_image(base_name)
        if new_image_name:
            # Construct the new path
            new_path = f"../assets/images/{new_image_name}"
            # Replace in the content
            new_tag = f"{src_attr}{new_path}{closing}"
            content = content.replace(full_tag, new_tag)
            modified = True
    
    if modified:
        with open(html_file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed image references in {html_file}")
    else:
        print(f"No changes needed for {html_file}")

def main():
    base_dir = Path(os.path.dirname(os.path.abspath(__file__)))
    global assets_dir
    assets_dir = base_dir / "assets" / "images"
    
    print(f"Checking HTML files in {base_dir / 'topics'}...")
    
    # Process each HTML file
    topics_dir = base_dir / "topics"
    for html_file in topics_dir.glob("*.html"):
        fix_html_file(html_file)

if __name__ == "__main__":
    main()
