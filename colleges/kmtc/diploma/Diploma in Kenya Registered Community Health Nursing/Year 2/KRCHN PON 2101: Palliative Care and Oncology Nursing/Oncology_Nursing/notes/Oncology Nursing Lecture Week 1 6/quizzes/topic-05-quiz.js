registerQuiz("topic-05-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-05-quiz",
    "metadata": {
        "title": "Oncologic Emergencies",
        "description": "Assess knowledge of critical complications like TLS, SIADH, and DIC.",
        "topicId": "topic-05",
        "difficulty": "advanced",
        "estimatedTime": 15,
        "passingScore": 75,
        "createdAt": "2025-12-27T10:00:00Z"
    },
    "questions": [
        {
            "id": "t5-q1",
            "type": "multiple-choice",
            "question": "Which electrolyte imbalance is characteristic of **Tumor Lysis Syndrome**?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Hypercalcemia", "isCorrect": false },
                { "id": "b", "text": "Hypokalemia", "isCorrect": false },
                { "id": "c", "text": "Hyperuricemia and Hyperkalemia", "isCorrect": true },
                { "id": "d", "text": "Hypophosphatemia", "isCorrect": false }
            ],
            "explanation": "TLS causes high Potassium, Uric Acid, and Phosphate (released from cells), and low Calcium."
        },
        {
            "id": "t5-q2",
            "type": "multiple-choice",
            "question": "What is the primary manifestation of Superior Vena Cava Syndrome (SVCS)?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Back pain", "isCorrect": false },
                { "id": "b", "text": "Facial swelling and dyspnea", "isCorrect": true },
                { "id": "c", "text": "Painless hematuria", "isCorrect": false },
                { "id": "d", "text": "Fractures", "isCorrect": false }
            ],
            "explanation": "Obstruction of the SVC causes backup of blood, leading to facial/arm swelling and dyspnea."
        },
        {
            "id": "t5-q3",
            "type": "multiple-choice",
            "question": "Which medication is commonly used to treat cancer-related **Hypercalcemia**?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Allopurinol", "isCorrect": false },
                { "id": "b", "text": "Calcitonin", "isCorrect": true },
                { "id": "c", "text": "Heparin", "isCorrect": false },
                { "id": "d", "text": "Mannitol", "isCorrect": false }
            ],
            "explanation": "Calcitonin inhibits bone resorption, lowering serum calcium levels."
        },
        {
            "id": "t5-q4",
            "type": "short-answer",
            "question": "Name the oncologic emergency characterized by the paradox of widespread clotting and excessive bleeding simultaneously.",
            "points": 15,
            "keywords": ["dic", "disseminated intravascular coagulation"],
            "minKeywords": 1,
            "modelAnswer": "Disseminated Intravascular Coagulation (DIC)",
            "explanation": "DIC depletes clotting factors via widespread clots, leading to bleeding elsewhere."
        }
    ]
});