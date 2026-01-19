registerQuiz("topic-05-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-05-quiz",
  "metadata": {
    "title": "Human Resource Management Quiz",
    "description": "Assess your grasp of recruitment, training, performance appraisal, and wellness.",
    "topicId": "topic-05",
    "difficulty": "intermediate",
    "estimatedTime": 10,
    "passingScore": 70,
    "createdAt": "2026-01-20T10:00:00Z",
    "updatedAt": "2026-01-20T10:00:00Z",
    "tags": ["hr", "recruitment", "performance"]
  },
  "questions": [
    {
      "id": "q1-t5",
      "type": "matching",
      "question": "Match the HR concept with its definition.",
      "points": 4,
      "pairs": [
        { "id": "p1", "left": "Recruitment", "right": "Searching for and attracting capable applicants" },
        { "id": "p2", "left": "Selection", "right": "Choosing the most suitable candidates" },
        { "id": "p3", "left": "Training", "right": "Learning experience for specific current job skills" },
        { "id": "p4", "left": "Development", "right": "Learning for future growth beyond current job" }
      ]
    },
    {
      "id": "q2-t5",
      "type": "multiple-choice",
      "question": "What is the 'Halo Effect' in performance appraisal?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "Rating everyone as average", "isCorrect": false },
        { "id": "opt2", "text": "Being too strict on all employees", "isCorrect": false },
        { "id": "opt3", "text": "The influence of a general impression on specific ratings", "isCorrect": true },
        { "id": "opt4", "text": "Bias based on race or gender", "isCorrect": false }
      ],
      "explanation": "The Halo effect is when a general impression (good or bad) influences the rating of specific traits."
    },
    {
      "id": "q3-t5",
      "type": "fill-blank",
      "question": "New employee __orientation__ effectively integrates the new employee into the organization.",
      "points": 1,
      "blanks": [
        { "id": "orientation", "acceptedAnswers": ["orientation", "induction"] }
      ],
      "explanation": "Orientation (or induction) is the process of integrating new employees."
    },
    {
      "id": "q4-t5",
      "type": "multiple-select",
      "question": "Which of the following are steps in Succession Planning? (Select all that apply)",
      "points": 2,
      "options": [
        { "id": "opt1", "text": "Identify key positions", "isCorrect": true },
        { "id": "opt2", "text": "Identify capabilities required", "isCorrect": true },
        { "id": "opt3", "text": "Fire current managers", "isCorrect": false },
        { "id": "opt4", "text": "Develop knowledge transfer plans", "isCorrect": true }
      ],
      "explanation": "Succession planning involves identifying key positions, capabilities, and developing transfer plans."
    }
  ]
});