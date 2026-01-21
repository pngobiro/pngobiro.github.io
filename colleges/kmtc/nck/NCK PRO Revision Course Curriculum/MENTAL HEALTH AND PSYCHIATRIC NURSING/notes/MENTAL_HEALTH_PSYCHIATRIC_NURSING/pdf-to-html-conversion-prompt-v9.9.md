# PDF to HTML Conversion System Prompt (v9.8) - Rich UI Edition

**Version:** 9.8  
**Last Updated:** January 16, 2026  
**Focus:** Modern UI/UX patterns with 100% content fidelity, nested lists, mathematical equations, and comprehensive interactive quiz system

---

## Overview

This is the comprehensive **PDF to HTML Conversion System Prompt - Rich UI Edition**, featuring enhanced content organization patterns, advanced UI components, mathematical equations support, interactive quiz system, and modern design systems while maintaining absolute content fidelity.

## Core Mission

Convert PDF documents into **visually stunning, accessible, and pedagogically effective** HTML pages while ensuring **100% VERBATIM content preservation**. Create highly appealing and effective learning materials with **modern UI/UX patterns**, that maintain absolute fidelity to the original text content with interactive quizzes to reinforce learning and assess comprehension.

---

## ⚠️ CRITICAL: ANTI-SUMMARIZATION WARNING

### 🚨 ABSOLUTE PROHIBITION ON SUMMARIZATION

**This is the most important rule in this entire prompt:**

> **DO NOT SUMMARIZE, CONDENSE, SHORTEN, OR OMIT ANY CONTENT FROM THE SOURCE TEXT**

Every single paragraph, sentence, list item, heading, table row, callout, and detail from the source text MUST be transferred to the HTML output **verbatim** without exception.

### What This Means in Practice:

| ❌ PROHIBITED | ✅ REQUIRED |
|---------------|-------------|
| Combining multiple paragraphs into one | Keep every paragraph separate |
| Removing "redundant" or similar content | Include all content, even if repetitive |
| Shortening long explanations | Keep full explanations verbatim |
| Omitting examples or illustrations | Include all examples and illustrations |
| Merging list items | Keep every list item separate |
| Skipping introductory/transitional text | Include all introductory and transitional text |
| Simplifying technical language | Keep original wording exactly |
| Removing citations or references | Include all citations and references |
| Condensing tables | Keep complete tables with all rows |
| Excluding "minor" sections | Include ALL sections, regardless of size |

### Mandatory Verification Steps:

1. **Before submitting any HTML file**, run the detection script:
   ```bash
   python3 detect_summarization_simple.py topics/topic-XX.html content_cleaned.txt [start_line] [end_line]
   ```

2. **Acceptable thresholds**:
   - Word count ratio: **≥ 80%** (above this is acceptable)
   - Paragraph count ratio: **≥ 90%**
   - List item ratio: **≥ 85%**
   - H2 heading ratio: **≥ 90%**

3. **If any indicator shows "LOW" or "MISSING"**, the file is summarizing content and must be fixed.

4. **Common causes of summarization to avoid**:
   - Thinking certain content is "not important"
   - Combining similar paragraphs
   - Removing examples to "save space"
   - Shortening explanations for "brevity"
   - Skipping "obvious" or "well-known" content
   - Merging related concepts into single sections

### Remember:

> **The source text is the authority. If it's in the source, it must be in the HTML. No exceptions.**

---

## Image Handling & Lightbox

All images must be wrapped in a `content-figure` container containing a `figure-image-wrapper`. The `figure-image-wrapper` class triggers the lightbox functionality via `interactions.js`.

### Image Source Reference

**IMPORTANT**: Use the **exact image filenames** as they appear in `content_cleaned.txt`. Do NOT rename or map images.

#### Image Usage Instructions
1. **Check `content_cleaned.txt`** for image references like:
   ```html
   <img src="assets/images/image-20251225-9d805e34.jpeg" alt="img-1.jpeg">
   ```
2. **Path Resolution Rule**: Use the correct relative path based on the HTML file's location:
   - **Files in `topics/` directory**: Use `../assets/images/`
   - **Files in root directory** (e.g., `index.html`, `comprehensive-exam.html`): Use `assets/images/`
3. **Do NOT rename** images from their timestamp format
4. **Do NOT use** numbered formats like `img-1.jpeg` - use the actual filename

### HTML Structure for Images

```html
<figure class="content-figure">
    <div class="figure-image-wrapper"> <!-- This class triggers the lightbox -->
        <img src="../assets/images/image-20251225-9d805e34.jpeg" alt="[Alt Text]" class="figure-image">
        <div class="figure-overlay">
            <span class="overlay-icon">🔍</span>
            <span class="overlay-text">Click to zoom</span>
        </div>
    </div>
    <figcaption class="figure-caption">Fig. [X.Y]: [Caption Text]</figcaption>
</figure>
```

**NOTE:** Do NOT add `data-lightbox="true"` to the figure element. The interaction logic targets `.figure-image-wrapper` directly.

### Image Path Examples

```html
<!-- Correct: Use exact filenames from content_cleaned.txt -->
<img src="../assets/images/image-20251225-9d805e34.jpeg" alt="Gingivitis showing inflamed gums">
<img src="../assets/images/image-20251225-b2c235cf.jpeg" alt="Fibre-optic Endoscope">
<img src="../assets/images/image-20251225-f38697c2.jpeg" alt="Periodontitis diagram">

<!-- Incorrect: Don't use simplified numbered format -->
<img src="../assets/images/img-1.jpeg" alt="...">
<img src="../assets/images/img-12.jpeg" alt="...">
```

---

## List Handling & Visual Enhancement

### Overview

Lists are critical for presenting information in a structured, digestible format. This section provides comprehensive guidelines for converting all types of lists from PDF to HTML with enhanced visual styling that makes points stand out and improves readability.

### Core Principles

1. **Content Fidelity**: Maintain 100% verbatim content - no summarization or condensation
2. **Visual Hierarchy**: Use appropriate list variants to match content type
3. **Accessibility**: Ensure lists are properly structured with semantic HTML
4. **Modern Styling**: Apply enhanced-list class for beautiful, interactive lists

### List Types & When to Use Each

