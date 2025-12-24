--- START OF FILE pdf-to-html-conversion-prompt-v11.md ---

# PDF to HTML Conversion System Prompt (v11)

## Core Mission
Convert PDF documents into **visually engaging, accessible, pedagogically effective, and modern** HTML pages while ensuring **100% VERBATIM content preservation**. Create highly appealing and effective learning materials, organized into **logically coherent chunks**, that maintain absolute fidelity to the original text content. The goal is to produce user-friendly web pages applying modern UI/UX best practices, significantly enhancing the learning experience compared to a static PDF, and adhering to WCAG 2.1 Level AA accessibility standards.

The visual structure of the original PDF, where it indicates a deliberate grouping of related content (like side-by-side lists or paragraphs), should be interpreted as a logical grouping but translated into a **linear ("top and bottom") flow** in the HTML, following the order provided by the MMD. The goal is to make the *content* readable and understandable through clear semantic structure and design, *not* by recreating complex multi-column PDF layouts.

**Specifically, ensure that:**
- All list patterns (both bulleted and numbered, including various numbering schemes like "a)", "i.") are converted to semantic HTML lists (`<ul>` for unordered/bulleted, `<ol>` for ordered/numbered).
- Nested lists are preserved with proper HTML hierarchy (e.g., a `<ul>` or `<ol>` nested inside an `<li>` of its parent list).
- Any spurious characters introduced by the OCR (like 't ', '• ', inconsistent numbering, or random characters not part of original content) are meticulously removed during the MMD review phase.

## Conversion Workflow Overview
1.  **Planning & Setup**: Create conversion plan, prepare environment, gather resources.
2.  **Initial Extraction**: Convert PDF to intermediate format (MMD) using Mathpix.
3.  **MMD Review & Correction (CRITICAL - First Pass Verification)**:
    *   **Manually open and review the generated MMD file.**
    *   **Compare carefully against the original PDF, line by line.**
    *   **Correct OCR Errors:** Fix any garbled text, misidentified characters, or formatting issues introduced during OCR. Pay close attention to:
        *   Mathematical equations (check symbols, variables, structure).
        *   Tables (check cell content, alignment markers, complex structures).
        *   Code snippets (check indentation, syntax).
        *   Lists and complex layouts as represented *in the MMD*.
    *   **Clean Artifacts:** Identify and **remove spurious characters or inconsistent prefixes (e.g., 't ', '• ', ' - ' at the start of lines that aren't part of a clear list pattern; random numbers/letters like "g.", "S:", "i.", "ii." if not part of an actual ordered list; OCR noise like '�', '|', '¦', '..'; page break markers like "- Page 12 -", ">>>>", "<<<<")** that appear to be OCR errors or unintended formatting from the PDF. These prefixes and artifacts must be removed before converting to HTML list items or paragraphs.
    *   **Identify List Patterns:** Note consistent prefixes ('-', '*', '•', **numbers followed by punctuation/space like "1.", "a)", "(i).", "I."**) or other formatting that clearly indicates an intended list structure in the original PDF, even if the MMD doesn't perfectly tag it as such. **Also, meticulously note nested list patterns (indicated by indentation and/or different prefix types under a parent item, e.g., a main item starting with '1.' followed by indented items starting with 'a)').** This information is crucial for semantic conversion to `<ul>` or `<ol>`.
    *   **Identify Figure-Caption Relationships:** Note images and any associated text that clearly functions as a caption.
    *   **Do NOT change the original wording or fix source document errors.** Only correct what the OCR process broke.
    *   **Mark this step as complete** in the conversion log for each document/chunk. **This MMD review is the first pass of content verification.**
4.  **Content Chunking**: Divide *corrected* MMD content into **logically coherent sections** based on document structure (chapters, major sections). Use common sense to avoid overly long or short files.
5.  **HTML Templating**: Set up base HTML structure with proper semantic elements (including ARIA landmarks, skip links) and accessibility features based on the **HTML Layout and Structure** section below.
6.  **Content Transfer & Semantic Conversion**: Move *corrected* content from MMD to HTML chunks with proper semantic markup.
    *   **Convert all identified list-like patterns into proper HTML `<ul>` (for bulleted/unordered) or `<ol>` (for numbered/ordered) elements.** The text content of each `<li>` must be the verbatim text from the source, with the original prefix character completely removed. Use CSS for list styling (bullets, numbers, custom markers).
    *   **For numbered lists (patterns like "1.", "a)", "i."), strictly use `<ol>`.** Ensure numbering is handled correctly by the browser/CSS. The `type` attribute on `<ol>` (e.g., `type="a"`, `type="I"`) can be used if the specific numbering style from the PDF is important and needs to be preserved semantically, though CSS `list-style-type` is often preferred for presentation.
    *   **Nested lists must be represented as child `<ul>` or `<ol>` elements placed directly within the parent `<li>` element.**
    *   Identify and markup figures with `<figure>` and `<figcaption>` where appropriate. Maintain the **linear flow** provided by the MMD.
7.  **100% Content Verification (Second Pass)**: Validate verbatim content preservation by comparing the generated HTML against the *original PDF source* for each chunk. **This is the second critical pass of verification.**
    *   **Specifically verify that all original text, formulas, data in tables (including complex ones), and code snippets are present exactly as in the source PDF (after correcting OCR errors during MMD review).**
    *   **Verify that the text within converted list items is verbatim (with prefixes removed) and that list structure (including nesting and correct `<ul>`/`<ol>` usage) matches the original PDF's intent.** Check numbering sequence in ordered lists.
