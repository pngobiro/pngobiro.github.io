# File Extraction Summary

## Source
- **File**: `content.txt`
- **Location**: `/home/ngobiro/projects/pngobiro.github.io/colleges/kmtc/certificate/Certificate in Health Care Assistant/MER 407: Monitoring, Evaluation and Reporting in the Community/notes/Monitoring, Evaluation, and Reporting in Community Health - KMTC M&E Module/`

## Extraction Results

### ✅ Successfully Extracted: 9 files

#### HTML Files (4)
1. ✓ `output/index.html` - Main landing page with course overview
2. ✓ `output/topics/topic-01-concepts.html` - Concepts in Community Health Information System
3. ✓ `output/topics/topic-03-evaluation.html` - M&E Frameworks and Performance
4. ✓ `output/topics/topic-04-supervision.html` - Facilitative Supervision

#### JSON Quiz Files (5)
1. ✓ `output/quizzes/topic-01-quiz.json` - Quiz 1: Fundamentals of M&E and CHIS
2. ✓ `output/quizzes/topic-02-quiz.json` - Quiz 2: Data Collection Tools & Reporting
3. ✓ `output/quizzes/topic-03-quiz.json` - Quiz 3: M&E Frameworks & Evaluation
4. ✓ `output/quizzes/topic-04-quiz.json` - Quiz 4: Facilitative Supervision
5. ✓ `output/quizzes/topic-05-quiz.json` - Quiz 5: Mentorship, Coaching & Conflict

### ⚠️ Missing/Not Found

#### HTML Files
- `topic-02-data-collection.html` - Referenced in index.html but not found in content.txt

#### JavaScript Files
The following JS files are referenced in the HTML but were not found in content.txt:
- `js/theme.js` - Theme toggle functionality
- `js/navigation.js` - Navigation functionality
- `js/interactions.js` - Interactive elements
- `js/quiz.js` - Quiz functionality

#### CSS Files
- `styles/main.css` - Main stylesheet (referenced but not in content.txt)

## File Statistics

| Type | Count | Total Size |
|------|-------|------------|
| HTML | 4 | ~200KB |
| JSON | 5 | ~50KB |
| **Total** | **9** | **~250KB** |

## Quiz Statistics

Each quiz contains:
- **Questions per quiz**: 10
- **Total questions**: 50 across all quizzes
- **Question types**: 7 different types (multiple-choice, multiple-select, true-false, fill-blank, matching, ordering, short-answer)
- **Time limit**: 20 minutes per quiz
- **Passing score**: 70%

## Next Steps

To complete the website, you need to:

1. **Create missing HTML file**:
   - `topics/topic-02-data-collection.html` (Data Collection and Reporting)

2. **Create JavaScript files**:
   - `js/theme.js` - Implement theme switching
   - `js/navigation.js` - Handle page navigation
   - `js/interactions.js` - Handle interactive elements
   - `js/quiz.js` - Implement quiz functionality

3. **Create CSS file**:
   - `styles/main.css` - Main stylesheet with all component styles

4. **Optional enhancements**:
   - `quiz-hub.html` - Central quiz hub page
   - `comprehensive-exam.html` - Final comprehensive exam

## Extraction Method

Files were extracted using a Python script (`extract_files.py`) that:
1. Reads content.txt
2. Identifies code blocks marked with `code Html`, `code JSON`, or `code JavaScript`
3. Extracts and saves each block to appropriate directories
4. Validates JSON files for proper formatting

## Verification

All extracted files have been verified for:
- ✓ Valid HTML structure
- ✓ Valid JSON syntax
- ✓ Proper file naming conventions
- ✓ Correct directory structure

## Usage

To use the extracted files:

```bash
# Copy to your project directory
cp -r output/* /path/to/your/project/

# Or move the entire output directory
mv output /path/to/your/project/mer-407-module
```

## Support Files Needed

To make the website fully functional, create these additional files based on the HTML references:

1. **styles/main.css** - Should include styles for:
   - Layout (page-wrapper, container)
   - Navigation (document-nav, nav-button)
   - Cards (topic-card, content-card, definition-card)
   - Quiz components (quiz-section, quiz-container)
   - Theme variables (light/dark mode)
   - Responsive breakpoints

2. **js/theme.js** - Should implement:
   - Theme toggle functionality
   - LocalStorage persistence
   - Dark/light mode switching

3. **js/quiz.js** - Should implement:
   - Quiz loading from JSON
   - Question rendering
   - Answer validation
   - Score calculation
   - Results display

4. **js/navigation.js** - Should implement:
   - Reading progress tracking
   - Smooth scrolling
   - Active section highlighting

5. **js/interactions.js** - Should implement:
   - Lightbox for images
   - Collapsible sections
   - Tooltips
   - Animations

---

**Generated**: 2025-01-15
**Tool**: extract_files.py
**Status**: ✅ Complete
