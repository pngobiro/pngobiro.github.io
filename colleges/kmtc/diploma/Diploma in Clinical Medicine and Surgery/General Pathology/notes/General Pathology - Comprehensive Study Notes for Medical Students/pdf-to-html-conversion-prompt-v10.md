# PDF to HTML Conversion System Prompt (v10) - Pain Point Resolution Edition

## Core Mission
Convert PDF documents into **visually stunning, accessible, and pedagogically effective** HTML pages while ensuring **100% VERBATIM content preservation**. Create highly appealing and effective learning materials with **modern UI/UX patterns**, organized into **logically coherent chunks**, that maintain absolute fidelity to the original text content.

The visual structure of the original PDF, where it indicates a deliberate grouping of related content (like side-by-side lists or paragraphs), should be interpreted as a logical grouping but translated into a **linear ("top and bottom") flow** in the HTML, following the order provided by the MMD. The goal is to make the *content* readable and understandable through clear semantic structure, **rich visual design**, and modern UI components, *not* by recreating complex multi-column PDF layouts.

## What's New in v10 (Pain Point Resolution)
- **Lightbox Modal Requirements**: Mandatory lightbox modal HTML structure for all pages
- **Figure Overlay Standards**: Complete figure overlay structure with click indicators
- **Navigation Consistency**: Standardized top and bottom navigation patterns
- **Common Error Prevention**: Specific instructions to avoid frequent implementation mistakes
- **Template Completeness**: Full HTML templates with all required components
- **JavaScript Dependencies**: Clear requirements for all interactive features
- **Accessibility Compliance**: Enhanced focus on complete accessibility implementation
- **Quality Assurance**: Comprehensive checklists to prevent missing components

## Critical Pain Points Addressed in v10

### 1. Missing Lightbox Modal Structure
**PROBLEM**: Images don't enlarge when clicked due to missing lightbox modal HTML.
**SOLUTION**: Every HTML page MUST include the complete lightbox modal structure before closing `</body>` tag.

### 2. Incomplete Figure Overlays
**PROBLEM**: Images missing visual click indicators or incomplete overlay structure.
**SOLUTION**: All images with `data-lightbox="true"` MUST have complete figure overlay with icon and text.

### 3. Inconsistent Navigation
**PROBLEM**: Missing or broken next/previous navigation between pages.
**SOLUTION**: Standardized navigation templates with proper linking and disabled states.

### 4. Missing JavaScript Dependencies
**PROBLEM**: Interactive features not working due to missing or incomplete JavaScript files.
**SOLUTION**: All three JavaScript files (theme.js, navigation.js, interactions.js) are mandatory.

### 5. Incomplete Template Implementation
**PROBLEM**: Pages missing essential components like theme toggle, progress bar, or skip links.
**SOLUTION**: Complete template checklist with all required components.

## Conversion Workflow Overview
1.  **Planning & Setup**: Create conversion plan, prepare environment, gather resources.
2.  **Initial Extraction**: Convert PDF to intermediate format (MMD) using Mathpix.
3.  **MMD Review & Correction**: **Manually open and review the generated MMD file. Correct any obvious OCR errors, especially in tables, complex equations, or code snippets.** **Crucially, identify and remove spurious characters (like 't ', '• ' used inconsistently outside of clear list patterns) that are artifacts of the PDF conversion process and are NOT part of the original text content.** Identify text patterns that represent intended lists (e.g., lines beginning consistently with '-', '*', '•', or numbered prefixes). This step is crucial *before* HTML conversion.
4.  **Content Chunking**: Divide *corrected* MMD content into **logically coherent sections** based on document structure (chapters, major sections). Use common sense to avoid overly long or short files.
5.  **HTML Templating**: Set up base HTML structure with proper semantic elements, accessibility features, and **v10 Complete UI components** based on the **HTML Layout and Structure** section below.
6.  **Content Transfer & Semantic Conversion**: Move *corrected* content from MMD to HTML chunks with proper semantic markup. **Convert identified list-like patterns into proper HTML `<ul>` or `<ol>` elements, preserving the exact text content of each item.** Maintain the **linear flow** provided by the MMD.
7.  **100% Content Verification**: Validate verbatim content preservation against the *original PDF source* for each chunk. **Specifically verify that all original text, formulas, data in tables, and code snippets are present exactly as in the source PDF (after correcting OCR errors). Verify that the text within converted list items is verbatim.**
8.  **Visual Enhancement & Complete UI Implementation**: Apply styling and layout enhancements using the **CSS Styling Instructions** below *only after* content verification (Step 7) is complete. Implement **ALL interactive components, dark mode, lightbox modal, and micro-interactions**.
9.  **Resource Handling**: Extract/download and organize images and other media using the specified **Image Handling** rules and correct filenames.
10. **Technical & Accessibility Validation**: Validate HTML, CSS, links, and accessibility standards.
11. **Component Completeness Check**: Verify ALL required components are present using the **v10 Component Checklist**.
12. **Finalization**: Link pages, test navigation thoroughly, verify dark mode, test lightbox functionality, and review final output.

## v10 Component Checklist (MANDATORY)

### Every HTML Page MUST Include:
- [ ] **Skip Link**: `<a href="#main-content" class="skip-link">Skip to main content</a>`
- [ ] **Reading Progress Bar**: Complete progress bar HTML structure
- [ ] **Theme Toggle**: Theme toggle button with light/dark icons
- [ ] **Top Navigation**: Complete navigation with prev/next/contents buttons
- [ ] **Bottom Navigation**: Large navigation cards with descriptive titles
- [ ] **Breadcrumb Navigation**: Breadcrumb trail showing current location
- [ ] **Document Header**: Header with badge, title, and meta information
- [ ] **Lightbox Modal**: Complete lightbox modal HTML structure (see template below)
- [ ] **All Three JavaScript Files**: theme.js, navigation.js, interactions.js

