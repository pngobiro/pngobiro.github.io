
--- START OF FILE pdf-to-html-conversion-prompt-v4.md ---

# PDF to HTML Conversion System Prompt (v4)

## Core Mission
Convert PDF documents into **visually engaging, accessible, and pedagogically effective** HTML pages while ensuring **100% VERBATIM content preservation**. Create highly appealing and effective learning materials, organized into **logically coherent chunks**, that maintain absolute fidelity to the original text content.

## Conversion Workflow Overview

1.  **Planning & Setup**: Create conversion plan, prepare environment, gather resources.
2.  **Initial Extraction**: Convert PDF to intermediate format (MMD) using Mathpix.
3.  **MMD Review & Correction**: **Manually review the generated MMD file. Correct any obvious OCR errors, especially in tables, complex equations, or code snippets. This step is crucial *before* HTML conversion.**
4.  **Content Chunking**: Divide MMD content into **logically coherent sections** based on document structure (chapters, major sections). Use common sense to avoid overly long or short files.
5.  **HTML Templating**: Set up base HTML structure with proper semantic elements and accessibility features based on the **HTML Layout and Structure** section below.
6.  **Content Transfer**: Move *corrected* content from MMD to HTML chunks with proper semantic markup.
7.  **100% Content Verification**: Validate verbatim content preservation against the *original PDF source* for each chunk.
8.  **Visual Enhancement**: Apply styling and layout enhancements using the **CSS Styling Instructions** section below *only after* content verification.
9.  **Resource Handling**: Extract/download and organize images and other media using correct filenames.
10. **Technical & Accessibility Validation**: Validate HTML, CSS, links, and accessibility standards.
11. **Finalization**: Link pages, test navigation thoroughly, and review final output.

## Content Chunking Strategy

1.  **Chunking based on Logical Structure and Coherence**:
    *   **Primary Goal:** Divide the content into meaningful, self-contained HTML files based on the document's inherent structure.
    *   **Break Points:** Use natural boundaries like **Chapters** or major sections starting with `<h1>` or `<h2>` headings as primary break points.
    *   **File Sizing (Guideline):** Aim for files that are neither excessively long nor trivially short.
        *   **Avoid overly long files:** If a single chapter or major section seems exceptionally long (e.g., spanning many PDF pages or likely exceeding 1000-1500 lines of HTML), consider splitting it at logical sub-section (`<h3>`) breaks. Document the rationale for splitting.
        *   **Avoid overly short files:** If a chapter or major section is very short (e.g., only a couple of paragraphs), consider merging it with the subsequent logical section *if it maintains coherence*. Document the rationale for merging.
        *   **Prioritize Coherence:** The primary driver for chunking is keeping closely related content together within a single file for a good user experience.
    *   **Never split** in the middle of a paragraph, table, list, code block, figure/caption group, or other indivisible logical unit.
    *   Document the start/end points (page numbers, headings) for each chunk in the conversion log.

2.  **Chunking implementation (Conceptual)**:
    *   Iterate through the corrected MMD content.
    *   Identify logical break points (Chapters, `<h1>`, `<h2>`).
    *   Group content between these major breaks.
    *   Assess the resulting group size based on content volume/complexity (not strict lines).
    *   If a group is too large, identify logical sub-breaks (`<h3>`) to split it.
    *   If a group is too small, consider merging it with the next group if appropriate.
    *   Ensure the final break point doesn't interrupt a content element.

3.  **Naming convention for chunks**:
    *   Use clear, descriptive names based on content.
    *   Example for units: `unit-[number].html`
    *   Example for sections within units (if split): `unit-[number]-[section-name].html`
    *   Example for multi-part sections: `unit-[number]-[section-name]-part-[number].html`
    *   Appendices: `appendix-[letter/name].html`

4.  **Chunk verification requirement**:
    *   Verify that chunk breaks occur at logical points in the content.
    *   Verify that no single file feels overwhelmingly long or confusingly short from a user perspective.
    *   Document all chunk decisions and their rationale (e.g., "Split Chapter 8 due to length at Section 8.3", "Merged short Appendix A into Unit 9").

5.  **Chunk navigation implementation**:
    *   **Mandatory:** Each chunk MUST include functional navigation links (`<a>` tags) to the `previous-chunk.html` and `next-chunk.html`. Disable appropriately for first/last chunks.
    *   **Mandatory:** Each chunk MUST include a link back to the main `index.html` (Table of Contents).
    *   **Recommended:** Include breadcrumb navigation showing the user's current location within the document structure (e.g., `Home > Unit 3 > Section 2`).
    *   **Recommended:** Include a progress indicator (e.g., "Unit 3 of 9").

## Content Preservation Rules
1.  **CRITICAL: ALL original pedagogical content must be preserved EXACTLY AS-IS from the source PDF.** This includes text, formulas, data in tables, code snippets, and the *intent* of figures.
2.  **NO content creation, modification, summarization, or rephrasing is allowed.**
3.  **DO NOT "modernize" or "enhance" the *meaning* or *wording* of the content.** Do not fix typos, grammatical errors, or factual inaccuracies present in the original source PDF. Preserve them verbatim.
4.  **The ONLY allowed changes are:**
    *   Adding HTML structural and semantic tags (`<p>`, `<h1>`, `<ul>`, `<li>`, `<table>`, `<code>`, `<section>`, `<article>`, etc.).
    *   Applying CSS styling for visual presentation and layout.
    *   Converting formatting (bold, italic) to HTML elements (`<strong>`, `<em>`).
    *   Adding accessibility attributes (e.g., `alt` text, ARIA roles).
    *   Correcting OCR errors identified during the MMD review phase (Step 3 of Workflow).
