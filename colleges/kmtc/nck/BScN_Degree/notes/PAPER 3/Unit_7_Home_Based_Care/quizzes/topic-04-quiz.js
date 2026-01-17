registerQuiz("topic-04-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-04-quiz",
    "title": "Components of Home-Based Care",
    "description": "Assess your understanding of HBC needs, nursing skills, and nutrition.",
    "metadata": {
        "title": "Topic 4: Components of HBC",
        "description": "Needs, skills, and nutrition in HBC",
        "topicId": "topic-04",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2026-01-17T12:00:00Z",
        "updatedAt": "2026-01-17T12:00:00Z",
        "tags": ["nursing-skills", "nutrition", "needs"]
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
            "id": "t4-q1",
            "type": "matching",
            "question": "Match the patient need to its category:",
            "points": 4,
            "pairs": [
                { "id": "p1", "left": "Drugs and clinical care", "right": "Physical Needs" },
                { "id": "p2", "left": "Acceptance and forgiveness", "right": "Spiritual/Pastoral Needs" },
                { "id": "p3", "left": "Respect and dignity", "right": "Social Needs" },
                { "id": "p4", "left": "Reassurance and coping help", "right": "Psychological Needs" }
            ],
            "explanation": "Physical relates to body/survival; Spiritual to faith/inner peace; Social to interaction/status; Psychological to emotions/mind."
        },
        {
            "id": "t4-q2",
            "type": "multiple-select",
            "question": "Which of the following are effective measures to prevent pressure sores? (Select all that apply)",
            "points": 2,
            "options": [
                { "id": "o1", "text": "Turning the patient every 2 to 4 hours", "isCorrect": true },
                { "id": "o2", "text": "Keeping bed sheets dry and straight", "isCorrect": true },
                { "id": "o3", "text": "Keeping the patient in one position to rest", "isCorrect": false },
                { "id": "o4", "text": "Massaging pressure areas", "isCorrect": true }
            ],
            "explanation": "Turning, dry sheets, and massage prevent sores. Keeping a patient in one position causes them."
        },
        {
            "id": "t4-q3",
            "type": "matching",
            "question": "Match the food group to its function:",
            "points": 3,
            "pairs": [
                { "id": "f1", "left": "Body Building (Proteins)", "right": "Repair worn out cells and build tissues" },
                { "id": "f2", "left": "Energy Giving (Carbs/Fats)", "right": "Provide fuel for the body" },
                { "id": "f3", "left": "Protective (Vitamins)", "right": "Strengthen the immune system" }
            ],
            "explanation": "Proteins build; Carbs provide energy; Vitamins protect."
        },
        {
            "id": "t4-q4",
            "type": "multiple-choice",
            "question": "Which of the following is a 'High Risk' nutritional sign requiring immediate action?",
            "points": 1,
            "options": [
                { "id": "h1", "text": "Weight gain of 1kg in a month", "isCorrect": false },
                { "id": "h2", "text": "Eating three meals a day", "isCorrect": false },
                { "id": "h3", "text": "Pain when swallowing (Odynophagia)", "isCorrect": true },
                { "id": "h4", "text": "Drinking 2 liters of water daily", "isCorrect": false }
            ],
            "explanation": "Pain when swallowing is a high-risk sign as it prevents food intake. Others are normal or healthy."
        },
        {
            "id": "t4-q5",
            "type": "ordering",
            "question": "Order the general steps for a nursing procedure (e.g., bed bath):",
            "points": 3,
            "items": [
                { "id": "s1", "text": "Prepare resources and patient", "correctPosition": 1 },
                { "id": "s2", "text": "Explain procedure to patient", "correctPosition": 2 },
                { "id": "s3", "text": "Perform the procedure", "correctPosition": 3 },
                { "id": "s4", "text": "Clean materials and dispose of waste", "correctPosition": 4 },
                { "id": "s5", "text": "Wash and dry hands", "correctPosition": 5 }
            ],
            "explanation": "Preparation -> Explanation -> Execution -> Cleanup -> Hygiene."
        }
    ]
});