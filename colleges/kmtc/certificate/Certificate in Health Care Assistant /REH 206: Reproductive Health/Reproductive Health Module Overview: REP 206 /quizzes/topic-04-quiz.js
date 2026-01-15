registerQuiz("topic-04-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-04-quiz",
    "metadata": {
        "title": "Safe Motherhood Quiz",
        "description": "Assess knowledge of obstetric care, PNC, and abortion management.",
        "topicId": "topic-04-safe-motherhood",
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
            "question": "Which of the following is a function of Comprehensive EmONC (CEmONC) but NOT Basic EmONC (BEmONC)?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Parenteral antibiotics", "isCorrect": false },
                { "id": "b", "text": "Manual removal of placenta", "isCorrect": false },
                { "id": "c", "text": "Blood transfusion", "isCorrect": true },
                { "id": "d", "text": "Newborn resuscitation", "isCorrect": false }
            ],
            "explanation": "CEmONC facilities perform surgery (C-section) and blood transfusion. BEmONC facilities do not."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "Ergometrine is contraindicated (should not be given) in women with:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Postpartum Hemorrhage", "isCorrect": false },
                { "id": "b", "text": "Elevated Blood Pressure / Hypertension", "isCorrect": true },
                { "id": "c", "text": "Multiple pregnancy", "isCorrect": false },
                { "id": "d", "text": "Anemia", "isCorrect": false }
            ],
            "explanation": "Ergometrine causes vasoconstriction and can precipitate eclamptic seizures or stroke in hypertensive women."
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "Which of the following are pillars of Safe Motherhood? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Family Planning", "isCorrect": true },
                { "id": "b", "text": "Antenatal Care", "isCorrect": true },
                { "id": "c", "text": "Postnatal Care", "isCorrect": true },
                { "id": "d", "text": "Herbal Medicine", "isCorrect": false },
                { "id": "e", "text": "Post-abortion Care", "isCorrect": true }
            ],
            "partialCredit": true,
            "explanation": "The pillars are FP, ANC, Obstetric/Newborn Care, PNC, Post-abortion Care, and STD/HIV Control."
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "Manual Vacuum Aspiration (MVA) is the method of choice for incomplete abortion for gestation of __1__ weeks or less.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["14", "fourteen"], "caseSensitive": false }
            ],
            "explanation": "MVA is safer than curettage for gestations up to 14 weeks."
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "Postnatal care is restricted to the first 24 hours after delivery.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "Postnatal care extends from birth up to 6 weeks after delivery."
        }
    ]
});