registerQuiz("topic-02-hormones-cycle-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-02-hormones-cycle-quiz",
    "metadata": {
        "title": "Hormones & Menstrual Cycle Quiz",
        "description": "Test your understanding of the hormonal regulation of the female reproductive cycle.",
        "topicId": "topic-02-hormones-cycle",
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
            "type": "multiple-choice",
            "question": "Which hormone causes the Graafian follicle to develop and mature?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Luteinizing Hormone (LH)", "isCorrect": false },
                { "id": "b", "text": "Follicle-Stimulating Hormone (FSH)", "isCorrect": true },
                { "id": "c", "text": "Progesterone", "isCorrect": false },
                { "id": "d", "text": "Human Chorionic Gonadotrophin (HCG)", "isCorrect": false }
            ],
            "explanation": "FSH from the anterior pituitary stimulates the maturation of the Graafian follicle."
        },
        {
            "id": "q2",
            "type": "ordering",
            "question": "Order the phases of the menstrual cycle:",
            "points": 15,
            "items": [
                { "id": "i1", "text": "Menstrual Phase", "correctPosition": 1 },
                { "id": "i2", "text": "Proliferative/Follicular Phase", "correctPosition": 2 },
                { "id": "i3", "text": "Ovulation", "correctPosition": 3 },
                { "id": "i4", "text": "Secretory/Luteal Phase", "correctPosition": 4 }
            ]
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "Which of the following are functions of Progesterone? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Increases endometrial secretions", "isCorrect": true },
                { "id": "b", "text": "Increases blood supply to the endometrium", "isCorrect": true },
                { "id": "c", "text": "Causes the rupture of the follicle", "isCorrect": false },
                { "id": "d", "text": "Prepares the uterus for implantation", "isCorrect": true }
            ],
            "partialCredit": true,
            "explanation": "Progesterone prepares the endometrium (secretory phase) for a potential pregnancy; LH causes the rupture (ovulation)."
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "If fertilisation does not occur, the corpus luteum degenerates about __b1__ days after ovulation.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["10", "ten"], "caseSensitive": false }
            ],
            "explanation": "The corpus luteum degenerates roughly 10 days after ovulation if not sustained by HCG from a pregnancy."
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "The Proliferative phase is primarily under the influence of which hormone?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Progesterone", "isCorrect": false },
                { "id": "b", "text": "Oestrogen", "isCorrect": true },
                { "id": "c", "text": "LH", "isCorrect": false },
                { "id": "d", "text": "Prolactin", "isCorrect": false }
            ],
            "explanation": "Oestrogen causes the regrowth and thickening (proliferation) of the endometrium after menstruation."
        }
    ]
});