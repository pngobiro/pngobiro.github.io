registerQuiz("topic-03-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-03-quiz",
  "metadata": {
    "title": "Leukemia & Neutropenic Precautions",
    "description": "Questions on leukemia types, pathophysiology, and infection control.",
    "topicId": "topic-03-leukemia",
    "difficulty": "intermediate",
    "estimatedTime": 5,
    "passingScore": 80,
    "createdAt": "2025-12-27T12:00:00Z",
    "tags": ["leukemia", "neutropenia", "infection"]
  },
  "settings": {
    "shuffleQuestions": true,
    "showFeedback": "immediate"
  },
  "questions": [
    {
      "id": "q1",
      "type": "matching",
      "question": "Match the Leukemia type to its description:",
      "points": 10,
      "pairs": [
        { "id": "p1", "left": "ALL (Acute Lymphocytic)", "right": "Common in children (2-5 yrs), 85% survival" },
        { "id": "p2", "left": "AML (Acute Myelogenous)", "right": "Poor outcomes, 27% survival" }
      ]
    },
    {
      "id": "q2",
      "type": "multiple-select",
      "question": "Select all items that are RESTRICTED for a patient on Neutropenic Precautions:",
      "points": 5,
      "options": [
        { "id": "a", "text": "Cooked vegetables", "isCorrect": false },
        { "id": "b", "text": "Fresh flowers", "isCorrect": true },
        { "id": "c", "text": "Fresh fruit/vegetables", "isCorrect": true },
        { "id": "d", "text": "Visitors with active infections", "isCorrect": true },
        { "id": "e", "text": "Canned food", "isCorrect": false }
      ]
    },
    {
      "id": "q3",
      "type": "multiple-choice",
      "question": "NCLEX Scenario: A client with ALL has a temperature of 38.7°C. What is the PRIORITY action?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Apply cool washcloths", "isCorrect": false },
        { "id": "b", "text": "Document the temperature", "isCorrect": false },
        { "id": "c", "text": "Obtain IV access", "isCorrect": true },
        { "id": "d", "text": "Call the family", "isCorrect": false }
      ],
      "explanation": "In a neutropenic patient, fever is a medical emergency indicating possible sepsis. IV access allows for immediate antibiotic administration."
    },
    {
      "id": "q4",
      "type": "fill-blank",
      "question": "Leukemia results in the overproduction of immature white blood cells called __b1__.",
      "points": 5,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["blasts"], "caseSensitive": false }
      ]
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "question": "Which of the following explains why leukemia patients are prone to anemia?",
      "points": 5,
      "options": [
        { "id": "a", "text": "Red blood cells are destroyed by the spleen", "isCorrect": false },
        { "id": "b", "text": "Bone marrow is overcrowded by blasts, suppressing RBC production", "isCorrect": true },
        { "id": "c", "text": "Chemotherapy targets only red blood cells", "isCorrect": false },
        { "id": "d", "text": "Iron deficiency from poor diet", "isCorrect": false }
      ]
    }
  ]
});