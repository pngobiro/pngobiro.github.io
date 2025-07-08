# Expert HTML eLearning Module Generator Protocol

## Introduction

This document outlines the comprehensive protocol for converting educational course materials into structured HTML eLearning modules. This digitization effort serves a critical academic purpose: to transform existing curriculum notes into standardized digital modules that will be used for student examination and assessment.

### Important Notice for Implementation

**STRICT CURRICULUM ADHERENCE REQUIRED**

The digitization process must follow these essential guidelines:

1. **Exact Content Preservation**: All content must be preserved with 100% fidelity to the original curriculum materials. The system will strictly follow the provided content without injecting any external knowledge, interpretations, or additions.

2. **Assessment Purpose**: These modules will be used directly for student examination. Any deviation from the original curriculum materials could potentially compromise the assessment validity.

3. **Content Integrity**: The integrity of the educational materials must be maintained precisely as provided. The conversion process is limited to formatting, structure, and organization - not content modification.

4. **No Knowledge Injection**: The conversion system is explicitly prohibited from supplementing, enhancing, or modifying the curriculum with external knowledge, even when such additions might seem beneficial or clarifying.

## Mission

Transform academic documents into strictly compliant HTML eLearning modules while preserving 100% of original content. Maintain exact information hierarchy and semantic structure. This is the overarching directive that must guide the entire process.

Treat the content within each section as inviolable and needing direct transcription.

## Directory Structure

```
course_name/
├── index.html                    # Course overview
├── modules/                      # Module files
│   ├── module1.html              # Module Structure and Content Rules
│   ├── module2.html              # HTML Templates and Navigation
│   ├── module3.html              # Content Elements and Visual Standards
│   └── module4.html              # Processing Steps and Quality Assurance
├── assets/                       # Media files
│   ├── images/
│   │   ├── module1-directory-structure-diagram.png
│   │   ├── module1-structural-scan-example.png
│   │   ├── module1-related-topics-diagram.png
│   │   └── module2-navigation-structure-example.png
│   └── diagrams/
│       └── course-structure-diagram.svg
├── styles/                       # CSS files
│   └── main.css                  # External stylesheet
└── data/                         # Course data
    └── metadata.json             # Course metadata
```

# When converting content to HTML eLearning modules:

1. ALWAYS implement navigation at BOTH the top AND bottom of each module page using this structure:
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

2. For ALL images, include the full relative path to the image location in the assets directory, following this pattern:
```html
<img src="../assets/images/moduleN-descriptive-name.png" alt="Descriptive alt text explaining image content" width="600" height="300">
```

3. For diagrams, use this path structure:
```html
<img src="../assets/diagrams/diagram-name.svg" alt="Descriptive alt text explaining diagram purpose" width="600" height="300">
```

4. All navigation must be implemented identically at both top and bottom of each module for consistent user experience.

5. Every image must have:
   - Correct relative path using ../assets/images/ or ../assets/diagrams/
   - Descriptive alt text
   - Appropriate width and height attributes
   - Filename following module-specific naming conventions (moduleN-purpose-description.extension)

## Strict Content Rules

### Initial Structural Scan

* **Chapters/Major Sections**: Does the document have clear chapters, parts, or major sections? If yes, this is your primary starting point. Each chapter or major section is a strong candidate for a new module.

* **Significant Topics and Subtopics**: If no formal chapters, look for major Topic and subtopics. Do these demarcate substantial shifts in concept? If yes, these can also indicate module boundaries.

* **Logical Breaks in Outline**: Even without explicit headings, does the document's outline (Table of Contents, if available) reveal natural divisions? If yes, use these as potential split points.

### Content Analysis - Thematic Cohesion and Scope

* **Concept Shift**: Does a new major concept, theory, or framework begin? If yes, definitely consider a new module. Each module should ideally focus on a core set of related concepts to minimize cognitive overload.

* **Topic Independence**: Is the new section relatively self-contained? Could a learner grasp its content reasonably well even if they paused their learning and returned later, or if they accessed it somewhat out of sequence? If yes, it's a good candidate for a new module.

* **Learning Objective Boundaries**: Do the learning objectives shift significantly? Does the new section aim to teach a different kind of skill or knowledge? If yes, strongly consider a new module. Focused objectives per module enhance clarity and learner motivation.

* **Content Type Change**: Does the content type change dramatically (e.g., from theory to practical application, from reading to interactive simulations)? If yes, a new module can signal this shift to the learner and allow for a change in learning activity.

### Pedagogical Flow and Learner Experience

* **Cognitive Load**: Is the current module becoming too dense or overwhelming? If yes, split it. Long modules can lead to fatigue and reduced retention. Break down complex topics into smaller, digestible chunks (VERY IMPORTANT)

* **Learning Curve**: Does the difficulty level of the content increase significantly? If yes, a new module can mark a transition to more advanced material. This helps learners build skills progressively.

* **Engagement and Motivation**: Would breaking the content into smaller modules make the learning experience feel less daunting and more achievable? If yes, prioritize shorter modules. Frequent "completion points" can boost learner motivation.

* **Practical Application/Activity Focus**: Does the content naturally transition to a distinct set of practice activities, exercises, or assessments? If yes, a new module can be structured around this practical application phase.

### Module Length and Pacing

* **Estimated Learning Time**: Estimate the time required to complete the content if kept together. If it exceeds a comfortable learning session (e.g., 1.5-2 hours, adjust based on content complexity and target audience), split it.

* **Natural Pauses**: Are there logical breaking points in the content where a learner could naturally pause and resume later without losing context? If yes, these are excellent module split points.

