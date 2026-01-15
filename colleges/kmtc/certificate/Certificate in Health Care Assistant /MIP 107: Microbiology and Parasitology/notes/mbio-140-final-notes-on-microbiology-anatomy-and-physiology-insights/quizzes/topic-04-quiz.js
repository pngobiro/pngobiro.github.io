window.registerQuiz('topic-04-quiz', {
    "schemaVersion": "1.1",
    "quizId": "topic-04-quiz",
    "metadata": {
        "title": "Phycology (Algae) Quiz",
        "description": "Test your knowledge on algae characteristics and major groups.",
        "difficulty": "intermediate",
        "estimatedTime": 10,
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
            "question": "What is the primary component of the cell wall in Diatoms?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Cellulose", "isCorrect": false },
                { "id": "b", "text": "Silica", "isCorrect": true },
                { "id": "c", "text": "Chitin", "isCorrect": false },
                { "id": "d", "text": "Calcium Carbonate", "isCorrect": false }
            ],
            "explanation": "Diatoms have silica in their cell walls."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "Which group of algae is an important source of alginate?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Red Algae", "isCorrect": false },
                { "id": "b", "text": "Green Algae", "isCorrect": false },
                { "id": "c", "text": "Brown Algae", "isCorrect": true },
                { "id": "d", "text": "Diatoms", "isCorrect": false }
            ],
            "explanation": "Brown algae (Phaeophyta) are the source of alginate."
        },
        {
            "id": "q3",
            "type": "matching",
            "question": "Match the algae group with its pigment:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Green Algae", "right": "Chlorophyll a & b" },
                { "id": "p2", "left": "Brown Algae", "right": "Fucoxanthin" },
                { "id": "p3", "left": "Red Algae", "right": "Phycobilins" }
            ]
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "A lichen is a symbiotic alliance between a fungus and an __1__.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["alga", "algae"], "caseSensitive": false }
            ],
            "explanation": "Lichens are a symbiosis of a fungus and an alga (or cyanobacterium)."
        },
        {
            "id": "q5",
            "type": "multiple-select",
            "question": "Select the correct ecological roles of algae:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Primary producers", "isCorrect": true },
                { "id": "b", "text": "Global cycling of C, N, and O2", "isCorrect": true },
                { "id": "c", "text": "Primary decomposers", "isCorrect": false },
                { "id": "d", "text": "Basis of complex communities", "isCorrect": true }
            ],
            "partialCredit": true,
            "explanation": "Algae are primary producers and vital for element cycling."
        }
    ]
});