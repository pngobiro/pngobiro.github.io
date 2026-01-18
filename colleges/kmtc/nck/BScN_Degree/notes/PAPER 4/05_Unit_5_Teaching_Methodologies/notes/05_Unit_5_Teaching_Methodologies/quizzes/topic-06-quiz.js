registerQuiz("topic-06-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-06-quiz",
    "metadata": {
        "title": "Topic 6: Student Evaluation",
        "description": "Assess your understanding of evaluation concepts, types (formative/summative), and tools like MCQ and OSCE.",
        "topicId": "topic-06",
        "difficulty": "advanced",
        "estimatedTime": 15,
        "passingScore": 75,
        "createdAt": "2026-01-17T00:00:00Z",
        "updatedAt": "2026-01-17T00:00:00Z",
        "tags": ["evaluation", "assessment", "osce", "mcq"]
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which type of evaluation is conducted continuously during the course to provide feedback and diagnose problems?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Formative Evaluation", "isCorrect": true },
                { "id": "opt2", "text": "Summative Evaluation", "isCorrect": false },
                { "id": "opt3", "text": "Terminal Evaluation", "isCorrect": false },
                { "id": "opt4", "text": "Placement Evaluation", "isCorrect": false }
            ],
            "explanation": "Formative evaluation happens during learning (progressive). Summative/Terminal happens at the end."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the term with its definition.",
            "points": 2,
            "pairs": [
                { "id": "p1", "left": "Assessment", "right": "Measuring the extent of learning achievement" },
                { "id": "p2", "left": "Evaluation", "right": "Placing value on performance to make a decision" }
            ],
            "explanation": "Assessment is the measurement; Evaluation is the judgment/decision making based on that measurement."
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "The acronym __b1__ stands for Objective Structured Clinical Examination.",
            "points": 1,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["osce", "OSCE"], "caseSensitive": false }
            ],
            "explanation": "OSCE is a comprehensive method for assessing clinical skills."
        },
        {
            "id": "q4",
            "type": "multiple-select",
            "question": "Which rules should be observed when constructing Multiple Choice Questions (MCQs)? (Select all that apply)",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Distracters should be plausible (not ridiculous)", "isCorrect": true },
                { "id": "opt2", "text": "The correct answer should not be obviously longer", "isCorrect": true },
                { "id": "opt3", "text": "Questions should be simple and straightforward", "isCorrect": true },
                { "id": "opt4", "text": "Trick questions are encouraged", "isCorrect": false }
            ],
            "explanation": "Good MCQs use plausible distracters, avoid clues like length, and use clear language."
        }
    ]
});