### Handling Ambiguity and Edge Cases

* **"Better to Split Than Not"**: When in doubt, err on the side of creating more, shorter modules rather than fewer, longer ones. Learners generally prefer focused, manageable units of content.

* **Review and Iterate**: After your initial module split, review the planned module structure. Does it flow logically? Are the modules balanced in terms of workload and learning objectives? Be prepared to adjust and refine your splits.

* **Consider a "Module 0" or "Introduction" Module**: For very long documents, consider an initial module that provides a high-level overview of the entire course, setting the stage for the more detailed modules to follow.

* **Use Sub-Modules within a Module (Sections)**: If you have a section that is too long but doesn't quite warrant a full new module, consider breaking it into logical sub-sections within the same HTML module, using headings and clear visual breaks.

### Key Questions to Ask Yourself During Splitting

* **Focus**: What is the core learning objective or concept of this potential module?
* **Digestibility**: Is this a manageable amount of information for a learner to process in one session?
* **Flow**: Does this module logically connect to the previous and next potential modules?
* **Engagement**: Will this module structure keep learners motivated and on track?
* **Navigation**: Is the module structure clear and easy to navigate for the learner?
* **Completeness Check**: Have I ensured that all content from the source document relevant to this module is fully included without any omissions or placeholder comments?

**Important Note**: These are guidelines, not rigid rules. Expert judgment and a deep understanding of the content are still essential. The goal is to create a module structure that optimizes learning, not just mechanically divides a document.

**CRITICAL**: These rules are about structural decisions (module splitting), not content summarization. They guide how to divide the document into modules but do not permit altering the content within those modules.

## Permitted Adjustments

* Spelling/grammar fixes
* HTML formatting
* Visual layout optimization

## Topic Organization Rules

### Keep Together in Same HTML
* Directly related subtopics
* Sequential procedures
* Dependent concepts
* Complete processes

### Create New HTML When
* New major concept starts
* Independent topic begins
* Different learning focus

### Summary after every Topic
* Use bulleted or numbered point form

## Assessment Distribution
* Knowledge checks relevant to each topic
* Practice activities focused on specific concepts
* Final assessment covers all three modules

## Navigation Structure

```html
<nav class="module-nav">
  <div class="nav-links">
    <a href="../index.html" class="nav-button">
      <span>←</span> Home
    </a>
    <a href="moduleN-1.html" class="nav-button">
      <span>←</span> Previous
    </a>
    <div class="module-progress">
      <span>Module N of X</span>
    </div>
    <a href="moduleN+1.html" class="nav-button">
      Next <span>→</span>
    </a>
  </div>
</nav>
```

### CSS Styles

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
```

## HTML Templates

### Index.html Template

```html
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

### Module Template

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

## Content Elements

### Visual Indicators

* 📚 Content
* ✍️ Activities
* 💡 Tips
* ⚠️ Important
* 🎯 Objectives
* ⚡ Assessments
* 📝 Summary
* 🔍 Deep Dive

### Image Naming Conventions

**Purpose:** To establish a clear and consistent system for naming image and diagram files within the eLearning module. Consistent naming improves project organization, maintainability, and ease of asset management.

**Guidelines:**

* **Descriptive and Meaningful:** Image filenames MUST be descriptive and clearly indicate the content of the image. Avoid generic names like "image1.jpg" or "diagram.png". Instead, use names that are easily understood and searchable. For example, "module2-client-server-diagram.png" is better than "diagram1.png".

* **Lowercase:** All filenames MUST be in lowercase. This ensures compatibility across different web servers and operating systems, especially Linux-based servers which are case-sensitive.

* **Use Hyphens or Underscores:** Separate words in filenames using hyphens (-) or underscores (_). Do NOT use spaces. Hyphens are generally preferred for readability in URLs. Example: "module3-html-structure.png" or "module4_dreamweaver_interface.jpg".

* **File Extension:** Always use the correct and consistent file extension (e.g., `.png`, `.jpg`, `.jpeg`, `.gif`, `.svg`). Choose the extension appropriate for the image type (e.g., `.png` for diagrams and illustrations, `.jpg` for photographs).

* **Module Prefix (Recommended):** Consider prefixing filenames with the module number or a module identifier to easily associate images with their respective modules. Example: `module1-internet-programming-hero.jpg`, `module3-html-table-example.png`.

* **Consistency is Key:** Maintain a consistent naming convention throughout the entire course. Once you choose a style (e.g., hyphen vs. underscore, module prefix), stick with it.

**Examples of Good Image Names:**

* `module2-client-server-diagram.png` (Diagram illustrating client-server interaction in Module 2)
* `module3-html-structure-example.jpg` (Example image for HTML structure in Module 3)
* `module4-dreamweaver-toolbar-icon.png` (Icon of a specific tool in Adobe Dreamweaver, Module 4)
* `topic1-website-benefits-icon.svg` (Icon representing benefits of a website for Topic 1)

**Examples of Bad Image Names (Avoid These):**

* `image1.jpg` (Too generic, doesn't describe content)
* `Diagram.PNG` (Uppercase, inconsistent extension)
* `client server diagram.png` (Spaces in filename)
* `IMG0001.JPG` (Uninformative, automatically generated name)
* `module_image.png` (Not specific enough)

**Enforcement:**

* **Image Completeness Check (Quality Checks Section):** The Quality Checks section will now explicitly include a check for "Image Filename Compliance" to ensure that all image filenames adhere to these naming conventions.
* **Completeness Requirements:** The "Completeness Requirements" section will require verification that all image filenames follow the established conventions before the module is considered complete.
