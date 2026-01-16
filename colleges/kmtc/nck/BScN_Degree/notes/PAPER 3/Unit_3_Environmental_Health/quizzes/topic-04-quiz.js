registerQuiz("topic-04-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-04-quiz",
    "metadata": {
        "title": "Housing",
        "description": "Assess your knowledge on housing types, criteria, and health implications.",
        "difficulty": "beginner",
        "estimatedTime": 5,
        "passingScore": 70
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "always",
        "allowRetry": true
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "What is the primary health risk associated with unscreened windows in a house?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Respiratory infections", "isCorrect": false },
                { "id": "opt2", "text": "Malaria", "isCorrect": true },
                { "id": "opt3", "text": "Bed bugs", "isCorrect": false },
                { "id": "opt4", "text": "Accidents", "isCorrect": false }
            ],
            "explanation": "Unscreened windows allow the entry of mosquitoes, which are vectors for malaria."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "Which of the following describes a 'Permanent House'?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Mud walls and grass thatch roof", "isCorrect": false },
                { "id": "opt2", "text": "Iron sheet walls and cemented floor", "isCorrect": false },
                { "id": "opt3", "text": "Stone foundation, cemented floor, and plastered walls", "isCorrect": true },
                { "id": "opt4", "text": "Timber walls and earthen floor", "isCorrect": false }
            ],
            "explanation": "Permanent houses are characterized by durable materials like stone foundations, cemented floors, and plastered walls."
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "Why is it recommended to build a house on high ground?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "To improve ventilation", "isCorrect": false },
                { "id": "opt2", "text": "To prevent water stagnation and mosquito breeding", "isCorrect": true },
                { "id": "opt3", "text": "To be closer to the sun", "isCorrect": false },
                { "id": "opt4", "text": "To avoid noise pollution", "isCorrect": false }
            ],
            "explanation": "High ground facilitates drainage, preventing stagnant water that serves as breeding sites for mosquitoes."
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "Ensuring privacy for adults and a suitable setting for children falls under which criteria for adequate housing?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Biological Criteria", "isCorrect": false },
                { "id": "opt2", "text": "Physical Criteria", "isCorrect": false },
                { "id": "opt3", "text": "Social Criteria", "isCorrect": true },
                { "id": "opt4", "text": "Economic Criteria", "isCorrect": false }
            ],
            "explanation": "Social criteria address the psychological and social needs of the family, including privacy and cultural functioning."
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "When evaluating community housing improvement activities, what is a suggested appropriate time frame?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "1 week", "isCorrect": false },
                { "id": "opt2", "text": "1 month", "isCorrect": false },
                { "id": "opt3", "text": "6 months", "isCorrect": true },
                { "id": "opt4", "text": "1 year", "isCorrect": false }
            ],
            "explanation": "A period of about six months allows enough time for implementation and for changes to be measurable."
        }
    ]
});