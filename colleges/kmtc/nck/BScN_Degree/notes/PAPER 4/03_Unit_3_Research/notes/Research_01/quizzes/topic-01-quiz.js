registerQuiz("topic-01-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-01-quiz",
    "metadata": {
        "title": "Topic 1: Concepts and Contribution of Research",
        "description": "Assess your understanding of the definitions, scope, and significance of nursing research.",
        "topicId": "topic-01",
        "difficulty": "beginner",
        "estimatedTime": 10,
        "passingScore": 80,
        "createdAt": "2026-01-17T00:00:00Z",
        "updatedAt": "2026-01-17T00:00:00Z",
        "tags": ["definitions", "nursing-research", "significance"]
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
            "id": "q1-definition",
            "type": "multiple-choice",
            "question": "According to Burns and Grove (1999), the scientific definition of research is a diligent, systematic inquiry to:",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Validate and refine existing knowledge and develop new knowledge", "isCorrect": true },
                { "id": "opt2", "text": "Simply describe life experiences without analysis", "isCorrect": false },
                { "id": "opt3", "text": "Copy information from textbooks to pass examinations", "isCorrect": false },
                { "id": "opt4", "text": "Perform laboratory experiments on chemicals only", "isCorrect": false }
            ],
            "explanation": "Research is defined as a diligent, systematic inquiry or study to validate and refine existing knowledge and develop new knowledge."
        },
        {
            "id": "q1-nursing-research",
            "type": "fill-blank",
            "question": "Cormack (1991) defines nursing research as research into aspects of professional activity which are predominantly the concern and responsibility of __b1__.",
            "points": 1,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["nurses"], "caseSensitive": false }
            ],
            "explanation": "Nursing research specifically addresses issues relevant to the nursing profession and the responsibilities of nurses."
        },
        {
            "id": "q1-purposes",
            "type": "multiple-select",
            "question": "Which of the following are recognized purposes of nursing research? (Select all that apply)",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "To increase the cost-effectiveness of nursing activities", "isCorrect": true },
                { "id": "opt2", "text": "To provide a basis for standards setting and quality assurance", "isCorrect": true },
                { "id": "opt3", "text": "To develop scientific, evidence-based reasons for nursing activities", "isCorrect": true },
                { "id": "opt4", "text": "To allow nurses to stop working in clinical areas", "isCorrect": false }
            ],
            "explanation": "Nursing research aims to improve cost-effectiveness, quality assurance, and the scientific basis for practice."
        },
        {
            "id": "q1-contribution",
            "type": "matching",
            "question": "Match the research function to its description.",
            "points": 1,
            "pairs": [
                { "id": "p1", "left": "Description", "right": "Identifying certain nursing observations or phenomena" },
                { "id": "p2", "left": "Explanation", "right": "Clarifying relationships between specific variables" },
                { "id": "p3", "left": "Prediction", "right": "Forecasting the outcome of nursing activities" }
            ],
            "explanation": "Research helps in describing phenomena, explaining relationships, and predicting outcomes."
        },
        {
            "id": "q1-professionalism",
            "type": "true-false",
            "question": "For nursing to be recognized as a profession, it must rely solely on knowledge borrowed from the medical profession.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "False. For a profession to be recognized, it must have its own knowledge base developed through scientific research."
        }
    ]
});