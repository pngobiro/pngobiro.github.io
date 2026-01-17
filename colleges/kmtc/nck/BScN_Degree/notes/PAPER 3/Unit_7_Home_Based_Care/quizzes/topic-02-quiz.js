registerQuiz("topic-02-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-02-quiz",
    "title": "Principles of Infection Control and Prevention",
    "description": "Test your knowledge on disease transmission, standard precautions, and equipment processing.",
    "metadata": {
        "title": "Topic 2: Infection Prevention",
        "description": "Safety and infection control in home care",
        "topicId": "topic-02",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2026-01-17T12:00:00Z",
        "updatedAt": "2026-01-17T12:00:00Z",
        "tags": ["infection-control", "safety", "hygiene"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate",
        "allowRetry": true,
        "showCorrectAnswers": true,
        "timeLimit": 0
    },
    "questions": [
        {
            "id": "t2-q1",
            "type": "multiple-choice",
            "question": "What is the correct definition of 'Normal Flora'?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Micro-organisms associated with disease.", "isCorrect": false },
                { "id": "opt2", "text": "Micro-organisms present on skin, respiratory, intestinal and genital tracts that do not normally cause disease.", "isCorrect": true },
                { "id": "opt3", "text": "Infections acquired in the hospital.", "isCorrect": false },
                { "id": "opt4", "text": "Viruses that cause HIV.", "isCorrect": false }
            ],
            "explanation": "Normal flora are micro-organisms found naturally on the body that do not typically cause disease unless introduced to a different area."
        },
        {
            "id": "t2-q2",
            "type": "fill-blank",
            "question": "To decontaminate instruments, they should be soaked in a __b1__ solution (like Jik) at a concentration of 0.5% for __b2__ minutes.",
            "points": 2,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["chlorine", "bleach"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["10", "ten"], "caseSensitive": false }
            ],
            "explanation": "Decontamination requires soaking in 0.5% chlorine solution for 10 minutes."
        },
        {
            "id": "t2-q3",
            "type": "matching",
            "question": "Match the cleaning agent to its correct description:",
            "points": 3,
            "pairs": [
                { "id": "p1", "left": "Antiseptic", "right": "Used on skin/mucous membranes (e.g., Iodine, Spirit)" },
                { "id": "p2", "left": "Disinfectant", "right": "Used on inanimate objects (e.g., Phenol, Chlorine)" },
                { "id": "p3", "left": "High-Level Disinfectant", "right": "Kills bacteria, viruses, fungi (e.g., Glutaraldehyde)" }
            ],
            "explanation": "Antiseptics are for living tissue; disinfectants are for objects. High-level disinfectants kill a broader range of pathogens."
        },
        {
            "id": "t2-q4",
            "type": "ordering",
            "question": "Order the steps for processing instruments:",
            "points": 3,
            "items": [
                { "id": "s1", "text": "Decontamination (Soak in chlorine)", "correctPosition": 1 },
                { "id": "s2", "text": "Cleaning (Wash with detergent)", "correctPosition": 2 },
                { "id": "s3", "text": "Sterilisation or High-Level Disinfection", "correctPosition": 3 },
                { "id": "s4", "text": "Storage", "correctPosition": 4 }
            ],
            "explanation": "Always decontaminate first to make items safe to touch, then clean, then sterilize."
        },
        {
            "id": "t2-q5",
            "type": "multiple-select",
            "question": "Which of the following are appropriate times for a caregiver to wash their hands? (Select all that apply)",
            "points": 2,
            "options": [
                { "id": "o1", "text": "Immediately after arriving at the patient's home", "isCorrect": true },
                { "id": "o2", "text": "Before putting on gloves", "isCorrect": true },
                { "id": "o3", "text": "Only if dirt is visible", "isCorrect": false },
                { "id": "o4", "text": "After contact with body fluids", "isCorrect": true },
                { "id": "o5", "text": "Before leaving the home", "isCorrect": true }
            ],
            "explanation": "Hands must be washed upon arrival, before/after gloves, after fluid contact, and before leaving. Visibly dirty is not the only criterion."
        }
    ]
});