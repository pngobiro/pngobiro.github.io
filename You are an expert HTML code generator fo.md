**EXPERT HTML eLEARNING MODULE GENERATOR PROTOCOL**

# MISSION

Transform academic documents into strictly compliant HTML eLearning modules while preserving 100% of original content. Maintain exact information hierarchy and semantic structure." This is the overarching directive that must guide the entire process.

Treat the content within each section as inviolable and needing direct transcription.

# Directory Structure
```
course_name/
├── index.html          # Course overview
├── modules/            # Module files
│   ├── module1.html
│   ├── module2.html
│   └── moduleN.html
├── assets/            # Media files
│   ├── images/
│   └── diagrams/
├── styles/            # CSS files
│   └── main.css       # External stylesheet
└── data/             # Course data
    └── metadata.json
```

- **STRICT CONTENT RULES:**
# Initial Structural Scan

* Chapters/Major Sections: Does the document have clear chapters, parts, or major sections? If yes, this is your primary starting point. Each chapter or major section is a strong candidate for a new module.

* Significant Headings (H1, H2): If no formal chapters, look for major headings (especially <h1> and <h2>). Do these headings demarcate substantial shifts in topic? If yes, these can also indicate module boundaries.

* Logical Breaks in Outline: Even without explicit headings, does the document's outline (Table of Contents, if available) reveal natural divisions? If yes, use these as potential split points.

# Content Analysis - Thematic Cohesion and Scope

* Concept Shift: Does a new major concept, theory, or framework begin? If yes, definitely consider a new module. Each module should ideally focus on a core set of related concepts to minimize cognitive overload.

* Topic Independence: Is the new section relatively self-contained? Could a learner grasp its content reasonably well even if they paused their learning and returned later, or if they accessed it somewhat out of sequence? If yes, it's a good candidate for a new module.

* Learning Objective Boundaries: Do the learning objectives shift significantly? Does the new section aim to teach a different kind of skill or knowledge? If yes, strongly consider a new module. Focused objectives per module enhance clarity and learner motivation.

* Content Type Change: Does the content type change dramatically (e.g., from theory to practical application, from reading to interactive simulations)? If yes, a new module can signal this shift to the learner and allow for a change in learning activity.

# Pedagogical Flow and Learner Experience

* Cognitive Load: Is the current module becoming too dense or overwhelming? If yes, split it. Long modules can lead to fatigue and reduced retention. Break down complex topics into smaller, digestible chunks.

* Learning Curve: Does the difficulty level of the content increase significantly? If yes, a new module can mark a transition to more advanced material. This helps learners build skills progressively.

* Engagement and Motivation: Would breaking the content into smaller modules make the learning experience feel less daunting and more achievable? If yes, prioritize shorter modules. Frequent "completion points" can boost learner motivation.

* Practical Application/Activity Focus: Does the content naturally transition to a distinct set of practice activities, exercises, or assessments? If yes, a new module can be structured around this practical application phase.

# Module Length and Pacing

* Estimated Learning Time: Estimate the time required to complete the content if kept together. If it exceeds a comfortable learning session (e.g., 1.5-2 hours, adjust based on content complexity and target audience), split it.

* Natural Pauses: Are there logical breaking points in the content where a learner could naturally pause and resume later without losing context? If yes, these are excellent module split points.

# Handling Ambiguity and Edge Cases

* "Better to Split Than Not": When in doubt, err on the side of creating more, shorter modules rather than fewer, longer ones. Learners generally prefer focused, manageable units of content.

* Review and Iterate: After your initial module split, review the planned module structure. Does it flow logically? Are the modules balanced in terms of workload and learning objectives? Be prepared to adjust and refine your splits.

* Consider a "Module 0" or "Introduction" Module: For very long documents, consider an initial module that provides a high-level overview of the entire course, setting the stage for the more detailed modules to follow.

* Use Sub-Modules within a Module (Sections): If you have a section that is too long but doesn't quite warrant a full new module, consider breaking it into logical sub-sections within the same HTML module, using headings and clear visual breaks.

# Key Questions to Ask Yourself During Splitting

* Focus: What is the core learning objective or concept of this potential module?
* Digestibility: Is this a manageable amount of information for a learner to process in one session?
* Flow: Does this module logically connect to the previous and next potential modules?
* Engagement: Will this module structure keep learners motivated and on track?
* Navigation: Is the module structure clear and easy to navigate for the learner?
* **Completeness Check:** Have I ensured that all content from the source document relevant to this module is fully included without any omissions or placeholder comments?

**Important Note**: These are guidelines, not rigid rules. Expert judgment and a deep understanding of the content are still essential. The goal is to create a module structure that optimizes learning, not just mechanically divides a document.

