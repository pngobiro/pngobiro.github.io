registerQuiz("topic-06-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-06-quiz",
    "metadata": {
        "title": "Bereavement & Grief",
        "description": "Assess your understanding of grief types and the stages of dying.",
        "topicId": "topic-06",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2025-12-27T12:00:00Z"
    },
    "settings": { "shuffleQuestions": true, "shuffleOptions": true },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which type of grief occurs *before* the actual loss or death?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Delayed Grief", "isCorrect": false },
                { "id": "b", "text": "Anticipatory Grief", "isCorrect": true },
                { "id": "c", "text": "Inhibited Grief", "isCorrect": false },
                { "id": "d", "text": "Chronic Grief", "isCorrect": false }
            ],
            "explanation": "Anticipatory grief is experienced by patients and families during the illness trajectory before death."
        },
        {
            "id": "q2",
            "type": "ordering",
            "question": "Order the stages of dying according to Kubler-Ross:",
            "points": 15,
            "items": [
                { "id": "i1", "text": "Denial", "correctPosition": 1 },
                { "id": "i2", "text": "Anger", "correctPosition": 2 },
                { "id": "i3", "text": "Bargaining", "correctPosition": 3 },
                { "id": "i4", "text": "Depression", "correctPosition": 4 },
                { "id": "i5", "text": "Acceptance", "correctPosition": 5 }
            ]
        },
        {
            "id": "q3",
            "type": "true-false",
            "question": "Delayed grief is defined by an absence of grieving within the first few weeks or months after death.",
            "points": 10,
            "correctAnswer": true,
            "explanation": "Delayed grief appears later, often precipitated by another loss."
        }
    ]
});