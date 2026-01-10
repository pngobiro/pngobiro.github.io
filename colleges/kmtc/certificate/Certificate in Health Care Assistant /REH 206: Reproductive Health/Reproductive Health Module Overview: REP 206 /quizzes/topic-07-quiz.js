registerQuiz("topic-07-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-07-quiz",
    "metadata": {
        "title": "STIs Management Quiz",
        "description": "Assess knowledge of STI classification, symptoms, and control.",
        "topicId": "topic-07-stis",
        "difficulty": "intermediate",
        "estimatedTime": 10,
        "passingScore": 80,
        "createdAt": "2026-01-10T10:00:00Z"
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "matching",
            "question": "Classify the following STIs as Curable or Incurable:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Syphilis", "right": "Curable" },
                { "id": "p2", "left": "Gonorrhea", "right": "Curable" },
                { "id": "p3", "left": "HIV/AIDS", "right": "Incurable" },
                { "id": "p4", "left": "Genital Herpes", "right": "Incurable" }
            ],
            "explanation": "Bacterial STIs (Syphilis, Gonorrhea) are generally curable with antibiotics. Viral STIs (HIV, Herpes) are incurable but manageable."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "Which organism causes Syphilis?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Neisseria gonorrhoeae", "isCorrect": false },
                { "id": "b", "text": "Treponema pallidum", "isCorrect": true },
                { "id": "c", "text": "Chlamydia trachomatis", "isCorrect": false },
                { "id": "d", "text": "Trichomonas vaginalis", "isCorrect": false }
            ],
            "explanation": "Syphilis is caused by the bacterium Treponema pallidum."
        },
        {
            "id": "q3",
            "type": "true-false",
            "question": "The 'Syndromic Approach' to STI management relies heavily on expensive laboratory tests for every patient.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "The syndromic approach is designed for settings without lab facilities, using signs and symptoms (syndromes) to treat infections."
        },
        {
            "id": "q4",
            "type": "multiple-select",
            "question": "Pelvic Inflammatory Disease (PID) is a serious complication of untreated STIs. What are its potential long-term consequences? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Infertility", "isCorrect": true },
                { "id": "b", "text": "Ectopic Pregnancy", "isCorrect": true },
                { "id": "c", "text": "Chronic pelvic pain", "isCorrect": true },
                { "id": "d", "text": "Fibroids", "isCorrect": false }
            ],
            "partialCredit": true,
            "explanation": "PID causes scarring of the fallopian tubes, leading to infertility, ectopic pregnancy risk, and chronic pain."
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "Which of the following is characterized by a painless genital ulcer (chancre)?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Primary Syphilis", "isCorrect": true },
                { "id": "b", "text": "Genital Herpes", "isCorrect": false },
                { "id": "c", "text": "Chancroid", "isCorrect": false },
                { "id": "d", "text": "Gonorrhea", "isCorrect": false }
            ],
            "explanation": "Primary syphilis presents with a painless, hard ulcer called a chancre. Herpes and Chancroid ulcers are typically painful."
        }
    ]
});