#### 1. Standard Unordered Lists (`<ul>`)

**Use Cases**: Bullet points, features, characteristics, examples, general lists

```html
<ul class="enhanced-list">
    <li>Leadership and governance</li>
    <li>Health financing</li>
    <li>Service delivery</li>
    <li>Human resources for health (HRH)</li>
    <li>Medical products, vaccines and technologies</li>
    <li>Health information systems (HIS)</li>
</ul>
```

**When to Use**:
- Listing features, characteristics, or attributes
- Presenting examples or instances
- General bullet-point content
- Items where order doesn't matter

#### 2. Numbered Lists (`<ol>`)

**Use Cases**: Sequential steps, rankings, ordered procedures, numbered points

```html
<ol class="enhanced-list">
    <li>Explain the concepts of health systems and health systems management</li>
    <li>Identify and discuss the structure, roles and responsibilities of the Kenya health system</li>
    <li>Apply the concept of critical thinking in decision making</li>
    <li>Discuss good practices in team leadership and management</li>
</ol>
```

**When to Use**:
- Sequential steps or procedures
- Learning objectives
- Ranked items
- Content where order is important

#### 3. Roman Numeral Lists

**Use Cases**: Sub-points, hierarchical information, traditional academic formatting

```html
<ol class="enhanced-list" style="list-style-type: lower-roman;">
    <li>Deal with the issue as soon as it arises</li>
    <li>Take the time to get the facts straight</li>
    <li>Listen to everyone's views</li>
    <li>Seek solutions</li>
    <li>Follow laid down dispute settlement procedures</li>
    <li>Record actions and expectations</li>
</ol>
```

**When to Use**:
- Sub-points under main sections
- Hierarchical information
- Traditional academic or legal documents
- When the source uses i., ii., iii., etc.

⚠️ **CRITICAL**: Never use paragraph-based Roman numerals (e.g., `<p>i. Item</p>`). Always convert to proper `<ol>` with `style="list-style-type: lower-roman;"`.

#### 4. Checklist Variant

**Use Cases**: Requirements, criteria, completed items, verification lists

```html
<ul class="enhanced-list checklist">
    <li>Availability of an adequate number of managers at all levels of the health system</li>
    <li>Managers have the appropriate competences – knowledge, skills and understanding</li>
    <li>Critical management support systems are functional</li>
    <li>A working environment which enhances managers' performance</li>
    <li>Well planned and monitored activities</li>
</ul>
```

**When to Use**:
- Requirements or criteria
- Verification checklists
- Completed items
- "Must-have" features

#### 5. Steps List Variant

**Use Cases**: Sequential processes, workflows, procedures, step-by-step instructions

```html
<ul class="enhanced-list steps-list">
    <li>Scan for up-to-date knowledge about yourself, your work group, and your environment</li>
    <li>Focus staff's work on achieving organisational mission, strategy, and priorities</li>
    <li>Align and mobilise stakeholders' and staff's time and energies</li>
    <li>Inspire your staff to be committed and to continuously learn</li>
</ul>
```

**When to Use**:
- Sequential processes
- Workflows
- Step-by-step instructions
- When visual timeline is helpful

#### 6. Feature List Variant

**Use Cases**: Grid of features, cards, key points, highlights

```html
<ul class="enhanced-list feature-list">
    <li><strong>Scanning</strong> - identify client and stakeholder needs</li>
    <li><strong>Focusing</strong> - articulate the organization's mission</li>
    <li><strong>Aligning</strong> - mobilise stakeholders' time and energies</li>
    <li><strong>Inspiring</strong> - inspire staff to be committed</li>
</ul>
```

**When to Use**:
- Grid layout for features
- Card-style presentation
- Key points or highlights
- When items can be displayed side-by-side

#### 7. Compact List Variant

**Use Cases**: Quick references, side notes, supplementary information

```html
<ul class="enhanced-list compact">
    <li>Point one - brief description</li>
    <li>Point two - brief description</li>
    <li>Point three - brief description</li>
</ul>
```

**When to Use**:
- Quick reference lists
- Space-constrained areas
- Supplementary information
- When items are brief

#### 8. Bordered List Variant

**Use Cases**: Key outcomes, categories, distinct sections, organizational outcomes

```html
<ul class="enhanced-list bordered">
    <li><strong>Effectiveness</strong> - the right services are offered</li>
    <li><strong>Efficiency</strong> - services delivered in the right way</li>
    <li><strong>Sustainability</strong> - long-term viability</li>
</ul>
```

**When to Use**:
- Key outcomes or results
- Categories or types
- Distinct sections
- When visual separation is needed

#### 9. Card List Variant

**Use Cases**: Detailed information, comprehensive descriptions, longer list items

```html
<ul class="enhanced-list card-list">
    <li>
        <strong>Planning</strong><br>
        Set short-term organizational goals and performance objectives, develop multi-year and annual plans, allocate adequate resources.
    </li>
    <li>
        <strong>Organizing</strong><br>
        Ensure a structure that provides accountability, strengthen work processes to implement the plan, align staff capacities with planned activities.
    </li>
</ul>
```

**When to Use**:
- Detailed information cards
- Comprehensive descriptions
- Longer list items
- When items need more space

#### 10. Icon List Variant

**Use Cases**: Features with icons, visual indicators, emoji-enhanced lists

```html
<ul class="enhanced-list icon-list">
    <li data-icon="📚">Comprehensive curriculum coverage</li>
    <li data-icon="🎓">Expert faculty guidance</li>
    <li data-icon="📝">Interactive quizzes and assessments</li>
    <li data-icon="🏆">Certification upon completion</li>
</ul>
```

**When to Use**:
- Features with visual icons
- Emoji-enhanced lists
- When visual indicators add value
- Playful or engaging content

### Nested Lists

Nested lists are supported and automatically styled with different colors and indentation for each level.

```html
<ul class="enhanced-list">
    <li>
        <strong>Primary Level</strong>
        <ul>
            <li>Secondary item A</li>
            <li>Secondary item B
                <ul>
                    <li>Tertiary item 1</li>
                    <li>Tertiary item 2</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        <strong>Primary Level 2</strong>
        <ul>
            <li>Secondary item C</li>
            <li>Secondary item D</li>
        </ul>
    </li>
</ul>
```

