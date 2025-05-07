import os
import re
from pathlib import Path

def find_html_files(directory):
    """Find all HTML files in the topics directory"""
    html_files = []
    topics_dir = Path(directory) / "topics"
    for file in topics_dir.iterdir():
        if file.suffix == '.html':
            html_files.append(file)
    return html_files

def extract_image_paths(html_content):
    """Extract image paths from HTML content"""
    # Pattern to match img src attributes
    pattern = r'<img[^>]*src=["\']([^"\']*)["\'][^>]*>'
    matches = re.findall(pattern, html_content)
    return matches

def verify_images(html_files, assets_dir):
    """Verify that all images referenced in HTML exist in assets directory"""
    missing_images = []
    
    for html_file in html_files:
        with open(html_file, 'r', encoding='utf-8') as f:
            content = f.read()
            
        image_paths = extract_image_paths(content)
        
        for path in image_paths:
            # Convert relative path to absolute path
            abs_path = Path(html_file).parent.parent / path
            if not abs_path.exists():
                missing_images.append({
                    'html_file': str(html_file),
                    'image_path': path
                })
    
    return missing_images

def main():
    base_dir = Path(os.path.dirname(os.path.abspath(__file__)))
    html_files = find_html_files(base_dir)
    assets_dir = base_dir / "assets" / "images"
    
    print(f"Checking {len(html_files)} HTML files...")
    missing_images = verify_images(html_files, assets_dir)
    
    if missing_images:
        print("\nMissing Images:")
        for item in missing_images:
            print(f"HTML File: {item['html_file']}")
            print(f"Missing Image: {item['image_path']}")
            print("-" * 50)
    else:
        print("\nAll images are properly referenced!")

if __name__ == "__main__":
    main()
