registerQuiz("topic-08-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-08-quiz",
    "metadata": {
        "title": "Conflict Resolution",
        "description": "Test your skills in identifying conflict styles and negotiation processes.",
        "topicId": "topic-08",
        "difficulty": "beginner",
        "estimatedTime": 5,
        "passingScore": 70,
        "createdAt": "2026-01-17T00:00:00Z",
        "updatedAt": "2026-01-17T00:00:00Z",
        "tags": ["conflict", "negotiation", "management"]
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
            "id": "q1-resolution-styles",
            "type": "matching",
            "question": "Match the conflict resolution style to its outcome.",
            "points": 3,
            "pairs": [
                { "id": "p1", "left": "Fight", "right": "Aggressive; Winner and Loser (or both lose)" },
                { "id": "p2", "left": "Flight", "right": "Walking away; Problem unresolved" },
                { "id": "p3", "left": "Flow", "right": "Both satisfied; Win-Win solution" }
            ],
            "explanation": "Fight is aggressive. Flight is avoidance. Flow is cooperative resolution."
        },
        {
            "id": "q2-negotiation-phases",
            "type": "ordering",
            "question": "Order the phases of the negotiation process.",
            "points": 2,
            "items": [
                { "id": "i1", "text": "The Information Phase", "correctPosition": 1 },
                { "id": "i2", "text": "The Competitive Phase", "correctPosition": 2 },
                { "id": "i3", "text": "The Cooperative Phase", "correctPosition": 3 }
            ],
            "explanation": "Information gathering -> Bargaining (Competitive) -> Agreement (Cooperative)."
        },
        {
            "id": "q3-govt-resolution",
            "type": "multiple-choice",
            "question": "Which government conflict resolution method involves selecting a group of professionals to look keenly into a problem and suggest solutions?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Calling an Election", "isCorrect": false },
                { "id": "opt2", "text": "Appointing a Commission", "isCorrect": true },
                { "id": "opt3", "text": "Using Police Force", "isCorrect": false },
                { "id": "opt4", "text": "Ignoring the problem", "isCorrect": false }
            ],
            "explanation": "Appointing a commission involves experts investigating a specific issue."
        },
        {
            "id": "q4-skills",
            "type": "multiple-select",
            "question": "Which of the following are skills for peaceful conflict resolution? (Select all that apply)",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Active listening", "isCorrect": true },
                { "id": "opt2", "text": "Using a calm voice", "isCorrect": true },
                { "id": "opt3", "text": "Maintaining good eye contact", "isCorrect": true },
                { "id": "opt4", "text": "Interrupting frequently", "isCorrect": false }
            ],
            "explanation": "Listening, calmness, and eye contact aid resolution. Interrupting hinders it."
        },
        {
            "id": "q5-definition",
            "type": "true-false",
            "question": "Conflict is always negative and should be avoided at all costs.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "False. Conflict is inescapable but can be dealt with creatively to find solutions."
        }
    ]
});