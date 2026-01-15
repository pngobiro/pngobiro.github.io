registerQuiz("topic-07-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-07-quiz",
    "metadata": {
        "title": "Last Offices",
        "description": "Test your knowledge on the procedure for care of the body after death.",
        "topicId": "topic-07",
        "difficulty": "beginner",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2025-12-27T12:00:00Z"
    },
    "settings": { "shuffleQuestions": true, "shuffleOptions": true },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "What should be done with a wedding ring during Last Offices?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Remove it and give to the nurse in charge", "isCorrect": false },
                { "id": "b", "text": "Strap it with tape and leave it on", "isCorrect": true },
                { "id": "c", "text": "Remove it and put it in the valuables container", "isCorrect": false },
                { "id": "d", "text": "Cut it off if it is tight", "isCorrect": false }
            ],
            "explanation": "Wedding rings are typically not removed but are strapped securely and recorded."
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "After completing the care of the body, one should wait approximately __b1__ hour(s) before transfer to the mortuary.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["1", "one"], "caseSensitive": false }
            ],
            "explanation": "A waiting period of 1 hour is standard protocol."
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "Which of the following are part of the Last Offices procedure? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Closing the eyes and mouth", "isCorrect": true },
                { "id": "b", "text": "Removing IV fluids and tubes", "isCorrect": true },
                { "id": "c", "text": "Leaving the body in a sitting position", "isCorrect": false },
                { "id": "d", "text": "Placing identification tags on the body", "isCorrect": true }
            ],
            "explanation": "The body is laid flat (supine), not sitting. Other steps are correct."
        }
    ]
});