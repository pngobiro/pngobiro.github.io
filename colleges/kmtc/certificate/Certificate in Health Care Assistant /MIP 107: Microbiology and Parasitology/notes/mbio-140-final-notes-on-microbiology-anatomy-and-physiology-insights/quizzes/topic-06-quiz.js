window.registerQuiz('topic-06-quiz', {
    "schemaVersion": "1.1",
    "quizId": "topic-06-quiz",
    "metadata": {
        "title": "Virology Quiz",
        "description": "Test your knowledge on viral structure and life cycles.",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate",
        "allowRetry": true
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which is NOT a basic form of a virus?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Complex", "isCorrect": false },
                { "id": "b", "text": "Naked", "isCorrect": false },
                { "id": "c", "text": "Enveloped", "isCorrect": false },
                { "id": "d", "text": "Flagellated", "isCorrect": true }
            ],
            "explanation": "Viruses do not have flagella; they are acellular."
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "Viral families end in the suffix __1__, while genera end in __2__.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["-viridae", "viridae"], "caseSensitive": false },
                { "id": "2", "acceptedAnswers": ["-virus", "virus"], "caseSensitive": false }
            ],
            "explanation": "-viridae for family, -virus for genus."
        },
        {
            "id": "q3",
            "type": "ordering",
            "question": "Order the viral life cycle steps:",
            "points": 20,
            "items": [
                { "id": "1", "text": "Adsorption", "correctPosition": 1 },
                { "id": "2", "text": "Penetration", "correctPosition": 2 },
                { "id": "3", "text": "Uncoating", "correctPosition": 3 },
                { "id": "4", "text": "Replication", "correctPosition": 4 },
                { "id": "5", "text": "Assembly", "correctPosition": 5 },
                { "id": "6", "text": "Release", "correctPosition": 6 }
            ]
        },
        {
            "id": "q4",
            "type": "matching",
            "question": "Match transmission mode with example:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Parenteral", "right": "Hepatitis B" },
                { "id": "p2", "left": "Airborne", "right": "Chicken pox" },
                { "id": "p3", "left": "Enteral", "right": "Hepatitis A" },
                { "id": "p4", "left": "Vector", "right": "West Nile" }
            ]
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "What does 'viral tropism' mean?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Viral movement", "isCorrect": false },
                { "id": "b", "text": "Viral tissue specificity", "isCorrect": true },
                { "id": "c", "text": "Viral reproduction", "isCorrect": false },
                { "id": "d", "text": "Viral shape", "isCorrect": false }
            ],
            "explanation": "Tropism refers to the specific host tissues a virus infects."
        }
    ]
});