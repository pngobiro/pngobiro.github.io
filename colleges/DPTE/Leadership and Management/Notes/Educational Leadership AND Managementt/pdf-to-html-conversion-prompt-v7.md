### **PDF to HTML Conversion System Prompt **

## Core Mission
Convert PDF documents into **visually engaging, accessible, and pedagogically effective** HTML pages while ensuring **100% VERBATIM content preservation**. Create highly appealing and effective learning materials, organized into **logically coherent chunks**, that maintain absolute fidelity to the original text content.

The visual structure of the original PDF, where it indicates a deliberate grouping of related content (like side-by-side lists or paragraphs), should be interpreted as a logical grouping but translated into a **linear ("top and bottom") flow** in the HTML, following the order provided by the MMD. The goal is to make the *content* readable and understandable through clear semantic structure and design, *not* by recreating complex multi-column PDF layouts.

## Conversion Workflow Overview
1.  **Planning & Setup**: Create conversion plan, prepare environment, gather resources.
2.  **Initial Extraction**: Convert PDF to intermediate format (MMD) using Mathpix.
3.  **MMD Review & Correction (CRITICAL MANUAL STEP)**:
    *   **Manually open and meticulously review the generated MMD file. Compare it side-by-side with the original PDF.**
    *   **Correct ALL obvious OCR errors**, especially in tables, complex equations, code snippets, headings, and list items. Pay attention to special characters, hyphenation artifacts, and formatting.
    *   **Crucially, identify and remove spurious characters** (e.g., 't ', '• ', random symbols, or inconsistent prefixes that appear at the start of lines due to PDF layout or OCR errors and are clearly NOT part of an intended list structure or original text content in the PDF).
    *   **Identify text patterns that represent *intended* lists** in the PDF (e.g., lines consistently beginning with '-', '*', '•', 't ', or numbered prefixes followed by a space or punctuation). These patterns must be preserved/noted for semantic HTML conversion later; do not remove the text of these items.
    *   **Document all significant OCR corrections, decisions made about spurious characters vs. intended lists, and any complex formatting interpretations in the conversion log.** This step is crucial *before* HTML conversion.
4.  **Content Chunking**: Divide *corrected* MMD content into **logically coherent sections** based on document structure (chapters, major sections). Use common sense to avoid overly long or short files.
5.  **HTML Templating**: Set up base HTML structure with proper semantic elements and accessibility features based on the **HTML Layout and Structure** section below.
6.  **Content Transfer & Semantic Conversion**:
    *   Move *corrected* content from MMD to HTML chunks with proper semantic markup.
    *   **Convert identified *intended* list-like patterns into proper HTML `<ul>` or `<ol>` elements, preserving the exact verbatim text content of each item (i.e., the text following the original PDF prefix/marker).**
    *   Maintain the **linear flow** provided by the MMD.
7.  **100% Content Verification (ULTRA-CRITICAL)**:
    *   Validate verbatim content preservation for each chunk by comparing the generated HTML **directly against the ORIGINAL PDF SOURCE (not just the MMD)**. This is non-negotiable.
    *   Specifically verify that all original text, formulas, data in tables, and code snippets are present exactly as in the source PDF (after correcting OCR errors identified in Step 3 and potentially catching any missed ones here).
    *   Verify that the text within converted list items is verbatim (i.e., the text following the original PDF prefix/marker).
    *   Ensure no new textual content has been introduced and no original text has been omitted or altered.
    *   **Log this verification explicitly for each chunk: "100% Verbatim Content Verified against Original PDF for chunk [X] on [Date] by [Verifier]".**
8.  **Visual Enhancement & Styling Implementation**: **Strictly after content verification (Step 7) is complete**, apply styling and layout enhancements using the **CSS Styling Instructions** below. Ensure styling enhances readability of the linear content flow and improves the learning experience through clear visual hierarchy and distinction of content types (e.g., lists, definitions, callouts), without altering any text content.
9.  **Quiz Generation (Recommended)**: Based on the verified content of each chunk, create a corresponding self-assessment quiz page following the **Quiz Creation and Implementation** guidelines.
10. **Resource Handling**: Extract/download and organize images and other media using the specified **Image Handling** rules and correct filenames.
11. **Technical & Accessibility Validation**: Validate HTML (e.g., W3C validator), CSS, links (internal and external), and accessibility standards (WCAG AA).
12. **Finalization**: Link pages (including quizzes), test navigation thoroughly, and review final output.

