registerQuiz("topic-05-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-05-quiz",
    "metadata": {
        "title": "Cultural Beliefs & Health",
        "description": "Assess your knowledge on how culture, beliefs, and practices impact health and nutrition.",
        "topicId": "topic-05",
        "difficulty": "intermediate",
        "estimatedTime": 6,
        "passingScore": 70,
        "createdAt": "2026-01-17T00:00:00Z",
        "updatedAt": "2026-01-17T00:00:00Z",
        "tags": ["culture", "health", "nutrition", "beliefs"]
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
            "id": "q1-culture-components",
            "type": "matching",
            "question": "Match the component of culture to its example.",
            "points": 2,
            "pairs": [
                { "id": "p1", "left": "Material Culture", "right": "Clothing, ornaments, houses, kitchenware" },
                { "id": "p2", "left": "Non-material Culture", "right": "Language, beliefs, values, norms" }
            ],
            "explanation": "Material culture is physical objects. Non-material culture is abstract/behavioural."
        },
        {
            "id": "q2-norms-types",
            "type": "multiple-choice",
            "question": "Which type of norms are written, socially confirmed rules of conduct that are enforced by agencies?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Folkways", "isCorrect": false },
                { "id": "opt2", "text": "Mores", "isCorrect": false },
                { "id": "opt3", "text": "Laws", "isCorrect": true },
                { "id": "opt4", "text": "Taboos", "isCorrect": false }
            ],
            "explanation": "Laws are written and enforced by agencies. Mores are moral norms. Folkways are customs."
        },
        {
            "id": "q3-somali-diet",
            "type": "true-false",
            "question": "In Somali culture, camel milk is believed to be the best of all milks.",
            "points": 1,
            "correctAnswer": true,
            "explanation": "True. Camel milk is highly valued in Somali culture."
        },
        {
            "id": "q4-food-taboos",
            "type": "multiple-choice",
            "question": "In some parts of Kenya, why are eggs sometimes forbidden for children and women?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "They are believed to cause allergies", "isCorrect": false },
                { "id": "opt2", "text": "Belief that the child will become a thief or the unborn baby will be harmed", "isCorrect": true },
                { "id": "opt3", "text": "They are too expensive", "isCorrect": false },
                { "id": "opt4", "text": "They are considered sacred", "isCorrect": false }
            ],
            "explanation": "Cultural beliefs often link eggs to negative outcomes like thievery or harm to the unborn, reserving them for men."
        },
        {
            "id": "q5-characteristics",
            "type": "multiple-select",
            "question": "What are the main characteristics of culture? (Select all that apply)",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "It is learned", "isCorrect": true },
                { "id": "opt2", "text": "It is shared", "isCorrect": true },
                { "id": "opt3", "text": "It is static (never changes)", "isCorrect": false },
                { "id": "opt4", "text": "It is a dynamic system", "isCorrect": true }
            ],
            "explanation": "Culture is learned, shared, adaptive, and dynamic (constantly changing)."
        }
    ]
});