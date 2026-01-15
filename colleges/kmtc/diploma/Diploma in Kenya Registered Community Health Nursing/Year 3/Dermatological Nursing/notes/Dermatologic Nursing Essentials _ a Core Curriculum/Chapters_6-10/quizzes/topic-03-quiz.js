registerQuiz("topic-03-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-03-quiz",
    "metadata": {
        "title": "Topic 03: Papulosquamous Diseases",
        "description": "Assess your knowledge of Psoriasis, Lichen Planus, Pityriasis Rosea, and other papulosquamous conditions.",
        "topicId": "topic-03-papulosquamous",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 75,
        "createdAt": "2025-12-25T12:00:00Z",
        "tags": ["psoriasis", "lichen-planus", "pathophysiology"]
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
            "question": "A patient presents with a rapid onset of small, widespread scaly papules following a sore throat. This presentation is most consistent with:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Plaque Psoriasis", "isCorrect": false },
                { "id": "b", "text": "Guttate Psoriasis", "isCorrect": true },
                { "id": "c", "text": "Inverse Psoriasis", "isCorrect": false },
                { "id": "d", "text": "Erythrodermic Psoriasis", "isCorrect": false }
            ],
            "explanation": "Guttate (drop-like) psoriasis is strongly associated with a preceding streptococcal infection (strep throat)."
        },
        {
            "id": "q2",
            "type": "true-false",
            "question": "The Koebner phenomenon is defined as the appearance of pinpoint bleeding when scale is removed from a psoriatic plaque.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "False. Bleeding upon scale removal is the **Auspitz sign**. The **Koebner phenomenon** is the formation of lesions at sites of skin trauma/injury."
        },
        {
            "id": "q3",
            "type": "image-based",
            "question": "Identify the condition shown in this image, characterized by a 'Herald Patch' and subsequent 'Christmas Tree' distribution:",
            "points": 10,
            "imageUrl": "../assets/images/image-20251225-9f78532a.jpeg",
            "imageAlt": "Back showing Christmas tree pattern rash",
            "options": [
                { "id": "a", "text": "Tinea Versicolor", "isCorrect": false },
                { "id": "b", "text": "Pityriasis Rosea", "isCorrect": true },
                { "id": "c", "text": "Secondary Syphilis", "isCorrect": false },
                { "id": "d", "text": "Nummular Eczema", "isCorrect": false }
            ],
            "explanation": "The image shows the classic Christmas tree distribution of Pityriasis Rosea."
        },
        {
            "id": "q4",
            "type": "multiple-select",
            "question": "Which of the following are part of the '5 Ps' of Lichen Planus? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Purple", "isCorrect": true },
                { "id": "b", "text": "Polygonal", "isCorrect": true },
                { "id": "c", "text": "Pustular", "isCorrect": false },
                { "id": "d", "text": "Pruritic", "isCorrect": true },
                { "id": "e", "text": "Painful", "isCorrect": false }
            ],
            "partialCredit": true,
            "explanation": "The 5 Ps are: Purple, Polygonal, Pruritic, Planar, and Papules."
        },
        {
            "id": "q5",
            "type": "fill-blank",
            "question": "The white, lacy network of lines often seen on the surface of Lichen Planus papules or oral mucosa is called __1__.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["Wickham striae", "Wickham's striae", "Wickhams striae"], "caseSensitive": false }
            ],
            "explanation": "Wickham striae are a diagnostic feature of Lichen Planus."
        },
        {
            "id": "q6",
            "type": "multiple-choice",
            "question": "What is the most effective intervention for Lichen Simplex Chronicus?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Applying moisturizer", "isCorrect": false },
                { "id": "b", "text": "Breaking the itch-scratch cycle", "isCorrect": true },
                { "id": "c", "text": "Systemic antibiotics", "isCorrect": false },
                { "id": "d", "text": "Dietary changes", "isCorrect": false }
            ],
            "explanation": "LSC is caused by chronic scratching. If the itch-scratch cycle is not interrupted, the lichenification will persist regardless of other treatments."
        },
        {
            "id": "q7",
            "type": "matching",
            "question": "Match the psoriasis phenotype with its description:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Inverse", "right": "Smooth, red plaques in folds" },
                { "id": "p2", "left": "Erythrodermic", "right": "Generalized redness and scaling (>90% BSA)" },
                { "id": "p3", "left": "Pustular", "right": "Sterile pustules on palms/soles or generalized" },
                { "id": "p4", "left": "Plaque", "right": "Silver scale on extensor surfaces" }
            ],
            "explanation": "Correctly identifying the phenotype is essential for choosing the appropriate treatment."
        },
        {
            "id": "q8",
            "type": "multiple-choice",
            "question": "Keratosis Pilaris is most commonly located on the:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Scalp", "isCorrect": false },
                { "id": "b", "text": "Lateral upper arms and thighs", "isCorrect": true },
                { "id": "c", "text": "Palms and soles", "isCorrect": false },
                { "id": "d", "text": "Chest and back", "isCorrect": false }
            ],
            "explanation": "KP classically affects the lateral aspects of the upper arms, anterior thighs, and sometimes the cheeks."
        },
        {
            "id": "q9",
            "type": "multiple-choice",
            "question": "Which of the following is a Systemic Retinoid used for severe psoriasis that is highly teratogenic?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Methotrexate", "isCorrect": false },
                { "id": "b", "text": "Cyclosporine", "isCorrect": false },
                { "id": "c", "text": "Acitretin", "isCorrect": true },
                { "id": "d", "text": "Adalimumab", "isCorrect": false }
            ],
            "explanation": "Acitretin is a systemic retinoid. Pregnancy must be avoided for 3 years after discontinuing the drug."
        },
        {
            "id": "q10",
            "type": "true-false",
            "question": "Pityriasis Rosea typically requires aggressive treatment with systemic steroids to resolve.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "Pityriasis Rosea is self-limiting and usually resolves in 8-12 weeks without treatment. Management is supportive (education, itch relief)."
        }
    ]
});
