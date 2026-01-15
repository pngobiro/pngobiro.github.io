registerQuiz("topic-01-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-01-quiz",
    "metadata": {
        "title": "Foundations of Mental Health",
        "description": "Assess your understanding of mental health definitions, determinants, and community care principles.",
        "topicId": "topic-01",
        "difficulty": "beginner",
        "estimatedTime": 5,
        "passingScore": 80,
        "createdAt": "2026-01-09T12:00:00Z"
    },
    "settings": {
        "shuffleQuestions": true,
        "showFeedback": "immediate",
        "allowRetry": true
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which statement best defines 'Mental Health'?",
            "points": 10,
            "options": [
                { "id": "a", "text": "The absence of mental disorders.", "isCorrect": false },
                { "id": "b", "text": "A state of complete emotional, psychological, and social well-being.", "isCorrect": true },
                { "id": "c", "text": "The ability to work without stress.", "isCorrect": false },
                { "id": "d", "text": "A biological condition determined solely by genetics.", "isCorrect": false }
            ],
            "explanation": "Mental health is a holistic state of well-being, not just the absence of disease."
        },
        {
            "id": "q2",
            "type": "multiple-select",
            "question": "Select all factors considered 'Social Determinants of Mental Health':",
            "points": 10,
            "options": [
                { "id": "a", "text": "Poverty and unemployment", "isCorrect": true },
                { "id": "b", "text": "Housing conditions", "isCorrect": true },
                { "id": "c", "text": "Education access", "isCorrect": true },
                { "id": "d", "text": "Brain chemistry imbalance", "isCorrect": false }
            ],
            "explanation": "Social determinants are external societal and economic conditions that affect health outcomes."
        },
        {
            "id": "q3",
            "type": "true-false",
            "question": "One of the core principles of community mental health is 'Equity', ensuring services are accessible regardless of socioeconomic status.",
            "points": 10,
            "correctAnswer": true,
            "explanation": "Equity ensures fairness in access to care for all community members."
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "Community-based mental health care aims to reduce __b1__ and discrimination to promote social reintegration.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["stigma", "Stigma"], "caseSensitive": false }
            ],
            "explanation": "Reducing stigma is crucial for encouraging individuals to seek help and integrate into society."
        },
        {
            "id": "q5",
            "type": "matching",
            "question": "Match the impact type to its description:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Economic Impact", "right": "Loss of productivity and treatment costs" },
                { "id": "p2", "left": "Social Impact", "right": "Isolation and broken relationships" },
                { "id": "p3", "left": "Physical Impact", "right": "Increased risk of chronic diseases" }
            ]
        }
    ]
});