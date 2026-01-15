registerQuiz("topic-02-carcinogenesis-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-02-carcinogenesis-quiz",
  "metadata": {
    "title": "Carcinogenesis & Etiology Quiz",
    "description": "Assess understanding of cancer development processes and risk factors.",
    "topicId": "topic-02-carcinogenesis",
    "difficulty": "intermediate",
    "estimatedTime": 15,
    "passingScore": 70,
    "createdAt": "2025-12-27T00:00:00Z"
  },
  "questions": [
    {
      "id": "q1",
      "type": "ordering",
      "question": "Place the steps of carcinogenesis in the correct chronological order:",
      "points": 15,
      "items": [
        { "id": "i1", "text": "Initiation", "correctPosition": 1 },
        { "id": "i2", "text": "Promotion", "correctPosition": 2 },
        { "id": "i3", "text": "Progression", "correctPosition": 3 }
      ],
      "explanation": "Carcinogenesis begins with Initiation (genetic change), followed by Promotion (proliferation), and finally Progression (malignant behavior)."
    },
    {
      "id": "q2",
      "type": "multiple-select",
      "question": "Which of the following viruses are associated with cancer development? (Select all that apply)",
      "points": 10,
      "options": [
        { "id": "a", "text": "Human Papilloma Virus (HPV)", "isCorrect": true },
        { "id": "b", "text": "Hepatitis B Virus (HBV)", "isCorrect": true },
        { "id": "c", "text": "Influenza A", "isCorrect": false },
        { "id": "d", "text": "Epstein-Barr Virus (EBV)", "isCorrect": true }
      ],
      "explanation": "HPV (cervical), HBV (liver), and EBV (lymphoma) are known oncogenic viruses."
    },
    {
      "id": "q3",
      "type": "multiple-choice",
      "question": "Which physical agent is the primary cause of skin cancer?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Thermal burns", "isCorrect": false },
        { "id": "b", "text": "Ultraviolet (UV) radiation", "isCorrect": true },
        { "id": "c", "text": "Electromagnetic fields", "isCorrect": false },
        { "id": "d", "text": "Physical trauma", "isCorrect": false }
      ],
      "explanation": "Exposure to UV radiation from sunlight is the major physical carcinogen for skin cancer."
    },
    {
      "id": "q4",
      "type": "multiple-choice",
      "question": "Which dietary factor is linked to an increased risk of colorectal cancer?",
      "points": 10,
      "options": [
        { "id": "a", "text": "High fiber diet", "isCorrect": false },
        { "id": "b", "text": "Cruciferous vegetables", "isCorrect": false },
        { "id": "c", "text": "Low fat diet", "isCorrect": false },
        { "id": "d", "text": "Low fiber diet", "isCorrect": true }
      ],
      "explanation": "A diet low in fiber is associated with a higher risk of colorectal cancer."
    },
    {
      "id": "q5",
      "type": "true-false",
      "question": "HPV, a virus that can cause cancer, is contagious.",
      "points": 5,
      "correctAnswer": true,
      "explanation": "HPV is a contagious virus transmitted through sexual contact and is a major cause of cervical cancer."
    }
  ]
});