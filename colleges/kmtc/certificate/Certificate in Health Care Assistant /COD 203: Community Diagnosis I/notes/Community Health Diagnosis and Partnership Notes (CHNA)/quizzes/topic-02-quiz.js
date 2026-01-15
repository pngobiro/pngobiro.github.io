if (typeof registerQuiz === 'function') {
    registerQuiz("topic-02-quiz", {
        "schemaVersion": "1.0",
        "quizId": "topic-02-quiz",
        "metadata": {
            "title": "Methodology & Tools Quiz",
            "description": "Test your knowledge on CHA design steps and preliminary tools.",
            "topicId": "topic-02",
            "difficulty": "intermediate",
            "estimatedTime": 8,
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
                "type": "ordering",
                "question": "Order the first 5 steps of the CHA Design Process:",
                "points": 15,
                "items": [
                    { "id": "i1", "text": "Define Scope and Goals", "correctPosition": 1 },
                    { "id": "i2", "text": "Assemble Assessment Team", "correctPosition": 2 },
                    { "id": "i3", "text": "Conduct Literature Review", "correctPosition": 3 },
                    { "id": "i4", "text": "Data Collection Methodology", "correctPosition": 4 },
                    { "id": "i5", "text": "Data Analysis", "correctPosition": 5 }
                ],
                "explanation": "The process begins with scoping, then team building, reviewing existing lit, planning collection, and analyzing data."
            },
            {
                "id": "q2",
                "type": "multiple-choice",
                "question": "Which preliminary tool provides a snapshot of key demographic, socioeconomic, and health indicators?",
                "points": 10,
                "options": [
                    { "id": "a", "text": "Rapid Needs Assessment", "isCorrect": false },
                    { "id": "b", "text": "Community Health Profile", "isCorrect": true },
                    { "id": "c", "text": "Community Mapping", "isCorrect": false },
                    { "id": "d", "text": "Stakeholder Survey", "isCorrect": false }
                ],
                "explanation": "The Community Health Profile specifically compiles these key indicators into a summary."
            },
            {
                "id": "q3",
                "type": "fill-blank",
                "question": "A __b1__ review involves identifying and reviewing relevant research, reports, and data on the community's health status before collecting new data.",
                "points": 10,
                "blanks": [
                    { "id": "b1", "acceptedAnswers": ["literature", "Literature"], "caseSensitive": false }
                ],
                "explanation": "A Literature Review prevents duplication of effort and provides context."
            },
            {
                "id": "q4",
                "type": "multiple-select",
                "question": "Select the essential components of effective preliminary tools: (Select all that apply)",
                "points": 15,
                "options": [
                    { "id": "a", "text": "Clear and concise questions", "isCorrect": true },
                    { "id": "b", "text": "Cultural sensitivity", "isCorrect": true },
                    { "id": "c", "text": "Complex academic language", "isCorrect": false },
                    { "id": "d", "text": "Ethical considerations", "isCorrect": true }
                ],
                "partialCredit": true,
                "explanation": "Tools must be understandable (concise), respectful (cultural/ethical), and avoid complexity/jargon."
            },
            {
                "id": "q5",
                "type": "matching",
                "question": "Match the data source to its category:",
                "points": 20,
                "pairs": [
                    { "id": "p1", "left": "Primary Data", "right": "Surveys and Focus Groups" },
                    { "id": "p2", "left": "Secondary Data", "right": "Census and Vital Statistics" },
                    { "id": "p3", "left": "Qualitative Data", "right": "Interviews and Observations" },
                    { "id": "p4", "left": "Quantitative Data", "right": "Statistical Records" }
                ],
                "explanation": "Primary is collected firsthand; Secondary exists already. Qualitative is descriptive; Quantitative is numerical."
            },
            {
                "id": "q6",
                "type": "true-false",
                "question": "Pilot testing tools with a small sample is unnecessary if the questions seem clear to the research team.",
                "points": 10,
                "correctAnswer": false,
                "explanation": "Pilot testing is crucial to ensure clarity for the target audience, regardless of how clear it seems to researchers."
            }
        ]
    });
}