# PDF to HTML Conversion System Prompt (v10.0) - Enhanced Design Edition

**Version:** 10.0  
**Last Updated:** February 4, 2026  
**Focus:** Superior UI/UX with advanced styling patterns, layout optimization, 100% content fidelity, and comprehensive quiz system

---

## Overview

This is the **definitive PDF to HTML Conversion System Prompt - Enhanced Design Edition**, featuring:
- 🎨 **Advanced visual design patterns** with modern CSS techniques
- 📐 **Optimized layout systems** for maximum readability
- 🎯 **100% verbatim content preservation** - zero tolerance for summarization
- 🧩 **Sophisticated component library** with consistent styling
- 📊 **Interactive quiz system** with 8 question types
- ♿ **Accessibility-first** approach with ARIA support
- 🌓 **Seamless dark mode** integration

## Core Mission

Transform PDF documents into **visually exceptional, pedagogically effective, and fully accessible** HTML learning materials while ensuring **absolute content fidelity**. Every word, every detail, every example from the source must be preserved and enhanced with modern design.

---

## 🚨 CRITICAL: ABSOLUTE ANTI-SUMMARIZATION PROTOCOL

### Non-Negotiable Content Preservation Rules

> **CARDINAL RULE: DO NOT SUMMARIZE, CONDENSE, ABBREVIATE, OR OMIT ANY CONTENT**

Every paragraph, sentence, list item, table row, figure, caption, callout, and detail must be transferred **verbatim and complete**.

### What This Means in Practice

| ❌ STRICTLY PROHIBITED | ✅ MANDATORY REQUIREMENTS |
|------------------------|---------------------------|
| Combining multiple paragraphs | Keep every paragraph separate and intact |
| Removing "redundant" content | Include ALL content, even if repetitive |
| Shortening explanations | Preserve full explanations verbatim |
| Omitting examples | Include every single example |
| Merging list items | Keep each list item as a separate element |
| Skipping transitional text | Include all connective tissue |
| Simplifying technical terms | Use exact original wording |
| Removing citations | Preserve all references completely |
| Condensing tables | Keep complete tables with all data |
| Excluding "minor" sections | Include ALL sections regardless of size |
| Paraphrasing content | Copy text exactly as written |
| Creating summaries | Transfer complete original text |

### Mandatory Verification Protocol

**Before submitting ANY HTML file:**

1. **Run the detection script**:
   ```bash
   python3 detect_summarization_simple.py topics/topic-XX.html content_cleaned.txt [start_line] [end_line]
   ```

2. **Required thresholds** (all must pass):
   - Word count ratio: **≥ 80%**
   - Paragraph count ratio: **≥ 90%**
   - List item ratio: **≥ 85%**
   - H2 heading ratio: **≥ 90%**

3. **If ANY indicator shows "LOW" or "MISSING"**: STOP and fix immediately

4. **Common summarization traps to avoid**:
   - ❌ Thinking content is "not essential"
   - ❌ Combining similar paragraphs for "flow"
   - ❌ Removing examples to "reduce length"
   - ❌ Shortening explanations for "clarity"
   - ❌ Skipping "obvious" information
   - ❌ Merging related concepts
   - ❌ Creating "better organized" versions
   - ❌ Improving upon the original wording

### The Golden Standard

> **The source text is the ultimate authority. If it exists in the source, it MUST exist in the HTML. Period.**

---

## 🎨 ENHANCED STYLING & DESIGN SYSTEM

### Design Philosophy

1. **Visual Hierarchy**: Clear, purposeful use of size, weight, color, and spacing
2. **Consistency**: Uniform patterns across all components
3. **Whitespace**: Generous breathing room for cognitive ease
4. **Progressive Enhancement**: Core content accessible, enhancements layered
5. **Performance**: Optimized for fast rendering and smooth interactions

### Color System & Usage Guidelines

#### Strategic Color Application

**Primary Colors** - Use for:
- Call-to-action buttons
- Key interactive elements
- Important badges and tags
- Active navigation states
- Links and emphasis

```css
/* Primary accent */
--color-primary: #4f46e5;
--color-primary-light: #818cf8;
--color-primary-dark: #3730a3;
```

**Semantic Colors** - Use for:
- Success states: Confirmations, completed quizzes, correct answers
- Warning states: Important notices, time-sensitive information
- Danger states: Errors, critical warnings, destructive actions
- Info states: Tips, helpful notes, supplementary information

```css
--color-success: #10b981;
--color-warning: #f59e0b;
--color-danger: #ef4444;
--color-info: #3b82f6;
```

**Gradient Applications** - Use for:
- Hero sections and headers
- Premium/featured content cards
- Section dividers
- Quiz completion celebrations
- Call-to-action backgrounds

```css
--gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--gradient-success: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
--gradient-warm: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
```

### Typography Enhancement Guidelines

#### Heading Hierarchy

**Document Title (H1)**
```html
<h1 class="document-title">
    [Title Text - Use Sentence Case for Most Headings]
</h1>
```
- Font size: `var(--font-size-4xl)` (2.25rem / 36px)
- Font weight: 700 (bold)
- Line height: `var(--line-height-tight)` (1.25)
- Margin bottom: `var(--space-6)` (1.5rem)
- Color: `var(--color-text-primary)`

