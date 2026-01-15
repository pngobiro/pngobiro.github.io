registerQuiz("topic-03-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-03-quiz",
  "metadata": {
    "title": "Topic 3: Organisational Communication",
    "description": "Assess knowledge on writing reports, letters, and conducting meetings.",
    "topicId": "topic-03",
    "difficulty": "intermediate",
    "estimatedTime": 15,
    "passingScore": 70,
    "createdAt": "2026-01-11T10:00:00Z"
  },
  "settings": {
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "showFeedback": "immediate"
  },
  "questions": [
    {
      "id": "q1",
      "type": "ordering",
      "question": "Arrange the standard items of a meeting agenda in the correct logical order:",
      "points": 20,
      "items": [
        { "id": "1", "text": "Welcoming participants", "correctPosition": 1 },
        { "id": "2", "text": "Confirmation of previous minutes", "correctPosition": 2 },
        { "id": "3", "text": "Matters arising", "correctPosition": 3 },
        { "id": "4", "text": "New matters to be discussed", "correctPosition": 4 },
        { "id": "5", "text": "A.O.B (Any Other Business)", "correctPosition": 5 }
      ]
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "question": "When writing a Negative Incidence Report, you should:",
      "points": 10,
      "options": [
        { "id": "a", "text": "Use emotional language to convey the severity", "isCorrect": false },
        { "id": "b", "text": "Write it at the end of the month", "isCorrect": false },
        { "id": "c", "text": "State only the facts of what you saw", "isCorrect": true },
        { "id": "d", "text": "Avoid mentioning names of witnesses", "isCorrect": false }
      ],
      "explanation": "Negative incidence reports must be factual, non-emotional, and written immediately."
    },
    {
      "id": "q3",
      "type": "multiple-choice",
      "question": "In an official letter, if the salutation is 'Dear Sir or Madam', the complementary close should be:",
      "points": 10,
      "options": [
        { "id": "a", "text": "Yours sincerely", "isCorrect": false },
        { "id": "b", "text": "Yours faithfully", "isCorrect": true },
        { "id": "c", "text": "Best regards", "isCorrect": false },
        { "id": "d", "text": "Yours truly", "isCorrect": false }
      ],
      "explanation": "'Dear Sir/Madam' matches with 'Yours faithfully'. 'Dear [Name]' matches with 'Yours sincerely'."
    },
    {
      "id": "q4",
      "type": "matching",
      "question": "Match the meeting role to the responsibility:",
      "points": 10,
      "pairs": [
        { "id": "p1", "left": "Chairman", "right": "Calls meeting to order and maintains discipline" },
        { "id": "p2", "left": "Secretary", "right": "Records minutes and circulates attendance list" }
      ]
    },
    {
      "id": "q5",
      "type": "fill-blank",
      "question": "An __b1__ report gives a summary of an employee's performance and abilities for a specific period.",
      "points": 10,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["appraisal"], "caseSensitive": false }
      ],
      "explanation": "Appraisal reports are used for performance review."
    }
  ]
});