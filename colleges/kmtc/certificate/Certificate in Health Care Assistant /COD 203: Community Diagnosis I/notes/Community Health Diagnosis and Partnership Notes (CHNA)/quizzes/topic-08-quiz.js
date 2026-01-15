if (typeof registerQuiz === 'function') {
    registerQuiz("topic-08-quiz", {
        "schemaVersion": "1.0",
        "quizId": "topic-08-quiz",
        "metadata": {
            "title": "Community Action Planning II Quiz",
            "description": "Test your knowledge on SWOT analysis, stakeholder roles, timelines, and M&E.",
            "topicId": "topic-08",
            "difficulty": "intermediate",
            "estimatedTime": 12,
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
                "type": "fill-blank",
                "question": "In a SWOT analysis, the letter 'O' stands for __b1__, which are external factors that can be leveraged for the community's benefit.",
                "points": 10,
                "blanks": [
                    { "id": "b1", "acceptedAnswers": ["opportunities", "Opportunities", "opportunity"], "caseSensitive": false }
                ],
                "explanation": "SWOT stands for Strengths, Weaknesses, Opportunities, and Threats."
            },
            {
                "id": "q2",
                "type": "matching",
                "question": "Categorize the following SWOT elements as Internal or External:",
                "points": 20,
                "pairs": [
                    { "id": "p1", "left": "Strengths", "right": "Internal" },
                    { "id": "p2", "left": "Weaknesses", "right": "Internal" },
                    { "id": "p3", "left": "Opportunities", "right": "External" },
                    { "id": "p4", "left": "Threats", "right": "External" }
                ],
                "explanation": "Strengths/Weaknesses are internal attributes; Opportunities/Threats are external factors."
            },
            {
                "id": "q3",
                "type": "matching",
                "question": "Match the stakeholder to their primary responsibility in a CAP:",
                "points": 20,
                "pairs": [
                    { "id": "p1", "left": "Community Leaders", "right": "Build consensus and mobilize resources" },
                    { "id": "p2", "left": "Government Officials", "right": "Allocate funds and ensure compliance" },
                    { "id": "p3", "left": "NGOs", "right": "Provide expertise and conduct research" },
                    { "id": "p4", "left": "Community Members", "right": "Provide firsthand knowledge and identify problems" }
                ],
                "explanation": "Each stakeholder has a specific role: Leaders guide, Government authorizes/funds, NGOs support technically, and Members provide the core input."
            },
            {
                "id": "q4",
                "type": "ordering",
                "question": "Order the first 5 steps of developing a Monitoring & Evaluation (M&E) framework:",
                "points": 15,
                "items": [
                    { "id": "i1", "text": "Define Goals and Objectives", "correctPosition": 1 },
                    { "id": "i2", "text": "Identify Key Performance Indicators (KPIs)", "correctPosition": 2 },
                    { "id": "i3", "text": "Determine Data Collection Methods", "correctPosition": 3 },
                    { "id": "i4", "text": "Develop Data Collection Tools", "correctPosition": 4 },
                    { "id": "i5", "text": "Establish Data Management Plan", "correctPosition": 5 }
                ],
                "explanation": "The logical flow is: Goals -> Indicators -> Methods -> Tools -> Management."
            },
            {
                "id": "q5",
                "type": "multiple-select",
                "question": "Which of the following are benefits of defining clear timelines in a CAP? (Select all that apply)",
                "points": 15,
                "options": [
                    { "id": "a", "text": "Enhance efficiency", "isCorrect": true },
                    { "id": "b", "text": "Improve accountability", "isCorrect": true },
                    { "id": "c", "text": "Facilitate monitoring and evaluation", "isCorrect": true },
                    { "id": "d", "text": "Ensure no changes ever happen", "isCorrect": false }
                ],
                "partialCredit": true,
                "explanation": "Timelines improve efficiency, accountability, and monitoring. They should include flexibility for changes, rather than preventing them."
            },
            {
                "id": "q6",
                "type": "true-false",
                "question": "Effective collaboration requires clear roles, responsibilities, and mutual respect among stakeholders.",
                "points": 10,
                "correctAnswer": true,
                "explanation": "These are cited as key components of successful stakeholder collaboration."
            }
        ]
    });
}