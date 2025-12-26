registerQuiz("topic-01-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-01-quiz",
    "metadata": {
        "title": "Physiology & Assessment Quiz",
        "description": "Test your knowledge of renal blood flow, filtration, and diagnostic investigations.",
        "topicId": "topic-01-physiology",
        "difficulty": "beginner",
        "estimatedTime": 15,
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
            "question": "Which of the following conditions would result in **reduced** glomerular filtration rate (GFR)?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Increased glomerular hydrostatic pressure", "isCorrect": false },
                { "id": "b", "text": "Decreased plasma oncotic pressure", "isCorrect": false },
                { "id": "c", "text": "Hypotension (Reduced hydrostatic pressure)", "isCorrect": true },
                { "id": "d", "text": "Increased renal blood flow", "isCorrect": false }
            ],
            "explanation": "GFR drops when glomerular hydrostatic pressure is reduced (e.g., hypotension) or when Bowman's space pressure increases (e.g., obstruction)."
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "The normal specific gravity of urine is approximately __b1__.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["1.010", "1.01", "1.005-1.030"], "caseSensitive": false }
            ],
            "explanation": "Normal specific gravity is around 1.010. Low values may indicate inability to concentrate urine."
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "Select all the correct functions of the kidney:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Regulation of electrolytes", "isCorrect": true },
                { "id": "b", "text": "Excretion of metabolic waste (urea)", "isCorrect": true },
                { "id": "c", "text": "Production of Albumin", "isCorrect": false },
                { "id": "d", "text": "Production of Erythropoietin", "isCorrect": true },
                { "id": "e", "text": "Acid-base balance maintenance", "isCorrect": true }
            ],
            "partialCredit": true,
            "explanation": "The kidney regulates electrolytes, acid-base balance, excretes waste, and produces hormones like erythropoietin. Albumin is produced by the liver."
        },
        {
            "id": "q4",
            "type": "matching",
            "question": "Match the type of cast found in urine microscopy to its clinical significance:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Red Blood Cell Casts", "right": "Glomerulonephritis" },
                { "id": "p2", "left": "White Blood Cell Casts", "right": "Pyelonephritis" },
                { "id": "p3", "left": "Waxy Casts", "right": "Advanced Renal Failure" },
                { "id": "p4", "left": "Hyaline Casts", "right": "Abnormal slow urine flow" }
            ]
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "The presence of Nitrates in urine is a strong indicator of a urinary tract infection.",
            "points": 5,
            "correctAnswer": true,
            "explanation": "Bacteria in the urine convert nitrates into nitrites, making this a useful screening test for UTI."
        }
    ]
});