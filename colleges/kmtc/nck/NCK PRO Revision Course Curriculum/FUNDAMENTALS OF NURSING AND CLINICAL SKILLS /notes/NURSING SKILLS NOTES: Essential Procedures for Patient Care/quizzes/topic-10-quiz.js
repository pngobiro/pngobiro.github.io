registerQuiz("topic-10-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-10-quiz",
  "metadata": {
    "title": "NGT Insertion Quiz",
    "description": "Test your knowledge on the measurement, insertion, and confirmation of Nasal Gastric Tubes.",
    "topicId": "topic-10",
    "difficulty": "intermediate",
    "estimatedTime": 6,
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
      "question": "What are the correct anatomical landmarks for measuring the required length of a Nasal Gastric Tube (NGT)?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Mouth to ear lobe to stomach", "isCorrect": false },
        { "id": "b", "text": "Tip of nose to ear lobe to xiphisternum", "isCorrect": true },
        { "id": "c", "text": "Forehead to chin to navel", "isCorrect": false },
        { "id": "d", "text": "Nose to neck to chest", "isCorrect": false }
      ],
      "explanation": "The distance from the tip of the nose to the ear lobe, then down to the xiphisternum, approximates the path from the external nares to the stomach."
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "question": "If a patient begins gasping or turns cyanotic (blue) during NGT insertion, what is the immediate nursing action?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Push the tube in faster", "isCorrect": false },
        { "id": "b", "text": "Ask the patient to take deep breaths", "isCorrect": false },
        { "id": "c", "text": "Remove the tube immediately", "isCorrect": true },
        { "id": "d", "text": "Give the patient a glass of water", "isCorrect": false }
      ],
      "explanation": "Signs of respiratory distress indicate the tube has likely entered the trachea instead of the esophagus. The tube must be removed immediately to protect the airway."
    },
    {
      "id": "q3",
      "type": "true-false",
      "question": "The patient should be positioned in a supine (flat) position during NGT insertion.",
      "points": 10,
      "correctAnswer": false,
      "explanation": "The patient should be sitting upright or in a semi-Fowler's position to prevent aspiration and facilitate the downward passage of the tube."
    },
    {
      "id": "q4",
      "type": "multiple-choice",
      "question": "When testing gastric aspirate with blue litmus paper, what result confirms the tube is in the acidic environment of the stomach?",
      "points": 10,
      "options": [
        { "id": "a", "text": "The paper turns green", "isCorrect": false },
        { "id": "b", "text": "The paper stays blue", "isCorrect": false },
        { "id": "c", "text": "The paper turns pink", "isCorrect": true },
        { "id": "d", "text": "The paper turns black", "isCorrect": false }
      ],
      "explanation": "Gastric contents are acidic, which causes blue litmus paper to turn pink/red."
    },
    {
      "id": "q5",
      "type": "multiple-select",
      "question": "What are the primary purposes of inserting a Nasal Gastric Tube? (Select all that apply)",
      "points": 15,
      "options": [
        { "id": "a", "text": "To provide nourishment (feeding)", "isCorrect": true },
        { "id": "b", "text": "To empty stomach contents (decompression)", "isCorrect": true },
        { "id": "c", "text": "To administer medications", "isCorrect": true },
        { "id": "d", "text": "To assist with deep breathing exercises", "isCorrect": false }
      ],
      "partialCredit": true,
      "explanation": "NGTs are versatile tools used for feeding, drainage (decompression), and medication delivery."
    }
  ]
});
