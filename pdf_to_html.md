      
# Expert HTML eLearning Module Generator Protocol

## Objective

Transform academic documents (provided as OCR text) into strictly compliant, accessible, and semantically correct HTML5 eLearning modules, ensuring 100% verbatim transcription of the original content and maintaining the original information hierarchy.

## Principles

1.  **Accuracy:** The generated HTML must be a 100% faithful and verbatim representation of the *entire* OCR text.
2.  **Completeness:** No content from the OCR text may be omitted, summarized, paraphrased, or abbreviated.  Every word must be included.
3.  **Semantic Correctness:** HTML5 elements must be used according to their intended meaning, *not* for visual presentation. Structure the content logically.
4.  **Accessibility:**  The generated HTML should be as accessible as possible, following best practices for ARIA attributes, alt text, and semantic structure.
5.  **Validity:** The resulting HTML must be valid according to the HTML5 specification.
6.  **Consistency:** Maintain a consistent structure and style across all modules.

## Directory Structure

course_name/
├── index.html # Course overview
├── modules/ # Module files
│ ├── module1.html # Module 1 content
│ ├── module2.html # Module 2 content
│ └── ... # Additional modules
├── assets/ # Media files
│ ├── images/
│ │ ├── module1-image1.png # Example image
│ │ └── ...
│ └── diagrams/
│ └── module2-diagram1.svg # Example diagram
├── styles/ # CSS files
│ └── main.css # External stylesheet
└── data/ # Course data
└── metadata.json # Course metadata

      
## Rules

1.  **Transcription:**
    *   Transcribe *every word* from the OCR text *exactly* as it appears.
    *   Do *not* use "[...]" or any other placeholder, abbreviation, or summary to indicate omitted text.
    *   Do *not* paraphrase, reword, or otherwise alter the original wording.

2.  **HTML Structure:**
    *   Use the following HTML5 elements *semantically*:
        *   `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`: Headings.  Maintain the original document's heading hierarchy. *Do not skip heading levels.*
        *   `<p>`: Paragraphs.
        *   `<ul>`: Unordered lists.
        *   `<ol>`: Ordered lists.
        *   `<li>`: List items.
        *   `<section>`: Thematic groupings of content.  Use to represent sections and subsections within a module.
        *   `<article>`:  For self-contained compositions (use for the overall module).
        *   `<nav>`:  For navigation sections (top and bottom of each module).
        *   `<header>`:  For introductory content (module title, learning objectives).
        *   `<footer>`:  For footer content (can be used within modules and for the course overview).
        *   `<code>`:  For inline code snippets.
        *   `<pre>`:  For preformatted text, *especially* for code blocks.
        *   `<figure>` and `<figcaption>`:  For images and their captions.
        *   `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`:  For tables.  *Do not* use other elements to visually mimic tables; use proper table markup.
        *   `<form>`, `<input>`, `<textarea>`, `<select>`, `<option>`, `<button>`: For forms (if present in the OCR text). Preserve the original form's functionality and structure.
        *   `<strong>`: For strong emphasis (bold).
        *   `<em>`: For emphasized text (italic).
    *   Use ARIA attributes where appropriate to enhance accessibility (e.g., `role="navigation"`, `aria-label`, `aria-current`).

3.  **Module Splitting:**
    *   Follow these guidelines to divide the document into logical modules:
        *   **Chapters/Major Sections:** Each chapter or major section is a strong candidate for a new module.
        *   **Significant Topics:**  Major topics and subtopics that represent substantial shifts in concept can indicate module boundaries.
        *   **Concept Shift:** A new major concept, theory, or framework generally indicates a new module.
        *   **Learning Objective Boundaries:** Significant shifts in learning objectives suggest a new module.
        *   **Cognitive Load:**  Avoid overly long modules. Break down complex topics into smaller, digestible chunks (aim for 1.5-2 hours of estimated learning time per module).
        *   **"Better to Split Than Not":** When in doubt, create more, shorter modules.
        * **Keep together in the same file**: Directly related subtopics, Sequential procedures, Dependent concepts, and Complete processes.
        *   **Create New Module When**: New major concept starts, an Independent topic begins, and Different learning focus.

4.  **Navigation:**
    *   Implement navigation at *both* the top and bottom of *each* module page using this *exact* structure:

    ```html
    <nav class="module-nav">
      <div class="nav-links">
        <a href="../index.html" class="nav-button">
          <span>←</span> Home
        </a>
        <a href="previousModule.html" class="nav-button">
          <span>←</span> Previous
        </a>
        <div class="module-progress">
          <span>Module N of X</span>
        </div>
        <a href="nextModule.html" class="nav-button">
          Next <span>→</span>
        </a>
      </div>
    </nav>
    ```
    *   Replace `previousModule.html` and `nextModule.html` with the correct filenames.
    *   On the first module, the "Previous" link should be disabled (add the class `disabled` to the `<a>` tag).
    *   On the last module, the "Next" link should be disabled (add the class `disabled` to the `<a>` tag).
    *   `Module N of X` should be replaced with the correct module number and total number of modules.
