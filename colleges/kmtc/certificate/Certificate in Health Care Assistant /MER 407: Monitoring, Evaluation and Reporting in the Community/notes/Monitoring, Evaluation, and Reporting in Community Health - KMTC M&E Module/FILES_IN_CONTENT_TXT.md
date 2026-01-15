# Files Found Inside content.txt

## Summary
The `content.txt` file contains **9 embedded code blocks** that can be extracted:
- **4 HTML files** (web pages)
- **5 JSON files** (quiz data)
- **0 JavaScript files** (JS code is embedded in HTML `<script>` tags)

## Detailed Breakdown

### HTML Files (4 total)

#### 1. **index.html** (Line 11)
- **Title**: "Monitoring, Evaluation, and Reporting - Table of Contents"
- **Purpose**: Main landing page
- **Features**:
  - Hero section with course overview
  - 4 topic cards (Units 1-4)
  - Link to quiz hub
  - Inline JavaScript for theme toggle
- **JavaScript**: Embedded in `<script>` tag (theme toggle functionality)

#### 2. **topic-01-concepts.html** (Line 169)
- **Title**: "Concepts in Community Health Information System"
- **Purpose**: Unit 1 content page
- **Features**:
  - Definitions of M&E terms
  - Monitoring cycle
  - Importance of monitoring
  - Key players and indicators
  - Quiz section
- **JavaScript**: References external files:
  - `../js/theme.js`
  - `../js/navigation.js`
  - `../js/interactions.js`
  - `../js/quiz.js`

#### 3. **topic-03-evaluation.html** (Line 700)
- **Title**: "Monitoring, Evaluation Frameworks and Performance"
- **Purpose**: Unit 3 content page
- **Features**:
  - M&E definitions and importance
  - Monitoring plans and frameworks
  - Types of indicators
  - Evaluation approaches
  - Quiz section
- **JavaScript**: References same external files as topic-01

#### 4. **topic-04-supervision.html** (Line 1444)
- **Title**: "Facilitative Supervision in the Community"
- **Purpose**: Unit 4 content page
- **Features**:
  - Supervision principles
  - Mentorship and coaching
  - Counseling skills
  - Conflict resolution
  - Quiz section
- **JavaScript**: References same external files as topic-01

### JSON Files (5 total)

#### 1. **topic-01-quiz.json** (Line 2494)
- **Title**: "Quiz 1: Fundamentals of M&E and CHIS"
- **Questions**: 10
- **Focus**: Definitions, Monitoring Cycle, SMART Indicators
- **Time Limit**: 20 minutes
- **Passing Score**: 70%

#### 2. **topic-02-quiz.json** (Line 2656)
- **Title**: "Quiz 2: Data Collection Tools & Reporting"
- **Questions**: 10
- **Focus**: MOH Tools (513, 514, 515, 100), Data Sources
- **Time Limit**: 20 minutes
- **Passing Score**: 70%

#### 3. **topic-03-quiz.json** (Line 2816)
- **Title**: "Quiz 3: M&E Frameworks & Evaluation"
- **Questions**: 10
- **Focus**: Logic Models, Types of Indicators, Evaluation Approaches
- **Time Limit**: 20 minutes
- **Passing Score**: 70%

#### 4. **topic-04-quiz.json** (Line 2975)
- **Title**: "Quiz 4: Facilitative Supervision"
- **Questions**: 10
- **Focus**: Supervision types, Principles, Tasks, Qualities
- **Time Limit**: 20 minutes
- **Passing Score**: 70%

#### 5. **topic-05-quiz.json** (Line 3130)
- **Title**: "Quiz 5: Mentorship, Coaching & Conflict"
- **Questions**: 10
- **Focus**: Soft skills, Mentoring phases, Counseling, Conflict management
- **Time Limit**: 20 minutes
- **Passing Score**: 70%

## Missing Files

### HTML Files NOT in content.txt
- **topic-02-data-collection.html** - Referenced in index.html but not included
- **quiz-hub.html** - Referenced in navigation but not included
- **comprehensive-exam.html** - Referenced in topic-04 navigation but not included

### JavaScript Files NOT in content.txt
The following JS files are referenced in the HTML but NOT included as separate code blocks:
- **js/theme.js** - Theme toggle functionality
- **js/navigation.js** - Navigation and reading progress
- **js/interactions.js** - Interactive elements (lightbox, etc.)
- **js/quiz.js** - Quiz loading and functionality

**Note**: The index.html has inline JavaScript for theme toggle, but the topic pages reference external JS files that are not in content.txt.

### CSS Files NOT in content.txt
- **styles/main.css** - Main stylesheet (referenced in all HTML files)

## JavaScript Code Locations

### Inline JavaScript (in HTML)
1. **index.html** contains inline `<script>` tag with:
   - Theme toggle functionality
   - localStorage management
   - Event listeners

### External JavaScript (referenced but not included)
All topic HTML files reference these external JS files:
```html
<script src="../js/theme.js"></script>
<script src="../js/navigation.js"></script>
<script src="../js/interactions.js"></script>
<script src="../js/quiz.js"></script>
```

These files are **NOT** present in content.txt as separate code blocks.

## Extraction Status

✅ **Successfully Extracted** (9 files):
- index.html
- topic-01-concepts.html
- topic-03-evaluation.html
- topic-04-supervision.html
- topic-01-quiz.json
- topic-02-quiz.json
- topic-03-quiz.json
- topic-04-quiz.json
- topic-05-quiz.json

❌ **Missing from content.txt** (8+ files):
- topic-02-data-collection.html
- quiz-hub.html
- comprehensive-exam.html
- js/theme.js
- js/navigation.js
- js/interactions.js
- js/quiz.js
- styles/main.css

## Recommendations

To complete the website, you need to:

1. **Create the missing HTML page**:
   - topic-02-data-collection.html (Data Collection and Reporting)

2. **Create the JavaScript files**:
   - Extract the inline JS from index.html to create theme.js
   - Create navigation.js for reading progress and scroll tracking
   - Create interactions.js for lightbox and other interactive elements
   - Create quiz.js to load and render the JSON quiz files

3. **Create the CSS file**:
   - styles/main.css with all component styles

4. **Optional pages**:
   - quiz-hub.html (central quiz listing)
   - comprehensive-exam.html (final exam)

---

**File**: content.txt  
**Location**: `/home/ngobiro/projects/pngobiro.github.io/colleges/kmtc/certificate/Certificate in Health Care Assistant/MER 407: Monitoring, Evaluation and Reporting in the Community/notes/Monitoring, Evaluation, and Reporting in Community Health - KMTC M&E Module/`  
**Total Lines**: 3,292  
**Code Blocks Found**: 9 (4 HTML + 5 JSON)
