registerQuiz("topic-03-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-03-quiz",
    "metadata": {
        "title": "Topic 03: Developing Tools",
        "description": "Assess your understanding of data collection tools, questionnaire design, and pre-testing.",
        "topicId": "topic-03",
        "difficulty": "intermediate",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2025-12-26T12:00:00Z",
        "tags": ["tools", "questionnaire", "fgd", "pre-testing"]
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
            "type": "multiple-select",
            "question": "Which of the following are valid tools for data collection in community diagnosis? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Questionnaires", "isCorrect": true },
                { "id": "b", "text": "Focus Group Discussions (FGDs)", "isCorrect": true },
                { "id": "c", "text": "Key Informant Interviews", "isCorrect": true },
                { "id": "d", "text": "Physical Examination", "isCorrect": true }
            ],
            "explanation": "All options listed are valid tools for gathering different types of data."
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "For questionnaires, the acronym KISS stands for: Keep It __b1__ and __b2__.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["short"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["simple"], "caseSensitive": false }
            ],
            "explanation": "KISS emphasizes brevity and clarity: Keep It Short and Simple."
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "What is a Focus Group Discussion (FGD)?",
            "points": 10,
            "options": [
                { "id": "a", "text": "A debate between opposing political parties", "isCorrect": false },
                { "id": "b", "text": "A group discussion with people of similar backgrounds to discuss a specific topic", "isCorrect": true },
                { "id": "c", "text": "A one-on-one interview with a community leader", "isCorrect": false },
                { "id": "d", "text": "A written test for community members", "isCorrect": false }
            ],
            "explanation": "FGDs gather people with similar backgrounds to discuss specific topics under guidance."
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "Who guides the participants during a Focus Group Discussion?",
            "points": 10,
            "options": [
                { "id": "a", "text": "A Moderator (Facilitator)", "isCorrect": true },
                { "id": "b", "text": "The Village Chief", "isCorrect": false },
                { "id": "c", "text": "The Police", "isCorrect": false },
                { "id": "d", "text": "A Judge", "isCorrect": false }
            ],
            "explanation": "A moderator or facilitator is responsible for introducing topics and managing the discussion."
        },
        {
            "id": "q5",
            "type": "multiple-select",
            "question": "Why is it important to pre-test survey instruments? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "To identify misinterpreted questions", "isCorrect": true },
                { "id": "b", "text": "To detect sensitive questions that might offend", "isCorrect": true },
                { "id": "c", "text": "To check the logical flow of questions", "isCorrect": true },
                { "id": "d", "text": "To start collecting real data immediately", "isCorrect": false }
            ],
            "explanation": "Pre-testing checks for clarity, sensitivity, and flow before the actual survey execution."
        },
        {
            "id": "q6",
            "type": "true-false",
            "question": "A questionnaire is a set of standardized questions designed to collect information about a specific aspect.",
            "points": 5,
            "correctAnswer": true,
            "explanation": "True. Standardization ensures consistency in data collection."
        },
        {
            "id": "q7",
            "type": "fill-blank",
            "question": "Information from a questionnaire helps you to make __b1__ for your health services and to __b2__ them.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["plans"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["evaluate"], "caseSensitive": false }
            ],
            "explanation": "Questionnaire data is used for planning services and evaluating their effectiveness."
        },
        {
            "id": "q8",
            "type": "multiple-choice",
            "question": "Which tool would be best for gathering in-depth qualitative insights from a specific group of mothers?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Physical Examination", "isCorrect": false },
                { "id": "b", "text": "Focus Group Discussion", "isCorrect": true },
                { "id": "c", "text": "Map", "isCorrect": false },
                { "id": "d", "text": "Weighing Scale", "isCorrect": false }
            ],
            "explanation": "FGDs are ideal for qualitative insights from groups with shared characteristics (like mothers)."
        },
        {
            "id": "q9",
            "type": "true-false",
            "question": "Pre-testing allows you to delete questions that are being misinterpreted.",
            "points": 5,
            "correctAnswer": true,
            "explanation": "True. If a question is consistently misunderstood during pre-testing, it should be altered or deleted."
        },
        {
            "id": "q10",
            "type": "multiple-choice",
            "question": "Key Informant Interviews are conducted with:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Random strangers", "isCorrect": false },
                { "id": "b", "text": "Knowledgeable community members", "isCorrect": true },
                { "id": "c", "text": "Children only", "isCorrect": false },
                { "id": "d", "text": "Animals", "isCorrect": false }
            ],
            "explanation": "Key informants are selected for their specific knowledge or position in the community."
        }
    ]
});