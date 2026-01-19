registerQuiz("topic-11-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-11-quiz",
    "metadata": {
        "title": "Topic 11: Writing Proposals & Reports",
        "description": "Assess your understanding of proposal structure, report writing, and formatting guidelines.",
        "topicId": "topic-11",
        "difficulty": "intermediate",
        "estimatedTime": 20,
        "passingScore": 70,
        "createdAt": "2024-05-20T10:00:00Z",
        "updatedAt": "2024-05-20T10:00:00Z",
        "tags": ["proposal", "report-writing", "format"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "t11-q1",
            "type": "true-false",
            "question": "A research proposal should be written in the future tense.",
            "points": 1,
            "correctAnswer": true
        },
        {
            "id": "t11-q2",
            "type": "multiple-select",
            "question": "Which of the following are mandatory sections of a research proposal? (Select all that apply)",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Introduction", "isCorrect": true },
                { "id": "opt2", "text": "Literature Review", "isCorrect": true },
                { "id": "opt3", "text": "Methodology", "isCorrect": true },
                { "id": "opt4", "text": "Results and Discussion", "isCorrect": false }
            ]
        },
        {
            "id": "t11-q3",
            "type": "matching",
            "question": "Match the proposal section with its content.",
            "points": 2,
            "pairs": [
                { "id": "p1", "left": "Abstract", "right": "A one-paragraph summary of the intended study." },
                { "id": "p2", "left": "Problem Statement", "right": "Describes the issue, its genesis, and why it is a problem." },
                { "id": "p3", "left": "Methodology", "right": "Describes design, population, sampling, and data collection." },
                { "id": "p4", "left": "Budget", "right": "Details the financial resources required." }
            ]
        },
        {
            "id": "t11-q4",
            "type": "multiple-choice",
            "question": "What is the difference between a Research Proposal and a Project Proposal?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Research proposals solve a specific problem; project proposals generate knowledge.", "isCorrect": false },
                { "id": "opt2", "text": "Research proposals generate data/knowledge; project proposals implement activities to solve a problem.", "isCorrect": true },
                { "id": "opt3", "text": "They are exactly the same.", "isCorrect": false },
                { "id": "opt4", "text": "Project proposals require hypotheses; research proposals do not.", "isCorrect": false }
            ]
        },
        {
            "id": "t11-q5",
            "type": "fill-blank",
            "question": "The __b1__ of the study illustrates why the researcher is conducting the research and whom it shall benefit.",
            "points": 1,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["justification", "rationale"], "caseSensitive": false }
            ]
        }
    ]
});