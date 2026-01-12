registerQuiz("topic-01-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-01-quiz",
    "metadata": {
        "title": "Multiple Pregnancies Assessment",
        "description": "Test your knowledge on the diagnosis, types, and management of multiple pregnancies.",
        "topicId": "topic-01",
        "difficulty": "intermediate",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2026-01-12T00:00:00Z"
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
            "type": "matching",
            "question": "Match the characteristics to the correct type of twin:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Uniovular (Monozygotic)", "right": "One placenta, same sex" },
                { "id": "p2", "left": "Binovular (Dizygotic)", "right": "Two placentas (may fuse), different or same sex" },
                { "id": "p3", "left": "Origin: Uniovular", "right": "Single fertilised ovum" },
                { "id": "p4", "left": "Origin: Binovular", "right": "Two separate ova" }
            ],
            "explanation": "Uniovular twins share one placenta and are identical (one egg). Binovular twins have two placentas and are fraternal (two eggs)."
        },
        {
            "id": "q2",
            "type": "multiple-select",
            "question": "Which of the following are clinical signs suggestive of multiple pregnancy on palpation? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Fundal height is smaller than dates", "isCorrect": false },
                { "id": "b", "text": "Two foetal poles are revealed at the fundus", "isCorrect": true },
                { "id": "c", "text": "Multiple foetal parts are palpable", "isCorrect": true },
                { "id": "d", "text": "The head feels smaller than expected for the size of the uterus", "isCorrect": true }
            ],
            "partialCredit": true,
            "explanation": "In twins, the uterus is larger than dates, multiple poles/parts are felt, and individual heads feel small relative to the large uterus."
        },
        {
            "id": "q3",
            "type": "ordering",
            "question": "Arrange the steps for managing the delivery of the second twin in the correct order:",
            "points": 15,
            "items": [
                { "id": "1", "text": "Deliver the first twin and label baby", "correctPosition": 1 },
                { "id": "2", "text": "Check the lie of the second twin", "correctPosition": 2 },
                { "id": "3", "text": "Correct lie to longitudinal if necessary (fundal pressure)", "correctPosition": 3 },
                { "id": "4", "text": "Rupture membranes", "correctPosition": 4 },
                { "id": "5", "text": "Administer Oxytocin after anterior shoulder/placenta delivery", "correctPosition": 5 }
            ],
            "explanation": "The lie must be verified and corrected BEFORE rupturing membranes to prevent cord prolapse."
        },
        {
            "id": "q4",
            "type": "image-based",
            "question": "The diagrams below represent 'Locked Twins'. What is the recommended management for the delivery of the second twin in this rare complication?",
            "points": 10,
            "imageUrl": "../assets/images/image-20260112-c4adf602.jpeg",
            "imageAlt": "Diagram of locked twins",
            "options": [
                { "id": "a", "text": "Forcible traction", "isCorrect": false },
                { "id": "b", "text": "Internal podalic version", "isCorrect": false },
                { "id": "c", "text": "Caesarean section", "isCorrect": true },
                { "id": "d", "text": "Vacuum extraction", "isCorrect": false }
            ],
            "explanation": "Locked twins prevent spontaneous delivery. Decapitation is an old method; Caesarean section is the safest modern method."
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "External version is indicated and safe to use when the second twin lies in transverse after the first is born.",
            "points": 5,
            "correctAnswer": true,
            "explanation": "External version is used by a midwife ONLY in the delivery of the second twin in the case of transverse lie. It is contraindicated in single pregnancies with antepartum haemorrhage or previous scars."
        }
    ]
});