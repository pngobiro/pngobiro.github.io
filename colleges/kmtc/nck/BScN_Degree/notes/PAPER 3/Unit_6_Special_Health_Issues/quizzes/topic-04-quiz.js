registerQuiz("topic-04-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-04-quiz",
    "metadata": {
        "title": "Topic 04: Occupational Health Services",
        "description": "Test your knowledge of workplace hazards, prevention strategies, and the nurse's role.",
        "topicId": "topic-04",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 80,
        "createdAt": "2026-01-17T12:00:00Z",
        "updatedAt": "2026-01-17T12:00:00Z",
        "tags": ["occupational-health", "safety", "hazards"]
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
            "id": "t4-q1",
            "type": "multiple-choice",
            "question": "What is the primary aim of 'Primary Prevention' in occupational health?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Anticipate problems and avoid them before they occur.", "isCorrect": true },
                { "id": "opt2", "text": "Screening employees at risk.", "isCorrect": false },
                { "id": "opt3", "text": "Treatment and rehabilitation.", "isCorrect": false },
                { "id": "opt4", "text": "Providing first aid.", "isCorrect": false }
            ],
            "explanation": "Primary prevention anticipates problems and tries to avoid them before they occur (e.g., good machine construction, training)."
        },
        {
            "id": "t4-q2",
            "type": "matching",
            "question": "Match the occupational hazard to its classification.",
            "points": 3,
            "pairs": [
                { "id": "p1", "left": "Noise", "right": "Physical Hazard" },
                { "id": "p2", "left": "Pesticides", "right": "Chemical Hazard" },
                { "id": "p3", "left": "Anthrax", "right": "Biological Hazard" },
                { "id": "p4", "left": "Stress", "right": "Psychosocial Hazard" }
            ],
            "explanation": "Noise is Physical. Pesticides are Chemical. Anthrax is Biological. Stress is Psychosocial."
        },
        {
            "id": "t4-q3",
            "type": "multiple-choice",
            "question": "Which role involves the Occupational Health Nurse compiling data on absenteeism owing to illness?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Managerial Role", "isCorrect": true },
                { "id": "opt2", "text": "Environmental Role", "isCorrect": false },
                { "id": "opt3", "text": "Educational Role", "isCorrect": false },
                { "id": "opt4", "text": "Clinical Role", "isCorrect": false }
            ],
            "explanation": "The Managerial Role includes managing interactions, setting up referral systems, and compiling data on absenteeism."
        },
        {
            "id": "t4-q4",
            "type": "multiple-select",
            "question": "Which of the following are objectives of a preplacement medical examination?",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Determine suitability for a particular job", "isCorrect": true },
                { "id": "opt2", "text": "Provide a baseline record", "isCorrect": true },
                { "id": "opt3", "text": "Detect untreated pathological conditions", "isCorrect": true },
                { "id": "opt4", "text": "Determine salary scale", "isCorrect": false }
            ],
            "explanation": "Preplacement exams determine suitability, detect conditions, and provide a baseline. They do not determine salary."
        },
        {
            "id": "t4-q5",
            "type": "true-false",
            "question": "The most effective method of dealing with a hazard is to provide protective clothing to workers.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "The text states: 'The best preventive measure is to get rid of the substance, chemical or machine altogether... it is better to try to eliminate hazards by other means [than protective clothing].'"
        },
        {
            "id": "t4-q6",
            "type": "fill-blank",
            "question": "General __id1__ is a method of dealing with hazards where atmospheric contaminants and heat are removed or reduced by installing wide windows.",
            "points": 1,
            "blanks": [
                {
                    "id": "id1",
                    "acceptedAnswers": ["ventilation"],
                    "caseSensitive": false
                }
            ],
            "explanation": "General ventilation involves improving air flow to remove contaminants and heat."
        }
    ]
});