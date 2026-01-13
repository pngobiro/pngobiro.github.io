registerQuiz("topic-02-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-02-quiz",
    "metadata": {
        "title": "Institutions Quiz",
        "description": "Check your knowledge of family, political, and social institutions.",
        "topicId": "topic-02",
        "difficulty": "intermediate",
        "estimatedTime": 15,
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
            "question": "Match the leadership style with its description:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Autocratic", "right": "Leader controls all power and decisions" },
                { "id": "p2", "left": "Democratic", "right": "Leader includes employees in decision making" },
                { "id": "p3", "left": "Laissez-faire", "right": "Leader allows employees to make decisions" }
            ],
            "explanation": "Autocratic = absolute control. Democratic = participative. Laissez-faire = delegative/free reign."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "Which of the following is NOT considered a primary function of the family institution?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Reproduction", "isCorrect": false },
                { "id": "b", "text": "Economic co-operation", "isCorrect": false },
                { "id": "c", "text": "Enforcement of national laws", "isCorrect": true },
                { "id": "d", "text": "Socialization of children", "isCorrect": false }
            ],
            "explanation": "Enforcing national laws is a function of the Government institution, not the Family."
        },
        {
            "id": "q3",
            "type": "true-false",
            "question": "An Association is a formal group with a specific purpose, while an Institution is a system of procedures and rules.",
            "points": 5,
            "correctAnswer": true,
            "explanation": "True. Associations are concrete groups (like a specific hospital); Institutions are the abstract systems (like 'Healthcare')."
        },
        {
            "id": "q4",
            "type": "multiple-select",
            "question": "Select the needs that social institutions help fulfill: (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Emotional needs", "isCorrect": true },
                { "id": "b", "text": "Economic needs", "isCorrect": true },
                { "id": "c", "text": "Familial needs", "isCorrect": true },
                { "id": "d", "text": "Religious needs", "isCorrect": true }
            ],
            "explanation": "Social institutions address all these fundamental societal needs."
        },
        {
            "id": "q5",
            "type": "fill-blank",
            "question": "A __b1__ family consists only of parents and children, while an __b2__ family includes other relatives like grandparents or aunts.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["nuclear"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["extended"], "caseSensitive": false }
            ],
            "explanation": "Nuclear families are the core unit; extended families include wider kinship networks."
        }
    ]
});