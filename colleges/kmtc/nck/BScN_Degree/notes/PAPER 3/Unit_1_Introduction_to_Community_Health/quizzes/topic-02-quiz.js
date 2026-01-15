registerQuiz("topic-02-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-02-quiz",
    "metadata": {
        "title": "Principles & Roles Quiz",
        "description": "Test your knowledge of the Alma Ata Declaration and Community Health Nurse roles.",
        "topicId": "topic-02-principles",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2025-01-13T12:00:00Z",
        "tags": ["principles", "roles", "ethics"]
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
            "question": "Which of the following are principles from the Alma Ata Declaration (1978)? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Health care strictly for urban populations", "isCorrect": false },
                { "id": "b", "text": "Promotive and preventive aspects of health care", "isCorrect": true },
                { "id": "c", "text": "Active participation of individuals and communities", "isCorrect": true },
                { "id": "d", "text": "Inter-sectoral approach", "isCorrect": true }
            ],
            "explanation": "The Alma Ata Declaration emphasizes availability for all, prevention, community participation, and inter-sectoral collaboration."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the Community Health Nurse role to its description:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Manager", "right": "Organising programs and being a team leader" },
                { "id": "p2", "left": "Advocator", "right": "Advising planners on community needs" },
                { "id": "p3", "left": "Evaluator", "right": "Assessing performance and outcomes" },
                { "id": "p4", "left": "Trainer", "right": "Teaching other community health workers" }
            ],
            "explanation": "Managers lead; Advocators speak for the community; Evaluators assess results; Trainers teach others."
        },
        {
            "id": "q3",
            "type": "true-false",
            "question": "Community health nursing should be a vertical programme working independently of other stakeholders.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "Community health nursing should NOT be a vertical programme. It must work in collaboration with other stakeholders and sectors."
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "A __b1__ can be defined as a basic belief, theory, or rule that has a major influence on the way in which something is done.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["principle", "Principle"], "caseSensitive": false }
            ],
            "explanation": "This is the definition of a 'Principle' provided in the text."
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "Which role involves sharing technical health information with individual families and communities?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Researcher", "isCorrect": false },
                { "id": "b", "text": "Advisor", "isCorrect": true },
                { "id": "c", "text": "Manager", "isCorrect": false },
                { "id": "d", "text": "Evaluator", "isCorrect": false }
            ],
            "explanation": "The Advisor role specifically involves sharing technical health information with families and communities."
        }
    ]
});