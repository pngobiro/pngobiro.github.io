registerQuiz("topic-03-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-03-quiz",
    "metadata": {
        "title": "Topic 03: Ethical Issues in Research",
        "description": "Assess your knowledge of ethical principles, informed consent, and participant rights.",
        "topicId": "topic-03",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2024-05-20T10:00:00Z",
        "updatedAt": "2024-05-20T10:00:00Z",
        "tags": ["ethics", "consent", "confidentiality"]
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
            "question": "Which ethical principle includes the right to fair selection and treatment, and the right to privacy?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Principle of Beneficence", "isCorrect": false },
                { "id": "opt2", "text": "Principle of Respect for Persons", "isCorrect": false },
                { "id": "opt3", "text": "Principle of Justice", "isCorrect": true },
                { "id": "opt4", "text": "Principle of Veracity", "isCorrect": false }
            ]
        },
        {
            "id": "t3-q2",
            "type": "fill-blank",
            "question": "Complete __b1__ exists when the respondent's identity is not revealed and the information collected is not linked to them.",
            "points": 2,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["anonymity"], "caseSensitive": false }
            ]
        },
        {
            "id": "t3-q3",
            "type": "true-false",
            "question": "When a researcher fails to adequately inform potential participants about the full nature of the research to prevent them from making an informed decision, it is called 'deception'.",
            "points": 1,
            "correctAnswer": true
        },
        {
            "id": "t3-q4",
            "type": "multiple-select",
            "question": "Which of the following are considered vulnerable groups requiring protection? (Select all that apply)",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Children", "isCorrect": true },
                { "id": "opt2", "text": "Mentally impaired persons", "isCorrect": true },
                { "id": "opt3", "text": "Institutionalized persons (e.g. prisoners)", "isCorrect": true },
                { "id": "opt4", "text": "Healthy adult volunteers", "isCorrect": false }
            ]
        },
        {
            "id": "t3-q5",
            "type": "matching",
            "question": "Match the ethical concept with its description.",
            "points": 2,
            "pairs": [
                { "id": "p1", "left": "Beneficence", "right": "The obligation to do good and do no harm." },
                { "id": "p2", "left": "Confidentiality", "right": "Protecting data from being divulged to unauthorized persons." },
                { "id": "p3", "left": "Informed Consent", "right": "Providing sufficient information for a subject to decide on participation." }
            ]
        }
    ]
});