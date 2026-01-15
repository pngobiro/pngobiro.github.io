registerQuiz("topic-07-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-07-quiz",
    "metadata": {
        "title": "Cerebrovascular Disorders",
        "topicId": "topic-07",
        "difficulty": "advanced",
        "estimatedTime": 20,
        "passingScore": 75,
        "createdAt": "2025-12-25T00:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which type of stroke is most common, accounting for approximately 85% of cases?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Hemorrhagic", "isCorrect": false },
                { "id": "b", "text": "Ischemic", "isCorrect": true },
                { "id": "c", "text": "Subarachnoid", "isCorrect": false },
                { "id": "d", "text": "Cryptogenic", "isCorrect": false }
            ],
            "explanation": "Ischemic strokes (caused by blockages) are far more common than hemorrhagic strokes."
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "The loss of half of the visual field in one or both eyes is called __1__.",
            "points": 15,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["Hemianopsia", "hemianopsia"], "caseSensitive": false }
            ],
            "explanation": "Hemianopsia is a common visual deficit following stroke."
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "What is the primary contraindication for administering t-PA (tissue plasminogen activator)?",
            "points": 20,
            "options": [
                { "id": "a", "text": "Onset of symptoms > 1 hour ago", "isCorrect": false },
                { "id": "b", "text": "Hemorrhagic stroke", "isCorrect": true },
                { "id": "c", "text": "Age > 60", "isCorrect": false },
                { "id": "d", "text": "History of diabetes", "isCorrect": false }
            ],
            "explanation": "t-PA breaks down clots. Giving it to a patient with a hemorrhagic stroke (bleeding) would be fatal."
        },
        {
            "id": "q4",
            "type": "multiple-select",
            "question": "Which of the following are components of 'Aneurysm Precautions'? (Select all that apply)",
            "points": 20,
            "options": [
                { "id": "a", "text": "Absolute bed rest", "isCorrect": true },
                { "id": "b", "text": "Quiet, non-stressful environment", "isCorrect": true },
                { "id": "c", "text": "Vigorous coughing and deep breathing", "isCorrect": false },
                { "id": "d", "text": "HOB elevated 15-30 degrees", "isCorrect": true },
                { "id": "e", "text": "Nurse provides all personal care", "isCorrect": true }
            ],
            "explanation": "Precautions aim to prevent increased BP. Vigorous coughing raises ICP/BP and is contraindicated."
        }
    ]
});