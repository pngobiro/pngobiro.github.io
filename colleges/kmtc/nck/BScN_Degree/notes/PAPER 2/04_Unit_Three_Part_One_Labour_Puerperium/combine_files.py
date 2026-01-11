#!/usr/bin/env python3
"""
File Combination Script
Combines multiple files into a single output file with clear separators.
"""

import os
from pathlib import Path


def combine_files(output_file="combined_output.txt"):
    """
    Combine multiple files into a single output file.
    
    Files to combine:
    - styles/main.css
    - content_cleaned.txt
    - exam-template.html
    - index-template-v1.1.html
    - pdf-to-html-conversion-prompt-v9.6.md
    - quiz-hub-template.html
    - topic-template-v1.2.html
    """
    
    # Define the base directory
    base_dir = Path(__file__).parent
    
    # Define files to combine with their display names
    files_to_combine = [
        ("styles/main.css", "main.css"),
        ("content_cleaned.txt", "content_cleaned.txt"),
        ("exam-template.html", "exam-template.html"),
        ("index-template-v1.1.html", "index-template-v1.1.html"),
        ("pdf-to-html-conversion-prompt-v9.6.md", "pdf-to-html-conversion-prompt-v9.6.md"),
        ("quiz-hub-template.html", "quiz-hub-template.html"),
        ("topic-template-v1.2.html", "topic-template-v1.2.html"),
    ]
    
    # Create separator line
    separator = "=" * 80
    file_separator = "=" * 80
    
    # Open output file
    output_path = base_dir / output_file
    
    print(f"Combining files into: {output_path}")
    print(f"Base directory: {base_dir}\n")
    
    with open(output_path, 'w', encoding='utf-8') as out_file:
        # Write header
        out_file.write(f"{separator}\n")
        out_file.write("COMBINED FILE OUTPUT\n")
        out_file.write(f"{separator}\n\n")
        
        # Process each file
        for file_path, display_name in files_to_combine:
            full_path = base_dir / file_path
            
            # Check if file exists
            if not full_path.exists():
                print(f"⚠️  File not found: {file_path}")
                out_file.write(f"{file_separator}\n")
                out_file.write(f"FILE: {display_name}\n")
                out_file.write("STATUS: NOT FOUND\n")
                out_file.write(f"{file_separator}\n\n")
                continue
            
            # Read file content
            try:
                with open(full_path, 'r', encoding='utf-8') as in_file:
                    content = in_file.read()
                
                # Write file separator and name
                out_file.write(f"{file_separator}\n")
                out_file.write(f"FILE: {display_name}\n")
                out_file.write(f"PATH: {file_path}\n")
                out_file.write(f"{file_separator}\n\n")
                
                # Write file content
                out_file.write(content)
                out_file.write("\n\n")
                
                print(f"✓ Combined: {display_name}")
                
            except Exception as e:
                print(f"✗ Error reading {file_path}: {e}")
                out_file.write(f"{file_separator}\n")
                out_file.write(f"FILE: {display_name}\n")
                out_file.write(f"ERROR: {str(e)}\n")
                out_file.write(f"{file_separator}\n\n")
        
        # Write footer
        out_file.write(f"{separator}\n")
        out_file.write("END OF COMBINED OUTPUT\n")
        out_file.write(f"{separator}\n")
    
    print(f"\n✓ Successfully created combined file: {output_path}")
    print(f"  Total files processed: {len(files_to_combine)}")
    print(f"  File size: {output_path.stat().st_size:,} bytes")


if __name__ == "__main__":
    import sys
    
    # Allow custom output filename via command line
    output_filename = sys.argv[1] if len(sys.argv) > 1 else "combined_output.txt"
    
    combine_files(output_filename)
