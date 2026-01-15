registerQuiz("topic-05-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-05-quiz",
    "metadata": {
        "title": "Hormonal Contraceptives Quiz",
        "description": "Test knowledge of COCs, POPs, Injectables, and ECPs.",
        "topicId": "topic-05-family-planning-hormonal",
        "difficulty": "advanced",
        "estimatedTime": 12,
        "passingScore": 80,
        "createdAt": "2026-01-10T10:00:00Z"
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "What is the rule for a woman taking Combined Oral Contraceptives (COCs) who misses 3 or more pills?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Take all missed pills at once", "isCorrect": false },
                { "id": "b", "text": "Use condoms/abstain for 7 days and keep taking pills", "isCorrect": true },
                { "id": "c", "text": "Stop taking pills and wait for next period", "isCorrect": false },
                { "id": "d", "text": "Switch to POPs immediately", "isCorrect": false }
            ],
            "explanation": "Missing 3 or more pills reduces protection significantly. Backup protection (condoms) is needed for 7 days."
        },
        {
            "id": "q2",
            "type": "true-false",
            "question": "Combined Oral Contraceptives (COCs) are recommended for breastfeeding mothers with babies less than 6 months old.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "Estrogen in COCs can reduce breast milk supply. POPs are the preferred hormonal method for breastfeeding mothers."
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "How often is the injectable contraceptive DMPA (Depo Provera) administered?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Every month", "isCorrect": false },
                { "id": "b", "text": "Every 2 months", "isCorrect": false },
                { "id": "c", "text": "Every 3 months (13 weeks)", "isCorrect": true },
                { "id": "d", "text": "Every 6 months", "isCorrect": false }
            ],
            "explanation": "DMPA is a 3-month injectable. NET-EN is a 2-month injectable."
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "Emergency Contraceptive Pills are effective if taken within __1__ days after unprotected sex.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["5", "five"], "caseSensitive": false }
            ],
            "explanation": "ECPs work up to 120 hours (5 days) after unprotected sex, though they are most effective when taken sooner."
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "After stopping DMPA injections, the return to fertility is:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Immediate", "isCorrect": false },
                { "id": "b", "text": "Delayed (approx. 4 months)", "isCorrect": true },
                { "id": "c", "text": "Delayed (approx. 1 year)", "isCorrect": false },
                { "id": "d", "text": "Permanent (sterility)", "isCorrect": false }
            ],
            "explanation": "Unlike pills or implants, DMPA has a delayed return to fertility, averaging about 4 months after the last effect wears off."
        }
    ]
});