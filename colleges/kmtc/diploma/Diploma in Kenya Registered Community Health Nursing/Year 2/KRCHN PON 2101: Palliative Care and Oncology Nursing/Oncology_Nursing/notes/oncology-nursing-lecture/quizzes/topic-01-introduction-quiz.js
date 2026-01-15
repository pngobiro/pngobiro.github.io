registerQuiz("topic-01-introduction-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-01-introduction-quiz",
  "metadata": {
    "title": "Introduction to Oncology Quiz",
    "description": "Test your knowledge of cancer terminology, definitions, and proliferative patterns.",
    "topicId": "topic-01-introduction",
    "difficulty": "beginner",
    "estimatedTime": 10,
    "passingScore": 70,
    "createdAt": "2025-12-27T00:00:00Z"
  },
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "question": "What is the definition of **dysplasia**?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Increase in the number of normal cells", "isCorrect": false },
        { "id": "b", "text": "Alteration in the size, shape, and organization of differentiated cells", "isCorrect": true },
        { "id": "c", "text": "Decrease in size of a body part or organ", "isCorrect": false },
        { "id": "d", "text": "Growth of new capillaries", "isCorrect": false }
      ],
      "explanation": "Dysplasia refers to the abnormal development of cells within tissues or organs. It can lead to a wide range of conditions that involve enlarged tissue or pre-cancerous cells."
    },
    {
      "id": "q2",
      "type": "true-false",
      "question": "Most cancers are hereditary.",
      "points": 5,
      "correctAnswer": false,
      "explanation": "Most cancers are NOT hereditary. They are largely caused by environmental factors, lifestyle choices, and acquired genetic mutations."
    },
    {
      "id": "q3",
      "type": "matching",
      "question": "Match the proliferative pattern with its description:",
      "points": 20,
      "pairs": [
        { "id": "p1", "left": "Hyperplasia", "right": "Increase in number of cells" },
        { "id": "p2", "left": "Hypertrophy", "right": "Increase in cell size" },
        { "id": "p3", "left": "Neoplasia", "right": "New and abnormal growth" },
        { "id": "p4", "left": "Anaplasia", "right": "Loss of differentiation" }
      ]
    },
    {
      "id": "q4",
      "type": "fill-blank",
      "question": "A malignant tumor arising from glandular tissues is called an __1__.",
      "points": 10,
      "blanks": [
        { "id": "1", "acceptedAnswers": ["adenocarcinoma"], "caseSensitive": false }
      ],
      "explanation": "Adenocarcinomas are cancers that develop in the glandular tissues of the body."
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "question": "Which characteristic typically distinguishes a **malignant** tumor from a benign one?",
      "points": 10,
      "options": [
        { "id": "a", "text": "It is usually encapsulated", "isCorrect": false },
        { "id": "b", "text": "It grows by expansion", "isCorrect": false },
        { "id": "c", "text": "It spreads by metastasis", "isCorrect": true },
        { "id": "d", "text": "It resembles the parent tissue", "isCorrect": false }
      ],
      "explanation": "Malignant tumors have the ability to invade surrounding tissues and metastasize to distant sites, whereas benign tumors do not."
    }
  ]
});