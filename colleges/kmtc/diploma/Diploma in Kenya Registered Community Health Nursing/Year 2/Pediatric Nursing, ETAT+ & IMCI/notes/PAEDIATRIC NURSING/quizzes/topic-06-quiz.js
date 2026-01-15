registerQuiz("topic-06-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-06-quiz",
    "metadata": {
        "title": "Malnutrition Quiz",
        "topicId": "topic-06",
        "difficulty": "intermediate",
        "estimatedTime": 8,
        "passingScore": 80,
        "createdAt": "2025-12-28T10:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "matching",
            "question": "Match the condition with its primary characteristic:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Kwashiorkor", "right": "Edema and fatty liver" },
                { "id": "p2", "left": "Marasmus", "right": "Severe wasting/emaciation" },
                { "id": "p3", "left": "Marasmic Kwashiorkor", "right": "Combined wasting and edema" }
            ]
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "The therapeutic milk used for the initial stabilization phase of severe malnutrition is __1__.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["F75", "F-75"], "caseSensitive": false }
            ],
            "explanation": "F75 is used initially (low protein/sodium). F100 is used for rehabilitation (catch-up growth)."
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "What is the first step in the management of severe acute malnutrition (after triage)?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Treat Hypoglycemia", "isCorrect": true },
                { "id": "b", "text": "Start F100", "isCorrect": false },
                { "id": "c", "text": "Give Iron", "isCorrect": false },
                { "id": "d", "text": "Sensory stimulation", "isCorrect": false }
            ],
            "explanation": "Step 1 is treating/preventing Hypoglycemia to prevent immediate death."
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "Iron supplementation should be started immediately upon admission for a child with severe malnutrition.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "Iron can worsen infections in the acute phase. It is only started in the rehabilitation phase when the child is gaining weight."
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "Severe Acute Malnutrition is defined by a MUAC of:",
            "points": 10,
            "options": [
                { "id": "a", "text": "< 13.5 cm", "isCorrect": false },
                { "id": "b", "text": "< 12.5 cm", "isCorrect": false },
                { "id": "c", "text": "< 11.5 cm", "isCorrect": true },
                { "id": "d", "text": "< 10.0 cm", "isCorrect": false }
            ],
            "explanation": "MUAC less than 11.5 cm indicates severe wasting."
        }
    ]
});