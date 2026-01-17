registerQuiz("topic-04-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-04-quiz",
    "metadata": {
        "title": "Execution of Survey, Analysis & Presentation",
        "description": "Test your grasp of data collection procedures, analysis steps, and graphical presentation methods.",
        "topicId": "topic-04",
        "difficulty": "advanced",
        "estimatedTime": 20,
        "passingScore": 70,
        "createdAt": "2026-01-17T10:00:00Z",
        "tags": ["execution", "analysis", "statistics", "graphs"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate",
        "allowRetry": true,
        "showCorrectAnswers": true,
        "timeLimit": 0
    },
    "questions": [
        {
            "id": "q1-exec-stages",
            "type": "ordering",
            "question": "Order the stages of Survey Execution.",
            "points": 2,
            "items": [
                { "id": "s1", "text": "Interviewing Respondents", "correctPosition": 1 },
                { "id": "s2", "text": "Data Collection (Recording)", "correctPosition": 2 },
                { "id": "s3", "text": "Data Handling (Checking/Storing)", "correctPosition": 3 }
            ],
            "explanation": "First you interview, during which you collect/record data, and finally you handle/store the data."
        },
        {
            "id": "q2-interviewer-action",
            "type": "multiple-choice",
            "question": "If a respondent refuses to cooperate, what should the interviewer do?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Politely thank them and proceed to the next interview.", "isCorrect": true },
                { "id": "opt2", "text": "Force them to answer as it is a government project.", "isCorrect": false },
                { "id": "opt3", "text": "Fill the form themselves based on observation.", "isCorrect": false },
                { "id": "opt4", "text": "Call the police.", "isCorrect": false }
            ],
            "explanation": "Respondents have the right to refuse. The interviewer should be polite and move on."
        },
        {
            "id": "q3-data-cleaning",
            "type": "multiple-select",
            "question": "What activities are part of 'Data Cleaning'?",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Finding missing data", "isCorrect": true },
                { "id": "opt2", "text": "Correcting mistakes (e.g., wrong ticks)", "isCorrect": true },
                { "id": "opt3", "text": "Excluding inconsistent information", "isCorrect": true },
                { "id": "opt4", "text": "Drawing graphs", "isCorrect": false }
            ],
            "explanation": "Data cleaning involves fixing errors and missing fields before analysis/graphing begins."
        },
        {
            "id": "q4-tallying",
            "type": "fill-blank",
            "question": "In tallying, a cluster of strokes usually consists of __n__ vertical strokes with a fifth stroke drawn through them.",
            "points": 1,
            "blanks": [
                { "id": "n", "acceptedAnswers": ["4", "four"], "caseSensitive": false }
            ],
            "explanation": "Four vertical strokes + one diagonal = 5 items."
        },
        {
            "id": "q5-analysis-types",
            "type": "matching",
            "question": "Match the analysis type to the data type.",
            "points": 2,
            "pairs": [
                { "id": "p1", "left": "Quantitative Analysis", "right": "Data that can be measured (e.g., weight, age)" },
                { "id": "p2", "left": "Qualitative Analysis", "right": "Data that can be counted but not measured (e.g., color, opinions)" }
            ],
            "explanation": "Quantitative = numerical measurement; Qualitative = categorical/descriptive."
        },
        {
            "id": "q6-array",
            "type": "true-false",
            "question": "An 'Array' is data that has been sorted or arranged into some order (e.g., ascending magnitude).",
            "points": 1,
            "correctAnswer": true,
            "explanation": "Sorting raw data into order creates an array."
        },
        {
            "id": "q7-graphs",
            "type": "matching",
            "question": "Match the graph type to its description.",
            "points": 3,
            "pairs": [
                { "id": "p1", "left": "Histogram", "right": "Vertical blocks touching each other; for continuous data." },
                { "id": "p2", "left": "Bar Chart", "right": "Spaced rectangles; can be vertical or horizontal." },
                { "id": "p3", "left": "Pie Chart", "right": "Circle divided into sectors showing percentages." },
                { "id": "p4", "left": "Frequency Polygon", "right": "Line graph joining midpoints of histogram bars." }
            ],
            "explanation": "Histograms (touching bars) vs Bar Charts (spaced bars) is a key distinction."
        },
        {
            "id": "q8-coding",
            "type": "multiple-choice",
            "question": "What is 'Coding' in data analysis?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Converting data into numerical codes for analysis.", "isCorrect": true },
                { "id": "opt2", "text": "Writing computer software.", "isCorrect": false },
                { "id": "opt3", "text": "Hiding the data so no one can read it.", "isCorrect": false },
                { "id": "opt4", "text": "Ordering the questionnaires alphabetically.", "isCorrect": false }
            ],
            "explanation": "Coding involves assigning numbers (e.g., Yes=1, No=0) to responses to facilitate calculation."
        },
        {
            "id": "q9-pencil",
            "type": "true-false",
            "question": "Interviewers should use ink pens so that data cannot be altered.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "Interviewers should use PENCIL to allow for corrections. If a mistake is made, cross it out and write above; do not erase completely if possible, but pencil allows neatness."
        },
        {
            "id": "q10-horizontal-line",
            "type": "short-answer",
            "question": "On a graph, what does a straight horizontal line indicate about the aspect being measured?",
            "points": 1,
            "keywords": ["no change", "constant", "same", "remains the same"],
            "modelAnswer": "No change (or remains the same)",
            "explanation": "A horizontal line means the value is not increasing or decreasing; it remains constant."
        },
        {
            "id": "q11-pie-limit",
            "type": "multiple-choice",
            "question": "For a pie chart to be effective, the sectors should ideally not exceed how many?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Seven (7)", "isCorrect": true },
                { "id": "opt2", "text": "Two (2)", "isCorrect": false },
                { "id": "opt3", "text": "Twenty (20)", "isCorrect": false },
                { "id": "opt4", "text": "Fifty (50)", "isCorrect": false }
            ],
            "explanation": "Too many sectors make a pie chart hard to read. The text recommends not exceeding seven."
        },
        {
            "id": "q12-pencil-correction",
            "type": "multiple-choice",
            "question": "If an interviewer makes a mistake on a form, how should they correct it?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Cross out the incorrect response and mark the correct one above it.", "isCorrect": true },
                { "id": "opt2", "text": "Erase it completely so it looks perfect.", "isCorrect": false },
                { "id": "opt3", "text": "Throw away the form and start over.", "isCorrect": false },
                { "id": "opt4", "text": "Leave it; data analysis will fix it.", "isCorrect": false }
            ],
            "explanation": "Incorrect responses should be crossed out, not erased, to avoid confusion or illegible marks."
        }
    ]
});