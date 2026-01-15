registerQuiz("topic-08-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-08-quiz",
    "metadata": {
        "title": "Occupational Health Quiz",
        "topicId": "topic-08",
        "difficulty": "intermediate",
        "estimatedTime": 12,
        "passingScore": 75,
        "createdAt": "2025-12-25T12:00:00Z"
    },
    "questions": [
        {
            "id": "t8-q1",
            "type": "ordering",
            "question": "Arrange the first 4 principles of HACCP in order:",
            "points": 20,
            "items": [
                { "id": "i1", "text": "Conduct a hazard analysis", "correctPosition": 1 },
                { "id": "i2", "text": "Determine Critical Control Points (CCPs)", "correctPosition": 2 },
                { "id": "i3", "text": "Establish critical limits", "correctPosition": 3 },
                { "id": "i4", "text": "Establish monitoring procedures", "correctPosition": 4 }
            ],
            "explanation": "1. Hazard Analysis -> 2. CCPs -> 3. Critical Limits -> 4. Monitoring."
        },
        {
            "id": "t8-q2",
            "type": "matching",
            "question": "Match the type of workplace hazard with an example:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Ergonomic Hazard", "right": "Improperly adjusted workstation" },
                { "id": "p2", "left": "Physical Hazard", "right": "Constant loud noise / Radiation" },
                { "id": "p3", "left": "Biological Hazard", "right": "Exposure to blood/fungi" },
                { "id": "p4", "left": "Safety Hazard", "right": "Unguarded moving machinery parts" }
            ],
            "explanation": "Ergonomic = body strain; Physical = environmental factors; Biological = organic/living; Safety = mechanical/immediate injury."
        },
        {
            "id": "t8-q3",
            "type": "image-based",
            "question": "Based on the HACCP Decision Tree (Figure 8.2), if a control measure exists but is not sufficient, what is the next step?",
            "points": 10,
            "imageUrl": "../assets/images/image-20251225-ab729fbd.jpeg",
            "imageAlt": "HACCP Decision Tree",
            "options": [
                { "id": "a", "text": "Stop the process", "isCorrect": false },
                { "id": "b", "text": "Modify the step, process or product", "isCorrect": true },
                { "id": "c", "text": "Proceed to the next question", "isCorrect": false },
                { "id": "d", "text": "Identify it as a CCP", "isCorrect": false }
            ],
            "explanation": "If control is necessary for safety but no measure exists, the step/process must be modified."
        }
    ]
});