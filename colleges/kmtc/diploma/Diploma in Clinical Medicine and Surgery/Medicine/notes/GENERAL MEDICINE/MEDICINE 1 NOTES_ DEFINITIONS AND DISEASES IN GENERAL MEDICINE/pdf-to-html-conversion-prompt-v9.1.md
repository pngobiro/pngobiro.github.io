# PDF to HTML Conversion System Prompt (v9.1) - Rich UI Edition

**Version:** 9.1 Enhanced Rich UI  
**Last Updated:** December 15, 2025  
**Focus:** Modern UI/UX patterns with 100% content fidelity

---

## What's New in v9.1
- **Enhanced Navigation**: Top and bottom navigation with Previous/Home/Next buttons
- **Improved Progress Indicator**: Visual progress bar showing topic position
- **Template Update**: Use `topic-template-v1.1.html` for new conversions
- **Navigation Accessibility**: Proper ARIA labels and disabled states for first/last topics

---

## Overview
This is the comprehensive **PDF to HTML Conversion System Prompt (v9) - Rich UI Edition**, featuring enhanced content organization patterns, advanced UI components, and modern design systems while maintaining absolute content fidelity. This version includes all enhancements from our pharmacology study guide implementation, including grid layouts, enhanced callouts, comparison tables, and mobile-first responsive design.

## Core Mission
Convert PDF documents into **visually stunning, accessible, and pedagogically effective** HTML pages while ensuring **100% VERBATIM content preservation**. Create highly appealing and effective learning materials with **modern UI/UX patterns**, organized into **logically coherent chunks**, that maintain absolute fidelity to the original text content.

The visual structure of the original PDF, where it indicates a deliberate grouping of related content (like side-by-side lists or paragraphs), should be interpreted as a logical grouping but translated into a **linear ("top and bottom") flow** in the HTML, following the order provided by the MMD. The goal is to make the *content* readable and understandable through clear semantic structure, **rich visual design**, and modern UI components, *not* by recreating complex multi-column PDF layouts.

## What's New in v9 Rich UI Edition (Enhanced Content Patterns)
- **Enhanced Content Organization**: Section numbering with contextual icons
- **Advanced Callout System**: Learning objectives, mechanisms, clinical protocols
- **Grid Layout System**: Multi-column content layouts for process flows
- **Enhanced Table Patterns**: Comparison tables for drug data with responsive design
- **Improved List Formatting**: Strategic bold emphasis for pharmacological terms
- **Structured Header Badges**: Subject-specific icons with topic numbering
- **Content Card Architecture**: Consistent content wrapper patterns
- **Mobile-First Grid**: Responsive grid system that adapts to all screen sizes

## What's New in v9 (Rich UI Enhancements)
- **Modern Design System**: Glassmorphism effects, subtle gradients, refined shadows
- **Dark Mode Support**: Full dark/light theme toggle with system preference detection
- **Enhanced Typography**: Variable font weights, improved line heights, better visual hierarchy
- **Interactive Components**: Collapsible sections, tabs, tooltips, smooth scroll
- **Reading Progress**: Floating progress bar showing scroll position
- **Floating TOC**: Sticky table of contents for long documents
- **Micro-interactions**: Hover effects, transitions, focus states
- **Enhanced Code Blocks**: Line numbers, copy button, syntax highlighting ready
- **Improved Cards**: Gradient borders, hover lift effects, icon badges
- **Better Mobile UX**: Touch-friendly targets, swipe hints, bottom navigation
- **Print Optimization**: Clean print styles preserving content hierarchy
- **Accessibility+**: Enhanced focus indicators, skip links, reduced motion support

## Conversion Workflow Overview
1.  **Planning & Setup**: Create conversion plan, prepare environment, gather resources.
2.  **Initial Extraction**: Convert PDF to intermediate format (MMD) using Mathpix.
3.  **MMD Review & Correction**: **Manually open and review the generated MMD file. Correct any obvious OCR errors, especially in tables, complex equations, or code snippets.** **Crucially, identify and remove spurious characters (like 't ', '• ' used inconsistently outside of clear list patterns) that are artifacts of the PDF conversion process and are NOT part of the original text content.** Identify text patterns that represent intended lists (e.g., lines beginning consistently with '-', '*', '•', or numbered prefixes). This step is crucial *before* HTML conversion.
4.  **Content Chunking**: Divide *corrected* MMD content into **logically coherent sections** based on document structure (chapters, major sections). Use common sense to avoid overly long or short files.
5.  **HTML Templating**: Set up base HTML structure with proper semantic elements, accessibility features, and **v9 Rich UI components** based on the **HTML Layout and Structure** section below.
6.  **Content Transfer & Semantic Conversion**: Move *corrected* content from MMD to HTML chunks with proper semantic markup. **Convert identified list-like patterns into proper HTML `<ul>` or `<ol>` elements, preserving the exact text content of each item.** Maintain the **linear flow** provided by the MMD.
7.  **100% Content Verification**: Validate verbatim content preservation against the *original PDF source* for each chunk. **Specifically verify that all original text, formulas, data in tables, and code snippets are present exactly as in the source PDF (after correcting OCR errors). Verify that the text within converted list items is verbatim.**
8.  **Visual Enhancement & Rich UI Implementation**: Apply styling and layout enhancements using the **CSS Styling Instructions** below *only after* content verification (Step 7) is complete. Implement **interactive components, dark mode, and micro-interactions**.
9.  **Resource Handling**: Extract/download and organize images and other media using the specified **Image Handling** rules and correct filenames.
10. **Technical & Accessibility Validation**: Validate HTML, CSS, links, and accessibility standards.
11. **Finalization**: Link pages, test navigation thoroughly, verify dark mode, and review final output.

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
    *   **v9 NEW:** Include floating reading progress bar at top of viewport.

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
    *   **v9 NEW:** Adding interactive UI components (collapsible sections, tabs, tooltips) that organize but do not alter content.
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
*   **ALLOWED:** Adding interactive elements (collapsible sections, tabs, tooltips for definitions) that reveal or organize the *original* content.
*   **ALLOWED:** Improving scannability through visual hierarchy (headings, spacing, distinct content blocks).
*   **v9 ALLOWED:** Dark mode toggle, reading progress indicators, floating navigation, micro-interactions.

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
2.  **Apply v9 Rich UI Enhancements**:
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

### Accessibility Implementation
*   **Mandatory:** All images (`<img>`) MUST have descriptive `alt` text. Decorative images should have `alt=""`.
*   Use semantic HTML correctly (headings in order, lists for lists, etc.).
*   Ensure sufficient color contrast according to WCAG AA guidelines **in both light and dark modes**.
*   Use ARIA roles (`role="navigation"`, `role="main"`, `role="region"`, `aria-labelledby`, etc.) where appropriate.
*   Ensure keyboard navigability and **enhanced visible focus indicators** for interactive elements.
*   **v9:** Support `prefers-reduced-motion` for users who prefer minimal animations.
*   **v9:** Include skip links for keyboard navigation.

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
│   └── main.css                         # Main stylesheet (v9 Rich UI)
└── js/
    ├── navigation.js                    # Navigation helpers
    ├── theme.js                         # Dark mode toggle
    └── interactions.js                  # UI interactions (copy, collapse, etc.)
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
7.  **v9 NEW:** Images should be wrapped in `<figure>` with `<figcaption>` and support **lightbox viewing** on click.

## HTML Layout and Structure

### Topic Page Template (v9.1 Rich UI with Top/Bottom Navigation)

**Template File:** `topic-template-v1.1.html`

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
    <link rel="stylesheet" href="styles/main.css">
