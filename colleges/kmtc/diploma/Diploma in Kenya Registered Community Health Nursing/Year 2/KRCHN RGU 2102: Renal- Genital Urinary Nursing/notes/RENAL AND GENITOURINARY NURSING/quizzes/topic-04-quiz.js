registerQuiz("topic-04-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-04-quiz",
    "metadata": {
        "title": "Structural Disorders Quiz",
        "description": "Review Interstitial Cystitis, Hydronephrosis, and Strictures.",
        "topicId": "topic-04-structural-disorders",
        "difficulty": "intermediate",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2025-12-26T12:00:00Z"
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
            "question": "Which medication is used in Interstitial Cystitis to repair defects in the bladder lining?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Amitriptyline", "isCorrect": false },
                { "id": "b", "text": "Pentosan polysulfate sodium (Elmiron)", "isCorrect": true },
                { "id": "c", "text": "Ceftriaxone", "isCorrect": false },
                { "id": "d", "text": "Metronidazole", "isCorrect": false }
            ],
            "explanation": "Pentosan polysulfate sodium (Elmiron) repairs defects that might have developed in the lining of the urinary bladder."
        },
        {
            "id": "q2",
            "type": "true-false",
            "question": "In hydronephrosis, if the obstruction is in the urethra or bladder, only one kidney is affected.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "If the obstruction is in the urethra or the bladder, the back pressure affects BOTH kidneys."
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "The condition where one kidney undergoes gradual destruction while the other gradually enlarges is called __1__ hypertrophy.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["compensatory"], "caseSensitive": false }
            ],
            "explanation": "Compensatory hypertrophy occurs when the healthy kidney enlarges to compensate for the failing one."
        },
        {
            "id": "q4",
            "type": "multiple-select",
            "question": "What are common symptoms of Urethral Strictures?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Deflected urinary stream ('spraying')", "isCorrect": true },
                { "id": "b", "text": "Straining to void", "isCorrect": true },
                { "id": "c", "text": "Acute retention of urine", "isCorrect": true },
                { "id": "d", "text": "Polyuria", "isCorrect": false }
            ],
            "explanation": "Strictures cause obstructive symptoms like deflected stream, straining, and retention, not polyuria."
        }
    ]
});