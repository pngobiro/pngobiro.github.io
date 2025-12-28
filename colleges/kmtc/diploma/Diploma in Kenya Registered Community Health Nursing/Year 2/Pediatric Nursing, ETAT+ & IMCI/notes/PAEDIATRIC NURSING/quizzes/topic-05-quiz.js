registerQuiz("topic-05-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-05-quiz",
    "metadata": {
        "title": "GI & Renal Conditions Quiz",
        "topicId": "topic-05",
        "difficulty": "intermediate",
        "estimatedTime": 8,
        "passingScore": 80,
        "createdAt": "2025-12-28T10:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "What is the recommended IV fluid for severe dehydration (shock) in children?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Normal Saline", "isCorrect": false },
                { "id": "b", "text": "Ringer's Lactate", "isCorrect": true },
                { "id": "c", "text": "Dextrose 5%", "isCorrect": false },
                { "id": "d", "text": "Plain water", "isCorrect": false }
            ],
            "explanation": "Ringer's Lactate is the fluid of choice for resuscitation in severe dehydration/shock (Plan C)."
        },
        {
            "id": "q2",
            "type": "multiple-select",
            "question": "Nephrotic syndrome is characterized by: (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Massive Proteinuria", "isCorrect": true },
                { "id": "b", "text": "Edema", "isCorrect": true },
                { "id": "c", "text": "Hyperlipidemia", "isCorrect": true },
                { "id": "d", "text": "Gross Hematuria", "isCorrect": false }
            ],
            "explanation": "Nephrotic syndrome triad: Proteinuria, Hypoalbuminemia/Edema, Hyperlipidemia. Hematuria is more common in Nephritic syndrome (AGN)."
        },
        {
            "id": "q3",
            "type": "true-false",
            "question": "Acute Glomerulonephritis (AGN) usually presents with tea-colored or 'smoky' urine.",
            "points": 10,
            "correctAnswer": true,
            "explanation": "Hematuria in AGN gives urine a characteristic tea, cola, or smoky appearance."
        },
        {
            "id": "q4",
            "type": "short-answer",
            "question": "Which bacteria is the most common cause of Urinary Tract Infections (UTI)?",
            "points": 10,
            "keywords": ["e. coli", "escherichia coli", "ecoli"],
            "modelAnswer": "Escherichia coli (E. coli)",
            "explanation": "E. coli is responsible for about 80% of UTIs."
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "A bulging fontanelle and high-pitched cry in an infant are classic signs of:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Dehydration", "isCorrect": false },
                { "id": "b", "text": "Meningitis", "isCorrect": true },
                { "id": "c", "text": "Pneumonia", "isCorrect": false },
                { "id": "d", "text": "UTI", "isCorrect": false }
            ],
            "explanation": "These signs indicate increased intracranial pressure and meningeal irritation."
        }
    ]
});