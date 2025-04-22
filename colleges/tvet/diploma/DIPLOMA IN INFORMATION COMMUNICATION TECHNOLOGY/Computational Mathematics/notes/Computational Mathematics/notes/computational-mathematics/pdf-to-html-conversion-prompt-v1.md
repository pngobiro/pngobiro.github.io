# PDF to HTML Conversion System Prompt

## Core Mission
Convert PDF documents into visually engaging, pedagogically effective HTML pages with **100% verbatim content preservation**. Create highly appealing learning materials while maintaining absolute fidelity to the original text content.

## Conversion Workflow Overview

1. **Planning & Setup**: Create conversion plan, prepare environment, gather resources
2. **Content Chunking**: Divide content into strictly enforced small sections (~250 lines maximum)
3. **Initial Extraction**: Convert PDF to intermediate format (MMD) using Mathpix
4. **HTML Templating**: Set up base HTML structure with proper semantic elements
5. **Content Transfer**: Move content from MMD to HTML with proper formatting
6. **Visual Enhancement**: Apply styling while maintaining content integrity
7. **Resource Handling**: Extract and organize images and other media
8. **Verification**: Validate content preservation and proper formatting
9. **Finalization**: Link pages, test navigation, and review final output

## Content Chunking Strategy

1. **Enforce strict chunking at logical section breaks**:
   - Maximum 250 lines per HTML file (STRICT REQUIREMENT)
   - Use natural boundaries (chapters, major headings) whenever possible
   - NEVER exceed 300 lines per file under any circumstances
   - Insert manual breaks if a section would exceed the limit
   - Never split in the middle of a paragraph, table, or other logical unit

2. **Mandatory chunking implementation**:
   ```python
   # Pseudocode for enforced chunking - MUST be implemented
   current_line_count = 0
   current_chunk_content = []
   chunks = []

   for line in content:
       current_line_count += 1
       current_chunk_content.append(line)

       # Force chunk break at 250 lines or logical break after 200 lines
       if (is_section_break(line) and current_line_count >= 200) or current_line_count >= 250:
           chunks.append("\n".join(current_chunk_content))
           current_chunk_content = []
           current_line_count = 0

   # Add any remaining content as final chunk
   if current_chunk_content:
       chunks.append("\n".join(current_chunk_content))
   ```

3. **Naming convention for chunks**:
   - For chapters: `chapter-[number].html`
   - For sections within chapters: `chapter-[number]-section-[number].html`
   - For subsections requiring multiple files: `chapter-[number]-section-[number]-part-[number].html`
   - For appendices or special content: `appendix-[letter].html`

4. **Chunk verification requirement**:
   - After generating each HTML file, count lines
   - If line count exceeds 300, split the file further
   - Document all chunk decisions in conversion log

5. **Chunk navigation implementation**:
   - Each chunk must include navigation to previous/next chunk
   - Maintain table of contents linking to all chunks
   - Include breadcrumb navigation showing current location in document

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
- **ALLOWED**: Enhanced visual presentation with cards, icons, and modern styling (following the design system)
- **ALLOWED**: Adding "Key Points" sections at the end of each topic **IF they contain only verbatim text extracted from that topic**
- **ALLOWED**: Visual hierarchy improvements that make content more scannable (following the design system)
- **ALLOWED**: Interactive elements that present the original content in engaging ways
- **ALLOWED**: Color-coding, icons, and visual indicators that highlight important content without changing it (following the design system)

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
Only after verifying 100% content preservation, apply engaging visual improvements using our standardized design system:

