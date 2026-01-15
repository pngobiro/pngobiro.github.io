// File: quizzes/topic-05-quiz.js
registerQuiz("topic-05-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-05-quiz",
    "metadata": {
        "title": "Infertility & Climacteric Crisis",
        "description": "Check your knowledge on fertility issues and menopausal management.",
        "topicId": "topic-05-infertility-menopause",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2026-01-13T10:00:00Z"
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
            "question": "Infertility is defined as the inability to conceive after what period of unprotected intercourse?",
            "points": 10,
            "options": [
                { "id": "a", "text": "6 months", "isCorrect": false },
                { "id": "b", "text": "1 year", "isCorrect": true },
                { "id": "c", "text": "2 years", "isCorrect": false },
                { "id": "d", "text": "5 years", "isCorrect": false }
            ]
        },
        {
            "id": "q2",
            "type": "true-false",
            "question": "Undescended testes can cause male infertility because the higher temperature impairs spermatogenesis.",
            "points": 10,
            "correctAnswer": true,
            "explanation": "Spermatogenesis requires a temperature slightly lower (approx 1°C) than normal body temperature."
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "Which of the following are common symptoms of the climacteric crisis (menopause)? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Hot flushes", "isCorrect": true },
                { "id": "b", "text": "Osteoporosis", "isCorrect": true },
                { "id": "c", "text": "Weight loss", "isCorrect": false },
                { "id": "d", "text": "Atrophic vaginal changes", "isCorrect": true }
            ],
            "explanation": "Weight gain, not loss, is typically associated with menopause due to lower activity levels."
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "Which drug is often used to induce ovulation in women?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Clomiphene Citrate (Clomid)", "isCorrect": true },
                { "id": "b", "text": "Oestrogen alone", "isCorrect": false },
                { "id": "c", "text": "Testosterone", "isCorrect": false },
                { "id": "d", "text": "Oxytocin", "isCorrect": false }
            ]
        },
        {
            "id": "q5",
            "type": "fill-blank",
            "question": "The absence of sperm in the semen is known as __1__, while a low sperm count is called __2__.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["azoospermia"], "caseSensitive": false },
                { "id": "2", "acceptedAnswers": ["oligospermia"], "caseSensitive": false }
            ]
        }
    ]
});