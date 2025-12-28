registerQuiz("topic-01-anatomy-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-01-anatomy-quiz",
    "metadata": {
        "title": "Anatomy & Physiology Quiz",
        "description": "Assess your knowledge of respiratory structures and functions.",
        "topicId": "topic-01",
        "difficulty": "beginner",
        "estimatedTime": 5,
        "passingScore": 70,
        "createdAt": "2025-12-28T10:00:00Z"
    },
    "settings": {
        "shuffleQuestions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which of the following is considered part of the Upper Respiratory Tract?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Trachea", "isCorrect": false },
                { "id": "b", "text": "Pharynx", "isCorrect": true },
                { "id": "c", "text": "Primary Bronchi", "isCorrect": false },
                { "id": "d", "text": "Alveoli", "isCorrect": false }
            ],
            "explanation": "The Upper Respiratory Tract includes the nasal cavity, pharynx, and larynx. The trachea and bronchi are part of the Lower Respiratory Tract."
        },
        {
            "id": "q2",
            "type": "multiple-select",
            "question": "What are the three major functional parts of the respiratory system? (Select 3)",
            "points": 10,
            "options": [
                { "id": "a", "text": "The airway", "isCorrect": true },
                { "id": "b", "text": "The heart", "isCorrect": false },
                { "id": "c", "text": "The lungs", "isCorrect": true },
                { "id": "d", "text": "The muscles of respiration", "isCorrect": true },
                { "id": "e", "text": "The esophagus", "isCorrect": false }
            ],
            "explanation": "The three major parts are the airway (transport), lungs (gas exchange), and muscles of respiration (pump)."
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "The __b1__ act as the functional units of the respiratory system by passing oxygen into the body and carbon dioxide out.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["lungs", "Lungs"], "caseSensitive": false }
            ],
            "explanation": "The lungs are the functional units for gas exchange."
        }
    ]
});