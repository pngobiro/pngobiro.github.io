registerQuiz("topic-06-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-06-quiz",
    "metadata": {
        "title": "Social Change Quiz",
        "description": "Assess understanding of social change theories and barriers.",
        "topicId": "topic-06",
        "difficulty": "intermediate",
        "estimatedTime": 10,
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
            "type": "multiple-choice",
            "question": "Which theory views social change as a result of competition for limited resources and inequality?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Structural Functionalism", "isCorrect": false },
                { "id": "b", "text": "Conflict Theory", "isCorrect": true },
                { "id": "c", "text": "Cyclic Theory", "isCorrect": false },
                { "id": "d", "text": "Linear Theory", "isCorrect": false }
            ],
            "explanation": "Conflict theory (associated with Marx) sees change driven by class conflict and resource competition."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the social change theory to its concept:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Cyclic Theory", "right": "Societies rise, peak, decline, and rise again" },
                { "id": "p2", "left": "Linear Theory", "right": "Change moves forward from simple to complex" },
                { "id": "p3", "left": "Modernization Theory", "right": "Developing societies copy developed ones" },
                { "id": "p4", "left": "Structural Functionalism", "right": "Change is an adjustment to restore equilibrium" }
            ],
            "explanation": "Cyclic = circles/cycles. Linear = straight line forward. Modernization = Westernization. Functionalism = stability/balance."
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "Select the factors that act as barriers to social change: (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Cultural barriers (tradition)", "isCorrect": true },
                { "id": "b", "text": "Vested interests", "isCorrect": true },
                { "id": "c", "text": "Economic barriers", "isCorrect": true },
                { "id": "d", "text": "Technological innovation", "isCorrect": false }
            ],
            "explanation": "Tradition, vested interests, and cost (economic) hinder change. Innovation usually PROMOTES change."
        },
        {
            "id": "q4",
            "type": "ordering",
            "question": "Order the stages of a social movement:",
            "points": 10,
            "items": [
                { "id": "i1", "text": "Preliminary Stage (Awareness)", "correctPosition": 1 },
                { "id": "i2", "text": "Coalescence Stage (Organizing)", "correctPosition": 2 },
                { "id": "i3", "text": "Institutionalization Stage (Established)", "correctPosition": 3 },
                { "id": "i4", "text": "Decline Stage (Success/Failure)", "correctPosition": 4 }
            ],
            "explanation": "Movements start with awareness, then organize, become established institutions, and finally decline."
        }
    ]
});