5.  Each section must be visually compared line-by-line against the **original PDF source** before applying visual enhancements.

## Zero-Summarization Directive

### Absolute Content Preservation Mandate
**Every word, sentence, paragraph, list item, table cell, and code line from the source document MUST appear VERBATIM in the HTML output.**

*   **NO** summarization, condensation, or paraphrasing is permitted. EVER.
*   Text must be copied letter-for-letter, exactly as it appears in the original PDF (after correcting obvious OCR errors during MMD review).
*   **NEVER** create new textual content, new lists, or new summaries *that replace or alter* the original content.
*   **NEVER** omit any content, no matter how minor it seems.
*   Preserve all lists with exactly the same number of items and identical text.
*   Maintain all original punctuation, spacing cues (like paragraph breaks), and formatting emphasis (bold/italic) from the original PDF.

### Common Violation Patterns to Avoid
*   **FALSE:** Creating bullet points or summaries that *replace* original paragraphs.
*   **FALSE:** Reorganizing content into a different sequence than the original.
*   **FALSE:** Rewriting sentences or paragraphs to be "clearer" or more "concise".
*   **FALSE:** Adding explanatory text *within* the original content flow. (Use callouts/asides for annotations if necessary, clearly distinct from original text).
*   **FALSE:** Changing the language, terminology, or fixing typos/grammar found in the source PDF.
*   **FALSE:** Generating new section titles or headings not present in the original PDF structure.

### Permitted Visual and Learning Enhancements (Post-Content Verification)
*   **ALLOWED:** Enhanced visual presentation using CSS (borders, backgrounds, spacing, typography) based on the **CSS Styling Instructions** section below.
*   **ALLOWED:** Applying structural patterns like cards or sidebars to *existing* content blocks based on the **HTML Layout and Structure** section below.
*   **ALLOWED:** Adding "Key Points" or "Summary" sections at the end of a topic *IF AND ONLY IF* they contain **only verbatim text snippets** extracted directly from that topic's original content.
*   **ALLOWED:** Using icons, color-coding, or visual indicators to highlight important terms or sections *without changing the text*, following the defined CSS styles.
*   **ALLOWED:** Adding interactive elements (like collapsible sections or tooltips for definitions) that reveal or organize the *original* content in a non-linear way, provided the full original content remains accessible.
*   **ALLOWED:** Improving scannability through visual hierarchy (headings, spacing) defined in the CSS.

## Mathpix OCR / MMD Handling

### Step 1: PDF to MMD Conversion
*   Convert the source PDF to Markdown (MMD) using the specified Mathpix tool/script.
*   Command: `node /path/to/mathpix/script.js [input.pdf] > [output.mmd]`
*   Check the MMD for image URLs (`![](mathpix_url)`).

### Step 2: MMD Review and Correction (CRITICAL)
*   **Manually open and review the `.mmd` file.**
*   **Compare carefully against the original PDF.**
*   **Correct OCR Errors:** Fix any garbled text, misidentified characters, or formatting issues introduced during OCR. Pay close attention to:
    *   Mathematical equations (check symbols, variables, structure).
    *   Tables (check cell content, alignment markers).
    *   Code snippets (check indentation, syntax).
    *   Lists and complex layouts.
*   **Do NOT change the original wording or fix source document errors.** Only correct what the OCR process broke.
*   **Mark this step as complete** in the conversion log for each document/chunk.

### Step 3: Handling MMD Output
*   Use the **corrected** MMD file as the source for HTML conversion.
*   **Images:** Identify all `![](image_url)` links. These URLs will be used later to download images. The corresponding local filename structure is defined in the "Image Handling" section.
*   **Equations:** MMD preserves LaTeX (`$...$` or `$$...$$`). This works directly with MathJax in the HTML template. Verify complex equations carefully during MMD review.

## HTML Implementation Process

### Structure Mirroring & Semantics
*   HTML document structure must accurately mirror the original document's logical hierarchy. Use the templates provided in the **HTML Layout and Structure** section.
*   Use appropriate semantic HTML5 elements: `<article>`, `<section>`, `<nav>`, `<header>`, `<footer>`, `<aside>`, `<table>`, `<ul>`, `<ol>`, `<li>`, `<code>`, `<pre>`, `<dfn>`.
*   Every heading must use the appropriate `<h1>`-`<h6>` tag matching the original hierarchy (e.g., PDF Chapter Title -> `<h1>`, Section Heading -> `<h2>`).
*   Maintain exact paragraph breaks (`<p>` tags) as in the original.
*   Preserve all lists (`<ul>`/`<ol>`) with the original number of items (`<li>`).

### Content Preservation Implementation
*   Copy-paste all text **verbatim** from the **corrected MMD source**.
*   Perform a **line-by-line visual comparison** of the generated HTML against the **original PDF source** for 100% accuracy after initial content transfer.
*   Maintain all original formatting emphasis (bold/italic) using `<strong>` and `<em>`.
*   Preserve all tables (`<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`) and code blocks (`<pre><code>`) exactly as written.
*   **NEVER omit, condense, or rewrite any original content.**
*   Enclose major content sections (corresponding to `<h2>` or significant logical blocks) within unique HTML comment markers (`<!-- START: section-name -->` and `<!-- END: section-name -->`) to facilitate targeted updates using `apply_diff`. Ensure the section within the markers has a matching `id` attribute (e.g., `<section id="section-name">`).

### Visual Enhancement for Learning Effectiveness (Apply *after* 100% Content Verification)
Only after verifying verbatim content preservation, apply visual improvements using the **CSS Styling Instructions** defined later in this document:

