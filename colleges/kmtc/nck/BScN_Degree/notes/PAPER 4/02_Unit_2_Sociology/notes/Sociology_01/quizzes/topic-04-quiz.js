registerQuiz("topic-04-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-04-quiz",
    "metadata": {
        "title": "Social Mobility",
        "description": "Check your understanding of how individuals move within the social structure and the factors affecting this movement.",
        "topicId": "topic-04",
        "difficulty": "intermediate",
        "estimatedTime": 5,
        "passingScore": 70,
        "createdAt": "2026-01-17T00:00:00Z",
        "updatedAt": "2026-01-17T00:00:00Z",
        "tags": ["mobility", "status", "society"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate",
        "allowRetry": true,
        "showCorrectAnswers": true
    },
    "questions": [
        {
            "id": "q1-vertical-mobility",
            "type": "multiple-choice",
            "question": "A nurse who pursues further education and becomes a professor in nursing has experienced which type of mobility?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Horizontal Social Mobility", "isCorrect": false },
                { "id": "opt2", "text": "Vertical Social Mobility", "isCorrect": true },
                { "id": "opt3", "text": "Downward Mobility", "isCorrect": false },
                { "id": "opt4", "text": "Lateral Mobility", "isCorrect": false }
            ],
            "explanation": "Vertical mobility involves moving up (or down) the social ladder, changing status/rank."
        },
        {
            "id": "q2-horizontal-mobility",
            "type": "true-false",
            "question": "Horizontal social mobility involves a change in position without a significant change in status or salary (e.g., a general nurse training as a midwife but staying at the same rank).",
            "points": 1,
            "correctAnswer": true,
            "explanation": "True. Horizontal mobility is a change in role/position but maintaining the same social status level."
        },
        {
            "id": "q3-factors",
            "type": "multiple-select",
            "question": "Which of the following factors are generally considered to encourage UPWARD social mobility? (Select all that apply)",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Late marriage", "isCorrect": true },
                { "id": "opt2", "text": "Having few children", "isCorrect": true },
                { "id": "opt3", "text": "Having many siblings", "isCorrect": false },
                { "id": "opt4", "text": "Mother dominance in the family", "isCorrect": true }
            ],
            "explanation": "Late marriage, fewer children, and mother dominance are associated with upward mobility. Many siblings often hinder it."
        },
        {
            "id": "q4-structural-mobility",
            "type": "fill-blank",
            "question": "__b1__ mobility results from changes in the distribution of statuses in society (e.g., economic expansion), regardless of the rules governing status.",
            "points": 1,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["structural"], "caseSensitive": false }
            ],
            "explanation": "Structural mobility is caused by changes in the society's structure (economy, jobs) rather than individual effort."
        },
        {
            "id": "q5-mobilisation-elements",
            "type": "multiple-choice",
            "question": "Which of the following is NOT a key element of social mobilisation?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Organisational Development", "isCorrect": false },
                { "id": "opt2", "text": "Capital Formation (Savings)", "isCorrect": false },
                { "id": "opt3", "text": "Training for Human Resource Development", "isCorrect": false },
                { "id": "opt4", "text": "Individual Isolation", "isCorrect": true }
            ],
            "explanation": "Social mobilisation involves collective action, organisation, and development, not isolation."
        }
    ]
});