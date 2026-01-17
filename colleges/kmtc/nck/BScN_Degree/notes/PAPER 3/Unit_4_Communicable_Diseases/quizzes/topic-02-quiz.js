registerQuiz("topic-02-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-02-quiz",
    "metadata": {
        "title": "Principles of Disease Control",
        "description": "Assess your understanding of disease control strategies: Source, Transmission, and Host.",
        "topicId": "topic-02",
        "difficulty": "beginner",
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
            "question": "Which of the following is a method of 'Attacking the Source'?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Using bed nets", "isCorrect": false },
                { "id": "b", "text": "Treating the infected patient", "isCorrect": true },
                { "id": "c", "text": "Washing hands", "isCorrect": false },
                { "id": "d", "text": "Immunisation", "isCorrect": false }
            ],
            "explanation": "Treating the patient reduces the infectious agent at its origin (the source). Bed nets protect the host, hand washing interrupts transmission."
        },
        {
            "id": "q2",
            "type": "multiple-select",
            "question": "Select the Notifiable Diseases in Kenya from the list below:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Common Cold", "isCorrect": false },
                { "id": "b", "text": "Cholera", "isCorrect": true },
                { "id": "c", "text": "Plague", "isCorrect": true },
                { "id": "d", "text": "Yellow Fever", "isCorrect": true }
            ],
            "explanation": "Cholera, Plague, and Yellow Fever are internationally notifiable due to their epidemic potential."
        },
        {
            "id": "q3",
            "type": "true-false",
            "question": "Chemoprophylaxis involves giving drugs to susceptible people to prevent infection.",
            "points": 5,
            "correctAnswer": true,
            "explanation": "Chemoprophylaxis is the use of medication (like anti-malarials) to prevent disease in people at risk."
        },
        {
            "id": "q4",
            "type": "ordering",
            "question": "Match the measure to the correct control principle:",
            "points": 10,
            "items": [
                { "id": "1", "text": "Isolating a patient (Source)", "correctPosition": 1 },
                { "id": "2", "text": "Sterilizing equipment (Transmission)", "correctPosition": 2 },
                { "id": "3", "text": "Vaccination (Host)", "correctPosition": 3 }
            ],
            "explanation": "Isolation targets the source; sterilization breaks transmission; vaccination strengthens the host."
        }
    ]
});