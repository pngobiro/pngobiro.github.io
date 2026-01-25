registerQuiz("topic-01-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-01-quiz",
  "metadata": {
    "title": "Hand Washing Quiz",
    "description": "Test your knowledge of proper hand washing techniques and indications.",
    "topicId": "topic-01",
    "difficulty": "beginner",
    "estimatedTime": 5,
    "passingScore": 80,
    "createdAt": "2026-01-25T00:00:00Z"
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
      "question": "What is the primary purpose of hand washing in a clinical setting?",
      "points": 10,
      "options": [
        { "id": "a", "text": "To keep hands smelling fresh", "isCorrect": false },
        { "id": "b", "text": "To remove/reduce microorganisms and prevent cross infection", "isCorrect": true },
        { "id": "c", "text": "To moisten the skin before procedures", "isCorrect": false },
        { "id": "d", "text": "To comply with hospital aesthetics", "isCorrect": false }
      ],
      "explanation": "The primary purpose is to remove or reduce dirt and microorganisms, preventing their transfer and controlling cross-infection."
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "question": "According to the general procedure, how long should you thoroughly rub hands together?",
      "points": 10,
      "options": [
        { "id": "a", "text": "2-3 seconds", "isCorrect": false },
        { "id": "b", "text": "5 seconds", "isCorrect": false },
        { "id": "c", "text": "10-15 seconds", "isCorrect": true },
        { "id": "d", "text": "60 seconds", "isCorrect": false }
      ],
      "explanation": "Mechanical friction for about 10-15 seconds is required to effectively remove microorganisms from the skin surface."
    },
    {
      "id": "q3",
      "type": "true-false",
      "question": "Hand washing with soap and water is more effective than hand sanitizer when hands are visibly soiled.",
      "points": 10,
      "correctAnswer": true,
      "explanation": "Hand washing is specifically indicated over sanitizer when hands are visibly soiled, after using the washroom, and before eating."
    },
    {
      "id": "q4",
      "type": "multiple-choice",
      "question": "When drying hands with a paper towel, what is the correct direction?",
      "points": 10,
      "options": [
        { "id": "a", "text": "From forearms down to fingers", "isCorrect": false },
        { "id": "b", "text": "From fingers up to forearms", "isCorrect": true },
        { "id": "c", "text": "It doesn't matter", "isCorrect": false },
        { "id": "d", "text": "Only dry the palms", "isCorrect": false }
      ],
      "explanation": "Drying should proceed from the cleanest area (fingers/hands) to the least clean area (forearms) to prevent transfer of microorganisms."
    },
    {
      "id": "q5",
      "type": "multiple-select",
      "question": "Which of the following are indications for hand washing? (Select all that apply)",
      "points": 15,
      "options": [
        { "id": "a", "text": "After removing gloves", "isCorrect": true },
        { "id": "b", "text": "Before leaving the health facility", "isCorrect": true },
        { "id": "c", "text": "After contact with body fluids", "isCorrect": true },
        { "id": "d", "text": "Routinely before performing any procedure", "isCorrect": true }
      ],
      "partialCredit": true,
      "explanation": "All listed options are standard indications for hand washing to maintain infection control."
    }
  ]
});
