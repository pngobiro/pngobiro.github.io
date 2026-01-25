registerQuiz("topic-08-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-08-quiz",
  "metadata": {
    "title": "Pressure Area Care Quiz",
    "description": "Evaluate your knowledge on preventing and treating pressure ulcers in nursing care.",
    "topicId": "topic-08",
    "difficulty": "intermediate",
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
      "question": "What is the primary cause of pressure ulcers in bed-ridden patients?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Lack of vitamins", "isCorrect": false },
        { "id": "b", "text": "Prolonged contact pressure between the body and the bed", "isCorrect": true },
        { "id": "c", "text": "Using too much soap", "isCorrect": false },
        { "id": "d", "text": "Poor lighting in the ward", "isCorrect": false }
      ],
      "explanation": "Pressure ulcers result from long-term contact pressure which restricts blood flow to specific areas, particularly over bony prominences."
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "question": "What is the recommended temperature for the water used during pressure area care?",
      "points": 10,
      "options": [
        { "id": "a", "text": "25°C", "isCorrect": false },
        { "id": "b", "text": "37°C", "isCorrect": true },
        { "id": "c", "text": "50°C", "isCorrect": false },
        { "id": "d", "text": "As hot as the nurse can tolerate", "isCorrect": false }
      ],
      "explanation": "Water should be mixed to approximately 37°C to prevent injury and ensure patient comfort."
    },
    {
      "id": "q3",
      "type": "true-false",
      "question": "Massage over pressure points helps to stimulate circulation and relieve pressure.",
      "points": 10,
      "correctAnswer": true,
      "explanation": "Gentle massage around pressure areas (not directly on a broken skin ulcer) helps stimulate blood flow and relieve the effects of prolonged pressure."
    },
    {
      "id": "q4",
      "type": "multiple-select",
      "question": "Which of the following patients are considered at high risk for pressure sores? (Select all that apply)",
      "points": 15,
      "options": [
        { "id": "a", "text": "Unconscious patients", "isCorrect": true },
        { "id": "b", "text": "Incontinent patients", "isCorrect": true },
        { "id": "c", "text": "Paralyzed patients", "isCorrect": true },
        { "id": "d", "text": "Obese or emaciated patients", "isCorrect": true }
      ],
      "partialCredit": true,
      "explanation": "All these conditions either limit mobility or expose the skin to moisture and pressure, increasing the risk of skin breakdown."
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "question": "What is the rationale for applying Zinc oxide or Vaseline during pressure area care?",
      "points": 10,
      "options": [
        { "id": "a", "text": "To make the skin look shiny", "isCorrect": false },
        { "id": "b", "text": "To act as a barrier against moisture and microorganisms", "isCorrect": true },
        { "id": "c", "text": "To help the patient sleep", "isCorrect": false },
        { "id": "d", "text": "To replace the need for turning the patient", "isCorrect": false }
      ],
      "explanation": "Water-repellent creams act as a protective barrier, especially for patients who are incontinent or at risk of moisture-related skin damage."
    }
  ]
});
