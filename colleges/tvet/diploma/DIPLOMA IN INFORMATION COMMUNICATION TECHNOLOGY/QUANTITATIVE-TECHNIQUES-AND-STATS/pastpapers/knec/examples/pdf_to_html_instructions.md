# Converting Past Papers from PDF to HTML: Detailed Instructions

This guide provides detailed instructions on converting KNEC past papers from PDF to HTML, ensuring consistency and proper formatting.

## Project Structure

The project files are organized as follows:

```
pastpapers/
├── js/
│   ├── sidebar-navigation.js    # Handles active page highlighting in the sidebar
│   └── sidebar-include.js       # No longer used, sidebar is embedded
├── components/
│   └── sidebar.html            # HTML for the navigation sidebar (embedded directly)
├── examples/                    # Contains HTML examples for different content types
│   ├── example_table.html      # Example of table formatting
│   ├── example_figure.html     # Example of figure/image formatting
│   ├── example_equation.html   # Example of equation formatting (using MathJax)
│   └── example_code.html       # Example of code snippet formatting
│   └── example_diagram.html    # Example of database diagram
├── styles.css                  # Global styles for the website
├── template.html              # Base template (no longer actively used, but kept for reference)
└── [paper-name].html         # Individual past paper HTML files (e.g., 2023j.html)
```

**Important Note:** We are now embedding the sidebar directly into each HTML file, so `sidebar-include.js` is no longer used. The `template.html` is also not actively used, as we're building each paper file individually.

## Conversion Process

### Step 1: OCR (Optical Character Recognition)

Since we cannot directly extract text from image-based or protected PDFs, we'll use a separate OCR tool. The recommended tool is the `pdf-converter-server` located in `/home/ngobiro/Documents/Cline/MCP/pdf-converter-server`.

**Command:**

```bash
cd /home/ngobiro/Documents/Cline/MCP/pdf-converter-server && node build/index.js "/path/to/input.pdf" "output.txt" && sleep 5 && cp "output.txt" "/path/to/knec/directory"
```

*   **`/path/to/input.pdf`:** Replace this with the *full, absolute path* to the PDF file you want to convert (e.g., `/home/ngobiro/projects/pngobiro.github.io/colleges/tvet/diploma/DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY/System Analysis and Design/pastpapers/knec/2022n.pdf`).
*   **`output.txt`:** Replace this with a descriptive name for the output text file (e.g., `2022n_ocr.txt`). The command will initially create this file in the `pdf-converter-server` directory.
*   **`&& sleep 5`:** This crucial part adds a 5-second delay. The OCR process can take some time, and the `cp` command might run *before* the output file is fully written. The `sleep` command ensures the OCR process finishes before copying.
* **`&& cp "output.txt" "/path/to/knec/directory"`:** This copies the generated `output.txt` file to your current working directory (`/home/ngobiro/projects/pngobiro.github.io/colleges/tvet/diploma/DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY/System Analysis and Design/pastpapers/knec`). Make sure to replace `output.txt` with the actual output filename you used.

**Example:**

```bash
cd /home/ngobiro/Documents/Cline/MCP/pdf-converter-server && node build/index.js "/home/ngobiro/projects/pngobiro.github.io/colleges/tvet/diploma/DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY/System Analysis and Design/pastpapers/knec/2022n.pdf" "2022n_ocr.txt" && sleep 5 && cp "2022n_ocr.txt" "/home/ngobiro/projects/pngobiro.github.io/colleges/tvet/diploma/DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY/System Analysis and Design/pastpapers/knec"
```

**Troubleshooting OCR:**

*   **File Not Found:** Double-check the input and output file paths. Use absolute paths to avoid ambiguity.
*   **OCR Errors/Incomplete Output:** The OCR process might not be perfect, especially with complex formatting or low-quality scans. You may need to manually correct errors or re-scan the PDF with different settings.
*  **Interrupted OCR:** If the process is interrupted, the output file may not be created, or it may be incomplete.
*   **Review OCR Output:** Before proceeding, briefly review the generated `.txt` file for major errors, especially in tables, equations, or code snippets. Manual correction of the `.txt` file *before* HTML generation can sometimes be easier.

