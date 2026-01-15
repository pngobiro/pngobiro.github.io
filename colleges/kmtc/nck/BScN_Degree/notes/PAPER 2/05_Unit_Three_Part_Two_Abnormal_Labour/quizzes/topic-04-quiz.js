registerQuiz("topic-04-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-04-quiz",
    "metadata": {
        "title": "Abnormal Puerperium Quiz",
        "description": "Check your understanding of puerperal pyrexia, sepsis, and breast disorders.",
        "topicId": "topic-04",
        "difficulty": "intermediate",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2026-01-12T00:00:00Z"
    },
    "settings": {
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "fill-blank",
            "question": "Puerperal pyrexia is a febrile condition with a temperature of __b1__°C or above within 14-21 days of delivery.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["38", "38.0"], "caseSensitive": false }
            ],
            "explanation": "38°C is the clinical threshold for puerperal pyrexia."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "Which organism is the primary cause of mastitis and breast abscess, often found in dust?",
            "points": 5,
            "options": [
                { "id": "a", "text": "Escherichia coli", "isCorrect": false },
                { "id": "b", "text": "Staphylococcus aureus", "isCorrect": true },
                { "id": "c", "text": "Streptococcus faecalis", "isCorrect": false },
                { "id": "d", "text": "Clostridium welchii", "isCorrect": false }
            ],
            "explanation": "Staphylococcus aureus is the most common exogenous organism causing breast infections."
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "Which of the following are signs of 'Severe' Puerperal Sepsis? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Persistent fever over 39°C and rigors", "isCorrect": true },
                { "id": "b", "text": "Pulse rate 140-160 bpm", "isCorrect": true },
                { "id": "c", "text": "Sub-involuted, tender uterus", "isCorrect": true },
                { "id": "d", "text": "Normal lochia", "isCorrect": false }
            ],
            "partialCredit": true,
            "explanation": "Severe sepsis involves high fever, rapid pulse, uterine tenderness, and systemic signs like vomiting or pallor."
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "In the treatment of breast abscess, lactation must continue to empty the breast.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "In the case of breast abscess, lactation is typically suppressed (e.g., using Bromocriptine) and the abscess is drained."
        }
    ]
});