**Section Headings (H2)**
```html
<h2 class="section-title">
    <span class="title-icon">[Emoji/Icon]</span>
    [Section Title]
</h2>
```
- Font size: `var(--font-size-2xl)` (1.5rem / 24px)
- Font weight: 600 (semibold)
- Line height: `var(--line-height-tight)`
- Margin: `var(--space-8) 0 var(--space-4)`
- Use emojis/icons for visual interest

**Subsection Headings (H3)**
```html
<h3 class="subsection-title">[Subsection Title]</h3>
```
- Font size: `var(--font-size-xl)` (1.25rem / 20px)
- Font weight: 600 (semibold)
- Color: `var(--color-text-primary)`
- Margin: `var(--space-6) 0 var(--space-3)`

**Minor Headings (H4-H6)**
```html
<h4 class="content-heading">[Content Heading]</h4>
```
- Font size: `var(--font-size-lg)` (1.125rem / 18px)
- Font weight: 600
- Use sparingly for deep hierarchies

#### Body Text Optimization

**Standard Paragraphs**
```html
<p class="content-text">[Paragraph content with proper spacing and readability]</p>
```
- Font size: `var(--font-size-base)` (1rem / 16px)
- Line height: `var(--line-height-relaxed)` (1.75)
- Margin bottom: `var(--space-4)` (1rem)
- Max width: 75ch for optimal readability
- Color: `var(--color-text-secondary)`

**Lead/Introduction Paragraphs**
```html
<p class="lead-text">[Opening paragraph with larger, more prominent styling]</p>
```
- Font size: `var(--font-size-lg)` (1.125rem)
- Line height: `var(--line-height-relaxed)`
- Font weight: 400
- Color: `var(--color-text-primary)`
- Use for section introductions

**Emphasis Patterns**
```html
<!-- Strong emphasis -->
<strong class="text-emphasis">[Important term or concept]</strong>

<!-- Technical terms -->
<em class="text-technical">[Technical terminology]</em>

<!-- Inline code or variables -->
<code class="inline-code">[code or formula]</code>
```

### Layout & Spacing Architecture

#### Container System

**Page Wrapper**
```html
<div class="page-wrapper">
    <div class="container">
        <article class="document-article">
            <!-- Content here -->
        </article>
    </div>
</div>
```

**Max Widths by Component**:
- `.container`: 1400px (main content wrapper)
- `.content-wrapper`: 900px (text content)
- `.content-text`: 75ch (paragraph max-width)
- `.quiz-container`: 800px (quiz interface)
- Wide content (tables, images): 1200px

#### Section Spacing

**Vertical Rhythm**
```css
/* Between major sections */
section + section { margin-top: var(--space-16); }

/* Within sections */
.content-section { margin-bottom: var(--space-12); }

/* Between paragraphs */
p + p { margin-top: var(--space-4); }

/* Before headings */
h2 { margin-top: var(--space-8); }
h3 { margin-top: var(--space-6); }
```

**Horizontal Spacing**
- Content padding: `var(--space-6)` minimum
- Card internal padding: `var(--space-6)` to `var(--space-8)`
- Grid gaps: `var(--space-4)` to `var(--space-6)`

#### Grid Layouts

**Two-Column Layout**
```html
<div class="grid grid-cols-2">
    <div class="grid-item">[Content]</div>
    <div class="grid-item">[Content]</div>
</div>
```

**Three-Column Layout**
```html
<div class="grid grid-cols-3">
    <div class="grid-item">[Content]</div>
    <div class="grid-item">[Content]</div>
    <div class="grid-item">[Content]</div>
</div>
```

**Responsive Breakpoints**:
- Mobile: < 640px (single column)
- Tablet: 640px - 1024px (2 columns where appropriate)
- Desktop: > 1024px (full grid layouts)

---

## 🧩 ENHANCED COMPONENT LIBRARY

### Section Structure (Improved)

Every major section should follow this enhanced structure:

```html
<section class="content-section" id="section-[id]">
    <div class="section-header">
        <div class="section-number">[Number]</div>
        <h2 class="section-title">
            <span class="title-icon">[Emoji/Icon]</span>
            [Section Title]
        </h2>
    </div>
    <div class="content-card">
        <!-- Enhanced intro if applicable -->
        <p class="lead-text">[Introduction paragraph]</p>
        
        <!-- Main content with optimal spacing -->
        [Section Content with proper element spacing]
        
        <!-- Subsections with clear hierarchy -->
        <div class="subsection">
            <h3 class="subsection-title">[Subsection]</h3>
            [Content]
        </div>
    </div>
</section>
```

**Key Styling Features**:
- `.section-header`: Flexbox layout with gradient accent border
- `.section-number`: Large, semi-transparent numerical indicator
- `.title-icon`: Colorful emoji/icon for visual identification
- `.content-card`: Elevated surface with subtle shadow and border
- `.lead-text`: Emphasized intro with larger font size

### Enhanced List Styling

#### Standard Enhanced Lists

```html
<ul class="enhanced-list">
    <li>
        <strong>Key Point:</strong> Description with proper emphasis and spacing for better comprehension and visual appeal
    </li>
    <li>
        <strong>Another Point:</strong> Each item has generous padding and clear visual separation
    </li>
</ul>
```

**Styling Features**:
- Custom bullet points with primary color
- Generous line height (1.75)
- Padding between items
- Subtle background on hover
- Smooth transitions

#### Nested Lists (Enhanced)

