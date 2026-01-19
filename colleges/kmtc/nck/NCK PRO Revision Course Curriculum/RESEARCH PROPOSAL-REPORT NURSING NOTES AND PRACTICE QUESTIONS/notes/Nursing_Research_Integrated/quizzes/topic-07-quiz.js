registerQuiz("topic-07-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-07-quiz",
    "metadata": {
        "title": "Topic 07: Sampling Strategies",
        "description": "Assess your understanding of probability and non-probability sampling methods.",
        "topicId": "topic-07",
        "difficulty": "intermediate",
        "estimatedTime": 20,
        "passingScore": 70,
        "createdAt": "2024-05-20T10:00:00Z",
        "updatedAt": "2024-05-20T10:00:00Z",
        "tags": ["sampling", "population", "bias"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "t7-q1",
            "type": "multiple-choice",
            "question": "Which sampling method involves selecting every 'nth' case from a list?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Simple Random Sampling", "isCorrect": false },
                { "id": "opt2", "text": "Systematic Sampling", "isCorrect": true },
                { "id": "opt3", "text": "Stratified Random Sampling", "isCorrect": false },
                { "id": "opt4", "text": "Cluster Sampling", "isCorrect": false }
            ]
        },
        {
            "id": "t7-q2",
            "type": "matching",
            "question": "Match the non-probability sampling method with its definition.",
            "points": 2,
            "pairs": [
                { "id": "p1", "left": "Purposive", "right": "Researcher selects cases based on specific criteria/judgment." },
                { "id": "p2", "left": "Snowball", "right": "Subjects recruit other subjects; good for hidden populations." },
                { "id": "p3", "left": "Convenience", "right": "Selecting subjects who are readily available/accessible." },
                { "id": "p4", "left": "Quota", "right": "Selecting subjects to fill proportions of subgroups." }
            ]
        },
        {
            "id": "t7-q3",
            "type": "fill-blank",
            "question": "A __b1__ is a comprehensive list of all the sampling elements in the target population.",
            "points": 1,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["sampling frame"], "caseSensitive": false }
            ]
        },
        {
            "id": "t7-q4",
            "type": "true-false",
            "question": "Stratified random sampling ensures representation from various subgroups (strata) in the population.",
            "points": 1,
            "correctAnswer": true
        },
        {
            "id": "t7-q5",
            "type": "multiple-choice",
            "question": "When is cluster sampling typically used?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "When the population is small and concentrated", "isCorrect": false },
                { "id": "opt2", "text": "When a sampling frame is not possible or population is scattered", "isCorrect": true },
                { "id": "opt3", "text": "When the researcher wants to handpick subjects", "isCorrect": false },
                { "id": "opt4", "text": "When every nth person needs to be selected", "isCorrect": false }
            ]
        }
    ]
});