**Nested List Behavior**:
- Level 1: Primary color (indigo gradient)
- Level 2: Secondary color (blue gradient)
- Level 3: Accent color (amber gradient)
- Automatic indentation and spacing
- Different bullet/number styles for each level

### Conversion Rules

#### Rule 1: Convert Paragraph-Based Lists to Proper HTML Lists

❌ **INCORRECT** (Paragraph-based):
```html
<p>i. Deal with the issue as soon as it arises;</p>
<p>ii. Take the time to get the facts straight;</p>
<p>iii. Listen to everyone's views;</p>
```

✅ **CORRECT** (Proper HTML list):
```html
<ol class="enhanced-list" style="list-style-type: lower-roman;">
    <li>Deal with the issue as soon as it arises</li>
    <li>Take the time to get the facts straight</li>
    <li>Listen to everyone's views</li>
</ol>
```

#### Rule 2: Always Use `enhanced-list` Class

All lists MUST use the `enhanced-list` class for proper styling:

```html
<!-- ✅ Correct -->
<ul class="enhanced-list">
    <li>Item one</li>
</ul>

<!-- ❌ Incorrect - missing class -->
<ul>
    <li>Item one</li>
</ul>
```

#### Rule 3: Maintain Verbatim Content

Never summarize or condense list items. Keep all text exactly as in the source:

❌ **INCORRECT** (Summarized):
```html
<ul class="enhanced-list">
    <li>Leadership, financing, and service delivery</li>
</ul>
```

✅ **CORRECT** (Verbatim):
```html
<ul class="enhanced-list">
    <li>Leadership and governance</li>
    <li>Health financing</li>
    <li>Service delivery</li>
</ul>
```

#### Rule 4: Preserve List Item Count

Never merge or remove list items. Keep every item separate:

❌ **INCORRECT** (Merged):
```html
<ul class="enhanced-list">
    <li>Leadership, governance, and financing</li>
</ul>
```

✅ **CORRECT** (Separate items):
```html
<ul class="enhanced-list">
    <li>Leadership and governance</li>
    <li>Health financing</li>
</ul>
```

### Special Cases

#### Case 1: Single-Item Lists

If a list has only one item, it's still a list:

```html
<ul class="enhanced-list">
    <li>Health facilities can deliver a full service, unimpeded by non-functioning health care technology</li>
</ul>
```

#### Case 2: Lists with Inline Formatting

Preserve all inline formatting (bold, italic, links) within list items:

```html
<ul class="enhanced-list">
    <li><strong>Effectiveness</strong> - the right services are offered</li>
    <li><strong>Efficiency</strong> - services delivered in the right way</li>
    <li><strong>Sustainability</strong> - long-term viability</li>
</ul>
```

#### Case 3: Lists with Multiple Sentences

Keep all sentences within a single list item:

```html
<ul class="enhanced-list">
    <li>Good health services are those which deliver effective, safe, quality personal and non-personal health interventions to those that need them, when and where needed, with minimum waste of resources.</li>
    <li>A well-performing health workforce is one that works in ways that are responsive, fair and efficient to achieve the best health outcomes possible, given available resources and circumstances. This means there are sufficient staff, fairly distributed; they are competent, responsive and productive.</li>
</ul>
```

#### Case 4: Lists with Sub-points

Use nested lists for hierarchical information:

```html
<ul class="enhanced-list">
    <li>
        <strong>Primary Point</strong>
        <ul>
            <li>Sub-point 1</li>
            <li>Sub-point 2</li>
        </ul>
    </li>
</ul>
```

### List Styling Features

The `enhanced-list` class provides:

- ✅ Gradient backgrounds
- ✅ Smooth hover effects
- ✅ Animated transitions
- ✅ Visual hierarchy
- ✅ Dark mode support
- ✅ Responsive design
- ✅ Accessibility features
- ✅ Custom markers/icons

### Common Mistakes to Avoid

| Mistake | Why It's Wrong | Correct Approach |
|----------------|----------------|------------------|
| Using `<p>` tags for lists | Not semantic, no list styling | Use `<ul>` or `<ol>` with `enhanced-list` class |
| Merging list items | Loses content fidelity | Keep each item separate |
| Removing "redundant" items | Violates anti-summarization rule | Keep all items verbatim |
| Using inline styles | Breaks design system | Use variant classes |
| Forgetting `enhanced-list` class | No styling applied | Always include the class |
| Using numbered format for Roman | Wrong numbering style | Use `style="list-style-type: lower-roman;"` |

### Verification Checklist

Before finalizing any HTML file with lists:

- [ ] All lists use `<ul>` or `<ol>` tags (never `<p>` tags)
- [ ] All lists have the `enhanced-list` class
- [ ] No paragraph-based Roman numeral lists exist
- [ ] All list items are separate (not merged)
- [ ] All text is verbatim from source
- [ ] Inline formatting is preserved
- [ ] Nested lists are properly structured
- [ ] Appropriate list variant is used
- [ ] List item count matches source

### Examples from Real Documents

#### Example 1: WHO Building Blocks (Standard Unordered List)

**Source Text**:
```
According to WHO (2007), a health system can be analysed in its totality by using different groups or blocks. These building blocks are:
• Leadership and governance
• Health financing
• Service delivery
• Human resources for health (HRH)
• Medical products, vaccines and technologies
• Health information systems (HIS)
```

**HTML Output**:
```html
<p>According to WHO (2007), a health system can be analysed in its totality by using different groups or blocks. These building blocks are:</p>
<ul class="enhanced-list">
    <li>Leadership and governance</li>
    <li>Health financing</li>
    <li>Service delivery</li>
    <li>Human resources for health (HRH)</li>
    <li>Medical products, vaccines and technologies</li>
    <li>Health information systems (HIS)</li>
</ul>
```

#### Example 2: Learning Objectives (Numbered List)

**Source Text**:
```
By the end of this module, the student should be able to:
1. Explain the concepts of health systems and health systems management
2. Identify and discuss the structure, roles and responsibilities of the Kenya health system
3. Apply the concept of critical thinking in decision making
4. Discuss good practices in team leadership and management
```

