
registerQuiz("topic-06-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-06-quiz",
    "metadata": {
        "title": "P Wave & PR Interval",
        "description": "Test your knowledge of atrial abnormalities, WPW syndrome, and heart blocks.",
        "topicId": "topic-06",
        "difficulty": "advanced",
        "estimatedTime": 15,
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
            "id": "q1-pr-limit",
            "type": "multiple-choice",
            "question": "What is the normal duration range for the PR interval?",
            "points": 1,
            "options": [
                { "id": "op1", "text": "0.12 - 0.20 seconds", "isCorrect": true },
                { "id": "op2", "text": "0.08 - 0.12 seconds", "isCorrect": false },
                { "id": "op3", "text": "0.20 - 0.40 seconds", "isCorrect": false },
                { "id": "op4", "text": "0.04 - 0.08 seconds", "isCorrect": false }
            ],
            "explanation": "The normal PR interval is 3-5 small squares, which equals 0.12 to 0.2 seconds."
        },
        {
            "id": "q2-p-mitrale",
            "type": "multiple-select",
            "question": "Which of the following are characteristics or causes of P Mitrale? (Select all that apply)",
            "points": 2,
            "options": [
                { "id": "op1", "text": "Bifid (M-shaped) P wave", "isCorrect": true },
                { "id": "op2", "text": "Caused by Left Atrial Hypertrophy", "isCorrect": true },
                { "id": "op3", "text": "P wave length > 0.08s", "isCorrect": true },
                { "id": "op4", "text": "Caused by Pulmonary Hypertension", "isCorrect": false },
                { "id": "op5", "text": "Tall peaked P wave (>2.5mm)", "isCorrect": false }
            ],
            "explanation": "P Mitrale is a wide, bifid P wave caused by LA hypertrophy (e.g., mitral valve disease). P Pulmonale is the tall peaked one."
        },
        {
            "id": "q3-wpw",
            "type": "fill-blank",
            "question": "In Wolff-Parkinson-White syndrome, the accessory pathway is known as the Bundle of __b1__. This causes a slow rising __b2__ wave on the ECG.",
            "points": 2,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["Kent"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["Delta", "delta"], "caseSensitive": false }
            ],
            "explanation": "The accessory pathway is the Bundle of Kent, which causes early ventricular depolarization seen as a Delta wave."
        },
        {
            "id": "q4-blocks-matching",
            "type": "matching",
            "question": "Match the Heart Block type to its description.",
            "points": 4,
            "pairs": [
                { "id": "p1", "left": "1st Degree", "right": "Constant long PR (>0.2s)" },
                { "id": "p2", "left": "2nd Degree (Mobitz I)", "right": "PR widens every beat then drop" },
                { "id": "p3", "left": "2nd Degree (Mobitz II)", "right": "Constant PR then dropped QRS" },
                { "id": "p4", "left": "3rd Degree", "right": "No relationship between P and QRS" }
            ],
            "explanation": "1st=Long PR. Mobitz I=Wenckebach (widens). Mobitz II=Constant PR+Drop. 3rd=Dissociation."
        },
        {
            "id": "q5-wenckebach-mnemonic",
            "type": "multiple-choice",
            "question": "Which mnemonic describes the Wenckebach phenomenon?",
            "points": 1,
            "options": [
                { "id": "op1", "text": "(w)one, Wenckebach, widens", "isCorrect": true },
                { "id": "op2", "text": "RAD RALPH", "isCorrect": false },
                { "id": "op3", "text": "Ride Your Green Bike", "isCorrect": false },
                { "id": "op4", "text": "LAD from VILLA", "isCorrect": false }
            ],
            "explanation": "The mnemonic for Mobitz Type I (Wenckebach) is '(w)one, Wenckebach, widens' referring to the widening PR interval."
        }
    ]
});