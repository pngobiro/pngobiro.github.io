registerQuiz("topic-02-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-02-quiz",
    "metadata": {
        "title": "Topic 2: Teaching & Learning Processes",
        "description": "Assess your understanding of lesson planning, micro-teaching skills, and innovative processes like PBL.",
        "topicId": "topic-02",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 80,
        "createdAt": "2026-01-17T00:00:00Z",
        "updatedAt": "2026-01-17T00:00:00Z",
        "tags": ["planning", "pbl", "micro-teaching"]
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "What is the primary purpose of a 'Lesson Plan'?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "To systematically present subject matter in a logical way", "isCorrect": true },
                { "id": "opt2", "text": "To record student attendance", "isCorrect": false },
                { "id": "opt3", "text": "To list the names of textbooks", "isCorrect": false },
                { "id": "opt4", "text": "To replace the curriculum", "isCorrect": false }
            ],
            "explanation": "A lesson plan is a written description used to guide the systematic presentation of content."
        },
        {
            "id": "q2",
            "type": "multiple-select",
            "question": "Which of the following are included in the six 'Micro Teaching Skills'? (Select all that apply)",
            "points": 3,
            "options": [
                { "id": "opt1", "text": "Set Induction", "isCorrect": true },
                { "id": "opt2", "text": "Stimulus Variation", "isCorrect": true },
                { "id": "opt3", "text": "Reinforcement", "isCorrect": true },
                { "id": "opt4", "text": "Punishment", "isCorrect": false },
                { "id": "opt5", "text": "Closure", "isCorrect": true }
            ],
            "explanation": "The skills are Set Induction, Stimulus Variation, Reinforcement, Questioning, Use of Examples, and Closure."
        },
        {
            "id": "q3",
            "type": "ordering",
            "question": "Arrange the steps of the 'Three Step PBL Tutorial Process' in order.",
            "points": 3,
            "items": [
                { "id": "step1", "text": "Tutorial 1: Analysis & Objective Setting", "correctPosition": 1 },
                { "id": "step2", "text": "Self Directed Learning (SDL)", "correctPosition": 2 },
                { "id": "step3", "text": "Tutorial 2: Presentation & Synthesis", "correctPosition": 3 }
            ],
            "explanation": "The process is: 1. Initial Tutorial -> 2. Independent Study -> 3. Follow-up Tutorial."
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "In the 'super skills' acronym FAGIPW, 'F' stands for __b1__ and 'P' stands for __b2__.",
            "points": 2,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["facilitating"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["planning"], "caseSensitive": false }
            ],
            "explanation": "FAGIPW = Facilitating, Assessing, Group dynamics, Informing, Planning, Working as role model."
        }
    ]
});