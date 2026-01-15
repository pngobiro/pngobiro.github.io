registerQuiz("topic-02-primary-health-care-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-02-primary-health-care-quiz",
    "metadata": {
        "title": "Primary Health Care (PHC)",
        "description": "Assess your understanding of PHC elements, principles, and objectives.",
        "topicId": "topic-02-primary-health-care",
        "difficulty": "beginner",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2026-01-12T00:00:00Z",
        "tags": ["phc", "health-systems", "policy"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "fill-blank",
            "question": "In the acronym ELEMENTS for Primary Health Care, the 'S' stands for __1__ water and sanitation.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["safe", "Safe"], "caseSensitive": false }
            ],
            "explanation": "S stands for Safe water and sanitation."
        },
        {
            "id": "q2",
            "type": "multiple-select",
            "question": "Select the essential elements of Primary Health Care from the list below: (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Education on prevailing health problems", "isCorrect": true },
                { "id": "b", "text": "Advanced surgical procedures", "isCorrect": false },
                { "id": "c", "text": "Maternal and child health care", "isCorrect": true },
                { "id": "d", "text": "Provision of essential drugs", "isCorrect": true },
                { "id": "e", "text": "Cosmetic surgery", "isCorrect": false }
            ],
            "explanation": "PHC elements focus on essential, accessible care like education, MCH, and essential drugs."
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "Which PHC principle emphasizes that health cannot be improved by the health sector alone?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Equitable Distribution", "isCorrect": false },
                { "id": "b", "text": "Community Participation", "isCorrect": false },
                { "id": "c", "text": "Multi-sectional Approach", "isCorrect": true },
                { "id": "d", "text": "Appropriate Technology", "isCorrect": false }
            ],
            "explanation": "The Multi-sectional approach recognizes the contribution of other sectors (agriculture, education, housing, etc.) to health."
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "Primary Health Care focuses exclusively on treating diseases in hospital settings.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "PHC is essential health care made universally accessible to individuals in the community, focusing on prevention and equity."
        },
        {
            "id": "q5",
            "type": "matching",
            "question": "Match the PHC element letter to its meaning:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "E", "right": "Education" },
                { "id": "p2", "left": "L", "right": "Locally Endemic Disease Control" },
                { "id": "p3", "left": "N", "right": "Nutritional Food Supplement" },
                { "id": "p4", "left": "T", "right": "Treatment of Diseases" }
            ]
        },
        {
            "id": "q6",
            "type": "short-answer",
            "question": "Explain the principle of 'Equitable Distribution' in PHC.",
            "points": 15,
            "keywords": ["equal", "access", "all", "regardless", "status", "fair"],
            "minKeywords": 2,
            "modelAnswer": "Primary care services must be provided equally to all individuals irrespective of their gender, age, caste, urban/rural location, or social class.",
            "maxLength": 200
        }
    ]
});