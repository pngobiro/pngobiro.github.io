registerQuiz("topic-02-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-02-quiz",
    "metadata": {
        "title": "Impact of Hospitalization Quiz",
        "topicId": "topic-02",
        "difficulty": "beginner",
        "estimatedTime": 5,
        "passingScore": 80,
        "createdAt": "2025-12-28T10:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which age group is most vulnerable to emotional distress from hospitalization?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Children below 5 years", "isCorrect": true },
                { "id": "b", "text": "School-age children", "isCorrect": false },
                { "id": "c", "text": "Adolescents", "isCorrect": false },
                { "id": "d", "text": "Adults", "isCorrect": false }
            ],
            "explanation": "Children under 5 lack the understanding and coping mechanisms to deal with separation and the hospital environment."
        },
        {
            "id": "q2",
            "type": "multiple-select",
            "question": "Common parental reactions to a child's hospitalization include: (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Denial", "isCorrect": true },
                { "id": "b", "text": "Anger", "isCorrect": true },
                { "id": "c", "text": "Guilt", "isCorrect": true },
                { "id": "d", "text": "Confusion", "isCorrect": true }
            ],
            "explanation": "Parents often experience a range of emotions including denial, anger, depression, confusion, and guilt."
        },
        {
            "id": "q3",
            "type": "short-answer",
            "question": "What is the term for the hospital policy that allows parents to stay with their sick child 24/7?",
            "points": 10,
            "keywords": ["rooming", "in", "rooming-in"],
            "modelAnswer": "Rooming-in",
            "explanation": "Rooming-in helps minimize separation anxiety for the child."
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "Siblings of hospitalized children rarely experience jealousy or resentment.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "Siblings often feel jealous, resentful, insecure, or guilty due to the attention shift to the sick child."
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "When a child's motor activity is restricted in the hospital, they may respond with:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Sleep", "isCorrect": false },
                { "id": "b", "text": "Anger and hyperactivity", "isCorrect": true },
                { "id": "c", "text": "Compliance", "isCorrect": false },
                { "id": "d", "text": "Hunger", "isCorrect": false }
            ],
            "explanation": "Restriction of movement often leads to frustration expressed as anger or hyperactivity."
        }
    ]
});