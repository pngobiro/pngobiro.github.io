registerQuiz("topic-08-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-08-quiz",
    "metadata": {
        "title": "Congenital Anomalies Quiz",
        "topicId": "topic-08",
        "difficulty": "advanced",
        "estimatedTime": 10,
        "passingScore": 80,
        "createdAt": "2025-12-28T10:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "A palpable 'olive-like' mass in the right upper quadrant is characteristic of:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Intussusception", "isCorrect": false },
                { "id": "b", "text": "Hypertrophic Pyloric Stenosis", "isCorrect": true },
                { "id": "c", "text": "Wilm's Tumor", "isCorrect": false },
                { "id": "d", "text": "Hernia", "isCorrect": false }
            ],
            "explanation": "The 'olive' is the hypertrophied pyloric muscle."
        },
        {
            "id": "q2",
            "type": "multiple-select",
            "question": "What are the 3 C's of Esophageal Atresia/TEF? (Select 3)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Choking", "isCorrect": true },
                { "id": "b", "text": "Coughing", "isCorrect": true },
                { "id": "c", "text": "Cyanosis", "isCorrect": true },
                { "id": "d", "text": "Crying", "isCorrect": false },
                { "id": "e", "text": "Constipation", "isCorrect": false }
            ],
            "explanation": "Symptoms occur especially during feeding."
        },
        {
            "id": "q3",
            "type": "matching",
            "question": "Match the abdominal wall defect with its description:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Omphalocele", "right": "Covered by a sac/membrane" },
                { "id": "p2", "left": "Gastroschisis", "right": "Exposed bowel, no sac" }
            ]
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "Hirschsprung's disease is caused by the absence of __1__ cells in the distal bowel.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["ganglion", "ganglionic"], "caseSensitive": false }
            ],
            "explanation": "It is an aganglionic megacolon."
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "Which supplement prevents Neural Tube Defects like Spina Bifida?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Vitamin C", "isCorrect": false },
                { "id": "b", "text": "Iron", "isCorrect": false },
                { "id": "c", "text": "Folic Acid", "isCorrect": true },
                { "id": "d", "text": "Calcium", "isCorrect": false }
            ],
            "explanation": "Folic acid taken preconception reduces NTD risk."
        }
    ]
});