### Step 2: Create the HTML File

1.  Create a new HTML file named according to the year and session (e.g., `2022n.html` for November 2022).
2.  Copy the *entire* content of a clean base template into your new file. **Crucially, ensure the template you copy *does not* already contain the sidebar or the main paper content (questions/answers).** It should only contain the basic HTML structure (`<html>`, `<head>`, `<body>`, `<header>`, empty `<main>`, `<footer>`). This provides a clean slate.

    **Example Clean Template Structure:**
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>PLACEHOLDER TITLE</title>
        <link rel="stylesheet" href="styles.css">
        <script src="js/sidebar-navigation.js" defer></script>
        <!-- Add MathJax scripts if needed -->
        <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
        <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
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

### Step 3: Update the Header

Using the clean template created in Step 2:

1.  **Use `apply_diff`:** Target the `<title>`, `<h1>`, `<h2>`, and the `<p>` tags within `<div class="exam-details">`.
2.  **Replace Placeholders:** Update the placeholder text with the correct information for the specific paper (Year, Month, Subject, Paper Code, Duration, Module) obtained from the OCR text or paper details.

### Step 4: Populate Main Content (Instructions, Questions & Answers Simultaneously)

This is a crucial step. We will add the intro, all question blocks (including answers/placeholders), and the navigation divs in one go using `write_to_file` or a large `apply_diff` targeting the empty `<main>` tags. This makes future modifications easier.

1.  **Prepare Content Block:** Construct the full HTML content that goes inside the `<main>...</main>` tags. This includes:
    *   **Top Navigation:** `<div class="paper-navigation top"><a href="#" class="btn">Previous Paper</a><a href="#" class="btn">Next Paper</a></div>` (Use placeholder `#` href values for now).
    *   **Instructions Section:** `<section class="paper-intro">...</section>` populated from OCR.
    *   **Questions and Answers Section:** `<section class="paper-content">...</section>` containing *all* `<div class="question">` blocks.
        *   For each question:
            *   Include `<h3>Question X (marks)</h3>`.
            *   Include `<div class="question-content">` with formatted question text from OCR.
            *   Include `<div class="answer-section">` with `<h4>Answer</h4>` and `<div class="answer-content">`. Populate this with the actual answer if available, or use standard formatting (lists, paragraphs) as placeholders if answers need to be added later. **Do not skip the answer structure.**
    *   **Bottom Navigation:** `<div class="paper-navigation bottom"><a href="#" class="btn">Previous Paper</a><a href="#" class="btn">Next Paper</a></div>` (Use placeholder `#` href values for now).

2.  **Apply Content:**
    *   **Option A (Recommended): `apply_diff`**
        *   Target the empty `<main>` tags.
        *   `SEARCH`: `<main>\n            </main>` (Adjust whitespace as needed based on the actual empty main tag).
        *   `REPLACE`: `<main>\n[Your prepared content block here]\n            </main>`
        *   Ensure correct line numbers for `<main></main>`.
    *   **Option B: `write_to_file`**
        *   Combine the clean template structure (from Step 2, after header update) with your prepared content block inside the `<main>` tags.
        *   Provide the *entire* HTML content to `write_to_file` with the correct total line count.

**Benefit for `apply_diff`:** Having the full structure for each question (question + answer section) from the start allows targeting specific `<div class="answer-content">` blocks precisely for adding or correcting answers later.

### Step 5: Embed the Sidebar

