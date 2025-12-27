registerQuiz("topic-08-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-08-quiz",
    "metadata": {
        "title": "Grief & Palliative Care",
        "description": "Assess understanding of end-of-life care, grief stages, and hospice principles.",
        "topicId": "topic-08-palliative-care",
        "difficulty": "advanced",
        "estimatedTime": 20,
        "passingScore": 75,
        "createdAt": "2025-12-27T10:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "ordering",
            "question": "Order the stages of grief according to the Kubler-Ross (DABDA) model:",
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
            "id": "q2",
            "type": "multiple-choice",
            "question": "What is 'Anticipatory Grief'?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Grief that occurs after the death", "isCorrect": false },
                { "id": "b", "text": "Grief that begins before the actual loss occurs", "isCorrect": true },
                { "id": "c", "text": "Absence of grief", "isCorrect": false },
                { "id": "d", "text": "Grief on holidays", "isCorrect": false }
            ],
            "explanation": "Anticipatory grief happens when a loss is expected (e.g., terminal diagnosis) but has not yet occurred."
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "Which of the following is a core principle of Hospice Care?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Prolonging life through technology", "isCorrect": false },
                { "id": "b", "text": "Patient and family are a single unit of care", "isCorrect": true },
                { "id": "c", "text": "Excluding family from decisions", "isCorrect": false },
                { "id": "d", "text": "Treatment of the disease is the primary goal", "isCorrect": false }
            ],
            "explanation": "Hospice focuses on comfort (palliative) care and views the patient and family together."
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "Severe muscle wasting and weight loss associated with terminal illness is called __b1__.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["cachexia"], "caseSensitive": false }
            ],
            "explanation": "Cachexia is the specific medical term for wasting syndrome in terminal illness."
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "Patients on analgesics for pain should have their medication stopped if they stop complaining.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "False. Silence does not mean absence of pain. Pain management should be continuous to prevent breakthrough pain."
        }
    ]
});