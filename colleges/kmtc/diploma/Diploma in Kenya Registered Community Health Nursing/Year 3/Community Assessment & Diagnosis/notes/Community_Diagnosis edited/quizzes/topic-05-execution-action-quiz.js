registerQuiz("topic-05-execution-action-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-05-execution-action-quiz",
    "metadata": {
        "title": "Execution & Action Quiz",
        "description": "Assess your understanding of survey execution, data analysis, reporting, and community action.",
        "topicId": "topic-05-execution-action",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2025-12-26T10:00:00Z",
        "tags": ["analysis", "reporting", "action"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "What is the primary purpose of 'Data Cleaning'?",
            "points": 10,
            "options": [
                { "id": "a", "text": "To convert data into numerical codes.", "isCorrect": false },
                { "id": "b", "text": "To find missing data and correct/exclude inconsistencies.", "isCorrect": true },
                { "id": "c", "text": "To arrange data into frequency tables.", "isCorrect": false },
                { "id": "d", "text": "To present data in a pie chart.", "isCorrect": false }
            ],
            "explanation": "Data cleaning involves identifying and fixing errors, missing values, or inconsistent information."
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "__1__ analysis is applied to data that can be counted but not measured (e.g., opinions), while __2__ analysis is for numerical data.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["qualitative"], "caseSensitive": false },
                { "id": "2", "acceptedAnswers": ["quantitative"], "caseSensitive": false }
            ],
            "explanation": "Qualitative = qualities/opinions; Quantitative = quantities/numbers."
        },
        {
            "id": "q3",
            "type": "matching",
            "question": "Match the report type to its description.",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Individual Report", "right": "Feedback to participant on abnormal findings" },
                { "id": "p2", "left": "Preliminary Report", "right": "General impressions given to leaders immediately after fieldwork" },
                { "id": "p3", "left": "Scientific Report", "right": "Detailed account of methodology and results" }
            ]
        },
        {
            "id": "q4",
            "type": "multiple-select",
            "question": "Which of the following are examples of Community Health Actions? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Health Education", "isCorrect": true },
                { "id": "b", "text": "Immunization campaigns", "isCorrect": true },
                { "id": "c", "text": "Environmental improvement", "isCorrect": true },
                { "id": "d", "text": "Ignoring the data", "isCorrect": false }
            ],
            "explanation": "Action involves mobilizing the community through education, immunization, and environmental changes."
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "When giving an Individual Report, you should arouse anxiety about harmless conditions to ensure the patient seeks help.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "False. You should be cautious NOT to arouse anxiety about harmless conditions; only report actionable findings."
        },
        {
            "id": "q6",
            "type": "ordering",
            "question": "Place the steps of Data Analysis in the logical sequence.",
            "points": 20,
            "items": [
                { "id": "i1", "text": "Data Cleaning", "correctPosition": 1 },
                { "id": "i2", "text": "Sorting/Tallying", "correctPosition": 2 },
                { "id": "i3", "text": "Coding and Entering Data", "correctPosition": 3 },
                { "id": "i4", "text": "Analysis of Results", "correctPosition": 4 }
            ]
        }
    ]
});