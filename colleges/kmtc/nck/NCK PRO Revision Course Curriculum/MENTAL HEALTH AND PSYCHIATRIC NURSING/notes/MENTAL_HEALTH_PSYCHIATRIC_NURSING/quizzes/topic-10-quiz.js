registerQuiz("topic-10-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-10-quiz",
    "metadata": {
        "title": "Child Psychiatry Quiz",
        "description": "Test understanding of ADHD, Autism, and developmental disorders.",
        "topicId": "topic-10",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2026-01-21T12:00:00Z",
        "updatedAt": "2026-01-21T12:00:00Z",
        "tags": ["child", "adhd", "autism"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "t10-q1",
            "type": "multiple-choice",
            "question": "Which of the following triad characterizes ADHD?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Inattention, Hyperactivity, Impulsivity", "isCorrect": true },
                { "id": "opt2", "text": "Hallucinations, Delusions, Speech poverty", "isCorrect": false },
                { "id": "opt3", "text": "Social withdrawal, Communication deficit, Stereotypy", "isCorrect": false },
                { "id": "opt4", "text": "Depression, Anxiety, Phobia", "isCorrect": false }
            ],
            "explanation": "ADHD is characterized by Inattention, Hyperactivity, and Impulsivity."
        },
        {
            "id": "t10-q2",
            "type": "multiple-choice",
            "question": "Which medication is a CNS stimulant used for ADHD?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Haloperidol", "isCorrect": false },
                { "id": "opt2", "text": "Methylphenidate (Ritalin)", "isCorrect": true },
                { "id": "opt3", "text": "Diazepam", "isCorrect": false },
                { "id": "opt4", "text": "Fluoxetine", "isCorrect": false }
            ],
            "explanation": "Methylphenidate (Ritalin) is a CNS stimulant commonly used for ADHD."
        },
        {
            "id": "t10-q3",
            "type": "multiple-choice",
            "question": "A main sign of Anorexia Nervosa is:",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Binge eating", "isCorrect": false },
                { "id": "opt2", "text": "Fear of gaining weight even when underweight", "isCorrect": true },
                { "id": "opt3", "text": "Loss of dental enamel", "isCorrect": false },
                { "id": "opt4", "text": "Normal body weight", "isCorrect": false }
            ],
            "explanation": "Anorexia involves intense fear of gaining weight despite being underweight. Dental enamel loss is more common in Bulimia."
        },
        {
            "id": "t10-q4",
            "type": "matching",
            "question": "Match the level of Mental Retardation to the IQ range:",
            "points": 4,
            "pairs": [
                { "id": "pair1", "left": "Mild", "right": "50-70" },
                { "id": "pair2", "left": "Moderate", "right": "35-50" },
                { "id": "pair3", "left": "Severe", "right": "20-35" },
                { "id": "pair4", "left": "Profound", "right": "Below 20" }
            ],
            "explanation": "Mild (50-70), Moderate (35-50), Severe (20-35), Profound (<20)."
        }
    ]
});