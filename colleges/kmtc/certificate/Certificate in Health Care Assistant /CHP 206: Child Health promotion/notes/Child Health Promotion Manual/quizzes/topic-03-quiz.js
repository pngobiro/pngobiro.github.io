registerQuiz("topic-03-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-03-quiz",
    "metadata": {
        "title": "ICCM & Malnutrition Assessment",
        "description": "Evaluate skills in assessing sick children, identifying danger signs, and classifying malnutrition.",
        "topicId": "topic-03",
        "difficulty": "advanced",
        "estimatedTime": 25,
        "passingScore": 75,
        "createdAt": "2022-05-20T00:00:00Z",
        "tags": ["iccm", "malnutrition", "assessment", "referral"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate",
        "allowRetry": true
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-select",
            "question": "Which of the following are considered general danger signs in a sick child? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Coughing", "isCorrect": false },
                { "id": "b", "text": "Vomiting everything", "isCorrect": true },
                { "id": "c", "text": "Convulsions/Fits", "isCorrect": true },
                { "id": "d", "text": "Unusually sleepy or unconscious", "isCorrect": true },
                { "id": "e", "text": "Chest in-drawing", "isCorrect": true }
            ],
            "partialCredit": true,
            "explanation": "General danger signs include vomiting everything, convulsions, being unusually sleepy/unconscious, and chest in-drawing (severe pneumonia)."
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "In a child aged 12 months up to 5 years, fast breathing is defined as __b1__ breaths or more per minute.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["40", "forty"], "caseSensitive": false }
            ],
            "explanation": "For children 12 months to 5 years, the cut-off is 40 bpm. For 2-12 months, it is 50 bpm."
        },
        {
            "id": "q3",
            "type": "image-based",
            "question": "Look at the image. Identify the type of malnutrition characterized by extreme wasting and 'old man's face'.",
            "points": 15,
            "media": {
                "type": "image",
                "url": "../assets/images/image-20260111-a94cee04.jpeg",
                "alt": "Child showing severe wasting/marasmus"
            },
            "options": [
                { "id": "a", "text": "Kwashiorkor", "isCorrect": false },
                { "id": "b", "text": "Marasmus", "isCorrect": true },
                { "id": "c", "text": "Obesity", "isCorrect": false }
            ],
            "explanation": "Marasmus is characterized by severe wasting of fat and muscle, prominent ribs, and an alert but irritable demeanor."
        },
        {
            "id": "q4",
            "type": "matching",
            "question": "Match the MUAC measurement color code with the correct action:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "RED (< 11.5cm)", "right": "Severe Acute Malnutrition - Refer immediately" },
                { "id": "p2", "left": "YELLOW (11.5 - 12.5cm)", "right": "Moderate Acute Malnutrition - Supplementation" },
                { "id": "p3", "left": "GREEN (> 12.5cm)", "right": "Well Nourished - Growth Monitoring" }
            ]
        },
        {
            "id": "q5",
            "type": "short-answer",
            "question": "How do you check for nutritional edema in a child?",
            "points": 10,
            "keywords": ["thumb", "pressure", "feet", "both", "seconds", "3", "three", "ankle"],
            "minKeywords": 3,
            "modelAnswer": "Apply moderate thumb pressure to the tops of both feet simultaneously for about 3 seconds.",
            "maxLength": 300,
            "explanation": "Pressure must be applied to BOTH feet for 3 seconds. Pitting indicates edema."
        },
        {
            "id": "q6",
            "type": "ordering",
            "question": "Order the steps of the Case Management Process:",
            "points": 10,
            "items": [
                { "id": "i1", "text": "Assessment (Ask, Look, Feel)", "correctPosition": 1 },
                { "id": "i2", "text": "Classification (Pink, Yellow, Green)", "correctPosition": 2 },
                { "id": "i3", "text": "Identify Treatment (Referral, Home care)", "correctPosition": 3 },
                { "id": "i4", "text": "Treat (Give first dose/Counsel)", "correctPosition": 4 },
                { "id": "i5", "text": "Follow-up Care", "correctPosition": 5 }
            ]
        },
        {
            "id": "q7",
            "type": "multiple-choice",
            "question": "A child has a MUAC of 11.2 cm. How should this child be classified?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Well Nourished (Green)", "isCorrect": false },
                { "id": "b", "text": "Moderate Acute Malnutrition (Yellow)", "isCorrect": false },
                { "id": "c", "text": "Severe Acute Malnutrition (Red)", "isCorrect": true }
            ],
            "explanation": "MUAC less than 11.5 cm is classified as Red / Severe Acute Malnutrition."
        }
    ]
});