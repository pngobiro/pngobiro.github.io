registerQuiz("topic-07-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-07-quiz",
    "metadata": {
        "title": "Trial, Judgment & Execution Quiz",
        "description": "Assess your understanding of the trial process, judgments, and methods of execution.",
        "topicId": "topic-07",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2026-01-03T12:00:00Z",
        "tags": ["trial", "execution", "garnishee"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate",
        "allowRetry": true,
        "showCorrectAnswers": true
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which of the following is NOT a recognized mode of execution under Section 38 of the Civil Procedure Act?",
            "points": 5,
            "options": [
                { "id": "a", "text": "Attachment and sale of property", "isCorrect": false },
                { "id": "b", "text": "Arrest and detention in prison", "isCorrect": false },
                { "id": "c", "text": "Appointment of a receiver", "isCorrect": false },
                { "id": "d", "text": "Corporal punishment", "isCorrect": true }
            ],
            "explanation": "Civil execution involves property or liberty (civil jail), but corporal punishment is not a civil remedy."
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "A __1__ order is used to attach a debt owed to the judgment debtor by a third party.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["garnishee"], "caseSensitive": false }
            ],
            "explanation": "Garnishee proceedings allow a decree holder to attach money held by a third party (e.g., a bank) on behalf of the debtor."
        },
        {
            "id": "q3",
            "type": "true-false",
            "question": "Execution orders (attachment/arrest) can be issued directly against the Government.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "Under the Government Proceedings Act, execution cannot issue against the Government. The remedy is a Certificate of Order (Satisfaction Order)."
        },
        {
            "id": "q4",
            "type": "multiple-select",
            "question": "In which scenarios is a 'Notice to Show Cause' required before execution? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Where execution is applied for more than 1 year after the decree", "isCorrect": true },
                { "id": "b", "text": "Where execution is against a legal representative", "isCorrect": true },
                { "id": "c", "text": "For attachment of salary", "isCorrect": true },
                { "id": "d", "text": "Immediate execution upon judgment in open court", "isCorrect": false }
            ],
            "explanation": "Notice is required for stale decrees (>1 yr), legal reps, and salary attachment. Immediate oral application doesn't require notice."
        }
    ]
});