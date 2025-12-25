registerQuiz("topic-03-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-03-quiz",
    "metadata": {
        "title": "Hearing Loss Quiz",
        "description": "Assess your knowledge on types, causes, and management of hearing loss.",
        "topicId": "topic-03",
        "difficulty": "intermediate",
        "estimatedTime": 12,
        "passingScore": 70,
        "createdAt": "2025-12-25T12:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "matching",
            "question": "Classify the following causes of hearing loss:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Impacted Cerumen", "right": "Conductive" },
                { "id": "p2", "left": "Ototoxic Drugs", "right": "Sensorineural" },
                { "id": "p3", "left": "Otosclerosis", "right": "Conductive" },
                { "id": "p4", "left": "Presbycusis", "right": "Sensorineural" },
                { "id": "p5", "left": "CVA (Stroke)", "right": "Central" }
            ],
            "explanation": "Conductive affects outer/middle ear. Sensorineural affects inner ear/nerve. Central affects brain."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "A hearing loss of 75 decibels is classified as:",
            "points": 5,
            "options": [
                { "id": "a", "text": "Mild impairment", "isCorrect": false },
                { "id": "b", "text": "Moderate impairment", "isCorrect": false },
                { "id": "c", "text": "Severely impaired", "isCorrect": true },
                { "id": "d", "text": "Profoundly deaf", "isCorrect": false }
            ],
            "explanation": "71-90 dB is classified as severe impairment. >90 dB is profound."
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "Which of the following are clinical manifestations of hearing loss? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Tinnitus", "isCorrect": true },
                { "id": "b", "text": "Speaking in a very quiet voice", "isCorrect": false },
                { "id": "c", "text": "Answering questions inappropriately", "isCorrect": true },
                { "id": "d", "text": "Social withdrawal", "isCorrect": true },
                { "id": "e", "text": "Increased volume of TV/Radio", "isCorrect": true }
            ],
            "partialCredit": true,
            "explanation": "Patients often speak loudly (unable to monitor own voice) rather than quietly."
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "Sensorineural hearing loss involves damage to the cochlea or the eighth cranial nerve.",
            "points": 5,
            "correctAnswer": true,
            "explanation": "Sensorineural loss is 'perceptive' loss involving the inner ear structures or nerve pathways."
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "Which device helps conductive hearing loss by transmitting sound through the skull?",
            "points": 5,
            "options": [
                { "id": "a", "text": "Cochlear Implant", "isCorrect": false },
                { "id": "b", "text": "Temporal Bone Stimulator", "isCorrect": true },
                { "id": "c", "text": "Standard Hearing Aid", "isCorrect": false },
                { "id": "d", "text": "Stapedectomy", "isCorrect": false }
            ],
            "explanation": "A temporal bone stimulator bypasses the outer/middle ear and vibrates the skull to stimulate the cochlea directly."
        }
    ]
});
