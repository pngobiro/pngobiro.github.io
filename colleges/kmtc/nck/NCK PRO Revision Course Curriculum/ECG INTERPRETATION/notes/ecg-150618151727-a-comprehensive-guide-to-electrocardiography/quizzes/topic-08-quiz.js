
registerQuiz("topic-08-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-08-quiz",
    "metadata": {
        "title": "ST, T Wave & QT",
        "description": "Test your knowledge of repolarisation abnormalities, intervals, and electrolytes.",
        "topicId": "topic-08",
        "difficulty": "intermediate",
        "estimatedTime": 10,
        "passingScore": 80,
        "createdAt": "2026-01-20T00:00:00Z"
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate",
        "allowRetry": true
    },
    "questions": [
        {
            "id": "q1-st-normal",
            "type": "true-false",
            "question": "The ST segment should normally sit on the isoelectric line.",
            "points": 1,
            "correctAnswer": true,
            "explanation": "True. Deviations (elevation or depression) from the isoelectric line are abnormal."
        },
        {
            "id": "q2-pericarditis",
            "type": "multiple-select",
            "question": "Which of the following are ECG features of Pericarditis? (Select all that apply)",
            "points": 2,
            "options": [
                { "id": "op1", "text": "Raised ST segments in most leads", "isCorrect": true },
                { "id": "op2", "text": "Saddle-shaped ST elevation", "isCorrect": true },
                { "id": "op3", "text": "PR segment depression", "isCorrect": true },
                { "id": "op4", "text": "Deep Q waves", "isCorrect": false }
            ],
            "explanation": "Pericarditis typically shows widespread saddle-shaped ST elevation and PR depression."
        },
        {
            "id": "q3-t-wave-matching",
            "type": "matching",
            "question": "Match the T Wave morphology to its potential cause.",
            "points": 3,
            "pairs": [
                { "id": "p1", "left": "Tall / Peaked", "right": "Hyperkalaemia / Acute MI" },
                { "id": "p2", "left": "Flat", "right": "Hypokalaemia" },
                { "id": "p3", "left": "Inverted", "right": "Ischaemia" }
            ],
            "explanation": "Tall=HyperK/MI. Flat=HypoK. Inverted=Ischaemia."
        },
        {
            "id": "q4-qtc-formula",
            "type": "multiple-choice",
            "question": "Which formula is used to calculate the Corrected QT (QTc) interval?",
            "points": 1,
            "options": [
                { "id": "op1", "text": "QT divided by square root of RR", "isCorrect": true },
                { "id": "op2", "text": "QT multiplied by RR", "isCorrect": false },
                { "id": "op3", "text": "QT minus RR", "isCorrect": false },
                { "id": "op4", "text": "QT divided by Heart Rate", "isCorrect": false }
            ],
            "explanation": "Bazett's formula: QTc = QT / √RR."
        },
        {
            "id": "q5-u-wave",
            "type": "multiple-select",
            "question": "Prominent U waves can be a sign of which conditions? (Select all that apply)",
            "points": 1,
            "options": [
                { "id": "op1", "text": "Hypokalaemia", "isCorrect": true },
                { "id": "op2", "text": "Hyperthyroidism", "isCorrect": true },
                { "id": "op3", "text": "Hyperkalaemia", "isCorrect": false },
                { "id": "op4", "text": "Hypothyroidism", "isCorrect": false }
            ],
            "explanation": "U waves are associated with Hypokalaemia and Hyperthyroidism."
        }
    ]
});