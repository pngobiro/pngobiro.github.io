
registerQuiz("topic-05-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-05-quiz",
    "metadata": {
        "title": "Calibration, Rate & Rhythm",
        "description": "Test your ability to calculate heart rate, identify components, and define basic rhythms.",
        "topicId": "topic-05",
        "difficulty": "intermediate",
        "estimatedTime": 10,
        "passingScore": 80,
        "createdAt": "2026-01-20T00:00:00Z"
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate",
        "allowRetry": true
    },
    "questions": [
        {
            "id": "q1-components",
            "type": "matching",
            "question": "Match the ECG component to what it represents.",
            "points": 3,
            "pairs": [
                { "id": "p1", "left": "P wave", "right": "Atrial depolarisation" },
                { "id": "p2", "left": "QRS Complex", "right": "Ventricular depolarisation" },
                { "id": "p3", "left": "T wave", "right": "Ventricular repolarisation" }
            ],
            "explanation": "P=Atria, QRS=Ventricles (depol), T=Ventricles (repol)."
        },
        {
            "id": "q2-calibration",
            "type": "fill-blank",
            "question": "Standard ECG calibration sets the height to __b1__ mm/mV and the paper speed to __b2__ mm/s.",
            "points": 2,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["10"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["25"], "caseSensitive": false }
            ],
            "explanation": "Standard settings are 10mm/mV amplitude and 25mm/s speed."
        },
        {
            "id": "q3-rate-calc",
            "type": "multiple-choice",
            "question": "If the heart rhythm is regular and there are 4 large squares between R waves, what is the heart rate?",
            "points": 1,
            "options": [
                { "id": "op1", "text": "75 bpm", "isCorrect": true },
                { "id": "op2", "text": "60 bpm", "isCorrect": false },
                { "id": "op3", "text": "100 bpm", "isCorrect": false },
                { "id": "op4", "text": "50 bpm", "isCorrect": false }
            ],
            "explanation": "Rate = 300 / RR interval (in large squares). 300 / 4 = 75."
        },
        {
            "id": "q4-irregular-rate",
            "type": "multiple-choice",
            "question": "How do you calculate the rate for an irregular rhythm using a standard 10-second rhythm strip?",
            "points": 1,
            "options": [
                { "id": "op1", "text": "Count R waves on the strip and multiply by 6", "isCorrect": true },
                { "id": "op2", "text": "Divide 300 by the average number of small squares", "isCorrect": false },
                { "id": "op3", "text": "Count P waves and divide by 10", "isCorrect": false },
                { "id": "op4", "text": "It is impossible to calculate rate for irregular rhythms", "isCorrect": false }
            ],
            "explanation": "For irregular rhythms, count the complexes on a 10-second strip and multiply by 6 to get the minute rate."
        },
        {
            "id": "q5-sinus-rhythm",
            "type": "true-false",
            "question": "For a rhythm to be defined as 'Sinus Rhythm', every QRS complex must be preceded by a P wave.",
            "points": 1,
            "correctAnswer": true,
            "explanation": "True. Originating from the sinus node implies P waves drive the QRS."
        },
        {
            "id": "q6-sinus-arrhythmia",
            "type": "multiple-choice",
            "question": "In Sinus Arrhythmia, what happens to the heart rate during inspiration?",
            "points": 1,
            "options": [
                { "id": "op1", "text": "It speeds up", "isCorrect": true },
                { "id": "op2", "text": "It slows down", "isCorrect": false },
                { "id": "op3", "text": "It stops momentarily", "isCorrect": false },
                { "id": "op4", "text": "It becomes irregular", "isCorrect": false }
            ],
            "explanation": "Inspiration increases venous return, triggering the Bainbridge reflex which increases heart rate."
        }
    ]
});