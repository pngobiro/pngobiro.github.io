registerQuiz("topic-05-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-05-quiz",
    "metadata": {
        "title": "IEC & Adult Learning Quiz",
        "description": "Check your understanding of Information, Education, Communication and teaching skills.",
        "topicId": "topic-05-iec",
        "difficulty": "beginner",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2025-01-13T12:00:00Z",
        "tags": ["iec", "education", "communication"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "What does 'IEC' stand for?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Internal Education Control", "isCorrect": false },
                { "id": "b", "text": "Information, Education and Communication", "isCorrect": true },
                { "id": "c", "text": "Integrated Emergency Care", "isCorrect": false },
                { "id": "d", "text": "International Environmental Center", "isCorrect": false }
            ],
            "explanation": "IEC stands for Information, Education and Communication."
        },
        {
            "id": "q2",
            "type": "multiple-select",
            "question": "Which of the following are factors that positively influence adult learning? (Select all that apply)",
            "points": 20,
            "options": [
                { "id": "a", "text": "They make the decision to learn on their own", "isCorrect": true },
                { "id": "b", "text": "Information is of immediate use/relevance", "isCorrect": true },
                { "id": "c", "text": "Learning takes place in an atmosphere of trust", "isCorrect": true },
                { "id": "d", "text": "They receive immediate feedback", "isCorrect": true }
            ],
            "explanation": "All listed options are positive factors for adult learning: autonomy, relevance, trust, and feedback."
        },
        {
            "id": "q3",
            "type": "matching",
            "question": "Match the purpose of IEC to its description:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Inform", "right": "Tell people about health/related issues" },
                { "id": "p2", "left": "Dispel Rumours", "right": "Correct misconceptions and reassure" },
                { "id": "p3", "left": "Motivate", "right": "Encourage people to seek care/change habits" },
                { "id": "p4", "left": "Empower", "right": "Enable participation in implementation" }
            ],
            "explanation": "IEC aims to Inform, Dispel rumours, Motivate, and Empower communities."
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "When teaching a community, you should assume they have no prior knowledge and start from scratch.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "You should always bear in mind that people have some knowledge, no matter how inaccurate. Start with what they know."
        },
        {
            "id": "q5",
            "type": "fill-blank",
            "question": "Knowing the health problems of your target audience enables you to determine their desires and interests, and identify what __b1__ will be presented.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["information", "Information"], "caseSensitive": false }
            ],
            "explanation": "Understanding the audience helps identify what information is relevant and necessary to present."
        }
    ]
});