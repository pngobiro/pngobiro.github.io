registerQuiz("topic-03-obstetric-anatomy-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-03-obstetric-anatomy-quiz",
    "metadata": {
        "title": "Obstetric Anatomy Quiz",
        "description": "Check your knowledge of pelvic types, diameters, and the foetal skull.",
        "topicId": "topic-03-obstetric-anatomy",
        "difficulty": "advanced",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2026-01-11T12:00:00Z"
    },
    "settings": {
        "shuffleQuestions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "image-based",
            "question": "Which pelvic type is depicted as having a heart-shaped brim and narrow fore-pelvis?",
            "points": 10,
            "imageUrl": "../assets/images/image-20260111-e26c0aea.jpeg",
            "imageAlt": "Diagram of Android Pelvis",
            "options": [
                { "id": "a", "text": "Gynaecoid", "isCorrect": false },
                { "id": "b", "text": "Android", "isCorrect": true },
                { "id": "c", "text": "Anthropoid", "isCorrect": false },
                { "id": "d", "text": "Platypelloid", "isCorrect": false }
            ],
            "explanation": "The Android (male) pelvis typically has a heart-shaped brim and is less suited for childbearing."
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "The __b1__ fontanelle is diamond shaped, while the __b2__ fontanelle is triangular.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["anterior", "bregma"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["posterior", "lambda"], "caseSensitive": false }
            ],
            "explanation": "Anterior (bregma) is diamond-shaped; Posterior (lambda) is triangular."
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "What is the obstetrical conjugate diameter (the actual space available for the foetus at the brim)?",
            "points": 10,
            "options": [
                { "id": "a", "text": "12 cm", "isCorrect": false },
                { "id": "b", "text": "13 cm", "isCorrect": false },
                { "id": "c", "text": "11 cm", "isCorrect": true },
                { "id": "d", "text": "10 cm", "isCorrect": false }
            ],
            "explanation": "The obstetrical conjugate measures 11 cm (Anatomical conjugate minus ~1.25 cm)."
        },
        {
            "id": "q4",
            "type": "matching",
            "question": "Match the foetal skull diameter with its measurement:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Sub-occipitobregmatic (SOB)", "right": "9.5 cm" },
                { "id": "p2", "left": "Occipitofrontal (OF)", "right": "11.5 cm" },
                { "id": "p3", "left": "Mentovertical (MV)", "right": "13.5 cm" },
                { "id": "p4", "left": "Biparietal (BPD)", "right": "9.5 cm" }
            ]
        },
        {
            "id": "q5",
            "type": "short-answer",
            "question": "What is the significance of the Ischial Spines during labour?",
            "points": 10,
            "keywords": ["station", "narrow", "transverse", "diameter", "descent", "zero"],
            "minKeywords": 2,
            "modelAnswer": "The ischial spines mark the narrowest point of the pelvic cavity (zero station) and determine the transverse diameter of the outlet (10-11 cm).",
            "maxLength": 200
        }
    ]
});