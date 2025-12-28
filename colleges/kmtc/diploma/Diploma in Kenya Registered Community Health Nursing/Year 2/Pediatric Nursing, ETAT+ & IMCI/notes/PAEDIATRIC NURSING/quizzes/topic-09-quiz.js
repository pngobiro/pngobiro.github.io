registerQuiz("topic-09-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-09-quiz",
    "metadata": {
        "title": "Neurology Quiz",
        "topicId": "topic-09",
        "difficulty": "intermediate",
        "estimatedTime": 6,
        "passingScore": 80,
        "createdAt": "2025-12-28T10:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Status epilepticus is defined as a seizure lasting longer than:",
            "points": 10,
            "options": [
                { "id": "a", "text": "5 minutes", "isCorrect": false },
                { "id": "b", "text": "10 minutes", "isCorrect": false },
                { "id": "c", "text": "30 minutes", "isCorrect": true },
                { "id": "d", "text": "60 minutes", "isCorrect": false }
            ],
            "explanation": "Continuous seizure activity >30 mins is a medical emergency."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the seizure phase with the action:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Tonic", "right": "Generalized stiffening" },
                { "id": "p2", "left": "Clonic", "right": "Jerking movements" },
                { "id": "p3", "left": "Post-ictal", "right": "Sleep/Confusion" }
            ]
        },
        {
            "id": "q3",
            "type": "true-false",
            "question": "During a seizure, you should restrain the child to prevent injury.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "Do not restrain. Clear the area of hazards and place something soft under the head."
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "Which sign is characteristic of Hydrocephalus?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Sunken eyes", "isCorrect": false },
                { "id": "b", "text": "Sunset eyes", "isCorrect": true },
                { "id": "c", "text": "Depressed fontanelle", "isCorrect": false },
                { "id": "d", "text": "Small head", "isCorrect": false }
            ],
            "explanation": "Sunset eyes (sclera visible above iris) and bulging fontanelle are signs."
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "Febrile seizures occur in children under 6 years with:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Meningitis", "isCorrect": false },
                { "id": "b", "text": "Head trauma", "isCorrect": false },
                { "id": "c", "text": "High fever (>38°C) without CNS infection", "isCorrect": true },
                { "id": "d", "text": "Epilepsy", "isCorrect": false }
            ],
            "explanation": "Febrile seizures are associated with fever but no intracranial infection."
        }
    ]
});