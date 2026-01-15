if (typeof registerQuiz === 'function') {
    registerQuiz("topic-10-quiz", {
        "schemaVersion": "1.0",
        "quizId": "topic-10-quiz",
        "metadata": {
            "title": "Inter-Sectoral Collaboration II Quiz",
            "description": "Test your knowledge on partnership networks, health inequities, and incorporation strategies.",
            "topicId": "topic-10",
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
                "type": "ordering",
                "question": "Arrange the steps for Developing a Partnership Network in the correct order:",
                "points": 15,
                "items": [
                    { "id": "i1", "text": "Identify Problem and Define Goals", "correctPosition": 1 },
                    { "id": "i2", "text": "Build Relationships and Trust", "correctPosition": 2 },
                    { "id": "i3", "text": "Form a Core Group", "correctPosition": 3 },
                    { "id": "i4", "text": "Develop a Partnership Structure", "correctPosition": 4 },
                    { "id": "i5", "text": "Implement Partnership Activities", "correctPosition": 5 },
                    { "id": "i6", "text": "Sustain the Partnership", "correctPosition": 6 }
                ],
                "explanation": "The process starts with defining the problem, building trust, forming a core team, structuring the partnership, implementing action, and finally sustaining it."
            },
            {
                "id": "q2",
                "type": "multiple-select",
                "question": "Which of the following are core principles of Inter-Sectoral Collaboration? (Select all that apply)",
                "points": 15,
                "options": [
                    { "id": "a", "text": "Shared goals", "isCorrect": true },
                    { "id": "b", "text": "Complementarity", "isCorrect": true },
                    { "id": "c", "text": "Competition for resources", "isCorrect": false },
                    { "id": "d", "text": "Trust and communication", "isCorrect": true }
                ],
                "partialCredit": true,
                "explanation": "Shared goals, complementarity (bringing unique strengths), trust, and communication are key. Competition is generally counterproductive in this context."
            },
            {
                "id": "q3",
                "type": "fill-blank",
                "question": "Health __b1__ are unfair and avoidable differences in health status between different groups of people.",
                "points": 10,
                "blanks": [
                    { "id": "b1", "acceptedAnswers": ["inequities", "Inequities", "inequity"], "caseSensitive": false }
                ],
                "explanation": "Health inequities refer to unjust differences in health status, often rooted in social determinants."
            },
            {
                "id": "q4",
                "type": "matching",
                "question": "Match the mobilization strategy to its description:",
                "points": 20,
                "pairs": [
                    { "id": "p1", "left": "Needs Assessment", "right": "Identifying common challenges" },
                    { "id": "p2", "left": "Capacity Building", "right": "Providing training and mentorship" },
                    { "id": "p3", "left": "Resource Mobilization", "right": "Developing funding proposals" },
                    { "id": "p4", "left": "Stakeholder Mapping", "right": "Assessing interests and power" }
                ],
                "explanation": "Needs assessment identifies problems; Capacity building improves skills; Resource mobilization gathers funds; Stakeholder mapping analyzes partners."
            },
            {
                "id": "q5",
                "type": "true-false",
                "question": "Addressing health inequities requires focusing solely on the healthcare sector without involving other sectors like housing or education.",
                "points": 10,
                "correctAnswer": false,
                "explanation": "Tackling inequities requires a comprehensive approach addressing **Social Determinants of Health**, which involves sectors like housing, education, and employment."
            },
            {
                "id": "q6",
                "type": "multiple-choice",
                "question": "What is a key strategy for improving access to care as a means to tackle health inequities?",
                "points": 10,
                "options": [
                    { "id": "a", "text": "Reducing services in rural areas", "isCorrect": false },
                    { "id": "b", "text": "Expanding healthcare services in underserved areas", "isCorrect": true },
                    { "id": "c", "text": "Increasing fees for service", "isCorrect": false },
                    { "id": "d", "text": "Centralizing all care in cities", "isCorrect": false }
                ],
                "explanation": "Expanding services to underserved areas directly addresses geographical barriers to access."
            }
        ]
    });
}