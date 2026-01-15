registerQuiz("topic-08-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-08-quiz",
    "metadata": {
        "title": "Chronic & Degenerative Disorders Quiz",
        "topicId": "topic-08",
        "difficulty": "advanced",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2025-12-28T12:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "matching",
            "question": "Match the disease with its underlying pathology:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Multiple Sclerosis", "right": "Demyelination of CNS" },
                { "id": "p2", "left": "Parkinson's Disease", "right": "Decreased dopamine" },
                { "id": "p3", "left": "Alzheimer's Disease", "right": "Plaques and tangles" },
                { "id": "p4", "left": "ALS", "right": "Degeneration of motor neurons" }
            ]
        },
        {
            "id": "q2",
            "type": "multiple-select",
            "question": "Which of the following are the cardinal signs of Parkinson's Disease? (Select 3)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Tremor", "isCorrect": true },
                { "id": "b", "text": "Rigidity", "isCorrect": true },
                { "id": "c", "text": "Bradykinesia", "isCorrect": true },
                { "id": "d", "text": "Visual loss", "isCorrect": false },
                { "id": "e", "text": "Seizures", "isCorrect": false }
            ],
            "partialCredit": true
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "Which medication is the mainstay of treatment for Parkinson's Disease?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Interferon", "isCorrect": false },
                { "id": "b", "text": "Levodopa/Carbidopa", "isCorrect": true },
                { "id": "c", "text": "Riluzole", "isCorrect": false },
                { "id": "d", "text": "Donepezil", "isCorrect": false }
            ],
            "explanation": "Levodopa is converted to dopamine in the brain to replenish depleted levels."
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "Huntington's Disease is characterized by which type of movement disorder?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Ataxia", "isCorrect": false },
                { "id": "b", "text": "Chorea", "isCorrect": true },
                { "id": "c", "text": "Spasticity", "isCorrect": false },
                { "id": "d", "text": "Flaccidity", "isCorrect": false }
            ],
            "explanation": "Chorea refers to the rapid, jerky, involuntary movements typical of Huntington's."
        }
    ]
});