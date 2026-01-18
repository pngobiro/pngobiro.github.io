registerQuiz("topic-04-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-04-quiz",
    "metadata": {
        "title": "Curriculum Design Quiz",
        "description": "Test your knowledge on curriculum components, development factors, and approaches.",
        "topicId": "topic-04",
        "difficulty": "advanced",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2026-01-18T20:00:00Z",
        "updatedAt": "2026-01-18T20:00:00Z",
        "tags": ["curriculum", "development", "planning"]
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
            "type": "fill-blank",
            "question": "A __b1__ is a description of all that takes place in an educational institution from the first to the last day of training.",
            "points": 1,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["curriculum"], "caseSensitive": false }
            ]
        },
        {
            "id": "t4-q2",
            "type": "multiple-select",
            "question": "Which of the following are essential components of a curriculum?",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Statement of Justification", "isCorrect": true },
                { "id": "opt2", "text": "Educational Goals and Objectives", "isCorrect": true },
                { "id": "opt3", "text": "Student Medical Records", "isCorrect": false },
                { "id": "opt4", "text": "Assessment Methods", "isCorrect": true }
            ],
            "explanation": "Components include justification, resources, entry requirements, objectives, content, methods, assessment, etc. Student records are administrative."
        },
        {
            "id": "t4-q3",
            "type": "multiple-choice",
            "question": "Which curriculum approach focuses on the functions and tasks a health worker must perform in a specified setting?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Subject-centred Approach", "isCorrect": false },
                { "id": "opt2", "text": "Competency-based Approach", "isCorrect": true },
                { "id": "opt3", "text": "Integrated Approach", "isCorrect": false },
                { "id": "opt4", "text": "Traditional Approach", "isCorrect": false }
            ],
            "explanation": "The Competency-based (or Task-based) approach organizes the curriculum around professional competencies and functions."
        },
        {
            "id": "t4-q4",
            "type": "matching",
            "question": "Match the factor influencing curriculum with its description:",
            "points": 3,
            "pairs": [
                { "id": "p1", "left": "Social Factors", "right": "Reflecting current societal needs (e.g., HIV/AIDS)" },
                { "id": "p2", "left": "Economic Factors", "right": "Cost of implementation determines training level" },
                { "id": "p3", "left": "Political Factors", "right": "Influence on numbers trained (e.g., quota systems)" }
            ],
            "explanation": "Social factors relate to community needs; Economic to resources/cost; Political to government policy and numbers."
        },
        {
            "id": "t4-q5",
            "type": "ordering",
            "question": "Order the first 4 steps of Competency-Based Curriculum Development:",
            "points": 3,
            "items": [
                { "id": "s1", "text": "Identification of health problems or needs", "correctPosition": 1 },
                { "id": "s2", "text": "Identification of professional roles and functions", "correctPosition": 2 },
                { "id": "s3", "text": "Performing task analysis", "correctPosition": 3 },
                { "id": "s4", "text": "Development of educational goals and objectives", "correctPosition": 4 }
            ],
            "explanation": "Development starts with needs, then roles, then task analysis, then objectives."
        },
        {
            "id": "t4-q6",
            "type": "true-false",
            "question": "Internal participants in curriculum development include the community and NGOs.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "Community and NGOs are EXTERNAL participants. Internal participants are teachers, students, and administrators."
        },
        {
            "id": "t4-q7",
            "type": "short-answer",
            "question": "What is 'Task Analysis'?",
            "points": 2,
            "keywords": ["knowledge", "attitude", "skills", "perform"],
            "minKeywords": 2,
            "modelAnswer": "Determining what knowledge, attitude and skills are needed to perform tasks",
            "explanation": "Task analysis is determining what knowledge, attitudes, and skills graduates need to perform specific tasks."
        },
        {
            "id": "t4-q8",
            "type": "multiple-choice",
            "question": "Which curriculum approach often falls short of adequate vertical and horizontal integration?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Subject-centred Approach", "isCorrect": false },
                { "id": "opt2", "text": "Integrated Approach", "isCorrect": true },
                { "id": "opt3", "text": "Competency-based Approach", "isCorrect": false },
                { "id": "opt4", "text": "Problem-based Approach", "isCorrect": false }
            ],
            "explanation": "While aiming for integration, the Integrated Approach can sometimes struggle to achieve adequate vertical and horizontal integration."
        },
        {
            "id": "t4-q9",
            "type": "multiple-choice",
            "question": "A disadvantage of the Competency-based approach is:",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "It focuses on real-world tasks", "isCorrect": false },
                { "id": "opt2", "text": "It handicaps workers when exposed to new situations requiring initiative", "isCorrect": true },
                { "id": "opt3", "text": "It is too short", "isCorrect": false },
                { "id": "opt4", "text": "It ignores the cost of training", "isCorrect": false }
            ],
            "explanation": "Because it focuses on specific tasks (operative competencies), it may limit ability to adapt to new situations requiring independent thinking."
        },
        {
            "id": "t4-q10",
            "type": "multiple-choice",
            "question": "Which section of the curriculum outlines the physical, administrative, and financial requirements?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Statement of Justification", "isCorrect": false },
                { "id": "opt2", "text": "Resources", "isCorrect": true },
                { "id": "opt3", "text": "Programme", "isCorrect": false },
                { "id": "opt4", "text": "Content", "isCorrect": false }
            ],
            "explanation": "The 'Resources' component outlines physical, administrative, and financial requirements."
        }
    ]
});