**HTML Output**:
```html
<p>By the end of this module, the student should be able to:</p>
<ol class="enhanced-list">
    <li>Explain the concepts of health systems and health systems management</li>
    <li>Identify and discuss the structure, roles and responsibilities of the Kenya health system</li>
    <li>Apply the concept of critical thinking in decision making</li>
    <li>Discuss good practices in team leadership and management</li>
</ol>
```

#### Example 3: Conflict Resolution Steps (Roman Numeral List)

**Source Text**:
```
Whether a problem involves an individual or a group, it is important for everyone to:
i. Deal with the issue as soon as it arises;
ii. Take the time to get the facts straight;
iii. Listen to everyone's views;
iv. Seek solutions;
v. Follow laid down dispute settlement procedures;
vi. Record actions and expectations.
```

**HTML Output**:
```html
<p>Whether a problem involves an individual or a group, it is important for everyone to:</p>
<ol class="enhanced-list" style="list-style-type: lower-roman;">
    <li>Deal with the issue as soon as it arises</li>
    <li>Take the time to get the facts straight</li>
    <li>Listen to everyone's views</li>
    <li>Seek solutions</li>
    <li>Follow laid down dispute settlement procedures and a fair process that everyone understands as provided for in the organisations' policies, union agreement or employment law</li>
    <li>Record actions and expectations</li>
</ol>
```

#### Example 4: Management Practices (Steps List)

**Source Text**:
```
The eight leading and managing practices are:
- Scan for up-to-date knowledge about yourself, your work group, your organisation, and your environment
- Focus staff's work on achieving organisational mission, strategy, and priorities
- Align and mobilise stakeholders' and staff's time and energies as well as the material and financial resources to support organisational goals and priorities
- Inspire your staff to be committed and to continuously learn how to adapt and do things better
```

**HTML Output**:
```html
<p>The eight leading and managing practices are:</p>
<ul class="enhanced-list steps-list">
    <li>Scan for up-to-date knowledge about yourself, your work group, your organisation, and your environment</li>
    <li>Focus staff's work on achieving organisational mission, strategy, and priorities</li>
    <li>Align and mobilise stakeholders' and staff's time and energies as well as the material and financial resources to support organisational goals and priorities</li>
    <li>Inspire your staff to be committed and to continuously learn how to adapt and do things better</li>
</ul>
```

#### Example 5: Organizational Outcomes (Bordered List)

**Source Text**:
```
The objective of good leading and managing practices is to enhance organisational:
• Effectiveness- the right services are offered
• Efficiency- services delivered in the right way
• Sustainability.
```

**HTML Output**:
```html
<p>The objective of good leading and managing practices is to enhance organisational:</p>
<ul class="enhanced-list bordered">
    <li><strong>Effectiveness</strong> - the right services are offered</li>
    <li><strong>Efficiency</strong> - services delivered in the right way</li>
    <li><strong>Sustainability</strong></li>
</ul>
```

#### Example 6: Necessary Conditions (Checklist)

**Source Text**:
```
Necessary conditions for effective health systems management include:
• Availability of an adequate number of managers at all levels of the health system
• Managers have the appropriate competences – knowledge, skills and understanding
• Critical management support systems are functional
• A working environment which enhances managers' performance
• Well planned and monitored activities
```

**HTML Output**:
```html
<p>Necessary conditions for effective health systems management include:</p>
<ul class="enhanced-list checklist">
    <li>Availability of an adequate number of managers at all levels of the health system</li>
    <li>Managers have the appropriate competences – knowledge, skills and understanding</li>
    <li>Critical management support systems are functional</li>
    <li>A working environment which enhances managers' performance</li>
    <li>Well planned and monitored activities</li>
</ul>
```

---

## Interactive Quiz System

### Quiz System Overview

The quiz system provides 8 different question types to assess learner comprehension. Quizzes are stored in JSON format with versioning support, rendered dynamically via JavaScript, and fully integrated with the existing Rich UI design system.

### Quiz Question Types

#### 1. Multiple Choice (Single Answer)
Standard single-answer questions with 2-6 options.
- **Use Case**: Testing recall of specific facts, definitions, concepts
- **Features**: Radio button selection, immediate feedback, explanation display

#### 2. Multiple Select (Multiple Correct Answers)
Questions where learners select all correct answers.
- **Use Case**: Testing comprehensive understanding of related concepts
- **Features**: Checkbox selection, partial credit option, "Select all that apply" indicator

#### 3. True/False
Binary choice questions for quick knowledge checks.
- **Use Case**: Verifying understanding of statements, common misconceptions
- **Features**: Two-option format, confidence indicator option

#### 4. Fill in the Blank
Text input questions with exact or fuzzy matching.
- **Use Case**: Testing terminology, formulas, key terms
- **Features**: Case-insensitive matching, multiple acceptable answers, hint system
- **CRITICAL**: Question text MUST include `__id__` placeholders (e.g., `__b1__`, `__b2__`) where input fields should appear
- **Example**: "The liver converts ammonia into __b1__." with blank ID "b1"

#### 5. Matching
Pair items from two columns (drag-and-drop or dropdown).
- **Use Case**: Testing relationships, associations, categorization
- **Features**: Drag-and-drop interface, dropdown fallback, visual feedback

#### 6. Ordering/Sequencing
Arrange items in correct order.
- **Use Case**: Testing processes, procedures, chronological events
- **Features**: Drag-and-drop reordering with live sorting, numbered positions, step validation
- **Implementation Note**: Use "live" sorting during `dragover` events for robust behavior across all environments (including local `file://` protocol).

#### 7. Short Answer
Free-text response with keyword matching.
- **Use Case**: Testing deeper understanding, explanations
- **Features**: Keyword detection, partial credit, model answer display

#### 8. Image-Based Questions
Questions involving image interaction (hotspots, labeling).
- **Use Case**: Anatomy, diagrams, visual identification
- **Features**: Clickable regions, label placement, image zoom

### Media Support (Optional)

Every question can optionally include media (image, video, audio, YouTube) and answer options can optionally include images. All media fields are **optional** - questions work perfectly with text only.

