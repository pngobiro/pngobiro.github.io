registerQuiz("topic-01-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-01-quiz",
    "metadata": {
        "title": "Concepts & Assessment Quiz",
        "description": "Test your knowledge on mental health definitions, etiology, and the Mental Status Examination.",
        "topicId": "topic-01",
        "difficulty": "beginner",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2025-12-28T12:00:00Z"
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate",
        "allowRetry": true
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "According to the WHO (1948), health is defined as:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Merely the absence of disease or infirmity", "isCorrect": false },
                { "id": "b", "text": "A state of complete physical, mental and social well-being", "isCorrect": true },
                { "id": "c", "text": "The ability to suppress negative emotions", "isCorrect": false },
                { "id": "d", "text": "Functioning effectively in the workplace", "isCorrect": false }
            ],
            "explanation": "WHO defines health as 'A state of complete physical, mental and social well-being and not merely the absence of disease or infirmity'."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the type of etiological factor to its definition:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Predisposing", "right": "Determines likelihood (e.g., genetics, early trauma)" },
                { "id": "p2", "left": "Precipitating", "right": "Triggers the onset (e.g., job loss, drug abuse)" },
                { "id": "p3", "left": "Perpetuating", "right": "Prolongs the course (e.g., social withdrawal)" }
            ],
            "explanation": "Predisposing factors set the stage, precipitating factors pull the trigger, and perpetuating factors keep the illness going."
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "In the MSE summary mnemonic **ACTMAD**, the 'A' stands for __b1__, and the 'T' stands for __b2__.",
            "points": 20,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["appearance", "Appearance"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["thought", "Thought process", "thought process"], "caseSensitive": false }
            ],
            "explanation": "ACTMAD: Appearance, Cognition, Thought process, Mood, Activities, Danger signs."
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "A patient is aware they are sick but blames it entirely on external factors or other people. What level of insight is this?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Level I (Complete denial)", "isCorrect": false },
                { "id": "b", "text": "Level III", "isCorrect": true },
                { "id": "c", "text": "Level V (Intellectual insight)", "isCorrect": false },
                { "id": "d", "text": "Level VI (True emotional insight)", "isCorrect": false }
            ],
            "explanation": "Level III insight involves admitting sickness but blaming it on others, external factors, or organic causes."
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "A hallucination is a misperception of a real external stimulus (e.g., seeing a rope as a snake).",
            "points": 10,
            "correctAnswer": false,
            "explanation": "That is the definition of an Illusion. A Hallucination is a perception experienced in the absence of an external stimulus."
        }
    ]
});