window.registerQuiz('topic-05-quiz', {
    "schemaVersion": "1.0",
    "quizId": "topic-05-quiz",
    "metadata": {
        "title": "Home and Community Based Care (HCBC)",
        "description": "Test your knowledge on HCBC concepts, stakeholder roles, and community mobilization.",
        "topicId": "topic-05-hcbc",
        "difficulty": "intermediate",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2024-01-20T12:00:00Z",
        "tags": ["hcbc", "community", "care"]
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
            "question": "What is the primary definition of Home Based Care?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Care provided in a hospital setting only", "isCorrect": false },
                { "id": "b", "text": "Care extended from the health facility to the patient's home", "isCorrect": true },
                { "id": "c", "text": "Care provided strictly by family members", "isCorrect": false },
                { "id": "d", "text": "Traditional herbal treatment at home", "isCorrect": false }
            ],
            "explanation": "HCBC is care extended from the facility to the home involving family and community participation."
        },
        {
            "id": "q2",
            "type": "multiple-select",
            "question": "Which of the following are benefits of HCBC to the family? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Contributes to family solidarity", "isCorrect": true },
                { "id": "b", "text": "Increases healthcare costs", "isCorrect": false },
                { "id": "c", "text": "Helps accept the infected person's condition", "isCorrect": true },
                { "id": "d", "text": "Makes it easier to attend to other responsibilities", "isCorrect": true }
            ],
            "explanation": "HCBC promotes solidarity, acceptance, and cost reduction for the family."
        },
        {
            "id": "q3",
            "type": "matching",
            "question": "Match the stakeholder to their role in HCBC:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Health Facility", "right": "Diagnosis and initial clinical care" },
                { "id": "p2", "left": "Family", "right": "Daily care and support at home" },
                { "id": "p3", "left": "Government", "right": "Creating supportive policy environment" },
                { "id": "p4", "left": "PLWHA", "right": "Identifying primary caregiver and participating in care" }
            ]
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "__b1__ care involves care for patients with terminal diseases (e.g., cancer) to manage pain and symptoms.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["palliative"], "caseSensitive": false }
            ],
            "explanation": "Palliative care focuses on relief from symptoms and stress of a serious illness."
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "In Home Based Care, the health care worker is responsible for constantly staying with the patient.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "The family/caregiver stays with the patient; the health worker guides, educates, and follows up."
        },
        {
            "id": "q6",
            "type": "multiple-select",
            "question": "Select the components of Home Based Care:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Clinical care", "isCorrect": true },
                { "id": "b", "text": "Nursing care", "isCorrect": true },
                { "id": "c", "text": "Psychosocial support", "isCorrect": true },
                { "id": "d", "text": "Surgical procedures", "isCorrect": false }
            ],
            "explanation": "Components include clinical, nursing, counseling/psychological, social support, palliative care, and community mobilization. Surgery is not a home-based component."
        },
        {
            "id": "q7",
            "type": "multiple-choice",
            "question": "Which of the following describes a 'mobilized community'?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Members wait for government aid before acting", "isCorrect": false },
                { "id": "b", "text": "Members deny the existence of HIV", "isCorrect": false },
                { "id": "c", "text": "Members are aware of vulnerability and take action", "isCorrect": true },
                { "id": "d", "text": "Members rely solely on external experts", "isCorrect": false }
            ],
            "explanation": "A mobilized community is aware, motivated, knowledgeable, and takes action using its own resources."
        },
        {
            "id": "q8",
            "type": "short-answer",
            "question": "State one challenge of community mobilization mentioned in the text.",
            "points": 10,
            "keywords": ["time", "energy", "expectations", "representation", "lifespan"],
            "minKeywords": 1,
            "modelAnswer": "Time and energy expected from members",
            "explanation": "Challenges include time/energy demands, rigid expectations, incomplete representation, and initiative lifespans."
        },
        {
            "id": "q9",
            "type": "true-false",
            "question": "Home Based Care helps reduce congestion in health facilities.",
            "points": 10,
            "correctAnswer": true,
            "explanation": "One rationale for HCBC is easing demand on health care facilities."
        },
        {
            "id": "q10",
            "type": "multiple-choice",
            "question": "Who is the primary provider of care in HCBC if the patient is not very sick?",
            "points": 10,
            "options": [
                { "id": "a", "text": "The patient themselves", "isCorrect": true },
                { "id": "b", "text": "The doctor", "isCorrect": false },
                { "id": "c", "text": "The neighbor", "isCorrect": false },
                { "id": "d", "text": "The CHV", "isCorrect": false }
            ],
            "explanation": "If not very sick, the patient provides their own care (self-care)."
        }
    ]
});