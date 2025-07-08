# Past Paper PDF to HTML Converter Guide

This comprehensive guide details the process of converting KNEC Computer Applications II past papers from PDF to structured HTML format with solutions.

## Table of Contents
1. [Project Structure](#project-structure)
2. [Required Tools](#required-tools)
3. [Templates](#templates)
4. [Styling](#styling)
5. [Conversion Process](#conversion-process)
6. [Navigation System](#navigation-system)
7. [Index Page](#index-page)

## Project Structure
```
pastpapers/
├── knec/
│   ├── js/
│   │   ├── sidebar-navigation.js
│   │   └── sidebar-include.js
│   ├── components/
│   │   └── sidebar.html
│   ├── styles.css
│   ├── index.html
│   ├── template.html
│   └── paper-YYYY-[month].html
```

## Required Tools

1. PDF OCR Tool:
```typescript
// OCR conversion script
import * as fs from 'fs';
import * as path from 'path';
import * as pdf from 'pdf-parse';
import * as Tesseract from 'tesseract.js';

async function convertPDFToText(inputPath: string, outputPath: string) {
    // Implementation details...
}
```

2. HTML Template System
3. CSS Preprocessor
4. JavaScript for Navigation

## Templates

### Base Paper Template
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Month] [Year] - Computer Application II Past Paper</title>
    <link rel="stylesheet" href="styles.css">
    <script src="js/sidebar-navigation.js" defer></script>
    <script src="js/sidebar-include.js" defer></script>
</head>
<body>
    <header>
        <div class="container">
            <h1>Computer Application II</h1>
            <h2>[Month] [Year] Past Paper</h2>
            <div class="exam-details">
                <p>Paper Code: 2920/202A</p>
                <p>Duration: 2 hours</p>
                <p>Module II</p>
            </div>
        </div>
    </header>
    
    <div class="container main-content">
        <!-- Sidebar will be injected here -->
        <main>
            <!-- Paper content -->
        </main>
    </div>
    
    <footer>
        <div class="container">
            <p>&copy; 2025 Computer Application II Past Papers Collection</p>
        </div>
    </footer>
</body>
</html>
```

### Question Template
```html
<div class="question">
    <h3>Question [N] ([X] marks)</h3>
    <div class="question-content">
        <!-- Question text -->
    </div>
    <div class="answer-section">
        <h4>Answer</h4>
        <div class="answer-content">
            <!-- Structured answer -->
        </div>
    </div>
</div>
```

## Styling

### Core CSS
```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #34495e;
    --text-color: #333;
    --border-color: #ddd;
    --background-color: #f5f6fa;
    --highlight-color: #3498db;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

/* Header Styles */
header {
    background: var(--primary-color);
    color: white;
    padding: 2rem 0;
}

/* Question Styles */
.question {
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    margin-bottom: 2rem;
    padding: 1.5rem;
}

/* Answer Section */
.answer-section {
    border-top: 2px solid var(--border-color);
    margin-top: 1.5rem;
    padding-top: 1.5rem;
}

/* Tables */
.data-table {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;
}

.data-table th,
.data-table td {
    padding: 0.75rem;
    border: 1px solid var(--border-color);
}

/* Navigation */
.paper-navigation {
    display: flex;
    justify-content: space-between;
    margin: 2rem 0;
}

.btn {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: var(--highlight-color);
    color: white;
    text-decoration: none;
    border-radius: 4px;
}
```

## Conversion Process

1. **PDF Text Extraction**
```bash
cd /path/to/converter
npx tsc && node build/index.js "input.pdf" "output.txt"
```

2. **Content Structuring**
- Parse OCR output
- Identify questions and sections
- Format answers with proper HTML structure

3. **HTML Generation**
```javascript
function generateHTML(paperData) {
    const template = fs.readFileSync('template.html', 'utf8');
    return template.replace(
        '[CONTENT]',
        formatQuestions(paperData.questions)
    );
}
```

4. **Answer Formatting Guidelines**
- Use tables for comparing concepts
- Ordered lists for steps/procedures
- Unordered lists for properties/characteristics
- Code blocks for calculations
- Bold text for key terms

## Navigation System

### JavaScript Navigation
```javascript
// sidebar-navigation.js
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    // Implementation...
});
```

### Paper Navigation
```html
<div class="paper-navigation">
    <a href="previous-paper.html" class="btn">Previous Paper</a>
    <a href="index.html" class="btn">Home</a>
    <a href="next-paper.html" class="btn">Next Paper</a>
</div>
```

## Index Page Structure

### Paper Card Template
```html
<div class="paper-card">
    <h3>[Month] [Year]</h3>
    <div class="meta">
        <p>Questions: 6 | Duration: 2 hours</p>
        <p>Topics: [Topics List]</p>
    </div>
    <div class="actions">
        <a href="paper-[year]-[month].html" class="btn">View Paper</a>
    </div>
</div>
```

### Year Section Template
```html
<section class="year-section">
    <h2>[Year]</h2>
    <div class="paper-grid">
        <!-- Paper cards -->
    </div>
</section>
```

## Command Reference

### PDF Conversion
```bash
# Convert PDF to text
node pdf-converter.js input.pdf output.txt

# Generate HTML
node html-generator.js output.txt template.html paper-output.html
```

### File Management
```bash
# Create necessary directories
mkdir -p js components

# Copy static assets
cp templates/styles.css .
cp templates/sidebar.html components/
```

## Best Practices

1. **Content Organization**
   - Group questions by topic
   - Use consistent formatting for similar content
   - Include detailed explanations in answers

2. **Code Quality**
   - Follow HTML5 semantic structure
   - Use CSS custom properties for theming
   - Implement responsive design

3. **Documentation**
   - Comment complex code sections
   - Maintain README with setup instructions
   - Version control all changes

4. **Accessibility**
   - Include proper ARIA labels
   - Ensure keyboard navigation
   - Maintain color contrast ratios

## Troubleshooting

1. **OCR Issues**
   - Clean PDF scans before processing
   - Verify text recognition accuracy
   - Manual correction of complex formulas

2. **Styling Problems**
   - Check CSS specificity
   - Verify class names
   - Test across browsers

3. **Navigation Errors**
   - Validate file paths
   - Check JavaScript console
   - Test all navigation links

This guide serves as a comprehensive reference for converting and formatting KNEC Computer Applications II past papers into structured HTML format with detailed solutions.
