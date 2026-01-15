registerQuiz("topic-01-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-01-quiz",
    "metadata": {
        "title": "Topic 01: Concept and Purpose",
        "description": "Assess your understanding of the definitions, purpose, and fundamental concepts of community diagnosis.",
        "topicId": "topic-01",
        "difficulty": "beginner",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2025-12-26T12:00:00Z",
        "tags": ["concept", "phc", "diagnosis", "tools"]
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
            "question": "What is the primary definition of Community Diagnosis?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Treating individual patients in a community health center", "isCorrect": false },
                { "id": "b", "text": "A process where health workers and community members identify and prioritize health problems to plan action", "isCorrect": true },
                { "id": "c", "text": "A government census to count the population", "isCorrect": false },
                { "id": "d", "text": "Diagnosing specific diseases like malaria in a village", "isCorrect": false }
            ],
            "explanation": "Community diagnosis is a process involving both health workers and community members to identify problems, prioritize them, and plan/implement actions."
        },
        {
            "id": "q2",
            "type": "multiple-select",
            "question": "Select the '4 As' of Primary Health Care (PHC). (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Acceptability", "isCorrect": true },
                { "id": "b", "text": "Accessibility", "isCorrect": true },
                { "id": "c", "text": "Affordability", "isCorrect": true },
                { "id": "d", "text": "Availability", "isCorrect": true },
                { "id": "e", "text": "Accuracy", "isCorrect": false },
                { "id": "f", "text": "Authorization", "isCorrect": false }
            ],
            "explanation": "The 4 As are Acceptability, Accessibility, Affordability, and Availability (using appropriate and local technologies)."
        },
        {
            "id": "q3",
            "type": "matching",
            "question": "Match the tool to the type of diagnosis.",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Patient Diagnosis", "right": "Stethoscope" },
                { "id": "p2", "left": "Community Diagnosis", "right": "Questionnaires" },
                { "id": "p3", "left": "Patient Diagnosis", "right": "Thermometer" },
                { "id": "p4", "left": "Community Diagnosis", "right": "Maps" }
            ],
            "explanation": "Patient diagnosis uses clinical tools (stethoscope, thermometer), while community diagnosis uses survey tools (questionnaires, maps)."
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "Community diagnosis involves total community involvement because the community knows its problems better than the health worker.",
            "points": 5,
            "correctAnswer": true,
            "explanation": "True. Active participation empowers the community and ensures plans are relevant and supported."
        },
        {
            "id": "q5",
            "type": "fill-blank",
            "question": "While patient diagnosis leads to individual treatment, community diagnosis leads to a __b1__.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["plan of action", "community health programme", "action plan", "program"], "caseSensitive": false }
            ],
            "explanation": "The outcome of a community diagnosis is a plan of action or community health programme to address identified problems."
        },
        {
            "id": "q6",
            "type": "ordering",
            "question": "Arrange the steps of Patient Diagnosis in order.",
            "points": 10,
            "items": [
                { "id": "i1", "text": "History Taking", "correctPosition": 1 },
                { "id": "i2", "text": "Physical Examination/Diagnosis", "correctPosition": 2 },
                { "id": "i3", "text": "Treatment", "correctPosition": 3 },
                { "id": "i4", "text": "Follow up", "correctPosition": 4 }
            ],
            "explanation": "The process is: History Taking -> Diagnosis -> Treatment -> Follow up."
        },
        {
            "id": "q7",
            "type": "multiple-choice",
            "question": "Why is it important to select only priority health problems in community diagnosis?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Because there are limited resources", "isCorrect": true },
                { "id": "b", "text": "Because the community gets bored easily", "isCorrect": false },
                { "id": "c", "text": "Because health workers are lazy", "isCorrect": false },
                { "id": "d", "text": "Because all problems solve themselves eventually", "isCorrect": false }
            ],
            "explanation": "Resources are limited, so efforts must be focused on priority problems that can be practically addressed."
        },
        {
            "id": "q8",
            "type": "multiple-select",
            "question": "Which of the following information is collected during a community diagnosis? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Demographic data", "isCorrect": true },
                { "id": "b", "text": "Utilization of health services", "isCorrect": true },
                { "id": "c", "text": "Patterns of leadership", "isCorrect": true },
                { "id": "d", "text": "State of the environment", "isCorrect": true }
            ],
            "explanation": "All listed items are key components of the information gathered during a community diagnosis."
        },
        {
            "id": "q9",
            "type": "true-false",
            "question": "Tools used in community diagnosis should be offensive to test the community's resilience.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "False. Tools must NOT be offensive or cause any physical, emotional, spiritual, or cultural harm."
        },
        {
            "id": "q10",
            "type": "multiple-choice",
            "question": "Who defines the '4 As' concept used in community diagnosis?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Secondary Health Care", "isCorrect": false },
                { "id": "b", "text": "Primary Health Care (PHC)", "isCorrect": true },
                { "id": "c", "text": "Tertiary Health Care", "isCorrect": false },
                { "id": "d", "text": "Emergency Response", "isCorrect": false }
            ],
            "explanation": "The 4 As (Acceptability, Accessibility, Affordability, Availability) are concepts of Primary Health Care (PHC)."
        }
    ]
});