window.registerQuiz('topic-09-quiz', {
    "schemaVersion": "1.1",
    "quizId": "topic-09-quiz",
    "metadata": {
        "title": "Environmental Microbiology Quiz",
        "description": "Test your knowledge on soil, aquatic, air, and food microbiology.",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate",
        "allowRetry": true
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-select",
            "question": "Factors affecting soil microbial abundance:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Moisture content", "isCorrect": true },
                { "id": "b", "text": "pH", "isCorrect": true },
                { "id": "c", "text": "Magnetism", "isCorrect": false },
                { "id": "d", "text": "Nutrients", "isCorrect": true }
            ],
            "partialCredit": true
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "The nutrient-rich soil zone near roots is called the __1__.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["rhizosphere"], "caseSensitive": false }
            ],
            "explanation": "Rhizosphere is the root-soil interface."
        },
        {
            "id": "q3",
            "type": "true-false",
            "question": "Symbiotic nitrogen fixation is less effective than free-living fixation.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "Symbiotic is more effective (100kg vs 25kg)."
        },
        {
            "id": "q4",
            "type": "matching",
            "question": "Match water quality standards:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Drinking Water", "right": "No coliforms" },
                { "id": "p2", "left": "Recreational", "right": "200 coliforms/100ml" },
                { "id": "p3", "left": "Shellfish", "right": "14 coliforms/100ml" }
            ]
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "Food poisoning by consuming toxins:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Infection", "isCorrect": false },
                { "id": "b", "text": "Intoxication", "isCorrect": true },
                { "id": "c", "text": "Fermentation", "isCorrect": false },
                { "id": "d", "text": "Spoilage", "isCorrect": false }
            ],
            "explanation": "Intoxication is caused by toxins."
        },
        {
            "id": "q6",
            "type": "multiple-select",
            "question": "Methods of transferring air microbes:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Sneezing", "isCorrect": true },
                { "id": "b", "text": "Coughing", "isCorrect": true },
                { "id": "c", "text": "Talking", "isCorrect": true },
                { "id": "d", "text": "Thinking", "isCorrect": false }
            ],
            "partialCredit": true
        }
    ]
});