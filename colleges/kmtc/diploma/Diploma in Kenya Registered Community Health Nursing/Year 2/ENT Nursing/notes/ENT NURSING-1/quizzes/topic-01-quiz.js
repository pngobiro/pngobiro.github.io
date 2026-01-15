registerQuiz("topic-01-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-01-quiz",
    "metadata": {
        "title": "Anatomy & Physiology of the Ear",
        "description": "Test your knowledge of ear structures, terminology, and the physiology of hearing and balance.",
        "topicId": "topic-01",
        "difficulty": "beginner",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2025-12-25T12:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "matching",
            "question": "Match the part of the ear with its correct description:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Pinna (Auricle)", "right": "Cartilaginous projection that collects sound" },
                { "id": "p2", "left": "Tympanic Membrane", "right": "Pearly grey, translucent membrane separating outer and middle ear" },
                { "id": "p3", "left": "Eustachian Tube", "right": "Connects middle ear to nasopharynx; equalizes pressure" },
                { "id": "p4", "left": "Cochlea", "right": "Snail-shaped organ of hearing" },
                { "id": "p5", "left": "Semicircular Canals", "right": "Structures responsible for kinetic balance" }
            ],
            "explanation": "The Pinna collects sound, the TM transmits vibrations, the Eustachian tube equalizes pressure, the Cochlea houses hearing receptors, and Semicircular canals detect movement."
        },
        {
            "id": "q2",
            "type": "ordering",
            "question": "Arrange the pathway of sound transmission in the correct order:",
            "points": 10,
            "items": [
                { "id": "i1", "text": "Sound waves enter External Auditory Canal", "correctPosition": 1 },
                { "id": "i2", "text": "Tympanic Membrane vibrates", "correctPosition": 2 },
                { "id": "i3", "text": "Ossicles (Malleus, Incus, Stapes) vibrate", "correctPosition": 3 },
                { "id": "i4", "text": "Oval Window transmits vibrations to inner ear fluid", "correctPosition": 4 },
                { "id": "i5", "text": "Hair cells in Organ of Corti are stimulated", "correctPosition": 5 },
                { "id": "i6", "text": "Impulse travels via CN VIII to the brain", "correctPosition": 6 }
            ],
            "explanation": "Sound travels from air (outer ear) -> bone (middle ear) -> fluid (inner ear) -> nerve impulse."
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "Which of the following describes the function of cerumen?",
            "points": 5,
            "options": [
                { "id": "a", "text": "To amplify sound waves", "isCorrect": false },
                { "id": "b", "text": "To protect and lubricate the ear canal", "isCorrect": true },
                { "id": "c", "text": "To equalize pressure in the middle ear", "isCorrect": false },
                { "id": "d", "text": "To maintain balance", "isCorrect": false }
            ],
            "explanation": "Cerumen (wax) contains lysozyme and immunoglobulins, protecting the canal and trapping debris."
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "The three bones of the middle ear are the Malleus, __b1__, and __b2__.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["Incus"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["Stapes"], "caseSensitive": false }
            ],
            "explanation": "The ossicles are the Malleus (hammer), Incus (anvil), and Stapes (stirrup)."
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "Why are children more susceptible to middle ear infections than adults?",
            "points": 5,
            "options": [
                { "id": "a", "text": "Their tympanic membranes are thinner", "isCorrect": false },
                { "id": "b", "text": "Their Eustachian tubes are shorter and wider", "isCorrect": true },
                { "id": "c", "text": "They produce more cerumen", "isCorrect": false },
                { "id": "d", "text": "Their cochlea is not fully developed", "isCorrect": false }
            ],
            "explanation": "The pediatric Eustachian tube is shorter, wider, and more horizontal, allowing easier entry of pathogens from the nasopharynx."
        }
    ]
});
