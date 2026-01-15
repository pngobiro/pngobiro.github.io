registerQuiz("topic-02-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-02-quiz",
  "metadata": {
    "title": "Disease Prevention",
    "description": "Assess your understanding of primary, secondary, and tertiary prevention.",
    "topicId": "topic-02",
    "difficulty": "beginner",
    "estimatedTime": 10,
    "passingScore": 70,
    "createdAt": "2025-12-26T10:00:00Z"
  },
  "questions": [
    {
      "id": "q1",
      "type": "matching",
      "question": "Match the intervention to the level of prevention:",
      "points": 15,
      "pairs": [
        { "id": "p1", "left": "Immunization", "right": "Primary Prevention" },
        { "id": "p2", "left": "Mammography Screening", "right": "Secondary Prevention" },
        { "id": "p3", "left": "Stroke Rehabilitation", "right": "Tertiary Prevention" }
      ],
      "explanation": "Primary prevents onset; Secondary detects early; Tertiary manages consequences."
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "question": "Which level of prevention focuses on 'Disability Limitation'?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Primordial", "isCorrect": false },
        { "id": "b", "text": "Primary", "isCorrect": false },
        { "id": "c", "text": "Secondary", "isCorrect": true },
        { "id": "d", "text": "Tertiary", "isCorrect": false }
      ],
      "explanation": "Secondary prevention aims to treat promptly to prevent the disease from causing long-term disability."
    },
    {
      "id": "q3",
      "type": "multiple-select",
      "question": "Which of the following are examples of Primary Prevention? (Select all that apply)",
      "points": 10,
      "options": [
        { "id": "a", "text": "Hand washing", "isCorrect": true },
        { "id": "b", "text": "Pap smear", "isCorrect": false },
        { "id": "c", "text": "Using condoms", "isCorrect": true },
        { "id": "d", "text": "Insulin therapy", "isCorrect": false }
      ],
      "explanation": "Hand washing and condoms prevent the initial infection. Pap smears are screening (Secondary); Insulin is management (Tertiary)."
    },
    {
      "id": "q4",
      "type": "fill-blank",
      "question": "__1__ prevention targets risk factors by changing social and environmental conditions.",
      "points": 10,
      "blanks": [
        { "id": "1", "acceptedAnswers": ["Primordial", "primordial"], "caseSensitive": false }
      ],
      "explanation": "Primordial prevention acts at the earliest stage to prevent risk factors from emerging."
    }
  ]
});