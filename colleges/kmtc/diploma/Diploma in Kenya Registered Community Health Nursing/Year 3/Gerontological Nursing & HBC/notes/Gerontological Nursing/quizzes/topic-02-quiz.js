registerQuiz("topic-02-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-02-quiz",
    "metadata": {
        "title": "Theories of Aging",
        "description": "Assess your understanding of why and how we age biologically and sociologically.",
        "topicId": "topic-02-aging-process",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2025-12-27T10:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which theory likens the body to a machine that eventually fails due to prolonged usage?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Genetic Theory", "isCorrect": false },
                { "id": "b", "text": "Wear and Tear Theory", "isCorrect": true },
                { "id": "c", "text": "Immunity Theory", "isCorrect": false },
                { "id": "d", "text": "Cross-linkage Theory", "isCorrect": false }
            ],
            "explanation": "The Wear and Tear theory suggests organs have a fixed amount of energy and wear out on a scheduled basis, aggravated by stress."
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "The buildup of fatty pigment granules called __b1__ is associated with the Free Radical theory.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["lipofuscin", "age spots"], "caseSensitive": false }
            ],
            "explanation": "Free radicals cause the buildup of lipofuscin, often visible as age spots."
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "The 'Hayflick Limit' suggests that normal human cells divide approximately how many times before dying?",
            "points": 10,
            "options": [
                { "id": "a", "text": "20 times", "isCorrect": false },
                { "id": "b", "text": "50 times", "isCorrect": true },
                { "id": "c", "text": "100 times", "isCorrect": false },
                { "id": "d", "text": "Unlimited times", "isCorrect": false }
            ],
            "explanation": "The Genetic/Programmed theory states cells divide about 50 times before they stop dividing and shrink."
        },
        {
            "id": "q4",
            "type": "matching",
            "question": "Match the psychosocial theory with its core concept:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Disengagement Theory", "right": "Mutual withdrawal benefits society and individual" },
                { "id": "p2", "left": "Activity Theory", "right": "Maintaining action is necessary for successful aging" },
                { "id": "p3", "left": "Continuity Theory", "right": "Personality remains consistent; coping reflects past habits" },
                { "id": "p4", "left": "Sub-culture Theory", "right": "Elderly form their own norms and beliefs" }
            ]
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "The Immunity Theory suggests that as we age, the body's autoimmune response decreases, making it less likely to attack itself.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "False. The theory suggests autoimmune responses INCREASE (body attacks itself), while defense against foreign organisms decreases."
        }
    ]
});