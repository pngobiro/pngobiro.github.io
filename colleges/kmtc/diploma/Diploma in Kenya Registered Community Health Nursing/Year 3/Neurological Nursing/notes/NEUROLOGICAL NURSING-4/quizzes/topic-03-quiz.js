registerQuiz("topic-03-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-03-quiz",
    "metadata": {
        "title": "Diagnostic Tests in Neurology",
        "topicId": "topic-03",
        "difficulty": "intermediate",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2025-12-25T00:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which diagnostic test is absolutely contraindicated in patients with increased intracranial pressure (ICP)?",
            "points": 15,
            "options": [
                { "id": "a", "text": "CT Scan", "isCorrect": false },
                { "id": "b", "text": "MRI", "isCorrect": false },
                { "id": "c", "text": "Lumbar Puncture", "isCorrect": true },
                { "id": "d", "text": "EEG", "isCorrect": false }
            ],
            "explanation": "Lumbar puncture decreases spinal pressure, which can cause the brain to herniate through the foramen magnum if intracranial pressure is high."
        },
        {
            "id": "q2",
            "type": "ordering",
            "question": "Order the steps for assisting with a Lumbar Puncture:",
            "points": 20,
            "items": [
                { "id": "i1", "text": "Verify consent and explain procedure", "correctPosition": 1 },
                { "id": "i2", "text": "Instruct patient to void", "correctPosition": 2 },
                { "id": "i3", "text": "Position patient in lateral recumbent with knees flexed", "correctPosition": 3 },
                { "id": "i4", "text": "Physician inserts needle and collects fluid", "correctPosition": 4 },
                { "id": "i5", "text": "Instruct patient to lie prone for 2-3 hours", "correctPosition": 5 }
            ]
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "What is the most common complication of a lumbar puncture?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Meningitis", "isCorrect": false },
                { "id": "b", "text": "Post-puncture headache", "isCorrect": true },
                { "id": "c", "text": "Paralysis", "isCorrect": false },
                { "id": "d", "text": "Hematoma", "isCorrect": false }
            ],
            "explanation": "Post-puncture headache occurs in 15-30% of patients due to CSF leakage."
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "An MRI uses ionizing radiation to produce images of the brain.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "MRI uses powerful magnetic fields, not ionizing radiation (unlike CT scans)."
        }
    ]
});