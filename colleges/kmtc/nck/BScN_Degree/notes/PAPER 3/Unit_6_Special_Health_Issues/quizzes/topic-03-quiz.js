registerQuiz("topic-03-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-03-quiz",
    "metadata": {
        "title": "Topic 03: School Health Programmes",
        "description": "Evaluate your understanding of school health needs, programme organization, and implementation.",
        "topicId": "topic-03",
        "difficulty": "beginner",
        "estimatedTime": 10,
        "passingScore": 80,
        "createdAt": "2026-01-17T12:00:00Z",
        "updatedAt": "2026-01-17T12:00:00Z",
        "tags": ["school-health", "child-health", "public-health"]
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
            "type": "multiple-select",
            "question": "Which of the following are members of the school health team?",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Teachers", "isCorrect": true },
                { "id": "opt2", "text": "Pupils", "isCorrect": true },
                { "id": "opt3", "text": "Parents", "isCorrect": true },
                { "id": "opt4", "text": "Community health nurse", "isCorrect": true },
                { "id": "opt5", "text": "Hospital Administrator", "isCorrect": false }
            ],
            "explanation": "The text lists Teachers, Pupils, Parents, Community formal/informal leaders, and the Community health nurse as members."
        },
        {
            "id": "t3-q2",
            "type": "multiple-choice",
            "question": "When conducting a physical examination of a school child, what does a 'spoon shaped' nail indicate?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Iron deficiency anaemia", "isCorrect": true },
                { "id": "opt2", "text": "Fungal infection", "isCorrect": false },
                { "id": "opt3", "text": "Vitamin A deficiency", "isCorrect": false },
                { "id": "opt4", "text": "Lack of hygiene", "isCorrect": false }
            ],
            "explanation": "Spoon shaped nails indicate iron deficiency anaemia."
        },
        {
            "id": "t3-q3",
            "type": "fill-blank",
            "question": "Bitot's spots or signs of keratomalacia in the eyes indicate a deficiency of Vitamin __id1__.",
            "points": 1,
            "blanks": [
                {
                    "id": "id1",
                    "acceptedAnswers": ["A", "a"],
                    "caseSensitive": false
                }
            ],
            "explanation": "Keratomalacia and Bitot's spots are signs of Vitamin A deficiency."
        },
        {
            "id": "t3-q4",
            "type": "true-false",
            "question": "When inspecting school furniture, the seats should be attached to each other to ensure order.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "The text states: 'The seats should be simple and NOT attached to each other so that the pupils can move them.'"
        },
        {
            "id": "t3-q5",
            "type": "matching",
            "question": "Match the school environment component to its requirement.",
            "points": 2,
            "pairs": [
                { "id": "p1", "left": "Playground", "right": "Dry with no potholes or stones" },
                { "id": "p2", "left": "Classroom", "right": "Well ventilated with adequate lighting" },
                { "id": "p3", "left": "Sanitation", "right": "Separate toilets for female and male students" }
            ],
            "explanation": "Playgrounds must be safe (dry/no potholes). Classrooms need ventilation/light. Sanitation requires separate toilets."
        },
        {
            "id": "t3-q6",
            "type": "multiple-choice",
            "question": "Which of the following is NOT a source of information for assessing school health needs?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Global health statistics", "isCorrect": true },
                { "id": "opt2", "text": "Clinic records", "isCorrect": false },
                { "id": "opt3", "text": "Teachers, Students and Parents", "isCorrect": false },
                { "id": "opt4", "text": "Personal observations", "isCorrect": false }
            ],
            "explanation": "The text lists Clinic records, Reports, Health team, Teachers/Students/Parents, Personal observations, and Community leaders as sources. Global stats are not mentioned as a primary source for local assessment."
        }
    ]
});