registerQuiz("topic-01-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-01-quiz",
    "metadata": {
        "title": "Introduction & Legal Framework Quiz",
        "description": "Test your knowledge on mental health definitions, history, and the Kenya Mental Health Act Cap 248.",
        "topicId": "topic-01",
        "difficulty": "beginner",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2026-01-21T12:00:00Z",
        "updatedAt": "2026-01-21T12:00:00Z",
        "tags": ["legal", "history", "definitions"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate",
        "allowRetry": true,
        "showCorrectAnswers": true
    },
    "questions": [
        {
            "id": "t1-q1",
            "type": "multiple-choice",
            "question": "According to the World Health Organisation (WHO), mental health is defined as:",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "The absence of mental disorders or disabilities", "isCorrect": false },
                { "id": "opt2", "text": "A state of emotional well-being enabling one to function comfortably within society", "isCorrect": true },
                { "id": "opt3", "text": "The ability to suppress instincts and conform to reality", "isCorrect": false },
                { "id": "opt4", "text": "A state of perfect physical and social adaptation", "isCorrect": false }
            ],
            "explanation": "WHO defines mental health as a state of emotional well-being which enables one to function comfortably within society and to be satisfied with one's own achievements."
        },
        {
            "id": "t1-q2",
            "type": "matching",
            "question": "Match the admission form number to its correct function under the Mental Health Act:",
            "points": 4,
            "pairs": [
                { "id": "pair1", "left": "M.O.H. 613", "right": "Voluntary admission" },
                { "id": "pair2", "left": "M.O.H. 614", "right": "Involuntary admission (by relative)" },
                { "id": "pair3", "left": "M.O.H. 615", "right": "Medical recommendation for involuntary treatment" },
                { "id": "pair4", "left": "M.O.H. 638", "right": "Emergency admission (Police)" }
            ],
            "explanation": "MOH 613 is for voluntary patients. MOH 614 is the application by a relative. MOH 615 is the medical recommendation. MOH 638 is used by police for emergency cases."
        },
        {
            "id": "t1-q3",
            "type": "multiple-choice",
            "question": "Who is credited with unchaining patients at Bicetre Hospital in Paris in 1793, marking the Humanitarian period?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "William Tuke", "isCorrect": false },
                { "id": "opt2", "text": "Dorothea Lynda Dix", "isCorrect": false },
                { "id": "opt3", "text": "Philippe Pinel", "isCorrect": true },
                { "id": "opt4", "text": "Johann Christian Reil", "isCorrect": false }
            ],
            "explanation": "Dr. Philippe Pinel unchained a group of patients in 1793, advocating for kindness in the treatment of the mentally ill."
        },
        {
            "id": "t1-q4",
            "type": "true-false",
            "question": "A person admitted as an involuntary patient must be discharged within 6 months unless the period is prolonged by the person in charge.",
            "correctAnswer": true,
            "points": 1,
            "explanation": "Involuntary patients are admitted for a period not more than six months, which can be prolonged by another six months (total 12 months) by the person in charge."
        },
        {
            "id": "t1-q5",
            "type": "multiple-choice",
            "question": "Which of the following is NOT a characteristic of a mentally ill person?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Dissatisfaction with one's place in the world", "isCorrect": false },
                { "id": "opt2", "text": "Effective coping mechanisms and personal growth", "isCorrect": true },
                { "id": "opt3", "text": "Ineffective interpersonal relationships", "isCorrect": false },
                { "id": "opt4", "text": "Dissatisfaction with one's abilities", "isCorrect": false }
            ],
            "explanation": "A mentally ill person typically has ineffective coping mechanisms and lacks personal growth. Having effective coping mechanisms is a sign of mental health."
        }
    ]
});