registerQuiz("topic-03-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-03-quiz",
    "metadata": {
        "title": "Data Collection Tools & Pre-testing",
        "description": "Assess your knowledge on designing questionnaires, running Focus Group Discussions, and pre-testing instruments.",
        "topicId": "topic-03",
        "difficulty": "intermediate",
        "estimatedTime": 12,
        "passingScore": 70,
        "createdAt": "2026-01-17T10:00:00Z",
        "tags": ["tools", "questionnaire", "fgd", "pre-testing"]
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
            "id": "q1-tools-list",
            "type": "multiple-select",
            "question": "Which of the following are tools used to measure a community's health status?",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Questionnaires", "isCorrect": true },
                { "id": "opt2", "text": "Focus Group Discussions (FGDs)", "isCorrect": true },
                { "id": "opt3", "text": "Anthropometric measurements (e.g., weighing)", "isCorrect": true },
                { "id": "opt4", "text": "Surgical scalpels", "isCorrect": false }
            ],
            "explanation": "Community diagnosis uses survey tools like questionnaires, FGDs, and measurements, not surgical tools."
        },
        {
            "id": "q2-questionnaire-quality",
            "type": "multiple-select",
            "question": "What are qualities of a good questionnaire?",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Has simple and specific questions", "isCorrect": true },
                { "id": "opt2", "text": "Avoids bias and double questions", "isCorrect": true },
                { "id": "opt3", "text": "Uses complex jargon to sound professional", "isCorrect": false },
                { "id": "opt4", "text": "Ranges from known to unknown / simple to complex", "isCorrect": true }
            ],
            "explanation": "Good questionnaires are simple, unbiased, logical (simple to complex), and avoid jargon."
        },
        {
            "id": "q3-q-types",
            "type": "matching",
            "question": "Match the question type to its definition.",
            "points": 2,
            "pairs": [
                { "id": "p1", "left": "Open-ended", "right": "Allows respondent to answer in their own words." },
                { "id": "p2", "left": "Closed-ended", "right": "Offers a list of possible answers to choose from." }
            ],
            "explanation": "Open-ended = own words; Closed-ended = choose from list."
        },
        {
            "id": "q4-double-q",
            "type": "true-false",
            "question": "A question like 'Did the talk help sanitation AND nutrition?' is a good question because it saves time.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "This is a double question. It should be avoided because a respondent might say yes to one part and no to the other."
        },
        {
            "id": "q5-info-types",
            "type": "matching",
            "question": "Match the type of information to the example question.",
            "points": 3,
            "pairs": [
                { "id": "p1", "left": "Understanding/Knowledge", "right": "What causes malaria?" },
                { "id": "p2", "left": "Beliefs/Attitudes", "right": "In your opinion, does self-esteem prevent drug abuse?" },
                { "id": "p3", "left": "Behaviour", "right": "Did you sleep under a net last night?" },
                { "id": "p4", "left": "Attributes", "right": "What is your age?" }
            ],
            "explanation": "Knowledge tests understanding. Attitudes test opinions. Behaviour tests actions. Attributes test demographics."
        },
        {
            "id": "q6-fgd-roles",
            "type": "fill-blank",
            "question": "In an FGD, the __f__ guides the discussion, while the __r__ takes notes.",
            "points": 2,
            "blanks": [
                { "id": "f", "acceptedAnswers": ["facilitator", "moderator"], "caseSensitive": false },
                { "id": "r", "acceptedAnswers": ["recorder"], "caseSensitive": false }
            ],
            "explanation": "The Facilitator stimulates discussion; the Recorder documents it."
        },
        {
            "id": "q7-fgd-steps",
            "type": "ordering",
            "question": "Order the steps of conducting a Focus Group Discussion.",
            "points": 2,
            "items": [
                { "id": "s1", "text": "Preparation (Recruiting)", "correctPosition": 1 },
                { "id": "s2", "text": "Physical Arrangement (Seating)", "correctPosition": 2 },
                { "id": "s3", "text": "Preparing Discussion Guide", "correctPosition": 3 },
                { "id": "s4", "text": "The Discussion / Facilitation", "correctPosition": 4 }
            ],
            "explanation": "Prepare -> Arrange -> Guide -> Discuss."
        },
        {
            "id": "q8-pretest-group",
            "type": "true-false",
            "question": "You should pre-test the questionnaire on the exact same group of people you intend to survey later.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "Pre-test on a *similar* group, but NOT the study group itself, to avoid influencing the final results."
        },
        {
            "id": "q9-pretest-purpose",
            "type": "multiple-select",
            "question": "What is the purpose of pre-testing a questionnaire?",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "To check if questions are misunderstood", "isCorrect": true },
                { "id": "opt2", "text": "To see if the questionnaire is too long", "isCorrect": true },
                { "id": "opt3", "text": "To ensure there is enough space for answers", "isCorrect": true },
                { "id": "opt4", "text": "To collect the final data for the report", "isCorrect": false }
            ],
            "explanation": "Pre-testing checks for clarity, length, and layout issues. It is NOT for final data collection."
        },
        {
            "id": "q10-fgd-size",
            "type": "short-answer",
            "question": "What type of seating arrangement is best for a Focus Group Discussion?",
            "points": 1,
            "keywords": ["circular", "circle", "round"],
            "modelAnswer": "Circular",
            "explanation": "Circular seating allows everyone to see each other and promotes sharing."
        }
    ]
});