### Every Image MUST Include:
- [ ] **data-lightbox="true"** attribute on figure element
- [ ] **Complete Figure Overlay**: Icon and "Click to enlarge" text
- [ ] **Descriptive Alt Text**: Meaningful alt attribute
- [ ] **Figure Caption**: If present in original PDF

### Every Navigation MUST Include:
- [ ] **Proper Linking**: Correct href attributes to adjacent pages
- [ ] **Disabled States**: First page has disabled previous, last page has appropriate next
- [ ] **Progress Indicators**: Current page number and total pages
- [ ] **Descriptive Titles**: Clear navigation labels

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
    *   Assess the resulting group size based on content volume/complexity.
    *   If a group is too large, identify logical sub-breaks (`<h3>`) to split it.
    *   If a group is too small, consider merging it with the next group if appropriate.
    *   Ensure the final break point doesn't interrupt a content element.
3.  **Naming convention for chunks**:
    *   Use clear, descriptive names based on content and the specified `index.html` structure.
    *   Example for lectures: `topics/histology-[topic-name].html` (e.g., `topics/histology-introduction.html`, `topics/histology-organelles.html`).

4.  **Chunk verification requirement**:
    *   Verify that chunk breaks occur at logical points in the content.
    *   Verify that no single file feels overwhelmingly long or confusingly short from a user perspective.
    *   Document all chunk decisions and their rationale (e.g., "Split Chapter 8 due to length at Section 8.3", "Merged short Appendix A into Unit 9").
5.  **Chunk navigation implementation**:
    *   **Mandatory:** Each chunk MUST include functional navigation links (`<a>` tags) to the `previous-chunk.html` and `next-chunk.html`. Disable appropriately for first/last chunks.
    *   **Mandatory:** Each chunk MUST include a link back to the main `index.html` (Table of Contents).
    *   **Recommended:** Include breadcrumb navigation showing the user's current location within the document structure (e.g., `Home > Lecture 3 > Section 2`).
    *   **Recommended:** Include a progress indicator (e.g., "Lecture 3 of 7").
    *   **v10 MANDATORY:** Include floating reading progress bar at top of viewport.

## Content Preservation Rules
1.  **CRITICAL: ALL original pedagogical content must be preserved EXACTLY AS-IS from the source PDF (after correcting OCR errors).** This includes text, formulas, data in tables, code snippets, and the *intent* of figures.
2.  **NO content creation, modification, summarization, or rephrasing is allowed.**
3.  **DO NOT "modernize" or "enhance" the *meaning* or *wording* of the content.** Do not fix typos, grammatical errors, or factual inaccuracies present in the original source PDF. Preserve them verbatim.
4.  **The ONLY allowed changes are:**
    *   Adding HTML structural and semantic tags (`<p>`, `<h1>`, `<ul>`, `<li>`, `<table>`, `<code>`, `<section>`, `<article>`, `<aside>`, `<dfn>`, etc.) **to reflect the logical structure captured by MMD and to enhance the readability of the linear content flow.** This explicitly includes converting identified list-like patterns (`- `, `t `, `• `, numbered prefixes) from the MMD into semantic HTML list elements (`<ul>` or `<ol>`, containing `<li>` for each item), while preserving the *text content* within each item verbatim.
    *   Applying CSS styling for visual presentation as defined in the **CSS Styling Instructions** section.
    *   Converting formatting (bold, italic) to HTML elements (`<strong>`, `<em>`).
    *   Adding accessibility attributes (e.g., `alt` text, ARIA roles).
    *   Correcting OCR errors identified during the MMD review phase (Step 3 of Workflow) and **cleaning spurious characters**.
    *   Applying `<strong>` tags to the verbatim text within "Key Points" list items (see Zero-Summarization Directive).
    *   **v10 NEW:** Adding interactive UI components (collapsible sections, tabs, tooltips, lightbox modals) that organize but do not alter content.
5.  Each section must be visually compared line-by-line against the **original PDF source** before applying visual enhancements.

## Zero-Summarization Directive
### Absolute Content Preservation Mandate
**Every word, sentence, paragraph, list item (after conversion from pattern), table cell, and code line from the source document MUST appear VERBATIM in the HTML output (after correcting OCR errors and cleaning).**

*   **NO** summarization, condensation, or paraphrasing is permitted. EVER.
*   Text must be copied letter-for-letter, exactly as it appears in the original PDF (after correcting obvious OCR errors and cleaning during MMD review).
*   **NEVER** create new textual content, new lists, or new summaries *that replace or alter* the original content. Converting list *patterns* to semantic lists is permitted as it represents the original *intent* of the content structure, but the text within the items is verbatim.
*   **NEVER** omit any content, no matter how minor it seems.
*   Preserve all lists (after conversion from patterns) with exactly the same number of items and identical text content.
*   Maintain all original punctuation, spacing cues (like paragraph breaks), and formatting emphasis (bold/italic) from the original PDF.

### Common Violation Patterns to Avoid
*   **FALSE:** Creating bullet points or summaries that *replace* original paragraphs (unless the original source used a list pattern that was previously represented as a paragraph).
*   **FALSE:** Reorganizing content into a different sequence than the original linear flow provided by MMD.
*   **FALSE:** Rewriting sentences or paragraphs to be "clearer" or more "concise".
*   **FALSE:** Adding explanatory text *within* the original content flow. (Use callouts/asides for annotations if necessary, clearly distinct from original text).
*   **FALSE:** Changing the language, terminology, or fixing typos/grammar found in the source PDF.
*   **FALSE:** Generating new section titles or headings not present in the original PDF structure.
*   **FALSE:** Converting list *patterns* but altering the verbatim text content of any list item.

