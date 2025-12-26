registerQuiz("lesson-08-quiz", {
    "schemaVersion": "1.0",
    "quizId": "lesson-08-quiz",
    "metadata": {
        "title": "Disease Surveillance",
        "description": "Test your knowledge on surveillance systems, types (active, passive, sentinel), and uses.",
        "topicId": "lesson-08",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2025-12-26T10:00:00Z",
        "tags": ["surveillance", "public-health", "monitoring"]
    },
    "questions": [
        {
            "id": "q1",
            "type": "fill-blank",
            "question": "The ongoing, systematic collection, analysis, and interpretation of health data is called disease __1__.",
            "points": 1,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["surveillance"], "caseSensitive": false }
            ],
            "explanation": "Surveillance is the monitoring of health events."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the type of surveillance with its description:",
            "points": 3,
            "pairs": [
                { "id": "p1", "left": "Passive", "right": "Health authorities receive unsolicited reports" },
                { "id": "p2", "left": "Active", "right": "Health staff go out to find cases" },
                { "id": "p3", "left": "Sentinel", "right": "Data from selected sites" }
            ],
            "explanation": "Passive = waiting for reports; Active = searching for reports; Sentinel = representative sites."
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "Which type of surveillance is most commonly used for routine communicable disease reporting because it is less costly?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Active Surveillance", "isCorrect": false },
                { "id": "b", "text": "Passive Surveillance", "isCorrect": true },
                { "id": "c", "text": "Syndromic Surveillance", "isCorrect": false },
                { "id": "d", "text": "Sentinel Surveillance", "isCorrect": false }
            ],
            "explanation": "Passive surveillance is the standard system where facilities report data without extra stimulation."
        },
        {
            "id": "q4",
            "type": "multiple-select",
            "question": "Which of the following are core functions of a surveillance system? (Select all that apply)",
            "points": 2,
            "options": [
                { "id": "a", "text": "Case Detection", "isCorrect": true },
                { "id": "b", "text": "Case Registration", "isCorrect": true },
                { "id": "c", "text": "Data Analysis", "isCorrect": true },
                { "id": "d", "text": "Treatment of Patients", "isCorrect": false },
                { "id": "e", "text": "Feedback", "isCorrect": true }
            ],
            "explanation": "Treatment is clinical care, not a core function of the *surveillance system* itself, though surveillance triggers public health action."
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "Syndromic surveillance relies on confirmed laboratory diagnoses.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "False. Syndromic surveillance uses non-specific data (symptoms, pharmacy sales) before confirmation."
        },
        {
            "id": "q6",
            "type": "multiple-choice",
            "question": "Which objective of control refers to the complete subtraction of the infectious agent from the world?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Control", "isCorrect": false },
                { "id": "b", "text": "Elimination", "isCorrect": false },
                { "id": "c", "text": "Eradication", "isCorrect": true },
                { "id": "d", "text": "Surveillance", "isCorrect": false }
            ],
            "explanation": "Eradication is global removal (e.g., Smallpox). Elimination is regional."
        },
        {
            "id": "q7",
            "type": "short-answer",
            "question": "Why is 'Feedback' an important part of the surveillance loop?",
            "points": 2,
            "keywords": ["motivation", "improve", "reporting", "action", "inform"],
            "minKeywords": 1,
            "modelAnswer": "It motivates data collectors, improves reporting quality, and informs stakeholders for action.",
            "maxLength": 150
        },
        {
            "id": "q8",
            "type": "multiple-choice",
            "question": "Which variable is best to characterize cases by to understand the epidemiology of a disease?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Place of report", "isCorrect": false },
                { "id": "b", "text": "Place of exposure", "isCorrect": true },
                { "id": "c", "text": "Place of treatment", "isCorrect": false },
                { "id": "d", "text": "Place of birth", "isCorrect": false }
            ],
            "explanation": "Place of exposure tells you where the risk is located."
        },
        {
            "id": "q9",
            "type": "multiple-choice",
            "question": "A surveillance system that selects a small group of health workers to gather detailed data is called:",
            "points": 1,
            "options": [
                { "id": "a", "text": "Mass Surveillance", "isCorrect": false },
                { "id": "b", "text": "Universal Surveillance", "isCorrect": false },
                { "id": "c", "text": "Sentinel Surveillance", "isCorrect": true },
                { "id": "d", "text": "Syndromic Surveillance", "isCorrect": false }
            ],
            "explanation": "Sentinel surveillance uses selected sites to infer trends for the larger population."
        },
        {
            "id": "q10",
            "type": "true-false",
            "question": "Active surveillance is usually less complete than passive surveillance.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "False. Active surveillance is more complete because health workers actively search for cases, though it is more expensive."
        }
    ]
});