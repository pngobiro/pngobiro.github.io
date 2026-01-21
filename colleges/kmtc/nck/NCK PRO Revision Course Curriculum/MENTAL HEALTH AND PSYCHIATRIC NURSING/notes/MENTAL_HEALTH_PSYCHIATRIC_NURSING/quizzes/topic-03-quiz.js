registerQuiz("topic-03-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-03-quiz",
    "metadata": {
        "title": "Therapeutic Communication Quiz",
        "description": "Assess knowledge of therapeutic vs non-therapeutic techniques and relationship phases.",
        "topicId": "topic-03",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2026-01-21T12:00:00Z",
        "updatedAt": "2026-01-21T12:00:00Z",
        "tags": ["communication", "nursing-care"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "t3-q1",
            "type": "multiple-choice",
            "question": "Which of the following is a non-therapeutic technique where the nurse indicates the client is 'right'?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Accepting", "isCorrect": false },
                { "id": "opt2", "text": "Agreeing", "isCorrect": true },
                { "id": "opt3", "text": "Restating", "isCorrect": false },
                { "id": "opt4", "text": "Reflecting", "isCorrect": false }
            ],
            "explanation": "Agreeing is non-therapeutic because it limits the client's freedom to think or act differently and implies the nurse has the right to judge."
        },
        {
            "id": "t3-q2",
            "type": "true-false",
            "question": "Sympathy involves objectively understanding the client's feelings, whereas Empathy involves sharing the client's feelings and losing objectivity.",
            "correctAnswer": false,
            "points": 1,
            "explanation": "This is reversed. Empathy is the ability to perceive/understand the client's feelings while remaining objective. Sympathy is sharing the feelings (compassion) which can lead to a loss of objectivity."
        },
        {
            "id": "t3-q3",
            "type": "multiple-choice",
            "question": "During which phase of the nurse-patient relationship does the nurse establish rapport and develop a contract?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Pre-orientation phase", "isCorrect": false },
                { "id": "opt2", "text": "Orientation phase", "isCorrect": true },
                { "id": "opt3", "text": "Working phase", "isCorrect": false },
                { "id": "opt4", "text": "Termination phase", "isCorrect": false }
            ],
            "explanation": "The Orientation phase involves establishing rapport, developing trust, assessment, and creating a contract."
        },
        {
            "id": "t3-q4",
            "type": "matching",
            "question": "Match the therapeutic technique to its description:",
            "points": 3,
            "pairs": [
                { "id": "pair1", "left": "Reflecting", "right": "Directing client actions/feelings back to them" },
                { "id": "pair2", "left": "Restating", "right": "Repeating the main idea expressed" },
                { "id": "pair3", "left": "Broad Openings", "right": "Allowing client to take initiative in topic" }
            ],
            "explanation": "Reflecting directs feelings back ('Do you think you should?'). Restating repeats the main idea ('You have difficulty sleeping'). Broad openings allow the client to lead ('Where would you like to begin?')."
        },
        {
            "id": "t3-q5",
            "type": "multiple-choice",
            "question": "What occurs when the client displaces feelings from past relationships onto the nurse?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Countertransference", "isCorrect": false },
                { "id": "opt2", "text": "Resistance", "isCorrect": false },
                { "id": "opt3", "text": "Transference", "isCorrect": true },
                { "id": "opt4", "text": "Projection", "isCorrect": false }
            ],
            "explanation": "Transference is the displacement of feelings by the client onto the nurse. Countertransference is the reverse (nurse onto client)."
        }
    ]
});