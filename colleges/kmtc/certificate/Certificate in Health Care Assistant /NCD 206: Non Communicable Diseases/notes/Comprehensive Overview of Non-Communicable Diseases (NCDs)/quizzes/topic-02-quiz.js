registerQuiz("topic-02-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-02-quiz",
    "metadata": {
        "title": "Cardiovascular Diseases Quiz",
        "description": "Assess your understanding of heart diseases, their causes, and prevention.",
        "topicId": "topic-02-cvd",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2026-01-10T12:00:00Z",
        "tags": ["cvd", "heart", "health"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which type of CVD specifically affects the blood vessels supplying the brain?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Coronary heart disease", "isCorrect": false },
                { "id": "b", "text": "Peripheral arterial disease", "isCorrect": false },
                { "id": "c", "text": "Cerebrovascular disease", "isCorrect": true },
                { "id": "d", "text": "Rheumatic heart disease", "isCorrect": false }
            ],
            "explanation": "Cerebrovascular disease affects brain blood vessels and can lead to strokes."
        },
        {
            "id": "q2",
            "type": "multiple-select",
            "question": "Identify common symptoms of a cardiovascular event (heart attack):",
            "points": 10,
            "options": [
                { "id": "a", "text": "Chest pain or pressure", "isCorrect": true },
                { "id": "b", "text": "Shortness of breath", "isCorrect": true },
                { "id": "c", "text": "Increased hunger", "isCorrect": false },
                { "id": "d", "text": "Cold sweats", "isCorrect": true }
            ],
            "explanation": "Common symptoms include chest pain, shortness of breath, nausea, and cold sweats."
        },
        {
            "id": "q3",
            "type": "short-answer",
            "question": "What is the condition caused by damage to heart valves from rheumatic fever?",
            "points": 10,
            "keywords": ["rheumatic", "heart", "disease"],
            "minKeywords": 2,
            "modelAnswer": "Rheumatic heart disease",
            "explanation": "Rheumatic heart disease is caused by damage from rheumatic fever."
        },
        {
            "id": "q4",
            "type": "ordering",
            "question": "Order the steps of progression for many CVDs:",
            "points": 10,
            "items": [
                { "id": "i1", "text": "Unhealthy behaviors (diet, smoking)", "correctPosition": 1 },
                { "id": "i2", "text": "Metabolic changes (high BP/cholesterol)", "correctPosition": 2 },
                { "id": "i3", "text": "Blockage of blood vessels", "correctPosition": 3 },
                { "id": "i4", "text": "Acute event (Heart Attack/Stroke)", "correctPosition": 4 }
            ],
            "explanation": "Risk behaviors lead to physiological changes, which cause physical blockages, eventually resulting in acute events."
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "Cardiovascular diseases are always symptomatic in the early stages.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "CVDs are often asymptomatic ('silent') until a severe event occurs."
        }
    ]
});