registerQuiz("topic-04-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-04-quiz",
    "metadata": {
        "title": "Glomerulonephritis Quiz",
        "description": "Assess knowledge on AGN vs CGN, post-streptococcal complications, and management.",
        "topicId": "topic-04-glomerulonephritis",
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
            "type": "multiple-choice",
            "question": "Which bacteria is the most common cause of Acute Glomerulonephritis in children?",
            "points": 10,
            "options": [
                { "id": "a", "text": "E. Coli", "isCorrect": false },
                { "id": "b", "text": "Group A Beta-hemolytic Streptococcus", "isCorrect": true },
                { "id": "c", "text": "Staphylococcus Aureus", "isCorrect": false },
                { "id": "d", "text": "Klebsiella", "isCorrect": false }
            ],
            "explanation": "It typically follows a pharyngeal or cutaneous infection with Group A Beta-hemolytic strep."
        },
        {
            "id": "q2",
            "type": "multiple-select",
            "question": "Identify the classic clinical features of Acute Glomerulonephritis:",
            "points": 15,
            "options": [
                { "id": "a", "text": "Puffy face (especially morning)", "isCorrect": true },
                { "id": "b", "text": "Coca-cola colored urine", "isCorrect": true },
                { "id": "c", "text": "Massive proteinuria (>3.5g)", "isCorrect": false },
                { "id": "d", "text": "Hypertension", "isCorrect": true },
                { "id": "e", "text": "Renal angle tenderness", "isCorrect": true }
            ],
            "explanation": "Massive proteinuria is a sign of Nephrotic Syndrome. AGN presents with hematuria (cola urine), edema, and HTN."
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "In Chronic Glomerulonephritis, the presence of __b1__ casts in urine microscopy is typical.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["hyaline"], "caseSensitive": false }
            ],
            "explanation": "Hyaline casts are typical of Chronic Glomerulonephritis."
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "In the management of AGN, fluids should be forced (given in large amounts) regardless of urine output.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "Fluids are given only where total urine output is more than 500mls. If oliguric, fluids are restricted to prevent overload."
        }
    ]
});