registerQuiz("topic-07-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-07-quiz",
    "metadata": {
        "title": "Renal Trauma Quiz",
        "description": "Test knowledge on kidney injury assessment and management.",
        "topicId": "topic-07",
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
            "question": "What is the most common clinical sign of renal trauma?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Hypertension", "isCorrect": false },
                { "id": "b", "text": "Hematuria", "isCorrect": true },
                { "id": "c", "text": "Fever", "isCorrect": false },
                { "id": "d", "text": "Polyuria", "isCorrect": false }
            ],
            "explanation": "Hematuria is the cardinal sign of renal injury."
        },
        {
            "id": "q2",
            "type": "multiple-select",
            "question": "Which of the following are part of the active resuscitative management for renal trauma? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Control bleeding", "isCorrect": true },
                { "id": "b", "text": "Treatment of shock", "isCorrect": true },
                { "id": "c", "text": "Outline original mass area with pencil", "isCorrect": true },
                { "id": "d", "text": "Discharge immediately", "isCorrect": false }
            ],
            "explanation": "Management involves stabilizing the patient (bleeding/shock) and monitoring the injury (mass outline)."
        },
        {
            "id": "q3",
            "type": "true-false",
            "question": "Conservative management (bed rest, observation) is indicated for minor renal injuries.",
            "points": 5,
            "correctAnswer": true,
            "explanation": "Minor injuries are often managed with bed rest and observation unless deterioration occurs."
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "Which late complication can result from renal trauma?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Hypertension", "isCorrect": true },
                { "id": "b", "text": "Re-bleeding (Early)", "isCorrect": false },
                { "id": "c", "text": "Shock (Early)", "isCorrect": false },
                { "id": "d", "text": "Hypotension", "isCorrect": false }
            ],
            "explanation": "Hypertension is a late complication due to renal scarring or ischemia activating the RAAS."
        }
    ]
});