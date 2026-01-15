registerQuiz("topic-05-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-05-quiz",
  "metadata": {
    "title": "Unit 5.0: Approaches",
    "description": "Test knowledge on Medical, Educational, CtC, and Empowerment approaches.",
    "topicId": "topic-05",
    "difficulty": "intermediate",
    "estimatedTime": 15,
    "passingScore": 70,
    "createdAt": "2023-05-20T00:00:00Z",
    "tags": ["approaches", "medical", "empowerment"]
  },
  "settings": {
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "showFeedback": "immediate"
  },
  "questions": [
    {
      "id": "q1",
      "type": "matching",
      "question": "Match the Medical Approach prevention level with its example:",
      "points": 20,
      "pairs": [
        { "id": "p1", "left": "Primary Prevention", "right": "Immunization" },
        { "id": "p2", "left": "Secondary Prevention", "right": "Mammography Screening" },
        { "id": "p3", "left": "Tertiary Prevention", "right": "Rehabilitation / Palliative Care" }
      ],
      "explanation": "Primary prevents onset; Secondary detects early; Tertiary limits disability."
    },
    {
      "id": "q2",
      "type": "multiple-select",
      "question": "What are the two theoretical pillars of the Child-to-Child (CtC) approach?",
      "points": 15,
      "options": [
        { "id": "a", "text": "Popular Education", "isCorrect": true },
        { "id": "b", "text": "Child Participation", "isCorrect": true },
        { "id": "c", "text": "Medical Intervention", "isCorrect": false },
        { "id": "d", "text": "Top-down Teaching", "isCorrect": false }
      ],
      "partialCredit": true,
      "explanation": "CtC is built on Popular Education (learning from one another) and Child Participation (children as active agents)."
    },
    {
      "id": "q3",
      "type": "ordering",
      "question": "Order the 6 Steps of the Child-to-Child approach:",
      "points": 20,
      "items": [
        { "id": "1", "text": "Group Work", "correctPosition": 1 },
        { "id": "2", "text": "Our Ideas", "correctPosition": 2 },
        { "id": "3", "text": "Choose an Issue", "correctPosition": 3 },
        { "id": "4", "text": "Find Out More", "correctPosition": 4 },
        { "id": "5", "text": "Plan and Take Action", "correctPosition": 5 },
        { "id": "6", "text": "Think it Over", "correctPosition": 6 }
      ],
      "explanation": "1. Group Work -> 2. Ideas -> 3. Choose Issue -> 4. Find Out More -> 5. Action -> 6. Evaluation (Think it over)."
    },
    {
      "id": "q4",
      "type": "multiple-choice",
      "question": "Which approach assumes that if the 'healthier choice is made the easier choice', individuals will improve their health?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Educational Approach", "isCorrect": false },
        { "id": "b", "text": "Behavior Change Approach", "isCorrect": false },
        { "id": "c", "text": "Societal/Social Change Approach", "isCorrect": true },
        { "id": "d", "text": "Medical Approach", "isCorrect": false }
      ],
      "explanation": "The Societal/Social Change approach focuses on changing the physical, social, and economic environment to support health."
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "question": "The Educational Approach focuses on three aspects: Cognitive, Affective, and __b1__.",
      "points": 10,
      "options": [
        { "id": "a", "text": "Biological", "isCorrect": false },
        { "id": "b", "text": "Behavioural", "isCorrect": true },
        { "id": "c", "text": "Financial", "isCorrect": false }
      ],
      "explanation": "The three aspects are Cognitive (understanding), Affective (feelings/attitudes), and Behavioural (skills)."
    }
  ]
});