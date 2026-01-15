// File: quizzes/topic-03-quiz.js
registerQuiz("topic-03-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-03-quiz",
    "metadata": {
        "title": "Bleeding Disorders in Pregnancy",
        "description": "Test your knowledge on abortion types, ectopic pregnancy, and emergency management.",
        "topicId": "topic-03-bleeding-pregnancy",
        "difficulty": "advanced",
        "estimatedTime": 20,
        "passingScore": 75,
        "createdAt": "2026-01-13T10:00:00Z"
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
            "question": "Which symptom constellation best describes a 'Threatened Abortion'?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Profuse bleeding, dilated cervix, some products expelled", "isCorrect": false },
                { "id": "b", "text": "Slight bleeding, mild pain, cervix closed", "isCorrect": true },
                { "id": "c", "text": "Strong contractions, dilated cervix, bleeding", "isCorrect": false },
                { "id": "d", "text": "Brown discharge, uterus smaller than dates, negative pregnancy test", "isCorrect": false }
            ],
            "explanation": "Threatened abortion presents with slight bleeding and a closed cervical os. The pregnancy may still continue."
        },
        {
            "id": "q2",
            "type": "image-based",
            "question": "Identify the Ampulla, the most common site of ectopic pregnancy:",
            "points": 10,
            "imageUrl": "../assets/images/image-20260113-dc519d58.jpeg",
            "imageAlt": "Diagram of fallopian tube regions",
            "hotspots": [
                { "id": "h1", "x": 25, "y": 20, "radius": 12, "label": "Ampulla", "isCorrect": true },
                { "id": "h2", "x": 45, "y": 15, "radius": 12, "label": "Isthmus", "isCorrect": false },
                { "id": "h3", "x": 60, "y": 30, "radius": 12, "label": "Interstitial", "isCorrect": false }
            ],
            "explanation": "The Ampulla is the most common site for ectopic implantation."
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "In a ruptured ectopic pregnancy, which usually comes first?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Bleeding per vagina", "isCorrect": false },
                { "id": "b", "text": "Pain", "isCorrect": true },
                { "id": "c", "text": "Fever", "isCorrect": false },
                { "id": "d", "text": "Abdominal distension", "isCorrect": false }
            ],
            "explanation": "Pain almost invariably precedes vaginal bleeding in ruptured ectopic pregnancy, unlike in abortion where bleeding often precedes pain."
        },
        {
            "id": "q4",
            "type": "matching",
            "question": "Match the abortion type with the appropriate management:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Threatened", "right": "Bed rest, sedation, avoid aperients" },
                { "id": "p2", "left": "Incomplete", "right": "Resuscitation, Ergometrine, Evacuation" },
                { "id": "p3", "left": "Missed", "right": "Referral, ultrasound, possible surgical evacuation" },
                { "id": "p4", "left": "Septic", "right": "Antibiotics, IV fluids, evacuation, tetanus toxoid" }
            ]
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "Auto-transfusion is recommended if the intraperitoneal blood is offensive or haemolysed.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "Auto-transfusion is contraindicated if the blood is infected/offensive, haemolysed, or old (>24 hours)."
        }
    ]
});