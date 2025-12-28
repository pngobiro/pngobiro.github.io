registerQuiz("topic-06-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-06-quiz",
    "metadata": {
        "title": "Neurologic Infections Quiz",
        "topicId": "topic-06",
        "difficulty": "intermediate",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2025-12-28T12:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-select",
            "question": "Which of the following are classic signs of meningitis? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Nuchal rigidity (stiff neck)", "isCorrect": true },
                { "id": "b", "text": "Photophobia", "isCorrect": true },
                { "id": "c", "text": "Positive Kernig's sign", "isCorrect": true },
                { "id": "d", "text": "Positive Brudzinski's sign", "isCorrect": true },
                { "id": "e", "text": "Hypotension", "isCorrect": false }
            ],
            "partialCredit": true
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "What is the most common cause of acute encephalitis?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Bacterial infection", "isCorrect": false },
                { "id": "b", "text": "Herpes Simplex Virus (HSV)", "isCorrect": true },
                { "id": "c", "text": "Fungal infection", "isCorrect": false },
                { "id": "d", "text": "Parasitic infection", "isCorrect": false }
            ],
            "explanation": "HSV is the most frequent cause of non-epidemic encephalitis."
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "A positive __1__ sign is elicited when the patient's neck is flexed, causing involuntary flexion of the knees and hips.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["Brudzinski", "Brudzinski's"], "caseSensitive": false }
            ],
            "explanation": "Brudzinski's sign indicates meningeal irritation."
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "Which type of isolation precaution is required for a patient with bacterial meningitis?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Airborne precautions", "isCorrect": false },
                { "id": "b", "text": "Droplet precautions", "isCorrect": true },
                { "id": "c", "text": "Contact precautions", "isCorrect": false },
                { "id": "d", "text": "Standard precautions only", "isCorrect": false }
            ],
            "explanation": "Meningococcal meningitis is transmitted by droplets; isolation is needed for 24 hours after antibiotics start."
        }
    ]
});