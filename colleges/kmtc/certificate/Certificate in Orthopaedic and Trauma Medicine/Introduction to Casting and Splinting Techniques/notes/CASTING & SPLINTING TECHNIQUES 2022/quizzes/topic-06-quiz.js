registerQuiz("topic-06-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-06-quiz",
  "metadata": {
    "title": "Topic 06: Patient Care & Instructions",
    "description": "Evaluate your understanding of proper patient care instructions and home care for casts.",
    "topicId": "topic-06",
    "difficulty": "beginner",
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
      "type": "multiple-select",
      "question": "Which of the following are 'DON'Ts' for a patient with a cast? (Select all that apply)",
      "points": 10,
      "options": [
        { "id": "a", "text": "Scratch under the cast with a coat hanger or pen", "isCorrect": true },
        { "id": "b", "text": "Get the cast wet", "isCorrect": true },
        { "id": "c", "text": "Elevate the limb", "isCorrect": false },
        { "id": "d", "text": "Remove the padding", "isCorrect": true }
      ],
      "explanation": "Patients should NOT scratch under the cast, get it wet, or remove padding. Elevation is a 'DO'."
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "question": "Why should a 'green' (fresh) cast be kept uncovered?",
      "points": 10,
      "options": [
        { "id": "a", "text": "To allow the doctor to see it", "isCorrect": false },
        { "id": "b", "text": "To promote drying by air circulation", "isCorrect": true },
        { "id": "c", "text": "To keep it cool", "isCorrect": false },
        { "id": "d", "text": "To prevent it from smelling", "isCorrect": false }
      ],
      "explanation": "A fresh cast should be kept uncovered to allow air circulation, which promotes drying."
    },
    {
      "id": "q3",
      "type": "multiple-choice",
      "question": "What immediate action should a patient take if their fingers become swollen or blue?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Take a painkiller and wait", "isCorrect": false },
        { "id": "b", "text": "Report it to the hospital/physician at once", "isCorrect": true },
        { "id": "c", "text": "Put a heating pad on it", "isCorrect": false },
        { "id": "d", "text": "Cut the cast off themselves", "isCorrect": false }
      ],
      "explanation": "Swelling and blueness are danger signs indicating circulatory compromise and must be reported immediately."
    },
    {
      "id": "q4",
      "type": "true-false",
      "question": "It is normal for a patient to feel some heat immediately after the cast is applied.",
      "points": 10,
      "correctAnswer": true,
      "explanation": "Yes, the exothermic reaction of the setting plaster produces heat, which is normal and usually passes in 10-15 minutes."
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "question": "What is the purpose of exercising joints not immobilized by the cast?",
      "points": 10,
      "options": [
        { "id": "a", "text": "To loosen the cast", "isCorrect": false },
        { "id": "b", "text": "To prevent stiffness and improve circulation", "isCorrect": true },
        { "id": "c", "text": "It has no purpose", "isCorrect": false },
        { "id": "d", "text": "To make the cast dry faster", "isCorrect": false }
      ],
      "explanation": "Exercising adjacent joints prevents stiffness and helps improve circulation."
    }
  ]
});
