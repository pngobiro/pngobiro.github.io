registerQuiz("topic-02-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-02-quiz",
    "metadata": {
        "title": "Neurological Assessment",
        "topicId": "topic-02",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2025-12-25T00:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "A patient can open their eyes spontaneously, is confused but conversant, and obeys motor commands. What is their GCS score?",
            "points": 15,
            "options": [
                { "id": "a", "text": "15", "isCorrect": false },
                { "id": "b", "text": "14", "isCorrect": true },
                { "id": "c", "text": "13", "isCorrect": false },
                { "id": "d", "text": "12", "isCorrect": false }
            ],
            "explanation": "Eyes: Spontaneous (4) + Verbal: Confused (4) + Motor: Obeys (6) = 14."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the Cranial Nerve with its assessment method:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "CN II (Optic)", "right": "Snellen eye chart" },
                { "id": "p2", "left": "CN V (Trigeminal)", "right": "Corneal reflex / Facial sensation" },
                { "id": "p3", "left": "CN VII (Facial)", "right": "Smile, frown, puff cheeks" },
                { "id": "p4", "left": "CN VIII (Acoustic)", "right": "Weber and Rinne tests" }
            ]
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "A positive __1__ test is indicated by a loss of balance when the patient stands with feet together and eyes closed.",
            "points": 15,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["Romberg", "romberg"], "caseSensitive": false }
            ],
            "explanation": "The Romberg test assesses balance and proprioception/vestibular function."
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "On the muscle strength grading scale, what does a score of 3 indicate?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Normal strength", "isCorrect": false },
                { "id": "b", "text": "Movement against gravity but not resistance", "isCorrect": true },
                { "id": "c", "text": "Movement with gravity eliminated", "isCorrect": false },
                { "id": "d", "text": "Flicker of contraction only", "isCorrect": false }
            ],
            "explanation": "Grade 3 is defined as sufficient strength to overcome the force of gravity but not resistance."
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "Agnosia is the inability to express oneself through speech.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "False. Agnosia is the inability to interpret/recognize objects. Aphasia is the language deficiency."
        }
    ]
});