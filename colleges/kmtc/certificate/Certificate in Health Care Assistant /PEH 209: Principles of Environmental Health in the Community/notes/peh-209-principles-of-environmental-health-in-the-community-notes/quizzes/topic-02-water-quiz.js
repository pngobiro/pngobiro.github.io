// quizzes/topic-02-water-quiz.js
window.registerQuiz('topic-02-water-quiz', {
    "schemaVersion": "1.0",
    "quizId": "topic-02-water-quiz",
    "metadata": {
        "title": "Water and Health Quiz",
        "description": "Test your knowledge on water sources, pollution, diseases, and treatment.",
        "topicId": "topic-02-water",
        "difficulty": "intermediate",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2026-01-16T10:00:00Z"
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "What is the minimum distance recommended between a well and a source of contaminants (like a latrine) in normal soils?",
            "points": 10,
            "options": [
                { "id": "a", "text": "5 metres", "isCorrect": false },
                { "id": "b", "text": "10 metres", "isCorrect": false },
                { "id": "c", "text": "15 metres", "isCorrect": true },
                { "id": "d", "text": "100 metres", "isCorrect": false }
            ],
            "explanation": "In normal soils, the minimum distance should never be less than 15 metres to prevent contamination."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the water disease category with the example:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Waterborne", "right": "Cholera / Typhoid" },
                { "id": "p2", "left": "Water-washed", "right": "Trachoma / Scabies" },
                { "id": "p3", "left": "Water-based", "right": "Schistosomiasis / Guinea Worm" },
                { "id": "p4", "left": "Water-related", "right": "Malaria / Yellow Fever" }
            ]
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "Select all Point Sources of water pollution:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Factories", "isCorrect": true },
                { "id": "b", "text": "Agricultural runoff", "isCorrect": false },
                { "id": "c", "text": "Sewage systems", "isCorrect": true },
                { "id": "d", "text": "Acid rain", "isCorrect": false }
            ],
            "explanation": "Factories and sewage systems have definite discharge points. Runoff and rain are non-point sources."
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "The excessive growth of algae and aquatic plants due to added nutrients (nitrates/phosphates) is called __b1__.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["eutrophication"], "caseSensitive": false }
            ],
            "explanation": "Eutrophication is the enrichment of water by nutrients causing excessive plant growth."
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "Boiling is considered a method of water disinfection.",
            "points": 10,
            "correctAnswer": true,
            "explanation": "Yes, disinfection methods include boiling, chlorination, and solar disinfection."
        },
        {
            "id": "q6",
            "type": "multiple-choice",
            "question": "Which of the following is an 'Oxygen depleting waste'?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Lead and Mercury", "isCorrect": false },
                { "id": "b", "text": "Organic waste / Manure", "isCorrect": true },
                { "id": "c", "text": "Soil sediment", "isCorrect": false },
                { "id": "d", "text": "Radioactive isotopes", "isCorrect": false }
            ],
            "explanation": "Organic wastes are decomposed by aerobic bacteria which use up oxygen in the process."
        }
    ]
});