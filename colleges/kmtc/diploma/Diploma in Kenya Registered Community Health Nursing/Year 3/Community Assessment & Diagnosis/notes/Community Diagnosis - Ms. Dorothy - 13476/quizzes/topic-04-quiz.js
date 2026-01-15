registerQuiz("topic-04-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-04-quiz",
    "metadata": {
        "title": "Topic 04: Execution and Analysis",
        "description": "Test your knowledge on data collection execution, analysis methods, and data presentation.",
        "topicId": "topic-04",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2025-12-26T12:00:00Z",
        "tags": ["execution", "analysis", "statistics", "data"]
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
            "question": "Arrange the steps of Data Analysis in the correct sequence.",
            "points": 10,
            "items": [
                { "id": "i1", "text": "Data Cleaning", "correctPosition": 1 },
                { "id": "i2", "text": "Sorting or Tallying", "correctPosition": 2 },
                { "id": "i3", "text": "Coding and Entering Data", "correctPosition": 3 },
                { "id": "i4", "text": "Analysis of Results", "correctPosition": 4 }
            ],
            "explanation": "Analysis starts with cleaning the raw data, then sorting/tallying, coding/entering, and finally statistical analysis."
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "Data obtained from the field before any processing is called __b1__ data.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["raw"], "caseSensitive": false }
            ],
            "explanation": "Unprocessed data collected directly from the survey is known as raw data."
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "What should an interviewer do when approaching a respondent? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Introduce themselves and show ID", "isCorrect": true },
                { "id": "b", "text": "Explain the purpose of the survey", "isCorrect": true },
                { "id": "c", "text": "Establish rapport", "isCorrect": true },
                { "id": "d", "text": "Force the respondent to answer immediately", "isCorrect": false }
            ],
            "explanation": "Interviewers must follow protocol: introduce, show ID, explain purpose, and establish rapport."
        },
        {
            "id": "q4",
            "type": "matching",
            "question": "Match the analysis type to the data characteristic.",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Quantitative Analysis", "right": "Data that can be measured (e.g., weight, age)" },
                { "id": "p2", "left": "Qualitative Analysis", "right": "Data that is counted but not measured (e.g., color)" }
            ],
            "explanation": "Quantitative deals with measurable numbers. Qualitative deals with categories or descriptions."
        },
        {
            "id": "q5",
            "type": "matching",
            "question": "Classify the presentation method.",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Histogram", "right": "Graphical Presentation" },
                { "id": "p2", "left": "Frequency Distribution Table", "right": "Tabular Presentation" },
                { "id": "p3", "left": "Pie Chart", "right": "Graphical Presentation" },
                { "id": "p4", "left": "Contingency Table", "right": "Tabular Presentation" }
            ],
            "explanation": "Charts and graphs are Graphical; tables are Tabular."
        },
        {
            "id": "q6",
            "type": "true-false",
            "question": "If a respondent refuses to cooperate, the interviewer should immediately give up and leave.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "False. The interviewer should do their best to persuade the person to agree (politely) before giving up."
        },
        {
            "id": "q7",
            "type": "multiple-choice",
            "question": "Which of the following is NOT a stage in data collection?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Interviewing the respondents", "isCorrect": false },
                { "id": "b", "text": "Data collection", "isCorrect": false },
                { "id": "c", "text": "Data handling", "isCorrect": false },
                { "id": "d", "text": "Data fabrication", "isCorrect": true }
            ],
            "explanation": "Fabrication (making up data) is unethical. The stages are Interviewing, Collection, and Handling."
        },
        {
            "id": "q8",
            "type": "fill-blank",
            "question": "Data analysis is the separation and categorisation of __b1__ data into groups to understand its meaning.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["numerical"], "caseSensitive": false }
            ],
            "explanation": "Analysis largely involves processing numerical data to derive meaning."
        },
        {
            "id": "q9",
            "type": "multiple-choice",
            "question": "Which of these is a form of Graphical Presentation?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Frequency Polygon", "isCorrect": true },
                { "id": "b", "text": "Contingency Table", "isCorrect": false },
                { "id": "c", "text": "Raw Data List", "isCorrect": false },
                { "id": "d", "text": "Code Book", "isCorrect": false }
            ],
            "explanation": "Frequency Polygon is a type of graph used to represent data."
        },
        {
            "id": "q10",
            "type": "true-false",
            "question": "Quantitative analysis allows you to analyze information in a systematic way to reach useful conclusions.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "False. This definition (systematic analysis for conclusions) describes Qualitative analysis in the text context, while Quantitative emphasizes numerical measurement."
        }
    ]
});