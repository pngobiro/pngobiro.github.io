import re
from bs4 import BeautifulSoup
import sys
import os

def fix_image_suffixes(html_file):
    # Get the absolute path to the assets directory
    html_dir = os.path.dirname(os.path.abspath(html_file))
    assets_dir = os.path.join(os.path.dirname(html_dir), 'assets', 'images')

    # Read HTML content
    with open(html_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Parse HTML
    soup = BeautifulSoup(content, 'html.parser')

    # Find all img tags
    images = soup.find_all('img')
    modified = False

    for img in images:
        src = img.get('src', '')
        
        # Check if this is an image from our assets directory
        if '../assets/images/' in src:
            # Extract current filename
            current_filename = src.split('/')[-1]
            
            # Check if filename matches our pattern but doesn't have -1 suffix
            pattern = r'(\d{4}_\d{2}_\d{2}_[a-z0-9]+g)-(\d+)(\.jpg)'
            match = re.match(pattern, current_filename)
            
            if match and not current_filename.endswith('-1.jpg'):
                # Create new filename with -1 suffix
                base = match.group(1)
                page_num = match.group(2)
                ext = match.group(3)
                new_filename = f"{base}-{page_num}-1{ext}"
                
                # Check if the new file exists
                new_filepath = os.path.join(assets_dir, new_filename)
                if os.path.exists(new_filepath):
                    # Update image src only if the new file exists
                    new_src = src.replace(current_filename, new_filename)
                    img['src'] = new_src
                    modified = True
                    print(f"  Updated: {current_filename} -> {new_filename}")
                else:
                    print(f"  Skipped: {current_filename} (new file {new_filename} doesn't exist)")

    # Save changes if any modifications were made
    if modified:
        with open(html_file, 'w', encoding='utf-8') as f:
            f.write(str(soup))
        print(f"Saved changes to {html_file}")
    else:
        print("No changes needed")

def main():
    # Check if HTML file is provided
    if len(sys.argv) != 2:
        print("Usage: python fix_image_suffixes.py <html_file>")
        sys.exit(1)

    html_file = sys.argv[1]
    print(f"\nProcessing {html_file}")
    fix_image_suffixes(html_file)

if __name__ == "__main__":
    main()
