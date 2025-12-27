registerQuiz("topic-03-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-03-quiz",
    "metadata": {
        "title": "Physiological Changes of Aging",
        "description": "Test your knowledge of system-by-system changes in the elderly body.",
        "topicId": "topic-03-physical-changes",
        "difficulty": "intermediate",
        "estimatedTime": 20,
        "passingScore": 75,
        "createdAt": "2025-12-27T10:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-select",
            "question": "Which of the following cardiovascular changes are common in the elderly? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Heart muscles become rigid", "isCorrect": true },
                { "id": "b", "text": "Significant increase in resting heart rate", "isCorrect": false },
                { "id": "c", "text": "Increased systolic blood pressure", "isCorrect": true },
                { "id": "d", "text": "Hardening of the aortic valve causing murmurs", "isCorrect": true }
            ],
            "partialCredit": true,
            "explanation": "Heart rate usually remains stable. Rigidity, increased BP, and murmurs are common changes."
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "The condition characterized by the loss of accommodation in the eyes due to hardening of the lens is called __b1__.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["presbyopia"], "caseSensitive": false }
            ],
            "explanation": "Presbyopia is the specific term for age-related loss of accommodation/near vision."
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "What structural change in the chest wall contributes to reduced respiratory efficiency?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Decreased anterior-posterior diameter", "isCorrect": false },
                { "id": "b", "text": "Increased anterior-posterior diameter (Barrel chest)", "isCorrect": true },
                { "id": "c", "text": "Increased elasticity of intercostal muscles", "isCorrect": false },
                { "id": "d", "text": "Expansion of the diaphragm", "isCorrect": false }
            ],
            "explanation": "The AP diameter increases, often described as barrel chest, while chest wall rigidity increases."
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "In the elderly, fat distribution typically shifts from the trunk to the extremities.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "False. Fat typically is lost from the extremities (making them look thinner) and accumulates on the trunk."
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "Which urinary change is most common in elderly men?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Stress incontinence", "isCorrect": false },
                { "id": "b", "text": "Increased frequency due to prostatic enlargement", "isCorrect": true },
                { "id": "c", "text": "Increased glomerular filtration rate", "isCorrect": false },
                { "id": "d", "text": "Strengthening of the bladder muscle", "isCorrect": false }
            ],
            "explanation": "Prostatic enlargement (BPH) is very common in men, leading to frequency and retention issues."
        }
    ]
});