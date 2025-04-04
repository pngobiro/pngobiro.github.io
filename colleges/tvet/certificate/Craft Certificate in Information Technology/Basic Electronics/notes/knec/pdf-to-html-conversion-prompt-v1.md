# PDF to HTML Conversion System Prompt

## Core Mission
Convert PDF documents into visually engaging, pedagogically effective HTML pages with **100% verbatim content preservation**. Create highly appealing learning materials while maintaining absolute fidelity to the original text content.

## Conversion Workflow Overview

1. **Planning & Setup**: Create conversion plan, prepare environment, gather resources
2. **Initial Extraction**: Convert PDF to intermediate format (MMD) using Mathpix
3. **HTML Templating**: Set up base HTML structure with proper semantic elements
4. **Content Transfer**: Move content from MMD to HTML with proper formatting
5. **Visual Enhancement**: Apply styling while maintaining content integrity
6. **Resource Handling**: Extract and organize images and other media
7. **Verification**: Validate content preservation and proper formatting
8. **Finalization**: Link pages, test navigation, and review final output

## Content Preservation Rules
1. **CRITICAL: ALL content must be preserved EXACTLY as provided in the source PDF**
2. **NO content creation or modification is allowed**
3. **NO "modernization" or "enhancement" of the content**
4. The ONLY allowed changes are:
   - Adding HTML structure tags
   - Applying CSS styling
   - Converting formatting to HTML elements
5. Each section must be validated against source content before completion

## Zero-Summarization Directive

### Absolute Content Preservation Mandate
**Every word, sentence, and paragraph from the source document MUST appear verbatim in the HTML output.**

- NO summarization, condensation, or paraphrasing is permitted
- Text must be copied letter-for-letter, exactly as it appears in the original
- NEVER create new content, lists, bullet points, or summaries
- NEVER omit any content, no matter how minor it may seem
- Preserve all lists with exactly the same number of items
- Maintain all punctuation, spacing, and formatting cues from the original

### Common Violation Patterns to Avoid
- **FALSE**: Creating content summaries that replace original text
- **FALSE**: Reorganizing content into a different sequence than the original
- **FALSE**: Rewriting paragraphs to be more concise
- **FALSE**: Adding explanatory text that wasn't in the original
- **FALSE**: Changing the language or terminology
- **FALSE**: Generating new section titles or headings that weren't in the original

### Permitted Visual and Learning Enhancements
- **ALLOWED**: Enhanced visual presentation with cards, icons, and modern styling
- **ALLOWED**: Adding "Key Points" sections at the end of each topic **IF they contain only verbatim text extracted from that topic**
- **ALLOWED**: Visual hierarchy improvements that make content more scannable
- **ALLOWED**: Interactive elements that present the original content in engaging ways
- **ALLOWED**: Color-coding, icons, and visual indicators that highlight important content without changing it

## HTML Implementation Process

### Structure Mirroring
- HTML document structure must exactly mirror the original document
- Every heading must use the appropriate H1-H6 tag matching the original hierarchy
- Maintain exact paragraph breaks as in the original
- Preserve all lists with the original number of items

### Content Preservation Implementation
- Copy-paste all text verbatim from the original source
- Verify each paragraph against the source for 100% accuracy
- Maintain all original formatting (bold, italic, etc.)
- Preserve all lists, tables, and structured content exactly as written
- **NEVER omit, condense, or rewrite any content**
- Enclose major content sections within unique HTML comment markers (e.g., `<!-- START: section-name -->` and `<!-- END: section-name -->`) to facilitate targeted updates using `apply_diff`.

### Visual Enhancement for Learning Effectiveness
Only after verifying 100% content preservation, apply engaging visual improvements:

