// topic-05-quiz.js
registerQuiz("topic-05-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-05-quiz",
  "metadata": {
    "title": "Community Health Survey Quiz",
    "description": "Assess your understanding of survey methods, planning, and bias reduction.",
    "topicId": "topic-05",
    "difficulty": "intermediate",
    "estimatedTime": 10,
    "passingScore": 70,
    "createdAt": "2026-01-21T00:00:00Z",
    "updatedAt": "2026-01-21T00:00:00Z",
    "tags": ["survey", "research", "methodology"]
  },
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "question": "What is a 'Non-anonymous' survey?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "A survey where user identifiable data (e.g., username, address) is recorded.", "isCorrect": true },
        { "id": "opt2", "text": "A survey where no personal data is recorded.", "isCorrect": false },
        { "id": "opt3", "text": "A survey conducted verbally only.", "isCorrect": false },
        { "id": "opt4", "text": "A survey without questions.", "isCorrect": false }
      ],
      "explanation": "Non-anonymous surveys track the identity of the respondent."
    },
    {
      "id": "q2",
      "type": "matching",
      "question": "Match the type of bias with its cause.",
      "points": 1,
      "pairs": [
        { "id": "p1", "left": "Nonresponse bias", "right": "Individuals selected are unwilling/unable to participate" },
        { "id": "p2", "left": "Voluntary response bias", "right": "Sample members are self-selected volunteers" },
        { "id": "p3", "left": "Social desirability bias", "right": "Respondents answer to look favorable/acceptable" },
        { "id": "p4", "left": "Under coverage", "right": "Some population members are inadequately represented" }
      ],
      "explanation": "Nonresponse = missing participants; Voluntary = self-selection; Social desirability = lying to look good; Under coverage = missing groups."
    },
    {
      "id": "q3",
      "type": "ordering",
      "question": "Order the steps of planning and conducting a survey.",
      "points": 1,
      "items": [
        { "id": "s1", "text": "Decide on your goals", "correctPosition": 1 },
        { "id": "s2", "text": "Design methodology", "correctPosition": 2 },
        { "id": "s3", "text": "Create list of questions", "correctPosition": 3 },
        { "id": "s4", "text": "Invite participants", "correctPosition": 4 },
        { "id": "s5", "text": "Gather responses", "correctPosition": 5 },
        { "id": "s6", "text": "Analyze results", "correctPosition": 6 }
      ],
      "explanation": "Goals -> Methodology -> Questions -> Invitation -> Data Collection -> Analysis."
    },
    {
      "id": "q4",
      "type": "fill-blank",
      "question": "The __b1__ rate refers to the number of people who answered the survey divided by the number of people in the sample.",
      "points": 1,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["response", "completion", "return"], "caseSensitive": false }
      ],
      "explanation": "Response rate (or completion/return rate) measures participation."
    },
    {
      "id": "q5",
      "type": "multiple-select",
      "question": "What are valid reasons for conducting a community survey?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "To gather information about residents' opinions and attitudes", "isCorrect": true },
        { "id": "opt2", "text": "To determine community needs", "isCorrect": true },
        { "id": "opt3", "text": "To solicit community reaction to policies", "isCorrect": true },
        { "id": "opt4", "text": "To force the community to accept a decision", "isCorrect": false }
      ],
      "explanation": "Surveys gather info, assess needs, and solicit reactions/feedback, not force decisions."
    }
  ]
});