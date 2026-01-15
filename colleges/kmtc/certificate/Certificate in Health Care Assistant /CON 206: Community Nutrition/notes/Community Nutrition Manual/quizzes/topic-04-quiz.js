registerQuiz("topic-04-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-04-quiz",
  "metadata": {
    "title": "Malnutrition & Assessment Quiz",
    "description": "Test your ability to identify malnutrition types and assessment methods.",
    "topicId": "topic-04",
    "difficulty": "advanced",
    "estimatedTime": 15,
    "passingScore": 70
  },
  "settings": {
    "shuffleQuestions": true,
    "showFeedback": "immediate",
    "allowRetry": true,
    "showCorrectAnswers": true
  },
  "questions": [
    {
      "id": "q1",
      "type": "matching",
      "question": "Match the clinical condition with its primary characteristic:",
      "points": 20,
      "pairs": [
        { "id": "p1", "left": "Marasmus", "right": "Severe wasting / Old man's face" },
        { "id": "p2", "left": "Kwashiorkor", "right": "Oedema / Moon face" },
        { "id": "p3", "left": "Xerophthalmia", "right": "Night Blindness" }
      ]
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "question": "Which anthropometric measurement is independent of height?",
      "points": 10,
      "options": [
        { "id": "a", "text": "BMI", "isCorrect": false },
        { "id": "b", "text": "Weight for Age", "isCorrect": false },
        { "id": "c", "text": "MUAC (Mid Upper Arm Circumference)", "isCorrect": true },
        { "id": "d", "text": "Head Circumference", "isCorrect": false }
      ],
      "explanation": "MUAC is a proxy for muscle/fat reserves and is independent of height."
    }
  ]
});
