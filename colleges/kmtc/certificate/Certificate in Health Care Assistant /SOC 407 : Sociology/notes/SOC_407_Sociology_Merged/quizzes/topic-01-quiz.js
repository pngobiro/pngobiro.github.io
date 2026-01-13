registerQuiz("topic-01-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-01-quiz",
    "metadata": {
        "title": "Medical Sociology Knowledge Check",
        "description": "Assess your understanding of health determinants, culture, and disease models.",
        "topicId": "topic-01",
        "difficulty": "beginner",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2026-01-13T12:00:00Z"
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
            "type": "multiple-choice",
            "question": "What is the primary focus of Medical Sociology?",
            "points": 10,
            "options": [
                { "id": "a", "text": "The biological treatment of diseases", "isCorrect": false },
                { "id": "b", "text": "The integrative analysis of social factors in health and disease", "isCorrect": true },
                { "id": "c", "text": "The study of ancient medical tools", "isCorrect": false },
                { "id": "d", "text": "Hospital administration exclusively", "isCorrect": false }
            ],
            "explanation": "Medical sociology focuses on the social causes and consequences of health and illness, integrating culture, politics, and economy."
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "The acronym SEMI stands for the determinants of culture: __b1__, Environment, Modification, and __b2__.",
            "points": 20,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["socialization", "Socialization"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["interaction", "Interaction"], "caseSensitive": false }
            ],
            "explanation": "SEMI: Socialization, Environment, Modification, and Interaction."
        },
        {
            "id": "q3",
            "type": "matching",
            "question": "Match the disease causation model to its description:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Emic (Anthropological)", "right": "Personalistic, based on cultural meaning" },
                { "id": "p2", "left": "Etic (Biomedical)", "right": "Naturalistic, germ theory, impersonal" },
                { "id": "p3", "left": "Ecological", "right": "Holistic interaction of environment and population" }
            ],
            "explanation": "Emic is internal/cultural, Etic is external/scientific, and Ecological looks at the whole system."
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "Ethnocentrism is the ability to understand another culture in terms of its own standards and values.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "False. That is Cultural Relativism. Ethnocentrism is judging others by one's own cultural standards."
        },
        {
            "id": "q5",
            "type": "multiple-select",
            "question": "Which of the following are examples of traditional practices that may negatively affect health? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Female Genital Mutilation (FGM)", "isCorrect": true },
                { "id": "b", "text": "Wife inheritance", "isCorrect": true },
                { "id": "c", "text": "Breastfeeding", "isCorrect": false },
                { "id": "d", "text": "Using dung on umbilical cords", "isCorrect": true }
            ],
            "explanation": "FGM, wife inheritance, and unhygienic birthing practices can harm health. Breastfeeding is generally a positive cultural adaptation."
        }
    ]
});