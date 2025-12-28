registerQuiz("topic-04-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-04-quiz",
    "metadata": {
        "title": "Cerebrovascular Disorders Quiz",
        "topicId": "topic-04",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2025-12-28T12:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which type of stroke accounts for approximately 85% of all cases?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Hemorrhagic Stroke", "isCorrect": false },
                { "id": "b", "text": "Ischemic Stroke", "isCorrect": true },
                { "id": "c", "text": "Transient Ischemic Attack", "isCorrect": false },
                { "id": "d", "text": "Subarachnoid Hemorrhage", "isCorrect": false }
            ],
            "explanation": "Ischemic strokes (caused by blockage) are the most common type."
        },
        {
            "id": "q2",
            "type": "multiple-select",
            "question": "Which of the following are typical symptoms of a ruptured cerebral aneurysm? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Sudden, severe headache", "isCorrect": true },
                { "id": "b", "text": "Nuchal rigidity (stiff neck)", "isCorrect": true },
                { "id": "c", "text": "Loss of consciousness", "isCorrect": true },
                { "id": "d", "text": "Slow, gradual onset of symptoms", "isCorrect": false },
                { "id": "e", "text": "Visual disturbances", "isCorrect": true }
            ],
            "partialCredit": true
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "The time window for administering t-PA (tissue plasminogen activator) for ischemic stroke is generally within __1__ hours of symptom onset.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["3", "4.5", "3 to 4.5"], "caseSensitive": false }
            ],
            "explanation": "Current guidelines recommend t-PA within 3 to 4.5 hours of last known well time."
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "Patients on 'Aneurysm Precautions' should be kept in a stimulating environment with bright lights to maintain alertness.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "Aneurysm precautions require a quiet, non-stressful environment with dim lighting to prevent spikes in blood pressure."
        },
        {
            "id": "q5",
            "type": "matching",
            "question": "Match the type of aphasia with its description:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Expressive Aphasia", "right": "Difficulty speaking/writing (Broca's area)" },
                { "id": "p2", "left": "Receptive Aphasia", "right": "Difficulty understanding language (Wernicke's area)" },
                { "id": "p3", "left": "Global Aphasia", "right": "Loss of all language ability" }
            ]
        }
    ]
});