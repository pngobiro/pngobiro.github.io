registerQuiz("topic-01-introduction-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-01-introduction-quiz",
    "metadata": {
        "title": "Introduction to Community Diagnosis",
        "description": "Assess your understanding of the definitions, core concepts, and ethical considerations.",
        "topicId": "topic-01-introduction",
        "difficulty": "beginner",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2025-12-26T10:00:00Z",
        "tags": ["concepts", "ethics", "definitions"]
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
            "question": "What is the primary definition of Community Diagnosis?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Treating individual patients in a rural setting.", "isCorrect": false },
                { "id": "b", "text": "The process where health workers and community members identify and prioritize health problems.", "isCorrect": true },
                { "id": "c", "text": "A government census of the population.", "isCorrect": false },
                { "id": "d", "text": "Diagnosing diseases in a hospital laboratory.", "isCorrect": false }
            ],
            "explanation": "Community diagnosis is the process involving both health workers and the community to identify and prioritize health problems."
        },
        {
            "id": "q2",
            "type": "multiple-select",
            "question": "Which of the following are the four concepts of Primary Health Care that determine community participation? (Select all that apply)",
            "points": 20,
            "options": [
                { "id": "a", "text": "Acceptability", "isCorrect": true },
                { "id": "b", "text": "Accessibility", "isCorrect": true },
                { "id": "c", "text": "Accountability", "isCorrect": false },
                { "id": "d", "text": "Affordability", "isCorrect": true },
                { "id": "e", "text": "Availability", "isCorrect": true }
            ],
            "explanation": "The four pillars are Acceptability, Accessibility, Affordability, and Availability."
        },
        {
            "id": "q3",
            "type": "true-false",
            "question": "The community diagnosis process emphasizes that the health worker alone should identify and solve the community's problems.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "False. It emphasizes TOTAL community involvement, as members know their problems better and can prioritize them effectively."
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "Which of the following is NOT a step to ensure ethical considerations are met?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Obtaining informed consent", "isCorrect": false },
                { "id": "b", "text": "Ensuring confidentiality of data", "isCorrect": false },
                { "id": "c", "text": "Training interviewers", "isCorrect": false },
                { "id": "d", "text": "Forcing participation to ensure data accuracy", "isCorrect": true }
            ],
            "explanation": "Participation must be voluntary; forcing participation violates ethical standards."
        },
        {
            "id": "q5",
            "type": "fill-blank",
            "question": "Community diagnosis aims to establish an __1__ baseline for measuring improvement over time.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["epidemiologic", "epidemiological"], "caseSensitive": false }
            ],
            "explanation": "An epidemiologic baseline is crucial for tracking health improvements."
        },
        {
            "id": "q6",
            "type": "matching",
            "question": "Match the term to its description.",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Community Diagnosis", "right": "Identification of problems with the community" },
                { "id": "p2", "left": "Community Analysis", "right": "Examining data to define needs and resources" },
                { "id": "p3", "left": "Community Profile", "right": "The product/output of community analysis" }
            ]
        }
    ]
});