registerQuiz("topic-02-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-02-quiz",
    "metadata": {
        "title": "Topic 02: Disaster Management",
        "description": "Test your knowledge on disaster definitions, policy elements, triage protocols, and recovery.",
        "topicId": "topic-02",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 80,
        "createdAt": "2026-01-17T12:00:00Z",
        "updatedAt": "2026-01-17T12:00:00Z",
        "tags": ["disaster", "triage", "policy", "emergency"]
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
            "id": "t2-q1",
            "type": "multiple-choice",
            "question": "Which of the following is a man-made disaster?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Tsunami", "isCorrect": false },
                { "id": "opt2", "text": "Volcanic Eruption", "isCorrect": false },
                { "id": "opt3", "text": "Plane Crash", "isCorrect": true },
                { "id": "opt4", "text": "Drought", "isCorrect": false }
            ],
            "explanation": "Plane crashes are classified as accidents/man-made, whereas the others are natural disasters."
        },
        {
            "id": "t2-q2",
            "type": "matching",
            "question": "Match the Disaster Policy Element to its definition.",
            "points": 3,
            "pairs": [
                { "id": "p1", "left": "Prevention", "right": "Measures to prevent occurrence and minimize harmful effects" },
                { "id": "p2", "left": "Mitigation", "right": "Increasing population's ability to cope with disaster" },
                { "id": "p3", "left": "Preparedness", "right": "Readiness to take action before, during, and after a disaster" }
            ],
            "explanation": "Prevention stops the occurrence; Mitigation reduces impact/increases coping; Preparedness involves readiness and planning."
        },
        {
            "id": "t2-q3",
            "type": "fill-blank",
            "question": "In rapid triage, a patient who is unconscious is automatically classified as Priority __id1__.",
            "points": 1,
            "blanks": [
                {
                    "id": "id1",
                    "acceptedAnswers": ["1", "one", "immediate"],
                    "caseSensitive": false
                }
            ],
            "explanation": "All unconscious patients are Priority 1 (Immediate)."
        },
        {
            "id": "t2-q4",
            "type": "multiple-select",
            "question": "Which of the following colors are used in Triage and what do they signify?",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Red - Immediate", "isCorrect": true },
                { "id": "opt2", "text": "Yellow - Deceased", "isCorrect": false },
                { "id": "opt3", "text": "Green - Delayed / Walking Wounded", "isCorrect": true },
                { "id": "opt4", "text": "Black - Urgent", "isCorrect": false }
            ],
            "explanation": "Red is Immediate. Green is Delayed. Yellow is Urgent (not deceased). Black is Deceased."
        },
        {
            "id": "t2-q5",
            "type": "short-answer",
            "question": "What does the 'S' in the SOAP assessment acronym stand for?",
            "points": 1,
            "keywords": ["subjective", "subjective assessment"],
            "minKeywords": 1,
            "modelAnswer": "Subjective assessment",
            "maxLength": 50
        },
        {
            "id": "t2-q6",
            "type": "true-false",
            "question": "Hypertension (high blood pressure) in a trauma victim is always a sign that they are stable.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "Hypertension is dangerous because if pressure drops suddenly to 'normal', the tissues may not be perfused adequately. Also, tachycardia in a hypertensive patient can indicate hypovolaemia."
        },
        {
            "id": "t2-q7",
            "type": "multiple-choice",
            "question": "Which of the following is an activity connected with the resumption of health care during disaster recovery?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Re-establishing Community Own Resource Persons (CORPS)", "isCorrect": true },
                { "id": "opt2", "text": "Ignoring negative propaganda", "isCorrect": false },
                { "id": "opt3", "text": "Launching a brand new vaccination campaign immediately", "isCorrect": false },
                { "id": "opt4", "text": "Halting all previous health programmes", "isCorrect": false }
            ],
            "explanation": "Re-establishing CORPS is a key recovery activity. Existing vaccination routines should be strengthened rather than launching new ones, and negative propaganda must be contained, not ignored."
        }
    ]
});