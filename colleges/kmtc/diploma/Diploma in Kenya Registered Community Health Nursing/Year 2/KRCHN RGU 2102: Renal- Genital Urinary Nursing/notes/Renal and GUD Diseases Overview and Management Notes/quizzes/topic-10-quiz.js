registerQuiz("topic-10-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-10-quiz",
    "metadata": {
        "title": "Structural Disorders Quiz",
        "description": "Evaluate understanding of Fistulas, BPH, and congenital anomalies.",
        "topicId": "topic-10",
        "difficulty": "intermediate",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2025-12-26T12:00:00Z"
    },
    "settings": {
        "shuffleQuestions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "What is the most common cause of Vesico-Vaginal Fistula (VVF) in developing contexts?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Radiation", "isCorrect": false },
                { "id": "b", "text": "Prolonged obstructed labor", "isCorrect": true },
                { "id": "c", "text": "Direct trauma", "isCorrect": false },
                { "id": "d", "text": "Infection", "isCorrect": false }
            ],
            "explanation": "Prolonged pressure from the baby's head causes necrosis of the tissue between bladder and vagina."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the BPH medication with its action:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Alpha-blockers", "right": "Relax smooth muscle" },
                { "id": "p2", "left": "5-alpha reductase inhibitors", "right": "Decrease prostate size" }
            ],
            "explanation": "Alpha-blockers (e.g., alfuzosin) relax muscles; 5-alpha reductase inhibitors (e.g., finasteride) shrink the gland."
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "A congenital anomaly where the urethral opening is on the underside of the penis is called __b1__.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["hypospadias"], "caseSensitive": false }
            ],
            "explanation": "Hypospadias is the ventral opening; Epispadias is the dorsal opening."
        },
        {
            "id": "q4",
            "type": "multiple-select",
            "question": "Which of the following are clinical features of BPH? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Nocturia", "isCorrect": true },
                { "id": "b", "text": "Hesitancy", "isCorrect": true },
                { "id": "c", "text": "Weak urinary stream", "isCorrect": true },
                { "id": "d", "text": "Polyuria", "isCorrect": false }
            ],
            "explanation": "BPH causes obstructive symptoms like nocturia, hesitancy, and weak stream."
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "An over-active neurogenic bladder empties by uncontrolled reflexes.",
            "points": 5,
            "correctAnswer": true,
            "explanation": "Over-active (spastic) bladder involves uncontrolled reflex emptying; under-active is non-contractile."
        }
    ]
});