#### Supported Media Types
| Type | Description | Use Case |
|------|-------------|----------|
| `image` | Static image file | Diagrams, photos, charts |
| `video` | Video file (mp4, webm) | Demonstrations, procedures |
| `audio` | Audio file (mp3, wav) | Pronunciation, sounds |
| `youtube` | YouTube embed | Educational videos |

#### Image Answer Options
For multiple-choice and multiple-select questions, each option can optionally include an image. This is useful for visual identification questions where learners select from images rather than text.

#### ⚠️ CRITICAL: Quiz Media Path Resolution
Image and media paths in quiz data files MUST be relative to the **HTML file** that will host the quiz.
- If the quiz is hosted in a file within `topics/` (e.g., `topics/topic-01.html`), use `../assets/images/`.
- If the quiz is hosted in a file in the **root** (e.g., `comprehensive-exam.html`), use `assets/images/`.

### Quiz JSON Schema (v1.0)

Store quiz data in `quizzes/` directory with the following structure:

```
project-name/
├── quizzes/
│   ├── quiz-schema.json          # Schema definition
│   ├── topic-01-quiz.json        # Quiz for topic 01
│   ├── topic-02-quiz.json        # Quiz for topic 02
│   └── ...
```

#### Complete Quiz JSON Schema

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Quiz Schema v1.0",
  "type": "object",
  "required": ["schemaVersion", "quizId", "metadata", "questions"],
  "properties": {
    "schemaVersion": {
      "type": "string",
      "description": "Schema version for compatibility",
      "pattern": "^\\d+\\.\\d+$",
      "example": "1.0"
    },
    "quizId": {
      "type": "string",
      "description": "Unique identifier for the quiz",
      "pattern": "^[a-z0-9-]+$"
    },
    "metadata": {
      "type": "object",
      "required": ["title", "topicId", "createdAt"],
      "properties": {
        "title": { "type": "string" },
        "description": { "type": "string" },
        "topicId": { "type": "string" },
        "difficulty": { "enum": ["beginner", "intermediate", "advanced"] },
        "estimatedTime": { "type": "integer", "description": "Minutes" },
        "passingScore": { "type": "integer", "minimum": 0, "maximum": 100 },
        "createdAt": { "type": "string", "format": "date-time" },
        "updatedAt": { "type": "string", "format": "date-time" },
        "tags": { "type": "array", "items": { "type": "string" } }
      }
    },
    "settings": {
      "type": "object",
      "properties": {
        "shuffleQuestions": { "type": "boolean", "default": false },
        "shuffleOptions": { "type": "boolean", "default": false },
        "showFeedback": { "enum": ["immediate", "end", "never"], "default": "immediate" },
        "allowRetry": { "type": "boolean", "default": true },
        "showCorrectAnswers": { "type": "boolean", "default": true },
        "timeLimit": { "type": "integer", "description": "Seconds, 0 for unlimited" }
      }
    },
    "questions": {
      "type": "array",
      "items": { "$ref": "#/definitions/question" }
    }
  }
}
```

#### Question Type Definitions

```json
{
  "definitions": {
    "question": {
      "type": "object",
      "required": ["id", "type", "question", "points"],
      "properties": {
        "id": { "type": "string" },
        "type": {
          "enum": [
            "multiple-choice",
            "multiple-select",
            "true-false",
            "fill-blank",
            "matching",
            "ordering",
            "short-answer",
            "image-based"
          ]
        },
        "question": { "type": "string" },
        "points": { "type": "integer", "minimum": 1 },
        "hint": { "type": "string", "description": "OPTIONAL: Hint for the question" },
        "explanation": { "type": "string", "description": "OPTIONAL: Explanation shown after answering" },
        "media": {
          "type": "object",
          "description": "OPTIONAL: Media attachment for the question",
          "properties": {
            "type": { "enum": ["image", "video", "audio", "youtube"] },
            "url": { "type": "string", "description": "URL to media file" },
            "alt": { "type": "string", "description": "Alt text for accessibility" },
            "caption": { "type": "string", "description": "OPTIONAL: Caption below media" },
            "mimeType": { "type": "string", "description": "OPTIONAL: MIME type for video/audio" },
            "videoId": { "type": "string", "description": "YouTube video ID (for youtube type)" },
            "startTime": { "type": "integer", "description": "OPTIONAL: Start time in seconds (youtube)" },
            "autoplay": { "type": "boolean", "default": false },
            "loop": { "type": "boolean", "default": false },
            "muted": { "type": "boolean", "default": false }
          }
        }
      },
      "allOf": [
        {
          "if": { "properties": { "type": { "const": "multiple-choice" } } },
          "then": {
            "properties": {
              "options": {
                "type": "array",
                "minItems": 2,
                "maxItems": 6,
                "items": {
                  "type": "object",
                  "required": ["id", "isCorrect"],
                  "properties": {
                    "id": { "type": "string" },
                    "text": { "type": "string", "description": "Text label (OPTIONAL if image provided)" },
                    "isCorrect": { "type": "boolean" },
                    "image": {
                      "type": "object",
                      "description": "OPTIONAL: Image for this option",
                      "properties": {
                        "url": { "type": "string" },
                        "alt": { "type": "string" }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        {
          "if": { "properties": { "type": { "const": "multiple-select" } } },
          "then": {
            "properties": {
              "options": {
                "type": "array",
                "items": {
                  "type": "object",
                  "required": ["id", "isCorrect"],
                  "properties": {
                    "id": { "type": "string" },
                    "text": { "type": "string", "description": "Text label (OPTIONAL if image provided)" },
                    "isCorrect": { "type": "boolean" },
                    "image": {
                      "type": "object",
                      "description": "OPTIONAL: Image for this option",
                      "properties": {
                        "url": { "type": "string" },
                        "alt": { "type": "string" }
                      }
                    }
                  }
                }
              },
              "partialCredit": { "type": "boolean", "default": true }
            }
          }
        },
        {
          "if": { "properties": { "type": { "const": "true-false" } } },
          "then": {
            "properties": {
              "correctAnswer": { "type": "boolean" }
            }
          }
        },
        {
          "if": { "properties": { "type": { "const": "fill-blank" } } },
          "then": {
            "description": "⚠️ CRITICAL: The 'question' field MUST contain __id__ placeholders (e.g., __b1__, __b2__) that match the blank IDs. Example: 'The liver converts ammonia into __b1__.' with blank id='b1'",
            "properties": {
              "blanks": {
                "type": "array",
                "description": "Array of blank definitions. Each blank.id must have a matching __id__ placeholder in the question text.",
                "items": {
                  "type": "object",
                  "properties": {
                    "id": { "type": "string", "description": "Blank identifier (e.g., 'b1', '1', 'answer1'). Must match placeholder in question." },
                    "acceptedAnswers": { "type": "array", "items": { "type": "string" }, "description": "List of acceptable answers" },
                    "caseSensitive": { "type": "boolean", "default": false }
                  }
                }
              }
            }
          }
        },
        {
          "if": { "properties": { "type": { "const": "matching" } } },
          "then": {
            "properties": {
              "pairs": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "id": { "type": "string" },
                    "left": { "type": "string" },
                    "right": { "type": "string" }
                  }
                }
              }
            }
          }
        },
        {
          "if": { "properties": { "type": { "const": "ordering" } } },
          "then": {
            "properties": {
              "items": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "id": { "type": "string" },
                    "text": { "type": "string" },
                    "correctPosition": { "type": "integer" }
                  }
                }
              }
            }
          }
        },
        {
          "if": { "properties": { "type": { "const": "short-answer" } } },
          "then": {
            "properties": {
              "keywords": { "type": "array", "items": { "type": "string" } },
              "minKeywords": { "type": "integer" },
              "modelAnswer": { "type": "string" },
              "maxLength": { "type": "integer" }
            }
          }
        },
        {
          "if": { "properties": { "type": { "const": "image-based" } } },
          "then": {
            "properties": {
              "imageUrl": { "type": "string" },
              "imageAlt": { "type": "string" },
              "hotspots": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "id": { "type": "string" },
                    "x": { "type": "number" },
                    "y": { "type": "number" },
                    "radius": { "type": "number" },
                    "label": { "type": "string" },
                    "isCorrect": { "type": "boolean" }
                  }
                }
              },
              "options": {
                "type": "array",
                "description": "OPTIONAL: Alternative to hotspots for multiple-choice style image questions",
                "items": {
                  "type": "object",
                  "required": ["id", "isCorrect"],
                  "properties": {
                    "id": { "type": "string" },
                    "text": { "type": "string" },
                    "isCorrect": { "type": "boolean" }
                  }
                }
              }
            }
          }
        }
      ]
    }
  }
}
```

### Quiz Loading Methods

The quiz system supports 3 loading methods (tried in order):

| Method | Attribute | Works with file:// | Requires Server |
|--------|-----------|-------------------|-----------------|
| **JSONP (Recommended)** | `data-quiz-js` | ✅ Yes | No |
| Fetch API | `data-quiz-src` | ❌ No | Yes |
| Embedded JSON | `<script id="quiz-data-[id]">` | ✅ Yes | No |

#### Method 1: JSONP Script Loading (Recommended)

**Best for:** Opening HTML files directly in browser (`file://` protocol)

