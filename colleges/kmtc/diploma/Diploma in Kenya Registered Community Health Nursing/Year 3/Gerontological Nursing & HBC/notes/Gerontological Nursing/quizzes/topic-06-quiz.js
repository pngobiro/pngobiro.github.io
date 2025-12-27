registerQuiz("topic-06-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-06-quiz",
    "metadata": {
        "title": "Nursing Care & Management",
        "description": "Assess understanding of daily care, nutrition, hygiene, and mental health.",
        "topicId": "topic-06-nursing-care",
        "difficulty": "intermediate",
        "estimatedTime": 20,
        "passingScore": 70,
        "createdAt": "2025-12-27T10:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "fill-blank",
            "question": "An elderly person needs at least __b1__ gm of protein per kg of body weight.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["1", "1.0", "one"], "caseSensitive": false }
            ],
            "explanation": "Adequate protein (1g/kg) is vital to prevent muscle wasting and maintain health."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "What is the preferred method for managing urinary incontinence in the elderly?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Immediate catheterization", "isCorrect": false },
                { "id": "b", "text": "Bladder retraining with scheduled voiding", "isCorrect": true },
                { "id": "c", "text": "Withholding fluids", "isCorrect": false },
                { "id": "d", "text": "Permanent diaper use", "isCorrect": false }
            ],
            "explanation": "Bladder retraining (scheduled bathroom trips) is the first-line intervention. Catheters increase infection risk."
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "Why might an elderly person have poor nutrition? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Diminished taste and smell", "isCorrect": true },
                { "id": "b", "text": "Loneliness/lack of motivation to cook", "isCorrect": true },
                { "id": "c", "text": "Increased absorption of nutrients", "isCorrect": false },
                { "id": "d", "text": "Dental problems/poor dentures", "isCorrect": true }
            ],
            "partialCredit": true,
            "explanation": "Sensory loss, social isolation, and dental issues are major barriers. Absorption actually decreases."
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "Elderly people should bathe daily with strong soap to maintain hygiene.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "False. Sweat and oil glands are less active. Frequent bathing with strong soap causes dry skin and breakdown. Mild soap and less frequent bathing are recommended."
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "Which mental health problem is the most common in the elderly, affecting about 50%?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Schizophrenia", "isCorrect": false },
                { "id": "b", "text": "Depression", "isCorrect": true },
                { "id": "c", "text": "Bipolar Disorder", "isCorrect": false },
                { "id": "d", "text": "Anxiety", "isCorrect": false }
            ],
            "explanation": "Depression is the most common disorder, often triggered by losses, health issues, and isolation."
        }
    ]
});