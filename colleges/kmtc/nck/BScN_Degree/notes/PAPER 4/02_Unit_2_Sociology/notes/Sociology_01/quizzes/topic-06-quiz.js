registerQuiz("topic-06-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-06-quiz",
    "metadata": {
        "title": "Social Change",
        "description": "Test your understanding of how societies transform, theories of change, and the impact on health.",
        "topicId": "topic-06",
        "difficulty": "intermediate",
        "estimatedTime": 5,
        "passingScore": 70,
        "createdAt": "2026-01-17T00:00:00Z",
        "updatedAt": "2026-01-17T00:00:00Z",
        "tags": ["change", "evolution", "modernisation"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate",
        "allowRetry": true,
        "showCorrectAnswers": true
    },
    "questions": [
        {
            "id": "q1-change-types",
            "type": "matching",
            "question": "Match the type of social change to its definition.",
            "points": 3,
            "pairs": [
                { "id": "p1", "left": "Evolution", "right": "Slow, gradual change with low human effort" },
                { "id": "p2", "left": "Revolution", "right": "Rapid, deliberate change initiated by direct action" },
                { "id": "p3", "left": "Reform", "right": "Deliberate effort to alter society with less force than revolution" }
            ],
            "explanation": "Evolution is gradual. Revolution is rapid/radical. Reform is deliberate modification."
        },
        {
            "id": "q2-modernisation",
            "type": "multiple-choice",
            "question": "Which theory assumes that change is synonymous with improvement and describes the transition from agricultural to industrial societies?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Equilibrium Theory", "isCorrect": false },
                { "id": "opt2", "text": "Modernisation Theory", "isCorrect": true },
                { "id": "opt3", "text": "Conflict Theory", "isCorrect": false },
                { "id": "opt4", "text": "Evolutionary Theory", "isCorrect": false }
            ],
            "explanation": "Modernisation theory views change as progress towards industrialisation."
        },
        {
            "id": "q3-innovation",
            "type": "fill-blank",
            "question": "__b1__ refers to recombining existing items to form a new item (e.g., vaccines), while __b2__ involves finding things that already exist.",
            "points": 2,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["invention"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["discovery"], "caseSensitive": false }
            ],
            "explanation": "Invention creates something new. Discovery finds something existing."
        },
        {
            "id": "q4-seven-doors",
            "type": "ordering",
            "question": "Order the first 4 steps of the 'Seven Doors' of social change.",
            "points": 2,
            "items": [
                { "id": "i1", "text": "Knowledge/Awareness", "correctPosition": 1 },
                { "id": "i2", "text": "Desire", "correctPosition": 2 },
                { "id": "i3", "text": "Skills", "correctPosition": 3 },
                { "id": "i4", "text": "Optimism (Confidence)", "correctPosition": 4 }
            ],
            "explanation": "The sequence starts with Awareness, then Desire, Skills, and Optimism."
        },
        {
            "id": "q5-health-impact",
            "type": "true-false",
            "question": "Industrialisation always leads to better health outcomes for the population due to increased wealth.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "False. Industrialisation can lead to pollution, overcrowding, and mismanagement of resources, which negatively affect health."
        }
    ]
});