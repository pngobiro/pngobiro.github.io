import os
import re

def mmd_to_html(mmd_file):
    \"\"\"Converts a Markdown Math (MMD) file to HTML, embedding the content into a predefined HTML template.
    
    Args:
        mmd_file (str): The path to the MMD file.
    
    Returns:
        str: The generated HTML content.
    \"\"\"
    try:
        with open(mmd_file, 'r', encoding='utf-8') as f:
            mmd_content = f.read()
    except FileNotFoundError:
        return f"<p>Error: MMD file not found: {mmd_file}</p>"
    except Exception as e:
        return f"<p>Error reading MMD file: {e}</p>"

    # Basic HTML template
    html_template = f\"\"\"<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>[SUBJECT] - [MONTH] [YEAR] | KNEC Past Papers</title>
        <link rel="stylesheet" href="styles.css">
        <script src="js/sidebar-navigation.js" defer></script>
        <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
        <script>
            MathJax = {{
                tex: {{
                    inlineMath: [['$', '$'], ['\\\\(', '\\\\)']]
                }}
            }};
        </script>
        <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
    </head>
    <body>
        <!-- BEGIN HEADER -->
        <header>
            <div class="container">
                <h1>[SUBJECT]</h1>
                <h2>[MONTH] [YEAR]</h2>
                <div class="exam-details">
                    <p>Paper Code: [PAPER CODE]</p>
                    <p>Duration: [DURATION]</p>
                    <p>Module: [MODULE]</p>
                </div>
            </div>
        </header>
        <!-- END HEADER -->

        <div class="container main-content">
            <!-- BEGIN SIDEBAR -->
            <div class="sidebar">
                <div class="sidebar-header">
                    <h3>Past Papers</h3>
                </div>
                <nav class="sidebar-nav">
                    <ul>
                        <li><a href="2023j.html">July 2023</a></li>
                        <li><a href="2022n.html">November 2022</a></li>
                        <li><a href="2022j.html">July 2022</a></li>
                        <li><a href="index.html">Home</a></li>
                    </ul>
                </nav>
                 <!-- Dark Mode Toggle - Recommended placement in sidebar for desktop/consistent mobile toggle location -->
                <div class="dark-mode-container">
                    <label class="dark-mode-toggle" for="dark-mode-toggle-sidebar">
                        <input type="checkbox" id="dark-mode-toggle-sidebar">
                        <span class="dark-mode-slider"></span>
                    </label>
                    <span class="dark-mode-label">Dark Mode</span>
                </div>
            </div>
            <!-- END SIDEBAR -->

            <!-- BEGIN MAIN CONTENT -->
            <main>
                <div class="paper-navigation top">
                    <a href="previous-paper.html" class="btn">Previous Paper</a>
                    <a href="index.html" class="btn">Home</a>
                    <a href="next-paper.html" class="btn">Next Paper</a>
                </div>

                <!-- BEGIN INSTRUCTIONS -->
                <section class="paper-intro">
                    <h3>Instructions to Candidates</h3>
                    <ul>
                        <li>This paper consists of SIX questions.</li>
                        <li>Answer any FOUR questions.</li>
                        <li>All questions carry equal marks.</li>
                        <li>Write your answers in the answer booklet provided.</li>
                    </ul>
                </section>
                <!-- END INSTRUCTIONS -->

                <!-- BEGIN QUESTIONS -->
                <section class="paper-content">
                    {mmd_content}
                </section>
                <!-- END QUESTIONS -->

                <div class="paper-navigation bottom">
                    <a href="previous-paper.html" class="btn">Previous Paper</a>
                    <a href="index.html" class="btn">Home</a>
                    <a href="next-paper.html" class="btn">Next Paper</a>
                </div>
            </main>
            <!-- END MAIN CONTENT -->
        </div>

        <!-- BEGIN FOOTER -->
        <footer>
            <div class="container">
                <p>&copy; 2025 [SUBJECT] Past Papers Collection | Kenya National Examinations Council</p>
            </div>
        </footer>
        <!-- END FOOTER -->

        <!-- Back to Top Button - Recommended placement in body for fixed positioning -->
        <button id="back-to-top" title="Back to Top">↑</button>
         <!-- Dark Mode Toggle for fixed position - Can be synced with sidebar toggle -->
         <div class="dark-mode-container">
            <label class="dark-mode-toggle" for="dark-mode-toggle">
                <input type="checkbox" id="dark-mode-toggle">
                <span class="dark-mode-slider"></span>
            </label>
            <span class="dark-mode-label">Dark Mode</span>
        </div>

    </body>
    </html>
    \"\"\"

    html_content = html_template.format(mmd_content=mmd_content)
    return html_content

if __name__ == "__main__":
    # Get all .mmd files in the current directory
    mmd_files = [f for f in os.listdir('.') if f.endswith('_ocr.mmd')]
    
    for mmd_file in mmd_files:
        # Generate the corresponding HTML file name
        html_file = mmd_file.replace('_ocr.mmd', '.html')
        
        # Convert the MMD file to HTML
        html_content = mmd_to_html(mmd_file)
        
        # Write the HTML content to the file
        try:
            with open(html_file, 'w', encoding='utf-8') as f:
                f.write(html_content)
            print(f"Successfully converted {mmd_file} to {html_file}")
        except Exception as e:
            print(f"Error writing to {html_file}: {e}")