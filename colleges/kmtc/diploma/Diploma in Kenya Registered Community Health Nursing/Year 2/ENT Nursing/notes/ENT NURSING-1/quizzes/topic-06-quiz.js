registerQuiz("topic-06-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-06-quiz",
    "metadata": {
        "title": "Nose & Sinus Conditions Quiz",
        "description": "Test your knowledge on epistaxis management, sinusitis, and nasal trauma.",
        "topicId": "topic-06",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2025-12-25T12:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "ordering",
            "question": "Prioritize the steps for managing an anterior nosebleed (Epistaxis):",
            "points": 10,
            "items": [
                { "id": "i1", "text": "Sit patient upright", "correctPosition": 1 },
                { "id": "i2", "text": "Tilt head forward", "correctPosition": 2 },
                { "id": "i3", "text": "Pinch soft part of nose", "correctPosition": 3 },
                { "id": "i4", "text": "Hold pressure for 5-10 mins", "correctPosition": 4 },
                { "id": "i5", "text": "Consider packing if bleeding persists", "correctPosition": 5 }
            ],
            "explanation": "Sitting upright lowers pressure; tilting forward prevents swallowing blood; pinching applies direct pressure."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "Following a nasal fracture, clear drainage from the nose tests positive for glucose. What does this indicate?",
            "points": 5,
            "options": [
                { "id": "a", "text": "Allergic Rhinitis", "isCorrect": false },
                { "id": "b", "text": "Sinus infection", "isCorrect": false },
                { "id": "c", "text": "CSF Leak / Cribriform plate fracture", "isCorrect": true },
                { "id": "d", "text": "Normal mucus secretion", "isCorrect": false }
            ],
            "explanation": "CSF contains glucose; mucus does not. A CSF leak suggests a skull fracture communicating with the nasal cavity."
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "Which symptom helps differentiate Sinusitis from simple Rhinitis?",
            "points": 5,
            "options": [
                { "id": "a", "text": "Runny nose", "isCorrect": false },
                { "id": "b", "text": "Facial pain/pressure worse on bending", "isCorrect": true },
                { "id": "c", "text": "Sneezing", "isCorrect": false },
                { "id": "d", "text": "Watery eyes", "isCorrect": false }
            ],
            "explanation": "Facial pain/pressure and dental pain are hallmark signs of sinusitis due to pressure buildup in the sinus cavities."
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "Chronic sinusitis is defined as symptoms persisting for longer than __b1__ months.",
            "points": 5,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["3", "three"], "caseSensitive": false }
            ],
            "explanation": "Chronic sinusitis typically involves symptoms lasting more than 12 weeks (3 months)."
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "What is the function of the nasal turbinates?",
            "points": 5,
            "options": [
                { "id": "a", "text": "To produce sound", "isCorrect": false },
                { "id": "b", "text": "To warm, humidify, and filter air", "isCorrect": true },
                { "id": "c", "text": "To detect smells", "isCorrect": false },
                { "id": "d", "text": "To drain tears", "isCorrect": false }
            ],
            "explanation": "Turbinates increase surface area to warm, filter, and humidify inspired air."
        }
    ]
});