## Content Chunking Strategy
1.  **Chunking based on Logical Structure and Coherence**:
    *   **Primary Goal:** Divide the content into meaningful, self-contained HTML files based on the document's inherent structure.
    *   **Break Points:** Use natural boundaries like **Chapters** or major sections starting with `<h1>` or `<h2>` headings as primary break points.
    *   **File Sizing (Guideline):** Aim for files that are neither excessively long nor trivially short.
    *   **Avoid overly long files:** If a single chapter or major section seems exceptionally long (e.g., spanning many PDF pages or likely exceeding 1000-1500 lines of HTML), consider splitting it at logical sub-section (`<h3>`) breaks. Document the rationale for splitting.
    *   **Avoid overly short files:** If a chapter or major section is very short (e.g., only a couple of paragraphs), consider merging it with the subsequent logical section *if it maintains coherence*. Document the rationale for merging.
    *   **Prioritize Coherence:** The primary driver for chunking is keeping closely related content together within a single file for a good user experience.
    *   **Never split** in the middle of a paragraph, table, list, code block, figure/caption group, or other indivisible logical unit. Do not split mid-sentence.
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
    *   Document all chunk decisions and their rationale (e.g., "Split Chapter 8 due to length at Section 8.3", "Merged short Appendix A into Unit 9"). This should be cross-referenced with the main verification checklist.
5.  **Chunk navigation implementation**:
    *   **Mandatory:** Each chunk MUST include functional navigation links (`<a>` tags) to the `previous-chunk.html` and `next-chunk.html`. Disable appropriately for first/last chunks. These filenames are placeholders and should be replaced with the actual filenames of the preceding/succeeding chunks.
    *   **Mandatory:** Each chunk MUST include a link back to the main `index.html` (Table of Contents).
    *   **Recommended:** Include breadcrumb navigation showing the user's current location within the document structure (e.g., `Home > Lecture 3 > Section 2`).
    *   **Recommended:** Include a progress indicator (e.g., "Lecture 3 of 7"). The percentage and X of Y values in the HTML template should be filled with static, correct values for each chunk.