1.  **Reference Design Documentation**:
    *   `layout-design-instructions.md` - For HTML structure and component patterns
    *   `css-styling-instructions.md` - For complete styling guidelines including:
        *   Navigation colors (Table of Contents: Blue #2980b9, Previous: Orange #e67e22, Next: Green #27ae60)
        *   Responsive breakpoints (768px and 480px)
        *   Typography hierarchy
        *   Component patterns

2.  **Apply Standard Visual Enhancements (as guided by documentation)**:
    *   Add rich CSS styling to headings and paragraphs
    *   Apply card-based layouts to existing content
    *   Enhance list styling with icons and visual markers
    *   Add visual dividers, spacing, and color coding
    *   Include appropriate icons next to original headings
    *   Create visually distinct sections for important concepts
    *   Use background colors and borders to highlight key information
    *   Implement engaging typography that improves readability
    *   Add subtle animations or hover effects if appropriate
    *   Ensure responsive layouts at all breakpoints

## Directory Structure and File Organization

### Project Directory Structure
```
course_name/
├── index.html                               # Course overview
├── topics/                                  # Topic files
│   ├── chapter-1.html                       # Chapter 1 (if small enough)
│   ├── chapter-2-section-1.html             # Chapter 2 Section 1
│   ├── chapter-2-section-2.html             # Chapter 2 Section 2
│   ├── chapter-3-section-1-part-1.html      # Chapter 3 Section 1 Part 1
│   └── chapter-3-section-1-part-2.html      # Chapter 3 Section 1 Part 2
├── assets/                                  # Media files
│   ├── images/                              # For raster images (JPG, PNG)
│   │   ├── chapter1-image1.png
│   │   └── chapter2-image2.jpg
│   └── diagrams/                            # For vector graphics (SVG)
│       └── diagram1.svg
├── styles/                                  # CSS files
│   └── main.css                             # External stylesheet
└── js/                                      # JavaScript files
    └── navigation.js                        # Navigation script
```

### Image Handling
1. All images must be properly extracted and stored in appropriate folders
2. Use a consistent naming convention for images:
   - All lowercase letters
   - Words separated by hyphens
   - Include chapter/section number prefix
   - Be descriptive but concise
   - Example: `chapter3-data-types-diagram.png`
3. All image references in HTML must use relative paths:
   - For raster images: `../assets/images/filename.jpg`
   - For vector graphics: `../assets/diagrams/filename.svg`
4. All images must include proper alt text describing the content

## Targeted Content Updates with apply_diff

1. **Section Marking**: Surround each major content section with unique HTML comment markers:
   ```html
   <!-- START: section-name -->
   <section class="content-section" id="section-name">
       <!-- Section content here -->
   </section>
   <!-- END: section-name -->
   ```

2. **Section Naming Convention**:
   - Use descriptive names that match the content's function
   - Include chapter and section numbers for clear identification
   - Examples: `chapter-1-introduction`, `chapter-3-binary-trees`

3. **Implementation Rules**:
   - Never nest marker sections - each should be at the same hierarchy level
   - Keep marker names consistent across all files
   - Ensure each section has a unique ID attribute matching its marker name

4. **Update Process**:
   - Target specific sections rather than entire documents
   - Apply changes only between markers
   - Preserve surrounding structure and formatting
   - Validate changes against original content after each update

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
                    <a href="previous-chunk.html" class="nav-button">
                        <span class="nav-icon">←</span>
                        <span class="nav-text">Previous Section</span>
                    </a>
                    <div class="document-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 30%;"></div>
                        </div>
                        <span class="progress-text">Section X of Y</span>
                    </div>
                    <a href="next-chunk.html" class="nav-button">
                        <span class="nav-text">Next Section</span>
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
<!-- START: chapter-1-introduction -->
<section id="chapter-1-introduction" class="content-section">
    <h2 class="section-heading">
        <span class="heading-icon">📊</span>
        <span class="heading-text">[EXACT HEADING TEXT]</span>
    </h2>
    <div class="content-card">
        <p>[EXACT PARAGRAPH TEXT]</p>
        <!-- ... more content ... -->
    </div>
</section>
<!-- END: chapter-1-introduction -->
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

## Mathematics Content Handling

### MathJax Configuration
For mathematical equations, use MathJax with the following configuration:

```html
<head>
    <!-- Other head elements -->
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
```

### Inline Equations
```html
<p>The equation <span class="math-inline">$x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}$</span> is the quadratic formula.</p>
```

### Display Equations
```html
<div class="equation">
    $$x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}$$
</div>
```

### Mathematical Tables
```html
<div class="table-container math-table">
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

## Progress Tracking and Verification

### Conversion Status Document
Create a JSON file `conversion-status.json` to track progress:

```json
{
  "title": "Course Name",
  "totalChunks": 24,
  "lastUpdated": "2023-10-15",
  "chunks": [
    {
      "id": "chapter-1",
      "title": "Chapter 1: Introduction",
      "status": "Completed",
      "lineCount": 240,
      "wordCount": {
        "original": 1250,
        "converted": 1250
      },
      "verified": true,
      "notes": "All equations properly rendered"
    },
    {
      "id": "chapter-2-section-1",
      "title": "Chapter 2: Section 1",
      "status": "In Progress",
      "lineCount": 220,
      "wordCount": {
        "original": 980,
        "converted": 980
      },
      "verified": false,
      "notes": "Tables need alignment verification"
    }
  ]
}
```

### Verification Checklist
For each section/page, verify:
- [ ] Content matches source exactly
- [ ] No added/modified content
- [ ] Only HTML/CSS structural changes
- [ ] Original text preserved verbatim
- [ ] All sections and headings preserved
- [ ] Lists have same number of items as original
- [ ] Any "Key Points" use only verbatim text from original
- [ ] All navigation links function correctly
- [ ] All mathematics renders correctly with MathJax
- [ ] Visual styling enhances but does not alter content
- [ ] Reading order matches the original document
- [ ] All images properly extracted and referenced
- [ ] Code blocks maintain original formatting
- [ ] Tables preserve all rows, columns, and cell content
- [ ] Line count is below 300 lines

### Automated Verification
Use the verification script to automate quality checks:

```bash
# Install verification dependencies
pip install -r verification-requirements.txt

# Run verification on a single file
python verify_html.py topics/chapter-1.html

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
- **Line count** to ensure chunk size limits are enforced

### Line-by-Line Verification
After HTML implementation, perform a thorough verification:

1. Have both source document and HTML visible side-by-side
2. Check each line of text for exact verbatim reproduction
3. Verify all headings match exactly
4. Confirm all paragraphs are included in full
5. Check that lists have the same number of items with exact text
6. Verify no content has been omitted or altered

## Mathpix OCR for Content Extraction

### Step 1: PDF to MMD Conversion
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
   curl -o assets/images/chapter1-figure1.jpg "https://cdn.mathpix.com/..."
   ```
   - Update HTML references to use local paths

3. **Equations**:
   - MMD preserves LaTeX syntax which works directly with MathJax
   - Inline equations are formatted as `$...$`
   - Display equations are formatted as `$$...$$`

## Detailed Conversion Plan Template

### Creating a Conversion Plan Document
Create a `conversion_plan.txt` file in your project root with these sections:

1. **Project Information**:
   ```
   Project Name: [NAME]
   Original PDF: [FILENAME.pdf]
   Target Completion: [DATE]
   Total Content Size: [NUMBER OF PAGES]
   Estimated Chunks: [NUMBER OF HTML FILES]
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

   Chunking Plan:
   - index.html (Table of Contents)
   - topics/chapter-1.html (~250 lines, pages 1-8)
   - topics/chapter-1-section-2.html (~250 lines, pages 9-15)
   - topics/chapter-2-section-1.html (~230 lines, pages 16-20)
   - topics/chapter-2-section-2.html (~240 lines, pages 21-25)
   - topics/chapter-2-section-3.html (~240 lines, pages 26-31)
   - topics/chapter-2-section-4.html (~240 lines, pages 32-38)
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

4. **Chunk-by-Chunk Tracking**:
   ```
   # Chunk 1: Chapter 1
   Pages: XX-YY
   HTML File: topics/chapter-1.html
   Line Count: 235
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

   ## Sections
   - Section 1.1: [TITLE]
     - Lines: XXX-YYY
     - Status: [NOT STARTED | IN PROGRESS | COMPLETED]
     - Special elements: [LIST]
     - Notes: [ANY SPECIFIC CHALLENGES OR CONSIDERATIONS]

   - Section 1.2: [TITLE]
     - Lines: XXX-YYY
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
   [ ] Line count confirmed below 300
   ```

5. **Repeat Section 4 for Each Chunk**

6. **Cross-Chunk Navigation Planning**:
   ```
   Navigation Structure:
   - Previous/Next Chunk links
   - Chunk to Section relationships
   - Breadcrumb navigation structure

   Cross-References:
   - From Chapter 2.3 to Chapter 1.5 (Page X: "See section 1.5")
   - From Chapter 3.1 to Chapter 4.2 (Page Y: "Further details in section 4.2")
   ```

7. **Issues & Resolutions Log**:
   ```
   - [CHUNK/SECTION] [DESCRIPTION] - [STATUS]
   - Chapter 2 Section 1: Complex equation on page 42 not rendering correctly - RESOLVED (Added custom MathJax configuration)
   - Chapter 3 Section 4: Missing figure reference on page 78 - PENDING (Awaiting clarification from source document)
   ```

8. **Conversion Milestone Tracking**:
   ```
   [ ] Initial Setup & Planning
       Completed: [DATE]

   [ ] Document Analysis & Structure Mapping
       Completed: [DATE]

   [ ] Base HTML Templates Created
       Completed: [DATE]

   [ ] Main Content Extraction (Chunk by Chunk)
       [ ] Chunk 1 Completed: [DATE]
       [ ] Chunk 2 Completed: [DATE]
       [ ] Chunk 3 Completed: [DATE]
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
- Track progress by chunk to maintain momentum
- Log any content that requires manual handling
- Document any deviations from standard process
- Update status of each chunk and section as you progress

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
6. **Chunk Management**: All chunks are properly linked and navigationally sound
7. **Line Count Verification**: No HTML file exceeds 300 lines

If you find ANY content that has been modified, rewritten, or omitted, fix it immediately to match the original source verbatim.

---

# Appendix A: Layout and Design Instructions

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

---

# Appendix B: CSS Styling Instructions

This document provides the complete CSS structure for educational content websites with responsive design and consistent styling.

## Base Variables and Setup
```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #34495e;
    --accent-color: #3498db;
    --background-color: #f5f6fa;
    --text-color: #2c3e50;
    --border-color: #dcdde1;
    --font-family: 'Inter', system-ui, -apple-system, sans-serif;
}

