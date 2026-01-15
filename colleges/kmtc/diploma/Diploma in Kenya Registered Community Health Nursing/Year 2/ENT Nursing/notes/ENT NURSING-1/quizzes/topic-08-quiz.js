registerQuiz("topic-08-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-08-quiz",
    "metadata": {
        "title": "Laryngeal Cancer & Laryngectomy Quiz",
        "description": "Test your knowledge on oncology nursing care for laryngeal cancer patients.",
        "topicId": "topic-08",
        "difficulty": "advanced",
        "estimatedTime": 15,
        "passingScore": 75,
        "createdAt": "2025-12-25T12:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "What is the cardinal early symptom of glottic laryngeal cancer?",
            "points": 5,
            "options": [
                { "id": "a", "text": "Dyspnea", "isCorrect": false },
                { "id": "b", "text": "Persistent hoarseness (>2 weeks)", "isCorrect": true },
                { "id": "c", "text": "Hemoptysis", "isCorrect": false },
                { "id": "d", "text": "Weight loss", "isCorrect": false }
            ],
            "explanation": "Hoarseness is an early sign because the tumor prevents proper vocal cord closure. Other symptoms appear later."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "Which surgical procedure involves removal of the entire larynx, requiring a permanent stoma?",
            "points": 5,
            "options": [
                { "id": "a", "text": "Supraglottic Laryngectomy", "isCorrect": false },
                { "id": "b", "text": "Hemilaryngectomy", "isCorrect": false },
                { "id": "c", "text": "Total Laryngectomy", "isCorrect": true },
                { "id": "d", "text": "Laser Cordectomy", "isCorrect": false }
            ],
            "explanation": "Total laryngectomy separates the airway from the esophagus completely, necessitating a permanent tracheostomy."
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "What are critical postoperative nursing interventions after a laryngectomy? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Maintain semi-Fowler's position", "isCorrect": true },
                { "id": "b", "text": "Monitor for hemorrhage and carotid blowout", "isCorrect": true },
                { "id": "c", "text": "Provide writing materials for communication", "isCorrect": true },
                { "id": "d", "text": "Encourage vigorous coughing immediately", "isCorrect": false },
                { "id": "e", "text": "Humidify inspired air", "isCorrect": true }
            ],
            "partialCredit": true,
            "explanation": "Positioning helps breathing/edema; hemorrhage is a risk; communication is altered; humidity prevents crusting. Vigorous coughing may damage sutures."
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "A patient with a total laryngectomy can still aspirate food into the lungs.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "In a total laryngectomy, the trachea is sutured to the neck skin (stoma) and separated from the esophagus. Aspiration is physically impossible unless a fistula forms."
        },
        {
            "id": "q5",
            "type": "fill-blank",
            "question": "The complication where the carotid artery erodes and ruptures is known as __b1__ breakdown or carotid blowout.",
            "points": 5,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["wound"], "caseSensitive": false }
            ],
            "explanation": "Wound breakdown/infection can expose the carotid artery, leading to catastrophic hemorrhage."
        }
    ]
});
