registerQuiz("topic-02-pneumonia-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-02-pneumonia-quiz",
    "metadata": {
        "title": "Pneumonia Management Quiz",
        "description": "Test your understanding of pneumonia types, symptoms, and nursing care.",
        "topicId": "topic-02",
        "difficulty": "intermediate",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2025-12-28T10:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "matching",
            "question": "Match the pneumonia classification with its definition:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Community Acquired (CAP)", "right": "Occurs in community or within 48h of admit" },
                { "id": "p2", "left": "Hospital Acquired (HAP)", "right": "Onset >48h after admission" },
                { "id": "p3", "left": "Bronchopneumonia", "right": "Patchy distribution from bronchi to parenchyma" },
                { "id": "p4", "left": "Lobar Pneumonia", "right": "Substantial part of one or more lobes involved" }
            ]
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "Which sputum characteristic is classically associated with Streptococcus pneumoniae?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Green", "isCorrect": false },
                { "id": "b", "text": "Rusty/Rust-colored", "isCorrect": true },
                { "id": "c", "text": "Clear", "isCorrect": false },
                { "id": "d", "text": "Pink frothy", "isCorrect": false }
            ],
            "explanation": "Rusty sputum is a hallmark sign of pneumococcal pneumonia."
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "Select the appropriate nursing interventions for improving airway patency in pneumonia. (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Encourage fluid intake (2-3 L/day)", "isCorrect": true },
                { "id": "b", "text": "Restrict fluids to prevent edema", "isCorrect": false },
                { "id": "c", "text": "Provide humidified air", "isCorrect": true },
                { "id": "d", "text": "Encourage effective coughing", "isCorrect": true }
            ],
            "explanation": "Hydration loosens secretions, humidified air soothes membranes, and coughing clears the airway."
        }
    ]
});