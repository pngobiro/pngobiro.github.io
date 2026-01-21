// topic-01-quiz.js
registerQuiz("topic-01-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-01-quiz",
  "metadata": {
    "title": "Introduction & Concepts Quiz",
    "description": "Test your knowledge on community health definitions, determinants, and community entry.",
    "topicId": "topic-01",
    "difficulty": "beginner",
    "estimatedTime": 10,
    "passingScore": 70,
    "createdAt": "2026-01-21T00:00:00Z",
    "updatedAt": "2026-01-21T00:00:00Z",
    "tags": ["concepts", "definitions", "community-entry"]
  },
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "question": "What is the definition of 'Community Health'?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "Meeting the needs of a community by identifying problems and managing interactions within the community.", "isCorrect": true },
        { "id": "opt2", "text": "A group of people living in the same geographical area.", "isCorrect": false },
        { "id": "opt3", "text": "The absence of disease in a population.", "isCorrect": false },
        { "id": "opt4", "text": "Medical services provided free of charge.", "isCorrect": false }
      ],
      "explanation": "Community health is defined by meeting the needs of a community by identifying problems and managing interactions within the community."
    },
    {
      "id": "q2",
      "type": "fill-blank",
      "question": "Health is a balanced state of well-being resulting from harmonious interactions of __b1__, __b2__, and __b3__.",
      "points": 3,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["body"], "caseSensitive": false },
        { "id": "b2", "acceptedAnswers": ["mind"], "caseSensitive": false },
        { "id": "b3", "acceptedAnswers": ["spirit"], "caseSensitive": false }
      ],
      "explanation": "Health is a balanced state of well-being resulting from harmonious interactions of body, mind, and spirit."
    },
    {
      "id": "q3",
      "type": "ordering",
      "question": "Arrange the steps of the Community Entry process in the correct order.",
      "points": 1,
      "items": [
        { "id": "s1", "text": "Knock and enter upon response.", "correctPosition": 1 },
        { "id": "s2", "text": "Greet chief and elders.", "correctPosition": 2 },
        { "id": "s3", "text": "Inform them of your work.", "correctPosition": 3 },
        { "id": "s4", "text": "Ask for permission/advice and state mission.", "correctPosition": 4 },
        { "id": "s5", "text": "Thank them for their co-operation.", "correctPosition": 5 },
        { "id": "s6", "text": "Identify contact persons.", "correctPosition": 6 }
      ],
      "explanation": "The process flows from entry -> greeting -> informing -> seeking permission -> thanking -> identifying contacts."
    },
    {
      "id": "q4",
      "type": "multiple-select",
      "question": "Which of the following are determinants of health? (Select all that apply)",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "Economic determinants (income, employment)", "isCorrect": true },
        { "id": "opt2", "text": "Social determinants (support, safety, education)", "isCorrect": true },
        { "id": "opt3", "text": "Physical environmental determinants", "isCorrect": true },
        { "id": "opt4", "text": "Personal health practices and biology", "isCorrect": true },
        { "id": "opt5", "text": "Political party affiliation", "isCorrect": false }
      ],
      "explanation": "Determinants of health include economic, social, physical environment, and personal/biological factors."
    },
    {
      "id": "q5",
      "type": "matching",
      "question": "Match the term with its definition.",
      "points": 1,
      "pairs": [
        { "id": "p1", "left": "Cohort", "right": "Group of people born in the same period" },
        { "id": "p2", "left": "Density", "right": "Number of people living in a square kilometer" },
        { "id": "p3", "left": "Primary health care", "right": "Essential health services focusing on individual/family" },
        { "id": "p4", "left": "Risk group", "right": "Population at higher risk of contracting disease" }
      ],
      "explanation": "Cohorts share a time period; density is spatial; PHC is essential service; risk groups are vulnerable."
    },
    {
      "id": "q6",
      "type": "true-false",
      "question": "Community Empowerment involves mobilizing individuals and organizations to take action on critical issues.",
      "correctAnswer": true,
      "points": 1,
      "explanation": "Community Empowerment is mobilizing and organizing individuals and communities to take action, influence, and make decisions."
    }
  ]
});