registerQuiz("topic-05-community-nutrition-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-05-community-nutrition-quiz",
    "metadata": {
        "title": "Community Nutrition",
        "description": "Assess your knowledge of nutritional programs and disease prevention.",
        "topicId": "topic-05-community-nutrition",
        "difficulty": "beginner",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2026-01-12T00:00:00Z"
    },
    "settings": {
        "shuffleQuestions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which of the following is a major health condition linked to poor dietary habits in the US?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Malaria", "isCorrect": false },
                { "id": "b", "text": "Obesity", "isCorrect": true },
                { "id": "c", "text": "Tuberculosis", "isCorrect": false },
                { "id": "d", "text": "Cholera", "isCorrect": false }
            ],
            "explanation": "Obesity, along with diabetes and heart disease, is strongly linked to diet."
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "The __1__ campaign urges the public to eat at least five fruits and vegetables every day.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["5-A-Day", "5 A Day", "five a day"], "caseSensitive": false }
            ],
            "explanation": "The 5-A-Day program promotes fruit and vegetable consumption."
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "Who are common target groups for community nutrition programs? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Pregnant women", "isCorrect": true },
                { "id": "b", "text": "School children", "isCorrect": true },
                { "id": "c", "text": "Older adults", "isCorrect": true },
                { "id": "d", "text": "Diabetic individuals", "isCorrect": true }
            ],
            "explanation": "Community nutrition targets all age groups and those with specific health needs."
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "Community nutrition programs are only for people with low incomes.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "While some programs address food security, community nutrition promotes healthy eating for ALL individuals to prevent disease."
        },
        {
            "id": "q5",
            "type": "short-answer",
            "question": "List two reasons why community nutrition programs might fail.",
            "points": 10,
            "keywords": ["funding", "participation", "cultural", "access", "desire"],
            "minKeywords": 1,
            "modelAnswer": "Inadequate funding, poor participation, cultural barriers, or lack of desire to change.",
            "maxLength": 200
        }
    ]
});