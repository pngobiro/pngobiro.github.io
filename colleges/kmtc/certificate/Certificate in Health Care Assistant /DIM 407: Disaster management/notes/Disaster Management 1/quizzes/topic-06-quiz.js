registerQuiz("topic-06-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-06-quiz",
    "metadata": {
        "title": "Education and Public Awareness",
        "description": "Assess understanding of community-based approaches, stakeholder roles, and media management.",
        "topicId": "topic-06",
        "difficulty": "intermediate",
        "estimatedTime": 6,
        "passingScore": 70,
        "createdAt": "2025-12-25T12:00:00Z",
        "tags": ["education", "community", "media"]
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
            "id": "q1",
            "type": "multiple-choice",
            "question": "Why is the Community-Based Approach considered highly effective?",
            "points": 10,
            "options": [
                { "id": "a", "text": "It relies solely on international experts", "isCorrect": false },
                { "id": "b", "text": "Locals have the best knowledge of their environment and culture", "isCorrect": true },
                { "id": "c", "text": "It requires no funding", "isCorrect": false },
                { "id": "d", "text": "It bypasses government regulations", "isCorrect": false }
            ],
            "explanation": "Community members are the immediate victims and possess indigenous knowledge, cultural understanding, and ownership, making initiatives sustainable."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the stakeholder to their role:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Policy Makers", "right": "Drafting acts and regulations" },
                { "id": "p2", "left": "Community Workers", "right": "Reliable arms of local government for implementation" },
                { "id": "p3", "left": "Trainers", "right": "Facilitate awareness and skills transfer" },
                { "id": "p4", "left": "NGOs", "right": "Provide wide networks and professional activists" }
            ]
        },
        {
            "id": "q3",
            "type": "true-false",
            "question": "Indigenous knowledge systems should be ignored in favor of modern scientific methods during disaster awareness campaigns.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "Indigenous knowledge (e.g., traditional signals, herbal medicine, planting strategies) is a vital resource and should be integrated, not ignored."
        },
        {
            "id": "q4",
            "type": "multiple-select",
            "question": "What are potential NEGATIVE effects of the media during a disaster? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Creating unnecessary panic through exaggeration", "isCorrect": true },
                { "id": "b", "text": "Convergence causing congestion in affected areas", "isCorrect": true },
                { "id": "c", "text": "Disseminating public safety information", "isCorrect": false },
                { "id": "d", "text": "Biased coverage for sensationalism", "isCorrect": true }
            ],
            "partialCredit": true,
            "explanation": "Disseminating safety information is a POSITIVE effect. Panic, congestion, and bias are negative effects."
        }
    ]
});