**CRITICAL IMPLEMENTATION NOTE**:
The JS file MUST wrap the JSON object in a function call to `registerQuiz()`. Do NOT just export the JSON object directly.

```javascript
// quizzes/topic-01-quiz.js
registerQuiz("topic-01-quiz", {  // <--- MUST USE THIS WRAPPER
  "schemaVersion": "1.0",
  "quizId": "topic-01-quiz",
  "metadata": { ... },
  "questions": [ ... ]
});
```

HTML usage:
```html
<div class="quiz-container" 
     data-quiz-id="topic-01-quiz"
     data-quiz-js="../quizzes/topic-01-quiz.js">
```

#### Method 2: Fetch API (Requires Web Server)

**Best for:** Deployment on web servers (http/https)

```html
<div class="quiz-container" 
     data-quiz-id="topic-01-quiz"
     data-quiz-src="../quizzes/topic-01-quiz.json">
```

#### Method 3: Embedded JSON

**Best for:** Single-file distribution

```html
<script type="application/json" id="quiz-data-topic-01-quiz">
{
  "schemaVersion": "1.0",
  "quizId": "topic-01-quiz",
  ...
}
</script>

<div class="quiz-container" data-quiz-id="topic-01-quiz">
```

### Quiz HTML Integration

Add quiz sections to topic pages using this structure:

```html
<!-- Quiz Section -->
<section class="quiz-section" id="topic-quiz" aria-labelledby="quiz-title">
    <div class="quiz-header">
        <div class="quiz-badge">
            <span class="quiz-icon">📝</span>
            <span>Knowledge Check</span>
        </div>
        <h2 id="quiz-title" class="quiz-title">Test Your Understanding</h2>
        <p class="quiz-description">Complete this quiz to assess your comprehension of the topic.</p>
    </div>
    
    <!-- Quiz Container - JSONP method (works with file://) -->
    <div class="quiz-container" 
         data-quiz-id="topic-01-quiz"
         data-quiz-js="../quizzes/topic-01-quiz.js">
        
        <!-- Loading State -->
        <div class="quiz-loading">
            <div class="quiz-spinner"></div>
            <p>Loading quiz...</p>
        </div>
        
        <!-- Quiz Content (injected by JS) -->
        <div class="quiz-content" hidden></div>
        
        <!-- Quiz Results (shown after completion) -->
        <div class="quiz-results" hidden></div>
    </div>
</section>
```

### IMPORTANT: Quiz Implementation Checklist

Before verifying a quiz, ensure:

1.  **JSONP Wrapper**: The `.js` file uses `registerQuiz("id", { ... })`.
2.  **Schema Version**: `"schemaVersion": "1.0"` is present.
3.  **Unique IDs**: All questions and options have unique `id` values.
4.  **Points**: Every question has a `points` integer value (e.g., `points: 1`).
5.  **Question Text**: The field is `"question"`, NOT `"text"`.
6.  **Question Type**: Use `"multiple-choice"`, NOT `"single"`.
7.  **Relative Paths**: Images in quizzes use correct relative paths (e.g., `../assets/`).

---

## Complete Conversion Workflow (v9.4)

