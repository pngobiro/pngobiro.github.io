registerQuiz("topic-08-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-08-quiz",
    "metadata": {
        "title": "Sexual Health & Harmful Practices Quiz",
        "description": "Test understanding of infertility, dysfunction, and harmful traditional practices.",
        "topicId": "topic-08-sexual-health-practices",
        "difficulty": "intermediate",
        "estimatedTime": 10,
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
            "type": "fill-blank",
            "question": "__1__ infertility is defined as when a woman has never been pregnant and cannot conceive after one year of unprotected intercourse.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["primary"], "caseSensitive": false }
            ],
            "explanation": "Primary infertility refers to couples who have never conceived. Secondary infertility occurs after at least one previous pregnancy."
        },
        {
            "id": "q2",
            "type": "multiple-select",
            "question": "Which of the following are considered Harmful Traditional Practices? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Female Genital Mutilation (FGM)", "isCorrect": true },
                { "id": "b", "text": "Nutritional taboos in pregnancy", "isCorrect": true },
                { "id": "c", "text": "Early marriage", "isCorrect": true },
                { "id": "d", "text": "Exclusive breastfeeding", "isCorrect": false }
            ],
            "partialCredit": true,
            "explanation": "FGM, food taboos, and early marriage are harmful. Exclusive breastfeeding is a recommended health practice."
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "What is the medical term for painful sexual intercourse?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Vaginismus", "isCorrect": false },
                { "id": "b", "text": "Dyspareunia", "isCorrect": true },
                { "id": "c", "text": "Anorgasmia", "isCorrect": false },
                { "id": "d", "text": "Cryptorchidism", "isCorrect": false }
            ],
            "explanation": "Dyspareunia refers to genital pain that occurs just before, during or after sexual intercourse."
        },
        {
            "id": "q4",
            "type": "matching",
            "question": "Match the type of violence against women with its example:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Physical", "right": "Spousal battering" },
                { "id": "p2", "left": "Sexual", "right": "Marital rape" },
                { "id": "p3", "left": "Cultural", "right": "Female Genital Mutilation" },
                { "id": "p4", "left": "Economic", "right": "Dowry-related violence" }
            ],
            "explanation": "Violence takes many forms including physical force, sexual coercion, cultural practices like FGM, and economic abuse."
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "Endometriosis is a condition characterized by:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Infection of the uterine lining", "isCorrect": false },
                { "id": "b", "text": "Benign muscle tumors in the uterus", "isCorrect": false },
                { "id": "c", "text": "Growth of endometrial tissue outside the uterus", "isCorrect": true },
                { "id": "d", "text": "Cancer of the cervix", "isCorrect": false }
            ],
            "explanation": "Endometriosis occurs when tissue similar to the lining of the uterus grows outside of it, often causing pain and infertility."
        }
    ]
});