# Enhanced HTML eLearning Module Generator Protocol

## 1. Core Mission
Transform academic documents into visually engaging HTML eLearning modules with 100% content preservation while maintaining the exact information hierarchy and semantic structure.

## 2. Content Preservation Directive
**All original content must be preserved with complete fidelity**. Every word, heading, paragraph, list item, and element must be included exactly as written in the source. No original text may be omitted, condensed, or rephrased.

## 3. Directory Structure

```
course_name/
├── index.html                # Course overview
├── modules/                  # Module files
│   ├── module1.html
│   ├── module2.html
│   └── module3.html
├── assets/                   # Media files
│   ├── images/
│   └── diagrams/
├── styles/                   # CSS files
│   └── main.css
└── data/                     # Course data
    └── metadata.json
```

## 4. Content Splitting Framework

### 4.1 Step-by-Step Content Splitting Process

#### Step 1: Analyze Document Structure
1. **Create a visual outline map**:
   - Identify all heading levels (H1, H2, H3, etc.)
   - Mark natural section breaks
   - Note content type transitions (theory → application, etc.)

2. **Estimate learning time for each section**:
   - Text content: ~200 words = 1 minute
   - Simple images: ~30 seconds each
   - Complex diagrams: ~1-2 minutes each
   - Activities/exercises: estimate actual completion time
   - Add 20% for navigation and reflection

3. **Identify knowledge dependencies**:
   - Draw arrows connecting related concepts
   - Highlight prerequisites for each section
   - Mark content that must stay together for comprehension

#### Step 2: Apply the Four-Part Module Test

For each potential module boundary, apply these four questions:

1. **Conceptual Completeness**
   - Does this section cover a complete concept or idea?
   - Can it stand alone as a learning unit?
   - Does it have a clear beginning, middle, and end?

2. **Time Appropriateness**
   - Is the estimated learning time appropriate (15-30 minutes is ideal)?
   - If longer than 30 minutes, can it be further divided?
   - If shorter than 10 minutes, should it be combined with related content?

3. **Independent Accessibility**
   - Can a learner return to this section later without being lost?
   - Does it make sense even if accessed somewhat out of sequence?
   - Does it contain sufficient context?

4. **Learning Objective Alignment**
   - Does the section align with specific learning objectives?
   - Does it serve a clear purpose in the overall learning journey?
   - Do the learning objectives change significantly after this section?

#### Step 3: Apply Content Splitting Strategies

**Content-Based Splitting:**
1. **Topic Boundaries**: Split at major topic transitions
2. **Complexity Transitions**: Split when content shifts from basic to advanced
3. **Theory-Practice Divisions**: Split theory sections from hands-on application

**Experience-Based Splitting:**
1. **Time Boundaries**: Split content into consistent time chunks (20-30 minutes)
2. **Cognitive Load Transitions**: Split when introducing many new concepts at once
3. **Attention Span Considerations**: Create natural breaks at points where attention might wane

### 4.2 Module Division Decision Chart

| When to Create a New Module | When to Keep Content in Same Module |
|-----------------------------|-------------------------------------|
| Major concept or topic shift | Directly related subtopics |
| Content exceeds 1.5-2 hours | Sequential procedures |
| Natural learning pauses | Dependent concepts |
| Learning objective changes | Complete processes |
| Content type changes | Short related items |

### 4.3 Dealing with Edge Cases

**For highly interconnected content:**
- Create a "progressive reveal" structure
- Include brief recaps at the beginning of each module
- Add cross-references between modules

**For long, indivisible sections:**
- Create main module + sub-modules structure
- Focus main module on core concepts
- Use sub-modules for examples and applications

**For very short but important topics:**
- Group related short topics together
- Expand with additional examples or activities
- Place at beginning/end of related modules

## 5. Module Creation Process

### 5.1 Content Mapping
- Create a detailed content map of the original document
- Process elements sequentially (top to bottom)
- Mark each element as processed only after verification

