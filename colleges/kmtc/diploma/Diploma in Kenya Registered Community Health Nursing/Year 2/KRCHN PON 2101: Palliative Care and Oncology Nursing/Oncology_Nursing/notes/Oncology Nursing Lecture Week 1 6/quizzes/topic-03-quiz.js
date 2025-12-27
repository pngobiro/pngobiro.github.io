registerQuiz("topic-03-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-03-quiz",
    "metadata": {
        "title": "Diagnostic Examinations",
        "description": "Assess knowledge of biopsy types, lab tests, and tumor markers.",
        "topicId": "topic-03",
        "difficulty": "intermediate",
        "estimatedTime": 12,
        "passingScore": 70,
        "createdAt": "2025-12-27T10:00:00Z"
    },
    "questions": [
        {
            "id": "t3-q1",
            "type": "multiple-choice",
            "question": "A Pap smear result of **Class II** is interpreted as:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Normal", "isCorrect": false },
                { "id": "b", "text": "Inflammation", "isCorrect": true },
                { "id": "c", "text": "Mild Dysplasia", "isCorrect": false },
                { "id": "d", "text": "Probably Malignant", "isCorrect": false }
            ],
            "explanation": "Class I is Normal. Class II is Inflammation. Class IV is Probably Malignant."
        },
        {
            "id": "t3-q2",
            "type": "matching",
            "question": "Match the tumor marker to the associated cancer.",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "PSA", "right": "Prostate Cancer" },
                { "id": "p2", "left": "CEA", "right": "Colorectal/Breast Cancer" },
                { "id": "p3", "left": "AFP", "right": "Liver/Testicular Cancer" }
            ]
        },
        {
            "id": "t3-q3",
            "type": "multiple-choice",
            "question": "Which type of biopsy involves removing the **entire** tumor (usually for small tumors)?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Needle Biopsy", "isCorrect": false },
                { "id": "b", "text": "Incision Biopsy", "isCorrect": false },
                { "id": "c", "text": "Excision Biopsy", "isCorrect": true },
                { "id": "d", "text": "Aspiration Biopsy", "isCorrect": false }
            ],
            "explanation": "Excision biopsy removes the entire tumor. Incision biopsy takes only a part of a large tumor."
        },
        {
            "id": "t3-q4",
            "type": "fill-blank",
            "question": "In a CBC, a low hemoglobin/hematocrit level indicates __b1__, which may be a sign of malignancy.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["anemia"], "caseSensitive": false }
            ],
            "explanation": "Anemia is a common paraneoplastic syndrome or result of bleeding/bone marrow suppression in cancer."
        }
    ]
});