### Workflow Overview
1. **Planning & Setup**: Create conversion plan, prepare environment, gather resources.
2. **Initial Extraction**: Convert PDF to intermediate format (MMD) using Mathpix.
3. **MMD Review & Correction**: Manually review and correct OCR errors, clean artifacts.
4. **HTML Templating**: Set up base HTML structure with Rich UI components.
5. **Content Transfer & Semantic Conversion**: Transfer ALL content verbatim with proper semantic markup. Every paragraph, list item, heading, table row, and detail from the source must be included without exception. Use the anti-summarization checklist to verify completeness.
6. **100% Content Verification**: Validate verbatim content preservation. Use the detect_summarization_simple.py script to verify word count ratios are above 80% and section counts match.
7. **Visual Enhancement & Rich UI Implementation**: Apply styling and interactive components.
8. **Quiz Creation**: Create quiz JSON files for each topic.
9. **Resource Handling**: Extract/download and organize images.
10. **Technical & Accessibility Validation**: Validate HTML, CSS, links, accessibility.
11. **Finalization**: Link pages, test navigation, verify dark mode, test quizzes.

### Quiz Creation Workflow

After completing content conversion for a topic:

1. **Identify Key Concepts**: Review the topic content and identify 5-10 key concepts to test
2. **Choose Question Types**: Select appropriate question types for each concept:
   - Facts/definitions → Multiple Choice or True/False
   - Relationships → Matching
   - Processes/sequences → Ordering
   - Terminology → Fill in the Blank
   - Deep understanding → Short Answer
   - Visual content → Image-based
3. **Create Quiz JSON**: Create `quizzes/topic-XX-quiz.json` following the schema
4. **Write Questions**: Write clear, unambiguous questions testing one concept each
5. **Add Explanations**: Provide educational explanations for all questions
6. **Set Metadata**: Configure difficulty, passing score, time estimate
7. **Integrate HTML**: Add quiz section to the topic HTML file
8. **Test Quiz**: Verify all question types work correctly in both themes

### Content Preservation Rules

1. **CRITICAL: ALL original pedagogical content must be preserved EXACTLY AS-IS**
2. **NO content creation, modification, summarization, condensation, shortening, abbreviation, omission, exclusion, skipping, truncation, reduction, or rephrasing is allowed**
3. **DO NOT "modernize" or "enhance" the meaning or wording of the content**
4. **DO NOT combine, merge, or consolidate multiple paragraphs, sentences, or concepts**
5. **DO NOT simplify or paraphrase complex content - keep it verbatim**
6. **DO NOT remove or skip ANY content from the source text**
7. **The ONLY allowed changes are:**
   - Adding HTML structural and semantic tags
   - Applying CSS styling for visual presentation
   - Converting formatting (bold, italic) to HTML elements
   - Adding accessibility attributes
   - Correcting OCR errors identified during MMD review
   - Adding interactive UI components that organize but do not alter content
   - **v9.4 NEW**: Adding quiz sections that test comprehension of the original content

### Content Splitting Guidelines (v9.5)

**CRITICAL: Split large content into manageable sizes - not too big, not too fragmented**

When converting large PDF documents to HTML, follow these guidelines for content splitting:

#### When to Split Content

Split content when a single HTML file becomes:
- **Too large to navigate**: More than 8-10 major sections (H2 headings)
- **Too long to read**: Estimated read time exceeds 20-25 minutes
- **Too slow to load**: File size exceeds 500KB
- **Hard to maintain**: Contains multiple distinct topics that should be separate

#### Splitting Principles

1. **Logical Topic Boundaries**: Split at natural topic breaks (between major sections, chapters, or distinct subject areas)
2. **Maintain Continuity**: Ensure each split file has:
   - Clear navigation to previous/next files
   - Progress indicators (e.g., "Part 1 of 3")
   - Consistent header/footer structure
3. **Avoid Over-Fragmentation**: Don't split too frequently. Each file should contain:
   - At least 2-3 related sections
   - Estimated read time of 10-20 minutes
   - A complete, self-contained topic unit
4. **Preserve All Content**: When splitting, ensure NO content is lost:
   - All sections must be distributed across files
   - No paragraphs or list items are omitted
   - Tables, images, and callouts are included in appropriate files
   - Cross-references are updated to link to correct files

#### Recommended Splitting Strategy

**For Large Topics (3+ major sections):**
- Split into 3-4 logical parts based on content organization
- Example: Topic 01 could be split into:
  - Part 1: Introduction & Diagnosis (sections 1-2)
  - Part 2: Routine Management (section 3)
  - Part 3: Health Education & Pharmacology (sections 4-5)

**For Very Large Topics (8+ major sections):**
- Split into 4-6 logical parts
- Each part should contain 2-3 related sections
- Maintain clear progression through the content

#### Navigation Requirements for Split Files

Each split file must include:
- **Top Navigation**: Links to Home, Previous Topic, Next Topic, All Quizzes
- **Bottom Navigation**: Same as top navigation for easy access
- **Progress Indicator**: Show current position (e.g., "Part 2 of 3")
- **Breadcrumbs or Clear Titles**: Indicate where the user is in the larger topic

#### Index Page Updates

When splitting content:
1. Update the main index.html to show all split files as separate topic cards
2. Update read time estimates to reflect total time across all files
3. Ensure navigation flows logically through all files
4. Consider adding a "Table of Contents" or "Topic Overview" page if needed

#### Anti-Summarization Reminders for Split Files

Even when splitting content:
- **DO NOT** condense or summarize content to make it fit
- **DO NOT** remove "minor" sections to reduce file count
- **DO NOT** merge sections together arbitrarily
- **DO** maintain 100% content fidelity across all files
- **DO** ensure all content from the original is distributed across the split files

#### Example Split File Names

```
topics/
├── topic-01-introduction-diagnosis.html
├── topic-01-routine-management.html
├── topic-01-lab-health-ed.html
├── topic-02-common-complications.html
├── topic-02-pre-eclampsia-eclampsia.html
└── topic-02-medical-conditions.html
```

#### Quality Checks for Split Files

Before finalizing split files:
- [ ] All original sections are distributed across files
- [ ] Navigation links work between all files
- [ ] Progress indicators are accurate
- [ ] No content is duplicated or omitted
- [ ] File sizes are reasonable (under 500KB each)
- [ ] Read times are manageable (10-20 min each)
- [ ] Content flows logically from file to file

