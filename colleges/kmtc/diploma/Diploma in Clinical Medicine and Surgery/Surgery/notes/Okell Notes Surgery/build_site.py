import os
import re
import shutil
import zipfile
import html

# Configuration
SOURCE_FILE = 'okell-notes-surgery_ocr.mmd'
OUTPUT_DIR = 'okell_surgery_site'
TOPICS_DIR = os.path.join(OUTPUT_DIR, 'topics')
ASSETS_DIR = os.path.join(OUTPUT_DIR, 'assets', 'images')
STYLES_DIR = os.path.join(OUTPUT_DIR, 'styles')
JS_DIR = os.path.join(OUTPUT_DIR, 'js')

# CSS Content (Minified for script brevity, but expands to full style)
CSS_CONTENT = """
/* Okell Surgery Notes - Main Stylesheet */
* { margin: 0; padding: 0; box-sizing: border-box; }
:root { --primary-color: #2c3e50; --secondary-color: #34495e; --accent-color: #3498db; --light-bg: #ecf0f1; --white: #ffffff; --text-dark: #2c3e50; --border-color: #bdc3c7; --spacing-md: 1rem; --spacing-lg: 1.5rem; --border-radius: 6px; }
body { font-family: 'Segoe UI', Tahoma, sans-serif; line-height: 1.6; color: var(--text-dark); background-color: var(--light-bg); }
.container { max-width: 1200px; margin: 0 auto; padding: 0 var(--spacing-md); }
.document-section { background: var(--white); padding: 2rem; margin: 2rem 0; border-radius: var(--border-radius); box-shadow: 0 4px 6px rgba(0,0,0,0.1); min-height: 80vh; }
h1 { color: var(--primary-color); border-bottom: 3px solid var(--accent-color); padding-bottom: 0.5rem; margin-bottom: 1.5rem; }
h2 { color: var(--secondary-color); border-bottom: 1px solid var(--border-color); margin-top: 2rem; margin-bottom: 1rem; }
h3 { color: var(--primary-color); margin-top: 1.5rem; }
p { margin-bottom: 1rem; text-align: justify; }
ul, ol { margin-bottom: 1rem; padding-left: 2rem; }
.enhanced-list li { margin-bottom: 0.5rem; }
table { width: 100%; border-collapse: collapse; margin-bottom: 1rem; }
th, td { padding: 0.5rem; border-bottom: 1px solid var(--border-color); text-align: left; }
th { background: var(--primary-color); color: white; }
.content-card { background: #fdfdfd; border: 1px solid #e9ecef; border-radius: 6px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
.document-nav { background: var(--primary-color); padding: 1rem; border-radius: 6px; margin: 1.5rem 0; color: white; }
.nav-links { display: flex; justify-content: space-between; align-items: center; }
.nav-button { color: white; text-decoration: none; padding: 0.5rem 1rem; background: rgba(255,255,255,0.1); border-radius: 4px; transition: background 0.3s; }
.nav-button:hover { background: rgba(255,255,255,0.2); }
.nav-button.disabled { opacity: 0.5; pointer-events: none; }
img { max-width: 100%; height: auto; display: block; margin: 1rem auto; border-radius: 6px; }
.toc-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1rem; margin-top: 2rem; }
.toc-card { background: white; padding: 1rem; border: 1px solid var(--border-color); border-radius: 6px; text-decoration: none; color: var(--text-dark); display: block; transition: transform 0.2s; }
.toc-card:hover { transform: translateY(-3px); border-color: var(--accent-color); box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
.toc-number { color: var(--accent-color); font-weight: bold; font-size: 0.8em; text-transform: uppercase; display: block; margin-bottom: 0.25rem; }
.toc-title { font-weight: 600; font-size: 1.1em; }
"""

JS_CONTENT = """
document.addEventListener('DOMContentLoaded', function() {
    const disabledButtons = document.querySelectorAll('.nav-button.disabled');
    disabledButtons.forEach(button => {
        button.addEventListener('click', e => e.preventDefault());
    });
});
"""

HTML_TEMPLATE = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} - Okell Surgery Notes</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../styles/main.css">
    <script>
    MathJax = {{
        tex: {{ inlineMath: [['$', '$'], ['\\\\(', '\\\\)']], displayMath: [['$$', '$$'], ['\\\\[', '\\\\]']] }},
        svg: {{ fontCache: 'global' }}
    }};
    </script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
</head>
<body>
    <div class="container">
        <article class="document-section" role="main">
            <nav class="document-nav">
                <div class="nav-links">
                    <a href="../index.html" class="nav-button">Table of Contents</a>
                    <a href="{prev_link}" class="nav-button {prev_disabled}">Previous</a>
                    <span>Topic {current_index} of {total_count}</span>
                    <a href="{next_link}" class="nav-button {next_disabled}">Next</a>
                </div>
            </nav>
            <header class="section-header">
                <h1 class="section-title">{title}</h1>
            </header>
            <main class="section-content">
                {content}
            </main>
            <nav class="document-nav">
                <div class="nav-links">
                    <a href="../index.html" class="nav-button">Table of Contents</a>
                    <a href="{prev_link}" class="nav-button {prev_disabled}">Previous</a>
                    <a href="{next_link}" class="nav-button {next_disabled}">Next</a>
                </div>
            </nav>
        </article>
    </div>
    <script src="../js/navigation.js"></script>
