registerQuiz("topic-01-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-01-quiz",
    "metadata": {
        "title": "Assessment & Diagnostics Quiz",
        "description": "Test your knowledge on history taking, urinalysis, blood values, and imaging.",
        "topicId": "topic-01-assessment",
        "difficulty": "beginner",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2025-12-26T12:00:00Z"
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which of the following is an end product of protein metabolism excreted by the kidneys?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Glucose", "isCorrect": false },
                { "id": "b", "text": "Creatinine", "isCorrect": true },
                { "id": "c", "text": "Hemoglobin", "isCorrect": false },
                { "id": "d", "text": "Ketones", "isCorrect": false }
            ],
            "explanation": "Creatinine is a waste product produced by muscles from the breakdown of creatine and is an end product of protein metabolism excreted by the kidneys."
        },
        {
            "id": "q2",
            "type": "true-false",
            "question": "An elevated Blood Urea Nitrogen (BUN) always indicates renal failure.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "Elevated BUN can reflect reduced renal perfusion, dehydration, or high protein intake, not just intrinsic renal failure."
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "The major cation in the intracellular fluid (ICF) is __1__.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["Potassium", "K+", "K"], "caseSensitive": false }
            ],
            "explanation": "Potassium is the major cation in the intracellular fluid (ICF), with a normal range of 3.5 - 4.5 mEq/L."
        },
        {
            "id": "q4",
            "type": "multiple-select",
            "question": "Which of the following are potential risk factors for adverse effects during Intravenous Urography? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Elderly age", "isCorrect": true },
                { "id": "b", "text": "Dehydration", "isCorrect": true },
                { "id": "c", "text": "Diabetes Mellitus", "isCorrect": true },
                { "id": "d", "text": "Hypertension", "isCorrect": false }
            ],
            "explanation": "Risk factors for adverse effects include being elderly, having prior kidney insufficiency, Diabetes Mellitus, Dehydration, and Multiple Myeloma."
        },
        {
            "id": "q5",
            "type": "image-based",
            "question": "Identify the urine test strip shown in the image which is used to detect protein, glucose, and ketones:",
            "points": 10,
            "imageUrl": "../assets/images/image-20251226-d47d83c0.jpeg",
            "imageAlt": "Multistix Urine Test",
            "options": [
                { "id": "a", "text": "Multistix / Dipstick", "isCorrect": true },
                { "id": "b", "text": "Litmus Paper", "isCorrect": false },
                { "id": "c", "text": "pH Meter", "isCorrect": false }
            ],
            "explanation": "A dipstick (Multistix) is a thin plastic stick with chemical strips used to detect substances like protein, glucose, and ketones in urine."
        },
        {
            "id": "q6",
            "type": "matching",
            "question": "Match the urine finding with its potential cause:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Proteinuria", "right": "Kidney disease or strenuous exercise" },
                { "id": "p2", "left": "Glycosuria", "right": "Diabetes Mellitus" },
                { "id": "p3", "left": "Ketonuria", "right": "Starvation or breakdown of body fat" },
                { "id": "p4", "left": "Nitrituria", "right": "Bacterial infection" }
            ]
        }
    ]
});