### 5.2 Content Implementation
- Transfer text content with exact fidelity
- Preserve all formatting (bold, italic, etc.)
- Maintain all list structures and sequences
- Include all images with standardized naming

### 5.3 Navigation Implementation
**Always implement identical navigation at both top and bottom of each module:**

```html
<nav class="module-nav">
  <div class="nav-links">
    <a href="../index.html" class="nav-button">
      <span class="nav-icon">←</span> 
      <span class="nav-text">Home</span>
    </a>
    <a href="previousModule.html" class="nav-button">
      <span class="nav-icon">←</span> 
      <span class="nav-text">Previous</span>
    </a>
    <div class="module-progress">
      <div class="progress-bar">
        <div class="progress-fill" style="width: 20%;"></div>
      </div>
      <span class="progress-text">Module N of X</span>
    </div>
    <a href="nextModule.html" class="nav-button">
      <span class="nav-text">Next</span> 
      <span class="nav-icon">→</span>
    </a>
  </div>
</nav>
```

## 6. Visual Enhancement Strategy

### 6.1 Layout Transformation

**Transform basic content into visually engaging layouts:**

```html
<!-- Basic boring content -->
<h2>Web Development Tools</h2>
<h3>Text Editors</h3>
<ul>
  <li>Visual Studio Code</li>
  <li>Sublime Text</li>
  <li>Atom</li>
</ul>

<!-- Visually enhanced content -->
<section class="content-section tools-section">
  <h2 class="section-heading">
    <span class="heading-icon">🛠️</span>
    <span class="heading-text">Web Development Tools</span>
  </h2>
  
  <div class="card-container">
    <div class="tool-card">
      <div class="tool-icon">📝</div>
      <h3 class="tool-heading">Text Editors</h3>
      <ul class="feature-list">
        <li><span class="highlight">Visual Studio Code</span> - Microsoft's powerful editor</li>
        <li><span class="highlight">Sublime Text</span> - Fast, lightweight editor</li>
        <li><span class="highlight">Atom</span> - GitHub's customizable editor</li>
      </ul>
    </div>
  </div>
</section>
```

### 6.2 Visual Hierarchy Enhancement

```html
<!-- Basic boring hierarchy -->
<h1>Introduction to Web Development</h1>
<p>Web development refers to the work involved in developing a website...</p>

<!-- Visually enhanced hierarchy -->
<header class="module-header">
  <div class="title-container">
    <span class="module-badge">Module 1</span>
    <h1 class="module-title">Introduction to Web Development</h1>
  </div>
  <div class="title-underline"></div>
  <p class="module-intro">Web development refers to the work involved in developing a website...</p>
</header>
```

## 7. Image Requirements

### 7.1 Image Implementation

```html
<!-- Basic image implementation -->
<img src="web_development_overview.jpg" alt="Web development overview">

<!-- Enhanced image implementation -->
<figure class="image-showcase">
  <div class="image-container with-frame">
    <img src="../assets/images/module1-web-development-overview.jpg" 
         alt="Web development overview showing front-end and back-end components"
         class="feature-image with-shadow"
         width="800" 
         height="500"
         loading="lazy">
    <div class="image-overlay">
      <div class="zoom-icon">🔍</div>
    </div>
  </div>
  <figcaption class="image-caption">
    <span class="caption-number">Figure 1:</span> 
    <span class="caption-text">Web Development Architecture Overview</span>
  </figcaption>
</figure>
```

### 7.2 Image Naming Convention
- All lowercase
- Use hyphens to separate words
- Include module number prefix
- Be descriptive and specific
- Example: `module2-client-server-diagram.png`

### 7.3 Image Requirements
- Correct relative path using ../assets/images/ for JPG/PNG or ../assets/diagrams/ for SVG
- Detailed descriptive alt text (15+ words recommended)
- Appropriate width and height attributes
- Loading="lazy" for performance optimization
- Appropriate CSS class for styling
- Proper figure wrapper with numbered figcaption

