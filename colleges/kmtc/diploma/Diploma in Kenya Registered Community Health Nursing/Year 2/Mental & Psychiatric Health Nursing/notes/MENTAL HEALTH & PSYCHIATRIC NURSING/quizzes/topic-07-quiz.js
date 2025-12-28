registerQuiz("topic-07-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-07-quiz",
    "metadata": {
        "title": "Childhood & Substance Disorders Quiz",
        "description": "Test knowledge on Autism, ADHD, and Addiction.",
        "topicId": "topic-07",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2025-12-28T12:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which of the following is a core characteristic of Autism Spectrum Disorder?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Excessive fear of separation", "isCorrect": false },
                { "id": "b", "text": "Deficits in social communication and interaction", "isCorrect": true },
                { "id": "c", "text": "Hallucinations", "isCorrect": false },
                { "id": "d", "text": "Disregard for rules", "isCorrect": false }
            ],
            "explanation": "Persistent deficits in social communication/interaction and restricted repetitive patterns of behavior are core features of Autism."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "Methylphenidate (Ritalin) is a CNS stimulant used to treat:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Autism", "isCorrect": false },
                { "id": "b", "text": "ADHD", "isCorrect": true },
                { "id": "c", "text": "Separation Anxiety", "isCorrect": false },
                { "id": "d", "text": "Tourette's Syndrome", "isCorrect": false }
            ],
            "explanation": "CNS stimulants are the first-line pharmacotherapy for ADHD."
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "In the CAGE screening tool for alcohol, the 'E' stands for __b1__.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["eye-opener", "Eye opener", "eye opener"], "caseSensitive": false }
            ],
            "explanation": "CAGE: Cut down, Annoyed, Guilty, Eye-opener (drinking first thing in the morning)."
        },
        {
            "id": "q4",
            "type": "multiple-select",
            "question": "Select the signs of Opioid Intoxication: (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Pupillary constriction (pinpoint pupils)", "isCorrect": true },
                { "id": "b", "text": "Drowsiness/Coma", "isCorrect": true },
                { "id": "c", "text": "Slurred speech", "isCorrect": true },
                { "id": "d", "text": "Pupillary dilation", "isCorrect": false },
                { "id": "e", "text": "Insomnia", "isCorrect": false }
            ],
            "partialCredit": true,
            "explanation": "Opioids cause constriction, drowsiness, and respiratory depression. Dilation and insomnia are signs of withdrawal (or stimulant intoxication)."
        }
    ]
});