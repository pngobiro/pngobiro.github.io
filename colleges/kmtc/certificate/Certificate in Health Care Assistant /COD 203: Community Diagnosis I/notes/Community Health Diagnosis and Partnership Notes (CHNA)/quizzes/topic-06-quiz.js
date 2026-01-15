if (typeof registerQuiz === 'function') {
    registerQuiz("topic-06-quiz", {
        "schemaVersion": "1.0",
        "quizId": "topic-06-quiz",
        "metadata": {
            "title": "Health Advocacy Quiz",
            "description": "Test your knowledge on advocacy resources, strategies, planning, and stakeholders.",
            "topicId": "topic-06",
            "difficulty": "intermediate",
            "estimatedTime": 10,
            "passingScore": 70,
            "createdAt": "2026-01-09T00:00:00Z"
        },
        "settings": {
            "shuffleQuestions": true,
            "shuffleOptions": true,
            "showFeedback": "immediate",
            "allowRetry": true
        },
        "questions": [
            {
                "id": "q1",
                "type": "true-false",
                "question": "Health needs advocacy primarily involves influencing decision-makers and promoting policies to improve health outcomes.",
                "points": 10,
                "correctAnswer": true,
                "explanation": "Advocacy is defined as activities aimed at influencing decision-makers (policymakers, providers) to promote better health."
            },
            {
                "id": "q2",
                "type": "multiple-choice",
                "question": "Which of the following is considered a 'Human Resource' in health advocacy?",
                "points": 10,
                "options": [
                    { "id": "a", "text": "Grants and donations", "isCorrect": false },
                    { "id": "b", "text": "Office space and equipment", "isCorrect": false },
                    { "id": "c", "text": "Community members and leaders", "isCorrect": true },
                    { "id": "d", "text": "Media outlets", "isCorrect": false }
                ],
                "explanation": "Community members, leaders, and healthcare providers constitute human resources. Grants are financial, and media outlets are organizational resources."
            },
            {
                "id": "q3",
                "type": "multiple-select",
                "question": "Select the key strategies used in health advocacy: (Select all that apply)",
                "points": 15,
                "options": [
                    { "id": "a", "text": "Media Advocacy", "isCorrect": true },
                    { "id": "b", "text": "Grassroots Mobilization", "isCorrect": true },
                    { "id": "c", "text": "Isolating stakeholders", "isCorrect": false },
                    { "id": "d", "text": "Policy Advocacy", "isCorrect": true }
                ],
                "partialCredit": true,
                "explanation": "Media advocacy, grassroots mobilization, and policy advocacy are core strategies. Isolating stakeholders is counterproductive."
            },
            {
                "id": "q4",
                "type": "ordering",
                "question": "Order the general steps of a Health Advocacy Plan:",
                "points": 15,
                "items": [
                    { "id": "i1", "text": "Problem Identification and Analysis", "correctPosition": 1 },
                    { "id": "i2", "text": "Goal Setting", "correctPosition": 2 },
                    { "id": "i3", "text": "Target Audience Identification", "correctPosition": 3 },
                    { "id": "i4", "text": "Advocacy Strategies Implementation", "correctPosition": 4 },
                    { "id": "i5", "text": "Monitoring and Evaluation", "correctPosition": 5 }
                ],
                "explanation": "The plan starts with defining the problem, setting goals, identifying who to influence, implementing strategies, and finally evaluating the impact."
            },
            {
                "id": "q5",
                "type": "matching",
                "question": "Match the stakeholder category to its example:",
                "points": 20,
                "pairs": [
                    { "id": "p1", "left": "Healthcare Providers", "right": "Nurses and Physicians" },
                    { "id": "p2", "left": "Government Officials", "right": "Policymakers and Health Departments" },
                    { "id": "p3", "left": "Private Sector", "right": "Pharmaceutical Companies and Employers" },
                    { "id": "p4", "left": "Community Members", "right": "Patients and Local Leaders" }
                ],
                "explanation": "Each group plays a specific role: Providers deliver care, Government sets policy, Private sector provides resources/employment, and Community members are the beneficiaries/advocates."
            },
            {
                "id": "q6",
                "type": "fill-blank",
                "question": "Individuals or groups who have an interest or concern in a particular issue and can be affected by the outcomes are called __b1__.",
                "points": 10,
                "blanks": [
                    { "id": "b1", "acceptedAnswers": ["stakeholders", "stakeholder"], "caseSensitive": false }
                ],
                "explanation": "Stakeholders are defined as those with a 'stake' or interest in the issue."
            }
        ]
    });
}