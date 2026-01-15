registerQuiz("topic-06-chemotherapy-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-06-chemotherapy-quiz",
  "metadata": {
    "title": "Chemotherapy Nursing Quiz",
    "description": "Test your knowledge of chemotherapeutic agents and side effect management.",
    "topicId": "topic-06-chemotherapy",
    "difficulty": "advanced",
    "estimatedTime": 20,
    "passingScore": 75,
    "createdAt": "2025-12-27T00:00:00Z"
  },
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "question": "What is the major complication of IV chemotherapy administration?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Hypertension", "isCorrect": false },
        { "id": "b", "text": "Extravasation", "isCorrect": true },
        { "id": "c", "text": "Hypothermia", "isCorrect": false },
        { "id": "d", "text": "Fluid overload", "isCorrect": false }
      ],
      "explanation": "Extravasation (leakage of vesicant drug into tissues) can cause severe tissue necrosis."
    },
    {
      "id": "q2",
      "type": "fill-blank",
      "question": "Bone marrow suppression resulting in a decrease in platelets is called __1__.",
      "points": 10,
      "blanks": [
        { "id": "1", "acceptedAnswers": ["thrombocytopenia"], "caseSensitive": false }
      ],
      "explanation": "Thrombocytopenia is a low platelet count, increasing the risk of bleeding."
    },
    {
      "id": "q3",
      "type": "matching",
      "question": "Match the chemotherapy drug class with an example agent:",
      "points": 20,
      "pairs": [
        { "id": "p1", "left": "Alkylating Agent", "right": "Cyclophosphamide" },
        { "id": "p2", "left": "Antimetabolite", "right": "5-fluorouracil" },
        { "id": "p3", "left": "Cytotoxic Antibiotic", "right": "Doxorubicin" },
        { "id": "p4", "left": "Plant Alkaloid", "right": "Vinca alkaloids" }
      ]
    },
    {
      "id": "q4",
      "type": "multiple-choice",
      "question": "A patient with stomatitis (mouth sores) should avoid:",
      "points": 10,
      "options": [
        { "id": "a", "text": "Cool liquids", "isCorrect": false },
        { "id": "b", "text": "Soft toothbrushes", "isCorrect": false },
        { "id": "c", "text": "Commercial mouthwash containing alcohol", "isCorrect": true },
        { "id": "d", "text": "Artificial saliva", "isCorrect": false }
      ],
      "explanation": "Alcohol-based mouthwashes dry out and irritate the mucosa, worsening stomatitis."
    },
    {
      "id": "q5",
      "type": "true-false",
      "question": "You should verify vein patency by flushing with the chemotherapeutic agent itself.",
      "points": 5,
      "correctAnswer": false,
      "explanation": "NEVER test vein patency with chemotherapeutic agents due to the risk of extravasation."
    }
  ]
});