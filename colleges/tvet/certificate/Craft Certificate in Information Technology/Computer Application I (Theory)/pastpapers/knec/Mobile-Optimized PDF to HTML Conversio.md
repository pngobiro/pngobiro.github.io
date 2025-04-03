# Mobile-Optimized PDF to HTML Conversion Plan

This guide outlines the process for converting KNEC past paper PDFs into mobile-responsive HTML documents. Follow these standardized steps to ensure consistency and mobile compatibility across all converted documents.

## 1. Setup Requirements

### Directory Structure
```
project-root/
├── index.html
├── styles.css
├── mobile-styles.css
├── js/
│   ├── sidebar-navigation.js
│   ├── mobile-navigation.js
│   ├── responsive-tables.js
│   └── answer-toggle.js
├── images/
├── examples/
│   ├── verify_pastpapers.py
│   └── setup_chromedriver.py
└── conversion_plan.txt
```

### Dependencies
```bash
# Install Python dependencies
pip install selenium beautifulsoup4 html5lib

# Configure ChromeDriver (if needed)
python examples/setup_chromedriver.py
```

## 2. Conversion Process

### Step 1: PDF to MMD Conversion
Convert the PDF to Mathpix Markdown format using the Mathpix OCR tool.

**Command:**
```bash
node /path/to/mathpix-ocr-server/build/index.js [input_pdf_filename].pdf > [output_mmd_filename].mmd
```

**Example:**
```bash
node /home/ngobiro/.local/share/Roo-Code/MCP/mathpix-ocr-server/build/index.js 2023j.pdf > 2023j.mmd
```

### Step 2: Create Mobile-Optimized HTML Template
Start with the mobile-optimized template that includes all necessary tags and structure.

**Mobile-Optimized Template Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#0056b3">
    <title>[Paper Name] - [Month Year] | KNEC Diploma</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="mobile-styles.css">
    <script src="js/sidebar-navigation.js" defer></script>
    <script src="js/mobile-navigation.js" defer></script>
    <script src="js/responsive-tables.js" defer></script>
    <script src="js/answer-toggle.js" defer></script>
    <!-- MathJax Configuration -->
    <script>
        MathJax = {
          tex: {
            inlineMath: [['$', '$'], ['\\(', '\\)']],
            displayMath: [['$$', '$$'], ['\\[', '\\]']],
            processEscapes: true,
            processEnvironments: true
          },
          options: {
            skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
            renderActions: {
              addLineBreaks: [25, function (doc) {
                doc.state.linebreakSensitive = false;
              }, null]
            }
          }
        };
    </script>
    <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js" id="MathJax-script" async></script>
</head>
<body>
    <!-- Mobile Navigation Toggle -->
    <button id="mobile-nav-toggle" class="mobile-only" aria-label="Toggle navigation">
        <span></span><span></span><span></span>
    </button>

    <header id="main-header">
        <div class="container">
            <h1>PAPER SUBJECT</h1>
            <h2>PAPER TITLE</h2>
            <div class="exam-details">
                <p>Paper Code: PAPER CODE</p>
                <p>Duration: DURATION</p>
                <p>Module: MODULE</p>
            </div>
        </div>
    </header>

    <div class="container main-content">
        <!-- Mobile Overlay -->
        <div id="mobile-overlay" class="mobile-only"></div>
        
        <!-- Sidebar -->
        <aside class="sidebar" id="main-sidebar">
            <div class="sidebar-header">
                <h3>Past Papers</h3>
                <button id="close-sidebar" class="mobile-only" aria-label="Close navigation">✕</button>
            </div>
            <nav class="sidebar-nav">
                <!-- Sidebar content will be added in Step 5 -->
            </nav>
        </aside>

        <!-- Main Content Area -->
        <main id="main-content-area">
            <!-- Paper Navigation Top -->
            <div class="paper-navigation top" id="nav-top">
                <a href="#" class="btn">Previous Paper</a>
                <a href="index.html" class="btn">Home</a>
                <a href="#" class="btn">Next Paper</a>
            </div>

            <!-- Paper Instructions -->
            <section class="paper-intro" id="paper-intro">
                <!-- Instructions content will be added in Step 4 -->
            </section>

            <!-- Paper Questions & Answers -->
            <section class="paper-content" id="paper-content-area">
                <!-- Questions content will be added in Step 4 -->
            </section>

            <!-- Paper Navigation Bottom -->
            <div class="paper-navigation bottom" id="nav-bottom">
                <a href="#" class="btn">Previous Paper</a>
                <a href="index.html" class="btn">Home</a>
                <a href="#" class="btn">Next Paper</a>
            </div>
        </main>
    </div>

    <!-- Back to Top Button -->
    <button id="back-to-top" aria-label="Back to top">↑</button>

    <footer id="main-footer">
        <div class="container">
            <p>&copy; 2025 Subject Past Papers Collection | Kenya National Examinations Council</p>
        </div>
    </footer>
