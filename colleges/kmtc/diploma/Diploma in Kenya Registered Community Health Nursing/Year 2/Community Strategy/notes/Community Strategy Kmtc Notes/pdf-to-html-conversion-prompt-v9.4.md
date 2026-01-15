# PDF to HTML Conversion System Prompt (v9.4) - Rich UI Edition

**Version:** 9.4 Enhanced Rich UI with Interactive Quiz System  
**Last Updated:** December 24, 2025  
**Focus:** Modern UI/UX patterns with 100% content fidelity, nested lists, mathematical equations, and comprehensive interactive quiz system

---

## What's New in v9.4
- **Interactive Quiz System**: Complete quiz framework with 8 question types
- **Quiz JSON Schema**: Versioned JSON structure for quiz data storage
- **Quiz JavaScript Engine**: Full-featured quiz rendering and scoring system
- **Quiz Types Supported**:
  - Multiple Choice (single answer)
  - Multiple Select (multiple correct answers)
  - True/False
  - Fill in the Blank
  - Matching (drag-and-drop pairs)
  - Ordering/Sequencing
  - Short Answer (with keyword matching)
  - Image-based Questions (hotspot/labeling)
- **Quiz Features**: Progress tracking, instant feedback, score calculation, review mode
- **Accessibility**: Full keyboard navigation, screen reader support, ARIA labels
- **Dark Mode**: Complete quiz styling for both light and dark themes

## What's New in v9.3
- **Mathematical Equations Support**: Complete KaTeX integration for professional mathematical rendering
- **Enhanced Equation Handling**: Multiple equation formats (display, inline, complex scientific formulas)
- **Comprehensive Math Guidelines**: Detailed instructions for LaTeX syntax, variable definitions, and accessibility
- **Template Updates**: KaTeX scripts integrated into HTML templates with proper configuration
- **Verification Checklist**: 8-point mathematical equation validation process
- **Performance Optimization**: KaTeX chosen over MathJax for faster rendering and better mobile support

## What's New in v9.2
- **Nested List Support**: Proper handling of nested lists with different numbering styles (numbers → letters → roman numerals)
- **Enhanced List CSS**: Updated CSS for multi-level list numbering and bullet styles
- **List Structure Guidelines**: Clear instructions for converting nested list patterns from PDF content
- **Improved Accessibility**: Better semantic structure for nested content hierarchies
- **Lightbox Fix**: Corrected JavaScript selector to use `getElementById('lightbox')` instead of `getElementById('lightbox-modal')` to match HTML structure

## What's New in v9.1
- **Enhanced Navigation**: Top and bottom navigation with Previous/Home/Next buttons
- **Improved Progress Indicator**: Visual progress bar showing topic position
- **Template Update**: Use `topic-template-v1.1.html` for new conversions
- **Navigation Accessibility**: Proper ARIA labels and disabled states for first/last topics

---

## Overview
This is the comprehensive **PDF to HTML Conversion System Prompt (v9.4) - Rich UI Edition**, featuring enhanced content organization patterns, advanced UI components, mathematical equations support, **interactive quiz system**, and modern design systems while maintaining absolute content fidelity.

## Core Mission
Convert PDF documents into **visually stunning, accessible, and pedagogically effective** HTML pages while ensuring **100% VERBATIM content preservation**. Create highly appealing and effective learning materials with **modern UI/UX patterns**, organized into **logically coherent chunks**, that maintain absolute fidelity to the original text content. **v9.4 adds interactive quizzes to reinforce learning and assess comprehension.**

---

## Interactive Quiz System (v9.4 NEW)

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

#### 5. Matching
Pair items from two columns (drag-and-drop or dropdown).
- **Use Case**: Testing relationships, associations, categorization
- **Features**: Drag-and-drop interface, dropdown fallback, visual feedback

