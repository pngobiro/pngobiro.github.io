# Layout and Design Instructions

## File Structure
```
project/
├── index.html               # Table of Contents
├── styles/
│   └── main.css            # Shared styles
├── js/
│   └── navigation.js       # Navigation functionality
└── topics/
    ├── chapter-1-part-1.html
    ├── chapter-1-part-2.html
    └── ...
```

## HTML Structure

### Index Page (Table of Contents)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Title Here</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles/main.css">
</head>
<body>
    <div class="toc-container">
        <header class="toc-header">
            <h1 class="toc-title">Main Title</h1>
            <p class="toc-subtitle">Subtitle</p>
        </header>

        <ul class="toc-list">
            <li class="toc-chapter">
                <h2 class="toc-chapter-title">Chapter 1: Title</h2>
                <ul class="toc-section-list">
                    <li class="toc-section-item">
                        <a href="topics/chapter-1-part-1.html" class="toc-link">Part 1 (Description)</a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</body>
</html>
```

### Topic Pages
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Topic Title</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../styles/main.css">
    <!-- Include MathJax if needed -->
    <script>
    MathJax = {
      tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']],
        processEscapes: true,
        processEnvironments: true
      },
      options: {
        skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre']
      }
    };
    </script>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
</head>
<body>
    <div class="container">
        <article class="document-section">
            <!-- Navigation -->
            <nav class="document-nav">
                <div class="nav-links">
                    <a href="../index.html" class="nav-button">
                        <span class="nav-icon">←</span>
                        <span class="nav-text">Table of Contents</span>
                    </a>
                    <a href="previous-chapter.html" class="nav-button">
                        <span class="nav-icon">←</span>
                        <span class="nav-text">Previous Section</span>
                    </a>
                    <div class="document-progress">
                        <span class="progress-text">Current Chapter Info</span>
                    </div>
                    <a href="next-chapter.html" class="nav-button">
                        <span class="nav-text">Next Section</span>
                        <span class="nav-icon">→</span>
                    </a>
                </div>
            </nav>

            <header class="section-header">
                <h1 class="section-title">Chapter Title</h1>
                <div class="title-underline"></div>
            </header>

            <main class="section-content">
                <!-- Content Sections -->
                <section class="content-section">
                    <h2 class="section-heading">
                        <span class="heading-icon">🎯</span>
                        <span class="heading-text">Section Title</span>
                    </h2>
                    <div class="content-card">
                        <!-- Content here -->
                    </div>
                </section>
            </main>

            <!-- Repeat navigation at bottom -->
            <nav class="document-nav">
                <!-- Same navigation structure as top -->
            </nav>
        </article>
    </div>
    <script src="../js/navigation.js"></script>
</body>
</html>
```

## Common Content Elements

### Tables
```html
<div class="table-container">
    <table class="content-table">
        <thead>
            <tr><th>Header</th></tr>
        </thead>
        <tbody>
            <tr><td>Content</td></tr>
        </tbody>
    </table>
</div>
```

### Mathematical Expressions
```html
<!-- Inline math -->
<span class="math-inline">$x = y$</span>

<!-- Block math -->
<div class="equation">$$ y = mx + b $$</div>
```

### Lists
```html
<ul class="enhanced-list">
    <li class="list-item">
        <span class="item-icon">•</span>
        <span class="item-text">List item text</span>
    </li>
</ul>
```

### Images
```html
<img src="../assets/images/example.jpg" alt="Description" class="content-image">
```

## Design Guidelines

1. Use consistent heading hierarchy:
   - h1 for page titles
   - h2 for main sections
   - h3 for subsections

2. Navigation placement:
   - Top and bottom of each page
   - Consistent order: ToC, Previous, Progress, Next

3. Colors:
   - Table of Contents links: Blue (#2980b9)
   - Previous Section: Orange (#e67e22)
   - Next Section: Green (#27ae60)

4. Responsive breakpoints:
   - Desktop: > 768px
   - Tablet: 768px
   - Mobile: 480px

5. Content spacing:
   - Sections: 2rem margin bottom
   - Paragraphs: 1rem margin bottom
   - Lists: 0.5rem between items

6. Typography:
   - Use 'Inter' font family
   - Math content uses 'Times New Roman'
   - Headings are weighted and sized hierarchically

7. Accessibility:
   - Include proper alt text for images
   - Use semantic HTML elements
   - Maintain color contrast ratios
   - Include proper ARIA attributes