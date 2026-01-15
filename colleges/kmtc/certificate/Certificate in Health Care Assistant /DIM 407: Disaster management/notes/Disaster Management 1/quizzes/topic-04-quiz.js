registerQuiz("topic-04-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-04-quiz",
    "metadata": {
        "title": "Mitigation and Preparedness",
        "description": "Assess your understanding of structural/non-structural mitigation and preparedness planning.",
        "topicId": "topic-04",
        "difficulty": "intermediate",
        "estimatedTime": 5,
        "passingScore": 70,
        "createdAt": "2025-12-25T12:00:00Z",
        "tags": ["mitigation", "preparedness", "drr"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate",
        "allowRetry": true,
        "showCorrectAnswers": true
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which of the following is considered 'Non-structural Mitigation'?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Building a dam", "isCorrect": false },
                { "id": "b", "text": "Land-use zoning and building codes", "isCorrect": true },
                { "id": "c", "text": "Constructing windbreaks", "isCorrect": false },
                { "id": "d", "text": "Terracing slopes", "isCorrect": false }
            ],
            "explanation": "Non-structural mitigation refers to policies, practices, and laws. Dams and construction are structural mitigation."
        },
        {
            "id": "q2",
            "type": "ordering",
            "question": "Place the levels of control for technological hazards in order from most effective to least effective:",
            "points": 15,
            "items": [
                { "id": "i1", "text": "Elimination", "correctPosition": 1 },
                { "id": "i2", "text": "Replacement", "correctPosition": 2 },
                { "id": "i3", "text": "Engineering Control", "correctPosition": 3 },
                { "id": "i4", "text": "Administrative Control", "correctPosition": 4 },
                { "id": "i5", "text": "Personal Protection", "correctPosition": 5 }
            ]
        },
        {
            "id": "q3",
            "type": "true-false",
            "question": "Disaster Risk Reduction (DRR) focuses solely on what happens *after* a disaster strikes.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "DRR is the pillar of preparedness and involves action plans implemented *before*, during, and after disasters to reduce vulnerability."
        }
    ]
});