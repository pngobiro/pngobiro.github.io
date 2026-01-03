registerQuiz("topic-09-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-09-quiz",
    "metadata": {
        "title": "Judicial Review Procedure Quiz",
        "description": "Assess your understanding of the prerogative orders and the two-stage JR process.",
        "topicId": "topic-09",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2026-01-03T12:00:00Z",
        "tags": ["judicial-review", "mandamus", "certiorari"]
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
            "question": "Which order is used to quash a decision of an inferior court or public body?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Mandamus", "isCorrect": false },
                { "id": "b", "text": "Prohibition", "isCorrect": false },
                { "id": "c", "text": "Certiorari", "isCorrect": true },
                { "id": "d", "text": "Habeas Corpus", "isCorrect": false }
            ],
            "explanation": "Certiorari removes proceedings to the High Court to be quashed/cancelled."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "The first stage of Judicial Review application (seeking Leave) is made:",
            "points": 10,
            "options": [
                { "id": "a", "text": "By Notice of Motion (Inter Partes)", "isCorrect": false },
                { "id": "b", "text": "By Chamber Summons (Ex Parte)", "isCorrect": true },
                { "id": "c", "text": "By Plaint", "isCorrect": false },
                { "id": "d", "text": "By Petition", "isCorrect": false }
            ],
            "explanation": "The leave stage is ex parte by Chamber Summons. The substantive stage is inter partes by Notice of Motion."
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "An application for an order of Certiorari must be made within __1__ months of the date of the proceeding complained of.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["6", "six"], "caseSensitive": false }
            ],
            "explanation": "Order 53 Rule 2 imposes a strict 6-month limitation for Certiorari."
        }
    ]
});