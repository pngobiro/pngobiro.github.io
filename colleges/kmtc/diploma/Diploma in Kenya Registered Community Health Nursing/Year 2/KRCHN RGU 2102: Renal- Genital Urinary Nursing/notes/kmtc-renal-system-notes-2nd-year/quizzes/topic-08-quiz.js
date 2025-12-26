registerQuiz("topic-08-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-08-quiz",
    "metadata": {
        "title": "Systemic Disorders Quiz",
        "description": "Assess knowledge on Goodpasture's, Polycystic Kidney Disease, and RTA.",
        "topicId": "topic-08-systemic-disorders",
        "difficulty": "advanced",
        "estimatedTime": 20,
        "passingScore": 70,
        "createdAt": "2025-12-26T10:00:00Z"
    },
    "settings": {
        "shuffleQuestions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Goodpasture syndrome is characterized by hemorrhage in which two organs?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Liver and Kidney", "isCorrect": false },
                { "id": "b", "text": "Lung and Kidney", "isCorrect": true },
                { "id": "c", "text": "Heart and Lung", "isCorrect": false },
                { "id": "d", "text": "Brain and Kidney", "isCorrect": false }
            ],
            "explanation": "It involves alveolar (lung) hemorrhage and glomerular (kidney) hemorrhage."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "Which statement about Polycystic Kidney Disease (PKD) is true?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Infantile type is Autosomal Dominant", "isCorrect": false },
                { "id": "b", "text": "Adult type is Autosomal Recessive", "isCorrect": false },
                { "id": "c", "text": "Adult type is Autosomal Dominant", "isCorrect": true },
                { "id": "d", "text": "It affects only one kidney", "isCorrect": false }
            ],
            "explanation": "Adult PKD is Autosomal Dominant and affects both kidneys."
        },
        {
            "id": "q3",
            "type": "matching",
            "question": "Match the type of Renal Tubular Acidosis (RTA) to its defect site:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Type 1 RTA", "right": "Distal Tubule" },
                { "id": "p2", "left": "Type 2 RTA", "right": "Proximal Tubule" }
            ]
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "Alport's syndrome is characterized by hereditary nephritis associated with sensory __b1__.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["neurodeafness", "deafness", "hearing loss"], "caseSensitive": false }
            ],
            "explanation": "Sensory neurodeafness is the hallmark extra-renal feature of Alport's syndrome."
        }
    ]
});