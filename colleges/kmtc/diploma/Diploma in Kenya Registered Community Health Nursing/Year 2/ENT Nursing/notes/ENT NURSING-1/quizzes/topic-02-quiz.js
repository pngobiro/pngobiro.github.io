registerQuiz("topic-02-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-02-quiz",
    "metadata": {
        "title": "Auditory Assessment Quiz",
        "description": "Evaluate your understanding of history taking, physical exam, and diagnostic tests.",
        "topicId": "topic-02",
        "difficulty": "intermediate",
        "estimatedTime": 12,
        "passingScore": 70,
        "createdAt": "2025-12-25T12:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "What is the normal appearance of the tympanic membrane during otoscopy?",
            "points": 5,
            "options": [
                { "id": "a", "text": "Red and bulging", "isCorrect": false },
                { "id": "b", "text": "Pearly grey and translucent", "isCorrect": true },
                { "id": "c", "text": "Yellow and opaque", "isCorrect": false },
                { "id": "d", "text": "Retracted with visible fluid", "isCorrect": false }
            ],
            "explanation": "A healthy eardrum is pearly grey, translucent, and reflects light (cone of light)."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "In a Rinne test, a patient hears the tuning fork longer in front of the ear than on the mastoid bone (AC > BC). What does this indicate?",
            "points": 5,
            "options": [
                { "id": "a", "text": "Normal hearing or sensorineural loss", "isCorrect": true },
                { "id": "b", "text": "Conductive hearing loss", "isCorrect": false },
                { "id": "c", "text": "Mixed hearing loss", "isCorrect": false },
                { "id": "d", "text": "Complete deafness", "isCorrect": false }
            ],
            "explanation": "A positive Rinne (AC > BC) is normal. It can also occur in sensorineural loss (though total time is reduced)."
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "A patient with conductive hearing loss in the left ear undergoes a Weber test. Where will the sound lateralize?",
            "points": 5,
            "options": [
                { "id": "a", "text": "To the right ear (better ear)", "isCorrect": false },
                { "id": "b", "text": "To the left ear (affected ear)", "isCorrect": true },
                { "id": "c", "text": "Equally in both ears", "isCorrect": false },
                { "id": "d", "text": "It will not be heard", "isCorrect": false }
            ],
            "explanation": "In conductive loss, bone conduction sound lateralizes to the affected ear because it is not distracted by ambient room noise (air conduction)."
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "The __b1__ test assesses the inner ear for balance by having the patient stand with feet together and eyes closed.",
            "points": 5,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["Romberg", "romberg"], "caseSensitive": false }
            ],
            "explanation": "A positive Romberg test (loss of balance) indicates vestibular or proprioceptive dysfunction."
        },
        {
            "id": "q5",
            "type": "multiple-select",
            "question": "Which of the following are contraindications for a Caloric Test? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Perforated tympanic membrane", "isCorrect": true },
                { "id": "b", "text": "Acute otitis media", "isCorrect": true },
                { "id": "c", "text": "Sensorineural hearing loss", "isCorrect": false },
                { "id": "d", "text": "Vertigo history", "isCorrect": false }
            ],
            "partialCredit": true,
            "explanation": "Putting water into an ear with a perforation or active infection can spread infection or cause severe pain."
        }
    ]
});