#### 6. Ordering/Sequencing
Arrange items in correct order.
- **Use Case**: Testing processes, procedures, chronological events
- **Features**: Drag-and-drop reordering, numbered positions, step validation

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
            "properties": {
              "blanks": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "id": { "type": "string" },
                    "acceptedAnswers": { "type": "array", "items": { "type": "string" } },
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
              }
            }
          }
        }
      ]
    }
  }
}
```

### Example Quiz JSON Files

#### Example 1: Basic Text Questions (No Media)

```json
{
  "schemaVersion": "1.0",
  "quizId": "pharmacology-intro-quiz",
  "metadata": {
    "title": "Introduction to Pharmacology Quiz",
    "description": "Test your understanding of basic pharmacology concepts",
    "topicId": "topic-01-introduction",
    "difficulty": "beginner",
    "estimatedTime": 10,
    "passingScore": 70,
    "createdAt": "2025-12-24T00:00:00Z",
    "tags": ["pharmacology", "basics", "introduction"]
  },
  "settings": {
    "shuffleQuestions": false,
    "shuffleOptions": true,
    "showFeedback": "immediate",
    "allowRetry": true,
    "showCorrectAnswers": true
  },
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "question": "What is the primary function of pharmacokinetics?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Study of drug effects on the body", "isCorrect": false },
        { "id": "b", "text": "Study of how the body processes drugs", "isCorrect": true },
        { "id": "c", "text": "Study of drug interactions", "isCorrect": false },
        { "id": "d", "text": "Study of drug manufacturing", "isCorrect": false }
      ],
      "explanation": "Pharmacokinetics studies ADME: Absorption, Distribution, Metabolism, and Excretion - how the body handles drugs.",
      "hint": "Think about what happens to a drug after you take it."
    },
    {
      "id": "q2",
      "type": "true-false",
      "question": "The therapeutic index is the ratio of the toxic dose to the effective dose.",
      "points": 5,
      "correctAnswer": true,
      "explanation": "TI = TD50/ED50. A higher therapeutic index indicates a safer drug."
    }
  ]
}
```

#### Example 2: Questions with Media (Images, Videos)

```json
{
  "schemaVersion": "1.0",
  "quizId": "anatomy-media-quiz",
  "metadata": {
    "title": "Anatomy with Visual Aids",
    "topicId": "topic-02-anatomy",
    "difficulty": "intermediate",
    "estimatedTime": 15,
    "passingScore": 70,
    "createdAt": "2025-12-24T00:00:00Z"
  },
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "question": "Based on the diagram below, identify the structure labeled 'A':",
      "points": 10,
      "media": {
        "type": "image",
        "url": "../assets/images/heart-diagram.jpg",
        "alt": "Diagram of the human heart with labeled structures",
        "caption": "Figure 1: Cross-section of the human heart"
      },
      "options": [
        { "id": "a", "text": "Left Atrium", "isCorrect": false },
        { "id": "b", "text": "Right Ventricle", "isCorrect": true },
        { "id": "c", "text": "Aorta", "isCorrect": false },
        { "id": "d", "text": "Pulmonary Artery", "isCorrect": false }
      ],
      "explanation": "Structure A points to the right ventricle, which pumps blood to the lungs."
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "question": "Watch the video and identify the type of muscle contraction shown:",
      "points": 15,
      "media": {
        "type": "video",
        "url": "../assets/videos/muscle-contraction.mp4",
        "mimeType": "video/mp4",
        "alt": "Video showing muscle fiber contraction",
        "caption": "Muscle contraction demonstration"
      },
      "options": [
        { "id": "a", "text": "Isotonic contraction", "isCorrect": true },
        { "id": "b", "text": "Isometric contraction", "isCorrect": false },
        { "id": "c", "text": "Eccentric contraction", "isCorrect": false }
      ]
    },
    {
      "id": "q3",
      "type": "multiple-choice",
      "question": "After watching the YouTube video, what is the main function of mitochondria?",
      "points": 10,
      "media": {
        "type": "youtube",
        "videoId": "dQw4w9WgXcQ",
        "startTime": 30,
        "alt": "Educational video about cell organelles",
        "caption": "Cell Biology: Mitochondria"
      },
      "options": [
        { "id": "a", "text": "Protein synthesis", "isCorrect": false },
        { "id": "b", "text": "ATP production", "isCorrect": true },
        { "id": "c", "text": "DNA replication", "isCorrect": false }
      ]
    }
  ]
}
```

#### Example 3: Image-Based Answer Options

```json
{
  "schemaVersion": "1.0",
  "quizId": "visual-identification-quiz",
  "metadata": {
    "title": "Visual Identification Quiz",
    "topicId": "topic-03-identification",
    "difficulty": "intermediate",
    "estimatedTime": 10,
    "passingScore": 70,
    "createdAt": "2025-12-24T00:00:00Z"
  },
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "question": "Which image shows a healthy red blood cell?",
      "points": 10,
      "options": [
        {
          "id": "a",
          "text": "Cell A",
          "isCorrect": true,
          "image": {
            "url": "../assets/images/rbc-healthy.jpg",
            "alt": "Healthy biconcave red blood cell"
          }
        },
        {
          "id": "b",
          "text": "Cell B",
          "isCorrect": false,
          "image": {
            "url": "../assets/images/rbc-sickle.jpg",
            "alt": "Sickle-shaped red blood cell"
          }
        },
        {
          "id": "c",
          "text": "Cell C",
          "isCorrect": false,
          "image": {
            "url": "../assets/images/wbc.jpg",
            "alt": "White blood cell"
          }
        }
      ],
      "explanation": "Healthy red blood cells have a biconcave disc shape, which maximizes surface area for oxygen transport."
    },
    {
      "id": "q2",
      "type": "multiple-select",
      "question": "Select all images that show bacterial cells (select all that apply):",
      "points": 15,
      "options": [
        {
          "id": "a",
          "isCorrect": true,
          "image": {
            "url": "../assets/images/bacteria-cocci.jpg",
            "alt": "Spherical bacteria (cocci)"
          }
        },
        {
          "id": "b",
          "isCorrect": false,
          "image": {
            "url": "../assets/images/animal-cell.jpg",
            "alt": "Animal cell with nucleus"
          }
        },
        {
          "id": "c",
          "isCorrect": true,
          "image": {
            "url": "../assets/images/bacteria-bacilli.jpg",
            "alt": "Rod-shaped bacteria (bacilli)"
          }
        },
        {
          "id": "d",
          "isCorrect": false,
          "image": {
            "url": "../assets/images/plant-cell.jpg",
            "alt": "Plant cell with cell wall"
          }
        }
      ],
      "partialCredit": true,
      "explanation": "Bacterial cells are prokaryotic and lack a membrane-bound nucleus. Cocci (spherical) and bacilli (rod-shaped) are common bacterial shapes."
    }
  ]
}
```

#### Example 4: Mixed Question Types Quiz

```json
{
  "schemaVersion": "1.0",
  "quizId": "anatomy-comprehensive-quiz",
  "metadata": {
    "title": "Comprehensive Anatomy Assessment",
    "topicId": "topic-05-anatomy",
    "difficulty": "intermediate",
    "estimatedTime": 20,
    "passingScore": 75,
    "createdAt": "2025-12-24T00:00:00Z"
  },
  "settings": {
    "shuffleQuestions": true,
    "showFeedback": "end"
  },
  "questions": [
    {
      "id": "q1",
      "type": "fill-blank",
      "question": "The heart has __1__ chambers: two __2__ and two __3__.",
      "points": 15,
      "blanks": [
        { "id": "1", "acceptedAnswers": ["four", "4"], "caseSensitive": false },
        { "id": "2", "acceptedAnswers": ["atria", "atriums"], "caseSensitive": false },
        { "id": "3", "acceptedAnswers": ["ventricles"], "caseSensitive": false }
      ],
      "explanation": "The heart has four chambers: right atrium, left atrium, right ventricle, and left ventricle."
    },
    {
      "id": "q2",
      "type": "matching",
      "question": "Match each organ with its primary function:",
      "points": 20,
      "pairs": [
        { "id": "p1", "left": "Heart", "right": "Pumps blood" },
        { "id": "p2", "left": "Lungs", "right": "Gas exchange" },
        { "id": "p3", "left": "Liver", "right": "Detoxification" },
        { "id": "p4", "left": "Kidneys", "right": "Filtration" }
      ]
    },
    {
      "id": "q3",
      "type": "ordering",
      "question": "Arrange the blood flow path in correct order:",
      "points": 20,
      "items": [
        { "id": "i1", "text": "Right Atrium", "correctPosition": 1 },
        { "id": "i2", "text": "Right Ventricle", "correctPosition": 2 },
        { "id": "i3", "text": "Pulmonary Artery", "correctPosition": 3 },
        { "id": "i4", "text": "Lungs", "correctPosition": 4 },
        { "id": "i5", "text": "Pulmonary Vein", "correctPosition": 5 },
        { "id": "i6", "text": "Left Atrium", "correctPosition": 6 }
      ]
    },
    {
      "id": "q4",
      "type": "short-answer",
      "question": "Explain the difference between arteries and veins.",
      "points": 25,
      "keywords": ["carry", "blood", "heart", "away", "toward", "oxygenated", "deoxygenated", "walls", "thick", "thin"],
      "minKeywords": 4,
      "modelAnswer": "Arteries carry blood away from the heart (usually oxygenated) and have thick muscular walls. Veins carry blood toward the heart (usually deoxygenated) and have thinner walls with valves.",
      "maxLength": 500
    },
    {
      "id": "q5",
      "type": "image-based",
      "question": "Click on the location of the left ventricle:",
      "points": 10,
      "imageUrl": "../assets/images/heart-diagram.jpg",
      "imageAlt": "Diagram of the human heart showing all four chambers",
      "hotspots": [
        { "id": "h1", "x": 65, "y": 60, "radius": 15, "label": "Left Ventricle", "isCorrect": true },
        { "id": "h2", "x": 35, "y": 60, "radius": 15, "label": "Right Ventricle", "isCorrect": false },
        { "id": "h3", "x": 65, "y": 30, "radius": 12, "label": "Left Atrium", "isCorrect": false },
        { "id": "h4", "x": 35, "y": 30, "radius": 12, "label": "Right Atrium", "isCorrect": false }
      ]
    }
  ]
}
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
    
    <!-- Quiz Container - Populated by JavaScript -->
    <div class="quiz-container" 
         data-quiz-src="../quizzes/topic-01-quiz.json"
         data-quiz-id="pharmacology-intro-quiz">
        
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

