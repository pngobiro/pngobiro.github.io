registerQuiz("topic-07-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-07-quiz",
    "metadata": {
        "title": "Obstruction & Stones Quiz",
        "description": "Test understanding of urinary obstruction causes, stone types, and management.",
        "topicId": "topic-07-obstruction",
        "difficulty": "beginner",
        "estimatedTime": 20,
        "passingScore": 70,
        "createdAt": "2025-12-26T10:00:00Z"
    },
    "settings": {
        "shuffleQuestions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "matching",
            "question": "Match the cause of obstruction to its location type:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Calculus (Stone)", "right": "Within the Lumen" },
                { "id": "p2", "left": "Urethral Stricture", "right": "Within the Wall" },
                { "id": "p3", "left": "Benign Prostatic Hypertrophy", "right": "Pressure from Outside" }
            ]
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "Which characteristic symptom is associated with renal stones (nephrolithiasis)?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Painless hematuria", "isCorrect": false },
                { "id": "b", "text": "Colicky pain radiating from loin to groin", "isCorrect": true },
                { "id": "c", "text": "Constant dull back ache", "isCorrect": false },
                { "id": "d", "text": "Suprapubic pain only", "isCorrect": false }
            ],
            "explanation": "Renal colic typically radiates downward anteriorly to the testis or vulva."
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "Which imaging test is best for visualizing small radiolucent uric acid stones?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Plain Abdominal X-ray", "isCorrect": false },
                { "id": "b", "text": "Ultrasonography", "isCorrect": false },
                { "id": "c", "text": "Helical (Spiral) CT Scan", "isCorrect": true },
                { "id": "d", "text": "MRI", "isCorrect": false }
            ],
            "explanation": "Helical CT has high sensitivity and can detect stones that are radiolucent on X-ray."
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "Complete anuria is a common sign of unilateral ureteric obstruction.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "Complete anuria strongly suggests complete **bilateral** obstruction or obstruction of a single functioning kidney. Unilateral obstruction usually allows urine flow from the other kidney."
        }
    ]
});