registerQuiz("topic-05-placenta-cord-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-05-placenta-cord-quiz",
    "metadata": {
        "title": "Placenta & Cord Quiz",
        "description": "Test your knowledge of the placenta, umbilical cord, and amniotic fluid.",
        "topicId": "topic-05-placenta-cord",
        "difficulty": "intermediate",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2026-01-11T12:00:00Z"
    },
    "settings": {
        "shuffleQuestions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-select",
            "question": "Select the correct hormones produced by the placenta: (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Human Chorionic Gonadotrophin (HCG)", "isCorrect": true },
                { "id": "b", "text": "Human Placental Lactogen (HCL)", "isCorrect": true },
                { "id": "c", "text": "Progesterone", "isCorrect": true },
                { "id": "d", "text": "FSH", "isCorrect": false }
            ],
            "partialCredit": true,
            "explanation": "The placenta produces HCG, HCL, Oestrogen, and Progesterone. FSH is pituitary."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "What is the condition called when the umbilical cord vessels run through the membranes before reaching the placenta?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Succenturiate Lobe", "isCorrect": false },
                { "id": "b", "text": "Circumvallate Placenta", "isCorrect": false },
                { "id": "c", "text": "Velamentous Insertion", "isCorrect": true },
                { "id": "d", "text": "Bipartite Placenta", "isCorrect": false }
            ],
            "explanation": "Velamentous insertion involves cord vessels running through the membranes, posing a risk of vasa praevia."
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "Polyhydramnios is defined as amniotic fluid volume exceeding __b1__ millilitres.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["1500", "1,500"], "caseSensitive": false }
            ],
            "explanation": "Polyhydramnios is >1500ml; Oligohydramnios is <1300ml."
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "What substance protects the blood vessels within the umbilical cord?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Vernix caseosa", "isCorrect": false },
                { "id": "b", "text": "Wharton's jelly", "isCorrect": true },
                { "id": "c", "text": "Amniotic fluid", "isCorrect": false },
                { "id": "d", "text": "Chorionic villi", "isCorrect": false }
            ],
            "explanation": "Wharton's jelly is the gelatinous substance that cushions the vessels in the cord."
        }
    ]
});