registerQuiz("topic-04-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-04-quiz",
    "metadata": {
        "title": "Health Organisation Quiz",
        "description": "Test knowledge of MoH structure, DHMT, and health sector reforms.",
        "topicId": "topic-04-organisation",
        "difficulty": "intermediate",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2025-01-13T12:00:00Z",
        "tags": ["organisation", "management", "reforms"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "ordering",
            "question": "Order the Ministry of Health administrative levels from the highest authority (Top) to the lowest (Bottom):",
            "points": 15,
            "items": [
                { "id": "i1", "text": "National (Central) Level", "correctPosition": 1 },
                { "id": "i2", "text": "Provincial Level", "correctPosition": 2 },
                { "id": "i3", "text": "District Level", "correctPosition": 3 },
                { "id": "i4", "text": "Community (Peripheral) Level", "correctPosition": 4 }
            ],
            "explanation": "The hierarchy flows from National -> Provincial -> District -> Community."
        },
        {
            "id": "q2",
            "type": "multiple-select",
            "question": "Which of the following are classified as 'High Priority Health Packages' in the National Priority Health Package? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Malaria prevention and treatment", "isCorrect": true },
                { "id": "b", "text": "Reproductive health", "isCorrect": true },
                { "id": "c", "text": "Eye infections", "isCorrect": false },
                { "id": "d", "text": "HIV/AIDS/TB prevention", "isCorrect": true },
                { "id": "e", "text": "Skin diseases", "isCorrect": false }
            ],
            "explanation": "Malaria, Reproductive health, and HIV/AIDS/TB are High Priority. Eye infections and Skin diseases are Low Priority."
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "The __b1__ is the basic organisational unit of government health services and the focus for rural development.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["district", "District"], "caseSensitive": false }
            ],
            "explanation": "The District is the key level in the administrative setup due to decentralization."
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "The District Medical Officer of Health (DMOH) usually also serves as the medical superintendent of the district hospital.",
            "points": 10,
            "correctAnswer": true,
            "explanation": "In most cases, the DMOH is also the medical superintendent of the district or sub-district hospital."
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "Which of these is a Non-Governmental Organisation (NGO) providing health care?",
            "points": 10,
            "options": [
                { "id": "a", "text": "UNICEF", "isCorrect": false },
                { "id": "b", "text": "AMREF", "isCorrect": true },
                { "id": "c", "text": "The Nairobi Hospital", "isCorrect": false },
                { "id": "d", "text": "Roman Catholic Church", "isCorrect": false }
            ],
            "explanation": "AMREF is an NGO. UNICEF is a UN body. Nairobi Hospital is a Private Institution. Roman Catholic Church is a Religious Group."
        }
    ]
});