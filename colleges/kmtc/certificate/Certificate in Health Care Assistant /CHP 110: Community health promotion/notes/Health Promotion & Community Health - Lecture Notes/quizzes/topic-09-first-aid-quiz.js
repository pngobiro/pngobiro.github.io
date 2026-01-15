registerQuiz("topic-09-first-aid-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-09-first-aid-quiz",
    "metadata": {
        "title": "First Aid & Emergency Care",
        "description": "Assess your understanding of first aid principles and emergency response.",
        "topicId": "topic-09-first-aid",
        "difficulty": "intermediate",
        "estimatedTime": 15,
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
            "type": "multiple-select",
            "question": "What are the three key aims of First Aid? (Select 3)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Preserve Life", "isCorrect": true },
                { "id": "b", "text": "Prevent Further Harm", "isCorrect": true },
                { "id": "c", "text": "Provide Final Diagnosis", "isCorrect": false },
                { "id": "d", "text": "Promote Recovery", "isCorrect": true }
            ],
            "explanation": "The aims are to Preserve life, Prevent worsening, and Promote recovery."
        },
        {
            "id": "q2",
            "type": "ordering",
            "question": "Order the steps for managing an emergency incident:",
            "points": 15,
            "items": [
                { "id": "1", "text": "Assess the situation (Safety first)", "correctPosition": 1 },
                { "id": "2", "text": "Make the area safe", "correctPosition": 2 },
                { "id": "3", "text": "Give emergency aid (Primary Survey)", "correctPosition": 3 },
                { "id": "4", "text": "Call for help", "correctPosition": 4 }
            ]
        },
        {
            "id": "q3",
            "type": "true-false",
            "question": "You should always move a casualty immediately to the hospital before assessing them.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "You should treat a casualty in the position found unless they are in immediate danger. Moving them can cause further injury."
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "What is the very first thing you should do upon arriving at an accident scene?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Start CPR", "isCorrect": false },
                { "id": "b", "text": "Call the casualty's family", "isCorrect": false },
                { "id": "c", "text": "Ensure the safety of yourself and others", "isCorrect": true },
                { "id": "d", "text": "Check for a pulse", "isCorrect": false }
            ],
            "explanation": "Safety is the priority. If you get injured, you cannot help others."
        },
        {
            "id": "q5",
            "type": "short-answer",
            "question": "Why is it important to wear gloves when giving first aid?",
            "points": 10,
            "keywords": ["infection", "protection", "blood", "contamination", "virus"],
            "minKeywords": 1,
            "modelAnswer": "To protect yourself and the casualty from cross-contamination and infection (like blood-borne viruses).",
            "maxLength": 100
        }
    ]
});