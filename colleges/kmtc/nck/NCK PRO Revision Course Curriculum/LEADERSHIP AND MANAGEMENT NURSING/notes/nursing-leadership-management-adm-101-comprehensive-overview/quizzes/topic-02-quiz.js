registerQuiz("topic-02-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-02-quiz",
    "metadata": {
        "title": "Leadership in Nursing",
        "description": "Test your knowledge of leadership styles, types, and theories.",
        "topicId": "topic-02",
        "difficulty": "beginner",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2026-01-19T20:00:00Z",
        "updatedAt": "2026-01-19T20:00:00Z",
        "tags": ["leadership", "styles", "traits"]
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
            "type": "multiple-choice",
            "question": "Which leadership style involves the leader assuming full responsibility and giving direct, clear orders?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Democratic", "isCorrect": false },
                { "id": "opt2", "text": "Laissez-faire", "isCorrect": false },
                { "id": "opt3", "text": "Authoritarian (Autocratic)", "isCorrect": true },
                { "id": "opt4", "text": "Situational", "isCorrect": false }
            ],
            "explanation": "Authoritarian leadership is characterized by high control and unilateral decision-making."
        },
        {
            "id": "q2",
            "type": "true-false",
            "question": "A 'Charismatic Leader' gains influence primarily through their official appointed position.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "False. Charismatic leaders gain influence through strength of personality and the ability to inspire, not necessarily their official position."
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "Which theory suggests that leaders are born with specific physical and emotional characteristics that determine their success?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Situational Theory", "isCorrect": false },
                { "id": "opt2", "text": "Trait Theory", "isCorrect": true },
                { "id": "opt3", "text": "Contingency Theory", "isCorrect": false },
                { "id": "opt4", "text": "Behavioral Theory", "isCorrect": false }
            ],
            "explanation": "Trait theory focuses on innate qualities (traits) like height, intelligence, or personality."
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "The leadership style where the manager exercises minimum control and lets the group do what they want is called __id1__.",
            "points": 1,
            "blanks": [
                {
                    "id": "id1",
                    "acceptedAnswers": ["Laissez-faire", "laissez faire", "permissive", "free rein"],
                    "caseSensitive": false
                }
            ],
            "explanation": "Laissez-faire (or permissive/free rein) leadership involves minimal direction."
        },
        {
            "id": "q5",
            "type": "matching",
            "question": "Match the leadership type with its description.",
            "points": 3,
            "pairs": [
                { "id": "pair1", "left": "Formal Leadership", "right": "Official authority given by administration" },
                { "id": "pair2", "left": "Informal Leadership", "right": "Chosen by the group without official authority" },
                { "id": "pair3", "left": "Situational Leader", "right": "Influence effective by being in right place at right time" }
            ],
            "explanation": "Formal leaders have appointed authority; informal leaders are chosen by peers; situational leaders emerge based on circumstances."
        }
    ]
});