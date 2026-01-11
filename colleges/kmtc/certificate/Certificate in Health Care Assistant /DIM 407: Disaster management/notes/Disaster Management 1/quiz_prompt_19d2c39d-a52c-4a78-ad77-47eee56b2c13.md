# AI Quiz Generator Prompt Template

## How to Use This Prompt

1. Copy the entire prompt below
2. Paste it into any AI assistant (ChatGPT, Claude, Gemini, etc.)
3. Attach or paste your study material/content after the prompt
4. The AI will generate a quiz JSON file following your exact specifications

---

## THE PROMPT (Copy Everything Below This Line)

---

You are a quiz generator for an Android educational app. Your task is to create **engaging, challenging, and comprehensive** quiz questions from the provided study material following a **STRICT JSON format**.

## ⚠️ CRITICAL FORMAT REQUIREMENTS

### MANDATORY Fields for Quiz File
Every quiz JSON file MUST include these fields at the root level:
```json
{
  "id": "cert_health_care_assistant_dim_407__disaster_management_1767976593743_19d2c39d-a52c-4a78-ad77-47eee56b2c13_001",
  "title": "Quiz 1: [Quiz Title]",
  "subjectId": "cert_health_care_assistant_dim_407__disaster_management_1767976593743",           // ⚠️ REQUIRED - Must match subject folder
  "topicId": "19d2c39d-a52c-4a78-ad77-47eee56b2c13",
  "topicName": "Disaster Management",
  "description": "[Brief description]",
  "isPaid": true,                         // false only for communication
  "timeLimit": 20,                        // minutes
  "passingScore": 70,                     // ⚠️ REQUIRED - percentage
  "version": 1,                           // ⚠️ REQUIRED - default to 1
  "order": 1,                             // ⚠️ REQUIRED - sequential number
  "questions": []
}
```

### MANDATORY Fields for EVERY Question
```json
{
  "id": "q1",                             // ⚠️ REQUIRED
  "type": "multiple-choice",              // ⚠️ REQUIRED - use HYPHENS not underscores
  "question": "Question text",            // ⚠️ REQUIRED
  "points": 10,                           // ⚠️ REQUIRED - 10, 15, or 20
  "explanation": "Why this is correct",   // ⚠️ REQUIRED
  "hint": "Optional hint"                 // Recommended
}
```

## 🚫 COMMON MISTAKES TO AVOID

### ❌ WRONG Type Names (DO NOT USE):
- `multiple_choice` ❌
- `true_false` ❌
- `fill_in_blank` ❌
- `multiple_select` ❌
- `short_answer` ❌

### ✅ CORRECT Type Names (USE THESE):
- `multiple-choice` ✅
- `true-false` ✅
- `fill-blank` ✅
- `multiple-select` ✅
- `short-answer` ✅
- `matching` ✅
- `ordering` ✅

### ❌ WRONG Options Format:
```json
"options": [
  "Option A text",
  "Option B text"
]
```

### ✅ CORRECT Options Format:
```json
"options": [
  { "id": "a", "text": "Option A text", "isCorrect": false },
  { "id": "b", "text": "Option B text", "isCorrect": true }
]
```

## 🎯 QUIZ DESIGN PHILOSOPHY

### Optimal Quiz Structure
- **Questions per Quiz:** 8-12 questions (IDEAL: 10 questions)
- **Total Quizzes per Subject:** 4-6 quizzes covering ALL key areas
- **Goal:** Comprehensive coverage with focused, quality questions—NOT quantity

### Coverage Strategy
```
✅ DO: Create fewer quizzes that cover topics DEEPLY
❌ DON'T: Create many quizzes with shallow, repetitive questions
```

**Example for a Subject:**
- Quiz 1: Fundamentals & Core Concepts (10 questions)
- Quiz 2: Practical Applications (10 questions)
- Quiz 3: Advanced Topics & Analysis (10 questions)
- Quiz 4: Comprehensive Review & Integration (8-10 questions)

## 📊 BALANCED QUESTION TYPE DISTRIBUTION

Use this distribution to create variety and challenge:

| Type | Percentage | Per 10 Questions | Engagement Level |
|------|------------|------------------|------------------|
| Multiple Choice | 30-35% | 3-4 | Medium |
| True/False | 10-15% | 1-2 | Low |
| Multiple Select | 15-20% | 1-2 | High |
| Fill-in-the-Blank | 10-15% | 1-2 | High |
| Matching | 10-15% | 1 | High |
| Ordering | 5-10% | 1 | High |
| Short Answer | 5-10% | 1 | Very High |

**Key Principle:** Balance easy recall questions with challenging application questions.

---

## QUESTION TYPES (7 Types Available)

### 1. Multiple Choice Question (`multiple-choice`)
```json
{
  "id": "q1",
  "type": "multiple-choice",
  "question": "Your question text here?",
  "points": 10,
  "options": [
    { "id": "a", "text": "Option A text", "isCorrect": false },
    { "id": "b", "text": "Option B text", "isCorrect": true },
    { "id": "c", "text": "Option C text", "isCorrect": false },
    { "id": "d", "text": "Option D text", "isCorrect": false }
  ],
  "explanation": "Detailed explanation of why the correct answer is correct.",
  "hint": "Optional hint to help the user."
}
```

### 2. True/False Question (`true-false`)
```json
{
  "id": "q2",
  "type": "true-false",
  "question": "Statement to evaluate as true or false.",
  "points": 10,
  "correctAnswer": true,
  "explanation": "Explanation of why this is true/false.",
  "hint": "Optional hint."
}
```

### 3. Multiple Select Question (`multiple-select`)
```json
{
  "id": "q3",
  "type": "multiple-select",
  "question": "Which of the following are correct? (Select all that apply)",
  "points": 15,
  "options": [
    { "id": "a", "text": "Option A", "isCorrect": true },
    { "id": "b", "text": "Option B", "isCorrect": false },
    { "id": "c", "text": "Option C", "isCorrect": true },
    { "id": "d", "text": "Option D", "isCorrect": true },
    { "id": "e", "text": "Option E", "isCorrect": false }
  ],
  "partialCredit": true,
  "explanation": "Explanation of all correct answers.",
  "hint": "Optional hint."
}
```

### 4. Fill-in-the-Blank Question (`fill-blank`)
```json
{
  "id": "q4",
  "type": "fill-blank",
  "question": "The capital of Ghana is ___BLANK___ and it was founded in ___BLANK___.",
  "points": 15,
  "blanks": [
    { "id": "blank1", "acceptedAnswers": ["Accra", "accra"] },
    { "id": "blank2", "acceptedAnswers": ["1877", "eighteen seventy-seven"] }
  ],
  "caseSensitive": false,
  "explanation": "Accra is the capital of Ghana, founded in 1877.",
  "hint": "Think about the largest city in Ghana."
}
```

### 5. Matching Question (`matching`)
```json
{
  "id": "q5",
  "type": "matching",
  "question": "Match each country with its capital city:",
  "points": 20,
  "pairs": [
    { "id": "p1", "left": "Ghana", "right": "Accra" },
    { "id": "p2", "left": "Nigeria", "right": "Abuja" },
    { "id": "p3", "left": "Kenya", "right": "Nairobi" },
    { "id": "p4", "left": "South Africa", "right": "Pretoria" }
  ],
  "partialCredit": true,
  "explanation": "Ghana-Accra, Nigeria-Abuja, Kenya-Nairobi, South Africa-Pretoria.",
  "hint": "Think about the administrative centers of each country."
}
```

### 6. Ordering Question (`ordering`)
```json
{
  "id": "q6",
  "type": "ordering",
  "question": "Arrange the following steps in the correct order:",
  "points": 20,
  "items": [
    { "id": "item1", "text": "First step", "correctPosition": 1 },
    { "id": "item2", "text": "Second step", "correctPosition": 2 },
    { "id": "item3", "text": "Third step", "correctPosition": 3 },
    { "id": "item4", "text": "Fourth step", "correctPosition": 4 }
  ],
  "partialCredit": true,
  "explanation": "The correct order is: First, Second, Third, Fourth.",
  "hint": "Start with what happens first."
}
```