</head>
<body>
    <!-- Skip Link for Accessibility -->
    <a href="#main-content" class="skip-link">Skip to main content</a>
    
    <!-- Theme Toggle (Fixed Position) -->
    <button class="theme-toggle" id="theme-toggle" aria-label="Toggle dark mode">
        <span class="theme-toggle-icon light-icon">☀️</span>
        <span class="theme-toggle-icon dark-icon">🌙</span>
    </button>

    <!-- Reading Progress Bar -->
    <div class="reading-progress-container">
        <div class="reading-progress-bar" id="reading-progress"></div>
    </div>

    <div class="page-wrapper">
        <div class="container">
            <article class="document-article">
                
                <!-- TOP NAVIGATION (v9.1 NEW) -->
                <nav class="document-nav" role="navigation" aria-label="Document Navigation">
                    <div class="nav-links">
                        <a href="[previous-file.html]" class="nav-button nav-button--previous">
                            <span class="nav-icon">←</span>
                            <span class="nav-text">Previous</span>
                        </a>
                        
                        <a href="../index.html" class="nav-button">
                            <span class="nav-icon">🏠</span>
                            <span class="nav-text">Home</span>
                        </a>
                        
                        <a href="[next-file.html]" class="nav-button nav-button--next">
                            <span class="nav-text">Next</span>
                            <span class="nav-icon">→</span>
                        </a>
                    </div>
                    <div class="document-progress">
                        <div class="progress-bar" aria-hidden="true">
                            <div class="progress-fill" style="width: [PERCENTAGE]%;"></div>
                        </div>
                        <span class="progress-text">Topic [CURRENT] of [TOTAL]</span>
                    </div>
                </nav>

                <!-- Document Header -->
                <header class="document-header">
                    <div class="header-badge">
                        <span>🧠</span>
                        <span>Topic [XX]</span>
                    </div>
                    <h1 class="document-title">[EXACT Unit/Chunk Title from PDF]</h1>
                    <div class="title-meta">
                        <div class="meta-item">
                            <span>📚</span>
                            <span>[Topic description or category]</span>
                        </div>
                        <div class="meta-item">
                            <span>⏱️</span>
                            <span>[X-Y] min read</span>
                        </div>
                    </div>
                </header>

                <main id="main-content" class="content-wrapper">
                    <!-- START: section-id-1 -->
                    <section class="content-section" id="section-id">
                        <div class="section-header">
                            <div class="section-number">[XX]</div>
                            <h2 class="section-title">
                                <span class="title-icon">[🎯]</span>
                                [Exact Section Title from PDF]
                            </h2>
                        </div>

                        <div class="content-card">
                            <p>[Verbatim paragraph text]</p>
                            
                            <!-- Enhanced List Example -->
                            <ul>
                                <li><strong>Bold term</strong> definition or key point</li>
                                <li>Another item with <strong>emphasis</strong></li>
                                <li>Third item with critical information</li>
                            </ul>
                        </div>
                    </section>
                    <!-- END: section-id-1 -->
                </main>

                <!-- BOTTOM NAVIGATION (v9.1 NEW) -->
                <nav class="document-nav" role="navigation" aria-label="Document Navigation">
                    <div class="nav-links">
                        <a href="[previous-file.html]" class="nav-button nav-button--previous">
                            <span class="nav-icon">←</span>
                            <span class="nav-text">Previous</span>
                        </a>
                        
                        <a href="../index.html" class="nav-button">
                            <span class="nav-icon">🏠</span>
                            <span class="nav-text">Home</span>
                        </a>
                        
                        <a href="[next-file.html]" class="nav-button nav-button--next">
                            <span class="nav-text">Next</span>
                            <span class="nav-icon">→</span>
                        </a>
                    </div>
                    <div class="document-progress">
                        <div class="progress-bar" aria-hidden="true">
                            <div class="progress-fill" style="width: [PERCENTAGE]%;"></div>
                        </div>
                        <span class="progress-text">Topic [CURRENT] of [TOTAL]</span>
                    </div>
                </nav>

            </article>
        </div>
    </div>
    
    <script src="js/navigation.js"></script>
</body>
</html>
```

### Navigation Placeholders (v9.1)
Replace these placeholders when generating topic pages:
- `[previous-file.html]` - Link to previous topic (add `disabled` class for first topic)
- `[next-file.html]` - Link to next topic (add `disabled` class for last topic)
- `[PERCENTAGE]` - Progress percentage (e.g., topic 3 of 10 = 30%)
- `[CURRENT]` - Current topic number
- `[TOTAL]` - Total number of topics

### Disabled Navigation Example
For the first topic (no previous):
```html
<a href="#" class="nav-button nav-button--previous disabled" aria-disabled="true">
```

For the last topic (no next):
```html
<a href="#" class="nav-button nav-button--next disabled" aria-disabled="true">
```

### Additional Content Patterns
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

                    <!-- Enhanced Callout Examples -->
                    <div class="callout callout--note">
                        <div class="callout-header">
                            <span class="callout-icon">💡</span>
                            <h4 class="callout-title">Key Learning Objective</h4>
                        </div>
                        <div class="callout-content">
                            <p>[Learning objective or important note text]</p>
                        </div>
                    </div>

                    <div class="callout callout--info">
                        <div class="callout-header">
                            <span class="callout-icon">🔄</span>
                            <h4 class="callout-title">Mechanism or Process</h4>
                        </div>
                        <div class="callout-content">
                            <p><strong>Key term:</strong> [Detailed explanation]</p>
                        </div>
                    </div>

                    <div class="callout callout--warning">
                        <div class="callout-header">
                            <span class="callout-icon">⚠️</span>
                            <h4 class="callout-title">Clinical Protocol</h4>
                        </div>
                        <div class="callout-content">
                            <p>The action of [agent] is [reversal mechanism] once [condition] is no longer desired.</p>
                        </div>
                    </div>

                    <div class="callout callout--tip">
                        <div class="callout-header">
                            <span class="callout-icon">✨</span>
                            <h4 class="callout-title">Clinical Tip</h4>
                        </div>
                        <div class="callout-content">
                            <p>[Practical clinical advice or tip]</p>
                        </div>
                    </div>

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

                    <!-- Enhanced Table with Comparison Data -->
                    <h3>[Table Title]</h3>
                    <div class="table-responsive">
                        <table class="comparison-table">
                            <thead>
                                <tr>
                                    <th>[Drug/Agent Name]</th>
                                    <th>[Characteristic 1]</th>
                                    <th>[Characteristic 2]</th>
                                    <th>[Comments]</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>[Agent Name]</strong></td>
                                    <td>[Onset/Recovery characteristics]</td>
                                    <td>[Duration characteristics]</td>
                                    <td>[Clinical comments and considerations]</td>
                                </tr>
                                <tr>
                                    <td><strong>[Another Agent]</strong></td>
                                    <td>[Characteristics]</td>
                                    <td>[Duration]</td>
                                    <td>[Additional clinical notes]</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- Standard Data Table -->
                    <div class="table-wrapper">
                        <div class="table-header">
                            <span class="table-icon">📊</span>
                            <span class="table-caption">[Exact Table Caption from PDF]</span>
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

                    <!-- Grid Layout for Multi-column Content -->
                    <div class="grid grid-3">
                        <div class="grid-item">
                            <h4>🟢 [Category 1]</h4>
                            <p>[Description of first possibility or pathway]</p>
                        </div>
                        <div class="grid-item">
                            <h4>🔴 [Category 2]</h4>
                            <p>[Description of second possibility with example]</p>
                        </div>
                        <div class="grid-item">
                            <h4>🟡 [Category 3]</h4>
                            <p>[Description of third possibility]</p>
                        </div>
                    </div>

                    <!-- Figure with Lightbox -->
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
                </main>
            </article>
        </div>
    </div>

    <!-- Lightbox Modal -->
    <div class="lightbox-modal" id="lightbox-modal" role="dialog" aria-modal="true" aria-label="Image viewer" hidden>
        <div class="lightbox-backdrop"></div>
        <div class="lightbox-content">
            <button class="lightbox-close" aria-label="Close image viewer">×</button>
            <img class="lightbox-image" src="" alt="">
            <p class="lightbox-caption"></p>
        </div>
    </div>

    <!-- Scripts -->
    <script src="../js/theme.js"></script>
    <script src="../js/navigation.js"></script>
    <script src="../js/interactions.js"></script>
</body>
</html>
```

## CSS Styling Instructions (v9 Rich UI)

