registerQuiz("topic-05-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-05-quiz",
    "metadata": {
        "title": "Commencement of Suits & Pleadings Quiz",
        "description": "Assess your knowledge on how to start a civil suit, drafting pleadings, and service of summons.",
        "topicId": "topic-05",
        "difficulty": "advanced",
        "estimatedTime": 20,
        "passingScore": 70,
        "createdAt": "2026-01-03T12:00:00Z",
        "tags": ["plaint", "service", "pleadings", "appearance"]
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
            "question": "Which document is generally used to commence a suit involving substantial disputes of fact?",
            "points": 5,
            "options": [
                { "id": "a", "text": "Originating Summons", "isCorrect": false },
                { "id": "b", "text": "Plaint", "isCorrect": true },
                { "id": "c", "text": "Notice of Motion", "isCorrect": false },
                { "id": "d", "text": "Chamber Summons", "isCorrect": false }
            ],
            "explanation": "A Plaint (Order 4) is the standard mode for suits with factual disputes. Originating Summons is for simpler/legal interpretation matters."
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "Summons to enter appearance are initially valid for __1__ months from the date of issue.",
            "points": 5,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["12", "twelve"], "caseSensitive": false }
            ],
            "explanation": "Order 5 Rule 2 states that summons shall be valid for 12 months."
        },
        {
            "id": "q3",
            "type": "matching",
            "question": "Match the mode of service with its description:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Personal Service", "right": "Delivering directly to the defendant" },
                { "id": "p2", "left": "Substituted Service", "right": "Advertisement or affixing on door" },
                { "id": "p3", "left": "Service on Government", "right": "Delivering to the Attorney General" }
            ],
            "explanation": "Personal service is the primary mode. Substituted service requires court leave when the defendant cannot be found. Government is served via the AG."
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "What happens if a defendant fails to enter an appearance in a suit for a liquidated demand?",
            "points": 10,
            "options": [
                { "id": "a", "text": "The suit is dismissed", "isCorrect": false },
                { "id": "b", "text": "Interlocutory judgment is entered", "isCorrect": false },
                { "id": "c", "text": "Final judgment is entered", "isCorrect": true },
                { "id": "d", "text": "The court issues a warrant of arrest", "isCorrect": false }
            ],
            "explanation": "For liquidated demands (specific sum), failure to appear leads to Final Judgment (Order 10 Rule 4). For unliquidated damages, it leads to Interlocutory Judgment."
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "A Verifying Affidavit must be sworn by the Advocate on behalf of the Plaintiff.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "A Verifying Affidavit must be sworn by the Plaintiff (the party), not the Advocate, verifying the correctness of the plaint (Order 4 Rule 1(2))."
        }
    ]
});