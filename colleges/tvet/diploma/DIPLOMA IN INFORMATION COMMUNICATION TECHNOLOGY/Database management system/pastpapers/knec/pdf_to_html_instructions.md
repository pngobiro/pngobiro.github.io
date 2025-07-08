# Converting Past Papers from PDF to HTML

This comprehensive guide explains how to convert KNEC past papers from PDF to HTML format, including all necessary components and styling.

## Project Structure

```
pastpapers/
├── js/
│   ├── sidebar-navigation.js    # Handles active page highlighting
│   └── sidebar-include.js       # Loads sidebar component
├── components/
│   └── sidebar.html            # Navigation sidebar structure
├── styles.css                  # Global styles
├── template.html              # Base template for papers
└── [paper-name].html         # Individual past paper files
```

## Core Components

### 1. Base Template (template.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Month] [Year] - Database Management Systems Past Paper</title>
    <link rel="stylesheet" href="styles.css">
    <script src="js/sidebar-navigation.js" defer></script>
    <script src="js/sidebar-include.js" defer></script>
</head>
<body>
    <header>
        <div class="container">
            <h1>Database Management Systems</h1>
            <h2>[Month] [Year] Past Paper</h2>
            <div class="exam-details">
                <p>Paper Code: [CODE]</p>
                <p>Duration: [DURATION]</p>
                <p>Module II</p>
            </div>
        </div>
    </header>
    
    <div class="container main-content">
        <!-- Sidebar will be injected here -->
        <main>
            [CONTENT]
        </main>
    </div>
    
    <footer>
        <div class="container">
            <p>&copy; [YEAR] Database Management Systems Past Papers Collection</p>
        </div>
    </footer>
</body>
</html>
```

### 2. Styling (styles.css)

```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #34495e;
    --text-color: #333;
    --border-color: #ddd;
    --background-color: #f5f6fa;
    --highlight-color: #3498db;
}

body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    background: var(--background-color);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

/* Layout */
.main-content {
    display: grid;
    grid-template-columns: 250px 1fr;
    gap: 2rem;
    padding: 2rem 0;
}

/* Header */
header {
    background: var(--primary-color);
    color: white;
    padding: 2rem 0;
}

/* Questions */
.question {
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    margin-bottom: 2rem;
    padding: 1.5rem;
}

/* Sidebar */
.sidebar {
    background: white;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.paper-link {
    display: block;
    padding: 0.5rem;
    color: var(--text-color);
    text-decoration: none;
    border-radius: 4px;
}

.paper-link:hover,
.paper-link.active {
    background: var(--highlight-color);
    color: white;
}
```

### 3. Navigation Scripts

#### sidebar-navigation.js
```javascript
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const papers = document.querySelectorAll('.paper-link');
    
    // Highlight current page in sidebar
    const currentPath = window.location.pathname;
    papers.forEach(paper => {
        if (paper.getAttribute('href') === currentPath) {
            paper.classList.add('active');
        }
    });
});
```

#### sidebar-include.js
```javascript
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('components/sidebar.html');
        const sidebarContent = await response.text();
        const mainContent = document.querySelector('.main-content');
        
        const sidebarDiv = document.createElement('div');
        sidebarDiv.className = 'sidebar';
        sidebarDiv.innerHTML = sidebarContent;
        mainContent.insertBefore(sidebarDiv, mainContent.firstChild);
    } catch (error) {
        console.error('Error loading sidebar:', error);
    }
});
```

### 4. Sidebar Component (sidebar.html)
```html
<h3>Past Papers</h3>
<nav class="papers-nav">
    <a href="paper-2023-july.html" class="paper-link">July 2023</a>
    <a href="paper-2023-march.html" class="paper-link">March 2023</a>
    <!-- Add more paper links as needed -->
</nav>
```

## Conversion Process

### Step 1: Extract Text using OCR

Use the PDF converter server to perform OCR:

```bash
cd /home/ngobiro/Documents/Cline/MCP/pdf-converter-server && node build/index.js "/path/to/pdf/file.pdf" "output.txt"
```

Example:
```bash
cd /home/ngobiro/Documents/Cline/MCP/pdf-converter-server && node build/index.js "/home/ngobiro/projects/pngobiro.github.io/colleges/tvet/diploma/DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY/Database management system/pastpapers/knec/2023j.pdf" "2023j_ocr.txt"
```

The OCR process:
1. Converts PDF pages to images
2. Optimizes images for better recognition
3. Uses Tesseract OCR to extract text
4. Saves text with page markers

### Step 2: Structure HTML Content

Format each question in the following structure:

```html
<div class="question">
    <h3>Question X</h3>
    <div class="question-content">
        <!-- Main question -->
        <p>(a) Question part a text (marks)</p>
        
        <!-- Sub-parts -->
        <p>(i) Sub-part i text</p>
        <p>(ii) Sub-part ii text</p>
        
        <!-- Additional content -->
        <p>Any additional text, references to diagrams, etc.</p>
    </div>
