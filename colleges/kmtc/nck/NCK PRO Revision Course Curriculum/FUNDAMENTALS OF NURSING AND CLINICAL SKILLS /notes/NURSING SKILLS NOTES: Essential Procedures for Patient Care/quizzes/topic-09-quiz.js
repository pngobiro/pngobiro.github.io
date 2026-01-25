registerQuiz("topic-09-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-09-quiz",
  "metadata": {
    "title": "Vital Signs Quiz",
    "description": "Evaluate your proficiency in measuring and interpreting vital signs.",
    "topicId": "topic-09",
    "difficulty": "intermediate",
    "estimatedTime": 7,
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
      "question": "Why should a nurse avoid using their thumb to palpate a patient's radial pulse?",
      "points": 10,
      "options": [
        { "id": "a", "text": "The thumb is too insensitive", "isCorrect": false },
        { "id": "b", "text": "The nurse might feel their own pulse in the thumb", "isCorrect": true },
        { "id": "c", "text": "The thumb has too much surface area", "isCorrect": false },
        { "id": "d", "text": "It is culturally inappropriate", "isCorrect": false }
      ],
      "explanation": "The thumb has its own strong pulse, which can be mistaken for the patient's pulse."
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "question": "If a patient has just taken a very cold drink, how long should you wait before measuring an oral temperature?",
      "points": 10,
      "options": [
        { "id": "a", "text": "No wait time is needed", "isCorrect": false },
        { "id": "b", "text": "5 minutes", "isCorrect": false },
        { "id": "c", "text": "15-30 minutes", "isCorrect": true },
        { "id": "d", "text": "60 minutes", "isCorrect": false }
      ],
      "explanation": "Cold or hot drinks/food can temporarily alter the oral cavity temperature, leading to inaccurate readings. A 15-30 minute wait allows the temperature to stabilize."
    },
    {
      "id": "q3",
      "type": "multiple-choice",
      "question": "Where is the correct site to auscultate for the apical pulse?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Second intercostal space, right sternal border", "isCorrect": false },
        { "id": "b", "text": "Third intercostal space, left side", "isCorrect": false },
        { "id": "c", "text": "Fifth intercostal space, left midclavicular line", "isCorrect": true },
        { "id": "d", "text": "At the base of the neck", "isCorrect": false }
      ],
      "explanation": "The apex of the heart is best auscultated at the fifth intercostal space along the left midclavicular line."
    },
    {
      "id": "q4",
      "type": "true-false",
      "question": "A nurse should ideally count respirations for a full minute immediately after taking the pulse while keeping their fingers on the wrist.",
      "points": 10,
      "correctAnswer": true,
      "explanation": "By keeping the fingers on the wrist, the patient assumes the pulse is still being taken and won't consciously alter their breathing pattern."
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "question": "What are the phases of sounds heard during blood pressure measurement called?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Lubb-Dupp sounds", "isCorrect": false },
        { "id": "b", "text": "Korotkoff sounds", "isCorrect": true },
        { "id": "c", "text": "Heart murmurs", "isCorrect": false },
        { "id": "d", "text": "Ventricular sounds", "isCorrect": false }
      ],
      "explanation": "Korotkoff sounds are the rhythmic sounds heard through a stethoscope as the blood pressure cuff is deflated."
    }
  ]
});
