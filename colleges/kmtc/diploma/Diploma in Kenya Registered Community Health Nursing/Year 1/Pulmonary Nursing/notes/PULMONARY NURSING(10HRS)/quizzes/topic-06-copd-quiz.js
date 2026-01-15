registerQuiz("topic-06-copd-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-06-copd-quiz",
    "metadata": {
        "title": "COPD & Emphysema Quiz",
        "description": "Test understanding of chronic obstructive disorders.",
        "topicId": "topic-06",
        "difficulty": "advanced",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2025-12-28T10:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "matching",
            "question": "Match the condition with its description:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Chronic Bronchitis", "right": "Cough/sputum for 3 months in 2 consecutive years" },
                { "id": "p2", "left": "Emphysema", "right": "Destruction of alveolar walls and air space distention" },
                { "id": "p3", "left": "Cor Pulmonale", "right": "Right-sided heart failure due to pulmonary hypertension" },
                { "id": "p4", "left": "Panlobular Emphysema", "right": "Destruction of respiratory bronchiole, duct, and alveolus" }
            ]
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "What is the primary physiological benefit of pursed-lip breathing for COPD patients?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Increases oxygen intake", "isCorrect": false },
                { "id": "b", "text": "Strengthens the diaphragm", "isCorrect": false },
                { "id": "c", "text": "Prevents collapse of small airways during expiration", "isCorrect": true },
                { "id": "d", "text": "Clears mucus from the lungs", "isCorrect": false }
            ],
            "explanation": "Pursed-lip breathing creates back-pressure that keeps small airways open longer, allowing more air to be exhaled."
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "In emphysema, the destruction of alveolar walls leads to an increase in __b1__ space, an area where no gas exchange occurs.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["dead", "physiologic dead"], "caseSensitive": false }
            ],
            "explanation": "Dead space is the volume of air that is inhaled that does not take part in the gas exchange."
        }
    ]
});