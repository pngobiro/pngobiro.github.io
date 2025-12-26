registerQuiz("topic-05-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-05-quiz",
    "metadata": {
        "title": "Incontinence & Cystitis Quiz",
        "description": "Assess knowledge on urinary incontinence types and acute cystitis management.",
        "topicId": "topic-05-incontinence-cystitis",
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
            "type": "matching",
            "question": "Match the type of incontinence with its description:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Stress Incontinence", "right": "Leakage due to coughing, sneezing, or lifting" },
                { "id": "p2", "left": "Urge Incontinence", "right": "Due to overactive bladder muscles" },
                { "id": "p3", "left": "Functional Incontinence", "right": "Inability to reach the toilet (non-medical reason)" },
                { "id": "p4", "left": "Overflow Incontinence", "right": "Caused by blockage (e.g., enlarged prostate)" }
            ]
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "The pathogen responsible for 70-95% of Acute Cystitis cases is __1__.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["E. Coli", "Escherichia Coli", "E coli"], "caseSensitive": false }
            ],
            "explanation": "Escherichia Coli is the most common causative pathogen for cystitis."
        },
        {
            "id": "q3",
            "type": "image-based",
            "question": "Based on the diagram, which type of incontinence is caused by a blockage in the urethra?",
            "points": 10,
            "imageUrl": "../assets/images/image-20251226-ad7c749c.jpeg",
            "imageAlt": "Diagram of Incontinence Types",
            "options": [
                { "id": "a", "text": "Stress Incontinence", "isCorrect": false },
                { "id": "b", "text": "Overflow Incontinence", "isCorrect": true },
                { "id": "c", "text": "Urge Incontinence", "isCorrect": false }
            ],
            "explanation": "Overflow incontinence is depicted as being caused by urethral blockage, often from an enlarged prostate."
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "Which of the following is NOT a clinical feature of uncomplicated acute cystitis?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Pollakiuria (frequency)", "isCorrect": false },
                { "id": "b", "text": "Pain on urination", "isCorrect": false },
                { "id": "c", "text": "High Fever and Flank Pain", "isCorrect": true },
                { "id": "d", "text": "Urgency", "isCorrect": false }
            ],
            "explanation": "High fever and flank pain are signs of Pyelonephritis, not simple acute cystitis."
        }
    ]
});