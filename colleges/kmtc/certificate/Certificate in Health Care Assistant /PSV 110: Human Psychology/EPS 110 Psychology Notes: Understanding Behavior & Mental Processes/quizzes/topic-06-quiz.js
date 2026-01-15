registerQuiz("topic-06-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-06-quiz",
    "metadata": {
        "title": "Intelligence Quiz",
        "description": "Test your knowledge of IQ, theories of intelligence, and mental retardation.",
        "topicId": "topic-06",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2026-01-10T12:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "fill-blank",
            "question": "The formula for IQ is __1__ divided by __2__ multiplied by 100.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["MA", "Mental Age"], "caseSensitive": false },
                { "id": "2", "acceptedAnswers": ["CA", "Chronological Age"], "caseSensitive": false }
            ]
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "If a 10-year-old child has a Mental Age of 12, what is their IQ?",
            "points": 10,
            "options": [
                { "id": "a", "text": "100", "isCorrect": false },
                { "id": "b", "text": "120", "isCorrect": true },
                { "id": "c", "text": "83", "isCorrect": false },
                { "id": "d", "text": "110", "isCorrect": false }
            ],
            "explanation": "(12 / 10) * 100 = 120"
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "Who proposed the 'g-factor' (general intelligence) theory?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Howard Gardner", "isCorrect": false },
                { "id": "b", "text": "Charles Spearman", "isCorrect": true },
                { "id": "c", "text": "Robert Sternberg", "isCorrect": false },
                { "id": "d", "text": "L.L. Thurstone", "isCorrect": false }
            ]
        },
        {
            "id": "q4",
            "type": "matching",
            "question": "Match the type of intelligence (Cattell/Horn) to its description:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Fluid Intelligence", "right": "Inherited, problem solving in novel situations" },
                { "id": "p2", "left": "Crystallized Intelligence", "right": "Learned knowledge, increases with age" }
            ]
        },
        {
            "id": "q5",
            "type": "multiple-select",
            "question": "Select the components of Sternberg's Triarchic Theory:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Analytical Intelligence", "isCorrect": true },
                { "id": "b", "text": "Creative Intelligence", "isCorrect": true },
                { "id": "c", "text": "Emotional Intelligence", "isCorrect": false },
                { "id": "d", "text": "Practical Intelligence", "isCorrect": true }
            ],
            "partialCredit": true
        },
        {
            "id": "q6",
            "type": "true-false",
            "question": "Severe malnutrition in early years can lead to mental retardation.",
            "points": 10,
            "correctAnswer": true,
            "explanation": "Lack of proteins and nutrients affects brain cell development."
        },
        {
            "id": "q7",
            "type": "multiple-choice",
            "question": "An IQ score between 50-69 is classified as:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Average", "isCorrect": false },
                { "id": "b", "text": "Dull", "isCorrect": false },
                { "id": "c", "text": "Mild Mental Retardation (Moron)", "isCorrect": true },
                { "id": "d", "text": "Severe Mental Retardation", "isCorrect": false }
            ]
        },
        {
            "id": "q8",
            "type": "multiple-choice",
            "question": "Which intelligence type in Gardner's theory involves 'self-smart' / understanding oneself?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Interpersonal", "isCorrect": false },
                { "id": "b", "text": "Intrapersonal", "isCorrect": true },
                { "id": "c", "text": "Spatial", "isCorrect": false },
                { "id": "d", "text": "Naturalist", "isCorrect": false }
            ]
        }
    ]
});