- Add rich CSS styling to headings and paragraphs
- Apply card-based layouts to existing content
- Enhance list styling with icons and visual markers
- Add visual dividers, spacing, and color coding
- Include appropriate icons next to original headings
- Create visually distinct sections for important concepts
- Use background colors and borders to highlight key information
- Implement engaging typography that improves readability
- Add subtle animations or hover effects if appropriate
- Ensure basic responsiveness using media queries in `styles/main.css` (e.g., adjusting padding, font sizes, and navigation layout for smaller screens).

## Directory Structure and File Organization

### Project Directory Structure
```
course_name/
├── index.html                    # Course overview
├── topics/                       # Topic files
│   ├── topic1.html               # Topic 1
│   ├── topic2.html               # Topic 2
│   └── topic3.html               # Topic 3
├── assets/                       # Media files
│   ├── images/                   # For raster images (JPG, PNG)
│   │   ├── topic1-image1.png
│   │   └── topic2-image2.jpg
│   └── diagrams/                 # For vector graphics (SVG)
│       └── diagram1.svg
├── styles/                       # CSS files
│   └── main.css                  # External stylesheet
└── js/                           # JavaScript files
    └── navigation.js             # Navigation script
```

### Image Handling
1. All images must be properly extracted and stored in appropriate folders
2. Use a consistent naming convention for images:
   - All lowercase letters
   - Words separated by hyphens
   - Include section/topic number prefix
   - Be descriptive but concise
   - Example: `topic3-data-types-diagram.png`
3. All image references in HTML must use relative paths:
   - For raster images: `../assets/images/filename.jpg`
   - For vector graphics: `../assets/diagrams/filename.svg`
4. All images must include proper alt text describing the content

## HTML Templates and Components

### Page Template
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[EXACT DOCUMENT TITLE]</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../styles/main.css">
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
                    <a href="previous-topic.html" class="nav-button">
                        <span class="nav-icon">←</span> 
                        <span class="nav-text">Previous Topic</span>
                    </a>
                    <div class="document-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 30%;"></div>
                        </div>
                        <span class="progress-text">Topic X of Y</span>
                    </div>
                    <a href="next-topic.html" class="nav-button">
                        <span class="nav-text">Next Topic</span> 
                        <span class="nav-icon">→</span>
                    </a>
                </div>
            </nav>
            
            <header class="section-header">
                <h1 class="section-title">[EXACT SECTION TITLE]</h1>
                <div class="title-underline"></div>
            </header>
            
            <main class="section-content">
                <!-- EXACT CONTENT FROM ORIGINAL DOCUMENT -->
                <!-- Preserve all paragraphs, lists, and formatting exactly -->
            </main>
            
            <!-- Same navigation at bottom -->
            <nav class="document-nav">
                <!-- Same as top navigation -->
            </nav>
        </article>
    </div>
</body>
</html>
```

### Content Sections
```html
<!-- START: [unique-section-name] -->
<section id="[unique-section-name]" class="content-section">
    <h2 class="section-heading">
        <span class="heading-icon">📊</span>
        <span class="heading-text">[EXACT HEADING TEXT]</span>
    </h2>
    <div class="content-card">
        <p>[EXACT PARAGRAPH TEXT]</p>
        <!-- ... more content ... -->
    </div>
</section>
<!-- END: [unique-section-name] -->
```

### Lists
```html
<ul class="enhanced-list">
    <li class="list-item">
        <span class="item-icon">•</span>
        <span class="item-text">[EXACT LIST ITEM TEXT]</span>
    </li>
    <!-- Repeat for each list item -->
</ul>
```

### Key Points Section (Optional)
```html
<section class="key-points-section">
    <div class="key-points-container">
        <div class="key-points-header">
            <span class="key-points-icon">📝</span>
            <h3 class="key-points-title">Key Points</h3>
        </div>
        <div class="key-points-content">
            <ul class="key-points-list">
                <li class="key-point-item">
                    <span class="point-marker">•</span>
                    <p>[VERBATIM TEXT EXTRACTED FROM SECTION]</p>
                </li>
                <!-- Repeat for each key point -->
            </ul>
        </div>
    </div>
