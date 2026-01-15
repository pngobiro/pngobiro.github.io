registerQuiz("topic-02-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-02-quiz",
    "metadata": {
        "title": "Acute Renal Failure Quiz",
        "description": "Assess understanding of ARF etiology, symptoms, and emergency management.",
        "topicId": "topic-02-acute-failure",
        "difficulty": "intermediate",
        "estimatedTime": 20,
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
            "type": "fill-blank",
            "question": "Acute renal failure is characterized by oliguria, defined as urine output less than __b1__ ml per 24 hours.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["500", "500ml", "500 ml"], "caseSensitive": false }
            ],
            "explanation": "Oliguria is clinically defined as <500ml/day in adults."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Classify the following causes of Acute Renal Failure:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Severe Hemorrhage", "right": "Pre-renal" },
                { "id": "p2", "left": "Acute Glomerulonephritis", "right": "Renal (Intrinsic)" },
                { "id": "p3", "left": "Benign Prostatic Hypertrophy", "right": "Post-renal" },
                { "id": "p4", "left": "Calculi (Stones)", "right": "Post-renal" }
            ]
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "Which electrolyte imbalance in ARF poses the immediate risk of cardiac arrest?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Hyponatremia", "isCorrect": false },
                { "id": "b", "text": "Hyperkalemia", "isCorrect": true },
                { "id": "c", "text": "Hypocalcemia", "isCorrect": false },
                { "id": "d", "text": "Hyperphosphatemia", "isCorrect": false }
            ],
            "explanation": "Hyperkalemia (high potassium) can cause fatal arrhythmias and cardiac arrest."
        },
        {
            "id": "q4",
            "type": "ordering",
            "question": "Order the management steps for severe hyperkalemia:",
            "points": 15,
            "items": [
                { "id": "i1", "text": "Restrict dietary potassium", "correctPosition": 1 },
                { "id": "i2", "text": "Administer potassium binding agents", "correctPosition": 2 },
                { "id": "i3", "text": "Give Insulin + Dextrose (intracellular shift)", "correctPosition": 3 },
                { "id": "i4", "text": "Institute Dialysis", "correctPosition": 4 }
            ]
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "Which vasodilator is used in small doses (1-5 mcg/kg/min) to improve renal perfusion?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Adrenaline", "isCorrect": false },
                { "id": "b", "text": "Dopamine", "isCorrect": true },
                { "id": "c", "text": "Dobutamine", "isCorrect": false },
                { "id": "d", "text": "Noradrenaline", "isCorrect": false }
            ],
            "explanation": "Low-dose Dopamine causes selective dilation of renal vasculature."
        }
    ]
});