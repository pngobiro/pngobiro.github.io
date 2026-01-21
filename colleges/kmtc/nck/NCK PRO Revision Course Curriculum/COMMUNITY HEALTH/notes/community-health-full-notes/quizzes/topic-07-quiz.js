// topic-07-quiz.js
registerQuiz("topic-07-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-07-quiz",
  "metadata": {
    "title": "Environment & Health Quiz",
    "description": "Assess your understanding of environmental factors, risks, and health team roles.",
    "topicId": "topic-07",
    "difficulty": "beginner",
    "estimatedTime": 10,
    "passingScore": 70,
    "createdAt": "2026-01-21T00:00:00Z",
    "updatedAt": "2026-01-21T00:00:00Z",
    "tags": ["environment", "health", "risks"]
  },
  "questions": [
    {
      "id": "q1",
      "type": "matching",
      "question": "Match the environmental component to its examples.",
      "points": 1,
      "pairs": [
        { "id": "p1", "left": "Physical Component", "right": "Air, water, soil, housing, climate" },
        { "id": "p2", "left": "Biological Component", "right": "Viruses, insects, rodents, animals" },
        { "id": "p3", "left": "Psychosocial Component", "right": "Cultural values, customs, beliefs, habits" }
      ],
      "explanation": "Physical = non-living; Biological = living; Psychosocial = social/cultural."
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "question": "What is the main goal of Environmental Health?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "To promote health for all through a healthy environment by preventing/controlling disease.", "isCorrect": true },
        { "id": "opt2", "text": "To protect wildlife habitats only.", "isCorrect": false },
        { "id": "opt3", "text": "To increase industrial production.", "isCorrect": false },
        { "id": "opt4", "text": "To develop new medicines.", "isCorrect": false }
      ],
      "explanation": "Environmental health aims to prevent disease/injury via a healthy environment."
    },
    {
      "id": "q3",
      "type": "multiple-select",
      "question": "Which of the following are environmental health risks?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "Air pollution", "isCorrect": true },
        { "id": "opt2", "text": "Water quality", "isCorrect": true },
        { "id": "opt3", "text": "Food quality and safety", "isCorrect": true },
        { "id": "opt4", "text": "Vector-borne diseases", "isCorrect": true },
        { "id": "opt5", "text": "Reading books", "isCorrect": false }
      ],
      "explanation": "Risks include pollution, water, food, vectors, chemicals, etc."
    },
    {
      "id": "q4",
      "type": "matching",
      "question": "Match the health professional with their role in environmental health.",
      "points": 1,
      "pairs": [
        { "id": "p1", "left": "Physician", "right": "Diagnosis, medical treatment, screening patients at risk" },
        { "id": "p2", "left": "Nurse", "right": "Holistic assessment, health history, patient education" },
        { "id": "p3", "left": "Social Worker", "right": "Assessment of social problems and eligibility for benefits" }
      ],
      "explanation": "Physicians diagnose/treat; Nurses assess holistically; Social workers handle social aspects."
    },
    {
      "id": "q5",
      "type": "true-false",
      "question": "Culture does not influence health behaviors or perceptions of illness.",
      "correctAnswer": false,
      "points": 1,
      "explanation": "Culture significantly influences perceptions of health, beliefs about causes, and treatment preferences."
    }
  ]
});