### Quiz CSS Styles

Add these styles to `main.css`:

```css
/* ========================================
   Quiz System Styles (v9.4)
   ======================================== */

/* Quiz Section Container */
.quiz-section {
    margin: var(--space-12) 0;
    padding: var(--space-8);
    background: var(--color-bg-primary);
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-lg);
    border: 1px solid var(--color-border);
}

.quiz-header {
    text-align: center;
    margin-bottom: var(--space-8);
}

.quiz-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-2) var(--space-4);
    background: var(--gradient-primary);
    color: white;
    border-radius: var(--radius-full);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-semibold);
    margin-bottom: var(--space-4);
}

.quiz-title {
    font-size: var(--font-size-2xl);
    font-weight: var(--font-weight-bold);
    color: var(--color-text-primary);
    margin-bottom: var(--space-2);
}

.quiz-description {
    color: var(--color-text-secondary);
    font-size: var(--font-size-base);
}

/* Quiz Progress */
.quiz-progress {
    display: flex;
    align-items: center;
    gap: var(--space-4);
    margin-bottom: var(--space-6);
    padding: var(--space-4);
    background: var(--color-bg-tertiary);
    border-radius: var(--radius-lg);
}

.quiz-progress-bar {
    flex: 1;
    height: 8px;
    background: var(--color-border);
    border-radius: var(--radius-full);
    overflow: hidden;
}

.quiz-progress-fill {
    height: 100%;
    background: var(--gradient-primary);
    transition: width var(--transition-base);
}

.quiz-progress-text {
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
    color: var(--color-text-secondary);
    white-space: nowrap;
}
```

