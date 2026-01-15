**Note:** This guide is a living document. When updating the conversion process or adding new tools/steps, **append** or **modify** the relevant sections. Do **not** overwrite the entire file unless starting completely fresh.

# PDF to HTML Conversion Guide: KNEC Past Papers

## 1. Introduction

This guide details the standardized process for converting KNEC Diploma past examination paper PDFs into accessible, well-structured HTML format. Following these steps ensures consistency across all papers, facilitating easier navigation, maintenance, and use with assistive technologies.

**Goals:**
*   Standardized HTML structure using semantic elements.
*   Consistent formatting for questions, answers, tables, figures, and code.
*   Accurate mathematical notation rendering via MathJax.
*   Functional navigation (sidebar, previous/next paper links).
*   Automated verification for quality assurance.

**Workflow Overview:**
1.  **Setup:** Prepare the environment and conversion plan.
2.  **Conversion:** Process each PDF through MMD conversion, HTML templating, content population, and linking.
3.  **Verification:** Run automated checks to validate structure, links, and formatting.
4.  **Indexing:** Update the main index page.
5.  **Review:** Perform final manual checks.

---

## 2. Initial Setup

Before starting conversions, ensure the following are in place:

1.  **Directory Structure:** The project should have the main directory containing the HTML/PDF/MMD files, and subdirectories:
    *   `images/`: For storing downloaded figures.
    *   `js/`: Containing `sidebar-navigation.js`.
    *   `examples/`: Containing this guide, verification scripts (`verify_pastpapers.py`, `setup_chromedriver.py`), dependencies (`requirements.txt`), and example HTML snippets.
2.  **Core Files:**
    *   `styles.css`: The main stylesheet (copy from `examples/` if missing).
    *   `js/sidebar-navigation.js`: Sidebar functionality script (copy from `examples/js/` if missing).
    *   `index.html`: The main index page (create if missing, update after each paper conversion - see Step 11).
3.  **Verification Tools Setup:**
    *   Install Python dependencies:
        ```bash
        # Run from the main project directory
        pip install -r examples/requirements.txt
        ```
    *   Configure ChromeDriver (if needed, usually handled automatically by Selenium Manager now):
        ```bash
        # Run from the main project directory
        python3 examples/setup_chromedriver.py
        ```
4.  **Conversion Plan (`conversion_plan.txt`):**
    *   Create this file in the main project directory if it doesn't exist.
    *   List all target PDFs.
    *   Use the template below to track progress for *each* PDF.
    *   **Crucially, update the plan after completing *every* step.**

---

## 3. Using the Conversion Plan (`conversion_plan.txt`)

The `conversion_plan.txt` file is essential for tracking progress.

*   **Structure:** Maintain sections for Target PDFs, Setup Tasks, Standard Steps template, and Conversion Status for each paper.
*   **Tracking:** Use `[ ]` (Pending), `[X]` (Completed), `[S]` (Skipped), `[N/A]` (Not Applicable) for each step. Add notes for failures or specifics.
*   **Status:** Update the overall status for each paper (`PENDING`, `IN PROGRESS`, `COMPLETED`, `FAILED`).
*   **Mandatory Answers:** Step 4b (Add Answers) *must* be marked `[X]` before a paper is considered `COMPLETED`.

### Standard Steps Template (for `conversion_plan.txt`)

```
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

**Status: [PENDING | IN PROGRESS | COMPLETED | FAILED]**
```

---

## 4. Conversion Steps (Per Paper)

Follow these steps sequentially for each PDF listed in the conversion plan.

### Step 1: PDF to MMD Conversion

Convert the source PDF to Markdown (MMD) using the Mathpix OCR tool.

*   **Command (Run from project root):**
    ```bash
    node /home/ngobiro/.local/share/Roo-Code/MCP/mathpix-ocr-server/build/index.js [input_pdf_filename].pdf > [output_mmd_filename].mmd
    ```
*   **Example:**
    ```bash
    node /home/ngobiro/.local/share/Roo-Code/MCP/mathpix-ocr-server/build/index.js 2012n.pdf > 2012n.mmd
    ```
