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

## Conversion Process Workflow

**Before starting:** Use `list_files` to check the root directory for any `*.pdf` files that haven't been processed yet (i.e., don't have a corresponding `.html` file). Add any new PDFs to your processing list.

1.  **OCR:** Convert one PDF to text.
2.  **Create HTML:** Create the corresponding HTML file from a clean template.
3.  **Update Header:** Add specific paper details (Title, Subject, Date, Code, etc.) to the HTML header.
4.  **Populate Main Content:** Add instructions (if any), questions, and **answer placeholders**.
5.  **Embed Sidebar:** Insert the current sidebar HTML content.
6.  **Update Navigation:** Add "Home", "Previous", and "Next" links.
7.  **Add Answers:** Insert the actual answers for each question (if available). **Crucially, use `read_file` before each answer `apply_diff` to get correct line numbers.**
8.  **Repeat:** Repeat steps 1-7 for all remaining PDFs.
9.  **Update Index/Sidebar:** After converting all papers, update `index.html` and `components/sidebar.html` to accurately reflect all available papers and ensure correct inter-paper navigation links.
10. **Generate Missing Papers Report:** Create a `missing_papers.txt` file listing potentially missing PDFs based on year/session patterns.
11. **Final Review:** Verify structure, content, and links across all generated files. Use `open index.html` in the correct project directory.
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

1.  **Determine Links:** Identify the correct filenames for the "Previous Paper" and "Next Paper" (e.g., `2012july.html`, `2011nov.html`).
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
*   **Diagrams:** `<div class="db-diagram"><pre class="diagram-code">...</pre><p class="diagram-caption">...</p></div>`. See `examples/example_diagram.html`.

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
