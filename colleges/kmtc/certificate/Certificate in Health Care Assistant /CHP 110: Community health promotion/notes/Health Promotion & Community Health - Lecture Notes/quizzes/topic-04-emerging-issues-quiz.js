registerQuiz("topic-04-emerging-issues-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-04-emerging-issues-quiz",
    "metadata": {
        "title": "Emerging Health Challenges",
        "description": "Evaluate your understanding of global health trends, environmental changes, and MDGs.",
        "topicId": "topic-04-emerging-issues",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2026-01-12T00:00:00Z"
    },
    "settings": {
        "shuffleQuestions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which of the following has NOT been a contributing factor to the recent re-emergence of infectious diseases?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Improved global sanitation", "isCorrect": true },
                { "id": "b", "text": "Urban crowding", "isCorrect": false },
                { "id": "c", "text": "Increased international travel", "isCorrect": false },
                { "id": "d", "text": "Microbial adaptation and resistance", "isCorrect": false }
            ],
            "explanation": "Improved sanitation helps CONTROL disease. Crowding, travel, and resistance contribute to re-emergence."
        },
        {
            "id": "q2",
            "type": "multiple-select",
            "question": "Global climate change poses direct risks to health through: (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Heatwaves", "isCorrect": true },
                { "id": "b", "text": "Increased intensity of storms", "isCorrect": true },
                { "id": "c", "text": "Changing vector-pathogen relationships", "isCorrect": true },
                { "id": "d", "text": "Reduced skin cancer rates", "isCorrect": false }
            ],
            "explanation": "Climate change increases physical hazards (heat, storms) and alters disease vector ranges."
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "The __1__ Revolution in the 1970s and 80s largely averted widespread famine but is now being re-evaluated for sustainability.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["green", "Green"], "caseSensitive": false }
            ],
            "explanation": "The Green Revolution increased food production significantly."
        },
        {
            "id": "q4",
            "type": "short-answer",
            "question": "Explain how economic globalization can negatively impact public health.",
            "points": 15,
            "keywords": ["inequality", "capital flight", "labor", "hazards", "brain drain"],
            "minKeywords": 2,
            "modelAnswer": "Globalization can lead to capital flight causing hardship, deregulated labor conditions exposing workers to hazards, and 'brain drain' weakening health systems in developing nations.",
            "maxLength": 300
        },
        {
            "id": "q5",
            "type": "matching",
            "question": "Match the region with the specific cause of life expectancy decline:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Russia", "right": "Social disintegration, alcoholism, violence" },
                { "id": "p2", "left": "Sub-Saharan Africa", "right": "HIV/AIDS, malaria, poverty" },
                { "id": "p3", "left": "Rwanda", "right": "Catastrophic conflict and violence" }
            ]
        }
    ]
});