registerQuiz("topic-01-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-01-quiz",
    "metadata": {
        "title": "Basic Concepts of Oncology",
        "description": "Assess your understanding of cancer definitions, cellular changes, and etiology.",
        "topicId": "topic-01",
        "difficulty": "beginner",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2025-12-27T10:00:00Z"
    },
    "questions": [
        {
            "id": "t1-q1",
            "type": "multiple-choice",
            "question": "Which term describes the 'replacement of one adult cell type by a different adult cell type'?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Dysplasia", "isCorrect": false },
                { "id": "b", "text": "Metaplasia", "isCorrect": true },
                { "id": "c", "text": "Anaplasia", "isCorrect": false },
                { "id": "d", "text": "Hyperplasia", "isCorrect": false }
            ],
            "explanation": "Metaplasia is the reversible replacement of one adult cell type by another. Anaplasia refers to reverse cellular development to a primitive type."
        },
        {
            "id": "t1-q2",
            "type": "matching",
            "question": "Match the characteristic to the correct type of neoplasm.",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Encapsulated", "right": "Benign" },
                { "id": "p2", "left": "Metastasis is common", "right": "Malignant" },
                { "id": "p3", "left": "Grows slowly", "right": "Benign" },
                { "id": "p4", "left": "Infiltrates surrounding tissue", "right": "Malignant" }
            ]
        },
        {
            "id": "t1-q3",
            "type": "fill-blank",
            "question": "A cancer arising from glandular tissue is called an __b1__, while a cancer arising from connective tissue (like bone or muscle) is called a __b2__.",
            "points": 20,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["adenocarcinoma"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["sarcoma"], "caseSensitive": false }
            ],
            "explanation": "Adenocarcinoma = glandular origin. Sarcoma = connective/mesodermal origin."
        },
        {
            "id": "t1-q4",
            "type": "multiple-choice",
            "question": "Which virus is specifically associated with the development of Cervical Cancer?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Epstein-Barr Virus", "isCorrect": false },
                { "id": "b", "text": "Hepatitis B", "isCorrect": false },
                { "id": "c", "text": "Human Papilloma Virus (HPV)", "isCorrect": true },
                { "id": "d", "text": "Helicobacter Pylori", "isCorrect": false }
            ],
            "explanation": "HPV is a major risk factor for cervical cancer. Epstein-Barr is linked to lymphoma; Hepatitis to liver cancer."
        },
        {
            "id": "t1-q5",
            "type": "true-false",
            "question": "According to the 'Failure of the Immune Response Theory', all individuals possess cancer cells, but they are usually recognized and destroyed by the immune system.",
            "points": 10,
            "correctAnswer": true,
            "explanation": "This theory suggests cancer develops when the immune surveillance system fails to identify and eliminate these aberrant cells."
        }
    ]
});