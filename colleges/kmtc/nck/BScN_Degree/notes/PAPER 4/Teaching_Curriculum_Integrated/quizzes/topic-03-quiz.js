registerQuiz("topic-03-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-03-quiz",
    "metadata": {
        "title": "Teaching Methodologies Quiz",
        "description": "Evaluate your knowledge of various teaching methods, including lectures, demonstrations, practicals, and clinical teaching.",
        "topicId": "topic-03",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2026-01-18T20:00:00Z",
        "updatedAt": "2026-01-18T20:00:00Z",
        "tags": ["methods", "clinical", "demonstration"]
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
            "id": "t3-q1",
            "type": "multiple-choice",
            "question": "Which teaching method is generally considered the best for teaching psychomotor skills?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Lecture", "isCorrect": false },
                { "id": "opt2", "text": "Demonstration", "isCorrect": true },
                { "id": "opt3", "text": "Discussion", "isCorrect": false },
                { "id": "opt4", "text": "Reading", "isCorrect": false }
            ],
            "explanation": "Demonstration allows the student to observe the skill being performed, which is critical for psychomotor learning."
        },
        {
            "id": "t3-q2",
            "type": "matching",
            "question": "Match the teaching method with its main advantage:",
            "points": 3,
            "pairs": [
                { "id": "p1", "left": "Lecture", "right": "Economical for large groups" },
                { "id": "p2", "left": "Tutorial", "right": "Two-way communication/Feedback" },
                { "id": "p3", "left": "Simulation", "right": "Safe environment to make mistakes" }
            ],
            "explanation": "Lectures save time for large groups; Tutorials allow interaction; Simulation provides safety."
        },
        {
            "id": "t3-q3",
            "type": "multiple-choice",
            "question": "What is a major disadvantage of a Field Visit?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "It creates administrative problems and is not economical", "isCorrect": true },
                { "id": "opt2", "text": "It does not provide actual experience", "isCorrect": false },
                { "id": "opt3", "text": "It prevents interpersonal relationships", "isCorrect": false },
                { "id": "opt4", "text": "Information comes from only one source", "isCorrect": false }
            ],
            "explanation": "Field visits are effective but resource-intensive, requiring transport, time, and administrative planning."
        },
        {
            "id": "t3-q4",
            "type": "true-false",
            "question": "In a tutorial, the teacher should give a mini-lecture to ensure content coverage.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "A tutorial is for discussion. The teacher should talk as little as possible and encourage students to think independently."
        },
        {
            "id": "t3-q5",
            "type": "multiple-select",
            "question": "Which of the following are methods to teach attitudes? (Select all that apply)",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Role Play", "isCorrect": true },
                { "id": "opt2", "text": "Providing Models/Examples", "isCorrect": true },
                { "id": "opt3", "text": "Discussion", "isCorrect": true },
                { "id": "opt4", "text": "Drills and Rote Learning", "isCorrect": false }
            ],
            "explanation": "Attitudes are shaped by experience, modeling, role play, and discussion, not by rote drills."
        },
        {
            "id": "t3-q6",
            "type": "fill-blank",
            "question": "__b1__ teaching is teaching in the practical setting, similar to the environment within which the learner will practice in future.",
            "points": 1,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["clinical"], "caseSensitive": false }
            ]
        },
        {
            "id": "t3-q7",
            "type": "multiple-choice",
            "question": "The optimal number of students for a tutorial is:",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Not more than 8", "isCorrect": true },
                { "id": "opt2", "text": "20-30", "isCorrect": false },
                { "id": "opt3", "text": "50+", "isCorrect": false },
                { "id": "opt4", "text": "One whole class", "isCorrect": false }
            ],
            "explanation": "Tutorials require high interaction, so small groups (max 8) are best."
        },
        {
            "id": "t3-q8",
            "type": "short-answer",
            "question": "Name two types of simulation methods.",
            "points": 2,
            "keywords": ["game", "simulator", "simulators"],
            "minKeywords": 2,
            "modelAnswer": "Simulation games and Simulators",
            "explanation": "The two main types are simulation games (e.g., written case history) and simulators (e.g., models, phantoms)."
        },
        {
            "id": "t3-q9",
            "type": "multiple-choice",
            "question": "Which innovative method involves 'Student-centred, Problem-based, Integrated, Community-oriented, Electives and Systematic' characteristics?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "COBES", "isCorrect": false },
                { "id": "opt2", "text": "SPICES", "isCorrect": true },
                { "id": "opt3", "text": "ABC", "isCorrect": false },
                { "id": "opt4", "text": "OSCE", "isCorrect": false }
            ],
            "explanation": "SPICES is the acronym for this curriculum development strategy."
        },
        {
            "id": "t3-q10",
            "type": "true-false",
            "question": "When teaching skills, practice is essential.",
            "points": 1,
            "correctAnswer": true,
            "explanation": "Skills cannot be mastered without practice (projects, simulations, rotations)."
        }
    ]
});