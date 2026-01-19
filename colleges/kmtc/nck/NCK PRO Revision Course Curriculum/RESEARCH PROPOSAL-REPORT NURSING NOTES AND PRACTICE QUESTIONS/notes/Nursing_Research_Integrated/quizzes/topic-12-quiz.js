registerQuiz("topic-12-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-12-quiz",
    "metadata": {
        "title": "Topic 12: Dissemination & Utilization",
        "description": "Test your knowledge on communicating findings and utilizing research in practice.",
        "topicId": "topic-12",
        "difficulty": "beginner",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2024-05-20T10:00:00Z",
        "updatedAt": "2024-05-20T10:00:00Z",
        "tags": ["dissemination", "utilization", "publication"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "t12-q1",
            "type": "multiple-choice",
            "question": "What is a 'query letter' used for?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "To complain about a rejected manuscript", "isCorrect": false },
                { "id": "opt2", "text": "To determine a journal's interest in a manuscript before submission", "isCorrect": true },
                { "id": "opt3", "text": "To ask for funding from a sponsor", "isCorrect": false },
                { "id": "opt4", "text": "To invite participants to a conference", "isCorrect": false }
            ]
        },
        {
            "id": "t12-q2",
            "type": "multiple-select",
            "question": "Which of the following are barriers to the utilization of nursing research? (Select all that apply)",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Nurses' lack of knowledge", "isCorrect": true },
                { "id": "opt2", "text": "Negative attitudes towards research", "isCorrect": true },
                { "id": "opt3", "text": "Lack of institutional support", "isCorrect": true },
                { "id": "opt4", "text": "Abundance of time for reading", "isCorrect": false }
            ]
        },
        {
            "id": "t12-q3",
            "type": "matching",
            "question": "Match the nurse's role in research to the activity.",
            "points": 2,
            "pairs": [
                { "id": "p1", "left": "Principal Investigator", "right": "Leads scientific investigations (requires special preparation)." },
                { "id": "p2", "left": "Evaluator", "right": "Critiques research findings for usefulness." },
                { "id": "p3", "left": "User", "right": "Applies relevant findings in practice." },
                { "id": "p4", "left": "Patient Advocate", "right": "Ensures ethical aspects are upheld for patients." }
            ]
        },
        {
            "id": "t12-q4",
            "type": "true-false",
            "question": "Poster presentations are generally less formal and allow for more interaction than oral presentations at conferences.",
            "points": 1,
            "correctAnswer": true
        },
        {
            "id": "t12-q5",
            "type": "short-answer",
            "question": "What type of journal uses subject experts chosen by editorial staff to evaluate manuscripts?",
            "points": 2,
            "keywords": ["refereed", "referred", "peer-reviewed"],
            "modelAnswer": "Refereed journal"
        }
    ]
});