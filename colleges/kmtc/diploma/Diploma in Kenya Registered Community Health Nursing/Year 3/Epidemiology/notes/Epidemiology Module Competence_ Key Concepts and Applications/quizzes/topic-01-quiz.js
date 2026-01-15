registerQuiz("topic-01-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-01-quiz",
  "metadata": {
    "title": "Concepts & Historical Evolution",
    "description": "Test your knowledge of epidemiological definitions, the triad, and historical milestones.",
    "topicId": "topic-01",
    "difficulty": "beginner",
    "estimatedTime": 10,
    "passingScore": 70,
    "createdAt": "2025-12-26T10:00:00Z",
    "tags": ["concepts", "history", "triad"]
  },
  "settings": {
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "showFeedback": "immediate",
    "allowRetry": true,
    "showCorrectAnswers": true
  },
  "questions": [
    {
      "id": "q1",
      "type": "fill-blank",
      "question": "The 'Epidemiologic Triad' consists of the Host, the __1__, and the Environment.",
      "points": 10,
      "blanks": [
        { "id": "1", "acceptedAnswers": ["Agent", "agent"], "caseSensitive": false }
      ],
      "explanation": "The three points of the triad are Host, Agent, and Environment. Vectors may be involved but are not a primary corner."
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "question": "Who is considered the 'father of medicine' and the first to examine relationships between disease and environment?",
      "points": 10,
      "options": [
        { "id": "a", "text": "John Snow", "isCorrect": false },
        { "id": "b", "text": "Hippocrates", "isCorrect": true },
        { "id": "c", "text": "William Farr", "isCorrect": false },
        { "id": "d", "text": "Edward Jenner", "isCorrect": false }
      ],
      "explanation": "Hippocrates coined terms like 'endemic' and 'epidemic' and looked at environmental influences on health."
    },
    {
      "id": "q3",
      "type": "matching",
      "question": "Match the core function with its definition:",
      "points": 15,
      "pairs": [
        { "id": "p1", "left": "Surveillance", "right": "Monitoring the pulse of the community" },
        { "id": "p2", "left": "Field Investigation", "right": "Identifying new cases/contacts after a report" },
        { "id": "p3", "left": "Analytic Studies", "right": "Testing hypotheses using comparison groups" }
      ],
      "explanation": "Surveillance detects; Investigation identifies specifics; Analytic studies test the 'why' and 'how'."
    },
    {
      "id": "q4",
      "type": "true-false",
      "question": "Epidemiology is concerned only with infectious diseases.",
      "points": 5,
      "correctAnswer": false,
      "explanation": "Epidemiology covers all health-related states, including chronic diseases, injuries, and behaviors."
    },
    {
      "id": "q5",
      "type": "image-based",
      "question": "In the Epidemiologic Triad image, what does the top vertex represent?",
      "points": 10,
      "imageUrl": "../assets/images/image-20251226-d86f7932.jpeg",
      "imageAlt": "Epidemiologic Triad Diagram",
      "options": [
        { "id": "a", "text": "Agent", "isCorrect": true },
        { "id": "b", "text": "Host", "isCorrect": false },
        { "id": "c", "text": "Environment", "isCorrect": false }
      ],
      "explanation": "The Agent (the cause) is typically placed at the top vertex, interacting with Host and Environment."
    }
  ]
});