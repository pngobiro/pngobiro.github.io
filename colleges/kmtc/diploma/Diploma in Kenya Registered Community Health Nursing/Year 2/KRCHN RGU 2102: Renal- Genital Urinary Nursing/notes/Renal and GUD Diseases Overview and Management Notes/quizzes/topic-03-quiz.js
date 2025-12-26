registerQuiz("topic-03-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-03-quiz",
    "metadata": {
        "title": "Pyelonephritis Quiz",
        "description": "Test knowledge on kidney infections, causes, and nursing management.",
        "topicId": "topic-03",
        "difficulty": "intermediate",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2025-12-26T12:00:00Z"
    },
    "settings": {
        "shuffleQuestions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which organism is the most common cause of Acute Pyelonephritis?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Staphylococcus aureus", "isCorrect": false },
                { "id": "b", "text": "Escherichia coli", "isCorrect": true },
                { "id": "c", "text": "Streptococcus", "isCorrect": false },
                { "id": "d", "text": "Candida albicans", "isCorrect": false }
            ],
            "explanation": "E. coli from the lower urinary tract is the most common cause of ascending kidney infections."
        },
        {
            "id": "q2",
            "type": "multiple-select",
            "question": "Select the nursing interventions appropriate for Acute Pyelonephritis: (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Encourage fluid intake of 3-4 liters/day", "isCorrect": true },
                { "id": "b", "text": "Restrict fluids to 1 liter/day", "isCorrect": false },
                { "id": "c", "text": "Encourage voiding every 2-3 hours", "isCorrect": true },
                { "id": "d", "text": "Wipe from back to front", "isCorrect": false }
            ],
            "explanation": "High fluid intake flushes bacteria; frequent voiding prevents stasis. Wiping should be front to back."
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "Urine in pyelonephritis may have a __b1__ odor associated with E. coli infection.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["fishy", "unpleasant"], "caseSensitive": false }
            ],
            "explanation": "A fishy odor is characteristic of E. coli infections."
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "Chronic pyelonephritis is a long-standing infection that can progress to chronic renal failure.",
            "points": 5,
            "correctAnswer": true,
            "explanation": "Chronic pyelonephritis involves scarring and can lead to loss of kidney function over time."
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "Why is Sodium Bicarbonate (Citrate) administered in the management of pyelonephritis?",
            "points": 10,
            "options": [
                { "id": "a", "text": "To kill bacteria directly", "isCorrect": false },
                { "id": "b", "text": "To acidify the urine", "isCorrect": false },
                { "id": "c", "text": "To alkalinize the urine", "isCorrect": true },
                { "id": "d", "text": "To reduce fever", "isCorrect": false }
            ],
            "explanation": "Sodium bicarbonate is given to keep the urine alkaline, which helps relieve symptoms."
        }
    ]
});