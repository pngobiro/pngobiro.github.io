registerQuiz("topic-03-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-03-quiz",
    "metadata": {
        "title": "Social Stratification",
        "description": "Test your knowledge on social hierarchy, status, and stratification theories.",
        "topicId": "topic-03",
        "difficulty": "intermediate",
        "estimatedTime": 5,
        "passingScore": 70,
        "createdAt": "2026-01-17T00:00:00Z",
        "updatedAt": "2026-01-17T00:00:00Z",
        "tags": ["stratification", "status", "class"]
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
            "id": "q1-definition",
            "type": "multiple-choice",
            "question": "Social stratification is best defined as:",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "The process of learning culture", "isCorrect": false },
                { "id": "opt2", "text": "A process ranking members of society according to wealth, prestige, and power", "isCorrect": true },
                { "id": "opt3", "text": "The movement of individuals between social groups", "isCorrect": false },
                { "id": "opt4", "text": "A conflict between two individuals", "isCorrect": false }
            ],
            "explanation": "Stratification refers to the layering or ranking of society members based on wealth, prestige, and power."
        },
        {
            "id": "q2-status-types",
            "type": "matching",
            "question": "Match the type of status to its example.",
            "points": 2,
            "pairs": [
                { "id": "p1", "left": "Ascribed Status", "right": "Being born into a royal family or a specific caste" },
                { "id": "p2", "left": "Achieved Status", "right": "Becoming a nurse after completing training" }
            ],
            "explanation": "Ascribed is involuntary/birth-based. Achieved is earned through effort/merit."
        },
        {
            "id": "q3-conflict-theory",
            "type": "fill-blank",
            "question": "The __b1__ theory of stratification draws largely on the writings of Karl Marx and views society as divided into groups that are inevitably in conflict.",
            "points": 1,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["conflict"], "caseSensitive": false }
            ],
            "explanation": "Conflict theory (Marxist) focuses on the struggle between classes (capitalists vs workers)."
        },
        {
            "id": "q4-functional-theory",
            "type": "true-false",
            "question": "The Functional Theory of stratification argues that rewards (wealth, prestige) are justified by the service to society and the rarity of abilities needed for certain roles.",
            "points": 1,
            "correctAnswer": true,
            "explanation": "True. Functional theory sees stratification as necessary to motivate people to fill important/difficult roles."
        },
        {
            "id": "q5-african-context",
            "type": "multiple-select",
            "question": "In traditional African societies, members were often ranked according to which factors? (Select all that apply)",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Age", "isCorrect": true },
                { "id": "opt2", "text": "Sex/Gender", "isCorrect": true },
                { "id": "opt3", "text": "Ethnic origin", "isCorrect": true },
                { "id": "opt4", "text": "Industrial capital", "isCorrect": false }
            ],
            "explanation": "Traditional African stratification relied heavily on age, sex, and ethnic origin rather than industrial capital."
        }
    ]
});