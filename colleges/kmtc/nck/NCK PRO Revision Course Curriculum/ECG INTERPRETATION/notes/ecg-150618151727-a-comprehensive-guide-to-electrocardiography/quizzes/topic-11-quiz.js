
registerQuiz("topic-11-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-11-quiz",
    "metadata": {
        "title": "Ventricular Arrhythmias",
        "description": "Test your ability to recognize VT and VF.",
        "topicId": "topic-11",
        "difficulty": "advanced",
        "estimatedTime": 5,
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
            "id": "q1-vt-qrs",
            "type": "multiple-choice",
            "question": "What is the characteristic shape of the QRS complex in Ventricular Tachycardia?",
            "points": 1,
            "options": [
                { "id": "op1", "text": "Broad / Wide", "isCorrect": true },
                { "id": "op2", "text": "Narrow", "isCorrect": false },
                { "id": "op3", "text": "Normal duration", "isCorrect": false },
                { "id": "op4", "text": "Inverted but narrow", "isCorrect": false }
            ],
            "explanation": "Because the rhythm originates in the ventricles, the QRS is broad/wide."
        },
        {
            "id": "q2-vt-cause",
            "type": "multiple-choice",
            "question": "Ventricular Tachycardia is usually secondary to which condition?",
            "points": 1,
            "options": [
                { "id": "op1", "text": "Myocardial Infarction", "isCorrect": true },
                { "id": "op2", "text": "Atrial Fibrillation", "isCorrect": false },
                { "id": "op3", "text": "Pericarditis", "isCorrect": false },
                { "id": "op4", "text": "Sinus Arrhythmia", "isCorrect": false }
            ],
            "explanation": "VT is usually secondary to infarction, where damaged myocardium creates depolarization circuits."
        },
        {
            "id": "q3-vt-diff",
            "type": "multiple-choice",
            "question": "What other rhythm must Ventricular Tachycardia be differentiated from?",
            "points": 1,
            "options": [
                { "id": "op1", "text": "Supraventricular tachycardia with aberrant conduction", "isCorrect": true },
                { "id": "op2", "text": "Sinus Tachycardia", "isCorrect": false },
                { "id": "op3", "text": "Atrial Fibrillation", "isCorrect": false },
                { "id": "op4", "text": "First Degree Heart Block", "isCorrect": false }
            ],
            "explanation": "SVT with aberrant conduction can also present with a broad complex tachycardia, mimicking VT."
        },
        {
            "id": "q4-vf-output",
            "type": "true-false",
            "question": "Ventricular Fibrillation is compatible with a cardiac output.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "False. VF involves completely disordered depolarization and is NOT compatible with cardiac output."
        },
        {
            "id": "q5-vf-appearance",
            "type": "multiple-select",
            "question": "How does Ventricular Fibrillation appear on an ECG? (Select all that apply)",
            "points": 1,
            "options": [
                { "id": "op1", "text": "Completely irregular trace", "isCorrect": true },
                { "id": "op2", "text": "Broad QRS complexes of varying width and height", "isCorrect": true },
                { "id": "op3", "text": "Regular saw-tooth pattern", "isCorrect": false },
                { "id": "op4", "text": "Consistent PR intervals", "isCorrect": false }
            ],
            "explanation": "VF shows a chaotic, completely irregular trace with varying complex morphology."
        }
    ]
});