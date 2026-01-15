registerQuiz("topic-06-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-06-quiz",
    "metadata": {
        "title": "Non-Hormonal & LARC Quiz",
        "description": "Test knowledge of Barrier methods, IUDs, Implants, and Natural methods.",
        "topicId": "topic-06-family-planning-methods",
        "difficulty": "intermediate",
        "estimatedTime": 12,
        "passingScore": 80,
        "createdAt": "2026-01-10T10:00:00Z"
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
            "question": "Which contraceptive method provides dual protection against both pregnancy and STIs/HIV?",
            "points": 15,
            "options": [
                { "id": "a", "text": "IUD", "isCorrect": false },
                { "id": "b", "text": "Condoms", "isCorrect": true },
                { "id": "c", "text": "Implants", "isCorrect": false },
                { "id": "d", "text": "Spermicides", "isCorrect": false }
            ],
            "explanation": "Condoms are the only method that prevents fluid exchange, offering protection against STIs and HIV."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the contraceptive implant with its duration of effectiveness:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Jadelle", "right": "5 Years" },
                { "id": "p2", "left": "Implanon", "right": "3 Years" },
                { "id": "p3", "left": "Sino-Implant", "right": "4 Years" }
            ],
            "explanation": "Jadelle (2 rods) lasts 5 years; Implanon (1 rod) lasts 3 years; Sino-Implant lasts 4 years."
        },
        {
            "id": "q3",
            "type": "true-false",
            "question": "A vasectomy is immediately effective after the procedure.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "Vasectomy requires about 3 months or 20 ejaculations to clear sperm from the ducts. Backup contraception is needed during this time."
        },
        {
            "id": "q4",
            "type": "multiple-select",
            "question": "Select the three criteria required for the Lactational Amenorrhea Method (LAM) to be effective:",
            "points": 15,
            "options": [
                { "id": "a", "text": "Baby is less than 6 months old", "isCorrect": true },
                { "id": "b", "text": "Mother's period has not returned (Amenorrhea)", "isCorrect": true },
                { "id": "c", "text": "Exclusive/Full breastfeeding", "isCorrect": true },
                { "id": "d", "text": "Mother is eating a special diet", "isCorrect": false },
                { "id": "e", "text": "Baby sleeps through the night", "isCorrect": false }
            ],
            "partialCredit": true,
            "explanation": "All three criteria must be met: Baby < 6 months, Amenorrhea, and Exclusive Breastfeeding."
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "What is the primary side effect of the Copper IUD?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Weight gain", "isCorrect": false },
                { "id": "b", "text": "Heavier, longer menstrual periods", "isCorrect": true },
                { "id": "c", "text": "Headaches", "isCorrect": false },
                { "id": "d", "text": "Acne", "isCorrect": false }
            ],
            "explanation": "Copper IUDs are non-hormonal but often cause heavier bleeding and more cramps during menstruation."
        }
    ]
});