## Content Preservation Rules
1.  **CRITICAL: ALL original pedagogical content must be preserved EXACTLY AS-IS from the source PDF (after correcting OCR errors during MMD review). This is non-negotiable.** This includes text, formulas, data in tables, code snippets, and the *intent* of figures.
2.  **NO content creation, modification, summarization, or rephrasing is allowed.**
3.  **DO NOT "modernize" or "enhance" the *meaning* or *wording* of the content.** Do not fix typos, grammatical errors, or factual inaccuracies present in the original source PDF. Preserve them verbatim.
4.  **The ONLY allowed changes are:**
    *   Adding HTML structural and semantic tags (`<p>`, `<h1>`, `<ul>`, `<li>`, `<table>`, `<code>`, `<section>`, `<article>`, `<aside>`, `<dfn>`, etc.) **to reflect the logical structure captured by MMD and to enhance the readability of the linear content flow.** This explicitly includes converting *intended* list-like patterns (e.g., lines consistently prefixed with '-', '*', '•', 't ', or numbers in the PDF, as identified during MMD review) from the MMD into semantic HTML list elements (`<ul>` or `<ol>`, containing `<li>` for each item). The text content within each `<li>` **must be the verbatim text from the PDF source that *followed* the original list prefix/marker** (after OCR correction and removal of the prefix itself from the item's text).
    *   Applying CSS styling for visual presentation as defined in the **CSS Styling Instructions** section.
    *   Converting formatting (bold, italic) to HTML elements (`<strong>`, `<em>`).
    *   Adding accessibility attributes (e.g., `alt` text, ARIA roles).
    *   Correcting OCR errors identified during the MMD review phase (Step 3 of Workflow) and **cleaning spurious characters identified as OCR artifacts.**
    *   Applying `<strong>` tags to the verbatim text within "Key Points" list items (see Zero-Summarization Directive).
5.  Each section must be visually compared line-by-line against the **original PDF source** before applying visual enhancements.

## Zero-Summarization Directive
### Absolute Content Preservation Mandate
**Every word, sentence, paragraph, list item (after conversion from an intended PDF pattern), table cell, and code line from the source document MUST appear VERBATIM in the HTML output (after correcting OCR errors and cleaning spurious artifacts during MMD review).**

*   **NO** summarization, condensation, or paraphrasing is permitted. EVER.
*   Text must be copied letter-for-letter, exactly as it appears in the **original PDF** (after correcting obvious OCR errors and cleaning spurious characters during MMD review).
*   **NEVER** create new textual content, new lists, or new summaries *that replace or alter* the original content. Converting *intended list patterns* from the PDF to semantic HTML lists is permitted as it represents the original *intent* of the content structure, but the text within the items must be verbatim from the PDF (after the prefix).
*   **NEVER** omit any content, no matter how minor it seems.
*   Preserve all lists (after conversion from PDF patterns) with exactly the same number of items and identical text content (text following the original prefix).
*   Maintain all original punctuation, spacing cues (like paragraph breaks represented by MMD structure), and formatting emphasis (bold/italic) from the original PDF.

### Common Violation Patterns to Avoid
*   **FALSE:** Creating bullet points or summaries that *replace* original paragraphs (unless the original source PDF used a clear list pattern that was previously represented as a paragraph by OCR, and this is being corrected semantically).
*   **FALSE:** Reorganizing content into a different sequence than the original linear flow provided by MMD.
*   **FALSE:** Rewriting sentences or paragraphs to be "clearer" or more "concise".
*   **FALSE:** Adding explanatory text *within* the original content flow. (Use callouts/asides for annotations if necessary, clearly distinct from original text, and only if the source PDF has such distinct callouts).
*   **FALSE:** Changing the language, terminology, or fixing typos/grammar found in the source PDF.
*   **FALSE:** Generating new section titles or headings not present in the original PDF structure.
*   **FALSE:** Converting list *patterns* but altering the verbatim text content of any list item (text after original prefix).
*   **FALSE:** Merging distinct paragraphs from the PDF unless they were incorrectly split by OCR and this correction was documented during MMD review.

### Permitted Visual and Learning Enhancements (Apply *STRICTLY after* 100% Content Verification)
Only apply these *after* verifying verbatim content preservation:
*   **ALLOWED:** Enhanced visual presentation using CSS (borders, backgrounds, spacing, typography) based on the **CSS Styling Instructions** section below, specifically applied to elements like headings, paragraphs, lists (including those converted from PDF patterns), tables, figures, and callouts. These enhancements must *wrap* or *style* existing verbatim content, not replace or alter it.
*   **ALLOWED:** Applying structural patterns like cards (`<div class="content-card"></div>`) or callouts (`<aside>`) to *existing* content blocks based on the **HTML Layout and Structure** section below, specifically to enhance the readability of the linear content flow and highlight distinct content types (e.g., notes, warnings, definitions, key points that exist in the source).
*   **ALLOWED:** Adding "Key Points" or "Summary" sections (`<aside class="key-points-section">`) at the end of a topic *IF AND ONLY IF* they contain **only verbatim text snippets** extracted directly from that topic's original content. The text within these list items **MUST** be wrapped in `<strong>` tags.
*   **ALLOWED:** Using icons, color-coding, or visual indicators to highlight important terms or sections *without changing the text*, following the defined CSS styles.
*   **ALLOWED:** Adding interactive elements (like quizzes, collapsible sections or tooltips for definitions - using `<dfn>`) that reveal or organize the *original* content in a non-linear way, provided the full original content remains accessible.
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

### Step 2: MMD Review and Correction (CRITICAL MANUAL STEP)
*   **Manually open and meticulously review the `.mmd` file.**
*   **Compare carefully, side-by-side, against the original PDF.**
*   **Correct OCR Errors:** Fix ALL garbled text, misidentified characters, or formatting issues introduced during OCR. Pay close attention to:
    *   Mathematical equations (check symbols, variables, structure).
    *   Tables (check cell content, alignment markers, row/column integrity).
    *   Code snippets (check indentation, syntax, special characters).
    *   Lists and complex layouts as represented *in the MMD* versus the PDF's visual structure.
    *   Headings, bold/italic text, and paragraph breaks.
*   **Clean Artifacts vs. Identify Intended Lists (CRUCIAL DISTINCTION):**
    *   **Remove Spurious Characters:** Identify and remove inconsistent characters or prefixes (like 't ', '• ', random symbols) that appear at the start of lines if they are clearly OCR artifacts or unintended formatting from the PDF, and *not* part of a clear, consistent list pattern in the original PDF.
    *   **Identify Intended List Patterns:** Note consistent prefixes ('-', '*', '•', 't ', numbers followed by punctuation/space) or other formatting in the *original PDF* that clearly indicates an intended list structure, even if the MMD doesn't perfectly tag it. These intended patterns and their associated text items must be preserved/noted for semantic conversion in Step 6 of the Workflow. Do NOT remove the text of these intended list items.
*   **Do NOT change the original wording or fix source document errors (typos, grammar).** Only correct what the OCR process broke or misinterpreted from the PDF.
*   **Document:** In the conversion log for each document/chunk, record:
    *   Confirmation that MMD review and correction against the PDF is complete.
    *   A summary of significant OCR corrections made (e.g., "Corrected 3 complex equations on pg. X", "Reformatted table on pg. Y").
    *   Notes on specific decisions made regarding removal of spurious characters vs. identification of intended list patterns, especially if ambiguous.
*   **Mark this step as complete** in the conversion log for each document/chunk only after thorough review and documentation.

### Step 3: Handling MMD Output
*   Use the **corrected** and **cleaned** MMD file (from Step 2) as the source for HTML conversion.
*   **Images:** Identify all `![](image_url)` links. These URLs will be used later to download images. The corresponding local filename structure is defined in the "Image Handling" section.
*   **Equations:** MMD preserves LaTeX (`$...$` or `$$...$$`). This works directly with MathJax in the HTML template. Verify complex equations carefully during MMD review (Step 2) against the PDF.

## HTML Implementation Process
### Structure Mirroring & Semantics
*   HTML document structure must accurately mirror the original document's logical hierarchy (headings, paragraphs, lists, etc.) as captured and corrected in the MMD. Use the templates provided in the **HTML Layout and Structure** section.
*   Use appropriate semantic HTML5 elements: `<article>`, `<section>`, `<nav>`, `<header>`, `<footer>`, `<aside>`, `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`, `<caption>`, `<ul>`, `<ol>`, `<li>`, `<code>`, `<pre>`, `<dfn>`.
*   Every heading must use the appropriate `<h1>`-`<h6>` tag matching the original hierarchy (e.g., PDF Chapter Title -> `<h1>`, Section Heading -> `<h2>`).
*   Maintain exact paragraph breaks (`<p>` tags) as in the original (after MMD cleaning and correction).
*   **Convert list patterns:** Identify the *intended* list patterns noted in MMD Review (Step 2) and convert them into proper semantic `<ul>` or `<ol>` elements. Each item in the original PDF pattern becomes an `<li>` element. The actual text content of the `<li>` element **must be the verbatim text from the PDF that *followed* the original list prefix/marker** (after OCR correction and removal of the prefix itself from the item's text). Do not simply preserve the prefix character as text within the `<li>`; use the list tags semantically. Apply classes like `enhanced-list` if appropriate for styling defined in the CSS.
*   **Importantly:** Content that appeared visually side-by-side or in columns in the PDF but is presented linearly in the MMD (e.g., List A followed by List B) MUST be kept in that linear, stacked ("top and bottom") format in the HTML. This linear representation IS the required output structure. Do not use CSS Flexbox or Grid to recreate complex multi-column layouts for this type of content grouping.

### Content Preservation Implementation
*   Copy-paste all text **verbatim** from the **corrected and cleaned MMD source** (Step 2 from Mathpix/MMD Handling).
*   Perform a **dedicated, line-by-line visual comparison** of the generated HTML against the **ORIGINAL PDF SOURCE** for 100% accuracy *before* applying significant visual enhancements. This is to catch any errors missed in MMD review or introduced during HTML transfer.
*   Maintain all original formatting emphasis (bold/italic) using `<strong>` and `<em>`.
*   Preserve all tables (`<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`, `<caption>`) and code blocks (`<pre><code>`) exactly as written (after MMD correction).
*   **NEVER omit, condense, or rewrite any original content.**
*   **Key Points Text:** For text used in "Key Points" lists, the *verbatim* text from the source must be wrapped in `<strong>` tags (e.g., `<li><strong>[Verbatim text]</strong></li>`).
*   Enclose major content sections (corresponding to `<h2>` or significant logical blocks) within unique HTML comment markers (`<!-- START: section-name -->` and `<!-- END: section-name -->`) to facilitate targeted updates using `apply_diff`. Ensure the section within the markers has a matching `id` attribute (e.g., `<section id="section-name">`).

### Visual Enhancement for Learning Effectiveness (Apply *STRICTLY after* 100% Content Verification)
Only after verifying verbatim content preservation, apply further visual improvements using the **CSS Styling Instructions** defined later in this document:
1.  **Reference CSS Styling Instructions**: Apply classes defined in the CSS section for typography, spacing, colors, components, etc.
2.  **Apply Standard Visual Enhancements**:
    *   Apply CSS classes for typography, spacing, and color.
    *   Use card layouts (`<div class="content-card">...</div>`) for distinct content blocks to improve visual separation and scanability.
    *   Enhance list styling (`<ul class="enhanced-list">`, `<ol class="enhanced-list">`) beyond basic browser defaults to improve readability of lists converted from patterns.
    *   Implement callout boxes (`<aside class="callout note" role="note">...</aside>` or `<aside class="callout warning" role="alert">...</aside>`) for supplementary information or warnings that are distinctly separate in the source PDF, clearly visually distinct from the main content flow. Do not create new callout text.
    *   Use definition tags (`<dfn>`) for key terms, optionally with interactive elements or styling to highlight them.
    *   Add visual dividers (`<hr>`).
    *   Ensure code blocks have language classes (`<code class="language-python">`).
    *   Apply styles for visually distinct sections (e.g., using background colors or borders via CSS classes).
    *   Implement responsive table designs if necessary.
    *   Ensure consistent use of iconography (e.g., within `.section-heading`, `.callout-title`, enhanced list items).
    *   Ensure responsiveness across defined breakpoints (e.g., 768px, 480px).

### Accessibility Implementation
*   **Mandatory:** All images (`<img>`) MUST have descriptive `alt` text. Decorative images should have `alt=""`. Alt text itself must be accurate and pedagogically relevant; do not use placeholder alt text like "image".
*   Use semantic HTML correctly (headings in order, lists for lists, tables for tabular data, etc.).
*   Ensure sufficient color contrast according to WCAG AA guidelines.
*   Use ARIA roles (`role="navigation"`, `role="main"`, `role="region"`, `aria-labelledby`, etc.) where appropriate to enhance semantic meaning.
*   Ensure keyboard navigability and visible focus indicators for interactive elements.
*   Maintaining a linear content flow (as provided by MMD and enhanced with semantic lists) is generally more accessible than complex multi-column layouts recreated from visual cues alone.

## Directory Structure and File Organization

```
[project-root]/
├── index.html                               # Table of Contents (linking to topics and quizzes)
├── topics/
│   ├── [topic-name-1].html                  # Content chunk 1
│   └── [topic-name-2].html                  # Content chunk 2
├── quizzes/
│   ├── quiz-[topic-name-1].html             # Quiz for chunk 1
│   └── quiz-[topic-name-2].html             # Quiz for chunk 2
├── assets/
│   └── images/
│       └── [image-name].jpg                 # All image files
├── styles/
│   └── main.css                             # Main stylesheet
└── js/
    ├── navigation.js                        # For nav buttons
    └── quiz.js                              # For quiz functionality
```

## Image Handling
1.  **Extraction Source:** Images are identified via `![](image_url)` links in the **reviewed and corrected MMD file** (Step 2 of Mathpix/MMD Handling).
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
6.  **Alt Text (Mandatory):** Every `<img>` tag MUST have a descriptive `alt` attribute explaining the image content, context, and its pedagogical purpose for learning. For purely decorative images, use `alt=""`. Do not use generic alt text like "image" or "picture".
7.  **Image Quality:** Ensure downloaded images are of comparable quality/resolution to the original PDF. Report any issues.
8.  **No New Images:** Do not introduce any images not present in the original PDF.

## HTML Layout and Structure
### File Structure Reference
(See **Directory Structure** section above for the target file layout)

### Index Page (Table of Contents) Template
(Use a structure that links to both topic pages and quiz pages).

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
                            <div class="progress-fill" style="width: [PERCENTAGE]%;"></div> <!-- Set percentage dynamically with static value for this chunk -->
                        </div>
                       <span class="progress-text">[Lecture X of Y]</span> <!-- Update text with static value for this chunk -->
                    </div>
                    <a href="[next-chunk.html]" class="nav-button [disabled]">
                        <span class="nav-text">Next Section</span>
                        <span class="nav-icon">→</span>
                    </a>
                </div>
            </nav>

            <header class="section-header">
                <h1 class="section-title">[EXACT Unit/Chunk Title from PDF]</h1> <!-- Title must be VERBATIM from PDF/MMD -->
                <div class="title-underline"></div>
            </header>

            <main class="section-content">
                <!-- Content Sections Go Here -->
                <!-- START: section-id-1 -->
                <section id="section-id-1" class="content-section" aria-labelledby="section-heading-1">
                    <h2 id="section-heading-1" class="section-heading">
                         <span class="heading-icon"> </span> <!-- Placeholder icon -->
                        <span class="heading-text">[Exact Section Title from PDF]</span> <!-- Title must be VERBATIM from PDF/MMD -->
                    </h2>
                    <div class="content-card">
                        <p>[Verbatim paragraph text from corrected MMD]</p>
                        <!-- Other elements like lists, tables, equations, images go here, ALL CONTENT VERBATIM -->
                    </div>
                </section>
                <!-- END: section-id-1 -->

                <!-- More sections ... -->
            </main>

            <!-- Bottom Navigation -->
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
                            <div class="progress-fill" style="width: [PERCENTAGE]%;"></div> <!-- Set percentage dynamically with static value for this chunk -->
                        </div>
                       <span class="progress-text">[Lecture X of Y]</span> <!-- Update text with static value for this chunk -->
                    </div>
                    <a href="[next-chunk.html]" class="nav-button [disabled]"> <!-- Add 'disabled' class if last chunk -->
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

## Quiz Creation and Implementation
### Core Goal
Create a self-assessment quiz for each content chunk to reinforce learning. Quizzes should cover the key concepts of the topic and allow learners to check their understanding interactively. All questions and answers must be based **strictly** on the verbatim content of the corresponding topic chunk.

### Directory and Naming
*   Create a new directory at the root level named `quizzes/`.
*   Quiz files should be named to correspond with their topic chunk: `quiz-[topic-name].html`.
*   Example: The quiz for `topics/histology-introduction.html` should be `quizzes/quiz-histology-introduction.html`.

### Question and Answer Guidelines
1.  **Content Basis:** Every question, option, and answer explanation **must** be derived directly from the text of the associated content chunk. Do not introduce new information, rephrase concepts, or ask questions that cannot be answered with the provided text.
2.  **Coverage:** Aim to create 5-10 questions per quiz, covering the main sections and key concepts of the chunk. Use a mix of question types (multiple-choice, true/false, fill-in-the-blank) to keep it engaging.
3.  **Reveal Answer Functionality:** Each question must have a "Reveal Answer" button. When clicked, it should show the correct answer and a brief explanation.
4.  **Explanation is Key:** The explanation is crucial. It should state the correct answer and then briefly quote or reference the part of the source text that supports the answer. This reinforces learning and demonstrates content fidelity.

### Quiz Page Template
Use the following template for all quiz pages. It includes the necessary structure and links to the required JS and CSS files.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz: [Topic Title]</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../styles/main.css">
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
                </div>
            </nav>

            <header class="section-header">
                <h1 class="section-title">Quiz: [Verbatim Topic Title]</h1>
                <p>Test your knowledge on the concepts from [Topic Name].</p>
                <div class="title-underline"></div>
            </header>

            <main class="section-content">
                <div class="quiz-container">

                    <!-- Example Question 1 -->
                    <div class="quiz-question">
                        <p class="question-text">1. [Text of the question derived from the content chunk]</p>
                        <ul class="options">
                            <li>A) [Option A]</li>
                            <li>B) [Option B]</li>
                            <li>C) [Option C]</li>
                            <li>D) [Option D]</li>
                        </ul>
                        <button class="reveal-answer-btn">Reveal Answer</button>
                        <div class="answer-explanation" style="display: none;">
                            <p><strong>Answer:</strong> C) [Correct Option].</p>
                            <p><strong>Explanation:</strong> [Brief explanation referencing the source text, e.g., "The text states on page X that..." or "As mentioned in the section on Y, the correct answer is..."]</p>
                        </div>
                    </div>

                    <!-- Example Question 2 (True/False) -->
                    <div class="quiz-question">
                        <p class="question-text">2. True or False: [Statement derived from the content chunk].</p>
                        <button class="reveal-answer-btn">Reveal Answer</button>
                        <div class="answer-explanation" style="display: none;">
                            <p><strong>Answer:</strong> [True/False].</p>
                            <p><strong>Explanation:</strong> [Explanation of why the statement is true or false, based on the source text.]</p>
                        </div>
                    </div>

                    <!-- Add more questions as needed -->

                </div>
            </main>

        </article>
    </div>
    <script src="../js/navigation.js"></script>
    <script src="../js/quiz.js"></script>
