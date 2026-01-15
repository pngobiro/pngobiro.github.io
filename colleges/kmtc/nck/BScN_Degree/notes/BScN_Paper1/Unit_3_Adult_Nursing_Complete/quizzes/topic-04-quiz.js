registerQuiz("topic-04-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-04-quiz",
  "metadata": {
    "title": "Digestive System Quiz",
    "description": "Test your knowledge of the GI tract, accessory organs, and digestive disorders.",
    "topicId": "topic-04-digestive-system",
    "difficulty": "intermediate",
    "estimatedTime": 20,
    "passingScore": 75,
    "createdAt": "2025-12-25T12:00:00Z"
  },
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "question": "Where does the absorption of Vitamin B12 primarily take place?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Stomach", "isCorrect": false },
        { "id": "b", "text": "Duodenum", "isCorrect": false },
        { "id": "c", "text": "Ileum", "isCorrect": true },
        { "id": "d", "text": "Large Intestine", "isCorrect": false }
      ],
      "explanation": "Vitamin B12 absorption requires the intrinsic factor (from the stomach) but the actual absorption occurs in the ileum."
    },
    {
      "id": "q2",
      "type": "fill-blank",
      "question": "The accumulation of fluid in the peritoneal cavity, commonly seen in liver cirrhosis, is called __1__.",
      "points": 10,
      "blanks": [
        { "id": "1", "acceptedAnswers": ["ascites"], "caseSensitive": false }
      ],
      "explanation": "Ascites is a complication of portal hypertension in liver cirrhosis."
    },
    {
      "id": "q3",
      "type": "multiple-select",
      "question": "Which of the following are functions of the liver? Select all that apply:",
      "points": 15,
      "options": [
        { "id": "a", "text": "Production of bile", "isCorrect": true },
        { "id": "b", "text": "Detoxification of drugs", "isCorrect": true },
        { "id": "c", "text": "Storage of Vitamin C", "isCorrect": false },
        { "id": "d", "text": "Synthesis of plasma proteins", "isCorrect": true },
        { "id": "e", "text": "Absorption of nutrients", "isCorrect": false }
      ],
      "partialCredit": true,
      "explanation": "The liver produces bile, detoxifies drugs, and synthesizes proteins. It stores fat-soluble vitamins (A, D, E, K), not Vitamin C. Absorption happens in the intestines."
    },
    {
      "id": "q4",
      "type": "matching",
      "question": "Match the condition to its description:",
      "points": 15,
      "pairs": [
        { "id": "p1", "left": "Cholelithiasis", "right": "Gallstones" },
        { "id": "p2", "left": "Cholecystitis", "right": "Inflammation of the gallbladder" },
        { "id": "p3", "left": "Gastritis", "right": "Inflammation of the stomach mucosa" },
        { "id": "p4", "left": "Stomatitis", "right": "Inflammation of the mouth" }
      ]
    },
    {
      "id": "q5",
      "type": "true-false",
      "question": "A patient with a duodenal ulcer typically experiences pain that is aggravated by eating.",
      "points": 5,
      "correctAnswer": false,
      "explanation": "Duodenal ulcer pain is typically *relieved* by food (pain-food-relief pattern). Gastric ulcer pain is often aggravated by food."
    },
    {
      "id": "q6",
      "type": "multiple-choice",
      "question": "Which complication is a medical emergency characterized by a rigid, board-like abdomen?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Constipation", "isCorrect": false },
        { "id": "b", "text": "Peritonitis", "isCorrect": true },
        { "id": "c", "text": "Gastritis", "isCorrect": false },
        { "id": "d", "text": "Hiatus Hernia", "isCorrect": false }
      ],
      "explanation": "Peritonitis (inflammation of the peritoneum) causes severe pain, rigidity (guarding), and is a surgical emergency."
    }
  ]
});