registerQuiz("topic-05-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-05-quiz",
    "metadata": {
        "title": "Biliary Disorders Quiz",
        "description": "Assess your knowledge of cholelithiasis, cholecystitis, and surgical management.",
        "topicId": "topic-05-biliary",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2025-12-25T10:00:00Z",
        "tags": ["gallbladder", "cholecystitis", "post-op"]
    },
    "settings": {
        "shuffleQuestions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "A patient reports severe right upper quadrant pain radiating to the shoulder after eating a high-fat meal. This is characteristic of:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Appendicitis", "isCorrect": false },
                { "id": "b", "text": "Biliary colic", "isCorrect": true },
                { "id": "c", "text": "Peptic ulcer disease", "isCorrect": false },
                { "id": "d", "text": "Hepatitis A", "isCorrect": false }
            ],
            "explanation": "Biliary colic occurs when a stone obstructs the cystic duct, causing severe pain often triggered by a fatty meal."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "Following a laparoscopic cholecystectomy, a patient complains of shoulder pain. What is the cause?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Muscle strain from positioning", "isCorrect": false },
                { "id": "b", "text": "Referred pain from CO2 gas irritation", "isCorrect": true },
                { "id": "c", "text": "Incision pain", "isCorrect": false },
                { "id": "d", "text": "Cardiac ischemia", "isCorrect": false }
            ],
            "explanation": "CO2 gas used to inflate the abdomen during surgery can irritate the phrenic nerve and diaphragm, causing referred pain to the shoulder."
        },
        {
            "id": "q3",
            "type": "true-false",
            "question": "A T-tube is routinely placed after a laparoscopic cholecystectomy.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "A T-tube is typically used after an OPEN cholecystectomy to maintain bile duct patency, not routinely after a laparoscopic procedure."
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "When caring for a T-tube, the nurse should:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Irrigate it daily with normal saline", "isCorrect": false },
                { "id": "b", "text": "Clamp the tube every 2 hours", "isCorrect": false },
                { "id": "c", "text": "Keep the drainage system below the level of the gallbladder", "isCorrect": true },
                { "id": "d", "text": "Expect 1000mL of bloody drainage daily", "isCorrect": false }
            ],
            "explanation": "The T-tube should be kept to gravity drainage (below the level of the gallbladder). It should not be irrigated or clamped without a specific order."
        }
    ]
});
