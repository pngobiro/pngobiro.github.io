registerQuiz("topic-10-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-10-quiz",
    "metadata": {
        "title": "Autoimmune Disorders",
        "topicId": "topic-10",
        "difficulty": "advanced",
        "estimatedTime": 20,
        "passingScore": 75,
        "createdAt": "2025-12-25T00:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which disorder involves the demyelination of nerves in the Central Nervous System (CNS)?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Guillain-Barré Syndrome", "isCorrect": false },
                { "id": "b", "text": "Myasthenia Gravis", "isCorrect": false },
                { "id": "c", "text": "Multiple Sclerosis", "isCorrect": true },
                { "id": "d", "text": "Parkinson's Disease", "isCorrect": false }
            ],
            "explanation": "MS affects the CNS (brain/cord), whereas GBS affects the PNS."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "What is the hallmark clinical manifestation of Guillain-Barré Syndrome?",
            "points": 15,
            "options": [
                { "id": "a", "text": "Descending paralysis", "isCorrect": false },
                { "id": "b", "text": "Ascending weakness/paralysis", "isCorrect": true },
                { "id": "c", "text": "Unilateral facial droop", "isCorrect": false },
                { "id": "d", "text": "Resting tremor", "isCorrect": false }
            ],
            "explanation": "GBS typically presents with symmetrical weakness starting in the legs and moving up."
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "The __1__ test uses Edrophonium chloride to diagnose Myasthenia Gravis.",
            "points": 15,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["Tensilon", "tensilon"], "caseSensitive": false }
            ],
            "explanation": "The Tensilon test temporarily improves muscle strength in MG patients."
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "Myasthenia Gravis affects sensation and coordination as well as motor strength.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "False. MG is purely a motor disorder; sensation and coordination remain intact."
        }
    ]
});