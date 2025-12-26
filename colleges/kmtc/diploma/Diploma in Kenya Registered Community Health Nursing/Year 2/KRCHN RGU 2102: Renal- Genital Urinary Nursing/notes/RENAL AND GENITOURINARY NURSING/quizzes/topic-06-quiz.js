registerQuiz("topic-06-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-06-quiz",
    "metadata": {
        "title": "Congenital Anomalies Quiz",
        "description": "Test understanding of Hypospadias and Epispadias.",
        "topicId": "topic-06-congenital-anomalies",
        "difficulty": "intermediate",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2025-12-26T12:00:00Z"
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Hypospadias is characterized by the urethral opening being located on which side of the penis?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Dorsal (Upper)", "isCorrect": false },
                { "id": "b", "text": "Ventral (Under)", "isCorrect": true },
                { "id": "c", "text": "Lateral", "isCorrect": false },
                { "id": "d", "text": "At the tip only", "isCorrect": false }
            ],
            "explanation": "Hypospadias is a defect where the opening is on the ventral (underside) of the penis."
        },
        {
            "id": "q2",
            "type": "image-based",
            "question": "Identify the degree of Hypospadias where the opening is at the junction of the penis and scrotum:",
            "points": 10,
            "imageUrl": "../assets/images/image-20251226-193772dc.jpeg",
            "imageAlt": "Hypospadias Classification",
            "options": [
                { "id": "a", "text": "1st Degree (Glandular)", "isCorrect": false },
                { "id": "b", "text": "2nd Degree (Penile)", "isCorrect": false },
                { "id": "c", "text": "3rd Degree (Penoscrotal)", "isCorrect": true }
            ],
            "explanation": "3rd Degree (Penoscrotal) hypospadias involves an opening at the junction of the penis and scrotum."
        },
        {
            "id": "q3",
            "type": "true-false",
            "question": "Circumcision is recommended for infants with hypospadias to keep the area clean.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "Circumcision should be AVOIDED as the foreskin is often used for the surgical repair (urethroplasty)."
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "An anomaly where the urethra opens on the upper (dorsal) aspect of the penis is called __1__.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["Epispadias"], "caseSensitive": false }
            ],
            "explanation": "Epispadias is the rare malformation where the urethra ends on the upper aspect of the penis."
        }
    ]
});