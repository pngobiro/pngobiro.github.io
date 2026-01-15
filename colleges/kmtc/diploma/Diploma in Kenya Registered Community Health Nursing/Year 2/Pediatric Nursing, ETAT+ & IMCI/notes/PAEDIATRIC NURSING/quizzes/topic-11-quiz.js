registerQuiz("topic-11-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-11-quiz",
    "metadata": {
        "title": "Paediatric HIV Quiz",
        "topicId": "topic-11",
        "difficulty": "advanced",
        "estimatedTime": 8,
        "passingScore": 80,
        "createdAt": "2025-12-28T10:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "What is the recommended test for HIV diagnosis in infants under 18 months?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Rapid Antibody Test", "isCorrect": false },
                { "id": "b", "text": "HIV DNA PCR", "isCorrect": true },
                { "id": "c", "text": "ELISA", "isCorrect": false },
                { "id": "d", "text": "Clinical diagnosis only", "isCorrect": false }
            ],
            "explanation": "Antibody tests are invalid due to maternal antibodies; DNA PCR detects the virus directly."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "Co-trimoxazole prophylaxis should start at what age for HIV exposed infants?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Birth", "isCorrect": false },
                { "id": "b", "text": "6 weeks", "isCorrect": true },
                { "id": "c", "text": "6 months", "isCorrect": false },
                { "id": "d", "text": "1 year", "isCorrect": false }
            ],
            "explanation": "CTX prophylaxis starts at 6 weeks to prevent PCP."
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "Pneumocystis Pneumonia (PCP) is classified under which WHO Clinical Stage?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Stage I", "isCorrect": false },
                { "id": "b", "text": "Stage II", "isCorrect": false },
                { "id": "c", "text": "Stage III", "isCorrect": false },
                { "id": "d", "text": "Stage IV", "isCorrect": true }
            ],
            "explanation": "PCP is a severe AIDS-defining condition (Stage IV)."
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "Infant Nevirapine prophylaxis is given for __1__ weeks.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["12"], "caseSensitive": false }
            ],
            "explanation": "Nevirapine prophylaxis is given for 12 weeks to exposed infants."
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "If an infant's initial DNA PCR is positive, ART should be started immediately.",
            "points": 10,
            "correctAnswer": true,
            "explanation": "Immediate ART initiation is crucial. A confirmatory sample is taken, but treatment starts based on the first positive result."
        }
    ]
});