</body>
</html>
"""

def clean_mmd_content(text):
    # Basic cleanup of MMD artifacts
    text = re.sub(r'\\begin{figure}.*?\\end{figure}', '', text, flags=re.DOTALL) # Remove latex figure blocks
    text = re.sub(r'\\includegraphics.*?\}', '', text) 
    text = re.sub(r'\\captionsetup.*?\}', '', text)
    text = re.sub(r'\\caption\{.*?\}', '', text)
    
    # Convert Images
    # Pattern: ![](url)
    text = re.sub(r'!\[\]\((.*?)\)', r'<img src="\1" alt="Image">', text)
    
    # Convert Sections
    # Assuming \section*{Title} or similar lines are handled by the splitter, 
    # but cleaning up internal ones:
    text = re.sub(r'\\section\*?\{(.*?)\}', r'<h2>\1</h2>', text)
    
    # Convert lists
    lines = text.split('\n')
    html_lines = []
    in_list = False
    
    for line in lines:
        line = line.strip()
        if not line:
            if in_list:
                html_lines.append('</ul>')
                in_list = False
            continue
            
        # Check for list items
        if line.startswith('-') or line.startswith('* ') or re.match(r'^\d+\.', line):
            if not in_list:
                html_lines.append('<ul class="enhanced-list">')
                in_list = True
            # Remove marker
            content = re.sub(r'^[-*]\s?|^\d+\.\s?', '', line)
            html_lines.append(f'<li>{content}</li>')
        else:
            if in_list:
                html_lines.append('</ul>')
                in_list = False
            
            # Simple paragraph detection
            if line.startswith('<h') or line.startswith('<img'):
                html_lines.append(line)
            else:
                html_lines.append(f'<p>{line}</p>')
                
    if in_list:
        html_lines.append('</ul>')
        
    return '\n'.join(html_lines)

def generate_filename(index, title):
    safe_title = re.sub(r'[^a-zA-Z0-9]+', '-', title.lower()).strip('-')
    return f"{index:02d}-{safe_title}.html"

def main():
    # 1. Create Structure
    for d in [OUTPUT_DIR, TOPICS_DIR, ASSETS_DIR, STYLES_DIR, JS_DIR]:
        os.makedirs(d, exist_ok=True)

    # 2. Write Assets
    with open(os.path.join(STYLES_DIR, 'main.css'), 'w') as f:
        f.write(CSS_CONTENT)
    with open(os.path.join(JS_DIR, 'navigation.js'), 'w') as f:
        f.write(JS_CONTENT)

    # 3. Read Source
    try:
        with open(SOURCE_FILE, 'r', encoding='utf-8') as f:
            full_text = f.read()
    except FileNotFoundError:
        print(f"Error: {SOURCE_FILE} not found. Please save the MMD content to this file.")
        return

    # 4. Split Content
    # Splitting by \section*{...} which seems to be the main delimiter in the provided MMD
    # Note: The first chunk might be the table of contents or intro
    chunks = re.split(r'\\section\*?\{(.*?)\}', full_text)
    
    topics = []
    
    # re.split returns [preamble, title1, content1, title2, content2...]
    # We skip preamble (chunks[0])
    for i in range(1, len(chunks), 2):
        title = chunks[i].strip()
        content_raw = chunks[i+1]
        
        # Skip if title is empty or just metadata
        if not title or len(content_raw) < 50: 
            continue
            
        topics.append({
            'title': title,
            'content': clean_mmd_content(content_raw)
        })

    print(f"Found {len(topics)} topics.")

    # 5. Generate Topic Files
    toc_html = ""
    
    for i, topic in enumerate(topics):
        filename = generate_filename(i + 1, topic['title'])
        topic['filename'] = filename
        
        # Navigation logic
        prev_link = topics[i-1]['filename'] if i > 0 else "#"
        prev_disabled = "disabled" if i == 0 else ""
        
        next_link = topics[i+1]['filename'] if i < len(topics) - 1 else "#"
        next_disabled = "disabled" if i == len(topics) - 1 else ""
        
        # Build HTML
        html_content = HTML_TEMPLATE.format(
            title=topic['title'],
            content=topic['content'],
            prev_link=prev_link,
            prev_disabled=prev_disabled,
            next_link=next_link,
            next_disabled=next_disabled,
            current_index=i+1,
            total_count=len(topics)
        )
        
        with open(os.path.join(TOPICS_DIR, filename), 'w', encoding='utf-8') as f:
            f.write(html_content)
            
        # Add to TOC
        toc_html += f"""
        <a href="topics/{filename}" class="toc-card">
            <span class="toc-number">Topic {i+1}</span>
            <span class="toc-title">{topic['title']}</span>
        </a>
        """

    # 6. Generate Index
    index_html = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Okell Surgery Notes</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles/main.css">
</head>
<body>
    <div class="container">
        <article class="document-section">
            <header class="section-header">
                <h1 class="section-title">Okell Notes Surgery</h1>
                <p>Clinical Medicine (Kenya Medical Training College)</p>
            </header>
            <main class="section-content">
                <div class="toc-grid">
                    {toc_html}
                </div>
            </main>
        </article>
    </div>
</body>
</html>
"""
    with open(os.path.join(OUTPUT_DIR, 'index.html'), 'w', encoding='utf-8') as f:
        f.write(index_html)

    # 7. Zip it up
    zip_filename = 'okell-surgery-website.zip'
    with zipfile.ZipFile(zip_filename, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(OUTPUT_DIR):
            for file in files:
                file_path = os.path.join(root, file)
                arcname = os.path.relpath(file_path, OUTPUT_DIR)
                zipf.write(file_path, arcname)

    print(f"Success! Website generated at '{OUTPUT_DIR}' and zipped to '{zip_filename}'.")

if __name__ == "__main__":
    main()