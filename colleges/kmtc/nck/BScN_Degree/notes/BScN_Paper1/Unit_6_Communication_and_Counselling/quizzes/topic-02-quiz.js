registerQuiz("topic-02-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-02-quiz",
  "metadata": {
    "title": "Topic 2: Barriers to Communication",
    "description": "Identify physical, social, and psychological barriers to effective communication.",
    "topicId": "topic-02",
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
      "type": "multiple-choice",
      "question": "Using complicated medical jargon with a patient who has low literacy is an example of which type of barrier?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Physical Barrier", "isCorrect": false },
        { "id": "b", "text": "Language/Semantic Barrier", "isCorrect": true },
        { "id": "c", "text": "Physiological Barrier", "isCorrect": false },
        { "id": "d", "text": "System Overload", "isCorrect": false }
      ],
      "explanation": "Semantic barriers relate to language and meaning. Jargon prevents understanding."
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "question": "Which of the following is a barrier resulting from the 'Social Setting'?",
      "points": 10,
      "options": [
        { "id": "a", "text": "The sender stammers", "isCorrect": false },
        { "id": "b", "text": "Irrelevant posters in the room acting as distractors", "isCorrect": true },
        { "id": "c", "text": "The receiver is hungry", "isCorrect": false },
        { "id": "d", "text": "The message is too long", "isCorrect": false }
      ],
      "explanation": "The social setting involves the environment. Distracting posters create 'noise' in the setting."
    },
    {
      "id": "q3",
      "type": "multiple-select",
      "question": "Which factors might cause a breakdown in communication at the Receiver's end? (Select all that apply)",
      "points": 10,
      "options": [
        { "id": "a", "text": "Emotional disturbance (e.g., anxiety)", "isCorrect": true },
        { "id": "b", "text": "Lack of interest in the topic", "isCorrect": true },
        { "id": "c", "text": "Speaking in a low voice (Sender's fault)", "isCorrect": false },
        { "id": "d", "text": "Religious beliefs conflicting with the message", "isCorrect": true }
      ],
      "explanation": "Emotional state, interest level, and beliefs are internal to the receiver."
    },
    {
      "id": "q4",
      "type": "true-false",
      "question": "System overload occurs when an individual sends or receives too much information at the same time.",
      "points": 10,
      "correctAnswer": true,
      "explanation": "Multitasking or excessive inputs can lead to system overload and communication failure."
    },
    {
      "id": "q5",
      "type": "short-answer",
      "question": "What is the term for the outcome resulting from the communication of a message (e.g., change in behavior)?",
      "points": 10,
      "keywords": ["effect", "effects"],
      "minKeywords": 1,
      "modelAnswer": "Effects",
      "explanation": "The 'E' in MSCREFS stands for Effects - the outcome or change resulting from the message."
    }
  ]
});