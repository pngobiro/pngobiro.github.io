registerQuiz("topic-04-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-04-quiz",
    "metadata": {
        "title": "Vector-borne Diseases",
        "description": "Assess your knowledge on Malaria, Filariasis, and other vector-borne conditions.",
        "topicId": "topic-04",
        "difficulty": "intermediate",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2026-01-16T00:00:00Z"
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
            "question": "Which Plasmodium species causes the most severe form of malaria in Kenya?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Plasmodium vivax", "isCorrect": false },
                { "id": "b", "text": "Plasmodium falciparum", "isCorrect": true },
                { "id": "c", "text": "Plasmodium ovale", "isCorrect": false },
                { "id": "d", "text": "Plasmodium malariae", "isCorrect": false }
            ],
            "explanation": "P. falciparum accounts for 98% of cases in Kenya and causes severe (malignant) malaria."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the disease to its vector:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Malaria", "right": "Anopheles Mosquito" },
                { "id": "p2", "left": "Sleeping Sickness", "right": "Tsetse Fly" },
                { "id": "p3", "left": "Kala Azar", "right": "Sandfly" },
                { "id": "p4", "left": "Plague", "right": "Rat Flea" }
            ]
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "Winterbottom's sign is associated with which disease?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Malaria", "isCorrect": false },
                { "id": "b", "text": "Trypanosomiasis", "isCorrect": true },
                { "id": "c", "text": "Filariasis", "isCorrect": false },
                { "id": "d", "text": "Schistosomiasis", "isCorrect": false }
            ],
            "explanation": "Winterbottom's sign is the enlargement of cervical lymph nodes, characteristic of Sleeping Sickness."
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "Which snail acts as the intermediate host for Schistosoma haematobium?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Biomphalaria", "isCorrect": false },
                { "id": "b", "text": "Bulinus", "isCorrect": true },
                { "id": "c", "text": "Lymnaea", "isCorrect": false },
                { "id": "d", "text": "Oncomelania", "isCorrect": false }
            ],
            "explanation": "Bulinus snails transmit S. haematobium (urinary), while Biomphalaria transmit S. mansoni (intestinal)."
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "Plague is an internationally notifiable disease.",
            "points": 5,
            "correctAnswer": true,
            "explanation": "Due to its rapid spread and high mortality, Plague must be notified immediately."
        }
    ]
});