registerQuiz("topic-03-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-03-quiz",
    "metadata": {
        "title": "Chronic Renal Failure Quiz",
        "description": "Test your knowledge on CKD stages, symptoms of uremia, and long-term management.",
        "topicId": "topic-03-chronic-failure",
        "difficulty": "intermediate",
        "estimatedTime": 25,
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
            "question": "Chronic Kidney Disease Stage 5 (Kidney Failure) is defined by a GFR of less than:",
            "points": 10,
            "options": [
                { "id": "a", "text": "60 ml/min", "isCorrect": false },
                { "id": "b", "text": "30 ml/min", "isCorrect": false },
                { "id": "c", "text": "15 ml/min", "isCorrect": true },
                { "id": "d", "text": "90 ml/min", "isCorrect": false }
            ],
            "explanation": "Stage 5 (End Stage Renal Disease) is GFR < 15 ml/min/1.73m²."
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "The primary cause of renal osteodystrophy is the kidney's failure to activate Vitamin __b1__ and excrete __b2__.",
            "points": 15,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["d"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["phosphate", "phosphorus"], "caseSensitive": false }
            ],
            "explanation": "Failure to activate Vitamin D leads to hypocalcemia, while phosphate retention leads to hyperparathyroidism."
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "Which of the following are symptoms of advanced Uremia?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Hiccups", "isCorrect": true },
                { "id": "b", "text": "Restless legs syndrome", "isCorrect": true },
                { "id": "c", "text": "Metallic taste / Bitter saliva", "isCorrect": true },
                { "id": "d", "text": "Increased energy", "isCorrect": false },
                { "id": "e", "text": "Pruritus (Itching)", "isCorrect": true }
            ],
            "partialCredit": true
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "Urine output is a reliable guide to renal function in chronic kidney disease.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "False. Failure of tubular reabsorption can lead to high urine volumes even when GFR is profoundly depressed."
        },
        {
            "id": "q5",
            "type": "short-answer",
            "question": "Why does anemia occur in chronic renal failure?",
            "points": 15,
            "keywords": ["erythropoietin", "epo", "bone marrow", "production"],
            "minKeywords": 2,
            "modelAnswer": "Anemia occurs due to reduced production of Erythropoietin (EPO) by the kidneys, which normally stimulates the bone marrow to produce red blood cells.",
            "maxLength": 200
        }
    ]
});