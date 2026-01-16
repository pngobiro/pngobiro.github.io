registerQuiz("topic-02-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-02-quiz",
    "metadata": {
        "title": "Water and Sanitation",
        "description": "Test your knowledge on water sources, purification, and waste disposal methods.",
        "difficulty": "intermediate",
        "estimatedTime": 5,
        "passingScore": 70
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "always",
        "allowRetry": true
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which of the following diseases is classified as a 'water-washed' (water scarce) disease?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Cholera", "isCorrect": false },
                { "id": "opt2", "text": "Scabies", "isCorrect": true },
                { "id": "opt3", "text": "Malaria", "isCorrect": false },
                { "id": "opt4", "text": "Bilharzia", "isCorrect": false }
            ],
            "explanation": "Water-washed diseases like scabies and trachoma occur due to lack of adequate water for personal hygiene."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "When treating water with chlorine, what is the minimum recommended contact time before consumption?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "5 minutes", "isCorrect": false },
                { "id": "opt2", "text": "10 minutes", "isCorrect": false },
                { "id": "opt3", "text": "30 minutes", "isCorrect": true },
                { "id": "opt4", "text": "60 minutes", "isCorrect": false }
            ],
            "explanation": "A minimum contact period of 30 minutes is required for chlorine to effectively kill pathogenic organisms."
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "Which type of latrine is most appropriate for temporary use, such as in work camps?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "VIP Latrine", "isCorrect": false },
                { "id": "opt2", "text": "Septic Tank", "isCorrect": false },
                { "id": "opt3", "text": "Trench Latrine", "isCorrect": true },
                { "id": "opt4", "text": "Borehole Latrine", "isCorrect": false }
            ],
            "explanation": "Trench latrines are dug for temporary use, such as in camps, where a row of holes is partitioned over a trench."
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "Which of the following represents the correct elements of the '4F connection' in fecal-oral transmission?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Faeces, Flies, Fingers, Food", "isCorrect": true },
                { "id": "opt2", "text": "Faeces, Fish, Fruit, Food", "isCorrect": false },
                { "id": "opt3", "text": "Flies, Fleas, Fingers, Feet", "isCorrect": false },
                { "id": "opt4", "text": "Food, Fluids, Fingers, Faces", "isCorrect": false }
            ],
            "explanation": "The 4F connection describes transmission from Faeces via Flies, Fingers (or Feet/Fields) to Food."
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "Which water source is naturally the cleanest if collected properly from a clean surface?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "River water", "isCorrect": false },
                { "id": "opt2", "text": "Rain water", "isCorrect": true },
                { "id": "opt3", "text": "Lake water", "isCorrect": false },
                { "id": "opt4", "text": "Dam water", "isCorrect": false }
            ],
            "explanation": "Rain water is relatively pure and clean, provided the collection surface (roof/gutters) and storage are clean."
        }
    ]
});