window.registerQuiz('topic-02-quiz', {
    "schemaVersion": "1.0",
    "quizId": "topic-02-quiz",
    "metadata": {
        "title": "Prevention of HIV and AIDS",
        "description": "Assess your understanding of prevention strategies including ABC, VMMC, PrEP, PEP, and eMTCT.",
        "topicId": "topic-02-prevention",
        "difficulty": "beginner",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2024-01-20T12:00:00Z",
        "tags": ["prevention", "prep", "pep", "vmmc"]
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
            "type": "multiple-choice",
            "question": "What does the 'B' in the ABC prevention strategy stand for?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Be tested", "isCorrect": false },
                { "id": "b", "text": "Behaviour change / Be faithful", "isCorrect": true },
                { "id": "c", "text": "Breastfeeding", "isCorrect": false },
                { "id": "d", "text": "Blood safety", "isCorrect": false }
            ],
            "explanation": "A = Abstinence, B = Behaviour change (Be faithful), C = Condom use."
        },
        {
            "id": "q2",
            "type": "true-false",
            "question": "Post-Exposure Prophylaxis (PEP) involves taking ARVs for 28 days.",
            "points": 10,
            "correctAnswer": true,
            "explanation": "PEP is a 28-day course of ARVs that must be started within 72 hours of exposure."
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "Pre-exposure prophylaxis (PrEP) reduces the risk of acquiring HIV by over __percent__%.",
            "points": 10,
            "blanks": [
                { "id": "percent", "acceptedAnswers": ["90"], "caseSensitive": false }
            ],
            "explanation": "PrEP is highly effective, reducing risk by over 90% when taken consistently."
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "Voluntary Male Medical Circumcision (VMMC) reduces the risk of HIV acquisition in men by approximately:",
            "points": 10,
            "options": [
                { "id": "a", "text": "100%", "isCorrect": false },
                { "id": "b", "text": "85%", "isCorrect": false },
                { "id": "c", "text": "50%", "isCorrect": true },
                { "id": "d", "text": "25%", "isCorrect": false }
            ],
            "explanation": "The manual states VMMC reduces risk by approximately 50%."
        },
        {
            "id": "q5",
            "type": "multiple-select",
            "question": "Identify the target populations for PrEP from the list below:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Sero-discordant couples", "isCorrect": true },
                { "id": "b", "text": "Sex workers", "isCorrect": true },
                { "id": "c", "text": "General low-risk population", "isCorrect": false },
                { "id": "d", "text": "People who inject drugs", "isCorrect": true }
            ],
            "explanation": "PrEP is recommended for HIV-negative people at substantial risk of HIV infection."
        },
        {
            "id": "q6",
            "type": "short-answer",
            "question": "What is the full term for eMTCT?",
            "points": 10,
            "keywords": ["elimination", "mother", "child", "transmission"],
            "minKeywords": 3,
            "modelAnswer": "Elimination of Mother to Child Transmission",
            "explanation": "eMTCT stands for Elimination of Mother to Child Transmission."
        },
        {
            "id": "q7",
            "type": "matching",
            "question": "Match the intervention to its timing:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "PEP", "right": "Within 72 hours of exposure" },
                { "id": "p2", "left": "PrEP", "right": "Daily before exposure" },
                { "id": "p3", "left": "eMTCT", "right": "During pregnancy and breastfeeding" }
            ]
        },
        {
            "id": "q8",
            "type": "multiple-choice",
            "question": "Without intervention, what is the estimated risk of mother-to-child transmission?",
            "points": 10,
            "options": [
                { "id": "a", "text": "5-10%", "isCorrect": false },
                { "id": "b", "text": "15-45%", "isCorrect": true },
                { "id": "c", "text": "50-75%", "isCorrect": false },
                { "id": "d", "text": "90-100%", "isCorrect": false }
            ],
            "explanation": "Without ARV intervention, MTCT rates range from 15% to 45%."
        },
        {
            "id": "q9",
            "type": "true-false",
            "question": "Male latex condoms offer 100% protection against HIV if used consistently.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "Evidence shows they have an 85% or greater protective effect, not 100%."
        },
        {
            "id": "q10",
            "type": "fill-blank",
            "question": "Secondary prevention benefits of __drug__ involve viral suppression in HIV-positive persons to prevent transmission to partners.",
            "points": 10,
            "blanks": [
                { "id": "drug", "acceptedAnswers": ["ART", "ARV", "antiretroviral"], "caseSensitive": false }
            ],
            "explanation": "ART (Antiretroviral Therapy) reduces viral load, significantly lowering the risk of transmission (Treatment as Prevention)."
        }
    ]
});