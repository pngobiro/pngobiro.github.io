if (typeof registerQuiz === 'function') {
    registerQuiz("topic-12-quiz", {
        "schemaVersion": "1.0",
        "quizId": "topic-12-quiz",
        "metadata": {
            "title": "Health Information in Kenya Quiz",
            "description": "Test your knowledge on CHI systems, challenges, and strategies in Kenya.",
            "topicId": "topic-12",
            "difficulty": "intermediate",
            "estimatedTime": 8,
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
                "question": "Which government body is the primary agency responsible for healthcare policies and strategies in Kenya?",
                "points": 10,
                "options": [
                    { "id": "a", "text": "World Health Organization (WHO)", "isCorrect": false },
                    { "id": "b", "text": "Ministry of Health (MoH)", "isCorrect": true },
                    { "id": "c", "text": "United Nations (UN)", "isCorrect": false },
                    { "id": "d", "text": "Private Hospital Association", "isCorrect": false }
                ],
                "explanation": "The Ministry of Health (MoH) is the primary government agency leading policy and strategy."
            },
            {
                "id": "q2",
                "type": "multiple-select",
                "question": "Which of the following are identified as challenges in sharing CHI in Kenya? (Select all that apply)",
                "points": 15,
                "options": [
                    { "id": "a", "text": "Inadequate infrastructure (internet/computers)", "isCorrect": true },
                    { "id": "b", "text": "Shortage of skilled human resources", "isCorrect": true },
                    { "id": "c", "text": "Excessive funding and resources", "isCorrect": false },
                    { "id": "d", "text": "Lack of standardization", "isCorrect": true }
                ],
                "partialCredit": true,
                "explanation": "Infrastructure, human resources, and standardization are key challenges. Excessive funding is NOT a challenge (financial constraints are)."
            },
            {
                "id": "q3",
                "type": "fill-blank",
                "question": "The digital platform developed to improve data collection and utilization at the community level in Kenya is known as __b1__.",
                "points": 10,
                "blanks": [
                    { "id": "b1", "acceptedAnswers": ["eCHIS", "echis"], "caseSensitive": false }
                ],
                "hint": "Electronic Community Health Information System",
                "explanation": "eCHIS stands for Electronic Community Health Information System."
            },
            {
                "id": "q4",
                "type": "matching",
                "question": "Match the strategy to its description:",
                "points": 20,
                "pairs": [
                    { "id": "p1", "left": "Capacity Building", "right": "Training providers on data management" },
                    { "id": "p2", "left": "M-Health Solutions", "right": "Using mobile tech for remote data collection" },
                    { "id": "p3", "left": "Data Governance", "right": "Establishing structures for data ownership/access" },
                    { "id": "p4", "left": "Public-Private Partnerships", "right": "Collaboration for resources and expertise" }
                ],
                "explanation": "Capacity building = training; M-Health = mobile; Governance = rules/structures; PPPs = collaboration."
            },
            {
                "id": "q5",
                "type": "true-false",
                "question": "Interoperability between health facilities in Kenya is currently very high, allowing for seamless sharing of all patient records.",
                "points": 10,
                "correctAnswer": false,
                "explanation": "The text states that interoperability between facilities is currently **limited**, which hampers comprehensive care."
            },
            {
                "id": "q6",
                "type": "multiple-choice",
                "question": "What is a key benefit of using M-Health solutions in Kenya?",
                "points": 10,
                "options": [
                    { "id": "a", "text": "It eliminates the need for doctors", "isCorrect": false },
                    { "id": "b", "text": "It facilitates data collection in remote areas with limited infrastructure", "isCorrect": true },
                    { "id": "c", "text": "It increases the cost of healthcare", "isCorrect": false },
                    { "id": "d", "text": "It replaces all paper records immediately", "isCorrect": false }
                ],
                "explanation": "M-Health is specifically noted for leveraging mobile technology to facilitate data collection in remote areas."
            }
        ]
    });
}