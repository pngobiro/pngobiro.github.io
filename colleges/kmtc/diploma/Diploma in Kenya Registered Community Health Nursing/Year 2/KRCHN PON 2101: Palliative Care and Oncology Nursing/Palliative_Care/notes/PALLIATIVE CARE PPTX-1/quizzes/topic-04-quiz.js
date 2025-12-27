registerQuiz("topic-04-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-04-quiz",
    "metadata": {
        "title": "Pain Management",
        "description": "Assess your mastery of pain assessment, types, and the WHO analgesic ladder.",
        "topicId": "topic-04",
        "difficulty": "advanced",
        "estimatedTime": 20,
        "passingScore": 75,
        "createdAt": "2025-12-27T12:00:00Z"
    },
    "settings": { "shuffleQuestions": true, "shuffleOptions": true },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Pain described as 'burning', 'shooting', or 'electric' is most likely:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Somatic Pain", "isCorrect": false },
                { "id": "b", "text": "Visceral Pain", "isCorrect": false },
                { "id": "c", "text": "Neuropathic Pain", "isCorrect": true },
                { "id": "d", "text": "Psychological Pain", "isCorrect": false }
            ],
            "explanation": "These descriptors are classic for neuropathic pain, caused by nerve damage or dysfunction."
        },
        {
            "id": "q2",
            "type": "ordering",
            "question": "Arrange the drugs according to the WHO Analgesic Ladder (Step 1 to Step 3):",
            "points": 15,
            "items": [
                { "id": "i1", "text": "Paracetamol / NSAIDs (Non-opioid)", "correctPosition": 1 },
                { "id": "i2", "text": "Codeine / Tramadol (Weak opioid)", "correctPosition": 2 },
                { "id": "i3", "text": "Morphine / Fentanyl (Strong opioid)", "correctPosition": 3 }
            ],
            "explanation": "Step 1: Non-opioids. Step 2: Weak opioids. Step 3: Strong opioids."
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "The 'Total Pain' concept includes Physical, Social, Psychological, and __b1__ components.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["spiritual"], "caseSensitive": false }
            ],
            "explanation": "Total pain encompasses the physical, social, psychological, and spiritual aspects of suffering."
        },
        {
            "id": "q4",
            "type": "matching",
            "question": "Match the PQRST pain assessment letter to its meaning:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "P", "right": "Precipitating factors" },
                { "id": "p2", "left": "Q", "right": "Quality of pain" },
                { "id": "p3", "left": "R", "right": "Radiating / Relieving" },
                { "id": "p4", "left": "S", "right": "Site and Severity" }
            ]
        }
    ]
});