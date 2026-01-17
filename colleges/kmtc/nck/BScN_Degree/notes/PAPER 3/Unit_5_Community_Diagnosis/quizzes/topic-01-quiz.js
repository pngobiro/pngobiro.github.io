registerQuiz("topic-01-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-01-quiz",
    "metadata": {
        "title": "Concept and Purpose of Community Diagnosis",
        "description": "Assess your understanding of community diagnosis definitions, the difference between patient and community diagnosis, and key health terminologies.",
        "topicId": "topic-01",
        "difficulty": "beginner",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2026-01-17T10:00:00Z",
        "tags": ["definitions", "phc", "indicators"]
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
            "id": "q1-def",
            "type": "multiple-choice",
            "question": "What is the core definition of Community Diagnosis?",
            "points": 1,
            "options": [
                {
                    "id": "opt1",
                    "text": "A process where health workers and community members identify priority problems and plan actions together.",
                    "isCorrect": true
                },
                {
                    "id": "opt2",
                    "text": "A clinical procedure to diagnose diseases in individual patients within a village.",
                    "isCorrect": false
                },
                {
                    "id": "opt3",
                    "text": "A statistical census carried out solely by the government to count the population.",
                    "isCorrect": false
                },
                {
                    "id": "opt4",
                    "text": "The distribution of medicine to sick members of a community.",
                    "isCorrect": false
                }
            ],
            "explanation": "Community diagnosis is a collaborative process involving health workers and community members to identify problems, prioritize them, and plan actions."
        },
        {
            "id": "q2-4as",
            "type": "multiple-select",
            "question": "Select the '4 As' of Primary Health Care (PHC) mentioned in the text.",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Acceptability", "isCorrect": true },
                { "id": "opt2", "text": "Accessibility", "isCorrect": true },
                { "id": "opt3", "text": "Affordability", "isCorrect": true },
                { "id": "opt4", "text": "Availability", "isCorrect": true },
                { "id": "opt5", "text": "Accountability", "isCorrect": false },
                { "id": "opt6", "text": "Accuracy", "isCorrect": false }
            ],
            "explanation": "The 4 As are Acceptability, Accessibility, Affordability, and Availability."
        },
        {
            "id": "q3-tools-match",
            "type": "matching",
            "question": "Match the tool to the type of diagnosis it belongs to.",
            "points": 2,
            "pairs": [
                { "id": "p1", "left": "Stethoscope", "right": "Patient Diagnosis" },
                { "id": "p2", "left": "Maps", "right": "Community Diagnosis" },
                { "id": "p3", "left": "Clinical History", "right": "Patient Diagnosis" },
                { "id": "p4", "left": "Survey Questionnaire", "right": "Community Diagnosis" }
            ],
            "explanation": "Patient diagnosis uses clinical tools (stethoscope, thermometer), while community diagnosis uses survey tools (maps, questionnaires)."
        },
        {
            "id": "q4-imr",
            "type": "fill-blank",
            "question": "Infant Mortality Rate is the probability of dying between birth and exactly __age__ year of age expressed per 1,000 live births.",
            "points": 1,
            "blanks": [
                {
                    "id": "age",
                    "acceptedAnswers": ["one", "1"],
                    "caseSensitive": false
                }
            ],
            "explanation": "IMR measures deaths of infants under one year of age."
        },
        {
            "id": "q5-rni",
            "type": "true-false",
            "question": "A negative Rate of Natural Increase (RNI) means the population is increasing.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "A negative RNI means the death rate is greater than the birth rate, so the population is decreasing."
        },
        {
            "id": "q6-variable",
            "type": "short-answer",
            "question": "What term describes a characteristic within a study sample (like weight or age) whose value changes among the study subjects?",
            "points": 1,
            "keywords": ["variable"],
            "modelAnswer": "Variable",
            "explanation": "A variable is an observation or characteristic that changes (varies) among the subjects."
        },
        {
            "id": "q7-steps-patient",
            "type": "ordering",
            "question": "Order the basic steps of a Patient Diagnosis.",
            "points": 2,
            "items": [
                { "id": "s1", "text": "History Taking / Basic Info", "correctPosition": 1 },
                { "id": "s2", "text": "Physical Examination", "correctPosition": 2 },
                { "id": "s3", "text": "Diagnosis / Planning", "correctPosition": 3 },
                { "id": "s4", "text": "Treatment / Implementation", "correctPosition": 4 },
                { "id": "s5", "text": "Follow up / Evaluation", "correctPosition": 5 }
            ],
            "explanation": "The logical flow is History -> Exam -> Diagnosis -> Treatment -> Follow up."
        },
        {
            "id": "q8-purpose",
            "type": "multiple-select",
            "question": "Which of the following information is collected during a community diagnosis?",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Demographic data and vital statistics", "isCorrect": true },
                { "id": "opt2", "text": "Patterns of leadership and communication", "isCorrect": true },
                { "id": "opt3", "text": "State of the environment (water, housing)", "isCorrect": true },
                { "id": "opt4", "text": "Detailed surgical procedures for specific individuals", "isCorrect": false }
            ],
            "explanation": "Community diagnosis looks at population-level data, environment, and social structures, not individual surgical procedures."
        },
        {
            "id": "q9-incidence",
            "type": "multiple-choice",
            "question": "Which term refers to the number of *new* cases of a disease occurring over a specified time?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Incidence", "isCorrect": true },
                { "id": "opt2", "text": "Prevalence", "isCorrect": false },
                { "id": "opt3", "text": "Morbidity", "isCorrect": false },
                { "id": "opt4", "text": "Mortality", "isCorrect": false }
            ],
            "explanation": "Incidence measures new cases; Prevalence measures total (new + old) cases."
        },
        {
            "id": "q10-priority",
            "type": "true-false",
            "question": "When planning community health programmes, you should try to solve ALL health problems found in the survey at once.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "Resources are limited. You must identify PRIORITY health problems that the community can practically address."
        }
    ]
});