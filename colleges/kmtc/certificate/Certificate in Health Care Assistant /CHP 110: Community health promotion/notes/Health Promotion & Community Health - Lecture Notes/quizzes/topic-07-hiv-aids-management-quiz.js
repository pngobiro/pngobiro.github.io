registerQuiz("topic-07-hiv-aids-management-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-07-hiv-aids-management-quiz",
    "metadata": {
        "title": "HIV/AIDS Management & Society",
        "description": "Assess your understanding of clinical staging, counseling, and impact.",
        "topicId": "topic-07-hiv-aids-management",
        "difficulty": "advanced",
        "estimatedTime": 20,
        "passingScore": 70,
        "createdAt": "2026-01-12T00:00:00Z"
    },
    "settings": {
        "shuffleQuestions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "matching",
            "question": "Match the clinical stage with its characteristic:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Primary Infection", "right": "Sero-conversion illness, high viral load" },
                { "id": "p2", "left": "Asymptomatic Phase", "right": "No major signs, virus replicating silently" },
                { "id": "p3", "left": "Symptomatic Stage", "right": "CD4 200-500, oral thrush, minor infections" },
                { "id": "p4", "left": "Advanced Disease", "right": "CD4 < 200, severe opportunistic infections (AIDS)" }
            ]
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "Which of the following is an example of an Opportunistic Infection (OI)?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Hypertension", "isCorrect": false },
                { "id": "b", "text": "Pneumocystis Pneumonia (PCP)", "isCorrect": true },
                { "id": "c", "text": "Diabetes", "isCorrect": false },
                { "id": "d", "text": "Appendicitis", "isCorrect": false }
            ],
            "explanation": "PCP is a fungal infection that causes severe pneumonia in immunocompromised individuals."
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "How does HIV/AIDS impact the education sector? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Loss of skilled teachers", "isCorrect": true },
                { "id": "b", "text": "Increased school enrollment", "isCorrect": false },
                { "id": "c", "text": "High dropout rates for orphans", "isCorrect": true },
                { "id": "d", "text": "Reduced performance due to absenteeism", "isCorrect": true }
            ],
            "explanation": "HIV/AIDS negatively impacts education through loss of staff and student dropouts."
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "Sexual intercourse with a virgin is a myth and does NOT cure HIV/AIDS.",
            "points": 5,
            "correctAnswer": true,
            "explanation": "This is a dangerous myth that increases the spread of the virus."
        },
        {
            "id": "q5",
            "type": "fill-blank",
            "question": "__1__ is a powerful prevention strategy that also serves as a point of entry into care.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["VCT", "Voluntary Counseling and Testing"], "caseSensitive": false }
            ],
            "explanation": "Voluntary Counseling and Testing (VCT) is key for prevention and care."
        }
    ]
});