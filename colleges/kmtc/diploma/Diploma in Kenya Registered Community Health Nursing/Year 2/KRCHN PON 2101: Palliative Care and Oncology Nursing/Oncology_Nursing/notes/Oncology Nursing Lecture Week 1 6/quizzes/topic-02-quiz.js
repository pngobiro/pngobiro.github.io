registerQuiz("topic-02-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-02-quiz",
    "metadata": {
        "title": "Prevention & Early Detection",
        "description": "Test your knowledge on screening guidelines, staging, and warning signs.",
        "topicId": "topic-02",
        "difficulty": "beginner",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2025-12-27T10:00:00Z"
    },
    "questions": [
        {
            "id": "t2-q1",
            "type": "multiple-choice",
            "question": "Which of the following is an example of **Primary Prevention**?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Performing a monthly breast self-exam", "isCorrect": false },
                { "id": "b", "text": "Quitting smoking", "isCorrect": true },
                { "id": "c", "text": "Getting a Pap smear", "isCorrect": false },
                { "id": "d", "text": "Undergoing a colonoscopy", "isCorrect": false }
            ],
            "explanation": "Primary prevention aims to prevent the disease from occurring (e.g., lifestyle changes). Screening exams are Secondary prevention."
        },
        {
            "id": "t2-q2",
            "type": "matching",
            "question": "Match the letter from the 'CAUTION' mnemonic to its meaning.",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "C", "right": "Change in bowel or bladder habits" },
                { "id": "p2", "left": "A", "right": "A sore that does not heal" },
                { "id": "p3", "left": "T", "right": "Thickening or lump" },
                { "id": "p4", "left": "N", "right": "Nagging cough or hoarseness" }
            ]
        },
        {
            "id": "t2-q3",
            "type": "multiple-choice",
            "question": "According to ACS guidelines, at what age should women begin annual mammograms?",
            "points": 10,
            "options": [
                { "id": "a", "text": "20 years", "isCorrect": false },
                { "id": "b", "text": "30 years", "isCorrect": false },
                { "id": "c", "text": "40 years", "isCorrect": true },
                { "id": "d", "text": "50 years", "isCorrect": false }
            ],
            "explanation": "Annual mammograms are recommended starting at age 40."
        },
        {
            "id": "t2-q4",
            "type": "fill-blank",
            "question": "In the TNM staging system, 'T' stands for __b1__, 'N' stands for __b2__, and 'M' stands for __b3__.",
            "points": 15,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["tumor", "primary tumor", "tumor size"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["node", "nodes", "regional lymph nodes", "lymph node"], "caseSensitive": false },
                { "id": "b3", "acceptedAnswers": ["metastasis", "metastases"], "caseSensitive": false }
            ],
            "explanation": "T = Tumor size/extent, N = Node involvement, M = Metastasis."
        },
        {
            "id": "t2-q5",
            "type": "true-false",
            "question": "A Stage IV cancer indicates carcinoma in situ.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "Stage 0 is Carcinoma in situ. Stage IV indicates metastasis to distant organs."
        }
    ]
});