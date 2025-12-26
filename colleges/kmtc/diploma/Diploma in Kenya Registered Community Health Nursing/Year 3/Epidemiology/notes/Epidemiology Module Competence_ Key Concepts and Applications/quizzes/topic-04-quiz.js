registerQuiz("topic-04-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-04-quiz",
  "metadata": {
    "title": "Public Health Surveillance",
    "description": "Types of surveillance systems and the data cycle.",
    "topicId": "topic-04",
    "difficulty": "intermediate",
    "estimatedTime": 15,
    "passingScore": 70,
    "createdAt": "2025-12-26T10:00:00Z"
  },
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "question": "Which type of surveillance involves health staff actively contacting providers to find cases?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Passive", "isCorrect": false },
        { "id": "b", "text": "Active", "isCorrect": true },
        { "id": "c", "text": "Sentinel", "isCorrect": false },
        { "id": "d", "text": "Syndromic", "isCorrect": false }
      ],
      "explanation": "Active surveillance implies the health agency initiates contact to ensure complete data collection."
    },
    {
      "id": "q2",
      "type": "true-false",
      "question": "Passive surveillance is generally more expensive than active surveillance.",
      "points": 5,
      "correctAnswer": false,
      "explanation": "Passive surveillance is inexpensive because it relies on providers reporting; Active surveillance requires dedicated staff time and resources."
    },
    {
      "id": "q3",
      "type": "ordering",
      "question": "Order the steps of the Surveillance Cycle:",
      "points": 15,
      "items": [
        { "id": "i1", "text": "Data Collection", "correctPosition": 1 },
        { "id": "i2", "text": "Analysis", "correctPosition": 2 },
        { "id": "i3", "text": "Interpretation", "correctPosition": 3 },
        { "id": "i4", "text": "Dissemination", "correctPosition": 4 },
        { "id": "i5", "text": "Action", "correctPosition": 5 }
      ],
      "explanation": "You collect data, analyze it for trends, interpret the meaning, share the findings, and then take public health action."
    },
    {
      "id": "q4",
      "type": "multiple-choice",
      "question": "What is 'Syndromic Surveillance'?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Tracking confirmed lab results", "isCorrect": false },
        { "id": "b", "text": "Using clinical features/symptoms before diagnosis", "isCorrect": true },
        { "id": "c", "text": "Monitoring selected high-quality sites", "isCorrect": false }
      ],
      "explanation": "Syndromic surveillance tracks symptoms (like 'rash illness' or 'fever') to get an early warning before lab confirmation is available."
    }
  ]
});