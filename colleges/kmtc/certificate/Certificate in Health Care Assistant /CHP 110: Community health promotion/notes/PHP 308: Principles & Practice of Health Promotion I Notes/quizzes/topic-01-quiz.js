registerQuiz("topic-01-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-01-quiz",
  "metadata": {
    "title": "Unit 1.0: Concepts & Principles",
    "description": "Assess your understanding of health promotion definitions, history, and the Ottawa Charter.",
    "topicId": "topic-01",
    "difficulty": "beginner",
    "estimatedTime": 10,
    "passingScore": 70,
    "createdAt": "2023-05-20T00:00:00Z",
    "tags": ["ottawa-charter", "history", "definitions"]
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
      "type": "multiple-choice",
      "question": "Which conference launched the first global charter for Health Promotion in 1986?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Alma-Ata Conference", "isCorrect": false },
        { "id": "b", "text": "Ottawa Conference", "isCorrect": true },
        { "id": "c", "text": "Jakarta Conference", "isCorrect": false },
        { "id": "d", "text": "Nairobi Conference", "isCorrect": false }
      ],
      "explanation": "The first International Conference on Health Promotion took place in Ottawa, Canada, in 1986, resulting in the Ottawa Charter."
    },
    {
      "id": "q2",
      "type": "fill-blank",
      "question": "In the Health Promotion logo, the red outer circle symbolizes the goal of Building __b1__.",
      "points": 15,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["Healthy Public Policies", "healthy public policy", "public policies"], "caseSensitive": false }
      ],
      "explanation": "The outer circle represents the need for policies to 'hold things together' and the objective of Building Healthy Public Policies."
    },
    {
      "id": "q3",
      "type": "matching",
      "question": "Match the Health Promotion Core Value with its definition:",
      "points": 20,
      "pairs": [
        { "id": "p1", "left": "Empowerment", "right": "Enabling people to gain greater control over decisions affecting their health" },
        { "id": "p2", "left": "Equity", "right": "Ensuring fairness of outcomes for service users" },
        { "id": "p3", "left": "Intersectoral", "right": "Working in partnership with other relevant agencies" },
        { "id": "p4", "left": "Holistic", "right": "Taking account of separate influences and their interactions" }
      ],
      "explanation": "These are the core values: Empowerment (control), Equity (fairness), Intersectoral (partnerships), and Holistic (interactions)."
    },
    {
      "id": "q4",
      "type": "multiple-select",
      "question": "According to the Ottawa Charter, what are the three basic Health Promotion strategies represented by the inner circle of the logo? (Select 3)",
      "points": 15,
      "options": [
        { "id": "a", "text": "Enable", "isCorrect": true },
        { "id": "b", "text": "Mediate", "isCorrect": true },
        { "id": "c", "text": "Advocate", "isCorrect": true },
        { "id": "d", "text": "Treat", "isCorrect": false },
        { "id": "e", "text": "Prescribe", "isCorrect": false }
      ],
      "partialCredit": true,
      "explanation": "The three fundamental HP strategies represented in the inner circle are to Enable, Mediate, and Advocate."
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "question": "Which 1974 report proposed that environment and behavior are more important causes of morbidity than biophysical qualities?",
      "points": 10,
      "options": [
        { "id": "a", "text": "The Chadwick Report", "isCorrect": false },
        { "id": "b", "text": "The Lalonde Report", "isCorrect": true },
        { "id": "c", "text": "The McKeown Thesis", "isCorrect": false },
        { "id": "d", "text": "The Alma-Ata Declaration", "isCorrect": false }
      ],
      "explanation": "The Lalonde Report (1974) was the first significant milestone in the New Public Health Era, emphasizing lifestyle and environment."
    }
  ]
});