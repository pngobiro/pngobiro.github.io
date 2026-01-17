registerQuiz("topic-01-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-01-quiz",
    "metadata": {
        "title": "Topic 01: Individuals and Groups with Special Health Needs",
        "description": "Assess your understanding of disabilities, hearing and visual impairments, and care for vulnerable groups.",
        "topicId": "topic-01",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 80,
        "createdAt": "2026-01-17T12:00:00Z",
        "updatedAt": "2026-01-17T12:00:00Z",
        "tags": ["disability", "impairment", "special-needs", "elderly"]
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
            "question": "What is the definition of 'Disability' according to the text?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "A physical, emotional or mental injury or illness that is severe or permanent, interfering with normal growth, development or ability to learn or work.", "isCorrect": true },
                { "id": "opt2", "text": "Anything that stops a part of your body from functioning fully.", "isCorrect": false },
                { "id": "opt3", "text": "A temporary condition resulting from accidental injury.", "isCorrect": false },
                { "id": "opt4", "text": "A condition that solely affects the motor functions of the body.", "isCorrect": false }
            ],
            "explanation": "Disability is defined as a severe or permanent physical, emotional, or mental injury/illness. 'Impairment' is defined as anything that stops a part of the body from functioning fully."
        },
        {
            "id": "t1-q2",
            "type": "multiple-select",
            "question": "Which of the following are causes of hearing loss specifically affecting the **Inner Ear**?",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Tubal catarrh", "isCorrect": false },
                { "id": "opt2", "text": "Congenital rubella infection", "isCorrect": true },
                { "id": "opt3", "text": "Acoustic trauma", "isCorrect": true },
                { "id": "opt4", "text": "Chronic otitis media", "isCorrect": false },
                { "id": "opt5", "text": "Meniere's disease", "isCorrect": true }
            ],
            "explanation": "Tubal catarrh and Chronic otitis media affect the Middle Ear. Rubella, Acoustic trauma, and Meniere's disease affect the Inner Ear."
        },
        {
            "id": "t1-q3",
            "type": "true-false",
            "question": "A person described as 'Hard of Hearing' has defective hearing but it is functional with or without hearing aids.",
            "points": 1,
            "correctAnswer": true,
            "explanation": "'Hard of Hearing' describes a person who has defective hearing that is serviceable/functional with or without aids, and usually implies normal speech."
        },
        {
            "id": "t1-q4",
            "type": "matching",
            "question": "Match the organization to its specific function or affiliation regarding visual impairment.",
            "points": 3,
            "pairs": [
                { "id": "p1", "left": "Sight Savers International", "right": "Sponsor of integrated programmes through Kenya Society for the Blind" },
                { "id": "p2", "left": "Salvation Army", "right": "Collaborates with Thika School for the Blind" },
                { "id": "p3", "left": "Low Vision Project", "right": "Based in Kikuyu PCEA Hospital" }
            ],
            "explanation": "Sight Savers sponsors programmes; Salvation Army works with Thika School; Low Vision Project is based at Kikuyu Hospital."
        },
        {
            "id": "t1-q5",
            "type": "ordering",
            "question": "Arrange the stages of adaptation to chronic illness in the order a patient typically experiences them.",
            "points": 2,
            "items": [
                { "id": "i1", "text": "Denial and Disbelief", "correctPosition": 1 },
                { "id": "i2", "text": "Anger / Awareness of illness", "correctPosition": 2 },
                { "id": "i3", "text": "Reorganisation and Hope", "correctPosition": 3 }
            ],
            "explanation": "The text describes the stages as: 1) Denial and disbelief, 2) Anger/Awareness, 3) Reorganisation and Hope."
        },
        {
            "id": "t1-q6",
            "type": "fill-blank",
            "question": "Externally displaced persons who have run away from their country due to civil war or persecution are also known as __id1__.",
            "points": 1,
            "blanks": [
                {
                    "id": "id1",
                    "acceptedAnswers": ["refugees"],
                    "caseSensitive": false
                }
            ],
            "explanation": "Externally displaced persons are also known as refugees."
        },
        {
            "id": "t1-q7",
            "type": "multiple-choice",
            "question": "Which of the following is NOT listed as a problem typically experienced by the elderly?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Loneliness", "isCorrect": false },
                { "id": "opt2", "text": "Poor nutrition", "isCorrect": false },
                { "id": "opt3", "text": "Excessive energy", "isCorrect": true },
                { "id": "opt4", "text": "Inadequate housing", "isCorrect": false }
            ],
            "explanation": "Lack of energy to provide activities of daily living is the problem listed, not excessive energy."
        }
    ]
});