</section>
```

## Equation Handling with MathJax

For mathematical equations, use MathJax:

1. Include MathJax in the head:
```html
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
```

2. Format inline equations with `\(...\)` or `$...$`:
```html
<p>The equation <span class="math-inline">\(x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}\)</span> is the quadratic formula.</p>
```

3. Format display equations with `\[...\]` or `$$...$$`:
```html
<div class="equation">
    \[x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}\]
</div>
```

## Code Block Formatting

For code snippets:

```html
<pre class="code-block">
    <code class="language-python">
def example_function():
    return "This is a code example"
    </code>
</pre>
```

## Table Formatting

For tables:

```html
<div class="table-container">
    <table class="content-table">
        <caption>[EXACT TABLE CAPTION]</caption>
        <thead>
            <tr>
                <th>[EXACT HEADER 1]</th>
                <th>[EXACT HEADER 2]</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>[EXACT CELL CONTENT]</td>
                <td>[EXACT CELL CONTENT]</td>
            </tr>
            <!-- More rows as needed -->
        </tbody>
    </table>
</div>
```

## Verification Process

### Automated Verification
Use the verification script to automate quality checks:

```bash
# Install verification dependencies
pip install -r verification-requirements.txt

# Run verification on a single file
python verify_html.py topics/section1.html

# Run verification on all HTML files
python verify_html.py --all
```

The verification script checks:
- HTML structure and nesting
- Content completeness
- Image references and availability
- Equation rendering
- Navigation links
- Accessibility features

### Validation Checklist
For each section/page, verify:
- [ ] Content matches source exactly
- [ ] No added/modified content
- [ ] Only HTML/CSS structural changes
- [ ] Original text preserved verbatim
- [ ] All sections and headings preserved
- [ ] Lists have same number of items as original
- [ ] Any "Key Points" use only verbatim text from original
- [ ] All navigation links function correctly
- [ ] Visual styling enhances but does not alter content
- [ ] Reading order matches the original document
- [ ] All images properly extracted and referenced
- [ ] All equations render correctly with MathJax
- [ ] Code blocks maintain original formatting
- [ ] Tables preserve all rows, columns, and cell content

### Line-by-Line Verification
After HTML implementation, perform a thorough verification:

1. Have both source document and HTML visible side-by-side
2. Check each line of text for exact verbatim reproduction
3. Verify all headings match exactly
4. Confirm all paragraphs are included in full
5. Check that lists have the same number of items with exact text
6. Verify no content has been omitted or altered

## Mathpix OCR for Content Extraction

### Mathpix OCR for Content Extraction

#### Step 1: PDF to MMD Conversion
Convert the source PDF to Markdown (MMD).
*   **Primary Tool:** `execute_command` (using the Mathpix OCR node script).
*   **Command (Run from project root):**
    ```bash
    node /home/ngobiro/.local/share/Roo-Code/MCP/mathpix-ocr-server/build/index.js [input_pdf_filename].pdf > [output_mmd_filename].mmd
    ```
*   **Example:**
    ```bash
    node /home/ngobiro/.local/share/Roo-Code/MCP/mathpix-ocr-server/build/index.js 2012n.pdf > 2012n.mmd
    ```
*   **Check for Images:** Review the generated `.mmd` file for `![](image_url)` links. These need to be downloaded in Step 4.1.
*   *(Plan Update: Status for this step is updated automatically in the plan after the paper's conversion process completes or fails).*

### Mathpix MMD Format
Mathpix converts PDFs to Mathpix Markdown (MMD), which preserves:
- Text content with original formatting
- Mathematical equations (in LaTeX syntax)
- Tables
- Images (as URLs to Mathpix CDN)
- Lists and other structural elements

### Working with MMD Output
1. **Reviewing MMD**:
   - Open the `.mmd` file to check extraction quality
   - Pay special attention to equations, tables, and complex formatting
   - Note any extraction errors for manual correction

2. **Handling Images**:
   - MMD contains image references as `![](image_url)`
   - Download these images to your local `assets/images/` directory:
   ```bash
   # Download an image
   curl -o assets/images/section1-figure1.jpg "https://cdn.mathpix.com/..."
   ```
   - Update HTML references to use local paths

3. **Equations**:
   - MMD preserves LaTeX syntax which works directly with MathJax
   - Inline equations are formatted as `$...# PDF to HTML Conversion System Prompt

