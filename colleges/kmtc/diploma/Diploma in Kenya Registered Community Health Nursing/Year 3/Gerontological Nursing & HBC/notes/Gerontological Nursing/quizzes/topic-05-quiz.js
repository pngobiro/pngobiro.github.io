registerQuiz("topic-05-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-05-quiz",
    "metadata": {
        "title": "Pharmacology in the Elderly",
        "description": "Test your knowledge of pharmacokinetics and safe medication management.",
        "topicId": "topic-05-pharmacology",
        "difficulty": "advanced",
        "estimatedTime": 15,
        "passingScore": 75,
        "createdAt": "2025-12-27T10:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "How does the decrease in total body water affect water-soluble drugs in the elderly?",
            "points": 10,
            "options": [
                { "id": "a", "text": "They are diluted more, reducing effectiveness", "isCorrect": false },
                { "id": "b", "text": "They remain in the bloodstream in higher concentrations", "isCorrect": true },
                { "id": "c", "text": "They are excreted faster", "isCorrect": false },
                { "id": "d", "text": "They bind more to proteins", "isCorrect": false }
            ],
            "explanation": "With less water volume to dissolve in, water-soluble drugs have a smaller volume of distribution, leading to higher serum levels and toxicity risk."
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "The use of excessive, often unnecessary drugs is known as __b1__.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["polypharmacy"], "caseSensitive": false }
            ],
            "explanation": "Polypharmacy is a major safety concern in geriatrics."
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "What is the effect of reduced plasma protein (albumin) on protein-bound drugs?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Decreased effect of the drug", "isCorrect": false },
                { "id": "b", "text": "Increased available sites for binding", "isCorrect": false },
                { "id": "c", "text": "Increased level of free (active) drug in the blood", "isCorrect": true },
                { "id": "d", "text": "Slower metabolism", "isCorrect": false }
            ],
            "explanation": "Fewer binding sites mean more 'free' drug circulates, potentially leading to overdose/toxicity even at normal doses."
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "Which change in the stomach affects drug absorption?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Increased gastric acid", "isCorrect": false },
                { "id": "b", "text": "Decreased gastric pH (more acidic)", "isCorrect": false },
                { "id": "c", "text": "Increased gastric motility", "isCorrect": false },
                { "id": "d", "text": "Reduced gastric acid and enzymes (increased pH)", "isCorrect": true }
            ],
            "explanation": "The stomach becomes less acidic (higher pH), which can hinder the breakdown of drugs designed to dissolve in acid."
        },
        {
            "id": "q5",
            "type": "matching",
            "question": "Match the drug class with its potential side effect in the elderly:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Sedatives/Hypnotics", "right": "Confusion, falls, delusions" },
                { "id": "p2", "left": "Analgesics (Salicylates)", "right": "Bleeding, nephrotoxicity" },
                { "id": "p3", "left": "Cardiovascular (Digitalis)", "right": "Dysrhythmias, mental changes" },
                { "id": "p4", "left": "Tranquilizers", "right": "Hypotension, cerebral depression" }
            ]
        }
    ]
});