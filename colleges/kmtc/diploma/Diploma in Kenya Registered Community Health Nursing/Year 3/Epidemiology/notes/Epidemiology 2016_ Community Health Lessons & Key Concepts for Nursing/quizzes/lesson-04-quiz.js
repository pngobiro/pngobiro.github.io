registerQuiz("lesson-04-quiz", {
    "schemaVersion": "1.0",
    "quizId": "lesson-04-quiz",
    "metadata": {
        "title": "Descriptive Epidemiology",
        "description": "Test your knowledge on the Person-Place-Time model and variables affecting disease distribution.",
        "topicId": "lesson-04",
        "difficulty": "beginner",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2025-12-26T10:00:00Z",
        "tags": ["descriptive", "person-place-time"]
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-select",
            "question": "The Descriptive Epidemiology model analyzes disease according to which three variables? (Select 3)",
            "points": 3,
            "options": [
                { "id": "a", "text": "Person", "isCorrect": true },
                { "id": "b", "text": "Cause", "isCorrect": false },
                { "id": "c", "text": "Place", "isCorrect": true },
                { "id": "d", "text": "Time", "isCorrect": true },
                { "id": "e", "text": "Treatment", "isCorrect": false }
            ],
            "explanation": "Descriptive epidemiology focuses on Person (who), Place (where), and Time (when)."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "Which of the following is considered the single most important 'Person' determinant of disease?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Occupation", "isCorrect": false },
                { "id": "b", "text": "Age", "isCorrect": true },
                { "id": "c", "text": "Marital Status", "isCorrect": false },
                { "id": "d", "text": "Ethnicity", "isCorrect": false }
            ],
            "explanation": "Age is the single most important determinant because disease severity and frequency vary significantly with age."
        },
        {
            "id": "q3",
            "type": "matching",
            "question": "Match the Time trend with its description:",
            "points": 2,
            "pairs": [
                { "id": "p1", "left": "Cyclic Trends", "right": "Predictable recurrence (e.g., malaria in rainy season)" },
                { "id": "p2", "left": "Secular Trends", "right": "Long-term changes over years or decades (e.g., Ebola trends)" }
            ],
            "explanation": "Cyclic happens in cycles (seasons). Secular happens over long periods."
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "Descriptive epidemiology is primarily concerned with testing hypotheses about disease causation.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "False. Descriptive epidemiology GENERATES hypotheses. Analytic epidemiology TESTS them."
        },
        {
            "id": "q5",
            "type": "short-answer",
            "question": "Why might 'Place' be an important variable in disease distribution?",
            "points": 2,
            "keywords": ["environment", "geography", "barriers", "climate", "conditions"],
            "minKeywords": 1,
            "modelAnswer": "Place determines environmental conditions, climate, vectors, and geographical barriers that influence disease occurrence.",
            "maxLength": 100
        },
        {
            "id": "q6",
            "type": "multiple-choice",
            "question": "Which 'Person' variable might explain why breast cancer is lower in married women compared to unmarried women?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Genetic susceptibility", "isCorrect": false },
                { "id": "b", "text": "Breast feeding (associated with family/marriage)", "isCorrect": true },
                { "id": "c", "text": "Education level", "isCorrect": false },
                { "id": "d", "text": "Income", "isCorrect": false }
            ],
            "explanation": "Marriage often correlates with child-bearing and breast feeding, which are protective factors against breast cancer."
        },
        {
            "id": "q7",
            "type": "fill-blank",
            "question": "Rate of death is generally higher for __1__ than __2__ in all age groups.",
            "points": 2,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["males", "men"], "caseSensitive": false },
                { "id": "2", "acceptedAnswers": ["females", "women"], "caseSensitive": false }
            ],
            "explanation": "Epidemiological data consistently shows higher mortality rates for males across age groups."
        },
        {
            "id": "q8",
            "type": "multiple-choice",
            "question": "Which of the following is NOT a 'Person' variable?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Socioeconomic Status", "isCorrect": false },
                { "id": "b", "text": "Altitude", "isCorrect": true },
                { "id": "c", "text": "Immune Status", "isCorrect": false },
                { "id": "d", "text": "Education", "isCorrect": false }
            ],
            "explanation": "Altitude is a 'Place' (environmental) variable."
        }
    ]
});