1.  **Reference CSS Styling Instructions**: Apply classes defined in the CSS section for typography, spacing, colors, components, etc.
2.  **Apply Standard Visual Enhancements**:
    *   Apply CSS classes for typography, spacing, and color.
    *   Use card layouts for distinct content blocks (`<div class="card">...</div>`).
    *   Enhance list styling (`<ul class="enhanced-list">`).
    *   Implement callout boxes (`<aside class="callout note">...</aside>`).
    *   Use definition tags (`<dfn>`) for key terms.
    *   Add visual dividers (`<hr>`).
    *   Ensure code blocks have language classes (`<code class="language-python">`).
    *   Apply styles for visually distinct sections.
    *   Implement responsive table designs if necessary.
    *   Ensure consistent use of iconography (e.g., within `.section-heading`).
    *   Ensure responsiveness across defined breakpoints (e.g., 768px, 480px).

### Accessibility Implementation
*   **Mandatory:** All images (`<img>`) MUST have descriptive `alt` text. Decorative images should have `alt=""`.
*   Use semantic HTML correctly (headings in order, lists for lists, etc.).
*   Ensure sufficient color contrast according to WCAG AA guidelines.
*   Use ARIA roles (`role="navigation"`, `role="main"`, `role="region"`, `aria-labelledby`, etc.) where appropriate to enhance semantic meaning, especially for custom components or complex structures.
*   Ensure keyboard navigability and visible focus indicators for interactive elements.

## Directory Structure and File Organization

### Project Directory Structure
```
course_name/
├── index.html                     # Course overview / Table of Contents
├── conversion_plan.txt            # Conversion planning document
├── [source_file].mmd              # Corrected MMD output from Mathpix OCR
├── topics/                        # HTML content chunks
│   ├── unit-1.html
│   └── ... (etc.)
├── assets/                        # Media files
│   ├── images/                    # All extracted images (JPG, PNG, SVG etc.)
│   │   ├── [ID]g-[PageNum]-[SeqNum].jpg # Corrected Filename
│   │   └── ...
├── styles/                        # CSS files
│   └── main.css                   # Main stylesheet referenced by HTML
└── js/                            # JavaScript files (if any)
    └── navigation.js              # Basic navigation helpers (optional)
```

## Image Handling

1.  **Extraction Source:** Images are identified via `![](image_url)` links in the **reviewed and corrected MMD file**.
2.  **Downloading:** Use `curl` or a script to download each unique image URL found in the MMD file.
3.  **Naming Convention (CRITICAL):** Save images locally using the exact filename derived from the Mathpix URL structure, including a sequence number based on order of appearance for that specific page image:
    *   Format: `[ID]g-[PageNum]-[SeqNum].ext`
    *   Example URL: `https://.../cropped/2025_05_05_fe94132467efe45f3516g-005.jpg?`
    *   If this is the 1st image from `g-005.jpg` in the MMD: `2025_05_05_fe94132467efe45f3516g-005-1.jpg`
    *   If this is the 2nd image from `g-005.jpg` in the MMD: `2025_05_05_fe94132467efe45f3516g-005-2.jpg`
    *   Determine `[SeqNum]` by counting the occurrences of `g-[PageNum].jpg` in the MMD up to that point.
4.  **Storage Location:** Save all downloaded images in the `assets/images/` directory.
5.  **HTML Reference:** All image references in HTML (`<img>` tags) MUST use relative paths pointing to the `assets/images/` directory.
    *   Example: `src="../assets/images/2025_05_05_fe94132467efe45f3516g-005-1.jpg"`
6.  **Alt Text (Mandatory):** Every `<img>` tag MUST have a descriptive `alt` attribute explaining the image content and context. For purely decorative images, use `alt=""`.

## Targeted Content Updates with apply_diff

1.  **Section Marking**: Surround each major logical content section (usually corresponding to `<h2>` blocks or distinct concepts) with unique HTML comment markers:
    ```html
    <!-- START: unit-1-intro -->
    <section class="content-section" id="unit-1-intro" aria-labelledby="unit-1-intro-heading">
        <h2 id="unit-1-intro-heading">Introduction</h2> <!-- Example heading -->
        <!-- Section content here -->
    </section>
    <!-- END: unit-1-intro -->
    ```

2.  **Marker & ID Naming Convention**:
    *   Use descriptive names reflecting the content (e.g., `unit-3-rotational-modelling`, `chapter-5-transient-response`).
    *   Be unique within the entire project scope.
    *   **CRITICAL:** The `id` attribute of the primary element within the markers (e.g., the `<section>`) MUST exactly match the marker name.

3.  **Implementation Rules**:
    *   Markers should not be nested.
    *   Keep marker names consistent if the same logical section appears across multiple files (though this should be rare with proper chunking).
    *   Ensure each marked section has a unique `id` attribute matching its marker name.

4.  **Update Process**:
    *   Use `apply_diff` to target specific sections using these markers for updates.
    *   Apply changes only *between* the `<!-- START: ... -->` and `<!-- END: ... -->` comments.
    *   Validate changes against the original content philosophy after each update.

## HTML Layout and Structure

*(Defines templates and component examples)*

### File Structure Reference
```
project/
├── index.html               # Table of Contents
├── styles/
│   └── main.css            # Shared styles (see CSS section below)
├── js/
│   └── navigation.js       # Basic navigation functionality (optional)
└── topics/
    ├── unit-1.html
    ├── unit-2.html
    └── ...
```

