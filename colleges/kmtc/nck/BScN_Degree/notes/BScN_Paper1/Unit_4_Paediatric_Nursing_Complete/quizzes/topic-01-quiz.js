registerQuiz("topic-01-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-01-quiz",
    "metadata": {
        "title": "Health Promotion and Disease Prevention Quiz",
        "description": "Test your knowledge on child growth, development, and immunisation practices.",
        "topicId": "topic-01",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2026-01-11T00:00:00Z",
        "tags": ["growth", "development", "immunisation", "vaccines"]
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
            "question": "Which of the following best defines 'Growth' in a paediatric context?",
            "points": 10,
            "options": [
                { "id": "a", "text": "A qualitative change from a lower to a more advanced stage of complexity", "isCorrect": false },
                { "id": "b", "text": "A change in body structure involving quantity, such as height and size", "isCorrect": true },
                { "id": "c", "text": "The acquisition of new skills and behaviors", "isCorrect": false },
                { "id": "d", "text": "The physiological process occurring from conception until puberty", "isCorrect": false }
            ],
            "explanation": "Growth implies a change in quantity, such as height and size. Development involves a qualitative change to a more advanced stage of complexity."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the developmental warning sign with the corresponding age limit.",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Not smiling at mother", "right": "8 weeks" },
                { "id": "p2", "left": "Poor head control", "right": "6 months" },
                { "id": "p3", "left": "Not crawling", "right": "12 months" },
                { "id": "p4", "left": "Not walking independently", "right": "18 months" }
            ],
            "explanation": "These are critical milestones. Delay beyond these points warrants further assessment."
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "Which of the following factors influence growth and development? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Good nutrition", "isCorrect": true },
                { "id": "b", "text": "Hormones", "isCorrect": true },
                { "id": "c", "text": "Genetic disposition", "isCorrect": true },
                { "id": "d", "text": "Environmental influence", "isCorrect": true }
            ],
            "partialCredit": true,
            "explanation": "All listed factors (Nutrition, Hormones, Genetics, and Environment) play a crucial role in a child's growth and development."
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "The Pentavalent vaccine protects against Diphtheria, Pertussis, Tetanus, Hepatitis B, and Influenza.",
            "points": 5,
            "correctAnswer": true,
            "explanation": "Since 2002, Kenya uses the Pentavalent vaccine which combines protection against these five diseases."
        },
        {
            "id": "q5",
            "type": "fill-blank",
            "question": "The __b1__ vaccine is most sensitive to heat, while __b2__ is the least sensitive.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["polio", "Polio", "OPV"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["tetanus", "Tetanus", "TT"], "caseSensitive": false }
            ],
            "explanation": "Polio vaccine is the most heat-sensitive, while Tetanus toxoid is the most heat-stable."
        },
        {
            "id": "q6",
            "type": "ordering",
            "question": "Arrange the vaccines in order of their sensitivity to heat (Most sensitive at the top).",
            "points": 15,
            "items": [
                { "id": "i1", "text": "Polio", "correctPosition": 1 },
                { "id": "i2", "text": "Measles", "correctPosition": 2 },
                { "id": "i3", "text": "DPT", "correctPosition": 3 },
                { "id": "i4", "text": "BCG", "correctPosition": 4 },
                { "id": "i5", "text": "Tetanus", "correctPosition": 5 }
            ],
            "explanation": "The order of heat sensitivity is Polio > Measles > DPT > BCG > Tetanus."
        },
        {
            "id": "q7",
            "type": "image-based",
            "question": "Identify the type of immunity illustrated in the diagram.",
            "points": 10,
            "imageUrl": "../assets/images/image-20260111-c6525267.jpeg",
            "imageAlt": "Diagram of the Immune System showing Antibodies and Antigens",
            "hotspots": [
                { "id": "h1", "x": 50, "y": 50, "radius": 100, "label": "Whole Diagram", "isCorrect": true }
            ],
            "options": [
                { "id": "a", "text": "Humoral Immune System (Antibodies)", "isCorrect": true },
                { "id": "b", "text": "Cell Mediated Immune System (T-cells)", "isCorrect": false }
            ],
            "explanation": "The Humoral Immune System involves antibodies produced by B-lymphocytes circulating in the body."
        },
        {
            "id": "q8",
            "type": "short-answer",
            "question": "Explain the concept of the 'Cold Chain'.",
            "points": 15,
            "keywords": ["temperature", "storage", "transport", "manufacturer", "vaccine", "potency"],
            "minKeywords": 2,
            "modelAnswer": "The cold chain is the system of maintaining and monitoring proper temperature conditions for vaccines from the time of manufacture until administration to the patient, ensuring potency is preserved.",
            "maxLength": 200
        }
    ]
});