1.  **Read Sidebar Content:** Use `read_file` to get the content of `components/sidebar.html`.
2.  **Locate Insertion Point:** In the paper's HTML file, find the line containing `<div class="container main-content">`.
3.  **Insert Sidebar using `apply_diff`:**
    *   `SEARCH`: The line `<div class="container main-content">` and the following `<main>` line.
    *   `REPLACE`: The `<div class="container main-content">` line, followed by the *entire sidebar HTML* (from `components/sidebar.html`), followed by the `<main>` line.
    *   Provide accurate start/end line numbers for the search block.

    **Example `apply_diff` Structure (Illustrative Sidebar Content):**
    ```xml
    <apply_diff>
    <path>2011july.html</path>
    <diff>
    <<<<<<< SEARCH
        <div class="container main-content">
            <main>
    =======
        <div class="container main-content">
            <div class="sidebar">
                <div class="sidebar-header"><h3>Past Papers</h3></div>
                <nav class="sidebar-nav">
                    <ul>
                        <li>
                            <h4>2023</h4>
                            <ul><li><a href="2023j.html">July 2023</a></li></ul>
                        </li>
                        <li>
                            <h4>2022</h4>
                            <ul>
                                <li><a href="2022n.html">November 2022</a></li>
                                <li><a href="2022j.html">July 2022</a></li>
                            </ul>
                        </li>
                        <li><h4>2021</h4><ul><li><a href="2021n.html">November 2021</a></li></ul></li>
                        <li><h4>2019</h4><ul><li><a href="2019july.html">July 2019</a></li></ul></li>
                        <li><h4>2018</h4><ul><li><a href="2018nov.html">November 2018</a></li><li><a href="2018j.html">July 2018</a></li></ul></li>
                        <li><h4>2017</h4><ul><li><a href="2017nov.html">November 2017</a></li><li><a href="2017july.html">July 2017</a></li></ul></li>
                        <li><h4>2016</h4><ul><li><a href="2016nov.html">November 2016</a></li><li><a href="2016july.html">July 2016</a></li></ul></li>
                        <li><h4>2015</h4><ul><li><a href="2015nov.html">November 2015</a></li><li><a href="2015j.html">July 2015</a></li></ul></li>
                        <li><h4>2014</h4><ul><li><a href="2014nov.html">November 2014</a></li><li><a href="2014july.html">July 2014</a></li></ul></li>
                        <li><h4>2013</h4><ul><li><a href="2013nov.html">November 2013</a></li></ul></li>
                        <li><h4>2012</h4><ul><li><a href="2012july.html">July 2012</a></li></ul></li>
                        <li><h4>2011</h4><ul><li><a href="2011nov.html">November 2011</a></li><li><a href="2011july.html">July 2011</a></li></ul></li>
                        <li><h4>2008</h4><ul><li><a href="2008nov.html">November 2008</a></li></ul></li>
                    </ul>
                </nav>
            </div>
            <main>
    >>>>>>> REPLACE
    </diff>
    <start_line>XX</start_line> <!-- Correct line number for <div class="container..."> -->
    <end_line>YY</end_line>   <!-- Correct line number for <main> -->
    </apply_diff>
    ```
    *(Remember to replace `XX` and `YY` with the correct line numbers after reading the file)*

### Step 6: Update Top and Bottom Navigation Links

1.  **Determine Links:** Identify the correct filenames for the "Previous Paper" and "Next Paper" based on chronological order (e.g., `2012july.html`, `2011nov.html`). **Verify that these target HTML files exist or are planned to be created.** Also include a link to `index.html` for "Home".
2.  **Read File:** Use `read_file` on the *current* state of the HTML file to get accurate line numbers for the navigation sections.
3.  **Update Top Navigation using `apply_diff`:**
    *   Target the `<div class="paper-navigation top">` block.
    *   `SEARCH`: The existing `<a>` tags (likely with placeholder `#` hrefs from Step 4).
    *   `REPLACE`: The `<a>` tags with correct `href` values and link text ("Previous Paper", "Next Paper").
    *   Use the correct line numbers obtained from `read_file`.
4.  **Update Bottom Navigation using `apply_diff`:**
    *   Target the `<div class="paper-navigation bottom">` block.
    *   `SEARCH`: The existing `<a>` tags (likely with placeholder `#` hrefs from Step 4).
    *   `REPLACE`: The `<a>` tags with correct `href` values and link text.
    *   Use the correct line numbers obtained from `read_file`.

### Step 7: Formatting Special Content

Apply these formats *within* the `question-content` or `answer-content` divs during Step 4 or later using `apply_diff` if needed.