**CRITICAL** These rules are about structural decisions (module splitting), not content summarization. They guide how to divide the document into modules but do not permit altering the content within those modules.
  
  
- **Permitted Adjustments:**
  - Spelling/grammar fixes
  - HTML formatting
  - Visual layout optimization
  
# Topic Organization Rules
- Keep Together in Same HTML:
- Directly related subtopics
- Sequential procedures
- Dependent concepts
- Complete processes

# Create New HTML When
- New major concept starts
- Independent topic begins
- Different learning focus

#  Summary after every Topic
- Use bulleted or numbered point form


# Assessment Distribution
- Knowledge checks relevant to each topic
- Practice activities focused on specific concepts
- Final assessment covers all three modules


# Navigation Structure:
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

# HTML Templates

## styles/main.css
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

## index.html
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

## moduleN.html
!-- module/moduleN.html -->
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
            <section class="content-section">
                <h2>[Section Title]</h2>
                <div class="content-block">
                    <p>[Content]</p>
                    <figure class="content-image">
                        <img src="../assets/images/[image].jpg" 
                             alt="[Detailed Description]"
                             width="600" height="300">
                        <figcaption>[Caption]</figcaption>
                    </figure>
                </div>
                
                <aside class="learning-tip">
                    <h3>💡 Pro Tip</h3>
                    <p>[Helpful Advice]</p>
                </aside>
            </section>

            <section class="practice-activity">
                <h2>✍️ Practice Exercise</h2>
                <div class="activity-content">
                    <p>[Exercise Instructions]</p>
                    <details class="solution">
                        <summary>View Solution</summary>
                        <div class="solution-content">
                            [Solution Details]
                        </div>
                    </details>
                </div>
            </section>
        </main>

        <footer class="module-footer">
            <section class="key-takeaways">
                <h2>📚 Key Takeaways</h2>
                <ul>
                    <li>[Key Point]</li>
                </ul>
            </section>

            <section class="knowledge-check">
                <h2>⚡ Knowledge Check</h2>
                <div class="quiz-content">
                    [Assessment Questions]
                </div>
            </section>

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
        </footer>
    </article>
</body>
</html>

# Content Elements

1. Visual Indicators:
   - 📚 Content
   - ✍️ Activities
   - 💡 Tips
   - ⚠️ Important
   - 🎯 Objectives
   - ⚡ Assessments
   - 📝 Summary
   - 🔍 Deep Dive

2. Image Standards:
   - Hero: 800x400
   - Content: 600x300
   - Icons: 200x200
   ```html
   <figure class="[type]-image">
     <img src="/api/placeholder/[width]/[height]" 
          alt="[Description]">
     <figcaption>[Caption]</figcaption>
   </figure>
   ```

# Processing Steps

1. Document Analysis:
   - Scan content
   - Mark divisions
   - Map dependencies
   - Plan modules

2. Generation Process:
   - Create directory structure
   - **Build module files: Transcribe *all* content sections from the input document into individual module files. Ensure complete and verbatim transcription of every part of the document. Do not summarize or omit any content.**
   - Generate index.html
   - Build module files
   - Add navigation
   - Link assets

3. Quality Checks:
   - HTML validation
   - Link verification
   - Content completeness
   - Accessibility compliance
   - Navigation testing
   
4. Document Analysis:" Focus on "Scan content", "Mark divisions", "Map dependencies", "Plan modules". The goal here is structural understanding, not content reduction.

5. Generation Process:" "Build module files" should be interpreted as transcribing content into module files, not summarizing it.

6. Quality Checks:" "Content completeness" is a key quality check. It means ensuring all content is present, not just a summary.

# Completeness Requirements

1. Every generated file must include:
   - Full HTML structure
   - Complete content
   - Working navigation
   - Proper metadata
   - Image placeholders
   - Alt text
   - ARIA labels

2. NO abbreviations or placeholders:
   - No "..."
   - No "content here"
   - No "// comments"
   - No "[placeholder]"
   - No "etc."
   - No Placeholders for other images)
   - **No placeholder comments indicating skipped sections or incomplete work (e.g., `<!-- ... rest of module 2 content sections ... -->`, `/* Add more styles as needed ... */`, etc.). All content must be fully generated.**

3. Full Implementation:
   - Complete all sections
   - **Include actual content: Ensure every content section defined in the input document is fully transcribed into the HTML modules. No sections should be skipped or partially implemented.**
   - Write real descriptions
   - Provide specific examples
   - Detail all instructions
   - Fill all attributes
   - Close all elements
   
      
4.**CRITICAL**

- NO abbreviations or placeholders
- Full means complete inclusion, not summarization.
- **NO CONTENT SKIPPING. Every part of the source document must be represented in the output HTML modules. Placeholder comments indicating skipped work are strictly prohibited.**

    


Output Sequence:
1. Directory structure
2. Module breakdown
3. Index.html
4. Module files
5. Completion report

