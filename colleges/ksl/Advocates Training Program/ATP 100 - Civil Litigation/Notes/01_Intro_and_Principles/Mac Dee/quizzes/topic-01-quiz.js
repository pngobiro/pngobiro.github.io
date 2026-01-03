registerQuiz("topic-01-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-01-quiz",
    "metadata": {
        "title": "Introduction to Civil Procedure Quiz",
        "description": "Assess your understanding of the history, sources, and fundamental concepts of Civil Procedure in Kenya.",
        "topicId": "topic-01",
        "difficulty": "beginner",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2026-01-03T12:00:00Z",
        "tags": ["intro", "sources", "history", "civil-law"]
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
            "type": "multiple-select",
            "question": "Which of the following are primary sources of Civil Procedure law in Kenya? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "The Constitution of Kenya", "isCorrect": true },
                { "id": "b", "text": "The Civil Procedure Act (Cap 21)", "isCorrect": true },
                { "id": "c", "text": "The Penal Code", "isCorrect": false },
                { "id": "d", "text": "Civil Procedure Rules (2010)", "isCorrect": true }
            ],
            "explanation": "The primary sources include the Constitution, the Civil Procedure Act, the Civil Procedure Rules, and Case Law. The Penal Code governs criminal law."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "What is the standard of proof in civil cases?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Beyond reasonable doubt", "isCorrect": false },
                { "id": "b", "text": "Balance of probabilities", "isCorrect": true },
                { "id": "c", "text": "Clear and convincing evidence", "isCorrect": false },
                { "id": "d", "text": "Presumption of innocence", "isCorrect": false }
            ],
            "explanation": "In civil litigation, the plaintiff must prove their case on a balance of probabilities (more likely than not), whereas 'beyond reasonable doubt' applies to criminal cases."
        },
        {
            "id": "q3",
            "type": "true-false",
            "question": "If a Civil Procedure Rule is inconsistent with the Civil Procedure Act, the Rule prevails.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "Subsidiary legislation (Rules) cannot override the parent Statute (Act). If there is a conflict, the Act prevails (Central District Maize Millers Association v Maciel)."
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "Section 3A of the Civil Procedure Act saves the __1__ jurisdiction/power of the court to make orders necessary for the ends of justice.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["inherent"], "caseSensitive": false }
            ],
            "explanation": "Section 3A saves the inherent power of the court to prevent abuse of process and ensure the ends of justice are met."
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "Which body is responsible for making the Civil Procedure Rules under Section 81 of the Act?",
            "points": 10,
            "options": [
                { "id": "a", "text": "The Parliament", "isCorrect": false },
                { "id": "b", "text": "The Law Society of Kenya", "isCorrect": false },
                { "id": "c", "text": "The Rules Committee", "isCorrect": true },
                { "id": "d", "text": "The Attorney General alone", "isCorrect": false }
            ],
            "explanation": "Section 81 establishes the Rules Committee (consisting of judges, AG, and advocates) to make rules regulating the procedure of courts."
        },
        {
            "id": "q6",
            "type": "matching",
            "question": "Match the legal concept with its definition:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Substantive Law", "right": "Defines rights and duties" },
                { "id": "p2", "left": "Procedural Law", "right": "Rules for enforcing rights in court" },
                { "id": "p3", "left": "Public Law", "right": "Governs relationship between state and individuals" }
            ],
            "explanation": "Substantive law defines legal rights (e.g., Contract law), while Procedural law sets out the machinery for enforcing those rights (e.g., Civil Procedure)."
        }
    ]
});