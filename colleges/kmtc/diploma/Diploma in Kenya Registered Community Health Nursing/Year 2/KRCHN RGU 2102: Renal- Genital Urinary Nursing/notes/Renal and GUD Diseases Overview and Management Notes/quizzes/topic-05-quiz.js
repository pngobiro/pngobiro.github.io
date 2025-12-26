registerQuiz("topic-05-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-05-quiz",
    "metadata": {
        "title": "Dialysis Quiz",
        "description": "Test your knowledge on hemodialysis and peritoneal dialysis.",
        "topicId": "topic-05",
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
            "question": "What is the preferred type of vascular access for long-term hemodialysis?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Arteriovenous (AV) Fistula", "isCorrect": true },
                { "id": "b", "text": "Vascular Access Catheter", "isCorrect": false },
                { "id": "c", "text": "Peripheral IV", "isCorrect": false },
                { "id": "d", "text": "Arteriovenous Graft", "isCorrect": false }
            ],
            "explanation": "An AV Fistula is preferred for long-term use due to lower infection rates and longevity."
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "The fluid infused into the abdominal cavity during peritoneal dialysis is called __b1__.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["dialysate"], "caseSensitive": false }
            ],
            "explanation": "Dialysate is the solution containing glucose and salts used for exchange."
        },
        {
            "id": "q3",
            "type": "ordering",
            "question": "Order the phases of a Peritoneal Dialysis exchange:",
            "points": 15,
            "items": [
                { "id": "1", "text": "Inflow (Fill)", "correctPosition": 1 },
                { "id": "2", "text": "Dwell (Equilibrium)", "correctPosition": 2 },
                { "id": "3", "text": "Drain (Emptying)", "correctPosition": 3 }
            ],
            "explanation": "Fluid flows in, dwells to allow exchange, then drains out."
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "Why is dialysate warmed before infusion in Peritoneal Dialysis?",
            "points": 10,
            "options": [
                { "id": "a", "text": "To kill bacteria", "isCorrect": false },
                { "id": "b", "text": "To dilate vessels and prevent chilling", "isCorrect": true },
                { "id": "c", "text": "To activate the glucose", "isCorrect": false },
                { "id": "d", "text": "To prevent clotting", "isCorrect": false }
            ],
            "explanation": "Warming prevents patient chilling and dilates peritoneal vessels to facilitate exchange."
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "Hypotension is a common complication of hemodialysis due to rapid fluid removal.",
            "points": 5,
            "correctAnswer": true,
            "explanation": "Rapid removal of fluid from the vascular compartment often causes low blood pressure."
        }
    ]
});