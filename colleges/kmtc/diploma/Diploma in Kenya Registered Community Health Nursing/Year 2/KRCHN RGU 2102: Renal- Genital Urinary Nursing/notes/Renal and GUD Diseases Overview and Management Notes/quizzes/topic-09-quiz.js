registerQuiz("topic-09-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-09-quiz",
    "metadata": {
        "title": "Hydronephrosis Quiz",
        "description": "Test knowledge on kidney distension and obstruction.",
        "topicId": "topic-09",
        "difficulty": "intermediate",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2025-12-26T12:00:00Z"
    },
    "settings": {
        "shuffleQuestions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "fill-blank",
            "question": "__b1__ is the distension of the kidney with urine caused by obstruction of urine flow.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["Hydronephrosis"], "caseSensitive": false }
            ],
            "explanation": "Hydronephrosis refers to dilation of the renal pelvis due to urine backup."
        },
        {
            "id": "q2",
            "type": "multiple-select",
            "question": "Which of the following are potential causes of Hydronephrosis? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Renal Stones", "isCorrect": true },
                { "id": "b", "text": "Prostate Enlargement", "isCorrect": true },
                { "id": "c", "text": "Tumors compressing ureters", "isCorrect": true },
                { "id": "d", "text": "High fluid intake", "isCorrect": false }
            ],
            "explanation": "Stones, BPH, and tumors can all cause obstruction leading to hydronephrosis."
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "What is the primary goal of management for Hydronephrosis?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Relieve the urinary obstruction", "isCorrect": true },
                { "id": "b", "text": "Restrict fluids", "isCorrect": false },
                { "id": "c", "text": "Administer diuretics", "isCorrect": false },
                { "id": "d", "text": "Dialysis", "isCorrect": false }
            ],
            "explanation": "The main priority is to relieve the obstruction to prevent further kidney damage."
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "Acute hydronephrosis may require temporary drainage via a nephrostomy needle.",
            "points": 5,
            "correctAnswer": true,
            "explanation": "Accumulated urine may need to be drained percutaneously to relieve pressure."
        }
    ]
});