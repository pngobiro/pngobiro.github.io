registerQuiz("topic-05-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-05-quiz",
    "metadata": {
        "title": "Cultural Competence & Community Roles",
        "description": "Assess knowledge on CHWs, cultural factors, and stigma reduction.",
        "topicId": "topic-05",
        "difficulty": "intermediate",
        "estimatedTime": 5,
        "passingScore": 80,
        "createdAt": "2026-01-09T12:00:00Z"
    },
    "settings": {
        "shuffleQuestions": true,
        "showFeedback": "immediate",
        "allowRetry": true
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "What is 'Cultural Humility'?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Memorizing facts about every culture.", "isCorrect": false },
                { "id": "b", "text": "Approaching individuals with openness and a willingness to learn.", "isCorrect": true },
                { "id": "c", "text": "Ignoring cultural differences.", "isCorrect": false },
                { "id": "d", "text": "Believing your own culture is superior.", "isCorrect": false }
            ],
            "explanation": "Cultural humility admits we cannot know everything and emphasizes respect and ongoing learning."
        },
        {
            "id": "q2",
            "type": "multiple-select",
            "question": "Which of the following are functions of Community Health Workers (CHWs)?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Building trust in the community", "isCorrect": true },
                { "id": "b", "text": "Making referrals to clinics", "isCorrect": true },
                { "id": "c", "text": "Performing complex surgery", "isCorrect": false },
                { "id": "d", "text": "Providing basic counseling and support", "isCorrect": true }
            ],
            "explanation": "CHWs bridge the gap between community and health services but do not perform advanced medical procedures."
        },
        {
            "id": "q3",
            "type": "true-false",
            "question": "In collectivist cultures, it is often helpful to involve family members in the mental health treatment process.",
            "points": 10,
            "correctAnswer": true,
            "explanation": "Collectivist cultures emphasize the group/family, making their involvement crucial for effective support."
        },
        {
            "id": "q4",
            "type": "matching",
            "question": "Match the strategy to its purpose:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Interpreter Services", "right": "Overcoming language barriers" },
                { "id": "p2", "left": "Engaging Leaders", "right": "Gaining community trust" },
                { "id": "p3", "left": "Tailored Interventions", "right": "Adapting care to cultural norms" }
            ]
        },
        {
            "id": "q5",
            "type": "fill-blank",
            "question": "A key strategy for reducing stigma is using positive __b1__ representation to challenge stereotypes about mental illness.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["media", "Media"], "caseSensitive": false }
            ],
            "explanation": "Media plays a powerful role in shaping public perception; positive portrayals can reduce fear and discrimination."
        }
    ]
});