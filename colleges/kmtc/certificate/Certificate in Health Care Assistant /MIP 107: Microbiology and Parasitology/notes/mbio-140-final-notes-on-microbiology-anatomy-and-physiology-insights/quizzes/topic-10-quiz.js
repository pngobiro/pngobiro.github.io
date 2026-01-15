window.registerQuiz('topic-10-quiz', {
    "schemaVersion": "1.1",
    "quizId": "topic-10-quiz",
    "metadata": {
        "title": "Industrial Microbiology Quiz",
        "description": "Test your knowledge on fermentations, products, and water treatment.",
        "difficulty": "intermediate",
        "estimatedTime": 10,
        "passingScore": 70
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate",
        "allowRetry": true
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Large-scale growth of microbes for beneficial compounds is called:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Decomposition", "isCorrect": false },
                { "id": "b", "text": "Industrial fermentation", "isCorrect": true },
                { "id": "c", "text": "Bioremediation", "isCorrect": false },
                { "id": "d", "text": "Pasteurization", "isCorrect": false }
            ],
            "explanation": "Industrial fermentation produces compounds."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match metabolite type:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Primary", "right": "Produced during active growth" },
                { "id": "p2", "left": "Secondary", "right": "Produced during stationary phase" }
            ]
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "Industrial products of microbes:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Enzymes", "isCorrect": true },
                { "id": "b", "text": "Alternative fuels", "isCorrect": true },
                { "id": "c", "text": "Pharmaceuticals", "isCorrect": true },
                { "id": "d", "text": "Synthetic plastics", "isCorrect": false }
            ],
            "partialCredit": true
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "Wastewater treatment reduces __1__ oxygen demand (__2__).",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["biochemical"], "caseSensitive": false },
                { "id": "2", "acceptedAnswers": ["BOD"], "caseSensitive": false }
            ],
            "explanation": "BOD (Biochemical Oxygen Demand)."
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "Biosensors are composed of microbes with innate signaling capabilities.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "Those are Bioreporters. Biosensors combine microbes with electronic devices."
        },
        {
            "id": "q6",
            "type": "multiple-choice",
            "question": "Goal of reducing BOD?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Increase aerobic bacteria", "isCorrect": false },
                { "id": "b", "text": "Prevent microbial growth support", "isCorrect": true },
                { "id": "c", "text": "Add nutrients", "isCorrect": false },
                { "id": "d", "text": "Heat the water", "isCorrect": false }
            ],
            "explanation": "Reducing BOD removes organic matter that would support unwanted growth."
        }
    ]
});