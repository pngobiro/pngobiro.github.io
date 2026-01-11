registerQuiz("topic-03-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-03-quiz",
    "metadata": {
        "title": "Disaster Management Cycle",
        "description": "Test your knowledge of the four phases of disaster management and their objectives.",
        "topicId": "topic-03",
        "difficulty": "intermediate",
        "estimatedTime": 5,
        "passingScore": 70,
        "createdAt": "2025-12-25T12:00:00Z",
        "tags": ["cycle", "phases", "management"]
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
            "type": "matching",
            "question": "Match the cycle phase to its description:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Mitigation", "right": "Measures to minimize results (e.g., building codes)" },
                { "id": "p2", "left": "Preparedness", "right": "Planning how to respond (e.g., training)" },
                { "id": "p3", "left": "Response", "right": "Initial actions during event (e.g., rescue)" },
                { "id": "p4", "left": "Recovery", "right": "Returning community to normal" }
            ]
        },
        {
            "id": "q2",
            "type": "multiple-select",
            "question": "What are the key objectives of disaster management? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Reduce damages and deaths", "isCorrect": true },
                { "id": "b", "text": "Reduce personal suffering", "isCorrect": true },
                { "id": "c", "text": "Speed recovery", "isCorrect": true },
                { "id": "d", "text": "Eliminate all natural hazards", "isCorrect": false }
            ],
            "partialCredit": true,
            "explanation": "We cannot eliminate natural hazards (like earthquakes), but we can manage disasters to reduce suffering, deaths, and speed up recovery."
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "__b1__ refers to the permanent construction or replacement of severely damaged physical structures, restoring them to pre-disaster or better conditions.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["reconstruction", "Reconstruction"], "caseSensitive": false }
            ],
            "explanation": "Reconstruction goes beyond simple rehabilitation to include permanent rebuilding of infrastructure."
        }
    ]
});