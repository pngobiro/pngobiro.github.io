registerQuiz("topic-11-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-11-quiz",
    "metadata": {
        "title": "Nephrotic Syndrome Quiz",
        "description": "Test your knowledge on the symptoms and management of nephrotic syndrome.",
        "topicId": "topic-11",
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
            "type": "multiple-select",
            "question": "Select the four hallmark signs of Nephrotic Syndrome:",
            "points": 20,
            "options": [
                { "id": "a", "text": "Massive Proteinuria", "isCorrect": true },
                { "id": "b", "text": "Hypoalbuminemia", "isCorrect": true },
                { "id": "c", "text": "Edema", "isCorrect": true },
                { "id": "d", "text": "Hyperlipidemia", "isCorrect": true },
                { "id": "e", "text": "Hematuria", "isCorrect": false }
            ],
            "explanation": "Nephrotic syndrome is defined by Proteinuria, Hypoalbuminemia, Edema, and Hyperlipidemia."
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "Nephrotic range proteinuria in adults is defined as protein excretion of __b1__ g or more per day.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["3.5"], "caseSensitive": false }
            ],
            "explanation": "Proteinuria > 3.5g/day is the diagnostic threshold for adults."
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "What is the first-line pharmacological treatment for Nephrotic Syndrome?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Antibiotics", "isCorrect": false },
                { "id": "b", "text": "Corticosteroids (Prednisone)", "isCorrect": true },
                { "id": "c", "text": "Diuretics alone", "isCorrect": false },
                { "id": "d", "text": "Antihypertensives", "isCorrect": false }
            ],
            "explanation": "Corticosteroids are used to induce remission by reducing glomerular inflammation."
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "Edema in nephrotic syndrome typically starts around the eyes (periorbital) in the morning.",
            "points": 5,
            "correctAnswer": true,
            "explanation": "Periorbital edema is often the first sign, especially in children."
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "What diet is recommended for a patient with Nephrotic Syndrome during the edema phase?",
            "points": 10,
            "options": [
                { "id": "a", "text": "High Sodium", "isCorrect": false },
                { "id": "b", "text": "Sodium Restricted", "isCorrect": true },
                { "id": "c", "text": "High Fat", "isCorrect": false },
                { "id": "d", "text": "Fluid loading", "isCorrect": false }
            ],
            "explanation": "Sodium restriction helps manage edema and fluid retention."
        }
    ]
});