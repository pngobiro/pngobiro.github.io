# PDF to HTML Conversion System Prompt (v7)

## Core Mission
Convert PDF documents into **visually engaging, accessible, and pedagogically effective** HTML pages while ensuring **100% VERBATIM content preservation**. Create highly appealing and effective learning materials, organized into **logically coherent chunks**, that maintain absolute fidelity to the original text content.

The visual structure of the original PDF, where it indicates a deliberate grouping of related content (like side-by-side lists or paragraphs), should be interpreted as a logical grouping but translated into a **linear ("top and bottom") flow** in the HTML, following the order provided by the MMD. The goal is to make the *content* readable and understandable through clear semantic structure and design, *not* by recreating complex multi-column PDF layouts.

## Conversion Workflow Overview
1.  **Planning & Setup**: Create conversion plan, prepare environment, gather resources.
2.  **Initial Extraction**: Convert PDF to intermediate format (MMD) using Mathpix.
3.  **MMD Review & Correction**: **Manually open and review the generated MMD file. Correct any obvious OCR errors, especially in tables, complex equations, or code snippets.** **Crucially, identify and remove spurious characters (like 't ', 'â€¢ ' used inconsistently outside of clear list patterns) that are artifacts of the PDF conversion process and are NOT part of the original text content.** Identify text patterns that represent intended lists (e.g., lines beginning consistently with '-', '*', 'â€¢', or numbered prefixes). This step is crucial *before* HTML conversion.
4.  **Content Chunking**: Divide *corrected* MMD content into **logically coherent sections** based on document structure (chapters, major sections). Use common sense to avoid overly long or short files.
5.  **HTML Templating**: Set up base HTML structure with proper semantic elements and accessibility features based on the **HTML Layout and Structure** section below.
6.  **Content Transfer & Semantic Conversion**: Move *corrected* content from MMD to HTML chunks with proper semantic markup. **Convert identified list-like patterns into proper HTML `<ul>` or `<ol>` elements, preserving the exact text content of each item.** Maintain the **linear flow** provided by the MMD.
7.  **100% Content Verification**: Validate verbatim content preservation against the *original PDF source* for each chunk. **Specifically verify that all original text, formulas, data in tables, and code snippets are present exactly as in the source PDF (after correcting OCR errors). Verify that the text within converted list items is verbatim.**
8.  **Visual Enhancement & Styling Implementation**: Apply styling and layout enhancements using the **CSS Styling Instructions** below *only after* content verification (Step 7) is complete. Ensure styling enhances readability of the linear content flow and improves the learning experience through clear visual hierarchy and distinction of content types (e.g., lists, definitions, callouts).
9.  **Resource Handling**: Extract/download and organize images and other media using the specified **Image Handling** rules and correct filenames.
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