```css
/* Question Card */
.quiz-question {
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    padding: var(--space-6);
    margin-bottom: var(--space-6);
    transition: border-color var(--transition-base), box-shadow var(--transition-base);
}

.quiz-question:focus-within {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}

.quiz-question.answered {
    border-color: var(--color-primary-light);
}

.quiz-question.correct {
    border-color: var(--color-success);
    background: rgba(16, 185, 129, 0.05);
}

.quiz-question.incorrect {
    border-color: var(--color-danger);
    background: rgba(239, 68, 68, 0.05);
}

.question-header {
    display: flex;
    align-items: flex-start;
    gap: var(--space-3);
    margin-bottom: var(--space-4);
}

.question-number {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background: var(--gradient-primary);
    color: white;
    border-radius: var(--radius-full);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-bold);
    flex-shrink: 0;
}

.question-text {
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-medium);
    color: var(--color-text-primary);
    line-height: var(--line-height-relaxed);
}

.question-points {
    margin-left: auto;
    padding: var(--space-1) var(--space-3);
    background: var(--color-bg-tertiary);
    border-radius: var(--radius-full);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-medium);
    color: var(--color-text-secondary);
}

/* Multiple Choice / Multiple Select Options */
.quiz-options {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
}

.quiz-option {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    padding: var(--space-4);
    background: var(--color-bg-secondary);
    border: 2px solid var(--color-border);
    border-radius: var(--radius-lg);
    cursor: pointer;
    transition: all var(--transition-fast);
}

.quiz-option:hover {
    background: var(--color-surface-hover);
    border-color: var(--color-primary-light);
}

.quiz-option.selected {
    background: rgba(79, 70, 229, 0.1);
    border-color: var(--color-primary);
}

.quiz-option.correct {
    background: rgba(16, 185, 129, 0.1);
    border-color: var(--color-success);
}

.quiz-option.incorrect {
    background: rgba(239, 68, 68, 0.1);
    border-color: var(--color-danger);
}

.quiz-option input[type="radio"],
.quiz-option input[type="checkbox"] {
    width: 20px;
    height: 20px;
    accent-color: var(--color-primary);
}

.option-text {
    flex: 1;
    font-size: var(--font-size-base);
    color: var(--color-text-primary);
}

.option-indicator {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--font-size-lg);
}
```

