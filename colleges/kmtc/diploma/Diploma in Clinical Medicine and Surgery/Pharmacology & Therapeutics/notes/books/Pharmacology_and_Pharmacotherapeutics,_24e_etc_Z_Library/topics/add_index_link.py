import os
import re

def add_index_link():
    topics_dir = "/home/ngobiro/projects/pngobiro.github.io/colleges/kmtc/diploma/Diploma in Clinical Medicine and Surgery/Pharmacology & Therapeutics/notes/books/Pharmacology_and_Pharmacotherapeutics,_24e_etc_Z_Library/topics"
    
    # HTML for the index button
    index_button_html = """
                        <a href="../index.html" class="nav-button nav-button--large">
                            <div class="nav-label">Go to</div>
                            <div class="nav-title">Index</div>
                        </a>"""

    for filename in os.listdir(topics_dir):
        if filename.startswith("section-") and filename.endswith(".html"):
            file_path = os.path.join(topics_dir, filename)
            
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Check if index link already exists in the nav container
            # We look for href="../index.html" specifically within the nav-container context if possible,
            # but a simple check is usually sufficient for this specific task as we know the structure.
            # However, let's be a bit more precise to avoid false positives if it's elsewhere.
            
            if 'href="../index.html"' in content:
                print(f"Skipping {filename}: Index link already present.")
                continue
            
            # Find the document-progress div to insert after it
            # The structure is:
            # <div class="nav-container">
            #    <a ... previous ...> ... </a>
            #    <div class="document-progress"> ... </div>
            #    <a ... next ...> ... </a>
            # </div>
            
            # We want to insert it between progress and next, or if next doesn't exist (last chapter), 
            # well, if next doesn't exist, usually the "Finish" button is the index link, which we already checked for.
            
            # Actually, looking at section-02.html:
            # <div class="document-progress">...</div>
            # <a href="section-03.html" ...>...</a>
            
            # We want to insert the index button. A good place might be in the middle or just before the next button.
            # But wait, the user request is "add link to index in nav".
            # The plan said: "insert the following HTML after the .document-progress div".
            
            # Let's find the closing tag of document-progress div
            # It's </div> followed by whitespace and then usually the next button or closing nav-container.
            
            # Regex to find the document-progress block is tricky without a parser.
            # But we can look for the string `class="document-progress"` and then find the matching closing div.
            # Since the indentation is consistent, we can rely on that or just insert before the Next button.
            
            # Let's try to insert it before the Next button if it exists, or append to nav-container if not.
            # But wait, section-16 has "Back to Index" as the Next button.
            # Section-01 has "Back to Table of Contents" as the Previous button.
            
            # So for intermediate files (02-15), they have Previous (section-N-1) and Next (section-N+1).
            # We want to add an Index button.
            # Let's insert it after the document-progress div.
            
            pattern = r'(<div class="document-progress">[\s\S]*?</div>)'
            match = re.search(pattern, content)
            
            if match:
                # Insert after the document-progress div
                insertion_point = match.end()
                new_content = content[:insertion_point] + index_button_html + content[insertion_point:]
                
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated {filename}")
            else:
                print(f"Warning: Could not find document-progress in {filename}")

if __name__ == "__main__":
    add_index_link()
