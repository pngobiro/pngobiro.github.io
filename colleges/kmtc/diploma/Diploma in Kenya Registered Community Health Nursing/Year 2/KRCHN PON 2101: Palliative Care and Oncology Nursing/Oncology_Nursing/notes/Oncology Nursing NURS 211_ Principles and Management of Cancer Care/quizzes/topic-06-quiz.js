registerQuiz("topic-06-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-06-quiz",
  "metadata": {
    "title": "Breast Cancer & Screening",
    "topicId": "topic-06-breast-cancer",
    "difficulty": "intermediate",
    "estimatedTime": 5,
    "passingScore": 75,
    "createdAt": "2025-12-27T12:00:00Z"
  },
  "questions": [
    {
      "id": "q1",
      "type": "ordering",
      "question": "Order the steps of a Breast Self-Exam (visual inspection):",
      "points": 10,
      "items": [
        { "id": "i1", "text": "Look in mirror with hands at sides", "correctPosition": 1 },
        { "id": "i2", "text": "Look with hands above head", "correctPosition": 2 },
        { "id": "i3", "text": "Feel for changes with finger pads", "correctPosition": 3 }
      ]
    },
    {
      "id": "q2",
      "type": "multiple-select",
      "question": "Select all signs that may indicate breast cancer:",
      "points": 5,
      "options": [
        { "id": "a", "text": "Peau d'orange (orange peel skin)", "isCorrect": true },
        { "id": "b", "text": "Nipple retraction/inversion", "isCorrect": true },
        { "id": "c", "text": "Dimpling of the skin", "isCorrect": true },
        { "id": "d", "text": "Symmetrical breast size (unchanged)", "isCorrect": false },
        { "id": "e", "text": "Unusual discharge", "isCorrect": true }
      ]
    },
    {
      "id": "q3",
      "type": "fill-blank",
      "question": "The genes associated with a higher risk of hereditary breast cancer are __b1__ and __b2__.",
      "points": 5,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["BRCA1"], "caseSensitive": false },
        { "id": "b2", "acceptedAnswers": ["BRCA2"], "caseSensitive": false }
      ]
    },
    {
      "id": "q4",
      "type": "multiple-choice",
      "question": "Tamoxifen is a type of:",
      "points": 5,
      "options": [
        { "id": "a", "text": "Radiation therapy", "isCorrect": false },
        { "id": "b", "text": "Hormone therapy", "isCorrect": true },
        { "id": "c", "text": "Chemotherapy", "isCorrect": false },
        { "id": "d", "text": "Surgical procedure", "isCorrect": false }
      ]
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "question": "A breast self-exam should be performed:",
      "points": 5,
      "options": [
        { "id": "a", "text": "Every day", "isCorrect": false },
        { "id": "b", "text": "Once a year", "isCorrect": false },
        { "id": "c", "text": "At the same time each month", "isCorrect": true },
        { "id": "d", "text": "Only when pain is felt", "isCorrect": false }
      ]
    }
  ]
});