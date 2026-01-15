# PDF to HTML Conversion Workflow - Step-by-Step Instructions

This document provides detailed, unambiguous instructions for converting PDF documents to web-ready HTML format using the pdf-to-html-conversion-prompt-v8.md methodology.

---

## Prerequisites

### Required Files in Project Directory:
1. **Source Document** (one of the following):
   - PDF file (`.pdf`) - ready for processing
   - PowerPoint file (`.pptx`, `.ppt`) - needs conversion to PDF first
   - Word document (`.docx`, `.doc`) - needs conversion to PDF first

2. **Helper Scripts & Documentation**:
   - `pdf-to-html-conversion-prompt-v8.md` - Main conversion specification
   - `download_images.sh` - Script to extract and download images from MMD file

### Required Software:
- **Node.js** with Mathpix OCR server installed at:
  `/home/ngobiro/.local/share/Roo-Code/MCP/mathpix-ocr-server/build/index.js`
- **LibreOffice** (for PPTX/DOCX to PDF conversion)
- **curl** or **wget** (for downloading images)
- **bash** (for running shell scripts)

---

## Complete Workflow

### STEP 0: Check for PDF File

**IF PDF EXISTS** ✅
- Skip to **STEP 1** (PDF to MMD Conversion)

**IF PDF DOES NOT EXIST** (you have PPTX, PPT, DOCX, or DOC) ❌
- Proceed to **STEP 0A** below

---

### STEP 0A: Convert Document to PDF (if needed)

#### For PowerPoint Files (.pptx, .ppt):
```bash
libreoffice --headless --convert-to pdf --outdir . "filename.pptx"
```

#### For Word Documents (.docx, .doc):
```bash
libreoffice --headless --convert-to pdf --outdir . "filename.docx"
```

**Expected Result:**
- A new PDF file will be created in the current directory
- Example: `filename.pptx` → `filename.pdf`

**Verification:**
```bash
ls -lh *.pdf
```

**Once PDF is created, proceed to STEP 1.**

---

## STEP 1: Convert PDF to MMD (MultiMarkdown)

### Purpose:
Extract text, structure, and image references from PDF using Mathpix OCR.

### Command Template:
```bash
node /home/ngobiro/.local/share/Roo-Code/MCP/mathpix-ocr-server/build/index.js "INPUT_PDF_FILENAME.pdf" > "OUTPUT_MMD_FILENAME.mmd"
```

### Example (Actual Command Used):
```bash
node /home/ngobiro/.local/share/Roo-Code/MCP/mathpix-ocr-server/build/index.js "Computer Theory Notes - KMTC - Nyamache Campus.pdf" > "Computer Theory Notes - KMTC - Nyamache Campus.mmd"
```

### What This Does:
- Processes the PDF through Mathpix OCR
- Extracts text content with structure
- Identifies images and creates markdown image links `![](url)`
- Converts tables to markdown format
- Preserves mathematical equations as LaTeX
- Outputs everything to a `.mmd` file

### Expected Output:
- A new `.mmd` file with the same base name as your PDF
- File size will vary (e.g., 81KB for our example)

### Verification:
```bash
ls -lh *.mmd
```

You should see your newly created MMD file.

---

## STEP 2: Create Folder Structure

### Purpose:
Set up the complete directory structure for HTML output.

### Command:
```bash
mkdir -p html_output/topics html_output/assets/images html_output/styles html_output/js
```

### What This Creates:
```
html_output/
├── topics/              # Individual lecture/chapter HTML files go here
├── assets/
│   └── images/         # Downloaded images from PDF
├── styles/             # CSS files
└── js/                 # JavaScript files
```

### Verification:
```bash
tree html_output -L 2
# OR if tree is not installed:
find html_output -type d
```

**Expected Result:**
```
html_output
├── assets
│   └── images
├── js
├── styles
└── topics
```

---

## STEP 3: Create CSS File (styles/main.css)

### Purpose:
Create the master stylesheet based on pdf-to-html-conversion-prompt-v8.md specifications.

### File Location:
`html_output/styles/main.css`

### Content Source:
Copy the complete CSS from the **CSS Styling Instructions** section of `pdf-to-html-conversion-prompt-v8.md`

### Key Features Included:
- CSS variables for colors, spacing, typography
- Responsive design breakpoints (768px, 480px)
- Enhanced list styling
- Table styling
- Code block formatting
- Navigation components
- Callout boxes (note, warning, danger, success)
- Key points section styling
- Accessibility features
- Print styles

