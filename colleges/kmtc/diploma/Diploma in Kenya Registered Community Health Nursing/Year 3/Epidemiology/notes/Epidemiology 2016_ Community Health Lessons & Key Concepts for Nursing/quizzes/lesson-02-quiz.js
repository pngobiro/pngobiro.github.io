registerQuiz("lesson-02-quiz", {
    "schemaVersion": "1.0",
    "quizId": "lesson-02-quiz",
    "metadata": {
        "title": "Disease Determinants & Prevention",
        "description": "Assess your understanding of disease transmission, immunity, natural history, and prevention levels.",
        "topicId": "lesson-02",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2025-12-26T10:00:00Z",
        "tags": ["prevention", "transmission", "immunity"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate",
        "allowRetry": true
    },
    "questions": [
        {
            "id": "q1",
            "type": "ordering",
            "question": "Arrange the 4 stages of the Natural History of Disease in chronological order:",
            "points": 4,
            "items": [
                { "id": "i1", "text": "Stage of Susceptibility", "correctPosition": 1 },
                { "id": "i2", "text": "Stage of Pre-symptomatic Disease", "correctPosition": 2 },
                { "id": "i3", "text": "Stage of Clinical Disease", "correctPosition": 3 },
                { "id": "i4", "text": "Stage of Diminished Capacity/Recovery/Death", "correctPosition": 4 }
            ],
            "explanation": "Disease starts with susceptibility (risk factors), moves to pre-symptomatic (incubation), then clinical signs appear, ending in recovery, disability, or death."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the level of prevention with the correct example:",
            "points": 4,
            "pairs": [
                { "id": "p1", "left": "Primordial", "right": "National policies on nutrition/agriculture" },
                { "id": "p2", "left": "Primary", "right": "Immunization/Vaccination" },
                { "id": "p3", "left": "Secondary", "right": "Screening (e.g., Pap smear)" },
                { "id": "p4", "left": "Tertiary", "right": "Rehabilitation/Physical therapy" }
            ],
            "explanation": "Primordial = risk factor prevention; Primary = disease prevention; Secondary = early detection; Tertiary = reducing disability."
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "The Epidemiological Triad consists of three components: the __1__, the __2__, and the __3__.",
            "points": 3,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["host", "Host"], "caseSensitive": false },
                { "id": "2", "acceptedAnswers": ["agent", "Agent"], "caseSensitive": false },
                { "id": "3", "acceptedAnswers": ["environment", "Environment"], "caseSensitive": false }
            ],
            "explanation": "Disease results from the interaction between the Host, Agent, and Environment."
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "Which type of immunity is defined as the resistance of a group to an attack by a disease to which a large proportion of the members are immune?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Innate Immunity", "isCorrect": false },
                { "id": "b", "text": "Active Immunity", "isCorrect": false },
                { "id": "c", "text": "Herd Immunity", "isCorrect": true },
                { "id": "d", "text": "Passive Immunity", "isCorrect": false }
            ],
            "explanation": "Herd immunity occurs when enough people are immune to stop the spread of the disease to susceptible individuals."
        },
        {
            "id": "q5",
            "type": "multiple-select",
            "question": "Which of the following are considered Extrinsic Determinants of disease? (Select all that apply)",
            "points": 2,
            "options": [
                { "id": "a", "text": "Genetics", "isCorrect": false },
                { "id": "b", "text": "Physical factors (Radiation, Trauma)", "isCorrect": true },
                { "id": "c", "text": "Biological agents (Bacteria, Viruses)", "isCorrect": true },
                { "id": "d", "text": "Nutritional factors", "isCorrect": true },
                { "id": "e", "text": "Age", "isCorrect": false }
            ],
            "explanation": "Genetics and Age are Intrinsic (Host) factors. Physical, Biological, and Nutritional factors are Extrinsic."
        },
        {
            "id": "q6",
            "type": "true-false",
            "question": "In the chain of transmission, a 'Portal of Exit' is required for the agent to leave the reservoir.",
            "points": 1,
            "correctAnswer": true,
            "explanation": "The chain requires: Agent -> Reservoir -> Portal of Exit -> Mode of Transmission -> Portal of Entry -> Susceptible Host."
        },
        {
            "id": "q7",
            "type": "multiple-choice",
            "question": "Which relationship describes two dissimilar organisms living together where one benefits without harming the other?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Symbiosis", "isCorrect": false },
                { "id": "b", "text": "Commensalism", "isCorrect": true },
                { "id": "c", "text": "Parasitism", "isCorrect": false },
                { "id": "d", "text": "Saprophytism", "isCorrect": false }
            ],
            "explanation": "Commensalism benefits one without harming the other. Parasitism harms the host. Symbiosis benefits both."
        },
        {
            "id": "q8",
            "type": "image-based",
            "question": "In the diagram of the Chain of Infection, what comes immediately after 'Mode of Transmission'?",
            "points": 2,
            "imageUrl": "../assets/images/image-20251226-ec816534.jpeg",
            "imageAlt": "Chain of Infection Diagram",
            "options": [
                { "id": "a", "text": "Reservoir", "isCorrect": false },
                { "id": "b", "text": "Portal of Entry", "isCorrect": true },
                { "id": "c", "text": "Portal of Exit", "isCorrect": false },
                { "id": "d", "text": "Susceptible Host", "isCorrect": false }
            ],
            "explanation": "After the agent is transmitted, it must find a Portal of Entry to infect the new host."
        },
        {
            "id": "q9",
            "type": "multiple-choice",
            "question": "Which stage of the natural history of disease corresponds to 'Incubation Period' in communicable diseases?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Stage of Susceptibility", "isCorrect": false },
                { "id": "b", "text": "Stage of Pre-symptomatic Disease", "isCorrect": true },
                { "id": "c", "text": "Stage of Clinical Disease", "isCorrect": false },
                { "id": "d", "text": "Stage of Recovery", "isCorrect": false }
            ],
            "explanation": "The pre-symptomatic stage involves the disease process beginning (incubation) before signs are evident."
        },
        {
            "id": "q10",
            "type": "short-answer",
            "question": "What is the definition of a 'Communicable Disease'?",
            "points": 2,
            "keywords": ["transmitted", "transmission", "infectious", "person", "animal", "host"],
            "minKeywords": 2,
            "modelAnswer": "An illness that arises from transmission of an infectious agent from an infected person, animal, or reservoir to a susceptible host.",
            "maxLength": 200
        }
    ]
});