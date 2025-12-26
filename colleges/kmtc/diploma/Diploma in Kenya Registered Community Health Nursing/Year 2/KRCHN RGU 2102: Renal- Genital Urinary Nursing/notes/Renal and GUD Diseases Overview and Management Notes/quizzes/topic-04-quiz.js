registerQuiz("topic-04-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-04-quiz",
    "metadata": {
        "title": "Renal Failure Quiz",
        "description": "Assess understanding of ARF, CRF, and their management.",
        "topicId": "topic-04",
        "difficulty": "advanced",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2025-12-26T12:00:00Z"
    },
    "settings": {
        "shuffleQuestions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which of the following is a Pre-renal cause of Acute Renal Failure?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Calculi (Stones)", "isCorrect": false },
                { "id": "b", "text": "Hemorrhage/Shock", "isCorrect": true },
                { "id": "c", "text": "Acute Glomerulonephritis", "isCorrect": false },
                { "id": "d", "text": "Prostatic Hypertrophy", "isCorrect": false }
            ],
            "explanation": "Pre-renal causes involve reduced blood flow to the kidney (e.g., hemorrhage). Calculi/Prostate are Post-renal; Glomerulonephritis is Intra-renal."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the electrolyte imbalance with its complication in renal failure:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Hyperkalemia", "right": "Cardiac dysrhythmias" },
                { "id": "p2", "left": "Hypocalcemia", "right": "Renal bone disease" },
                { "id": "p3", "left": "Hypernatremia", "right": "Edema/Hypertension" },
                { "id": "p4", "left": "Hyperphosphatemia", "right": "Calcium resorption from bone" }
            ],
            "explanation": "Potassium affects the heart; Calcium/Phosphate imbalance affects bones; Sodium affects fluid balance."
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "During the oliguric phase of ARF, urine output is typically less than __b1__ mls per day.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["400", "400ml", "400 ml"], "caseSensitive": false }
            ],
            "explanation": "Oliguria is defined as urine output less than 400ml/day."
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "What dietary modification is crucial for a patient in Chronic Renal Failure?",
            "points": 10,
            "options": [
                { "id": "a", "text": "High Protein", "isCorrect": false },
                { "id": "b", "text": "High Potassium", "isCorrect": false },
                { "id": "c", "text": "Low Protein, High Calorie", "isCorrect": true },
                { "id": "d", "text": "Low Calorie", "isCorrect": false }
            ],
            "explanation": "Protein is restricted (1g/kg) to prevent urea accumulation; High calories spare protein breakdown."
        },
        {
            "id": "q5",
            "type": "multiple-select",
            "question": "Which interventions are used to treat Hyperkalemia? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "IV Glucose and Insulin", "isCorrect": true },
                { "id": "b", "text": "Kayexalate Enema", "isCorrect": true },
                { "id": "c", "text": "Calcium Gluconate", "isCorrect": true },
                { "id": "d", "text": "Potassium supplements", "isCorrect": false }
            ],
            "explanation": "Glucose/Insulin shifts K+ into cells; Kayexalate removes K+; Calcium Gluconate protects the heart."
        }
    ]
});