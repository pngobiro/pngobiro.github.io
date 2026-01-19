registerQuiz("topic-01-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-01-quiz",
    "metadata": {
        "title": "Concept and Theories of Management",
        "description": "Assess your understanding of management definitions, classical theories, and behavioral approaches.",
        "topicId": "topic-01",
        "difficulty": "intermediate",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2026-01-19T20:00:00Z",
        "updatedAt": "2026-01-19T20:00:00Z",
        "tags": ["management", "theories", "fayol", "taylor", "weber"]
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
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which management theorist is associated with 'Scientific Management' and the time and motion study?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Henri Fayol", "isCorrect": false },
                { "id": "opt2", "text": "Max Weber", "isCorrect": false },
                { "id": "opt3", "text": "Frederick W. Taylor", "isCorrect": true },
                { "id": "opt4", "text": "Elton Mayo", "isCorrect": false }
            ],
            "explanation": "Frederick W. Taylor is known as the father of Scientific Management. He focused on the 'one best way' to perform tasks using scientific methods."
        },
        {
            "id": "q2",
            "type": "multiple-select",
            "question": "Select the key activities of a manager as outlined by Henri Fayol. (Select all that apply)",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Planning", "isCorrect": true },
                { "id": "opt2", "text": "Organizing", "isCorrect": true },
                { "id": "opt3", "text": "Coordinating", "isCorrect": true },
                { "id": "opt4", "text": "Ignoring", "isCorrect": false },
                { "id": "opt5", "text": "Controlling", "isCorrect": true }
            ],
            "explanation": "Fayol identified planning, organizing, coordinating, and controlling (along with commanding) as key managerial functions."
        },
        {
            "id": "q3",
            "type": "true-false",
            "question": "According to the Hawthorne Experiments (Elton Mayo), physical working conditions (lighting, noise) were found to be the most critical factor in employee productivity.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "False. Mayo found that social relationships and group dynamics were far more important than physical conditions."
        },
        {
            "id": "q4",
            "type": "ordering",
            "question": "Arrange Maslow's Hierarchy of Needs from the bottom (basic) to the top.",
            "points": 1,
            "items": [
                { "id": "item1", "text": "Physiological", "correctPosition": 1 },
                { "id": "item2", "text": "Safety", "correctPosition": 2 },
                { "id": "item3", "text": "Love/Belonging", "correctPosition": 3 },
                { "id": "item4", "text": "Self-Esteem", "correctPosition": 4 },
                { "id": "item5", "text": "Self-Actualization", "correctPosition": 5 }
            ],
            "explanation": "Maslow's hierarchy starts with physiological needs and progresses through safety, belonging, esteem, to self-actualization."
        },
        {
            "id": "q5",
            "type": "matching",
            "question": "Match the management theory to its primary focus.",
            "points": 3,
            "pairs": [
                { "id": "pair1", "left": "Bureaucracy", "right": "Rules, hierarchy, and rational-legal authority" },
                { "id": "pair2", "left": "Theory X", "right": "Employees dislike work and need coercion" },
                { "id": "pair3", "left": "Theory Y", "right": "Employees enjoy work and seek responsibility" }
            ],
            "explanation": "Weber defined Bureaucracy; McGregor defined Theory X (negative view) and Theory Y (positive view)."
        },
        {
            "id": "q6",
            "type": "fill-blank",
            "question": "A system that interacts with its environment, receiving inputs and discharging outputs, is called an __id1__ system.",
            "points": 1,
            "blanks": [
                {
                    "id": "id1",
                    "acceptedAnswers": ["open", "Open"],
                    "caseSensitive": false
                }
            ],
            "explanation": "Open systems interact with their environment (e.g., hospitals), whereas closed systems do not."
        }
    ]
});