8.  **Visual Enhancement & Styling Implementation**: Apply styling and layout enhancements using the **CSS Styling Instructions** below *only after* content verification (Step 7) is complete. Ensure styling enhances readability (e.g., optimal line length, clear visual hierarchy for long content chunks), provides distinct visual cues for sections, and improves the learning experience.
9.  **Resource Handling**: Extract/download and organize images and other media (including icons if used locally) using the specified rules and correct filenames.
10. **Technical & Accessibility Validation**: Validate HTML, CSS, links, and accessibility standards (WCAG 2.1 Level AA). Test keyboard navigation (including skip links), focus states, screen reader compatibility for all content types (including complex tables and equations). Check for responsive design issues.
11. **Finalization**: Link pages, test navigation thoroughly, review final output across different viewport sizes, and verify print styles.

## Content Chunking Strategy
1.  **Chunking based on Logical Structure and Coherence**:
    *   **Primary Goal:** Divide the content into meaningful, self-contained HTML files based on the document's inherent structure.
    *   **Break Points:** Use natural boundaries like **Chapters** or major sections starting with `<h1>` or `<h2>` headings as primary break points.
    *   **File Sizing (Guideline):** Aim for files that are neither excessively long (max ~2000 lines of HTML, or ~15-20 PDF pages) nor trivially short.
    *   **Avoid overly long files:** If a single chapter or major section seems exceptionally long, consider splitting it at logical sub-section (`<h3>`) breaks. Document the rationale for splitting.
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
    *   **Mandatory:** Implement a "Skip to main content" link at the beginning of each page for accessibility.
    *   **Mandatory:** Each chunk MUST include functional navigation links (`<a>` tags) to the `previous-chunk.html` and `next-chunk.html`. Disable appropriately for first/last chunks (use `aria-disabled="true"` and CSS class).
    *   **Mandatory:** Each chunk MUST include a link back to the main `index.html` (Table of Contents).
    *   **Recommended:** Include breadcrumb navigation showing the user's current location within the document structure (e.g., `Home > Lecture 3 > Section 2`).
    *   **Mandatory:** Include a progress indicator (e.g., "Lecture 3 of 7") with accessible markup (see template).

## Content Preservation Rules
1.  **CRITICAL: ALL original pedagogical content must be preserved EXACTLY AS-IS from the source PDF (after correcting OCR errors).** This includes text, formulas, data in tables, code snippets, and the *intent* of figures and their captions.
2.  **NO content creation, modification, summarization, or rephrasing is allowed.**
3.  **DO NOT "modernize" or "enhance" the *meaning* or *wording* of the content.** Do not fix typos, grammatical errors, or factual inaccuracies present in the original source PDF. Preserve them verbatim.
4.  **The ONLY allowed changes are:**
    *   Adding HTML structural and semantic tags (`<p>`, `<h1>`, `<ul>`, **`<ol>` (specifically for numbered lists)**, `<li>`, `<table>`, `<code>`, `<section>`, `<article>`, `<aside>`, `<dfn>`, `<figure>`, `<figcaption>`, etc.) **to reflect the logical structure captured by MMD and to enhance the readability of the linear content flow.** This explicitly includes converting identified list-like patterns (`- `, '• ', or **numbered prefixes like "1.", "a)", "i."**) from the MMD into semantic HTML list elements, while preserving the *text content* within each item verbatim (after removing the original prefix character).
    *   **Handling nested lists: Preserve the nesting level by creating child `<ul>` or `<ol>` lists directly within the parent list's `<li>` element.**
    *   Applying CSS styling for visual presentation as defined in the **CSS Styling Instructions** section.
    *   Converting formatting (bold, italic) to HTML elements (`<strong>`, `<em>`).
    *   Adding accessibility attributes (e.g., `alt` text, ARIA roles, `scope` attributes for table headers, `id`/`headers` for complex tables, `aria-label` or `aria-labelledby` for equations).
    *   Correcting OCR errors identified during the MMD review phase (Workflow Step 3) and **cleaning spurious characters**.
    *   Applying `<strong>` tags to the verbatim text within "Key Points" list items.
5.  Each section must be visually compared line-by-line against the **original PDF source** before applying visual enhancements (this is part of the two-pass verification).

## Zero-Summarization Directive
### Absolute Content Preservation Mandate
**Every word, sentence, paragraph, list item (after conversion from pattern), table cell, and code line from the source document MUST appear VERBATIM in the HTML output (after correcting OCR errors and cleaning).**

*   **NO** summarization, condensation, or paraphrasing is permitted. EVER.
*   Text must be copied letter-for-letter, exactly as it appears in the original PDF (after correcting obvious OCR errors and cleaning during MMD review).
*   **NEVER** create new textual content, new lists, or new summaries *that replace or alter* the original content. Converting list *patterns* to semantic lists (`<ul>` or `<ol>`) is permitted as it represents the original *intent* of the content structure, but the text within the items is verbatim with prefixes removed.
*   **NEVER** omit any content, no matter how minor it seems.
*   Preserve all lists (after pattern conversion) with exactly the same number of items and identical text content, and correct nesting.
*   Maintain all original punctuation, spacing cues (like paragraph breaks), and formatting emphasis (bold/italic) from the original PDF.

### Common Violation Patterns to Avoid
*   **FALSE:** Creating bullet points or summaries that *replace* original paragraphs (unless the original source used a list pattern that was previously represented as a paragraph).
*   **FALSE:** Reorganizing content into a different sequence than the original linear flow provided by MMD.
*   **FALSE:** Rewriting sentences or paragraphs to be "clearer" or more "concise".
*   **FALSE:** Adding explanatory text *within* the original content flow. (Use callouts/asides for annotations if necessary, clearly distinct from original text).
*   **FALSE:** Changing the language, terminology, or fixing typos/grammar found in the source PDF.
*   **FALSE:** Generating new section titles or headings not present in the original PDF structure.
*   **FALSE:** Converting list *patterns* but altering the verbatim text content of any list item, or failing to remove the original prefix from the text content of the list item.
*   **FALSE:** Not converting numbered list patterns (e.g., "1.", "a.", "i.") to `<ol>` and instead using `<ul>` with custom CSS numbering (which is not semantically correct for ordered lists and less accessible).
*   **FALSE:** Incorrectly nesting lists (e.g., placing a nested list outside its parent `<li>`, or failing to close parent `<li>` before starting a sibling `<li>`).

