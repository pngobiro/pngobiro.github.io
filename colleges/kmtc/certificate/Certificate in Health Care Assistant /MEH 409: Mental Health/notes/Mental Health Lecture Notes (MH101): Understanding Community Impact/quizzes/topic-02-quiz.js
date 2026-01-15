registerQuiz("topic-02-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-02-quiz",
    "metadata": {
        "title": "Strategies & Community Resources",
        "description": "Test your knowledge on mental health clinics, support groups, and systemic strategies.",
        "topicId": "topic-02",
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
            "question": "What is the primary role of a 'Support Group'?",
            "points": 10,
            "options": [
                { "id": "a", "text": "To prescribe medication.", "isCorrect": false },
                { "id": "b", "text": "To provide acute emergency medical care.", "isCorrect": false },
                { "id": "c", "text": "To bring people with similar challenges together to share experiences.", "isCorrect": true },
                { "id": "d", "text": "To diagnose complex mental disorders.", "isCorrect": false }
            ],
            "explanation": "Support groups foster peer-to-peer support and reduce isolation through shared experiences."
        },
        {
            "id": "q2",
            "type": "true-false",
            "question": "Integrating mental health into primary care increases the separation between physical and mental health treatments.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "Integration REDUCES the separation, promoting holistic treatment."
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "Which of the following are benefits of Crisis Programs? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Save lives through immediate intervention", "isCorrect": true },
                { "id": "b", "text": "Reduce burden on emergency healthcare systems", "isCorrect": true },
                { "id": "c", "text": "Provide long-term housing solutions", "isCorrect": false },
                { "id": "d", "text": "Provide 24/7 support via hotlines", "isCorrect": true }
            ],
            "explanation": "Crisis programs focus on immediate stabilization and safety, not long-term housing."
        },
        {
            "id": "q4",
            "type": "matching",
            "question": "Match the strategy to its key function:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Policy Advocacy", "right": "Pushing for legislation and funding" },
                { "id": "p2", "left": "Peer Support", "right": "Using lived experience to help others" },
                { "id": "p3", "left": "Vocational Support", "right": "Helping individuals find employment" }
            ]
        },
        {
            "id": "q5",
            "type": "fill-blank",
            "question": "Access to a healthy __b1__ (e.g., green spaces, clean air) can decrease stress levels and promote well-being.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["environment", "Environment"], "caseSensitive": false }
            ],
            "explanation": "A healthy environment is a key preventative strategy for mental health."
        }
    ]
});