registerQuiz("topic-08-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-08-quiz",
    "metadata": {
        "title": "The Normal Neonate Quiz",
        "description": "Assess your understanding of newborn characteristics, reflexes, and care.",
        "topicId": "topic-08",
        "difficulty": "intermediate",
        "estimatedTime": 10,
        "passingScore": 80,
        "createdAt": "2025-01-28T12:00:00Z",
        "updatedAt": "2025-01-28T12:00:00Z",
        "tags": ["neonate", "APGAR", "reflexes"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "matching",
            "question": "Match the newborn reflex with its trigger/action:",
            "points": 2,
            "pairs": [
                { "id": "p1", "left": "Moro", "right": "Embracing movement when startled" },
                { "id": "p2", "left": "Rooting", "right": "Turning head when cheek is touched" },
                { "id": "p3", "left": "Grasping", "right": "Fingers close around object in palm" },
                { "id": "p4", "left": "Stepping", "right": "Walking movements when held upright" }
            ],
            "explanation": "Reflex definitions: Moro (startle), Rooting (search for food), Grasping (hold), Stepping (walk)."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "What is the normal heart rate range for a newborn?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "80-100 bpm", "isCorrect": false },
                { "id": "opt2", "text": "100-120 bpm", "isCorrect": false },
                { "id": "opt3", "text": "120-160 bpm", "isCorrect": true },
                { "id": "opt4", "text": "140-180 bpm", "isCorrect": false }
            ],
            "explanation": "Normal newborn heart rate is 120-160 beats per minute."
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "To prevent Ophthalmia Neonatorum, 1% __b1__ eye ointment is applied to the newborn's eyes.",
            "points": 1,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["tetracycline", "Tetracycline"], "caseSensitive": false }
            ],
            "explanation": "Tetracycline 1% eye ointment is the standard prophylactic treatment."
        },
        {
            "id": "q4",
            "type": "multiple-select",
            "question": "Which of the following are mechanisms of heat loss in a newborn?",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Evaporation", "isCorrect": true },
                { "id": "opt2", "text": "Conduction", "isCorrect": true },
                { "id": "opt3", "text": "Convection", "isCorrect": true },
                { "id": "opt4", "text": "Radiation", "isCorrect": true }
            ],
            "explanation": "All four are valid mechanisms: Evaporation (wet skin), Conduction (cold surface), Convection (drafts), Radiation (nearby cold objects)."
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "Physiological jaundice usually appears on which day of life?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Within 24 hours", "isCorrect": false },
                { "id": "opt2", "text": "3rd to 6th day", "isCorrect": true },
                { "id": "opt3", "text": "After 2 weeks", "isCorrect": false },
                { "id": "opt4", "text": "At birth", "isCorrect": false }
            ],
            "explanation": "Physiological jaundice typically appears between the 3rd and 6th day. Jaundice within 24 hours is pathological."
        }
    ]
});
