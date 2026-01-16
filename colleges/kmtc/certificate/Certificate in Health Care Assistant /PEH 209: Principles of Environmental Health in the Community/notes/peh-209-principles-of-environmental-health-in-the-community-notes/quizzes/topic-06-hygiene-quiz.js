// quizzes/topic-06-hygiene-quiz.js
window.registerQuiz('topic-06-hygiene-quiz', {
    "schemaVersion": "1.0",
    "quizId": "topic-06-hygiene-quiz",
    "metadata": {
        "title": "Hygiene & CLTS Quiz",
        "description": "Assess knowledge on personal hygiene and Community-Led Total Sanitation.",
        "topicId": "topic-06-hygiene",
        "difficulty": "beginner",
        "estimatedTime": 5,
        "passingScore": 70,
        "createdAt": "2026-01-16T10:00:00Z"
    },
    "settings": {
        "shuffleQuestions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "fill-blank",
            "question": "CLTS stands for Community-Led __b1__ Sanitation.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["Total"], "caseSensitive": false }
            ],
            "explanation": "Community-Led Total Sanitation."
        },
        {
            "id": "q2",
            "type": "ordering",
            "question": "Order the phases of the CLTS process:",
            "points": 20,
            "items": [
                { "id": "i1", "text": "Pre-Triggering", "correctPosition": 1 },
                { "id": "i2", "text": "Triggering", "correctPosition": 2 },
                { "id": "i3", "text": "Post-Triggering", "correctPosition": 3 },
                { "id": "i4", "text": "Scaling Up", "correctPosition": 4 }
            ]
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "What is the 'Ignition Moment'?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Lighting a fire to burn waste", "isCorrect": false },
                { "id": "b", "text": "Collective realization that people are ingesting each other's faeces", "isCorrect": true },
                { "id": "c", "text": "Starting a hand washing campaign", "isCorrect": false },
                { "id": "d", "text": "Building the first toilet", "isCorrect": false }
            ],
            "explanation": "It is the moment of realization/shock that drives the community to act against open defecation."
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "The CLTS approach relies heavily on providing hardware subsidies to communities.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "False. CLTS does NOT offer hardware subsidies; it focuses on behavior change and community self-reliance."
        },
        {
            "id": "q5",
            "type": "multiple-select",
            "question": "Select critical times for hand washing:",
            "points": 10,
            "options": [
                { "id": "a", "text": "After using the toilet", "isCorrect": true },
                { "id": "b", "text": "Before eating", "isCorrect": true },
                { "id": "c", "text": "After handling pets", "isCorrect": true },
                { "id": "d", "text": "Before sleeping", "isCorrect": false }
            ]
        }
    ]
});