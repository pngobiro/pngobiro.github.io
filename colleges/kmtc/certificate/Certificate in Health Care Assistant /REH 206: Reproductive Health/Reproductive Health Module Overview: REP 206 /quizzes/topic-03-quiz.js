registerQuiz("topic-03-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-03-quiz",
    "metadata": {
        "title": "Maternal & Infant Health Quiz",
        "description": "Test knowledge on ANC, maternal mortality causes, and immunization.",
        "topicId": "topic-03-maternal-infant-health",
        "difficulty": "intermediate",
        "estimatedTime": 10,
        "passingScore": 80,
        "createdAt": "2026-01-10T10:00:00Z"
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-select",
            "question": "Select the DIRECT causes of maternal mortality: (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Hemorrhage", "isCorrect": true },
                { "id": "b", "text": "Malaria", "isCorrect": false },
                { "id": "c", "text": "Sepsis (Infection)", "isCorrect": true },
                { "id": "d", "text": "Hypertension (Eclampsia)", "isCorrect": true },
                { "id": "e", "text": "Poverty", "isCorrect": false }
            ],
            "partialCredit": true,
            "explanation": "Hemorrhage, Sepsis, and Hypertension are direct causes. Malaria and Poverty are indirect causes."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "How many doses of Tetanus Toxoid (TT) provide protection for life?",
            "points": 10,
            "options": [
                { "id": "a", "text": "2 doses", "isCorrect": false },
                { "id": "b", "text": "3 doses", "isCorrect": false },
                { "id": "c", "text": "4 doses", "isCorrect": false },
                { "id": "d", "text": "5 doses", "isCorrect": true }
            ],
            "explanation": "5 doses of Tetanus Toxoid are required to achieve lifelong protection."
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "A weight gain of less than __1__ kg per month during the second/third trimester is a danger signal.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["1", "one"], "caseSensitive": false }
            ],
            "explanation": "Normal weight gain is critical. Less than 1kg/month indicates potential malnutrition or fetal growth restriction."
        },
        {
            "id": "q4",
            "type": "matching",
            "question": "Match the EPI strategy to its description:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Fixed Facilities", "right": "Permanent health institutions offering daily service" },
                { "id": "p2", "left": "Outreach Services", "right": "Mobile teams visiting remote areas" },
                { "id": "p3", "left": "Intensive Campaigns", "right": "Mass immunization to stop epidemics" }
            ],
            "explanation": "Fixed facilities are static; Outreach goes to the community; Campaigns are mass events (e.g., Polio days)."
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "The VDRL test is performed during the first ANC visit to screen for HIV.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "VDRL screens for Syphilis. A separate test is used for HIV."
        }
    ]
});