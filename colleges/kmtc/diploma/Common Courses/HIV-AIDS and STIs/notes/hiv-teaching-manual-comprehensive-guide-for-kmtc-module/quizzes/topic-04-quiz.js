window.registerQuiz('topic-04-quiz', {
    "schemaVersion": "1.0",
    "quizId": "topic-04-quiz",
    "metadata": {
        "title": "Social Behavior Change Communication (SBCC)",
        "description": "Evaluate your understanding of SBCC concepts, models, and strategies.",
        "topicId": "topic-04-sbcc",
        "difficulty": "intermediate",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2024-01-20T12:00:00Z",
        "tags": ["sbcc", "communication", "behavior"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate",
        "allowRetry": true,
        "showCorrectAnswers": true
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "What is SBCC?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Strategic Business Care Communication", "isCorrect": false },
                { "id": "b", "text": "Social Behavior Change Communication", "isCorrect": true },
                { "id": "c", "text": "Social Based Community Care", "isCorrect": false },
                { "id": "d", "text": "Standard Behavior Change Concept", "isCorrect": false }
            ],
            "explanation": "SBCC stands for Social Behavior Change Communication, the strategic use of communication to promote positive health outcomes."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the Behavior Change Model to its originator/description:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Diffusion of Innovations", "right": "Everett Rogers" },
                { "id": "p2", "left": "Stages of Change", "right": "Prochaska, DiClemente and Norcross" },
                { "id": "p3", "left": "Self-Efficacy", "right": "Bandura" },
                { "id": "p4", "left": "Behavior Change Continuum", "right": "World Bank" }
            ]
        },
        {
            "id": "q3",
            "type": "ordering",
            "question": "Order the stages of the Behavior Change Continuum from start to finish:",
            "points": 10,
            "items": [
                { "id": "1", "text": "Unaware", "correctPosition": 1 },
                { "id": "2", "text": "Aware", "correctPosition": 2 },
                { "id": "3", "text": "Concerned", "correctPosition": 3 },
                { "id": "4", "text": "Knowledgeable", "correctPosition": 4 },
                { "id": "5", "text": "Motivated to change", "correctPosition": 5 },
                { "id": "6", "text": "Practicing trial behavior change", "correctPosition": 6 },
                { "id": "7", "text": "Practicing sustained behavior change", "correctPosition": 7 }
            ]
        },
        {
            "id": "q4",
            "type": "multiple-select",
            "question": "Which of the following are enabling factors for behavior change? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Effective communication", "isCorrect": true },
                { "id": "b", "text": "Creating an enabling environment (policies)", "isCorrect": true },
                { "id": "c", "text": "Strict enforcement of laws", "isCorrect": false },
                { "id": "d", "text": "User friendly, accessible services", "isCorrect": true }
            ],
            "explanation": "Enabling factors include effective communication, supportive environment/policies, and accessible services."
        },
        {
            "id": "q5",
            "type": "fill-blank",
            "question": "A mark of shame or discredit on a person or group is known as __b1__.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["stigma"], "caseSensitive": false }
            ],
            "explanation": "Stigma is a major barrier to HIV services that SBCC aims to reduce."
        },
        {
            "id": "q6",
            "type": "true-false",
            "question": "Pre-testing of SBCC materials is an optional step if the team is experienced.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "Pre-testing is essential for developing effective SBCC materials to ensure they are understood and accepted by the target audience."
        },
        {
            "id": "q7",
            "type": "multiple-choice",
            "question": "Which of the following is considered an 'Edutainment' channel of communication?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Posters", "isCorrect": false },
                { "id": "b", "text": "Counseling", "isCorrect": false },
                { "id": "c", "text": "Street shows and dramas", "isCorrect": true },
                { "id": "d", "text": "Newspapers", "isCorrect": false }
            ],
            "explanation": "Edutainment combines education and entertainment, such as dramas, songs, and shows."
        },
        {
            "id": "q8",
            "type": "short-answer",
            "question": "Name one challenge of SBCC programs listed in the manual.",
            "points": 10,
            "keywords": ["funding", "budget", "training", "resources", "sustainability", "coordination", "linkages"],
            "minKeywords": 1,
            "modelAnswer": "Budgets / Limited training resources / Sustainability",
            "explanation": "Challenges include limited resources, sustainability issues, coordination gaps, and inadequate budgeting for process."
        },
        {
            "id": "q9",
            "type": "multiple-select",
            "question": "Which of the following are positive key messages for community prevention? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Get tested for HIV", "isCorrect": true },
                { "id": "b", "text": "Use condoms every time", "isCorrect": true },
                { "id": "c", "text": "Avoid all social contact with PLHIV", "isCorrect": false },
                { "id": "d", "text": "Limit number of sexual partners", "isCorrect": true }
            ],
            "explanation": "Key messages encourage testing, condom use, and partner reduction, not isolation."
        },
        {
            "id": "q10",
            "type": "true-false",
            "question": "SBCC strategies should be integrated with program goals from the start.",
            "points": 10,
            "correctAnswer": true,
            "explanation": "SBCC is an essential element and should be included in the original design of interventions."
        }
    ]
});