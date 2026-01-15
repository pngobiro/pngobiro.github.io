registerQuiz("topic-05-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-05-quiz",
    "metadata": {
        "title": "Operations & Emergencies Quiz",
        "description": "Assess your knowledge of obstetric emergencies, anaesthesia, and operative procedures.",
        "topicId": "topic-05",
        "difficulty": "advanced",
        "estimatedTime": 15,
        "passingScore": 75,
        "createdAt": "2026-01-12T00:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "What is the primary cause of Mendelson's Syndrome?",
            "points": 5,
            "options": [
                { "id": "a", "text": "Hypotension from epidural", "isCorrect": false },
                { "id": "b", "text": "Aspiration of acid gastric content into the lungs", "isCorrect": true },
                { "id": "c", "text": "Compression of the inferior vena cava", "isCorrect": false },
                { "id": "d", "text": "Reaction to general anaesthesia drugs", "isCorrect": false }
            ],
            "explanation": "Mendelson's syndrome is chemical pneumonitis caused by aspirating acidic stomach contents under anaesthesia."
        },
        {
            "id": "q2",
            "type": "image-based",
            "question": "Identify the type of episiotomy shown in the diagram:",
            "points": 10,
            "imageUrl": "../assets/images/image-20260112-6cccb92a.jpeg",
            "imageAlt": "Diagram of episiotomy cut at 45 degrees",
            "options": [
                { "id": "a", "text": "Median Episiotomy", "isCorrect": false },
                { "id": "b", "text": "Mediolateral Episiotomy", "isCorrect": true },
                { "id": "c", "text": "J-Shaped Episiotomy", "isCorrect": false },
                { "id": "d", "text": "Lateral Episiotomy", "isCorrect": false }
            ],
            "explanation": "Mediolateral episiotomy begins at the fourchette and is directed posteriorly and laterally at 45 degrees."
        },
        {
            "id": "q3",
            "type": "ordering",
            "question": "Order the management steps for Cord Prolapse (Pulsating, 1st Stage):",
            "points": 15,
            "items": [
                { "id": "1", "text": "Push up presenting part to relieve compression", "correctPosition": 1 },
                { "id": "2", "text": "Place mother in knee-chest position", "correctPosition": 2 },
                { "id": "3", "text": "Give oxygen and start IV line", "correctPosition": 3 },
                { "id": "4", "text": "Transfer to theatre for emergency C-section", "correctPosition": 4 }
            ],
            "explanation": "Immediate relief of pressure on the cord is vital while preparing for emergency surgery."
        },
        {
            "id": "q4",
            "type": "matching",
            "question": "Match the shock stage to its physiological response:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Initial Stage", "right": "Reduced venous return and cardiac output" },
                { "id": "p2", "left": "Compensatory Stage", "right": "Vasoconstriction, increased heart rate, adrenaline release" },
                { "id": "p3", "left": "Hypovolaemic Stage", "right": "Vital organs lack perfusion, renal failure begins" },
                { "id": "p4", "left": "Irreversible Stage", "right": "Multisystem failure and death" }
            ],
            "explanation": "Shock progresses from initial output drop, to compensation (tachycardia/constriction), to organ failure."
        },
        {
            "id": "q5",
            "type": "fill-blank",
            "question": "Primary Post Partum Haemorrhage is defined as bleeding in excess of __b1__ mls within 24 hours of delivery.",
            "points": 5,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["500"], "caseSensitive": false }
            ],
            "explanation": "PPH is classically defined as >500ml blood loss."
        }
    ]
});