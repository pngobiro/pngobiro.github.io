registerQuiz("topic-05-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-05-quiz",
    "metadata": {
        "title": "Faecal-oral Diseases",
        "description": "Quiz on Typhoid, Cholera, Dysentery, and Hepatitis.",
        "topicId": "topic-05",
        "difficulty": "intermediate",
        "estimatedTime": 8,
        "passingScore": 70,
        "createdAt": "2026-01-16T00:00:00Z"
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate",
        "allowRetry": true
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "What is the characteristic stool appearance in Cholera?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Pea-soup stool", "isCorrect": false },
                { "id": "b", "text": "Rice-water stool", "isCorrect": true },
                { "id": "c", "text": "Bloody mucus", "isCorrect": false },
                { "id": "d", "text": "Frothy yellow stool", "isCorrect": false }
            ],
            "explanation": "Rice-water stool is the classical clinical sign of Cholera. Pea-soup is for Typhoid (Week 2)."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "In which week of Typhoid Fever is intestinal perforation most likely to occur?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Week 1", "isCorrect": false },
                { "id": "b", "text": "Week 2", "isCorrect": false },
                { "id": "c", "text": "Week 3", "isCorrect": true },
                { "id": "d", "text": "Week 4", "isCorrect": false }
            ],
            "explanation": "Complications like perforation of Peyer's patches typically occur in the third week of untreated typhoid."
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "Which of the following viruses are transmitted via the faecal-oral route? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Hepatitis A", "isCorrect": true },
                { "id": "b", "text": "Hepatitis B", "isCorrect": false },
                { "id": "c", "text": "Hepatitis C", "isCorrect": false },
                { "id": "d", "text": "Hepatitis E", "isCorrect": true }
            ],
            "explanation": "Hepatitis A and E are faecal-oral ('Infectious Hepatitis'). B, C, and D are blood-borne."
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "Metronidazole is the drug of choice for Amoebiasis.",
            "points": 5,
            "correctAnswer": true,
            "explanation": "Metronidazole is effective against the trophozoites of E. histolytica."
        },
        {
            "id": "q5",
            "type": "matching",
            "question": "Match the 4-Fs to their description:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Fluids", "right": "Contaminated water supply" },
                { "id": "p2", "left": "Fingers", "right": "Unwashed hands" },
                { "id": "p3", "left": "Flies", "right": "Mechanical vectors on food" },
                { "id": "p4", "left": "Food", "right": "Contaminated raw vegetables" }
            ]
        }
    ]
});