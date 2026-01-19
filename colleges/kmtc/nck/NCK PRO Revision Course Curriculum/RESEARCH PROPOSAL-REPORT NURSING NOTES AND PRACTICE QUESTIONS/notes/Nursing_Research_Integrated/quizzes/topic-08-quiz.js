registerQuiz("topic-08-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-08-quiz",
    "metadata": {
        "title": "Topic 08: Data Collection Methods",
        "description": "Test your knowledge of instruments, interviews, and quality control in data collection.",
        "topicId": "topic-08",
        "difficulty": "intermediate",
        "estimatedTime": 20,
        "passingScore": 70,
        "createdAt": "2024-05-20T10:00:00Z",
        "updatedAt": "2024-05-20T10:00:00Z",
        "tags": ["data-collection", "interviews", "questionnaires"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "t8-q1",
            "type": "multiple-choice",
            "question": "Which data collection method has the highest response rate?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Mailed Questionnaires", "isCorrect": false },
                { "id": "opt2", "text": "Face-to-face Interviews", "isCorrect": true },
                { "id": "opt3", "text": "Online Surveys", "isCorrect": false },
                { "id": "opt4", "text": "Self-administered Questionnaires", "isCorrect": false }
            ]
        },
        {
            "id": "t8-q2",
            "type": "multiple-select",
            "question": "What are the advantages of using Focus Group Discussions? (Select all that apply)",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "It is efficient and generates dialogue", "isCorrect": true },
                { "id": "opt2", "text": "Group members influence each other", "isCorrect": true },
                { "id": "opt3", "text": "It ensures complete anonymity for all participants", "isCorrect": false },
                { "id": "opt4", "text": "It captures the depth of interaction", "isCorrect": true }
            ]
        },
        {
            "id": "t8-q3",
            "type": "matching",
            "question": "Match the question type with its description.",
            "points": 2,
            "pairs": [
                { "id": "p1", "left": "Structured", "right": "Closed-ended with possible alternatives provided." },
                { "id": "p2", "left": "Unstructured", "right": "Open-ended giving the respondent freedom of response." },
                { "id": "p3", "left": "Contingency", "right": "Follow-up questions applicable only to certain respondents." },
                { "id": "p4", "left": "Matrix", "right": "Questions sharing the same set of response categories." }
            ]
        },
        {
            "id": "t8-q4",
            "type": "true-false",
            "question": "Non-participatory observation involves the researcher joining the group and participating in their activities while observing.",
            "points": 1,
            "explanation": "Non-participatory means observing from the outside without interfering.",
            "correctAnswer": false
        },
        {
            "id": "t8-q5",
            "type": "short-answer",
            "question": "What is the term for the process of checking data for accuracy, completeness, and consistency prior to analysis?",
            "points": 2,
            "keywords": ["cleaning", "data cleaning"],
            "modelAnswer": "Data cleaning"
        }
    ]
});