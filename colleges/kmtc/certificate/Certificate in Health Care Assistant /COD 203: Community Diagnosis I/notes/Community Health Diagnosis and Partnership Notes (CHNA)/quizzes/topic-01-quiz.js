if (typeof registerQuiz === 'function') {
    registerQuiz("topic-01-quiz", {
        "schemaVersion": "1.0",
        "quizId": "topic-01-quiz",
        "metadata": {
            "title": "Terms & CHA Overview Quiz",
            "description": "Test your understanding of key community health definitions and the CHA process.",
            "topicId": "topic-01",
            "difficulty": "beginner",
            "estimatedTime": 5,
            "passingScore": 70,
            "createdAt": "2026-01-09T00:00:00Z"
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
                "type": "true-false",
                "question": "According to the definition, health is merely the absence of disease or infirmity.",
                "points": 10,
                "correctAnswer": false,
                "explanation": "Health is a state of complete physical, mental, and social well-being, <strong>not merely</strong> the absence of disease or infirmity."
            },
            {
                "id": "q2",
                "type": "matching",
                "question": "Match the epidemiological term to its correct definition:",
                "points": 20,
                "pairs": [
                    { "id": "p1", "left": "Prevalence", "right": "Total number of existing cases at a specific time" },
                    { "id": "p2", "left": "Incidence", "right": "Number of new cases occurring over a specific period" },
                    { "id": "p3", "left": "Mortality Rate", "right": "Number of deaths per unit of population" },
                    { "id": "p4", "left": "Morbidity Rate", "right": "Incidence of disease within a population" }
                ],
                "explanation": "Prevalence counts all existing cases (total burden), while Incidence counts only new cases (risk of contracting)."
            },
            {
                "id": "q3",
                "type": "ordering",
                "question": "Arrange the Key Components of a Community Health Needs Assessment (CHA) in logical order:",
                "points": 15,
                "items": [
                    { "id": "i1", "text": "Data Collection", "correctPosition": 1 },
                    { "id": "i2", "text": "Data Analysis", "correctPosition": 2 },
                    { "id": "i3", "text": "Needs Identification", "correctPosition": 3 },
                    { "id": "i4", "text": "Development of CHIP (Improvement Plan)", "correctPosition": 4 }
                ],
                "explanation": "The process flows from gathering data, to analysis, identification, and finally planning."
            },
            {
                "id": "q4",
                "type": "multiple-select",
                "question": "Which of the following are stated benefits of conducting a CHA? (Select all that apply)",
                "points": 15,
                "options": [
                    { "id": "a", "text": "Efficient resource allocation", "isCorrect": true },
                    { "id": "b", "text": "Data-driven decision making", "isCorrect": true },
                    { "id": "c", "text": "Elimination of all community diseases", "isCorrect": false },
                    { "id": "d", "text": "Stronger community partnerships", "isCorrect": true }
                ],
                "partialCredit": true,
                "explanation": "CHA improves outcomes and allocation but cannot guarantee the elimination of all diseases."
            },
            {
                "id": "q5",
                "type": "fill-blank",
                "question": "A __b1__ is a relationship between two or more organizations working together to achieve a common goal.",
                "points": 10,
                "blanks": [
                    { "id": "b1", "acceptedAnswers": ["partnership", "Partnership"], "caseSensitive": false }
                ],
                "explanation": "A partnership is the fundamental relationship defined as working together to achieve a common goal."
            },
            {
                "id": "q6",
                "type": "multiple-choice",
                "question": "What is the specific term for the 'process of identifying a disease or condition through careful examination and analysis'?",
                "points": 10,
                "options": [
                    { "id": "a", "text": "Community Profile", "isCorrect": false },
                    { "id": "b", "text": "Diagnosis", "isCorrect": true },
                    { "id": "c", "text": "Needs Assessment", "isCorrect": false },
                    { "id": "d", "text": "Surveillance", "isCorrect": false }
                ],
                "explanation": "Diagnosis is defined specifically as the process of identification through examination and analysis."
            }
        ]
    });
}