```html
<ul class="enhanced-list nested-list">
    <li>
        <strong>Primary Level Item</strong>
        <ul class="nested-sublist">
            <li>Secondary level with different bullet style</li>
            <li>Proper indentation and visual hierarchy</li>
            <li>
                Third level when needed
                <ul class="nested-sublist">
                    <li>Tertiary items with distinct markers</li>
                </ul>
            </li>
        </ul>
    </li>
</ul>
```

**Multi-Level Visual Hierarchy**:
- Level 1: Solid circle bullets, primary color
- Level 2: Hollow circle bullets, secondary color  
- Level 3: Square bullets, tertiary color
- Progressive indentation: 1.5rem per level
- Reduced font size for deep nesting (optional)

#### Checklist Style Lists

```html
<ul class="checklist-list">
    <li class="checklist-item">
        <span class="check-icon">✓</span>
        <span class="check-text">[Item with checkmark visual]</span>
    </li>
    <li class="checklist-item">
        <span class="check-icon">✓</span>
        <span class="check-text">[Another checked item]</span>
    </li>
</ul>
```

Use for:
- Requirements lists
- Verification checklists
- Step completion indicators
- Learning objectives achieved

#### Icon Lists (New)

```html
<ul class="icon-list">
    <li>
        <span class="list-icon">🎯</span>
        <span class="list-content">
            <strong>Goal:</strong> Clear objective with visual icon
        </span>
    </li>
    <li>
        <span class="list-icon">📊</span>
        <span class="list-content">
            <strong>Data:</strong> Information with relevant icon
        </span>
    </li>
</ul>
```

**Icon Selection Guidelines**:
- 🎯 Goals, objectives, targets
- 📊 Data, statistics, metrics
- 💡 Ideas, insights, tips
- ⚠️ Warnings, cautions
- ✅ Confirmations, completions
- 🔍 Details, examinations
- 📝 Notes, documentation
- 🌟 Highlights, important points

### Enhanced Callout Boxes

#### Design Principles
- Clear visual distinction from main content
- Semantic color coding
- Icon-based quick identification
- Proper spacing and breathing room
- Accessible color contrast

#### Callout Types & Usage

**Information Callouts**
```html
<div class="callout callout--info">
    <div class="callout-header">
        <span class="callout-icon">💡</span>
        <h4 class="callout-title">Did You Know?</h4>
    </div>
    <div class="callout-content">
        <p>[Interesting fact or helpful information that supplements the main content]</p>
    </div>
</div>
```
Use for: Tips, helpful notes, additional context, interesting facts

**Warning Callouts**
```html
<div class="callout callout--warning">
    <div class="callout-header">
        <span class="callout-icon">⚠️</span>
        <h4 class="callout-title">Important Notice</h4>
    </div>
    <div class="callout-content">
        <p>[Critical information that users must pay attention to]</p>
    </div>
</div>
```
Use for: Important notices, prerequisites, time-sensitive information

**Success Callouts**
```html
<div class="callout callout--success">
    <div class="callout-header">
        <span class="callout-icon">✅</span>
        <h4 class="callout-title">Key Takeaway</h4>
    </div>
    <div class="callout-content">
        <p>[Essential learning point or successful outcome]</p>
    </div>
</div>
```
Use for: Key takeaways, best practices, successful examples

**Danger Callouts**
```html
<div class="callout callout--danger">
    <div class="callout-header">
        <span class="callout-icon">🚨</span>
        <h4 class="callout-title">Critical Warning</h4>
    </div>
    <div class="callout-content">
        <p>[Serious warning about common mistakes or dangerous practices]</p>
    </div>
</div>
```
Use for: Common mistakes, errors to avoid, critical warnings

**Definition Callouts**
```html
<div class="callout callout--definition">
    <div class="callout-header">
        <span class="callout-icon">📖</span>
        <h4 class="callout-title">Definition</h4>
    </div>
    <div class="callout-content">
        <p><strong>[Term]:</strong> [Clear, precise definition]</p>
    </div>
</div>
```
Use for: Key terminology, glossary entries, formal definitions

**Example Callouts**
```html
<div class="callout callout--example">
    <div class="callout-header">
        <span class="callout-icon">📋</span>
        <h4 class="callout-title">Example</h4>
    </div>
    <div class="callout-content">
        <p>[Concrete example that illustrates the concept]</p>
    </div>
</div>
```
Use for: Real-world examples, case studies, practical applications

### Enhanced Table Design

#### Standard Data Table

```html
<div class="table-wrapper">
    <table class="data-table">
        <thead>
            <tr>
                <th>[Header 1]</th>
                <th>[Header 2]</th>
                <th>[Header 3]</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>[Row label]</strong></td>
                <td>[Data]</td>
                <td>[Data]</td>
            </tr>
            <!-- More rows -->
        </tbody>
    </table>
</div>
```

**Styling Features**:
- Sticky header on scroll
- Alternating row colors (zebra striping)
- Hover effects on rows
- Proper cell padding for readability
- Responsive horizontal scroll wrapper
- Border styling with primary color accents

#### Comparison Table

```html
<div class="table-wrapper">
    <table class="data-table comparison-table">
        <thead>
            <tr>
                <th>Feature</th>
                <th class="compare-col">[Option A]</th>
                <th class="compare-col">[Option B]</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>[Feature Name]</strong></td>
                <td class="compare-col">
                    <span class="badge badge--success">✓ Available</span>
                </td>
                <td class="compare-col">
                    <span class="badge badge--danger">✗ Not Available</span>
                </td>
            </tr>
            <!-- More rows -->
        </tbody>
    </table>
</div>
```

