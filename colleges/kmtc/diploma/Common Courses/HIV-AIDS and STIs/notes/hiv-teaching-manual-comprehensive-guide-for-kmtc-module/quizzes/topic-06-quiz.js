window.registerQuiz('topic-06-quiz', {
    "schemaVersion": "1.0",
    "quizId": "topic-06-quiz",
    "metadata": {
        "title": "Sexually Transmitted Infections (STIs)",
        "description": "Assess your knowledge on STI classification, symptoms, and syndromic management.",
        "topicId": "topic-06-stis",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2024-01-20T12:00:00Z",
        "tags": ["sti", "syndromic", "management"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate",
        "allowRetry": true,
        "showCorrectAnswers": true
    },
    "questions": [
        {
            "id": "q1",
            "type": "matching",
            "question": "Match the STI to its causative agent:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Syphilis", "right": "Treponema pallidum" },
                { "id": "p2", "left": "Gonorrhea", "right": "Neisseria gonorrhoeae" },
                { "id": "p3", "left": "Chancroid", "right": "Haemophilus ducreyi" },
                { "id": "p4", "left": "Candidiasis", "right": "Candida albicans" }
            ]
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "Which syndrome involves a painless genital ulcer (chancre)?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Primary Syphilis", "isCorrect": true },
                { "id": "b", "text": "Chancroid", "isCorrect": false },
                { "id": "c", "text": "Herpes", "isCorrect": false },
                { "id": "d", "text": "Gonorrhea", "isCorrect": false }
            ],
            "explanation": "Primary syphilis is characterized by a hard, painless chancre. Chancroid and Herpes cause painful ulcers."
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "In syndromic management, urethral discharge is treated for both __b1__ and __b2__.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["gonorrhea"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["chlamydia"], "caseSensitive": false }
            ],
            "explanation": "The urethral discharge syndrome covers the two most common bacterial causes: Gonorrhea and Chlamydia."
        },
        {
            "id": "q4",
            "type": "multiple-select",
            "question": "Select the correct signs of Congenital Syphilis in a child:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Hutchinson teeth", "isCorrect": true },
                { "id": "b", "text": "Saddle nose", "isCorrect": true },
                { "id": "c", "text": "Interstitial keratitis", "isCorrect": true },
                { "id": "d", "text": "Kaposi's Sarcoma", "isCorrect": false }
            ],
            "explanation": "Hutchinson teeth, saddle nose, and keratitis are classic signs. KS is an HIV-associated cancer."
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "Genital Warts are caused by the Herpes Simplex Virus.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "Genital Warts are caused by Human Papilloma Virus (HPV). Herpes causes blisters/ulcers."
        },
        {
            "id": "q6",
            "type": "multiple-choice",
            "question": "Which STI presents with a 'heavy, curdy, white' vaginal discharge?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Trichomoniasis", "isCorrect": false },
                { "id": "b", "text": "Candidiasis", "isCorrect": true },
                { "id": "c", "text": "Gonorrhea", "isCorrect": false },
                { "id": "d", "text": "Syphilis", "isCorrect": false }
            ],
            "explanation": "Curdy white discharge is classic for Candidiasis (Yeast infection)."
        },
        {
            "id": "q7",
            "type": "ordering",
            "question": "Order the stages of Syphilis progression:",
            "points": 10,
            "items": [
                { "id": "1", "text": "Primary (Chancre)", "correctPosition": 1 },
                { "id": "2", "text": "Secondary (Rash, systemic)", "correctPosition": 2 },
                { "id": "3", "text": "Latent", "correctPosition": 3 },
                { "id": "4", "text": "Tertiary (Neuro/Cardio)", "correctPosition": 4 }
            ]
        },
        {
            "id": "q8",
            "type": "short-answer",
            "question": "Name the treatment of choice for Syphilis.",
            "points": 10,
            "keywords": ["penicillin", "benzathine"],
            "minKeywords": 1,
            "modelAnswer": "Penicillin (Benzathine Penicillin)",
            "explanation": "Penicillin is the standard treatment for Syphilis."
        },
        {
            "id": "q9",
            "type": "multiple-choice",
            "question": "Which of the following is a behavioral risk factor for STIs?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Age", "isCorrect": false },
                { "id": "b", "text": "Sex", "isCorrect": false },
                { "id": "c", "text": "Drug and substance abuse", "isCorrect": true },
                { "id": "d", "text": "Immune status", "isCorrect": false }
            ],
            "explanation": "Drug abuse is a behavioral factor. The others are biological factors."
        },
        {
            "id": "q10",
            "type": "true-false",
            "question": "STIs are a major risk factor for HIV transmission.",
            "points": 10,
            "correctAnswer": true,
            "explanation": "Presence of STIs facilitates HIV transmission and acquisition."
        }
    ]
});