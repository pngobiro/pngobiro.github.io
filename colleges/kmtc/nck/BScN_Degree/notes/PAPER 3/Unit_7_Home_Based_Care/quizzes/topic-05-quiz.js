registerQuiz("topic-05-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-05-quiz",
    "title": "Community Mobilisation",
    "description": "Assess your understanding of community mobilisation processes and strategies.",
    "metadata": {
        "title": "Topic 5: Community Mobilisation",
        "description": "Process and importance of mobilisation",
        "topicId": "topic-05",
        "difficulty": "beginner",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2026-01-17T12:00:00Z",
        "updatedAt": "2026-01-17T12:00:00Z",
        "tags": ["community", "mobilisation", "process"]
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
            "id": "t5-q1",
            "type": "multiple-choice",
            "question": "What is the definition of Community Mobilisation?",
            "points": 1,
            "options": [
                { "id": "o1", "text": "Forcing people to work for free.", "isCorrect": false },
                { "id": "o2", "text": "The process of getting the community incorporated to fully participate in programmes for ownership and sustainability.", "isCorrect": true },
                { "id": "o3", "text": "Distributing money to village elders.", "isCorrect": false },
                { "id": "o4", "text": "A government census program.", "isCorrect": false }
            ],
            "explanation": "Mobilisation is about incorporation, participation, ownership, and sustainability."
        },
        {
            "id": "t5-q2",
            "type": "ordering",
            "question": "Arrange the 4 steps of community mobilisation in order:",
            "points": 3,
            "items": [
                { "id": "s1", "text": "Planning and Organising Yourself", "correctPosition": 1 },
                { "id": "s2", "text": "Entering the Community", "correctPosition": 2 },
                { "id": "s3", "text": "Conducting Mobilisation Sessions", "correctPosition": 3 },
                { "id": "s4", "text": "Monitoring Response and Reinforcement", "correctPosition": 4 }
            ],
            "explanation": "Plan -> Enter -> Conduct -> Monitor."
        },
        {
            "id": "t5-q3",
            "type": "multiple-select",
            "question": "Which of the following are potential Community Mobilisers? (Select all that apply)",
            "points": 2,
            "options": [
                { "id": "op1", "text": "Local administrative officers (Chiefs)", "isCorrect": true },
                { "id": "op2", "text": "Religious leaders", "isCorrect": true },
                { "id": "op3", "text": "Women's groups", "isCorrect": true },
                { "id": "op4", "text": "Strangers from outside the country", "isCorrect": false }
            ],
            "explanation": "Local leaders, religious figures, and organized groups are key mobilisers. Strangers typically do not have the influence required."
        },
        {
            "id": "t5-q4",
            "type": "true-false",
            "question": "A lack of appropriate information can hinder community mobilisation.",
            "points": 1,
            "correctAnswer": true,
            "explanation": "Lack of information is a major hindrance; providing IEC materials is a solution."
        },
        {
            "id": "t5-q5",
            "type": "multiple-choice",
            "question": "To ensure sustainability of HBC programmes, what is essential?",
            "points": 1,
            "options": [
                { "id": "sus1", "text": "Constant funding from foreign donors only", "isCorrect": false },
                { "id": "sus2", "text": "Paying the community members salaries", "isCorrect": false },
                { "id": "sus3", "text": "Community involvement, participation, and ownership", "isCorrect": true },
                { "id": "sus4", "text": "Excluding local leaders", "isCorrect": false }
            ],
            "explanation": "Sustainability relies on the community feeling ownership and participating actively."
        }
    ]
});