if (typeof registerQuiz === 'function') {
    registerQuiz("topic-05-quiz", {
        "schemaVersion": "1.0",
        "quizId": "topic-05-quiz",
        "metadata": {
            "title": "Implementation Strategies Quiz",
            "description": "Test your knowledge on developing strategies, SMART goals, and metrics.",
            "topicId": "topic-05",
            "difficulty": "intermediate",
            "estimatedTime": 10,
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
                "type": "multiple-choice",
                "question": "What is the primary function of implementation strategies in a CHNA?",
                "points": 10,
                "options": [
                    { "id": "a", "text": "To collect raw data only", "isCorrect": false },
                    { "id": "b", "text": "To translate identified needs into tangible interventions", "isCorrect": true },
                    { "id": "c", "text": "To strictly follow government protocols", "isCorrect": false },
                    { "id": "d", "text": "To identify stakeholders", "isCorrect": false }
                ],
                "explanation": "Implementation strategies act as the bridge between the assessment phase and actual improvement, turning data into action."
            },
            {
                "id": "q2",
                "type": "fill-blank",
                "question": "A goal that is quantifiable with specific metrics is considered __b1__.",
                "points": 10,
                "blanks": [
                    { "id": "b1", "acceptedAnswers": ["measurable", "Measurable"], "caseSensitive": false }
                ],
                "hint": "The 'M' in SMART goals.",
                "explanation": "Measurable goals allow for tracking progress using specific data or metrics."
            },
            {
                "id": "q3",
                "type": "ordering",
                "question": "Order the steps for developing implementation strategies:",
                "points": 15,
                "items": [
                    { "id": "i1", "text": "Align with Community Priorities", "correctPosition": 1 },
                    { "id": "i2", "text": "Set Clear Goals", "correctPosition": 2 },
                    { "id": "i3", "text": "Develop Action Plan", "correctPosition": 3 },
                    { "id": "i4", "text": "Evaluate and Adapt", "correctPosition": 4 }
                ],
                "explanation": "The process starts with alignment, moves to goal setting and planning, and concludes with evaluation."
            },
            {
                "id": "q4",
                "type": "matching",
                "question": "Match the metric type to its example:",
                "points": 20,
                "pairs": [
                    { "id": "p1", "left": "Population-level Metric", "right": "Prevalence rates of disease" },
                    { "id": "p2", "left": "Process Metric", "right": "Number of people reached by intervention" },
                    { "id": "p3", "left": "Outcome Metric", "right": "Changes in health behaviors" }
                ],
                "explanation": "Population metrics look at the whole community, process metrics track implementation activities, and outcome metrics measure the results of those activities."
            },
            {
                "id": "q5",
                "type": "multiple-select",
                "question": "Which of the following are core components of effective implementation strategies? (Select all that apply)",
                "points": 15,
                "options": [
                    { "id": "a", "text": "Evidence-Based Interventions", "isCorrect": true },
                    { "id": "b", "text": "Cultural Competence", "isCorrect": true },
                    { "id": "c", "text": "Working in isolation", "isCorrect": false },
                    { "id": "d", "text": "Multi-Sectoral Collaboration", "isCorrect": true }
                ],
                "partialCredit": true,
                "explanation": "Effective strategies rely on evidence, cultural fit, and collaboration. Working in isolation is contrary to effective community health practice."
            },
            {
                "id": "q6",
                "type": "true-false",
                "question": "A goal stating simply 'Improve physical activity' is considered a Measurable goal.",
                "points": 10,
                "correctAnswer": false,
                "explanation": "This is a **Non-Measurable** goal. A measurable goal would specify 'Increase activity by 20% in 2 years'."
            }
        ]
    });
}