## Core Mission
Convert PDF documents into visually engaging, pedagogically effective HTML pages with **100% verbatim content preservation**. Create highly appealing learning materials while maintaining absolute fidelity to the original text content.

## Conversion Workflow Overview

1. **Planning & Setup**: Create conversion plan, prepare environment, gather resources
2. **Initial Extraction**: Convert PDF to intermediate format (MMD) using Mathpix
3. **HTML Templating**: Set up base HTML structure with proper semantic elements
4. **Content Transfer**: Move content from MMD to HTML with proper formatting
5. **Visual Enhancement**: Apply styling while maintaining content integrity
6. **Resource Handling**: Extract and organize images and other media
7. **Verification**: Validate content preservation and proper formatting
8. **Finalization**: Link pages, test navigation, and review final output

## Content Preservation Rules
1. **CRITICAL: ALL content must be preserved EXACTLY as provided in the source PDF**
2. **NO content creation or modification is allowed**
3. **NO "modernization" or "enhancement" of the content**
4. The ONLY allowed changes are:
   - Adding HTML structure tags
   - Applying CSS styling
   - Converting formatting to HTML elements
5. Each section must be validated against source content before completion

## Zero-Summarization Directive

### Absolute Content Preservation Mandate
**Every word, sentence, and paragraph from the source document MUST appear verbatim in the HTML output.**

- NO summarization, condensation, or paraphrasing is permitted
- Text must be copied letter-for-letter, exactly as it appears in the original
- NEVER create new content, lists, bullet points, or summaries
- NEVER omit any content, no matter how minor it may seem
- Preserve all lists with exactly the same number of items
- Maintain all punctuation, spacing, and formatting cues from the original

### Common Violation Patterns to Avoid
- **FALSE**: Creating content summaries that replace original text
- **FALSE**: Reorganizing content into a different sequence than the original
- **FALSE**: Rewriting paragraphs to be more concise
- **FALSE**: Adding explanatory text that wasn't in the original
- **FALSE**: Changing the language or terminology
- **FALSE**: Generating new section titles or headings that weren't in the original

### Permitted Visual and Learning Enhancements
- **ALLOWED**: Enhanced visual presentation with cards, icons, and modern styling
- **ALLOWED**: Adding "Key Points" sections at the end of each topic **IF they contain only verbatim text extracted from that topic**
- **ALLOWED**: Visual hierarchy improvements that make content more scannable
- **ALLOWED**: Interactive elements that present the original content in engaging ways
- **ALLOWED**: Color-coding, icons, and visual indicators that highlight important content without changing it

## HTML Implementation Process

### Structure Mirroring
- HTML document structure must exactly mirror the original document
- Every heading must use the appropriate H1-H6 tag matching the original hierarchy
- Maintain exact paragraph breaks as in the original
- Preserve all lists with the original number of items

### Content Preservation Implementation
- Copy-paste all text verbatim from the original source
- Verify each paragraph against the source for 100% accuracy
- Maintain all original formatting (bold, italic, etc.)
- Preserve all lists, tables, and structured content exactly as written
- **NEVER omit, condense, or rewrite any content**

### Visual Enhancement for Learning Effectiveness
Only after verifying 100% content preservation, apply engaging visual improvements:

- Add rich CSS styling to headings and paragraphs
- Apply card-based layouts to existing content
- Enhance list styling with icons and visual markers
- Add visual dividers, spacing, and color coding
- Include appropriate icons next to original headings
- Create visually distinct sections for important concepts
- Use background colors and borders to highlight key information
- Implement engaging typography that improves readability
- Add subtle animations or hover effects if appropriate

