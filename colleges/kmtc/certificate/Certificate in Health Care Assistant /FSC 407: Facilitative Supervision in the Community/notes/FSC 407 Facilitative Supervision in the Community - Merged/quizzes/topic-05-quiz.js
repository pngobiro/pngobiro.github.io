// quizzes/topic-05-quiz.js
registerQuiz("topic-05-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-05-quiz",
    "metadata": {
        "title": "Conflict Resolution in Facilitative Supervision",
        "description": "Test your ability to identify sources of conflict and apply resolution principles and steps.",
        "topicId": "topic-05-conflict-resolution",
        "difficulty": "advanced",
        "estimatedTime": 15,
        "passingScore": 80,
        "createdAt": "2026-01-13T12:00:00Z",
        "tags": ["conflict", "resolution", "management"]
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
            "id": "q1",
            "type": "multiple-choice",
            "question": "What is 'Conflict Resolution' defined as?",
            "points": 10,
            "options": [
                {
                    "id": "a",
                    "text": "Ignoring the problem until it goes away.",
                    "isCorrect": false
                },
                {
                    "id": "b",
                    "text": "The process of resolving a dispute by meeting at least some of each side's needs.",
                    "isCorrect": true
                },
                {
                    "id": "c",
                    "text": "Using authority to enforce a decision on all parties.",
                    "isCorrect": false
                },
                {
                    "id": "d",
                    "text": "A state of opposition between ideas and interests.",
                    "isCorrect": false
                }
            ],
            "explanation": "Conflict Resolution is the process of resolving a dispute by meeting at least some of each side's needs and addressing their interests."
        },
        {
            "id": "q2",
            "type": "multiple-select",
            "question": "Which of the following are common sources of conflict? (Select all that apply)",
            "points": 10,
            "options": [
                {
                    "id": "a",
                    "text": "Misunderstanding and communication failure",
                    "isCorrect": true
                },
                {
                    "id": "b",
                    "text": "Differences in methods and approaches to work",
                    "isCorrect": true
                },
                {
                    "id": "c",
                    "text": "Clear and undisputed authority",
                    "isCorrect": false
                },
                {
                    "id": "d",
                    "text": "Lack of cooperation",
                    "isCorrect": true
                },
                {
                    "id": "e",
                    "text": "Non-compliance issues",
                    "isCorrect": true
                }
            ],
            "partialCredit": true,
            "explanation": "Sources of conflict include communication failure, method differences, lack of cooperation, authority issues, and non-compliance."
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "Which principle of conflict resolution focuses on separating issues from emotions?",
            "points": 10,
            "options": [
                {
                    "id": "a",
                    "text": "Clarify the conflict situation",
                    "isCorrect": false
                },
                {
                    "id": "b",
                    "text": "Define interests",
                    "isCorrect": true
                },
                {
                    "id": "c",
                    "text": "Invoke overriding interest",
                    "isCorrect": false
                },
                {
                    "id": "d",
                    "text": "Focus on an exchange",
                    "isCorrect": false
                }
            ],
            "explanation": "The principle 'Define interests' explicitly mentions separating issues and emotions."
        },
        {
            "id": "q4",
            "type": "ordering",
            "question": "Order the first 4 steps of effective conflict resolution:",
            "points": 15,
            "items": [
                {
                    "id": "i1",
                    "text": "Be aware (Conflict can rise at any time)",
                    "correctPosition": 1
                },
                {
                    "id": "i2",
                    "text": "Be proactive (Prevention is effective)",
                    "correctPosition": 2
                },
                {
                    "id": "i3",
                    "text": "Seek to understand all sides",
                    "correctPosition": 3
                },
                {
                    "id": "i4",
                    "text": "Initiate dialogue",
                    "correctPosition": 4
                }
            ],
            "explanation": "The initial steps are: Be aware -> Be proactive -> Seek to understand -> Initiate dialogue."
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "Which skill is NOT typically associated with effective conflict resolution?",
            "points": 5,
            "options": [
                {
                    "id": "a",
                    "text": "Empathy",
                    "isCorrect": false
                },
                {
                    "id": "b",
                    "text": "Appropriate assertiveness",
                    "isCorrect": false
                },
                {
                    "id": "c",
                    "text": "Aggressive confrontation",
                    "isCorrect": true
                },
                {
                    "id": "d",
                    "text": "Win-win approach",
                    "isCorrect": false
                }
            ],
            "explanation": "Effective conflict resolution uses empathy, assertiveness, and a win-win approach. Aggression should be resisted."
        }
    ]
});