registerQuiz("topic-10-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-10-quiz",
    "metadata": {
        "title": "Topic 10: Data Analysis & Presentation",
        "description": "Test your knowledge of descriptive statistics, qualitative analysis, and data presentation methods.",
        "topicId": "topic-10",
        "difficulty": "intermediate",
        "estimatedTime": 20,
        "passingScore": 70,
        "createdAt": "2024-05-20T10:00:00Z",
        "updatedAt": "2024-05-20T10:00:00Z",
        "tags": ["statistics", "analysis", "graphs"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "t10-q1",
            "type": "multiple-choice",
            "question": "Which measure of central tendency is appropriate for nominal data?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Mean", "isCorrect": false },
                { "id": "opt2", "text": "Median", "isCorrect": false },
                { "id": "opt3", "text": "Mode", "isCorrect": true },
                { "id": "opt4", "text": "Standard Deviation", "isCorrect": false }
            ]
        },
        {
            "id": "t10-q2",
            "type": "ordering",
            "question": "Arrange the steps of qualitative data analysis in order.",
            "points": 2,
            "items": [
                { "id": "s1", "text": "Organizing the data (cleaning)", "correctPosition": 1 },
                { "id": "s2", "text": "Creating categories, themes and patterns", "correctPosition": 2 },
                { "id": "s3", "text": "Analyzing and interpreting the data", "correctPosition": 3 },
                { "id": "s4", "text": "Writing the report", "correctPosition": 4 }
            ]
        },
        {
            "id": "t10-q3",
            "type": "multiple-choice",
            "question": "Which type of graph is best for discrete or categorical data (nominal scale)?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Histogram", "isCorrect": false },
                { "id": "opt2", "text": "Bar Chart", "isCorrect": true },
                { "id": "opt3", "text": "Frequency Polygon", "isCorrect": false },
                { "id": "opt4", "text": "Scatter Plot", "isCorrect": false }
            ]
        },
        {
            "id": "t10-q4",
            "type": "fill-blank",
            "question": "A __b1__ table contains all the characteristics of a table but the cells are left empty, used for planning analysis.",
            "points": 1,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["dummy"], "caseSensitive": false }
            ]
        },
        {
            "id": "t10-q5",
            "type": "true-false",
            "question": "In a histogram, the bars are continuous with no space in between, representing continuous variables.",
            "points": 1,
            "correctAnswer": true
        }
    ]
});