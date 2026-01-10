registerQuiz("topic-03-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-03-quiz",
    "metadata": {
        "title": "Diabetes Mellitus Quiz",
        "description": "Check your knowledge on diabetes types, symptoms, and management.",
        "topicId": "topic-03-diabetes",
        "difficulty": "intermediate",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2026-01-10T12:00:00Z",
        "tags": ["diabetes", "metabolic", "insulin"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "matching",
            "question": "Match the type of diabetes with its description:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Type 1 Diabetes", "right": "Autoimmune destruction of insulin-producing cells" },
                { "id": "p2", "left": "Type 2 Diabetes", "right": "Insulin resistance/deficiency linked to obesity" },
                { "id": "p3", "left": "Gestational Diabetes", "right": "Occurs during pregnancy" }
            ]
        },
        {
            "id": "q2",
            "type": "multiple-select",
            "question": "Which of the following are classic symptoms of diabetes? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Polydipsia (Increased thirst)", "isCorrect": true },
                { "id": "b", "text": "Polyuria (Frequent urination)", "isCorrect": true },
                { "id": "c", "text": "Rapid weight gain", "isCorrect": false },
                { "id": "d", "text": "Blurred vision", "isCorrect": true }
            ],
            "explanation": "Classic symptoms include increased thirst, frequent urination, weight loss, and blurred vision."
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "The term for nerve damage caused by long-term uncontrolled diabetes is __b1__.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["neuropathy"], "caseSensitive": false }
            ],
            "explanation": "Neuropathy is nerve damage; Nephropathy is kidney damage; Retinopathy is eye damage."
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "Which complication involves damage to the eyes?",
            "points": 5,
            "options": [
                { "id": "a", "text": "Nephropathy", "isCorrect": false },
                { "id": "b", "text": "Retinopathy", "isCorrect": true },
                { "id": "c", "text": "Neuropathy", "isCorrect": false },
                { "id": "d", "text": "Cardiomyopathy", "isCorrect": false }
            ],
            "explanation": "Retinopathy affects the retina in the eye."
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "Type 2 diabetes is largely preventable through healthy diet and physical activity.",
            "points": 5,
            "correctAnswer": true,
            "explanation": "Lifestyle modifications like diet and exercise can prevent or delay Type 2 diabetes."
        }
    ]
});