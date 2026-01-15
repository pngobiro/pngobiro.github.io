registerQuiz("topic-04-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-04-quiz",
    "metadata": {
        "title": "Psychology & Development Quiz",
        "description": "Questions on Freud, Erikson, Piaget, Bandura, and developmental principles.",
        "topicId": "topic-04",
        "difficulty": "advanced",
        "estimatedTime": 20,
        "passingScore": 70,
        "createdAt": "2026-01-13T12:00:00Z"
    },
    "settings": {
        "shuffleQuestions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "ordering",
            "question": "Arrange Freud's Psychosexual Stages in chronological order:",
            "points": 15,
            "items": [
                { "id": "i1", "text": "Oral Stage", "correctPosition": 1 },
                { "id": "i2", "text": "Anal Stage", "correctPosition": 2 },
                { "id": "i3", "text": "Phallic Stage", "correctPosition": 3 },
                { "id": "i4", "text": "Latency Stage", "correctPosition": 4 },
                { "id": "i5", "text": "Genital Stage", "correctPosition": 5 }
            ],
            "explanation": "Freud's sequence: Oral (0-1.5), Anal (1.5-3), Phallic (3-6), Latency (6-12), Genital (12+)."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the psychologist to their theory:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Sigmund Freud", "right": "Psycho-analytic Theory" },
                { "id": "p2", "left": "Jean Piaget", "right": "Cognitive Development Theory" },
                { "id": "p3", "left": "Erik Erikson", "right": "Psychosocial Theory" },
                { "id": "p4", "left": "Albert Bandura", "right": "Social Learning Theory" }
            ],
            "explanation": "Freud = Unconscious/Sex; Piaget = Thinking/Logic; Erikson = Social conflict stages; Bandura = Observation/Imitation."
        },
        {
            "id": "q3",
            "type": "ordering",
            "question": "Order the steps of Social Learning Theory (Bandura):",
            "points": 10,
            "items": [
                { "id": "i1", "text": "Attention", "correctPosition": 1 },
                { "id": "i2", "text": "Retention", "correctPosition": 2 },
                { "id": "i3", "text": "Motor Reproduction", "correctPosition": 3 },
                { "id": "i4", "text": "Reinforcement", "correctPosition": 4 }
            ],
            "explanation": "You must pay Attention, Retain the info, Reproduce the action, and be Reinforced to repeat it."
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "According to the principles of development, growth proceeds from the specific to the general.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "False. Growth proceeds from the General to the Specific (e.g., gross motor before fine motor)."
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "Which part of the personality structure operates on the 'Reality Principle'?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Id", "isCorrect": false },
                { "id": "b", "text": "Ego", "isCorrect": true },
                { "id": "c", "text": "Superego", "isCorrect": false },
                { "id": "d", "text": "Libido", "isCorrect": false }
            ],
            "explanation": "The Ego balances the Id's desires with the Superego's morals using the Reality Principle."
        }
    ]
});