</div>
```

Key formatting rules:
1. Preserve all question numbering (1, 2, 3, etc.)
2. Maintain part labels ((a), (b), (c), etc.)
3. Keep sub-part numbering ((i), (ii), (iii), etc.)
4. Include mark allocations
5. Handle special content properly (see below)

### Special Content Types

#### 1. Tables
```html
<table class="data-table">
    <thead>
        <tr>
            <th>Column 1</th>
            <th>Column 2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Data 1</td>
            <td>Data 2</td>
        </tr>
    </tbody>
</table>
```

CSS for tables:
```css
.data-table {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;
    background: white;
}

.data-table th,
.data-table td {
    padding: 0.75rem;
    border: 1px solid var(--border-color);
    text-align: left;
}

.data-table th {
    background: var(--secondary-color);
    color: white;
}

.data-table tr:nth-child(even) {
    background: #f8f9fa;
}
```

#### 2. Images and Figures
```html
<figure class="question-figure">
    <img src="images/figure1.png" alt="Description of figure">
    <figcaption>Figure 1: Description or reference</figcaption>
</figure>
```

CSS for figures:
```css
.question-figure {
    margin: 1.5rem 0;
    text-align: center;
}

.question-figure img {
    max-width: 100%;
    height: auto;
    border: 1px solid var(--border-color);
    border-radius: 4px;
}

.question-figure figcaption {
    margin-top: 0.5rem;
    font-size: 0.9rem;
    color: var(--secondary-color);
}
```

#### 3. Mathematical Equations
Use MathJax for rendering mathematical equations:

```html
<!-- Add MathJax to template.html head -->
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

<!-- In question content -->
<div class="equation">
    \[x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}\]
</div>
```

CSS for equations:
```css
.equation {
    margin: 1rem 0;
    padding: 1rem;
    background: #f8f9fa;
    border-radius: 4px;
    overflow-x: auto;
}
```

#### 4. Code Snippets
Use `<pre>` and `<code>` tags with appropriate syntax highlighting:

```html
<pre class="code-block"><code class="language-sql">
SELECT column_name
FROM table_name
WHERE condition = 'value';
</code></pre>
```

CSS for code:
```css
.code-block {
    margin: 1rem 0;
    padding: 1rem;
    background: #f8f9fa;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    overflow-x: auto;
}

.code-block code {
    font-family: 'Consolas', 'Monaco', monospace;
    font-size: 0.9rem;
    line-height: 1.4;
}
```

For syntax highlighting, add Prism.js to template.html:
```html
<link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/themes/prism.min.css" rel="stylesheet" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/prism.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/components/prism-sql.min.js"></script>
```

#### 5. Database Diagrams
For entity-relationship diagrams or database schemas:

```html
<div class="db-diagram">
    <pre class="diagram-code">
    +------------------+
    |     Student      |
    +------------------+
    | PK student_id    |
    |    name         |
    |    email        |
    +------------------+
    </pre>
    <p class="diagram-caption">Database Schema: Student Table</p>
</div>
```

CSS for diagrams:
```css
.db-diagram {
    margin: 1.5rem 0;
    padding: 1rem;
    background: #f8f9fa;
    border: 1px solid var(--border-color);
    border-radius: 4px;
}

.diagram-code {
    font-family: 'Consolas', 'Monaco', monospace;
    white-space: pre;
    margin: 0;
    overflow-x: auto;
}

.diagram-caption {
    margin: 0.5rem 0 0;
    font-size: 0.9rem;
    color: var(--secondary-color);
    text-align: center;
}
```

### Step 3: Final Review

Before deploying:
1. Verify all questions are properly formatted
2. Check navigation links work correctly
3. Ensure styles are applied consistently
4. Test responsive layout on different screen sizes
5. Validate all JavaScript functionality

Each converted paper should maintain consistent styling and structure across the collection while preserving the original content's organization and meaning.
