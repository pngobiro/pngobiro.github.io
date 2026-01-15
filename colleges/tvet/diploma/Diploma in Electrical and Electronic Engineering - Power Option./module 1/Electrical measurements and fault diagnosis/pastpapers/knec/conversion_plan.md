# Conversion Plan

This document outlines the plan to convert PDF past papers into structured HTML files, following the instructions in `pdf_to_html_instructions.md`.

## 1. Understand the Project Structure:

*   Review the project structure outlined in Section 1 of `pdf_to_html_instructions.md`. This includes the directory structure and file naming conventions.
*   Create the necessary directories if they don't exist.

## 2. OCR Processing:

*   Follow the OCR process described in Section 2. This involves using Mathpix OCR to convert PDFs to MMD format.
*   The user has already performed this step, but I need to ensure that all the .mmd files are present and correctly named.

## 3. HTML Templates:

*   Implement the HTML templates described in Section 3. This includes the base HTML structure, index page template, and question structure template.
*   Create the necessary HTML files and add the base HTML structure to each file.

## 4. JavaScript Functionality:

*   Implement the JavaScript functionality described in Section 3.4. This includes sidebar navigation, smooth scrolling, dark mode toggle, print functionality, and mobile navigation.
*   Create the `js/sidebar-navigation.js` file and add the JavaScript code to it.

## 5. Conversion Process Requirements:

*   Follow the conversion process requirements outlined in Section 4. This includes simultaneous question and answer creation, preventing structural problems, and preventing file operation errors.
*   Implement the necessary code to extract questions and answers from the .mmd files and add them to the HTML files.

## 6. Content Formatting Examples:

*   Follow the content formatting examples provided in Section 5. This includes the July 2022 paper example, communication questions, technical questions, and entrepreneurship questions.
*   Ensure that the HTML files are formatted correctly and that the content is displayed properly.

## 7. Handling Mathematical Equations:

*   Follow the guidelines for handling mathematical equations in Section 6. This includes converting math expressions from MMD to HTML/MathJax and using the correct LaTeX code for common math symbols.
*   Implement the necessary code to render mathematical equations correctly in the HTML files.

## 8. Creating Comprehensive, Well-Formatted Answers:

*   Follow the guidelines for creating comprehensive, well-formatted answers in Section 7. This includes answer structure and format, mathematical solutions guidelines, programming solutions guidelines, and theoretical/conceptual question guidelines.
*   Ensure that the answers are well-written, accurate, and easy to understand.

## 9. Preserving Question Order and Structure:

*   Follow the guidelines for preserving question order and structure in Section 8. This includes processing questions sequentially and maintaining the part and subpart hierarchy.
*   Implement the necessary code to ensure that the questions are displayed in the correct order and that the structure is preserved.

## 10. Local Image Processing Requirements:

*   Follow the local image processing requirements in Section 9. This includes extracting and downloading images, using the correct image naming convention, and verifying image completeness and quality.
*   Implement the necessary code to download the images and add them to the HTML files.

## 11. Handling LaTeX Conversion Issues:

*   Follow the guidelines for handling LaTeX conversion issues in Section 10. This includes handling the "Unknown environment 'tabular'" error and using the correct LaTeX to HTML conversion reference.
*   Implement the necessary code to convert LaTeX tables to HTML tables.

## 12. Preventing File Conflicts During Conversion:

*   Follow the guidelines for preventing file conflicts during conversion in Section 11. This includes implementing a file locking mechanism, using complete file updates instead of diffs, and implementing version control.
*   Implement the necessary code to prevent file conflicts.

## 13. Mobile Optimization Features:

*   Ensure that the HTML files are optimized for mobile devices, as described in Section 12. This includes mobile-friendly navigation, responsive design improvements, touch-optimized interactions, mobile performance optimizations, and mobile display enhancements.
*   Implement the necessary CSS and JavaScript code to optimize the HTML files for mobile devices.

## 14. Final Verification Checklist:

*   Use the final verification checklist in Section 13 to ensure that all the steps have been completed correctly and that the HTML files are of high quality.
*   Perform a thorough review of the HTML files to ensure that they meet all the requirements.

## Mermaid Diagram:

```mermaid
graph TD
    A[Understand Project Structure] --> B(OCR Processing);
    B --> C{HTML Templates};
    C --> D[JavaScript Functionality];
    D --> E(Conversion Process Requirements);
    E --> F{Content Formatting Examples};
    F --> G[Handling Mathematical Equations];
    G --> H(Creating Comprehensive Answers);
    H --> I{Preserving Question Order};
    I --> J[Local Image Processing];
    J --> K(Handling LaTeX Issues);
    K --> L{Preventing File Conflicts};
    L --> M[Mobile Optimization];
    M --> N(Final Verification Checklist);