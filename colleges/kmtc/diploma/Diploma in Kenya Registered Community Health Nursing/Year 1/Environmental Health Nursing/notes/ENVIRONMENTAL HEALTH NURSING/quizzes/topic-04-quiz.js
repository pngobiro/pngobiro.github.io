registerQuiz("topic-04-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-04-quiz",
    "metadata": {
        "title": "Housing & Sanitation Quiz",
        "topicId": "topic-04",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 75,
        "createdAt": "2025-12-25T12:00:00Z"
    },
    "questions": [
        {
            "id": "t4-q1",
            "type": "image-based",
            "question": "In the diagram of the Pit Latrine, click on the area representing the 'Squat Hole' or 'Aperture':",
            "points": 15,
            "imageUrl": "../assets/images/image-20251225-0591e8c4.jpeg",
            "imageAlt": "Diagram of Pit Latrine",
            "hotspots": [
                { "id": "h1", "x": 50, "y": 55, "radius": 8, "label": "Squat Hole", "isCorrect": true },
                { "id": "h2", "x": 50, "y": 85, "radius": 15, "label": "Pit", "isCorrect": false },
                { "id": "h3", "x": 50, "y": 20, "radius": 15, "label": "Roof", "isCorrect": false }
            ],
            "explanation": "The squat hole is located in the center of the slab."
        },
        {
            "id": "t4-q2",
            "type": "multiple-choice",
            "question": "What is the minimum recommended depth for a standard pit latrine?",
            "points": 10,
            "options": [
                { "id": "a", "text": "2 meters", "isCorrect": false },
                { "id": "b", "text": "3 meters", "isCorrect": false },
                { "id": "c", "text": "5 meters", "isCorrect": true },
                { "id": "d", "text": "10 meters", "isCorrect": false }
            ],
            "explanation": "The pit should be dug to a minimum depth of 5m depending on soil nature."
        },
        {
            "id": "t4-q3",
            "type": "matching",
            "question": "Match the sanitation system with its characteristic:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "VIP Latrine", "right": "Has a vent pipe with fly screen" },
                { "id": "p2", "left": "Pour Flush", "right": "Uses water seal trap" },
                { "id": "p3", "left": "Bucket Latrine", "right": "Uses night soil collection" },
                { "id": "p4", "left": "Trench Latrine", "right": "Temporary use for camps" }
            ],
            "explanation": "VIP = Vent Pipe; Pour Flush = Water Seal; Bucket = Night Soil; Trench = Temporary."
        }
    ]
});