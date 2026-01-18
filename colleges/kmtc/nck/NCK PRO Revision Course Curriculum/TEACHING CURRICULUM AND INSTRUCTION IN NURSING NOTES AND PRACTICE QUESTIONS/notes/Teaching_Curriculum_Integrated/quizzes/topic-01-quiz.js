registerQuiz("topic-01-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-01-quiz",
    "metadata": {
        "title": "Historical Background & Principles Quiz",
        "description": "Test your knowledge on the history of education in Kenya, principles of learning, and major learning theories.",
        "topicId": "topic-01",
        "difficulty": "intermediate",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2026-01-18T20:00:00Z",
        "updatedAt": "2026-01-18T20:00:00Z",
        "tags": ["history", "principles", "theories"]
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
            "id": "t1-q1",
            "type": "multiple-choice",
            "question": "Which report, compiled in 1964 shortly after independence, focused on improving education to fight ignorance, disease, and poverty?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "The Mackay Report", "isCorrect": false },
                { "id": "opt2", "text": "The Ominde Report", "isCorrect": true },
                { "id": "opt3", "text": "The Koech Report", "isCorrect": false },
                { "id": "opt4", "text": "The Appleton Report", "isCorrect": false }
            ],
            "explanation": "The Ominde Report (1964) was the first commission set up after independence to investigate ways of improving education to fight ignorance, disease, and poverty."
        },
        {
            "id": "t1-q2",
            "type": "matching",
            "question": "Match the psychologist to their learning theory:",
            "points": 3,
            "pairs": [
                { "id": "p1", "left": "B.F. Skinner", "right": "Operant Conditioning (Reinforcement)" },
                { "id": "p2", "left": "Carl Rogers", "right": "Learner-Centred / Humanistic" },
                { "id": "p3", "left": "Jerome Bruner", "right": "Discovery Learning" }
            ],
            "explanation": "Skinner focused on behaviorism and reinforcement; Rogers on humanistic, student-centred learning; Bruner on discovery learning and problem solving."
        },
        {
            "id": "t1-q3",
            "type": "multiple-select",
            "question": "Which of the following are principles of Adult Learning (Andragogy)?",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Learning is self-directed", "isCorrect": true },
                { "id": "opt2", "text": "The learner is a passive recipient of information", "isCorrect": false },
                { "id": "opt3", "text": "Learners bring a wealth of experience", "isCorrect": true },
                { "id": "opt4", "text": "Learning is problem-centered and immediate", "isCorrect": true }
            ],
            "explanation": "Andragogy emphasizes self-direction, using prior experience, and immediate application of knowledge, unlike Pedagogy where the learner is often dependent."
        },
        {
            "id": "t1-q4",
            "type": "true-false",
            "question": "According to Maslow, learning should be primarily for utility (getting a job) rather than for self-enhancement.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "Maslow emphasizes the importance of learning for self-enhancement and self-actualization rather than simply for utility or qualifications."
        },
        {
            "id": "t1-q5",
            "type": "fill-blank",
            "question": "According to Bloom's Taxonomy, the three domains of learning are the __b1__ domain (knowledge), the __b2__ domain (attitudes), and the Psychomotor domain (skills).",
            "points": 2,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["cognitive"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["affective"], "caseSensitive": false }
            ]
        },
        {
            "id": "t1-q6",
            "type": "multiple-choice",
            "question": "Which condition makes an environment conducive to learning?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Discouraging mistakes to ensure perfection", "isCorrect": false },
                { "id": "opt2", "text": "Strict adherence to a single teaching method", "isCorrect": false },
                { "id": "opt3", "text": "Recognizing the right to make mistakes and tolerating imperfection", "isCorrect": true },
                { "id": "opt4", "text": "Maintaining a high level of anxiety in learners", "isCorrect": false }
            ],
            "explanation": "Learning is encouraged in an atmosphere that accepts differences, recognizes the right to make mistakes, and tolerates imperfection."
        },
        {
            "id": "t1-q7",
            "type": "ordering",
            "question": "Order the levels of the Cognitive Domain (Bloom) from lowest to highest:",
            "points": 3,
            "items": [
                { "id": "i1", "text": "Knowledge", "correctPosition": 1 },
                { "id": "i2", "text": "Comprehension", "correctPosition": 2 },
                { "id": "i3", "text": "Application", "correctPosition": 3 },
                { "id": "i4", "text": "Analysis", "correctPosition": 4 },
                { "id": "i5", "text": "Synthesis", "correctPosition": 5 },
                { "id": "i6", "text": "Evaluation", "correctPosition": 6 }
            ],
            "explanation": "The hierarchy moves from simple recall (Knowledge) up to complex judgment (Evaluation)."
        },
        {
            "id": "t1-q8",
            "type": "multiple-choice",
            "question": "What is the definition of 'Learning'?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "The ability to memorize facts for an exam", "isCorrect": false },
                { "id": "opt2", "text": "A process resulting in some modification in thinking, feeling, or doing", "isCorrect": true },
                { "id": "opt3", "text": "The act of attending a class", "isCorrect": false },
                { "id": "opt4", "text": "Passing information from teacher to student", "isCorrect": false }
            ],
            "explanation": "Learning is defined as a process resulting in modification in the way of thinking, feeling, or doing by the learner."
        },
        {
            "id": "t1-q9",
            "type": "short-answer",
            "question": "List the four ingredients of a learning situation.",
            "points": 2,
            "keywords": ["motivation", "information", "practice", "feedback"],
            "minKeywords": 3,
            "modelAnswer": "Motivation, Information, Practice, Feedback",
            "explanation": "The four key ingredients are Motivation, Information, Practice, and Feedback."
        },
        {
            "id": "t1-q10",
            "type": "true-false",
            "question": "D.P. Ausubel emphasized that learning should start from the known to the unknown.",
            "points": 1,
            "correctAnswer": true,
            "explanation": "Ausubel noted that new information fits into existing knowledge like a key in a lock, emphasizing starting from the known to the unknown."
        }
    ]
});