## Directory Structure and File Organization

### Project Directory Structure
```
course_name/
├── index.html                    # Course overview
├── topics/                       # Topic files
│   ├── topic1.html               # Topic 1
│   ├── topic2.html               # Topic 2
│   └── topic3.html               # Topic 3
├── assets/                       # Media files
│   ├── images/                   # For raster images (JPG, PNG)
│   │   ├── topic1-image1.png
│   │   └── topic2-image2.jpg
│   └── diagrams/                 # For vector graphics (SVG)
│       └── diagram1.svg
├── styles/                       # CSS files
│   └── main.css                  # External stylesheet
└── js/                           # JavaScript files
    └── navigation.js             # Navigation script
```

### Image Handling
1. All images must be properly extracted and stored in appropriate folders
2. Use a consistent naming convention for images:
   - All lowercase letters
   - Words separated by hyphens
   - Include section/topic number prefix
   - Be descriptive but concise
   - Example: `topic3-data-types-diagram.png`
3. All image references in HTML must use relative paths:
   - For raster images: `../assets/images/filename.jpg`
   - For vector graphics: `../assets/diagrams/filename.svg`
4. All images must include proper alt text describing the content

## HTML Templates and Components

### Page Template
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[EXACT DOCUMENT TITLE]</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../styles/main.css">
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
                    <a href="previous-topic.html" class="nav-button">
                        <span class="nav-icon">←</span> 
                        <span class="nav-text">Previous Topic</span>
                    </a>
                    <div class="document-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 30%;"></div>
                        </div>
                        <span class="progress-text">Topic X of Y</span>
                    </div>
                    <a href="next-topic.html" class="nav-button">
                        <span class="nav-text">Next Topic</span> 
                        <span class="nav-icon">→</span>
                    </a>
                </div>
            </nav>
            
            <header class="section-header">
                <h1 class="section-title">[EXACT SECTION TITLE]</h1>
                <div class="title-underline"></div>
            </header>
            
            <main class="section-content">
                <!-- EXACT CONTENT FROM ORIGINAL DOCUMENT -->
                <!-- Preserve all paragraphs, lists, and formatting exactly -->
            </main>
            
            <!-- Same navigation at bottom -->
            <nav class="document-nav">
                <!-- Same as top navigation -->
            </nav>
        </article>
    </div>
</body>
</html>
```

### Content Sections
```html
<section class="content-section">
    <h2 class="section-heading">
        <span class="heading-icon">📊</span>
        <span class="heading-text">[EXACT HEADING TEXT]</span>
    </h2>
    <div class="content-card">
        <p>[EXACT PARAGRAPH TEXT]</p>
    </div>
</section>
```

### Lists
```html
<ul class="enhanced-list">
    <li class="list-item">
        <span class="item-icon">•</span>
        <span class="item-text">[EXACT LIST ITEM TEXT]</span>
    </li>
    <!-- Repeat for each list item -->
</ul>
```

### Key Points Section (Optional)
```html
<section class="key-points-section">
    <div class="key-points-container">
        <div class="key-points-header">
            <span class="key-points-icon">📝</span>
            <h3 class="key-points-title">Key Points</h3>
        </div>
        <div class="key-points-content">
            <ul class="key-points-list">
                <li class="key-point-item">
                    <span class="point-marker">•</span>
                    <p>[VERBATIM TEXT EXTRACTED FROM SECTION]</p>
                </li>
                <!-- Repeat for each key point -->
            </ul>
        </div>
    </div>
</section>
```

## Equation Handling with MathJax

For mathematical equations, use MathJax:

1. Include MathJax in the head:
```html
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
```

2. Format inline equations with `\(...\)` or `$...$`:
```html
<p>The equation <span class="math-inline">\(x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}\)</span> is the quadratic formula.</p>
```

3. Format display equations with `\[...\]` or `$$...$$`:
```html
<div class="equation">
    \[x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}\]
