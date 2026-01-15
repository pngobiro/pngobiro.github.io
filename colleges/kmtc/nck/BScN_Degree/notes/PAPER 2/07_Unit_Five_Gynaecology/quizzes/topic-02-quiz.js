// File: quizzes/topic-02-quiz.js
registerQuiz("topic-02-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-02-quiz",
    "metadata": {
        "title": "Menstrual Disorders",
        "description": "Assess your understanding of amenorrhoea, dysmenorrhoea, and abnormal uterine bleeding.",
        "topicId": "topic-02-menstrual-disorders",
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
            "question": "What is the most common cause of secondary dysmenorrhoea in this context?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Uterine fibroids", "isCorrect": false },
                { "id": "b", "text": "Chronic Pelvic Inflammatory Disease (PID)", "isCorrect": true },
                { "id": "c", "text": "Cervical stenosis", "isCorrect": false },
                { "id": "d", "text": "Emotional stress", "isCorrect": false }
            ],
            "explanation": "Chronic PID is the most common cause of secondary (congestive) dysmenorrhoea."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the menstrual disorder with its definition:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Menorrhagia", "right": "Normal cycle with excessive blood loss (>70ml)" },
                { "id": "p2", "left": "Metrorrhagia", "right": "Bleeding between periods / acyclic bleeding" },
                { "id": "p3", "left": "Epimenorrhoea", "right": "Normal menstruation occurring too often (short cycle)" },
                { "id": "p4", "left": "Hypomenorrhoea", "right": "Regular but scanty/minimal menstrual flow" }
            ]
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "Cryptomenorrhoea is associated with which condition?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Imperforate hymen", "isCorrect": true },
                { "id": "b", "text": "Polycystic ovaries", "isCorrect": false },
                { "id": "c", "text": "Fibroids", "isCorrect": false },
                { "id": "d", "text": "Early pregnancy", "isCorrect": false }
            ],
            "explanation": "Cryptomenorrhoea ('hidden menstruation') occurs when blood accumulates behind an obstruction, such as an imperforate hymen."
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "Endometrial tissue found invading the myometrium of the uterus is specifically called __1__.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["adenomyosis"], "caseSensitive": false }
            ],
            "explanation": "Internal endometriosis, where tissue invades the muscle wall, is called adenomyosis."
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "Primary amenorrhoea is diagnosed if a girl has not menstruated by age 14, regardless of secondary sexual characteristics.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "Primary amenorrhoea is typically diagnosed in a young woman over 17 who has not menstruated but has sexual maturation, or earlier if no secondary characteristics have developed."
        }
    ]
});