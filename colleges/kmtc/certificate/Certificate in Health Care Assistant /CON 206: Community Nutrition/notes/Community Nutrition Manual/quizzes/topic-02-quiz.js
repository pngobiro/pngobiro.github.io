registerQuiz("topic-02-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-02-quiz",
  "metadata": {
    "title": "Food and Food Groups Quiz",
    "description": "Test your knowledge on macronutrients and micronutrients.",
    "topicId": "topic-02",
    "difficulty": "intermediate",
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
      "type": "multiple-choice",
      "question": "Which nutrient provides the most energy per gram?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Carbohydrates (4kcal)", "isCorrect": false },
        { "id": "b", "text": "Proteins (4kcal)", "isCorrect": false },
        { "id": "c", "text": "Fats (9kcal)", "isCorrect": true },
        { "id": "d", "text": "Vitamins (0kcal)", "isCorrect": false }
      ],
      "explanation": "Fats provide 9kcal per gram, the most concentrated energy source."
    },
    {
      "id": "q2",
      "type": "matching",
      "question": "Match the deficiency with the vitamin:",
      "points": 20,
      "pairs": [
        { "id": "p1", "left": "Rickets", "right": "Vitamin D" },
        { "id": "p2", "left": "Scurvy", "right": "Vitamin C" },
        { "id": "p3", "left": "Pellagra", "right": "Niacin (B3)" }
      ]
    }
  ]
});