### Index Page (Table of Contents) Template
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[COURSE TITLE HERE]</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles/main.css">
</head>
<body>
    <div class="toc-container">
        <header class="toc-header">
            <h1 class="toc-title">[Main Course Title]</h1>
            <p class="toc-subtitle">[Course Subtitle or Author]</p>
        </header>
        <!-- Optional: Add QR Code or Intro Image Here -->
        <ul class="toc-list">
            <li class="toc-chapter">
                <h2 class="toc-chapter-title">Unit 1: [Unit Title]</h2>
                <ul class="toc-section-list">
                    <li class="toc-section-item">
                        <a href="topics/unit-1.html" class="toc-link">Unit 1 Content (Description)</a>
                    </li>
                    <!-- Add items if Unit 1 is split -->
                </ul>
            </li>
             <li class="toc-chapter">
                <h2 class="toc-chapter-title">Unit 2: [Unit Title]</h2>
                <ul class="toc-section-list">
                    <li class="toc-section-item">
                        <a href="topics/unit-2.html" class="toc-link">Unit 2 Content (Description)</a>
                    </li>
                </ul>
            </li>
             <li class="toc-chapter">
                <h2 class="toc-chapter-title">Unit 4: [Unit Title]</h2>
                <ul class="toc-section-list">
                    <li class="toc-section-item">
                        <a href="topics/unit-4-part-1.html" class="toc-link">Part 1 (Description)</a>
                    </li>
                     <li class="toc-section-item">
                        <a href="topics/unit-4-part-2.html" class="toc-link">Part 2 (Description)</a>
                    </li>
                </ul>
            </li>
            <!-- Repeat for all units/chapters/sections -->
        </ul>
    </div>
    <!-- Optional: Add JS if needed for ToC interactivity -->
</body>
</html>
```

### Topic Page Template
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Unit/Chunk Title]</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../styles/main.css">
    <!-- Include MathJax -->
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
        <article class="document-section" role="main">
            <!-- Top Navigation -->
            <nav class="document-nav" role="navigation" aria-label="Document Sections">
                <div class="nav-links">
                    <a href="../index.html" class="nav-button">
                        <span class="nav-icon">←</span>
                        <span class="nav-text">Table of Contents</span>
                    </a>
                    <a href="[previous-chunk.html]" class="nav-button [disabled]"> <!-- Add 'disabled' class if first chunk -->
                        <span class="nav-icon">←</span>
                        <span class="nav-text">Previous Section</span>
                    </a>
                    <div class="document-progress">
                        <div class="progress-bar" aria-hidden="true">
                            <div class="progress-fill" style="width: [PERCENTAGE]%;"></div> <!-- Set percentage dynamically -->
                        </div>
                        <span class="progress-text">[Unit X of Y]</span> <!-- Update text -->
                    </div>
                    <a href="[next-chunk.html]" class="nav-button [disabled]"> <!-- Add 'disabled' class if last chunk -->
                        <span class="nav-text">Next Section</span>
                        <span class="nav-icon">→</span>
                    </a>
                </div>
            </nav>

            <header class="section-header">
                <h1 class="section-title">[EXACT Unit/Chunk Title from PDF]</h1>
                <div class="title-underline"></div>
            </header>

            <main class="section-content">
                <!-- Content Sections Go Here -->
                <!-- START: section-id-1 -->
                <section id="section-id-1" class="content-section" aria-labelledby="section-heading-1">
                    <h2 id="section-heading-1" class="section-heading">
                        <span class="heading-icon">🎯</span> <!-- Placeholder icon -->
                        <span class="heading-text">[Exact Section Title from PDF]</span>
                    </h2>
                    <div class="content-card">
                        <p>[Verbatim paragraph text]</p>
                        <!-- Other elements like lists, tables, equations, images go here -->
                    </div>
                </section>
                <!-- END: section-id-1 -->

                 <!-- START: section-id-2 -->
                <section id="section-id-2" class="content-section" aria-labelledby="section-heading-2">
                    <h2 id="section-heading-2" class="section-heading">
                        <span class="heading-icon">📊</span> <!-- Placeholder icon -->
                        <span class="heading-text">[Exact Section Title from PDF]</span>
                    </h2>
                     <div class="content-card">
                        <p>[Verbatim paragraph text]</p>
                        <!-- ... -->
                         <aside class="callout note" role="note">
                           <h4 class="callout-title">Note</h4>
                           <p>[Supplementary note text - NOT from original flow].</p>
                         </aside>
                         <!-- ... -->
                         <p>This refers to the concept of <dfn>stability</dfn>.</p>
                         <!-- ... -->
                    </div>
                </section>
                <!-- END: section-id-2 -->

                <!-- ... More sections ... -->

                 <!-- Optional Key Points Section -->
                 <aside class="key-points-section" role="region" aria-labelledby="key-points-title-id">
                    <div class="key-points-container">
                        <div class="key-points-header">
                            <span class="key-points-icon">📝</span>
                            <h3 id="key-points-title-id" class="key-points-title">Key Points</h3>
                        </div>
                        <div class="key-points-content">
                            <ul class="key-points-list">
                                <li class="key-point-item">
                                    <span class="point-marker">•</span>
                                    <p>[VERBATIM TEXT EXTRACTED FROM THIS TOPIC'S ORIGINAL CONTENT]</p>
                                </li>
                                <!-- Repeat for each key point -->
                            </ul>
                        </div>
                    </div>
                </aside>

            </main>

            <!-- Bottom Navigation -->
            <nav class="document-nav" role="navigation" aria-label="Document Sections">
                <div class="nav-links">
                    <!-- Repeat exact same links as top navigation -->
                     <a href="../index.html" class="nav-button">
                        <span class="nav-icon">←</span>
                        <span class="nav-text">Table of Contents</span>
                    </a>
                    <a href="[previous-chunk.html]" class="nav-button [disabled]">
                        <span class="nav-icon">←</span>
                        <span class="nav-text">Previous Section</span>
                    </a>
                    <div class="document-progress">
                        <div class="progress-bar" aria-hidden="true">
                            <div class="progress-fill" style="width: [PERCENTAGE]%;"></div>
                        </div>
                        <span class="progress-text">[Unit X of Y]</span>
                    </div>
                    <a href="[next-chunk.html]" class="nav-button [disabled]">
                        <span class="nav-text">Next Section</span>
                        <span class="nav-icon">→</span>
                    </a>
                </div>
            </nav>
        </article>
    </div>
    <script src="../js/navigation.js"></script> <!-- Basic JS for disabled links etc. -->
</body>
</html>
```

