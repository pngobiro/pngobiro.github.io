// File: quizzes/topic-04-quiz.js
registerQuiz("topic-04-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-04-quiz",
    "metadata": {
        "title": "Genital Disorders & Injuries",
        "description": "Evaluate your understanding of prolapse, fistula, and other genital tract injuries.",
        "topicId": "topic-04-genital-disorders",
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
            "type": "fill-blank",
            "question": "Herniation of the bladder through the anterior vaginal wall is a __1__, while herniation of the rectum through the posterior wall is a __2__.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["cystocele"], "caseSensitive": false },
                { "id": "2", "acceptedAnswers": ["rectocele"], "caseSensitive": false }
            ]
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "What is the primary cause of Vesicovaginal Fistula (VVF) in developing countries?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Radiation therapy", "isCorrect": false },
                { "id": "b", "text": "Obstructed labour", "isCorrect": true },
                { "id": "c", "text": "Surgical injury", "isCorrect": false },
                { "id": "d", "text": "Congenital defects", "isCorrect": false }
            ],
            "explanation": "Obstructed labour causes pressure necrosis, accounting for ~85% of VVF cases in developing countries."
        },
        {
            "id": "q3",
            "type": "matching",
            "question": "Match the degree of uterine prolapse with its description:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "First Degree", "right": "Slight descent, cervix remains in vagina" },
                { "id": "p2", "left": "Second Degree", "right": "Cervix projects beyond vulva on straining" },
                { "id": "p3", "left": "Third Degree (Procidentia)", "right": "Entire uterus prolapsed outside vulva" }
            ]
        },
        {
            "id": "q4",
            "type": "multiple-select",
            "question": "Which of the following are preventive measures for uterine prolapse? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Kegel exercises", "isCorrect": true },
                { "id": "b", "text": "Early and adequate episiotomy", "isCorrect": true },
                { "id": "c", "text": "Avoiding traumatic deliveries", "isCorrect": true },
                { "id": "d", "text": "Prolonged bed rest after delivery", "isCorrect": false }
            ],
            "explanation": "Strengthening muscles and avoiding trauma/tearing are key preventive strategies."
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "Which procedure is typically used to treat a Bartholin's Cyst to preserve gland function?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Simple incision", "isCorrect": false },
                { "id": "b", "text": "Marsupialisation", "isCorrect": true },
                { "id": "c", "text": "Total excision of the gland", "isCorrect": false },
                { "id": "d", "text": "Antibiotics only", "isCorrect": false }
            ],
            "explanation": "Marsupialisation allows the cyst to drain and stay open, preserving the gland's function."
        }
    ]
});