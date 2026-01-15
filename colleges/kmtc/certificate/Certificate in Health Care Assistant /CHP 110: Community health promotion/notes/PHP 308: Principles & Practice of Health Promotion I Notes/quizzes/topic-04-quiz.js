registerQuiz("topic-04-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-04-quiz",
  "metadata": {
    "title": "Unit 4.0: Theories & Models",
    "description": "Check your grasp of HBM, TTM, SCT, and PRECEDE-PROCEED.",
    "topicId": "topic-04",
    "difficulty": "advanced",
    "estimatedTime": 20,
    "passingScore": 70,
    "createdAt": "2023-05-20T00:00:00Z",
    "tags": ["models", "theories", "behavior-change"]
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
      "question": "Match the Health Belief Model construct to its definition:",
      "points": 20,
      "pairs": [
        { "id": "p1", "left": "Perceived Susceptibility", "right": "Belief about chances of getting a condition" },
        { "id": "p2", "left": "Perceived Severity", "right": "Belief about seriousness of a condition" },
        { "id": "p3", "left": "Perceived Benefits", "right": "Belief that action reduces risk" },
        { "id": "p4", "left": "Self-efficacy", "right": "Confidence in ability to take action" }
      ],
      "explanation": "These are the key constructs of the HBM affecting readiness to act."
    },
    {
      "id": "q2",
      "type": "ordering",
      "question": "Order the Stages of Change (Trans-theoretical Model) from start to finish:",
      "points": 20,
      "items": [
        { "id": "1", "text": "Precontemplation", "correctPosition": 1 },
        { "id": "2", "text": "Contemplation", "correctPosition": 2 },
        { "id": "3", "text": "Preparation", "correctPosition": 3 },
        { "id": "4", "text": "Action", "correctPosition": 4 },
        { "id": "5", "text": "Maintenance", "correctPosition": 5 },
        { "id": "6", "text": "Termination", "correctPosition": 6 }
      ],
      "explanation": "Progression: No intention -> Thinking about it -> Planning -> Doing -> Sustaining -> Habit."
    },
    {
      "id": "q3",
      "type": "multiple-choice",
      "question": "Which theory emphasizes 'Reciprocal Determinism'—the interaction between person, behavior, and environment?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Health Belief Model", "isCorrect": false },
        { "id": "b", "text": "Social Cognitive Theory", "isCorrect": true },
        { "id": "c", "text": "Theory of Planned Behavior", "isCorrect": false },
        { "id": "d", "text": "Diffusion of Innovations", "isCorrect": false }
      ],
      "explanation": "Social Cognitive Theory (Bandura) posits that personal factors, behavior, and environment all influence each other."
    },
    {
      "id": "q4",
      "type": "fill-blank",
      "question": "In the PRECEDE-PROCEED model, PRECEDE stands for: __b1__, Reinforcing, and Enabling Constructs.",
      "points": 10,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["Predisposing", "predisposing"], "caseSensitive": false }
      ],
      "explanation": "P stands for Predisposing factors (knowledge, attitudes, beliefs)."
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "question": "According to Diffusion of Innovations, which group adopts an innovation first?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Early Majority", "isCorrect": false },
        { "id": "b", "text": "Early Adopters", "isCorrect": false },
        { "id": "c", "text": "Innovators", "isCorrect": true },
        { "id": "d", "text": "Laggards", "isCorrect": false }
      ],
      "explanation": "Innovators (2.5%) are the first to adopt, followed by Early Adopters (13.5%)."
    }
  ]
});