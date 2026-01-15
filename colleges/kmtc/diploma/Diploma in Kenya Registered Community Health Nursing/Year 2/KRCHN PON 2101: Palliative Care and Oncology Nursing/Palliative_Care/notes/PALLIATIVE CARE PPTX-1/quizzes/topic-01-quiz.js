registerQuiz("topic-01-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-01-quiz",
    "metadata": {
        "title": "Introduction & Fundamentals",
        "description": "Test your knowledge on the definition, history, and core principles of Palliative Care.",
        "topicId": "topic-01",
        "difficulty": "beginner",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2025-12-27T12:00:00Z"
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate",
        "allowRetry": true,
        "showCorrectAnswers": true
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Who is credited with founding the modern hospice movement at St Christopher's in London (1967)?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Florence Nightingale", "isCorrect": false },
                { "id": "b", "text": "Dr. Cicely Saunders", "isCorrect": true },
                { "id": "c", "text": "Elisabeth Kübler-Ross", "isCorrect": false },
                { "id": "d", "text": "Mother Teresa", "isCorrect": false }
            ],
            "explanation": "Dr. Cicely Saunders founded St Christopher's Hospice in 1967 and is considered the founder of the modern hospice movement."
        },
        {
            "id": "q2",
            "type": "true-false",
            "question": "Palliative care intends to neither hasten nor postpone death.",
            "points": 10,
            "correctAnswer": true,
            "explanation": "A core principle of palliative care is affirming life and regarding dying as a normal process, without intending to hasten or postpone it."
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "According to the WHO definition, palliative care addresses which of the following problems? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Physical", "isCorrect": true },
                { "id": "b", "text": "Psychosocial", "isCorrect": true },
                { "id": "c", "text": "Spiritual", "isCorrect": true },
                { "id": "d", "text": "Economic", "isCorrect": false }
            ],
            "explanation": "Palliative care assesses and treats physical, psychosocial, and spiritual problems."
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "The first palliative care service in Africa was __b1__ Hospice in Zimbabwe.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["Island", "island"], "caseSensitive": false }
            ],
            "explanation": "Island Hospice in Zimbabwe was the first service in Africa, established in 1979."
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "Which principle emphasizes regarding the patient as a 'whole person' comprising physiological, social, and physical aspects?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Holistic Care", "isCorrect": true },
                { "id": "b", "text": "Specialized Care", "isCorrect": false },
                { "id": "c", "text": "Acute Care", "isCorrect": false },
                { "id": "d", "text": "Terminal Care", "isCorrect": false }
            ],
            "explanation": "Holistic care looks at the patient as a whole being, not just a set of symptoms."
        }
    ]
});