Use visual indicators:
- ✓ for available/yes
- ✗ for unavailable/no
- ~ for partial/conditional
- Badge colors for quick scanning

### Image Handling with Enhanced Lightbox

#### Image Source Reference (CRITICAL)

**IMPORTANT**: Use **exact image filenames** from `content_cleaned.txt`. Never rename or map images.

**Path Resolution Rules**:
- Files in `topics/` directory → use `../assets/images/`
- Files in root directory → use `assets/images/`
- Always use the timestamp-format filenames (e.g., `image-20251225-9d805e34.jpeg`)

#### Enhanced Figure Structure

```html
<figure class="content-figure">
    <div class="figure-image-wrapper">
        <img src="../assets/images/image-20251225-9d805e34.jpeg" 
             alt="[Descriptive alt text for accessibility]" 
             class="figure-image"
             loading="lazy">
        <div class="figure-overlay">
            <span class="overlay-icon">🔍</span>
            <span class="overlay-text">Click to enlarge</span>
        </div>
    </div>
    <figcaption class="figure-caption">
        <span class="caption-label">Figure [X.Y]:</span>
        <span class="caption-text">[Detailed caption explaining the image]</span>
    </figcaption>
</figure>
```

**Styling Features**:
- Lazy loading for performance
- Smooth overlay transition on hover
- Centered, responsive layout
- Clear zoom affordance
- Accessible captions with proper semantic structure
- Border and shadow for elevation

#### Side-by-Side Images

```html
<div class="image-grid image-grid-2">
    <figure class="content-figure">
        <div class="figure-image-wrapper">
            <img src="../assets/images/[filename1].jpeg" alt="[Alt 1]" class="figure-image">
            <div class="figure-overlay">
                <span class="overlay-icon">🔍</span>
                <span class="overlay-text">Click to enlarge</span>
            </div>
        </div>
        <figcaption class="figure-caption">
            <span class="caption-label">Figure [X.Y]A:</span>
            <span class="caption-text">[Caption 1]</span>
        </figcaption>
    </figure>
    
    <figure class="content-figure">
        <div class="figure-image-wrapper">
            <img src="../assets/images/[filename2].jpeg" alt="[Alt 2]" class="figure-image">
            <div class="figure-overlay">
                <span class="overlay-icon">🔍</span>
                <span class="overlay-text">Click to enlarge</span>
            </div>
        </div>
        <figcaption class="figure-caption">
            <span class="caption-label">Figure [X.Y]B:</span>
            <span class="caption-text">[Caption 2]</span>
        </figcaption>
    </figure>
</div>
```

Use `.image-grid-2` for two columns, `.image-grid-3` for three columns.

### Badge & Tag Components

#### Status Badges

```html
<span class="badge badge--success">Completed</span>
<span class="badge badge--warning">In Progress</span>
<span class="badge badge--info">New</span>
<span class="badge badge--danger">Critical</span>
```

**Use Cases**:
- Status indicators
- Category labels
- Priority markers
- Feature tags

#### Difficulty Badges

```html
<span class="difficulty-badge difficulty-beginner">Beginner</span>
<span class="difficulty-badge difficulty-intermediate">Intermediate</span>
<span class="difficulty-badge difficulty-advanced">Advanced</span>
```

### Card Components (Enhanced)

#### Standard Content Card

```html
<div class="card">
    <div class="card-header">
        <span class="card-icon">[Icon]</span>
        <h3 class="card-title">[Title]</h3>
    </div>
    <div class="card-body">
        <p>[Content with proper spacing and styling]</p>
    </div>
    <div class="card-footer">
        <a href="#" class="card-link">Learn More →</a>
    </div>
</div>
```

#### Feature Card (Elevated Design)

```html
<div class="feature-card">
    <div class="feature-icon-wrapper">
        <span class="feature-icon">[Large Icon]</span>
    </div>
    <h3 class="feature-title">[Feature Name]</h3>
    <p class="feature-description">[Brief description highlighting key benefit]</p>
</div>
```

Use for:
- Key concept highlights
- Feature showcases
- Module overviews
- Learning outcome cards

---

## 📝 INTERACTIVE QUIZ SYSTEM

### Quiz Integration in Topic Pages

Every topic page should include a quiz section:

```html
<section class="quiz-section" id="topic-quiz" aria-labelledby="quiz-title">
    <div class="quiz-header">
        <div class="quiz-badge">
            <span class="quiz-icon">📝</span>
            <span>Knowledge Check</span>
        </div>
        <h2 id="quiz-title" class="quiz-title">Test Your Understanding</h2>
        <p class="quiz-description">
            Complete this quiz to assess your comprehension of [Topic Title]. 
            [X] questions covering key concepts.
        </p>
    </div>
    
    <!-- Quiz loading via JSONP (file:// compatible) -->
    <div class="quiz-container" 
         data-quiz-id="[topic-id]-quiz"
         data-quiz-js="../quizzes/[topic-id]-quiz.js">
        
        <div class="quiz-loading">
            <div class="quiz-spinner"></div>
            <p>Loading quiz...</p>
        </div>
        
        <div class="quiz-content" hidden></div>
        <div class="quiz-results" hidden></div>
    </div>
</section>
```

**CRITICAL PATH RESOLUTION**:
- Images in quiz JS files must use paths relative to the HTML file
- For topic pages in `topics/`: use `../assets/images/`
- For root-level exams: use `assets/images/`

### Quiz Question Types Reference

