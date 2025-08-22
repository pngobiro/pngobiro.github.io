# PDF to HTML Conversion Plan for Mass Casualty Management

This document outlines the remaining steps to convert the `masscasualtymanagement-final-170816151339.mmd` file into a structured, visually engaging, and accessible HTML format, following the guidelines in `pdf-to-html-conversion-prompt-v7.md`.

## Current Status
- Directory structure (`mass-casualty-management-html/`) created.
- Core CSS (`main.css`) and JavaScript (`navigation.js`) files generated.
- `index.html` (Table of Contents) initialized.
- First three topic HTML files generated:
    - `mass-casualty-management-introduction.html`
    - `road-traffic-accidents-nepal.html`
    - `rta-kaski-district.html`
    - `rta-manipal-teaching-hospital.html`
- `index.html` updated with links to these initial topic files.

## Remaining Steps

The primary task is to systematically process the `masscasualtymanagement-final-170816151339.mmd` file, section by section, converting its content into individual HTML files and linking them appropriately in the `index.html`.

### Phase 1: Content Conversion (Iterative Process)

For each remaining section identified in the MMD, I will perform the following:

1.  **Identify Section Boundaries:** Locate `\section*{}` tags to define new content chunks.
2.  **Extract Content:** Copy the MMD content for the current section.
3.  **Generate HTML File:**
    *   Create a new HTML file in `mass-casualty-management-html/topics/` with a descriptive filename (e.g., `section-title-slug.html`).
    *   Populate the file using the `Topic Page Template` from the prompt.
    *   Convert MMD elements to HTML:
        *   `\section*{Title}` -> `<h1>` or `<h2>` (depending on hierarchy).
        *   Paragraphs -> `<p>`.
        *   Lists (`-`, `*`, `•`, numbered) -> `<ul>` or `<ol>` with `<li>` elements.
        *   Tables (`\begin{tabular}`/`\end{tabular}`) -> `<table>` with `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`.
        *   LaTeX equations (`$`, `$$`, `\begin{equation}`) -> Preserve for MathJax rendering.
        *   Images (`![](image_url)`) -> `<img src="../assets/images/[local_filename]" alt="[description]">`. I will extract the image URL and its local filename (following the `[ID]g-[PageNum]-[SeqNum].ext` convention) and add it to a list for later download.
        *   Footnotes (`\footnotetext`) -> Convert to appropriate HTML (e.g., `<p class="footnote">`).
4.  **Update Navigation:**
    *   Set `previous-chunk.html` and `next-chunk.html` links in the generated HTML file.
    *   Update the `index.html` by adding a new `<li>` entry for the newly created topic file.

**List of Remaining Sections to Process (approximate order):**

*   Death toll in Sarangkot bus accident reaches five
*   Mass Casualty Incident (MCI)
*   Disaster
*   Characteristics of Disaster
*   Types of Disaster
*   Hospitals & Disaster
*   Issues to be addressed by Hospital
*   Role of Hospital in Disaster Management
*   Steps in MCI Management
*   Triage
*   Types of Triage
*   Concept of "Golden Hour"
*   START Triage (and related classification)
*   Primary Survey (all sub-sections)
*   Airway
*   Airway Management
*   Airway Maintenance
*   Insertion of Oropharyngeal airway
*   Breathing
*   Breathing Management
*   Circulation
*   Shock
*   Hemorrhagic Shock
*   Circulatory Resuscitation Measures
*   Response to Fluid Resuscitation
*   Disability (Neurologic Evaluation)
*   Exposure/Environmental Control
*   Common Life Threatening Conditions
*   Secondary Survey (all sub-sections)
*   Head Trauma (all sub-sections)
*   Chest Trauma (all sub-sections)
*   Abdomen trauma (all sub-sections)
*   Spinal Trauma
*   Limb Trauma (all sub-sections)
*   Mass Casualty Management in ER Principles
*   Policies & Procedures
*   Emergency or Disaster Plan
*   Operating Theatre
*   Staffing Requirements of ER
*   Overcrowding
*   Equipment & Supplies
*   Contingency
*   Observation & Holding Area
*   Referral & Transfer
*   Mass Casualty Incident Management
*   Transportation & Documentation
*   Mobilisation of Health Person in TRIAGE
*   Display Patient Name & Status
*   Triage Selection Area in ER
*   Conclusion

### Phase 2: Image Download

Once all HTML files are generated and image URLs are collected:

1.  **Download Images:** Use `curl` or a similar command to download each unique image URL to `mass-casualty-management-html/assets/images/`, ensuring the correct naming convention (`[ID]g-[PageNum]-[SeqNum].ext`).

### Phase 3: Final Review and Verification

1.  **Content Verification:** Perform a line-by-line visual comparison of the generated HTML against the *original PDF source* to ensure 100% verbatim content preservation (after MMD corrections).
2.  **Structural Verification:** Confirm all HTML elements are semantically correct and follow the specified layout.
3.  **Navigation Testing:** Verify all internal links (Table of Contents, Previous/Next) function correctly.
4.  **Accessibility Checks:** Ensure basic accessibility standards are met (e.g., `alt` text for images).
5.  **MathJax Rendering:** Confirm all LaTeX equations render correctly.
6.  **Responsiveness:** Check layout on different screen sizes (simulated or actual).

This plan ensures a systematic and verifiable approach to the conversion process.
