registerQuiz("topic-07-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-07-quiz",
    "metadata": {
        "title": "Urolithiasis Quiz",
        "description": "Assess knowledge on kidney stones management, diet, and interventions.",
        "topicId": "topic-07-urolithiasis",
        "difficulty": "advanced",
        "estimatedTime": 15,
        "passingScore": 75,
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
            "question": "What is the priority nursing intervention for a patient with renal colic?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Straining urine", "isCorrect": false },
                { "id": "b", "text": "Relief of pain", "isCorrect": true },
                { "id": "c", "text": "Dietary teaching", "isCorrect": false },
                { "id": "d", "text": "Measurement of urinary pH", "isCorrect": false }
            ],
            "explanation": "The immediate objective is to relieve the excruciating pain (colic) until the cause can be eliminated."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the stone type with the correct dietary recommendation:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Uric Acid Stones", "right": "Low-purine diet (avoid shellfish, organ meats)" },
                { "id": "p2", "left": "Calcium Oxalate Stones", "right": "Limit spinach, strawberries, chocolate" },
                { "id": "p3", "left": "Cystine Stones", "right": "Low-protein diet" }
            ]
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "Unless contraindicated, patients with renal stones should drink enough fluid to excrete greater than __1__ mL of urine every 24 hours.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["2000", "2000 ml", "2L"], "caseSensitive": false }
            ],
            "explanation": "A urine output exceeding 2000 mL/day is advisable to prevent stone formation."
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "Which procedure uses high-energy shock waves to fragment kidney stones non-invasively?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Ureteroscopy", "isCorrect": false },
                { "id": "b", "text": "Percutaneous Nephrolithotomy", "isCorrect": false },
                { "id": "c", "text": "ESWL (Extracorporeal Shock Wave Lithotripsy)", "isCorrect": true },
                { "id": "d", "text": "Chemolysis", "isCorrect": false }
            ],
            "explanation": "ESWL is a non-invasive procedure that uses shock waves to break stones into sand-like particles."
        }
    ]
});