// quizzes/topic-01-concepts-quiz.js
window.registerQuiz('topic-01-concepts-quiz', {
    "schemaVersion": "1.0",
    "quizId": "topic-01-concepts-quiz",
    "metadata": {
        "title": "Concepts of Environmental Health Quiz",
        "description": "Assess your understanding of environmental health definitions, intervention models, and risk factors.",
        "topicId": "topic-01-concepts",
        "difficulty": "beginner",
        "estimatedTime": 5,
        "passingScore": 70,
        "createdAt": "2026-01-16T10:00:00Z"
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
            "question": "Which of the following defines 'Environmental Health' according to WHO (1993a)?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Treating sick people in the community", "isCorrect": false },
                { "id": "b", "text": "The theory and practice of assessing, correcting, controlling, and preventing factors in the environment that can adversely affect health", "isCorrect": true },
                { "id": "c", "text": "Personal hygiene practices only", "isCorrect": false },
                { "id": "d", "text": "Building hospitals in rural areas", "isCorrect": false }
            ],
            "explanation": "Environmental health focuses on controlling environmental factors to prevent adverse health effects, distinct from clinical treatment."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the sanitation term with its definition:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Basic sanitation", "right": "Management of human faeces at household level (toilets/latrines)" },
                { "id": "p2", "left": "Food sanitation", "right": "Hygienic measures for ensuring food safety" },
                { "id": "p3", "left": "Ecological sanitation", "right": "Recycling nutrients from wastes to the environment" },
                { "id": "p4", "left": "Environmental sanitation", "right": "Control of environmental factors forming links in disease transmission" }
            ]
        },
        {
            "id": "q3",
            "type": "true-false",
            "question": "The Clinical Intervention Model focuses on stopping people from getting sick in the first place by providing a healthy environment.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "False. The Clinical Intervention Model looks at treating the sick person. The Public Health Model looks at prevention through a healthy environment."
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "More than __b1__% of communicable diseases in Kenya are believed to be preventable using environmental health interventions.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["80", "80%"], "caseSensitive": false }
            ],
            "explanation": "80% of communicable diseases are preventable through environmental interventions."
        },
        {
            "id": "q5",
            "type": "multiple-select",
            "question": "Which of the following are categorized as Environmental Risk Factors? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Contaminated water", "isCorrect": true },
                { "id": "b", "text": "Indoor air pollution", "isCorrect": true },
                { "id": "c", "text": "Genetic disorders", "isCorrect": false },
                { "id": "d", "text": "Vector infestation", "isCorrect": true }
            ],
            "explanation": "Contaminated water, indoor air pollution, and vectors are environmental risks. Genetic disorders are biological/hereditary, not environmental."
        }
    ]
});