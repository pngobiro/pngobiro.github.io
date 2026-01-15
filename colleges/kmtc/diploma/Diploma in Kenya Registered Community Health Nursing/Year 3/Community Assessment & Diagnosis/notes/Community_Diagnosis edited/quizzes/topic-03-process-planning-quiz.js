registerQuiz("topic-03-process-planning-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-03-process-planning-quiz",
    "metadata": {
        "title": "Process & Planning Quiz",
        "description": "Evaluate your knowledge of the diagnosis steps and sampling methodologies.",
        "topicId": "topic-03-process-planning",
        "difficulty": "intermediate",
        "estimatedTime": 20,
        "passingScore": 70,
        "createdAt": "2025-12-26T10:00:00Z",
        "tags": ["process", "sampling", "planning"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "ordering",
            "question": "Arrange the first 5 steps of the Community Diagnosis process in order.",
            "points": 25,
            "items": [
                { "id": "i1", "text": "Exploration", "correctPosition": 1 },
                { "id": "i2", "text": "Planning the survey", "correctPosition": 2 },
                { "id": "i3", "text": "Developing and Pre-testing tools", "correctPosition": 3 },
                { "id": "i4", "text": "Execution of the survey", "correctPosition": 4 },
                { "id": "i5", "text": "Data analysis", "correctPosition": 5 }
            ]
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the sampling method to its description.",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Simple Random", "right": "Every unit has an equal chance of selection" },
                { "id": "p2", "left": "Systematic", "right": "Selecting units at evenly spaced intervals (every Kth person)" },
                { "id": "p3", "left": "Stratified", "right": "Dividing population into subgroups before sampling" },
                { "id": "p4", "left": "Snowballing", "right": "Subjects identify others with similar characteristics" }
            ]
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "Which sampling method is best used when a sampling frame is unavailable or the population is scattered over a large area?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Simple Random Sampling", "isCorrect": false },
                { "id": "b", "text": "Cluster Sampling", "isCorrect": true },
                { "id": "c", "text": "Systematic Sampling", "isCorrect": false },
                { "id": "d", "text": "Stratified Sampling", "isCorrect": false }
            ],
            "explanation": "Cluster sampling involves selecting intact groups/clusters rather than individuals, useful for large/scattered populations."
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "If your target population is 200 and you need a sample of 50, your systematic sampling interval (k) is __1__.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["4", "four"], "caseSensitive": false }
            ],
            "explanation": "K = Population (200) / Sample (50) = 4."
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "Convenience sampling is a probability sampling method that ensures the sample is representative of the whole population.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "False. Convenience sampling is a NON-probability method and is often biased/not representative."
        },
        {
            "id": "q6",
            "type": "multiple-select",
            "question": "Which of the following are qualities of a good interviewer? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Good listener", "isCorrect": true },
                { "id": "b", "text": "Able to establish rapport", "isCorrect": true },
                { "id": "c", "text": "Imposes own opinions on respondents", "isCorrect": false },
                { "id": "d", "text": "Literate and well known to the community", "isCorrect": true }
            ],
            "explanation": "Interviewers must be neutral, good listeners, and able to build rapport."
        }
    ]
});