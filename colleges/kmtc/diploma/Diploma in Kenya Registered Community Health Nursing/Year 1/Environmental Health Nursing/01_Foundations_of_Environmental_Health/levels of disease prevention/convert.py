

import re

def convert_mmd_to_html(mmd_content):
    html_content = ""
    lines = mmd_content.split('\n')
    in_table = False
    table_content = ""

    for line in lines:
        # Headings
        line = re.sub(r'\\section\*{(.*)}', r'<h2 class="section-heading"><span class="heading-text">\1</span></h2>', line)

        # Images
        line = re.sub(r'!\[\]\((.*g-([0-9]+))\.jpg.*\)', r'<img src="../assets/images/\1-\2.jpg" alt="Image" class="content-image">', line)

        # Bold
        line = re.sub(r'\\textbf{(.*)}', r'<strong>\1</strong>', line)

        # Lists
        if re.match(r'^\d+\)', line):
            line = re.sub(r'^\d+\)(.*)', r'<li>\1</li>', line)
            if not html_content.endswith('<ol>\n'):
                html_content += "<ol>\n"
            html_content += line + "\n"
            if not lines[lines.index(line) + 1].strip().startswith('<li>'):
                 html_content += "</ol>\n"
            continue

        if re.match(r'^[a-z]\.', line):
            line = re.sub(r'^[a-z]\.(.*)', r'<li>\1</li>', line)
            if not html_content.endswith('<ul>\n'):
                html_content += "<ul>\n"
            html_content += line + "\n"
            if not lines[lines.index(line) + 1].strip().startswith('<li>'):
                 html_content += "</ul>\n"
            continue

        # Table
        if line.strip() == '\\begin{tabular}{|l|l|l|l|}':
            in_table = True
            table_content += "<div class=\"table-container\"><table class=\"content-table\">\n"
            continue
        if line.strip() == '\\end{tabular}':
            in_table = False
            table_content += "</table></div>\n"
            html_content += table_content
            table_content = ""
            continue

        if in_table:
            if line.strip() == '\\hline':
                continue
            parts = line.split('&')
            table_content += "<tr>"
            for part in parts:
                part = part.strip()
                part = part.replace('\\\\', '')
                if "begin{tabular}" in part:
                    part = part.replace('\\begin{tabular}{l}','<ul>').replace('\\end{tabular}','</ul>').replace('\\\\','<li>')
                table_content += f'<td>{part}</td>'
            table_content += "</tr>\n"
            continue

        # Paragraphs
        if line.strip():
            html_content += f'<p>{line}</p>\n'

    return html_content

mmd_file_path = "/home/ngobiro/projects/pngobiro.github.io/colleges/kmtc/diploma/Diploma in Kenya Registered Community Health Nursing/Year 1/Environmental Health Nursing/01_Foundations_of_Environmental_Health/levels of disease prevention/levels of disease prevention.mmd"
html_file_path = "/home/ngobiro/projects/pngobiro.github.io/colleges/kmtc/diploma/Diploma in Kenya Registered Community Health Nursing/Year 1/Environmental Health Nursing/01_Foundations_of_Environmental_Health/levels of disease prevention/html_output/topics/levels-of-disease-prevention.html"

with open(mmd_file_path, 'r') as f:
    mmd_content = f.read()

html_body = convert_mmd_to_html(mmd_content)

html_template = f'''
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Levels of Disease Prevention</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../styles/main.css">
    <script>
    MathJax = {{
        tex: {{
            inlineMath: [['$', '$'], ['\\(', '\\)']],
            displayMath: [['$$', '$$'], ['\\[', '\\]']],
            processEscapes: true,
            processEnvironments: true,
            tags: 'ams'
        }},
        svg: {{ fontCache: 'global' }},
        options: {{
            skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre']
        }}
    }};
    </script>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
</head>
<body>
    <div class="container">
        <article class="document-section" role="main">
            <nav class="document-nav" role="navigation" aria-label="Document Sections">
                <div class="nav-links">
                    <a href="../index.html" class="nav-button">
                        <span class="nav-icon"></span>
                        <span class="nav-text">Table of Contents</span>
                    </a>
                    <a href="#" class="nav-button disabled">
                        <span class="nav-icon">←</span>
                        <span class="nav-text">Previous Section</span>
                    </a>
                    <div class="document-progress">
                         <div class="progress-bar" aria-hidden="true">
                            <div class="progress-fill" style="width: 100%;"></div>
                        </div>
                       <span class="progress-text">1 of 1</span>
                    </div>
                    <a href="#" class="nav-button disabled">
                        <span class="nav-text">Next Section</span>
                        <span class="nav-icon">→</span>
                    </a>
                </div>
            </nav>

            <header class="section-header">
                <h1 class="section-title">Levels of Disease Prevention</h1>
                <div class="title-underline"></div>
            </header>

            <main class="section-content">
                {html_body}
            </main>

            <nav class="document-nav" role="navigation" aria-label="Document Sections">
                <div class="nav-links">
                    <a href="../index.html" class="nav-button">
                        <span class="nav-icon"></span>
                        <span class="nav-text">Table of Contents</span>
                    </a>
                    <a href="#" class="nav-button disabled">
                        <span class="nav-icon">←</span>
                        <span class="nav-text">Previous Section</span>
                    </a>
                    <div class="document-progress">
                         <div class="progress-bar" aria-hidden="true">
                            <div class="progress-fill" style="width: 100%;"></div>
                        </div>
                       <span class="progress-text">1 of 1</span>
                    </div>
                    <a href="#" class="nav-button disabled">
                        <span class="nav-text">Next Section</span>
                        <span class="nav-icon">→</span>
                    </a>
                </div>
            </nav>
        </article>
    </div>
    <script src="../js/navigation.js"></script>
</body>
</html>
'''

with open(html_file_path, 'w') as f:
    f.write(html_template)

