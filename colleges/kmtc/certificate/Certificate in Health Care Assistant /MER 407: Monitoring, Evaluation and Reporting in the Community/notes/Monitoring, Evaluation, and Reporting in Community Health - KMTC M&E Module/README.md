# Extracted Files from Content.txt

## Overview
This directory contains HTML, JSON, and JavaScript files extracted from the `content.txt` file for the KMTC Certificate in Health Care Assistant - MER 407: Monitoring, Evaluation and Reporting in the Community module.

## Directory Structure

```
output/
├── index.html                          # Main landing page
├── topics/                             # Topic/Unit HTML pages
│   ├── topic-01-concepts.html         # Unit 1: Concepts in CHIS
│   ├── topic-03-evaluation.html       # Unit 3: M&E Frameworks
│   └── topic-04-supervision.html      # Unit 4: Facilitative Supervision
└── quizzes/                            # Quiz JSON files
    ├── topic-01-quiz.json             # Quiz 1: Fundamentals of M&E and CHIS
    ├── topic-02-quiz.json             # Quiz 2: Data Collection Tools & Reporting
    ├── topic-03-quiz.json             # Quiz 3: M&E Frameworks & Evaluation
    ├── topic-04-quiz.json             # Quiz 4: Facilitative Supervision
    └── topic-05-quiz.json             # Quiz 5: Mentorship, Coaching & Conflict
```

## Files Extracted

### HTML Files (4 total)

1. **index.html** - Main table of contents page
   - Hero section with course overview
   - 4 unit cards with descriptions
   - Links to quiz hub
   - Theme toggle functionality

2. **topics/topic-01-concepts.html** - Concepts in Community Health Information System
   - Definitions of M&E terms
   - Monitoring cycle
   - Importance of monitoring
   - Key players
   - Indicators

3. **topics/topic-03-evaluation.html** - Monitoring, Evaluation and Reporting Community Health Performance
   - M&E definitions and importance
   - Monitoring plans and frameworks
   - Types of indicators
   - Evaluation approaches and types

4. **topics/topic-04-supervision.html** - Facilitative Supervision in the Community
   - Supervision principles
   - Mentorship and coaching
   - Counseling skills
   - Conflict resolution

### JSON Quiz Files (5 total)

Each quiz file contains:
- Quiz metadata (id, title, description, time limit, passing score)
- Multiple question types:
  - Multiple choice
  - Multiple select
  - True/False
  - Fill in the blank
  - Matching
  - Ordering
  - Short answer
- Points allocation
- Explanations and hints

1. **topic-01-quiz.json** - Fundamentals of M&E and CHIS (10 questions)
2. **topic-02-quiz.json** - Data Collection Tools & Reporting (10 questions)
3. **topic-03-quiz.json** - M&E Frameworks & Evaluation (10 questions)
4. **topic-04-quiz.json** - Facilitative Supervision (10 questions)
5. **topic-05-quiz.json** - Mentorship, Coaching & Conflict (10 questions)

## Missing Files

Note: The following file was mentioned in the content but not found in the extraction:
- **topics/topic-02-data-collection.html** - Data Collection and Reporting

This file may need to be created separately or was not included in the source content.txt file.

## Dependencies

The HTML files reference the following external resources:

### Stylesheets
- Google Fonts (Inter, Source Serif 4)
- KaTeX (for mathematical notation)
- `styles/main.css` (custom stylesheet - not included in extraction)

### JavaScript
- `js/theme.js` (theme toggle functionality - not included)
- `js/navigation.js` (navigation functionality - not included)
- `js/interactions.js` (interactive elements - not included)
- `js/quiz.js` (quiz functionality - not included)

## Usage

To use these files:

1. Copy the extracted files to your web project directory
2. Ensure the directory structure matches the expected paths
3. Add the missing CSS file (`styles/main.css`)
4. Add the missing JavaScript files (`js/*.js`)
5. Update any file paths if your directory structure differs

## Notes

- All HTML files include accessibility features (skip links, ARIA labels)
- Theme toggle (light/dark mode) is implemented
- Reading progress indicators are included
- Responsive design with mobile-first approach
- Quiz files use a standardized JSON schema

## Extraction Details

- **Source**: content.txt
- **Extraction Date**: 2025
- **Extraction Method**: Python script (extract_files.py)
- **Total Files**: 9 (4 HTML + 5 JSON)
