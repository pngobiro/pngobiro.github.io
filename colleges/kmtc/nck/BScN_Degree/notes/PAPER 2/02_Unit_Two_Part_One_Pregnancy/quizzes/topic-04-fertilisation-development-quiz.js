registerQuiz("topic-04-fertilisation-development-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-04-fertilisation-development-quiz",
    "metadata": {
        "title": "Fertilisation & Development Quiz",
        "description": "Assess understanding of conception, embryo development, and foetal circulation.",
        "topicId": "topic-04-fertilisation-development",
        "difficulty": "intermediate",
        "estimatedTime": 15,
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
            "question": "Which vessel in the foetal circulation carries oxygenated blood from the placenta?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Umbilical Artery", "isCorrect": false },
                { "id": "b", "text": "Umbilical Vein", "isCorrect": true },
                { "id": "c", "text": "Ductus Arteriosus", "isCorrect": false },
                { "id": "d", "text": "Inferior Vena Cava", "isCorrect": false }
            ],
            "explanation": "The Umbilical Vein carries oxygenated blood and nutrients from the placenta to the foetus."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "The Foramen Ovale allows blood to bypass which organ?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Liver", "isCorrect": false },
                { "id": "b", "text": "Kidneys", "isCorrect": false },
                { "id": "c", "text": "Lungs", "isCorrect": true },
                { "id": "d", "text": "Brain", "isCorrect": false }
            ],
            "explanation": "The Foramen Ovale shunts blood from the right atrium to the left atrium, bypassing the non-functioning lungs."
        },
        {
            "id": "q3",
            "type": "ordering",
            "question": "Arrange the sequence of development after fertilisation:",
            "points": 15,
            "items": [
                { "id": "i1", "text": "Zygote (Fertilised ovum)", "correctPosition": 1 },
                { "id": "i2", "text": "Morula (Cluster of cells)", "correctPosition": 2 },
                { "id": "i3", "text": "Blastocyst (Fluid filled cavity appears)", "correctPosition": 3 },
                { "id": "i4", "text": "Implantation", "correctPosition": 4 }
            ]
        },
        {
            "id": "q4",
            "type": "matching",
            "question": "Match the germ layer with the body systems it forms:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Ectoderm", "right": "Skin and nervous system" },
                { "id": "p2", "left": "Mesoderm", "right": "Bones, muscles, heart, blood vessels" },
                { "id": "p3", "left": "Endoderm", "right": "Mucous membranes and glands" }
            ]
        },
        {
            "id": "q5",
            "type": "fill-blank",
            "question": "Implantation of the blastocyst usually occurs on or about the __b1__ day after fertilisation.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["6", "sixth", "6th"], "caseSensitive": false }
            ],
            "explanation": "Implantation typically begins around the 6th day after fertilisation."
        }
    ]
});