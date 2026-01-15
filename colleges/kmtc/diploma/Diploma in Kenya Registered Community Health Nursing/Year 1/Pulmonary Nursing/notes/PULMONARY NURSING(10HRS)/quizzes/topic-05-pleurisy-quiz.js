registerQuiz("topic-05-pleurisy-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-05-pleurisy-quiz",
    "metadata": {
        "title": "Pleurisy Quiz",
        "description": "Assess knowledge of pleurisy symptoms and nursing care.",
        "topicId": "topic-05",
        "difficulty": "beginner",
        "estimatedTime": 5,
        "passingScore": 80,
        "createdAt": "2025-12-28T10:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "How is the pain of pleurisy typically described?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Dull and constant", "isCorrect": false },
                { "id": "b", "text": "Sharp/knifelike, intensified on inspiration", "isCorrect": true },
                { "id": "c", "text": "Burning sensation relieved by eating", "isCorrect": false },
                { "id": "d", "text": "Radiating to the left arm", "isCorrect": false }
            ],
            "explanation": "Pleuritic pain is sharp and worsens when the inflamed pleural layers rub together during deep inspiration, coughing, or sneezing."
        },
        {
            "id": "q2",
            "type": "true-false",
            "question": "A pleural friction rub may disappear as pleural fluid accumulates.",
            "points": 10,
            "correctAnswer": true,
            "explanation": "As fluid accumulates (effusion), it separates the inflamed pleural surfaces, often reducing the pain and making the friction rub disappear."
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "To enhance comfort, the patient should be turned frequently onto the __b1__ side to splint the chest wall.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["affected", "painful"], "caseSensitive": false }
            ],
            "explanation": "Lying on the affected side splints the chest wall, limiting movement and reducing pain."
        }
    ]
});