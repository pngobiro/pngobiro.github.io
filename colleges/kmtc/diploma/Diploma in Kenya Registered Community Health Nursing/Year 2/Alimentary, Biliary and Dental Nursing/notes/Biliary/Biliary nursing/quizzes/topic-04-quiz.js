registerQuiz("topic-04-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-04-quiz",
    "metadata": {
        "title": "Liver Cancer & Transplant Quiz",
        "description": "Review key concepts regarding liver malignancy and transplant nursing care.",
        "topicId": "topic-04-cancer-transplant",
        "difficulty": "intermediate",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2025-12-25T10:00:00Z",
        "tags": ["oncology", "transplant", "post-op"]
    },
    "settings": {
        "shuffleQuestions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "true-false",
            "question": "Metastatic liver cancer is more common than primary liver cancer.",
            "points": 5,
            "correctAnswer": true,
            "explanation": "Because of the liver's high rate of blood flow and extensive capillary network, it is a very common site for metastasis from other cancers."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "What is the most critical sign of infection to monitor for in the first 2 months following a liver transplant?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Jaundice", "isCorrect": false },
                { "id": "b", "text": "Fever", "isCorrect": true },
                { "id": "c", "text": "Ascites", "isCorrect": false },
                { "id": "d", "text": "Clay-colored stools", "isCorrect": false }
            ],
            "explanation": "Due to immunosuppressive therapy, the classic signs of infection may be masked. Fever may be the only sign of infection."
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "Which procedure uses heat to burn and destroy liver tumor cells?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Cryosurgery", "isCorrect": false },
                { "id": "b", "text": "Radiofrequency (RF) ablation", "isCorrect": true },
                { "id": "c", "text": "Chemotherapy", "isCorrect": false },
                { "id": "d", "text": "Percutaneous ethanol injection", "isCorrect": false }
            ],
            "explanation": "Radiofrequency (RF) ablation uses heat to destroy tumor cells. Cryosurgery uses freezing temperatures."
        }
    ]
});
