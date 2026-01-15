registerQuiz("topic-05-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-05-quiz",
    "metadata": {
        "title": "Learning Theories Quiz",
        "description": "Assess knowledge of Classical and Operant Conditioning, including key terms and schedules.",
        "topicId": "topic-05",
        "difficulty": "advanced",
        "estimatedTime": 20,
        "passingScore": 70,
        "createdAt": "2026-01-10T12:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Who is associated with the discovery of Classical Conditioning using dogs?",
            "points": 10,
            "options": [
                { "id": "a", "text": "B.F. Skinner", "isCorrect": false },
                { "id": "b", "text": "Ivan Pavlov", "isCorrect": true },
                { "id": "c", "text": "Albert Bandura", "isCorrect": false },
                { "id": "d", "text": "John Watson", "isCorrect": false }
            ]
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "In Pavlov's experiment, the food is the __1__ Stimulus and the salivation to the food is the __2__ Response.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["unconditioned", "Unconditioned", "UCS"], "caseSensitive": false },
                { "id": "2", "acceptedAnswers": ["unconditioned", "Unconditioned", "UCR"], "caseSensitive": false }
            ]
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "What happens when the Conditioned Stimulus (Bell) is presented repeatedly without the Unconditioned Stimulus (Food)?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Spontaneous Recovery", "isCorrect": false },
                { "id": "b", "text": "Generalization", "isCorrect": false },
                { "id": "c", "text": "Extinction", "isCorrect": true },
                { "id": "d", "text": "Acquisition", "isCorrect": false }
            ],
            "explanation": "Extinction is the gradual weakening/disappearance of the learned response when reinforcement stops."
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "Which term describes a child responding to a white rabbit similarly to a white rat (Little Albert)?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Discrimination", "isCorrect": false },
                { "id": "b", "text": "Generalization", "isCorrect": true },
                { "id": "c", "text": "Extinction", "isCorrect": false },
                { "id": "d", "text": "Spontaneous Recovery", "isCorrect": false }
            ],
            "explanation": "Generalization is responding to stimuli similar to the original conditioned stimulus."
        },
        {
            "id": "q5",
            "type": "matching",
            "question": "Match the Operant Conditioning term to its definition:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Positive Reinforcement", "right": "Adding a pleasant stimulus to increase behavior" },
                { "id": "p2", "left": "Negative Reinforcement", "right": "Removing an unpleasant stimulus to increase behavior" },
                { "id": "p3", "left": "Punishment", "right": "Adding an aversive stimulus to decrease behavior" }
            ]
        },
        {
            "id": "q6",
            "type": "multiple-choice",
            "question": "Which schedule of reinforcement involves reinforcing a response after an unpredictable number of responses (e.g., gambling)?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Fixed Ratio", "isCorrect": false },
                { "id": "b", "text": "Variable Ratio", "isCorrect": true },
                { "id": "c", "text": "Fixed Interval", "isCorrect": false },
                { "id": "d", "text": "Variable Interval", "isCorrect": false }
            ],
            "explanation": "Variable Ratio (VR) yields high response rates and is highly resistant to extinction."
        },
        {
            "id": "q7",
            "type": "true-false",
            "question": "Negative reinforcement is the same thing as punishment.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "Negative reinforcement *increases* behavior by removing something bad; punishment *decreases* behavior."
        },
        {
            "id": "q8",
            "type": "short-answer",
            "question": "Explain the difference between Primary and Secondary reinforcers.",
            "points": 15,
            "keywords": ["primary", "secondary", "biological", "survival", "learned", "acquired", "food", "money"],
            "minKeywords": 3,
            "modelAnswer": "Primary reinforcers satisfy biological needs (e.g., food, water). Secondary reinforcers are learned or acquired (e.g., money, grades)."
        }
    ]
});