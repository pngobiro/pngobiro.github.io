registerQuiz("topic-10-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-10-quiz",
    "metadata": {
        "title": "Constitutional & Election Petitions Quiz",
        "description": "Test your knowledge on constitutional litigation and election petition procedures.",
        "topicId": "topic-10",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2026-01-03T12:00:00Z",
        "tags": ["constitution", "elections", "petitions"]
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
            "type": "fill-blank",
            "question": "An election petition must be filed within __1__ days after the publication of the results in the Gazette.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["28", "twenty eight"], "caseSensitive": false }
            ],
            "explanation": "The Elections Act stipulates a 28-day timeline for filing petitions."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "Which court has exclusive original jurisdiction to hear and determine disputes relating to the Presidential election?",
            "points": 10,
            "options": [
                { "id": "a", "text": "The High Court", "isCorrect": false },
                { "id": "b", "text": "The Court of Appeal", "isCorrect": false },
                { "id": "c", "text": "The Supreme Court", "isCorrect": true },
                { "id": "d", "text": "The IEBC Dispute Tribunal", "isCorrect": false }
            ],
            "explanation": "Article 163(3)(a) grants the Supreme Court exclusive jurisdiction over Presidential election disputes."
        },
        {
            "id": "q3",
            "type": "true-false",
            "question": "A constitutional petition must be supported by an affidavit sworn by the Advocate on behalf of the Petitioner.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "The verifying affidavit must be sworn by the Petitioner personally, not the Advocate."
        }
    ]
});