### Common Content Element Examples

**Tables:**
```html
<div class="table-container">
    <table class="content-table">
        <caption>[Exact Table Caption]</caption>
        <thead>
            <tr><th>[Header 1]</th><th>[Header 2]</th></tr>
        </thead>
        <tbody>
            <tr><td>[Content 1]</td><td>[Content 2]</td></tr>
            <!-- ... more rows ... -->
        </tbody>
    </table>
</div>
```

**Mathematical Expressions (Inline and Block):**
```html
<!-- Inline math -->
<p>The equation is <span class="math-inline">$E=mc^2$</span>.</p>

<!-- Block math -->
<div class="equation">$$ y = mx + b $$</div>
```

**Lists (Ordered and Unordered):**
```html
<ul class="enhanced-list">
    <li class="list-item">
        <span class="item-icon">•</span> <!-- Or other icon -->
        <span class="item-text">[Verbatim List item text]</span>
    </li>
     <!-- ... -->
</ul>

<ol class="enhanced-list">
    <li class="list-item">
        <span class="item-icon">1.</span> <!-- Or custom counter -->
        <span class="item-text">[Verbatim List item text]</span>
    </li>
     <!-- ... -->
</ol>
```

**Images:**
```html
<img src="../assets/images/[ID]g-[PageNum]-[SeqNum].jpg" alt="[Descriptive Alt Text]" class="content-image">
```

**Code Blocks:**
```html
<pre class="code-block"><code class="language-[python/matlab/etc]">
[Verbatim code lines]
[Maintain indentation]
</code></pre>
```

**Callouts:**
```html
<aside class="callout note" role="note">
  <h4 class="callout-title"><span class="callout-icon">💡</span> Note</h4>
  <p>[Supplementary explanatory text, clearly distinct from main content].</p>
</aside>

<aside class="callout warning" role="alert">
   <h4 class="callout-title"><span class="callout-icon">⚠️</span> Warning</h4>
   <p>[Important cautionary information].</p>
</aside>
```

**Definitions:**
```html
<p>A key concept is the <dfn id="term-transfer-function">Transfer Function</dfn>, which relates output to input.</p>
```

### Design Guidelines Summary

1.  **Heading Hierarchy:** Use `<h1>` for page title, `<h2>` for major sections, `<h3>` for sub-sections, `<h4>` for minor headings / callout titles. Maintain order.
2.  **Navigation:** Top and bottom nav mandatory. Consistent link order: ToC, Previous, Progress, Next. Use specified colors.
3.  **Responsiveness:** Ensure layout and readability at defined breakpoints (e.g., 768px, 480px). Test tables, equations, code blocks.
4.  **Spacing:** Use consistent margins and padding as defined in CSS for sections, paragraphs, lists, etc.
5.  **Typography:** Use specified font families and size hierarchy from CSS. Ensure MathJax renders correctly.
6.  **Accessibility:** Provide `alt` text, use semantic HTML, ensure color contrast, use ARIA roles where necessary.

## Mathematics Content Handling (MathJax)

### MathJax Configuration
Include this configuration in the `<head>` of every HTML page:
```html
<head>
    <!-- Other head elements -->
    <script>
    MathJax = {
      tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']],
        processEscapes: true,
        processEnvironments: true,
        tags: 'ams' // Use AMS numbering for equations
      },
      svg: {
          fontCache: 'global'
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
Wrap inline LaTeX math with single dollar signs:
```html
<p>The equation <span class="math-inline">$x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}$</span> is the quadratic formula.</p>
```

### Display Equations
Wrap display/block LaTeX math with double dollar signs or `\[ ... \]`:
```html
<div class="equation">
    $$x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}$$
</div>
```
Or for numbered equations:
```html
<div class="equation">
\begin{equation}
E = mc^2 \label{eq:einstein}
\end{equation}
</div>
<p>As shown in equation \eqref{eq:einstein}...</p>
```

### Mathematical Tables
Use standard HTML tables, applying MathJax within cells if needed. Use the `.math-table` class for specific styling if defined in CSS.
```html
<div class="table-container math-table">
    <table class="content-table">
        <caption>[EXACT TABLE CAPTION]</caption>
        <!-- ... thead, tbody ... -->
        <tr>
             <td>Variable</td>
             <td>Value: $\alpha = 5$</td>
        </tr>
        <!-- ... -->
    </table>
</div>
```

## Code Block Formatting

Use `<pre>` and `<code>` tags. Add the correct language class (e.g., `language-python`, `language-matlab`, `language-c`) to the `<code>` element for syntax highlighting.
```html
<pre class="code-block">
    <code class="language-python">
# Verbatim code goes here
def example_function():
    # Maintain original indentation
    return "This is a code example"
    </code>
