registerQuiz("topic-06-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-06-quiz",
    "metadata": {
        "title": "Renal Calculi Quiz",
        "description": "Evaluate understanding of kidney stones, types, and management.",
        "topicId": "topic-06",
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
            "question": "Which type of renal calculi is most common?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Uric Acid stones", "isCorrect": false },
                { "id": "b", "text": "Calcium stones", "isCorrect": true },
                { "id": "c", "text": "Struvite stones", "isCorrect": false },
                { "id": "d", "text": "Cystine stones", "isCorrect": false }
            ],
            "explanation": "Calcium stones (oxalate/phosphate) account for 75-80% of cases."
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "Patients with uric acid stones should be on a diet low in __b1__.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["purines", "meat", "purine"], "caseSensitive": false }
            ],
            "explanation": "Purines (found in meat, fish, poultry) break down into uric acid."
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "What is the hallmark symptom of renal calculi?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Painless hematuria", "isCorrect": false },
                { "id": "b", "text": "Renal Colic (severe flank pain)", "isCorrect": true },
                { "id": "c", "text": "Polyuria", "isCorrect": false },
                { "id": "d", "text": "Proteinuria", "isCorrect": false }
            ],
            "explanation": "Renal colic is excruciating, intermittent pain in the flank radiating to the groin."
        },
        {
            "id": "q4",
            "type": "multiple-select",
            "question": "Which of the following are predisposing factors for renal calculi? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Dehydration", "isCorrect": true },
                { "id": "b", "text": "Immobility", "isCorrect": true },
                { "id": "c", "text": "Hypercalcemia", "isCorrect": true },
                { "id": "d", "text": "High fluid intake", "isCorrect": false }
            ],
            "explanation": "Dehydration concentrates urine; immobility releases bone calcium; hypercalcemia increases calcium load. High fluid intake prevents stones."
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "Struvite stones are associated with urinary tract infections caused by urea-splitting bacteria.",
            "points": 5,
            "correctAnswer": true,
            "explanation": "Struvite stones form in alkaline urine caused by bacteria like Proteus."
        }
    ]
});