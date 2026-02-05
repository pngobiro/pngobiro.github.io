registerQuiz("topic-02-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-02-quiz",
  "metadata": {
    "title": "Topic 02: Plaster of Paris Mechanics",
    "description": "Test your knowledge on the chemistry, production, and setting properties of Plaster of Paris.",
    "topicId": "topic-02",
    "difficulty": "intermediate",
    "estimatedTime": 5,
    "passingScore": 80,
    "createdAt": "2026-02-04T00:00:00Z"
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
      "question": "Which mineral is Plaster of Paris derived from?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Quartz", "isCorrect": false },
        { "id": "b", "text": "Gypsum", "isCorrect": true },
        { "id": "c", "text": "Limestone", "isCorrect": false },
        { "id": "d", "text": "Granite", "isCorrect": false }
      ],
      "explanation": "Plaster of Paris is derived from the naturally occurring mineral gypsum (calcium sulfate dihydrate)."
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "question": "What type of reaction occurs when water is added to Plaster of Paris?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Endothermic (absorbs heat)", "isCorrect": false },
        { "id": "b", "text": "Exothermic (releases heat)", "isCorrect": true },
        { "id": "c", "text": "Neutral (no heat change)", "isCorrect": false },
        { "id": "d", "text": "Nuclear", "isCorrect": false }
      ],
      "explanation": "The reaction is exothermic, meaning it releases heat as the plaster sets."
    },
    {
      "id": "q3",
      "type": "multiple-select",
      "question": "Which factors DECREASE the setting time (make it set faster)? (Select all that apply)",
      "points": 10,
      "options": [
        { "id": "a", "text": "Hot water", "isCorrect": true },
        { "id": "b", "text": "Cold water", "isCorrect": false },
        { "id": "c", "text": "Salt", "isCorrect": true },
        { "id": "d", "text": "Sugar", "isCorrect": false }
      ],
      "explanation": "Hot water, Salt, Borax, and Resin decrease the setting time. Cold water and Sugar increase the setting time."
    },
    {
      "id": "q4",
      "type": "true-false",
      "question": "The setting time is the time taken to change from crystalline form to anhydrous form.",
      "points": 10,
      "correctAnswer": false,
      "explanation": "Setting time is the time taken to change from powder to crystalline form (3-9 mins). Drying time is the change to anhydrous form (24-72 hours)."
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "question": "What is the approximate setting time for Plaster of Paris?",
      "points": 10,
      "options": [
        { "id": "a", "text": "3 – 9 minutes", "isCorrect": true },
        { "id": "b", "text": "24 – 72 hours", "isCorrect": false },
        { "id": "c", "text": "30 seconds", "isCorrect": false },
        { "id": "d", "text": "1 hour", "isCorrect": false }
      ],
      "explanation": "The average setting time is 3 – 9 minutes."
    }
  ]
});
