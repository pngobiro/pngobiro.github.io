registerQuiz("topic-06-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-06-quiz",
    "metadata": {
        "title": "Support & Locomotion Disorders Quiz",
        "description": "Assess your understanding of congenital and acquired musculoskeletal conditions in children.",
        "topicId": "topic-06",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2026-01-11T00:00:00Z",
        "tags": ["orthopaedics", "fractures", "talipes", "arthritis"]
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
            "question": "Which is the most common type of Talipes (Clubfoot)?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Talipes Calcaneovalgus", "isCorrect": false },
                { "id": "b", "text": "Talipes Equinovarus", "isCorrect": true },
                { "id": "c", "text": "Talipes Cavovarus", "isCorrect": false },
                { "id": "d", "text": "Talipes Equinovalgus", "isCorrect": false }
            ],
            "explanation": "Talipes Equinovarus accounts for approximately 95% of all talipes cases, where the foot is fixed in plantar flexion and deviates medially."
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "The incidence of Talipes is approximately 1 in __b1__ to 1 in __b2__ live births.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["700"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["1000", "1,000"], "caseSensitive": false }
            ],
            "explanation": "Talipes occurs in approximately 1 in 700 to 1 in 1000 live births and is more common in boys."
        },
        {
            "id": "q3",
            "type": "matching",
            "question": "Match the type of Talipes with its description.",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Equinovarus", "right": "Heel elevated, turned inwards (95% cases)" },
                { "id": "p2", "left": "Calcaneovalgus", "right": "Heel outwards, toes up (dorsiflexed)" },
                { "id": "p3", "left": "Equinovalgus", "right": "Heel elevated and turned outwards" },
                { "id": "p4", "left": "Calcaneovarus", "right": "Heel turned inwards, anterior foot elevated" }
            ],
            "explanation": "Different prefixes denote position: Equino- (heel up), Calcaneo- (heel down), Varus (inward), Valgus (outward)."
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "Diagnosis of fractures in children is often easier than in adults due to clear history taking.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "Diagnosis is often MORE difficult in children due to inaccurate history and lack of cooperation during examination."
        },
        {
            "id": "q5",
            "type": "multiple-select",
            "question": "Which of the following are clinical features of a fracture? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Pain on palpation", "isCorrect": true },
                { "id": "b", "text": "Shortening of limb", "isCorrect": true },
                { "id": "c", "text": "Loss of function", "isCorrect": true },
                { "id": "d", "text": "Decreased capillary refill", "isCorrect": false },
                { "id": "e", "text": "Deformity", "isCorrect": true }
            ],
            "partialCredit": true,
            "explanation": "Classic signs include pain, shortening, swelling, loss of function, and deformity. Decreased capillary refill is a sign of circulatory compromise, not the fracture itself."
        },
        {
            "id": "q6",
            "type": "image-based",
            "question": "Identify the condition shown in the image below.",
            "points": 10,
            "imageUrl": "../assets/images/image-20260111-540b14d9.jpeg",
            "imageAlt": "Infant foot turned inwards",
            "hotspots": [],
            "options": [
                { "id": "a", "text": "Normal Foot", "isCorrect": false },
                { "id": "b", "text": "Talipes (Clubfoot)", "isCorrect": true },
                { "id": "c", "text": "Flat Foot", "isCorrect": false }
            ],
            "explanation": "The image shows the characteristic inward turning of the foot seen in Talipes (Clubfoot)."
        },
        {
            "id": "q7",
            "type": "short-answer",
            "question": "What is the key difference between Polyarticular and Pauciarticular Juvenile Rheumatoid Arthritis regarding joint involvement?",
            "points": 15,
            "keywords": ["many", "few", "number", "poly", "pauci", "joints"],
            "minKeywords": 2,
            "modelAnswer": "Polyarticular involves many joints (often small joints), while Pauciarticular involves few joints (typically fewer than 5, usually large joints like knees).",
            "maxLength": 300
        }
    ]
});