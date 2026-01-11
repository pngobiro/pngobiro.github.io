registerQuiz("topic-02-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-02-quiz",
    "metadata": {
        "title": "Vulnerability and Risk Assessment",
        "description": "Assess your understanding of vulnerability types, contributing factors, and the assessment process.",
        "topicId": "topic-02",
        "difficulty": "intermediate",
        "estimatedTime": 5,
        "passingScore": 70,
        "createdAt": "2025-12-25T12:00:00Z",
        "tags": ["vulnerability", "assessment", "risk"]
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
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which of the following is an example of 'Intangible/Abstract' vulnerability?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Loss of buildings", "isCorrect": false },
                { "id": "b", "text": "Environmental damage", "isCorrect": false },
                { "id": "c", "text": "Social cohesion and motivation", "isCorrect": true },
                { "id": "d", "text": "Economic income loss", "isCorrect": false }
            ],
            "explanation": "Social cohesion, motivation, and cultural practices are intangible vulnerabilities that are difficult to quantify but vital for recovery."
        },
        {
            "id": "q2",
            "type": "true-false",
            "question": "A hazard is not an event itself, but rather the *potential* for an event to cause harm.",
            "points": 5,
            "correctAnswer": true,
            "explanation": "Correct. 'Flood' is a hazard (potential); an actual flood occurring is an incident or disaster."
        },
        {
            "id": "q3",
            "type": "ordering",
            "question": "Order the first 5 steps of the Vulnerability Assessment Process:",
            "points": 15,
            "items": [
                { "id": "i1", "text": "Project Definition", "correctPosition": 1 },
                { "id": "i2", "text": "Formation of Planning Group", "correctPosition": 2 },
                { "id": "i3", "text": "Hazard Identification", "correctPosition": 3 },
                { "id": "i4", "text": "Hazard Description", "correctPosition": 4 },
                { "id": "i5", "text": "Community/Environment Description", "correctPosition": 5 }
            ]
        }
    ]
});