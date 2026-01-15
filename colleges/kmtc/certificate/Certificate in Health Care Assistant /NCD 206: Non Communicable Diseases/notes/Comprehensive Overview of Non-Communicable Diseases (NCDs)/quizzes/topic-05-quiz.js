registerQuiz("topic-05-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-05-quiz",
    "metadata": {
        "title": "Epilepsy & Sickle Cell Quiz",
        "description": "Test your knowledge on neurological and hematological disorders.",
        "topicId": "topic-05-other-disorders",
        "difficulty": "intermediate",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2026-01-10T12:00:00Z",
        "tags": ["epilepsy", "sickle cell", "genetics"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "true-false",
            "question": "You should place an object in the mouth of someone having a seizure to prevent them from swallowing their tongue.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "This is a dangerous myth. You should never put anything in the mouth of someone having a seizure; it is physically impossible to swallow the tongue."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "What causes Sickle Cell Anemia?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Viral infection", "isCorrect": false },
                { "id": "b", "text": "Iron deficiency", "isCorrect": false },
                { "id": "c", "text": "Inherited genetic mutation", "isCorrect": true },
                { "id": "d", "text": "Autoimmune reaction", "isCorrect": false }
            ],
            "explanation": "Sickle Cell Anemia is an inherited genetic disorder affecting hemoglobin."
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "Epilepsy is characterized by recurrent, unprovoked __b1__.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["seizures", "fits", "convulsions"], "caseSensitive": false }
            ],
            "explanation": "Epilepsy is defined by recurrent seizures caused by abnormal brain activity."
        },
        {
            "id": "q4",
            "type": "multiple-select",
            "question": "Which of the following are symptoms of Sickle Cell Anemia?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Pain crises", "isCorrect": true },
                { "id": "b", "text": "Anemia/Fatigue", "isCorrect": true },
                { "id": "c", "text": "Hyperactivity", "isCorrect": false },
                { "id": "d", "text": "Swelling of hands and feet", "isCorrect": true }
            ],
            "explanation": "Symptoms include pain crises, anemia, fatigue, swelling, and frequent infections."
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "A person with one defective hemoglobin gene and one normal gene has:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Sickle Cell Anemia", "isCorrect": false },
                { "id": "b", "text": "Sickle Cell Trait", "isCorrect": true },
                { "id": "c", "text": "No genetic relation to the disease", "isCorrect": false }
            ],
            "explanation": "Heterozygous inheritance (one gene) results in Sickle Cell Trait, usually asymptomatic."
        }
    ]
});