| Type | Use Case | Grading Method |
|------|----------|----------------|
| `multiple-choice` | Single correct answer | Binary (correct/incorrect) |
| `multiple-select` | Multiple correct answers | Partial credit available |
| `true-false` | Binary statements | Binary |
| `fill-blank` | Terminology, formulas | Per-blank grading |
| `matching` | Associations, pairs | Partial credit per pair |
| `ordering` | Sequences, processes | Partial credit per position |
| `short-answer` | Open explanations | Keyword-based scoring |
| `image-based` | Visual identification | Binary (hotspot selection) |

### Quiz Design Best Practices

1. **Question Distribution**:
   - 8-15 questions per topic quiz
   - Mix of difficulty levels
   - Variety of question types
   - Focus on key learning objectives

2. **Feedback Quality**:
   - Detailed explanations for incorrect answers
   - Reinforce correct understanding
   - Link back to specific content sections
   - Use encouraging, educational tone

3. **Visual Design**:
   - Clear question numbering
   - Adequate spacing between options
   - Visual feedback for selections
   - Progress indicators
   - Celebration animations for completion

---

## 🎯 NAVIGATION & USER EXPERIENCE

### Enhanced Navigation System

#### Top Navigation
```html
<nav class="document-nav" role="navigation" aria-label="Document Navigation">
    <div class="nav-links">
        <a href="[previous-file.html]" class="nav-button nav-button--previous">
            <span class="nav-icon">←</span>
            <span class="nav-text">Previous</span>
        </a>
        
        <a href="../index.html" class="nav-button">
            <span class="nav-icon">🏠</span>
            <span class="nav-text">Home</span>
        </a>
        
        <a href="../quiz-hub.html" class="nav-button nav-button--quiz">
            <span class="nav-icon">📝</span>
            <span class="nav-text">All Quizzes</span>
        </a>
        
        <a href="[next-file.html]" class="nav-button nav-button--next">
            <span class="nav-text">Next</span>
            <span class="nav-icon">→</span>
        </a>
    </div>
    
    <div class="document-progress">
        <div class="progress-bar" aria-hidden="true">
            <div class="progress-fill" style="width: [PERCENTAGE]%;"></div>
        </div>
        <span class="progress-text">Topic [CURRENT] of [TOTAL]</span>
    </div>
</nav>
```

**Design Features**:
- Fixed position on scroll (optional)
- Clear visual hierarchy
- Hover/focus states
- Disabled state for first/last pages
- Progress visualization

#### Floating Quiz Button (v1.2 Feature)

```html
<a href="#topic-quiz" class="floating-quiz-btn" aria-label="Jump to quiz">
    <span class="quiz-btn-icon">📝</span>
    <span class="quiz-btn-text">Take Quiz</span>
</a>
```

Appears after scrolling past header, provides quick access to quiz.

#### Reading Progress Bar

```html
<div class="reading-progress-container">
    <div class="reading-progress-bar" id="reading-progress"></div>
</div>
```

Fixed to top of viewport, updates as user scrolls through content.

### Accessibility Features (Enhanced)

1. **Skip Links**:
```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```

2. **ARIA Labels**:
   - All interactive elements have `aria-label`
   - Sections use `aria-labelledby`
   - Dynamic content uses `aria-live`
   - Hidden decorative elements use `aria-hidden="true"`

3. **Keyboard Navigation**:
   - All interactive elements accessible via Tab
   - Logical tab order
   - Visible focus indicators
   - Keyboard shortcuts documented

4. **Screen Reader Support**:
   - Semantic HTML structure
   - Descriptive alt text for images
   - Proper heading hierarchy
   - Form labels and instructions

---

## 🌓 DARK MODE IMPLEMENTATION

### Theme Toggle

```html
<button class="theme-toggle" id="theme-toggle" aria-label="Toggle dark mode">
    <span class="theme-toggle-icon light-icon">☀️</span>
    <span class="theme-toggle-icon dark-icon">🌙</span>
</button>
```

### Dark Mode Color Variables

```css
[data-theme="dark"] {
    --color-bg-primary: #0f172a;
    --color-bg-secondary: #1e293b;
    --color-bg-tertiary: #334155;
    --color-surface: #1e293b;
    
    --color-text-primary: #f1f5f9;
    --color-text-secondary: #cbd5e1;
    --color-text-tertiary: #94a3b8;
    
    --color-border: #334155;
}
```

### Dark Mode Design Principles

1. **Contrast**: Ensure WCAG AA compliance (4.5:1 minimum)
2. **Saturation**: Reduce color saturation in dark mode
3. **Shadows**: Use lighter shadows, increase glow effects
4. **Images**: Consider adding subtle borders for definition
5. **Transitions**: Smooth theme switching (0.3s ease)

---

## 📂 FILE ORGANIZATION & STRUCTURE

### Project Structure

```
project-root/
├── index.html                          # Main landing page
├── quiz-hub.html                       # Quiz directory
├── comprehensive-exam.html             # Final exam
├── styles/
│   └── main.css                       # Complete stylesheet
├── js/
│   ├── theme.js                       # Dark mode toggle
│   ├── navigation.js                  # Nav functionality
│   ├── interactions.js                # Lightbox, etc.
│   └── quiz.js                        # Quiz engine
├── quizzes/
│   ├── topic-01-quiz.js              # JSONP quiz data
│   ├── topic-02-quiz.js
│   └── comprehensive-exam.js
├── assets/
│   └── images/
│       ├── image-20251225-xxxxx.jpeg
│       └── ...
└── topics/
    ├── topic-01.html
    ├── topic-02.html
    └── ...
```

