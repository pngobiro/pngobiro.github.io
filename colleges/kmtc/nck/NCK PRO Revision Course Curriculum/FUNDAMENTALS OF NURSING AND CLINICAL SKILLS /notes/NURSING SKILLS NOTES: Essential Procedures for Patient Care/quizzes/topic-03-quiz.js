registerQuiz("topic-03-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-03-quiz",
  "metadata": {
    "title": "Bed Making Quiz",
    "description": "Test your understanding of hospital bed types and bed making procedures.",
    "topicId": "topic-03",
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
      "question": "What is the primary reason why you should never flip or shake hospital linen?",
      "points": 10,
      "options": [
        { "id": "a", "text": "To prevent the linen from tearing", "isCorrect": false },
        { "id": "b", "text": "To prevent the spread of microorganisms", "isCorrect": true },
        { "id": "c", "text": "To save time", "isCorrect": false },
        { "id": "d", "text": "To keep the linen from wrinkling", "isCorrect": false }
      ],
      "explanation": "Shaking linen can aerosolize microorganisms and dust, facilitating their spread in the environment."
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "question": "Which type of bed is specifically prepared for a patient who is arriving at the facility for the first time?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Occupied bed", "isCorrect": false },
        { "id": "b", "text": "Unoccupied bed", "isCorrect": false },
        { "id": "c", "text": "Admission bed", "isCorrect": true },
        { "id": "d", "text": "Fracture bed", "isCorrect": false }
      ],
      "explanation": "An admission bed is a specialized preparation for a new patient entry."
    },
    {
      "id": "q3",
      "type": "true-false",
      "question": "When making an occupied bed, the linen should never touch the ground.",
      "points": 10,
      "correctAnswer": true,
      "explanation": "Linen should always be kept off the floor to maintain cleanliness and prevent contamination."
    },
    {
      "id": "q4",
      "type": "multiple-choice",
      "question": "What is the primary purpose of making an occupied bed?",
      "points": 10,
      "options": [
        { "id": "a", "text": "To exercise the patient", "isCorrect": false },
        { "id": "b", "text": "To promote comfort and minimize skin irritation from wrinkles", "isCorrect": true },
        { "id": "c", "text": "To check the patient's weight", "isCorrect": false },
        { "id": "d", "text": "To make the ward look uniform", "isCorrect": false }
      ],
      "explanation": "Properly made beds without wrinkles are essential for patient comfort and preventing pressure sores."
    },
    {
      "id": "q5",
      "type": "multiple-select",
      "question": "Which of the following are essential rules for bed making? (Select all that apply)",
      "points": 15,
      "options": [
        { "id": "a", "text": "Never cover the patient's face", "isCorrect": true },
        { "id": "b", "text": "Miter all corners", "isCorrect": true },
        { "id": "c", "text": "Ensure the bed is well-locked", "isCorrect": true },
        { "id": "d", "text": "Place the right side of the bottom sheet facing up", "isCorrect": true }
      ],
      "partialCredit": true,
      "explanation": "All these rules contribute to patient safety, comfort, and clinical standards of care."
    }
  ]
});
