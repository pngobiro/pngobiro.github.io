registerQuiz("topic-01-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-01-quiz",
    "metadata": {
        "title": "Topic 01: Anatomy of the GIT",
        "description": "Review of GIT structure, salivary functions, and gastric secretions.",
        "topicId": "topic-01-anatomy",
        "difficulty": "beginner",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2025-12-25T00:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "What is the approximate length of the Gastrointestinal Tract (GIT)?",
            "points": 10,
            "options": [
                { "id": "a", "text": "10 – 15 feet", "isCorrect": false },
                { "id": "b", "text": "23 – 26 feet", "isCorrect": true },
                { "id": "c", "text": "30 – 35 feet", "isCorrect": false },
                { "id": "d", "text": "40 – 45 feet", "isCorrect": false }
            ],
            "explanation": "The GIT is 23 – 26 feet long (7m – 7.9m)."
        },
        {
            "id": "q2",
            "type": "multiple-select",
            "question": "Which of the following are functions of Saliva? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Cleaning effect (washing away food debris)", "isCorrect": true },
                { "id": "b", "text": "Digestion of fats", "isCorrect": false },
                { "id": "c", "text": "Antibacterial effect", "isCorrect": true },
                { "id": "d", "text": "pH buffering effect", "isCorrect": true }
            ],
            "explanation": "Saliva cleans the mouth, has antibacterial properties, and buffers pH to prevent caries. It digests starches (amylase), not fats."
        },
        {
            "id": "q3",
            "type": "true-false",
            "question": "The stomach produces approximately 2.4 litres of fluid daily and can have a pH as low as 1.",
            "points": 10,
            "correctAnswer": true,
            "explanation": "The stomach produces 2.4 litres of fluid daily and can have a pH of 1 acidity from Parietal/Oxyntic cells."
        },
        {
            "id": "q4",
            "type": "matching",
            "question": "Match the small intestine section to its position:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Proximal", "right": "Duodenum" },
                { "id": "p2", "left": "Middle", "right": "Jejunum" },
                { "id": "p3", "left": "Distal", "right": "Ileum" }
            ]
        },
        {
            "id": "q5",
            "type": "fill-blank",
            "question": "The Intrinsic Factor combines with dietary Vitamin __1__ so that it can be absorbed in the Ileum.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["B12", "B-12", "b12"], "caseSensitive": false }
            ],
            "explanation": "Intrinsic factor is essential for the absorption of Vitamin B12."
        }
    ]
});
