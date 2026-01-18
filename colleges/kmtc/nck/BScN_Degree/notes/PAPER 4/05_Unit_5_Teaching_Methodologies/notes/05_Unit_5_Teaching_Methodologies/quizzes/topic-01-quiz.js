registerQuiz("topic-01-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-01-quiz",
    "metadata": {
        "title": "Topic 1: Historical Background & Principles",
        "description": "Test your knowledge on the history of education in Kenya, principles of learning, and key learning theories.",
        "topicId": "topic-01",
        "difficulty": "beginner",
        "estimatedTime": 15,
        "passingScore": 80,
        "createdAt": "2026-01-17T00:00:00Z",
        "updatedAt": "2026-01-17T00:00:00Z",
        "tags": ["history", "principles", "theories"]
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which report from 1964 was set up to investigate ways of improving education to fight ignorance, disease, and poverty in Kenya?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Ominde Report", "isCorrect": true },
                { "id": "opt2", "text": "Mackay Report", "isCorrect": false },
                { "id": "opt3", "text": "Koech Report", "isCorrect": false },
                { "id": "opt4", "text": "Gachathi Report", "isCorrect": false }
            ],
            "explanation": "The Ominde Report (1964) was the first post-independence commission addressing disease, poverty, and ignorance."
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "The art of helping adults to learn is called __b1__, while the art of helping children to learn is called __b2__.",
            "points": 2,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["andragogy"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["pedagogy"], "caseSensitive": false }
            ],
            "explanation": "Andragogy refers to adult learning principles; Pedagogy refers to child learning."
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "According to Bloom, what are the three domains of learning? (Select all that apply)",
            "points": 3,
            "options": [
                { "id": "opt1", "text": "Cognitive Domain", "isCorrect": true },
                { "id": "opt2", "text": "Affective Domain", "isCorrect": true },
                { "id": "opt3", "text": "Psychomotor Domain", "isCorrect": true },
                { "id": "opt4", "text": "Social Domain", "isCorrect": false },
                { "id": "opt5", "text": "Spiritual Domain", "isCorrect": false }
            ],
            "explanation": "Bloom's taxonomy consists of Cognitive (knowledge), Affective (attitudes), and Psychomotor (skills)."
        },
        {
            "id": "q4",
            "type": "matching",
            "question": "Match the theorist to their key contribution.",
            "points": 4,
            "pairs": [
                { "id": "p1", "left": "B.F. Skinner", "right": "Operant Conditioning / Rewards" },
                { "id": "p2", "left": "Carl Rogers", "right": "Learner-Centred Approach" },
                { "id": "p3", "left": "Jerome Bruner", "right": "Discovery Learning" },
                { "id": "p4", "left": "D.P. Ausubel", "right": "Known to Unknown" }
            ],
            "explanation": "Skinner = Behaviourism; Rogers = Humanism; Bruner = Discovery; Ausubel = Meaningful Learning."
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "According to Maslow, education should primarily involve force-feeding prescribed knowledge.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "Maslow believed education should help students develop self-knowledge and values, emphasizing self-enhancement over force-feeding."
        }
    ]
});