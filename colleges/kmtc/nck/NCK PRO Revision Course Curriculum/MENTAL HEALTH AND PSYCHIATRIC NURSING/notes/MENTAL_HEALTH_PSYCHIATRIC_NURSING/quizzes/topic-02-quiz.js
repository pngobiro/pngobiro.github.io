registerQuiz("topic-02-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-02-quiz",
    "metadata": {
        "title": "Theories & Assessment Quiz",
        "description": "Evaluate understanding of personality theories, symptomatology, and the Mental Status Examination.",
        "topicId": "topic-02",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2026-01-21T12:00:00Z",
        "updatedAt": "2026-01-21T12:00:00Z",
        "tags": ["freud", "mse", "symptoms"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "t2-q1",
            "type": "multiple-choice",
            "question": "Which part of the personality structure operates on the 'reality principle'?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Id", "isCorrect": false },
                { "id": "opt2", "text": "Ego", "isCorrect": true },
                { "id": "opt3", "text": "Superego", "isCorrect": false },
                { "id": "opt4", "text": "Libido", "isCorrect": false }
            ],
            "explanation": "The Ego is in contact with reality and mediates between the Id and Superego. The Id operates on the pleasure principle."
        },
        {
            "id": "t2-q2",
            "type": "matching",
            "question": "Match the symptom to its definition:",
            "points": 4,
            "pairs": [
                { "id": "pair1", "left": "Hallucination", "right": "False sensory perception without external stimuli" },
                { "id": "pair2", "left": "Illusion", "right": "Misinterpretation of actual external stimuli" },
                { "id": "pair3", "left": "Delusion", "right": "Fixed false belief not removed by logic" },
                { "id": "pair4", "left": "Neologism", "right": "New words created by a patient" }
            ],
            "explanation": "Hallucinations are false perceptions (no stimuli). Illusions are misinterpretations (stimuli present). Delusions are false beliefs. Neologisms are made-up words."
        },
        {
            "id": "t2-q3",
            "type": "multiple-choice",
            "question": "A patient maintains a rigid body position for a long period. This symptom is known as:",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Echopraxia", "isCorrect": false },
                { "id": "opt2", "text": "Waxy Flexibility", "isCorrect": true },
                { "id": "opt3", "text": "Negativism", "isCorrect": false },
                { "id": "opt4", "text": "Compulsion", "isCorrect": false }
            ],
            "explanation": "Waxy flexibility is maintaining a body position or posture for some time, common in catatonic schizophrenia."
        },
        {
            "id": "t2-q4",
            "type": "fill-blank",
            "question": "In the MSE mnemonic 'ACTMAD', the letter 'M' stands for __b1__.",
            "points": 1,
            "blanks": [
                {
                    "id": "b1",
                    "acceptedAnswers": ["Mood", "mood"],
                    "caseSensitive": false
                }
            ],
            "explanation": "ACTMAD stands for Appearance, Cognition, Thoughts, Mood, Activities, Disabilities."
        },
        {
            "id": "t2-q5",
            "type": "multiple-choice",
            "question": "Which Erikson stage occurs during adolescence (12-20 years)?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Trust vs Mistrust", "isCorrect": false },
                { "id": "opt2", "text": "Industry vs Inferiority", "isCorrect": false },
                { "id": "opt3", "text": "Identity vs Role Confusion", "isCorrect": true },
                { "id": "opt4", "text": "Intimacy vs Isolation", "isCorrect": false }
            ],
            "explanation": "Identity vs Role Confusion occurs during adolescence (12-20 years) where the individual acquires an identity."
        }
    ]
});