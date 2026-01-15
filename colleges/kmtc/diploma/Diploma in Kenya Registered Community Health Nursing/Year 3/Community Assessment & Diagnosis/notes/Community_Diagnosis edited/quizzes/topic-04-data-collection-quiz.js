registerQuiz("topic-04-data-collection-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-04-data-collection-quiz",
    "metadata": {
        "title": "Data Collection Tools Quiz",
        "description": "Test your knowledge on questionnaires, FGDs, and interview techniques.",
        "topicId": "topic-04-data-collection",
        "difficulty": "intermediate",
        "estimatedTime": 20,
        "passingScore": 70,
        "createdAt": "2025-12-26T10:00:00Z",
        "tags": ["tools", "data", "interviews"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which type of question allows the respondent to answer in their own words?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Closed-ended", "isCorrect": false },
                { "id": "b", "text": "Structured", "isCorrect": false },
                { "id": "c", "text": "Open-ended", "isCorrect": true },
                { "id": "d", "text": "Matrix", "isCorrect": false }
            ],
            "explanation": "Open-ended (unstructured) questions allow free response, while closed-ended ones force a choice."
        },
        {
            "id": "q2",
            "type": "true-false",
            "question": "In a Focus Group Discussion (FGD), the facilitator dominates the conversation to ensure all points are covered.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "False. The facilitator should encourage the GROUP to discuss among themselves and avoid dominating."
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "What are the advantages of using closed-ended questions? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Easier to analyze", "isCorrect": true },
                { "id": "b", "text": "Allows greater depth of response", "isCorrect": false },
                { "id": "c", "text": "Economical in terms of time", "isCorrect": true },
                { "id": "d", "text": "Easier to administer", "isCorrect": true }
            ],
            "explanation": "Closed-ended questions are fast and easy to analyze but lack depth."
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "A __1__ question is asked after an initial question and is applicable only to a certain group of respondents (e.g., 'If yes, which method?').",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["contingency", "follow-up"], "caseSensitive": false }
            ],
            "explanation": "Contingency questions depend on the answer to a previous filter question."
        },
        {
            "id": "q5",
            "type": "matching",
            "question": "Match the interview type to its description.",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Structured Interview", "right": "Questions with specific responses to check" },
                { "id": "p2", "left": "Unstructured Interview", "right": "General plan/guide, relies on probing" },
                { "id": "p3", "left": "Semi-Structured Interview", "right": "Includes both structured and open questions" }
            ]
        },
        {
            "id": "q6",
            "type": "ordering",
            "question": "Order the steps for pre-testing a survey instrument.",
            "points": 20,
            "items": [
                { "id": "i1", "text": "Ask colleagues to review critically", "correctPosition": 1 },
                { "id": "i2", "text": "Simulate actual data collection", "correctPosition": 2 },
                { "id": "i3", "text": "Obtain feedback on form and content", "correctPosition": 3 },
                { "id": "i4", "text": "Revise the instrument", "correctPosition": 4 }
            ]
        }
    ]
});