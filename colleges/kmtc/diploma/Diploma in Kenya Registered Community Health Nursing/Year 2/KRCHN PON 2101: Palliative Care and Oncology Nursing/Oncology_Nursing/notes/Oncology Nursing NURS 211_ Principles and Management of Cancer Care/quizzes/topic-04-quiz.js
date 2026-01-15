registerQuiz("topic-04-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-04-quiz",
  "metadata": {
    "title": "Lymphoma Assessment",
    "topicId": "topic-04-lymphoma",
    "difficulty": "intermediate",
    "estimatedTime": 5,
    "passingScore": 70,
    "createdAt": "2025-12-27T12:00:00Z"
  },
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "question": "Which cell type is diagnostic for Hodgkin's Lymphoma?",
      "points": 5,
      "options": [
        { "id": "a", "text": "Blast cells", "isCorrect": false },
        { "id": "b", "text": "Reed-Sternberg cells", "isCorrect": true },
        { "id": "c", "text": "T-Helper cells", "isCorrect": false },
        { "id": "d", "text": "Squamous cells", "isCorrect": false }
      ]
    },
    {
      "id": "q2",
      "type": "true-false",
      "question": "Non-Hodgkin's Lymphoma is typically localized to a single group of lymph nodes.",
      "points": 5,
      "correctAnswer": false,
      "explanation": "Non-Hodgkin's Lymphoma typically involves multiple lymph nodes and extranodal involvement is common. Hodgkin's is usually localized."
    },
    {
      "id": "q3",
      "type": "multiple-select",
      "question": "Select the common symptoms of Lymphoma:",
      "points": 5,
      "options": [
        { "id": "a", "text": "Painless swelling of lymph nodes", "isCorrect": true },
        { "id": "b", "text": "Night sweats", "isCorrect": true },
        { "id": "c", "text": "Unexplained weight loss", "isCorrect": true },
        { "id": "d", "text": "Painful, red skin rash", "isCorrect": false }
      ]
    },
    {
      "id": "q4",
      "type": "fill-blank",
      "question": "Lymphoma is a cancer that affects the __b1__ system, specifically the __b2__.",
      "points": 10,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["lymphatic", "lymph"], "caseSensitive": false },
        { "id": "b2", "acceptedAnswers": ["lymphocytes"], "caseSensitive": false }
      ]
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "question": "Which type of lymphoma is more common?",
      "points": 5,
      "options": [
        { "id": "a", "text": "Hodgkin's Lymphoma", "isCorrect": false },
        { "id": "b", "text": "Non-Hodgkin's Lymphoma", "isCorrect": true }
      ]
    }
  ]
});