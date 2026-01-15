registerQuiz("topic-04-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-04-quiz",
    "metadata": {
        "title": "Treatment Modalities",
        "description": "Test understanding of surgery, radiation safety, and chemotherapy management.",
        "topicId": "topic-04",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 75,
        "createdAt": "2025-12-27T10:00:00Z"
    },
    "questions": [
        {
            "id": "t4-q1",
            "type": "multiple-select",
            "question": "Select the three principles of radiation protection (DTS).",
            "points": 15,
            "options": [
                { "id": "a", "text": "Distance", "isCorrect": true },
                { "id": "b", "text": "Diet", "isCorrect": false },
                { "id": "c", "text": "Time", "isCorrect": true },
                { "id": "d", "text": "Shielding", "isCorrect": true },
                { "id": "e", "text": "Sterilization", "isCorrect": false }
            ],
            "explanation": "The principles are Distance (maximize), Time (minimize), and Shielding (use lead)."
        },
        {
            "id": "t4-q2",
            "type": "multiple-choice",
            "question": "For a patient with a sealed internal radiation source (brachytherapy), which statement is TRUE regarding secretions?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Urine and sweat are radioactive.", "isCorrect": false },
                { "id": "b", "text": "Secretions are NOT radioactive.", "isCorrect": true },
                { "id": "c", "text": "Vomitus is highly radioactive.", "isCorrect": false },
                { "id": "d", "text": "All body fluids require lead containment.", "isCorrect": false }
            ],
            "explanation": "In sealed sources, the isotope is contained. The client emits radiation, but their secretions (urine, sweat, etc.) are NOT radioactive."
        },
        {
            "id": "t4-q3",
            "type": "fill-blank",
            "question": "The time after chemotherapy when blood cell counts are at their lowest point is called the __b1__.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["nadir"], "caseSensitive": false }
            ],
            "explanation": "The Nadir usually occurs 7-14 days after administration."
        },
        {
            "id": "t4-q4",
            "type": "multiple-choice",
            "question": "Which nursing intervention is appropriate for a patient with radiation-induced stomatitis?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Use an alcohol-based mouthwash", "isCorrect": false },
                { "id": "b", "text": "Serve hot, spicy foods", "isCorrect": false },
                { "id": "c", "text": "Perform saline rinses every 2 hours", "isCorrect": true },
                { "id": "d", "text": "Restrict fluids", "isCorrect": false }
            ],
            "explanation": "Saline is gentle. Alcohol and hot/spicy foods irritate the mucosa."
        },
        {
            "id": "t4-q5",
            "type": "true-false",
            "question": "Palliative surgery is performed to cure the cancer by removing all tumor cells.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "Palliative surgery is done to relieve symptoms (pain, obstruction) and improve quality of life, not to cure."
        }
    ]
});