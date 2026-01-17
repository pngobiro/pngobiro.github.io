registerQuiz("topic-01-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-01-quiz",
    "metadata": {
        "title": "Patterns of Communicable Diseases",
        "description": "Test your knowledge on endemic vs epidemic patterns, infection stages, and transmission.",
        "topicId": "topic-01",
        "difficulty": "beginner",
        "estimatedTime": 5,
        "passingScore": 70,
        "createdAt": "2026-01-16T00:00:00Z"
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
            "question": "Which term describes a disease occurring in a population at a constant rate over several years?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Epidemic", "isCorrect": false },
                { "id": "b", "text": "Endemic", "isCorrect": true },
                { "id": "c", "text": "Pandemic", "isCorrect": false },
                { "id": "d", "text": "Sporadic", "isCorrect": false }
            ],
            "explanation": "An endemic disease occurs at a constant, usually low, rate in a specific population or area."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "What is the incubation period?",
            "points": 10,
            "options": [
                { "id": "a", "text": "The time when symptoms are most severe", "isCorrect": false },
                { "id": "b", "text": "The time between infection and the appearance of signs/symptoms", "isCorrect": true },
                { "id": "c", "text": "The recovery phase", "isCorrect": false },
                { "id": "d", "text": "The time when a person is a carrier but not sick", "isCorrect": false }
            ],
            "explanation": "The incubation period is the silent interval between the entry of the organism and the onset of clinical symptoms."
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "Which of the following are examples of common epidemic diseases in Kenya? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Cholera", "isCorrect": true },
                { "id": "b", "text": "Highland Malaria", "isCorrect": true },
                { "id": "c", "text": "Diabetes", "isCorrect": false },
                { "id": "d", "text": "Typhoid Fever", "isCorrect": true }
            ],
            "explanation": "Cholera, Highland Malaria, and Typhoid are infectious diseases prone to epidemics. Diabetes is non-communicable."
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "A 'carrier' is a person with a sub-clinical infection who can infect others.",
            "points": 5,
            "correctAnswer": true,
            "explanation": "Carriers harbor the organism without showing overt symptoms (sub-clinical) but are capable of transmitting the disease."
        },
        {
            "id": "q5",
            "type": "ordering",
            "question": "Arrange the parts of a typical disease transmission cycle in order of flow:",
            "points": 10,
            "items": [
                { "id": "1", "text": "Source / Reservoir", "correctPosition": 1 },
                { "id": "2", "text": "Transmission Route", "correctPosition": 2 },
                { "id": "3", "text": "Susceptible Host", "correctPosition": 3 }
            ],
            "explanation": "The organism leaves the Source, travels via a Route, and enters a Susceptible Host."
        }
    ]
});