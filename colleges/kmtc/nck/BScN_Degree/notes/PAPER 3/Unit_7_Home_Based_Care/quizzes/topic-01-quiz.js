registerQuiz("topic-01-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-01-quiz",
    "title": "Concepts and Principles of Home-Based Care",
    "description": "Assess your understanding of HBC definitions, components, rationale, and the roles of key players.",
    "metadata": {
        "title": "Topic 1: Concepts & Principles",
        "description": "Fundamental concepts of Home-Based Care",
        "topicId": "topic-01",
        "difficulty": "beginner",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2026-01-17T12:00:00Z",
        "updatedAt": "2026-01-17T12:00:00Z",
        "tags": ["hbc", "intro", "concepts"]
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
            "id": "t1-q1",
            "type": "multiple-choice",
            "question": "Which of the following is the correct definition of Home-Based Care (HBC)?",
            "points": 1,
            "options": [
                {
                    "id": "opt1",
                    "text": "Care provided in a hospital setting by family members.",
                    "isCorrect": false
                },
                {
                    "id": "opt2",
                    "text": "Care of persons with chronic/terminal illnesses extended from the health facility to the home through family and community involvement.",
                    "isCorrect": true
                },
                {
                    "id": "opt3",
                    "text": "A government program strictly for funding rural clinics.",
                    "isCorrect": false
                },
                {
                    "id": "opt4",
                    "text": "Medical treatment provided exclusively by doctors in patients' homes.",
                    "isCorrect": false
                }
            ],
            "explanation": "HBC is defined as care extended from the hospital/health facility to the patients' homes through family participation and community involvement."
        },
        {
            "id": "t1-q2",
            "type": "multiple-select",
            "question": "Select the four major components of comprehensive home-based care:",
            "points": 2,
            "options": [
                { "id": "c1", "text": "Clinical Care", "isCorrect": true },
                { "id": "c2", "text": "Surgical Care", "isCorrect": false },
                { "id": "c3", "text": "Nursing Care", "isCorrect": true },
                { "id": "c4", "text": "Counselling and Psychospiritual Care", "isCorrect": true },
                { "id": "c5", "text": "Social Support", "isCorrect": true },
                { "id": "c6", "text": "Financial Audit", "isCorrect": false }
            ],
            "explanation": "The four components are Clinical Care, Nursing Care, Counselling/Psychospiritual Care, and Social Support."
        },
        {
            "id": "t1-q3",
            "type": "matching",
            "question": "Match the key player to their specific role in HBC:",
            "points": 4,
            "pairs": [
                {
                    "id": "p1",
                    "left": "The Patient",
                    "right": "Participate in the care process and identify primary caregiver"
                },
                {
                    "id": "p2",
                    "left": "Home Care Team",
                    "right": "Manage disease conditions, provide nursing care, and train caregivers"
                },
                {
                    "id": "p3",
                    "left": "Health Workers (Facility)",
                    "right": "Initiate referral, make diagnosis, and prepare patient for discharge"
                },
                {
                    "id": "p4",
                    "left": "Government",
                    "right": "Create supportive policy environment and provide drugs/supplies"
                }
            ],
            "explanation": "Patients participate; Home Care Teams provide direct care/training; Facility Health Workers initiate the process/diagnosis; Government provides policy/supplies."
        },
        {
            "id": "t1-q4",
            "type": "multiple-select",
            "question": "What is the rationale for adopting the Home-Based Care approach? (Select all that apply)",
            "points": 2,
            "options": [
                { "id": "r1", "text": "Increased burden of HIV/AIDS and chronic diseases on health facilities", "isCorrect": true },
                { "id": "r2", "text": "To completely replace hospital care", "isCorrect": false },
                { "id": "r3", "text": "HBC helps reduce stigma attached to chronic diseases", "isCorrect": true },
                { "id": "r4", "text": "Continuity of care is needed to prolong lives and reduce suffering", "isCorrect": true }
            ],
            "explanation": "HBC was adopted due to the HIV/AIDS burden, the need for continuity of care, stigma reduction, and limitations of health institutions."
        },
        {
            "id": "t1-q5",
            "type": "true-false",
            "question": "One of the principles of HBC is to encourage active participation and involvement of the patient and their family.",
            "points": 1,
            "correctAnswer": true,
            "explanation": "Active participation of the patient and family is a core principle of HBC to ensure sustainability and quality of life."
        }
    ]
});