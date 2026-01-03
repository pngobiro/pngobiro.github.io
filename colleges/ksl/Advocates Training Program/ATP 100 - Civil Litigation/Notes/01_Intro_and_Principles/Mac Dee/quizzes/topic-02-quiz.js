registerQuiz("topic-02-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-02-quiz",
    "metadata": {
        "title": "Taking Instructions & Demand Letters Quiz",
        "description": "Test your knowledge on client interviews, limitation of actions, and drafting demand letters.",
        "topicId": "topic-02",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2026-01-03T12:00:00Z",
        "tags": ["instructions", "limitation", "demand-letter"]
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
            "type": "fill-blank",
            "question": "Under the Limitation of Actions Act, a suit founded on contract must be filed within __1__ years, while a suit founded on tort must be filed within __2__ years.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["6", "six"], "caseSensitive": false },
                { "id": "2", "acceptedAnswers": ["3", "three"], "caseSensitive": false }
            ],
            "explanation": "Contract claims have a 6-year limitation period, while Tort claims (like negligence) have a 3-year limitation period."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "What is the primary purpose of marking a letter 'Without Prejudice'?",
            "points": 10,
            "options": [
                { "id": "a", "text": "To ensure the letter is delivered faster", "isCorrect": false },
                { "id": "b", "text": "To prevent the contents from being used as evidence of admission in court", "isCorrect": true },
                { "id": "c", "text": "To intimidate the recipient", "isCorrect": false },
                { "id": "d", "text": "To waive legal fees", "isCorrect": false }
            ],
            "explanation": "The 'Without Prejudice' rule protects genuine attempts to settle a dispute from being used in court as an admission of liability."
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "Which of the following are ESSENTIAL contents of a Demand Letter? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Statement of facts/grievance", "isCorrect": true },
                { "id": "b", "text": "Demand for specific relief (e.g., payment)", "isCorrect": true },
                { "id": "c", "text": "Threat of criminal proceedings", "isCorrect": false },
                { "id": "d", "text": "Deadline for compliance", "isCorrect": true }
            ],
            "explanation": "A demand letter should state facts, demand relief, and set a deadline. Threatening criminal proceedings in a civil demand letter is unethical (Khanbhai v O'Swald)."
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "Before suing the Government, a statutory notice of 30 days must be issued under the Government Proceedings Act.",
            "points": 5,
            "correctAnswer": true,
            "explanation": "Section 13A of the Government Proceedings Act requires a 30-day notice of intention to sue the Government."
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "In the case of 'Laches', equitable relief may be denied if:",
            "points": 10,
            "options": [
                { "id": "a", "text": "The plaintiff is a minor", "isCorrect": false },
                { "id": "b", "text": "The plaintiff has unreasonably delayed in bringing the action", "isCorrect": true },
                { "id": "c", "text": "The defendant has left the country", "isCorrect": false },
                { "id": "d", "text": "The claim is for less than Ksh 100,000", "isCorrect": false }
            ],
            "explanation": "Laches is an equitable defense that bars a claim due to unreasonable delay in asserting a right, even if the statutory limitation period hasn't expired."
        }
    ]
});