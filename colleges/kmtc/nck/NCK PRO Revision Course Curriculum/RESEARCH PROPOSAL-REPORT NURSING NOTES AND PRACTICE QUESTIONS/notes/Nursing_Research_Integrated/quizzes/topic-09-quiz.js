registerQuiz("topic-09-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-09-quiz",
    "metadata": {
        "title": "Topic 09: Reliability, Validity & Piloting",
        "description": "Assess understanding of measurement quality, validity threats, and pilot studies.",
        "topicId": "topic-09",
        "difficulty": "advanced",
        "estimatedTime": 25,
        "passingScore": 70,
        "createdAt": "2024-05-20T10:00:00Z",
        "updatedAt": "2024-05-20T10:00:00Z",
        "tags": ["reliability", "validity", "pilot-study"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "t9-q1",
            "type": "multiple-choice",
            "question": "Which reliability technique involves administering the same instrument twice to the same group with a time lapse?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Split-Half Technique", "isCorrect": false },
                { "id": "opt2", "text": "Test-Retest Technique", "isCorrect": true },
                { "id": "opt3", "text": "Equivalent Form Technique", "isCorrect": false },
                { "id": "opt4", "text": "Internal Consistency", "isCorrect": false }
            ]
        },
        {
            "id": "t9-q2",
            "type": "matching",
            "question": "Match the validity type with its definition.",
            "points": 2,
            "pairs": [
                { "id": "p1", "left": "Content Validity", "right": "Degree to which the instrument represents the specific domain of content." },
                { "id": "p2", "left": "Construct Validity", "right": "Degree to which the instrument measures a theoretical concept." },
                { "id": "p3", "left": "Predictive Validity", "right": "Degree to which data predicts future behavior." },
                { "id": "p4", "left": "Concurrent Validity", "right": "Degree to which data predicts present behavior." }
            ]
        },
        {
            "id": "t9-q3",
            "type": "multiple-choice",
            "question": "The 'Hawthorne Effect' refers to:",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Subjects dropping out of the study", "isCorrect": false },
                { "id": "opt2", "text": "Subjects performing better because they are aware they are being observed", "isCorrect": true },
                { "id": "opt3", "text": "Improvement due to psychological expectations of treatment", "isCorrect": false },
                { "id": "opt4", "text": "Researchers rating subjects based on initial impressions", "isCorrect": false }
            ]
        },
        {
            "id": "t9-q4",
            "type": "fill-blank",
            "question": "__b1__ validity is the degree to which extraneous variables are controlled in a study.",
            "points": 1,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["Internal"], "caseSensitive": false }
            ]
        },
        {
            "id": "t9-q5",
            "type": "multiple-select",
            "question": "What are the purposes of a pre-test or pilot study? (Select all that apply)",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "To determine feasibility of the study", "isCorrect": true },
                { "id": "opt2", "text": "To identify problems with the research design", "isCorrect": true },
                { "id": "opt3", "text": "To ensure clarity of data collection instruments", "isCorrect": true },
                { "id": "opt4", "text": "To collect the final data for analysis", "isCorrect": false }
            ]
        }
    ]
});