# PDF to HTML Conversion Instructions

## Step 1: PDF to MMD Conversion (Using Mathpix OCR)

Before creating the HTML, convert the source PDF file to Markdown (MMD) format using the Mathpix OCR tool. This extracts the text, math equations, and table structures.

**Command:**

```bash
node /home/ngobiro/.local/share/Roo-Code/MCP/mathpix-ocr-server/build/index.js [input_pdf_filename].pdf > [output_mmd_filename].mmd
```

**Example:**

```bash
node /home/ngobiro/.local/share/Roo-Code/MCP/mathpix-ocr-server/build/index.js 2017july.pdf > 2017july.mmd
```

This command runs the Mathpix OCR server script, processes the specified PDF, and saves the resulting MMD content to the specified output file. Ensure the `.mmd` file is created successfully before proceeding to the next steps.

**Important Note on Images:** After generating the `.mmd` file, check its content for any `![](image_url)` lines, especially those pointing to `cdn.mathpix.com`. These represent figures or diagrams extracted from the PDF. **It is crucial to download these images and store them locally** following the procedure detailed in Step 7 (**Figures/Images**) to ensure they remain accessible long-term. Do not rely solely on the external URLs.

## Step 2: Create Clean HTML Template (Optimized Structure)

### Basic Document Structure
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
    <!-- Main structure sections follow -->
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
            *   Include `<div class="answer-section">` with `<h4>Answer</h4>` and `<div class="answer-content">`.
            *   **Add Answers:** Populate the `<div class="answer-content">` with the actual, detailed, formatted answer content during this step. Add a disclaimer like `<p><em>Disclaimer: Answers are AI-generated and may contain errors. Verify independently.</em></p>` at the beginning of the answer content. If answers are unavailable, use a clear placeholder like `<!-- Answer content not available -->` but **always include the answer section structure**.
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

1.  **Prepare Sidebar Content:** Read the standard sidebar HTML structure (e.g., from a template file or a correctly formatted existing paper).
2.  **Verify Sidebar Links:** Before inserting, **check that every `href` value within the sidebar HTML corresponds to an existing `.html` file** in the target directory (use `list_files`). Remove or comment out links to non-existent files.
3.  **Locate Insertion Point:** In the paper's HTML file, find the line containing `<div class="container main-content">`.
4.  **Insert Verified Sidebar using `apply_diff`:**
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

1.  **Determine Links:** Identify the correct filenames for the "Previous Paper" and "Next Paper" based on chronological order. **Crucially, verify that these target HTML files actually exist** using `list_files`. If the immediate chronological neighbor does not exist, find the *next existing* chronological neighbor (skipping gaps) and link to that file. If no previous/next existing neighbor exists at all, use `href="#"` and add a `disabled` class to the link. Always include a link to `index.html` for "Home".
2.  **Read File:** Use `read_file` on the *current* state of the HTML file to get accurate line numbers for the navigation sections.
3.  **Update Top Navigation using `apply_diff`:**
    *   Target the `<div class="paper-navigation top">` block.
    *   `SEARCH`: The existing `<a>` tags (likely with placeholder `#` hrefs from Step 4).
    *   `REPLACE`: Three `<a>` tags with correct `href` values and link text ("Previous Paper", "Home", "Next Paper"). Ensure `index.html` is the target for the "Home" link.
    *   Use the correct line numbers obtained from `read_file`.
4.  **Update Bottom Navigation using `apply_diff`:**
    *   Target the `<div class="paper-navigation bottom">` block.
    *   `SEARCH`: The existing `<a>` tags (likely with placeholder `#` hrefs from Step 4).
    *   `REPLACE`: Three `<a>` tags with correct `href` values and link text ("Previous Paper", "Home", "Next Paper"). Ensure `index.html` is the target for the "Home" link.
    *   Use the correct line numbers obtained from `read_file`.

### Step 7: Verify All Links (Crucial Final Check)

After creating or updating multiple paper files, it's essential to ensure all navigation and sidebar links are consistent and correct across *all* existing HTML files, including `index.html`.

