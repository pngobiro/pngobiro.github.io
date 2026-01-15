registerQuiz("topic-05-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-05-quiz",
    "metadata": {
        "title": "Organic & Anxiety Disorders Quiz",
        "description": "Test understanding of Dementia, Delirium, and Anxiety disorders.",
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
            "question": "Which feature primarily distinguishes Delirium from Dementia?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Memory loss", "isCorrect": false },
                { "id": "b", "text": "Disorientation", "isCorrect": false },
                { "id": "c", "text": "Acute onset and clouding of consciousness", "isCorrect": true },
                { "id": "d", "text": "Hallucinations", "isCorrect": false }
            ],
            "explanation": "Delirium is acute and involves clouding of consciousness. Dementia is chronic, progressive, and consciousness is usually clear until late stages."
        },
        {
            "id": "q2",
            "type": "multiple-select",
            "question": "Which of the following are potentially REVERSIBLE causes of Dementia? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Alzheimer's Disease", "isCorrect": false },
                { "id": "b", "text": "Subdural Hematoma", "isCorrect": true },
                { "id": "c", "text": "Vitamin B12 Deficiency", "isCorrect": true },
                { "id": "d", "text": "Huntington's Chorea", "isCorrect": false },
                { "id": "e", "text": "Hypothyroidism", "isCorrect": true }
            ],
            "partialCredit": true,
            "explanation": "Hematomas, vitamin deficiencies, and metabolic/endocrine disorders are treatable/reversible. Alzheimer's and Huntington's are irreversible."
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "A fear of being in closed or narrow spaces is known as __b1__.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["claustrophobia", "Claustrophobia"], "caseSensitive": false }
            ],
            "explanation": "Claustrophobia is a specific phobia of enclosed spaces."
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "Panic disorder is characterized by recurrent unexpected panic attacks followed by persistent worry about having another attack.",
            "points": 10,
            "correctAnswer": true,
            "explanation": "This is the definition of Panic Disorder."
        }
    ]
});