registerQuiz("topic-04-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-04-quiz",
    "metadata": {
        "title": "Cardiovascular & Hematology Quiz",
        "topicId": "topic-04",
        "difficulty": "intermediate",
        "estimatedTime": 7,
        "passingScore": 80,
        "createdAt": "2025-12-28T10:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "fill-blank",
            "question": "Rheumatic fever follows an infection with Group __1__ Beta hemolytic __2__.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["A"], "caseSensitive": false },
                { "id": "2", "acceptedAnswers": ["streptococci", "streptococcus", "strep"], "caseSensitive": false }
            ],
            "explanation": "It is an immunological reaction to Group A Beta-hemolytic streptococcal pharyngitis."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the Rheumatic Fever manifestation to its description:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Chorea", "right": "Sudden aimless movements" },
                { "id": "p2", "left": "Erythema Marginatum", "right": "Macular, non-itching rash" },
                { "id": "p3", "left": "Polyarthritis", "right": "Swollen, migrating joint pain" },
                { "id": "p4", "left": "Subcutaneous Nodules", "right": "Small lumps on bony prominences" }
            ]
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "Which of the following are clinical manifestations of anaemia? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Pallor", "isCorrect": true },
                { "id": "b", "text": "Tachycardia", "isCorrect": true },
                { "id": "c", "text": "Fatigue", "isCorrect": true },
                { "id": "d", "text": "Hypertension", "isCorrect": false }
            ],
            "explanation": "Anaemia typically presents with pallor, fatigue, muscle weakness, and tachycardia (compensatory)."
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "Secondary prophylaxis for Rheumatic Fever should continue for at least:",
            "points": 10,
            "options": [
                { "id": "a", "text": "1 year", "isCorrect": false },
                { "id": "b", "text": "5 years", "isCorrect": false },
                { "id": "c", "text": "10 years", "isCorrect": true },
                { "id": "d", "text": "20 years", "isCorrect": false }
            ],
            "explanation": "Monthly penicillin injections are recommended for at least 10 years to prevent recurrence."
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "A red blood cell that is larger than normal is called a:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Microcyte", "isCorrect": false },
                { "id": "b", "text": "Macrocyte", "isCorrect": true },
                { "id": "c", "text": "Spherocyte", "isCorrect": false },
                { "id": "d", "text": "Normocyte", "isCorrect": false }
            ],
            "explanation": "Macro- implies large; micro- implies small."
        }
    ]
});