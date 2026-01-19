registerQuiz("topic-05-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-05-quiz",
    "metadata": {
        "title": "Managing Resources",
        "description": "Evaluate knowledge on HR, financial budgeting, and time management.",
        "topicId": "topic-05",
        "difficulty": "advanced",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2026-01-19T20:00:00Z",
        "updatedAt": "2026-01-19T20:00:00Z",
        "tags": ["resources", "budgeting", "HR", "time management"]
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
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which type of budget covers major equipment purchases or physical renovations?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Operating Budget", "isCorrect": false },
                { "id": "opt2", "text": "Cash Budget", "isCorrect": false },
                { "id": "opt3", "text": "Capital Budget", "isCorrect": true },
                { "id": "opt4", "text": "Revenue Budget", "isCorrect": false }
            ],
            "explanation": "Capital budgets are for long-term, high-cost items like buildings or major medical equipment."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the conflict resolution mode with its description.",
            "points": 3,
            "pairs": [
                { "id": "pair1", "left": "Avoiding", "right": "No effort to compromise (Lose-Lose)" },
                { "id": "pair2", "left": "Collaborating", "right": "Analyzing situation to solve problem (Win-Win)" },
                { "id": "pair3", "left": "Accommodating", "right": "One party sacrifices for the other" }
            ],
            "explanation": "Avoiding ignores the issue; Collaborating solves it jointly; Accommodating involves self-sacrifice."
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "A budget where expenses exceed income is said to have a __id1__.",
            "points": 1,
            "blanks": [
                {
                    "id": "id1",
                    "acceptedAnswers": ["deficit", "Deficit"],
                    "caseSensitive": false
                }
            ],
            "explanation": "A deficit occurs when spending is greater than revenue. A surplus is when revenue exceeds spending."
        },
        {
            "id": "q4",
            "type": "multiple-select",
            "question": "Identify common 'Time Wasters' for a manager. (Select all that apply)",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Inability to say no", "isCorrect": true },
                { "id": "opt2", "text": "Effective delegation", "isCorrect": false },
                { "id": "opt3", "text": "Lack of self-discipline", "isCorrect": true },
                { "id": "opt4", "text": "Drop-in visitors / interruptions", "isCorrect": true }
            ],
            "explanation": "Delegation is a time saver. The others (interruptions, lack of discipline, inability to say no) waste time."
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "What is the primary purpose of Performance Appraisal?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "To punish employees", "isCorrect": false },
                { "id": "opt2", "text": "To identify training needs and strengths/weaknesses", "isCorrect": true },
                { "id": "opt3", "text": "To reduce staff numbers", "isCorrect": false },
                { "id": "opt4", "text": "To create conflict", "isCorrect": false }
            ],
            "explanation": "Performance appraisals aim to develop employees by identifying areas for improvement (training) and recognizing merit."
        }
    ]
});