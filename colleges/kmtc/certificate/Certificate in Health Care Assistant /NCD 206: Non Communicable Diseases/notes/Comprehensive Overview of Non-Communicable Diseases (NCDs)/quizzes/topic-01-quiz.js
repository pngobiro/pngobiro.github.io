registerQuiz("topic-01-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-01-quiz",
    "metadata": {
        "title": "Introduction to NCDs",
        "description": "Test your knowledge on the definition, classification, and epidemiology of Non-Communicable Diseases.",
        "topicId": "topic-01-introduction",
        "difficulty": "beginner",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2026-01-10T12:00:00Z",
        "tags": ["intro", "ncd", "epidemiology"]
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
            "question": "What is the defining characteristic of Non-Communicable Diseases (NCDs)?",
            "points": 10,
            "options": [
                { "id": "a", "text": "They spread rapidly from person to person.", "isCorrect": false },
                { "id": "b", "text": "They are chronic conditions not caused by acute infections.", "isCorrect": true },
                { "id": "c", "text": "They are always present at birth.", "isCorrect": false },
                { "id": "d", "text": "They can be cured with a single course of antibiotics.", "isCorrect": false }
            ],
            "explanation": "NCDs are chronic conditions that do not result from acute infectious processes and are generally not transmissible."
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "Globally, NCDs account for approximately __b1__ percent of all deaths annually.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["71", "71%"], "caseSensitive": false }
            ],
            "explanation": "NCDs are the leading cause of death globally, responsible for 71% of deaths (41 million people)."
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "Select the behavioral risk factors associated with NCDs:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Tobacco use", "isCorrect": true },
                { "id": "b", "text": "Physical inactivity", "isCorrect": true },
                { "id": "c", "text": "Raised blood pressure", "isCorrect": false },
                { "id": "d", "text": "Unhealthy diet", "isCorrect": true },
                { "id": "e", "text": "Obesity", "isCorrect": false }
            ],
            "explanation": "Tobacco, inactivity, and unhealthy diet are *behavioral* risks. Raised blood pressure and obesity are *metabolic* risks."
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "The majority of premature NCD deaths (ages 30-69) occur in high-income countries.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "85% of premature NCD deaths occur in low- and middle-income countries."
        },
        {
            "id": "q5",
            "type": "matching",
            "question": "Match the risk factor type to the example:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Metabolic Risk", "right": "Raised Cholesterol" },
                { "id": "p2", "left": "Behavioral Risk", "right": "Harmful Alcohol Use" },
                { "id": "p3", "left": "Underlying Determinant", "right": "Globalization/Urbanization" }
            ]
        }
    ]
});