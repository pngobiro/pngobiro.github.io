window.registerQuiz('topic-02-quiz', {
    "schemaVersion": "1.1",
    "quizId": "topic-02-quiz",
    "metadata": {
        "title": "Bacteriology Quiz",
        "description": "Test your knowledge on bacterial shapes, structures, growth factors, and control methods.",
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
            "type": "matching",
            "question": "Match the bacterial shape with its description:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Cocci", "right": "Spherical" },
                { "id": "p2", "left": "Bacilli", "right": "Rod-shaped" },
                { "id": "p3", "left": "Vibrio", "right": "Curved" },
                { "id": "p4", "left": "Streptococcus", "right": "Chain of spheres" }
            ]
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the flagella arrangement to its definition:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Monotrichous", "right": "1 flagella" },
                { "id": "p2", "left": "Lophotrichous", "right": "Tuft at one end" },
                { "id": "p3", "left": "Amphitrichous", "right": "Flagella at both ends" },
                { "id": "p4", "left": "Peritrichous", "right": "All around bacteria" }
            ]
        },
        {
            "id": "q3",
            "type": "ordering",
            "question": "Place the phases of bacterial culture growth in the correct chronological order:",
            "points": 15,
            "items": [
                { "id": "1", "text": "Lag phase", "correctPosition": 1 },
                { "id": "2", "text": "Log phase", "correctPosition": 2 },
                { "id": "3", "text": "Stationary phase", "correctPosition": 3 },
                { "id": "4", "text": "Death or Decline phase", "correctPosition": 4 }
            ]
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "Which category of bacteria grows best at human body temperatures (37°C)?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Psychrophiles", "isCorrect": false },
                { "id": "b", "text": "Mesophiles", "isCorrect": true },
                { "id": "c", "text": "Thermophiles", "isCorrect": false },
                { "id": "d", "text": "Halophiles", "isCorrect": false }
            ],
            "explanation": "Mesophiles grow at moderate temperatures and include most human pathogens."
        },
        {
            "id": "q5",
            "type": "fill-blank",
            "question": "For sterilization in an autoclave, the standard conditions are __1__ psi (121°C) for __2__ minutes.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["15"], "caseSensitive": false },
                { "id": "2", "acceptedAnswers": ["15"], "caseSensitive": false }
            ],
            "explanation": "Autoclaves use 15 psi at 121°C for 15 minutes to sterilize."
        },
        {
            "id": "q6",
            "type": "multiple-choice",
            "question": "What is a 'Facultative anaerobe'?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Requires oxygen to survive", "isCorrect": false },
                { "id": "b", "text": "Killed by oxygen", "isCorrect": false },
                { "id": "c", "text": "Can grow with or without oxygen", "isCorrect": true },
                { "id": "d", "text": "Requires high salt concentrations", "isCorrect": false }
            ],
            "explanation": "Facultative anaerobes can survive with or without oxygen."
        }
    ]
});