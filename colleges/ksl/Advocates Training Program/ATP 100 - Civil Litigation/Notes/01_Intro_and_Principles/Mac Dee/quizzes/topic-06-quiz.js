registerQuiz("topic-06-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-06-quiz",
    "metadata": {
        "title": "Interlocutory Applications Quiz",
        "description": "Test your grasp of interim orders, injunctions, and pre-trial procedures.",
        "topicId": "topic-06",
        "difficulty": "advanced",
        "estimatedTime": 20,
        "passingScore": 70,
        "createdAt": "2026-01-03T12:00:00Z",
        "tags": ["injunctions", "discovery", "interim-orders"]
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
            "type": "multiple-select",
            "question": "Which of the following are the conditions for granting an interlocutory injunction as per Giella v Cassman Brown? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Prima facie case with probability of success", "isCorrect": true },
                { "id": "b", "text": "Irreparable injury to the applicant", "isCorrect": true },
                { "id": "c", "text": "Balance of convenience favors the applicant", "isCorrect": true },
                { "id": "d", "text": "Proof beyond reasonable doubt", "isCorrect": false }
            ],
            "explanation": "The three conditions are: Prima facie case, Irreparable injury (damages not adequate), and Balance of convenience."
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "A __1__ Injunction is an order freezing the assets of a defendant to prevent them from being removed from the jurisdiction or dissipated.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["Mareva"], "caseSensitive": false }
            ],
            "explanation": "A Mareva Injunction (freezing order) prevents the disposal of assets pending judgment."
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "What is the purpose of an 'Anton Piller' order?",
            "points": 10,
            "options": [
                { "id": "a", "text": "To arrest the defendant", "isCorrect": false },
                { "id": "b", "text": "To enter premises and seize evidence", "isCorrect": true },
                { "id": "c", "text": "To freeze bank accounts", "isCorrect": false },
                { "id": "d", "text": "To compel a witness to attend court", "isCorrect": false }
            ],
            "explanation": "An Anton Piller order is a search order allowing entry to premises to preserve evidence that might otherwise be destroyed."
        },
        {
            "id": "q4",
            "type": "ordering",
            "question": "Order the stages of the Pre-Trial Case Management process:",
            "points": 10,
            "items": [
                { "id": "i1", "text": "Case Conference", "correctPosition": 1 },
                { "id": "i2", "text": "Settlement Conference", "correctPosition": 2 },
                { "id": "i3", "text": "Trial Conference", "correctPosition": 3 }
            ],
            "explanation": "Order 11 provides for Case Conference (scheduling), then Settlement Conference (ADR), and finally Trial Conference (hearing prep)."
        }
    ]
});