if (typeof registerQuiz === 'function') {
    registerQuiz("topic-04-quiz", {
        "schemaVersion": "1.0",
        "quizId": "topic-04-quiz",
        "metadata": {
            "title": "Prioritization of Health Needs Quiz",
            "description": "Test your knowledge on criteria, methods, and challenges in prioritizing community health needs.",
            "topicId": "topic-04",
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
                "question": "What is the primary reason for prioritizing community health needs?",
                "points": 10,
                "options": [
                    { "id": "a", "text": "To eliminate all diseases immediately", "isCorrect": false },
                    { "id": "b", "text": "To ensure limited resources are allocated to the most pressing concerns", "isCorrect": true },
                    { "id": "c", "text": "To satisfy government regulations only", "isCorrect": false },
                    { "id": "d", "text": "To avoid involving the community", "isCorrect": false }
                ],
                "explanation": "Prioritization is essential because resources (funding, time, personnel) are limited, and must be focused where they are needed most."
            },
            {
                "id": "q2",
                "type": "matching",
                "question": "Match the prioritization factor to its definition:",
                "points": 20,
                "pairs": [
                    { "id": "p1", "left": "Magnitude", "right": "How many people are affected (prevalence/incidence)" },
                    { "id": "p2", "left": "Severity", "right": "The impact on individuals (mortality/urgency)" },
                    { "id": "p3", "left": "Preventability", "right": "Feasibility of preventing or reducing the problem" },
                    { "id": "p4", "left": "Capacity", "right": "Community's resources and willingness to act" }
                ],
                "explanation": "Magnitude refers to size, Severity to impact, Preventability to potential solution, and Capacity to ability to act."
            },
            {
                "id": "q3",
                "type": "multiple-select",
                "question": "Which of the following are common methods used for prioritizing health needs? (Select all that apply)",
                "points": 15,
                "options": [
                    { "id": "a", "text": "Weighted criteria matrix", "isCorrect": true },
                    { "id": "b", "text": "Dot voting", "isCorrect": true },
                    { "id": "c", "text": "Random selection", "isCorrect": false },
                    { "id": "d", "text": "Community input", "isCorrect": true }
                ],
                "partialCredit": true,
                "explanation": "Weighted matrices, dot voting, and community input are structured methods. Random selection is not appropriate."
            },
            {
                "id": "q4",
                "type": "true-false",
                "question": "The prioritization process should rely solely on statistical data and ignore community perspectives to ensure objectivity.",
                "points": 10,
                "correctAnswer": false,
                "explanation": "Effective prioritization must involve the community to ensure the issues selected are perceived as important by those affected (Community Input)."
            },
            {
                "id": "q5",
                "type": "fill-blank",
                "question": "When selecting interventions, it is crucial to choose those that are __b1__-based, meaning they have proven effectiveness.",
                "points": 10,
                "blanks": [
                    { "id": "b1", "acceptedAnswers": ["evidence", "Evidence"], "caseSensitive": false }
                ],
                "explanation": "Evidence-based interventions are those supported by research and proven to be effective."
            },
            {
                "id": "q6",
                "type": "ordering",
                "question": "Arrange the general steps of the prioritization process in order:",
                "points": 15,
                "items": [
                    { "id": "i1", "text": "Community Health Assessment (Data Collection)", "correctPosition": 1 },
                    { "id": "i2", "text": "Data Analysis", "correctPosition": 2 },
                    { "id": "i3", "text": "Identification of Health Needs", "correctPosition": 3 },
                    { "id": "i4", "text": "Prioritization (Ranking)", "correctPosition": 4 },
                    { "id": "i5", "text": "Selection of Priorities", "correctPosition": 5 }
                ],
                "explanation": "The process flows from gathering data, to analyzing it, identifying needs, ranking them, and finally selecting the top priorities."
            }
        ]
    });
}