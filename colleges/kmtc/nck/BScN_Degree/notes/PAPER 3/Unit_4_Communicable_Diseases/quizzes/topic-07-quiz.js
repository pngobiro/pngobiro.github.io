registerQuiz("topic-07-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-07-quiz",
    "metadata": {
        "title": "Helminthic Diseases",
        "description": "Test your knowledge on intestinal worms: Roundworms, Hookworms, and Tapeworms.",
        "topicId": "topic-07",
        "difficulty": "intermediate",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2026-01-16T00:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which worm is most associated with severe iron deficiency anaemia?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Roundworm", "isCorrect": false },
                { "id": "b", "text": "Threadworm", "isCorrect": false },
                { "id": "c", "text": "Hookworm", "isCorrect": true },
                { "id": "d", "text": "Tapeworm", "isCorrect": false }
            ],
            "explanation": "Hookworms attach to the intestinal wall and suck blood, leading to significant anaemia."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "How is Ascariasis (Roundworm) primarily transmitted?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Skin penetration", "isCorrect": false },
                { "id": "b", "text": "Ingesting embryonated eggs from soil-contaminated food", "isCorrect": true },
                { "id": "c", "text": "Mosquito bite", "isCorrect": false },
                { "id": "d", "text": "Eating undercooked beef", "isCorrect": false }
            ]
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "Which tapeworm is particularly dangerous because its larvae can migrate to the brain and cause epilepsy?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Taenia saginata (Beef)", "isCorrect": false },
                { "id": "b", "text": "Taenia solium (Pork)", "isCorrect": true }
            ],
            "explanation": "T. solium (pork tapeworm) can cause neurocysticercosis when larvae invade the brain."
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "Hydatid disease is caused by accidental ingestion of eggs from dog faeces.",
            "points": 5,
            "correctAnswer": true,
            "explanation": "Humans are accidental hosts for the dog tapeworm, Echinococcus granulosis."
        },
        {
            "id": "q5",
            "type": "matching",
            "question": "Match the worm to its prevention measure:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Hookworm", "right": "Wearing shoes" },
                { "id": "p2", "left": "Tapeworm", "right": "Thoroughly cooking meat" },
                { "id": "p3", "left": "Hydatid", "right": "Deworming dogs" },
                { "id": "p4", "left": "Threadworm", "right": "Short nails and hand washing" }
            ]
        }
    ]
});