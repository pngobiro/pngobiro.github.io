
registerQuiz("topic-03-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-03-quiz",
    "metadata": {
        "title": "Electrophysiology",
        "description": "Test your knowledge of the cardiac conduction pathway and the physics of ECG deflections.",
        "topicId": "topic-03",
        "difficulty": "intermediate",
        "estimatedTime": 8,
        "passingScore": 80,
        "createdAt": "2026-01-20T00:00:00Z"
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate",
        "allowRetry": true
    },
    "questions": [
        {
            "id": "q1-ordering-conduction",
            "type": "ordering",
            "question": "Arrange the components of the cardiac conduction system in the correct order of impulse transmission.",
            "points": 3,
            "items": [
                { "id": "s1", "text": "Sinoatrial (SA) node", "correctPosition": 1 },
                { "id": "s2", "text": "Atria (impulse travels across)", "correctPosition": 2 },
                { "id": "s3", "text": "Atrioventricular (AV) node", "correctPosition": 3 },
                { "id": "s4", "text": "Bundle of His", "correctPosition": 4 },
                { "id": "s5", "text": "Right and Left Bundle Branches", "correctPosition": 5 },
                { "id": "s6", "text": "Purkinje fibres", "correctPosition": 6 }
            ],
            "explanation": "The impulse starts at the SA node, spreads across the atria, reaches the AV node, goes down the Bundle of His, splits into branches, and ends in the Purkinje fibres."
        },
        {
            "id": "q2-pacemaker",
            "type": "multiple-choice",
            "question": "Which structure is considered the primary 'Pacemaker' of the heart?",
            "points": 1,
            "options": [
                { "id": "op1", "text": "Sinoatrial (SA) node", "isCorrect": true },
                { "id": "op2", "text": "Atrioventricular (AV) node", "isCorrect": false },
                { "id": "op3", "text": "Bundle of His", "isCorrect": false },
                { "id": "op4", "text": "Purkinje fibres", "isCorrect": false }
            ],
            "explanation": "The Sinoatrial (SA) node initiates the electrical impulse and is the heart's natural pacemaker."
        },
        {
            "id": "q3-deflection-pos",
            "type": "true-false",
            "question": "If an electrical impulse travels TOWARDS a positive electrode, it results in a POSITIVE (upward) deflection on the ECG.",
            "points": 1,
            "correctAnswer": true,
            "explanation": "True: Movement towards a positive electrode creates a positive deflection."
        },
        {
            "id": "q4-deflection-neg",
            "type": "fill-blank",
            "question": "If the electrical impulse travels __b1__ from the positive electrode, this results in a negative deflection.",
            "points": 1,
            "blanks": [
                {
                    "id": "b1",
                    "acceptedAnswers": ["away"],
                    "caseSensitive": false
                }
            ],
            "explanation": "Impulses moving AWAY from the positive electrode cause negative (downward) deflections."
        },
        {
            "id": "q5-ecg-sensing",
            "type": "multiple-choice",
            "question": "How does the ECG machine sense the heart's electrical activity?",
            "points": 1,
            "options": [
                { "id": "op1", "text": "By measuring current change across a positive and a negative electrode", "isCorrect": true },
                { "id": "op2", "text": "By measuring blood flow through the valves", "isCorrect": false },
                { "id": "op3", "text": "By detecting the sound of valves closing", "isCorrect": false },
                { "id": "op4", "text": "By sending small electrical shocks into the body", "isCorrect": false }
            ],
            "explanation": "The ECG senses voltage changes by measuring the current change across two electrodes (one positive, one negative)."
        }
    ]
});