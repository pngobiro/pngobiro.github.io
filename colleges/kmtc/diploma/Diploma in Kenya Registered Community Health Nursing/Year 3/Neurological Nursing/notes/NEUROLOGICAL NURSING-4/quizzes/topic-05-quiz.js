registerQuiz("topic-05-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-05-quiz",
    "metadata": {
        "title": "Increased Intracranial Pressure",
        "topicId": "topic-05",
        "difficulty": "advanced",
        "estimatedTime": 20,
        "passingScore": 75,
        "createdAt": "2025-12-25T00:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "fill-blank",
            "question": "The normal range for Intracranial Pressure (ICP) is __1__ to __2__ mmHg.",
            "points": 15,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["10"], "caseSensitive": false },
                { "id": "2", "acceptedAnswers": ["20"], "caseSensitive": false }
            ],
            "explanation": "Normal ICP is typically cited as 10-20 mmHg."
        },
        {
            "id": "q2",
            "type": "multiple-select",
            "question": "Select the components of Cushing's Triad (a late sign of increased ICP):",
            "points": 20,
            "options": [
                { "id": "a", "text": "Increased Systolic Blood Pressure (Widening Pulse Pressure)", "isCorrect": true },
                { "id": "b", "text": "Bradycardia (Decreased Pulse)", "isCorrect": true },
                { "id": "c", "text": "Tachycardia (Increased Pulse)", "isCorrect": false },
                { "id": "d", "text": "Irregular/Decreased Respirations", "isCorrect": true }
            ],
            "explanation": "Cushing's Triad indicates brainstem compression: Hypertension (widening pulse pressure), Bradycardia, and Bradypnea/Irregular respirations."
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "Which medication is an osmotic diuretic used to dehydrate brain tissue and reduce cerebral edema?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Furosemide", "isCorrect": false },
                { "id": "b", "text": "Mannitol", "isCorrect": true },
                { "id": "c", "text": "Dexamethasone", "isCorrect": false },
                { "id": "d", "text": "Phenytoin", "isCorrect": false }
            ],
            "explanation": "Mannitol is the standard osmotic diuretic for lowering ICP."
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "According to the Monro-Kellie hypothesis, what are the three components inside the cranium?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Brain tissue, Blood, Skull bone", "isCorrect": false },
                { "id": "b", "text": "Brain tissue, Blood, CSF", "isCorrect": true },
                { "id": "c", "text": "CSF, Meninges, Blood", "isCorrect": false },
                { "id": "d", "text": "Brain tissue, Water, Lymph", "isCorrect": false }
            ],
            "explanation": "The cranial vault contains Brain tissue (80%), Blood (10%), and CSF (10%)."
        }
    ]
});