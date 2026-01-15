if (typeof registerQuiz === 'function') {
    registerQuiz("topic-09-quiz", {
        "schemaVersion": "1.0",
        "quizId": "topic-09-quiz",
        "metadata": {
            "title": "Inter-Sectoral Collaboration Quiz I",
            "description": "Test your knowledge on identifying partners, developing Terms of Reference, and partnership dialogue.",
            "topicId": "topic-09",
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
                "type": "multiple-choice",
                "question": "What is the primary definition of Inter-Sectoral Collaboration (ISC)?",
                "points": 10,
                "options": [
                    { "id": "a", "text": "Working strictly within the health sector", "isCorrect": false },
                    { "id": "b", "text": "Working across different sectors to achieve common goals", "isCorrect": true },
                    { "id": "c", "text": "Competing with other sectors for funding", "isCorrect": false },
                    { "id": "d", "text": "Assigning all tasks to the government", "isCorrect": false }
                ],
                "explanation": "ISC involves working together across different sectors (health, education, agriculture, etc.) to achieve shared goals."
            },
            {
                "id": "q2",
                "type": "ordering",
                "question": "Arrange the steps to Identify Inter-Sectoral Collaboration Partners in the correct order:",
                "points": 15,
                "items": [
                    { "id": "i1", "text": "Define Scope of Community Diagnosis", "correctPosition": 1 },
                    { "id": "i2", "text": "Conduct Stakeholder Analysis", "correctPosition": 2 },
                    { "id": "i3", "text": "Identify Potential Partner Sectors", "correctPosition": 3 },
                    { "id": "i4", "text": "Assess Partner Capacity", "correctPosition": 4 },
                    { "id": "i5", "text": "Build Relationships and Trust", "correctPosition": 5 },
                    { "id": "i6", "text": "Formalize Partnerships", "correctPosition": 6 }
                ],
                "explanation": "The process flows from defining the scope, analyzing stakeholders, identifying sectors, assessing capacity, building trust, to finally formalizing the partnership."
            },
            {
                "id": "q3",
                "type": "matching",
                "question": "Match the Terms of Reference (ToR) section to its description:",
                "points": 20,
                "pairs": [
                    { "id": "p1", "left": "Project Scope", "right": "Clear definition of boundaries and target population" },
                    { "id": "p2", "left": "Objectives", "right": "Specific, measurable, and relevant goals" },
                    { "id": "p3", "left": "Methodology", "right": "Detailed description of data collection and analysis" },
                    { "id": "p4", "left": "Budget", "right": "Estimated costs and fund allocation" }
                ],
                "explanation": "Scope defines boundaries, Objectives set goals, Methodology explains the 'how', and Budget details finances."
            },
            {
                "id": "q4",
                "type": "multiple-select",
                "question": "Which of the following are key components of Partnership Dialogue? (Select all that apply)",
                "points": 15,
                "options": [
                    { "id": "a", "text": "Shared Vision and Goals", "isCorrect": true },
                    { "id": "b", "text": "Role Clarification", "isCorrect": true },
                    { "id": "c", "text": "Trust Building", "isCorrect": true },
                    { "id": "d", "text": "Secretive Decision Making", "isCorrect": false }
                ],
                "partialCredit": true,
                "explanation": "Effective dialogue requires shared vision, clear roles, and trust. Decision making should be transparent and consensual, not secretive."
            },
            {
                "id": "q5",
                "type": "fill-blank",
                "question": "Partnership __b1__ is the cornerstone of effective inter-sectoral collaboration, involving open and honest communication to identify shared goals.",
                "points": 10,
                "blanks": [
                    { "id": "b1", "acceptedAnswers": ["dialogue", "Dialogue"], "caseSensitive": false }
                ],
                "explanation": "Partnership Dialogue facilitates mutual understanding, trust, and cooperation."
            },
            {
                "id": "q6",
                "type": "true-false",
                "question": "Power imbalances and competing priorities are challenges that should be ignored in partnership dialogue.",
                "points": 10,
                "correctAnswer": false,
                "explanation": "Challenges like power imbalances should be addressed openly and collaboratively to strengthen relationships, not ignored."
            }
        ]
    });
}