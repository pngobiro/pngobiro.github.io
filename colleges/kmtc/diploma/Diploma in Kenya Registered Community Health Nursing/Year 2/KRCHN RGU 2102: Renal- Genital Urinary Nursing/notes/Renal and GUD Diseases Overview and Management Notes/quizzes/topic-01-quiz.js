registerQuiz("topic-01-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-01-quiz",
    "metadata": {
        "title": "Anatomy Review Quiz",
        "description": "Test your knowledge of kidney structure, nephrons, and the RAAS pathway.",
        "topicId": "topic-01",
        "difficulty": "beginner",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2025-12-26T12:00:00Z"
    },
    "settings": {
        "shuffleQuestions": true,
        "showFeedback": "immediate",
        "allowRetry": true
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which part of the kidney contains the loops of Henle and collecting ducts?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Cortex", "isCorrect": false },
                { "id": "b", "text": "Medulla", "isCorrect": true },
                { "id": "c", "text": "Renal Pelvis", "isCorrect": false },
                { "id": "d", "text": "Adrenal Gland", "isCorrect": false }
            ],
            "explanation": "The medulla contains the loops of Henle, vasa recta, and collecting ducts, while the cortex is the outer layer."
        },
        {
            "id": "q2",
            "type": "ordering",
            "question": "Arrange the sequence of the Renin-Angiotensin pathway correctly:",
            "points": 20,
            "items": [
                { "id": "1", "text": "Renin release from macula densa", "correctPosition": 1 },
                { "id": "2", "text": "Angiotensinogen converts to Angiotensin I", "correctPosition": 2 },
                { "id": "3", "text": "ACE converts Angiotensin I to Angiotensin II", "correctPosition": 3 },
                { "id": "4", "text": "Vasoconstriction and Aldosterone release", "correctPosition": 4 }
            ],
            "explanation": "Renin converts Angiotensinogen to Ang I; ACE from lungs converts Ang I to Ang II, which triggers vasoconstriction and aldosterone."
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "The __b1__ are long fibro-muscular tubes connecting each kidney to the bladder.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["ureters", "ureter"], "caseSensitive": false }
            ],
            "explanation": "Ureters transport urine from the kidneys to the bladder."
        },
        {
            "id": "q4",
            "type": "multiple-select",
            "question": "Which of the following substances are filtered by the glomerulus and reabsorbed by the tubules? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Glucose", "isCorrect": true },
                { "id": "b", "text": "Amino Acids", "isCorrect": true },
                { "id": "c", "text": "Sodium", "isCorrect": true },
                { "id": "d", "text": "Red Blood Cells", "isCorrect": false }
            ],
            "explanation": "Glucose, amino acids, and sodium are filtered and reabsorbed. RBCs are typically too large to be filtered in a healthy kidney."
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "The bladder neck contains involuntary smooth muscles that form part of the urethral sphincter.",
            "points": 5,
            "correctAnswer": true,
            "explanation": "The bladder neck smooth muscles are involuntary."
        }
    ]
});