</body>
</html>
```

### Step 3: Update Header
Extract metadata from the MMD file and update the header section of the HTML template.

**Fields to update:**
- `<title>` tag
- Subject name (`<h1>`)
- Paper title/level (`<h2>`)
- Paper code, duration and module in the exam-details section

### Step 4: Populate Main Content
Add instructions and questions from the MMD file to the HTML template.

**Question Structure Example:**
```html
<div class="question" id="question-1">
    <h3>Question 1 (20 marks)</h3>
    <div class="question-content">
        <p>(a) First part of the question. (10 marks)</p>
        <p>(b) Second part of the question. (10 marks)</p>
        <ol class="sub-parts">
            <li>First sub-part. (5 marks)</li>
            <li>Second sub-part. (5 marks)</li>
        </ol>
    </div>
    <div class="answer-section">
        <h4>Answer</h4>
        <div class="answer-content">
            <p><em>Disclaimer: These answers are for educational purposes only. Verify independently.</em></p>
            <!-- Answer content will be added in Step 4b -->
        </div>
    </div>
</div>
```

#### Image Handling
Extract and download images from the MMD file to the images/ directory.

**Steps:**
1. Look for image references in the MMD file: `![Figure X](image_url)`
2. Download images: `curl -o images/[output_filename].jpg 'image_url'`
3. Update HTML to use local image paths with mobile-optimized structure

**Mobile-Optimized Image Example:**
```html
<figure class="question-figure">
    <img src="images/figure1.jpg" 
         alt="Description of figure 1" 
         width="800" 
         height="600" 
         loading="lazy">
    <figcaption>Figure 1: Caption text</figcaption>
</figure>
```

### Step 4b: Add Answers (Mandatory Structure)
Generate or add answers for each question within the `.answer-content` div. **Crucially, this step must add *some* content to the answer section (even if it's just placeholder text like "[Answer pending review]") before proceeding to Step 5.** This ensures the HTML structure is complete and the answer toggle functionality works correctly. Actual answers can be populated later, but the structure must be present.

**Answer Structure Example:**
```html
<div class="answer-content">
    <p><em>Disclaimer: These answers are for educational purposes only. Verify independently.</em></p>
    <div class="answer-part">
        <h5>(a) First part</h5>
        <p>Detailed answer for part (a)...</p>
    </div>
    <div class="answer-part">
        <h5>(b) Second part</h5>
        <p>Detailed answer for part (b)...</p>
        <ol class="answer-sub-parts">
            <li>Answer for first sub-part...</li>
            <li>Answer for second sub-part...</li>
        </ol>
    </div>
</div>
```

### Step 5: Embed Sidebar
Add navigation sidebar with links to other past papers.

**Sidebar Example:**
```html
<nav class="sidebar-nav">
    <ul>
        <li>
            <h4>2023</h4>
            <ul>
                <li><a href="2023j.html">July 2023</a></li>
                <li><a href="2023n.html">November 2023</a></li>
            </ul>
        </li>
        <li>
            <h4>2022</h4>
            <ul>
                <li><a href="2022j.html">July 2022</a></li>
            </ul>
        </li>
    </ul>
