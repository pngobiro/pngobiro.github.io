registerQuiz("topic-03-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-03-quiz",
    "metadata": {
        "title": "Principles of Management",
        "description": "Assess understanding of core principles like Division of Labour, Authority, and Unity of Command.",
        "topicId": "topic-03",
        "difficulty": "beginner",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2026-01-19T20:00:00Z",
        "updatedAt": "2026-01-19T20:00:00Z",
        "tags": ["principles", "authority", "unity of command"]
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
            "question": "Which principle states that an employee should receive orders from only one superior?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Unity of Direction", "isCorrect": false },
                { "id": "opt2", "text": "Unity of Command", "isCorrect": true },
                { "id": "opt3", "text": "Esprit de Corps", "isCorrect": false },
                { "id": "opt4", "text": "Division of Labour", "isCorrect": false }
            ],
            "explanation": "Unity of Command ensures 'one person - one boss' to prevent confusion."
        },
        {
            "id": "q2",
            "type": "true-false",
            "question": "Authority refers to the duty or obligation to perform a task, while Responsibility refers to the right to command or act.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "False. It is the reverse: Authority is the right/power to command, and Responsibility is the obligation/duty to perform."
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "__id1__ refers to the systematic retention of power and decision-making at higher levels of the organization.",
            "points": 1,
            "blanks": [
                {
                    "id": "id1",
                    "acceptedAnswers": ["Centralization", "centralization"],
                    "caseSensitive": false
                }
            ],
            "explanation": "Centralization keeps decision-making at the top; Decentralization pushes it down to lower levels."
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "What does 'Esprit de Corps' refer to?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Discipline", "isCorrect": false },
                { "id": "opt2", "text": "Fair Remuneration", "isCorrect": false },
                { "id": "opt3", "text": "Team Work / Harmony", "isCorrect": true },
                { "id": "opt4", "text": "Order", "isCorrect": false }
            ],
            "explanation": "Esprit de Corps implies harmony and teamwork, which are strengths for an organization."
        },
        {
            "id": "q5",
            "type": "multiple-select",
            "question": "Which of the following are valid steps in the disciplinary process? (Select all that apply)",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Preliminary investigation", "isCorrect": true },
                { "id": "opt2", "text": "Immediate dismissal without discussion", "isCorrect": false },
                { "id": "opt3", "text": "Formal written warning", "isCorrect": true },
                { "id": "opt4", "text": "Suspension", "isCorrect": true }
            ],
            "explanation": "Discipline should be progressive: Investigation -> Warning -> Written Warning -> Suspension -> Dismissal."
        }
    ]
});