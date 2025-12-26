registerQuiz("topic-06-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-06-quiz",
    "metadata": {
        "title": "Renal Infections Quiz",
        "description": "Assess knowledge on Pyelonephritis, UTI, and Renal Tuberculosis.",
        "topicId": "topic-06-infections",
        "difficulty": "beginner",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2025-12-26T10:00:00Z"
    },
    "settings": {
        "shuffleQuestions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which physical examination finding is most specific for Acute Pyelonephritis?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Suprapubic tenderness", "isCorrect": false },
                { "id": "b", "text": "Renal angle tenderness", "isCorrect": true },
                { "id": "c", "text": "Abdominal distension", "isCorrect": false },
                { "id": "d", "text": "Rebound tenderness", "isCorrect": false }
            ],
            "explanation": "Tenderness at the renal angle (costovertebral angle) is the hallmark sign."
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "Renal Tuberculosis typically presents with __b1__ pyuria, meaning pus cells are present but standard culture is negative.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["sterile"], "caseSensitive": false }
            ],
            "explanation": "Sterile pyuria is a classic sign of Renal TB."
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "What is the definition of a Urinary Tract Infection (UTI)?",
            "points": 10,
            "options": [
                { "id": "a", "text": "> 1,000 organisms/ml", "isCorrect": false },
                { "id": "b", "text": "> 10,000 organisms/ml", "isCorrect": false },
                { "id": "c", "text": "> 100,000 organisms/ml", "isCorrect": true },
                { "id": "d", "text": "Any bacteria present", "isCorrect": false }
            ],
            "explanation": "UTI is defined as the presence of more than 100,000 organisms per ml in a midstream urine sample."
        },
        {
            "id": "q4",
            "type": "multiple-select",
            "question": "Which of the following are predisposing factors for Pyelonephritis?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Pregnancy", "isCorrect": true },
                { "id": "b", "text": "Calculi (Stones)", "isCorrect": true },
                { "id": "c", "text": "Short urethra (Female)", "isCorrect": true },
                { "id": "d", "text": "High fluid intake", "isCorrect": false }
            ]
        }
    ]
});