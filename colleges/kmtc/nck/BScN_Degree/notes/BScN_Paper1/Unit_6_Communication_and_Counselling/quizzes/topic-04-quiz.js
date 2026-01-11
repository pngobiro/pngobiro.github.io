registerQuiz("topic-04-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-04-quiz",
  "metadata": {
    "title": "Topic 4: Psychology",
    "description": "Test your knowledge of personality structure, anxiety, and defense mechanisms.",
    "topicId": "topic-04",
    "difficulty": "advanced",
    "estimatedTime": 20,
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
      "type": "matching",
      "question": "Match Freud's personality component to its principle:",
      "points": 15,
      "pairs": [
        { "id": "p1", "left": "Id", "right": "Pleasure Principle" },
        { "id": "p2", "left": "Ego", "right": "Reality Principle" },
        { "id": "p3", "left": "Super Ego", "right": "Morality/Conscience" }
      ]
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "question": "Which defense mechanism involves masking weaknesses by developing positive traits in another area?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Repression", "isCorrect": false },
        { "id": "b", "text": "Projection", "isCorrect": false },
        { "id": "c", "text": "Compensation", "isCorrect": true },
        { "id": "d", "text": "Sublimation", "isCorrect": false }
      ],
      "explanation": "Compensation is making up for limitations in one area by excelling in another."
    },
    {
      "id": "q3",
      "type": "fill-blank",
      "question": "According to Freud, the stage of development from birth to age one is the __b1__ stage.",
      "points": 10,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["oral"], "caseSensitive": false }
      ],
      "explanation": "The Oral stage focuses on the mouth, tongue, and gums."
    },
    {
      "id": "q4",
      "type": "multiple-choice",
      "question": "Which of the following is a strategy for 'Problem-focused coping' with stress?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Denial", "isCorrect": false },
        { "id": "b", "text": "Relaxation", "isCorrect": false },
        { "id": "c", "text": "Taking action to modify the situation", "isCorrect": true },
        { "id": "d", "text": "Wishful thinking", "isCorrect": false }
      ],
      "explanation": "Problem-focused coping involves changing the situation itself, whereas emotion-focused coping manages the emotional response."
    },
    {
      "id": "q5",
      "type": "multiple-select",
      "question": "Select the physical symptoms often associated with high anxiety. (Select all that apply)",
      "points": 10,
      "options": [
        { "id": "a", "text": "Rapid heartbeat", "isCorrect": true },
        { "id": "b", "text": "Sweating", "isCorrect": true },
        { "id": "c", "text": "Low blood pressure", "isCorrect": false },
        { "id": "d", "text": "Dizziness", "isCorrect": true }
      ],
      "explanation": "Anxiety activates the sympathetic nervous system (fight-or-flight), causing increased heart rate, sweating, and blood pressure."
    }
  ]
});