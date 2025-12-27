registerQuiz("topic-09-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-09-quiz",
  "metadata": {
    "title": "Oncologic Emergencies",
    "topicId": "topic-09-emergencies",
    "difficulty": "advanced",
    "estimatedTime": 5,
    "passingScore": 80,
    "createdAt": "2025-12-27T12:00:00Z"
  },
  "questions": [
    {
      "id": "q1",
      "type": "multiple-select",
      "question": "Tumor Lysis Syndrome causes which electrolyte imbalances? (Select all that apply)",
      "points": 5,
      "options": [
        { "id": "a", "text": "Hyperkalemia", "isCorrect": true },
        { "id": "b", "text": "Hyperuricemia", "isCorrect": true },
        { "id": "c", "text": "Hyperphosphatemia", "isCorrect": true },
        { "id": "d", "text": "Hypercalcemia", "isCorrect": false },
        { "id": "e", "text": "Hypocalcemia", "isCorrect": true }
      ],
      "explanation": "Cells release potassium, uric acid, and phosphate when they lyse. Phosphate binds calcium, causing hypocalcemia."
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "question": "Which emergency involves the obstruction of blood flow from the head and neck?",
      "points": 5,
      "options": [
        { "id": "a", "text": "Tumor Lysis Syndrome", "isCorrect": false },
        { "id": "b", "text": "Superior Vena Cava Syndrome", "isCorrect": true },
        { "id": "c", "text": "DIC", "isCorrect": false },
        { "id": "d", "text": "Sepsis", "isCorrect": false }
      ]
    },
    {
      "id": "q3",
      "type": "fill-blank",
      "question": "Excess uric acid in the blood, seen in Tumor Lysis Syndrome, is called __b1__.",
      "points": 5,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["hyperuricemia"], "caseSensitive": false }
      ]
    },
    {
      "id": "q4",
      "type": "true-false",
      "question": "Disseminated Intravascular Coagulation (DIC) is a clotting disorder that can occur as an oncologic emergency.",
      "points": 5,
      "correctAnswer": true
    },
    {
      "id": "q5",
      "type": "matching",
      "question": "Match the chemical symbol to the electrolyte imbalance:",
      "points": 10,
      "pairs": [
        { "id": "p1", "left": "K+", "right": "Hyperkalemia (High Potassium)" },
        { "id": "p2", "left": "Ca2+", "right": "Hypocalcemia (Low Calcium)" },
        { "id": "p3", "left": "PO4-", "right": "Hyperphosphatemia (High Phosphate)" }
      ]
    }
  ]
});