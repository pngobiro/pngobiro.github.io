registerQuiz("topic-03-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-03-quiz",
    "metadata": {
        "title": "Water Quality & Treatment",
        "topicId": "topic-03",
        "difficulty": "intermediate",
        "estimatedTime": 12,
        "passingScore": 70,
        "createdAt": "2025-12-25T12:00:00Z"
    },
    "questions": [
        {
            "id": "t3-q1",
            "type": "ordering",
            "question": "Place the water treatment steps in the correct chronological order:",
            "points": 20,
            "items": [
                { "id": "i1", "text": "Coagulation", "correctPosition": 1 },
                { "id": "i2", "text": "Flocculation", "correctPosition": 2 },
                { "id": "i3", "text": "Sedimentation", "correctPosition": 3 },
                { "id": "i4", "text": "Filtration", "correctPosition": 4 },
                { "id": "i5", "text": "Disinfection", "correctPosition": 5 }
            ],
            "explanation": "Chemicals are added (Coagulation), particles clump (Flocculation), settle (Sedimentation), water passes through media (Filtration), and germs are killed (Disinfection)."
        },
        {
            "id": "t3-q2",
            "type": "fill-blank",
            "question": "Diseases that occur due to a lack of water for personal hygiene (like Scabies and Trachoma) are classified as water-__b1__ diseases.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["washed", "scarce"], "caseSensitive": false }
            ],
            "explanation": "Water-washed (or water-scarce) diseases spread because people cannot wash hands/bodies/clothes frequently enough."
        },
        {
            "id": "t3-q3",
            "type": "multiple-choice",
            "question": "Which chemical pollutant is associated with 'Blue Baby Syndrome' and is common in agricultural runoff?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Lead", "isCorrect": false },
                { "id": "b", "text": "Nitrates", "isCorrect": true },
                { "id": "c", "text": "Mercury", "isCorrect": false },
                { "id": "d", "text": "Fluoride", "isCorrect": false }
            ],
            "explanation": "Nitrates from fertilizers can cause methemoglobinemia (Blue Baby Syndrome)."
        }
    ]
});