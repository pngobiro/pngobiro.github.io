registerQuiz("topic-06-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-06-quiz",
    "metadata": {
        "title": "Care of Specific Cancers",
        "description": "Test nursing management for Larynx, Lung, Breast, Colorectal, and Bladder cancers.",
        "topicId": "topic-06",
        "difficulty": "advanced",
        "estimatedTime": 20,
        "passingScore": 75,
        "createdAt": "2025-12-27T10:00:00Z"
    },
    "questions": [
        {
            "id": "t6-q1",
            "type": "multiple-choice",
            "question": "What is the priority preoperative intervention for a patient scheduled for a **Total Laryngectomy**?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Teach arm exercises", "isCorrect": false },
                { "id": "b", "text": "Establish a means of communication", "isCorrect": true },
                { "id": "c", "text": "Administer bowel prep", "isCorrect": false },
                { "id": "d", "text": "Fit for a prosthesis", "isCorrect": false }
            ],
            "explanation": "Since the patient will lose their voice permanently, establishing a way to communicate post-op is critical."
        },
        {
            "id": "t6-q2",
            "type": "true-false",
            "question": "It is acceptable to take blood pressure on the arm of the affected side following a radical mastectomy.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "BP, IVs, and blood draws are contraindicated on the affected side to prevent lymphedema and circulatory compromise."
        },
        {
            "id": "t6-q3",
            "type": "multiple-choice",
            "question": "Which assessment finding is most characteristic of **Bladder Cancer**?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Painful urination", "isCorrect": false },
                { "id": "b", "text": "Painless hematuria", "isCorrect": true },
                { "id": "c", "text": "Flank pain", "isCorrect": false },
                { "id": "d", "text": "Polyuria", "isCorrect": false }
            ],
            "explanation": "Painless hematuria is the hallmark sign of bladder cancer."
        },
        {
            "id": "t6-q4",
            "type": "matching",
            "question": "Match the lung surgery to its description.",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Pneumonectomy", "right": "Removal of entire lung" },
                { "id": "p2", "left": "Lobectomy", "right": "Removal of a lobe" },
                { "id": "p3", "left": "Wedge Resection", "right": "Removal of tumor only" }
            ]
        },
        {
            "id": "t6-q5",
            "type": "fill-blank",
            "question": "Following a Pneumonectomy, the patient should be positioned on the __b1__ side to promote expansion of the remaining lung.",
            "points": 15,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["affected", "operative"], "caseSensitive": false }
            ],
            "explanation": "Positioning on the affected/operative side allows the remaining healthy lung to expand fully."
        }
    ]
});