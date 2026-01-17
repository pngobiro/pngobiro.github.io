registerQuiz("topic-07-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-07-quiz",
    "title": "Referral and Networking",
    "description": "Assess your understanding of referral systems and networking in HBC.",
    "metadata": {
        "title": "Topic 7: Referral & Networking",
        "description": "Linkages and continuity of care",
        "topicId": "topic-07",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2026-01-17T12:00:00Z",
        "updatedAt": "2026-01-17T12:00:00Z",
        "tags": ["referral", "networking", "systems"]
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
            "id": "t7-q1",
            "type": "multiple-choice",
            "question": "What is the definition of a 'Network' in HBC?",
            "points": 1,
            "options": [
                { "id": "n1", "text": "A list of phone numbers.", "isCorrect": false },
                { "id": "n2", "text": "A group of individuals/organisations working together to strengthen individual capacities.", "isCorrect": true },
                { "id": "n3", "text": "A computer system.", "isCorrect": false },
                { "id": "n4", "text": "A government department.", "isCorrect": false }
            ],
            "explanation": "A network is a collaborative group working together to share information and strengthen capacity."
        },
        {
            "id": "t7-q2",
            "type": "ordering",
            "question": "Order the steps for referring a patient:",
            "points": 3,
            "items": [
                { "id": "s1", "text": "Identify need for referral", "correctPosition": 1 },
                { "id": "s2", "text": "Decide destination and make arrangements", "correctPosition": 2 },
                { "id": "s3", "text": "Explain referral to the patient", "correctPosition": 3 },
                { "id": "s4", "text": "Fill referral form and obtain escort", "correctPosition": 4 },
                { "id": "s5", "text": "Follow up on the referral", "correctPosition": 5 }
            ],
            "explanation": "Identify -> Arrange -> Explain -> Execute -> Follow up."
        },
        {
            "id": "t7-q3",
            "type": "multiple-select",
            "question": "Why might a patient be referred? (Select all that apply)",
            "points": 2,
            "options": [
                { "id": "r1", "text": "Caregiver burnout", "isCorrect": true },
                { "id": "r2", "text": "Need for specialized hospital care", "isCorrect": true },
                { "id": "r3", "text": "Caregiver limitations (e.g., religious beliefs)", "isCorrect": true },
                { "id": "r4", "text": "Services within reach cannot meet immediate needs", "isCorrect": true }
            ],
            "explanation": "Referrals occur due to resource limitations, burnout, specific beliefs, or need for specialized care."
        },
        {
            "id": "t7-q4",
            "type": "true-false",
            "question": "Referral is a one-way process where the hospital sends the patient home and forgets about them.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "Referral is an effective and efficient TWO-WAY process (e.g., Hospital to Home, Home to Hospital) requiring feedback."
        },
        {
            "id": "t7-q5",
            "type": "multiple-choice",
            "question": "Which of the following is a constraint/limitation in networking?",
            "points": 1,
            "options": [
                { "id": "c1", "text": "Competition among organizations leading to lack of disclosure.", "isCorrect": true },
                { "id": "c2", "text": "Too many resources available.", "isCorrect": false },
                { "id": "c3", "text": "Patients refusing to go home.", "isCorrect": false },
                { "id": "c4", "text": "Excessive government funding.", "isCorrect": false }
            ],
            "explanation": "Competition and isolation among organizations prevent effective sharing of information and services."
        }
    ]
});