```css
/* True/False Buttons */
.true-false-options {
    display: flex;
    gap: var(--space-4);
}

.tf-button {
    flex: 1;
    padding: var(--space-4) var(--space-6);
    border: 2px solid var(--color-border);
    border-radius: var(--radius-lg);
    background: var(--color-bg-secondary);
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-semibold);
    cursor: pointer;
    transition: all var(--transition-fast);
}

.tf-button:hover {
    border-color: var(--color-primary-light);
}

.tf-button.selected {
    border-color: var(--color-primary);
    background: rgba(79, 70, 229, 0.1);
}

.tf-button.true { color: var(--color-success); }
.tf-button.false { color: var(--color-danger); }

/* Fill in the Blank */
.fill-blank-container {
    font-size: var(--font-size-lg);
    line-height: 2;
}

.blank-input {
    display: inline-block;
    min-width: 120px;
    padding: var(--space-2) var(--space-3);
    border: 2px dashed var(--color-border);
    border-radius: var(--radius-md);
    background: var(--color-bg-secondary);
    font-size: var(--font-size-base);
    text-align: center;
    transition: border-color var(--transition-fast);
}

.blank-input:focus {
    outline: none;
    border-color: var(--color-primary);
    border-style: solid;
}

.blank-input.correct {
    border-color: var(--color-success);
    background: rgba(16, 185, 129, 0.1);
}

.blank-input.incorrect {
    border-color: var(--color-danger);
    background: rgba(239, 68, 68, 0.1);
}

/* Matching Question */
.matching-container {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: var(--space-4);
    align-items: start;
}

.matching-column {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
}

.matching-item {
    padding: var(--space-3) var(--space-4);
    background: var(--color-bg-secondary);
    border: 2px solid var(--color-border);
    border-radius: var(--radius-md);
    font-size: var(--font-size-base);
}

.matching-item.dragging {
    opacity: 0.5;
    border-style: dashed;
}

.matching-item.drop-target {
    border-color: var(--color-primary);
    background: rgba(79, 70, 229, 0.1);
}

.matching-connector {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: var(--color-text-muted);
    font-size: var(--font-size-xl);
}

/* Ordering Question */
.ordering-container {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
}

.ordering-item {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    padding: var(--space-3) var(--space-4);
    background: var(--color-bg-secondary);
    border: 2px solid var(--color-border);
    border-radius: var(--radius-md);
    cursor: grab;
    transition: all var(--transition-fast);
}

.ordering-item:active {
    cursor: grabbing;
}

.ordering-item .drag-handle {
    color: var(--color-text-muted);
    font-size: var(--font-size-lg);
}

.ordering-item .position-number {
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-bg-tertiary);
    border-radius: var(--radius-full);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-bold);
    color: var(--color-text-secondary);
}
```

