registerQuiz("topic-07-asthma-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-07-asthma-quiz",
    "metadata": {
        "title": "Asthma Quiz",
        "description": "Assess knowledge of asthma triggers, symptoms, and emergency care.",
        "topicId": "topic-07",
        "difficulty": "intermediate",
        "estimatedTime": 10,
        "passingScore": 75,
        "createdAt": "2025-12-28T10:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-select",
            "question": "Which of the following are classic symptoms of asthma? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Cough", "isCorrect": true },
                { "id": "b", "text": "Chest tightness", "isCorrect": true },
                { "id": "c", "text": "Wheezing", "isCorrect": true },
                { "id": "d", "text": "Dyspnea", "isCorrect": true },
                { "id": "e", "text": "Stridor", "isCorrect": false }
            ],
            "explanation": "Cough, chest tightness, wheezing, and dyspnea are the four hallmark symptoms."
        },
        {
            "id": "q2",
            "type": "true-false",
            "question": "Sedatives are recommended during Status Asthmaticus to reduce patient anxiety.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "Sedatives are CONTRAINDICATED as they can depress the respiratory drive in a patient already struggling to breathe."
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "Which medication is a calcium antagonist used to induce smooth muscle relaxation in severe asthma?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Prednisone", "isCorrect": false },
                { "id": "b", "text": "Magnesium Sulfate", "isCorrect": true },
                { "id": "c", "text": "Salbutamol", "isCorrect": false },
                { "id": "d", "text": "Theophylline", "isCorrect": false }
            ],
            "explanation": "Magnesium sulfate is used in severe exacerbations (Status Asthmaticus) to relax smooth muscles."
        }
    ]
});