body {
    font-family: var(--font-family);
    line-height: 1.6;
    color: var(--text-color);
    background-color: var(--background-color);
    margin: 0;
    padding: 0;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}
```

## Navigation Styling
```css
/* Navigation container */
.document-nav {
    margin: 2rem 0;
}

.nav-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
}

/* Navigation buttons with distinct colors */
.nav-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    text-decoration: none;
    background: white;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    transition: all 0.2s ease;
    white-space: nowrap;
}

/* Table of Contents link */
.nav-button[href*="index.html"] {
    color: #2980b9;
    border-color: #2980b9;
}

.nav-button[href*="index.html"]:hover {
    background: #eef7fc;
}

/* Previous Section link */
.nav-links .nav-button:nth-child(2) {
    color: #e67e22;
    border-color: #e67e22;
}

.nav-links .nav-button:nth-child(2):hover {
    background: #fef5ec;
}

/* Next Section link */
.nav-links .nav-button:last-child {
    color: #27ae60;
    border-color: #27ae60;
}

.nav-links .nav-button:last-child:hover {
    background: #eefaf3;
}

/* Disabled states */
.nav-button.disabled {
    cursor: not-allowed;
    opacity: 0.7;
}

.nav-button.disabled[href="#"] {
    opacity: 0.7;
    background: #fafafa;
}
```

## Table of Contents Styling
```css
.toc-container {
    max-width: 800px;
    margin: 40px auto;
    padding: 30px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.toc-header {
    text-align: center;
    margin-bottom: 30px;
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 20px;
}

.toc-title {
    font-size: 2.5em;
    color: #2c3e50;
    font-weight: 700;
    margin-bottom: 10px;
}

.toc-subtitle {
    font-size: 1.2em;
    color: #7f8c8d;
}

.toc-list {
    list-style: none;
    padding: 0;
}

.toc-chapter {
    margin-bottom: 25px;
    border-left: 3px solid #3498db;
    padding-left: 15px;
}

.toc-chapter-title {
    font-size: 1.6em;
    font-weight: 600;
    color: #3498db;
    margin-bottom: 10px;
}

.toc-link {
    text-decoration: none;
    color: #2980b9;
    font-size: 1.1em;
    transition: color 0.3s ease, padding-left 0.3s ease;
    display: block;
    padding: 5px 0;
}

.toc-link:hover {
    color: #1abc9c;
    padding-left: 5px;
}

.toc-link::before {
    content: '➔ ';
    color: #bdc3c7;
    margin-right: 8px;
    font-size: 0.9em;
}
```

## Content Styling
```css
/* Content sections */
.content-section {
    background: white;
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 2rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.content-card {
    padding: 1rem;
}

/* Headings */
.section-heading {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
    color: var(--primary-color);
    font-size: 1.5rem;
}

.subsection-heading {
    color: var(--secondary-color);
    font-size: 1.25rem;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
}

/* Tables */
.table-container {
    margin: 1.5rem 0;
    overflow-x: auto;
}

.content-table {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;
    background: white;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.content-table th,
.content-table td {
    padding: 0.75rem 1rem;
    border: 1px solid var(--border-color);
    text-align: left;
}

.content-table th {
    background-color: #f8f9fa;
    font-weight: 600;
}

/* Mathematical expressions */
.math-inline {
    font-family: 'Times New Roman', serif;
    padding: 0 0.2em;
}

.equation {
    font-family: 'Times New Roman', serif;
    margin: 1.5rem 0;
    text-align: center;
    overflow-x: auto;
    padding: 0.5rem;
}

.math-inline sup,
.equation sup {
    font-size: 0.75em;
    position: relative;
    top: -0.5em;
}

.math-inline sub,
.equation sub {
    font-size: 0.75em;
    position: relative;
    bottom: -0.25em;
}
```

## Lists and Images
```css
/* Enhanced lists */
.enhanced-list {
    list-style: none;
    padding: 0;
}

.list-item {
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
}

.item-icon {
    color: var(--accent-color);
}

/* Images */
img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
    margin: 1rem 0;
}
```

## Responsive Design
```css
@media (max-width: 768px) {
    .container {
        padding: 1rem;
    }

    .toc-container {
        margin: 20px;
        padding: 20px;
    }

    .toc-title {
        font-size: 2em;
    }

    .nav-links {
        flex-direction: column;
        align-items: stretch;
    }

    .nav-button {
        justify-content: center;
    }

    .content-table {
        font-size: 0.9em;
    }

    .content-table th,
    .content-table td {
        padding: 0.5rem;
    }
}

@media (max-width: 480px) {
    .toc-title {
        font-size: 1.8em;
    }

    .toc-chapter-title {
        font-size: 1.2em;
    }

    .section-heading {
        font-size: 1.3rem;
    }

    .subsection-heading {
        font-size: 1.1rem;
    }
}
```

## Usage Notes

1. Import the CSS in your HTML:
```html
<link rel="stylesheet" href="path/to/main.css">
```

2. Import the Inter font from Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

3. For mathematical content, ensure you include MathJax:
```html
<script>
MathJax = {
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']],
        processEscapes: true,
        processEnvironments: true
    }
};
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
```

## Maintenance Tips

1. Use CSS variables (defined in :root) for consistent colors and styling
2. Keep responsive breakpoints consistent (768px and 480px)
3. Test navigation on both desktop and mobile views
4. Ensure table content is scrollable on mobile devices
5. Maintain proper contrast ratios for accessibility
6. Use semantic class names for better maintainability

## Browser Support

This CSS uses modern features that work in all modern browsers:
- Flexbox for layout
- CSS Variables
- Media queries
- CSS transitions

For older browsers, consider adding appropriate vendor prefixes or fallbacks.