</body>
</html>
```

## CSS Styling Instructions
```css
:root {
--primary-color: #2c3e50;
--secondary-color: #34495e;
--accent-color: #3498db;
--accent-hover-color: #2980b9;
--background-color: #f8f9fa;
--card-background-color: #ffffff;
--text-color: #212529;
--muted-text-color: #6c757d;
--border-color: #dee2e6;
--code-background-color: #2d3436;
--code-text-color: #dfe6e9;
--note-bg-color: #eaf7fb;
--note-border-color: #aed6f1;
--warning-bg-color: #fff9e6;
--warning-border-color: #ffe58f;
--font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
--font-family-monospace: 'Courier New', Courier, monospace;
--font-family-math: 'Times New Roman', serif;
}

*, *::before, *::after {
box-sizing: border-box;
}

body {
font-family: var(--font-family);
line-height: 1.7;
color: var(--text-color);
background-color: var(--background-color);
margin: 0;
padding: 0;
font-size: 16px;
}

.container {
max-width: 1140px;
margin: 0 auto;
padding: 1.5rem;
}

.document-section {
background-color: var(--card-background-color);
padding: 2rem;
border-radius: 8px;
box-shadow:0 4px 12px rgba(0, 0, 0, 0.06);
margin-bottom: 2rem;
}