</nav>
```

### Step 6: Update Navigation Links
Update the "Previous Paper" and "Next Paper" links at the top and bottom of the page.

**Example:**
```html
<div class="paper-navigation top" id="nav-top">
    <a href="2022n.html" class="btn">Previous: Nov 2022</a>
    <a href="index.html" class="btn">Home</a>
    <a href="2023n.html" class="btn">Next: Nov 2023</a>
</div>
```

### Step 7: Format Special Content
Apply mobile-optimized formatting for special content like tables, mathematical equations, and code blocks.

#### Tables
**Mobile-Optimized Table Example:**
```html
<div class="responsive-table-container">
    <table class="data-table">
        <caption>Table 1: Data Description</caption>
        <thead>
            <tr>
                <th>Column 1</th>
                <th>Column 2</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td data-label="Column 1">Data 1</td>
                <td data-label="Column 2">Data 2</td>
            </tr>
            <tr>
                <td data-label="Column 1">Data 3</td>
                <td data-label="Column 2">Data 4</td>
            </tr>
        </tbody>
    </table>
</div>
```

#### Equations
**Inline Equation Example:**
```html
<p>The formula is <span class="inline-math">$x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}$</span> which gives us...</p>
```

**Display Equation Example:**
```html
<div class="equation-container">
    $$\begin{align}
    E &= mc^2 \\
    m &= \frac{E}{c^2}
    \end{align}$$
</div>
```

#### Code Blocks
```html
<pre class="code-block">
    <code class="language-python">
def calculate_area(radius):
    """Calculate the area of a circle"""
    return 3.14 * radius ** 2
    </code>
</pre>
```

### Step 8: Run Automated Verification
Verify the HTML structure, mobile responsiveness, and accessibility using the verification script.

**Command:**
```bash
python examples/verify_pastpapers.py your-file.html --mobile
```

Check for these common issues:
- Missing viewport meta tag
- Touch targets smaller than 44×44px
- Content wider than viewport
- Tables without responsive containers
- Images without explicit dimensions or alt text
- Poor contrast for text elements

### Step 9: Final Review & Browser Testing
Test on multiple devices and browsers:
- Desktop browser (Chrome, Firefox, Safari)
- Mobile devices (or emulators) with different screen sizes:
  - Small phone (320px width)
  - Medium phone (375px width)
  - Large phone (425px width)
  - Tablet (768px width)

### Step 10: Update Index Page
Update the main index.html to include the new paper.

**Paper Card Example:**
```html
<div class="paper-card" id="paper-2023-july">
    <h3>July 2023</h3>
    <div class="meta">
        <p>Questions: 8 | Duration: 2½ hours</p>
        <p>Topics: Topic 1, Topic 2, Topic 3</p>
    </div>
    <div class="actions">
        <a href="2023j.html" class="btn">View Paper</a>
    </div>
</div>
```

## 3. Mobile-Specific Components

### Mobile Navigation
The mobile navigation system consists of:
1. A toggle button that appears on small screens
2. An overlay that darkens the background when navigation is open
3. A close button within the sidebar
4. JavaScript that handles the opening/closing behavior

### Responsive Tables
Tables are made mobile-friendly by:
1. Wrapping them in a scrollable container
2. Adding data-label attributes to each cell
3. Using CSS to transform the display on small screens from tabular to stacked

### Touch-Friendly Elements
All interactive elements should:
1. Have a minimum size of 44×44px for touch targets
2. Include adequate spacing between elements
3. Provide visual feedback on touch/hover

### Back-to-Top Button
A button that appears when scrolling down, allowing users to quickly return to the top of the page with a single tap.

## 4. Tracking Progress: Conversion Plan File

Create and maintain a `conversion_plan.txt` file in the project root to track the status of each paper conversion. This file should be updated after completing each step.

### Creating the Conversion Plan File

Create the file with the following structure:

```
# PDF to HTML Conversion Plan

## Target PDFs
- [list all target PDFs here]

## Setup Tasks
- [ ] Verify Directory Structure
- [ ] Verify Core Files
- [ ] Install Python Dependencies
- [ ] Configure ChromeDriver

## Standard Steps Template (Copy for each paper below)

