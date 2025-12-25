registerQuiz("topic-01-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-01-quiz",
    "metadata": {
        "title": "Introduction to Environmental Health",
        "description": "Assess your understanding of core definitions and environmental classifications.",
        "topicId": "topic-01",
        "difficulty": "beginner",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2025-12-25T12:00:00Z"
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate",
        "allowRetry": true
    },
    "questions": [
        {
            "id": "t1-q1",
            "type": "multiple-choice",
            "question": "Which component of the environment consists of regulations, traditions, organizations, and institutions?",
            "points": 10,
            "options": [
                { "id": "a", "text": "The Outer Environment", "isCorrect": false },
                { "id": "b", "text": "The Inner Environment", "isCorrect": true },
                { "id": "c", "text": "The Geographical Environment", "isCorrect": false },
                { "id": "d", "text": "The Biotic Component", "isCorrect": false }
            ],
            "explanation": "The Inner Environment is social; it pertains to regulations, traditions, organizations, and institutions (non-material culture)."
        },
        {
            "id": "t1-q2",
            "type": "fill-blank",
            "question": "According to the UNEP classification, the __b1__ environment refers to factors relating to government or public affairs that influence an individual's health.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["political", "Political"], "caseSensitive": false }
            ],
            "explanation": "The Political environment involves democratic systems, stable government, and rule of law affecting health."
        },
        {
            "id": "t1-q3",
            "type": "matching",
            "question": "Match the type of environment with its components:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Physical Environment", "right": "Soil, water, air, climate" },
                { "id": "p2", "left": "Biological Environment", "right": "Plants, animals, micro-organisms" },
                { "id": "p3", "left": "Economic Environment", "right": "Employment, inflation, tax rates" }
            ],
            "explanation": "Physical = Abiotic; Biological = Biotic; Economic = Financial factors."
        },
        {
            "id": "t1-q4",
            "type": "true-false",
            "question": "The 'Outer Environment' refers to modifications created by man such as infrastructure, transport, and technology.",
            "points": 5,
            "correctAnswer": true,
            "explanation": "True. The Outer Environment is the result of science and technology aiming at civilization and urbanization."
        }
    ]
});