registerQuiz("topic-03-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-03-quiz",
    "metadata": {
        "title": "Nutrition & Nutritional Disorders Quiz",
        "description": "Assess your understanding of malnutrition, vitamin deficiencies, and metabolic disorders in children.",
        "topicId": "topic-03",
        "difficulty": "intermediate",
        "estimatedTime": 20,
        "passingScore": 70,
        "createdAt": "2026-01-11T00:00:00Z",
        "tags": ["nutrition", "PEM", "vitamins", "rickets"]
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
            "question": "Which of the following is the primary deficiency in Kwashiorkor?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Total calories", "isCorrect": false },
                { "id": "b", "text": "Proteins relative to calories", "isCorrect": true },
                { "id": "c", "text": "Vitamin D", "isCorrect": false },
                { "id": "d", "text": "Iron", "isCorrect": false }
            ],
            "explanation": "Kwashiorkor is caused by a deficiency of protein often associated with a normal or high carbohydrate intake, whereas Marasmus is a deficiency of total calories."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the Vitamin deficiency with its corresponding clinical condition.",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Vitamin A", "right": "Night Blindness / Bitot's Spots" },
                { "id": "p2", "left": "Vitamin B1 (Thiamine)", "right": "Beriberi" },
                { "id": "p3", "left": "Vitamin C", "right": "Scurvy" },
                { "id": "p4", "left": "Vitamin D", "right": "Rickets" }
            ],
            "explanation": "Vit A affects eyes; Vit B1 affects heart/nerves; Vit C affects connective tissue/gums; Vit D affects bone mineralization."
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "Select all the clinical features typically seen in a child with Marasmus.",
            "points": 15,
            "options": [
                { "id": "a", "text": "Severe wasting of muscle and fat", "isCorrect": true },
                { "id": "b", "text": "Oedema of the face and legs", "isCorrect": false },
                { "id": "c", "text": \"Old man\" appearance", "isCorrect": true },
                { "id": "d", "text": "Good (ravenous) appetite", "isCorrect": true },
                { "id": "e", "text": "Hair changes (reddish/brittle)", "isCorrect": false }
            ],
            "partialCredit": true,
            "explanation": "Marasmus is characterized by severe wasting, an alert/anxious 'old man' face, and a good appetite. Oedema and hair changes are signs of Kwashiorkor."
        },
        {
            "id": "q4",
            "type": "image-based",
            "question": "Identify the skeletal deformity shown in this image, common in Vitamin D deficiency.",
            "points": 10,
            "imageUrl": "../assets/images/image-20260111-309a4394.jpeg",
            "imageAlt": "Child's legs showing outward curvature",
            "hotspots": [],
            "options": [
                { "id": "a", "text": "Knock Knees (Genu Valgum)", "isCorrect": false },
                { "id": "b", "text": "Bow Legs (Genu Varum)", "isCorrect": true },
                { "id": "c", "text": "Club Foot", "isCorrect": false }
            ],
            "explanation": "The image shows Bow Legs (Genu Varum), a classic sign of Rickets where soft bones bend under the body's weight."
        },
        {
            "id": "q5",
            "type": "fill-blank",
            "question": "The immediate requirement for a child with oedematous malnutrition (Kwashiorkor) is __b1__ calories/kg/day.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["100"], "caseSensitive": false }
            ],
            "explanation": "Children with oedema have a lower metabolic rate initially; 100 cal/kg/day is recommended compared to 150-200 for wasted (marasmic) children."
        },
        {
            "id": "q6",
            "type": "true-false",
            "question": "Breast milk is a poor source of Vitamin A.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "Breast milk is actually a rich source of Vitamin A, along with dark leafy vegetables, carrots, and eggs."
        },
        {
            "id": "q7",
            "type": "short-answer",
            "question": "Explain the mechanism of Renal Osteodystrophy.",
            "points": 15,
            "keywords": ["calcium", "phosphate", "parathyroid", "hormone", "bone", "reabsorption", "demineralisation"],
            "minKeywords": 3,
            "modelAnswer": "In chronic renal failure, phosphate is not excreted, leading to calcium-phosphate deposits. Low calcium stimulates parathyroid hormone secretion, which causes bone reabsorption of calcium (demineralisation).",
            "maxLength": 300
        }
    ]
});