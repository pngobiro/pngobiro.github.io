registerQuiz("topic-02-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-02-quiz",
    "metadata": {
        "title": "Assessment & Diagnostics Quiz",
        "description": "Evaluate your understanding of urinary symptoms and diagnostic tests.",
        "topicId": "topic-02",
        "difficulty": "beginner",
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
            "type": "matching",
            "question": "Match the term with its definition:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Dysuria", "right": "Difficulty/painful voiding" },
                { "id": "p2", "left": "Nocturia", "right": "Excessive urination at night" },
                { "id": "p3", "left": "Oliguria", "right": "Urine output < 500ml daily" },
                { "id": "p4", "left": "Polyuria", "right": "Urine output > 2500ml daily" }
            ],
            "explanation": "Dysuria=Pain; Nocturia=Night; Oliguria=Low output (<500ml); Polyuria=High output (>2500ml)."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "Which diagnostic test uses a radio-opaque contrast administered intravenously to visualize the kidneys and ureters via X-ray?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Cystoscopy", "isCorrect": false },
                { "id": "b", "text": "Intravenous Urography (IVP)", "isCorrect": true },
                { "id": "c", "text": "Renal Biopsy", "isCorrect": false },
                { "id": "d", "text": "Ultrasound", "isCorrect": false }
            ],
            "explanation": "Intravenous Urography (IVP) involves injecting contrast dye to visualize the urinary tract on X-ray."
        },
        {
            "id": "q3",
            "type": "true-false",
            "question": "Pyuria refers to the presence of blood in the urine.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "Pyuria refers to the presence of pus (WBCs) in the urine. Blood in urine is Hematuria."
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "__b1__ is the loss of urine without warning.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["Incontinence", "Urinary incontinence"], "caseSensitive": false }
            ],
            "explanation": "Incontinence is the involuntary loss of urine."
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "What specifically does a Cystogram (Cystography) evaluate?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Renal blood flow", "isCorrect": false },
                { "id": "b", "text": "Kidney stone composition", "isCorrect": false },
                { "id": "c", "text": "Vesico-urethral reflux", "isCorrect": true },
                { "id": "d", "text": "Glomerular filtration rate", "isCorrect": false }
            ],
            "explanation": "Cystography involves filling the bladder with contrast to check for backflow (reflux) or perforations."
        }
    ]
});