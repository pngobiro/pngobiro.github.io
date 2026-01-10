registerQuiz("topic-04-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-04-quiz",
    "metadata": {
        "title": "Common Cancers Quiz",
        "description": "Review cancer types, causes, and control strategies.",
        "topicId": "topic-04-cancers",
        "difficulty": "intermediate",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2026-01-10T12:00:00Z",
        "tags": ["cancer", "oncology", "prevention"]
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
            "question": "Which of the following viruses is strongly linked to Cervical Cancer?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Hepatitis B", "isCorrect": false },
                { "id": "b", "text": "Human Papillomavirus (HPV)", "isCorrect": true },
                { "id": "c", "text": "Influenza", "isCorrect": false },
                { "id": "d", "text": "HIV", "isCorrect": false }
            ],
            "explanation": "HPV is the primary cause of cervical cancer and can be prevented by vaccination."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the cancer type with its common symptom or characteristic:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Melanoma", "right": "New or changing moles" },
                { "id": "p2", "left": "Leukemia", "right": "Blood/bone marrow disorder, fatigue" },
                { "id": "p3", "left": "Colorectal Cancer", "right": "Changes in bowel habits, blood in stool" },
                { "id": "p4", "left": "Breast Cancer", "right": "Lumps, skin changes, nipple abnormalities" }
            ]
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "Select the valid prevention strategies for cancer:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Vaccination (HPV, Hep B)", "isCorrect": true },
                { "id": "b", "text": "Avoiding tobacco", "isCorrect": true },
                { "id": "c", "text": "Screening (Mammograms, Pap smears)", "isCorrect": true },
                { "id": "d", "text": "High sugar diet", "isCorrect": false }
            ],
            "explanation": "Vaccination, tobacco cessation, and regular screening are key prevention methods."
        },
        {
            "id": "q4",
            "type": "short-answer",
            "question": "Cancer is characterized by the uncontrolled growth and spread of abnormal __________.",
            "points": 5,
            "keywords": ["cell", "cells"],
            "minKeywords": 1,
            "modelAnswer": "cells",
            "explanation": "Cancer is defined by the uncontrolled growth of abnormal cells."
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "Cancer is the leading cause of death worldwide.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "Cancer is the *second* leading cause of death; Cardiovascular diseases are the leading cause."
        }
    ]
});