### 7.4 Image Types and Locations
- Place raster images (JPG, PNG) in the assets/images directory
- Place vector graphics (SVG) in the assets/diagrams directory
- Use JPG for photographs
- Use PNG for screenshots and interface elements
- Use SVG for diagrams, flowcharts, and technical illustrations

### 7.5 Image Accessibility Requirements
- Alt text must be comprehensive and descriptive
- Images must maintain appropriate contrast ratios
- Purely decorative images should use alt=""
- Complex diagrams should have additional textual explanations

## 8. HTML Templates

### 8.1 Index.html Template
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Course Title]</title>
  <meta name="description" content="[Course Description]">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles/main.css">
</head>
<body>
  <div class="container">
    <article class="course-overview">
      <header class="course-header">
        <div class="course-title-container">
          <span class="course-badge">eLearning Course</span>
          <h1 class="course-title">[Course Title]</h1>
        </div>
        <div class="title-underline"></div>
        <div class="course-meta">
          <span class="meta-item"><span class="meta-icon">⏱️</span> Duration: [X] hours</span>
          <span class="meta-item"><span class="meta-icon">📊</span> Level: [Beginner/Intermediate/Advanced]</span>
        </div>
        <section class="course-intro">
          <h2 class="section-heading">Course Overview</h2>
          <p class="intro-text">[Course Description]</p>
        </section>
        <section class="learning-path">
          <h2 class="section-heading">
            <span class="heading-icon">🎯</span>
            <span class="heading-text">Course Objectives</span>
          </h2>
          <ul class="objectives-list">
            <li class="objective-item">[Specific Objective]</li>
          </ul>
        </section>
      </header>
      <nav class="module-list">
        <h2 class="section-heading">Course Modules</h2>
        <div class="modules-container">
          <a href="modules/module1.html" class="module-card">
            <span class="module-number">01</span>
            <div class="module-content">
              <h3 class="module-title">[Module Title]</h3>
              <p class="module-description">[Brief Description]</p>
              <span class="module-duration"><span class="duration-icon">⏱️</span> [X] minutes</span>
            </div>
            <span class="card-arrow">→</span>
          </a>
        </div>
      </nav>
    </article>
  </div>
</body>
</html>
```

### 8.2 Module Template
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Module Title] - [Course Name]</title>
  <meta name="description" content="[Module Description]">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../styles/main.css">
</head>
<body>
  <div class="container">
    <article class="learning-module" data-module="N">
      <!-- Navigation (top) -->
      <nav class="module-nav">
        <div class="nav-links">
          <a href="../index.html" class="nav-button">
            <span class="nav-icon">←</span> 
            <span class="nav-text">Home</span>
          </a>
          <a href="previousModule.html" class="nav-button">
            <span class="nav-icon">←</span> 
            <span class="nav-text">Previous</span>
          </a>
          <div class="module-progress">
            <div class="progress-bar">
              <div class="progress-fill" style="width: 20%;"></div>
            </div>
            <span class="progress-text">Module N of X</span>
          </div>
          <a href="nextModule.html" class="nav-button">
            <span class="nav-text">Next</span> 
            <span class="nav-icon">→</span>
          </a>
        </div>
      </nav>
      
      <header class="module-header">
        <div class="title-container">
          <span class="module-badge">Module N</span>
          <h1 class="module-title">[Module Title]</h1>
        </div>
        <div class="title-underline"></div>
        <section class="module-objectives">
          <h2 class="section-heading">
            <span class="heading-icon">🎯</span>
            <span class="heading-text">Learning Objectives</span>
          </h2>
          <ul class="objectives-list">
            <li class="objective-item">[Specific Objective]</li>
          </ul>
        </section>
      </header>
      
      <main class="module-content">
        <!-- Module content sections here -->
      </main>
      
      <!-- Navigation (bottom - identical to top) -->
    </article>
  </div>
</body>
</html>
```

## 9. Visual Indicators and Content Elements

### 9.1 Content Type Indicators
- 📚 Content
- ✍️ Activities
- 💡 Tips
- ⚠️ Important
- 🎯 Objectives
- ⚡ Assessments
- 📝 Summary
- 🖼️ Figure Reference
- 🔍 Deep Dive
- 🔗 External Resource
- 📊 Data Visualization
- 🎬 Video Content

