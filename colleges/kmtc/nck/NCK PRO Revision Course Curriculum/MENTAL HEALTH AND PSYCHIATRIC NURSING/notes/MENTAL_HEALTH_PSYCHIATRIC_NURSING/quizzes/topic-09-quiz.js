registerQuiz("topic-09-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-09-quiz",
    "metadata": {
        "title": "Substance Use Quiz",
        "description": "Evaluate knowledge of substance abuse, withdrawal, and management.",
        "topicId": "topic-09",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2026-01-21T12:00:00Z",
        "updatedAt": "2026-01-21T12:00:00Z",
        "tags": ["addiction", "withdrawal", "alcohol"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "t9-q1",
            "type": "multiple-choice",
            "question": "Disulfiram (Antabuse) works by inhibiting which enzyme?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Alcohol dehydrogenase", "isCorrect": false },
                { "id": "opt2", "text": "Aldehyde dehydrogenase", "isCorrect": true },
                { "id": "opt3", "text": "Monoamine oxidase", "isCorrect": false },
                { "id": "opt4", "text": "Cytochrome P450", "isCorrect": false }
            ],
            "explanation": "Disulfiram inhibits aldehyde dehydrogenase, causing accumulation of acetaldehyde."
        },
        {
            "id": "t9-q2",
            "type": "multiple-choice",
            "question": "What is the most severe form of alcohol withdrawal?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Alcohol hallucinosis", "isCorrect": false },
                { "id": "opt2", "text": "Delirium Tremens", "isCorrect": true },
                { "id": "opt3", "text": "Withdrawal seizures", "isCorrect": false },
                { "id": "opt4", "text": "Morning shakes", "isCorrect": false }
            ],
            "explanation": "Delirium Tremens is the most severe form, involving confusion, autonomic hyperactivity, and hallucinations."
        },
        {
            "id": "t9-q3",
            "type": "multiple-select",
            "question": "Which of the following are symptoms of Disulfiram-Alcohol reaction? (Select all that apply)",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Facial flushing", "isCorrect": true },
                { "id": "opt2", "text": "Throbbing headache", "isCorrect": true },
                { "id": "opt3", "text": "Nausea and vomiting", "isCorrect": true },
                { "id": "opt4", "text": "Euphoria", "isCorrect": false }
            ],
            "explanation": "The reaction causes unpleasant symptoms like flushing, headache, nausea, not euphoria."
        },
        {
            "id": "t9-q4",
            "type": "multiple-choice",
            "question": "Which vitamin is crucial to administer to alcoholics to prevent Wernicke's encephalopathy?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Vitamin C", "isCorrect": false },
                { "id": "opt2", "text": "Vitamin B1 (Thiamine)", "isCorrect": true },
                { "id": "opt3", "text": "Vitamin A", "isCorrect": false },
                { "id": "opt4", "text": "Vitamin D", "isCorrect": false }
            ],
            "explanation": "Thiamine (Vitamin B1) is essential to prevent Wernicke-Korsakoff syndrome."
        }
    ]
});