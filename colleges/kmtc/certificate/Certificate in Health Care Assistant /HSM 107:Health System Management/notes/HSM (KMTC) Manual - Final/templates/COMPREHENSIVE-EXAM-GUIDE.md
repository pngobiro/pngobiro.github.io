# Comprehensive Exam Template Guide

## Template: `comprehensive-exam-template.html`

This template is designed for creating comprehensive exams that test knowledge across multiple course topics.

## Placeholders to Replace

### Page Title & Header
- `[EXAM TITLE]` - Full exam title (e.g., "Health System Management Final Exam")
- `[COURSE NAME]` - Course name (e.g., "HSM 107")

### Exam Info Cards
Replace the `[X]` values in the info cards:
```html
<span class="info-value">[X] Topics</span>     <!-- e.g., "12 Topics" -->
<span class="info-value">[X] Questions</span>  <!-- e.g., "50 Questions" -->
<span class="info-value">[X] Minutes</span>    <!-- e.g., "60 Minutes" -->
<span class="info-value">[X]%</span>           <!-- e.g., "70%" -->
```

### Topics Covered List
Add or remove topic tags as needed:
```html
<div class="topics-list">
    <span class="topic-tag">Topic 1: Introduction to Health Systems</span>
    <span class="topic-tag">Topic 2: Healthcare Organization</span>
    <span class="topic-tag">Topic 3: Quality Management</span>
    <!-- Add more topics -->
</div>
```

### Exam Instructions
Update the instructions to match your exam settings:
```html
<li>You have <strong>[X] minutes</strong> to complete the exam</li>
<li>A score of <strong>[X]% or higher</strong> is required to pass</li>
```

### Quiz Data File
Ensure the quiz data file path is correct:
```html
data-quiz-js="quizzes/comprehensive-exam.js"
```

## Example: Complete Replacement

### Before:
```html
<title>[EXAM TITLE] - [COURSE NAME]</title>
<h1 class="document-title">[EXAM TITLE]</h1>
```

### After:
```html
<title>Health System Management Final Exam - HSM 107</title>
<h1 class="document-title">Health System Management Final Exam</h1>
```

## Quiz Data File Structure

Create `quizzes/comprehensive-exam.js` with this structure:

```javascript
registerQuiz("comprehensive-exam", {
  "schemaVersion": "1.0",
  "quizId": "comprehensive-exam",
  "metadata": {
    "title": "Health System Management Final Exam",
    "description": "Comprehensive assessment covering all course topics",
    "examType": "comprehensive",
    "topicsCovered": ["topic-01", "topic-02", "topic-03", "topic-04"],
    "difficulty": "advanced",
    "estimatedTime": 60,
    "passingScore": 70,
    "createdAt": "2026-01-15T00:00:00Z",
    "tags": ["final", "comprehensive", "all-topics"]
  },
  "settings": {
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "showFeedback": "end",
    "allowRetry": true,
    "showCorrectAnswers": true,
    "timeLimit": 3600  // 60 minutes in seconds
  },
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "question": "What is the primary goal of health system management?",
      "points": 10,
      "topicId": "topic-01",
      "topicName": "Introduction to Health Systems",
      "options": [
        { "id": "a", "text": "Maximize profits", "isCorrect": false },
        { "id": "b", "text": "Improve population health outcomes", "isCorrect": true },
        { "id": "c", "text": "Reduce staff workload", "isCorrect": false },
        { "id": "d", "text": "Increase patient volume", "isCorrect": false }
      ],
      "explanation": "The primary goal is to improve population health outcomes through effective management of resources and services."
    }
    // Add more questions...
  ]
});
```

## Important Notes

### Path Resolution
Since this file is in the **root directory**, use these paths:
- **Images**: `assets/images/filename.jpg`
- **Stylesheets**: `styles/main.css`
- **Scripts**: `js/script-name.js`
- **Quiz data**: `quizzes/comprehensive-exam.js`

### Quiz Question Requirements
For comprehensive exams, each question MUST include:
- `topicId` - Identifier matching the topic (e.g., "topic-01")
- `topicName` - Display name of the topic (e.g., "Introduction to Health Systems")

This enables topic-based scoring in the results display.

### Features Included

1. **Theme Toggle** - Light/dark mode with localStorage persistence
2. **Accessibility** - Skip links, ARIA labels, semantic HTML
3. **Responsive Design** - Mobile-friendly layout
4. **Loading States** - Spinner while quiz loads
5. **Navigation** - Links to home and quiz hub
6. **Instructions** - Clear exam guidelines
7. **Info Cards** - Visual display of exam metadata

## Customization Options

### Change Exam Type Badge
```html
<div class="header-badge exam-badge">
    <span>🎓</span>
    <span>Comprehensive Exam</span>  <!-- Change to: Midterm, Final, Practice, etc. -->
</div>
```

### Modify Subtitle
```html
<p class="exam-subtitle">Test your knowledge across all course topics</p>
```

### Add More Info Cards
```html
<div class="exam-info-card">
    <span class="info-icon">📊</span>
    <span class="info-value">100 Points</span>
    <span class="info-label">Total Points</span>
</div>
```

### Customize Instructions
Add or remove instruction items in the callout:
```html
<li>Open book exam - you may reference course materials</li>
<li>No collaboration allowed</li>
<li>Save your progress regularly</li>
```

## Testing Checklist

Before deploying your exam:

- [ ] All placeholders replaced with actual values
- [ ] Quiz data file created and linked correctly
- [ ] Topics list matches actual topics in quiz data
- [ ] Exam info cards show correct numbers
- [ ] Instructions reflect actual exam rules
- [ ] Theme toggle works in both modes
- [ ] Navigation links point to correct pages
- [ ] Quiz loads without errors
- [ ] Questions display correctly
- [ ] Results show topic breakdown
- [ ] Mobile responsive layout works
- [ ] Accessibility features tested

## File Locations

After customization, save as:
```
project/
├── comprehensive-exam.html          ← Your customized exam page
├── quizzes/
│   └── comprehensive-exam.js        ← Quiz data file
├── styles/
│   └── main.css                     ← Ensure quiz styles included
└── js/
    ├── theme.js                     ← Theme toggle script
    └── quiz.js                      ← Quiz engine script
```

## Support

For detailed quiz system documentation, see:
- `prompts/pdf-to-html-conversion-prompt-v9.6.md` - Complete system documentation
- `README-TEMPLATES.md` - Overview of all templates

---

**Template Version**: 1.0  
**Last Updated**: January 15, 2026  
**Compatible With**: Quiz System v1.0