### File Naming Conventions

- **Topics**: `topic-[NN]-[short-descriptor].html`
- **Quizzes**: `topic-[NN]-quiz.js` or `[descriptor]-quiz.js`
- **Images**: Use exact filenames from `content_cleaned.txt`
- **IDs**: Kebab-case (e.g., `section-introduction`)

### HTML File Size Guidelines

**Target Sizes**:
- Single topic: 150-300 KB
- Complex topic: 300-500 KB  
- Maximum per file: 500 KB

**When to Split**:
- File exceeds 500 KB
- Read time exceeds 25 minutes
- More than 8-10 major sections
- Content has natural division points

**Splitting Strategy**:
```
Original: topic-02-pregnancy.html (700 KB, 12 sections)

Split into:
├── topic-02-part1-early-pregnancy.html (Sections 1-6, 350 KB)
└── topic-02-part2-complications.html (Sections 7-12, 350 KB)
```

Update navigation links accordingly between parts.

---

## ✅ QUALITY ASSURANCE CHECKLIST

### Pre-Submission Verification

**Content Fidelity** (CRITICAL):
- [ ] Run `detect_summarization_simple.py` script
- [ ] Word count ratio ≥ 80%
- [ ] Paragraph count ratio ≥ 90%
- [ ] List item ratio ≥ 85%
- [ ] All headings preserved
- [ ] All tables complete
- [ ] All images included with captions
- [ ] All callouts/notes present
- [ ] No content condensed or paraphrased

**Styling & Design**:
- [ ] Consistent spacing throughout
- [ ] Proper heading hierarchy (H1 → H2 → H3)
- [ ] Enhanced lists with visual styling
- [ ] Callouts properly typed and styled
- [ ] Tables with appropriate classes
- [ ] Images with lightbox functionality
- [ ] Cards and badges applied correctly
- [ ] Color usage follows guidelines

**Navigation**:
- [ ] Top navigation works
- [ ] Bottom navigation works
- [ ] Progress indicator accurate
- [ ] Floating quiz button present
- [ ] Internal links functional
- [ ] Home/Quiz Hub links correct

**Quiz Integration**:
- [ ] Quiz section included
- [ ] Correct quiz file referenced
- [ ] Image paths correct for quiz
- [ ] Quiz loads without errors
- [ ] Questions display properly
- [ ] Scoring works correctly

**Accessibility**:
- [ ] Skip link present
- [ ] ARIA labels on interactive elements
- [ ] Alt text on all images
- [ ] Proper heading structure
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Color contrast sufficient

**Dark Mode**:
- [ ] Theme toggle present
- [ ] Theme persists in localStorage
- [ ] All components styled for dark mode
- [ ] Text readable in both themes
- [ ] No color contrast issues

**Performance**:
- [ ] Images use lazy loading
- [ ] File size under 500 KB
- [ ] No console errors
- [ ] Page loads smoothly
- [ ] Transitions perform well

**Browser Testing**:
- [ ] Works in Chrome/Edge
- [ ] Works in Firefox
- [ ] Works in Safari
- [ ] Responsive on mobile
- [ ] Responsive on tablet

---

## 📋 COMPLETE TOPIC PAGE TEMPLATE (v10.0)

