registerQuiz("topic-01-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-01-quiz",
  "metadata": {
    "title": "Leadership & Management Quiz",
    "description": "Test your understanding of management theories, leadership styles, and core functions.",
    "topicId": "topic-01",
    "difficulty": "intermediate",
    "estimatedTime": 10,
    "passingScore": 70,
    "createdAt": "2026-01-20T10:00:00Z",
    "updatedAt": "2026-01-20T10:00:00Z",
    "tags": ["management", "leadership", "theories"]
  },
  "questions": [
    {
      "id": "q1-t1",
      "type": "true-false",
      "question": "According to the text, Management is considered a science, while Leadership is considered an art.",
      "points": 1,
      "correctAnswer": true,
      "explanation": "The text explicitly states: 'Management is a science; leadership is an art.'"
    },
    {
      "id": "q2-t1",
      "type": "matching",
      "question": "Match the Management Theory with its primary contributor.",
      "points": 4,
      "pairs": [
        { "id": "p1", "left": "Scientific Management", "right": "Frederick Winslow Taylor" },
        { "id": "p2", "left": "Administrative Management", "right": "Henri Fayol" },
        { "id": "p3", "left": "Bureaucratic Management", "right": "Max Weber" },
        { "id": "p4", "left": "Human Relations Theory", "right": "Elton Mayo" }
      ]
    },
    {
      "id": "q3-t1",
      "type": "multiple-select",
      "question": "Which of the following are Henri Fayol's 5 Elements of Management? (Select all that apply)",
      "points": 3,
      "options": [
        { "id": "opt1", "text": "Planning", "isCorrect": true },
        { "id": "opt2", "text": "Organizing", "isCorrect": true },
        { "id": "opt3", "text": "Marketing", "isCorrect": false },
        { "id": "opt4", "text": "Controlling", "isCorrect": true },
        { "id": "opt5", "text": "Innovating", "isCorrect": false }
      ],
      "explanation": "Fayol defined management as comprising: Planning, Organizing, Commanding, Coordinating, and Controlling."
    },
    {
      "id": "q4-t1",
      "type": "multiple-choice",
      "question": "Which leadership style involves the leader providing minimal direction and giving employees power to determine goals on their own?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "Autocratic", "isCorrect": false },
        { "id": "opt2", "text": "Democratic", "isCorrect": false },
        { "id": "opt3", "text": "Laissez-faire", "isCorrect": true },
        { "id": "opt4", "text": "Paternalistic", "isCorrect": false }
      ],
      "explanation": "Laissez-faire is a style where the leader provides minimal direction."
    },
    {
      "id": "q5-t1",
      "type": "fill-blank",
      "question": "The __unity__ of command principle states that each employee should be assigned to only one supervisor.",
      "points": 2,
      "blanks": [
        { "id": "unity", "acceptedAnswers": ["unity"] }
      ],
      "explanation": "Unity of Command ensures that an employee receives orders from only one superior to avoid conflict."
    }
  ]
});