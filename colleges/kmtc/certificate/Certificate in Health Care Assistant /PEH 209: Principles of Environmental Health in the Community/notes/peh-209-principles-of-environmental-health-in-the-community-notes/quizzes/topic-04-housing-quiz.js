// quizzes/topic-04-housing-quiz.js
window.registerQuiz('topic-04-housing-quiz', {
    "schemaVersion": "1.0",
    "quizId": "topic-04-housing-quiz",
    "metadata": {
        "title": "Healthful Housing Quiz",
        "description": "Check your knowledge on housing standards, ventilation, and indoor air pollution.",
        "topicId": "topic-04-housing",
        "difficulty": "intermediate",
        "estimatedTime": 8,
        "passingScore": 70,
        "createdAt": "2026-01-16T10:00:00Z"
    },
    "settings": {
        "shuffleQuestions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which of the following is a physiological need satisfied by healthful housing?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Privacy for family members", "isCorrect": false },
                { "id": "b", "text": "Adequate sunlight illumination", "isCorrect": true },
                { "id": "c", "text": "Protection against robbers", "isCorrect": false },
                { "id": "d", "text": "Aesthetic satisfaction", "isCorrect": false }
            ],
            "explanation": "Sunlight (Vitamin D/Bactericidal) is a physiological need. Privacy/Security/Aesthetics are psychological needs."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the indoor pollutant to its health effect:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Carbon Monoxide", "right": "Reduces oxygen carrying capacity (Carboxyl hemoglobin)" },
                { "id": "p2", "left": "Nitrogen Dioxide", "right": "Respiratory tract irritation" },
                { "id": "p3", "left": "Formaldehyde", "right": "Allergic contact dermatitis" },
                { "id": "p4", "left": "Tobacco Smoke", "right": "Lung cancer" }
            ]
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "What happens in an unventilated room due to human occupancy? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Decrease in oxygen", "isCorrect": true },
                { "id": "b", "text": "Increase in carbon dioxide", "isCorrect": true },
                { "id": "c", "text": "Decrease in humidity", "isCorrect": false },
                { "id": "d", "text": "Increase in temperature", "isCorrect": true }
            ],
            "explanation": "Occupancy leads to decreased O2, increased CO2, increased temperature, and INCREASED humidity (not decreased)."
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "Separate bedrooms for the sexes are required at the minimum age of __b1__ years.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["10", "10 years"], "caseSensitive": false }
            ],
            "explanation": "Children of different sexes should have separate rooms from age 10."
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "Natural ventilation depends on wind direction and does not control the entrance of dust.",
            "points": 10,
            "correctAnswer": true,
            "explanation": "True. This is a disadvantage of natural ventilation compared to mechanical systems."
        }
    ]
});