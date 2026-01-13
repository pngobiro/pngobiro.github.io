registerQuiz("topic-03-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-03-quiz",
    "metadata": {
        "title": "Culture & Socialization Assessment",
        "description": "Test understanding of cultural elements and the socialization process.",
        "topicId": "topic-03",
        "difficulty": "intermediate",
        "estimatedTime": 12,
        "passingScore": 70,
        "createdAt": "2026-01-13T12:00:00Z"
    },
    "settings": {
        "shuffleQuestions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "matching",
            "question": "Match the type of norm to its definition:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Folkways", "right": "Casual customs, lack moral significance" },
                { "id": "p2", "left": "Mores", "right": "Strong norms with great moral significance" },
                { "id": "p3", "left": "Taboos", "right": "Norms so strong violation demands punishment" },
                { "id": "p4", "left": "Laws", "right": "Consciously created and enforced rules" }
            ],
            "explanation": "Folkways are polite behaviors; Mores are moral duties; Laws are codified rules."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "Which term describes the situation where material culture changes faster than non-material culture (rules/norms)?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Cultural Shock", "isCorrect": false },
                { "id": "b", "text": "Cultural Lag", "isCorrect": true },
                { "id": "c", "text": "Acculturation", "isCorrect": false },
                { "id": "d", "text": "Assimilation", "isCorrect": false }
            ],
            "explanation": "Cultural Lag happens when technology advances (material) but laws and ethics (non-material) haven't caught up."
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "Which of the following are considered agents of socialization? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "The Family", "isCorrect": true },
                { "id": "b", "text": "Peer Groups", "isCorrect": true },
                { "id": "c", "text": "Mass Media", "isCorrect": true },
                { "id": "d", "text": "Schools", "isCorrect": true }
            ],
            "explanation": "All of these play a significant role in socializing individuals at different stages of life."
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "__b1__ socialization occurs in infancy and childhood, while __b2__ socialization takes place later in childhood and maturity.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["primary", "Primary"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["secondary", "Secondary"], "caseSensitive": false }
            ],
            "explanation": "Primary is the first and most intense phase; Secondary involves schools, peers, and work."
        }
    ]
});