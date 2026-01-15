registerQuiz("topic-03-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-03-quiz",
    "metadata": {
        "title": "STI Prevention and Health Promotion",
        "description": "Evaluate your grasp of prevention strategies, VCT, and PMCT.",
        "topicId": "topic-03-prevention-promotion",
        "difficulty": "intermediate",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2026-01-13T10:00:00Z",
        "tags": ["prevention", "vct", "pmct"]
    },
    "settings": {
        "shuffleQuestions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "short-answer",
            "question": "In the context of HIV prevention, what does the acronym 'ABC' stand for?",
            "points": 15,
            "keywords": ["abstinence", "faithful", "condom", "condoms"],
            "minKeywords": 3,
            "modelAnswer": "Abstinence, Be faithful, Condom use",
            "maxLength": 100
        },
        {
            "id": "q2",
            "type": "multiple-select",
            "question": "Which of the following are benefits of Voluntary Counselling and Testing (VCT)? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Empowers people to make informed decisions", "isCorrect": true },
                { "id": "b", "text": "Provides an entry point for medical care (e.g. TB treatment)", "isCorrect": true },
                { "id": "c", "text": "Guarantees immunity from HIV", "isCorrect": false },
                { "id": "d", "text": " Helps HIV negative people stay negative through behavior change", "isCorrect": true }
            ],
            "explanation": "VCT does not guarantee immunity, but it empowers decisions, connects to care, and promotes behavior change."
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "To prevent mother-to-child transmission, a single dose of __1__ is often given to the mother during labor and the baby after birth.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["Nevirapine", "nevirapine"], "caseSensitive": false }
            ],
            "explanation": "Nevirapine is the specific antiretroviral drug mentioned for single-dose prophylaxis during labor."
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "Breastfeeding accounts for approximately one-third of mother-to-child HIV transmission cases.",
            "points": 10,
            "correctAnswer": true,
            "explanation": "Breast milk contains HIV, and without intervention, it is a significant mode of vertical transmission."
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "How does the control of other STIs (like syphilis or chancroid) assist in HIV prevention?",
            "points": 10,
            "options": [
                { "id": "a", "text": "STIs kill the HIV virus", "isCorrect": false },
                { "id": "b", "text": "Ulcerations from STIs provide entry points for HIV, increasing risk", "isCorrect": true },
                { "id": "c", "text": "STI drugs act as HIV vaccines", "isCorrect": false },
                { "id": "d", "text": "It does not assist; they are unrelated", "isCorrect": false }
            ],
            "explanation": "Ulcerative STIs break the mucosal barrier, making it much easier for HIV to enter the bloodstream during sexual contact."
        },
        {
            "id": "q6",
            "type": "multiple-choice",
            "question": "What is the primary purpose of screening blood donors?",
            "points": 10,
            "options": [
                { "id": "a", "text": "To determine blood type only", "isCorrect": false },
                { "id": "b", "text": "To ensure a safe blood supply free from HIV", "isCorrect": true },
                { "id": "c", "text": "To check for high cholesterol", "isCorrect": false },
                { "id": "d", "text": "To reduce the cost of transfusion", "isCorrect": false }
            ],
            "explanation": "Screening is essential to prevent direct blood transmission via transfusion."
        },
        {
            "id": "q7",
            "type": "true-false",
            "question": "Elective caesarean sections and avoiding episiotomies can reduce HIV transmission during childbirth.",
            "points": 10,
            "correctAnswer": true,
            "explanation": "These practices reduce the infant's exposure to maternal blood and fluids during delivery."
        }
    ]
});