// topic-10-quiz.js
registerQuiz("topic-10-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-10-quiz",
  "metadata": {
    "title": "Planning & Evaluation Quiz",
    "description": "Test your knowledge on planning cycles, SMART goals, and M&E.",
    "topicId": "topic-10",
    "difficulty": "advanced",
    "estimatedTime": 15,
    "passingScore": 70,
    "createdAt": "2026-01-21T00:00:00Z",
    "updatedAt": "2026-01-21T00:00:00Z",
    "tags": ["planning", "evaluation", "smart-goals"]
  },
  "questions": [
    {
      "id": "q1",
      "type": "fill-blank",
      "question": "In S.M.A.R.T. goals, the 'M' stands for __b1__ and the 'T' stands for __b2__.",
      "points": 2,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["Measurable"], "caseSensitive": false },
        { "id": "b2", "acceptedAnswers": ["Time-related", "Time related", "Time-bound", "Time bound"], "caseSensitive": false }
      ],
      "explanation": "SMART = Specific, Measurable, Attainable, Relevant, Time-related."
    },
    {
      "id": "q2",
      "type": "ordering",
      "question": "Order the steps of the Planning Cycle.",
      "points": 1,
      "items": [
        { "id": "s1", "text": "Situation Analysis", "correctPosition": 1 },
        { "id": "s2", "text": "Formulation of Objectives", "correctPosition": 2 },
        { "id": "s3", "text": "Selection of Strategies", "correctPosition": 3 },
        { "id": "s4", "text": "Development of Operational Plan", "correctPosition": 4 },
        { "id": "s5", "text": "Implementation and Evaluation", "correctPosition": 5 }
      ],
      "explanation": "Analysis -> Objectives -> Strategies -> Plan -> Implementation/Evaluation."
    },
    {
      "id": "q3",
      "type": "matching",
      "question": "Match the type of evaluation with its description.",
      "points": 1,
      "pairs": [
        { "id": "p1", "left": "Process Evaluation", "right": "Assesses if program is implemented as designed" },
        { "id": "p2", "left": "Outcome Evaluation", "right": "Examines results/effects against goals" },
        { "id": "p3", "left": "Impact Evaluation", "right": "Assesses causal links and net effect" },
        { "id": "p4", "left": "Cost-effectiveness", "right": "Compares benefits/outputs with costs" }
      ],
      "explanation": "Process = implementation; Outcome = results; Impact = cause/effect; Cost = value."
    },
    {
      "id": "q4",
      "type": "multiple-choice",
      "question": "What is the purpose of a Logical Framework (Log-frame)?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "To show the link between objectives, activities, indicators, and means of verification.", "isCorrect": true },
        { "id": "opt2", "text": "To list staff salaries.", "isCorrect": false },
        { "id": "opt3", "text": "To schedule daily meetings.", "isCorrect": false },
        { "id": "opt4", "text": "To design the hospital layout.", "isCorrect": false }
      ],
      "explanation": "A log-frame is a planning matrix linking objectives, activities, indicators, and verification."
    },
    {
      "id": "q5",
      "type": "multiple-select",
      "question": "Which of the following are essential measures of success for an organization?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "Financial viability", "isCorrect": true },
        { "id": "opt2", "text": "Customer satisfaction", "isCorrect": true },
        { "id": "opt3", "text": "Employee satisfaction", "isCorrect": true },
        { "id": "opt4", "text": "Contribution to society", "isCorrect": true },
        { "id": "opt5", "text": "Office decoration", "isCorrect": false }
      ],
      "explanation": "Success measures: Financial, Customer, Employee, Society."
    }
  ]
});