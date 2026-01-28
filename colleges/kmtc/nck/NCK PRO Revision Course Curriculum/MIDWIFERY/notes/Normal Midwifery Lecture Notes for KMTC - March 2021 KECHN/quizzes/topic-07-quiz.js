registerQuiz("topic-07-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-07-quiz",
    "metadata": {
        "title": "Normal Puerperium Quiz",
        "description": "Test your knowledge on puerperal physiology, lochia, and post-natal care schedules.",
        "topicId": "topic-07",
        "difficulty": "intermediate",
        "estimatedTime": 10,
        "passingScore": 80,
        "createdAt": "2025-01-28T12:00:00Z",
        "updatedAt": "2025-01-28T12:00:00Z",
        "tags": ["puerperium", "lochia", "TPNC"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "What is the process by which the uterus returns to its pre-pregnant size and state called?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Sub-involution", "isCorrect": false },
                { "id": "opt2", "text": "Involution", "isCorrect": true },
                { "id": "opt3", "text": "Retraction", "isCorrect": false },
                { "id": "opt4", "text": "Lactation", "isCorrect": false }
            ],
            "explanation": "Involution is the return of genital organs to pre-gravid state. Sub-involution is the failure/delay of this process."
        },
        {
            "id": "q2",
            "type": "ordering",
            "question": "Order the types of Lochia from earliest to latest:",
            "points": 2,
            "items": [
                { "id": "i1", "text": "Lochia Rubra (Red)", "correctPosition": 1 },
                { "id": "i2", "text": "Lochia Serosa (Pink/Brown)", "correctPosition": 2 },
                { "id": "i3", "text": "Lochia Alba (White/Yellow)", "correctPosition": 3 }
            ],
            "explanation": "Sequence: Rubra (1-4 days), Serosa (5-9 days), Alba (10+ days)."
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "When does the First Targeted Post-Natal Care (TPNC) visit occur?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Within 48 hours", "isCorrect": true },
                { "id": "opt2", "text": "At 1-2 weeks", "isCorrect": false },
                { "id": "opt3", "text": "At 6 weeks", "isCorrect": false },
                { "id": "opt4", "text": "At 6 months", "isCorrect": false }
            ],
            "explanation": "The 1st TPNC schedule is within 48 hours. 2nd is 1-2 weeks, 3rd is 4-6 weeks, 4th is 4-6 months."
        },
        {
            "id": "q4",
            "type": "multiple-select",
            "question": "Which of the following are Danger Signs during the puerperium?",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Foul smelling vaginal discharge", "isCorrect": true },
                { "id": "opt2", "text": "Calf tenderness", "isCorrect": true },
                { "id": "opt3", "text": "Scanty lochia on day 2", "isCorrect": false },
                { "id": "opt4", "text": "Fever (38°C or higher)", "isCorrect": true }
            ],
            "explanation": "Foul discharge (sepsis), calf tenderness (DVT), and fever are danger signs. Scanty lochia is usually normal or warrants monitoring, but profuse bleeding is the major danger sign."
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "Autolysis is the process by which muscle fibers digest themselves to reduce uterine size.",
            "points": 1,
            "correctAnswer": true,
            "explanation": "Autolysis involves proteolytic enzymes digesting muscle fibers to reduce the uterus mass from ~900g to ~60g."
        }
    ]
});
