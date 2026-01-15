window.registerQuiz('topic-03-quiz', {
    "schemaVersion": "1.1",
    "quizId": "topic-03-quiz",
    "metadata": {
        "title": "Mycology (Fungi) Quiz",
        "description": "Test your knowledge on fungal characteristics, classification, and reproduction.",
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
            "question": "What is the primary component of the fungal cell wall?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Cellulose", "isCorrect": false },
                { "id": "b", "text": "Peptidoglycan", "isCorrect": false },
                { "id": "c", "text": "Chitin", "isCorrect": true },
                { "id": "d", "text": "Lipopolysaccharide", "isCorrect": false }
            ],
            "explanation": "The cell walls of fungi are made of chitin."
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "The study of fungi is called __1__.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["mycology"], "caseSensitive": false }
            ],
            "explanation": "Mycology is the study of fungi."
        },
        {
            "id": "q3",
            "type": "matching",
            "question": "Match the fungal phylum with its description:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Zygomycota", "right": "Bread mold" },
                { "id": "p2", "left": "Basidiomycota", "right": "Mushrooms" },
                { "id": "p3", "left": "Ascomycota", "right": "Cup fungi" },
                { "id": "p4", "left": "Deuteromycota", "right": "Imperfect fungi" }
            ]
        },
        {
            "id": "q4",
            "type": "multiple-select",
            "question": "Which of the following are modes of life found in fungi? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Saprophyte", "isCorrect": true },
                { "id": "b", "text": "Autotroph", "isCorrect": false },
                { "id": "c", "text": "Parasite", "isCorrect": true },
                { "id": "d", "text": "Symbiotic", "isCorrect": true }
            ],
            "partialCredit": true,
            "explanation": "Fungi are heterotrophic and cannot perform photosynthesis (not autotrophs)."
        },
        {
            "id": "q5",
            "type": "short-answer",
            "question": "Explain the difference between a hypha and a mycelium.",
            "points": 15,
            "keywords": ["filament", "mass", "single", "collection"],
            "modelAnswer": "A hypha is a single filament, while a mycelium is a mass of hyphae.",
            "explanation": "Hyphae are individual filaments; mycelium is the collective mass."
        },
        {
            "id": "q6",
            "type": "multiple-choice",
            "question": "Which fungus produces penicillin?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Aspergillus", "isCorrect": false },
                { "id": "b", "text": "Penicillium", "isCorrect": true },
                { "id": "c", "text": "Agaricus", "isCorrect": false },
                { "id": "d", "text": "Epidermophyton", "isCorrect": false }
            ],
            "explanation": "Penicillium molds produce the antibiotic penicillin."
        }
    ]
});