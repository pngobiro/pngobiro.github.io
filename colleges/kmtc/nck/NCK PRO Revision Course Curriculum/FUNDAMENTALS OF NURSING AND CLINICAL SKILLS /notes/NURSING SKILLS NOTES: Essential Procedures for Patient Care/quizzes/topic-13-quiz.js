registerQuiz("topic-13-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-13-quiz",
  "metadata": {
    "title": "Gastrostomy Feeding Quiz",
    "description": "Test your knowledge on the specialized procedures for gastrostomy tube feeding and care.",
    "topicId": "topic-13",
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
      "question": "Gastrostomy tube feeding involves the administration of nutrients through which part of the body?",
      "points": 10,
      "options": [
        { "id": "a", "text": "The nose", "isCorrect": false },
        { "id": "b", "text": "The mouth", "isCorrect": false },
        { "id": "c", "text": "The abdominal wall directly into the stomach", "isCorrect": true },
        { "id": "d", "text": "Intravenously", "isCorrect": false }
      ],
      "explanation": "A gastrostomy tube is surgically or endoscopically placed through the abdominal wall into the stomach."
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "question": "What is the recommended angle of elevation for the head of the bed during gastrostomy feeding?",
      "points": 10,
      "options": [
        { "id": "a", "text": "10 degrees", "isCorrect": false },
        { "id": "b", "text": "30 degrees", "isCorrect": true },
        { "id": "c", "text": "90 degrees", "isCorrect": false },
        { "id": "d", "text": "The bed should be flat", "isCorrect": false }
      ],
      "explanation": "Elevating the head to 30 degrees uses gravity to help the feed enter the stomach and significantly reduces the risk of reflux."
    },
    {
      "id": "q3",
      "type": "true-false",
      "question": "The gastrostomy tube should be flushed with water both before and after the feeding procedure.",
      "points": 10,
      "correctAnswer": true,
      "explanation": "Flushing before checks patency; flushing after removes formula residue to prevent the tube from becoming blocked."
    },
    {
      "id": "q4",
      "type": "multiple-choice",
      "question": "Why must the feeding be administered slowly by gravity?",
      "points": 10,
      "options": [
        { "id": "a", "text": "To prevent the tube from breaking", "isCorrect": false },
        { "id": "b", "text": "To prevent sudden stomach distension, nausea, and vomiting", "isCorrect": true },
        { "id": "c", "text": "To save the nurse's time", "isCorrect": false },
        { "id": "d", "text": "To keep the feed from getting cold", "isCorrect": false }
      ],
      "explanation": "Slow, gravitational feeding mimics natural ingestion rates and avoids overwhelming the stomach's capacity."
    },
    {
      "id": "q5",
      "type": "multiple-select",
      "question": "Which of the following are indications for gastrostomy tube feeding? (Select all that apply)",
      "points": 15,
      "options": [
        { "id": "a", "text": "Esophageal tumors", "isCorrect": true },
        { "id": "b", "text": "Severe upper GI burns", "isCorrect": true },
        { "id": "c", "text": "Severe esophagitis", "isCorrect": true },
        { "id": "d", "text": "Normal recovery from a minor cold", "isCorrect": false }
      ],
      "partialCredit": true,
      "explanation": "Gastrostomy feeding is indicated when there is a long-term or severe obstruction/condition in the upper GI tract preventing oral intake."
    }
  ]
});
