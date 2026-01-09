if (typeof registerQuiz === 'function') {
    registerQuiz("topic-07-quiz", {
        "schemaVersion": "1.0",
        "quizId": "topic-07-quiz",
        "metadata": {
            "title": "Community Action Planning Quiz",
            "description": "Test your knowledge on developing visions, goals, initiatives, and identifying resources.",
            "topicId": "topic-07",
            "difficulty": "intermediate",
            "estimatedTime": 10,
            "passingScore": 70,
            "createdAt": "2026-01-09T00:00:00Z"
        },
        "settings": {
            "shuffleQuestions": true,
            "shuffleOptions": true,
            "showFeedback": "immediate",
            "allowRetry": true
        },
        "questions": [
            {
                "id": "q1",
                "type": "true-false",
                "question": "A Vision Statement should be a short-term, detailed plan of specific daily activities.",
                "points": 10,
                "correctAnswer": false,
                "explanation": "A Vision Statement is a <strong>long-term, inspiring picture</strong> of the desired future, not a short-term detailed plan."
            },
            {
                "id": "q2",
                "type": "matching",
                "question": "Match the resource type to its definition:",
                "points": 20,
                "pairs": [
                    { "id": "p1", "left": "Human Resources", "right": "Volunteers and Staff" },
                    { "id": "p2", "left": "Financial Resources", "right": "Grants and Donations" },
                    { "id": "p3", "left": "Material Resources", "right": "Equipment and Infrastructure" },
                    { "id": "p4", "left": "Information Resources", "right": "Data and Expertise" }
                ],
                "explanation": "Human resources involve people, financial involves money, material involves physical items, and information involves data/knowledge."
            },
            {
                "id": "q3",
                "type": "ordering",
                "question": "Arrange the first 5 steps of developing Community-Based Initiatives in order:",
                "points": 15,
                "items": [
                    { "id": "i1", "text": "Needs Assessment", "correctPosition": 1 },
                    { "id": "i2", "text": "Community Capacity Building", "correctPosition": 2 },
                    { "id": "i3", "text": "Initiative Identification and Prioritization", "correctPosition": 3 },
                    { "id": "i4", "text": "Partnership Building", "correctPosition": 4 },
                    { "id": "i5", "text": "Resource Mobilization", "correctPosition": 5 }
                ],
                "explanation": "The process starts with understanding needs, building capacity to act, identifying specific initiatives, finding partners, and then securing resources."
            },
            {
                "id": "q4",
                "type": "multiple-choice",
                "question": "In the context of CAP, objectives must be SMART. What does the 'M' stand for?",
                "points": 10,
                "options": [
                    { "id": "a", "text": "Mandatory", "isCorrect": false },
                    { "id": "b", "text": "Measurable", "isCorrect": true },
                    { "id": "c", "text": "Meaningful", "isCorrect": false },
                    { "id": "d", "text": "Monetary", "isCorrect": false }
                ],
                "explanation": "SMART stands for Specific, **Measurable**, Achievable, Relevant, and Time-bound."
            },
            {
                "id": "q5",
                "type": "fill-blank",
                "question": "__b1__-based initiatives (CBIs) are the backbone of sustainable development, empowering local communities to identify challenges and implement solutions.",
                "points": 10,
                "blanks": [
                    { "id": "b1", "acceptedAnswers": ["community", "Community"], "caseSensitive": false }
                ],
                "explanation": "Community-Based Initiatives (CBIs) are central to the action planning process."
            },
            {
                "id": "q6",
                "type": "multiple-select",
                "question": "Which of the following are key considerations when developing a Community Action Plan? (Select all that apply)",
                "points": 15,
                "options": [
                    { "id": "a", "text": "Involvement of the Community", "isCorrect": true },
                    { "id": "b", "text": "Data-Driven Decision Making", "isCorrect": true },
                    { "id": "c", "text": "Sustainability", "isCorrect": true },
                    { "id": "d", "text": "Ignoring external partners", "isCorrect": false }
                ],
                "partialCredit": true,
                "explanation": "Key considerations include community involvement, data usage, sustainability, and collaboration (not ignoring partners)."
            }
        ]
    });
}