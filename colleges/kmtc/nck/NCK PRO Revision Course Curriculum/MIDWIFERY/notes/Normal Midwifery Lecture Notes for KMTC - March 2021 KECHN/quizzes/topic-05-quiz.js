registerQuiz("topic-05-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-05-quiz",
    "metadata": {
        "title": "Normal Labour: First Stage Quiz",
        "description": "Test your knowledge on the mechanisms, physiology, and management of the first stage of labour.",
        "topicId": "topic-05",
        "difficulty": "advanced",
        "estimatedTime": 15,
        "passingScore": 80,
        "createdAt": "2025-01-28T12:00:00Z",
        "updatedAt": "2025-01-28T12:00:00Z",
        "tags": ["labour", "partograph", "mechanisms"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "ordering",
            "question": "Arrange the mechanisms of labour in the correct sequence:",
            "points": 3,
            "items": [
                { "id": "i1", "text": "Engagement and Descent", "correctPosition": 1 },
                { "id": "i2", "text": "Flexion", "correctPosition": 2 },
                { "id": "i3", "text": "Internal Rotation of Head", "correctPosition": 3 },
                { "id": "i4", "text": "Extension", "correctPosition": 4 },
                { "id": "i5", "text": "Restitution", "correctPosition": 5 },
                { "id": "i6", "text": "External Rotation / Internal Rotation of Shoulders", "correctPosition": 6 }
            ],
            "explanation": "The baby must engage/descend, flex the chin, rotate internally to fit the pelvis, extend the head under the pubic bone, restitute (untwist neck), and rotate shoulders to deliver."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the 'P' of labour with its meaning:",
            "points": 2,
            "pairs": [
                { "id": "p1", "left": "Power", "right": "Uterine contractions" },
                { "id": "p2", "left": "Passage", "right": "Pelvis/Birth canal" },
                { "id": "p3", "left": "Passenger", "right": "Fetus, placenta, membranes" },
                { "id": "p4", "left": "Psyche", "right": "Mother's emotional state" }
            ],
            "explanation": "The 4 Ps affecting labour are Power (contractions), Passage (pelvis), Passenger (baby), and Psyche (mindset)."
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "At what cervical dilatation does the 'Active Phase' of the first stage of labour begin?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "2 cm", "isCorrect": false },
                { "id": "opt2", "text": "4 cm", "isCorrect": true },
                { "id": "opt3", "text": "8 cm", "isCorrect": false },
                { "id": "opt4", "text": "10 cm", "isCorrect": false }
            ],
            "explanation": "The Latent phase is 0-4cm. The Active phase begins at 4cm and ends at full dilatation (10cm). This is where Partograph plotting begins."
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "The Partograph Alert Line starts at 4 cm dilatation.",
            "points": 1,
            "correctAnswer": true,
            "explanation": "The Alert Line on the Partograph originates at 4 cm dilatation to mark the start of the active phase monitoring."
        },
        {
            "id": "q5",
            "type": "multiple-select",
            "question": "Which of the following indicates False Labour?",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Irregular contractions", "isCorrect": true },
                { "id": "opt2", "text": "No progressive cervical dilatation", "isCorrect": true },
                { "id": "opt3", "text": "Pain relieved by sedation", "isCorrect": true },
                { "id": "opt4", "text": "Show (blood-stained mucus)", "isCorrect": false },
                { "id": "opt5", "text": "Bag of waters (bulging membranes)", "isCorrect": false }
            ],
            "explanation": "False labour is characterized by irregular contractions that don't increase in intensity, lack of cervical change, and pain that stops with sedation. Show and bulging membranes are signs of true labour."
        }
    ]
});
