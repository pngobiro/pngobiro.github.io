registerQuiz("topic-05-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-05-quiz",
  "metadata": {
    "title": "Respiratory System Quiz",
    "description": "Assess your understanding of airway anatomy, physiology, and respiratory disorders.",
    "topicId": "topic-05-respiratory-system",
    "difficulty": "intermediate",
    "estimatedTime": 20,
    "passingScore": 75,
    "createdAt": "2025-12-25T12:00:00Z"
  },
  "questions": [
    {
      "id": "q1",
      "type": "image-based",
      "question": "In the lung volume diagram, what represents the Vital Capacity?",
      "points": 10,
      "imageUrl": "../assets/images/image-20260110-e57ac1ae.jpeg",
      "imageAlt": "Chart showing lung volumes",
      "options": [
        { "id": "a", "text": "Tidal Volume + Residual Volume", "isCorrect": false },
        { "id": "b", "text": "Tidal Volume + IRV + ERV", "isCorrect": true },
        { "id": "c", "text": "Total Lung Capacity", "isCorrect": false },
        { "id": "d", "text": "Expiratory Reserve Volume only", "isCorrect": false }
      ],
      "explanation": "Vital capacity is the maximum amount of air that can be forcibly expired after a forcible inspiration (TV + IRV + ERV)."
    },
    {
      "id": "q2",
      "type": "fill-blank",
      "question": "The volume of air breathed in and out during normal quiet breathing is called __1__ volume.",
      "points": 10,
      "blanks": [
        { "id": "1", "acceptedAnswers": ["tidal"], "caseSensitive": false }
      ],
      "explanation": "Tidal volume is the normal breath volume, typically about 500ml."
    },
    {
      "id": "q3",
      "type": "multiple-choice",
      "question": "Which of the following is NOT a typical symptom of Pulmonary Tuberculosis?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Persistent cough > 4 weeks", "isCorrect": false },
        { "id": "b", "text": "Night sweats", "isCorrect": false },
        { "id": "c", "text": "Sudden weight gain", "isCorrect": true },
        { "id": "d", "text": "Haemoptysis", "isCorrect": false }
      ],
      "explanation": "TB typically causes weight loss (wasting), not weight gain. Other symptoms are classic signs of TB."
    },
    {
      "id": "q4",
      "type": "matching",
      "question": "Match the respiratory condition to its definition:",
      "points": 15,
      "pairs": [
        { "id": "p1", "left": "Epistaxis", "right": "Nose bleeding" },
        { "id": "p2", "left": "Apnoea", "right": "Cessation of breathing" },
        { "id": "p3", "left": "Dyspnoea", "right": "Difficult/laboured breathing" },
        { "id": "p4", "left": "Hemoptysis", "right": "Blood in sputum" }
      ]
    },
    {
      "id": "q5",
      "type": "multiple-select",
      "question": "Select the correct nursing interventions for a patient with an Underwater Seal Drainage (Chest Tube). Select all that apply:",
      "points": 15,
      "options": [
        { "id": "a", "text": "Keep the bottle below chest level", "isCorrect": true },
        { "id": "b", "text": "Clamp the tube vigorously every hour", "isCorrect": false },
        { "id": "c", "text": "Observe for oscillation/fluctuation in the tube", "isCorrect": true },
        { "id": "d", "text": "Ensure connections are tight", "isCorrect": true },
        { "id": "e", "text": "Empty the bottle whenever it looks full", "isCorrect": false }
      ],
      "partialCredit": true,
      "explanation": "The bottle must be below the chest to prevent backflow. Oscillation indicates patency. Tubes should not be clamped routinely or emptied without strict aseptic technique and purpose."
    },
    {
      "id": "q6",
      "type": "true-false",
      "question": "Status Asthmaticus is a medical emergency that does not respond to conventional therapy.",
      "points": 5,
      "correctAnswer": true,
      "explanation": "Status asthmaticus is a severe, prolonged asthma attack that can lead to respiratory failure and death if untreated."
    }
  ]
});