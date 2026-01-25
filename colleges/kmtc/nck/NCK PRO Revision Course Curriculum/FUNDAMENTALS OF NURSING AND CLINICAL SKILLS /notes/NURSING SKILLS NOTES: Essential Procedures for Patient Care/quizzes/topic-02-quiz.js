registerQuiz("topic-02-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-02-quiz",
  "metadata": {
    "title": "Patient Positioning Quiz",
    "description": "Test your knowledge of various patient positions and their clinical rationales.",
    "topicId": "topic-02",
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
      "question": "Which position involves the patient sitting up in bed at an angle of approximately 45 degrees?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Supine", "isCorrect": false },
        { "id": "b", "text": "Fowler's", "isCorrect": true },
        { "id": "c", "text": "Prone", "isCorrect": false },
        { "id": "d", "text": "Trendelenburg", "isCorrect": false }
      ],
      "explanation": "Fowler's position is a sitting position where the head of the bed is elevated to 45 degrees, which helps with respiratory function and comfort."
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "question": "Which position is described as an extreme lateral position where the patient lies partially on the abdomen?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Sims", "isCorrect": true },
        { "id": "b", "text": "Lateral", "isCorrect": false },
        { "id": "c", "text": "Knee-Chest", "isCorrect": false },
        { "id": "d", "text": "Supine", "isCorrect": false }
      ],
      "explanation": "Sims position is an extreme lateral position, often used for rectal examinations or administering enemas."
    },
    {
      "id": "q3",
      "type": "multiple-choice",
      "question": "What is a primary reason for using the Prone position?",
      "points": 10,
      "options": [
        { "id": "a", "text": "To increase blood pressure", "isCorrect": false },
        { "id": "b", "text": "To allow for drainage of oral secretions", "isCorrect": true },
        { "id": "c", "text": "To facilitate feeding", "isCorrect": false },
        { "id": "d", "text": "To perform a lumbar puncture", "isCorrect": false }
      ],
      "explanation": "The Prone position (lying on the abdomen) allows for the drainage of oral secretions and is sometimes used post-operatively for specific surgeries."
    },
    {
      "id": "q4",
      "type": "true-false",
      "question": "In the Trendelenburg position, the head of the bed is higher than the foot of the bed.",
      "points": 10,
      "correctAnswer": false,
      "explanation": "In the Trendelenburg position, the bed is tilted so that the head is lower than the feet."
    },
    {
      "id": "q5",
      "type": "multiple-select",
      "question": "Which of the following are essential pre-procedure steps for patient positioning? (Select all that apply)",
      "points": 15,
      "options": [
        { "id": "a", "text": "Ensure the bed is locked", "isCorrect": true },
        { "id": "b", "text": "Explain the procedure to the patient", "isCorrect": true },
        { "id": "c", "text": "Assemble required pillows and supports", "isCorrect": true },
        { "id": "d", "text": "Check for skin integrity at pressure points", "isCorrect": true }
      ],
      "partialCredit": true,
      "explanation": "All these steps are crucial for the safety and comfort of the patient during and after positioning."
    }
  ]
});
