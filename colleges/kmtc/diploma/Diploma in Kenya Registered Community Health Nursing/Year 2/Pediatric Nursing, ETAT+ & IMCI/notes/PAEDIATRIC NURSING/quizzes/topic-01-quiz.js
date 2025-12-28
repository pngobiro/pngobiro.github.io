registerQuiz("topic-01-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-01-quiz",
    "metadata": {
        "title": "Growth and Development Quiz",
        "topicId": "topic-01",
        "difficulty": "beginner",
        "estimatedTime": 5,
        "passingScore": 80,
        "createdAt": "2025-12-28T10:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "By 1 year of age, an infant's birth weight has typically:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Doubled", "isCorrect": false },
                { "id": "b", "text": "Tripled", "isCorrect": true },
                { "id": "c", "text": "Quadrupled", "isCorrect": false },
                { "id": "d", "text": "Remained the same", "isCorrect": false }
            ],
            "explanation": "Birth weight usually doubles by 6 months and triples by 1 year of age."
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "The posterior fontanelle typically closes between __1__ and __2__ weeks of age.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["6"], "caseSensitive": false },
                { "id": "2", "acceptedAnswers": ["8"], "caseSensitive": false }
            ],
            "explanation": "The posterior fontanelle closes early, between 6 to 8 weeks, while the anterior closes between 12-18 months."
        },
        {
            "id": "q3",
            "type": "matching",
            "question": "Match the Erikson's stage with the developmental age:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Infancy", "right": "Trust vs. Mistrust" },
                { "id": "p2", "left": "Early Childhood", "right": "Autonomy vs. Shame" },
                { "id": "p3", "left": "School Age", "right": "Industry vs. Inferiority" },
                { "id": "p4", "left": "Adolescence", "right": "Identity vs. Role Confusion" }
            ]
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "At what age does an infant typically develop a good pincer grasp?",
            "points": 10,
            "options": [
                { "id": "a", "text": "4 months", "isCorrect": false },
                { "id": "b", "text": "6 months", "isCorrect": false },
                { "id": "c", "text": "10 months", "isCorrect": true },
                { "id": "d", "text": "15 months", "isCorrect": false }
            ],
            "explanation": "A good pincer grip (thumb and finger) develops around 10 months."
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "Microcephaly is defined as a head circumference that is less than 3 standard deviations below the mean.",
            "points": 10,
            "correctAnswer": true,
            "explanation": "Microcephaly indicates a significantly small head size, often due to genetic defects or insults to the growing brain."
        }
    ]
});