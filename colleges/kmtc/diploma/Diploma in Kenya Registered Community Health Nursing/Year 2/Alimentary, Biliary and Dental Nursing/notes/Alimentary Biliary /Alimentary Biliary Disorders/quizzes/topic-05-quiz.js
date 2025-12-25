registerQuiz("topic-05-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-05-quiz",
    "metadata": {
        "title": "Topic 05: Obstruction & Appendicitis",
        "description": "Questions on intestinal obstruction types and acute appendicitis management.",
        "topicId": "topic-05-obstruction-appendicitis",
        "difficulty": "advanced",
        "estimatedTime": 15,
        "passingScore": 75,
        "createdAt": "2025-12-25T00:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "matching",
            "question": "Match the type of obstruction with its cause:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Mechanical", "right": "Adhesions / Hernia" },
                { "id": "p2", "left": "Functional", "right": "Muscular dystrophy / Diabetes" }
            ]
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "Where is McBurney's point located?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Left Lower Quadrant", "isCorrect": false },
                { "id": "b", "text": "Right Upper Quadrant", "isCorrect": false },
                { "id": "c", "text": "Right Lower Quadrant", "isCorrect": true },
                { "id": "d", "text": "Epigastrium", "isCorrect": false }
            ],
            "explanation": "McBurney's point is in the Right Lower Quadrant and is the site of maximal tenderness in appendicitis."
        },
        {
            "id": "q3",
            "type": "true-false",
            "question": "If a patient has fever, nausea, and abdominal pain suspected to be appendicitis, you should administer a laxative to relieve constipation.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "Laxatives or cathartics should NEVER be given in this instance as they may result in perforation of the inflamed appendix."
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "What is the major complication of appendicitis that generally occurs 24 hours after onset of pain?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Constipation", "isCorrect": false },
                { "id": "b", "text": "Perforation", "isCorrect": true },
                { "id": "c", "text": "Hernia", "isCorrect": false },
                { "id": "d", "text": "Gastritis", "isCorrect": false }
            ],
            "explanation": "Perforation is the major complication, leading to peritonitis or abscess formation."
        }
    ]
});
