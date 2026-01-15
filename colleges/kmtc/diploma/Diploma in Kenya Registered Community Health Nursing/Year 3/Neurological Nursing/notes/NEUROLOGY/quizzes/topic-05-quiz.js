registerQuiz("topic-05-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-05-quiz",
    "metadata": {
        "title": "Neurologic Trauma Quiz",
        "topicId": "topic-05",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2025-12-28T12:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "What is the most serious type of hematoma, often involving arterial bleeding?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Subdural hematoma", "isCorrect": false },
                { "id": "b", "text": "Epidural hematoma", "isCorrect": true },
                { "id": "c", "text": "Intracerebral hematoma", "isCorrect": false },
                { "id": "d", "text": "Subarachnoid hemorrhage", "isCorrect": false }
            ],
            "explanation": "Epidural hematomas usually involve the middle meningeal artery and are medical emergencies requiring immediate surgical evacuation."
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "A life-threatening complication of spinal cord injury above T6, characterized by severe hypertension and bradycardia, is called __1__.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["autonomic dysreflexia", "hyperreflexia"], "caseSensitive": false }
            ],
            "explanation": "Autonomic dysreflexia is a medical emergency caused by noxious stimuli (like a full bladder) below the level of injury."
        },
        {
            "id": "q3",
            "type": "true-false",
            "question": "Any patient with a head injury should be presumed to have a cervical spine injury until proven otherwise.",
            "points": 10,
            "correctAnswer": true,
            "explanation": "Always immobilize the C-spine first to prevent catastrophic spinal cord damage."
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "Which level of spinal cord injury would likely result in respiratory failure requiring mechanical ventilation?",
            "points": 10,
            "options": [
                { "id": "a", "text": "C3 - C4", "isCorrect": true },
                { "id": "b", "text": "T6", "isCorrect": false },
                { "id": "c", "text": "L1", "isCorrect": false },
                { "id": "d", "text": "S2", "isCorrect": false }
            ],
            "explanation": "Injury to C3, C4, or C5 affects the phrenic nerve, which controls the diaphragm ('C3, 4, 5 keep the diaphragm alive')."
        }
    ]
});