registerQuiz("topic-01-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-01-quiz",
    "metadata": {
        "title": "Concept of Community Health Nursing",
        "description": "Assess your understanding of community definitions, family structures, and home visiting.",
        "topicId": "topic-01-concept",
        "difficulty": "beginner",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2025-01-13T12:00:00Z",
        "tags": ["community", "family", "home-visiting"]
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
            "question": "Which type of family consists of a husband, a wife, and their children (with or without children)?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Extended Family", "isCorrect": false },
                { "id": "b", "text": "Nuclear Family", "isCorrect": true },
                { "id": "c", "text": "Blended Family", "isCorrect": false },
                { "id": "d", "text": "Single Parent Family", "isCorrect": false }
            ],
            "explanation": "A Nuclear Family consists of a husband and a wife with or without children. It is often considered the family of procreation."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the factor affecting family health to its category (Internal vs External):",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Family Size", "right": "Internal Factor" },
                { "id": "p2", "left": "Climate", "right": "External Factor" },
                { "id": "p3", "left": "Biological Characteristics", "right": "Internal Factor" },
                { "id": "p4", "left": "Housing and Residence", "right": "External Factor" }
            ],
            "explanation": "Internal factors relate to the family structure and biology. External factors relate to the environment and location."
        },
        {
            "id": "q3",
            "type": "ordering",
            "question": "Arrange the phases of the Home Visiting process in the correct chronological order:",
            "points": 20,
            "items": [
                { "id": "i1", "text": "Entry or Initiation Phase", "correctPosition": 1 },
                { "id": "i2", "text": "Pre-visit Activities", "correctPosition": 2 },
                { "id": "i3", "text": "Activities During Home Visiting", "correctPosition": 3 },
                { "id": "i4", "text": "Termination Phase", "correctPosition": 4 },
                { "id": "i5", "text": "Post-visit Activities", "correctPosition": 5 }
            ],
            "explanation": "The process starts with initiation (sharing info), followed by preparation (pre-visit), the actual visit activities, termination of the visit, and finally recording/reporting (post-visit)."
        },
        {
            "id": "q4",
            "type": "multiple-select",
            "question": "Which of the following are listed as functions of a community? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Transmitting and sharing information/ideas", "isCorrect": true },
                { "id": "b", "text": "Producing and distributing goods/services", "isCorrect": true },
                { "id": "c", "text": "Providing total isolation for individuals", "isCorrect": false },
                { "id": "d", "text": "Protecting individual and group rights", "isCorrect": true }
            ],
            "explanation": "Communities function to share information, produce goods, provide companionship (not isolation), and protect rights."
        },
        {
            "id": "q5",
            "type": "fill-blank",
            "question": "A __b1__ is a group of people living in a certain geographical area and working together for a common goal.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["community", "Community"], "caseSensitive": false }
            ],
            "explanation": "This is the definition of a Community provided in Section 1."
        },
        {
            "id": "q6",
            "type": "true-false",
            "question": "In a Blended Family, the husband and wife bring related children from the same previous marriage.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "In a Blended Family, husband and wife bring UNRELATED children from their previous marriages into the new marriage."
        }
    ]
});