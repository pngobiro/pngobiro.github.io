registerQuiz("topic-02-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-02-quiz",
    "metadata": {
        "title": "Skin Assessment Quiz",
        "description": "Assessment for Topic 02: Patient history, physical exam, and lesion identification",
        "topicId": "topic-02-assessment",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2025-12-25T12:00:00Z"
    },
    "settings": {
        "shuffleQuestions": false,
        "showFeedback": "immediate",
        "allowRetry": true
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which of the following is NOT one of the three general questions important when taking the initial abbreviated history?",
            "points": 10,
            "options": [
                { "id": "a", "text": "How long have you had it?", "isCorrect": false },
                { "id": "b", "text": "Does it itch?", "isCorrect": false },
                { "id": "c", "text": "What blood tests have you had recently?", "isCorrect": true },
                { "id": "d", "text": "How have you treated it?", "isCorrect": false }
            ],
            "explanation": "The three key questions cover Onset/Evolution, Symptoms, and Treatment to Date. Blood tests are part of a deeper workup, not the initial triage."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "Which of the following is a solid, elevated palpable mass that is usually larger than 1 cm?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Plaque", "isCorrect": false },
                { "id": "b", "text": "Nodule", "isCorrect": true },
                { "id": "c", "text": "Patch", "isCorrect": false },
                { "id": "d", "text": "Papule", "isCorrect": false }
            ],
            "explanation": "A nodule is >1cm and palpable. A papule is <1cm. A patch is flat."
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "The pattern, distribution, and texture of which of the following is an indicator of a person's general state of health?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Seborrheic keratosis", "isCorrect": false },
                { "id": "b", "text": "Moles", "isCorrect": false },
                { "id": "c", "text": "Hair", "isCorrect": true },
                { "id": "d", "text": "Warts", "isCorrect": false }
            ],
            "explanation": "Hair pattern and quality are significant indicators of general health (e.g., thyroid disease, nutrition)."
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "A circumscribed, flat discoloration that could be brown, blue, red, or hypopigmented is a:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Macule", "isCorrect": true },
                { "id": "b", "text": "Bulla", "isCorrect": false },
                { "id": "c", "text": "Nodule", "isCorrect": false },
                { "id": "d", "text": "Plaque", "isCorrect": false }
            ],
            "explanation": "A macule is a flat, non-palpable color change <1cm."
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "Lichenification is the accumulation of dried masses of serum, bacteria, and possible blood mixed with epithelial debris that covers damaged epidermis.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "False. That definition describes a Crust. Lichenification is thickening of the skin due to chronic rubbing/scratching."
        },
        {
            "id": "q6",
            "type": "multiple-choice",
            "question": "Which of the following primary lesions is caused directly by a disease process?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Scales", "isCorrect": false },
                { "id": "b", "text": "Erosion", "isCorrect": false },
                { "id": "c", "text": "Pustule", "isCorrect": true },
                { "id": "d", "text": "Ulcer", "isCorrect": false }
            ],
            "explanation": "Pustules are primary lesions. Scales, Erosions, and Ulcers are secondary lesions resulting from the evolution of the disease or external factors."
        },
        {
            "id": "q7",
            "type": "multiple-choice",
            "question": "A lesion that is a response to a disease process is a secondary lesion. Which is an example?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Wheal", "isCorrect": false },
                { "id": "b", "text": "Crust", "isCorrect": true },
                { "id": "c", "text": "Vesicle", "isCorrect": false },
                { "id": "d", "text": "Plaque", "isCorrect": false }
            ],
            "explanation": "Crust is a secondary lesion formed by dried serum/exudate. Wheals, Vesicles, and Plaques are primary."
        },
        {
            "id": "q8",
            "type": "multiple-choice",
            "question": "A configuration that can be described as coin-like is:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Satellite", "isCorrect": false },
                { "id": "b", "text": "Discoid", "isCorrect": true },
                { "id": "c", "text": "Gyrate", "isCorrect": false },
                { "id": "d", "text": "Confluent", "isCorrect": false }
            ],
            "explanation": "Discoid (or Nummular) refers to a coin-shaped or disc-shaped configuration."
        },
        {
            "id": "q9",
            "type": "multiple-choice",
            "question": "Pruritus is a major symptom of:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Rosacea", "isCorrect": false },
                { "id": "b", "text": "Keratosis pilaris", "isCorrect": false },
                { "id": "c", "text": "Herpes zoster", "isCorrect": false },
                { "id": "d", "text": "Atopic dermatitis", "isCorrect": true }
            ],
            "explanation": "Atopic dermatitis (Eczema) is classically associated with intense pruritus (the itch that rashes)."
        },
        {
            "id": "q10",
            "type": "multiple-choice",
            "question": "The itch or pruritus threshold is lower:",
            "points": 10,
            "options": [
                { "id": "a", "text": "First thing in the morning", "isCorrect": false },
                { "id": "b", "text": "Around noontime", "isCorrect": false },
                { "id": "c", "text": "During the evening meal", "isCorrect": false },
                { "id": "d", "text": "In the evening during bedtime hours", "isCorrect": true }
            ],
            "explanation": "Pruritus is often most intense at night due to lower threshold and lack of distractions."
        }
    ]
});
