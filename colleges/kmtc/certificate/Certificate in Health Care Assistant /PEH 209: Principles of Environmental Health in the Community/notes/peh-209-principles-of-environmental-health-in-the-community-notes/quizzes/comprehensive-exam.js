registerQuiz("comprehensive-exam", {
  "schemaVersion": "1.0",
  "quizId": "comprehensive-exam",
  "metadata": {
    "title": "Community Nutrition Comprehensive Final Exam",
    "description": "A comprehensive assessment covering all four units of the Community Nutrition Manual.",
    "examType": "comprehensive",
    "topicsCovered": ["topic-01", "topic-02", "topic-03", "topic-04"],
    "difficulty": "advanced",
    "estimatedTime": 60,
    "passingScore": 70,
    "createdAt": "2025-12-25T12:00:00Z",
    "tags": ["final", "comprehensive", "nutrition", "health"]
  },
  "settings": {
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "showFeedback": "end",
    "allowRetry": true,
    "showCorrectAnswers": true,
    "timeLimit": 3600
  },
  "questions": [
    {
      "id": "u1-q1",
      "type": "multiple-choice",
      "question": "Which category of food provides the body with strength to work?",
      "points": 1,
      "topicId": "topic-01",
      "topicName": "Unit 1: Overview & Concepts",
      "options": [
        { "id": "a", "text": "Body building foods", "isCorrect": false },
        { "id": "b", "text": "Energy foods", "isCorrect": true },
        { "id": "c", "text": "Protective foods", "isCorrect": false },
        { "id": "d", "text": "Regulatory foods", "isCorrect": false }
      ],
      "explanation": "Energy foods (carbohydrates) provide the body with energy or strength to work."
    },
    {
      "id": "u2-q1",
      "type": "multiple-choice",
      "question": "What is the caloric value of 1 gram of lipid (fat)?",
      "points": 1,
      "topicId": "topic-02",
      "topicName": "Unit 2: Food & Food Groups",
      "options": [
        { "id": "a", "text": "4 kcal", "isCorrect": false },
        { "id": "b", "text": "7 kcal", "isCorrect": false },
        { "id": "c", "text": "9 kcal", "isCorrect": true },
        { "id": "d", "text": "12 kcal", "isCorrect": false }
      ],
      "explanation": "Fats provide 9 kcal per gram, the most concentrated energy source."
    },
    {
      "id": "u3-q1",
      "type": "true-false",
      "question": "During exclusive breastfeeding, it is acceptable to give the baby water if the weather is very hot.",
      "points": 1,
      "topicId": "topic-03",
      "topicName": "Unit 3: Nutrition in Lifecycle",
      "correctAnswer": false,
      "explanation": "Exclusive breastfeeding means ONLY breast milk. Even in hot weather, breast milk satisfies the baby's thirst."
    },
    {
      "id": "u4-q1",
      "type": "multiple-choice",
      "question": "Which clinical sign is the primary distinguishing factor of Kwashiorkor?",
      "points": 1,
      "topicId": "topic-04",
      "topicName": "Unit 4: Malnutrition",
      "options": [
        { "id": "a", "text": "Severe weight loss", "isCorrect": false },
        { "id": "b", "text": "Alertness and irritability", "isCorrect": false },
        { "id": "c", "text": "Oedema (swelling)", "isCorrect": true },
        { "id": "d", "text": "Good appetite", "isCorrect": false }
      ],
      "explanation": "Oedema (fluid retention) is the hallmark sign of Kwashiorkor."
    }
  ]
});
