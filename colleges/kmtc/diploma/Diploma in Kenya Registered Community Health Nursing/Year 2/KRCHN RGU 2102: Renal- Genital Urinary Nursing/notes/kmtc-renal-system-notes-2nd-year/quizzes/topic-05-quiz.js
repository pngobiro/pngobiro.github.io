registerQuiz("topic-05-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-05-quiz",
    "metadata": {
        "title": "Nephrotic Syndrome Quiz",
        "description": "Test understanding of the nephrotic tetrad, pathogenesis of edema, and complications.",
        "topicId": "topic-05-nephrotic-syndrome",
        "difficulty": "intermediate",
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
            "type": "multiple-select",
            "question": "Which of the following are part of the 'Tetrad' of Nephrotic Syndrome?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Massive Proteinuria", "isCorrect": true },
                { "id": "b", "text": "Hematuria", "isCorrect": false },
                { "id": "c", "text": "Hyponatremia", "isCorrect": true },
                { "id": "d", "text": "Massive Edema", "isCorrect": true },
                { "id": "e", "text": "Hypercholesterolemia", "isCorrect": true }
            ],
            "explanation": "The tetrad consists of Proteinuria, Hyponatremia, Edema, and Hypercholesterolemia. Hematuria is more typical of Nephritic syndrome."
        },
        {
            "id": "q2",
            "type": "short-answer",
            "question": "Why do patients with Nephrotic Syndrome develop hypercholesterolemia?",
            "points": 15,
            "keywords": ["lipoprotein", "loss", "protein", "urine"],
            "minKeywords": 2,
            "modelAnswer": "It occurs due to increased loss of lipoproteins (which transport lipids) in the urine, stimulating the liver to produce more lipids.",
            "maxLength": 200
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "Patients with Nephrotic Syndrome are at risk of thromboembolism due to the urinary loss of __b1__.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["antithrombin iii", "antithrombin 3", "heparin cofactor"], "caseSensitive": false }
            ],
            "explanation": "Loss of Antithrombin III (Heparin co-factor) increases coagulability."
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "What is the threshold for proteinuria in Nephrotic Syndrome per 24 hours?",
            "points": 10,
            "options": [
                { "id": "a", "text": "> 1.5g", "isCorrect": false },
                { "id": "b", "text": "> 2.0g", "isCorrect": false },
                { "id": "c", "text": "> 3.0g", "isCorrect": false },
                { "id": "d", "text": "> 3.5g", "isCorrect": true }
            ],
            "explanation": "Nephrotic range proteinuria is defined as > 3.5g/24hrs."
        }
    ]
});