registerQuiz("topic-03-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-03-quiz",
    "metadata": {
        "title": "Trial, Induction & Prolonged Labour",
        "description": "Test your knowledge on induction methods, malpresentations, and managing difficult labour.",
        "topicId": "topic-03",
        "difficulty": "advanced",
        "estimatedTime": 15,
        "passingScore": 75,
        "createdAt": "2026-01-12T00:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "A Bishop Score of 6 or more indicates:",
            "points": 5,
            "options": [
                { "id": "a", "text": "Induction is contraindicated", "isCorrect": false },
                { "id": "b", "text": "The cervix is favourable for induction", "isCorrect": true },
                { "id": "c", "text": "The foetus is in distress", "isCorrect": false },
                { "id": "d", "text": "Immediate C-section is required", "isCorrect": false }
            ],
            "explanation": "A score of 6 or higher suggests the cervix is ripe and induction is likely to be successful."
        },
        {
            "id": "q2",
            "type": "image-based",
            "question": "Identify the breech delivery maneuver shown in this diagram:",
            "points": 10,
            "imageUrl": "../assets/images/image-20260112-a4796b52.jpeg",
            "imageAlt": "Diagram of baby hanging by weight",
            "options": [
                { "id": "a", "text": "Lovset Manoeuvre", "isCorrect": false },
                { "id": "b", "text": "Burns Marshall Method", "isCorrect": true },
                { "id": "c", "text": "Mauriceau-Smellie-Veit Manoeuvre", "isCorrect": false },
                { "id": "d", "text": "Pinard's Manoeuvre", "isCorrect": false }
            ],
            "explanation": "The Burns Marshall method involves letting the baby hang by its own weight to aid delivery of the head."
        },
        {
            "id": "q3",
            "type": "matching",
            "question": "Match the breech complication management to the technique:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Extended Arms", "right": "Lovset Manoeuvre" },
                { "id": "p2", "left": "Extended Head", "right": "Mauriceau-Smellie-Veit Manoeuvre" },
                { "id": "p3", "left": "Extended Legs", "right": "Pinard's Manoeuvre (Flexing knee)" },
                { "id": "p4", "left": "Delivery of Head (Routine)", "right": "Burns Marshall Method" }
            ],
            "explanation": "Lovset is for arms/shoulders, Mauriceau for the aftercoming head, Pinard's/flexion for legs."
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "In a face presentation, the __b1__ is the denominator.",
            "points": 5,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["mentum", "chin"], "caseSensitive": false }
            ],
            "explanation": "In face presentation, the mentum (chin) is the denominator used to describe position (e.g., Left Mento-Anterior)."
        },
        {
            "id": "q5",
            "type": "multiple-select",
            "question": "What are the signs of Obstructed Labour? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Presenting part does not descend despite strong contractions", "isCorrect": true },
                { "id": "b", "text": "Bandl's ring is visible abdominally", "isCorrect": true },
                { "id": "c", "text": "Cervix dilates rapidly", "isCorrect": false },
                { "id": "d", "text": "Oedematous cervix and vulva", "isCorrect": true }
            ],
            "partialCredit": true,
            "explanation": "Obstructed labour is characterized by lack of descent, pathological retraction ring (Bandl's), and oedema of the birth canal."
        }
    ]
});