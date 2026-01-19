registerQuiz("topic-06-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-06-quiz",
    "metadata": {
        "title": "Change and Information Systems Management",
        "description": "Assess understanding of change theories and Health Information Systems.",
        "topicId": "topic-06",
        "difficulty": "intermediate",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2026-01-19T20:00:00Z",
        "updatedAt": "2026-01-19T20:00:00Z",
        "tags": ["change", "IT", "information systems"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate",
        "allowRetry": true,
        "showCorrectAnswers": true,
        "timeLimit": 0
    },
    "questions": [
        {
            "id": "q1",
            "type": "ordering",
            "question": "Order the steps of Kurt Lewin's Change Process.",
            "points": 1,
            "items": [
                { "id": "step1", "text": "Unfreezing", "correctPosition": 1 },
                { "id": "step2", "text": "Changing", "correctPosition": 2 },
                { "id": "step3", "text": "Refreezing", "correctPosition": 3 }
            ],
            "explanation": "Lewin's model starts with Unfreezing (preparing for change), then Changing (implementation), and finally Refreezing (stabilizing)."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "Which of the following is a common reason for resistance to change?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Increased financial rewards", "isCorrect": false },
                { "id": "opt2", "text": "Insecurity and fear of the unknown", "isCorrect": true },
                { "id": "opt3", "text": "Desire for new skills", "isCorrect": false },
                { "id": "opt4", "text": "Boredom with current status", "isCorrect": false }
            ],
            "explanation": "Fear, insecurity, and threat to status are primary drivers of resistance to change."
        },
        {
            "id": "q3",
            "type": "true-false",
            "question": "A 'Change Agent' is always an external consultant hired by the organization.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "False. While they can be external, change agents can also be internal members of the organization identified to foster change."
        },
        {
            "id": "q4",
            "type": "multiple-select",
            "question": "Select the advantages of Information Technology (IT) in healthcare. (Select all that apply)",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Improves operational efficiency", "isCorrect": true },
                { "id": "opt2", "text": "Facilitates fast decision making", "isCorrect": true },
                { "id": "opt3", "text": "Eliminates all paperwork permanently", "isCorrect": false },
                { "id": "opt4", "text": "Facilitates monitoring of performance indicators", "isCorrect": true }
            ],
            "explanation": "IT improves efficiency and decision making. While it reduces reliance on paper, it rarely eliminates it permanently or instantly."
        }
    ]
});