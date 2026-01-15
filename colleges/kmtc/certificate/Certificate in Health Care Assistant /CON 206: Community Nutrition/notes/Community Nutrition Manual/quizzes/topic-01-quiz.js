registerQuiz("topic-01-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-01-quiz",
  "metadata": {
    "title": "Overview and Concepts Quiz",
    "description": "Assess your understanding of basic nutrition concepts.",
    "topicId": "topic-01",
    "difficulty": "beginner",
    "estimatedTime": 10,
    "passingScore": 70,
    "createdAt": "2025-12-25T12:00:00Z"
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
      "question": "What is the definition of 'Nutrients'?",
      "points": 10,
      "options": [
        { "id": "a", "text": "A substance when eaten provides energy", "isCorrect": false },
        { "id": "b", "text": "Substances digested and absorbed to promote body functions", "isCorrect": true },
        { "id": "c", "text": "The basic duty to provide adequate food", "isCorrect": false },
        { "id": "d", "text": "The balance between intake and requirements", "isCorrect": false }
      ],
      "explanation": "Nutrients are substances which are digested and absorbed to promote body functions."
    },
    {
      "id": "q2",
      "type": "matching",
      "question": "Match the food classification with its primary function:",
      "points": 20,
      "pairs": [
        { "id": "p1", "left": "Energy Foods", "right": "Provide strength to work (Carbohydrates)" },
        { "id": "p2", "left": "Body Building Foods", "right": "Help in growth and repair (Proteins)" },
        { "id": "p3", "left": "Protective Foods", "right": "Protect from disease (Vitamins)" }
      ]
    },
    {
      "id": "q3",
      "type": "fill-blank",
      "question": "A condition caused by lack of, inadequate, or excess intake of nutrients is called __b1__.",
      "points": 10,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["malnutrition", "Malnutrition"], "caseSensitive": false }
      ],
      "explanation": "Malnutrition refers to both under-nutrition and over-nutrition."
    },
    {
      "id": "q4",
      "type": "true-false",
      "question": "No single food provides all the nutrients required by the body in sufficient quantities.",
      "points": 10,
      "correctAnswer": true,
      "explanation": "This is why a variety of foods must be eaten to maintain health."
    }
  ]
});