### Permitted Visual and Learning Enhancements (Apply *after* 100% Content Verification)
Only apply these *after* verifying verbatim content preservation:
*   **ALLOWED:** Enhanced visual presentation using CSS (borders, backgrounds, spacing, typography) based on the **CSS Styling Instructions** section below, specifically applied to elements like headings, paragraphs, lists (including converting patterns), tables, figures, and callouts.
*   **ALLOWED:** Applying structural patterns like cards (`<div class="content-card"></div>`) or callouts (`<aside>`) to *existing* content blocks based on the **HTML Layout and Structure** section below, specifically to enhance the readability of the linear content flow and highlight distinct content types (e.g., notes, warnings, definitions, key points).
*   **ALLOWED:** Adding "Key Points" or "Summary" sections (`<aside class="key-points-section">`) at the end of a topic *IF AND ONLY IF* they contain **only verbatim text snippets** extracted directly from that topic's original content. The text within these list items **MUST** be wrapped in `<strong>` tags.
*   **ALLOWED:** Using icons (via CSS classes from a chosen icon system), color-coding, or visual indicators to highlight important terms or sections *without changing the text*, following the defined CSS styles.
*   **ALLOWED:** Adding interactive elements (like collapsible sections for FAQs if present, or tooltips for definitions - using `<dfn>`) that reveal or organize the *original* content in a non-linear way, provided the full original content remains accessible and keyboard-operable.
*   **ALLOWED:** Improving scannability through visual hierarchy (headings, spacing, distinct content blocks, section distinctions like alternating backgrounds) defined in the CSS.
*   **ALLOWED:** Applying optimal line length (`max-width`) to text blocks for improved readability.

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

### Step 2: MMD Review and Correction (CRITICAL - First Pass Verification)
*   **Manually open and review the `.mmd` file.**
*   **Compare carefully against the original PDF, line by line.**
*   **Correct OCR Errors:** Fix any garbled text, misidentified characters, or formatting issues introduced during OCR. Pay close attention to:
    *   Mathematical equations (check symbols, variables, structure).
    *   Tables (check cell content, alignment markers, complex structures).
    *   Code snippets (check indentation, syntax).
    *   Lists and complex layouts as represented *in the MMD*.
*   **Clean Artifacts & Spurious Characters:** Identify and **remove spurious characters or inconsistent prefixes.** Examples include:
    *   Inconsistent bullet characters at line starts: 't ', '• ' (with extra space), ' - ' (with extra spaces), '*' when not part of a consistent list.
    *   Numbering artifacts: "1." appearing in non-list contexts, inconsistent numbering sequences (e.g., "1. Item A", "3. Item B" when it should be "2."), random letters or roman numerals if not part of an intended list sequence (e.g., "a.", "b.", "i.", "ii." appearing sporadically).
    *   OCR noise: Unintelligible symbols like '�', vertical bars like '|' or '¦' that are not part of tables, repeated periods '..', random punctuation.
    *   Page break markers or headers/footers captured as text: "- Page 12 -", ">>>>", "<<<<", "Chapter 3", running titles.
    *   **These prefixes and artifacts must be removed before converting to HTML list items or paragraphs.** The goal is to isolate the pure, verbatim text of each content element.
*   **Identify List Patterns:** Note consistent prefixes ('-', '*', '•', **numbers followed by punctuation/space like "1.", "a)", "(i).", "I."**) or other formatting that clearly indicates an intended list structure in the original PDF.
    *   **Correct List Patterns Example:**
        ```
        - Item one
        - Item two
          * Sub-item A  (MMD might use different indent/bullet for nesting)
          * Sub-item B
        1. First step
        2. Second step
           a) Sub-step 1
           b) Sub-step 2
        ```
    *   **Problematic Cases to Correct in MMD (before HTML conversion):**
        ```
        t Item one             (Correct to: - Item one)
        1. Item one
        3. Item two             (Correct numbering if OCR error, or note if PDF is inconsistent)
        •Item three            (Correct to: • Item three, or preferred consistent bullet like - Item three)
        -Page 12-              (Remove entirely)
        i. Stray roman numeral (Remove if not part of a list)
        ```
    *   **Meticulously note nested list patterns (indicated by indentation and/or different prefix types under a parent item).** This information is crucial for semantic conversion to `<ul>` or `<ol>`.
*   **Identify Figure-Caption Relationships:** Note images and any associated text that clearly functions as a caption.
*   **Do NOT change the original wording or fix source document errors.** Only correct what the OCR process broke.
*   **Mark this step as complete** in the conversion log for each document/chunk. **This MMD review is the first pass of content verification.**

### Step 3: Handling MMD Output (Post MMD Review)
*   Use the **corrected** and **cleaned** MMD file (from MMD Review Step 2) as the source for HTML conversion.
*   **Images:** Identify all `![](image_url)` links. These URLs will be used later to download images. The corresponding local filename structure is defined in the "Image Handling" section.
*   **Equations:** MMD preserves LaTeX (`$...$` or `$$...$$`). This works directly with MathJax in the HTML template. Verify complex equations carefully during MMD review. MathJax configuration should aim for accessible MathML output.