## Content Preservation Rules
1.  **CRITICAL: ALL original pedagogical content must be preserved EXACTLY AS-IS from the source PDF (after correcting OCR errors).** This includes text, formulas, data in tables, code snippets, and the *intent* of figures.
2.  **NO content creation, modification, summarization, or rephrasing is allowed.**
3.  **DO NOT "modernize" or "enhance" the *meaning* or *wording* of the content.** Do not fix typos, grammatical errors, or factual inaccuracies present in the original source PDF. Preserve them verbatim.
4.  **The ONLY allowed changes are:**
    *   Adding HTML structural and semantic tags (`<p>`, `<h1>`, `<ul>`, `<li>`, `<table>`, `<code>`, `<section>`, `<article>`, `<aside>`, `<dfn>`, etc.) **to reflect the logical structure captured by MMD and to enhance the readability of the linear content flow.** This explicitly includes converting identified list-like patterns (`- `, `t `, `â€¢ `, numbered prefixes) from the MMD into semantic HTML list elements (`<ul>` or `<ol>`, containing `<li>` for each item), while preserving the *text content* within each item verbatim.
    *   Applying CSS styling for visual presentation as defined in the **CSS Styling Instructions** section.
    *   Converting formatting (bold, italic) to HTML elements (`<strong>`, `<em>`).
    *   Adding accessibility attributes (e.g., `alt` text, ARIA roles).
    *   Correcting OCR errors identified during the MMD review phase (Step 3 of Workflow) and **cleaning spurious characters**.
    *   Applying `<strong>` tags to the verbatim text within "Key Points" list items (see Zero-Summarization Directive).
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
*   **ALLOWED:** Enhanced visual presentation using CSS (borders, backgrounds, spacing, typography) based on the **CSS Styling Instructions** section below, specifically applied to elements like headings, paragraphs, lists (including converting patterns), tables, figures, and callouts.
*   **ALLOWED:** Applying structural patterns like cards (`<div class="content-card"></div>`) or callouts (`<aside>`) to *existing* content blocks based on the **HTML Layout and Structure** section below, specifically to enhance the readability of the linear content flow and highlight distinct content types (e.g., notes, warnings, definitions, key points).
*   **ALLOWED:** Adding "Key Points" or "Summary" sections (`<aside class="key-points-section">`) at the end of a topic *IF AND ONLY IF* they contain **only verbatim text snippets** extracted directly from that topic's original content. The text within these list items **MUST** be wrapped in `<strong>` tags.
*   **ALLOWED:** Using icons, color-coding, or visual indicators to highlight important terms or sections *without changing the text*, following the defined CSS styles.
*   **ALLOWED:** Adding interactive elements (like collapsible sections or tooltips for definitions - using `<dfn>`) that reveal or organize the *original* content in a non-linear way, provided the full original content remains accessible.
*   **ALLOWED:** Improving scannability through visual hierarchy (headings, spacing, distinct content blocks) defined in the CSS.

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
*   **Clean Artifacts:** Identify and **remove spurious characters or inconsistent prefixes (like 't ', 'â€¢ ' at the start of lines that aren't part of a clear list pattern)** that appear to be OCR errors or unintended formatting from the PDF.
*   **Identify List Patterns:** Note consistent prefixes ('-', '*', 'â€¢', numbers followed by punctuation/space) or other formatting that clearly indicates an intended list structure in the original PDF, even if the MMD doesn't perfectly tag it as such. This information will be used in Step 6 for semantic conversion.
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
*   **Convert list patterns:** Identify the list patterns noted in Step 2 and convert them into proper semantic `<ul>` or `<ol>` elements. Each item in the original pattern becomes an `<li>` element containing the **verbatim text** from the source. Do not simply preserve the prefix character as text; use the list tags semantically. Apply classes like `enhanced-list` if appropriate for styling defined in the CSS.
*   **Importantly:** Content that appeared visually side-by-side or in columns in the PDF but is presented linearly in the MMD (e.g., List A followed by List B) MUST be kept in that linear, stacked ("top and bottom") format in the HTML. Do not use CSS Flexbox or Grid to recreate complex multi-column layouts for this type of content grouping.

### Content Preservation Implementation
*   Copy-paste all text **verbatim** from the **corrected and cleaned MMD source** (Step 2).
*   Perform a **line-by-line visual comparison** of the generated HTML against the **original PDF source** for 100% accuracy *before* applying significant visual enhancements.
*   Maintain all original formatting emphasis (bold/italic) using `<strong>` and `<em>`.
*   Preserve all tables (`<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`) and code blocks (`<pre><code>`) exactly as written.
*   **NEVER omit, condense, or rewrite any original content.**
*   **Key Points Text:** For text used in "Key Points" lists, the *verbatim* text from the source must be wrapped in `<strong>` tags (e.g., `<li><strong>[Verbatim text]</strong></li>`).
*   Enclose major content sections (corresponding to `<h2>` or significant logical blocks) within unique HTML comment markers (`<!-- START: section-name -->` and `<!-- END: section-name -->`) to facilitate targeted updates using `apply_diff`. Ensure the section within the markers has a matching `id` attribute (e.g., `<section id="section-name">`).

### Visual Enhancement for Learning Effectiveness (Apply *after* 100% Content Verification)
Only after verifying verbatim content preservation, apply further visual improvements using the **CSS Styling Instructions** defined later in this document:
1.  **Reference CSS Styling Instructions**: Apply classes defined in the CSS section for typography, spacing, colors, components, etc.
2.  **Apply Standard Visual Enhancements**:
    *   Apply CSS classes for typography, spacing, and color.
    *   Use card layouts (`<div class="content-card">...</div>`) for distinct content blocks to improve visual separation and scanability.
    *   Enhance list styling (`<ul class="enhanced-list">`, `<ol class="enhanced-list">`) beyond basic browser defaults to improve readability of lists converted from patterns.
    *   Implement callout boxes (`<aside class="callout note" role="note">...</aside>` or `<aside class="callout warning" role="alert">...</aside>`) for supplementary information or warnings, clearly visually distinct from the main content flow.
    *   Use definition tags (`<dfn>`) for key terms, optionally with interactive elements or styling to highlight them.
    *   Add visual dividers (`<hr>`).
    *   Ensure code blocks have language classes (`<code class="language-python">`).
    *   Apply styles for visually distinct sections (e.g., using background colors or borders via CSS classes).
    *   Implement responsive table designs if necessary.
    *   Ensure consistent use of iconography (e.g., within `.section-heading`, `.callout-title`, enhanced list items).
    *   Ensure responsiveness across defined breakpoints (e.g., 768px, 480px).

### Accessibility Implementation
*   **Mandatory:** All images (`<img>`) MUST have descriptive `alt` text. Decorative images should have `alt=""`.
*   Use semantic HTML correctly (headings in order, lists for lists, etc.).
*   Ensure sufficient color contrast according to WCAG AA guidelines.
*   Use ARIA roles (`role="navigation"`, `role="main"`, `role="region"`, `aria-labelledby`, etc.) where appropriate to enhance semantic meaning.
*   Ensure keyboard navigability and visible focus indicators for interactive elements.
*   Maintaining a linear content flow (as provided by MMD and enhanced with semantic lists) is generally more accessible than complex multi-column layouts recreated from visual cues alone.

## Directory Structure and File Organization

```
kmtc-histology/
index.html                               # Table of Contents (as provided)
topics/
    histology-introduction.html          # Lecture 1
    histology-organelles.html            # Lecture 2
    histology-connective-tissue.html     # Lecture 3
    histology-respiratory.html           # Lecture 4
    histology-cardiovascular.html        # Lecture 5
    histology-lymphoid.html              # Lecture 6
    histology-digestive-glands.html      # Lecture 7
assets/
    images/
        # All extracted images (JPG, PNG, SVG etc.)
        # Naming: [ID]g-[PageNum]-[SeqNum].ext
        # Example: 2025_05_28_89850bb57a6655b01eb6g-08-1.jpg
styles/
    main.css                             # Main stylesheet (content provided below)
js/
    navigation.js                        # Basic navigation helpers (content provided below)
```

## Image Handling
1.  **Extraction Source:** Images are identified via `![](image_url)` links in the **reviewed and corrected MMD file** (Step 2).
2.  **Downloading:** Use `curl` or a script to download each unique image URL found in the MMD file.
3.  **Naming Convention (CRITICAL):** Save images locally using the exact filename derived from the Mathpix URL structure, including a sequence number based on order of appearance for that specific page image:
    *   Format: `[ID]g-[PageNum]-[SeqNum].ext`
    *   Example URL: `https://cdn.mathpix.com/cropped/2025_05_28_89850bb57a6655b01eb6g-08.jpg?height=1196&width=2897&top_left_y=499&top_left_x=216`
    *   If this is the 1st image from `g-08.jpg` on PDF page 8 in the MMD: `2025_05_28_89850bb57a6655b01eb6g-08-1.jpg`
    *   If this is the 2nd image from `g-08.jpg` on the same page: `2025_05_28_89850bb57a6655b01eb6g-08-2.jpg`
    *   Determine `[SeqNum]` by counting the occurrences of `g-[PageNum].jpg` in the MMD for that specific page *before* the current image link.
4.  **Storage Location:** Save all downloaded images in the `assets/images/` directory.
5.  **HTML Reference:** All image references in HTML (`<img>` tags) MUST use relative paths pointing to the `assets/images/` directory, using the generated filenames.
    *   Example: `<img src="../assets/images/2025_05_28_89850bb57a6655b01eb6g-08-1.jpg" ...>`
6.  **Alt Text (Mandatory):** Every `<img>` tag MUST have a descriptive `alt` attribute explaining the image content and context for learning. For purely decorative images, use `alt=""`.

## HTML Layout and Structure
### File Structure Reference
(See **Directory Structure** section above for the target file layout)

### Index Page (Table of Contents) Template
(Use the user-provided `index.html` structure)

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
            processEnvironments: true,
            tags: 'ams' // Use AMS numbering of equations
        },
        svg: { fontCache: 'global' },
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
                        <span class="nav-icon"></span>
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
                       <span class="progress-text">[Lecture X of Y]</span> <!-- Update text -->
                    </div>
                    <a href="[next-chunk.html]" class="nav-button [disabled]">
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
                         <span class="heading-icon">📖</span> <!-- Placeholder icon -->
                        <span class="heading-text">[Exact Section Title from PDF]</span>
                    </h2>
                    <div class="content-card">
                        <p>[Verbatim paragraph text]</p>
                        <!-- Other elements like lists, tables, equations, images go here -->

                        <!-- Example of handling content that was visually grouped in PDF -->
                         <!-- If the PDF had two lists side-by-side, the MMD output will likely put one list after the other.
                         Maintain this linear (top-bottom) structure in HTML. DO NOT recreate side-by-side columns. -->
                        <p>List of Inputs:</p>
                        <ul class="enhanced-list">
                            <li class="list-item"><span class="item-icon">•</span><span class="item-text">Input A</span></li>
                            <li class="list-item"><span class="item-icon">•</span><span class="item-text">Input B</span></li>
                        </ul>
                         <p>List of Outputs:</p> <!-- This paragraph acts as a separator/title -->
                         <ul class="enhanced-list">
                             <li class="list-item"><span class="item-icon">•</span><span class="item-text">Output X</span></li>
                             <li class="list-item"><span class="item-icon">•</span><span class="item-text">Output Y</span></li>
                         </ul>
                        <!-- End example of handling visual grouping -->

                        <!-- Example of converting list-like pattern -->
                         <p>This is a list:</p>
                         <ul> <!-- Use class="enhanced-list" for enhanced styling if needed -->
                              <li>First item</li>
                              <li>Second item</li>
                         </ul>

                         <!-- Example callout -->
                         <aside class="callout note" role="note">
                              <h4 class="callout-title"><span class="callout-icon">💡</span> Note</h4>
                              <p>[Supplementary note text NOT from original flow].</p>
                         </aside>

                         <!-- Example definition -->
                         <p>This refers to the concept of <dfn>stability</dfn>.</p>

                    </div>
                </section>
                <!-- END: section-id-1 -->

                <!-- START: section-id-2 -->
                <section id="section-id-2" class="content-section" aria-labelledby="section-heading-2">
                    <h2 id="section-heading-2" class="section-heading">
                         <span class="heading-icon">🔬</span> <!-- Placeholder icon -->
                         <span class="heading-text">[Exact Section Title from PDF]</span>
                    </h2>
                    <div class="content-card">
                        <p>[Verbatim paragraph text]</p>
                    </div>
                </section>
                <!-- END: section-id-2 -->

                <!-- More sections ... -->

                 <!-- Optional Key Points Section -->
                 <aside class="key-points-section" role="region" aria-labelledby="key-points-title-id">
                      <div class="key-points-container">
                           <div class="key-points-header">
                                <span class="key-points-icon">🎯</span>
                                <h3 id="key-points-title-id" class="key-points-title">Key Points</h3>
                           </div>
                           <div class="key-points-content">
                                <ul class="key-points-list">
                                     <li class="key-point-item">
                                          <span class="point-marker">•</span>
                                          <p><strong>[VERBATIM TEXT EXTRACTED FROM THIS TOPIC'S ORIGINAL CONTENT]</strong></p> <!-- Text MUST be bold -->
                                     </li>
                                     <li class="key-point-item">
                                          <span class="point-marker">•</span>
                                          <p><strong>[Another verbatim text snippet from the topic]</strong></p> <!-- Text MUST be bold -->
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
                    <a href="../index.html" class="nav-button">
                        <span class="nav-icon">🏠</span>
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
                       <span class="progress-text">[Lecture X of Y]</span> <!-- Update text -->
                    </div>
                    <a href="[next-chunk.html]" class="nav-button [disabled]"> <!-- Add 'disabled' class if last chunk -->
                        <span class="nav-text">Next Section</span>
                        <span class="nav-icon">→</span>
                    </a>
                </div>
            </nav>

        </article>
    </div