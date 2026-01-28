registerQuiz("topic-04-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-04-quiz",
    "metadata": {
        "title": "eMTCT & HIV in Pregnancy Quiz",
        "description": "Assess your understanding of HIV transmission, staging, and eMTCT protocols.",
        "topicId": "topic-04",
        "difficulty": "advanced",
        "estimatedTime": 15,
        "passingScore": 80,
        "createdAt": "2025-01-28T12:00:00Z",
        "updatedAt": "2025-01-28T12:00:00Z",
        "tags": ["HIV", "eMTCT", "pharmacology"]
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
            "question": "Which stage of HIV infection is characterized by 'Persistent generalized lymphadenopathy' but is otherwise asymptomatic?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Clinical Stage I", "isCorrect": true },
                { "id": "opt2", "text": "Clinical Stage II", "isCorrect": false },
                { "id": "opt3", "text": "Clinical Stage III", "isCorrect": false },
                { "id": "opt4", "text": "Clinical Stage IV", "isCorrect": false }
            ],
            "explanation": "WHO Clinical Stage I includes asymptomatic patients or those with only persistent generalized lymphadenopathy."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the timing of Mother-to-Child Transmission (MTCT) with its estimated risk percentage (without intervention):",
            "points": 2,
            "pairs": [
                { "id": "p1", "left": "During Pregnancy", "right": "5-10%" },
                { "id": "p2", "left": "During Labour & Delivery", "right": "10-20%" },
                { "id": "p3", "left": "During Breastfeeding", "right": "5-20%" }
            ],
            "explanation": "The highest risk is during labour/delivery (10-20%), followed by breastfeeding (5-20%) and pregnancy (5-10%)."
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "Which of the following procedures should be AVOIDED during labour for an HIV-positive mother to reduce transmission risk?",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Artificial Rupture of Membranes (ARM)", "isCorrect": true },
                { "id": "opt2", "text": "Episiotomy", "isCorrect": true },
                { "id": "opt3", "text": "Vaginal examination", "isCorrect": false },
                { "id": "opt4", "text": "Vacuum extraction", "isCorrect": true }
            ],
            "explanation": "Invasive procedures like ARM, episiotomy, and vacuum extraction increase the risk of mixing maternal and fetal blood/fluids and should be avoided if possible."
        },
        {
            "id": "q4",
            "type": "ordering",
            "question": "Order the schedule for infant HIV testing (PCR/DBS) for an HIV-exposed infant:",
            "points": 2,
            "items": [
                { "id": "i1", "text": "1st Test: 6 weeks", "correctPosition": 1 },
                { "id": "i2", "text": "2nd Test: 6 months", "correctPosition": 2 },
                { "id": "i3", "text": "3rd Test: 12 months (1 year)", "correctPosition": 3 },
                { "id": "i4", "text": "4th Test: 18 months", "correctPosition": 4 }
            ],
            "explanation": "Testing is done at 6 weeks, 6 months, 1 year, and confirmed at 18 months."
        },
        {
            "id": "q5",
            "type": "fill-blank",
            "question": "Infant prophylaxis with Nevirapine syrup should continue for __b1__ weeks for infants whose mothers are on HAART.",
            "points": 1,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["12", "twelve"], "caseSensitive": false }
            ],
            "explanation": "Current guidelines recommend NVP prophylaxis for 12 weeks for infants born to mothers on HAART."
        }
    ]
});
