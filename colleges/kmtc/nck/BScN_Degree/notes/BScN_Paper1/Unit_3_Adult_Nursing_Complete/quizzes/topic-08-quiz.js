registerQuiz("topic-08-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-08-quiz",
  "metadata": {
    "title": "Palliative Care Quiz",
    "description": "Assess your understanding of end-of-life care principles, pain management, and the dying process.",
    "topicId": "topic-08-palliative-care",
    "difficulty": "beginner",
    "estimatedTime": 15,
    "passingScore": 80,
    "createdAt": "2025-12-25T12:00:00Z"
  },
  "questions": [
    {
      "id": "q1",
      "type": "true-false",
      "question": "Palliative care intends to neither hasten nor postpone death.",
      "points": 10,
      "correctAnswer": true,
      "explanation": "A core principle of palliative care is affirming life and regarding dying as a normal process."
    },
    {
      "id": "q2",
      "type": "matching",
      "question": "Match the Kubler-Ross stage of dying to the typical patient statement:",
      "points": 20,
      "pairs": [
        { "id": "p1", "left": "Denial", "right": "\"No, not me.\"" },
        { "id": "p2", "left": "Anger", "right": "\"Why me?\"" },
        { "id": "p3", "left": "Bargaining", "right": "\"Yes me, but...\"" },
        { "id": "p4", "left": "Depression", "right": "\"What's the use?\"" },
        { "id": "p5", "left": "Acceptance", "right": "\"I'm ready.\"" }
      ]
    },
    {
      "id": "q3",
      "type": "ordering",
      "question": "Order the steps of the WHO Analgesic Ladder from mild to severe pain:",
      "points": 15,
      "items": [
        { "id": "i1", "text": "Non-opioids (e.g., Paracetamol)", "correctPosition": 1 },
        { "id": "i2", "text": "Mild Opioids (e.g., Codeine)", "correctPosition": 2 },
        { "id": "i3", "text": "Strong Opioids (e.g., Morphine)", "correctPosition": 3 }
      ],
      "explanation": "The ladder starts with non-opioids for mild pain, moves to mild opioids for moderate pain, and strong opioids for severe pain."
    },
    {
      "id": "q4",
      "type": "multiple-choice",
      "question": "Which of the following is NOT a goal of palliative care?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Pain relief", "isCorrect": false },
        { "id": "b", "text": "Cure of the underlying disease", "isCorrect": true },
        { "id": "c", "text": "Psychological support", "isCorrect": false },
        { "id": "d", "text": "Family support", "isCorrect": false }
      ],
      "explanation": "Palliative care focuses on quality of life and symptom management when the disease is not responsive to curative treatment."
    },
    {
      "id": "q5",
      "type": "fill-blank",
      "question": "The active total care of patients whose disease is not responsive to curative treatment is called __1__ care.",
      "points": 10,
      "blanks": [
        { "id": "1", "acceptedAnswers": ["palliative"], "caseSensitive": false }
      ],
      "explanation": "This is the WHO definition of palliative care."
    }
  ]
});