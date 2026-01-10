registerQuiz("topic-02-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-02-quiz",
  "metadata": {
    "title": "Support and Movement Quiz",
    "description": "Test your knowledge on the skeletal and muscular systems.",
    "topicId": "topic-02-support-movement",
    "difficulty": "intermediate",
    "estimatedTime": 10,
    "passingScore": 70,
    "createdAt": "2022-05-20T00:00:00Z"
  },
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "question": "Which of the following is NOT a primary function of the skeletal system?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Support", "isCorrect": false },
        { "id": "b", "text": "Protection of internal organs", "isCorrect": false },
        { "id": "c", "text": "Production of hormones", "isCorrect": true },
        { "id": "d", "text": "Blood cell production", "isCorrect": false }
      ],
      "explanation": "The skeletal system provides support, protection, movement, and blood cell production. Hormone production is primarily the function of the endocrine system."
    },
    {
      "id": "q2",
      "type": "multiple-select",
      "question": "Select the types of muscle tissue found in the human body:",
      "points": 10,
      "options": [
        { "id": "a", "text": "Skeletal Muscle", "isCorrect": true },
        { "id": "b", "text": "Cardiac Muscle", "isCorrect": true },
        { "id": "c", "text": "Smooth Muscle", "isCorrect": true },
        { "id": "d", "text": "Rough Muscle", "isCorrect": false }
      ],
      "partialCredit": true,
      "explanation": "The three types of muscle tissue are skeletal, cardiac, and smooth."
    },
    {
      "id": "q3",
      "type": "true-false",
      "question": "The appendicular skeleton includes the skull, vertebral column, and rib cage.",
      "points": 10,
      "correctAnswer": false,
      "explanation": "False. The skull, vertebral column, and rib cage make up the Axial skeleton. The Appendicular skeleton includes the limbs and girdles."
    },
    {
      "id": "q4",
      "type": "fill-blank",
      "question": "The point where two or more bones meet is called a __b1__.",
      "points": 10,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["joint", "articulation"], "caseSensitive": false }
      ],
      "explanation": "Joints (articulations) are the sites where bones meet to allow movement or provide stability."
    }
  ]
});