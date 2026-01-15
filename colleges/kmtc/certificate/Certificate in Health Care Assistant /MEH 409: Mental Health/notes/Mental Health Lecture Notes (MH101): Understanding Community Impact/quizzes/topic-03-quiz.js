registerQuiz("topic-03-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-03-quiz",
    "metadata": {
        "title": "Impact of Mental Health Disorders",
        "description": "Assess understanding of how disorders affect individuals, families, and society.",
        "topicId": "topic-03",
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
            "type": "multiple-select",
            "question": "How do mental health disorders impact families? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Financial strain due to treatment costs", "isCorrect": true },
                { "id": "b", "text": "Emotional burden like guilt or stress", "isCorrect": true },
                { "id": "c", "text": "Improved family dynamics", "isCorrect": false },
                { "id": "d", "text": "Shift in roles and caregiving responsibilities", "isCorrect": true }
            ],
            "explanation": "Families often face emotional, financial, and relational challenges."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "Which of the following is a physical health effect often associated with mental illness?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Increased risk of cardiovascular disease", "isCorrect": true },
                { "id": "b", "text": "Improved immune response", "isCorrect": false },
                { "id": "c", "text": "Better sleep quality", "isCorrect": false },
                { "id": "d", "text": "Lower blood pressure", "isCorrect": false }
            ],
            "explanation": "Mental illness is linked to co-morbidities like heart disease, diabetes, and sleep disturbances."
        },
        {
            "id": "q3",
            "type": "true-false",
            "question": "Generational effects imply that a parent's mental health disorder has no impact on their children's development.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "Parental mental health issues can negatively impact a child's development and academic performance."
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "Communities often isolate individuals with mental health issues due to __b1__, reducing social integration.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["stigma", "discrimination", "Stigma"], "caseSensitive": false }
            ],
            "explanation": "Stigma creates barriers to social inclusion and recovery."
        },
        {
            "id": "q5",
            "type": "matching",
            "question": "Match the societal impact to its description:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Economic Cost", "right": "Loss of workforce productivity" },
                { "id": "p2", "left": "Social Disruption", "right": "Breakdown of community cohesion" },
                { "id": "p3", "left": "Public Safety", "right": "Potential for homelessness or substance abuse" }
            ]
        }
    ]
});