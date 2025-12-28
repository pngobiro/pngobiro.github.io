registerQuiz("topic-04-carcinoma-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-04-carcinoma-quiz",
    "metadata": {
        "title": "Lung Cancer Quiz",
        "description": "Test understanding of lung carcinoma types and symptoms.",
        "topicId": "topic-04",
        "difficulty": "intermediate",
        "estimatedTime": 8,
        "passingScore": 70,
        "createdAt": "2025-12-28T10:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "What is the most common early symptom of lung cancer?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Severe chest pain", "isCorrect": false },
                { "id": "b", "text": "Cough or change in chronic cough", "isCorrect": true },
                { "id": "c", "text": "Dysphagia", "isCorrect": false },
                { "id": "d", "text": "Hoarseness", "isCorrect": false }
            ],
            "explanation": "A persistent cough or a change in the character of a chronic cough is the most frequent early sign."
        },
        {
            "id": "q2",
            "type": "multiple-select",
            "question": "Which of the following are common sites for lung cancer metastasis? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Brain", "isCorrect": true },
                { "id": "b", "text": "Liver", "isCorrect": true },
                { "id": "c", "text": "Bone", "isCorrect": true },
                { "id": "d", "text": "Adrenal Glands", "isCorrect": true }
            ],
            "explanation": "Lung cancer commonly spreads to the lymph nodes, bone, brain, contralateral lung, adrenal glands, and liver."
        },
        {
            "id": "q3",
            "type": "true-false",
            "question": "Small Cell Lung Cancer (SCLC) accounts for approximately 80% of all lung tumors.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "Non-Small Cell Lung Cancer (NSCLC) accounts for about 80%. SCLC accounts for 15-20%."
        }
    ]
});