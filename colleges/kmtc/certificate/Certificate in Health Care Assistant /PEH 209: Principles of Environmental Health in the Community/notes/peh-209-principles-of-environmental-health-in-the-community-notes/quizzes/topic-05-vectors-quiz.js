// quizzes/topic-05-vectors-quiz.js
window.registerQuiz('topic-05-vectors-quiz', {
    "schemaVersion": "1.0",
    "quizId": "topic-05-vectors-quiz",
    "metadata": {
        "title": "Vector Control Quiz",
        "description": "Test understanding of vectors, rodents, and diseases they transmit.",
        "topicId": "topic-05-vectors",
        "difficulty": "intermediate",
        "estimatedTime": 10,
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
            "type": "multiple-choice",
            "question": "Which mosquito transmits Yellow Fever and Dengue Fever?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Anopheles", "isCorrect": false },
                { "id": "b", "text": "Culex", "isCorrect": false },
                { "id": "c", "text": "Aedes", "isCorrect": true },
                { "id": "d", "text": "Mansonia", "isCorrect": false }
            ],
            "explanation": "Aedes mosquitoes transmit Yellow Fever and Dengue. Anopheles transmits Malaria."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the vector to the disease:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Tsetse Fly", "right": "Sleeping Sickness (Trypanosomiasis)" },
                { "id": "p2", "left": "Black Fly", "right": "River Blindness (Onchocerciasis)" },
                { "id": "p3", "left": "Sand Fly", "right": "Leishmaniasis" },
                { "id": "p4", "left": "House Fly", "right": "Typhoid / Diarrhea (Mechanical)" }
            ]
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "Which type of transmission involves the vector carrying pathogens on its body without development?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Biological transmission", "isCorrect": false },
                { "id": "b", "text": "Mechanical transmission", "isCorrect": true },
                { "id": "c", "text": "Transovarian transmission", "isCorrect": false },
                { "id": "d", "text": "Cyclodevelopmental transmission", "isCorrect": false }
            ],
            "explanation": "Mechanical transmission is when the vector acts as a carrier (e.g. house fly)."
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "The Norway rat is scientifically known as __b1__.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["Rattus norvegicus"], "caseSensitive": false }
            ],
            "explanation": "Rattus norvegicus is the Norway/Brown/Sewer rat."
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "Bed bugs are known vectors for transmitting Typhoid fever.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "False. Bed bugs cause nuisance and itching, but are not primary vectors for Typhoid. House flies and cockroaches transmit Typhoid."
        }
    ]
});