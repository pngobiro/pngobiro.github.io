registerQuiz("topic-18-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-18-quiz",
  "metadata": {
    "title": "Oxygen Administration Quiz",
    "description": "Test your knowledge on the safety protocols and clinical procedures for delivering supplemental oxygen.",
    "topicId": "topic-18",
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
      "question": "What is the primary clinical goal of oxygen administration for most patients?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Achieve 100% saturation", "isCorrect": false },
        { "id": "b", "text": "Maintain arterial saturation at or above 90%", "isCorrect": true },
        { "id": "c", "text": "Increase the patient's heart rate", "isCorrect": false },
        { "id": "d", "text": "To help the patient sleep", "isCorrect": false }
      ],
      "explanation": "A target of 90% or higher is generally sufficient to prevent hypoxia-related tissue damage."
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "question": "Oxygen cylinders are identifiable by which colors?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Blue and white", "isCorrect": false },
        { "id": "b", "text": "Red and black", "isCorrect": false },
        { "id": "c", "text": "Black and white", "isCorrect": true },
        { "id": "d", "text": "Green and yellow", "isCorrect": false }
      ],
      "explanation": "International standards often use black and white for oxygen cylinders to differentiate them from other medical gases."
    },
    {
      "id": "q3",
      "type": "true-false",
      "question": "Prolonged high-flow oxygen administration in infants can lead to retrolental fibroplasia.",
      "points": 10,
      "correctAnswer": true,
      "explanation": "High concentrations of oxygen can cause damage to the developing retina in infants, a condition known as retinopathy of prematurity or retrolental fibroplasia."
    },
    {
      "id": "q4",
      "type": "multiple-select",
      "question": "Which of the following are clinical indications for oxygen therapy? (Select all that apply)",
      "points": 15,
      "options": [
        { "id": "a", "text": "Airway obstruction", "isCorrect": true },
        { "id": "b", "text": "Shock causing stagnation of blood flow", "isCorrect": true },
        { "id": "c", "text": "Heart failure", "isCorrect": true },
        { "id": "d", "text": "Minor skin abrasions", "isCorrect": false }
      ],
      "partialCredit": true,
      "explanation": "Oxygen is indicated for conditions that compromise oxygen intake, transport, or utilization in the body."
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "question": "What is the primary safety rule regarding the environment where oxygen is administered?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Keep the room completely dark", "isCorrect": false },
        { "id": "b", "text": "Ensure no smoking and remove all fire hazards", "isCorrect": true },
        { "id": "c", "text": "Use only metal furniture", "isCorrect": false },
        { "id": "d", "text": "Spray water in the air every hour", "isCorrect": false }
      ],
      "explanation": "Oxygen supports combustion; therefore, open flames and potential sparks must be strictly prohibited near oxygen sources."
    }
  ]
});