### Manual Creation:
Create the file with the full CSS content from the conversion prompt specification.

### Verification:
```bash
ls -lh html_output/styles/main.css
```

**Expected:** File should exist and be approximately 10-15KB in size.

---

## STEP 4: Create JavaScript File (js/navigation.js)

### Purpose:
Add interactive functionality for navigation elements.

### File Location:
`html_output/js/navigation.js`

### Content Source:
Copy the JavaScript code from the **JavaScript** section of `pdf-to-html-conversion-prompt-v8.md`

### Key Features:
- Prevents clicks on disabled navigation buttons
- Placeholder for future enhancements (smooth scrolling, keyboard navigation)

### Manual Creation:
Create the file with the JavaScript content from the conversion prompt specification.

### Verification:
```bash
ls -lh html_output/js/navigation.js
```

**Expected:** File should exist (approximately 500 bytes).

---

## STEP 5: Create Index.html (Table of Contents)

### Purpose:
Create the main landing page with navigation to all content sections.

### File Location:
`html_output/index.html`

### Basic Template Structure:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Document Title]</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles/main.css">
</head>
<body>
    <div class="container">
        <main role="main">
            <header class="section-header">
                <h1 class="section-title">[Document Title]</h1>
                <div class="title-underline"></div>
                <p style="text-align: center; color: var(--text-medium); margin-top: 1rem;">
                    [Institution/Course Info]
                </p>
            </header>

            <section class="content-section">
                <h2>Table of Contents</h2>
                <div class="content-card">
                    <!-- Links to topic pages will be added here -->
                    <ul>
                        <li><a href="topics/topic-01.html">Topic 1: Title</a></li>
                        <li><a href="topics/topic-02.html">Topic 2: Title</a></li>
                        <!-- Add more as needed -->
                    </ul>
                </div>
            </section>
        </main>
    </div>
    <script src="js/navigation.js"></script>
