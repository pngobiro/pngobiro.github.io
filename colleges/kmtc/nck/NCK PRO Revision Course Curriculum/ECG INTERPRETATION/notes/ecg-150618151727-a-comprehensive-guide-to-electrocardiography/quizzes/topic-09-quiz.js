
registerQuiz("topic-09-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-09-quiz",
    "metadata": {
        "title": "Myocardial Infarction",
        "description": "Test your ability to recognize MI evolution and localize infarcts.",
        "topicId": "topic-09",
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
            "id": "q1-ordering-evolution",
            "type": "ordering",
            "question": "Arrange the ECG changes of Myocardial Infarction in the correct chronological order.",
            "points": 3,
            "items": [
                { "id": "s1", "text": "T wave becomes peaked", "correctPosition": 1 },
                { "id": "s2", "text": "ST segment begins to rise", "correctPosition": 2 },
                { "id": "s3", "text": "T wave inverts", "correctPosition": 3 },
                { "id": "s4", "text": "Pathological Q waves form", "correctPosition": 4 }
            ],
            "explanation": "Hours: Peaked T -> ST rise. 24h: T invert -> ST resolves. Days: Q waves."
        },
        {
            "id": "q2-localization-inferior",
            "type": "multiple-select",
            "question": "Which leads show changes in an Inferior MI? (Select all that apply)",
            "points": 2,
            "options": [
                { "id": "op1", "text": "II", "isCorrect": true },
                { "id": "op2", "text": "III", "isCorrect": true },
                { "id": "op3", "text": "aVF", "isCorrect": true },
                { "id": "op4", "text": "I", "isCorrect": false },
                { "id": "op5", "text": "aVL", "isCorrect": false }
            ],
            "explanation": "Inferior MI is seen in leads II, III, and aVF."
        },
        {
            "id": "q3-localization-anteroseptal",
            "type": "multiple-choice",
            "question": "Which leads corresponds to an Anteroseptal MI?",
            "points": 1,
            "options": [
                { "id": "op1", "text": "V1 - V4", "isCorrect": true },
                { "id": "op2", "text": "V4 - V6, I, aVL", "isCorrect": false },
                { "id": "op3", "text": "II, III, aVF", "isCorrect": false },
                { "id": "op4", "text": "V1 - V2 only", "isCorrect": false }
            ],
            "explanation": "Anteroseptal MI affects leads V1 through V4."
        },
        {
            "id": "q4-posterior",
            "type": "multiple-select",
            "question": "How does a Posterior MI present on a standard 12-lead ECG? (Select all that apply)",
            "points": 2,
            "options": [
                { "id": "op1", "text": "Tall wide R wave in V1 and V2", "isCorrect": true },
                { "id": "op2", "text": "ST depression in V1 and V2", "isCorrect": true },
                { "id": "op3", "text": "ST elevation in V1 and V2", "isCorrect": false },
                { "id": "op4", "text": "Deep Q waves in V1 and V2", "isCorrect": false }
            ],
            "explanation": "Posterior MI shows reciprocal changes in anterior leads: Tall R wave and ST depression in V1/V2."
        },
        {
            "id": "q5-aneurysm",
            "type": "true-false",
            "question": "If ST elevation persists long after the acute phase (e.g., beyond 24-48 hours), it may indicate the formation of a left ventricular aneurysm.",
            "points": 1,
            "correctAnswer": true,
            "explanation": "Persistent ST elevation is a hallmark sign of a ventricular aneurysm post-MI."
        }
    ]
});