</pre>
```

## CSS Styling Instructions

*(Defines styles for main.css)*

### Base Variables and Setup
```css
:root {
    --primary-color: #2c3e50;        /* Dark blue-grey for headings, primary elements */
    --secondary-color: #34495e;      /* Slightly lighter blue-grey for subheadings */
    --accent-color: #3498db;         /* Bright blue for links, highlights, icons */
    --accent-hover-color: #2980b9;   /* Darker blue for hover states */
    --background-color: #f8f9fa;     /* Very light grey page background */
    --card-background-color: #ffffff; /* White for content cards */
    --text-color: #212529;           /* Dark grey for body text, increased contrast */
    --muted-text-color: #6c757d;     /* Lighter grey for less important text */
    --border-color: #dee2e6;         /* Light grey for borders */
    --code-background-color: #2d3436;/* Dark background for code */
    --code-text-color: #dfe6e9;      /* Light text for code */
    --note-bg-color: #eaf7fb;        /* Light blue for note callouts */
    --note-border-color: #aed6f1;    /* Blue border for note callouts */
    --warning-bg-color: #fff9e6;     /* Light yellow for warning callouts */
    --warning-border-color: #ffe58f; /* Yellow border for warning callouts */
    --font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    --font-family-monospace: 'Courier New', Courier, monospace;
    --font-family-math: 'Times New Roman', serif; /* Primarily for MathJax fallback */
}

*, *::before, *::after {
    box-sizing: border-box;
}

body {
    font-family: var(--font-family);
    line-height: 1.7; /* Increased line height */
    color: var(--text-color);
    background-color: var(--background-color);
    margin: 0;
    padding: 0;
    font-size: 16px; /* Base font size */
}

.container {
    max-width: 1140px; /* Wider max-width */
    margin: 0 auto;
    padding: 1.5rem;
}

/* Overall article/document styling */
.document-section {
    background-color: var(--card-background-color);
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
    margin-bottom: 2rem;
}
```

### Typography
```css
h1, h2, h3, h4, h5, h6 {
    color: var(--primary-color);
    margin-top: 1.5em;
    margin-bottom: 0.8em;
    line-height: 1.3;
    font-weight: 600;
}

h1, .section-title { /* Specific styles for main page title */
    font-size: 2.2rem;
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 0.5rem;
    text-align: center;
    border-bottom: none; /* Remove default border if any */
    padding-bottom: 0;
}

h2, .section-heading {
    font-size: 1.8rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.7rem;
}

h3, .subsection-heading {
    font-size: 1.4rem;
    font-weight: 600;
    border-bottom: 1px dashed var(--border-color);
    padding-bottom: 0.3rem;
}

h4, .subsubsection-heading {
    font-size: 1.15rem;
    font-weight: 600;
    color: var(--secondary-color);
}

p {
    margin-top: 0;
    margin-bottom: 1.2rem; /* Increased paragraph spacing */
}

a {
    color: var(--accent-color);
    text-decoration: none;
    transition: color 0.2s ease;
}

a:hover {
    color: var(--accent-hover-color);
    text-decoration: underline;
}

strong { font-weight: 600; }
em { font-style: italic; }

/* Definition Term */
dfn {
    font-style: italic;
    font-weight: 600;
    border-bottom: 1px dashed var(--secondary-color);
    cursor: help; /* Indicate it might be interactive */
}

/* Header styling for top-level pages/chunks */
.section-header {
    text-align: center;
    margin-bottom: 2.5rem;
    padding-bottom: 1rem;
}

.title-underline {
    width: 80px;
    height: 4px;
    background-color: var(--accent-color);
    margin: 0.5rem auto 0 auto;
    border-radius: 2px;
}

/* Content card styling */
.content-card {
    padding: 1rem 0; /* Add some padding if needed inside section */
}
```

### Navigation Styling
```css
/* Navigation container */
.document-nav {
    margin: 2.5rem 0;
    padding: 1rem 0;
    border-top: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
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
    padding: 0.6rem 1.2rem; /* Slightly larger padding */
    text-decoration: none;
    background: var(--card-background-color);
    border: 1px solid var(--border-color);
    border-radius: 5px;
    transition: all 0.2s ease;
    white-space: nowrap;
    font-size: 0.9em;
    font-weight: 500;
}

.nav-button .nav-icon { font-size: 1.1em; }

/* Table of Contents link */
.nav-button[href*="index.html"] {
    color: #2980b9; /* Blue */
    border-color: #2980b9;
}
.nav-button[href*="index.html"]:hover {
    background-color: #eaf4fb;
    border-color: var(--accent-hover-color);
}

/* Previous Section link */
.nav-button:nth-child(2):not([href*="index.html"]):not(:last-child):not(.disabled) {
    color: #e67e22; /* Orange */
    border-color: #e67e22;
}
.nav-button:nth-child(2):not([href*="index.html"]):not(:last-child):not(.disabled):hover {
    background-color: #fdf3e8;
}

/* Next Section link */
.nav-button:last-child:not([href*="index.html"]):not(.disabled) {
    color: #27ae60; /* Green */
    border-color: #27ae60;
}
.nav-button:last-child:not([href*="index.html"]):not(.disabled):hover {
    background-color: #eaf7f1;
}

/* Disabled states */
.nav-button.disabled {
    color: var(--muted-text-color);
    border-color: var(--border-color);
    cursor: not-allowed;
    opacity: 0.6;
}
.nav-button.disabled:hover {
    background-color: var(--card-background-color); /* No hover effect */
}

/* Progress indicator */
.document-progress {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    min-width: 120px;
    text-align: center;
}

.progress-bar {
    width: 100%;
    max-width: 200px; /* Limit width */
    height: 6px;
    background-color: #e9ecef;
    border-radius: 3px;
    overflow: hidden;
    margin-bottom: 0.3rem;
}

.progress-fill {
    height: 100%;
    background-color: var(--accent-color);
    width: 0%; /* Default */
    transition: width 0.3s ease;
    border-radius: 3px;
}