**X. [Input PDF Filename] -> [Output HTML Filename]**
- [ ] Step 1: PDF to MMD Conversion ([Output MMD Filename])
- [ ] Step 2: Create Clean HTML Template ([Output HTML Filename])
- [ ] Step 3: Update Header
- [ ] Step 4: Populate Main Content (Instructions & Questions)
    - [ ] Step 4.1: Download Figures/Images (if any)
- [ ] Step 4b: Add Answers (Mandatory)
- [ ] Step 5: Embed Sidebar
- [ ] Step 6: Update Navigation Links
- [ ] Step 7: Verify Links (Cross-check all existing HTML files)
- [ ] Step 8: Format Special Content (if not handled in Step 4/4b)
- [ ] Step 9: Run Automated Verification
- [ ] Step 10: Final Review & Browser Test
- [ ] Step 11: Update/Create index.html

**Status: PENDING**

## Conversion Status

[copy the template above for each paper and update as you progress]
```

### Updating the Conversion Plan

1. **Use standard markings**: 
   - `[ ]` - Task pending
   - `[X]` - Task completed
   - `[S]` - Task skipped (with note explaining why)
   - `[N/A]` - Task not applicable

2. **Status indicators**:
   - `PENDING` - Not started or in early stages
   - `IN PROGRESS` - Some steps completed
   - `COMPLETED` - All steps finished
   - `FAILED` - Conversion failed (with notes)

3. **Example Update Process**:
   ```
   **2. 2023j.pdf -> 2023j.html**
   - [X] Step 1: PDF to MMD Conversion (2023j.mmd)
   - [X] Step 2: Create Clean HTML Template (2023j.html)
   - [X] Step 3: Update Header
   - [X] Step 4: Populate Main Content (Instructions & Questions)
       - [X] Step 4.1: Download Figures/Images (3 images downloaded)
   - [X] Step 4b: Add Answers (Mandatory)
   - [X] Step 5: Embed Sidebar
   - [X] Step 6: Update Navigation Links
   - [X] Step 7: Verify Links
   - [X] Step 8: Format Special Content (Math equations fixed)
   - [X] Step 9: Run Automated Verification (WARN: Small touch targets - fixed)
   - [X] Step 10: Final Review & Browser Test
   - [X] Step 11: Update/Create index.html
   **Status: COMPLETED**
   ```

4. **Adding Notes**: Add specific notes for steps that need explanation:
   ```
   - [X] Step 4.1: Download Figures/Images (7 images, 1 failed - replaced with placeholder)
   - [S] Step 8: Format Special Content (No special content in this paper)
   ```

## 5. Tools and Resources

### Required Tools

1. **PDF to MMD Conversion**:
   - Mathpix OCR Server: `/home/ngobiro/.local/share/Roo-Code/MCP/mathpix-ocr-server/build/index.js`
   - Node.js (for running Mathpix)

2. **HTML Generation**:
   - Text editor with syntax highlighting (VSCode, Sublime Text, etc.)
   - Optional: HTML templating system (for batch processing)

3. **Image Processing**:
   - cURL: For downloading images (`curl -o output.jpg 'image_url'`)
   - ImageMagick: For image optimization (`convert input.jpg -quality 80 -resize 800x output.jpg`)

4. **Verification Tools**:
   - Python with Selenium, BeautifulSoup4
   - ChromeDriver
   - `verify_pastpapers.py` script

5. **Mobile Testing**:
   - Chrome DevTools Device Mode


## 6. File Checklist Before Publishing

- [ ] HTML file contains viewport meta tag
- [ ] Mobile stylesheet is linked
- [ ] Mobile navigation toggle is present
- [ ] Tables have responsive containers and data-labels
- [ ] Images have explicit width/height and alt text
- [ ] Equations are properly contained
- [ ] Touch targets are at least 44×44px
- [ ] Back-to-top button is present
- [ ] All links are functional
- [ ] All answers are complete
- [ ] Sidebar navigation is up-to-date
- [ ] Tested on multiple screen sizes
- [ ] Conversion plan updated with completed status