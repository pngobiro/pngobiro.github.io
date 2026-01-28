registerQuiz("topic-01-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-01-quiz",
    "metadata": {
        "title": "Introduction to Midwifery Quiz",
        "description": "Assess your understanding of obstetric terminologies, pregnancy diagnosis, and gestational age estimation.",
        "topicId": "topic-01",
        "difficulty": "beginner",
        "estimatedTime": 10,
        "passingScore": 80,
        "createdAt": "2025-01-28T12:00:00Z",
        "updatedAt": "2025-01-28T12:00:00Z",
        "tags": ["midwifery", "terminology", "diagnosis"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate",
        "allowRetry": true,
        "showCorrectAnswers": true,
        "timeLimit": 0
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which of the following is defined as the number of births after the age of viability (28 weeks)?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Gravidity", "isCorrect": false },
                { "id": "opt2", "text": "Parity", "isCorrect": true },
                { "id": "opt3", "text": "Gestation", "isCorrect": false },
                { "id": "opt4", "text": "Presentation", "isCorrect": false }
            ],
            "explanation": "Parity refers to the state of having given birth to an infant after the age of viability (28 weeks in Kenya) regardless of whether the child was alive or dead."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the sign of pregnancy with its classification:",
            "points": 3,
            "pairs": [
                { "id": "p1", "left": "Morning Sickness", "right": "Presumptive (Possible)" },
                { "id": "p2", "left": "Positive Pregnancy Test (HcG)", "right": "Probable" },
                { "id": "p3", "left": "Fetal Heart Sounds", "right": "Positive (Confirmatory)" }
            ],
            "explanation": "Morning sickness is a possible sign (could be other causes). HcG tests are probable (could be molar pregnancy). Fetal heart sounds indisputably confirm pregnancy."
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "Using Naegele’s Rule, if a woman's LMP was 12th January 2020, her EDD would be calculated by adding __b1__ days to the date and 9 months to the month.",
            "points": 1,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["7", "seven"], "caseSensitive": false }
            ],
            "explanation": "Naegele's rule involves adding 7 days to the first day of the LMP and adding 9 months (or subtracting 3 months)."
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "Which degree of moulding is described as 'sutures overlap but are not reducible'?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "0", "isCorrect": false },
                { "id": "opt2", "text": "+", "isCorrect": false },
                { "id": "opt3", "text": "++", "isCorrect": false },
                { "id": "opt4", "text": "+++", "isCorrect": true }
            ],
            "explanation": "Grade +++ indicates severe moulding where sutures overlap and cannot be reduced (separated), often indicating cephalopelvic disproportion."
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "Quickening is a Positive sign of pregnancy.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "Quickening (feeling of life) is a Presumptive (Possible) sign because it can be confused with intestinal movements (wind)."
        }
    ]
});
