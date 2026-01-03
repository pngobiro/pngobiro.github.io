registerQuiz("topic-08-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-08-quiz",
    "metadata": {
        "title": "Appeals & Reviews Quiz",
        "description": "Test your knowledge of the appellate process, stay of execution, and review of judgments.",
        "topicId": "topic-08",
        "difficulty": "advanced",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2026-01-03T12:00:00Z",
        "tags": ["appeal", "review", "stay"]
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
            "type": "true-false",
            "question": "The filing of a Notice of Appeal automatically operates as a stay of execution.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "Order 42 Rule 6(1) states that no appeal or notice of appeal shall operate as a stay of execution. A specific order must be obtained."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "An application for Review of judgment under Order 45 must be made to:",
            "points": 10,
            "options": [
                { "id": "a", "text": "The Court of Appeal", "isCorrect": false },
                { "id": "b", "text": "The Chief Justice", "isCorrect": false },
                { "id": "c", "text": "The same judge/court that passed the decree", "isCorrect": true },
                { "id": "d", "text": "Any High Court Judge", "isCorrect": false }
            ],
            "explanation": "Review is a re-examination by the *same* court/judge. Appeal is to a higher court."
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "Which of the following are valid grounds for Review? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Discovery of new and important evidence", "isCorrect": true },
                { "id": "b", "text": "Mistake or error apparent on the face of the record", "isCorrect": true },
                { "id": "c", "text": "Disagreement with the judge's reasoning", "isCorrect": false },
                { "id": "d", "text": "Any other sufficient reason", "isCorrect": true }
            ],
            "explanation": "Review grounds are limited to new evidence, apparent error, or analogous sufficient reasons. Mere disagreement is ground for appeal, not review."
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "A Notice of Appeal must be filed within __1__ days of the decision appealed against.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["14", "fourteen"], "caseSensitive": false }
            ],
            "explanation": "The timeline for lodging a Notice of Appeal is 14 days."
        }
    ]
});