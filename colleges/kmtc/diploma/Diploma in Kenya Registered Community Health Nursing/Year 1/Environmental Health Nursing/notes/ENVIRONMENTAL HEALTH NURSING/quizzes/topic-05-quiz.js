registerQuiz("topic-05-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-05-quiz",
    "metadata": {
        "title": "Air & Pollution Quiz",
        "topicId": "topic-05",
        "difficulty": "intermediate",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2025-12-25T12:00:00Z"
    },
    "questions": [
        {
            "id": "t5-q1",
            "type": "multiple-choice",
            "question": "Which type of ventilation utilizes temperature differences (buoyancy) to move air?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Stack Ventilation", "isCorrect": true },
                { "id": "b", "text": "Cross Ventilation", "isCorrect": false },
                { "id": "c", "text": "Spot Ventilation", "isCorrect": false },
                { "id": "d", "text": "Balanced Ventilation", "isCorrect": false }
            ],
            "explanation": "Buoyancy-driven ventilation, or stack ventilation, relies on warm air rising and exiting through high openings."
        },
        {
            "id": "t5-q2",
            "type": "fill-blank",
            "question": "The artificial warming of water bodies that reduces dissolved oxygen and kills fish is called __b1__ pollution.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["thermal", "Thermal"], "caseSensitive": false }
            ],
            "explanation": "Thermal pollution is caused by discharging hot water (e.g., from power plants) into water bodies."
        },
        {
            "id": "t5-q3",
            "type": "multiple-select",
            "question": "Select the Criteria Air Pollutants defined by the EPA:",
            "points": 15,
            "options": [
                { "id": "a", "text": "Lead", "isCorrect": true },
                { "id": "b", "text": "Ozone", "isCorrect": true },
                { "id": "c", "text": "Nitrogen Dioxide", "isCorrect": true },
                { "id": "d", "text": "Carbon Dioxide", "isCorrect": false }
            ],
            "explanation": "The EPA criteria pollutants are Lead, Ozone, Particulate Matter, Nitrogen Dioxide, Carbon Monoxide, and Sulfur Dioxide. CO2 is a greenhouse gas but not a 'criteria' pollutant in this context."
        }
    ]
});