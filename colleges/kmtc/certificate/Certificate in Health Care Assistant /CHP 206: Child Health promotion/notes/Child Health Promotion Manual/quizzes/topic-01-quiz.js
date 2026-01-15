registerQuiz("topic-01-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-01-quiz",
    "metadata": {
        "title": "Child Immunization Assessment",
        "description": "Test your knowledge on KEPI schedules, vaccine administration, Vitamin A supplementation, and deworming.",
        "topicId": "topic-01",
        "difficulty": "beginner",
        "estimatedTime": 15,
        "passingScore": 80,
        "createdAt": "2022-05-20T00:00:00Z",
        "tags": ["immunization", "kepi", "vaccines", "vitamin-a"]
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
            "question": "At what age is the Measles vaccine typically administered according to the KEPI schedule?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Birth", "isCorrect": false },
                { "id": "b", "text": "6 Weeks", "isCorrect": false },
                { "id": "c", "text": "9 Months", "isCorrect": true },
                { "id": "d", "text": "14 Weeks", "isCorrect": false }
            ],
            "explanation": "Measles vaccine is given at 9 months. It protects against the highly contagious measles virus."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the vaccine with the disease it prevents:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "BCG", "right": "Tuberculosis" },
                { "id": "p2", "left": "OPV", "right": "Poliomyelitis" },
                { "id": "p3", "left": "PCV 10", "right": "Pneumonia/Meningitis" },
                { "id": "p4", "left": "Pentavalent", "right": "Diphtheria/Pertussis/Tetanus/HepB/Hib" }
            ]
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "A fully immunized child is one who has received all prescribed antigens and at least __b1__ dose(s) of Vitamin A before the first birthday.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["one", "1"], "caseSensitive": false }
            ],
            "explanation": "To be considered fully immunized, a child must receive all antigens plus at least one dose of Vitamin A before turning 1 year old."
        },
        {
            "id": "q4",
            "type": "multiple-select",
            "question": "Which of the following statements about the 'Cold Chain' are correct? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "It ensures vaccines are maintained at required low temperatures.", "isCorrect": true },
                { "id": "b", "text": "It only applies to transport by air.", "isCorrect": false },
                { "id": "c", "text": "It includes equipment like refrigerators, cold-boxes, and vaccine carriers.", "isCorrect": true },
                { "id": "d", "text": "It starts from the point of production until it reaches the consumer.", "isCorrect": true }
            ],
            "partialCredit": true,
            "explanation": "The cold chain covers the entire journey of the vaccine (production to user) and involves various equipment to maintain temperature."
        },
        {
            "id": "q5",
            "type": "ordering",
            "question": "Order the administration of OPV (Oral Polio Vaccine) in a child's life:",
            "points": 10,
            "items": [
                { "id": "i1", "text": "Birth Dose", "correctPosition": 1 },
                { "id": "i2", "text": "6th Week", "correctPosition": 2 },
                { "id": "i3", "text": "10th Week", "correctPosition": 3 },
                { "id": "i4", "text": "14th Week", "correctPosition": 4 }
            ]
        },
        {
            "id": "q6",
            "type": "true-false",
            "question": "Vitamin A supplementation for children under 5 years is given every 3 months.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "False. Vitamin A is given every 6 months (e.g., 6 months, 12 months, 18 months, etc.)."
        },
        {
            "id": "q7",
            "type": "short-answer",
            "question": "What is the purpose of the Vaccine Vial Monitor (VVM)?",
            "points": 10,
            "keywords": ["heat", "exposure", "temperature", "color", "colour", "change", "discard", "monitor"],
            "minKeywords": 2,
            "modelAnswer": "It monitors cumulative heat exposure by changing color to warn health workers when a vaccine vial should be discarded.",
            "maxLength": 200
        }
    ]
});