registerQuiz("topic-06-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-06-quiz",
    "title": "Community Resources",
    "description": "Assess your understanding of the resources required for HBC.",
    "metadata": {
        "title": "Topic 6: Community Resources",
        "description": "The 4Ms and Appropriate Technology",
        "topicId": "topic-06",
        "difficulty": "beginner",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2026-01-17T12:00:00Z",
        "updatedAt": "2026-01-17T12:00:00Z",
        "tags": ["resources", "technology", "4ms"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate",
        "allowRetry": true,
        "showCorrectAnswers": true,
        "timeLimit": 0
    },
    "questions": [
        {
            "id": "t6-q1",
            "type": "fill-blank",
            "question": "The resources needed for HBC are classified into the '4 Ms'. These are Money, Materials, Manpower, and __b1__.",
            "points": 1,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["minutes", "time"], "caseSensitive": false }
            ],
            "explanation": "The 4 Ms are Money, Materials, Minutes (Time), and Manpower."
        },
        {
            "id": "t6-q2",
            "type": "multiple-select",
            "question": "Which of the following are examples of 'Appropriate Technology' for HBC? (Select all that apply)",
            "points": 2,
            "options": [
                { "id": "at1", "text": "Solar food dryer", "isCorrect": true },
                { "id": "at2", "text": "Charcoal water filter", "isCorrect": true },
                { "id": "at3", "text": "MRI machine", "isCorrect": false },
                { "id": "at4", "text": "Leaky tin (tippy-tap)", "isCorrect": true }
            ],
            "explanation": "Appropriate technologies are low-cost and locally adaptable (solar dryer, charcoal filter, leaky tin). MRI machines are high-tech hospital equipment."
        },
        {
            "id": "t6-q3",
            "type": "matching",
            "question": "Match the resource source to what they primarily provide:",
            "points": 3,
            "pairs": [
                { "id": "s1", "left": "Family", "right": "Basic needs (food/shelter) and physical care" },
                { "id": "s2", "left": "Community", "right": "Social and spiritual support" },
                { "id": "s3", "left": "Individual (Patient)", "right": "The home environment and cooperation" }
            ],
            "explanation": "Families provide daily basics; Communities provide broader support; Patients provide the setting/will."
        },
        {
            "id": "t6-q4",
            "type": "multiple-choice",
            "question": "How can a caregiver 'create time' (Minutes) for HBC?",
            "points": 1,
            "options": [
                { "id": "time1", "text": "By stopping all other work completely", "isCorrect": false },
                { "id": "time2", "text": "By planning ahead, being punctual, and involving others", "isCorrect": true },
                { "id": "time3", "text": "By sleeping less than 4 hours a day", "isCorrect": false },
                { "id": "time4", "text": "Time cannot be created", "isCorrect": false }
            ],
            "explanation": "Planning, punctuality, and sharing tasks helps 'create' or manage time effectively."
        },
        {
            "id": "t6-q5",
            "type": "multiple-select",
            "question": "Who counts as 'Manpower' resources in HBC? (Select all that apply)",
            "points": 2,
            "options": [
                { "id": "mp1", "text": "Health workers", "isCorrect": true },
                { "id": "mp2", "text": "Family members", "isCorrect": true },
                { "id": "mp3", "text": "Community volunteers", "isCorrect": true },
                { "id": "mp4", "text": "Students from neighboring institutions", "isCorrect": true }
            ],
            "explanation": "All listed groups—professionals, family, volunteers, and students—are human resources (Manpower)."
        }
    ]
});