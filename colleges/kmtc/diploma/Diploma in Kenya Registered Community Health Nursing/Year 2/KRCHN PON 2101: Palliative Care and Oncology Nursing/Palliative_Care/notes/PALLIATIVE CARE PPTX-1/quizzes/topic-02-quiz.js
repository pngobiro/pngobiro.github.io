registerQuiz("topic-02-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-02-quiz",
    "metadata": {
        "title": "Ethical & Legal Aspects",
        "description": "Assess your understanding of autonomy, beneficence, and justice in palliative care.",
        "topicId": "topic-02",
        "difficulty": "intermediate",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2025-12-27T12:00:00Z"
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which ethical principle is defined as 'self-rule' or the individual's right to make their own decisions?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Beneficence", "isCorrect": false },
                { "id": "b", "text": "Autonomy", "isCorrect": true },
                { "id": "c", "text": "Justice", "isCorrect": false },
                { "id": "d", "text": "Non-maleficence", "isCorrect": false }
            ],
            "explanation": "Autonomy promotes the individual's right to self-determination and decision-making."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the ethical principle to its definition:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Beneficence", "right": "To do good / benefit the patient" },
                { "id": "p2", "left": "Non-maleficence", "right": "To do no harm" },
                { "id": "p3", "left": "Distributive Justice", "right": "Fair distribution of resources" }
            ]
        },
        {
            "id": "q3",
            "type": "true-false",
            "question": "In medical treatment, the risk of harm (non-maleficence) must be weighed against the offer of cure or benefit (beneficence).",
            "points": 10,
            "correctAnswer": true,
            "explanation": "Clinical decision-making often involves balancing the potential benefits against the potential harms."
        }
    ]
});