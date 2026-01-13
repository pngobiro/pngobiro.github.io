registerQuiz("topic-05-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-05-quiz",
    "metadata": {
        "title": "Group Dynamics & Interaction Quiz",
        "description": "Test knowledge on groups, conflict, and social perception.",
        "topicId": "topic-05",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2026-01-13T12:00:00Z"
    },
    "settings": {
        "shuffleQuestions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "ordering",
            "question": "Place Bruce Tuckman's stages of group formation in the correct sequence:",
            "points": 15,
            "items": [
                { "id": "i1", "text": "Forming", "correctPosition": 1 },
                { "id": "i2", "text": "Storming", "correctPosition": 2 },
                { "id": "i3", "text": "Norming", "correctPosition": 3 },
                { "id": "i4", "text": "Performing", "correctPosition": 4 },
                { "id": "i5", "text": "Adjourning", "correctPosition": 5 }
            ],
            "explanation": "Groups Form, then fight (Storm), then stabilize (Norm), then work (Perform), and finally dissolve (Adjourn)."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the group type to its definition:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Primary Group", "right": "Small, intimate, emotional, face-to-face" },
                { "id": "p2", "left": "Secondary Group", "right": "Large, impersonal, goal-oriented" },
                { "id": "p3", "left": "Reference Group", "right": "Used as a standard for self-evaluation" },
                { "id": "p4", "left": "Aggregate", "right": "People in same place but don't interact socially" }
            ],
            "explanation": "Primary = family/friends. Secondary = coworkers/classmates. Reference = role models. Aggregate = crowd on a bus."
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "Attributing behavior to internal characteristics (like personality) is called a __b1__ attribution, while attributing it to external factors is called a __b2__ attribution.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["dispositional"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["situational"], "caseSensitive": false }
            ],
            "explanation": "Dispositional = internal traits. Situational = external environment."
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "What is 'Social Loafing'?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Working harder in a group than alone", "isCorrect": false },
                { "id": "b", "text": "The tendency to put in less effort when working in a group", "isCorrect": true },
                { "id": "c", "text": "The tendency to conform to group opinion", "isCorrect": false },
                { "id": "d", "text": "Conflict arising from different work styles", "isCorrect": false }
            ],
            "explanation": "Social loafing is 'free riding'—exerting less effort because individual contribution is harder to measure in a group."
        }
    ]
});