h1, h2, h3, h4, h5, h6 {
color: var(--primary-color);
margin-top: 1.5em;
margin-bottom: 0.8em;
line-height: 1.3;
font-weight: 600;
}

h1.section-title {
font-size: 2.2rem;
font-weight: 700;
margin-top: 0;
margin-bottom: 0.5rem;
text-align: center;
border-bottom: none;
padding-bottom: 0;
}

h2.section-heading {
font-size: 1.8rem;
border-bottom: 1px solid var(--border-color);
padding-bottom: 0.5rem;
display: flex;
align-items: center;
gap: 0.7rem;
}

h3.subsection-heading {
font-size: 1.4rem;
font-weight: 600;
border-bottom: 1px dashed var(--border-color);
padding-bottom: 0.3rem;
margin-top: 1.2em;
margin-bottom: 0.6em;
}

h4.subsubsection-heading {
font-size: 1.15rem;
font-weight: 600;
color: var(--secondary-color);
margin-top: 1em;
margin-bottom: 0.5em;
}

p {
margin-top: 0;
margin-bottom: 1.2rem;
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

dfn {
font-style: italic;
font-weight: 600;
border-bottom: 1px dashed var(--secondary-color);
cursor: help;
}

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

.content-card {
padding: 1rem 0;
}

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

.nav-button {
display: flex;
align-items: center;
gap: 0.5rem;
padding: 0.6rem 1.2rem;
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

.nav-button[href*="index.html"] {
color: #2980b9;
border-color: #2980b9;
}

.nav-button[href*="index.html"]:hover {
background-color: #eaf4fb;
border-color: var(--accent-hover-color);
}

.nav-links > .nav-button:nth-child(2):not([href*="index.html"]):not(:last-child):not(.disabled) {
color: #e67e22;
border-color: #e67e22;
}

.nav-links > .nav-button:nth-child(2):not([href*="index.html"]):not(:last-child):not(.disabled):hover {
background-color: #fdf3e8;
}

.nav-links > .nav-button:last-child:not([href*="index.html"]):not(.disabled) {
color: #27ae60;
border-color: #27ae60;
}

.nav-button:last-child:not([href*="index.html"]):not(.disabled):hover {
background-color: #eaf7f1;
}

.nav-button.disabled {
color: var(--muted-text-color);
border-color: var(--border-color);
cursor: not-allowed;
opacity: 0.6;
}

.nav-button.disabled:hover {
background-color: var(--card-background-color);
}

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
max-width: 200px;
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

/* Table of Contents (index.html) Styling */
.toc-container {
max-width: 800px;
margin: 40px auto;
padding: 30px 40px;
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
content: '→ ';
color: #bdc3c7;
margin-right: 8px;
font-size: 0.9em;
display: inline-block;
}

/* Content Element Styling */
.content-section {
padding: 1rem 0;
margin-bottom: 1.5rem;
}

.heading-icon {
font-size: 1.1em;
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
padding: 0.8rem 1rem;
border: 1px solid var(--border-color);
text-align: left;
vertical-align: top;
}

.content-table th {
background-color: #f1f3f5;
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
background-color: #f1f3f5;
border-radius: 3px;
font-size: 0.95em;
font-family: var(--font-family-math);
}

.equation {
margin: 1.8rem 0;
text-align: center;
overflow-x: auto;
padding: 1rem 1.5rem;
background-color: #f8f9fa;
border: 1px solid var(--border-color);
border-radius: 4px;
font-size: 1.1em;
font-family: var(--font-family-math);
}

/* Enhanced lists */
ul.enhanced-list, ol.enhanced-list {
list-style: none; /* Remove default markers */
padding-left: 0; /* Remove default padding */
margin-bottom: 1rem;
}

ul.enhanced-list .list-item, ol.enhanced-list .list-item {
display: flex; /* Use flexbox for alignment */
align-items: flex-start; /* Align items to the top */
gap: 0.8rem; /* Space between icon and text */
margin-bottom: 0.8rem;
}

ul.enhanced-list .item-icon, ol.enhanced-list .item-icon {
color: var(--accent-color);
font-weight: bold;
flex-shrink: 0; /* Prevent shrinking */
margin-top: 0.15em; /* Adjust alignment with text */
min-width: 1.2em; /* Ensure space for multi-digit numbers or icons */
text-align: right;
}

ul.enhanced-list .item-text, ol.enhanced-list .item-text {
flex-grow: 1; /* Allow text to take up remaining space */
}


/* Basic lists (no specific class) */
ul, ol {
    margin-bottom: 1.2rem; /* Add spacing after basic lists */
    padding-left: 2rem; /* Add default browser-like padding */
}


/* Images */
.content-image {
max-width: 100%;
height: auto;
border-radius: 4px;
margin: 1.5rem auto;
display: block;
border: 1px solid var(--border-color);
box-shadow: 0 2px 4px rgba(0,0,0,0.05);
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
pre.code-block {
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

pre.code-block code {
white-space: pre;
font-family: var(--font-family-monospace);
}

/* No complex column layouts - content flows linearly (top to bottom) */

/* Responsive Design */
@media (max-width: 768px) {
.container { padding: 1rem; }
.document-section { padding: 1.5rem; }
h1.section-title { font-size: 1.8em; }
h2.section-heading { font-size: 1.5em; }
h3.subsection-heading { font-size: 1.2em; }

.toc-container { margin: 20px; padding: 20px; }
.toc-title { font-size: 2em; }

.nav-links { flex-direction: column; align-items: stretch; }
.nav-button { justify-content: center; }
.document-progress { order: -1; margin-bottom: 1rem; width: 100%; }
.progress-bar { max-width: none; }

.content-table { font-size: 0.9em; }
.content-table th, .content-table td { padding: 0.5rem; }
}

@media (max-width: 480px) {
body { font-size: 15px; }
.container { padding: 0.5rem; }
.document-section { padding: 1rem; }

h1.section-title { font-size: 1.6em; }
h2.section-heading { font-size: 1.3em; }
h3.subsection-heading { font-size: 1.1em; }
h4.subsubsection-heading { font-size: 1.05em; }

.toc-title { font-size: 1.8em; }
.toc-chapter-title { font-size: 1.3em; }
.toc-link { font-size: 1em; }

.nav-button { padding: 0.5rem 0.8rem; font-size: 0.85em; }
.equation { padding: 0.8rem; font-size: 1em;}
pre.code-block { padding: 0.8rem 1rem; font-size: 0.9em;}
}

/* NEW: Quiz Styling */
.quiz-container {
    margin-top: 2rem;
}

.quiz-question {
    background-color: #fdfdfe;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.quiz-question .question-text {
    font-size: 1.2em;
    font-weight: 600;
    color: var(--primary-color);
    margin-bottom: 1rem;
}

.quiz-question .options {
    list-style-type: none;
    padding-left: 0;
    margin-bottom: 1rem;
}

.quiz-question .options li {
    padding: 0.5rem 0;
}

.reveal-answer-btn {
    background-color: var(--accent-color);
    color: white;
    border: none;
    padding: 0.6rem 1.2rem;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 500;
    transition: background-color 0.2s ease;
    display: inline-block;
}

.reveal-answer-btn:hover {
    background-color: var(--accent-hover-color);
}

.answer-explanation {
    margin-top: 1rem;
    padding: 1rem;
    background-color: var(--note-bg-color);
    border: 1px solid var(--note-border-color);
    border-left-width: 5px;
    border-radius: 5px;
    display: none; /* Initially hidden */
}

.answer-explanation strong {
    color: var(--primary-color);
}
```

## JavaScript
### `navigation.js`
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

    // Note: The progress bar percentage and "Lecture X of Y" text in the HTML template
    // are intended to be filled with static, correct values for each specific chunk
    // during the HTML generation phase. This script does not dynamically update them.
});
```

### `quiz.js` (NEW)
```javascript
// JS for interactive quiz functionality
document.addEventListener('DOMContentLoaded', function() {
    const revealButtons = document.querySelectorAll('.reveal-answer-btn');

    revealButtons.forEach(button => {
        button.addEventListener('click', function() {
            // The answer explanation div is the next element sibling
            const answerExplanation = this.nextElementSibling;
            if (answerExplanation && answerExplanation.classList.contains('answer-explanation')) {
                // Toggle visibility
                if (answerExplanation.style.display === 'block') {
                    answerExplanation.style.display = 'none';
                    this.textContent = 'Reveal Answer';
                } else {
                    answerExplanation.style.display = 'block';
                    this.textContent = 'Hide Answer';
                }
            }
        });
    });
});
```

## Progress Tracking and Verification
### Enhanced Verification Checklist
For each section/page, verify and document with "Verified by [Name] on [Date]":
*   [ ] **MMD reviewed against ORIGINAL PDF**: OCR errors corrected, and **spurious characters/inconsistent prefixes (those NOT part of an intended PDF list pattern) fully removed**. Documented major corrections/decisions in conversion log.
*   [ ] **Content matches ORIGINAL PDF source exactly** (line-by-line visual check) *after* MMD correction and cleaning. This includes checking for any accidentally introduced or omitted characters, words, or paragraphs.
*   [ ] No added, modified, or summarized content (beyond documented OCR correction/cleaning).
*   [ ] Only HTML/CSS structural/styling changes applied *after* content verification.
*   [ ] Original text, numbers, formulas, code preserved verbatim from corrected MMD (which is verbatim from PDF post-OCR correction).
*   [ ] All PDF sections, headings (levels `<h1>-<h6>`), paragraphs, tables are present and correctly tagged semantically.
*   [ ] **Intended list-like content from PDF (identified by consistent prefixes like '-', '•', 't ', or numbers) converted to proper semantic HTML `<ul>` or `<ol>` elements. The text within each `<li>` is the verbatim text that *followed* the original PDF prefix/marker.** The prefix itself is not included as text in the `<li>`.
*   [ ] Lists (after pattern conversion) have the exact same number of items and verbatim text (post-prefix) as the original PDF.
*   [ ] Content that appeared in visual groupings (e.g., columns) in the PDF is represented in a **linear ("top and bottom") flow** in the HTML, strictly following the order from the corrected MMD. No complex multi-column CSS layouts are used to recreate PDF visual groupings.
*   [ ] Any "Key Points" sections use only **verbatim text** extracted directly from that topic's original content, and this text is wrapped in `<strong>` tags. No new "Key Points" created.
*   [ ] **Quizzes (if created) accurately reflect content** from the corresponding chunk, with correct answers and clear explanations. Reveal functionality works correctly.
*   [ ] All navigation links (Prev/Next/ToC) function correctly and point to the correct files.
*   [ ] All mathematics (MathJax) renders correctly and LaTeX is a verbatim copy from the corrected MMD.
*   [ ] All images present, correctly named (`[ID]g-[PageNum]-[SeqNum].ext` format including sequence number), correctly linked, and have descriptive, accurate, and pedagogically relevant `alt` text (or `alt=""` if purely decorative). Image quality is comparable to PDF.
*   [ ] HTML is valid (checked with W3C validator or similar) and uses semantic elements appropriately.
*   [ ] Basic accessibility checks passed (color contrast WCAG AA, keyboard navigation, ARIA roles where needed).
*   [ ] **Chunking is logical** and file sizes are reasonable (not excessively long or short).
*   [ ] **Verification Complete:** All checklist items confirmed for this chunk. **Chunk explicitly marked as verified in conversion log.**

## Final Considerations
*   **Verbatim content preservation is the ABSOLUTE HIGHEST priority.** Never sacrifice accuracy for aesthetics or perceived clarity. Do not fix source errors (typos, grammar).
*   Visual design, enhanced formatting, and interactive elements like quizzes should make the *original*, linearly presented content easier to read, navigate, and understand, without altering it.
*   **Report any ambiguities** in the PDF or MMD that make 100% verbatim conversion difficult, rather than making assumptions. Seek clarification.
*   **Any deviation** from these instructions must be explicitly documented with a clear rationale and approved.