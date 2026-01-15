window.registerQuiz('topic-11-quiz', {
    "schemaVersion": "1.1",
    "quizId": "topic-11-quiz",
    "metadata": {
        "title": "Medical Microbiology & Immunity Quiz",
        "description": "Test your knowledge on pathogenesis and immunity.",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate",
        "allowRetry": true
    },
    "questions": [
        {
            "id": "q1",
            "type": "matching",
            "question": "Match definitions:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Pathogenicity", "right": "Ability to inflict damage" },
                { "id": "p2", "left": "Virulence", "right": "Quantitative measure of pathogenicity" },
                { "id": "p3", "left": "Infection", "right": "Microorganism growing in host" },
                { "id": "p4", "left": "Disease", "right": "Damage impairing function" }
            ]
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "When does human colonization typically begin?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Third trimester", "isCorrect": false },
                { "id": "b", "text": "Birth process", "isCorrect": true },
                { "id": "c", "text": "Puberty", "isCorrect": false },
                { "id": "d", "text": "In utero", "isCorrect": false }
            ],
            "explanation": "Colonization begins at birth."
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "An __1__ pathogen causes disease only when host resistance is low.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["opportunistic"], "caseSensitive": false }
            ],
            "explanation": "Opportunistic pathogens."
        },
        {
            "id": "q4",
            "type": "ordering",
            "question": "Infection process order:",
            "points": 15,
            "items": [
                { "id": "1", "text": "Loose association", "correctPosition": 1 },
                { "id": "2", "text": "Adhesion", "correctPosition": 2 },
                { "id": "3", "text": "Invasion", "correctPosition": 3 }
            ]
        },
        {
            "id": "q5",
            "type": "multiple-select",
            "question": "Components of Innate Immunity:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Physical barriers", "isCorrect": true },
                { "id": "b", "text": "Antibodies", "isCorrect": false },
                { "id": "c", "text": "Phagocytosis", "isCorrect": true },
                { "id": "d", "text": "Cytokines", "isCorrect": true }
            ],
            "partialCredit": true
        },
        {
            "id": "q6",
            "type": "matching",
            "question": "Match adaptive immunity types:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Natural Active", "right": "Recovering from disease" },
                { "id": "p2", "left": "Artificial Active", "right": "Vaccination" },
                { "id": "p3", "left": "Passive", "right": "Antibody transfer" }
            ]
        }
    ]
});