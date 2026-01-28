registerQuiz("topic-06-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-06-quiz",
    "metadata": {
        "title": "Normal Labour: Stages 2-4 Quiz",
        "description": "Assess your knowledge on delivery, AMTSL, and immediate newborn care.",
        "topicId": "topic-06",
        "difficulty": "advanced",
        "estimatedTime": 15,
        "passingScore": 80,
        "createdAt": "2025-01-28T12:00:00Z",
        "updatedAt": "2025-01-28T12:00:00Z",
        "tags": ["delivery", "AMTSL", "newborn"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-select",
            "question": "Which of the following are components of Active Management of the Third Stage of Labour (AMTSL)?",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Administration of Oxytocin (within 1 minute)", "isCorrect": true },
                { "id": "opt2", "text": "Controlled Cord Traction (CCT)", "isCorrect": true },
                { "id": "opt3", "text": "Uterine Massage", "isCorrect": true },
                { "id": "opt4", "text": "Immediate cord clamping", "isCorrect": false }
            ],
            "explanation": "AMTSL consists of Oxytocin administration, Controlled Cord Traction, and Uterine Massage. Immediate clamping is not a standard part of AMTSL definition (delayed is often preferred)."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the method of placental separation with its description:",
            "points": 2,
            "pairs": [
                { "id": "p1", "left": "Schultze Mechanism", "right": "Central separation, fetal side appears first ('Shiny Schultze')" },
                { "id": "p2", "left": "Mathews Duncan Mechanism", "right": "Marginal separation, maternal side appears first ('Dirty Duncan')" }
            ],
            "explanation": "Schultze separates from the center (less bleeding, shiny fetal side). Duncan separates from the margin (more bleeding, rough maternal side)."
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "What is the recommended dose of Vitamin K for a term newborn?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "0.5 mg IM", "isCorrect": false },
                { "id": "opt2", "text": "1 mg IM", "isCorrect": true },
                { "id": "opt3", "text": "10 mg IM", "isCorrect": false },
                { "id": "opt4", "text": "1 mg Oral", "isCorrect": false }
            ],
            "explanation": "The standard dose for a term baby is 1mg Vitamin K via IM injection to prevent hemorrhagic disease of the newborn."
        },
        {
            "id": "q4",
            "type": "multiple-select",
            "question": "Select the signs indicating separation of the placenta:",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Lengthening of the umbilical cord", "isCorrect": true },
                { "id": "opt2", "text": "Gush of blood", "isCorrect": true },
                { "id": "opt3", "text": "Uterus becomes globular and hard", "isCorrect": true },
                { "id": "opt4", "text": "Fundus drops below the symphysis pubis", "isCorrect": false }
            ],
            "explanation": "Signs of separation include cord lengthening, a gush of blood, and the uterus becoming globular and rising (not dropping) in the abdomen."
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "The Fourth Stage of labour refers to:",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "The delivery of the placenta", "isCorrect": false },
                { "id": "opt2", "text": "The first hour after delivery of the placenta", "isCorrect": true },
                { "id": "opt3", "text": "The first 24 hours postpartum", "isCorrect": false },
                { "id": "opt4", "text": "The phase of cervical dilatation", "isCorrect": false }
            ],
            "explanation": "The 4th stage is the immediate observation period (usually 1 hour) following placental delivery to monitor for hemorrhage and ensure stability."
        }
    ]
});
