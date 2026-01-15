registerQuiz("topic-07-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-07-quiz",
    "metadata": {
        "title": "Motivation & Emotion Quiz",
        "description": "Evaluate understanding of motives, Maslow's hierarchy, and theories of emotion.",
        "topicId": "topic-07",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2026-01-10T12:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "fill-blank",
            "question": "The tendency of the body to maintain a balanced internal state is called __1__.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["homeostasis", "Homeostasis"], "caseSensitive": false }
            ]
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "Which type of motivation involves performing an act because it is satisfying in itself (e.g., fun)?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Extrinsic", "isCorrect": false },
                { "id": "b", "text": "Intrinsic", "isCorrect": true },
                { "id": "c", "text": "Primary", "isCorrect": false },
                { "id": "d", "text": "Secondary", "isCorrect": false }
            ]
        },
        {
            "id": "q3",
            "type": "ordering",
            "question": "Order Maslow's Hierarchy of Needs from Bottom (1) to Top (5):",
            "points": 20,
            "items": [
                { "id": "i1", "text": "Physiological Needs", "correctPosition": 1 },
                { "id": "i2", "text": "Safety Needs", "correctPosition": 2 },
                { "id": "i3", "text": "Love & Belonging", "correctPosition": 3 },
                { "id": "i4", "text": "Esteem Needs", "correctPosition": 4 },
                { "id": "i5", "text": "Self-Actualization", "correctPosition": 5 }
            ]
        },
        {
            "id": "q4",
            "type": "matching",
            "question": "Match the emotion theory to its premise:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "James-Lange", "right": "We feel sad because we cry (Body reacts first)" },
                { "id": "p2", "left": "Cannon-Bard", "right": "Body reaction and emotion happen simultaneously" },
                { "id": "p3", "left": "Schachter-Singer", "right": "Physiological arousal + Cognitive labeling" }
            ]
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "Which is an example of an Affiliative Motive?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Desire for power", "isCorrect": false },
                { "id": "b", "text": "Desire to be with others (Gregariousness)", "isCorrect": true },
                { "id": "c", "text": "Desire for achievement", "isCorrect": false },
                { "id": "d", "text": "Hunger", "isCorrect": false }
            ]
        },
        {
            "id": "q6",
            "type": "true-false",
            "question": "According to Plutchik's wheel, Joy is the opposite of Anger.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "Joy is the opposite of Sadness. Fear is the opposite of Anger."
        },
        {
            "id": "q7",
            "type": "multiple-choice",
            "question": "Primary drives are:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Learned and social", "isCorrect": false },
                { "id": "b", "text": "Unlearned and biological", "isCorrect": true },
                { "id": "c", "text": "Aquired through interaction", "isCorrect": false },
                { "id": "d", "text": "Related to self-esteem", "isCorrect": false }
            ]
        }
    ]
});