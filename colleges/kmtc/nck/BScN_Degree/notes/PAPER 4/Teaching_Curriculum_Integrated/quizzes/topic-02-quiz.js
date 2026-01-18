registerQuiz("topic-02-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-02-quiz",
    "metadata": {
        "title": "Teaching & Learning Processes Quiz",
        "description": "Assess your understanding of lesson planning, micro-teaching skills, and innovative strategies like Problem Based Learning (PBL).",
        "topicId": "topic-02",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2026-01-18T20:00:00Z",
        "updatedAt": "2026-01-18T20:00:00Z",
        "tags": ["lesson-planning", "pbl", "micro-teaching"]
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
            "id": "t2-q1",
            "type": "multiple-choice",
            "question": "What is a lesson plan?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "A transcript of the teacher's lecture", "isCorrect": false },
                { "id": "opt2", "text": "A written description guiding the systematic presentation of subject matter", "isCorrect": true },
                { "id": "opt3", "text": "A list of students in the class", "isCorrect": false },
                { "id": "opt4", "text": "A textbook chapter summary", "isCorrect": false }
            ],
            "explanation": "A lesson plan is a written description used to guide the teacher to systematically present the subject matter."
        },
        {
            "id": "t2-q2",
            "type": "multiple-select",
            "question": "Which of the following are recognized Micro Teaching Skills?",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Set Induction", "isCorrect": true },
                { "id": "opt2", "text": "Stimulus Variation", "isCorrect": true },
                { "id": "opt3", "text": "Reinforcement", "isCorrect": true },
                { "id": "opt4", "text": "Curriculum Design", "isCorrect": false },
                { "id": "opt5", "text": "Closure", "isCorrect": true }
            ],
            "explanation": "The six micro teaching skills are Set Induction, Stimulus Variation, Reinforcement, Questioning, Use of Examples, and Closure."
        },
        {
            "id": "t2-q3",
            "type": "fill-blank",
            "question": "In innovative education, the acronym FAGIPW stands for: __b1__, Advice, Guide, Inform, Participate, __b2__.",
            "points": 2,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["facilitate"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["withdraw"], "caseSensitive": false }
            ]
        },
        {
            "id": "t2-q4",
            "type": "ordering",
            "question": "Order the first 4 steps of the 15-Step PBL Process (First Tutorial):",
            "points": 3,
            "items": [
                { "id": "step1", "text": "Group organization (Introductions)", "correctPosition": 1 },
                { "id": "step2", "text": "Reading through the problem", "correctPosition": 2 },
                { "id": "step3", "text": "Identifying the problem", "correctPosition": 3 },
                { "id": "step4", "text": "Defining the problem", "correctPosition": 4 }
            ],
            "explanation": "The process starts with organization, reading, identifying, and then defining the problem."
        },
        {
            "id": "t2-q5",
            "type": "true-false",
            "question": "In traditional teaching, the burden of learning is primarily on the student, while in innovative teaching, it is on the teacher.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "It is the opposite: In traditional teaching, emphasis is on the teacher. In innovative teaching, the burden of learning shifts to the learner."
        },
        {
            "id": "t2-q6",
            "type": "multiple-choice",
            "question": "What is 'Stimulus Variation' in teaching?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Changing the topic frequently", "isCorrect": false },
                { "id": "opt2", "text": "Varying focus, movements, speech, and gestures to retain attention", "isCorrect": true },
                { "id": "opt3", "text": "Giving rewards to students", "isCorrect": false },
                { "id": "opt4", "text": "Using only one type of teaching aid", "isCorrect": false }
            ],
            "explanation": "Stimulus variation involves changing how the teacher presents themselves (voice, movement) to keep students engaged."
        },
        {
            "id": "t2-q7",
            "type": "matching",
            "question": "Match the PBL step to its activity:",
            "points": 2,
            "pairs": [
                { "id": "p1", "left": "Tutorial 1", "right": "Analyze problem and set objectives" },
                { "id": "p2", "left": "SDL (Self Directed Learning)", "right": "Students gather information independently" },
                { "id": "p3", "left": "Tutorial 2", "right": "Presentation and synthesis of information" }
            ]
        },
        {
            "id": "t2-q8",
            "type": "multiple-choice",
            "question": "Which of the following is NOT a role of the tutor in PBL?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Delivering a long lecture on the solution", "isCorrect": true },
                { "id": "opt2", "text": "Keeping the group on track", "isCorrect": false },
                { "id": "opt3", "text": "Encouraging active participation", "isCorrect": false },
                { "id": "opt4", "text": "Intervening in conflict situations", "isCorrect": false }
            ],
            "explanation": "In PBL, the tutor is a facilitator, not a lecturer. They guide the process but do not provide the solution via lecture."
        },
        {
            "id": "t2-q9",
            "type": "short-answer",
            "question": "What does the 'S' in 'SPICES' (innovative curriculum strategy) stand for?",
            "points": 1,
            "keywords": ["student-centred", "student centered", "systematic"],
            "minKeywords": 1,
            "modelAnswer": "Student-centred OR Systematic",
            "explanation": "In the SPICES model, the first S is Student-centred, and the last S is Systematic."
        },
        {
            "id": "t2-q10",
            "type": "multiple-choice",
            "question": "Why is 'Closure' important in a lesson?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "It allows students to leave early", "isCorrect": false },
                { "id": "opt2", "text": "It helps students achieve 'mental closure' and remember what they learnt", "isCorrect": true },
                { "id": "opt3", "text": "It introduces the next topic", "isCorrect": false },
                { "id": "opt4", "text": "It is the time for taking attendance", "isCorrect": false }
            ],
            "explanation": "Closure helps summarize the lesson and solidify the learning for students."
        }
    ]
});