## HTML Implementation Process
### Structure Mirroring & Semantics
*   HTML document structure must accurately mirror the original document's logical hierarchy (headings, paragraphs, lists, etc.). Use the templates provided in the **HTML Layout and Structure** section.
*   Use appropriate semantic HTML5 elements: `<article>`, `<section>`, `<nav>`, `<header>`, `<footer>`, `<aside>`, `<table>`, `<ul>`, `<ol>`, `<li>`, `<code>`, `<pre>`, `<dfn>`, `<figure>`, `<figcaption>`.
*   Every heading must use the appropriate `<h1>`-`<h6>` tag matching the original hierarchy (e.g., PDF Chapter Title -> `<h1>`, Section Heading -> `<h2>`). Ensure headings are not skipped (e.g., `<h1>` followed by `<h3>` is incorrect; use `<h2>` first).
*   Maintain exact paragraph breaks (`<p>` tags) as in the original (after cleaning).
*   **Convert list patterns:**
    *   Identify the list patterns noted in MMD Review (Step 2).
    *   Patterns like `-`, `*`, `•` become `<ul>`.
    *   **Numbered patterns like `1.`, `a)`, `(i)` become `<ol>`.**
    *   Each item in the original pattern becomes an `<li>` element containing the **verbatim text** from the source, *after removing the original prefix character (e.g., '-', '•', '1.')*. Use CSS for list styling (e.g., bullets, numbers, custom markers).
    *   **Nested lists must be correctly structured: a child `<ul>` or `<ol>` must be placed *inside* the `<li>` of its parent list item.** Example:
        ```html
        <!-- Numbered list conversion -->
        <ol class="enhanced-list">
          <li>Verbatim text of first item</li>
          <li>Verbatim text of second item
            <ol class="nested-list" type="a"> <!-- Assuming PDF used 'a', 'b' for this level -->
              <li>Nested item a</li>
              <li>Nested item b</li>
            </ol>
          </li>
        </ol>

        <!-- Bulleted list conversion -->
        <ul class="enhanced-list">
          <li>First bullet point</li>
          <li>Second bullet point
            <ul class="nested-list">
              <li>Nested bullet</li>
            </ul>
          </li>
        </ul>
        ```
*   **Readability:** Paragraphs and list items within main content areas (`.content-card`) should have a `max-width` (e.g., `70ch-75ch` defined in CSS) applied via their parent or directly for optimal line length and readability.
*   **Importantly:** Content that appeared visually side-by-side or in columns in the PDF but is presented linearly in the MMD (e.g., List A followed by List B) MUST be kept in that linear, stacked ("top and bottom") format in the HTML. Do not use CSS Flexbox or Grid to recreate complex multi-column PDF layouts for this type of content grouping.
*   Use `<figure>` and `<figcaption>` for images or tables that have associated captions in the source. The `figcaption` should contain the verbatim caption text.

### Content Preservation Implementation (Second Pass Verification)
*   Copy-paste all text **verbatim** from the **corrected and cleaned MMD source** (MMD Review Step 2).
*   Perform a **line-by-line visual comparison** of the generated HTML against the **original PDF source** for 100% accuracy *before* applying significant visual enhancements. **This is the crucial second pass of content verification, ensuring nothing was lost or altered during HTML structuring.**
*   **For lists:**
    *   Ensure that every item in a list (both unordered `<ul>` and ordered `<ol>`) has the exact text from the source, with the original prefix character (e.g., '-', '•', '1.') completely removed from the `<li>` content.
    *   For nested lists, ensure the hierarchy is correctly represented in the HTML (e.g., `<ol><li>Parent 1<ul><li>Child A</li></ul></li></ol>`).
    *   Confirm numbering sequence is correct for ordered lists (browser default or `type` attribute).
*   Maintain all original formatting emphasis (bold/italic) using `<strong>` and `<em>`.
*   Preserve all tables (`<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`) and code blocks (`<pre><code>`) exactly as written. Ensure table headers have `scope="col"` or `scope="row"` attributes. For complex tables, refer to accessibility guidelines.
*   **NEVER omit, condense, or rewrite any original content.**
*   **Key Points Text:** For text used in "Key Points" lists, the *verbatim* text from the source must be wrapped in `<strong>` tags (e.g., `<li><p><strong>[Verbatim text]</strong></p></li>`).
*   Enclose major content sections (corresponding to `<h2>` or significant logical blocks) within unique HTML comment markers (`<!-- START: section-name -->` and `<!-- END: section-name -->`) to facilitate targeted updates using `apply_diff`. Ensure the section within the markers has a matching `id` attribute (e.g., `<section id="section-name">`).

### Visual Enhancement for Learning Effectiveness (Apply *after* 100% Content Verification)
Only after verifying verbatim content preservation, apply further visual improvements using the **CSS Styling Instructions** defined later in this document:
1.  **Reference CSS Styling Instructions**: Apply classes defined in the CSS section for typography, spacing, colors, components, etc.
2.  **Apply Standard Visual Enhancements**:
    *   Apply CSS classes for typography, spacing, and color to ensure a clear visual hierarchy.
    *   Use card layouts (`<div class="content-card">...</div>`) for distinct content blocks to improve visual separation and scanability.
    *   **Section Distinction:** Apply subtle visual distinctions between major content sections (`<section class="content-block">`), such as alternating background colors for the `.content-block` itself (e.g., every even section using `var(--section-bg-even)` with appropriate padding) or top borders, to improve scannability of long content chunks and create visual rhythm.
    *   Enhance list styling (`<ul class="enhanced-list">`, `<ol class="enhanced-list">`) beyond basic browser defaults to improve readability of lists converted from patterns. This includes custom markers/icons via CSS, and clear differentiation for nested list styling.
    *   Implement callout boxes (`<aside class="callout note" role="note">...</aside>` or `<aside class="callout warning" role="alert">...</aside>`) for supplementary information or warnings, clearly visually distinct from the main content flow, using appropriate ARIA roles.
    *   Use definition tags (`<dfn>`) for key terms, optionally with interactive elements (like tooltips via JS if simple) or styling to highlight them.
    *   Add visual dividers (`<hr class="section-divider">`) where logically appropriate for separation, styled subtly.
    *   Ensure code blocks have language classes (`<code class="language-python">`) for syntax highlighting if applicable.
    *   Implement responsive table designs (`<div class="table-container">` for overflow).
    *   **Iconography:** Use a consistent icon system (e.g., SVG files from `assets/icons/` or a chosen font library like Font Awesome, implemented via CSS classes) for navigation buttons, section headings, callouts, and key points for better visual cues and a professional look.
    *   Ensure responsiveness across defined breakpoints (e.g., 768px, 480px).
    *   Consider a basic print stylesheet (`print.css`) for user convenience.

