registerQuiz("topic-05-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-05-quiz",
    "metadata": {
        "title": "End of Life Care",
        "description": "Test your knowledge on the signs of dying and management in the last 48 hours.",
        "topicId": "topic-05",
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
            "question": "What is the recommended management for 'Death Rattle' (noisy secretions)?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Deep suctioning every hour", "isCorrect": false },
                { "id": "b", "text": "Hyoscine Butylbromide and repositioning", "isCorrect": true },
                { "id": "c", "text": "Increasing IV fluids", "isCorrect": false },
                { "id": "d", "text": "Antibiotics", "isCorrect": false }
            ],
            "explanation": "Hyoscine helps dry secretions. Repositioning helps drainage. Suctioning can be distressing."
        },
        {
            "id": "q2",
            "type": "multiple-select",
            "question": "Which of the following are common physical signs of the dying process? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Cool extremities", "isCorrect": true },
                { "id": "b", "text": "Cheyne-Stokes breathing (irregular periods of apnea)", "isCorrect": true },
                { "id": "c", "text": "Increased appetite", "isCorrect": false },
                { "id": "d", "text": "Mottling of the skin", "isCorrect": true }
            ],
            "explanation": "Coolness, irregular breathing, and mottling are classic signs. Appetite usually decreases."
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "For terminal restlessness or convulsions, __b1__ is a commonly used sedative/anticonvulsant.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["diazepam", "valium"], "caseSensitive": false }
            ],
            "explanation": "Diazepam (5-10mg) is used for sedation and seizure control."
        }
    ]
});