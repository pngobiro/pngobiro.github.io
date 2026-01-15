registerQuiz("topic-03-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-03-quiz",
    "metadata": {
        "title": "Respiratory Conditions Quiz",
        "topicId": "topic-03",
        "difficulty": "intermediate",
        "estimatedTime": 8,
        "passingScore": 80,
        "createdAt": "2025-12-28T10:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "fill-blank",
            "question": "The classic triad of asthma symptoms is cough, __1__, and __2__.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["dyspnea", "breathlessness"], "caseSensitive": false },
                { "id": "2", "acceptedAnswers": ["wheezing", "wheeze"], "caseSensitive": false }
            ],
            "explanation": "Asthma is characterized by cough, dyspnea (difficulty breathing), and wheezing."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "Which of the following is NOT a danger sign in severe pneumonia?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Oxygen saturation < 90%", "isCorrect": false },
                { "id": "b", "text": "Inability to drink", "isCorrect": false },
                { "id": "c", "text": "Grunting", "isCorrect": false },
                { "id": "d", "text": "Runny nose", "isCorrect": true }
            ],
            "explanation": "Runny nose is a sign of mild URTI. Danger signs include cyanosis, inability to feed, grunting, and low saturation."
        },
        {
            "id": "q3",
            "type": "true-false",
            "question": "After a tonsillectomy, children should be given red juices to maintain hydration.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "Red or brown fluids should be avoided as they can be confused with fresh blood in vomitus."
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "What is the characteristic cough associated with Croup (Acute Laryngotracheobronchitis)?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Wet and productive", "isCorrect": false },
                { "id": "b", "text": "Barking or brassy", "isCorrect": true },
                { "id": "c", "text": "Whooping", "isCorrect": false },
                { "id": "d", "text": "Silent", "isCorrect": false }
            ],
            "explanation": "Croup causes a distinctive 'barking' seal-like cough due to laryngeal swelling."
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "What is the primary sign of Otitis Media in an infant?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Headache", "isCorrect": false },
                { "id": "b", "text": "Pulling or holding the ear", "isCorrect": true },
                { "id": "c", "text": "Cough", "isCorrect": false },
                { "id": "d", "text": "Stiff neck", "isCorrect": false }
            ],
            "explanation": "Infants often indicate ear pain by rolling their head or pulling at their ears."
        }
    ]
});