if (typeof registerQuiz === 'function') {
    registerQuiz("topic-03-quiz", {
        "schemaVersion": "1.0",
        "quizId": "topic-03-quiz",
        "metadata": {
            "title": "Data Analysis & Visualization Quiz",
            "description": "Test your knowledge on data types, interpretation methods, and visualization techniques.",
            "topicId": "topic-03",
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
                "type": "multiple-choice",
                "question": "Which type of data is collected firsthand for a specific research purpose, such as through surveys or focus groups?",
                "points": 10,
                "options": [
                    { "id": "a", "text": "Secondary Data", "isCorrect": false },
                    { "id": "b", "text": "Primary Data", "isCorrect": true },
                    { "id": "c", "text": "Tertiary Data", "isCorrect": false },
                    { "id": "d", "text": "Administrative Data", "isCorrect": false }
                ],
                "explanation": "Primary data is collected directly by the researcher for the specific purpose at hand."
            },
            {
                "id": "q2",
                "type": "matching",
                "question": "Match the visualization type to its best use case:",
                "points": 20,
                "pairs": [
                    { "id": "p1", "left": "Line Graph", "right": "Showing trends over time" },
                    { "id": "p2", "left": "Bar Chart", "right": "Comparing outcomes between groups" },
                    { "id": "p3", "left": "Map", "right": "Geographic distribution of indicators" },
                    { "id": "p4", "left": "Scatter Plot", "right": "Identifying relationships between variables" }
                ],
                "explanation": "Line graphs are best for time series, bar charts for categorical comparison, maps for spatial data, and scatter plots for correlations."
            },
            {
                "id": "q3",
                "type": "true-false",
                "question": "Descriptive analysis involves drawing conclusions about a population based on sample data, such as through hypothesis testing.",
                "points": 10,
                "correctAnswer": false,
                "explanation": "This describes **Inferential Analysis**. Descriptive analysis summarizes data using measures like mean, median, and mode."
            },
            {
                "id": "q4",
                "type": "multiple-select",
                "question": "Select all key considerations for data analysis in a CHNA:",
                "points": 15,
                "options": [
                    { "id": "a", "text": "Data Quality (accuracy and completeness)", "isCorrect": true },
                    { "id": "b", "text": "Data Triangulation (using multiple sources)", "isCorrect": true },
                    { "id": "c", "text": "Avoiding community involvement", "isCorrect": false },
                    { "id": "d", "text": "Ethical considerations (privacy)", "isCorrect": true }
                ],
                "partialCredit": true,
                "explanation": "Community involvement is encouraged in data interpretation. Quality, triangulation, and ethics are critical considerations."
            },
            {
                "id": "q5",
                "type": "fill-blank",
                "question": "The process of identifying discrepancies between community health needs and available services is known as __b1__ analysis.",
                "points": 10,
                "blanks": [
                    { "id": "b1", "acceptedAnswers": ["gap", "Gap"], "caseSensitive": false }
                ],
                "explanation": "Gap analysis identifies what is missing between the current state (needs) and the existing provision (services)."
            },
            {
                "id": "q6",
                "type": "multiple-choice",
                "question": "Which tool allows for creating interactive dashboards and is listed as a data visualization tool?",
                "points": 10,
                "options": [
                    { "id": "a", "text": "Power BI", "isCorrect": true },
                    { "id": "b", "text": "Microsoft Word", "isCorrect": false },
                    { "id": "c", "text": "Notepad", "isCorrect": false },
                    { "id": "d", "text": "Adobe Acrobat", "isCorrect": false }
                ],
                "explanation": "Power BI (and Tableau) are specifically noted for creating interactive dashboards and reports."
            }
        ]
    });
}