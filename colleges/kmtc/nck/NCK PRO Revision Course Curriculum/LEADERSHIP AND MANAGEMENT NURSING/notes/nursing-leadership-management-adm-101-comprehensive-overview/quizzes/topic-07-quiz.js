registerQuiz("topic-07-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-07-quiz",
    "metadata": {
        "title": "Quality Management in Nursing Care Services",
        "description": "Test knowledge of quality assurance, nursing audits, care delivery systems, and legal/ethical issues.",
        "topicId": "topic-07",
        "difficulty": "intermediate",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2026-01-19T20:00:00Z",
        "updatedAt": "2026-01-19T20:00:00Z",
        "tags": ["quality", "audit", "delivery systems", "ethics"]
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
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which nursing care delivery system assigns one nurse to assume 24-hour responsibility for a patient's care throughout their hospital stay?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Team Nursing", "isCorrect": false },
                { "id": "opt2", "text": "Functional Nursing", "isCorrect": false },
                { "id": "opt3", "text": "Primary Nursing", "isCorrect": true },
                { "id": "opt4", "text": "Case Method", "isCorrect": false }
            ],
            "explanation": "Primary Nursing involves a primary nurse planning and evaluating care 24/7, with associate nurses assisting when the primary is off duty."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the type of audit with its description.",
            "points": 2,
            "pairs": [
                { "id": "pair1", "left": "Retrospective Audit", "right": "Evaluates care after patient discharge (Closed Chart)" },
                { "id": "pair2", "left": "Concurrent Audit", "right": "Evaluates care while patient is still hospitalized (Open Chart)" }
            ],
            "explanation": "Retrospective looks back (post-discharge); Concurrent looks at current care (during stay)."
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "A __id1__ is a specific set up established by authority as a rule for the measure of quantity or quality (yardstick).",
            "points": 1,
            "blanks": [
                {
                    "id": "id1",
                    "acceptedAnswers": ["standard", "Standard"],
                    "caseSensitive": false
                }
            ],
            "explanation": "A Standard is the yardstick or baseline against which care is measured."
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "Which type of criteria focuses on the environment, physical facilities, and policies?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Process Criteria", "isCorrect": false },
                { "id": "opt2", "text": "Outcome Criteria", "isCorrect": false },
                { "id": "opt3", "text": "Structure Criteria", "isCorrect": true },
                { "id": "opt4", "text": "Audit Criteria", "isCorrect": false }
            ],
            "explanation": "Structure criteria relate to resources/environment; Process relates to nurse actions; Outcome relates to patient results."
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "Functional Nursing is best described as:",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Patient-centered total care", "isCorrect": false },
                { "id": "opt2", "text": "Task-oriented division of labor", "isCorrect": true },
                { "id": "opt3", "text": "One-to-one nurse-patient relationship", "isCorrect": false },
                { "id": "opt4", "text": "Group action led by a team leader", "isCorrect": false }
            ],
            "explanation": "Functional nursing assigns specific tasks (medications, treatments) to specific nurses, rather than assigning patients."
        }
    ]
});