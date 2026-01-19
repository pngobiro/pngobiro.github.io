registerQuiz("topic-06-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-06-quiz",
    "metadata": {
        "title": "Topic 06: Research Methodology & Design",
        "description": "Test your knowledge of experimental, survey, and descriptive research designs.",
        "topicId": "topic-06",
        "difficulty": "advanced",
        "estimatedTime": 20,
        "passingScore": 70,
        "createdAt": "2024-05-20T10:00:00Z",
        "updatedAt": "2024-05-20T10:00:00Z",
        "tags": ["methodology", "design", "experimental"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "t6-q1",
            "type": "multiple-choice",
            "question": "Which research design is characterized by manipulation, randomization, and control?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Descriptive Design", "isCorrect": false },
                { "id": "opt2", "text": "True Experimental Design", "isCorrect": true },
                { "id": "opt3", "text": "Quasi-experimental Design", "isCorrect": false },
                { "id": "opt4", "text": "Survey Design", "isCorrect": false }
            ]
        },
        {
            "id": "t6-q2",
            "type": "matching",
            "question": "Match the study design with its description.",
            "points": 2,
            "pairs": [
                { "id": "p1", "left": "Retrospective", "right": "Links present outcomes to past exposures." },
                { "id": "p2", "left": "Prospective", "right": "Follows subjects from the present into the future." },
                { "id": "p3", "left": "Cross-sectional", "right": "Collects data at one specific point in time." },
                { "id": "p4", "left": "Longitudinal", "right": "Conducts two or more studies on a topic over a long period." }
            ]
        },
        {
            "id": "t6-q3",
            "type": "true-false",
            "question": "In a quasi-experimental design, random assignment of subjects to groups is always present.",
            "points": 1,
            "explanation": "Quasi-experimental designs lack full control, often missing random assignment.",
            "correctAnswer": false
        },
        {
            "id": "t6-q4",
            "type": "multiple-choice",
            "question": "Which design is used to explore relationships between variables when experimental manipulation is not possible?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "True Experimental", "isCorrect": false },
                { "id": "opt2", "text": "Comparative Descriptive (Causal-Comparative)", "isCorrect": true },
                { "id": "opt3", "text": "Simple Descriptive", "isCorrect": false },
                { "id": "opt4", "text": "Explorative", "isCorrect": false }
            ]
        },
        {
            "id": "t6-q5",
            "type": "fill-blank",
            "question": "A __b1__ study entails an in-depth investigation of one individual, group, or institution.",
            "points": 1,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["case"], "caseSensitive": false }
            ]
        }
    ]
});