### Accessibility Implementation (Target: WCAG 2.1 Level AA)
*   **Skip Links:** Implement a "Skip to main content" link at the top of each page, visually hidden until focused, targeting the main content wrapper (`<main id="main-content">`).
*   **Mandatory:** All images (`<img>`) MUST have descriptive `alt` text that conveys the image's purpose and content in the learning context. Decorative images (if any, which should be rare in educational content) should have `alt=""`. Alt text should not be redundant with a `figcaption` but complementary.
*   Use semantic HTML correctly: headings in logical order (`<h1>` through `<h6>` without skipping levels), lists for list-like content (`<ul>`, `<ol>`), `<figure>`/`<figcaption>` for images/tables with captions.
*   **Color Contrast:** Ensure sufficient color contrast for text and meaningful UI components (minimum 4.5:1 for normal text, 3:1 for large text/graphics), as per WCAG 1.4.3 and 1.4.11. Use tools to verify.
*   **ARIA Landmarks:** Use `<header role="banner">`, `<nav role="navigation">`, `<main role="main">`, `<aside role="complementary">` (if applicable for sidebars, or `role="note"`/`role="alert"` for callouts), `<footer role="contentinfo">` appropriately to define regions of the page.
*   **Keyboard Navigation:** All interactive elements (links, buttons, form controls if any) MUST be focusable and operable using only the keyboard. Focus order must be logical and intuitive.
*   **Visible Focus Indicators:** Ensure clear and visible focus indicators for all focusable elements, meeting WCAG 2.4.7. The default browser focus indicator might be insufficient; enhance it with CSS (e.g., thicker outline, box-shadow).
*   **ARIA Attributes:** Use ARIA roles (`role="navigation"`, `role="main"`, `role="region"`, `role="note"`, `role="alert"`, `role="progressbar"`, etc.) and attributes (`aria-labelledby`, `aria-describedby`, `aria-current`, `aria-disabled`, `aria-valuenow`, etc.) where appropriate to enhance semantic meaning and accessibility, especially for custom components or dynamic content.
*   **Linear Content Flow:** Maintaining a linear content flow (as provided by MMD and enhanced with semantic lists) is generally more accessible than complex multi-column layouts.
*   **Table Accessibility:**
    *   Simple tables: Use `<caption>`, `<thead>`, `<tbody>`, `<th>` with `scope="col"` or `scope="row"`.
    *   **Complex Tables:** For tables with multiple levels of row or column headers, or spanned cells that create ambiguity, use `id` attributes on header cells (`<th>`) and `headers` attributes on data cells (`<td>`) to explicitly associate them. The `<caption>` element (or an element referenced by `aria-labelledby` on the table) should adequately describe the table's purpose. An additional summary via `aria-describedby` can be used if the structure is very complex and needs further explanation for screen reader users.
        ```html
        <table aria-describedby="table1-desc"> <!-- Or aria-labelledby if caption is also the label -->
          <caption id="table1-caption">Summary of cell structures and their functions</caption>
          <thead id="table1-desc" class="visually-hidden">This table lists organelles in the first column and their primary functions in the second column. Row headers might define categories if applicable.</thead>
          <thead>
            <tr>
              <th id="col1" scope="col">Organelle</th>
              <th id="col2" scope="col">Function</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td headers="col1">Mitochondria</td>
              <td headers="col2">Energy production</td>
            </tr>
            <!-- ... more rows ... -->
          </tbody>
        </table>
        ```
*   **Mathematical Equations:**
    *   Ensure MathJax is configured to output accessible MathML (e.g., `assistiveMml: true` in settings).
    *   Provide an `aria-label` or `aria-labelledby` on the container `div` of each block equation, briefly describing the equation's purpose or content (e.g., "Pythagorean theorem", "Quadratic formula"). For inline equations, if they are simple and read well with surrounding text, this might be less critical, but consider for complex inline math.
        ```html
        <div class="equation" role="math" aria-label="Pythagorean theorem relating sides of a right triangle">
          $$ a^2 + b^2 = c^2 $$
        </div>
        ```
    *   For very complex equations that MathML might not perfectly convey, a supplementary text description (visually hidden or via `aria-describedby`) can be beneficial.
*   **Forms (if any):** Ensure all form inputs have associated labels, and error messages are programmatically associated.
*   **Media Alternatives:** If audio/video content is present, provide captions and/or transcripts.
*   **Print Styles:** Include a basic print stylesheet (`print.css`) to optimize content for printing.

## Directory Structure and File Organization

```
kmtc-histology/
index.html                               # Table of Contents
topics/
    histology-introduction.html          # Lecture 1
    # ... more topic files
assets/
    images/
        # Example: 2025_05_28_89850bb57a6655b01eb6g-08-1.jpg
    icons/                               # For SVG icons
        toc.svg, arrow-left.svg, etc.
styles/
    main.css                             # Main stylesheet
    print.css                            # Stylesheet for print media
js/
    navigation.js                        # Navigation helpers, skip link
```

## Image Handling
(Same as v10, ensure alt text is descriptive and complementary to figcaption if present)

## HTML Layout and Structure
(Same as v10, with MathJax config update in template)

### Topic Page Template
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Unit/Chunk Title] - [Course Name]</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../styles/main.css">
    <link rel="stylesheet" href="../styles/print.css" media="print">
    <script>
    MathJax = {
        tex: {
            inlineMath: [['$', '$'], ['\\(', '\\)']],
            displayMath: [['$$', '$$'], ['\\[', '\\]']],
            processEscapes: true,
            processEnvironments: true,
            tags: 'ams'
        },
        options: {
            menuOptions: {
                settings: {
                    assistiveMml: true, // Enable assistive MathML output
                    collapsible: false,
                    explorer: true // Enable MathJax contextual menu with accessibility features
                }
            }
        },
        svg: { fontCache: 'global' },
        chtml: {
            mtextInheritFont: true // Allows mtext (text within math) to inherit surrounding font styles
        }
    };
    </script>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