### 7. Short Answer Question (`short-answer`)
```json
{
  "id": "q7",
  "type": "short-answer",
  "question": "What is the term for a formal written request to a higher authority?",
  "points": 15,
  "acceptedAnswers": ["petition", "Petition", "a petition", "A petition"],
  "caseSensitive": false,
  "partialMatch": false,
  "explanation": "A petition is a formal written request to a higher authority.",
  "hint": "It starts with the letter 'P'."
}
```

---

## 🎨 RICH CONTENT - MANDATORY USAGE

### ⚠️ CRITICAL: Rich Content Requirements
- **Minimum 30-40% of questions MUST include rich content**
- Rich content makes quizzes engaging, visual, and memorable
- Use tables for data, HTML for passages, LaTeX for formulas

### Rich Content Types

#### 1. HTML Content (Passages, Styled Text, Scenarios)
```json
"richContent": {
  "type": "html",
  "content": "<div style='background:#f9f9f9; padding:15px; border-left:5px solid #2196F3;'><h4 style='margin-top:0; color:#1565C0;'>Reading Passage</h4><p style='line-height:1.6;'>Your passage text here with <strong>bold</strong> and <em>italic</em> formatting...</p></div>"
}
```

**Use For:**
- Reading comprehension passages
- Case studies and scenarios
- Document layout examples
- Definitions and key concepts
- Error identification exercises

#### 2. Data Tables
```json
"richContent": {
  "type": "table",
  "content": "<table style='width:100%; border-collapse:collapse;'><thead><tr style='background:#1976d2; color:white;'><th style='padding:12px; border:1px solid #ddd;'>Header 1</th><th style='padding:12px; border:1px solid #ddd;'>Header 2</th></tr></thead><tbody><tr><td style='padding:10px; border:1px solid #ddd;'>Data 1</td><td style='padding:10px; border:1px solid #ddd;'>Data 2</td></tr></tbody></table>"
}
```

**Use For:**
- Financial data analysis
- Comparison questions
- Meeting agendas
- Statistical information
- Budget breakdowns

#### 3. Mathematical Equations (LaTeX)
```json
"richContent": {
  "type": "latex",
  "content": "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}"
}
```

**Common LaTeX Examples:**
- Fractions: `\\frac{numerator}{denominator}`
- Square root: `\\sqrt{x}`
- Percentages: `\\frac{25}{100} \\times 500`
- Interest: `I = \\frac{P \\times R \\times T}{100}`

#### 4. YouTube Videos (for multimedia questions)
```json
"richContent": {
  "type": "youtube",
  "content": "VIDEO_ID_HERE"
}
```

---

## 🧠 CREATIVE & ENGAGING QUESTION DESIGN

### Question Design Principles

1. **Scenario-Based Questions**
   - Present real-world office situations
   - Use case studies from government/business contexts
   - Create "What would you do?" scenarios

2. **Visual Analysis Questions**
   - Show document layouts and ask about format
   - Display tables and ask for interpretation
   - Present diagrams and ask for identification

3. **Error Identification**
   - Show text with highlighted errors
   - Ask students to identify and correct mistakes
   - Use grammar, formatting, or procedural errors

4. **Application Questions**
   - Don't just test recall—test understanding
   - Ask "Why?" and "How?" not just "What?"
   - Connect concepts to practical situations

### Example: Transforming Boring → Engaging

❌ **Boring Question:**
```json
{
  "question": "What is an agenda?",
  "options": [
    {"text": "A list of items for a meeting", "isCorrect": true},
    {"text": "A type of letter", "isCorrect": false}
  ]
}
```

✅ **Engaging Question:**
```json
{
  "question": "Review the Meeting Agenda table below. Which standard items are MISSING from this formal agenda?",
  "richContent": {
    "type": "table",
    "content": "<table style='width:100%; border-collapse:collapse;'><thead><tr style='background:#1976d2; color:white;'><th style='padding:8px;'>Item</th><th style='padding:8px;'>Description</th></tr></thead><tbody><tr><td style='padding:8px;'>1</td><td style='padding:8px;'>Call to Order</td></tr><tr><td style='padding:8px;'>2</td><td style='padding:8px;'>Reading of Minutes</td></tr><tr><td style='padding:8px;'>3</td><td style='padding:8px;'>Adjournment</td></tr></tbody></table>"
  },
  "type": "multiple-select",
  "options": [
    {"id": "a", "text": "Matters Arising", "isCorrect": true},
    {"id": "b", "text": "Any Other Business (AOB)", "isCorrect": true},
    {"id": "c", "text": "Call to Order", "isCorrect": false}
  ]
}
```

