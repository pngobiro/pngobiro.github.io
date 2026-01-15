window.registerQuiz('topic-07-quiz', {
    "schemaVersion": "1.1",
    "quizId": "topic-07-quiz",
    "metadata": {
        "title": "Microbial Metabolism Quiz",
        "description": "Test your knowledge on enzymes and metabolic pathways.",
        "difficulty": "intermediate",
        "estimatedTime": 15,
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
            "type": "fill-blank",
            "question": "Enzymes lower the __1__ energy required for a reaction.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["activation"], "caseSensitive": false }
            ],
            "explanation": "Enzymes lower activation energy."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the term with definition:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Catabolism", "right": "Energy-releasing breakdown" },
                { "id": "p2", "left": "Anabolism", "right": "Energy-using synthesis" },
                { "id": "p3", "left": "Oxidation", "right": "Removal of electrons" },
                { "id": "p4", "left": "Reduction", "right": "Gain of electrons" }
            ]
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "Final electron acceptor in aerobic respiration?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Nitrate", "isCorrect": false },
                { "id": "b", "text": "Sulfate", "isCorrect": false },
                { "id": "c", "text": "Oxygen", "isCorrect": true },
                { "id": "d", "text": "Organic molecules", "isCorrect": false }
            ],
            "explanation": "Aerobic respiration uses Oxygen."
        },
        {
            "id": "q4",
            "type": "ordering",
            "question": "Order aerobic respiration stages:",
            "points": 15,
            "items": [
                { "id": "1", "text": "Glycolysis", "correctPosition": 1 },
                { "id": "2", "text": "Intermediate Step", "correctPosition": 2 },
                { "id": "3", "text": "Krebs Cycle", "correctPosition": 3 },
                { "id": "4", "text": "Electron Transport Chain", "correctPosition": 4 }
            ]
        },
        {
            "id": "q5",
            "type": "multiple-select",
            "question": "True about Fermentation:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Requires Oxygen", "isCorrect": false },
                { "id": "b", "text": "No Krebs cycle or ETC", "isCorrect": true },
                { "id": "c", "text": "Organic molecule as acceptor", "isCorrect": true },
                { "id": "d", "text": "Releases energy from oxidation", "isCorrect": true }
            ],
            "partialCredit": true
        },
        {
            "id": "q6",
            "type": "matching",
            "question": "Match nutritional type:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Photoautotroph", "right": "Light energy, CO2" },
                { "id": "p2", "left": "Chemoautotroph", "right": "Chemical energy, CO2" },
                { "id": "p3", "left": "Chemoheterotroph", "right": "Chemical energy, Organics" }
            ]
        }
    ]
});