registerQuiz("topic-05-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-05-quiz",
    "metadata": {
        "title": "Instructional Media Quiz",
        "description": "Assess your understanding of projected and non-projected teaching aids, their selection, use, and maintenance.",
        "topicId": "topic-05",
        "difficulty": "beginner",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2026-01-18T20:00:00Z",
        "updatedAt": "2026-01-18T20:00:00Z",
        "tags": ["media", "aids", "projectors"]
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
            "id": "t5-q1",
            "type": "multiple-choice",
            "question": "Which of the following is a 'Projected' aid?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Chalkboard", "isCorrect": false },
                { "id": "opt2", "text": "Flipchart", "isCorrect": false },
                { "id": "opt3", "text": "Overhead Projector (OHP)", "isCorrect": true },
                { "id": "opt4", "text": "Flannel Board", "isCorrect": false }
            ],
            "explanation": "The OHP projects an image onto a screen. The others are non-projected."
        },
        {
            "id": "t5-q2",
            "type": "true-false",
            "question": "When using an Overhead Projector, you should write up to the very edge of the transparency to maximize space.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "You should leave at least an inch of margin all around, otherwise you might lose half the image."
        },
        {
            "id": "t5-q3",
            "type": "fill-blank",
            "question": "The __b1__ board is the device of choice for teaching villagers as it uses rough surfaces to adhere pictures.",
            "points": 1,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["flannel"], "caseSensitive": false }
            ]
        },
        {
            "id": "t5-q4",
            "type": "multiple-choice",
            "question": "What is the 'Real Thing' or Object considered to be?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "The most expensive aid", "isCorrect": false },
                { "id": "opt2", "text": "The best teaching aid", "isCorrect": true },
                { "id": "opt3", "text": "Too dangerous to use", "isCorrect": false },
                { "id": "opt4", "text": "Only useful for exams", "isCorrect": false }
            ],
            "explanation": "The 'real thing' (e.g., a real baby vs a doll) is considered the best aid as it provides the most accurate experience."
        },
        {
            "id": "t5-q5",
            "type": "multiple-select",
            "question": "Which rules apply when using a Chalkboard?",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Write only essential points", "isCorrect": true },
                { "id": "opt2", "text": "Talk to the board while writing", "isCorrect": false },
                { "id": "opt3", "text": "Plan the board layout", "isCorrect": true },
                { "id": "opt4", "text": "Maintain eye contact with the class", "isCorrect": true }
            ],
            "explanation": "You should write essential points, plan the layout, and talk to the audience (not the board)."
        },
        {
            "id": "t5-q6",
            "type": "matching",
            "question": "Match the teaching aid storage method:",
            "points": 2,
            "pairs": [
                { "id": "p1", "left": "Maps/Charts", "right": "Rolled up" },
                { "id": "p2", "left": "Slides", "right": "Hanging files" },
                { "id": "p3", "left": "OHP Transparencies", "right": "Master file with handouts" }
            ],
            "explanation": "Different aids require specific storage to preserve them and make them easy to find."
        },
        {
            "id": "t5-q7",
            "type": "multiple-choice",
            "question": "What is a 'Flipchart' mainly used for?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Showing a film", "isCorrect": false },
                { "id": "opt2", "text": "Displaying prepared notes or drawings in sequence", "isCorrect": true },
                { "id": "opt3", "text": "Projecting images", "isCorrect": false },
                { "id": "opt4", "text": "Recording audio", "isCorrect": false }
            ],
            "explanation": "Flipcharts consist of sheets of paper used to display information sequentially or for brainstorming."
        },
        {
            "id": "t5-q8",
            "type": "true-false",
            "question": "Handouts should be used as a substitute for textbooks.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "Handouts are guides or supplements; they should NOT substitute manuals or textbooks."
        },
        {
            "id": "t5-q9",
            "type": "ordering",
            "question": "Order the steps for using teaching aids:",
            "points": 3,
            "items": [
                { "id": "s1", "text": "Select the aid", "correctPosition": 1 },
                { "id": "s2", "text": "Preview the aid", "correctPosition": 2 },
                { "id": "s3", "text": "Plan usage order", "correctPosition": 3 },
                { "id": "s4", "text": "Present the aid", "correctPosition": 4 },
                { "id": "s5", "text": "Evaluate", "correctPosition": 5 }
            ],
            "explanation": "Select -> Preview -> Plan -> Present -> Evaluate."
        },
        {
            "id": "t5-q10",
            "type": "multiple-choice",
            "question": "Which of the following is a disadvantage of the Flannel Board?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "It is expensive", "isCorrect": false },
                { "id": "opt2", "text": "Pictures may blow away in the wind", "isCorrect": true },
                { "id": "opt3", "text": "It is hard to find materials", "isCorrect": false },
                { "id": "opt4", "text": "It doesn't tell a story", "isCorrect": false }
            ],
            "explanation": "Flannel boards used outdoors can be affected by wind, blowing the pictures away."
        }
    ]
});