registerQuiz("topic-03-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-03-quiz",
    "metadata": {
        "title": "Symptomatology Quiz",
        "description": "Test your knowledge of psychiatric signs and symptoms.",
        "topicId": "topic-03",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 75,
        "createdAt": "2025-12-28T12:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which of the following is a disorder of Thought Process (how ideas are put together)?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Delusion of Grandeur", "isCorrect": false },
                { "id": "b", "text": "Flight of Ideas", "isCorrect": true },
                { "id": "c", "text": "Hallucination", "isCorrect": false },
                { "id": "d", "text": "Obsession", "isCorrect": false }
            ],
            "explanation": "Flight of ideas is a disturbance in the stream/process of thought. Delusions and Obsessions are disorders of thought content."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "Seeing 'cocaine bugs' crawling under the skin is an example of which type of hallucination?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Visual", "isCorrect": false },
                { "id": "b", "text": "Tactile (Haptic)", "isCorrect": true },
                { "id": "c", "text": "Gustatory", "isCorrect": false },
                { "id": "d", "text": "Olfactory", "isCorrect": false }
            ],
            "explanation": "Tactile hallucinations involve the sense of touch. 'Formication' is the specific term for the sensation of bugs crawling on/under skin."
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "A fixed, false belief that cannot be explained by reality or culture is called a __b1__.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["delusion", "Delusion"], "caseSensitive": false }
            ],
            "explanation": "Delusions are disorders of thought content characterized by fixed false beliefs."
        },
        {
            "id": "q4",
            "type": "matching",
            "question": "Match the specific delusion to its description:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Nihilistic", "right": "Belief that one is dead or world does not exist" },
                { "id": "p2", "left": "Reference", "right": "Belief that unrelated events have special meaning" },
                { "id": "p3", "left": "Grandiose", "right": "Belief of having special powers or importance" },
                { "id": "p4", "left": "Persecutory", "right": "Belief that others are plotting harm" }
            ],
            "explanation": "These are common types of delusions found in various psychotic disorders."
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "Waxy flexibility is a condition where a patient maintains odd postures placed by others, commonly seen in Catatonic Schizophrenia.",
            "points": 10,
            "correctAnswer": true,
            "explanation": "Waxy flexibility is a hallmark motor symptom of catatonia."
        }
    ]
});