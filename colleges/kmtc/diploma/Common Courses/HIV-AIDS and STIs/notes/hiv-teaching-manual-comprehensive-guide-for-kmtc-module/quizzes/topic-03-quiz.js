window.registerQuiz('topic-03-quiz', {
    "schemaVersion": "1.0",
    "quizId": "topic-03-quiz",
    "metadata": {
        "title": "Management of HIV and AIDS",
        "description": "Test your knowledge on ART regimens, nutrition, psychological support, and patient monitoring.",
        "topicId": "topic-03-management",
        "difficulty": "advanced",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2024-01-20T12:00:00Z",
        "tags": ["art", "management", "nutrition", "care"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate",
        "allowRetry": true,
        "showCorrectAnswers": true
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "What is the recommended first-line ART regimen for adults (>15 years) in Kenya?",
            "points": 10,
            "options": [
                { "id": "a", "text": "AZT + 3TC + NVP", "isCorrect": false },
                { "id": "b", "text": "TDF + 3TC + EFV", "isCorrect": true },
                { "id": "c", "text": "ABC + 3TC + LPV/r", "isCorrect": false },
                { "id": "d", "text": "TDF + 3TC + DTG", "isCorrect": false }
            ],
            "explanation": "According to the manual provided, the first-line regimen for adults (>15 years) is TDF + 3TC + EFV."
        },
        {
            "id": "q2",
            "type": "multiple-select",
            "question": "Which of the following are goals of ART? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Maximal viral suppression", "isCorrect": true },
                { "id": "b", "text": "Complete cure of HIV", "isCorrect": false },
                { "id": "c", "text": "Restore immunologic function", "isCorrect": true },
                { "id": "d", "text": "Prevent HIV transmission", "isCorrect": true }
            ],
            "explanation": "ART aims to suppress the virus, restore immunity, and prevent transmission. It does not currently provide a complete cure."
        },
        {
            "id": "q3",
            "type": "matching",
            "question": "Match the ARV drug to its class:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Tenofovir (TDF)", "right": "NRTI" },
                { "id": "p2", "left": "Nevirapine (NVP)", "right": "NNRTI" },
                { "id": "p3", "left": "Dolutegravir (DTG)", "right": "Integrase Inhibitor" },
                { "id": "p4", "left": "Lopinavir (LPV)", "right": "Protease Inhibitor" }
            ]
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "Patients with newly diagnosed TB should start ART within __weeks__ weeks of starting TB treatment.",
            "points": 10,
            "blanks": [
                { "id": "weeks", "acceptedAnswers": ["8", "eight"], "caseSensitive": false }
            ],
            "explanation": "ART should be initiated within 8 weeks of starting TB treatment (preferably within 2 weeks), once the patient is tolerating anti-TB meds."
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "A patient with Cryptococcal Meningitis should start ART immediately upon diagnosis.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "ART should be deferred for 4-6 weeks until after CM treatment is established to avoid IRIS."
        },
        {
            "id": "q6",
            "type": "short-answer",
            "question": "What does NACS stand for in the context of HIV care?",
            "points": 10,
            "keywords": ["nutritional", "assessment", "counselling", "support"],
            "minKeywords": 3,
            "modelAnswer": "Nutritional Assessment, Counselling and Support",
            "explanation": "NACS stands for Nutritional Assessment, Counselling and Support."
        },
        {
            "id": "q7",
            "type": "multiple-choice",
            "question": "Which screening tool is used for depression in PLHIV?",
            "points": 10,
            "options": [
                { "id": "a", "text": "PHQ-9", "isCorrect": false },
                { "id": "b", "text": "Two-question basic screening", "isCorrect": true },
                { "id": "c", "text": "Beck Depression Inventory", "isCorrect": false },
                { "id": "d", "text": "Psychiatric interview", "isCorrect": false }
            ],
            "explanation": "The manual specifies a basic two-question screening about feeling down/hopeless and little pleasure."
        },
        {
            "id": "q8",
            "type": "ordering",
            "question": "Order the steps for tracing a defaulter:",
            "points": 10,
            "items": [
                { "id": "1", "text": "Identify missed appointment in diary", "correctPosition": 1 },
                { "id": "2", "text": "Call patient/caregiver within 72 hours", "correctPosition": 2 },
                { "id": "3", "text": "Call treatment buddy if no response", "correctPosition": 3 },
                { "id": "4", "text": "Update follow-up register", "correctPosition": 4 },
                { "id": "5", "text": "Prioritize home visit if unreachable > 7 days", "correctPosition": 5 }
            ]
        },
        {
            "id": "q9",
            "type": "multiple-choice",
            "question": "Efavirenz (EFV) is commonly associated with which side effect?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Severe anemia", "isCorrect": false },
                { "id": "b", "text": "CNS symptoms (dreams, confusion)", "isCorrect": true },
                { "id": "c", "text": "Pancreatitis", "isCorrect": false },
                { "id": "d", "text": "Skin rash (primary side effect)", "isCorrect": false }
            ],
            "explanation": "EFV is associated with CNS symptoms like vivid dreams and confusion. Nevirapine is more associated with skin rash."
        },
        {
            "id": "q10",
            "type": "multiple-choice",
            "question": "Which type of referral involves the facility booking an appointment and following up on the patient?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Passive referral", "isCorrect": false },
                { "id": "b", "text": "Active referral", "isCorrect": true },
                { "id": "c", "text": "Self referral", "isCorrect": false },
                { "id": "d", "text": "Community referral", "isCorrect": false }
            ],
            "explanation": "Active referral (or linkage) involves the provider facilitating the connection, unlike passive referral where the patient is given a form to go themselves."
        }
    ]
});