registerQuiz("topic-03-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-03-quiz",
  "metadata": {
    "title": "Nutrition in the Lifecycle Quiz",
    "description": "Check your understanding of nutritional needs during different life stages.",
    "topicId": "topic-03",
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
      "type": "true-false",
      "question": "During the first 6 months of exclusive breastfeeding, you should give the baby water if it is very hot.",
      "points": 10,
      "correctAnswer": false,
      "explanation": "Exclusive breastfeeding means ONLY breast milk. Foremilk contains enough water."
    },
    {
      "id": "q2",
      "type": "fill-blank",
      "question": "The first thick yellowish milk produced after birth is called __b1__.",
      "points": 10,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["colostrum", "Colostrum"], "caseSensitive": false }
      ],
      "explanation": "Colostrum is rich in antibodies and helps protect the baby from illness."
    }
  ]
});
