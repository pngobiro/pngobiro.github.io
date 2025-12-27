registerQuiz("topic-05-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-05-quiz",
  "metadata": {
    "title": "Lung Cancer Quiz",
    "topicId": "topic-05-lung-cancer",
    "difficulty": "beginner",
    "estimatedTime": 5,
    "passingScore": 70,
    "createdAt": "2025-12-27T12:00:00Z"
  },
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "question": "What is the medical term for coughing up blood?",
      "points": 5,
      "options": [
        { "id": "a", "text": "Hematemesis", "isCorrect": false },
        { "id": "b", "text": "Hemoptysis", "isCorrect": true },
        { "id": "c", "text": "Hematuria", "isCorrect": false },
        { "id": "d", "text": "Epistaxis", "isCorrect": false }
      ]
    },
    {
      "id": "q2",
      "type": "matching",
      "question": "Match the lung surgery to its definition:",
      "points": 10,
      "pairs": [
        { "id": "p1", "left": "Wedge Resection", "right": "Removal of a small section of lung" },
        { "id": "p2", "left": "Lobectomy", "right": "Removal of a specific lobe" },
        { "id": "p3", "left": "Pneumonectomy", "right": "Removal of the entire lung" }
      ]
    },
    {
      "id": "q3",
      "type": "multiple-select",
      "question": "Which of the following are common types of lung cancer?",
      "points": 5,
      "options": [
        { "id": "a", "text": "Small cell", "isCorrect": true },
        { "id": "b", "text": "Non-small cell", "isCorrect": true },
        { "id": "c", "text": "Squamous cell", "isCorrect": true },
        { "id": "d", "text": "Basal cell", "isCorrect": false }
      ]
    },
    {
      "id": "q4",
      "type": "true-false",
      "question": "Difficulty swallowing (dysphagia) can be a symptom of lung cancer.",
      "points": 5,
      "correctAnswer": true,
      "explanation": "Yes, if the tumor presses against the esophagus, it can cause difficulty swallowing."
    }
  ]
});