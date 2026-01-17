registerQuiz("topic-06-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-06-quiz",
    "metadata": {
        "title": "Airborne Diseases",
        "description": "Test your knowledge on TB, Measles, Meningitis, and Leprosy.",
        "topicId": "topic-06",
        "difficulty": "advanced",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2026-01-16T00:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-select",
            "question": "Which of the following are the '3 Cs' of Measles diagnosis?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Cough", "isCorrect": true },
                { "id": "b", "text": "Coryza (running nose)", "isCorrect": true },
                { "id": "c", "text": "Conjunctivitis (red eyes)", "isCorrect": true },
                { "id": "d", "text": "Convulsions", "isCorrect": false }
            ]
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "What is the primary diagnostic test for Pulmonary Tuberculosis?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Chest X-ray", "isCorrect": false },
                { "id": "b", "text": "Sputum AFB (Acid Fast Bacilli) smear", "isCorrect": true },
                { "id": "c", "text": "Mantoux test", "isCorrect": false },
                { "id": "d", "text": "Blood culture", "isCorrect": false }
            ],
            "explanation": "Direct sputum microscopy for AFB is the gold standard for diagnosing infectious TB."
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "Winterbottom's sign is associated with which disease?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Leprosy", "isCorrect": false },
                { "id": "b", "text": "Trypanosomiasis", "isCorrect": true },
                { "id": "c", "text": "Meningitis", "isCorrect": false },
                { "id": "d", "text": "TB", "isCorrect": false }
            ],
            "explanation": "Winterbottom's sign (swollen neck nodes) is associated with Sleeping Sickness (Topic 4), while leprosy is associated with anaesthetic skin patches."
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "Young babies with Whooping Cough usually do NOT show the characteristic 'whoop'.",
            "points": 5,
            "correctAnswer": true,
            "explanation": "Babies under 3 months often lack the whoop, making diagnosis difficult."
        },
        {
            "id": "q5",
            "type": "matching",
            "question": "Match the disease to its hallmark sign:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Measles", "right": "Koplik's Spots" },
                { "id": "p2", "left": "Meningitis", "right": "Neck Rigidity" },
                { "id": "p3", "left": "Leprosy", "right": "Anaesthetic Patches" },
                { "id": "p4", "left": "Chickenpox", "right": "Fluid-filled Vesicles" }
            ]
        }
    ]
});