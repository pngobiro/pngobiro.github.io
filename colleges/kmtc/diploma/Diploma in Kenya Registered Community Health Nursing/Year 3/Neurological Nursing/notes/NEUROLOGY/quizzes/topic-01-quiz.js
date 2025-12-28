registerQuiz("topic-01-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-01-quiz",
    "metadata": {
        "title": "Anatomy & Physiology Quiz",
        "description": "Test your knowledge of the nervous system structure and function.",
        "topicId": "topic-01",
        "difficulty": "beginner",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2025-12-28T12:00:00Z"
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate",
        "allowRetry": true,
        "showCorrectAnswers": true
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which division of the nervous system is responsible for the 'Fight or Flight' response?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Somatic Nervous System", "isCorrect": false },
                { "id": "b", "text": "Parasympathetic Nervous System", "isCorrect": false },
                { "id": "c", "text": "Sympathetic Nervous System", "isCorrect": true },
                { "id": "d", "text": "Central Nervous System", "isCorrect": false }
            ],
            "explanation": "The Sympathetic Nervous System prepares the body for rigorous activity or emergencies (fight or flight), increasing heart rate and blood pressure."
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "The basic functional unit of the brain is the __1__, which transmits electrochemical messages.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["neuron", "neurone"], "caseSensitive": false }
            ],
            "explanation": "The neuron is the primary functional unit, composed of a cell body, dendrites, and an axon."
        },
        {
            "id": "q3",
            "type": "matching",
            "question": "Match the brain lobe with its primary function:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Frontal Lobe", "right": "Motor function and concentration" },
                { "id": "p2", "left": "Parietal Lobe", "right": "Sensory analysis" },
                { "id": "p3", "left": "Temporal Lobe", "right": "Auditory reception" },
                { "id": "p4", "left": "Occipital Lobe", "right": "Visual interpretation" }
            ]
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "Which neurotransmitter is primarily associated with the parasympathetic nervous system?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Dopamine", "isCorrect": false },
                { "id": "b", "text": "Acetylcholine", "isCorrect": true },
                { "id": "c", "text": "Norepinephrine", "isCorrect": false },
                { "id": "d", "text": "Serotonin", "isCorrect": false }
            ],
            "explanation": "Acetylcholine is the major neurotransmitter of the parasympathetic nervous system."
        },
        {
            "id": "q5",
            "type": "ordering",
            "question": "Order the layers of the meninges from OUTSIDE (skull) to INSIDE (brain):",
            "points": 15,
            "items": [
                { "id": "i1", "text": "Dura Mater", "correctPosition": 1 },
                { "id": "i2", "text": "Arachnoid Mater", "correctPosition": 2 },
                { "id": "i3", "text": "Pia Mater", "correctPosition": 3 }
            ]
        },
        {
            "id": "q6",
            "type": "true-false",
            "question": "The cerebellum is primarily responsible for the coordination of movement and balance.",
            "points": 10,
            "correctAnswer": true,
            "explanation": "The cerebellum controls fine movement, balance, position sense, and coordination."
        },
        {
            "id": "q7",
            "type": "multiple-choice",
            "question": "Which Cranial Nerve is responsible for vision?",
            "points": 10,
            "options": [
                { "id": "a", "text": "CN I (Olfactory)", "isCorrect": false },
                { "id": "b", "text": "CN II (Optic)", "isCorrect": true },
                { "id": "c", "text": "CN III (Oculomotor)", "isCorrect": false },
                { "id": "d", "text": "CN VIII (Vestibulocochlear)", "isCorrect": false }
            ],
            "explanation": "Cranial Nerve II (Optic Nerve) is a sensory nerve responsible for vision."
        }
    ]
});