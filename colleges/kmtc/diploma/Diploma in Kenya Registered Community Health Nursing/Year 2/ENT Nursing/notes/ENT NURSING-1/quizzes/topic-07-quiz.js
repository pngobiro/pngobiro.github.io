registerQuiz("topic-07-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-07-quiz",
    "metadata": {
        "title": "Throat & Larynx Conditions Quiz",
        "description": "Assess your knowledge on tonsillitis, peritonsillar abscess, and laryngitis.",
        "topicId": "topic-07",
        "difficulty": "intermediate",
        "estimatedTime": 12,
        "passingScore": 70,
        "createdAt": "2025-12-25T12:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "What is the most frequent sign of post-operative hemorrhage after a tonsillectomy?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Complaints of pain", "isCorrect": false },
                { "id": "b", "text": "Frequent swallowing", "isCorrect": true },
                { "id": "c", "text": "High fever", "isCorrect": false },
                { "id": "d", "text": "Refusal to eat", "isCorrect": false }
            ],
            "explanation": "Frequent swallowing indicates the patient is swallowing trickling blood from the surgical site."
        },
        {
            "id": "q2",
            "type": "multiple-select",
            "question": "Which of the following are signs of a Peritonsillar Abscess (Quinsy)? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Trismus (lockjaw)", "isCorrect": true },
                { "id": "b", "text": "Uvula deviation", "isCorrect": true },
                { "id": "c", "text": "Drooling", "isCorrect": true },
                { "id": "d", "text": "Clear voice", "isCorrect": false },
                { "id": "e", "text": "Severe sore throat (Odynophagia)", "isCorrect": true }
            ],
            "partialCredit": true,
            "explanation": "Quinsy causes severe pain, difficulty opening mouth (trismus), drooling due to inability to swallow, and muffled 'hot potato' voice."
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "Which structure closes off the larynx during swallowing to prevent aspiration?",
            "points": 5,
            "options": [
                { "id": "a", "text": "Thyroid Cartilage", "isCorrect": false },
                { "id": "b", "text": "Cricoid Cartilage", "isCorrect": false },
                { "id": "c", "text": "Epiglottis", "isCorrect": true },
                { "id": "d", "text": "Vocal Cords", "isCorrect": false }
            ],
            "explanation": "The epiglottis acts as a lid, covering the glottis during swallowing to protect the airway."
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "Complete loss of voice is known as __b1__.",
            "points": 5,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["aphonia"], "caseSensitive": false }
            ],
            "explanation": "Aphonia is the loss of voice; Dysphonia is hoarseness/difficulty speaking."
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "A patient with acute laryngitis should be encouraged to whisper to spare their voice.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "Whispering actually strains the vocal cords more than normal speech. Total voice rest (writing) is preferred."
        }
    ]
});
