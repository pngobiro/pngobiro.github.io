registerQuiz("topic-03-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-03-quiz",
    "metadata": {
        "title": "Topic 3: Teaching Methodologies",
        "description": "Test your knowledge on various teaching methods, their advantages, disadvantages, and the SPICES model.",
        "topicId": "topic-03",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 75,
        "createdAt": "2026-01-17T00:00:00Z",
        "updatedAt": "2026-01-17T00:00:00Z",
        "tags": ["methods", "lecture", "clinical", "spices"]
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which teaching method is described as 'economical in time' but 'impersonal'?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Lecture Method", "isCorrect": true },
                { "id": "opt2", "text": "Field Visit", "isCorrect": false },
                { "id": "opt3", "text": "Small Group Discussion", "isCorrect": false },
                { "id": "opt4", "text": "Project", "isCorrect": false }
            ],
            "explanation": "Lectures are efficient for large groups but often lack personal interaction and student involvement."
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "The innovative curriculum model acronym SPICES stands for: Student-centred, Problem-based, Integrated, __b1__-oriented, Electives, and __b2__.",
            "points": 2,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["community"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["systematic"], "caseSensitive": false }
            ],
            "explanation": "SPICES = Student-centred, Problem-based, Integrated, Community-oriented, Electives, Systematic."
        },
        {
            "id": "q3",
            "type": "matching",
            "question": "Match the teaching method with its primary disadvantage.",
            "points": 3,
            "pairs": [
                { "id": "p1", "left": "Field Visit", "right": "Expensive and time-consuming" },
                { "id": "p2", "left": "Lecture", "right": "Passive student involvement" },
                { "id": "p3", "left": "Demonstration", "right": "One-way process if not practiced" }
            ],
            "explanation": "Field visits use many resources; Lectures can be boring/passive; Demonstrations need student return-practice to be effective."
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "Clinical teaching takes place in a classroom setting using only textbooks.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "Clinical teaching occurs in the practical setting (wards, clinics) similar to the future working environment."
        }
    ]
});