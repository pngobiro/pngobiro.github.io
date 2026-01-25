registerQuiz("topic-11-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-11-quiz",
  "metadata": {
    "title": "NGT Feeding Quiz",
    "description": "Evaluate your knowledge of the safety protocols and procedures for Nasal Gastric Tube feeding.",
    "topicId": "topic-11",
    "difficulty": "intermediate",
    "estimatedTime": 5,
    "passingScore": 80,
    "createdAt": "2026-01-25T00:00:00Z"
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
      "type": "multiple-choice",
      "question": "Why should the feeding formula be warmed to room temperature before administration?",
      "points": 10,
      "options": [
        { "id": "a", "text": "To kill bacteria", "isCorrect": false },
        { "id": "b", "text": "To prevent abdominal cramps", "isCorrect": true },
        { "id": "c", "text": "To make it flow faster", "isCorrect": false },
        { "id": "d", "text": "To improve the taste", "isCorrect": false }
      ],
      "explanation": "Cold feeds can cause significant discomfort and abdominal cramping in patients."
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "question": "What is the recommended action if more than 100 ml of residual content is aspirated before a scheduled feed?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Administer the full feed immediately", "isCorrect": false },
        { "id": "b", "text": "Discard the aspirate and give the feed", "isCorrect": false },
        { "id": "c", "text": "Withhold the feed or follow institutional protocol", "isCorrect": true },
        { "id": "d", "text": "Remove the NGT", "isCorrect": false }
      ],
      "explanation": "High residual volume indicates that the previous feed was not adequately absorbed, and adding more feed could lead to vomiting or aspiration."
    },
    {
      "id": "q3",
      "type": "true-false",
      "question": "Pinching the tube while connecting a syringe prevents excess air from entering the stomach.",
      "points": 10,
      "correctAnswer": true,
      "explanation": "Clamping or pinching the tube maintains a seal, preventing the patient from swallowing excess air which can cause gastric distention and discomfort."
    },
    {
      "id": "q4",
      "type": "multiple-choice",
      "question": "What is the primary rationale for flushing the NGT with 50-100ml of water after a feed?",
      "points": 10,
      "options": [
        { "id": "a", "text": "To provide extra hydration", "isCorrect": false },
        { "id": "b", "text": "To clear the tube of sticky formula and prevent blockage", "isCorrect": true },
        { "id": "c", "text": "To dilute the gastric juices", "isCorrect": false },
        { "id": "d", "text": "To check for leaks", "isCorrect": false }
      ],
      "explanation": "Formula residue can dry and clog the tube; flushing ensures the lumen remains patent for future use."
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "question": "Which position best facilitates gravitational flow and prevents aspiration during NGT feeding?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Supine (flat on back)", "isCorrect": false },
        { "id": "b", "text": "Prone (on abdomen)", "isCorrect": false },
        { "id": "c", "text": "Fowler's position", "isCorrect": true },
        { "id": "d", "text": "Trendelenburg position", "isCorrect": false }
      ],
      "explanation": "An upright sitting position (Fowler's) uses gravity to keep the feed in the stomach and minimizes the risk of reflux into the lungs."
    }
  ]
});