### 9.2 Visual Indicator Implementation

```html
<!-- Basic implementation -->
<h4>Tip: Using Browser Developer Tools</h4>
<p>Most modern browsers include powerful developer tools...</p>

<!-- Enhanced implementation -->
<div class="content-block tip-block">
  <div class="block-header">
    <span class="block-icon">💡</span>
    <h4 class="block-title">Tip: Using Browser Developer Tools</h4>
  </div>
  <div class="block-content">
    <p>Most modern browsers include powerful developer tools that allow you to inspect 
       and debug your HTML, CSS, and JavaScript directly in the browser.</p>
  </div>
</div>
```

### 9.3 Content Cards Implementation

```html
<!-- Basic content -->
<h3>Front-End Development</h3>
<p>Front-end web development, also known as client-side development...</p>

<!-- Enhanced content card -->
<div class="content-card frontend-card">
  <div class="card-header">
    <div class="card-icon">
      <span class="tech-icon">🌐</span>
    </div>
    <h3 class="card-title">Front-End Development</h3>
  </div>
  <div class="card-body">
    <p>Front-end web development, also known as client-side development...</p>
  </div>
  <div class="card-footer">
    <span class="tag">HTML</span>
    <span class="tag">CSS</span>
    <span class="tag">JavaScript</span>
  </div>
</div>
```

## 10. Summary Creation

### 10.1 Summary Guidelines
- Place at the end of each significant section
- Format as bulleted or numbered points
- Include only information from original content
- Mark with visual indicator (📝 Summary)
- Position at logical section endpoints

### 10.2 Enhanced Summary Implementation

```html
<!-- Basic or missing summary -->
<!-- No summary section -->

<!-- Enhanced summary implementation -->
<section class="summary-section">
  <div class="summary-container">
    <div class="summary-header">
      <span class="summary-icon">📝</span>
      <h3 class="summary-title">Key Takeaways</h3>
    </div>
    <div class="summary-content">
      <ul class="takeaway-list">
        <li class="takeaway-item">
          <span class="takeaway-marker">01</span>
          <p>Web development involves creating websites and web applications</p>
        </li>
        <li class="takeaway-item">
          <span class="takeaway-marker">02</span>
          <p>Front-end development focuses on client-side interfaces using HTML, CSS, and JavaScript</p>
        </li>
        <li class="takeaway-item">
          <span class="takeaway-marker">03</span>
          <p>Back-end development handles server-side logic and databases</p>
        </li>
        <li class="takeaway-item">
          <span class="takeaway-marker">04</span>
          <p>A structured workflow enhances development efficiency</p>
        </li>
      </ul>
    </div>
  </div>
</section>
```

## 11. Verification Process

### 11.1 Multi-Stage Verification
1. **First Pass:** Direct side-by-side comparison of source and HTML output
2. **Second Pass:** Read-aloud verification comparing both documents
3. **Third Pass:** Heading-by-heading structure verification
4. **Final Pass:** Complete visual inspection of rendered HTML

### 11.2 Content Verification Checklist
- ✓ All original headings present at correct levels
- ✓ All paragraphs included with identical text
- ✓ All lists complete with correct item count and sequence
- ✓ All special elements preserved
- ✓ Added summary sections clearly marked
- ✓ Navigation implemented identically at top and bottom

### 11.3 Image Verification Checklist
- ✓ All images follow naming convention
- ✓ All images have appropriate width and height attributes
- ✓ All images have detailed, descriptive alt text
- ✓ SVG diagrams placed in the correct assets/diagrams directory
- ✓ JPG/PNG images placed in the correct assets/images directory
- ✓ All images have proper figcaptions
- ✓ Images are appropriately sized and optimized for web
- ✓ All images have lazy loading enabled for performance

