
registerQuiz("topic-07-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-07-quiz",
    "metadata": {
        "title": "The QRS Complex",
        "description": "Test your ability to identify pathological Q waves, calculate LVH, and distinguish Bundle Branch Blocks.",
        "topicId": "topic-07",
        "difficulty": "advanced",
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
            "id": "q1-q-wave-criteria",
            "type": "multiple-select",
            "question": "Which of the following are criteria for a PATHOLOGICAL Q wave? (Select all that apply)",
            "points": 2,
            "options": [
                { "id": "op1", "text": "Deeper than 2 small squares (0.2mV)", "isCorrect": true },
                { "id": "op2", "text": "Wider than 1 small square (0.04s)", "isCorrect": true },
                { "id": "op3", "text": "Present in Lead III only", "isCorrect": false },
                { "id": "op4", "text": "Height less than 1mm", "isCorrect": false }
            ],
            "explanation": "Pathological Q waves are deep (>0.2mV) and wide (>0.04s). Small Qs can be normal in leads like III, aVL, V5, V6."
        },
        {
            "id": "q2-lvh-calc",
            "type": "fill-blank",
            "question": "Left Ventricular Hypertrophy (LVH) is present if the depth of S in V1 plus the height of R in V6 is greater than __b1__ mm.",
            "points": 2,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["35"], "caseSensitive": false }
            ],
            "explanation": "The Sokolow-Lyon criteria states SV1 + RV6 > 35mm."
        },
        {
            "id": "q3-qrs-limit",
            "type": "multiple-choice",
            "question": "What is the upper limit for a normal QRS width?",
            "points": 1,
            "options": [
                { "id": "op1", "text": "0.12 seconds (3 small squares)", "isCorrect": true },
                { "id": "op2", "text": "0.20 seconds (5 small squares)", "isCorrect": false },
                { "id": "op3", "text": "0.08 seconds (2 small squares)", "isCorrect": false },
                { "id": "op4", "text": "0.04 seconds (1 small square)", "isCorrect": false }
            ],
            "explanation": "Normal QRS width should be less than 0.12 seconds. Wider implies a conduction block."
        },
        {
            "id": "q4-willam-marrow",
            "type": "matching",
            "question": "Match the Bundle Branch Block to its pattern using the 'WiLLaM MaRRoW' mnemonic.",
            "points": 4,
            "pairs": [
                { "id": "p1", "left": "LBBB - V1", "right": "W shape" },
                { "id": "p2", "left": "LBBB - V6", "right": "M shape" },
                { "id": "p3", "left": "RBBB - V1", "right": "M shape (RSR)" },
                { "id": "p4", "left": "RBBB - V6", "right": "W shape" }
            ],
            "explanation": "William: LBBB (V1=W, V6=M). Marrow: RBBB (V1=M, V6=W)."
        },
        {
            "id": "q5-lbbb-risk",
            "type": "multiple-choice",
            "question": "What is the clinical significance of a NEW ONSET Left Bundle Branch Block (LBBB) accompanied by chest pain?",
            "points": 1,
            "options": [
                { "id": "op1", "text": "Consider Myocardial Infarction", "isCorrect": true },
                { "id": "op2", "text": "Consider Pulmonary Embolism", "isCorrect": false },
                { "id": "op3", "text": "It is a normal finding in elderly patients", "isCorrect": false },
                { "id": "op4", "text": "It indicates Hyperkalemia", "isCorrect": false }
            ],
            "explanation": "New LBBB with chest pain is treated as a STEMI (Myocardial Infarction) until proven otherwise."
        }
    ]
});