*   **Tables:** `<table class="data-table">...</table>`. Use `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`. See `examples/example_table.html`.
*   **Figures/Images:** (Manual extraction needed) `<figure class="question-figure"><img src="images/figureX.png" alt="..."><figcaption>Figure X: ...</figcaption></figure>`. See `examples/example_figure.html`.
*   **Math Equations:** Use MathJax (`\[...\]` display, `\(...\)` inline). See `examples/example_equation.html`.
*   **Code Snippets:** `<pre class="code-block"><code class="language-xxx">...</code></pre>`. See `examples/example_code.html`.
*   **Diagrams (ASCII or SVG):**
    *   **Option A: ASCII Art (Preferred for simplicity):**
        *   If a question requires a diagram (e.g., network diagram, flowchart, ERD) that cannot be easily represented by standard HTML or MathJax, create an ASCII art representation.
        *   Enclose the ASCII diagram within `<pre class="diagram-code">...</pre>` tags. This preserves formatting and uses a monospace font.
        *   Add a descriptive caption if necessary using `<p class="diagram-caption">...</p>` below the `<pre>` block.
        *   Example:
            ```html
            <div class="question-content">
                <p>...(question text)...</p>
                <pre class="diagram-code">
+-------+      +-------+
| Start |----->| Step A|
+-------+      +-------+
                 |
                 V
               +-------+
               | End   |
               +-------+
                </pre>
                <p class="diagram-caption">Figure 1: Simple Flowchart</p>
            </div>
            ```
    *   **Option B: SVG (Scalable Vector Graphics):**
        *   For more complex diagrams where ASCII is insufficient, an SVG can be created manually or using a tool.
        *   Embed the `<svg>...</svg>` code directly within the `question-content` or `answer-content`.
        *   This provides scalability but requires more effort to create. Use this option sparingly.
    *   See `examples/example_diagram.html` for database diagram example (using ASCII).

### Step 8: Remove Unnecessary Script (If Present)

*   If the template used in Step 2 included `<script src="js/sidebar-include.js" defer></script>`, use `apply_diff` to remove this line from the `<head>` section.

### Step 9: Final Review and Verification

Perform these checks *after* completing all previous steps:

1.  **Read Final Content:** Use `read_file` on the completed HTML file.
2.  **Verify Structure (Crucial):**
    *   **Questions:** Confirm exactly the correct number of `<div class="question">` blocks exist within `<section class="paper-content">`.
    *   **Answers:** Inside *each* `<div class="question">`, confirm both `<div class="question-content">` and `<div class="answer-section">` (with `<div class="answer-content">`) are present.
    *   **Sidebar:** Confirm the `<div class="sidebar">...</div>` block exists directly inside `<div class="container main-content">` and *before* the `<main>` tag.
    *   **Navigation:** Confirm both `<div class="paper-navigation top">` and `<div class="paper-navigation bottom">` exist and contain two `<a>` tags each.
3.  **Verify Content:**
    *   Check the `<title>` and `<header>` content.
    *   Spot-check a few question texts against the OCR output.
    *   Check the `href` values in the top and bottom navigation links.
    *   Check the `href` for the *current* paper within the embedded sidebar code to ensure it's correct.
4.  **Browser Test (Highly Recommended):**
    *   Use `open your-paper-name.html`.
    *   Check overall layout. Does it look like the examples?
    *   Is the sidebar visible and correctly populated?
    *   Is the current paper highlighted in the sidebar? (Check using `js/sidebar-navigation.js` logic).
    *   Do the "Previous Paper" and "Next Paper" links work correctly?
    *   Are questions and answers displayed clearly? Is special formatting (tables, code, diagrams) rendered correctly?

Following this detailed process ensures consistency, facilitates easier updates using `apply_diff`, and helps catch errors early. Remember to use `read_file` frequently before `apply_diff` if the file content has been changed by previous steps, to ensure correct line numbers.

### Final Manual Review

While these steps aim for automation, always perform a final manual review of the generated HTML file in a browser. Pay close attention to:
*   Formatting inconsistencies not caught by automated checks.
*   Rendering issues with tables, equations, code, or diagrams (especially ASCII).
*   Any remaining OCR errors in the text content.
*   Overall layout and readability.

Manual adjustments using `apply_diff` or direct editing might be necessary to achieve the desired final quality.