1.  **List Existing HTML Files:** Use `list_files` to get the definitive list of all `.html` files currently in the directory (excluding those in `examples/`).
2.  **Generate Strict Sidebar HTML:** Create the correct sidebar HTML code, including *only* links to the HTML files identified in the previous step. Omit or comment out links for any papers where the HTML file does not exist.
3.  **Update `index.html`:**
    *   Use `apply_diff` to replace the entire sidebar section in `index.html` with the strict version generated above.
    *   Verify that the main content area of `index.html` only lists and links to the existing HTML files. Remove any entries for non-existent files.
4.  **Update Each Past Paper HTML File:**
    *   Iterate through the list of existing HTML past paper files (e.g., `2010n.html`, `2011j.html`, ...).
    *   For each file:
        *   Use `apply_diff` to replace its entire sidebar section with the strict version generated in step 2.
        *   Determine the correct "Previous Paper" and "Next Paper" links by finding the immediately preceding and succeeding *existing* HTML files in chronological order based on the list from step 1.
        *   If no previous or next existing file exists, use `href="#"` and add the `disabled` class to the corresponding link.
        *   Use `apply_diff` to update both the top (`<div class="paper-navigation top">`) and bottom (`<div class="paper-navigation bottom">`) navigation sections with the correct "Previous", "Home", and "Next" links, including descriptive text (e.g., "Previous Paper (Nov 2015)"). Ensure the `id="nav-top"` and `id="nav-bottom"` attributes are present.

### Step 8: Formatting Special Content

Apply these formats *within* the `question-content` or `answer-content` divs during Step 4 or later using `apply_diff` if needed.

*   **Tables:** `<table class="data-table">...</table>`. Use `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`. See `examples/example_table.html`.
*   **Figures/Images:**
    *   **Source:** Figures are often extracted by the Mathpix OCR process and included in the MMD file as URLs pointing to `cdn.mathpix.com`.
    *   **Local Storage (Recommended):** To ensure long-term availability, download these images and store them locally.
        1.  **Create Directory:** Ensure an `images` directory exists at the root level (where `styles.css` is). Use `mkdir -p images`.
        2.  **Find URL:** Locate the `![](image_url)` line in the corresponding `.mmd` file for the figure.
        3.  **Download:** Use `curl` to download the image into the `images` directory. Name the image descriptively, e.g., `[paper_name]_fig[figure_number].jpg`.
            ```bash
            # Example:
            curl -o images/2023j_fig1.jpg 'https://cdn.mathpix.com/...'
            ```
        4.  **Reference Locally:** In the HTML, use a `<figure>` element and point the `<img>` tag's `src` attribute to the local path. Add descriptive `alt` text.
            ```html
            <figure class="question-figure">
                <img src="images/2023j_fig1.jpg" alt="Description of figure 1 for 2023 July paper">
                <figcaption>Figure 1</figcaption>
            </figure>
            ```
        5.  **Resize (Optional):** If the image is too large, add an inline style to the `<img>` tag: `style="max-width: 60%; height: auto;"` (adjust percentage as needed).
    *   See `examples/example_figure.html`.
*   **Math Equations:** Use MathJax (`\[...\]` display, `\(...\)` inline). See `examples/example_equation.html`.
*   **Code Snippets:** `<pre class="code-block"><code class="language-xxx">...</code></pre>`. See `examples/example_code.html`.
*   **Diagrams (ASCII or SVG):**
    *   **Requirement:** If a question or its answer explicitly requires a visual representation (e.g., bar chart, pie chart, graph, flowchart, ERD, logic gate diagram), it **must** be included in the HTML using either ASCII art or SVG. Do not simply describe the drawing; include the visual representation itself. **If the visual cannot be generated automatically (e.g., complex graphs, charts), insert a clear placeholder comment like `<!-- Visual representation needed: [Description of visual, e.g., Ogive Curve for Height Data] -->` where the visual should appear.**
    *   **Option A: ASCII Art (Preferred for simplicity):**
        *   If a question requires a diagram that can be reasonably represented by ASCII art (e.g., simple flowcharts, logic gates), create an ASCII art representation.
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
