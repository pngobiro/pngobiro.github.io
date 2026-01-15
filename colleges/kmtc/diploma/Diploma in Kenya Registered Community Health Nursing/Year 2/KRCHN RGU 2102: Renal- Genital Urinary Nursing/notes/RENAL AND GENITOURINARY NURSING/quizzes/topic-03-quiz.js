registerQuiz("topic-03-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-03-quiz",
    "metadata": {
        "title": "Renal Failure Quiz",
        "description": "Test your knowledge on ARF phases, causes, and critical management.",
        "topicId": "topic-03-renal-failure",
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
            "type": "matching",
            "question": "Match the category of ARF with its description:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Pre-renal", "right": "Hypoperfusion of the kidney (e.g., Haemorrhage)" },
                { "id": "p2", "left": "Intra-renal", "right": "Actual damage to kidney tissue (e.g., Nephrotoxins)" },
                { "id": "p3", "left": "Post-renal", "right": "Obstruction to urine flow (e.g., Stones)" }
            ]
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "Which phase of ARF is characterized by the inability to excrete metabolic wastes and the development of hyperkalemia?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Initiation Phase", "isCorrect": false },
                { "id": "b", "text": "Oliguria Phase", "isCorrect": true },
                { "id": "c", "text": "Diuresis Phase", "isCorrect": false },
                { "id": "d", "text": "Recovery Phase", "isCorrect": false }
            ],
            "explanation": "The oliguria phase is accompanied by an increase in serum concentration of substances usually excreted by the kidneys and is when life-threatening hyperkalemia develops."
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "The most immediate life-threatening electrolyte imbalance seen in ARF is __1__.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["hyperkalemia", "hyperkalaemia", "high potassium"], "caseSensitive": false }
            ],
            "explanation": "Hyperkalemia (high potassium) can lead to fatal dysrhythmias and cardiac arrest."
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "Which medication acts by exchanging sodium ions for potassium ions in the intestinal tract?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Insulin", "isCorrect": false },
                { "id": "b", "text": "Calcium Gluconate", "isCorrect": false },
                { "id": "c", "text": "Kayexalate (Sodium polystyrene sulfonate)", "isCorrect": true },
                { "id": "d", "text": "Furosemide", "isCorrect": false }
            ],
            "explanation": "Kayexalate is a cation-exchange resin that removes potassium from the body via the stool."
        },
        {
            "id": "q5",
            "type": "ordering",
            "question": "Order the phases of Acute Renal Failure:",
            "points": 10,
            "items": [
                { "id": "i1", "text": "Initiation", "correctPosition": 1 },
                { "id": "i2", "text": "Oliguria", "correctPosition": 2 },
                { "id": "i3", "text": "Diuresis", "correctPosition": 3 },
                { "id": "i4", "text": "Recovery", "correctPosition": 4 }
            ]
        }
    ]
});