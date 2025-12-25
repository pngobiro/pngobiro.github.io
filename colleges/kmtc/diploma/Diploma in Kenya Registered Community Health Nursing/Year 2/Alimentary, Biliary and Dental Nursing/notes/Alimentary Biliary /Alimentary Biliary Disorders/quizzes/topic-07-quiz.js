registerQuiz("topic-07-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-07-quiz",
    "metadata": {
        "title": "Topic 07: Colorectal Disorders",
        "description": "Questions covering ulcerative colitis, haemorrhoids, and colorectal cancer.",
        "topicId": "topic-07-colorectal",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2025-12-25T00:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which part of the GIT is affected by Ulcerative Colitis?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Transmural layers of small intestine", "isCorrect": false },
                { "id": "b", "text": "Mucosal and submucosal layers of colon and rectum", "isCorrect": true },
                { "id": "c", "text": "Stomach and duodenum", "isCorrect": false },
                { "id": "d", "text": "Oesophagus only", "isCorrect": false }
            ],
            "explanation": "Ulcerative colitis affects the mucosal and submucosal layers of the colon and rectum."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the type of haemorrhoid with its characteristics:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Internal Haemorrhoids", "right": "Not usually painful until they bleed or prolapse" },
                { "id": "p2", "left": "External Haemorrhoids", "right": "Associated with severe pain and thrombosis" }
            ]
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "Which of the following are risk factors for Colorectal Cancer? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "High alcohol consumption", "isCorrect": true },
                { "id": "b", "text": "High-fibre diet", "isCorrect": false },
                { "id": "c", "text": "History of Inflammatory Bowel Disease", "isCorrect": true },
                { "id": "d", "text": "Age > 85 years", "isCorrect": true }
            ],
            "explanation": "Risk factors include alcohol, IBD, and age. A high-fibre diet is actually protective, while a low-fibre diet is a risk factor."
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "What is 'Tenesmus'?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Vomiting blood", "isCorrect": false },
                { "id": "b", "text": "Ineffective, painful straining at stool", "isCorrect": true },
                { "id": "c", "text": "Black tarry stools", "isCorrect": false },
                { "id": "d", "text": "Fatty stools", "isCorrect": false }
            ],
            "explanation": "Tenesmus is ineffective, painful straining at stool, often associated with rectal lesions."
        }
    ]
});