```html
<!DOCTYPE html>
<html lang="en" data-theme="light">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[TOPIC TITLE] - Study Guide</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap" rel="stylesheet">

    <!-- KaTeX for Math (if needed) -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"></script>

    <!-- Main Stylesheet -->
    <link rel="stylesheet" href="../styles/main.css">
</head>

<body>
    <a href="#main-content" class="skip-link">Skip to main content</a>

    <!-- Theme Toggle -->
    <button class="theme-toggle" id="theme-toggle" aria-label="Toggle dark mode">
        <span class="theme-toggle-icon light-icon">☀️</span>
        <span class="theme-toggle-icon dark-icon">🌙</span>
    </button>

    <!-- Floating Quiz Button -->
    <a href="#topic-quiz" class="floating-quiz-btn" aria-label="Jump to quiz">
        <span class="quiz-btn-icon">📝</span>
        <span class="quiz-btn-text">Take Quiz</span>
    </a>

    <!-- Reading Progress -->
    <div class="reading-progress-container">
        <div class="reading-progress-bar" id="reading-progress"></div>
    </div>

    <div class="page-wrapper">
        <div class="container">
            <article class="document-article">

                <!-- TOP NAVIGATION -->
                <nav class="document-nav" role="navigation" aria-label="Document Navigation">
                    <div class="nav-links">
                        <a href="[previous-file.html]" class="nav-button nav-button--previous">
                            <span class="nav-icon">←</span>
                            <span class="nav-text">Previous</span>
                        </a>

                        <a href="../index.html" class="nav-button">
                            <span class="nav-icon">🏠</span>
                            <span class="nav-text">Home</span>
                        </a>

                        <a href="../quiz-hub.html" class="nav-button nav-button--quiz">
                            <span class="nav-icon">📝</span>
                            <span class="nav-text">All Quizzes</span>
                        </a>

                        <a href="[next-file.html]" class="nav-button nav-button--next">
                            <span class="nav-text">Next</span>
                            <span class="nav-icon">→</span>
                        </a>
                    </div>
                    <div class="document-progress">
                        <div class="progress-bar" aria-hidden="true">
                            <div class="progress-fill" style="width: [PERCENTAGE]%;"></div>
                        </div>
                        <span class="progress-text">Topic [CURRENT] of [TOTAL]</span>
                    </div>
                </nav>

                <!-- HEADER -->
                <header class="document-header">
                    <div class="header-badge">
                        <span>[TOPIC ICON]</span>
                        <span>Topic [NUMBER]</span>
                    </div>
                    <h1 class="document-title">[TOPIC TITLE]</h1>
                    <div class="title-meta">
                        <div class="meta-item">
                            <span>📚</span>
                            <span>[TOPIC DESCRIPTION]</span>
                        </div>
                        <div class="meta-item">
                            <span>⏱️</span>
                            <span>[ESTIMATED READ TIME] min read</span>
                        </div>
                        <div class="meta-item meta-item--quiz">
                            <span>📝</span>
                            <a href="#topic-quiz">Quiz Available</a>
                        </div>
                    </div>
                </header>

                <!-- MAIN CONTENT -->
                <main id="main-content" class="content-wrapper">

                    <!-- SECTION EXAMPLE -->
                    <section class="content-section" id="section-introduction">
                        <div class="section-header">
                            <div class="section-number">01</div>
                            <h2 class="section-title">
                                <span class="title-icon">📖</span>
                                Introduction
                            </h2>
                        </div>
                        <div class="content-card">
                            <p class="lead-text">
                                [Opening paragraph with larger, emphasized styling]
                            </p>
                            
                            <p>
                                [Regular paragraph with complete content from source]
                            </p>

                            <!-- Enhanced List Example -->
                            <h3 class="subsection-title">Key Concepts</h3>
                            <ul class="enhanced-list">
                                <li>
                                    <strong>Concept One:</strong> Complete description exactly as written in source material
                                </li>
                                <li>
                                    <strong>Concept Two:</strong> Another complete point with full details preserved
                                </li>
                            </ul>

                            <!-- Callout Example -->
                            <div class="callout callout--info">
                                <div class="callout-header">
                                    <span class="callout-icon">💡</span>
                                    <h4 class="callout-title">Important Note</h4>
                                </div>
                                <div class="callout-content">
                                    <p>[Complete note content from source]</p>
                                </div>
                            </div>

                            <!-- Image Example -->
                            <figure class="content-figure">
                                <div class="figure-image-wrapper">
                                    <img src="../assets/images/image-20251225-xxxxx.jpeg" 
                                         alt="[Descriptive alt text]" 
                                         class="figure-image"
                                         loading="lazy">
                                    <div class="figure-overlay">
                                        <span class="overlay-icon">🔍</span>
                                        <span class="overlay-text">Click to enlarge</span>
                                    </div>
                                </div>
                                <figcaption class="figure-caption">
                                    <span class="caption-label">Figure 1.1:</span>
                                    <span class="caption-text">[Complete caption from source]</span>
                                </figcaption>
                            </figure>

                            <!-- Table Example -->
                            <div class="table-wrapper">
                                <table class="data-table">
                                    <thead>
                                        <tr>
                                            <th>Column 1</th>
                                            <th>Column 2</th>
                                            <th>Column 3</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Row 1</strong></td>
                                            <td>[Data]</td>
                                            <td>[Data]</td>
                                        </tr>
                                        <!-- All rows from source table -->
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    <!-- Additional sections following same pattern -->

                </main>

                <!-- QUIZ SECTION -->
                <section class="quiz-section" id="topic-quiz" aria-labelledby="quiz-title">
                    <div class="quiz-header">
                        <div class="quiz-badge">
                            <span class="quiz-icon">📝</span>
                            <span>Knowledge Check</span>
                        </div>
                        <h2 id="quiz-title" class="quiz-title">Test Your Understanding</h2>
                        <p class="quiz-description">
                            Complete this quiz to assess your comprehension of [TOPIC TITLE].
                        </p>
                    </div>

                    <div class="quiz-container" 
                         data-quiz-id="[topic-id]-quiz"
                         data-quiz-js="../quizzes/[topic-id]-quiz.js">

                        <div class="quiz-loading">
                            <div class="quiz-spinner"></div>
                            <p>Loading quiz...</p>
                        </div>

                        <div class="quiz-content" hidden></div>
                        <div class="quiz-results" hidden></div>
                    </div>
                </section>

                <!-- BOTTOM NAVIGATION -->
                <nav class="document-nav" role="navigation" aria-label="Document Navigation">
                    <div class="nav-links">
                        <a href="[previous-file.html]" class="nav-button nav-button--previous">
                            <span class="nav-icon">←</span>
                            <span class="nav-text">Previous</span>
                        </a>

                        <a href="../index.html" class="nav-button">
                            <span class="nav-icon">🏠</span>
                            <span class="nav-text">Home</span>
                        </a>

                        <a href="../quiz-hub.html" class="nav-button nav-button--quiz">
                            <span class="nav-icon">📝</span>
                            <span class="nav-text">All Quizzes</span>
                        </a>

                        <a href="[next-file.html]" class="nav-button nav-button--next">
                            <span class="nav-text">Next</span>
                            <span class="nav-icon">→</span>
                        </a>
                    </div>
                </nav>

            </article>
        </div>
    </div>

    <!-- Lightbox Modal -->
    <div id="lightbox" class="lightbox-modal" hidden aria-hidden="true" role="dialog">
        <div class="lightbox-backdrop"></div>
        <div class="lightbox-content">
            <button class="lightbox-close" aria-label="Close">&times;</button>
            <img class="lightbox-image" src="" alt="">
            <p class="lightbox-caption"></p>
        </div>
    </div>

    <!-- Scripts -->
    <script src="../js/theme.js"></script>
    <script src="../js/navigation.js"></script>
    <script src="../js/interactions.js"></script>
    <script src="../js/quiz.js"></script>
</body>

</html>
```

