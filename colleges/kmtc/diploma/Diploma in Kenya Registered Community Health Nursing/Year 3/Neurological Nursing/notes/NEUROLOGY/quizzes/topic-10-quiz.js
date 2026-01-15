registerQuiz("topic-10-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-10-quiz",
    "metadata": {
        "title": "Pediatric Neurology Quiz",
        "topicId": "topic-10",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2025-12-28T12:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which sign involves a child using their hands to 'walk up' their legs to stand, indicative of Duchenne Muscular Dystrophy?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Kernig's Sign", "isCorrect": false },
                { "id": "b", "text": "Gower's Sign", "isCorrect": true },
                { "id": "c", "text": "Babinski Sign", "isCorrect": false },
                { "id": "d", "text": "Brudzinski's Sign", "isCorrect": false }
            ],
            "explanation": "Gower's sign indicates proximal muscle weakness."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "What is the primary surgical treatment for Hydrocephalus?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Craniotomy", "isCorrect": false },
                { "id": "b", "text": "Ventriculostomy (Shunt insertion)", "isCorrect": true },
                { "id": "c", "text": "Lumbar Puncture", "isCorrect": false },
                { "id": "d", "text": "Burr Holes", "isCorrect": false }
            ],
            "explanation": "A shunt (e.g., VP shunt) drains excess CSF to another body cavity."
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "Which of the following are types of Spina Bifida? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Spina Bifida Occulta", "isCorrect": true },
                { "id": "b", "text": "Meningocele", "isCorrect": true },
                { "id": "c", "text": "Myelomeningocele", "isCorrect": true },
                { "id": "d", "text": "Anencephaly", "isCorrect": false }
            ],
            "partialCredit": true
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "In an infant with hydrocephalus, the nurse might palpate a bulging __1__.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["fontanelle", "anterior fontanelle"], "caseSensitive": false }
            ],
            "explanation": "Increased ICP causes the soft spots (fontanelles) to bulge."
        }
    ]
});