```css
/* ========================================
   PDF to HTML Conversion - v9 Rich UI
   Modern Design System with Dark Mode
   ======================================== */

/* ----------------------------------------
   CSS Custom Properties (Design Tokens)
   ---------------------------------------- */
:root {
    /* Color Palette - Light Mode */
    --color-primary: #4f46e5;
    --color-primary-light: #818cf8;
    --color-primary-dark: #3730a3;
    --color-secondary: #0ea5e9;
    --color-accent: #f59e0b;
    --color-success: #10b981;
    --color-warning: #f59e0b;
    --color-danger: #ef4444;
    --color-info: #3b82f6;
    
    /* Neutral Colors - Light Mode */
    --color-bg-primary: #ffffff;
    --color-bg-secondary: #f8fafc;
    --color-bg-tertiary: #f1f5f9;
    --color-bg-elevated: #ffffff;
    --color-surface: #ffffff;
    --color-surface-hover: #f8fafc;
    
    /* Text Colors - Light Mode */
    --color-text-primary: #1e293b;
    --color-text-secondary: #475569;
    --color-text-tertiary: #64748b;
    --color-text-muted: #94a3b8;
    --color-text-inverse: #ffffff;
    
    /* Border Colors */
    --color-border: #e2e8f0;
    --color-border-light: #f1f5f9;
    --color-border-focus: var(--color-primary);
    
    /* Gradients */
    --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --gradient-secondary: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    --gradient-accent: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    --gradient-success: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
    --gradient-warm: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
    --gradient-cool: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
    --gradient-card-border: linear-gradient(135deg, var(--color-primary-light), var(--color-secondary));
    
    /* Typography */
    --font-family-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    --font-family-serif: 'Source Serif 4', Georgia, 'Times New Roman', serif;
    --font-family-mono: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
    
    --font-size-xs: 0.75rem;
    --font-size-sm: 0.875rem;
    --font-size-base: 1rem;
    --font-size-lg: 1.125rem;
    --font-size-xl: 1.25rem;
    --font-size-2xl: 1.5rem;
    --font-size-3xl: 1.875rem;
    --font-size-4xl: 2.25rem;
    --font-size-5xl: 3rem;
    
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    
    --line-height-tight: 1.25;
    --line-height-normal: 1.5;
    --line-height-relaxed: 1.75;
    --line-height-loose: 2;
    
    /* Spacing Scale */
    --space-1: 0.25rem;
    --space-2: 0.5rem;
    --space-3: 0.75rem;
    --space-4: 1rem;
    --space-5: 1.25rem;
    --space-6: 1.5rem;
    --space-8: 2rem;
    --space-10: 2.5rem;
    --space-12: 3rem;
    --space-16: 4rem;
    --space-20: 5rem;
    
    /* Border Radius */
    --radius-sm: 0.25rem;
    --radius-md: 0.5rem;
    --radius-lg: 0.75rem;
    --radius-xl: 1rem;
    --radius-2xl: 1.5rem;
    --radius-full: 9999px;
    
    /* Shadows */
    --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
    --shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
    --shadow-glow: 0 0 20px rgb(79 70 229 / 0.3);
    
    /* Glassmorphism */
    --glass-bg: rgba(255, 255, 255, 0.7);
    --glass-border: rgba(255, 255, 255, 0.3);
    --glass-blur: blur(10px);
    
    /* Transitions */
    --transition-fast: 150ms ease;
    --transition-base: 250ms ease;
    --transition-slow: 350ms ease;
    --transition-bounce: 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
    
    /* Z-Index Scale */
    --z-dropdown: 100;
    --z-sticky: 200;
    --z-fixed: 300;
    --z-modal-backdrop: 400;
    --z-modal: 500;
    --z-tooltip: 600;
    
    /* Container */
    --container-max-width: 1200px;
    --content-max-width: 800px;
}

/* ----------------------------------------
   Dark Mode Variables
   ---------------------------------------- */
[data-theme="dark"] {
    --color-bg-primary: #0f172a;
    --color-bg-secondary: #1e293b;
    --color-bg-tertiary: #334155;
    --color-bg-elevated: #1e293b;
    --color-surface: #1e293b;
    --color-surface-hover: #334155;
    
    --color-text-primary: #f1f5f9;
    --color-text-secondary: #cbd5e1;
    --color-text-tertiary: #94a3b8;
    --color-text-muted: #64748b;
    
    --color-border: #334155;
    --color-border-light: #1e293b;
    
    --glass-bg: rgba(30, 41, 59, 0.8);
    --glass-border: rgba(51, 65, 85, 0.5);
    
    --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.3), 0 1px 2px -1px rgb(0 0 0 / 0.3);
    --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.4), 0 2px 4px -2px rgb(0 0 0 / 0.3);
    --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.4), 0 4px 6px -4px rgb(0 0 0 / 0.3);
}

/* ----------------------------------------
   Reset & Base Styles
   ---------------------------------------- */
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    font-size: 16px;
}

@media (prefers-reduced-motion: reduce) {
    html {
        scroll-behavior: auto;
    }
    
    *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}

body {
    font-family: var(--font-family-sans);
    font-size: var(--font-size-base);
    line-height: var(--line-height-relaxed);
    color: var(--color-text-primary);
    background-color: var(--color-bg-secondary);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

/* ----------------------------------------
   Skip Link (Accessibility)
   ---------------------------------------- */
.skip-link {
    position: absolute;
    top: -100%;
    left: var(--space-4);
    padding: var(--space-3) var(--space-4);
    background: var(--color-primary);
    color: var(--color-text-inverse);
    text-decoration: none;
    font-weight: var(--font-weight-semibold);
    border-radius: var(--radius-md);
    z-index: var(--z-tooltip);
    transition: top var(--transition-fast);
}

.skip-link:focus {
    top: var(--space-4);
}

/* ----------------------------------------
   Reading Progress Bar
   ---------------------------------------- */
.reading-progress-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--color-bg-tertiary);
    z-index: var(--z-fixed);
}

.reading-progress-bar {
    height: 100%;
    background: var(--gradient-primary);
    width: 0%;
    transition: width 100ms ease-out;
    border-radius: 0 var(--radius-full) var(--radius-full) 0;
}

/* ----------------------------------------
   Theme Toggle
   ---------------------------------------- */
.theme-toggle {
    position: fixed;
    top: var(--space-6);
    right: var(--space-6);
    width: 48px;
    height: 48px;
    border-radius: var(--radius-full);
    border: none;
    background: var(--glass-bg);
    backdrop-filter: var(--glass-blur);
    -webkit-backdrop-filter: var(--glass-blur);
    box-shadow: var(--shadow-lg);
    cursor: pointer;
    z-index: var(--z-fixed);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.theme-toggle:hover {
    transform: scale(1.1);
    box-shadow: var(--shadow-xl);
}

.theme-toggle:focus {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
}

.theme-toggle-icon {
    font-size: var(--font-size-xl);
    transition: opacity var(--transition-fast), transform var(--transition-base);
}

[data-theme="light"] .dark-icon,
[data-theme="dark"] .light-icon {
    display: none;
}

/* ----------------------------------------
   Page Layout
   ---------------------------------------- */
.page-wrapper {
    display: flex;
    min-height: 100vh;
}

.container {
    flex: 1;
    max-width: var(--container-max-width);
    margin: 0 auto;
    padding: var(--space-6);
}

.document-article {
    background: var(--color-bg-primary);
    border-radius: var(--radius-2xl);
    box-shadow: var(--shadow-xl);
    overflow: hidden;
}

.content-wrapper {
    max-width: var(--content-max-width);
    margin: 0 auto;
    padding: var(--space-8);
}

/* ----------------------------------------
   Floating Table of Contents
   ---------------------------------------- */
.floating-toc {
    position: fixed;
    left: var(--space-6);
    top: 50%;
    transform: translateY(-50%);
    width: 220px;
    background: var(--glass-bg);
    backdrop-filter: var(--glass-blur);
    -webkit-backdrop-filter: var(--glass-blur);
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-xl);
    padding: var(--space-4);
    box-shadow: var(--shadow-lg);
    z-index: var(--z-sticky);
    max-height: 60vh;
    overflow-y: auto;
    opacity: 0;
    visibility: hidden;
    transition: opacity var(--transition-base), visibility var(--transition-base);
}

.floating-toc.visible {
    opacity: 1;
    visibility: visible;
}

.floating-toc-header {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
    margin-bottom: var(--space-3);
    padding-bottom: var(--space-3);
    border-bottom: 1px solid var(--color-border);
}

.floating-toc-list {
    list-style: none;
}

.floating-toc-list li {
    margin-bottom: var(--space-1);
}

.floating-toc-list a {
    display: block;
    padding: var(--space-2) var(--space-3);
    font-size: var(--font-size-sm);
    color: var(--color-text-tertiary);
    text-decoration: none;
    border-radius: var(--radius-md);
    transition: all var(--transition-fast);
}

.floating-toc-list a:hover,
.floating-toc-list a.active {
    background: var(--color-primary);
    color: var(--color-text-inverse);
}

@media (max-width: 1400px) {
    .floating-toc {
        display: none;
    }
}

/* ----------------------------------------
   Navigation
   ---------------------------------------- */
.document-nav {
    background: var(--gradient-primary);
    padding: var(--space-4) var(--space-6);
}

.nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-4);
    flex-wrap: wrap;
}

.nav-button {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-2) var(--space-4);
    background: rgba(255, 255, 255, 0.15);
    color: var(--color-text-inverse);
    text-decoration: none;
    font-weight: var(--font-weight-medium);
    font-size: var(--font-size-sm);
    border-radius: var(--radius-lg);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all var(--transition-fast);
}

.nav-button:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
}

.nav-button:focus {
    outline: 2px solid white;
    outline-offset: 2px;
}

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
}

.nav-button--large.nav-button--next {
    align-items: flex-end;
    text-align: right;
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

.document-progress {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-2);
    min-width: 150px;
}

.progress-indicator {
    display: flex;
    align-items: center;
    gap: var(--space-1);
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-bold);
    color: var(--color-text-inverse);
}

.progress-separator {
    opacity: 0.5;
}

.progress-bar-container {
    width: 100%;
    height: 4px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: var(--radius-full);
    overflow: hidden;
}

.progress-bar-fill {
    height: 100%;
    background: white;
    border-radius: var(--radius-full);
    transition: width var(--transition-base);
}

.progress-label {
    font-size: var(--font-size-xs);
    opacity: 0.8;
}

/* ----------------------------------------
   Breadcrumb
   ---------------------------------------- */
.breadcrumb {
    padding: var(--space-4) var(--space-6);
    background: var(--color-bg-tertiary);
    border-bottom: 1px solid var(--color-border);
}

.breadcrumb-list {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    list-style: none;
    font-size: var(--font-size-sm);
}

.breadcrumb-item {
    display: flex;
    align-items: center;
}

.breadcrumb-item:not(:last-child)::after {
    content: '/';
    margin-left: var(--space-2);
    color: var(--color-text-muted);
}

.breadcrumb-item a {
    color: var(--color-primary);
    text-decoration: none;
    transition: color var(--transition-fast);
}

.breadcrumb-item a:hover {
    color: var(--color-primary-dark);
    text-decoration: underline;
}

.breadcrumb-item.active {
    color: var(--color-text-tertiary);
}

/* ----------------------------------------
   Document Header
   ---------------------------------------- */
.document-header {
    padding: var(--space-12) var(--space-8);
    text-align: center;
    background: var(--gradient-cool);
    position: relative;
    overflow: hidden;
}

[data-theme="dark"] .document-header {
    background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
}

.document-header::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.5;
}

.header-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-2) var(--space-4);
    background: var(--color-bg-primary);
    border-radius: var(--radius-full);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
    color: var(--color-primary);
    margin-bottom: var(--space-4);
    box-shadow: var(--shadow-md);
    position: relative;
}

.document-title {
    font-family: var(--font-family-serif);
    font-size: var(--font-size-4xl);
    font-weight: var(--font-weight-bold);
    color: var(--color-text-primary);
    margin-bottom: var(--space-4);
    position: relative;
    line-height: var(--line-height-tight);
}

.title-meta {
    display: flex;
    justify-content: center;
    gap: var(--space-6);
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
    position: relative;
}

.meta-item {
    display: flex;
    align-items: center;
    gap: var(--space-2);
}

/* ----------------------------------------
   Content Sections
   ---------------------------------------- */
.content-section {
    margin-bottom: var(--space-12);
    scroll-margin-top: var(--space-8);
}

.section-header {
    display: flex;
    align-items: flex-start;
    gap: var(--space-4);
    margin-bottom: var(--space-6);
}

.section-number {
    font-size: var(--font-size-3xl);
    font-weight: var(--font-weight-bold);
    color: var(--color-primary-light);
    opacity: 0.3;
    line-height: 1;
    min-width: 50px;
}

.section-title {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    font-family: var(--font-family-serif);
    font-size: var(--font-size-2xl);
    font-weight: var(--font-weight-semibold);
    color: var(--color-text-primary);
    margin: 0;
    line-height: var(--line-height-tight);
}

.title-icon {
    font-size: var(--font-size-xl);
}

/* ----------------------------------------
   Content Cards
   ---------------------------------------- */
.content-card {
    background: var(--color-surface);
    border-radius: var(--radius-xl);
    padding: var(--space-6);
    margin-bottom: var(--space-6);
    border: 1px solid var(--color-border);
    position: relative;
    transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.content-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--gradient-card-border);
    border-radius: var(--radius-xl) var(--radius-xl) 0 0;
    opacity: 0;
    transition: opacity var(--transition-base);
}

.content-card:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

.content-card:hover::before {
    opacity: 1;
}

/* ----------------------------------------
   Typography
   ---------------------------------------- */
h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-family-serif);
    font-weight: var(--font-weight-semibold);
    color: var(--color-text-primary);
    line-height: var(--line-height-tight);
}

h1 { font-size: var(--font-size-4xl); margin-bottom: var(--space-6); }
h2 { font-size: var(--font-size-2xl); margin-top: var(--space-8); margin-bottom: var(--space-4); }
h3 { font-size: var(--font-size-xl); margin-top: var(--space-6); margin-bottom: var(--space-3); }
h4 { font-size: var(--font-size-lg); margin-top: var(--space-4); margin-bottom: var(--space-2); }
h5, h6 { font-size: var(--font-size-base); margin-top: var(--space-3); margin-bottom: var(--space-2); }

p {
    margin-bottom: var(--space-4);
    color: var(--color-text-primary);
}

strong {
    font-weight: var(--font-weight-semibold);
    color: var(--color-text-primary);
}

em {
    font-style: italic;
    color: var(--color-text-secondary);
}

/* ----------------------------------------
   Enhanced Lists
   ---------------------------------------- */
ul, ol {
    margin-bottom: var(--space-4);
    padding-left: var(--space-6);
}

li {
    margin-bottom: var(--space-2);
    color: var(--color-text-primary);
}

.enhanced-list {
    list-style: none;
    padding-left: 0;
}

.enhanced-list .list-item {
    display: flex;
    align-items: flex-start;
    gap: var(--space-3);
    padding: var(--space-3) var(--space-4);
    background: var(--color-bg-secondary);
    border-radius: var(--radius-lg);
    margin-bottom: var(--space-2);
    border-left: 3px solid var(--color-primary);
    transition: all var(--transition-fast);
}

.enhanced-list .list-item:hover {
    background: var(--color-surface-hover);
    border-left-color: var(--color-primary-dark);
    transform: translateX(4px);
}

.list-marker {
    width: 8px;
    height: 8px;
    background: var(--gradient-primary);
    border-radius: var(--radius-full);
    margin-top: 8px;
    flex-shrink: 0;
}

.list-content {
    flex: 1;
}

/* Numbered List Enhancement */
ol.enhanced-list {
    counter-reset: list-counter;
}

ol.enhanced-list .list-item {
    counter-increment: list-counter;
}

ol.enhanced-list .list-marker {
    width: 28px;
    height: 28px;
    background: var(--gradient-primary);
    border-radius: var(--radius-full);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-bold);
    margin-top: 0;
}

ol.enhanced-list .list-marker::before {
    content: counter(list-counter);
}

/* ----------------------------------------
   Callouts
   ---------------------------------------- */
.callout {
    border-radius: var(--radius-xl);
    padding: var(--space-5);
    margin: var(--space-6) 0;
    border: 1px solid;
    position: relative;
    overflow: hidden;
}

.callout::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
}

.callout-header {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    margin-bottom: var(--space-3);
}

.callout-icon {
    font-size: var(--font-size-xl);
}

.callout-title {
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-base);
}

.callout-content p:last-child {
    margin-bottom: 0;
}

/* Callout Variants */
.callout--note {
    background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
    border-color: #93c5fd;
}
.callout--note::before { background: #3b82f6; }
.callout--note .callout-title { color: #1e40af; }

.callout--warning {
    background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);
    border-color: #fcd34d;
}
.callout--warning::before { background: #f59e0b; }
.callout--warning .callout-title { color: #92400e; }

.callout--danger {
    background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
    border-color: #fca5a5;
}
.callout--danger::before { background: #ef4444; }
.callout--danger .callout-title { color: #991b1b; }

.callout--tip {
    background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
    border-color: #6ee7b7;
}
.callout--tip::before { background: #10b981; }
.callout--tip .callout-title { color: #065f46; }

/* Enhanced Callout Variants */
.callout--info {
    background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
    border-color: #3b82f6;
}
.callout--info::before { background: #3b82f6; }
.callout--info .callout-title { color: #1e40af; }

/* Dark mode callouts */
[data-theme="dark"] .callout--note {
    background: linear-gradient(135deg, #1e3a5f 0%, #1e293b 100%);
    border-color: #3b82f6;
}
[data-theme="dark"] .callout--note .callout-title { color: #93c5fd; }

[data-theme="dark"] .callout--warning {
    background: linear-gradient(135deg, #422006 0%, #1e293b 100%);
    border-color: #f59e0b;
}
[data-theme="dark"] .callout--warning .callout-title { color: #fcd34d; }

[data-theme="dark"] .callout--danger {
    background: linear-gradient(135deg, #450a0a 0%, #1e293b 100%);
    border-color: #ef4444;
}
[data-theme="dark"] .callout--danger .callout-title { color: #fca5a5; }

[data-theme="dark"] .callout--tip {
    background: linear-gradient(135deg, #064e3b 0%, #1e293b 100%);
    border-color: #10b981;
}
[data-theme="dark"] .callout--tip .callout-title { color: #6ee7b7; }

/* ----------------------------------------
   Collapsible Sections
   ---------------------------------------- */
.collapsible-section {
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    margin: var(--space-4) 0;
    overflow: hidden;
}

.collapsible-trigger {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    width: 100%;
    padding: var(--space-4);
    background: var(--color-bg-tertiary);
    cursor: pointer;
    font-weight: var(--font-weight-medium);
    transition: background var(--transition-fast);
    list-style: none;
}

.collapsible-trigger::-webkit-details-marker {
    display: none;
}

.collapsible-trigger:hover {
    background: var(--color-surface-hover);
}

.trigger-icon {
    transition: transform var(--transition-base);
    font-size: var(--font-size-sm);
}

details[open] .trigger-icon {
    transform: rotate(90deg);
}

.collapsible-content {
    padding: var(--space-4);
    background: var(--color-surface);
    border-top: 1px solid var(--color-border);
}

/* ----------------------------------------
   Code Blocks
   ---------------------------------------- */
code {
    font-family: var(--font-family-mono);
    font-size: 0.9em;
    background: var(--color-bg-tertiary);
    padding: var(--space-1) var(--space-2);
    border-radius: var(--radius-sm);
    color: var(--color-danger);
}

.code-block-wrapper {
    margin: var(--space-6) 0;
    border-radius: var(--radius-xl);
    overflow: hidden;
    box-shadow: var(--shadow-md);
}

.code-block-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-3) var(--space-4);
    background: #1e293b;
    border-bottom: 1px solid #334155;
}

.code-language {
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
    color: #94a3b8;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.copy-button {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-2) var(--space-3);
    background: rgba(255, 255, 255, 0.1);
    border: none;
    border-radius: var(--radius-md);
    color: #94a3b8;
    font-size: var(--font-size-sm);
    cursor: pointer;
    transition: all var(--transition-fast);
}

.copy-button:hover {
    background: rgba(255, 255, 255, 0.2);
    color: white;
}

.copy-button.copied {
    background: var(--color-success);
    color: white;
}

.code-block {
    margin: 0;
    padding: var(--space-4);
    background: #0f172a;
    overflow-x: auto;
    font-size: var(--font-size-sm);
    line-height: var(--line-height-relaxed);
}

.code-block code {
    background: transparent;
    padding: 0;
    color: #e2e8f0;
    font-size: inherit;
}

/* ----------------------------------------
   Tables
   ---------------------------------------- */
.table-wrapper {
    margin: var(--space-6) 0;
    border-radius: var(--radius-xl);
    overflow: hidden;
    box-shadow: var(--shadow-md);
    background: var(--color-surface);
}

.table-header {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-3) var(--space-4);
    background: var(--color-bg-tertiary);
    border-bottom: 1px solid var(--color-border);
    font-weight: var(--font-weight-medium);
}

.table-container {
    overflow-x: auto;
}

.content-table {
    width: 100%;
    border-collapse: collapse;
}

.content-table th,
.content-table td {
    padding: var(--space-3) var(--space-4);
    text-align: left;
    border-bottom: 1px solid var(--color-border);
}

.content-table th {
    background: var(--gradient-primary);
    color: white;
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-sm);
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.content-table tbody tr {
    transition: background var(--transition-fast);
}

.content-table tbody tr:hover {
    background: var(--color-bg-secondary);
}

.content-table tbody tr:nth-child(even) {
    background: var(--color-bg-tertiary);
}

.content-table tbody tr:nth-child(even):hover {
    background: var(--color-surface-hover);
}

/* Enhanced Comparison Table */
.table-responsive {
    overflow-x: auto;
    margin: var(--space-6) 0;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
}

.comparison-table {
    width: 100%;
    border-collapse: collapse;
    background: var(--color-surface);
    font-size: var(--font-size-sm);
}

.comparison-table th {
    background: var(--gradient-primary);
    color: white;
    padding: var(--space-4) var(--space-3);
    text-align: left;
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-xs);
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.comparison-table td {
    padding: var(--space-4) var(--space-3);
    border-bottom: 1px solid var(--color-border);
    vertical-align: top;
}

.comparison-table tbody tr:hover {
    background: var(--color-bg-secondary);
}

/* ----------------------------------------
   Grid Layout System
   ---------------------------------------- */
.grid {
    display: grid;
    gap: var(--space-6);
    margin: var(--space-6) 0;
}

.grid-2 {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.grid-3 {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.grid-4 {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.grid-item {
    padding: var(--space-6);
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-sm);
    transition: all var(--transition-base);
}

.grid-item:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
    border-color: var(--color-primary-light);
}

.grid-item h4 {
    margin-bottom: var(--space-3);
    color: var(--color-text-primary);
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-semibold);
}

.grid-item p {
    color: var(--color-text-secondary);
    margin: 0;
}

/* ----------------------------------------
   Figures & Images
   ---------------------------------------- */
.content-figure {
    margin: var(--space-8) 0;
    text-align: center;
}

.figure-image-wrapper {
    position: relative;
    display: inline-block;
    border-radius: var(--radius-xl);
    overflow: hidden;
    box-shadow: var(--shadow-lg);
    cursor: zoom-in;
}

.figure-image {
    display: block;
    max-width: 100%;
    height: auto;
    transition: transform var(--transition-base);
}

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

.figure-image-wrapper:hover .figure-image {
    transform: scale(1.02);
}

.overlay-icon {
    font-size: var(--font-size-2xl);
}

.overlay-text {
    font-size: var(--font-size-sm);
}

.figure-caption {
    margin-top: var(--space-3);
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
    font-style: italic;
}

/* ----------------------------------------
   Key Points Section
   ---------------------------------------- */
.key-points-section {
    margin: var(--space-12) 0;
    border-radius: var(--radius-2xl);
    overflow: hidden;
    box-shadow: var(--shadow-xl);
}

.key-points-wrapper {
    background: var(--gradient-primary);
    padding: var(--space-8);
    position: relative;
}

.key-points-wrapper::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
}

.key-points-header {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    margin-bottom: var(--space-6);
    position: relative;
}

.key-points-icon {
    font-size: var(--font-size-2xl);
}

.key-points-title {
    color: white;
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-bold);
    margin: 0;
}

.key-points-list {
    list-style: none;
    padding: 0;
    margin: 0;
    position: relative;
}

.key-point-item {
    display: flex;
    align-items: flex-start;
    gap: var(--space-3);
    padding: var(--space-4);
    background: rgba(255, 255, 255, 0.1);
    border-radius: var(--radius-lg);
    margin-bottom: var(--space-3);
    backdrop-filter: blur(4px);
    transition: all var(--transition-fast);
}

.key-point-item:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateX(4px);
}

.key-point-item:last-child {
    margin-bottom: 0;
}

.point-marker {
    color: #fcd34d;
    font-size: var(--font-size-lg);
    flex-shrink: 0;
}

.key-point-item p {
    color: white;
    margin: 0;
}

.key-point-item strong {
    color: white;
}

/* ----------------------------------------
   Definition Terms
   ---------------------------------------- */
.term-definition {
    font-weight: var(--font-weight-semibold);
    color: var(--color-primary);
    cursor: help;
    border-bottom: 2px dotted var(--color-primary);
    position: relative;
}

.term-definition:hover::after {
    content: attr(data-definition);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    padding: var(--space-3) var(--space-4);
    background: var(--color-text-primary);
    color: var(--color-text-inverse);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-normal);
    font-style: normal;
    border-radius: var(--radius-lg);
    white-space: nowrap;
    max-width: 300px;
    white-space: normal;
    z-index: var(--z-tooltip);
    box-shadow: var(--shadow-lg);
}

/* ----------------------------------------
   Lightbox Modal
   ---------------------------------------- */
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

/* ----------------------------------------
   Math Equations
   ---------------------------------------- */
.equation {
    margin: var(--space-6) 0;
    padding: var(--space-4);
    background: var(--color-bg-tertiary);
    border-radius: var(--radius-lg);
    overflow-x: auto;
    text-align: center;
}

.math-inline {
    padding: 0 var(--space-1);
}

/* ----------------------------------------
   Horizontal Rule
   ---------------------------------------- */
hr {
    border: none;
    height: 2px;
    background: linear-gradient(to right, transparent, var(--color-border), transparent);
    margin: var(--space-10) 0;
}

/* ----------------------------------------
   Responsive Design
   ---------------------------------------- */
@media (max-width: 1024px) {
    .container {
        padding: var(--space-4);
    }
    
    .content-wrapper {
        padding: var(--space-6);
    }
    
    .document-header {
        padding: var(--space-8) var(--space-6);
    }
    
    .document-title {
        font-size: var(--font-size-3xl);
    }
}

@media (max-width: 768px) {
    :root {
        --font-size-4xl: 2rem;
        --font-size-3xl: 1.75rem;
        --font-size-2xl: 1.5rem;
    }
    
    .theme-toggle {
        top: var(--space-4);
        right: var(--space-4);
        width: 40px;
        height: 40px;
    }
    
    .nav-container {
        flex-direction: column;
        gap: var(--space-3);
    }
    
    .nav-button {
        width: 100%;
        justify-content: center;
    }
    
    .nav-button--large {
        flex-direction: row;
        align-items: center;
    }
    
    .document-progress {
        order: -1;
        width: 100%;
    }
    
    .content-wrapper {
        padding: var(--space-4);
    }
    
    .section-header {
        flex-direction: column;
        gap: var(--space-2);
    }
    
    .section-number {
        font-size: var(--font-size-2xl);
    }
    
    .title-meta {
        flex-direction: column;
        gap: var(--space-2);
    }
    
    .breadcrumb-list {
        flex-wrap: wrap;
    }
}

@media (max-width: 480px) {
    :root {
        --font-size-4xl: 1.75rem;
        --font-size-3xl: 1.5rem;
        --font-size-2xl: 1.25rem;
        --font-size-xl: 1.125rem;
    }
    
    .container {
        padding: var(--space-2);
    }
    
    .document-article {
        border-radius: var(--radius-xl);
    }
    
    .content-card {
        padding: var(--space-4);
        border-radius: var(--radius-lg);
    }
    
    .enhanced-list .list-item {
        padding: var(--space-2) var(--space-3);
    }
    
    .callout {
        padding: var(--space-4);
    }
    
    .key-points-wrapper {
        padding: var(--space-6);
    }
    
    .code-block {
        font-size: var(--font-size-xs);
    }
    
    /* Grid Responsive Adjustments */
    .grid {
        grid-template-columns: 1fr !important;
        gap: var(--space-4);
    }
    
    .grid-item {
        padding: var(--space-4);
    }
    
    /* Table Responsive */
    .table-responsive {
        font-size: var(--font-size-xs);
    }
    
    .comparison-table th,
    .comparison-table td {
        padding: var(--space-2) var(--space-3);
    }
}

/* ----------------------------------------
   Print Styles
   ---------------------------------------- */
@media print {
    * {
        background: white !important;
        color: black !important;
        box-shadow: none !important;
    }
    
    .reading-progress-container,
    .theme-toggle,
    .floating-toc,
    .document-nav,
    .lightbox-modal,
    .copy-button,
    .figure-overlay {
        display: none !important;
    }
    
    .page-wrapper {
        display: block;
    }
    
    .document-article {
        box-shadow: none;
    }
    
    .content-card {
        border: 1px solid #ccc;
        page-break-inside: avoid;
    }
    
    .content-section {
        page-break-inside: avoid;
    }
    
    .key-points-section {
        border: 2px solid #333;
    }
    
    a {
        text-decoration: underline;
    }
    
    a[href]::after {
        content: " (" attr(href) ")";
        font-size: 0.8em;
    }
    
    .nav-button[href]::after {
        content: none;
    }
}

/* ----------------------------------------
   Focus Styles (Accessibility)
   ---------------------------------------- */
:focus-visible {
    outline: 3px solid var(--color-primary);
    outline-offset: 2px;
}

button:focus-visible,
a:focus-visible {
    outline: 3px solid var(--color-primary);
    outline-offset: 2px;
}

/* ----------------------------------------
   Selection Styles
   ---------------------------------------- */
::selection {
    background: var(--color-primary-light);
    color: white;
}

[data-theme="dark"] ::selection {
    background: var(--color-primary);
}
```

