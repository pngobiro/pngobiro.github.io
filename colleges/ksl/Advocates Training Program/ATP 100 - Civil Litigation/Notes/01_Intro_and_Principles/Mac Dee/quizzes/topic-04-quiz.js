registerQuiz("topic-04-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-04-quiz",
    "metadata": {
        "title": "Overriding Objective Quiz",
        "description": "Test your understanding of the 'Oxygen Principle' and the duties of the court and parties.",
        "topicId": "topic-04",
        "difficulty": "intermediate",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2026-01-03T12:00:00Z",
        "tags": ["oxygen-principle", "overriding-objective", "justice"]
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
            "type": "multiple-select",
            "question": "Which of the following are aims of the Overriding Objective (Oxygen Principle)? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Just determination of proceedings", "isCorrect": true },
                { "id": "b", "text": "Efficient disposal of business", "isCorrect": true },
                { "id": "c", "text": "Use of suitable technology", "isCorrect": true },
                { "id": "d", "text": "Increasing legal fees for advocates", "isCorrect": false }
            ],
            "explanation": "Sections 1A and 1B list just determination, efficient disposal, timely disposal at affordable cost, and use of technology as key aims."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "Which Article of the Constitution enshrines the principle that 'Justice shall be administered without undue regard to procedural technicalities'?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Article 2", "isCorrect": false },
                { "id": "b", "text": "Article 48", "isCorrect": false },
                { "id": "c", "text": "Article 159", "isCorrect": true },
                { "id": "d", "text": "Article 50", "isCorrect": false }
            ],
            "explanation": "Article 159(2)(d) of the Constitution of Kenya 2010 establishes this principle."
        },
        {
            "id": "q3",
            "type": "true-false",
            "question": "Advocates are under a statutory duty to assist the court to further the overriding objective.",
            "points": 5,
            "correctAnswer": true,
            "explanation": "Section 1A(3) of the Civil Procedure Act places a duty on parties and their advocates to assist the Court in furthering the overriding objective."
        }
    ]
});