</head>
<body>
    <a href="#main-content" class="skip-link">Skip to main content</a>

    <header class="page-header" role="banner">
        <!-- Optional Global Header -->
    </header>

    <div class="container">
        <article class="document-body" role="document">
            <nav class="document-nav top-nav" role="navigation" aria-label="Page sections navigation">
                <!-- Navigation Links with Icons and ARIA attributes -->
            </nav>

            <main id="main-content" class="section-content-wrapper" role="main">
                <header class="section-header-main">
                    <h1 class="section-title">[EXACT Unit/Chunk Title from PDF]</h1>
                    <div class="title-underline"></div>
                </header>

                <!-- START: section-id-1 -->
                <section id="section-id-1" class="content-block" aria-labelledby="section-heading-1">
                    <h2 id="section-heading-1" class="section-heading">
                         <span class="icon icon-section" aria-hidden="true"></span>
                        <span class="heading-text">[Exact Section Title from PDF]</span>
                    </h2>
                    <div class="content-card">
                        <!-- Content: paragraphs, lists, figures, tables, equations etc. -->
                    </div>
                </section>
                <!-- END: section-id-1 -->
                
                <!-- More sections with alternating backgrounds if applied -->

            </main>

            <nav class="document-nav bottom-nav" role="navigation" aria-label="Page sections navigation">
                <!-- Navigation Links -->
            </nav>
        </article>
    </div>

    <footer class="page-footer" role="contentinfo">
        <p>&copy; [Year] [Institution Name]. All rights reserved. | <a href="#top" id="back-to-top-link">Back to top</a></p>
    </footer>
    <script src="../js/navigation.js"></script>
</body>
</html>
```

### Common Content Element Examples
(Updated for Accessibility Enhancements: Complex Tables and Equations as specified in the Accessibility section)

## CSS Styling Instructions
```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #34495e;
    --accent-color: #3498db;
    --accent-hover-color: #2980b9;
    --background-color: #f4f6f8;
    --card-background-color: #ffffff;
    --section-bg-even: rgba(240, 240, 245, 0.5); /* Subtle alternating background for sections */
    --text-color: #212529;
    --muted-text-color: #6c757d;
    --border-color: #dee2e6;
    --focus-ring-color: #007bff; /* More prominent focus */
    --font-family: 'Inter', system-ui, sans-serif;
    --line-length-readable: 75ch;
    --spacing-unit: 1rem;
    --border-radius-medium: 8px;
    /* ... other variables ... */
}

/* ... Basic resets, body, skip link, container styles ... */

.document-body {
    background-color: var(--card-background-color);
    padding: calc(var(--spacing-unit) * 1) calc(var(--spacing-unit) * 2);
    border-radius: var(--border-radius-medium);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    margin-bottom: calc(var(--spacing-unit) * 2);
}

/* Improved line spacing and paragraph margins */
p {
  line-height: 1.8; /* Increased for better readability */
  margin-bottom: 1.5rem; /* More space after paragraphs */
}
.content-card p, .content-card li {
    max-width: var(--line-length-readable);
}

/* Better section distinction */
.content-block {
    padding-top: calc(var(--spacing-unit) * 0.5); /* Minimal top/bottom padding for the block itself */
    padding-bottom: calc(var(--spacing-unit) * 0.5);
}
.content-block:nth-child(even) {
  background-color: var(--section-bg-even); /* Applied to the .content-block */
  border-left: 4px solid var(--accent-color); /* Visual cue */
  /* Padding applied to create inset effect if content-card is used inside */
  /* Or apply padding directly to .content-block and remove from .content-card if .content-card is removed from these sections */
  padding: 1.5rem; 
  margin-left: calc(var(--spacing-unit) * -2); /* Extend to edge of .document-body padding */
  margin-right: calc(var(--spacing-unit) * -2);
  border-radius: 0 var(--border-radius-medium) var(--border-radius-medium) 0;
}
.content-block:nth-child(odd) {
    /* Standard padding or slightly more if no background */
    padding-top: calc(var(--spacing-unit) * 1.5);
    padding-bottom: calc(var(--spacing-unit) * 1.5);
}
/* Remove top border/margin for the very first section block */
.section-content-wrapper > .content-block:first-child,
.section-content-wrapper > .content-block:first-of-type {
    padding-top: 0;
    border-top: none;
    margin-top:0;
}
.section-content-wrapper > .content-block:first-child:nth-child(even) {
    border-radius: var(--border-radius-medium) var(--border-radius-medium) var(--border-radius-medium) 0; /* Adjust radius for first even block */
}


/* Clearer list hierarchy */
ul.enhanced-list, ol.enhanced-list {
  padding-left: 1.8rem; /* Default indent for top-level enhanced lists */
  list-style: none; /* Ensure custom markers are used */
}
ul.enhanced-list > li, ol.enhanced-list > li {
  position: relative;
  padding-left: 0.5rem; /* Space for marker if using absolute positioning for marker */
  margin-bottom: 0.6rem;
}
ul.enhanced-list > li::before {
  content: '▪'; /* Solid square for ul */
  color: var(--accent-color);
  position: absolute;
  left: -1.2rem; /* Adjust to align with padding-left of parent ul/ol */
  top: 0.1em;
  font-size: 0.9em;
}
ol.enhanced-list > li::before {
  content: counter(elist-counter) ".";
  counter-increment: elist-counter;
  color: var(--primary-color);
  font-weight: 600;
  position: absolute;
  left: -1.8rem; /* Adjust based on number width */
  top: 0;
  min-width: 1.5rem; /* Space for numbers */
  text-align: right;
}
/* Nested Lists Styling */
ul.nested-list, ol.nested-list {
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
  padding-left: 2.2rem; /* Further indent nested lists */
  list-style: none;
}
ul.nested-list > li::before {
  content: '▫'; /* Hollow square or other distinct marker */
  left: -1.2rem; /* Adjust relative to parent's padding */
  color: var(--secondary-color);
}
ol.nested-list { counter-reset: nested-counter; }
ol.nested-list > li::before {
  content: counter(nested-counter, lower-alpha) "."; /* e.g., a., b. */
  counter-increment: nested-counter;
  left: -1.5rem; /* Adjust */
  color: var(--secondary-color);
  font-weight: normal;
}

