registerQuiz("topic-03-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-03-quiz",
    "metadata": {
        "title": "Symptom Management",
        "description": "Test your knowledge on managing distressing symptoms like breathlessness and confusion.",
        "topicId": "topic-03",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2025-12-27T12:00:00Z"
    },
    "settings": { "shuffleQuestions": true, "shuffleOptions": true },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which of the following is a key difference between cachexia and simple starvation/anorexia?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Cachexia responds well to forced feeding", "isCorrect": false },
                { "id": "b", "text": "Cachexia is not associated with hunger and does not improve with forced feeding", "isCorrect": true },
                { "id": "c", "text": "Cachexia only occurs in HIV patients", "isCorrect": false },
                { "id": "d", "text": "Cachexia is purely psychological", "isCorrect": false }
            ],
            "explanation": "Cachexia is a metabolic syndrome that cannot be reversed simply by increasing food intake."
        },
        {
            "id": "q2",
            "type": "multiple-select",
            "question": "Select the medications often used for the management of breathlessness (dyspnea) in palliative care:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Morphine", "isCorrect": true },
                { "id": "b", "text": "Benzodiazepines (for anxiety)", "isCorrect": true },
                { "id": "c", "text": "Laxatives", "isCorrect": false },
                { "id": "d", "text": "Bronchodilators", "isCorrect": true }
            ],
            "explanation": "Opioids (morphine), anxiolytics, and bronchodilators are common pharmacological interventions for dyspnea."
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "For a patient with confusion or delirium, __b1__ is a commonly prescribed antipsychotic medication.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["haloperidol", "haldol"], "caseSensitive": false }
            ],
            "explanation": "Haloperidol (0.5-5mg) is standard for managing confusion/delirium."
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "Constipation in palliative care can be caused by low fiber diet, opioids, and dehydration.",
            "points": 10,
            "correctAnswer": true,
            "explanation": "Constipation is multifactorial, often caused by diet, drugs (opioids), and disease factors."
        }
    ]
});