```css
/* Short Answer */
.short-answer-container textarea {
    width: 100%;
    min-height: 120px;
    padding: var(--space-4);
    border: 2px solid var(--color-border);
    border-radius: var(--radius-lg);
    background: var(--color-bg-secondary);
    font-family: var(--font-family-sans);
    font-size: var(--font-size-base);
    line-height: var(--line-height-relaxed);
    resize: vertical;
    transition: border-color var(--transition-fast);
}

.short-answer-container textarea:focus {
    outline: none;
    border-color: var(--color-primary);
}

.char-counter {
    text-align: right;
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
    margin-top: var(--space-2);
}

/* Image-Based Question */
.image-question-container {
    position: relative;
}

.image-question-wrapper {
    position: relative;
    display: inline-block;
    max-width: 100%;
}

.image-question-wrapper img {
    max-width: 100%;
    border-radius: var(--radius-lg);
}

.hotspot {
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 3px solid var(--color-primary);
    background: rgba(79, 70, 229, 0.2);
    cursor: pointer;
    transform: translate(-50%, -50%);
    transition: all var(--transition-fast);
}

.hotspot:hover {
    transform: translate(-50%, -50%) scale(1.2);
    background: rgba(79, 70, 229, 0.4);
}

.hotspot.selected {
    background: var(--color-primary);
    border-color: white;
}

.hotspot.correct {
    background: var(--color-success);
    border-color: white;
}

.hotspot.incorrect {
    background: var(--color-danger);
    border-color: white;
}

/* Feedback & Explanation */
.question-feedback {
    margin-top: var(--space-4);
    padding: var(--space-4);
    border-radius: var(--radius-lg);
    display: flex;
    align-items: flex-start;
    gap: var(--space-3);
}

.question-feedback.correct {
    background: rgba(16, 185, 129, 0.1);
    border: 1px solid var(--color-success);
}

.question-feedback.incorrect {
    background: rgba(239, 68, 68, 0.1);
    border: 1px solid var(--color-danger);
}

.feedback-icon {
    font-size: var(--font-size-xl);
}

.feedback-text {
    flex: 1;
}

.feedback-text strong {
    display: block;
    margin-bottom: var(--space-1);
}

/* Hint Button */
.hint-button {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-2) var(--space-3);
    background: var(--color-bg-tertiary);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
    cursor: pointer;
    transition: all var(--transition-fast);
}

.hint-button:hover {
    background: var(--color-surface-hover);
    color: var(--color-primary);
}

.hint-content {
    margin-top: var(--space-3);
    padding: var(--space-3);
    background: rgba(245, 158, 11, 0.1);
    border-left: 3px solid var(--color-warning);
    border-radius: 0 var(--radius-md) var(--radius-md) 0;
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
}
```

