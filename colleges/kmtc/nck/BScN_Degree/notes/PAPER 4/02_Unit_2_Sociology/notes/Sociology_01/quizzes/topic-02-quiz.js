registerQuiz("topic-02-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-02-quiz",
    "metadata": {
        "title": "The Socialisation Process",
        "description": "Assess your understanding of how individuals acquire culture, roles, and personality through socialisation.",
        "topicId": "topic-02",
        "difficulty": "beginner",
        "estimatedTime": 6,
        "passingScore": 70,
        "createdAt": "2026-01-17T00:00:00Z",
        "updatedAt": "2026-01-17T00:00:00Z",
        "tags": ["socialisation", "development", "agents"]
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
            "id": "q1-primary-socialisation",
            "type": "multiple-choice",
            "question": "Primary socialisation mainly takes place in which setting?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "School", "isCorrect": false },
                { "id": "opt2", "text": "Workplace", "isCorrect": false },
                { "id": "opt3", "text": "The Family", "isCorrect": true },
                { "id": "opt4", "text": "Political Rallies", "isCorrect": false }
            ],
            "explanation": "Primary socialisation starts from infancy with parents and close family members."
        },
        {
            "id": "q2-aims",
            "type": "multiple-select",
            "question": "Which of the following are aims of socialisation? (Select all that apply)",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "To instil discipline", "isCorrect": true },
                { "id": "opt2", "text": "To develop aspirations and ambitions", "isCorrect": true },
                { "id": "opt3", "text": "To isolate the individual", "isCorrect": false },
                { "id": "opt4", "text": "To enable acquisition of social roles", "isCorrect": true }
            ],
            "explanation": "Socialisation aims to instil discipline, develop aspirations/skills, and enable role acquisition."
        },
        {
            "id": "q3-types-match",
            "type": "matching",
            "question": "Match the type of socialisation to its description.",
            "points": 3,
            "pairs": [
                { "id": "p1", "left": "Natural Socialisation", "right": "Occurs when infants explore and discover the world (play)" },
                { "id": "p2", "left": "Planned Socialisation", "right": "People take actions designed to teach or train others" },
                { "id": "p3", "left": "Unconscious Socialisation", "right": "Result of spontaneous interaction without deliberate intent" }
            ],
            "explanation": "Natural is exploration/play. Planned is teaching/training. Unconscious is spontaneous interaction."
        },
        {
            "id": "q4-secondary",
            "type": "true-false",
            "question": "Secondary socialisation begins when the child is introduced to environments outside the home, such as school and religious forums.",
            "points": 1,
            "correctAnswer": true,
            "explanation": "True. Secondary socialisation involves agents outside the immediate family (school, peers, media)."
        },
        {
            "id": "q5-agents",
            "type": "fill-blank",
            "question": "The __b1__ is the primary agent of socialisation, while __b2__ and school friends become major agents as the child grows older.",
            "points": 2,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["family", "parents"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["peers", "peer groups"], "caseSensitive": false }
            ],
            "explanation": "The family is the primary agent. Peers/school friends are major secondary agents."
        }
    ]
});