</body>
</html>
```

### Manual Creation:
Create a basic index.html file. Content will be populated after analyzing the MMD file structure.

### Verification:
```bash
ls -lh html_output/index.html
```

---

## STEP 6: Update download_images.sh Configuration

### Purpose:
Configure the image download script to use the correct MMD file and output directory.

### File to Edit:
`download_images.sh` (in project root)

### Required Changes:
Find the configuration section (near line 13-16) and update:

```bash
# --- Configuration ---
MMD_FILE="[YOUR_MMD_FILENAME].mmd"           # Change this
OUTPUT_DIR="html_output/assets/images"        # Change this
PROJECT_ROOT="/"
```

### Example (Our Actual Configuration):
```bash
# --- Configuration ---
MMD_FILE="Computer Theory Notes - KMTC - Nyamache Campus.mmd"
OUTPUT_DIR="html_output/assets/images"
PROJECT_ROOT="/"
```

### Key Points:
- `MMD_FILE` must match your actual `.mmd` filename exactly
- `OUTPUT_DIR` should point to `html_output/assets/images`
- Use quotes if filename contains spaces

### Verification:
```bash
grep -A 2 "Configuration" download_images.sh
```

---

## STEP 7: Download Images from MMD

### Purpose:
Extract all image URLs from the MMD file and download them with proper naming convention.

### Command:
```bash
bash download_images.sh
```

### What This Script Does:
1. Reads the MMD file
2. Extracts all image URLs matching pattern: `![](https://cdn.mathpix.com/...)`
3. Downloads each image using curl
4. Renames images following convention: `[ID]g-[PageNum]-[SeqNum].ext`
5. Saves images to `html_output/assets/images/`

### Example Output:
```
[INFO] Starting image download process...
[INFO] Input MMD: Computer Theory Notes - KMTC - Nyamache Campus.mmd
[INFO] Output Directory: html_output/assets/images
[INFO] Found 2 image URLs to process
[PROGRESS] (1/2) Downloading: 2025_11_14_21447916473f0c6c927bg-02 (Seq 1) -> 2025_11_14_21447916473f0c6c927bg-02-1.jpg
[SUCCESS] Downloaded: 2025_11_14_21447916473f0c6c927bg-02-1.jpg
[PROGRESS] (2/2) Downloading: 2025_11_14_21447916473f0c6c927bg-02 (Seq 2) -> 2025_11_14_21447916473f0c6c927bg-02-2.jpg
[SUCCESS] Downloaded: 2025_11_14_21447916473f0c6c927bg-02-2.jpg

[INFO] Download process completed!
[INFO] Processed: 2 URLs
[INFO] Successful: 2
```

### Verification:
```bash
ls -lh html_output/assets/images/
```

**Expected:** You should see downloaded images with filenames like:
- `2025_11_14_21447916473f0c6c927bg-02-1.jpg`
- `2025_11_14_21447916473f0c6c927bg-02-2.jpg`

---

## STEP 8: Review and Clean MMD File (Manual Step)

### Purpose:
Correct OCR errors and identify content structure before HTML conversion.

### Tasks:

#### 8.1 Open the MMD file:
```bash
code "Computer Theory Notes - KMTC - Nyamache Campus.mmd"
# OR use your preferred text editor
```

#### 8.2 Review and Correct:
- **OCR Errors**: Fix garbled text, misidentified characters
- **Mathematical Equations**: Verify LaTeX syntax is correct
- **Tables**: Check table structure and cell content
- **Spurious Characters**: Remove artifacts like inconsistent `t `, `• ` prefixes
- **List Patterns**: Identify consistent prefixes (`-`, `*`, `•`, numbers) that indicate lists

#### 8.3 Document Structure Analysis:
Identify main sections by looking for patterns like:
- `\section*{...}` or `#` for major headings
- `##` or `###` for subsections
- Natural content breaks (chapters, lectures, major topics)

#### 8.4 Plan Content Chunks:
Based on document structure, decide how to split content into separate HTML files:
- Each major section/chapter could be one file
- Keep related content together
- Avoid files that are too long (>1500 lines) or too short (<100 lines)

### Output of This Step:
- Corrected MMD file (save changes)
- List of planned content chunks (document for yourself)
- Understanding of document structure

---

## STEP 9: Generate HTML Topic Pages

### Purpose:
Convert each content chunk from MMD to semantic HTML.

### Process for Each Topic Page:

#### 9.1 Create HTML File:
```bash
touch html_output/topics/topic-name.html
```

#### 9.2 Use Topic Page Template:
Copy the template from **HTML Layout and Structure** section in `pdf-to-html-conversion-prompt-v8.md`

#### 9.3 Populate Content:
- Copy verbatim text from corrected MMD
- Convert MMD headings to HTML headings (`<h1>`, `<h2>`, etc.)
- Convert list patterns to `<ul>` or `<ol>` with `<li>` items
- Convert tables to HTML `<table>` structure
- Insert images with proper paths: `<img src="../assets/images/[filename].jpg" alt="...">`
- Wrap math with MathJax syntax (already in LaTeX from MMD)

#### 9.4 Configure Navigation:
- Update "Previous" and "Next" links to adjacent pages
- Enable/disable buttons (add class `disabled` for first/last pages)
- Set progress percentage and text (e.g., "Lecture 1 of 5")

#### 9.5 Apply Semantic HTML:
- Use `<section>` for major content blocks
- Use `<article>` for main content
- Add classes for styling: `content-card`, `enhanced-list`, `callout`, etc.
- Add ARIA labels for accessibility

### Verification for Each File:
- Open in browser to check rendering
- Verify navigation links work
- Check that images load correctly
- Validate HTML structure

---

## STEP 10: Update Index.html

### Purpose:
Add links to all created topic pages.

### Process:
1. Open `html_output/index.html`
2. Update the Table of Contents section with links to all topic HTML files
3. Use clear, descriptive link text matching section titles

### Example:
```html
<section class="content-section">
    <h2>Table of Contents</h2>
    <div class="content-card">
        <ul>
            <li><a href="topics/introduction.html">Introduction to Computer Theory</a></li>
            <li><a href="topics/anatomy.html">Anatomy of Computers</a></li>
            <li><a href="topics/input-devices.html">Input Devices</a></li>
            <!-- Add all your topics -->
        </ul>
    </div>
</section>
```

---

## STEP 11: Verification and Testing

### Complete Verification Checklist:

#### File Structure:
```bash
tree html_output
```
**Expected:**
```
html_output/
├── index.html
├── topics/
│   ├── topic-01.html
│   ├── topic-02.html
│   └── ...
├── assets/
│   └── images/
│       ├── [image-files].jpg
│       └── ...
├── styles/
│   └── main.css
└── js/
    └── navigation.js
```

#### Content Verification:
- [ ] All text from PDF is present in HTML (compare visually)
- [ ] No content summarized or altered
- [ ] All images are displayed correctly
- [ ] All tables are properly formatted
- [ ] Mathematical equations render via MathJax
- [ ] Navigation links work (Previous/Next/ToC)
- [ ] All internal links function correctly

#### Visual/Styling:
- [ ] CSS loads on all pages
- [ ] Responsive design works on mobile (resize browser)
- [ ] Print styles work (Print Preview)
- [ ] Colors and spacing match design system

#### Accessibility:
- [ ] All images have alt text
- [ ] Headings follow logical hierarchy
- [ ] Keyboard navigation works (Tab key)
- [ ] Color contrast is sufficient

### Browser Testing:
Open `html_output/index.html` in a web browser:
```bash
# If you have a local server:
cd html_output
python3 -m http.server 8000
# Then open: http://localhost:8000

# OR simply open the file:
xdg-open html_output/index.html
```

---

## Summary of Complete Workflow

```
START
├─ [Check] PDF exists?
│   ├─ NO → Convert PPTX/DOCX to PDF (Step 0A)
│   └─ YES → Continue
│
├─ STEP 1: Convert PDF to MMD using Mathpix
├─ STEP 2: Create folder structure (html_output/...)
├─ STEP 3: Create CSS file (styles/main.css)
├─ STEP 4: Create JS file (js/navigation.js)
├─ STEP 5: Create empty index.html
├─ STEP 6: Update download_images.sh configuration
├─ STEP 7: Run download_images.sh to get all images
├─ STEP 8: Review and clean MMD file (manual)
├─ STEP 9: Generate HTML topic pages from MMD
├─ STEP 10: Update index.html with links
└─ STEP 11: Verify and test complete project
```

---

## Common Issues and Solutions

### Issue 1: PDF Conversion Fails
**Symptom:** LibreOffice command doesn't create PDF
**Solution:**
```bash
# Ensure LibreOffice is installed:
sudo apt-get install libreoffice

# Try with full path:
/usr/bin/libreoffice --headless --convert-to pdf "filename.pptx"
```

### Issue 2: MMD File is Empty or Has Errors
**Symptom:** `.mmd` file is very small or contains error messages
**Solution:**
- Check Mathpix API key is configured correctly
- Verify PDF is not corrupted or password-protected
- Ensure Node.js and Mathpix server are properly installed

### Issue 3: Images Don't Download
**Symptom:** `download_images.sh` reports 0 images found
**Solution:**
- Verify MMD_FILE variable matches your actual filename exactly
- Check that MMD file contains image URLs (search for `![](https://`)
- Ensure curl or wget is installed: `sudo apt-get install curl`

### Issue 4: Images Don't Display in HTML
**Symptom:** Broken image icons in browser
**Solution:**
- Check image paths use correct relative path: `../assets/images/filename.jpg`
- Verify images actually exist in `html_output/assets/images/`
- Check image filenames match exactly (case-sensitive on Linux)

### Issue 5: CSS Not Loading
**Symptom:** Pages display without styling
**Solution:**
- Verify CSS path in HTML: `<link rel="stylesheet" href="../styles/main.css">` (for topic pages)
- Use `href="styles/main.css"` for index.html (no `..`)
- Check that `main.css` exists and has content

---

## File Naming Conventions

### PDF Files:
- Use descriptive names with hyphens or underscores
- Example: `Computer-Theory-Notes.pdf`

### MMD Files:
- Match the PDF filename exactly
- Example: `Computer-Theory-Notes.mmd`

### HTML Topic Files:
- Use lowercase with hyphens
- Be descriptive but concise
- Example: `introduction-to-computers.html`, `input-devices.html`

### Image Files:
- Automatically named by download script
- Format: `[ID]g-[PageNum]-[SeqNum].ext`
- Example: `2025_11_14_21447916473f0c6c927bg-02-1.jpg`
- DO NOT rename manually (breaks references)

---

## Reference Documents

1. **pdf-to-html-conversion-prompt-v8.md** - Master specification for conversion process
2. **download_images.sh** - Image extraction script
3. This file (**instructions.md**) - Step-by-step workflow guide

---

**Document Updated:** 14 November 2025
**Status:** Complete workflow documented based on actual implementation