```css
/* Quiz Navigation & Actions */
.quiz-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: var(--space-8);
    padding-top: var(--space-6);
    border-top: 1px solid var(--color-border);
}

.quiz-nav-buttons {
    display: flex;
    gap: var(--space-3);
}

.quiz-button {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-3) var(--space-5);
    border-radius: var(--radius-lg);
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-medium);
    cursor: pointer;
    transition: all var(--transition-fast);
}

.quiz-button--secondary {
    background: var(--color-bg-secondary);
    border: 1px solid var(--color-border);
    color: var(--color-text-primary);
}

.quiz-button--secondary:hover {
    background: var(--color-surface-hover);
    border-color: var(--color-primary-light);
}

.quiz-button--primary {
    background: var(--gradient-primary);
    border: none;
    color: white;
}

.quiz-button--primary:hover {
    opacity: 0.9;
    transform: translateY(-1px);
}

.quiz-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
}

/* Quiz Results */
.quiz-results {
    text-align: center;
    padding: var(--space-8);
}

.results-score {
    font-size: var(--font-size-5xl);
    font-weight: var(--font-weight-bold);
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: var(--space-4);
}

.results-message {
    font-size: var(--font-size-xl);
    color: var(--color-text-secondary);
    margin-bottom: var(--space-6);
}

.results-breakdown {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: var(--space-4);
    margin-bottom: var(--space-8);
}

.breakdown-item {
    padding: var(--space-4);
    background: var(--color-bg-secondary);
    border-radius: var(--radius-lg);
}

.breakdown-value {
    font-size: var(--font-size-2xl);
    font-weight: var(--font-weight-bold);
    color: var(--color-text-primary);
}

.breakdown-label {
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
}

/* Loading State */
.quiz-loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--space-12);
    color: var(--color-text-secondary);
}

.quiz-spinner {
    width: 40px;
    height: 40px;
    border: 3px solid var(--color-border);
    border-top-color: var(--color-primary);
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: var(--space-4);
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

/* Dark Mode Adjustments */
[data-theme="dark"] .quiz-option:hover {
    background: var(--color-bg-tertiary);
}

[data-theme="dark"] .quiz-question.correct {
    background: rgba(16, 185, 129, 0.1);
}

[data-theme="dark"] .quiz-question.incorrect {
    background: rgba(239, 68, 68, 0.1);
}

/* Responsive */
@media (max-width: 768px) {
    .quiz-section {
        padding: var(--space-4);
    }
    
    .matching-container {
        grid-template-columns: 1fr;
    }
    
    .matching-connector {
        display: none;
    }
    
    .true-false-options {
        flex-direction: column;
    }
    
    .quiz-actions {
        flex-direction: column;
        gap: var(--space-4);
    }
}
```

### Quiz JavaScript Integration

Add the quiz script to topic pages:

```html
<!-- In the <head> or before closing </body> -->
<script src="../js/quiz.js"></script>
```

### Updated Directory Structure (v9.4)

```
project-name/
├── index.html                           # Table of Contents (Rich UI)
├── topics/
│   ├── topic-01-introduction.html       # Topic pages with quiz sections
│   ├── topic-02-concepts.html
│   └── ...
├── quizzes/                             # NEW: Quiz JSON files
│   ├── quiz-schema.json                 # Schema definition
│   ├── topic-01-quiz.json               # Quiz for topic 01
│   ├── topic-02-quiz.json               # Quiz for topic 02
│   └── ...
├── assets/
│   └── images/
│       └── [ID]g-[PageNum]-[SeqNum].ext # All extracted images
├── styles/
│   └── main.css                         # Main stylesheet (v9.4 with quiz styles)
└── js/
    ├── navigation.js                    # Navigation helpers
    ├── theme.js                         # Dark mode toggle
    ├── interactions.js                  # UI interactions
    └── quiz.js                          # NEW: Quiz engine
```

