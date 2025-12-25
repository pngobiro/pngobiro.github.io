registerQuiz("topic-02-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-02-quiz",
    "metadata": {
        "title": "Topic 02: Oral & Dental Disorders",
        "description": "Assessment on gingivitis, periodontitis, oral thrush, and abscesses.",
        "topicId": "topic-02-oral-disorders",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2025-12-25T00:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "What is the primary cause of Gingivitis?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Vitamin C toxicity", "isCorrect": false },
                { "id": "b", "text": "Accumulation of dental plaque", "isCorrect": true },
                { "id": "c", "text": "Excessive saliva production", "isCorrect": false },
                { "id": "d", "text": "Antibiotic usage", "isCorrect": false }
            ],
            "explanation": "Gingivitis is primarily caused by film plaque accumulating on the teeth and bacteria."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "Which organism causes Oral Thrush?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Staphylococcus aureus", "isCorrect": false },
                { "id": "b", "text": "Helicobacter pylori", "isCorrect": false },
                { "id": "c", "text": "Candida albicans", "isCorrect": true },
                { "id": "d", "text": "Streptococcus mutans", "isCorrect": false }
            ],
            "explanation": "Oral thrush is an infection in which the fungus Candida albicans accumulates in the mouth."
        },
        {
            "id": "q3",
            "type": "matching",
            "question": "Match the stomatitis type with its description:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Canker Sore", "right": "Single pale ulcer with red outer ring" },
                { "id": "p2", "left": "Cold Sore", "right": "Fluid filled blisters (Fever blister)" }
            ]
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "Periodontitis is a non-destructive gum infection that does not affect the jawbone.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "Periodontitis is a serious gum infection that damages gums and *can destroy the jawbone*."
        },
        {
            "id": "q5",
            "type": "multiple-select",
            "question": "Which of the following are clinical features of a Dentoalveolar Abscess? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Dull, gnawing continuous pain", "isCorrect": true },
                { "id": "b", "text": "Surrounding cellulitis", "isCorrect": true },
                { "id": "c", "text": "Receding gums", "isCorrect": false },
                { "id": "d", "text": "Difficulty opening mouth (Trismus)", "isCorrect": true }
            ],
            "explanation": "Abscesses cause dull continuous pain, cellulitis, edema, and sometimes trismus. Receding gums is more typical of periodontitis."
        }
    ]
});
