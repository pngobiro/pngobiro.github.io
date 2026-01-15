window.registerQuiz('topic-05-quiz', {
    "schemaVersion": "1.1",
    "quizId": "topic-05-quiz",
    "metadata": {
        "title": "Protozoology Quiz",
        "description": "Test your knowledge on protozoan taxonomy and symbiosis.",
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
            "question": "Which subphylum of Sarcomastigophora uses pseudopodia for movement?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Mastigophora", "isCorrect": false },
                { "id": "b", "text": "Ciliophora", "isCorrect": false },
                { "id": "c", "text": "Sarcodina", "isCorrect": true },
                { "id": "d", "text": "Apicomplexa", "isCorrect": false }
            ],
            "explanation": "Subphylum Sarcodina (e.g., Amoeba) uses pseudopodia."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the symbiosis type with its description:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Parasitism", "right": "Host is harmed" },
                { "id": "p2", "left": "Commensalism", "right": "One benefits, other unaffected" },
                { "id": "p3", "left": "Mutualism", "right": "Both benefit" }
            ]
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "Characteristics of Phylum Apicomplexa include: (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "All are parasites", "isCorrect": true },
                { "id": "b", "text": "Apical complex for penetration", "isCorrect": true },
                { "id": "c", "text": "Move primarily by cilia", "isCorrect": false },
                { "id": "d", "text": "Usually lack cilia and flagella", "isCorrect": true }
            ],
            "partialCredit": true,
            "explanation": "Apicomplexans are parasitic and lack cilia/flagella."
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "In ciliates, the __1__ nucleus regulates metabolic activities, while the __2__ nucleus is for reproduction.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["macronucleus"], "caseSensitive": false },
                { "id": "2", "acceptedAnswers": ["micronucleus"], "caseSensitive": false }
            ],
            "explanation": "Macronucleus for metabolism, micronucleus for genetics."
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "Subphylum Mastigophora moves using:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Cilia", "isCorrect": false },
                { "id": "b", "text": "Flagella", "isCorrect": true },
                { "id": "c", "text": "Pseudopodia", "isCorrect": false },
                { "id": "d", "text": "Gliding", "isCorrect": false }
            ],
            "explanation": "Mastigophora use flagella."
        }
    ]
});