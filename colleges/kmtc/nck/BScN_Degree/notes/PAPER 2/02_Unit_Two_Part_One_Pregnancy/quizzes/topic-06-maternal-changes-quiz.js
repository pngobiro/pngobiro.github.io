registerQuiz("topic-06-maternal-changes-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-06-maternal-changes-quiz",
    "metadata": {
        "title": "Maternal Changes Quiz",
        "description": "Assess understanding of the physiological changes occurring in the mother during pregnancy.",
        "topicId": "topic-06-maternal-changes",
        "difficulty": "intermediate",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2026-01-11T12:00:00Z"
    },
    "settings": {
        "shuffleQuestions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "fill-blank",
            "question": "The cervical mucous plug that acts as a barrier against infection is known as the __b1__.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["operculum"], "caseSensitive": false }
            ],
            "explanation": "The operculum is the mucus plug formed in the cervix."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "Why does 'physiological anaemia' occur in pregnancy?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Loss of iron to the foetus", "isCorrect": false },
                { "id": "b", "text": "Plasma volume increases more than red cell mass (Haemodilution)", "isCorrect": true },
                { "id": "c", "text": "Decreased production of red blood cells", "isCorrect": false },
                { "id": "d", "text": "Haemorrhage during implantation", "isCorrect": false }
            ],
            "explanation": "Plasma volume increases by ~50% while red cells increase by ~18%, leading to dilution."
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "Which of the following gastrointestinal changes are common in pregnancy due to progesterone? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Heartburn (Gastric reflux)", "isCorrect": true },
                { "id": "b", "text": "Constipation (Sluggish gut motility)", "isCorrect": true },
                { "id": "c", "text": "Increased peristalsis", "isCorrect": false },
                { "id": "d", "text": "Relaxation of the cardiac sphincter", "isCorrect": true }
            ],
            "partialCredit": true,
            "explanation": "Progesterone relaxes smooth muscle, causing heartburn (relaxed sphincter) and constipation (reduced motility)."
        },
        {
            "id": "q4",
            "type": "image-based",
            "question": "Identify the breast structure labeled 'lactiferous sinus' (ampulla) in the context of lactation:",
            "points": 10,
            "imageUrl": "../assets/images/image-20260111-d63e7fb4.jpeg",
            "imageAlt": "Structure of the Breast diagram",
            "options": [
                { "id": "a", "text": "The reservoir where milk collects behind the nipple", "isCorrect": true },
                { "id": "b", "text": "The muscle layer of the chest wall", "isCorrect": false },
                { "id": "c", "text": "The secretory alveoli", "isCorrect": false }
            ],
            "explanation": "The lactiferous sinus (ampulla) acts as a temporary reservoir for milk behind the nipple."
        }
    ]
});