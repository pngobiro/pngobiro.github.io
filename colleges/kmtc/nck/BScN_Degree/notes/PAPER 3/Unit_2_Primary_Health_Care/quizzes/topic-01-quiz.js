registerQuiz("topic-01-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-01-quiz",
  "metadata": {
    "title": "Topic 01: Concept and Principles of PHC",
    "description": "Test your knowledge on the historical background, definition, and pillars of Primary Health Care.",
    "topicId": "topic-01",
    "difficulty": "intermediate",
    "estimatedTime": 5,
    "passingScore": 70,
    "createdAt": "2026-01-16T00:00:00Z"
  },
  "settings": {
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "showFeedback": "immediate",
    "allowRetry": true,
    "showCorrectAnswers": true
  },
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "question": "Which conference defined Primary Health Care in 1978?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Geneva Convention", "isCorrect": false },
        { "id": "b", "text": "Alma Ata Conference", "isCorrect": true },
        { "id": "c", "text": "World Health Assembly 1977", "isCorrect": false },
        { "id": "d", "text": "Nairobi Summit", "isCorrect": false }
      ],
      "explanation": "The International Conference on Primary Health Care was held in Alma Ata in 1978."
    },
    {
      "id": "q2",
      "type": "multiple-select",
      "question": "Which of the following are among the 'Five As' of PHC concepts? (Select all that apply)",
      "points": 10,
      "options": [
        { "id": "a", "text": "Accessible", "isCorrect": true },
        { "id": "b", "text": "Affordable", "isCorrect": true },
        { "id": "c", "text": "Advanced", "isCorrect": false },
        { "id": "d", "text": "Automated", "isCorrect": false }
      ],
      "explanation": "The 5 As are Accessible, Acceptable, Affordable, Available, and Appropriate Technology."
    }
  ]
});