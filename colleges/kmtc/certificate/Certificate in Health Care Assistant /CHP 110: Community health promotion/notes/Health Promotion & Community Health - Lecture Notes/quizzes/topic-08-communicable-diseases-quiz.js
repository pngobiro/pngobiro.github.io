registerQuiz("topic-08-communicable-diseases-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-08-communicable-diseases-quiz",
    "metadata": {
        "title": "Communicable Diseases Control",
        "description": "Test your knowledge of disease transmission, epidemiology, and control measures.",
        "topicId": "topic-08-communicable-diseases",
        "difficulty": "advanced",
        "estimatedTime": 20,
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
            "type": "ordering",
            "question": "Arrange the links in the Disease Transmission Cycle:",
            "points": 15,
            "items": [
                { "id": "1", "text": "Reservoir/Source", "correctPosition": 1 },
                { "id": "2", "text": "Route of Transmission", "correctPosition": 2 },
                { "id": "3", "text": "Susceptible Host", "correctPosition": 3 }
            ]
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the term with its definition:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Endemic", "right": "Disease constantly present in an area" },
                { "id": "p2", "left": "Epidemic", "right": "Rapid outbreak affecting many people" },
                { "id": "p3", "left": "Pandemic", "right": "Disease spread worldwide" },
                { "id": "p4", "left": "Sporadic", "right": "Occurring here and there without pattern" }
            ]
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "In the Epidemiological Triad, what are the three components?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Source, Mode, Host", "isCorrect": false },
                { "id": "b", "text": "Agent, Host, Environment", "isCorrect": true },
                { "id": "c", "text": "Doctor, Nurse, Patient", "isCorrect": false },
                { "id": "d", "text": "Virus, Bacteria, Fungi", "isCorrect": false }
            ],
            "explanation": "The triad consists of the Agent (organism), the Host (person), and the Environment."
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "Malaria is transmitted by the infected female __1__ mosquito.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["anopheles", "Anopheles"], "caseSensitive": false }
            ],
            "explanation": "The Anopheles mosquito is the specific vector for Malaria."
        },
        {
            "id": "q5",
            "type": "multiple-select",
            "question": "Which of the following are examples of PRIMARY prevention? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Immunization", "isCorrect": true },
                { "id": "b", "text": "Safe water supply", "isCorrect": true },
                { "id": "c", "text": "Treatment of cases", "isCorrect": false },
                { "id": "d", "text": "Rehabilitation", "isCorrect": false }
            ],
            "explanation": "Primary prevention prevents the disease from occurring (e.g., vaccines, hygiene). Treatment is Secondary/Tertiary."
        },
        {
            "id": "q6",
            "type": "multiple-choice",
            "question": "Which of the following diseases is water-borne?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Tuberculosis", "isCorrect": false },
                { "id": "b", "text": "Cholera", "isCorrect": true },
                { "id": "c", "text": "Malaria", "isCorrect": false },
                { "id": "d", "text": "Measles", "isCorrect": false }
            ],
            "explanation": "Cholera is a classic water-borne disease transmitted via contaminated water."
        }
    ]
});