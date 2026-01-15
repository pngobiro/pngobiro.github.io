registerQuiz("topic-01-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-01-quiz",
    "metadata": {
        "title": "Anatomy & Physiology of the Nervous System",
        "topicId": "topic-01",
        "difficulty": "beginner",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2025-12-25T00:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which basic functional unit of the brain is responsible for conducting impulses?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Neuroglia", "isCorrect": false },
                { "id": "b", "text": "Neuron", "isCorrect": true },
                { "id": "c", "text": "Meninges", "isCorrect": false },
                { "id": "d", "text": "Ventricle", "isCorrect": false }
            ],
            "explanation": "The basic functional unit of the brain is the neuron, composed of a cell body, dendrite, and axon."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the cerebral lobe with its primary function:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Frontal Lobe", "right": "Concentration, motor function, Broca's area" },
                { "id": "p2", "left": "Parietal Lobe", "right": "Sensory cortex, spatial awareness" },
                { "id": "p3", "left": "Temporal Lobe", "right": "Auditory reception, interpretive area" },
                { "id": "p4", "left": "Occipital Lobe", "right": "Visual interpretation" }
            ]
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "The __1__ is the major neurotransmitter of the parasympathetic nervous system, while __2__ is the major transmitter of the sympathetic nervous system.",
            "points": 20,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["acetylcholine", "Acetylcholine"], "caseSensitive": false },
                { "id": "2", "acceptedAnswers": ["norepinephrine", "Norepinephrine"], "caseSensitive": false }
            ],
            "explanation": "Acetylcholine governs parasympathetic functions, while Norepinephrine governs sympathetic functions."
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "Where is the cerebrospinal fluid (CSF) produced?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Arachnoid villi", "isCorrect": false },
                { "id": "b", "text": "Choroid plexus", "isCorrect": true },
                { "id": "c", "text": "Corpus callosum", "isCorrect": false },
                { "id": "d", "text": "Basal ganglia", "isCorrect": false }
            ],
            "explanation": "CSF is produced in the choroid plexus of the lateral, third, and fourth ventricles."
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "The brain stem consists of the midbrain, pons, and medulla oblongata.",
            "points": 10,
            "correctAnswer": true,
            "explanation": "The brain stem structures are the midbrain, pons, and medulla oblongata, connecting the brain to the spinal cord."
        }
    ]
});