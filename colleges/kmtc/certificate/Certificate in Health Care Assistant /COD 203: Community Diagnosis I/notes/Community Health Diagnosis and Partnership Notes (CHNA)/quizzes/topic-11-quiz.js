if (typeof registerQuiz === 'function') {
    registerQuiz("topic-11-quiz", {
        "schemaVersion": "1.0",
        "quizId": "topic-11-quiz",
        "metadata": {
            "title": "Reporting & Analysis Tools Quiz",
            "description": "Test your knowledge on community health reports, analysis techniques, and SPSS.",
            "topicId": "topic-11",
            "difficulty": "intermediate",
            "estimatedTime": 12,
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
                "question": "Arrange the first 6 steps of Preparing a Community Health Report in order:",
                "points": 15,
                "items": [
                    { "id": "i1", "text": "Define the Community", "correctPosition": 1 },
                    { "id": "i2", "text": "Form a CHA Team", "correctPosition": 2 },
                    { "id": "i3", "text": "Conduct Literature Review", "correctPosition": 3 },
                    { "id": "i4", "text": "Data Collection", "correctPosition": 4 },
                    { "id": "i5", "text": "Data Analysis", "correctPosition": 5 },
                    { "id": "i6", "text": "Identify Strengths/Weaknesses (SWOT)", "correctPosition": 6 }
                ],
                "explanation": "The process starts with defining scope, forming a team, reviewing literature, collecting data, analyzing it, and then performing a SWOT analysis."
            },
            {
                "id": "q2",
                "type": "matching",
                "question": "Match the analysis technique to its definition:",
                "points": 20,
                "pairs": [
                    { "id": "p1", "left": "Descriptive Statistics", "right": "Summarize data (mean, mode, etc.)" },
                    { "id": "p2", "left": "Inferential Statistics", "right": "Draw conclusions about population from samples" },
                    { "id": "p3", "left": "Spatial Analysis (GIS)", "right": "Analyze geographic patterns" },
                    { "id": "p4", "left": "Thematic Analysis", "right": "Identify recurring themes in text data" }
                ],
                "explanation": "Descriptive summarizes, Inferential predicts/concludes, Spatial deals with geography, and Thematic is for qualitative text."
            },
            {
                "id": "q3",
                "type": "multiple-choice",
                "question": "Which SPSS procedure determines if there is a relationship between two CATEGORICAL variables?",
                "points": 10,
                "options": [
                    { "id": "a", "text": "T-test", "isCorrect": false },
                    { "id": "b", "text": "Chi-square test", "isCorrect": true },
                    { "id": "c", "text": "ANOVA", "isCorrect": false },
                    { "id": "d", "text": "Linear Regression", "isCorrect": false }
                ],
                "explanation": "Chi-square tests are used for testing relationships between categorical variables. T-tests and ANOVA compare means (continuous)."
            },
            {
                "id": "q4",
                "type": "multiple-select",
                "question": "Select the Key Components of a Community Health Report: (Select all that apply)",
                "points": 15,
                "options": [
                    { "id": "a", "text": "Executive Summary", "isCorrect": true },
                    { "id": "b", "text": "Health Status Indicators", "isCorrect": true },
                    { "id": "c", "text": "Personal diaries of researchers", "isCorrect": false },
                    { "id": "d", "text": "Recommendations", "isCorrect": true }
                ],
                "partialCredit": true,
                "explanation": "Executive summaries, health indicators, and recommendations are standard components. Personal diaries are generally not included."
            },
            {
                "id": "q5",
                "type": "fill-blank",
                "question": "Before analysis, data must undergo __b1__ to identify and correct errors, inconsistencies, and missing values.",
                "points": 10,
                "blanks": [
                    { "id": "b1", "acceptedAnswers": ["cleaning", "Cleaning", "data cleaning"], "caseSensitive": false }
                ],
                "explanation": "Data cleaning is the essential first step to ensure accuracy before analysis begins."
            },
            {
                "id": "q6",
                "type": "true-false",
                "question": "Qualitative analysis focuses on quantifying data through statistical coding rather than understanding underlying reasons.",
                "points": 10,
                "correctAnswer": false,
                "explanation": "Qualitative analysis focuses on **understanding underlying reasons and perspectives** (themes, narratives), whereas Quantitative analysis focuses on quantifying data."
            }
        ]
    });
}