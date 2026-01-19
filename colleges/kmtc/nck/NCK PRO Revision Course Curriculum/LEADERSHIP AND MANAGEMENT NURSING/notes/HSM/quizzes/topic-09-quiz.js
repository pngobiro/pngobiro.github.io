registerQuiz("topic-09-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-09-quiz",
  "metadata": {
    "title": "Project Management Quiz",
    "description": "Assess your understanding of the planning cycle, LogFrames, and evaluation types.",
    "topicId": "topic-09",
    "difficulty": "advanced",
    "estimatedTime": 15,
    "passingScore": 70,
    "createdAt": "2026-01-20T10:00:00Z",
    "updatedAt": "2026-01-20T10:00:00Z",
    "tags": ["projects", "planning", "evaluation"]
  },
  "questions": [
    {
      "id": "q1-t9",
      "type": "ordering",
      "question": "Arrange the Key Steps in Planning in the correct logical order.",
      "points": 3,
      "items": [
        { "id": "i1", "text": "Situation Analysis", "correctPosition": 1 },
        { "id": "i2", "text": "Setting Priority", "correctPosition": 2 },
        { "id": "i3", "text": "Options Appraisal", "correctPosition": 3 },
        { "id": "i4", "text": "Programming", "correctPosition": 4 },
        { "id": "i5", "text": "Implementation & Monitoring", "correctPosition": 5 },
        { "id": "i6", "text": "Evaluation", "correctPosition": 6 }
      ]
    },
    {
      "id": "q2-t9",
      "type": "multiple-choice",
      "question": "Which tool separates objectives, verifiable indicators, means of verification, and assumptions into a 4x4 matrix?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "Gantt Chart", "isCorrect": false },
        { "id": "opt2", "text": "Logical Framework (LogFrame)", "isCorrect": true },
        { "id": "opt3", "text": "Activity Schedule", "isCorrect": false },
        { "id": "opt4", "text": "Budget", "isCorrect": false }
      ],
      "explanation": "The Logical Framework (LogFrame) is the matrix tool described."
    },
    {
      "id": "q3-t9",
      "type": "matching",
      "question": "Match the evaluation concept with its description.",
      "points": 3,
      "pairs": [
        { "id": "p1", "left": "Efficiency", "right": "Relationship between results obtained and resources expended" },
        { "id": "p2", "left": "Effectiveness", "right": "Degree to which the desired effect/outcome is achieved" },
        { "id": "p3", "left": "Relevance", "right": "Rationale for adopting policies; response to needs" }
      ]
    },
    {
      "id": "q4-t9",
      "type": "true-false",
      "question": "Monitoring is a periodic assessment done after the project is finished, while Evaluation is continuous.",
      "points": 1,
      "correctAnswer": false,
      "explanation": "It is the opposite: Monitoring is continuous assessment during implementation; Evaluation is periodic (often mid-term or end-term)."
    }
  ]
});