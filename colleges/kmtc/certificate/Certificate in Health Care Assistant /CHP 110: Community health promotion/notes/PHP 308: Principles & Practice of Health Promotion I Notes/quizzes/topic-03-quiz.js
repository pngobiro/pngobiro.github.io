registerQuiz("topic-03-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-03-quiz",
  "metadata": {
    "title": "Unit 3.0: Determinants of Health",
    "description": "Assess your knowledge of social, economic, and political determinants.",
    "topicId": "topic-03",
    "difficulty": "beginner",
    "estimatedTime": 10,
    "passingScore": 70,
    "createdAt": "2023-05-20T00:00:00Z",
    "tags": ["determinants", "socio-economic", "environment"]
  },
  "settings": {
    "shuffleQuestions": true,
    "showFeedback": "immediate"
  },
  "questions": [
    {
      "id": "q1",
      "type": "multiple-select",
      "question": "Which of the following are listed as fundamental prerequisites for health? (Select all that apply)",
      "points": 15,
      "options": [
        { "id": "a", "text": "Peace", "isCorrect": true },
        { "id": "b", "text": "Shelter", "isCorrect": true },
        { "id": "c", "text": "Education", "isCorrect": true },
        { "id": "d", "text": "Food", "isCorrect": true },
        { "id": "e", "text": "Wealth accumulation", "isCorrect": false }
      ],
      "partialCredit": true,
      "explanation": "Prerequisites include Peace, Shelter, Education, Food, Income, Stable ecosystem, Sustainable resources, and Social justice."
    },
    {
      "id": "q2",
      "type": "fill-blank",
      "question": "__b1__ refers to the limited availability of nutritionally adequate and safe foods, or limited ability to acquire them.",
      "points": 15,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["Food insecurity", "food insecurity"], "caseSensitive": false }
      ],
      "explanation": "Food insecurity is the lack of consistent access to enough food for an active, healthy life."
    },
    {
      "id": "q3",
      "type": "matching",
      "question": "Match the determinant type to its example:",
      "points": 20,
      "pairs": [
        { "id": "p1", "left": "Physical Environment", "right": "Water and Sanitation" },
        { "id": "p2", "left": "Socio-Economic", "right": "Education and Income" },
        { "id": "p3", "left": "Biological Hazard", "right": "Bacteria and Viruses" },
        { "id": "p4", "left": "Political Determinant", "right": "Voting and Policy" }
      ],
      "explanation": "Water is physical; Income is socio-economic; Bacteria are biological hazards; Voting is political."
    },
    {
      "id": "q4",
      "type": "multiple-choice",
      "question": "Poor housing conditions like dampness and overcrowding are linked to which disease specifically in the notes?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Malaria", "isCorrect": false },
        { "id": "b", "text": "Tuberculosis", "isCorrect": true },
        { "id": "c", "text": "Diabetes", "isCorrect": false },
        { "id": "d", "text": "Hypertension", "isCorrect": false }
      ],
      "explanation": "Residential crowding and poor ventilation are explicitly linked to infectious diseases such as tuberculosis."
    },
    {
      "id": "q5",
      "type": "true-false",
      "question": "Political determinants of health include voting, government, and policy.",
      "points": 10,
      "correctAnswer": true,
      "explanation": "True. Political determinants are categorized into voting, government, and policy, which structure relationships and resource distribution."
    }
  ]
});