### Quiz Implementation Checklist

For each topic with a quiz:

1. ✅ **Create Quiz JSON**: Create `quizzes/topic-XX-quiz.json` following the schema
2. ✅ **Schema Version**: Include `"schemaVersion": "1.0"` for compatibility
3. ✅ **Metadata Complete**: Fill in title, topicId, difficulty, estimatedTime, passingScore
4. ✅ **Question Variety**: Use appropriate question types for the content
5. ✅ **Points Allocation**: Assign points based on question difficulty
6. ✅ **Explanations**: Provide explanations for all questions
7. ✅ **Hints (Optional)**: Add hints for challenging questions
8. ✅ **HTML Integration**: Add quiz section to topic HTML
9. ✅ **Script Loading**: Include quiz.js in the page
10. ✅ **Accessibility**: Verify keyboard navigation and screen reader support
11. ✅ **Dark Mode**: Test quiz appearance in both themes
12. ✅ **Mobile Testing**: Verify responsive behavior on small screens

### Quiz Best Practices

#### Question Writing Guidelines
- **Clear Language**: Use unambiguous wording
- **Single Concept**: Test one concept per question
- **Plausible Distractors**: Make incorrect options believable
- **Avoid Negatives**: Minimize "NOT" or "EXCEPT" questions
- **Consistent Length**: Keep option lengths similar

#### Difficulty Balancing
- **Beginner**: 60% recall, 30% comprehension, 10% application
- **Intermediate**: 40% recall, 40% comprehension, 20% application
- **Advanced**: 20% recall, 40% comprehension, 40% application/analysis

#### Points Distribution
- **Easy Questions**: 5-10 points
- **Medium Questions**: 10-15 points
- **Hard Questions**: 15-25 points
- **Complex (Matching/Ordering)**: 20-30 points

---

## Complete Conversion Workflow (v9.4)

### Workflow Overview
1. **Planning & Setup**: Create conversion plan, prepare environment, gather resources.
2. **Initial Extraction**: Convert PDF to intermediate format (MMD) using Mathpix.
3. **MMD Review & Correction**: Manually review and correct OCR errors, clean artifacts.
4. **Content Chunking**: Divide content into logically coherent sections.
5. **HTML Templating**: Set up base HTML structure with Rich UI components.
6. **Content Transfer & Semantic Conversion**: Move content with proper semantic markup.
7. **100% Content Verification**: Validate verbatim content preservation.
8. **Visual Enhancement & Rich UI Implementation**: Apply styling and interactive components.
9. **Quiz Creation (v9.4 NEW)**: Create quiz JSON files for each topic.
10. **Resource Handling**: Extract/download and organize images.
11. **Technical & Accessibility Validation**: Validate HTML, CSS, links, accessibility.
12. **Finalization**: Link pages, test navigation, verify dark mode, test quizzes.

### Quiz Creation Workflow (v9.4 NEW)

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
2. **NO content creation, modification, summarization, or rephrasing is allowed**
3. **DO NOT "modernize" or "enhance" the meaning or wording of the content**
4. **The ONLY allowed changes are:**
   - Adding HTML structural and semantic tags
   - Applying CSS styling for visual presentation
   - Converting formatting (bold, italic) to HTML elements
   - Adding accessibility attributes
   - Correcting OCR errors identified during MMD review
   - Adding interactive UI components that organize but do not alter content
   - **v9.4 NEW**: Adding quiz sections that test comprehension of the original content

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

                <!-- Quiz Section (v9.4 NEW) -->
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
