registerQuiz("topic-04-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-04-quiz",
    "metadata": {
        "title": "Functions of Management",
        "description": "Test understanding of Planning, Organizing, Staffing, Directing, and Controlling.",
        "topicId": "topic-04",
        "difficulty": "advanced",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2026-01-19T20:00:00Z",
        "updatedAt": "2026-01-19T20:00:00Z",
        "tags": ["functions", "planning", "organizing", "staffing", "controlling"]
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
            "type": "ordering",
            "question": "Place the steps of the Planning Process in the correct order.",
            "points": 1,
            "items": [
                { "id": "step1", "text": "Assessment", "correctPosition": 1 },
                { "id": "step2", "text": "Setting Goals", "correctPosition": 2 },
                { "id": "step3", "text": "Implementation", "correctPosition": 3 },
                { "id": "step4", "text": "Evaluation", "correctPosition": 4 }
            ],
            "explanation": "Planning follows a logical sequence similar to the nursing process: Assess -> Plan (Set Goals) -> Implement -> Evaluate."
        },
        {
            "id": "q2",
            "type": "short-answer",
            "question": "What does the acronym SWOT stand for in strategic planning?",
            "points": 1,
            "keywords": ["Strengths", "Weaknesses", "Opportunities", "Threats"],
            "minKeywords": 4,
            "modelAnswer": "Strengths, Weaknesses, Opportunities, Threats",
            "explanation": "SWOT analysis evaluates internal Strengths and Weaknesses, and external Opportunities and Threats."
        },
        {
            "id": "q3",
            "type": "matching",
            "question": "Match the organization type with its description.",
            "points": 2,
            "pairs": [
                { "id": "pair1", "left": "Formal Organization", "right": "Governed by specified rules and authority" },
                { "id": "pair2", "left": "Informal Organization", "right": "Social groups/cliques based on social needs" }
            ],
            "explanation": "Formal organizations are official structures; informal ones arise socially within them."
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "Which management function involves balancing the quantity and mix of staff needed by the organization?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Organizing", "isCorrect": false },
                { "id": "opt2", "text": "Staffing", "isCorrect": true },
                { "id": "opt3", "text": "Controlling", "isCorrect": false },
                { "id": "opt4", "text": "Leading", "isCorrect": false }
            ],
            "explanation": "Staffing focuses on recruitment, selection, induction, and scheduling of personnel."
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "In delegation, accountability is transferred completely to the delegate.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "False. Responsibility and Authority are transferred, but Accountability is SHARED. The manager remains accountable."
        },
        {
            "id": "q6",
            "type": "multiple-choice",
            "question": "Which of the following is an example of 'Downward Communication'?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "A nurse reporting a problem to the supervisor", "isCorrect": false },
                { "id": "opt2", "text": "Two nurses discussing a patient care plan", "isCorrect": false },
                { "id": "opt3", "text": "A circular from the Director explaining a new policy", "isCorrect": true },
                { "id": "opt4", "text": "Rumors spreading through the grapevine", "isCorrect": false }
            ],
            "explanation": "Downward communication flows from top management to employees (e.g., circulars, memos)."
        },
        {
            "id": "q7",
            "type": "multiple-choice",
            "question": "Which element of control serves as the yardstick against which performance is measured?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Corrective Action", "isCorrect": false },
                { "id": "opt2", "text": "Measurement", "isCorrect": false },
                { "id": "opt3", "text": "Standards", "isCorrect": true },
                { "id": "opt4", "text": "Appraisal", "isCorrect": false }
            ],
            "explanation": "Standards are the established criteria or yardsticks used to measure quality and quantity of performance."
        }
    ]
});