registerQuiz("topic-04-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-04-quiz",
    "metadata": {
        "title": "Home Based Care for PLWHA",
        "description": "Check your understanding of HBC components, nursing care needs, and symptom management.",
        "topicId": "topic-04-home-based-care",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2026-01-13T10:00:00Z",
        "tags": ["hbc", "nursing", "palliative-care"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "fill-blank",
            "question": "Home Based Care (HBC) represents a __1__ of care from the health facility to the community and home.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["continuum", "continuity"], "caseSensitive": false }
            ],
            "explanation": "HBC is defined as a 'continuum of care' linking hospital, community, and family."
        },
        {
            "id": "q2",
            "type": "multiple-select",
            "question": "Select the four main components of comprehensive Home Based Care: (Select 4)",
            "points": 20,
            "options": [
                { "id": "a", "text": "Clinical Care", "isCorrect": true },
                { "id": "b", "text": "Nursing Care", "isCorrect": true },
                { "id": "c", "text": "Counselling and Psycho-spiritual Care", "isCorrect": true },
                { "id": "d", "text": "Social Support", "isCorrect": true },
                { "id": "e", "text": "Political Campaigning", "isCorrect": false },
                { "id": "f", "text": "Surgical Procedures", "isCorrect": false }
            ],
            "explanation": "The components are Clinical, Nursing, Counselling/Spiritual, and Social support."
        },
        {
            "id": "q3",
            "type": "matching",
            "question": "Match the home management strategy to the symptom:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Fever", "right": "Tepid sponging and fluids" },
                { "id": "p2", "left": "Diarrhea", "right": "ORS, fluids, small nutritious meals" },
                { "id": "p3", "left": "Itching/Skin Rash", "right": "Calamine lotion, keep skin dry" },
                { "id": "p4", "left": "Sore Throat", "right": "Tea with honey, cough syrup" }
            ],
            "explanation": "Fever -> Cool down; Diarrhea -> Rehydrate; Itching -> Soothe/Dry; Sore throat -> Soothe."
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "When should a patient with diarrhea be referred to a health facility?",
            "points": 10,
            "options": [
                { "id": "a", "text": "If they pass one loose stool", "isCorrect": false },
                { "id": "b", "text": "If signs of dehydration (fever, inability to eat/drink) appear", "isCorrect": true },
                { "id": "c", "text": "If they ask for water", "isCorrect": false },
                { "id": "d", "text": "Immediately upon diagnosis of HIV", "isCorrect": false }
            ],
            "explanation": "Severe dehydration, blood in stool, or inability to hydrate orally require referral."
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "A key principle of HBC is 'Caring for Caregivers' to minimize physical and spiritual exhaustion.",
            "points": 10,
            "correctAnswer": true,
            "explanation": "Caregivers face burnout; supporting them is essential for sustainable care."
        },
        {
            "id": "q6",
            "type": "multiple-choice",
            "question": "Which of the following is considered a 'Social Need' for a PLWHA?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Medication for opportunistic infections", "isCorrect": false },
                { "id": "b", "text": "Acceptance, respect, and company", "isCorrect": true },
                { "id": "c", "text": "Tepid sponging", "isCorrect": false },
                { "id": "d", "text": "Balanced diet", "isCorrect": false }
            ],
            "explanation": "Social needs involve interaction, belonging, rights, and reduction of stigma."
        },
        {
            "id": "q7",
            "type": "multiple-choice",
            "question": "What traditional remedy is mentioned for Shingles (Herpes Zoster) in some areas?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Hot ash", "isCorrect": false },
                { "id": "b", "text": "Sap of the Frangipani tree", "isCorrect": true },
                { "id": "c", "text": "Mud packs", "isCorrect": false },
                { "id": "d", "text": "Lemon juice", "isCorrect": false }
            ],
            "explanation": "The text specifically mentions the sap of the Frangipani tree (Plumeria Rubra) as a remedy used with success in certain parts."
        },
        {
            "id": "q8",
            "type": "multiple-choice",
            "question": "Why is the family considered the foundation of care for PLWHA?",
            "points": 10,
            "options": [
                { "id": "a", "text": "They are medically trained", "isCorrect": false },
                { "id": "b", "text": "They provide holistic care in the patient's own environment", "isCorrect": true },
                { "id": "c", "text": "Hospitals are refusing to treat patients", "isCorrect": false },
                { "id": "d", "text": "It is required by law", "isCorrect": false }
            ],
            "explanation": "The family provides continuous, holistic support (physical, emotional, social) that hospitals cannot match in duration or intimacy."
        }
    ]
});