registerQuiz("topic-02-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-02-quiz",
    "metadata": {
        "title": "Topic 02: Planning a Diagnosis",
        "description": "Test your knowledge on the planning process, exploration phase, and sampling methods.",
        "topicId": "topic-02",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2025-12-26T12:00:00Z",
        "tags": ["planning", "sampling", "exploration"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate",
        "allowRetry": true
    },
    "questions": [
        {
            "id": "q1",
            "type": "ordering",
            "question": "Place the steps of Community Diagnosis in the correct order.",
            "points": 10,
            "items": [
                { "id": "i1", "text": "Exploration", "correctPosition": 1 },
                { "id": "i2", "text": "Planning the survey", "correctPosition": 2 },
                { "id": "i3", "text": "Developing and pre-testing tools", "correctPosition": 3 },
                { "id": "i4", "text": "Execution and data analysis", "correctPosition": 4 },
                { "id": "i5", "text": "Report writing and dissemination", "correctPosition": 5 }
            ],
            "explanation": "The logical flow is Exploration -> Planning -> Tool Development -> Execution -> Reporting."
        },
        {
            "id": "q2",
            "type": "multiple-select",
            "question": "Which activities are part of the 'Exploration' phase? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Seeking permission from leaders", "isCorrect": true },
                { "id": "b", "text": "Seeking reactions of community members", "isCorrect": true },
                { "id": "c", "text": "Gathering background data", "isCorrect": true },
                { "id": "d", "text": "Analyzing final survey data", "isCorrect": false }
            ],
            "explanation": "Exploration involves seeking permission, seeking reactions, and gathering background data. Analysis happens later."
        },
        {
            "id": "q3",
            "type": "matching",
            "question": "Match the official to the information they provide.",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Medical Officer of Health", "right": "Health profile of the district" },
                { "id": "p2", "left": "District Commissioner", "right": "Boundaries and population maps" },
                { "id": "p3", "left": "District Education Officer", "right": "Literacy levels and schools" }
            ],
            "explanation": "Different officials provide specific background data relevant to their jurisdiction."
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "The adage says: 'If you fail to __b1__ you plan to __b2__'.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["plan"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["fail"], "caseSensitive": false }
            ],
            "explanation": "This emphasizes the critical importance of the planning phase."
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "What is 'Sampling'?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Collecting data from every single person in the world", "isCorrect": false },
                { "id": "b", "text": "Selecting individuals to represent the larger group", "isCorrect": true },
                { "id": "c", "text": "Guessing the results of a survey", "isCorrect": false },
                { "id": "d", "text": "Testing blood samples only", "isCorrect": false }
            ],
            "explanation": "Sampling is selecting a representative subset of the study population."
        },
        {
            "id": "q6",
            "type": "matching",
            "question": "Classify the sampling method as Probability or Non-probability.",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Simple Random Sampling", "right": "Probability" },
                { "id": "p2", "left": "Convenient Sampling", "right": "Non-probability" },
                { "id": "p3", "left": "Cluster Sampling", "right": "Probability" },
                { "id": "p4", "left": "Quota Sampling", "right": "Non-probability" }
            ],
            "explanation": "Probability methods (Random, Cluster) aim for representation. Non-probability methods (Convenient, Quota) do not."
        },
        {
            "id": "q7",
            "type": "true-false",
            "question": "Probability sampling is used when you want to make generalizations about the whole population.",
            "points": 5,
            "correctAnswer": true,
            "explanation": "True. Probability sampling ensures the sample is representative, allowing for generalization."
        },
        {
            "id": "q8",
            "type": "multiple-choice",
            "question": "Which of these is NOT a method of gathering information during exploration?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Observing", "isCorrect": false },
                { "id": "b", "text": "Smelling", "isCorrect": false },
                { "id": "c", "text": "Telepathy", "isCorrect": true },
                { "id": "d", "text": "Listening", "isCorrect": false }
            ],
            "explanation": "You gather information by Questioning, Observing, Smelling, and Listening."
        },
        {
            "id": "q9",
            "type": "multiple-select",
            "question": "When planning the survey, which questions need to be answered? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Why is the survey being done?", "isCorrect": true },
                { "id": "b", "text": "Where will it take place?", "isCorrect": true },
                { "id": "c", "text": "Who will be interviewed?", "isCorrect": true },
                { "id": "d", "text": "What is the weather forecast?", "isCorrect": false }
            ],
            "explanation": "Planning involves defining the Why, Where, Who, When, and What of the survey."
        },
        {
            "id": "q10",
            "type": "true-false",
            "question": "The 'Accessible Population' is the group from which you actually draw your sample.",
            "points": 5,
            "correctAnswer": true,
            "explanation": "True. The accessible population is the portion of the target population that you can reach to draw your sample."
        }
    ]
});