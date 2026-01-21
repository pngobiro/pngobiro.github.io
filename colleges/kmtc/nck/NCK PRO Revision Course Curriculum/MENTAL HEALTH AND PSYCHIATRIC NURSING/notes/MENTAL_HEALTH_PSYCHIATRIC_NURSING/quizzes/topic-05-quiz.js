registerQuiz("topic-05-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-05-quiz",
    "metadata": {
        "title": "Schizophrenia Quiz",
        "description": "Check your understanding of schizophrenia symptoms, types, and management.",
        "topicId": "topic-05",
        "difficulty": "advanced",
        "estimatedTime": 20,
        "passingScore": 70,
        "createdAt": "2026-01-21T12:00:00Z",
        "updatedAt": "2026-01-21T12:00:00Z",
        "tags": ["schizophrenia", "psychosis"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "t5-q1",
            "type": "multiple-select",
            "question": "Which of the following are considered 'Positive Symptoms' of Schizophrenia? (Select all that apply)",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Hallucinations", "isCorrect": true },
                { "id": "opt2", "text": "Flat affect", "isCorrect": false },
                { "id": "opt3", "text": "Delusions", "isCorrect": true },
                { "id": "opt4", "text": "Avolition", "isCorrect": false }
            ],
            "explanation": "Hallucinations and Delusions are positive symptoms (excess/distortion). Flat affect and Avolition are negative symptoms (deficits)."
        },
        {
            "id": "t5-q2",
            "type": "multiple-choice",
            "question": "Which one of Eugen Bleuler's '4 As' refers to the coexistence of two opposing feelings like love and hate?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Autism", "isCorrect": false },
                { "id": "opt2", "text": "Ambivalence", "isCorrect": true },
                { "id": "opt3", "text": "Affect", "isCorrect": false },
                { "id": "opt4", "text": "Association", "isCorrect": false }
            ],
            "explanation": "Ambivalence is the marked inability to decide or the coexistence of opposing feelings."
        },
        {
            "id": "t5-q3",
            "type": "multiple-choice",
            "question": "A patient presenting with waxy flexibility, stupor, or extreme motor agitation is likely suffering from which type of schizophrenia?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Paranoid", "isCorrect": false },
                { "id": "opt2", "text": "Catatonic", "isCorrect": true },
                { "id": "opt3", "text": "Hebephrenic", "isCorrect": false },
                { "id": "opt4", "text": "Residual", "isCorrect": false }
            ],
            "explanation": "Catatonic schizophrenia is characterized by psychomotor disturbances like stupor, waxy flexibility, or excitement."
        },
        {
            "id": "t5-q4",
            "type": "true-false",
            "question": "Negative symptoms of schizophrenia typically respond better to medication than positive symptoms.",
            "correctAnswer": false,
            "points": 1,
            "explanation": "Negative symptoms (deficits) generally respond LESS well to medication than positive symptoms."
        },
        {
            "id": "t5-q5",
            "type": "multiple-choice",
            "question": "Which term describes a lack of motivation or drive?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Alogia", "isCorrect": false },
                { "id": "opt2", "text": "Anhedonia", "isCorrect": false },
                { "id": "opt3", "text": "Avolition", "isCorrect": true },
                { "id": "opt4", "text": "Asociality", "isCorrect": false }
            ],
            "explanation": "Avolition is the lack of motivation or drive. Alogia is poverty of speech. Anhedonia is inability to experience pleasure."
        }
    ]
});