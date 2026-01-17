registerQuiz("topic-02-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-02-quiz",
    "metadata": {
        "title": "Planning a Community Diagnosis",
        "description": "Test your knowledge on survey planning steps, community exploration, and sampling methods.",
        "topicId": "topic-02",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2026-01-17T10:00:00Z",
        "tags": ["planning", "sampling", "methodology"]
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
            "id": "q1-process",
            "type": "ordering",
            "question": "Arrange the first few steps of the Community Diagnosis process.",
            "points": 2,
            "items": [
                { "id": "s1", "text": "Exploration / Community Inventory", "correctPosition": 1 },
                { "id": "s2", "text": "Planning of the survey", "correctPosition": 2 },
                { "id": "s3", "text": "Developing and pre-testing tools", "correctPosition": 3 },
                { "id": "s4", "text": "Execution of the survey", "correctPosition": 4 }
            ],
            "explanation": "You must explore the community first, then plan the survey, then develop tools, and finally execute."
        },
        {
            "id": "q2-exploration",
            "type": "multiple-select",
            "question": "Which activities take place during the 'Exploration' phase?",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Seeking permission from leaders", "isCorrect": true },
                { "id": "opt2", "text": "Seeking reactions of community members", "isCorrect": true },
                { "id": "opt3", "text": "Gathering background data", "isCorrect": true },
                { "id": "opt4", "text": "Analyzing the final data", "isCorrect": false }
            ],
            "explanation": "Exploration involves permission, gauging reactions, and background data. Analysis happens after execution."
        },
        {
            "id": "q3-sampling-def",
            "type": "multiple-choice",
            "question": "What is the purpose of 'Sampling'?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "To select a representative group because studying the whole population is often impractical.", "isCorrect": true },
                { "id": "opt2", "text": "To ensure every single person in the country is interviewed.", "isCorrect": false },
                { "id": "opt3", "text": "To collect fees from the community.", "isCorrect": false },
                { "id": "opt4", "text": "To diagnose patients in the hospital.", "isCorrect": false }
            ],
            "explanation": "Sampling selects a manageable, representative subset of the population for study."
        },
        {
            "id": "q4-prob-sampling",
            "type": "matching",
            "question": "Match the Probability Sampling method to its description.",
            "points": 3,
            "pairs": [
                { "id": "p1", "left": "Simple Random", "right": "Every unit has an equal chance (e.g., lottery method)." },
                { "id": "p2", "left": "Systematic", "right": "Picking every 'nth' individual (e.g., every 10th file)." },
                { "id": "p3", "left": "Stratified", "right": "Dividing population into subgroups (strata) and sampling from each." },
                { "id": "p4", "left": "Cluster", "right": "Randomly selecting intact groups (e.g., schools, villages)." }
            ],
            "explanation": "Simple Random = equal chance. Systematic = nth item. Stratified = subgroups. Cluster = intact groups."
        },
        {
            "id": "q5-non-prob",
            "type": "multiple-choice",
            "question": "Which of the following is a Non-Probability (Biased) sampling method?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Quota Sampling", "isCorrect": true },
                { "id": "opt2", "text": "Simple Random Sampling", "isCorrect": false },
                { "id": "opt3", "text": "Cluster Sampling", "isCorrect": false },
                { "id": "opt4", "text": "Systematic Sampling", "isCorrect": false }
            ],
            "explanation": "Quota sampling (and Convenience/Purposive) are non-probability methods. The others are probability methods."
        },
        {
            "id": "q6-interviewers",
            "type": "multiple-select",
            "question": "Who are suitable people to train as interviewers for a community survey?",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "School teachers", "isCorrect": true },
                { "id": "opt2", "text": "Village elders", "isCorrect": true },
                { "id": "opt3", "text": "Young educated people from the community", "isCorrect": true },
                { "id": "opt4", "text": "Strangers who do not speak the local language", "isCorrect": false }
            ],
            "explanation": "Interviewers should ideally be literate and well-known to the community to establish rapport."
        },
        {
            "id": "q7-bias",
            "type": "true-false",
            "question": "Sampling Error occurs because within a small sample, there may be people whose characteristics are very different from the rest of the group.",
            "points": 1,
            "correctAnswer": true,
            "explanation": "Even with correct techniques, small samples can have sampling errors due to individual variations."
        },
        {
            "id": "q8-timing",
            "type": "fill-blank",
            "question": "When planning 'When' to survey, you should avoid market days and seasons of heavy activity like __p__.",
            "points": 1,
            "blanks": [
                { "id": "p", "acceptedAnswers": ["planting", "harvesting"], "caseSensitive": false }
            ],
            "explanation": "Surveys should avoid busy seasons like planting or harvesting when people are not home."
        },
        {
            "id": "q9-planning-qs",
            "type": "multiple-select",
            "question": "Which questions must be answered during the Planning phase?",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Why is the survey being done?", "isCorrect": true },
                { "id": "opt2", "text": "Who will be interviewed?", "isCorrect": true },
                { "id": "opt3", "text": "What instruments will be used?", "isCorrect": true },
                { "id": "opt4", "text": "How do we treat the diseases found?", "isCorrect": false }
            ],
            "explanation": "Planning covers the logistics (Why, Who, What instruments). Treatment protocols come during execution/action, not the survey planning itself."
        },
        {
            "id": "q10-permission",
            "type": "true-false",
            "question": "You do not need permission from community leaders if you have permission from the central government.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "You MUST seek permission from community leaders (Chiefs, Elders) to ensure cooperation and success."
        },
        {
            "id": "q11-purposive",
            "type": "short-answer",
            "question": "In which sampling method does the researcher simply pick individuals or cases that have specific required characteristics?",
            "points": 1,
            "keywords": ["purposive", "purposive sampling"],
            "modelAnswer": "Purposive Sampling",
            "explanation": "Purposive sampling involves deliberately choosing subjects who fit specific criteria."
        },
        {
            "id": "q12-study-pop",
            "type": "fill-blank",
            "question": "The __a__ population is the group of individuals with characteristics comparable to the target population that is actually available for the study.",
            "points": 1,
            "blanks": [
                { "id": "a", "acceptedAnswers": ["accessible"], "caseSensitive": false }
            ],
            "explanation": "The accessible population is the portion of the target population you can actually reach."
        }
    ]
});