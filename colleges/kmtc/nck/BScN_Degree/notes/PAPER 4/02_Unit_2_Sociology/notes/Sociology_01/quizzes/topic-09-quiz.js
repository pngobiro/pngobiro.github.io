registerQuiz("topic-09-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-09-quiz",
    "metadata": {
        "title": "Application in Nursing",
        "description": "Test your understanding of how sociology and anthropology apply to clinical nursing practice.",
        "topicId": "topic-09",
        "difficulty": "beginner",
        "estimatedTime": 4,
        "passingScore": 70,
        "createdAt": "2026-01-17T00:00:00Z",
        "updatedAt": "2026-01-17T00:00:00Z",
        "tags": ["nursing", "application", "clinical"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate",
        "allowRetry": true,
        "showCorrectAnswers": true
    },
    "questions": [
        {
            "id": "q1-relevance",
            "type": "multiple-choice",
            "question": "Why is it useful for nurses to study sociology and anthropology?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "To treat all patients exactly the same way", "isCorrect": false },
                { "id": "opt2", "text": "To appreciate that individuals behave uniquely and tailor care accordingly", "isCorrect": true },
                { "id": "opt3", "text": "To learn how to perform surgery", "isCorrect": false },
                { "id": "opt4", "text": "To avoid talking to patients' families", "isCorrect": false }
            ],
            "explanation": "It helps nurses understand unique behaviors and tailor the nursing process to individual needs."
        },
        {
            "id": "q2-prof-socialisation",
            "type": "fill-blank",
            "question": "The process by which a student nurse learns the ways of the profession, adapts to the hospital world, and becomes a recognised nurse is called __b1__ socialisation.",
            "points": 1,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["professional"], "caseSensitive": false }
            ],
            "explanation": "Professional socialisation is learning the culture and roles of a specific profession."
        },
        {
            "id": "q3-factors",
            "type": "multiple-select",
            "question": "Which factors should a nurse be aware of regarding a patient's background? (Select all that apply)",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Physical environment (housing, water)", "isCorrect": true },
                { "id": "opt2", "text": "Social background (family relationships)", "isCorrect": true },
                { "id": "opt3", "text": "Psychological factors (grief, stress)", "isCorrect": true },
                { "id": "opt4", "text": "None of the above", "isCorrect": false }
            ],
            "explanation": "Environment, social background, and psychological factors all influence health."
        },
        {
            "id": "q4-observation",
            "type": "true-false",
            "question": "Observing a patient's style of dressing, language, and accompanying relatives provides valuable background information for the patient's history.",
            "points": 1,
            "correctAnswer": true,
            "explanation": "True. These observations provide cultural context that aids in care planning."
        }
    ]
});