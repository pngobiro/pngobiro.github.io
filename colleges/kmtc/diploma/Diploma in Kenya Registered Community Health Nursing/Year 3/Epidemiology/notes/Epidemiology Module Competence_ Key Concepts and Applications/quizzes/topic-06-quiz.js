registerQuiz("topic-06-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-06-quiz",
  "metadata": {
    "title": "Demography",
    "description": "Population studies, cycles, and vital statistics.",
    "topicId": "topic-06",
    "difficulty": "intermediate",
    "estimatedTime": 15,
    "passingScore": 70,
    "createdAt": "2025-12-26T10:00:00Z"
  },
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "question": "In the Demographic Cycle, 'Stage 4' (Low Stationary) is characterized by:",
      "points": 10,
      "options": [
        { "id": "a", "text": "High Birth Rate, Low Death Rate", "isCorrect": false },
        { "id": "b", "text": "Low Birth Rate, Low Death Rate", "isCorrect": true },
        { "id": "c", "text": "High Birth Rate, High Death Rate", "isCorrect": false },
        { "id": "d", "text": "Declining Population", "isCorrect": false }
      ],
      "explanation": "Stage 4 (New Balance) has low birth and death rates, leading to a stable population."
    },
    {
      "id": "q2",
      "type": "fill-blank",
      "question": "Natural Increase = __1__ minus __2__.",
      "points": 10,
      "blanks": [
        { "id": "1", "acceptedAnswers": ["Births", "birth", "B"], "caseSensitive": false },
        { "id": "2", "acceptedAnswers": ["Deaths", "death", "D"], "caseSensitive": false }
      ],
      "explanation": "Natural Increase is the difference between Births and Deaths."
    },
    {
      "id": "q3",
      "type": "short-answer",
      "question": "What does the 'Dependency Ratio' measure?",
      "points": 15,
      "keywords": ["economically", "active", "inactive", "children", "elderly", "working"],
      "minKeywords": 2,
      "modelAnswer": "It measures the ratio of the economically inactive population (children and elderly) to the economically active (working age) population.",
      "explanation": "Dependency Ratio = (Pop <15 + Pop >65) / (Pop 15-64)."
    },
    {
      "id": "q4",
      "type": "multiple-choice",
      "question": "Which term describes the average number of children a woman must have to replace herself (approx 2.1)?",
      "points": 5,
      "options": [
        { "id": "a", "text": "Total Fertility Rate", "isCorrect": false },
        { "id": "b", "text": "Gross Reproduction Rate", "isCorrect": false },
        { "id": "c", "text": "Replacement Level Fertility", "isCorrect": true },
        { "id": "d", "text": "Crude Birth Rate", "isCorrect": false }
      ],
      "explanation": "Replacement Level Fertility is the rate required for a population to replace itself from one generation to the next."
    }
  ]
});