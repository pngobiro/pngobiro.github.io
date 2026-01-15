registerQuiz("topic-03-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-03-quiz",
    "metadata": {
        "title": "Court Structure & Jurisdiction Quiz",
        "description": "Evaluate your knowledge of the Kenyan court hierarchy, jurisdiction types, and limiting principles.",
        "topicId": "topic-03",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2026-01-03T12:00:00Z",
        "tags": ["courts", "jurisdiction", "res-judicata"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate",
        "allowRetry": true,
        "showCorrectAnswers": true
    },
    "questions": [
        {
            "id": "q1",
            "type": "ordering",
            "question": "Arrange the courts in the correct hierarchy from highest to lowest:",
            "points": 10,
            "items": [
                { "id": "i1", "text": "Supreme Court", "correctPosition": 1 },
                { "id": "i2", "text": "Court of Appeal", "correctPosition": 2 },
                { "id": "i3", "text": "High Court", "correctPosition": 3 },
                { "id": "i4", "text": "Magistrates Courts", "correctPosition": 4 }
            ],
            "explanation": "The Supreme Court is the apex court, followed by the Court of Appeal, High Court, and Subordinate Courts (Magistrates, etc.)."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "Which section of the Civil Procedure Act provides for the doctrine of Res Judicata?",
            "points": 5,
            "options": [
                { "id": "a", "text": "Section 3A", "isCorrect": false },
                { "id": "b", "text": "Section 6", "isCorrect": false },
                { "id": "c", "text": "Section 7", "isCorrect": true },
                { "id": "d", "text": "Section 11", "isCorrect": false }
            ],
            "explanation": "Section 7 bars a court from trying a suit where the matter has already been heard and finally decided by a competent court (Res Judicata). Section 6 deals with Sub-Judice."
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "Which of the following matters fall under the exclusive original jurisdiction of the Supreme Court?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Disputes relating to Presidential elections", "isCorrect": true },
                { "id": "b", "text": "Murder trials", "isCorrect": false },
                { "id": "c", "text": "Constitutional interpretation appeals", "isCorrect": false },
                { "id": "d", "text": "Land disputes worth over 1 billion", "isCorrect": false }
            ],
            "explanation": "Article 163(3)(a) grants the Supreme Court exclusive original jurisdiction to hear and determine disputes relating to the elections to the office of President."
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "The High Court has unlimited original jurisdiction in criminal and civil matters.",
            "points": 5,
            "correctAnswer": true,
            "explanation": "Article 165(3)(a) of the Constitution confers unlimited original jurisdiction in criminal and civil matters to the High Court."
        },
        {
            "id": "q5",
            "type": "fill-blank",
            "question": "The doctrine of __1__ bars a court from proceeding with the trial of a suit where the matter is also directly and substantially in issue in a previously instituted pending suit.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["sub-judice", "sub judice"], "caseSensitive": false }
            ],
            "explanation": "Section 6 of the CPA establishes the doctrine of Sub-Judice to prevent concurrent litigation on the same issue."
        }
    ]
});