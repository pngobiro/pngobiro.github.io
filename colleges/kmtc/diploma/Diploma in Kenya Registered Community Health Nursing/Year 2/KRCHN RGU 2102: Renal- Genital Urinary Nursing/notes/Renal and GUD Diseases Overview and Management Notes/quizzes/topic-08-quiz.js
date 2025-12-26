registerQuiz("topic-08-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-08-quiz",
    "metadata": {
        "title": "Renal Tumors Quiz",
        "description": "Assess understanding of Prostate, Bladder, and Kidney cancers.",
        "topicId": "topic-08",
        "difficulty": "intermediate",
        "estimatedTime": 10,
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
            "question": "What is the most predominant risk factor for Bladder Cancer?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Alcohol", "isCorrect": false },
                { "id": "b", "text": "Cigarette Smoking", "isCorrect": true },
                { "id": "c", "text": "Obesity", "isCorrect": false },
                { "id": "d", "text": "Diabetes", "isCorrect": false }
            ],
            "explanation": "Cigarette smoking is the most predominant cause of bladder cancer."
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "The most common presenting symptom of bladder cancer is painless __b1__.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["hematuria"], "caseSensitive": false }
            ],
            "explanation": "Painless hematuria is the hallmark sign of bladder cancer."
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "Which hormone stimulates the growth of Prostate Cancer?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Estrogen", "isCorrect": false },
                { "id": "b", "text": "Testosterone", "isCorrect": true },
                { "id": "c", "text": "Progesterone", "isCorrect": false },
                { "id": "d", "text": "Thyroxine", "isCorrect": false }
            ],
            "explanation": "Prostate cancer is an androgen-dependent tumor stimulated by testosterone."
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "A digital rectal exam (DRE) for prostate cancer typically reveals a soft, tender gland.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "False. DRE in cancer reveals a stony hard, fixed nodule. BPH reveals a rubbery, non-tender gland."
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "What urinary diversion involves a reservoir connected to the urethra, allowing natural voiding?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Continent Cutaneous Diversion", "isCorrect": false },
                { "id": "b", "text": "Orthotopic Neo-bladder", "isCorrect": true },
                { "id": "c", "text": "Ileal Conduit", "isCorrect": false },
                { "id": "d", "text": "Nephrostomy", "isCorrect": false }
            ],
            "explanation": "An Orthotopic Neo-bladder connects to the urethra, allowing the patient to void by relaxing pelvic muscles."
        }
    ]
});