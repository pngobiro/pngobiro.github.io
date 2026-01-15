registerQuiz("topic-02-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-02-quiz",
    "metadata": {
        "title": "Pyelonephritis Quiz",
        "description": "Assess your understanding of acute and chronic kidney infections.",
        "topicId": "topic-02-kidney-disorders",
        "difficulty": "intermediate",
        "estimatedTime": 12,
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
            "question": "What is Pyelonephritis?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Inflammation of the bladder", "isCorrect": false },
                { "id": "b", "text": "Bacterial infection of the renal pelvis, tubules, and interstitial tissue", "isCorrect": true },
                { "id": "c", "text": "Obstruction of the urethra", "isCorrect": false },
                { "id": "d", "text": "Formation of kidney stones", "isCorrect": false }
            ],
            "explanation": "Pyelonephritis is a bacterial infection affecting the kidney's renal pelvis, tubules, and interstitial tissue."
        },
        {
            "id": "q2",
            "type": "multiple-select",
            "question": "Select the clinical manifestations of Acute Pyelonephritis:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Chills and Fever", "isCorrect": true },
                { "id": "b", "text": "Costovertebral angle tenderness", "isCorrect": true },
                { "id": "c", "text": "Leukocytosis", "isCorrect": true },
                { "id": "d", "text": "Painless hematuria", "isCorrect": false }
            ],
            "explanation": "Acute pyelonephritis presents with systemic signs like fever/chills and local signs like flank pain and CVA tenderness."
        },
        {
            "id": "q3",
            "type": "true-false",
            "question": "Chronic pyelonephritis often presents with no symptoms of infection unless an acute exacerbation occurs.",
            "points": 10,
            "correctAnswer": true,
            "explanation": "The patient with chronic pyelonephritis usually has no symptoms of infection unless an acute exacerbation occurs; signs are often vague like fatigue and weight loss."
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "Unless contraindicated, patients with pyelonephritis are encouraged to drink __1__ to __2__ liters of fluid per day.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["3"], "caseSensitive": false },
                { "id": "2", "acceptedAnswers": ["4"], "caseSensitive": false }
            ],
            "explanation": "3 to 4 L of fluids per day is encouraged to dilute the urine, decrease burning, and prevent dehydration."
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "Which of the following is a complication of chronic pyelonephritis?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Hypotension", "isCorrect": false },
                { "id": "b", "text": "End-stage renal disease (ESRD)", "isCorrect": true },
                { "id": "c", "text": "Bladder rupture", "isCorrect": false },
                { "id": "d", "text": "Diabetes Mellitus", "isCorrect": false }
            ],
            "explanation": "Chronic pyelonephritis causes scarring and contraction of the kidneys, potentially leading to End-stage renal disease (ESRD)."
        }
    ]
});