5.  **Images:**
    *   For *each* image referenced in the OCR text:
        *   Create an `<img>` element.
        *   Use the correct *relative path* for the `src` attribute, following this pattern: `../assets/images/moduleN-descriptive-name.png` (or `.jpg`, `.svg`, etc., as appropriate).  *Do not use absolute paths.*
        *   Include a *detailed and descriptive* `alt` attribute that accurately explains the image's content and purpose. This is crucial for accessibility.
        *   Add `width` and `height` attributes with appropriate values.
        *   Wrap the `<img>` element within a `<figure>` element.
        *   Add a `<figcaption>` element *below* the image, providing a concise caption.  Use the format "Figure N: [Descriptive Caption]".
        * Use this naming convention: `moduleN-descriptive-name.extension` (e.g., `module1-computer-system-diagram.png`). All lowercase, hyphens to separate words, correct file extension.

6.  **Diagrams:**
     *   For diagrams, use this path structure:
        ```html
        <img src="../assets/diagrams/diagram-name.svg" alt="Descriptive alt text explaining diagram purpose" width="600" height="300">
        ```

7.  **Links:**
    *   **Internal Links:** If the OCR text refers to other sections *within the same document*, create HTML anchor links:
        *   Add an `id` attribute to the target heading (e.g., `<h2 id="section-introduction">Introduction</h2>`).
        *   Create an `<a>` tag with the `href` attribute pointing to that `id` (e.g., `<a href="#section-introduction">See the Introduction</a>`).
    *   **External Links:** If the OCR text refers to external websites:
        *   Create an `<a>` tag with the `href` attribute set to the full URL.
        *   Add `target="_blank"` to open the link in a new tab or window.
        *   Add `rel="noopener noreferrer"` for security.

8. **Summaries:**
   * Use bulleted or numbered point form.
   * Add Summary after every Topic.

9. **Metadata (`metadata.json`):**
    *   Create a `metadata.json` file in the `data/` directory.
    *   Include the following fields (and any others that are relevant):

    ```json
    {
      "courseTitle": "[Course Title]",
      "courseDescription": "[Course Description]",
      "author": "[Author Name]",
      "version": "[Version Number]",
      "creationDate": "[YYYY-MM-DD]",
      "modules": [
        {
          "title": "[Module 1 Title]",
          "description": "[Module 1 Description]",
          "filePath": "modules/module1.html"
        },
        {
          "title": "[Module 2 Title]",
          "description": "[Module 2 Description]",
          "filePath": "modules/module2.html"
        },
        ...
      ]
    }
    ```

10. **Output:**
    *   The output should consist *solely* of the valid, well-formed HTML5 representing the transcribed OCR text.
    *   Do *not* include *any* comments, explanations, processing notes, or other extraneous content *within* the generated HTML files.

11. **Permitted Adjustments**:
    *   Spelling/grammar fixes
    *   HTML formatting
    *   Visual layout optimization

12. **CSS Styles (`main.css`):**
    *  Use the styles from the provided protocol and expand as needed.

```css
.module-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 1rem 0;
  gap: 2rem;
}

.nav-links {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.nav-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-decoration: none;
  color: #333;
  background: #f5f5f5;
}

.nav-button:hover {
  background: #e5e5e5;
}

.module-progress {
  font-size: 0.9rem;
  color: #666;
}

    

IGNORE_WHEN_COPYING_START
Use code with caution.
IGNORE_WHEN_COPYING_END

    HTML Templates:
    Index.html Template

      
<!DOCTYPE html>
 <html lang="en">
 <head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>[Course Title]</title>
 <meta name="description" content="[Course Description]">
 <link rel="stylesheet" href="styles/main.css">
 </head>
 <body>
 <article class="course-overview">
     <header class="course-header">
     <h1>[Course Title]</h1>
     <div class="course-meta">
         <span class="duration">Duration: [X] hours</span>
         <span class="level">Level: [Beginner/Intermediate/Advanced]</span>
     </div>
     <section class="course-intro">
         <h2>Course Overview</h2>
         <p>[Course Description]</p>
     </section>
     <section class="learning-path">
         <h2>🎯 Course Objectives</h2>
         <ul>
         <li>[Specific Objective]</li>
         </ul>
     </section>
     </header>
     <nav class="module-list">
     <h2>Course Modules</h2>
     <ol>
         <li>
         <a href="modules/module1.html">
             <h3>[Module Title]</h3>
             <p>[Brief Description]</p>
             <span class="duration">[X] minutes</span>
         </a>
         </li>
     </ol>
     </nav>
     <footer class="course-footer">
     <section class="prerequisites">
         <h2>Prerequisites</h2>
         <ul>
         <li>[Requirement]</li>
         </ul>
     </section>
     </footer>
 </article>
 </body>
 </html>
 ```
 **Module Template**

 ```html
 <!DOCTYPE html>
 <html lang="en">
 <head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>[Module Title] - [Course Name]</title>
 <meta name="description" content="[Module Description]">
 <link rel="stylesheet" href="../styles/main.css">
 </head>
 <body>
 <article class="learning-module" data-module="N">
     <!-- Navigation structure here -->
     <header class="module-header">
     <h1>[Module Title]</h1>
     <section class="module-objectives">
         <h2>🎯 Learning Objectives</h2>
         <ul>
         <li>[Specific Objective]</li>
         </ul>
     </section>
     </header>
     <main class="module-content">
     <!-- Module content sections here -->
     </main>
     <footer class="module-footer">
     <!-- Module footer content here -->
     </footer>
 </article>
 </body>
 </html>
 ```

14. **Content Elements:**
**Visual Indicators**
 * 📚 Content
 * ✍️ Activities
 * 💡 Tips
 * ⚠️ Important
 * 🎯 Objectives
 * ⚡ Assessments
 * 📝 Summary
 * 🔍 Deep Dive
