registerQuiz("topic-04-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-04-quiz",
    "metadata": {
        "title": "Altered Level of Consciousness",
        "topicId": "topic-04",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2025-12-25T00:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "What is the FIRST priority when managing a patient with altered level of consciousness?",
            "points": 15,
            "options": [
                { "id": "a", "text": "Insert an IV line", "isCorrect": false },
                { "id": "b", "text": "Maintain a patent airway", "isCorrect": true },
                { "id": "c", "text": "Assess pupillary response", "isCorrect": false },
                { "id": "d", "text": "Prevent skin breakdown", "isCorrect": false }
            ],
            "explanation": "Airway patency is always the first priority to ensure oxygenation."
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "__1__ is a clinical state of unarousable unresponsiveness where the patient is unaware of self or environment.",
            "points": 15,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["Coma", "coma"], "caseSensitive": false }
            ],
            "explanation": "Coma differs from other states like persistent vegetative state or akinetic mutism."
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "Which of the following are potential causes of coma? (Select all that apply)",
            "points": 20,
            "options": [
                { "id": "a", "text": "Diabetic ketoacidosis (Metabolic)", "isCorrect": true },
                { "id": "b", "text": "Drug overdose (Toxicologic)", "isCorrect": true },
                { "id": "c", "text": "Head injury (Neurologic)", "isCorrect": true },
                { "id": "d", "text": "Mild dehydration", "isCorrect": false }
            ],
            "explanation": "Coma causes are generally classified as Neurologic, Toxicologic, or Metabolic."
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "If a comatose patient has preserved pupillary light reflexes, a toxic or metabolic disorder is suspected rather than a structural neurologic cause.",
            "points": 10,
            "correctAnswer": true,
            "explanation": "Structural lesions usually disrupt pupillary pathways early, while metabolic/toxic causes often spare them until late stages."
        }
    ]
});