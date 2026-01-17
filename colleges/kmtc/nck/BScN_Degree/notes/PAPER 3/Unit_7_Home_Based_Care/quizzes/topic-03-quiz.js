registerQuiz("topic-03-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-03-quiz",
    "title": "Patients for Home-Based Care Services",
    "description": "Assess your knowledge on HIV/AIDS management, cancer care, and other chronic conditions.",
    "metadata": {
        "title": "Topic 3: Patient Management",
        "description": "Management of specific conditions in HBC",
        "topicId": "topic-03",
        "difficulty": "advanced",
        "estimatedTime": 20,
        "passingScore": 70,
        "createdAt": "2026-01-17T12:00:00Z",
        "updatedAt": "2026-01-17T12:00:00Z",
        "tags": ["hiv", "cancer", "chronic-disease"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate",
        "allowRetry": true,
        "showCorrectAnswers": true,
        "timeLimit": 0
    },
    "questions": [
        {
            "id": "t3-q1",
            "type": "ordering",
            "question": "Arrange the phases of HIV/AIDS progression in order:",
            "points": 3,
            "items": [
                { "id": "p1", "text": "Phase 1: Entry (Window period, not detectable by standard tests)", "correctPosition": 1 },
                { "id": "p2", "text": "Phase 2: Detection (Asymptomatic seropositive)", "correctPosition": 2 },
                { "id": "p3", "text": "Phase 3: AIDS (Full blown signs and symptoms)", "correctPosition": 3 }
            ],
            "explanation": "Phase 1 is entry (window period); Phase 2 is detection/asymptomatic; Phase 3 is full-blown AIDS."
        },
        {
            "id": "t3-q2",
            "type": "multiple-select",
            "question": "Select the MAJOR signs of AIDS in adults: (Select all that apply)",
            "points": 2,
            "options": [
                { "id": "m1", "text": "Unexplained 10% weight loss in less than one month", "isCorrect": true },
                { "id": "m2", "text": "Oral thrush", "isCorrect": false },
                { "id": "m3", "text": "Persistent diarrhoea for over one month", "isCorrect": true },
                { "id": "m4", "text": "Generalised enlarged lymph nodes", "isCorrect": false },
                { "id": "m5", "text": "Fever for over one month", "isCorrect": true }
            ],
            "explanation": "The three major signs are weight loss >10%, chronic diarrhoea >1 month, and fever >1 month. Thrush and lymph nodes are minor signs."
        },
        {
            "id": "t3-q3",
            "type": "matching",
            "question": "Match the type of cancer prevention to its description:",
            "points": 3,
            "pairs": [
                { "id": "pr1", "left": "Primary Prevention", "right": "Lifestyle changes (stop smoking, limit alcohol)" },
                { "id": "pr2", "left": "Secondary Prevention", "right": "Screening (Pap smear, breast exam) before symptoms" },
                { "id": "pr3", "left": "Tertiary Prevention", "right": "Early treatment before effects become widespread" }
            ],
            "explanation": "Primary prevents occurrence; Secondary detects early; Tertiary treats to prevent complications."
        },
        {
            "id": "t3-q4",
            "type": "fill-blank",
            "question": "To treat pressure sores at home, one can use __b1__ milk to remove old flesh or a mixture of honey and __b2__ to kill germs.",
            "points": 2,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["papaya", "pawpaw"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["sugar"], "caseSensitive": false }
            ],
            "explanation": "Papaya milk helps remove dead tissue; Honey and Sugar mixtures kill germs and speed healing."
        },
        {
            "id": "t3-q5",
            "type": "multiple-choice",
            "question": "Which of the following is an item found in the Patient's Primary Kit (NOT the Caregiver's Kit)?",
            "points": 1,
            "options": [
                { "id": "k1", "text": "Reference book", "isCorrect": false },
                { "id": "k2", "text": "Register/Diary", "isCorrect": false },
                { "id": "k3", "text": "Mosquito net", "isCorrect": true },
                { "id": "k4", "text": "Teaching materials", "isCorrect": false }
            ],
            "explanation": "The Patient Primary Kit includes personal items like a mosquito net, mattress, and basin. Reference books and registers are for the caregiver."
        }
    ]
});