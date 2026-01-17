registerQuiz("topic-03-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-03-quiz",
    "metadata": {
        "title": "Contact Diseases",
        "description": "Test your knowledge on Scabies, Fungal infections, and Trachoma.",
        "topicId": "topic-03",
        "difficulty": "intermediate",
        "estimatedTime": 5,
        "passingScore": 70,
        "createdAt": "2026-01-16T00:00:00Z"
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate",
        "allowRetry": true
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "What is the causative agent of Scabies?",
            "points": 10,
            "options": [
                { "id": "a", "text": "A virus", "isCorrect": false },
                { "id": "b", "text": "Sarcoptes scabiei (itch mite)", "isCorrect": true },
                { "id": "c", "text": "A fungus", "isCorrect": false },
                { "id": "d", "text": "Chlamydia", "isCorrect": false }
            ],
            "explanation": "Scabies is caused by the burrowing of the female itch mite, Sarcoptes scabiei."
        },
        {
            "id": "q2",
            "type": "true-false",
            "question": "In treating Scabies, only the person with symptoms needs to be treated.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "All family members and close contacts must be treated simultaneously to prevent re-infection."
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "Which stage of Trachoma involves the eyelashes rubbing against the cornea?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Stage 1: Early Trachoma", "isCorrect": false },
                { "id": "b", "text": "Stage 2: Pannus", "isCorrect": false },
                { "id": "c", "text": "Stage 3: Scarring", "isCorrect": false },
                { "id": "d", "text": "Stage 4: Trichiasis", "isCorrect": true }
            ],
            "explanation": "Trichiasis is the condition where eyelashes turn inward and rub the cornea, leading to blindness."
        },
        {
            "id": "q4",
            "type": "ordering",
            "question": "Order the steps in managing Scabies with BBE:",
            "points": 10,
            "items": [
                { "id": "1", "text": "Warm bath", "correctPosition": 1 },
                { "id": "2", "text": "Apply BBE from neck to toe", "correctPosition": 2 },
                { "id": "3", "text": "Wait 24 hours then wash", "correctPosition": 3 },
                { "id": "4", "text": "Repeat after 4-7 days", "correctPosition": 4 }
            ],
            "explanation": "Bath first, apply medication, leave it on, then repeat later to kill hatched eggs."
        }
    ]
});