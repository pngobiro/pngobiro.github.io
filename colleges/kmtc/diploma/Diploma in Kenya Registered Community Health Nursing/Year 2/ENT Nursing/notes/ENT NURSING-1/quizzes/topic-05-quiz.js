registerQuiz("topic-05-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-05-quiz",
    "metadata": {
        "title": "Inner Ear Conditions Quiz",
        "description": "Check your understanding of vertigo, Meniere's disease, and other inner ear pathologies.",
        "topicId": "topic-05",
        "difficulty": "advanced",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2025-12-25T12:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-select",
            "question": "What is the classic triad of symptoms in Meniere's Disease? (Select 3)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Episodic Vertigo", "isCorrect": true },
                { "id": "b", "text": "Severe Ear Pain", "isCorrect": false },
                { "id": "c", "text": "Tinnitus", "isCorrect": true },
                { "id": "d", "text": "Fluctuating Sensorineural Hearing Loss", "isCorrect": true },
                { "id": "e", "text": "Purulent Discharge", "isCorrect": false }
            ],
            "partialCredit": true,
            "explanation": "Meniere's triad: Vertigo, Tinnitus, and Hearing Loss. Aural fullness is also common."
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "Patients with Meniere's disease are often placed on a low __b1__ diet to control fluid retention.",
            "points": 5,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["sodium", "salt"], "caseSensitive": false }
            ],
            "explanation": "Sodium restriction (2000mg/day or less) helps reduce endolymphatic hydrops (fluid pressure)."
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "Which class of drugs is notoriously ototoxic and can cause irreversible hearing loss?",
            "points": 5,
            "options": [
                { "id": "a", "text": "Penicillins", "isCorrect": false },
                { "id": "b", "text": "Aminoglycosides", "isCorrect": true },
                { "id": "c", "text": "Beta-blockers", "isCorrect": false },
                { "id": "d", "text": "Corticosteroids", "isCorrect": false }
            ],
            "explanation": "Aminoglycosides (like Gentamicin) destroy hair cells in the cochlea and vestibule."
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "What is an Acoustic Neuroma?",
            "points": 5,
            "options": [
                { "id": "a", "text": "A malignant brain tumor", "isCorrect": false },
                { "id": "b", "text": "A benign tumor of Cranial Nerve VIII", "isCorrect": true },
                { "id": "c", "text": "An infection of the vestibular nerve", "isCorrect": false },
                { "id": "d", "text": "A cyst in the middle ear", "isCorrect": false }
            ],
            "explanation": "Acoustic Neuroma (Vestibular Schwannoma) is a slow-growing benign tumor on the vestibulocochlear nerve."
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "Labyrinthitis is inflammation of the inner ear that can cause sudden vertigo and nausea.",
            "points": 5,
            "correctAnswer": true,
            "explanation": "Labyrinthitis affects the bony labyrinth, disrupting both balance (vertigo) and hearing."
        }
    ]
});
