window.registerQuiz('topic-01-quiz', {
    "schemaVersion": "1.1",
    "quizId": "topic-01-quiz",
    "metadata": {
        "title": "Introduction to Microbiology Quiz",
        "description": "Test your knowledge on the history of microbiology, key figures, and fundamental concepts.",
        "difficulty": "beginner",
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
            "question": "Which scientist was the first to describe microorganisms in his book 'Micrographia' (1665)?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Antoni van Leeuwenhoek", "isCorrect": false },
                { "id": "b", "text": "Robert Hooke", "isCorrect": true },
                { "id": "c", "text": "Louis Pasteur", "isCorrect": false },
                { "id": "d", "text": "Ferdinand Cohn", "isCorrect": false }
            ],
            "explanation": "Robert Hooke described the fruiting structures of molds in 1665. Antoni van Leeuwenhoek was the first to see bacteria specifically (1676)."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "What major contribution did Ferdinand Cohn make to the field of bacteriology?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Developed the rabies vaccine", "isCorrect": false },
                { "id": "b", "text": "Disproved spontaneous generation", "isCorrect": false },
                { "id": "c", "text": "Discovered bacterial endospores", "isCorrect": true },
                { "id": "d", "text": "Identified the causative agent of anthrax", "isCorrect": false }
            ],
            "explanation": "Ferdinand Cohn discovered heat-resistant bacterial endospores."
        },
        {
            "id": "q3",
            "type": "true-false",
            "question": "Pasteur's swan-necked flask experiment proved that spontaneous generation occurs when fresh air is present.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "Pasteur's experiment disproved spontaneous generation by showing that sterile broth remained sterile even when exposed to air."
        },
        {
            "id": "q4",
            "type": "ordering",
            "question": "Arrange Koch's Postulates in the correct order:",
            "points": 20,
            "items": [
                { "id": "1", "text": "The organism must be present in diseased animals and absent in healthy ones.", "correctPosition": 1 },
                { "id": "2", "text": "The organism must be cultivated in a pure culture.", "correctPosition": 2 },
                { "id": "3", "text": "The isolated organism must cause disease when inoculated into a healthy host.", "correctPosition": 3 },
                { "id": "4", "text": "The organism must be reisolated from the experimental animal.", "correctPosition": 4 }
            ]
        },
        {
            "id": "q5",
            "type": "fill-blank",
            "question": "The concept that living organisms could arise from nonliving matter is known as __1__ generation.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["spontaneous"], "caseSensitive": false }
            ],
            "explanation": "Spontaneous generation was the belief that life could arise from nonliving matter."
        },
        {
            "id": "q6",
            "type": "matching",
            "question": "Match the scientist with their key contribution:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Antoni van Leeuwenhoek", "right": "First to see bacteria" },
                { "id": "p2", "left": "Louis Pasteur", "right": "Rabies vaccine & Fermentation" },
                { "id": "p3", "left": "Robert Koch", "right": "Germ Theory & Postulates" },
                { "id": "p4", "left": "Ferdinand Cohn", "right": "Founder of Bacteriology" }
            ]
        }
    ]
});