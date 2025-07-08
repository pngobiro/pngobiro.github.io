# Quick Start Guide: Converting a New Past Paper

This guide walks you through the process of converting a new past paper from PDF to HTML format using the provided tools and templates.

## Step 1: Convert PDF to Text

1. Place your PDF in the target directory:
```bash
cp new-paper.pdf pastpapers/knec/
```

2. Run the converter:
```bash
cd pdf-converter-server
npx tsc && node build/index.js "../pastpapers/knec/new-paper.pdf" "output.txt"
```

## Step 2: Create New HTML File

1. Copy the template:
```bash
cd ../pastpapers/knec
cp template.html paper-yyyy-month.html
```

2. Update placeholders in the new file:
- `[MONTH YEAR]` → e.g., "July 2023"
- `[PREVIOUS_PAPER]` → Previous paper filename
- `[NEXT_PAPER]` → Next paper filename
- `[X]` → Number of pages in the paper

## Step 3: Format Content

1. Copy OCR text from output.txt
2. Structure each question using the template format:
```html
<div class="question">
    <h3>Question X (Y marks)</h3>
    <div class="question-content">
        <!-- Question text -->
    </div>
    <div class="answer-section">
        <h4>Answer</h4>
        <div class="answer-content">
            <!-- Answer content -->
        </div>
    </div>
</div>
```

3. Format special elements:
- Use `<pre>` for code blocks
- Use `<table class="data-table">` for tables
- Use `<ol>` and `<ul>` for lists

## Step 4: Update Navigation

1. Add paper to sidebar.html:
```html
<li><a href="paper-yyyy-month.html">Month YYYY</a></li>
```

2. Update adjacent papers' navigation links:
- Previous paper: Add link to new paper
- Next paper: Add link to new paper

## Step 5: Update Index Page

Add new paper card to index.html:
```html
<div class="paper-card">
    <h3>Month YYYY</h3>
    <div class="meta">
        <p>Questions: 6 | Duration: 2 hours</p>
        <p>Topics: [Main topics covered]</p>
    </div>
    <div class="actions">
        <a href="paper-yyyy-month.html" class="btn">View Paper</a>
    </div>
</div>
```

## Step 6: Testing

1. Check formatting:
```bash
# Open in browser
firefox paper-yyyy-month.html
```

2. Verify:
- Navigation links work
- Content is properly formatted
- Answers are complete and accurate
- Mobile responsiveness
- Print layout

## Common Issues and Solutions

1. OCR Text Quality
- Clean up common OCR errors
- Fix formatting issues
- Verify mathematical symbols

2. Navigation Issues
- Check file names match exactly
- Verify all links in navigation chain
- Test keyboard shortcuts

3. Styling Problems
- Use provided CSS classes
- Follow template structure
- Test responsive breakpoints

## Help and Resources

- Original template: `template.html`
- Style guide: `styles.css`
- Documentation: `pastpaper_pdf_to_html_converter.md`
- Components: `components/` directory
- Scripts: `js/` directory

For more detailed information, refer to the full documentation in `pastpaper_pdf_to_html_converter.md`.
