registerQuiz("topic-07-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-07-quiz",
    "metadata": {
        "title": "Topic 7: Developing a Proposal",
        "description": "Assess your understanding of the components and purpose of a research proposal.",
        "topicId": "topic-07",
        "difficulty": "advanced",
        "estimatedTime": 10,
        "passingScore": 80,
        "createdAt": "2026-01-17T00:00:00Z",
        "updatedAt": "2026-01-17T00:00:00Z",
        "tags": ["proposal", "budget", "timeline"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate",
        "allowRetry": true,
        "showCorrectAnswers": true,
        "timeLimit": 0
    },
    "questions": [
        {
            "id": "q7-proposal-def",
            "type": "multiple-choice",
            "question": "What is a research proposal primarily used for?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "To state what you intend to do, why, and how you will do it.", "isCorrect": true },
                { "id": "opt2", "text": "To report the final results of the study.", "isCorrect": false },
                { "id": "opt3", "text": "To publish the study in a journal.", "isCorrect": false },
                { "id": "opt4", "text": "To summarize the history of nursing.", "isCorrect": false }
            ],
            "explanation": "A proposal is a plan outlining the intent, justification, and methodology BEFORE the research is conducted."
        },
        {
            "id": "q7-proposal-content",
            "type": "multiple-select",
            "question": "Which of the following are essential components of a research proposal? (Select all that apply)",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Statement of the research problem", "isCorrect": true },
                { "id": "opt2", "text": "Study Budget", "isCorrect": true },
                { "id": "opt3", "text": "Timeline/Gantt Chart", "isCorrect": true },
                { "id": "opt4", "text": "Research Methodology", "isCorrect": true },
                { "id": "opt5", "text": "Results and Discussion", "isCorrect": false }
            ],
            "explanation": "A proposal includes the problem, budget, timeline, and methodology. Results and Discussion appear in the final report, not the proposal."
        },
        {
            "id": "q7-gantt",
            "type": "fill-blank",
            "question": "The schedule of activities summarized in a table format in a proposal is often referred to as a Time Line or __b1__ Chart.",
            "points": 1,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["Ghent", "Gantt"], "caseSensitive": false }
            ],
            "explanation": "The text refers to it as a Ghent chart (standard term is Gantt chart)."
        },
        {
            "id": "q7-budget-items",
            "type": "multiple-select",
            "question": "Which items should generally be included in a study budget? (Select all that apply)",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Stationery and printing", "isCorrect": true },
                { "id": "opt2", "text": "Personnel costs (research assistants)", "isCorrect": true },
                { "id": "opt3", "text": "Travel allowances", "isCorrect": true },
                { "id": "opt4", "text": "Bribes for officials", "isCorrect": false }
            ],
            "explanation": "Valid budget items include stationery, personnel, travel, equipment, etc. Bribes are unethical."
        },
        {
            "id": "q7-limitations",
            "type": "true-false",
            "question": "In a proposal, the researcher should hide potential limitations to ensure the proposal is accepted.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "False. Limitations should be identified and the researcher should defend the validity of the study in light of them."
        },
        {
            "id": "q7-clearance",
            "type": "multiple-choice",
            "question": "Why is a research proposal necessary for government or ethics committees?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "To get clearance and authority to carry out the research.", "isCorrect": true },
                { "id": "opt2", "text": "To prove the researcher is wealthy.", "isCorrect": false },
                { "id": "opt3", "text": "To ensure the research is difficult.", "isCorrect": false },
                { "id": "opt4", "text": "To delay the research process.", "isCorrect": false }
            ],
            "explanation": "Proposals are reviewed to ensure ethical standards and scientific merit before granting permission (clearance)."
        }
    ]
});