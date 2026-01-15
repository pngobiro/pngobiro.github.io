// File: quizzes/topic-06-quiz.js
registerQuiz("topic-06-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-06-quiz",
    "metadata": {
        "title": "Neoplastic Disorders",
        "description": "Assess understanding of benign and malignant tumours of the reproductive tract and breast.",
        "topicId": "topic-06-neoplasms",
        "difficulty": "advanced",
        "estimatedTime": 20,
        "passingScore": 70,
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
            "type": "matching",
            "question": "Match the uterine fibroid type with its location:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Intramural/Interstitial", "right": "Within the myometrium" },
                { "id": "p2", "left": "Subserous", "right": "Outside uterus, covered by peritoneum" },
                { "id": "p3", "left": "Submucous", "right": "Near endometrium, projecting into cavity" },
                { "id": "p4", "left": "Cervical", "right": "Arising in the cervix" }
            ]
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "Which of the following findings is strongly suggestive of a Hydatidiform Mole?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Uterus smaller than expected for dates", "isCorrect": false },
                { "id": "b", "text": "High levels of HCG after 12 weeks", "isCorrect": true },
                { "id": "c", "text": "Presence of foetal heart tones", "isCorrect": false },
                { "id": "d", "text": "Low blood pressure", "isCorrect": false }
            ],
            "explanation": "Molar pregnancies are characterized by a uterus larger than dates, very high HCG levels, and absence of foetal parts/heart tones."
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "Which factors increase the risk of breast cancer? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Family history (mother/sister)", "isCorrect": true },
                { "id": "b", "text": "High parity (3+ children)", "isCorrect": false },
                { "id": "c", "text": "Nulliparity or single marital status", "isCorrect": true },
                { "id": "d", "text": "History of cancer in the opposite breast", "isCorrect": true }
            ],
            "explanation": "High parity (having many children) is generally associated with a *lower* incidence of breast cancer."
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "The most common benign ovarian neoplasm, which can reach an enormous size, is:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Dermoid cyst", "isCorrect": false },
                { "id": "b", "text": "Mucinous cystadenoma", "isCorrect": true },
                { "id": "c", "text": "Serous cystadenoma", "isCorrect": false },
                { "id": "d", "text": "Follicular cyst", "isCorrect": false }
            ]
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "Post-menopausal bleeding is a significant symptom that should always be investigated for possible cervical or endometrial cancer.",
            "points": 10,
            "correctAnswer": true,
            "explanation": "Any bleeding after menopause is abnormal and malignancy must be ruled out."
        }
    ]
});