registerQuiz("topic-12-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-12-quiz",
    "metadata": {
        "title": "Crisis & Rehabilitation Quiz",
        "description": "Check knowledge on crisis intervention phases and psychiatric rehabilitation principles.",
        "topicId": "topic-12",
        "difficulty": "beginner",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2026-01-21T12:00:00Z",
        "updatedAt": "2026-01-21T12:00:00Z",
        "tags": ["crisis", "rehab", "community"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "t12-q1",
            "type": "multiple-choice",
            "question": "Which type of crisis is rare, unexpected, and arises from disasters like rape, fire, or earthquakes?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Maturational crisis", "isCorrect": false },
                { "id": "opt2", "text": "Dispositional crisis", "isCorrect": false },
                { "id": "opt3", "text": "Adventitious crisis", "isCorrect": true },
                { "id": "opt4", "text": "Anticipated life transition", "isCorrect": false }
            ],
            "explanation": "Adventitious crises (traumatic stress) are unexpected, accidental, or manmade disasters."
        },
        {
            "id": "t12-q2",
            "type": "ordering",
            "question": "Order the levels of prevention in the Public Health Model:",
            "points": 3,
            "items": [
                { "id": "l1", "text": "Primary Prevention (Health ed, risk reduction)", "correctPosition": 1 },
                { "id": "l2", "text": "Secondary Prevention (Screening, prompt treatment)", "correctPosition": 2 },
                { "id": "l3", "text": "Tertiary Prevention (Rehabilitation)", "correctPosition": 3 }
            ],
            "explanation": "Primary (prevent), Secondary (treat), Tertiary (rehab)."
        },
        {
            "id": "t12-q3",
            "type": "multiple-choice",
            "question": "Psychiatric rehabilitation is undertaken at which level of prevention?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Primary", "isCorrect": false },
                { "id": "opt2", "text": "Secondary", "isCorrect": false },
                { "id": "opt3", "text": "Tertiary", "isCorrect": true },
                { "id": "opt4", "text": "Quaternary", "isCorrect": false }
            ],
            "explanation": "Rehabilitation is a key component of Tertiary prevention."
        },
        {
            "id": "t12-q4",
            "type": "true-false",
            "question": "Crisis is a chronic state that lasts for years.",
            "correctAnswer": false,
            "points": 1,
            "explanation": "Crisis is acute, not chronic, and is usually resolved within a brief period."
        }
    ]
});