### Permitted Visual and Learning Enhancements (Apply *after* 100% Content Verification)
Only apply these *after* verifying verbatim content preservation:
*   **ALLOWED:** Enhanced visual presentation using CSS (borders, backgrounds, spacing, typography, **gradients, glassmorphism, shadows**) based on the **CSS Styling Instructions** section below.
*   **ALLOWED:** Applying structural patterns like cards (`<div class="content-card"></div>`) or callouts (`<aside>`) to *existing* content blocks.
*   **ALLOWED:** Adding "Key Points" or "Summary" sections (`<aside class="key-points-section">`) at the end of a topic *IF AND ONLY IF* they contain **only verbatim text snippets** extracted directly from that topic's original content. The text within these list items **MUST** be wrapped in `<strong>` tags.
*   **ALLOWED:** Using icons, color-coding, or visual indicators to highlight important terms or sections *without changing the text*.
*   **ALLOWED:** Adding interactive elements (collapsible sections, tabs, tooltips for definitions, lightbox modals) that reveal or organize the *original* content.
*   **ALLOWED:** Improving scannability through visual hierarchy (headings, spacing, distinct content blocks).
*   **v10 ALLOWED:** Dark mode toggle, reading progress indicators, floating navigation, micro-interactions, lightbox image viewing.

## Mathpix OCR / MMD Handling
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

### Step 2: MMD Review and Correction (CRITICAL)
*   **Manually open and review the `.mmd` file.**
*   **Compare carefully against the original PDF.**
*   **Correct OCR Errors:** Fix any garbled text, misidentified characters, or formatting issues introduced during OCR. Pay close attention to:
    *   Mathematical equations (check symbols, variables, structure).
    *   Tables (check cell content, alignment markers).
    *   Code snippets (check indentation, syntax).
    *   Lists and complex layouts as represented *in the MMD*.