---

## 📈 DIFFICULTY PROGRESSION

### Within Each Quiz
- **Questions 1-3:** Easy (warm-up, confidence building)
- **Questions 4-7:** Medium (core concepts, application)
- **Questions 8-10:** Hard (analysis, synthesis, challenge)

### Across Quizzes
- **Quiz 1:** 40% Easy, 50% Medium, 10% Hard
- **Quiz 2-3:** 30% Easy, 50% Medium, 20% Hard
- **Quiz 4+:** 20% Easy, 50% Medium, 30% Hard

### Points by Difficulty
| Difficulty | Points | Question Types |
|------------|--------|----------------|
| Easy | 10 pts | True/False, Simple MCQ |
| Medium | 15 pts | MCQ, Fill-blank, Multiple-select |
| Hard | 20-25 pts | Matching, Ordering, Short-answer with rich content |

---

## MEDIA ATTACHMENTS (Optional)

### Images (Stored in Assets)
```json
"media": {
  "type": "image",
  "url": "quizzes/[subject]/images/[filename].png",
  "caption": "Optional image description"
}
```

### Audio (Stored in Assets)
```json
"media": {
  "type": "audio",
  "url": "quizzes/[subject]/audio/[filename].mp3",
  "caption": "Audio description"
}
```

**Storage Locations:**
- Images: `app/src/main/assets/quizzes/[subject]/images/`
- Audio: `app/src/main/assets/quizzes/[subject]/audio/`

---

## ✅ GENERATION CHECKLIST

Before finalizing your quiz, verify:

### Format Validation
- [ ] `subjectId` field is present and matches folder name
- [ ] `passingScore` field is present (usually 70)
- [ ] `order` field is present with sequential number
- [ ] All question types use **HYPHENS** (e.g., `multiple-choice`, NOT `multiple_choice`)
- [ ] Every question has `points` field (10, 15, or 20)
- [ ] Every question has `explanation` field
- [ ] Options use object format: `{ "id": "a", "text": "...", "isCorrect": true/false }`
- [ ] **Run validation script:** `python3 scripts/validate_quiz.py your_quiz.json`

### Content Validation
- [ ] **8-12 questions** (not more, not less)
- [ ] **All 7 question types** represented (or at least 5 types)
- [ ] **30-40% have rich content** (tables, HTML, LaTeX)
- [ ] **50%+ questions have hints**
- [ ] **Difficulty progression** (easy → medium → hard)
- [ ] **Covers key topic areas** comprehensively
- [ ] **Engaging scenarios** (not just recall questions)
- [ ] **Time limit** = questions × 2 minutes
- [ ] **Title Format:** "Quiz X: [Title]" where X = order number
- [ ] **Validation script passes** with no errors

---

## YOUR TASK

Generate a quiz based on the following study material.

**Quiz Parameters:**
- **Course Name:** Course Name
- **Subject Name:** Subject Name
- **Subject ID:** cert_health_care_assistant_dim_407__disaster_management_1767976593743
- **Topic ID:** 19d2c39d-a52c-4a78-ad77-47eee56b2c13
- **Topic Name:** Disaster Management
- **Quiz Title:** Quiz X: [TITLE]
- **Order:** [X]
- **Questions:** 8-12 (recommend 10)
- **Difficulty Mix:** [easy/medium/hard/mixed]
- **Rich Content:** YES (minimum 30-40% of questions)

**Remember:**
- Use **HYPHENS** in type names: `multiple-choice`, `true-false`, `fill-blank`
- Include **ALL required fields**: `subjectId`, `passingScore`, `order`, `points`
- Use **OBJECT format** for options: `{ "id": "a", "text": "...", "isCorrect": true }`
- Cover ALL key areas from the material
- Use VARIETY in question types
- Make questions ENGAGING with scenarios and visuals
- Include RICH CONTENT (tables, passages, formulas)
- Challenge students to THINK, not just memorize

---

**STUDY MATERIAL:**

[PASTE YOUR CONTENT HERE]

---

## END OF PROMPT
