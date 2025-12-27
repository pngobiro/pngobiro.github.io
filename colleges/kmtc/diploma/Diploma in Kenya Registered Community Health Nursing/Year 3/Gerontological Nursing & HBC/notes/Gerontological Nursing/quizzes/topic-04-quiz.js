registerQuiz("topic-04-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-04-quiz",
    "metadata": {
        "title": "Health Assessment & Conditions",
        "description": "Evaluate your ability to assess elderly patients and identify common pathologies.",
        "topicId": "topic-04-health-assessment",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2025-12-27T10:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which skin condition is characterized by an enlarging, elevated pigmented area that bleeds easily?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Decubitus ulcer", "isCorrect": false },
                { "id": "b", "text": "Basal cell carcinoma", "isCorrect": true },
                { "id": "c", "text": "Dermatitis", "isCorrect": false },
                { "id": "d", "text": "Fungal infection", "isCorrect": false }
            ],
            "explanation": "These are classic signs of Basal Cell Carcinoma, often associated with sun exposure."
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "During a physical exam, palpation of the abdomen is often __b1__ (easier/harder) in the elderly due to muscle wasting.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["easier"], "caseSensitive": false }
            ],
            "explanation": "Loss of fibro-connective tissue and muscle wasting makes abdominal organs easier to palpate."
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "Which of the following are considered Activities of Daily Living (ADLs)? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Bathing", "isCorrect": true },
                { "id": "b", "text": "Dressing", "isCorrect": true },
                { "id": "c", "text": "Eating", "isCorrect": true },
                { "id": "d", "text": "Toileting", "isCorrect": true }
            ],
            "partialCredit": true,
            "explanation": "All listed options are basic ADLs used to assess functional status."
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "It is normal for elderly individuals to lose height as they age.",
            "points": 5,
            "correctAnswer": true,
            "explanation": "True. Height loss (1.5 to 3 inches) occurs due to narrowing of intervertebral spaces and thinning of vertebrae."
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "When assessing the environment for an elderly interview, which factor is most important?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Dim lighting to promote relaxation", "isCorrect": false },
                { "id": "b", "text": "Background music to fill silence", "isCorrect": false },
                { "id": "c", "text": "Well-lit room with no background noise", "isCorrect": true },
                { "id": "d", "text": "Presence of all family members", "isCorrect": false }
            ],
            "explanation": "Good lighting helps with vision deficits, and silence helps with hearing deficits (presbycusis)."
        }
    ]
});