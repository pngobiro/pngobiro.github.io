registerQuiz("topic-06-hiv-aids-foundations-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-06-hiv-aids-foundations-quiz",
    "metadata": {
        "title": "HIV/AIDS Foundations",
        "description": "Test your knowledge of HIV biology, immunology, and transmission.",
        "topicId": "topic-06-hiv-aids-foundations",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2026-01-12T00:00:00Z"
    },
    "settings": {
        "shuffleQuestions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "What does the 'I' in HIV stand for?",
            "points": 5,
            "options": [
                { "id": "a", "text": "Infectious", "isCorrect": false },
                { "id": "b", "text": "Immune", "isCorrect": false },
                { "id": "c", "text": "Immunodeficiency", "isCorrect": true },
                { "id": "d", "text": "International", "isCorrect": false }
            ],
            "explanation": "Human Immunodeficiency Virus."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the origin theory with its description:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Monkey Meat Theory", "right": "SIV crossed to humans via consumption of primate meat" },
                { "id": "p2", "left": "Conspiracy Theory", "right": "Biological weapon manufactured to wipe out populations" },
                { "id": "p3", "left": "Accidental Emergence", "right": "Contamination of polio/smallpox vaccines" },
                { "id": "p4", "left": "Comet and Curse", "right": "Viral material from space or divine punishment" }
            ]
        },
        {
            "id": "q3",
            "type": "ordering",
            "question": "Order the steps of HIV viral replication:",
            "points": 20,
            "items": [
                { "id": "1", "text": "Attachment/Fusion", "correctPosition": 1 },
                { "id": "2", "text": "Transcription (RNA to DNA)", "correctPosition": 2 },
                { "id": "3", "text": "Integration (into host nucleus)", "correctPosition": 3 },
                { "id": "4", "text": "Cleavage", "correctPosition": 4 },
                { "id": "5", "text": "Packaging", "correctPosition": 5 },
                { "id": "6", "text": "Budding and Maturation", "correctPosition": 6 }
            ]
        },
        {
            "id": "q4",
            "type": "multiple-select",
            "question": "Which of the following are VALID modes of HIV transmission? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Unprotected sexual intercourse", "isCorrect": true },
                { "id": "b", "text": "Mosquito bites", "isCorrect": false },
                { "id": "c", "text": "Sharing utensils", "isCorrect": false },
                { "id": "d", "text": "Mother to child (breastfeeding)", "isCorrect": true },
                { "id": "e", "text": "Blood transfusion", "isCorrect": true }
            ],
            "explanation": "HIV is NOT transmitted by mosquitoes or casual contact like sharing utensils."
        },
        {
            "id": "q5",
            "type": "fill-blank",
            "question": "The __1__ immunity is the body's first line of defense, present from birth (e.g., skin, mucus).",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["innate", "Innate"], "caseSensitive": false }
            ],
            "explanation": "Innate immunity is natural and non-specific."
        }
    ]
});