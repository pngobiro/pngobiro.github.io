registerQuiz("topic-02-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-02-quiz",
    "metadata": {
        "title": "School Health Programs Quiz",
        "description": "Assess understanding of school health policies, WASH, and nutrition implementation in schools.",
        "topicId": "topic-02",
        "difficulty": "intermediate",
        "estimatedTime": 20,
        "passingScore": 75,
        "createdAt": "2022-05-20T00:00:00Z",
        "tags": ["school-health", "policy", "wash", "nutrition"]
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
            "type": "multiple-choice",
            "question": "What is a 'Health Promoting School'?",
            "points": 10,
            "options": [
                { "id": "a", "text": "A school that only serves healthy food.", "isCorrect": false },
                { "id": "b", "text": "A school that constantly strengthens its capacity to be a healthy setting for living, learning, and working.", "isCorrect": true },
                { "id": "c", "text": "A school built next to a hospital.", "isCorrect": false },
                { "id": "d", "text": "A school that has a full-time doctor.", "isCorrect": false }
            ],
            "explanation": "A Health Promoting School constantly strengthens its capacity to be a healthy setting for living, learning, and working."
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "The National School Health Policy was launched in the year __b1__.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["2009"], "caseSensitive": false }
            ],
            "explanation": "The policy was launched in 2009 to address thematic areas like WASH, nutrition, and disease prevention in schools."
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "Which of the following are components of the Comprehensive School Health Programme (CSHP)? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Values and life skills", "isCorrect": true },
                { "id": "b", "text": "Disease prevention and control", "isCorrect": true },
                { "id": "c", "text": "Teacher salary negotiation", "isCorrect": false },
                { "id": "d", "text": "Water, Sanitation and Hygiene (WASH)", "isCorrect": true },
                { "id": "e", "text": "Nutrition", "isCorrect": true }
            ],
            "explanation": "CSHP includes Values/Life skills, WASH, Nutrition, Disease prevention, Special needs, Infrastructure, etc."
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "Improved health in learners has no impact on academic performance or school enrollment.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "False. Improved health enhances cognitive development, concentration, retention, and academic performance."
        },
        {
            "id": "q5",
            "type": "matching",
            "question": "Match the term with its correct definition:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Morbidity", "right": "State of being diseased/unhealthy" },
                { "id": "p2", "left": "Mortality", "right": "Number of deaths in a population" },
                { "id": "p3", "left": "Vector", "right": "Animal/insect transmitting diseases" },
                { "id": "p4", "left": "Vermin", "right": "Pests like rats or cockroaches" }
            ]
        },
        {
            "id": "q6",
            "type": "ordering",
            "question": "Arrange the levels of the School Health Governance Structure from highest to lowest:",
            "points": 10,
            "items": [
                { "id": "i1", "text": "National School Health Steering Committee", "correctPosition": 1 },
                { "id": "i2", "text": "County School Health Management Committee", "correctPosition": 2 },
                { "id": "i3", "text": "Sub-County School Health Management Committee", "correctPosition": 3 },
                { "id": "i4", "text": "School Health Committee", "correctPosition": 4 },
                { "id": "i5", "text": "School Health Club", "correctPosition": 5 }
            ]
        }
    ]
});