### 11.4 Technical Verification Checklist
- ✓ HTML structure follows template guidelines
- ✓ CSS properly linked
- ✓ All internal links are functional
- ✓ Document validates without HTML errors
- ✓ Document meets WCAG 2.1 AA accessibility standards
- ✓ All images have appropriate contrast ratios
- ✓ Sequential figure numbering is correct
- ✓ Images enhance rather than duplicate content

### 11.5 Visual Enhancement Verification
- ✓ Consistent visual styling applied throughout
- ✓ Card-based layouts implemented where appropriate
- ✓ Visual indicators consistently applied
- ✓ Color contrast meets accessibility standards
- ✓ Responsive design functions across device sizes
- ✓ Summary sections added to all major content blocks
- ✓ Interactive elements work as expected

## 12. CSS Styles

```css
/* Modern Color Palette */
:root {
  --primary: #4361ee;
  --primary-light: #4895ef;
  --secondary: #3f37c9;
  --accent: #f72585;
  --text-dark: #2b2d42;
  --text-light: #8d99ae;
  --background: #ffffff;
  --background-alt: #f8f9fa;
  --card-bg: #ffffff;
  --border-light: #e9ecef;
  --success: #4cc9f0;
  --warning: #f77f00;
}

/* Base Typography Improvements */
body {
  font-family: 'Inter', 'Segoe UI', Roboto, sans-serif;
  line-height: 1.7;
  color: var(--text-dark);
  background-color: var(--background);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 0.8em;
  color: var(--text-dark);
}

h1 {
  font-size: 2.5rem;
  margin-top: 0;
}

h2 {
  font-size: 1.8rem;
  position: relative;
}

h3 {
  font-size: 1.4rem;
}

p {
  margin-bottom: 1.5rem;
  font-size: 1.05rem;
}

/* Enhanced Module Header */
.module-header {
  padding: 2rem 0;
  margin-bottom: 3rem;
  position: relative;
}

.title-container {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.module-badge {
  background-color: var(--primary);
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-right: 1rem;
}

.module-title {
  margin: 0;
  color: var(--text-dark);
}

.title-underline {
  height: 4px;
  width: 100px;
  background: linear-gradient(to right, var(--primary), var(--accent));
  margin-bottom: 1.5rem;
  border-radius: 2px;
}

.module-intro {
  font-size: 1.2rem;
  color: var(--text-light);
  max-width: 80%;
}

/* Enhanced Section Headings */
.section-heading {
  display: flex;
  align-items: center;
  margin: 2.5rem 0 1.5rem;
}

.heading-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-right: 1rem;
  background-color: var(--primary-light);
  color: white;
  border-radius: 50%;
  font-size: 1.2rem;
}

.heading-text {
  margin: 0;
}

/* Content Cards */
.content-card {
  background-color: var(--card-bg);
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-bottom: 2rem;
}

.content-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
}

.card-header {
  padding: 1.5rem;
  background-color: var(--background-alt);
  border-bottom: 1px solid var(--border-light);
  display: flex;
  align-items: center;
}

.card-icon {
  width: 48px;
  height: 48px;
  background-color: rgba(67, 97, 238, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
}

.tech-icon {
  font-size: 1.5rem;
}

.card-title {
  margin: 0;
  font-size: 1.4rem;
}

.card-body {
  padding: 1.5rem;
}

.card-footer {
  padding: 1rem 1.5rem;
  border-top: 1px solid var(--border-light);
  display: flex;
  gap: 0.5rem;
}

.tag {
  padding: 0.3rem 0.8rem;
  background-color: rgba(67, 97, 238, 0.1);
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--primary);
}

/* Enhanced Navigation */
.module-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 1.5rem 0;
  background-color: var(--background-alt);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  max-width: 800px;
}

.nav-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  border: 1px solid var(--border-light);
  border-radius: 8px;
  text-decoration: none;
  color: var(--text-dark);
  background: var(--card-bg);
  font-weight: 500;
  transition: all 0.2s ease;
}

.nav-button:hover {
  background: var(--background-alt);
  border-color: var(--primary-light);
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.module-progress {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.progress-bar {
  width: 100px;
  height: 6px;
  background: var(--border-light);
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: var(--primary);
  border-radius: 3px;
}

.progress-text {
  font-size: 0.85rem;
  color: var(--text-light);
}

/* Image Enhancements */
.image-showcase {
  margin: 2.5rem 0;
}

.image-container {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
}

.with-frame {
  padding: 10px;
  background-color: white;
  border: 1px solid var(--border-light);
}

.feature-image {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.with-shadow {
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-container:hover .image-overlay {
  opacity: 1;
}

.zoom-icon {
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.image-caption {
  margin-top: 1rem;
  text-align: center;
  font-style: italic;
  color: var(--text-light);
}

.caption-number {
  font-weight: 700;
  color: var(--primary);
}

/* Content Blocks */
.content-block {
  margin: 2rem 0;
  padding: 1.5rem;
  border-radius: 12px;
  background-color: var(--background-alt);
}

.block-header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.block-icon {
  font-size: 1.5rem;
  margin-right: 0.8rem;
}

.block-title {
  margin: 0;
}

.tip-block {
  background-color: rgba(76, 201, 240, 0.1);
  border-left: 4px solid var(--success);
}

.important-block {
  background-color: rgba(247, 127, 0, 0.1);
  border-left: 4px solid var(--warning);
}

/* Summary Section Enhancement */
.summary-section {
  margin: 3rem 0;
  padding: 2rem 0;
}

.summary-container {
  background-color: var(--background-alt);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.05);
  border-left: 6px solid var(--success);
}

.summary-header {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.summary-icon {
  font-size: 1.8rem;
  margin-right: 1rem;
}

.summary-title {
  margin: 0;
  font-size: 1.6rem;
}

.takeaway-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.takeaway-item {
  display: flex;
  margin-bottom: 1.2rem;
  padding-bottom: 1.2rem;
  border-bottom: 1px dashed var(--border-light);
}

.takeaway-item:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.takeaway-marker {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;
  background-color: rgba(76, 201, 240, 0.1);
  color: var(--success);
  font-weight: 700;
  border-radius: 50%;
  margin-right: 1rem;
}

.takeaway-item p {
  margin: 0;
}

/* Module List Enhancement */
.modules-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.module-card {
  display: flex;
  align-items: center;
  background-color: var(--card-bg);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
  text-decoration: none;
  color: var(--text-dark);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-left: 5px solid var(--primary);
}

.module-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
}

.module-number {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primary);
  margin-right: 1rem;
}

.module-content {
  flex: 1;
}

.module-title {
  margin: 0 0 0.5rem;
  font-size: 1.3rem;
}

.module-description {
  margin: 0 0 0.8rem;
  color: var(--text-light);
  font-size: 0.95rem;
}

.module-duration {
  display: flex;
  align-items: center;
  font-size: 0.85rem;
  color: var(--text-light);
}

.duration-icon {
  margin-right: 0.3rem;
}

.card-arrow {
  font-size: 1.5rem;
  color: var(--primary);
  opacity: 0.5;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.module-card:hover .card-arrow {
  opacity: 1;
  transform: translateX(5px);
}

/* Accessibility and responsive design */
@media (max-width: 768px) {
  h1 { font-size: 2rem; }
  h2 { font-size: 1.6rem; }
  h3 { font-size: 1.3rem; }
  
  .title-container {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .module-badge {
    margin-bottom: 0.5rem;
  }
  
  .nav-links {
    flex-direction: column;
    gap: 1rem;
  }
  
  .modules-container {
    grid-template-columns: 1fr;
  }
  
  .takeaway-item {
    flex-direction: column;
  }
  
  .takeaway-marker {
    margin-bottom: 0.5rem;
  }
  
  .module-intro {
    max-width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

@media print {
  .module-nav {
    display: none;
  }
  
  body {
    color: black;
  }
  
  a {
    color: black;
    text-decoration: underline;
  }
  
  .content-image {
    max-width: 500px;
    page-break-inside: avoid;
  }
}