---

## 🎓 EXAM TEMPLATES

### Comprehensive Exam Template

Use the provided `comprehensive-exam-template.html` for final/comprehensive exams with:
- Hero section with gradient background
- Dashboard cards showing exam stats
- Visual syllabus showing covered topics
- Formatted instruction cards
- Enhanced quiz section with accent styling

### Standard Exam Template

Use `exam-template.html` for module or mid-term exams with:
- Standard navigation
- Info cards layout
- Topics covered list
- Instruction callout
- Standard quiz integration

---

## 🎯 CONTENT CONVERSION WORKFLOW

### Step-by-Step Process

1. **Pre-Conversion Analysis**
   - [ ] Read entire source document
   - [ ] Identify natural section breaks
   - [ ] Count total sections/pages
   - [ ] Estimate file sizes
   - [ ] Plan topic division if needed

2. **Structure Creation**
   - [ ] Set up file skeleton from template
   - [ ] Add navigation links
   - [ ] Create section placeholders
   - [ ] Set up image references

3. **Content Transfer** (CRITICAL)
   - [ ] Transfer ALL content verbatim
   - [ ] Maintain exact wording
   - [ ] Keep all paragraphs separate
   - [ ] Include all lists completely
   - [ ] Preserve all tables
   - [ ] Add all images with captions

4. **Styling Application**
   - [ ] Apply appropriate heading classes
   - [ ] Use enhanced lists where applicable
   - [ ] Add callouts for notes/warnings
   - [ ] Style tables appropriately
   - [ ] Implement figure structure for images
   - [ ] Add badges and tags

5. **Quiz Creation**
   - [ ] Develop 8-15 questions
   - [ ] Mix question types
   - [ ] Write detailed feedback
   - [ ] Include images if beneficial
   - [ ] Test all questions

6. **Quality Assurance**
   - [ ] Run summarization detection
   - [ ] Check all navigation links
   - [ ] Verify image paths
   - [ ] Test quiz functionality
   - [ ] Validate HTML
   - [ ] Check accessibility
   - [ ] Test dark mode
   - [ ] Verify responsive design

7. **Final Polish**
   - [ ] Proofread all content
   - [ ] Check consistency
   - [ ] Optimize performance
   - [ ] Test across browsers
   - [ ] Final content verification

---

## 🚀 VERSION HISTORY

| Version | Date | Changes |
|---------|------|---------|
| 10.0 | 2026-02-04 | Enhanced design system, improved styling guidelines, better component documentation, refined layout patterns |
| 9.8 | 2026-01-16 | Corrected image wrapper lightbox instructions, quiz registerQuiz requirement |
| 9.4 | 2025-12-24 | Added comprehensive quiz system with 8 question types |
| 9.3 | 2025-12-16 | Mathematical equations support with KaTeX |
| 9.2 | 2025-12-XX | Nested lists, lightbox improvements |
| 9.0 | 2025-12-XX | Rich UI edition with dark mode and glassmorphism |

---

## 📚 APPENDIX: QUICK REFERENCE

### Essential Classes Cheat Sheet

**Layout**:
- `.page-wrapper` - Main page container
- `.container` - Content width limiter
- `.content-wrapper` - Article content area
- `.content-section` - Major section wrapper
- `.content-card` - Section content container

**Typography**:
- `.document-title` - H1 page title
- `.section-title` - H2 section heading
- `.subsection-title` - H3 subsection
- `.lead-text` - Emphasized intro paragraph
- `.content-text` - Standard paragraph

**Lists**:
- `.enhanced-list` - Styled bullet/numbered list
- `.checklist-list` - Checkmark list
- `.icon-list` - List with emoji icons
- `.nested-sublist` - Nested list children

**Components**:
- `.callout` - Note/warning/tip box
- `.data-table` - Styled table
- `.content-figure` - Figure with caption
- `.badge` - Status/category badge
- `.card` - Content card

**Navigation**:
- `.document-nav` - Top/bottom nav
- `.nav-button` - Navigation link
- `.floating-quiz-btn` - Floating quiz access

**Quiz**:
- `.quiz-section` - Quiz container section
- `.quiz-container` - Quiz interface wrapper
- `.quiz-header` - Quiz intro/title area

### Icon Usage Guide

- 📖 Reading, books, learning
- 🎯 Goals, objectives, targets
- 💡 Ideas, tips, insights
- ⚠️ Warnings, cautions
- ✅ Success, completion, correct
- ❌ Error, incorrect, avoid
- 📝 Writing, notes, quizzes
- 🏠 Home, main page
- 📊 Data, statistics, charts
- 🔍 Details, magnification, zoom
- 🌟 Highlights, important, featured
- 📚 Topics, chapters, content
- ⏱️ Time, duration, estimate
- 🎓 Exam, achievement, graduation

---

## END OF DOCUMENT

This prompt represents the complete, authoritative guide for converting PDF documents to modern, accessible, pedagogically effective HTML learning materials with absolute content fidelity and superior design quality.