.progress-text {
    font-size: 0.8em;
    color: var(--secondary-color);
}
```

### Table of Contents (index.html) Styling
```css
.toc-container {
    max-width: 800px;
    margin: 40px auto;
    padding: 30px 40px; /* Adjusted padding */
    background-color: var(--card-background-color);
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.toc-header {
    text-align: center;
    margin-bottom: 30px;
    border-bottom: 2px solid var(--border-color);
    padding-bottom: 20px;
}

.toc-title {
    font-size: 2.5em;
    color: var(--primary-color);
    font-weight: 700;
    margin-bottom: 10px;
}

.toc-subtitle {
    font-size: 1.2em;
    color: var(--muted-text-color);
}

.toc-list {
    list-style: none;
    padding: 0;
}

.toc-chapter {
    margin-bottom: 25px;
    border-left: 3px solid var(--accent-color);
    padding-left: 20px;
}

.toc-chapter-title {
    font-size: 1.6em;
    font-weight: 600;
    color: var(--primary-color);
    margin-bottom: 15px;
}

.toc-section-list {
    list-style: none;
    padding-left: 10px;
}

.toc-section-item {
    margin-bottom: 8px;
}

.toc-link {
    text-decoration: none;
    color: var(--accent-color);
    font-size: 1.1em;
    transition: color 0.3s ease, padding-left 0.3s ease;
    display: block;
    padding: 5px 0;
}

.toc-link:hover {
    color: var(--accent-hover-color);
    padding-left: 5px;
}

.toc-link::before {
    content: '➔ ';
    color: #bdc3c7;
    margin-right: 8px;
    font-size: 0.9em;
    display: inline-block;
}
```

### Content Element Styling
```css
/* Section styling */
.content-section {
    padding: 1rem 0; /* Adjust vertical padding */
    margin-bottom: 1.5rem; /* Space between sections */
}

/* Headings already styled above */
.heading-icon {
    font-size: 1.1em; /* Adjust icon size */
    color: var(--accent-color);
}

/* Tables */
.table-container {
    margin: 1.5rem 0;
    overflow-x: auto;
    border: 1px solid var(--border-color);
    border-radius: 8px;
}

.content-table {
    width: 100%;
    border-collapse: collapse;
    background: var(--card-background-color);
}

.content-table th,
.content-table td {
    padding: 0.8rem 1rem; /* Slightly more padding */
    border: 1px solid var(--border-color);
    text-align: left;
    vertical-align: top;
}

.content-table th {
    background-color: #f1f3f5; /* Lighter grey header */
    font-weight: 600;
}

.content-table caption {
    caption-side: top;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--primary-color);
    text-align: left;
    padding: 0.5rem 0;
    font-size: 1.1em;
}

/* Mathematical expressions */
.math-inline {
    padding: 0.1em 0.3em;
    background-color: #f1f3f5; /* Light grey background */
    border-radius: 3px;
    font-size: 0.95em; /* Slightly smaller */
}

.equation {
    margin: 1.8rem 0; /* Increased margin */
    text-align: center;
    overflow-x: auto;
    padding: 1rem 1.5rem; /* Increased padding */
    background-color: #f8f9fa;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    font-size: 1.1em;
}

/* Enhanced lists */
.enhanced-list {
    list-style: none;
    padding-left: 1.5rem;
    margin-bottom: 1rem;
}

.enhanced-list .list-item {
    display: flex;
    align-items: flex-start;
    gap: 0.8rem; /* Slightly more gap */
    margin-bottom: 0.8rem;
}

.enhanced-list .item-icon {
    color: var(--accent-color);
    font-weight: bold;
    flex-shrink: 0;
    margin-top: 0.15em; /* Adjust alignment */
    min-width: 1.2em; /* Ensure space for multi-digit numbers */
    text-align: right;
}

.enhanced-list .item-text {
    flex-grow: 1;
}

/* Images */
.content-image {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
    margin: 1.5rem auto;
    display: block;
    border: 1px solid var(--border-color);
}

/* Key Points Section */
.key-points-section {
    margin-top: 2.5rem;
    margin-bottom: 2rem;
}

.key-points-container {
    background-color: var(--note-bg-color);
    border: 1px solid var(--note-border-color);
    border-radius: 8px;
    padding: 1.5rem;
}

.key-points-header {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--note-border-color);
}

.key-points-icon { font-size: 1.5em; }
.key-points-title { font-size: 1.3em; color: var(--primary-color); font-weight: 600; margin: 0; }
.key-points-content { margin-top: 1rem; }
.key-points-list { list-style: none; padding: 0; }
.key-points-list .key-point-item { display: flex; align-items: flex-start; gap: 0.6rem; margin-bottom: 0.8rem; }
.key-points-list .point-marker { color: var(--accent-color); font-weight: bold; margin-top: 0.1em; }
.key-points-list .key-point-item p { margin: 0; flex-grow: 1; }

/* Callout / Note Boxes */
.callout {
    padding: 1.5rem;
    margin: 1.5rem 0;
    border-left-width: 5px;
    border-left-style: solid;
    border-radius: 5px;
}
.callout.note {
    background-color: var(--note-bg-color);
    border-color: var(--note-border-color);
}
.callout.warning {
    background-color: var(--warning-bg-color);
    border-color: var(--warning-border-color);
}
.callout-title {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-size: 1.1em;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}
.callout-icon { font-size: 1.2em; }
.callout p:last-child { margin-bottom: 0; }

/* Code Block Formatting */
.code-block {
    background-color: var(--code-background-color);
    color: var(--code-text-color);
    padding: 1rem 1.5rem;
    border-radius: 5px;
    overflow-x: auto;
    margin: 1.5rem 0;
    font-family: var(--font-family-monospace);
    font-size: 0.95em;
    line-height: 1.5;
}
.code-block code { white-space: pre; }
/* Add specific language styles here if needed */
```

### Responsive Design
```css
@media (max-width: 768px) {
    .container { padding: 1rem; }
    .document-section { padding: 1.5rem; }
    h1, .section-title { font-size: 1.8em; }
    h2, .section-heading { font-size: 1.5em; }
    h3, .subsection-heading { font-size: 1.2em; }

    .toc-container { margin: 20px; padding: 20px; }
    .toc-title { font-size: 2em; }

    .nav-links { flex-direction: column; align-items: stretch; }
    .nav-button { justify-content: center; }
    .document-progress { order: -1; margin-bottom: 1rem; }

    .content-table { font-size: 0.9em; }
    .content-table th, .content-table td { padding: 0.5rem; }
}

