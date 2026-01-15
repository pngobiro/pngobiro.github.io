registerQuiz("topic-01-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-01-quiz",
  "metadata": {
    "title": "Topic 1: Defining Communication",
    "description": "Test your understanding of communication definitions, types, and processes.",
    "topicId": "topic-01",
    "difficulty": "beginner",
    "estimatedTime": 10,
    "passingScore": 70,
    "createdAt": "2026-01-11T10:00:00Z"
  },
  "settings": {
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "showFeedback": "immediate",
    "allowRetry": true
  },
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "question": "Which type of communication involves the flow of information from top management down to lower-level staff?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Upward Communication", "isCorrect": false },
        { "id": "b", "text": "Horizontal Communication", "isCorrect": false },
        { "id": "c", "text": "Downward Communication", "isCorrect": true },
        { "id": "d", "text": "Informal Communication", "isCorrect": false }
      ],
      "explanation": "Downward communication flows from superiors to subordinates (e.g., instructions, policies)."
    },
    {
      "id": "q2",
      "type": "fill-blank",
      "question": "The 'grapevine' is another name for __b1__ communication.",
      "points": 10,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["informal"], "caseSensitive": false }
      ],
      "explanation": "Informal communication is often referred to as the grapevine, carrying rumors and unofficial information."
    },
    {
      "id": "q3",
      "type": "matching",
      "question": "Match the component of the communication process (MSCREFS) to its definition:",
      "points": 20,
      "pairs": [
        { "id": "p1", "left": "Source", "right": "The originator of the message" },
        { "id": "p2", "left": "Channel", "right": "The medium through which the message travels" },
        { "id": "p3", "left": "Receiver", "right": "The audience interpreting the message" },
        { "id": "p4", "left": "Feedback", "right": "Response determining if the message was understood" }
      ]
    },
    {
      "id": "q4",
      "type": "true-false",
      "question": "In interpersonal communication, spoken words contribute more to the message impact than voice tone and body language.",
      "points": 10,
      "correctAnswer": false,
      "explanation": "Spoken words contribute only 7%, while voice tone (55%) and body language (38%) make up the majority of the impact."
    },
    {
      "id": "q5",
      "type": "multiple-select",
      "question": "Which of the following are examples of formal communication? (Select all that apply)",
      "points": 10,
      "options": [
        { "id": "a", "text": "A circular letter from the Ministry of Health", "isCorrect": true },
        { "id": "b", "text": "Gossip between two nurses during a break", "isCorrect": false },
        { "id": "c", "text": "A staff meeting agenda", "isCorrect": true },
        { "id": "d", "text": "A departmental monthly report", "isCorrect": true }
      ],
      "explanation": "Circulars, agendas, and reports are official/formal channels. Gossip is informal."
    }
  ]
});