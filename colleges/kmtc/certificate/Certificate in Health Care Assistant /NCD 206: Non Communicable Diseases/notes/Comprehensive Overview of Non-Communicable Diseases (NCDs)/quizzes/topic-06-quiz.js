registerQuiz("topic-06-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-06-quiz",
    "metadata": {
        "title": "Respiratory Diseases Quiz",
        "description": "Assess your knowledge of COPD and Asthma.",
        "topicId": "topic-06-respiratory",
        "difficulty": "beginner",
        "estimatedTime": 8,
        "passingScore": 70,
        "createdAt": "2026-01-10T12:00:00Z",
        "tags": ["respiratory", "copd", "asthma"]
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
            "question": "The primary risk factor for Chronic Obstructive Pulmonary Disease (COPD) is __b1__.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["smoking", "tobacco", "cigarette smoking"], "caseSensitive": false }
            ],
            "explanation": "Smoking is the leading cause of COPD."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "Which respiratory condition is characterized by chronic inflammation of the airways causing recurrent wheezing?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Emphysema", "isCorrect": false },
                { "id": "b", "text": "Asthma", "isCorrect": true },
                { "id": "c", "text": "Pneumonia", "isCorrect": false },
                { "id": "d", "text": "Tuberculosis", "isCorrect": false }
            ],
            "explanation": "Asthma involves chronic inflammation and narrowing of the airways."
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "Select common symptoms of chronic respiratory diseases:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Shortness of breath", "isCorrect": true },
                { "id": "b", "text": "Chronic cough", "isCorrect": true },
                { "id": "c", "text": "Wheezing", "isCorrect": true },
                { "id": "d", "text": "Vision loss", "isCorrect": false }
            ],
            "explanation": "Common symptoms include shortness of breath, cough, wheezing, and chest tightness."
        },
        {
            "id": "q4",
            "type": "matching",
            "question": "Match the management strategy to the condition:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Asthma Trigger", "right": "Allergens/Irritants" },
                { "id": "p2", "left": "COPD Prevention", "right": "Smoking Cessation" },
                { "id": "p3", "left": "Treatment Tool", "right": "Inhalers/Bronchodilators" }
            ]
        }
    ]
});