/* Prominent Focus Indicators */
:focus-visible {
  outline: 3px solid var(--focus-ring-color) !important; /* Ensure it overrides defaults */
  outline-offset: 3px; /* More space from element */
  box-shadow: 0 0 0 6px rgba(52, 152, 219, 0.3); /* Larger, more noticeable glow */
  border-radius: var(--border-radius-small); /* Match element's border-radius if possible */
}

/* Visually Hidden Class (already defined in HTML head for equations, but good to have in main CSS too) */
.visually-hidden {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
}

/* ... Other styles from v10 (TOC, Icons, Tables, Figures, Math, Callouts, Code, Footer, Responsive, Print) ... */
/* Ensure icon paths and usage are consistent with the `assets/icons/` directory. */
```

## JavaScript (`navigation.js`)
```javascript
document.addEventListener('DOMContentLoaded', function() {
  const skipLink = document.querySelector('a.skip-link');
  const mainContent = document.getElementById('main-content');

  if (skipLink && mainContent) {
    skipLink.addEventListener('click', function(event) {
      event.preventDefault();
      // Ensure the target is focusable for programmatic focus
      if (!mainContent.hasAttribute('tabindex')) {
          mainContent.setAttribute('tabindex', '-1');
      }
      mainContent.focus();
      
      // Remove tabindex after blur to prevent it from being in tab order if it wasn't originally.
      const handleBlur = () => {
        // Only remove if it was the one we added.
        if (mainContent.getAttribute('tabindex') === '-1') {
            mainContent.removeAttribute('tabindex');
        }
        mainContent.removeEventListener('blur', handleBlur); // Clean up listener
      };
      mainContent.addEventListener('blur', handleBlur);
    });
  }

  // ARIA disabled buttons handling - prevent activation
  const disabledButtons = document.querySelectorAll('[aria-disabled="true"]');
  disabledButtons.forEach(button => {
    // Prevent click activation
    button.addEventListener('click', (e) => {
        e.preventDefault();
    });
    // Prevent keyboard activation (Enter/Space)
    button.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { // Note: 'Space' for spacebar
        e.preventDefault();
      }
    });
    // Optionally make them non-focusable if truly disabled and not just styled
    // if (button.tagName === 'A' && !button.hasAttribute('href')) {
    //    button.setAttribute('tabindex', '-1');
    // }
  });

  // Smooth scroll for internal page links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.length <= 1 || (skipLink && anchor === skipLink)) { // Avoid empty hashes or skip link's own action
            return;
        }

        let targetElement;
        try {
            targetElement = document.querySelector(href);
        } catch (err) {
            console.warn(`Smooth scroll: Invalid selector "${href}".`, err);
            return; // Exit if selector is invalid
        }
        
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({ behavior: 'smooth' });
            
            const isNativelyFocusable = ['A', 'BUTTON', 'INPUT', 'SELECT', 'TEXTAREA'].includes(targetElement.tagName.toUpperCase()) || targetElement.hasAttribute('tabindex');
            if (!isNativelyFocusable) {
                targetElement.setAttribute('tabindex', '-1');
            }
            targetElement.focus({ preventScroll: true });

            if (!isNativelyFocusable) {
                const tempBlurHandler = function() {
                    if (targetElement.getAttribute('tabindex') === '-1') { // Check before removing
                        targetElement.removeAttribute('tabindex');
                    }
                    targetElement.removeEventListener('blur', tempBlurHandler);
                };
                targetElement.addEventListener('blur', tempBlurHandler);
            }
        } else {
            console.warn(`Smooth scroll: Target element not found for selector "${href}".`);
        }
    });
  });

  // "Back to top" link smooth scroll
  const backToTopLink = document.getElementById('back-to-top-link');
  if (backToTopLink && backToTopLink.getAttribute('href') === '#top') {
    backToTopLink.addEventListener('click', function(e) {
        e.preventDefault();
        try {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            const focusTarget = document.querySelector('a.skip-link') || document.body;
             if (focusTarget) {
                 if (!focusTarget.hasAttribute('tabindex') && focusTarget.tagName === 'BODY') {
                    focusTarget.setAttribute('tabindex', '-1');
                 }
                 focusTarget.focus({ preventScroll: true });
                 if (focusTarget.tagName === 'BODY' && focusTarget.getAttribute('tabindex') === '-1') {
                    const bodyBlurHandler = () => {
                        focusTarget.removeAttribute('tabindex');
                        focusTarget.removeEventListener('blur', bodyBlurHandler);
                    };
                    focusTarget.addEventListener('blur', bodyBlurHandler);
                 }
            }
        } catch (err) {
            console.warn("Error during back-to-top scroll/focus:", err);
            window.location.hash = '#top'; // Fallback to default hash behavior
        }
    });
  }
});
```

## Progress Tracking and Verification
### Enhanced Verification Checklist
For each section/page:

*   [ ] **MMD Reviewed & Cleaned (First Pass Verification)**:
    *   [ ] OCR errors corrected (text, tables, math, code).
    *   [ ] All spurious characters removed (e.g., 't ', '• ', ' - ', '�', 'S:', page break markers).
    *   [ ] All list patterns identified (bulleted `<ul>`, numbered `<ol>`, varied numbering, nested structures).
    *   [ ] Figure-caption relationships noted.
    *   [ ] MMD content matches original PDF verbatim (after corrections).
*   [ ] **HTML Structure & Content (Second Pass Verification - HTML vs PDF before major styling)**:
    *   [ ] All text content from PDF is present verbatim in HTML.
    *   [ ] Headings (`<h1>`-`<h6>`) are semantically correct and in logical order.
    *   [ ] Paragraphs (`<p>`) correctly reflect PDF paragraph breaks.
    *   **Lists Converted Correctly:**
        *   [ ] All bulleted list patterns converted to `<ul>` elements.
        *   [ ] All numbered list patterns (e.g., "1.", "a.", "i.") converted to `<ol>` elements (use `type` attribute if specific PDF styling is critical).
        *   [ ] Nested lists correctly structured (child `<ul>`/`<ol>` within parent `<li>`).
        *   [ ] Original list prefixes (bullets, numbers) are ENTIRELY REMOVED from the text content of each `<li>`.
        *   [ ] Text content of each `<li>` is verbatim from the source PDF.
        *   [ ] Numbering sequence in `<ol>` elements is correct as rendered by the browser.
    *   [ ] Tables (`<table>`, `<thead>`, `<tbody>`, `<th>` with `scope`, `<caption>`) correctly structured and content verbatim.
    *   [ ] Figures (`<figure>`, `<figcaption>`) used for images/tables with captions; content verbatim.
    *   [ ] Code blocks (`<pre><code>`) content verbatim; language class applied if applicable.
    *   [ ] Mathematical equations rendered correctly by MathJax.
*   [ ] **Accessibility Features Implemented & Verified**:
    *   [ ] "Skip to main content" link functional and accessible.
    *   [ ] Descriptive `alt` text for all meaningful images (`alt=""` for decorative).
    *   [ ] Sufficient color contrast (WCAG AA).
    *   [ ] ARIA landmarks (`<header>`, `<nav>`, `<main>`, `<footer>`, etc.) correctly used.
    *   [ ] All interactive elements keyboard accessible and operable.
    *   [ ] **Visible focus indicators are clear, prominent, and consistent on ALL focusable elements.**
    *   [ ] ARIA attributes (`aria-disabled`, `aria-labelledby`, etc.) used correctly where needed.
    *   [ ] **Complex Tables:** `id`/`headers` attributes used for complex tables; `aria-describedby` for summaries if needed.
    *   [ ] **Equations:** MathJax configured for accessible MathML; `aria-label` or `aria-labelledby` provided for block equations.
*   [ ] **Visual Design & UX Applied & Verified (After Content Verification)**:
    *   [ ] Visual hierarchy is clear.
    *   [ ] Typography and spacing enhance readability.
    *   [ ] **Section distinction (e.g., alternating backgrounds with left border) implemented effectively.**
    *   [ ] **Optimal line length (`max-width: var(--line-length-readable)`) applied to text blocks.**
    *   [ ] **Nested list hierarchy is visually clear.**
    *   [ ] Icons are consistently used and visually clear.
    *   [ ] Page is responsive across desktop, tablet, and mobile viewports.
    *   [ ] Print styles render a clean, readable version of the content.
*   [ ] **Technical Checks**:
    *   [ ] HTML and CSS validation passes.
    *   [ ] All internal and external links are functional.
    *   [ ] JavaScript console is free of errors related to `navigation.js`.
*   [ ] **Chunking Logical**: File size and content coherence are appropriate.
*   [ ] **Overall Review**: Final read-through for any missed issues or inconsistencies.

### Verification Metrics (Example Table for Tracking)
*(To be filled out during the conversion process for each document)*
| Section / Chunk Filename      | PDF Pages | Est. Word Count | List Count (U/O/N) | Tables (S/C) | Figures | MMD Review (Date/By) | HTML Verify (Date/By) | Access. Check (Date/By) | Final Review (Date/By) | Status      | Notes                               |
|-------------------------------|-----------|-----------------|--------------------|--------------|---------|----------------------|-----------------------|-------------------------|------------------------|-------------|-------------------------------------|
| `histology-introduction.html` | 1-5       | ~1500           | 2/1/1 (U/O/Nested) | 0/0 (S/Cmplx)| 3       | 2023-10-26/UserA     | 2023-10-27/UserA      | 2023-10-27/UserB        | 2023-10-28/UserA       | ✅ Verified | Complex nested list on pg 4.        |
| `histology-organelles.html`   | 6-12      | ~2200           | 5/3/2              | 1/1          | 5       |                      |                       |                         |                        | ⚠️ Review   | Complex table on pg 9 needs `headers`. |
| ...                           |           |                 |                    |              |         |                      |                       |                         |                        |             |                                     |

## Final Considerations
### Balancing Fidelity and Learning Experience
*   **Absolute content preservation is non-negotiable.** Every word, number, formula, and the intent of structural elements from the original PDF must be present and verbatim in the HTML (after OCR correction). Do not fix source errors.
*   **Semantic HTML for lists (`<ul>`, `<ol>`, correctly nested) is crucial for accessibility and pedagogical clarity.** Prefixes must be removed from the text content of list items; styling is for CSS. Numbered lists MUST use `<ol>`.
*   Visual enhancements, modern UI/UX patterns (including clear section distinctions, optimal line lengths, consistent iconography), and careful typography should make the original content significantly easier to read, navigate, and understand without altering its meaning or sequence.
*   Accessibility features (WCAG 2.1 AA) must be implemented thoroughly at every stage, considering diverse user needs, especially for complex content like tables and equations.
*   Success criteria:
    *   100% verbatim content preservation from the corrected MMD.
    *   WCAG 2.1 Level AA compliance.
    *   Intuitive navigation and logical content chunking.
    *   Enhanced readability and user experience through:
        *   Proper semantic HTML structure for all elements.
        *   Clear visual hierarchy and scannability (aided by section distinctions).
        *   Optimal line length for text.
        *   Consistent and meaningful use of iconography.
    *   Responsive design functional across all major devices.
    *   Clean, readable print output.

---
END OF FILE pdf-to-html-conversion-prompt-v11.md