*   **Clean Artifacts:** Identify and **remove spurious characters or inconsistent prefixes (like 't ', '• ' at the start of lines that aren't part of a clear list pattern)** that appear to be OCR errors or unintended formatting from the PDF.
*   **Identify List Patterns:** Note consistent prefixes ('-', '*', '•', numbers followed by punctuation/space) or other formatting that clearly indicates an intended list structure in the original PDF, even if the MMD doesn't perfectly tag it as such. This information will be used in Step 6 for semantic conversion.
*   **Do NOT change the original wording or fix source document errors.** Only correct what the OCR process broke.
*   **Mark this step as complete** in the conversion log for each document/chunk.

### Step 3: Handling MMD Output
*   Use the **corrected** and **cleaned** MMD file (from Step 2) as the source for HTML conversion.
*   **Images:** Identify all `![](image_url)` links. These URLs will be used later to download images. The corresponding local filename structure is defined in the "Image Handling" section.
*   **Equations:** MMD preserves LaTeX (`$...$` or `$$...$$`). This works directly with MathJax in the HTML template. Verify complex equations carefully during MMD review.

## HTML Implementation Process
### Structure Mirroring & Semantics
*   HTML document structure must accurately mirror the original document's logical hierarchy (headings, paragraphs, lists, etc.). Use the templates provided in the **HTML Layout and Structure** section.
*   Use appropriate semantic HTML5 elements: `<article>`, `<section>`, `<nav>`, `<header>`, `<footer>`, `<aside>`, `<table>`, `<ul>`, `<ol>`, `<li>`, `<code>`, `<pre>`, `<dfn>`.
*   Every heading must use the appropriate `<h1>`-`<h6>` tag matching the original hierarchy (e.g., PDF Chapter Title -> `<h1>`, Section Heading -> `<h2>`).
*   Maintain exact paragraph breaks (`<p>` tags) as in the original (after cleaning).
*   **Convert list patterns:** Identify the list patterns noted in Step 2 and convert them into proper semantic `<ul>` or `<ol>` elements. Each item in the original pattern becomes an `<li>` element containing the **verbatim text** from the source.
*   **Importantly:** Content that appeared visually side-by-side or in columns in the PDF but is presented linearly in the MMD MUST be kept in that linear, stacked ("top and bottom") format in the HTML.

### Content Preservation Implementation
*   Copy-paste all text **verbatim** from the **corrected and cleaned MMD source** (Step 2).
*   Perform a **line-by-line visual comparison** of the generated HTML against the **original PDF source** for 100% accuracy *before* applying significant visual enhancements.
*   Maintain all original formatting emphasis (bold/italic) using `<strong>` and `<em>`.
*   Preserve all tables (`<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`) and code blocks (`<pre><code>`) exactly as written.
*   **NEVER omit, condense, or rewrite any original content.**
*   **Key Points Text:** For text used in "Key Points" lists, the *verbatim* text from the source must be wrapped in `<strong>` tags.
*   Enclose major content sections within unique HTML comment markers (`<!-- START: section-name -->` and `<!-- END: section-name -->`).

### Visual Enhancement for Learning Effectiveness (Apply *after* 100% Content Verification)
Only after verifying verbatim content preservation, apply further visual improvements:
1.  **Reference CSS Styling Instructions**: Apply classes defined in the CSS section.
2.  **Apply v10 Complete UI Enhancements**:
    *   Apply CSS classes for typography, spacing, color, **gradients, and glassmorphism**.
    *   Use card layouts with **hover effects and gradient borders**.
    *   Enhance list styling with **animated bullets and hover states**.
    *   Implement callout boxes with **icon badges and subtle animations**.
    *   Use definition tags (`<dfn>`) with **tooltip functionality**.
    *   Add **collapsible sections** for lengthy content using `<details>`/`<summary>`.
    *   Implement **tabbed interfaces** for related content groups.
    *   Add **reading progress bar** at top of viewport.
    *   Include **floating mini-TOC** for long sections.
    *   Ensure **dark mode** styles are properly applied.
    *   Add **smooth scroll** behavior for internal links.
    *   Implement **copy button** for code blocks.
    *   **v10 CRITICAL:** Add **complete lightbox modal** HTML structure.
    *   **v10 CRITICAL:** Add **complete figure overlays** with click indicators.

### Accessibility Implementation
*   **Mandatory:** All images (`<img>`) MUST have descriptive `alt` text. Decorative images should have `alt=""`.
*   Use semantic HTML correctly (headings in order, lists for lists, etc.).
*   Ensure sufficient color contrast according to WCAG AA guidelines **in both light and dark modes**.
*   Use ARIA roles (`role="navigation"`, `role="main"`, `role="region"`, `aria-labelledby`, etc.) where appropriate.
*   Ensure keyboard navigability and **enhanced visible focus indicators** for interactive elements.
*   **v10:** Support `prefers-reduced-motion` for users who prefer minimal animations.
*   **v10:** Include skip links for keyboard navigation.

## Directory Structure and File Organization

```
project-name/
├── index.html                           # Table of Contents (Rich UI)
├── topics/
│   ├── topic-01-introduction.html       # Topic pages
│   ├── topic-02-concepts.html
│   └── ...
├── assets/
│   └── images/
│       └── [ID]g-[PageNum]-[SeqNum].ext # All extracted images
├── styles/
│   └── main.css                         # Main stylesheet (v10 Complete UI)
└── js/
    ├── navigation.js                    # Navigation helpers
    ├── theme.js                         # Dark mode toggle
    └── interactions.js                  # UI interactions (copy, lightbox, etc.)
```

## Image Handling
1.  **Extraction Source:** Images are identified via `![](image_url)` links in the **reviewed and corrected MMD file** (Step 2).
2.  **Downloading:** Use `curl` or a script to download each unique image URL found in the MMD file.
3.  **Naming Convention (CRITICAL):** Save images locally using the exact filename derived from the Mathpix URL structure, including a sequence number based on order of appearance for that specific page image:
    *   Format: `[ID]g-[PageNum]-[SeqNum].ext`
    *   Example URL: `https://cdn.mathpix.com/cropped/2025_05_28_89850bb57a6655b01eb6g-08.jpg?height=1196&width=2897&top_left_y=499&top_left_x=216`
    *   If this is the 1st image from `g-08.jpg` on PDF page 8 in the MMD: `2025_05_28_89850bb57a6655b01eb6g-08-1.jpg`
    *   If this is the 2nd image from `g-08.jpg` on the same page: `2025_05_28_89850bb57a6655b01eb6g-08-2.jpg`
4.  **Storage Location:** Save all downloaded images in the `assets/images/` directory.
5.  **HTML Reference:** All image references in HTML (`<img>` tags) MUST use relative paths pointing to the `assets/images/` directory.
    *   Example: `<img src="../assets/images/2025_05_28_89850bb57a6655b01eb6g-08-1.jpg" ...>`
6.  **Alt Text (Mandatory):** Every `<img>` tag MUST have a descriptive `alt` attribute explaining the image content and context for learning. For purely decorative images, use `alt=""`.
7.  **v10 CRITICAL:** Images MUST be wrapped in `<figure>` with `<figcaption>` and support **lightbox viewing** on click with complete overlay structure.

## HTML Layout and Structure

### Topic Page Template (v10 Complete UI)
```html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Unit/Chunk Title] | [Document Name]</title>
    
    <!-- Preconnect for performance -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    
    <!-- Google Fonts - Inter for UI, Source Serif for reading -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap" rel="stylesheet">
    
    <!-- Main Stylesheet -->
    <link rel="stylesheet" href="../styles/main.css">
    
    <!-- MathJax Configuration -->
    <script>
    MathJax = {
        tex: {
            inlineMath: [['$', '$'], ['\\(', '\\)']],
            displayMath: [['$$', '$$'], ['\\[', '\\]']],
            processEscapes: true,
            processEnvironments: true,
            tags: 'ams'
        },
        svg: { fontCache: 'global' },
        options: {
            skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre']
        }
    };
    </script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
</head>
<body>
    <!-- Skip Link for Accessibility -->
    <a href="#main-content" class="skip-link">Skip to main content</a>
    
    <!-- Reading Progress Bar -->
    <div class="reading-progress-container" aria-hidden="true">
        <div class="reading-progress-bar" id="reading-progress"></div>
    </div>

    <!-- Theme Toggle (Fixed Position) -->
    <button class="theme-toggle" id="theme-toggle" aria-label="Toggle dark mode" title="Toggle dark mode">
        <span class="theme-toggle-icon light-icon">☀️</span>
        <span class="theme-toggle-icon dark-icon">🌙</span>
    </button>

    <div class="page-wrapper">
        <!-- Floating Mini-TOC (for long documents) -->
        <aside class="floating-toc" id="floating-toc" aria-label="On this page">
            <div class="floating-toc-header">
                <span class="floating-toc-icon">📑</span>
                <span>On this page</span>
            </div>
            <nav class="floating-toc-nav">
                <ul class="floating-toc-list">
                    <!-- Populated by JS based on h2/h3 headings -->
                </ul>
            </nav>
        </aside>

        <div class="container">
            <article class="document-article" role="main" id="main-content">
                <!-- Top Navigation -->
                <nav class="document-nav" role="navigation" aria-label="Document navigation">
                    <div class="nav-container">
                        <a href="../index.html" class="nav-button nav-button--toc" aria-label="Table of Contents">
                            <span class="nav-icon">📚</span>
                            <span class="nav-text">Contents</span>
                        </a>
                        
                        <a href="[previous-chunk.html]" class="nav-button nav-button--prev" aria-label="Previous section">
                            <span class="nav-icon">←</span>
                            <span class="nav-text">Previous</span>
                        </a>
                        
                        <div class="document-progress">
                            <div class="progress-indicator">
                                <span class="progress-current">[X]</span>
                                <span class="progress-separator">/</span>
                                <span class="progress-total">[Y]</span>
                            </div>
                            <div class="progress-bar-container" aria-hidden="true">
                                <div class="progress-bar-fill" style="width: [PERCENTAGE]%;"></div>
                            </div>
                            <span class="progress-label">[Topic Title]</span>
                        </div>
                        
                        <a href="[next-chunk.html]" class="nav-button nav-button--next" aria-label="Next section">
                            <span class="nav-text">Next</span>
                            <span class="nav-icon">→</span>
                        </a>
                    </div>
                </nav>

                <!-- Breadcrumb -->
                <nav class="breadcrumb" aria-label="Breadcrumb">
                    <ol class="breadcrumb-list">
                        <li class="breadcrumb-item"><a href="../index.html">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">[Parent Section]</a></li>
                        <li class="breadcrumb-item active" aria-current="page">[Current Page]</li>
                    </ol>
                </nav>

                <!-- Document Header -->
                <header class="document-header">
                    <div class="header-badge">
                        <span class="badge-icon">📖</span>
                        <span class="badge-text">[Section Type]</span>
                    </div>
                    <h1 class="document-title">[EXACT Unit/Chunk Title from PDF]</h1>
                    <div class="title-meta">
                        <span class="meta-item">
                            <span class="meta-icon">📄</span>
                            <span>[X] sections</span>
                        </span>
                        <span class="meta-item">
                            <span class="meta-icon">⏱️</span>
                            <span>[X] min read</span>
                        </span>
                    </div>
                </header>

                <!-- Main Content Area -->
                <div class="content-wrapper">
                    <!-- START: section-id-1 -->
                    <section id="section-id-1" class="content-section" aria-labelledby="heading-section-1">
                        <div class="section-header">
                            <div class="section-number" aria-hidden="true">01</div>
                            <h2 id="heading-section-1" class="section-title">
                                <span class="title-icon">📌</span>
                                [Exact Section Title from PDF]
                            </h2>
                        </div>
                        
                        <div class="content-card">
                            <p>[Verbatim paragraph text]</p>
                            
                            <!-- Enhanced List Example -->
                            <ul class="enhanced-list">
                                <li class="list-item">
                                    <span class="list-marker"></span>
                                    <span class="list-content">[Verbatim list item text]</span>
                                </li>
                                <li class="list-item">
                                    <span class="list-marker"></span>
                                    <span class="list-content">[Verbatim list item text]</span>
                                </li>
                            </ul>
                            
                            <!-- Collapsible Section Example -->
                            <details class="collapsible-section">
                                <summary class="collapsible-trigger">
                                    <span class="trigger-icon">▶</span>
                                    <span class="trigger-text">[Section Title]</span>
                                </summary>
                                <div class="collapsible-content">
                                    <p>[Verbatim content that can be collapsed]</p>
                                </div>
                            </details>
                        </div>
                    </section>
                    <!-- END: section-id-1 -->

                    <!-- Callout Examples -->
                    <aside class="callout callout--note" role="note">
                        <div class="callout-header">
                            <span class="callout-icon">💡</span>
                            <span class="callout-title">Note</span>
                        </div>
                        <div class="callout-content">
                            <p>[Supplementary note text]</p>
                        </div>
                    </aside>

                    <aside class="callout callout--warning" role="alert">
                        <div class="callout-header">
                            <span class="callout-icon">⚠️</span>
                            <span class="callout-title">Warning</span>
                        </div>
                        <div class="callout-content">
                            <p>[Warning text]</p>
                        </div>
                    </aside>

                    <aside class="callout callout--tip" role="note">
                        <div class="callout-header">
                            <span class="callout-icon">✨</span>
                            <span class="callout-title">Tip</span>
                        </div>
                        <div class="callout-content">
                            <p>[Tip text]</p>
                        </div>
                    </aside>

                    <!-- Definition Example -->
                    <p>A key concept is the <dfn class="term-definition" data-definition="[Full definition text]">Transfer Function</dfn>, which relates output to input.</p>

                    <!-- Code Block with Copy Button -->
                    <div class="code-block-wrapper">
                        <div class="code-block-header">
                            <span class="code-language">python</span>
                            <button class="copy-button" data-code="code-1" aria-label="Copy code">
                                <span class="copy-icon">📋</span>
                                <span class="copy-text">Copy</span>
                            </button>
                        </div>
                        <pre class="code-block" id="code-1"><code class="language-python"># Example Python Code
def hello_world():
    print("Hello, world!")

hello_world()</code></pre>
                    </div>

                    <!-- Table with Enhanced Styling -->
                    <div class="table-wrapper">
                        <div class="table-header">
                            <span class="table-icon">📊</span>
                            <span class="table-caption">[Exact Table Caption]</span>
                        </div>
                        <div class="table-container">
                            <table class="content-table">
                                <thead>
                                    <tr>
                                        <th>[Header 1]</th>
                                        <th>[Header 2]</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>[Content 1]</td>
                                        <td>[Content 2]</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <!-- v10 CRITICAL: Figure with Complete Lightbox Structure -->
                    <figure class="content-figure" data-lightbox="true">
                        <div class="figure-image-wrapper">
                            <img src="../assets/images/[filename].jpg" 
                                 alt="[Descriptive Alt Text]" 
                                 class="figure-image"
                                 loading="lazy">
                            <div class="figure-overlay">
                                <span class="overlay-icon">🔍</span>
                                <span class="overlay-text">Click to enlarge</span>
                            </div>
                        </div>
                        <figcaption class="figure-caption">[Exact caption from PDF]</figcaption>
                    </figure>

                    <!-- Key Points Section -->
                    <aside class="key-points-section" role="region" aria-labelledby="key-points-title">
                        <div class="key-points-wrapper">
                            <div class="key-points-header">
                                <span class="key-points-icon">⭐</span>
                                <h3 id="key-points-title" class="key-points-title">Key Points</h3>
                            </div>
                            <ul class="key-points-list">
                                <li class="key-point-item">
                                    <span class="point-marker">✓</span>
                                    <p><strong>[VERBATIM TEXT FROM ORIGINAL CONTENT]</strong></p>
                                </li>
                                <li class="key-point-item">
                                    <span class="point-marker">✓</span>
                                    <p><strong>[Another verbatim text snippet]</strong></p>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>

                <!-- Bottom Navigation -->
                <nav class="document-nav document-nav--bottom" role="navigation" aria-label="Document navigation">
                    <div class="nav-container">
                        <a href="[previous-chunk.html]" class="nav-button nav-button--prev nav-button--large">
                            <span class="nav-icon">←</span>
                            <div class="nav-content">
                                <span class="nav-label">Previous</span>
                                <span class="nav-title">[Previous Section Title]</span>
                            </div>
                        </a>
                        
                        <a href="../index.html" class="nav-button nav-button--toc">
                            <span class="nav-icon">📚</span>
                            <span class="nav-text">All Topics</span>
                        </a>
                        
                        <a href="[next-chunk.html]" class="nav-button nav-button--next nav-button--large">
                            <div class="nav-content">
                                <span class="nav-label">Next</span>
                                <span class="nav-title">[Next Section Title]</span>
                            </div>
                            <span class="nav-icon">→</span>
                        </a>
                    </div>
                </nav>
            </article>
        </div>
    </div>

    <!-- v10 CRITICAL: Lightbox Modal (MANDATORY) -->
    <div class="lightbox-modal" id="lightbox-modal" role="dialog" aria-modal="true" aria-label="Image viewer" hidden>
        <div class="lightbox-backdrop"></div>
        <div class="lightbox-content">
            <button class="lightbox-close" aria-label="Close image viewer">×</button>
            <img class="lightbox-image" src="" alt="">
            <p class="lightbox-caption"></p>
        </div>
    </div>

    <!-- v10 CRITICAL: All Three JavaScript Files (MANDATORY) -->
    <script src="../js/theme.js"></script>
    <script src="../js/navigation.js"></script>
    <script src="../js/interactions.js"></script>
</body>
</html>
```

## v10 Pain Point Prevention Guide

### 1. Lightbox Modal Checklist
**BEFORE FINALIZING ANY PAGE:**
- [ ] Lightbox modal HTML structure is present before `</body>`
- [ ] All images have `data-lightbox="true"` attribute
- [ ] All images have complete figure overlay with icon and text
- [ ] interactions.js file is included and functional
- [ ] Test: Click on any image should open lightbox

### 2. Navigation Consistency Checklist
**FOR EVERY PAGE:**
- [ ] Top navigation has correct prev/next links
- [ ] Bottom navigation has descriptive titles
- [ ] First page has disabled previous button
- [ ] Last page has appropriate next button (finish/return to index)
- [ ] Progress indicators show correct page numbers
- [ ] All navigation links are functional

### 3. JavaScript Dependencies Checklist
**ALL THREE FILES MUST BE PRESENT:**
- [ ] `js/theme.js` - Dark mode toggle functionality
- [ ] `js/navigation.js` - Progress bar and floating TOC
- [ ] `js/interactions.js` - Copy buttons and lightbox functionality
- [ ] All script tags are present in correct order
- [ ] Test: Theme toggle, copy buttons, and lightbox all work

### 4. Figure Structure Checklist
**FOR EVERY IMAGE:**
```html
<figure class="content-figure" data-lightbox="true">
    <div class="figure-image-wrapper">
        <img src="../assets/images/[filename].jpg" 
             alt="[Descriptive Alt Text]" 
             class="figure-image"
             loading="lazy">
        <div class="figure-overlay">
            <span class="overlay-icon">🔍</span>
            <span class="overlay-text">Click to enlarge</span>
        </div>
    </div>
    <figcaption class="figure-caption">[Caption if present]</figcaption>
</figure>
```

### 5. Common Error Prevention
**AVOID THESE MISTAKES:**
- ❌ Missing lightbox modal HTML structure
- ❌ Incomplete figure overlays (missing text or icon)
- ❌ Broken navigation links (404 errors)
- ❌ Missing JavaScript files
- ❌ Images without alt text
- ❌ Disabled navigation buttons that aren't actually disabled
- ❌ Missing theme toggle or progress bar
- ❌ Inconsistent navigation between pages

## CSS Styling Instructions (v10 Complete UI)

*[Include all the CSS from v9 with the following additions/modifications]*

```css
/* v10 CRITICAL: Enhanced Lightbox Styles */
.lightbox-modal {
    position: fixed;
    inset: 0;
    z-index: var(--z-modal);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-8);
}

.lightbox-modal[hidden] {
    display: none;
}

.lightbox-backdrop {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(4px);
}

.lightbox-content {
    position: relative;
    max-width: 90vw;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.lightbox-close {
    position: absolute;
    top: calc(-1 * var(--space-10));
    right: 0;
    width: 40px;
    height: 40px;
    background: white;
    border: none;
    border-radius: var(--radius-full);
    font-size: var(--font-size-2xl);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform var(--transition-fast);
}

.lightbox-close:hover {
    transform: scale(1.1);
}

.lightbox-image {
    max-width: 100%;
    max-height: 80vh;
    object-fit: contain;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-2xl);
}

.lightbox-caption {
    margin-top: var(--space-4);
    color: white;
    font-size: var(--font-size-sm);
    text-align: center;
}

/* v10 CRITICAL: Enhanced Figure Overlay */
.figure-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space-2);
    color: white;
    opacity: 0;
    transition: opacity var(--transition-base);
}

.figure-image-wrapper:hover .figure-overlay {
    opacity: 1;
}

.overlay-icon {
    font-size: var(--font-size-2xl);
}

.overlay-text {
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
}

/* v10 CRITICAL: Navigation Enhancements */
.nav-button.disabled,
.nav-button[aria-disabled="true"] {
    opacity: 0.4;
    cursor: not-allowed;
    pointer-events: none;
}

.nav-button--large {
    flex-direction: column;
    align-items: flex-start;
    padding: var(--space-3) var(--space-5);
    min-width: 200px;
}

.nav-button--large.nav-button--next {
    align-items: flex-end;
    text-align: right;
}

.nav-content {
    display: flex;
    flex-direction: column;
    gap: var(--space-1);
}

.nav-label {
    font-size: var(--font-size-xs);
    opacity: 0.8;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.nav-title {
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-semibold);
}
```

## JavaScript Files (v10 Complete)

### theme.js - Dark Mode Toggle
```javascript
// Theme Toggle - Dark/Light Mode
(function() {
    const THEME_KEY = 'preferred-theme';
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    
    // Get initial theme
    function getInitialTheme() {
        const savedTheme = localStorage.getItem(THEME_KEY);
        if (savedTheme) return savedTheme;
        
        // Check system preference
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    }
    
    // Apply theme
    function applyTheme(theme) {
        html.setAttribute('data-theme', theme);
        localStorage.setItem(THEME_KEY, theme);
    }
    
    // Initialize
    applyTheme(getInitialTheme());
    
    // Toggle handler
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(newTheme);
        });
    }
    
    // Listen for system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem(THEME_KEY)) {
            applyTheme(e.matches ? 'dark' : 'light');
        }
    });
})();
```

### navigation.js - Navigation & Progress
```javascript
// Navigation and Progress Tracking
(function() {
    // Reading Progress Bar
    const progressBar = document.getElementById('reading-progress');
    
    function updateReadingProgress() {
        if (!progressBar) return;
        
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;
        
        progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    }
    
    window.addEventListener('scroll', updateReadingProgress, { passive: true });
    updateReadingProgress();
    
    // Floating TOC
    const floatingToc = document.getElementById('floating-toc');
    const tocList = floatingToc?.querySelector('.floating-toc-list');
    
    if (floatingToc && tocList) {
        // Build TOC from headings
        const headings = document.querySelectorAll('.content-section h2, .content-section h3');
        
        headings.forEach((heading, index) => {
            if (!heading.id) {
                heading.id = `heading-${index}`;
            }
            
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `#${heading.id}`;
            a.textContent = heading.textContent.replace(/^[\s\S]*?(?=[A-Za-z])/, ''); // Remove icons
            a.classList.add(heading.tagName === 'H3' ? 'toc-h3' : 'toc-h2');
            li.appendChild(a);
            tocList.appendChild(li);
        });
        
        // Show/hide TOC based on scroll
        function updateTocVisibility() {
            const scrollY = window.scrollY;
            const showThreshold = 300;
            
            if (scrollY > showThreshold) {
                floatingToc.classList.add('visible');
            } else {
                floatingToc.classList.remove('visible');
            }
        }
        
        window.addEventListener('scroll', updateTocVisibility, { passive: true });
        
        // Highlight active section
        const tocLinks = tocList.querySelectorAll('a');
        
        function updateActiveSection() {
            let currentSection = null;
            
            headings.forEach((heading) => {
                const rect = heading.getBoundingClientRect();
                if (rect.top <= 150) {
                    currentSection = heading.id;
                }
            });
            
            tocLinks.forEach((link) => {
                link.classList.toggle('active', link.getAttribute('href') === `#${currentSection}`);
            });
        }
        
        window.addEventListener('scroll', updateActiveSection, { passive: true });
    }
    
    // Disabled navigation buttons
    const disabledButtons = document.querySelectorAll('.nav-button.disabled, .nav-button[aria-disabled="true"]');
    disabledButtons.forEach(button => {
        button.addEventListener('click', (e) => e.preventDefault());
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
})();
```

### interactions.js - UI Interactions (v10 Enhanced)
```javascript
// UI Interactions - Copy, Lightbox, Tooltips
(function() {
    // Copy Code Button
    document.querySelectorAll('.copy-button').forEach(button => {
        button.addEventListener('click', async () => {
            const codeId = button.getAttribute('data-code');
            const codeBlock = document.getElementById(codeId);
            
            if (!codeBlock) return;
            
            try {
                await navigator.clipboard.writeText(codeBlock.textContent);
                
                button.classList.add('copied');
                const originalText = button.querySelector('.copy-text');
                if (originalText) {
                    const original = originalText.textContent;
                    originalText.textContent = 'Copied!';
                    
                    setTimeout(() => {
                        button.classList.remove('copied');
                        originalText.textContent = original;
                    }, 2000);
                }
            } catch (err) {
                console.error('Failed to copy:', err);
            }
        });
    });
    
    // v10 CRITICAL: Enhanced Lightbox for Images
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImage = lightboxModal?.querySelector('.lightbox-image');
    const lightboxCaption = lightboxModal?.querySelector('.lightbox-caption');
    const lightboxClose = lightboxModal?.querySelector('.lightbox-close');
    const lightboxBackdrop = lightboxModal?.querySelector('.lightbox-backdrop');
    
    if (lightboxModal) {
        // Open lightbox
        document.querySelectorAll('.content-figure[data-lightbox="true"]').forEach(figure => {
            const img = figure.querySelector('.figure-image');
            const caption = figure.querySelector('.figure-caption');
            
            figure.addEventListener('click', () => {
                if (img) {
                    lightboxImage.src = img.src;
                    lightboxImage.alt = img.alt;
                }
                if (caption && lightboxCaption) {
                    lightboxCaption.textContent = caption.textContent;
                } else if (lightboxCaption) {
                    lightboxCaption.textContent = '';
                }
                lightboxModal.hidden = false;
                document.body.style.overflow = 'hidden';
            });
        });
        
        // Close lightbox
        function closeLightbox() {
            lightboxModal.hidden = true;
            document.body.style.overflow = '';
        }
        
        lightboxClose?.addEventListener('click', closeLightbox);
        lightboxBackdrop?.addEventListener('click', closeLightbox);
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !lightboxModal.hidden) {
                closeLightbox();
            }
        });
    } else {
        console.warn('Lightbox modal not found! Make sure the lightbox HTML structure is present.');
    }
    
    // Collapsible sections animation
    document.querySelectorAll('.collapsible-section').forEach(details => {
        const content = details.querySelector('.collapsible-content');
        
        details.addEventListener('toggle', () => {
            if (details.open && content) {
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
    
    // Definition tooltips (enhanced)
    document.querySelectorAll('.term-definition').forEach(term => {
        // Touch device support
        term.addEventListener('click', (e) => {
            if ('ontouchstart' in window) {
                e.preventDefault();
                // Toggle tooltip visibility on touch
                term.classList.toggle('tooltip-visible');
            }
        });
    });
})();
```

## v10 Final Verification Checklist

### Content Verification
*   [ ] **100% verbatim content preservation** verified against original PDF.
*   [ ] All text, formulas, tables, and code snippets match exactly.
*   [ ] List items converted from patterns maintain exact text content.
*   [ ] No content omitted, summarized, or paraphrased.
*   [ ] All images have descriptive alt text.

### v10 Complete UI Verification
*   [ ] **Lightbox modal HTML structure** present in every page
*   [ ] **All images have complete figure overlays** with icon and text
*   [ ] **Theme toggle** works and persists preference
*   [ ] **Reading progress bar** updates on scroll
*   [ ] **Navigation consistency** - all prev/next links work
*   [ ] **Bottom navigation** has descriptive titles
*   [ ] **All three JavaScript files** included and functional
*   [ ] **Skip link** works for accessibility
*   [ ] **Dark mode** fully functional in all components
*   [ ] **Responsive design** works at all breakpoints
*   [ ] **Copy buttons** work for code blocks
*   [ ] **Collapsible sections** animate properly
*   [ ] **Floating TOC** appears and highlights correctly

### Technical Verification
*   [ ] HTML is valid and semantic
*   [ ] All links functional (no 404 errors)
*   [ ] Images load correctly with proper paths
*   [ ] MathJax renders equations properly
*   [ ] Accessibility standards met (WCAG AA)
*   [ ] Print styles produce clean output
*   [ ] No JavaScript console errors

### Pain Point Prevention
*   [ ] **No missing lightbox modals**
*   [ ] **No incomplete figure overlays**
*   [ ] **No broken navigation links**
*   [ ] **No missing JavaScript dependencies**
*   [ ] **No images without alt text**
*   [ ] **No inconsistent navigation patterns**

## Applied Agent Strategy Example (v10)

This section documents the concrete strategy for v10 Complete UI conversion:

1.  **Environment Setup:**
    *   Create complete directory structure including `js/` folder.
    *   Write `main.css` with all v10 Complete UI styles.
    *   Write all three JavaScript files: `theme.js`, `navigation.js`, `interactions.js`.

2.  **MMD Conversion & Review:**
    *   Execute Mathpix OCR command.
    *   Review and correct MMD file thoroughly.
    *   Clean artifacts and identify list patterns.

3.  **HTML Generation with v10 Complete Components:**
    *   Use v10 topic page template with ALL required elements.
    *   Include lightbox modal HTML structure in every page.
    *   Add complete figure overlays to all images.
    *   Implement consistent navigation patterns.

4.  **Component Completeness Check:**
    *   Verify lightbox modal present and functional.
    *   Test all figure overlays have icon and text.
    *   Confirm all three JavaScript files included.
    *   Test theme toggle, progress bar, and navigation.

5.  **Pain Point Prevention:**
    *   Use v10 Component Checklist for every page.
    *   Test lightbox functionality on all images.
    *   Verify navigation consistency across all pages.
    *   Confirm no missing dependencies or broken links.

6.  **Final Verification:**
    *   Perform comprehensive testing using v10 checklist.
    *   Verify 100% content preservation.
    *   Test all interactive features.
    *   Confirm accessibility compliance.

Success criteria: 100% original knowledge preserved with complete, functional, and accessible modern UI that prevents all common implementation pain points.