#!/usr/bin/env python3
import os
import re
from pathlib import Path

def get_relative_asset_path(file_path, asset_path):
    """Calculates relative path from file_path to asset_path."""
    # file_path is something like: Year 1/Subject/FQE/paper.html
    # asset_path is: assets/css/styles.css
    
    # Depth from root:
    # Year 1 (1) / Subject (2) / FQE (3) / paper.html (file)
    # We need to go up 3 levels: ../../../
    
    parts = list(Path(file_path).parts)
    # remove filename
    depth = len(parts) - 1
    
    prefix = "../" * depth
    return f"{prefix}{asset_path}"

def fix_file(file_path):
    path = Path(file_path)
    if path.name == "index.html":
        return

    print(f"Processing: {path}")
    
    try:
        content = path.read_text(encoding='utf-8')
    except Exception as e:
        print(f"  Error reading file: {e}")
        return

    original_content = content
    
    # Calculate new paths
    css_path = get_relative_asset_path(file_path, "assets/css/styles.css")
    js_path = get_relative_asset_path(file_path, "assets/js/sidebar-navigation.js")
    
    # Regex to find existing CSS links
    # Matches <link rel="stylesheet" href="...">
    # We want to replace whatever is in href with our new path
    # But only if it looks like a local style sheet (not font-awesome or google fonts)
    
    # Strategy: Replace standard incorrect patterns first
    
    # Pattern 1: Old style path "../styles.css"
    content = content.replace('href="../styles.css"', f'href="{css_path}"')
    content = content.replace('href="../../styles.css"', f'href="{css_path}"')
    content = content.replace('href="styles.css"', f'href="{css_path}"') # If in same dir
    
    # Pattern 2: Old JS path
    content = content.replace('src="../../js/sidebar-navigation.js"', f'src="{js_path}"')
    content = content.replace('src="../js/sidebar-navigation.js"', f'src="{js_path}"')
    
    # Also handle the generated structure which uses specific paths
    # The generated structure already uses correct paths for index.html files, 
    # but if we moved files into deep structures, we might need to fix them.
    
    if content != original_content:
        path.write_text(content, encoding='utf-8')
        print(f"  Fixed paths. CSS: {css_path}")
    else:
        print("  No changes needed.")

def main():
    root_dir = Path(".")
    
    # Walk specifically in the subject directories
    target_dirs = [
        "Year 1",
        "DHRIT Diploma in Health Records & Information Technology Curriculum"
    ]
    
    for target in target_dirs:
        base = root_dir / target
        if not base.exists():
            continue
            
        for root, _, files in os.walk(base):
            for file in files:
                if file.endswith(".html"):
                    fix_file(os.path.join(root, file))

if __name__ == "__main__":
    main()
