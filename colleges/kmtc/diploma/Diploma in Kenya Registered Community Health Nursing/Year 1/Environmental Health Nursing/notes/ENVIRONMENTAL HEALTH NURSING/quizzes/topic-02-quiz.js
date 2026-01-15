registerQuiz("topic-02-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-02-quiz",
    "metadata": {
        "title": "Food Safety & Hygiene Quiz",
        "description": "Test your knowledge on preservation methods, pasteurization, and foodborne illnesses.",
        "topicId": "topic-02",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 75,
        "createdAt": "2025-12-25T12:00:00Z"
    },
    "questions": [
        {
            "id": "t2-q1",
            "type": "multiple-choice",
            "question": "Which method of fermentation produces wine and beer?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Lactic acid fermentation", "isCorrect": false },
                { "id": "b", "text": "Acetic acid fermentation", "isCorrect": false },
                { "id": "c", "text": "Ethanol fermentation", "isCorrect": true },
                { "id": "d", "text": "Alkaline fermentation", "isCorrect": false }
            ],
            "explanation": "Ethanol (alcohol) fermentation breaks down sugars into alcohol and carbon dioxide."
        },
        {
            "id": "t2-q2",
            "type": "matching",
            "question": "Match the Pasteurization technique with its parameters:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Flash Pasteurization (HTST)", "right": "72°C to 74°C for 15-20 seconds" },
                { "id": "p2", "left": "Batch Pasteurization (LTLT)", "right": "63°C for 30 minutes" },
                { "id": "p3", "left": "Ultra-High Temperature (UHT)", "right": "135°C to 140°C for 2-4 seconds" }
            ],
            "explanation": "HTST is high temp/short time; LTLT is low temp/long time; UHT is extreme heat for very short time."
        },
        {
            "id": "t2-q3",
            "type": "multiple-select",
            "question": "Select all symptoms commonly associated with Botulism (Clostridium):",
            "points": 10,
            "options": [
                { "id": "a", "text": "Abdominal pain", "isCorrect": true },
                { "id": "b", "text": "Watery diarrhea", "isCorrect": true },
                { "id": "c", "text": "Hyperactivity", "isCorrect": false },
                { "id": "d", "text": "Blood or pus in stool", "isCorrect": true }
            ],
            "explanation": "Clostridium infection causes abdominal pain, watery diarrhea, and in severe cases blood/pus in stool."
        },
        {
            "id": "t2-q4",
            "type": "image-based",
            "question": "Identify the method of food preservation shown in the diagram:",
            "points": 10,
            "imageUrl": "../assets/images/image-20251225-e95b9be4.jpeg",
            "imageAlt": "Diagram showing various preservation methods",
            "options": [
                { "id": "a", "text": "Canning", "isCorrect": false },
                { "id": "b", "text": "Drying/Dehydration", "isCorrect": false },
                { "id": "c", "text": "General Preservation Methods", "isCorrect": true },
                { "id": "d", "text": "Irradiation", "isCorrect": false }
            ],
            "explanation": "The image depicts a collection of preservation methods."
        }
    ]
});