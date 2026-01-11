registerQuiz("topic-05-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-05-quiz",
    "metadata": {
        "title": "Response and Recovery Operations",
        "description": "Test your knowledge on emergency response activities, triage, and recovery planning.",
        "topicId": "topic-05",
        "difficulty": "advanced",
        "estimatedTime": 8,
        "passingScore": 70,
        "createdAt": "2025-12-25T12:00:00Z",
        "tags": ["response", "recovery", "health"]
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
            "question": "What is the goal of 'Triage' during a mass casualty incident?",
            "points": 10,
            "options": [
                { "id": "a", "text": "To treat patients in the order they arrive", "isCorrect": false },
                { "id": "b", "text": "To prioritize patients based on injury severity and survival potential", "isCorrect": true },
                { "id": "c", "text": "To document the personal history of victims", "isCorrect": false },
                { "id": "d", "text": "To transport everyone to the same hospital", "isCorrect": false }
            ],
            "explanation": "Triage sorts patients to do the greatest good for the greatest number when resources are overwhelmed."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the disease to its transmission mode in disaster settings:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Cholera", "right": "Fecal-Oral / Waterborne" },
                { "id": "p2", "left": "Malaria", "right": "Vector Transmitted" },
                { "id": "p3", "left": "Measles", "right": "Airborne" },
                { "id": "p4", "left": "Influenza", "right": "Contact Transmitted" }
            ]
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "Which steps are part of the 'Documentation' process for seeking outside aid? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Take pictures of damages", "isCorrect": true },
                { "id": "b", "text": "Keep all receipts and invoices", "isCorrect": true },
                { "id": "c", "text": "Clip newspaper reports", "isCorrect": true },
                { "id": "d", "text": "Estimate damages without visiting sites", "isCorrect": false }
            ],
            "partialCredit": true,
            "explanation": "Documentation requires concrete evidence like photos, receipts, and news reports, not estimation without verification."
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "When documenting disaster impact, __b1__ recovery involves immediate actions like clearing roads, while __b2__ recovery may take years and involves complete redevelopment.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["short-term", "short term"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["long-term", "long term"], "caseSensitive": false }
            ],
            "explanation": "Short-term recovery overlaps with response; long-term recovery focuses on permanent restoration and improvement."
        }
    ]
});