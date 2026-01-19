registerQuiz("topic-05-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-05-quiz",
    "metadata": {
        "title": "Topic 05: Literature Review",
        "description": "Assess your skills in sourcing, evaluating, and citing literature.",
        "topicId": "topic-05",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2024-05-20T10:00:00Z",
        "updatedAt": "2024-05-20T10:00:00Z",
        "tags": ["literature-review", "sources", "citation"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "t5-q1",
            "type": "multiple-choice",
            "question": "Which of the following is considered a PRIMARY source of literature?",
            "points": 1,
            "explanation": "Theses and Dissertations are original works by the author (Primary). Textbooks and Encyclopedias are usually secondary summaries.",
            "options": [
                { "id": "opt1", "text": "A textbook summarising various studies", "isCorrect": false },
                { "id": "opt2", "text": "An encyclopedia entry", "isCorrect": false },
                { "id": "opt3", "text": "Theses and Dissertations", "isCorrect": true },
                { "id": "opt4", "text": "A newspaper article about a study", "isCorrect": false }
            ]
        },
        {
            "id": "t5-q2",
            "type": "multiple-select",
            "question": "What are the main purposes of a literature review? (Select all that apply)",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "To determine what has been done already", "isCorrect": true },
                { "id": "opt2", "text": "To identify strategies and instruments found useful previously", "isCorrect": true },
                { "id": "opt3", "text": "To identify gaps in knowledge", "isCorrect": true },
                { "id": "opt4", "text": "To fill up pages in the proposal", "isCorrect": false }
            ]
        },
        {
            "id": "t5-q3",
            "type": "true-false",
            "question": "Secondary sources involve summaries or quoted content and are usually paraphrases of the primary source.",
            "points": 1,
            "correctAnswer": true
        },
        {
            "id": "t5-q4",
            "type": "fill-blank",
            "question": "When referencing within text using the APAD method, the author's last name and the __b1__ of publication are used.",
            "points": 1,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["year"], "caseSensitive": false }
            ]
        },
        {
            "id": "t5-q5",
            "type": "ordering",
            "question": "Order the steps of a literature review.",
            "points": 2,
            "items": [
                { "id": "s1", "text": "Identify key words or phrases", "correctPosition": 1 },
                { "id": "s2", "text": "Go to the source of literature", "correctPosition": 2 },
                { "id": "s3", "text": "Summarize references on cards", "correctPosition": 3 },
                { "id": "s4", "text": "Analyze and organize data", "correctPosition": 4 }
            ]
        }
    ]
});