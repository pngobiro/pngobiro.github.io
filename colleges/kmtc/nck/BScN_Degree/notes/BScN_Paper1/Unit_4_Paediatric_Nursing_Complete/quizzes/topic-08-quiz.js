registerQuiz("topic-08-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-08-quiz",
    "metadata": {
        "title": "Skin & Special Senses Quiz",
        "description": "Assess your understanding of dermatological, auditory, and ophthalmic conditions in children.",
        "topicId": "topic-08",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2026-01-11T00:00:00Z",
        "tags": ["dermatology", "ENT", "ophthalmology", "eczema", "otitis"]
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
            "question": "Why are young children more prone to Otitis Media than adults?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Their eustachian tubes are longer and more vertical", "isCorrect": false },
                { "id": "b", "text": "Their eustachian tubes are wider, shorter, and more horizontal", "isCorrect": true },
                { "id": "c", "text": "They produce more ear wax", "isCorrect": false },
                { "id": "d", "text": "They have smaller adenoids", "isCorrect": false }
            ],
            "explanation": "The horizontal, short, and wide eustachian tube in children allows easier access for pathogens from the nasopharynx to the middle ear."
        },
        {
            "id": "q2",
            "type": "multiple-select",
            "question": "Which of the following are clinical features of Scabies? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Severe itching, especially at night", "isCorrect": true },
                { "id": "b", "text": "Burrows between fingers and toes", "isCorrect": true },
                { "id": "c", "text": "Honey-colored crusts on the face", "isCorrect": false },
                { "id": "d", "text": "Papules on genitalia/axillae", "isCorrect": true }
            ],
            "partialCredit": true,
            "explanation": "Night itching and burrows are classic signs of scabies. Honey-colored crusts are typical of Impetigo."
        },
        {
            "id": "q3",
            "type": "matching",
            "question": "Match the eye condition with its specific management.",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Ophthalmia Neonatorum", "right": "Systemic Penicillin" },
                { "id": "p2", "left": "Chemical Conjunctivitis", "right": "Immediate irrigation with water" },
                { "id": "p3", "left": "Allergic Conjunctivitis", "right": "Removal of allergen / Zinc drops" },
                { "id": "p4", "left": "Bacterial Conjunctivitis", "right": "Tetracycline eye ointment" }
            ],
            "explanation": "Ophthalmia neonatorum (Gonococcal) requires systemic treatment. Chemical injury requires immediate flushing."
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "The causative agent of Impetigo Contagiosa is usually Staphylococcus aureus or __b1__.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["Streptococcus", "streptococcus", "beta haemolytic streptococcus"], "caseSensitive": false }
            ],
            "explanation": "Impetigo is caused by Staph aureus or Beta-haemolytic streptococcus."
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "In the management of Mastoiditis, heat application to the mastoid process is contraindicated.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "Cold or heat application can be used to relieve pain, though antibiotics are the primary treatment."
        },
        {
            "id": "q6",
            "type": "short-answer",
            "question": "Describe the typical rash distribution in Infantile Eczema.",
            "points": 15,
            "keywords": ["face", "cheeks", "scalp", "neck", "joints", "wrists", "elbows", "knees"],
            "minKeywords": 2,
            "modelAnswer": "It usually starts on the face (cheeks/forehead) and scalp, then spreads to the neck and flexor surfaces of joints like wrists, elbows, and knees.",
            "maxLength": 200
        },
        {
            "id": "q7",
            "type": "ordering",
            "question": "Order the steps for managing a chemical splash in a child's eye.",
            "points": 15,
            "items": [
                { "id": "i1", "text": "Irrigate with water/saline for 30 mins", "correctPosition": 1 },
                { "id": "i2", "text": "Apply eye ointment if available", "correctPosition": 2 },
                { "id": "i3", "text": "Apply eye pad loosely", "correctPosition": 3 },
                { "id": "i4", "text": "Refer to eye clinic", "correctPosition": 4 }
            ],
            "explanation": "Immediate irrigation is the priority to dilute and remove the chemical before further treatment."
        }
    ]
});