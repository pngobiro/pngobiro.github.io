registerQuiz("topic-01-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-01-quiz",
    "metadata": {
        "title": "Foundations of Psychology Quiz",
        "description": "Test your knowledge of psychology definitions, goals, historical schools, and major perspectives.",
        "topicId": "topic-01",
        "difficulty": "beginner",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2026-01-10T12:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Who is considered the 'father' of scientific psychology and established the first laboratory in 1879?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Sigmund Freud", "isCorrect": false },
                { "id": "b", "text": "William James", "isCorrect": false },
                { "id": "c", "text": "Wilhelm Wundt", "isCorrect": true },
                { "id": "d", "text": "B.F. Skinner", "isCorrect": false }
            ],
            "explanation": "Wilhelm Wundt established the first psychology laboratory in Leipzig, Germany, in 1879."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the goal of psychology with its description:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Describe", "right": "Making a detailed record of behavioral observation" },
                { "id": "p2", "left": "Understand", "right": "Stating the causes of behavior" },
                { "id": "p3", "left": "Predict", "right": "Forecasting behavior accurately" },
                { "id": "p4", "left": "Control", "right": "Altering conditions that affect behavior" }
            ]
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "Which perspective emphasizes the role of the unconscious mind and early childhood experiences?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Behavioral", "isCorrect": false },
                { "id": "b", "text": "Humanistic", "isCorrect": false },
                { "id": "c", "text": "Cognitive", "isCorrect": false },
                { "id": "d", "text": "Psychoanalytic", "isCorrect": true }
            ],
            "explanation": "The Psychoanalytic perspective, founded by Freud, focuses on unconscious drives and childhood conflicts."
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "The word psychology comes from two Greek words: __1__ meaning 'mind/soul' and __2__ meaning 'study of'.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["psyche", "Psyche"], "caseSensitive": false },
                { "id": "2", "acceptedAnswers": ["logos", "Logos"], "caseSensitive": false }
            ],
            "explanation": "Psychology = Psyche (mind) + Logos (study)."
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "Structuralism used the method of introspection to analyze mental processes.",
            "points": 10,
            "correctAnswer": true,
            "explanation": "Structuralists like Wundt and Titchener used introspection (looking inward) to break down conscious experience."
        },
        {
            "id": "q6",
            "type": "multiple-choice",
            "question": "Which school of thought was influenced by Charles Darwin and focused on how the mind helps us adapt to the environment?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Structuralism", "isCorrect": false },
                { "id": "b", "text": "Functionalism", "isCorrect": true },
                { "id": "c", "text": "Gestalt Psychology", "isCorrect": false },
                { "id": "d", "text": "Behaviorism", "isCorrect": false }
            ],
            "explanation": "Functionalism, led by William James, focused on the function or purpose of consciousness and behavior."
        },
        {
            "id": "q7",
            "type": "multiple-select",
            "question": "Select all statements that apply to the Behavioral perspective:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Focuses on observable behavior", "isCorrect": true },
                { "id": "b", "text": "Emphasizes free will", "isCorrect": false },
                { "id": "c", "text": "Behavior is a product of learning", "isCorrect": true },
                { "id": "d", "text": "Study of internal mental states", "isCorrect": false }
            ],
            "partialCredit": true
        },
        {
            "id": "q8",
            "type": "multiple-choice",
            "question": "Gestalt psychology is best summarized by which phrase?",
            "points": 10,
            "options": [
                { "id": "a", "text": "The mind is a blank slate", "isCorrect": false },
                { "id": "b", "text": "The whole is greater than the sum of its parts", "isCorrect": true },
                { "id": "c", "text": "Survival of the fittest", "isCorrect": false },
                { "id": "d", "text": "The unconscious drives behavior", "isCorrect": false }
            ],
            "explanation": "Gestalt psychologists argued that perception involves meaningful wholes, not just isolated sensations."
        },
        {
            "id": "q9",
            "type": "ordering",
            "question": "Order these historical schools/perspectives from earliest to latest:",
            "points": 10,
            "items": [
                { "id": "i1", "text": "Structuralism (Wundt)", "correctPosition": 1 },
                { "id": "i2", "text": "Functionalism (James)", "correctPosition": 2 },
                { "id": "i3", "text": "Behaviorism (Watson)", "correctPosition": 3 },
                { "id": "i4", "text": "Cognitive Psychology", "correctPosition": 4 }
            ]
        }
    ]
});