*   **Check for Images:** Review the generated `.mmd` file for `![](image_url)` links. These need to be downloaded in Step 4.1.
*   **Update Plan:** Mark Step 1 complete in `conversion_plan.txt`.

### Step 2: Create Clean HTML Template

Create the initial HTML file (e.g., `2012n.html`) by copying the standard template file.

*   **Action:** Copy `examples/template_paper.html` to the root directory and rename it (e.g., `cp examples/template_paper.html ./2012n.html`). Alternatively, use `write_to_file` with the content from the template.
*   **Update Plan:** Mark Step 2 complete.

**(Template Content Reference - Do not copy this block directly for the file):**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Paper Name] - [Month Year] | KNEC Diploma</title> <!-- Update in Step 3 -->
    <link rel="stylesheet" href="styles.css">
    <script src="js/sidebar-navigation.js" defer></script>
    <!-- MathJax Configuration -->
    <script>
        MathJax = {
          tex: { inlineMath: [['$', '$'], ['\\(', '\\)']], displayMath: [['$$', '$$'], ['\\[', '\\]']], processEscapes: true, processEnvironments: true },
          options: { skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre'] }
        };
    </script>
    <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js" id="MathJax-script" async></script>
</head>
<body>
    <header>
        <div class="container">
            <h1>PLACEHOLDER SUBJECT</h1> <!-- Update in Step 3 -->
            <h2>PLACEHOLDER PAPER</h2> <!-- Update in Step 3 -->
            <div class="exam-details">
                <p>Paper Code: PLACEHOLDER</p> <!-- Update in Step 3 -->
                <p>Duration: PLACEHOLDER</p> <!-- Update in Step 3 -->
                <p>Module: PLACEHOLDER</p> <!-- Update in Step 3 -->
            </div>
        </div>
    </header>

    <main class="container">
        <div class="main-content">
            <!-- Sidebar (Step 5) -->
            <div class="sidebar">
                 <!-- Placeholder: Content added in Step 5 -->
            </div>
            <div class="content-wrapper">
                <!-- Top Navigation (Step 6) -->
                <div class="paper-navigation top" id="nav-top">
                     <!-- Placeholder: Content added in Step 6 -->
                </div>
                <!-- Main Content (Step 4 & 4b) -->
                <section class="paper-intro">
                     <!-- Placeholder: Content added in Step 4 -->
                </section>
                <section class="paper-content">
                     <!-- Placeholder: Content added in Step 4 -->
                </section>
                <!-- Bottom Navigation (Step 6) -->
                <div class="paper-navigation bottom" id="nav-bottom">
                     <!-- Placeholder: Content added in Step 6 -->
                </div>
            </div>
        </div>
    </main>

    <footer>
        <div class="container">
            <p>&copy; 2025 Subject Past Papers Collection | Kenya National Examinations Council</p>
        </div>
    </footer>
</body>
</html>
```
3.  **Generate HTML Content:**
    *   Use the basic HTML structure (similar to paper templates but without sidebar JS).
    *   Set the `<title>` appropriately (e.g., "KNEC Diploma Past Papers | Subject Name").
    *   Update the `<header>` content.
    *   Inside `<main class="container">`:
        *   For each year present in the sorted list:
            *   Create a `<section class="year-section" id="year-YYYY">`.
            *   Add `<h2>YYYY</h2>`.
            *   Create a `<div class="paper-grid">`.
            *   For each paper within that year:
                *   Create a `<div class="paper-card">`.
                *   Add `<h3><a href="[paper_filename].html">[Month Year]</a></h3>`.
                *   Add `<p class="meta">Paper Code: [Code]</p>` (Extract from paper's header if possible, otherwise use placeholder).
                *   Add `<div class="actions"><a href="[paper_filename].html" class="btn">View Paper</a></div>`. (Optionally add PDF link if PDF exists).
4.  **Write `index.html`:** Use `write_to_file` with the generated content. Overwrite the existing `index.html` if it exists.
5.  **Add to Conversion Plan:** Ensure "Update/Create index.html" is listed as a final step in the `conversion_plan.txt` template or as a separate task.

Start with a standardized template:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Paper Name] - [Month Year] | KNEC Diploma</title>
    <link rel="stylesheet" href="styles.css">
    <script src="js/sidebar-navigation.js" defer></script>
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
            skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre']
          }
        };
    </script>
    <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js" id="MathJax-script" async></script>
</head>
<body>
    <header>
        <div class="container">
            <h1>PLACEHOLDER SUBJECT</h1>
            <h2>PLACEHOLDER PAPER</h2>
            <div class="exam-details">
                <p>Paper Code: PLACEHOLDER</p>
                <p>Duration: PLACEHOLDER</p>
                <p>Module: PLACEHOLDER</p>
            </div>
        </div>
    </header>

    <div class="container main-content">
        <!-- Sidebar will be inserted here later -->
        <main>
            <!-- Paper navigation (top) will be inserted here later -->
            <!-- Paper intro section will be inserted here later -->
            <!-- Paper content (questions/answers) will be inserted here later -->
            <!-- Paper navigation (bottom) will be inserted here later -->
        </main>
    </div>

    <footer>
        <div class="container">
            <p>&copy; 2025 Subject Past Papers Collection | Kenya National Examinations Council</p>
        </div>
    </footer>
</body>
</html>
```

### Question Structure
Each question should follow this consistent structure:
```html
<!-- Question X -->
<div class="question" id="question-X">
    <h3>Question X (20 marks)</h3>
    <div class="question-content">
        <!-- Question parts go here -->
        <p>(a) First part of the question (X marks)</p>
        <p>(b) Second part... etc</p>
    </div>
    <div class="answer-section">
        <h4>Answer</h4>
        <div class="answer-content">
            <!-- Answer content or placeholder -->
            <p><strong>(a) Part Title:</strong></p>
            <!-- Answer details -->
        </div>
    </div>
</div>
```

### Important Guidelines

1. **Consistent Structure**
   - Always include both question-content and answer-section divs
   - Use consistent indentation (4 spaces or 1 tab)
   - Keep proper div nesting
   - Include answer section placeholders even if empty

2. **Mathematical Content**
   - Use `$...$` for inline math
   - Use `$$...$$` for display math
   - Tables with math content should use `$` in cells

3. **Tables Structure**
```html
<table class="data-table">
    <caption>Table X</caption>
    <thead>
        <tr><th>Column 1</th><th>Column 2</th></tr>
    </thead>
    <tbody>
        <tr><td>Data 1</td><td>Data 2</td></tr>
    </tbody>
</table>
```

4. **Diagrams**
```html
<pre class="diagram-code">
    [ASCII art diagram here]
</pre>
<p class="diagram-caption">Figure X</p>
```

5. **Lists**
```html
<ol>
    <li>Ordered item</li>
</ol>

<ul>
    <li>Unordered item</li>
</ul>
```

### Common Issues to Avoid

1. **Extra Closing Tags**
   - Don't add extra `</div>` tags
   - Maintain proper nesting level
   - Check closing tags match opening tags

2. **Spacing and Layout**
   - Use empty lines between major sections
   - Keep consistent indentation
   - Don't mix tabs and spaces

3. **Content Structure**
   - Keep question parts organized with clear labels
   - Use appropriate heading levels
   - Maintain consistent marking scheme notation

### Examples

See these example files for reference:
- example_question.html - Basic question structure
- example_math.html - Mathematical content formatting
- example_table.html - Table formatting
- example_diagram.html - Diagram formatting

Note: Always validate the HTML structure before committing changes to ensure proper nesting and avoid layout issues.

## Step 3: Update the Header

Using the clean template created in Step 2:

1.  **Read MMD:** Extract paper details (Year, Month, Subject, Paper Code, Duration, Module) from the MMD file.
2.  **Use `apply_diff`:** Target the `<title>`, `<h1>`, `<h2>`, and the `<p>` tags within `<div class="exam-details">`.
3.  **Replace Placeholders:** Update the placeholder text with the correct information.
4.  **Update Plan:** Mark Step 3 as complete in `conversion_plan.txt`.

## Step 4: Populate Main Content (Instructions & Questions ONLY)

This step focuses on adding the paper's structure and question content. Answers will be added in Step 4b.

1.  **Read MMD:** Extract the main instructions and all question content (excluding answers).
2.  **Prepare Content Block:** Construct the HTML content that goes inside the `<main>...</main>` tags. This includes:
    *   **Top Navigation:** `<div class="paper-navigation top" id="nav-top"><a href="#" class="btn">Previous Paper</a><a href="index.html" class="btn">Home</a><a href="#" class="btn">Next Paper</a></div>` (Use placeholder `#` href values for now).
    *   **Instructions Section:** `<section class="paper-intro">...</section>` populated from OCR.
    *   **Questions Section:** `<section class="paper-content">...</section>` containing *all* `<div class="question">` blocks.
        *   For each question:
            *   Include `<h3>Question X (marks)</h3>`.
            *   Include `<div class="question-content">` with formatted question text from OCR.
            *   Include `<div class="answer-section">` with `<h4>Answer</h4>` and an **empty** `<div class="answer-content">` containing only the placeholder: `<!-- Answer content will be added in Step 4b -->`. **Do NOT add answers here.**
    *   **Bottom Navigation:** `<div class="paper-navigation bottom" id="nav-bottom"><a href="#" class="btn">Previous Paper</a><a href="index.html" class="btn">Home</a><a href="#" class="btn">Next Paper</a></div>` (Use placeholder `#` href values for now).
3.  **Apply Content:**
    *   **Option A (Recommended): `apply_diff`**
        *   Target the empty `<main>` tags (read file first for line numbers).
        *   `SEARCH`: `<main>\n            </main>` (Adjust whitespace as needed).
        *   `REPLACE`: `<main>\n[Your prepared content block here]\n            </main>`
    *   **Option B: `write_to_file`**
        *   Combine the template structure (after Step 3) with your prepared content block inside `<main>`.
        *   Provide the *entire* HTML content.
4.  **Update Plan:** Mark Step 4 as complete in `conversion_plan.txt`.

## Step 4b: Add Answers (Mandatory)

**This step MUST be completed before proceeding to Step 5 or marking the paper as complete.**

1.  **Gather Answers:** Obtain the correct answers for each question part. This might involve manual entry, using an AI tool, or referencing a marking scheme.
2.  **Format Answers:** Structure the answers clearly within HTML (paragraphs, lists, tables, code blocks, MathJax for equations, etc.). Include the disclaimer: `<p><em>Disclaimer: Answers are AI-generated and may contain errors. Verify independently.</em></p>` at the start of each answer block.
3.  **Apply Answers using `apply_diff`:**
    *   For *each* question's answer section:
        *   Read the HTML file to get the correct line numbers for the target `<div class="answer-content">`.
        *   `SEARCH`: The placeholder comment `<!-- Answer content will be added in Step 4b -->` within its `<div class="answer-content">`.
        *   `REPLACE`: The formatted answer content (including the disclaimer).
        *   Example `apply_diff`:
          ```xml
          <apply_diff>
          <path>your_paper.html</path>
          <diff>
          <<<<<<< SEARCH
                          <div class="answer-content">
                              <!-- Answer content will be added in Step 4b -->
                          </div>
          =======
                          <div class="answer-content">
                              <p><em>Disclaimer: Answers are AI-generated and may contain errors. Verify independently.</em></p>
                              <p><strong>(a) Part Title:</strong> Detailed answer text here...</p>
                              <p><strong>(b) Part Title:</strong> More answer text...</p>
                              <!-- Add formatted lists, tables, math, etc. as needed -->
                          </div>
          >>>>>>> REPLACE
          </diff>
          <start_line>XX</start_line> <!-- Line number for <div class="answer-content"> -->
          <end_line>YY</end_line>   <!-- Line number for closing </div> -->
          </apply_diff>
          ```
4.  **Update Plan:** Mark Step 4b as complete (`[X]`) in `conversion_plan.txt`.

## Step 5: Embed the Sidebar

1.  **Prepare Sidebar Content:** Read the standard sidebar HTML structure (e.g., from `index.html` if it exists and is up-to-date, or generate dynamically based on existing files).
2.  **Verify Sidebar Links:** Before inserting, **check that every `href` value within the sidebar HTML corresponds to an existing `.html` file** in the target directory (use `list_files`). Remove or comment out links to non-existent files.
3.  **Locate Insertion Point:** In the paper's HTML file, find the line containing `<div class="container main-content">`.
4.  **Insert Verified Sidebar using `apply_diff`:**
    *   Read the file to get correct line numbers.
    *   `SEARCH`: The line `<div class="container main-content">` and the following `<main>` line.
    *   `REPLACE`: The `<div class="container main-content">` line, followed by the *entire verified sidebar HTML*, followed by the `<main>` line.
5.  **Update Plan:** Mark Step 5 as complete in `conversion_plan.txt`.

## Step 6: Update Top and Bottom Navigation Links

1.  **Determine Links:** Identify the correct filenames for the "Previous Paper" and "Next Paper" based on chronological order of *existing* HTML files (use `list_files`). If a neighbor doesn't exist, find the next available one or use `href="#"` with a `disabled` class. Include `index.html` for "Home".
2.  **Read File:** Use `read_file` on the *current* state of the HTML file to get accurate line numbers.
3.  **Update Top Navigation using `apply_diff`:**
    *   Target the `<div class="paper-navigation top" id="nav-top">` block.
    *   Replace the placeholder `<a>` tags with three `<a>` tags: "Previous Paper ([Month Year])", "Home", "Next Paper ([Month Year])", using correct `href`s and `disabled` class where needed.
4.  **Update Bottom Navigation using `apply_diff`:**
    *   Target the `<div class="paper-navigation bottom" id="nav-bottom">` block.
    *   Apply the same replacements as for the top navigation.
5.  **Update Plan:** Mark Step 6 as complete in `conversion_plan.txt`.

## Step 7: Verify All Links (Crucial Final Check)

After creating or updating multiple paper files, ensure consistency across *all* existing HTML files.

1.  **List Existing HTML Files:** Use `list_files`.
2.  **Generate Strict Sidebar HTML:** Create sidebar code with links *only* to existing HTML files.
3.  **Update `index.html` (if exists):**
    *   Use `apply_diff` to replace its sidebar with the strict version.
    *   Verify its main content links only to existing files.
4.  **Update Each Past Paper HTML File:**
    *   Iterate through existing HTML files.
    *   For each file:
        *   Use `apply_diff` to replace its sidebar with the strict version.
        *   Determine correct Previous/Next links based on existing files.
        *   Use `apply_diff` to update top and bottom navigation links (`#nav-top`, `#nav-bottom`) with correct `href`s, descriptive text, and `disabled` class if needed.
5.  **Update Plan:** Mark Step 7 as complete in `conversion_plan.txt`.

## Step 8: Formatting Special Content

Apply these formats *within* the `question-content` or `answer-content` divs (usually during Step 4 or 4b, or later with `apply_diff`). **Update `conversion_plan.txt`** after applying necessary formatting for a paper.

*   **Tables:** `<table class="data-table">...</table>`. Use `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`. See `examples/example_table.html`.
*   **Figures/Images:**
    *   **Source:** Check MMD for `![](image_url)`.
    *   **Local Storage (Recommended):**
        1.  Ensure `images/` directory exists (`mkdir -p images`).
        2.  Find URL in MMD.
        3.  Download: `curl -o images/[paper_name]_fig[N].jpg 'image_url'`
        4.  Reference Locally:
            ```html
            <figure class="question-figure">
                <img src="images/2023j_fig1.jpg" alt="Description..." style="max-width: 60%; height: auto;">
                <figcaption>Figure 1</figcaption>
            </figure>
            ```
        5.  Resize using inline `style` if needed.
    *   See `examples/example_figure.html`.
*   **Math Equations:** Use MathJax (`\[...\]` display, `\(...\)` inline). See `examples/example_equation.html`.
*   **Code Snippets:** `<pre class="code-block"><code class="language-xxx">...</code></pre>`. See `examples/example_code.html`.
*   **Diagrams (ASCII or SVG):**
    *   **Requirement:** If a visual representation is needed, include it as ASCII or SVG. If not possible, use placeholder: `<!-- Visual representation needed: [Description] -->`.
    *   **ASCII:** Enclose in `<pre class="diagram-code">...</pre>`. Add `<p class="diagram-caption">...</p>` if needed.
    *   **SVG:** Embed `<svg>...</svg>` directly.
    *   See `examples/example_diagram.html`.

## Step 9: Final Review and Verification

Perform these checks *after* completing all previous steps for a specific paper.

1.  **Read Final Content:** Use `read_file`.
2.  **Verify Structure (Crucial):**
    *   Correct number of `<div class="question">` blocks.
    *   Each question has `<div class="question-content">` AND `<div class="answer-section">` with `<div class="answer-content">`.
    *   **Answers Populated:** Confirm `<div class="answer-content">` is NOT just the placeholder comment (unless answers truly unavailable).
    *   Sidebar exists and is correctly placed (if applicable).
    *   Top and bottom navigation divs exist with three `<a>` tags each.
3.  **Verify Content:**
    *   Check `<title>` and `<header>`.
    *   Spot-check question text.
    *   Check navigation `href` values.
    *   Check sidebar `href` for the current paper.
4.  **Browser Test (Highly Recommended):**
    *   Use `open your-paper-name.html`.
    *   Check layout, sidebar, navigation links, special formatting rendering.
5.  **Update Plan:** Mark Step 9 as complete in `conversion_plan.txt`. Mark overall status as `COMPLETED`.

## Step 10: Automated Verification (Required)

Before marking any file as complete, run the automated verification process to ensure standardization:

1. **Install Dependencies:**
   ```bash
   cd examples/
   pip install -r requirements.txt  # Contains selenium, beautifulsoup4, html5lib
   cd ..
   ```

2. **Configure ChromeDriver:**
   ```bash
   cd examples/
   python3 setup_chromedriver.py  # Sets up ChromeDriver for Selenium
   cd ..
   ```

3. **Run Verification:**
   ```bash
   cd examples/
   python3 verify_pastpapers.py  # Checks all HTML files
   cd ..
   ```

### What Gets Verified

The automated verification checks for:

1. **HTML Structure:**
   - Proper semantic HTML5 elements
   - Correct nesting of tags
   - Required containers and wrappers

2. **Navigation:**
   - Working paper navigation links
   - Proper href values
   - Disabled states where needed

3. **Styling:**
   - Required CSS classes
   - Layout containers
   - Proper padding and margins

4. **Images:**
   - Image loading
   - Local image availability
   - Alt text presence

5. **Sidebar:**
   - Proper structure
   - Working links
   - Correct organization

### Verification Results Example

```
Verifying example.html...
--------------------------------------------------
STRUCTURE: PASS - HTML structure is valid
ELEMENTS: PASS - All required elements present
NAVIGATION: PASS - Found 4 valid navigation links
STYLING: PASS - CSS styling verified
IMAGES: PASS - All images loaded successfully
SIDEBAR: PASS - Sidebar verified with 4 links
```

### Handling Failures

If verification fails:
1. Read the error message carefully
2. Check the specific file and line mentioned
3. Compare against working examples in examples/
4. Fix the issue and re-run verification
5. Only mark as complete when all checks pass

Mark Step 10 as complete in `conversion_plan.txt` once verification passes.

## Final Manual Review

Always perform a final manual browser check for formatting, rendering, OCR errors, and layout. Use `apply_diff` for minor adjustments if needed.

## 11. Missing Papers List

Keep a simple list of missing papers in `missing_papers_report.md`. Update this list whenever converting papers.

### Format Example
```markdown
# Missing Past Papers List

2022
- November

2021
- July

[etc...]
```

### Maintenance
- Update after each paper conversion
- List only July and November papers
- Order by year (newest first)
- Remove papers from list once converted

## 12. Conclusion

Following this standardized conversion process ensures that all past examination papers maintain consistent structure, formatting, and accessibility features. The automated verification in Step 10 provides a final quality assurance check before papers are published.

By maintaining this systematic approach:
- Students benefit from a consistent learning experience
- Search engines can better index the content
- Accessibility tools work properly with the semantic structure
- Future updates can be applied uniformly across all papers

Remember to update the conversion plan document at each step and verify that all requirements are met before marking a paper as complete.