## JavaScript Files (v9 Rich UI)

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
        let lastScrollY = 0;
        
        function updateTocVisibility() {
            const scrollY = window.scrollY;
            const showThreshold = 300;
            
            if (scrollY > showThreshold) {
                floatingToc.classList.add('visible');
            } else {
                floatingToc.classList.remove('visible');
            }
            
            lastScrollY = scrollY;
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

### interactions.js - UI Interactions
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
    
    // Lightbox for Images
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

## Index Page Template (v9 Rich UI)

```html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Document Title] - Table of Contents</title>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="styles/main.css">
</head>
<body>
    <a href="#main-content" class="skip-link">Skip to main content</a>
    
    <button class="theme-toggle" id="theme-toggle" aria-label="Toggle dark mode">
        <span class="theme-toggle-icon light-icon">☀️</span>
        <span class="theme-toggle-icon dark-icon">🌙</span>
    </button>

    <div class="page-wrapper">
        <div class="container">
            <main class="index-main" id="main-content">
                <!-- Hero Section -->
                <header class="index-hero">
                    <div class="hero-content">
                        <div class="hero-badge">
                            <span class="badge-icon">📚</span>
                            <span class="badge-text">Study Guide</span>
                        </div>
                        <h1 class="hero-title">[Document Title]</h1>
                        <p class="hero-subtitle">[Document Description or Subtitle]</p>
                        <div class="hero-meta">
                            <span class="meta-item">
                                <span class="meta-icon">📄</span>
                                <span>[X] Topics</span>
                            </span>
                            <span class="meta-item">
                                <span class="meta-icon">⏱️</span>
                                <span>[X] min total</span>
                            </span>
                        </div>
                    </div>
                    <div class="hero-decoration" aria-hidden="true"></div>
                </header>

                <!-- Topics Grid -->
                <section class="topics-section" aria-labelledby="topics-heading">
                    <h2 id="topics-heading" class="section-heading">
                        <span class="heading-icon">📑</span>
                        <span>Topics</span>
                    </h2>
                    
                    <div class="topics-grid">
                        <!-- Topic Card Template -->
                        <a href="topics/topic-01.html" class="topic-card">
                            <div class="card-number">01</div>
                            <div class="card-content">
                                <h3 class="card-title">[Topic Title]</h3>
                                <p class="card-description">[Brief description or first line]</p>
                            </div>
                            <div class="card-meta">
                                <span class="meta-item">
                                    <span class="meta-icon">📖</span>
                                    <span>[X] sections</span>
                                </span>
                            </div>
                            <div class="card-arrow">→</div>
                        </a>
                        
                        <!-- Repeat for each topic -->
                        <a href="topics/topic-02.html" class="topic-card">
                            <div class="card-number">02</div>
                            <div class="card-content">
                                <h3 class="card-title">[Topic Title]</h3>
                                <p class="card-description">[Brief description]</p>
                            </div>
                            <div class="card-meta">
                                <span class="meta-item">
                                    <span class="meta-icon">📖</span>
                                    <span>[X] sections</span>
                                </span>
                            </div>
                            <div class="card-arrow">→</div>
                        </a>
                    </div>
                </section>
            </main>
        </div>
    </div>

    <script src="js/theme.js"></script>
</body>
</html>
```

### Index Page Additional CSS (Add to main.css)
```css
/* ----------------------------------------
   Index Page Styles
   ---------------------------------------- */
.index-main {
    background: var(--color-bg-primary);
    border-radius: var(--radius-2xl);
    box-shadow: var(--shadow-xl);
    overflow: hidden;
}

.index-hero {
    position: relative;
    padding: var(--space-16) var(--space-8);
    background: var(--gradient-primary);
    text-align: center;
    overflow: hidden;
}

.index-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.hero-content {
    position: relative;
    z-index: 1;
}

.hero-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-2) var(--space-4);
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(4px);
    border-radius: var(--radius-full);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
    color: white;
    margin-bottom: var(--space-6);
}

.hero-title {
    font-family: var(--font-family-serif);
    font-size: var(--font-size-5xl);
    font-weight: var(--font-weight-bold);
    color: white;
    margin-bottom: var(--space-4);
    line-height: var(--line-height-tight);
}

.hero-subtitle {
    font-size: var(--font-size-lg);
    color: rgba(255, 255, 255, 0.9);
    max-width: 600px;
    margin: 0 auto var(--space-6);
}

.hero-meta {
    display: flex;
    justify-content: center;
    gap: var(--space-6);
    color: rgba(255, 255, 255, 0.8);
}

.hero-meta .meta-item {
    display: flex;
    align-items: center;
    gap: var(--space-2);
}

/* Topics Section */
.topics-section {
    padding: var(--space-12) var(--space-8);
}

.section-heading {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    font-size: var(--font-size-2xl);
    font-weight: var(--font-weight-semibold);
    margin-bottom: var(--space-8);
}

.heading-icon {
    font-size: var(--font-size-xl);
}

/* Topics Grid */
.topics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: var(--space-6);
}

/* Topic Card */
.topic-card {
    display: flex;
    flex-direction: column;
    padding: var(--space-6);
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-xl);
    text-decoration: none;
    color: inherit;
    position: relative;
    overflow: hidden;
    transition: all var(--transition-base);
}

.topic-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--gradient-card-border);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform var(--transition-base);
}

.topic-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-xl);
    border-color: var(--color-primary-light);
}

.topic-card:hover::before {
    transform: scaleX(1);
}

.card-number {
    font-size: var(--font-size-4xl);
    font-weight: var(--font-weight-bold);
    color: var(--color-primary-light);
    opacity: 0.2;
    line-height: 1;
    margin-bottom: var(--space-2);
}

.card-content {
    flex: 1;
}

.card-title {
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-semibold);
    color: var(--color-text-primary);
    margin-bottom: var(--space-2);
    transition: color var(--transition-fast);
}

.topic-card:hover .card-title {
    color: var(--color-primary);
}

.card-description {
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
    margin-bottom: var(--space-4);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.card-meta {
    display: flex;
    gap: var(--space-4);
    font-size: var(--font-size-sm);
    color: var(--color-text-tertiary);
    margin-bottom: var(--space-3);
}

.card-arrow {
    position: absolute;
    bottom: var(--space-6);
    right: var(--space-6);
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-bg-tertiary);
    border-radius: var(--radius-full);
    font-size: var(--font-size-lg);
    color: var(--color-text-tertiary);
    transition: all var(--transition-fast);
}

.topic-card:hover .card-arrow {
    background: var(--color-primary);
    color: white;
    transform: translateX(4px);
}

/* Responsive Index */
@media (max-width: 768px) {
    .index-hero {
        padding: var(--space-10) var(--space-6);
    }
    
    .hero-title {
        font-size: var(--font-size-3xl);
    }
    
    .hero-meta {
        flex-direction: column;
        gap: var(--space-2);
    }
    
    .topics-section {
        padding: var(--space-8) var(--space-4);
    }
    
    .topics-grid {
        grid-template-columns: 1fr;
    }
}
```

## User Interaction Protocol for HTML Generation
When I request an individual HTML file, please adhere to the following protocol:

1.  **Primary Goal: Generate Complete Content:** Your most important task is to generate the **entire file content in a single, complete response**. It is crucial to avoid truncation or omitting sections with placeholders like `...` or `[omitted content]`. Please make every effort to output the full code block.

2.  **Contingency Plan for Truncation:** I understand there may be system limitations on response length. If you absolutely **cannot** generate the full file in one response, you must follow these steps:
    *   Generate as much of the file as possible.
    *   Ensure you stop at a **logical and complete HTML block**, such as the end of a `</section>`, `</main>`, or `</div>` tag. Do not cut off in the middle of a tag, paragraph, or code block.
    *   At the very end of your response, after the code block, add this specific and standardized placeholder comment:
        `<!-- MORE CONTENT TO FOLLOW - PLEASE PROMPT 'CONTINUE' -->`

3.  **Handling a 'CONTINUE' Prompt:** When I provide the prompt "continue" or "give me the omitted content," you will:
    *   Immediately generate the next section of the HTML file, starting from exactly where you left off.
    *   Do not repeat any content you have already provided.
    *   If the remaining content is still too long, repeat the process: generate the next logical chunk and end with the same placeholder comment: `<!-- MORE CONTENT TO FOLLOW - PLEASE PROMPT 'CONTINUE' -->`.
    *   Continue this process until the entire file has been generated. When you provide the final part of the file, **do not** include the placeholder comment.

## Progress Tracking and Verification
### Enhanced Verification Checklist (v9)
For each section/page, verify:
*   [ ] **MMD reviewed**, OCR errors corrected, and **spurious characters/inconsistent prefixes removed**.
*   [ ] **Content matches PDF source exactly** (line-by-line visual check) *after* MMD correction and cleaning.
*   [ ] No added, modified, or summarized content (beyond OCR correction/cleaning).
*   [ ] Only HTML/CSS structural/styling changes applied *after* content verification.
*   [ ] Original text, numbers, formulas, code preserved verbatim.
*   [ ] All PDF sections, headings (levels `<h1>-<h6>`), paragraphs, lists (after pattern conversion), tables are present and correctly tagged semantically.
*   [ ] **List-like content converted to proper HTML `<ul>` or `<ol>` elements, preserving verbatim text.**
*   [ ] Lists have the exact same number of items and text as original.
*   [ ] Content in **linear ("top and bottom") flow** following MMD order.
*   [ ] Any "Key Points" use only **verbatim text** wrapped in `<strong>` tags.
*   [ ] All navigation links (Prev/Next/ToC) function correctly.
*   [ ] All mathematics renders correctly via MathJax.
*   [ ] All images present, correctly named, linked, and have descriptive `alt` text.
*   [ ] HTML is valid and uses semantic elements appropriately.
*   [ ] Basic accessibility checks passed (color contrast, keyboard navigation, ARIA roles).
*   [ ] **Chunking is logical** and file sizes are reasonable.

### v9 Rich UI Verification (Additional)
*   [ ] **Dark mode** works correctly - all elements visible and readable.
*   [ ] **Theme toggle** persists preference in localStorage.
*   [ ] **Reading progress bar** updates smoothly on scroll.
*   [ ] **Floating TOC** appears after scrolling and highlights active section.
*   [ ] **Copy buttons** work for code blocks.
*   [ ] **Lightbox** opens/closes correctly for images.
*   [ ] **Collapsible sections** animate smoothly.
*   [ ] **Hover effects** work on cards, lists, and buttons.
*   [ ] **Focus indicators** visible for keyboard navigation.
*   [ ] **Responsive design** works at all breakpoints (1024px, 768px, 480px).
*   [ ] **Print styles** produce clean output.
*   [ ] **Reduced motion** respected when user prefers.
*   [ ] **Skip link** works for accessibility.

## Detailed Conversion Plan Template
*(Use this as a checklist for each file/chunk)*

### Content Extraction & Preparation
[ ] MMD conversion completed
[ ] **MMD reviewed, OCR errors corrected, spurious characters cleaned**
[ ] HTML template created (v9 Rich UI)
[ ] Main content populated from corrected MMD

### Content Verification (against PDF)
[ ] Line-by-line content verification completed
[ ] All structural elements tagged correctly
[ ] Lists item count and text match original
[ ] Tables match original
[ ] Math and code blocks match original
[ ] Images correctly referenced with alt text
[ ] List-like patterns converted to semantic lists
[ ] Visual groupings translated to linear flow

### v9 Rich UI Implementation
[ ] Dark mode CSS variables applied
[ ] Theme toggle functional
[ ] Reading progress bar implemented
[ ] Navigation styled with gradients
[ ] Content cards with hover effects
[ ] Enhanced lists with animations
[ ] Callouts with proper variants
[ ] Code blocks with copy functionality
[ ] Tables with enhanced styling
[ ] Figures with lightbox capability
[ ] Key points section styled
[ ] Floating TOC implemented (if applicable)

### Styling and Layout
[ ] CSS styles applied as per v9 instructions
[ ] Key Points text made bold
[ ] Navigation implemented and functional
[ ] Responsiveness verified at all breakpoints
[ ] Dark mode tested

### Final Review
[ ] Full chunk reviewed against PDF
[ ] Accessibility checks completed
[ ] Chunk linking verified
[ ] All interactive features tested
[ ] Final files organized correctly

## Final Considerations
### Balancing Fidelity and Rich UI
*   **Verbatim content preservation is the ABSOLUTE HIGHEST priority.** Never sacrifice accuracy for aesthetics.
*   The v9 Rich UI enhancements are designed to improve the learning experience without altering content.
*   All interactive features (dark mode, collapsibles, lightbox) organize and present content - they never modify it.
*   Accessibility must be integral - the rich UI should enhance, not hinder, accessibility.
*   Success criteria: 100% original knowledge preserved with a modern, engaging, and accessible presentation.

## Applied Agent Strategy Example (v9)

This section documents the concrete strategy for v9 Rich UI conversion:

1.  **Environment Setup:**
    *   Create complete directory structure including `js/` folder for v9 scripts.
    *   Write `main.css` with all v9 Rich UI styles including dark mode variables.
    *   Write `theme.js`, `navigation.js`, and `interactions.js` files.

2.  **MMD Conversion & Review:**
    *   Execute Mathpix OCR command.
    *   Review and correct MMD file.
    *   Clean artifacts and identify list patterns.

3.  **HTML Generation with v9 Components:**
    *   Use v9 topic page template with all Rich UI elements.
    *   Include reading progress bar, theme toggle, floating TOC.
    *   Apply enhanced card, list, and callout styles.
    *   Implement code blocks with copy buttons.
    *   Add lightbox capability to figures.

4.  **Interactive Features Testing:**
    *   Verify dark mode toggle works and persists.
    *   Test reading progress bar updates on scroll.
    *   Confirm floating TOC appears and highlights correctly.
    *   Test copy buttons on code blocks.
    *   Verify lightbox opens/closes for images.
    *   Test collapsible sections.

5.  **Responsive & Accessibility Testing:**
    *   Test at 1024px, 768px, and 480px breakpoints.
    *   Verify keyboard navigation works.
    *   Test with reduced motion preference.
    *   Verify skip link functionality.
    *   Check color contrast in both themes.

6.  **Content Verification:**
    *   Perform line-by-line comparison with PDF.
    *   Verify all content preserved verbatim.
    *   Confirm list items match exactly.
    *   Validate math rendering.

## Enhanced Content Organization Patterns (v9.1)

### Enhanced Header Structure
**Document Header Badge Pattern:**
```html
<div class="header-badge">
    <span>[🔬]</span>
    <span>Topic [XX]</span>
</div>
```
- Use subject-appropriate emoji icons
- Include sequential topic numbering
- Maintain consistent badge styling

### Enhanced Section Numbering
**Section Header Pattern:**
```html
<section class="content-section" id="section-id">
    <div class="section-header">
        <div class="section-number">[XX]</div>
        <h2 class="section-title">
            <span class="title-icon">[🎯]</span>
            [Exact Section Title from PDF]
        </h2>
    </div>
</section>
```
- Sequential section numbering (01, 02, 03...)
- Contextual emoji icons for visual recognition
- Preserve exact section titles from PDF

### Enhanced List Formatting
**Standard List Pattern:**
```html
<ul>
    <li><strong>Bold term</strong> definition or key point</li>
    <li>Another item with <strong>emphasis</strong></li>
    <li>Third item with critical information</li>
</ul>
```
- Wrap important terms in `<strong>` tags
- Maintain verbatim text from source
- Use appropriate emphasis for pharmacological terms

### Enhanced Callout System
**Learning Objective Pattern:**
```html
<div class="callout callout--note">
    <div class="callout-header">
        <span class="callout-icon">💡</span>
        <h4 class="callout-title">Key Learning Objective</h4>
    </div>
    <div class="callout-content">
        <p>[Learning objective or important note text]</p>
    </div>
</div>
```

**Mechanism/Process Pattern:**
```html
<div class="callout callout--info">
    <div class="callout-header">
        <span class="callout-icon">🔄</span>
        <h4 class="callout-title">Mechanism or Process</h4>
    </div>
    <div class="callout-content">
        <p><strong>Key term:</strong> [Detailed explanation]</p>
    </div>
</div>
```

**Clinical Protocol Pattern:**
```html
<div class="callout callout--warning">
    <div class="callout-header">
        <span class="callout-icon">⚠️</span>
        <h4 class="callout-title">Clinical Protocol</h4>
    </div>
    <div class="callout-content">
        <p>The action of [agent] is [reversal mechanism] once [condition] is no longer desired.</p>
    </div>
</div>
```

### Enhanced Table Patterns
**Comparison Table for Drug Data:**
```html
<h3>[Table Title]</h3>
<div class="table-responsive">
    <table class="comparison-table">
        <thead>
            <tr>
                <th>[Drug/Agent Name]</th>
                <th>[Characteristic 1]</th>
                <th>[Characteristic 2]</th>
                <th>[Comments]</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>[Agent Name]</strong></td>
                <td>[Onset/Recovery characteristics]</td>
                <td>[Duration characteristics]</td>
                <td>[Clinical comments and considerations]</td>
            </tr>
        </tbody>
    </table>
</div>
```
- Use `comparison-table` class for drug comparison data
- Bold drug names in first column
- Include onset, duration, and clinical comments columns
- Responsive wrapper for mobile compatibility

### Grid Layout for Process Flow
**Three-Column Process Layout:**
```html
<div class="grid grid-3">
    <div class="grid-item">
        <h4>🟢 [Category 1]</h4>
        <p>[Description of first possibility or pathway]</p>
    </div>
    <div class="grid-item">
        <h4>🔴 [Category 2]</h4>
        <p>[Description of second possibility with example]</p>
    </div>
    <div class="grid-item">
        <h4>🟡 [Category 3]</h4>
        <p>[Description of third possibility]</p>
    </div>
</div>
```
- Use grid-3 for three-column layouts
- Color-coded categories with emoji indicators
- Equal-width responsive grid system
- Hover effects for enhanced interactivity

### Content Card Pattern
**Standard Content Card:**
```html
<div class="content-card">
    <p>[Verbatim paragraph text]</p>
    
    <h3>[Subsection Title]</h3>
    <p>[Additional content]</p>
    
    <!-- Lists, tables, or other content elements -->
</div>
```
- Wrap main content in content-card div
- Maintain hierarchical structure with proper headings
- Support nested content elements
- Consistent padding and styling

---

## Rich UI Edition Complete ✅

This document represents the **complete PDF to HTML Conversion System Prompt (v9) - Rich UI Edition** with all enhanced patterns and components implemented from our pharmacology study guide project.

### Included Enhancements:
- ✅ Modern Design System with Glassmorphism effects
- ✅ Dark Mode Support with system preference detection
- ✅ Enhanced Typography and Visual Hierarchy
- ✅ Interactive Components (collapsible sections, tabs, tooltips)
- ✅ Reading Progress Bar and Floating TOC
- ✅ Enhanced Content Organization Patterns
- ✅ Advanced Callout System
- ✅ Grid Layout System for Process Flows
- ✅ Enhanced Table Patterns for Drug Data
- ✅ Mobile-First Responsive Design
- ✅ Complete CSS and JavaScript Implementation

### Implementation Status:
- **Template Patterns:** ✅ Complete
- **CSS Styles:** ✅ Complete  
- **JavaScript Interactions:** ✅ Complete
- **Responsive Design:** ✅ Complete
- **Accessibility Features:** ✅ Complete

**This Rich UI Edition provides a comprehensive, production-ready system for converting PDF content to modern, accessible, and visually appealing HTML pages while maintaining 100% content fidelity.**

---
*Generated: December 14, 2025*  
*Version: 9.0 Rich UI Edition*
