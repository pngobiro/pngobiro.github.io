
registerQuiz("topic-10-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-10-quiz",
    "metadata": {
        "title": "Tachycardias",
        "description": "Test your ability to differentiate SVT, Atrial Fibrillation, and Atrial Flutter.",
        "topicId": "topic-10",
        "difficulty": "intermediate",
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
            "id": "q1-svt-definition",
            "type": "multiple-choice",
            "question": "Where is the impulse initiated in a Supraventricular Tachycardia (SVT)?",
            "points": 1,
            "options": [
                { "id": "op1", "text": "In the atria (SA node, atrial wall, or AV node)", "isCorrect": true },
                { "id": "op2", "text": "In the Bundle of His", "isCorrect": false },
                { "id": "op3", "text": "In the Purkinje fibres", "isCorrect": false },
                { "id": "op4", "text": "In the Ventricular myocardium", "isCorrect": false }
            ],
            "explanation": "SVT originates above the ventricles, specifically in the atria or AV node."
        },
        {
            "id": "q2-svt-complex",
            "type": "multiple-choice",
            "question": "If there is a normal conduction pathway when the impulse reaches the ventricles during SVT, what type of QRS complex is formed?",
            "points": 1,
            "options": [
                { "id": "op1", "text": "Narrow complex", "isCorrect": true },
                { "id": "op2", "text": "Broad complex", "isCorrect": false },
                { "id": "op3", "text": "Absent QRS", "isCorrect": false },
                { "id": "op4", "text": "Inverted complex", "isCorrect": false }
            ],
            "explanation": "Normal conduction results in a narrow QRS. Broad QRS occurs if there is aberrant conduction (e.g., LBBB)."
        },
        {
            "id": "q3-afib-features",
            "type": "multiple-select",
            "question": "What are the hallmark features of Atrial Fibrillation? (Select all that apply)",
            "points": 2,
            "options": [
                { "id": "op1", "text": "Irregularly irregular rhythm", "isCorrect": true },
                { "id": "op2", "text": "No discernible P waves (shaky baseline)", "isCorrect": true },
                { "id": "op3", "text": "Saw-tooth baseline", "isCorrect": false },
                { "id": "op4", "text": "Regular rhythm with narrow QRS", "isCorrect": false }
            ],
            "explanation": "AF is characterized by an irregularly irregular rhythm and absent P waves."
        },
        {
            "id": "q4-flutter-pattern",
            "type": "multiple-choice",
            "question": "Which atrial arrhythmia is characterized by a 'saw-tooth' baseline and an atrial rate of approx. 250/min?",
            "points": 1,
            "options": [
                { "id": "op1", "text": "Atrial Flutter", "isCorrect": true },
                { "id": "op2", "text": "Atrial Fibrillation", "isCorrect": false },
                { "id": "op3", "text": "Paroxysmal Atrial Tachycardia", "isCorrect": false },
                { "id": "op4", "text": "Ventricular Tachycardia", "isCorrect": false }
            ],
            "explanation": "Atrial Flutter creates a classic saw-tooth pattern due to circular depolarization circuits."
        },
        {
            "id": "q5-afib-mech",
            "type": "fill-blank",
            "question": "In Atrial Fibrillation, there is no order to atrial depolarisation; different areas of the atrium depolarise at __b1__.",
            "points": 1,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["will", "random"], "caseSensitive": false }
            ],
            "explanation": "In AF, different areas depolarize at will, causing the disorganized rhythm."
        }
    ]
});