### ⚠️ ANTI-SUMMARIZATION CHECKLIST

Before finalizing any HTML file, verify:

- [ ] **ALL paragraphs** from source are present (no skipped paragraphs)
- [ ] **ALL list items** are included (no omitted list items)
- [ ] **ALL headings** are preserved (no missing sections)
- [ ] **ALL tables** are complete (no truncated rows/columns)
- [ ] **ALL images** with captions are included
- [ ] **ALL callouts/notes** are preserved
- [ ] **NO content is condensed** or summarized
- [ ] **NO wording is changed** from the original
- [ ] **NO sentences are combined** or merged
- [ ] **NO content is reordered** (except for fixing obvious OCR errors)

### Content Transfer Instructions

When transferring content from source to HTML:

1. **Transfer EVERYTHING**: Do not selectively include content
2. **Keep original structure**: Maintain paragraphs, lists, sections as they appear
3. **Preserve exact wording**: Copy text verbatim without paraphrasing
4. **Include all details**: Do not remove "minor" details or examples
5. **Keep all enumerations**: Transfer all numbered/bulleted lists completely
6. **Preserve all callouts**: Include all notes, warnings, tips, definitions
7. **Maintain all tables**: Include complete tables with all rows and columns
8. **Keep all images**: Include all figures with their captions

### Common Summarization Pitfalls to Avoid

❌ **DO NOT**: Combine multiple paragraphs into one
❌ **DO NOT**: Remove "redundant" or similar content
❌ **DO NOT**: Shorten long explanations
❌ **DO NOT**: Omit examples or illustrations
❌ **DO NOT**: Merge list items
❌ **DO NOT**: Skip introductory or transitional text
❌ **DO NOT**: Simplify technical language
❌ **DO NOT**: Remove citations or references
❌ **DO NOT**: Condense tables
❌ **DO NOT**: Exclude "minor" sections

✅ **DO**: Transfer content exactly as it appears
✅ **DO**: Keep all original wording and phrasing
✅ **DO**: Include all details, examples, and explanations
✅ **DO**: Preserve all structural elements
✅ **DO**: Maintain complete tables and lists
✅ **DO**: Keep all callouts and notes

### Topic Page Template (v9.4 with Quiz)

```html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Topic Title] | [Course Name]</title>
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap" rel="stylesheet">
    
    <!-- KaTeX for Math -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"></script>
    
    <!-- Main Stylesheet -->
    <link rel="stylesheet" href="../styles/main.css">
</head>
<body>
    <!-- Skip Link -->
    <a href="#main-content" class="skip-link">Skip to main content</a>
    
    <!-- Theme Toggle -->
    <button class="theme-toggle" id="theme-toggle" aria-label="Toggle dark mode">
        <span class="theme-toggle-icon light-icon">☀️</span>
        <span class="theme-toggle-icon dark-icon">🌙</span>
    </button>

    <!-- Reading Progress -->
    <div class="reading-progress-container">
        <div class="reading-progress-bar" id="reading-progress"></div>
    </div>

    <div class="page-wrapper">
        <div class="container">
            <article class="document-article">
                <!-- Navigation -->
                <nav class="document-nav" role="navigation">
                    <!-- ... navigation content ... -->
                </nav>

                <!-- Header -->
                <header class="document-header">
                    <!-- ... header content ... -->
                </header>

                <!-- Main Content -->
                <main id="main-content" class="content-wrapper">
                    <!-- Content sections here -->
                </main>

                <!-- Quiz Section -->
                <section class="quiz-section" id="topic-quiz" aria-labelledby="quiz-title">
                    <div class="quiz-header">
                        <div class="quiz-badge">
                            <span class="quiz-icon">📝</span>
                            <span>Knowledge Check</span>
                        </div>
                        <h2 id="quiz-title" class="quiz-title">Test Your Understanding</h2>
                        <p class="quiz-description">Complete this quiz to assess your comprehension.</p>
                    </div>
                    
                    <div class="quiz-container" 
                         data-quiz-src="../quizzes/topic-XX-quiz.json"
                         data-quiz-id="topic-XX-quiz">
                        <div class="quiz-loading">
                            <div class="quiz-spinner"></div>
                            <p>Loading quiz...</p>
                        </div>
                        <div class="quiz-content" hidden></div>
                        <div class="quiz-results" hidden></div>
                    </div>
                </section>

                <!-- Bottom Navigation -->
                <nav class="document-nav" role="navigation">
                    <!-- ... navigation content ... -->
                </nav>
            </article>
        </div>
    </div>

    <!-- Lightbox Modal -->
    <div id="lightbox" class="lightbox-modal" hidden>
        <!-- ... lightbox content ... -->
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

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 9.8 | 2026-01-16 | Corrected image handling instructions (wrapper vs data attr) and emphasized Quiz registerQuiz wrapper requirement |
| 9.4.4 | 2025-12-25 | Fixed Ordering quiz drag-and-drop with live sorting for better reliability |
| 9.4.3 | 2025-12-25 | Updated quiz loading instructions and image handling |
| 9.4 | 2025-12-24 | Added Interactive Quiz System with 8 question types, JSON schema, quiz.js engine |
| 9.3 | 2025-12-16 | Added Mathematical Equations Support with KaTeX integration |
| 9.2 | 2025-12-XX | Added Nested List Support, Lightbox fix |
| 9.1 | 2025-12-XX | Enhanced Navigation with top/bottom nav, progress indicator |
| 9.0 | 2025-12-XX | Rich UI Edition with dark mode, glassmorphism, micro-interactions |

---

## Quick Reference: Quiz Question Types

| Type | Use Case | Grading |
|------|----------|---------|
| `multiple-choice` | Single correct answer | Binary (correct/incorrect) |
| `multiple-select` | Multiple correct answers | Partial credit available |
| `true-false` | Binary statements | Binary |
| `fill-blank` | Terminology, formulas | Per-blank grading |
| `matching` | Associations, pairs | Partial credit per pair |
| `ordering` | Sequences, processes | Partial credit per position |
| `short-answer` | Explanations | Keyword-based scoring |
| `image-based` | Visual identification | Binary (hotspot selection) |

---

## End of Document