@media (max-width: 480px) {
    body { font-size: 15px; }
    .container { padding: 0.5rem; }
    .document-section { padding: 1rem; }

    h1, .section-title { font-size: 1.6em; }
    h2, .section-heading { font-size: 1.3em; }
    h3, .subsection-heading { font-size: 1.1em; }
    h4, .subsubsection-heading { font-size: 1.05em; }

    .toc-title { font-size: 1.8em; }
    .toc-chapter-title { font-size: 1.3em; }
    .toc-link { font-size: 1em; }

    .nav-button { padding: 0.5rem 0.8rem; font-size: 0.85em; }
    .equation { padding: 0.8rem; font-size: 1em;}
    .code-block { padding: 0.8rem 1rem; font-size: 0.9em;}
}
```

### JavaScript (`navigation.js`)
```javascript
// Basic JS for disabled links and potential future enhancements
document.addEventListener('DOMContentLoaded', function() {
    // Prevent default action for disabled navigation buttons
    const disabledButtons = document.querySelectorAll('.nav-button.disabled');
    disabledButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
        });
    });

    // Potential future enhancements:
    // - Update progress bar based on current page index / total pages
    // - Smooth scrolling for internal links (e.g., glossary terms)
    // - Keyboard navigation for interactive elements
});

```

## Progress Tracking and Verification

*(Conversion Status JSON remains as defined in v2)*

### Enhanced Verification Checklist
For each section/page, verify:
*   [ ] **MMD reviewed** and corrections applied against original PDF.
*   [ ] **Content matches PDF source exactly** (line-by-line visual check).
*   [ ] No added/modified/summarized content.
*   [ ] Only HTML/CSS structural/styling changes applied *after* content verification.
*   [ ] Original text, numbers, formulas, code preserved verbatim.
*   [ ] All PDF sections, headings (levels `<h1>-<h6>`), paragraphs, lists, tables are present and correctly tagged.
*   [ ] Lists have the exact same number of items and text as original.
*   [ ] Any "Key Points" use only **verbatim text** extracted from the original topic content.
*   [ ] All navigation links (Prev/Next/ToC) function correctly.
*   [ ] All mathematics renders correctly via MathJax.
*   [ ] Visual styling enhances readability but does not alter content meaning or reading order.
*   [ ] All images properly extracted, using correct filenames (`[ID]g-[PageNum]-[SeqNum].ext`), and referenced with correct relative paths (`../assets/images/...`).
*   [ ] **All images have descriptive `alt` text.**
*   [ ] Code blocks maintain original formatting and have correct language class.
*   [ ] Tables preserve all rows, columns, cell content, and captions accurately.
*   [ ] HTML is valid and uses semantic elements appropriately.
*   [ ] Basic accessibility checks passed (color contrast, keyboard navigation, ARIA roles where needed).
*   [ ] **Chunking is logical** and file sizes are reasonable (not excessively long or short).

*(Automated Verification script usage remains as defined previously, but line count check is removed)*

## Detailed Conversion Plan Template

*(Template remains as defined in v2, including the MMD Review checkbox. Line Count field can be removed or made optional)*

```
   ## Content Extraction & Preparation
   [ ] MMD conversion completed
   [ ] **MMD reviewed and corrected**
   [ ] HTML template created
   [ ] Main content populated from corrected MMD

   ## Content Verification (against PDF)
   [ ] Line-by-line content verification completed
   [ ] ... (rest of verification checklist items) ...
```

## Final Considerations

### Balancing Fidelity and Learning Experience
*   **Verbatim content preservation is the ABSOLUTE HIGHEST priority.** Never sacrifice accuracy for aesthetics or perceived clarity. Do not fix source errors.
*   Visual design and enhanced formatting should make the *original* content easier to read, navigate, and understand, without altering it.
*   Accessibility must be integral to the structure and presentation.
*   Success criteria: 100% original knowledge preserved and accessible, with improved visual appeal and learning effectiveness through structure and design system application.

### Before Submission
Check your work against these critical standards:
1.  **Zero Content Loss/Alteration:** Not a single word, number, or formula altered from the original PDF (post MMD correction).
2.  **No Summarization/Rewriting:** Nothing condensed, rephrased, or "improved".
3.  **Original Structure Preserved:** Document hierarchy (headings, sections) mirrors the source PDF. Semantic HTML used correctly.
4.  **Visual Enhancement Only:** Styling and layout improve learning but do not change content or reading order. Design system applied correctly.
5.  **Key Points Verification:** All "Key Points" contain only text extracted verbatim from the original topic content.
6.  **Chunk Management:** Chunks are **logically coherent**, reasonably sized, and properly linked.
7.  **Image Handling:** All images present, correctly named (`[ID]g-[PageNum]-[SeqNum].ext`), correctly linked, and have descriptive `alt` text.
8.  **Accessibility:** Core requirements (alt text, semantic HTML, contrast) met.
9.  **Verification Complete:** All checklist items confirmed for every chunk.

If you find ANY content that has been modified, rewritten, or omitted (beyond fixing OCR errors identified in MMD review), fix it immediately to match the original source PDF verbatim.

--- END OF FILE pdf-to-html-conversion-prompt-v4.md ---