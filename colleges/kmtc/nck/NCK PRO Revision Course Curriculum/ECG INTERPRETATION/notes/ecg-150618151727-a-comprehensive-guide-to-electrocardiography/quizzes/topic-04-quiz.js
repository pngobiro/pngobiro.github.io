
registerQuiz("topic-04-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-04-quiz",
    "metadata": {
        "title": "Leads & Axis",
        "description": "Test your knowledge of limb leads, chest leads, views of the heart, and axis deviation.",
        "topicId": "topic-04",
        "difficulty": "advanced",
        "estimatedTime": 10,
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
            "id": "q1-lead-I",
            "type": "multiple-choice",
            "question": "How is Lead I formed?",
            "points": 1,
            "options": [
                { "id": "op1", "text": "Right Arm (-) to Left Arm (+)", "isCorrect": true },
                { "id": "op2", "text": "Right Arm (-) to Left Leg (+)", "isCorrect": false },
                { "id": "op3", "text": "Left Arm (-) to Left Leg (+)", "isCorrect": false },
                { "id": "op4", "text": "Left Arm (-) to Right Arm (+)", "isCorrect": false }
            ],
            "explanation": "Lead I measures the potential difference between the Right Arm (negative) and Left Arm (positive)."
        },
        {
            "id": "q2-inferior-leads",
            "type": "multiple-select",
            "question": "Which of the following leads are considered 'Inferior' leads? (Select all that apply)",
            "points": 1,
            "options": [
                { "id": "op1", "text": "II", "isCorrect": true },
                { "id": "op2", "text": "III", "isCorrect": true },
                { "id": "op3", "text": "aVF", "isCorrect": true },
                { "id": "op4", "text": "I", "isCorrect": false },
                { "id": "op5", "text": "aVL", "isCorrect": false }
            ],
            "explanation": "Leads II, III, and aVF look at the inferior surface of the heart."
        },
        {
            "id": "q3-view-v1-v2",
            "type": "multiple-choice",
            "question": "Which area of the heart do leads V1 and V2 primarily view?",
            "points": 1,
            "options": [
                { "id": "op1", "text": "Anterior and Right Ventricle", "isCorrect": true },
                { "id": "op2", "text": "Lateral and Left Ventricle", "isCorrect": false },
                { "id": "op3", "text": "Inferior surface", "isCorrect": false },
                { "id": "op4", "text": "Right Atrium only", "isCorrect": false }
            ],
            "explanation": "V1 and V2 look at the anterior of the heart and the Right Ventricle."
        },
        {
            "id": "q4-axis-def",
            "type": "true-false",
            "question": "The 'Axis' of the heart refers to the overall direction of the cardiac impulse or wave of depolarisation.",
            "points": 1,
            "correctAnswer": true,
            "explanation": "True. The axis represents the summation of all vectors of depolarization."
        },
        {
            "id": "q5-rad-mnemonic",
            "type": "matching",
            "question": "Match the Axis Deviation to the correct mnemonic.",
            "points": 2,
            "pairs": [
                { "id": "p1", "left": "Right Axis Deviation (RAD)", "right": "RALPH" },
                { "id": "p2", "left": "Left Axis Deviation (LAD)", "right": "VILLA" }
            ],
            "explanation": "Remember: 'RAD RALPH' and 'LAD from VILLA'."
        },
        {
            "id": "q6-lad-cause",
            "type": "multiple-select",
            "question": "Based on the mnemonic 'VILLA', which of the following are causes of Left Axis Deviation? (Select all that apply)",
            "points": 1,
            "options": [
                { "id": "op1", "text": "Ventricular Tachycardia", "isCorrect": true },
                { "id": "op2", "text": "Inferior MI", "isCorrect": true },
                { "id": "op3", "text": "Left Ventricular Hypertrophy", "isCorrect": true },
                { "id": "op4", "text": "Right Ventricular Hypertrophy", "isCorrect": false }
            ],
            "explanation": "VILLA stands for: Ventricular tachycardia, Inferior MI, Left ventricular hypertrophy, Left Anterior hemiblock."
        }
    ]
});