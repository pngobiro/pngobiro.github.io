registerQuiz("topic-02-types-elements-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-02-types-elements-quiz",
    "metadata": {
        "title": "Types & Elements Quiz",
        "description": "Test your knowledge on the types of diagnosis and the specific variables involved.",
        "topicId": "topic-02-types-elements",
        "difficulty": "beginner",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2025-12-26T10:00:00Z",
        "tags": ["demography", "indicators", "resources"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "true-false",
            "question": "A 'Comprehensive Community Diagnosis' aims to respond to a single, specific need within the community.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "False. A Comprehensive diagnosis aims to obtain GENERAL information. A Problem-Oriented diagnosis responds to a specific need."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the indicator to its correct category.",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Poverty Level Income", "right": "Economic Indicator" },
                { "id": "p2", "left": "Waste Disposal", "right": "Environmental Indicator" },
                { "id": "p3", "left": "Educational Level", "right": "Social Indicator" },
                { "id": "p4", "left": "Ethnicity", "right": "Cultural Factor" }
            ]
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "Which of the following is considered a 'Demographic Variable'?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Water supply quality", "isCorrect": false },
                { "id": "b", "text": "Patterns of migration", "isCorrect": true },
                { "id": "c", "text": "Political orientation", "isCorrect": false },
                { "id": "d", "text": "Availability of drugs", "isCorrect": false }
            ],
            "explanation": "Migration patterns, along with age, sex, and population size, are demographic variables."
        },
        {
            "id": "q4",
            "type": "multiple-select",
            "question": "Which of the following are examples of Health & Illness Patterns? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Leading cause of mortality", "isCorrect": true },
                { "id": "b", "text": "Leading cause of hospital admission", "isCorrect": true },
                { "id": "c", "text": "Employment rate", "isCorrect": false },
                { "id": "d", "text": "Infant mortality rate", "isCorrect": true }
            ],
            "explanation": "Mortality, morbidity, and hospital admissions relate to health patterns. Employment is an economic indicator."
        },
        {
            "id": "q5",
            "type": "fill-blank",
            "question": "The __1__ resources refer to the availability of healthcare professionals like doctors and nurses.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["manpower", "human", "personnel"], "caseSensitive": false }
            ],
            "explanation": "Manpower resources specifically refer to the human workforce available for healthcare."
        },
        {
            "id": "q6",
            "type": "multiple-choice",
            "question": "Why is the Political/Leadership pattern important in community diagnosis?",
            "points": 10,
            "options": [
                { "id": "a", "text": "It determines the geographical boundaries.", "isCorrect": false },
                { "id": "b", "text": "It reflects the action potential of the state to address health needs.", "isCorrect": true },
                { "id": "c", "text": "It calculates the birth rate.", "isCorrect": false },
                { "id": "d", "text": "It identifies the leading cause of death.", "isCorrect": false }
            ],
            "explanation": "Political patterns mirror the government's sensitivity and capacity to address community struggles."
        }
    ]
});