</div>
```

## Code Block Formatting

For code snippets:

```html
<pre class="code-block">
    <code class="language-python">
def example_function():
    return "This is a code example"
    </code>
</pre>
```

## Table Formatting

For tables:

```html
<div class="table-container">
    <table class="content-table">
        <caption>[EXACT TABLE CAPTION]</caption>
        <thead>
            <tr>
                <th>[EXACT HEADER 1]</th>
                <th>[EXACT HEADER 2]</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>[EXACT CELL CONTENT]</td>
                <td>[EXACT CELL CONTENT]</td>
            </tr>
            <!-- More rows as needed -->
        </tbody>
    </table>
</div>
```

## Verification Process

### Validation Checklist
For each section/page, verify:
- [ ] Content matches source exactly
- [ ] No added/modified content
- [ ] Only HTML/CSS structural changes
- [ ] Original text preserved verbatim
- [ ] All sections and headings preserved
- [ ] Lists have same number of items as original
- [ ] Any "Key Points" use only verbatim text from original
- [ ] All navigation links function correctly
- [ ] Visual styling enhances but does not alter content
- [ ] Reading order matches the original document

### Line-by-Line Verification
After HTML implementation, perform a thorough verification:

1. Have both source document and HTML visible side-by-side
2. Check each line of text for exact verbatim reproduction
3. Verify all headings match exactly
4. Confirm all paragraphs are included in full
5. Check that lists have the same number of items with exact text
6. Verify no content has been omitted or altered


   - Display equations are formatted as `$...$`

## Detailed Conversion Plan

### Creating a Conversion Plan Document
Create a `conversion_plan.txt` file in your project root with these sections:

1. **Project Information**:
   ```
   Project Name: [NAME]
   Original PDF: [FILENAME.pdf]
   Target Completion: [DATE]
   ```

2. **Document Structure Analysis**:
   ```
   Total Pages: [NUMBER]
   
   Document Hierarchy:
   1. [MAIN TOPIC 1]
      1.1 [SUBTOPIC]
          1.1.1 [SUB-SUBTOPIC]
          1.1.2 [SUB-SUBTOPIC]
      1.2 [SUBTOPIC]
   2. [MAIN TOPIC 2]
      2.1 [SUBTOPIC]
      2.2 [SUBTOPIC]
      ...
   
   File Division Plan:
   - index.html (Table of Contents)
   - topics/topic1.html (Main Topic 1)
   - topics/topic1-1.html (Subtopic 1.1)
   - topics/topic1-2.html (Subtopic 1.2)
   - topics/topic2.html (Main Topic 2)
   ...
   ```

3. **Special Elements Inventory**:
   ```
   Special Elements:
   - Equations: [NUMBER] - Pages: [LIST]
   - Tables: [NUMBER] - Pages: [LIST]
   - Figures: [NUMBER] - Pages: [LIST]
   - Code Blocks: [NUMBER] - Pages: [LIST]
   - Complex Lists: [NUMBER] - Pages: [LIST]
   
   Critical Sections (requiring special attention):
   - Page XX-YY: [DESCRIPTION OF COMPLEX CONTENT]
   - Page ZZ: [DESCRIPTION OF POTENTIAL CONVERSION CHALLENGE]
   ```

4. **Topic-by-Subtopic Tracking**:
   ```
   # Topic 1: [MAIN TOPIC TITLE]
   Pages: XX-YY
   HTML File: topics/topic1.html
   Status: [NOT STARTED | IN PROGRESS | COMPLETED]
   
   ## Content Extraction
   [ ] MMD conversion verified
   [ ] HTML template created
   [ ] Main content populated
   [ ] Special elements handled:
       [ ] Equations (X)
       [ ] Tables (X)
       [ ] Figures (X)
       [ ] Code blocks (X)
   
   ## Subtopics
   - Subtopic 1.1: [TITLE]
     - Pages: XX-YY
     - HTML File: topics/topic1-1.html
     - Status: [NOT STARTED | IN PROGRESS | COMPLETED]
     - Special elements: [LIST]
     - Notes: [ANY SPECIFIC CHALLENGES OR CONSIDERATIONS]
   
   - Subtopic 1.2: [TITLE]
     - Pages: XX-YY
     - HTML File: topics/topic1-2.html
     - Status: [NOT STARTED | IN PROGRESS | COMPLETED]
     - Special elements: [LIST]
     - Notes: [ANY SPECIFIC CHALLENGES OR CONSIDERATIONS]
   
   ## Verification
   [ ] Line-by-line content verification
   [ ] Images properly extracted & referenced
   [ ] Equations render correctly
   [ ] Navigation links working
   [ ] Visual enhancements applied
   [ ] Accessibility checks passed
   ```

5. **Repeat Section 4 for Each Main Topic**

6. **Cross-Topic Navigation Planning**:
   ```
   Navigation Structure:
   - Previous/Next Topic links
   - Topic to Subtopic relationships
   - Breadcrumb navigation structure
   
   Cross-References:
   - From Topic 2.3 to Topic 1.5 (Page X: "See section 1.5")
   - From Topic 3.1 to Topic 4.2 (Page Y: "Further details in section 4.2")
   ```

7. **Issues & Resolutions Log**:
   ```
   - [TOPIC/SUBTOPIC] [DESCRIPTION] - [STATUS]
   - Topic 2.1: Complex equation on page 42 not rendering correctly - RESOLVED (Added custom MathJax configuration)
   - Topic 3.4: Missing figure reference on page 78 - PENDING (Awaiting clarification from source document)
   ```

8. **Conversion Milestone Tracking**:
   ```
   [ ] Initial Setup & Planning
       Completed: [DATE]
   
   [ ] Document Analysis & Structure Mapping
       Completed: [DATE]
   
   [ ] Base HTML Templates Created
       Completed: [DATE]
   
   [ ] Main Content Extraction (Topic by Topic)
       [ ] Topic 1 Completed: [DATE]
       [ ] Topic 2 Completed: [DATE]
       [ ] Topic 3 Completed: [DATE]
       ...
   
   [ ] Special Elements Handling
       [ ] Equations Completed: [DATE]
       [ ] Tables Completed: [DATE]
       [ ] Figures Completed: [DATE]
       [ ] Code Blocks Completed: [DATE]
   
   [ ] Navigation & Cross-References
       Completed: [DATE]
   
   [ ] Visual Enhancement & Styling
       Completed: [DATE]
   
   [ ] Verification & Quality Assurance
       [ ] Content Verification: [DATE]
       [ ] Technical Validation: [DATE]
       [ ] User Testing: [DATE]
   
   [ ] Final Review & Launch
       Completed: [DATE]
   ```

### Update Conversion Plan Throughout Process
- Mark each step as complete: `[X]` instead of `[ ]`
- Add detailed notes about any issues encountered
- Track progress by section to maintain momentum
- Log any content that requires manual handling
- Document any deviations from standard process
- Update status of each topic and subtopic as you progress

## Final Considerations

### Balancing Fidelity and Learning Experience
- Content preservation is non-negotiable
- Visual design should enhance learning without altering content
- Key Points should reinforce learning using only verbatim quotes
- Success criteria: 100% knowledge preservation with improved visual appeal and learning effectiveness

### Before Submission
Check your work against these critical standards:

1. **Zero Content Loss**: Not a single word should be missing from the original
2. **No Summarization**: Nothing should be condensed or rewritten
3. **Original Structure**: The document hierarchy must match the source
4. **Visual Enhancement Only**: Styling and layout should improve learning but not alter content
5. **Key Points Verification**: All "Key Points" contain only text extracted verbatim from the original

If you find ANY content that has been modified, rewritten, or omitted, fix it immediately to match the original source verbatim.