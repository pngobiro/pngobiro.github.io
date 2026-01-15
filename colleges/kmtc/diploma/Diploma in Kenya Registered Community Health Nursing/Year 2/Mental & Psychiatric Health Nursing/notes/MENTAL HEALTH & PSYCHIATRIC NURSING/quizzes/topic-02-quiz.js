registerQuiz("topic-02-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-02-quiz",
    "metadata": {
        "title": "Legal & Ethical Issues Quiz",
        "description": "Assess understanding of the Mental Health Act, admissions, and ethical principles.",
        "topicId": "topic-02",
        "difficulty": "intermediate",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2025-12-28T12:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which form is used for the voluntary admission of a person over 16 years old?",
            "points": 10,
            "options": [
                { "id": "a", "text": "MOH 637", "isCorrect": false },
                { "id": "b", "text": "MOH 614", "isCorrect": false },
                { "id": "c", "text": "MOH 613", "isCorrect": true },
                { "id": "d", "text": "MOH 638", "isCorrect": false }
            ],
            "explanation": "MOH 613 is for voluntary admission (>16 yrs). MOH 637 is for minors. MOH 614 is for involuntary admission. MOH 638 is for emergency/police admission."
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "An involuntary patient is admitted for a period of not more than __b1__ months initially.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["6", "six"], "caseSensitive": false }
            ],
            "explanation": "Involuntary admission is valid for up to 6 months, renewable for another 6 months."
        },
        {
            "id": "q3",
            "type": "matching",
            "question": "Match the ethical principle to its description:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Beneficence", "right": "Duty to promote good" },
                { "id": "p2", "left": "Non-maleficence", "right": "Duty to do no harm" },
                { "id": "p3", "left": "Veracity", "right": "Duty to be truthful" },
                { "id": "p4", "left": "Justice", "right": "Duty to treat equally/fairly" }
            ],
            "explanation": "These are the four pillars of medical ethics relevant to psychiatric nursing."
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "Who has the authority to arrest a person found to be dangerous to themselves or others and take them to a mental hospital?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Any family member", "isCorrect": false },
                { "id": "b", "text": "A village elder", "isCorrect": false },
                { "id": "c", "text": "A police officer or Chief", "isCorrect": true },
                { "id": "d", "text": "A nurse", "isCorrect": false }
            ],
            "explanation": "Under the Mental Health Act, a police officer, Chief, or Assistant Chief can effect this arrest and transport (Emergency admission)."
        }
    ]
});