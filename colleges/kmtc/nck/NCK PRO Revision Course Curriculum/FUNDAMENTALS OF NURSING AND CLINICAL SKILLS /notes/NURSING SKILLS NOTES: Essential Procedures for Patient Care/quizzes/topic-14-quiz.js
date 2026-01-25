registerQuiz("topic-14-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-14-quiz",
  "metadata": {
    "title": "Urinary Catheterization Quiz",
    "description": "Evaluate your knowledge of the aseptic techniques and procedures for urinary catheterization.",
    "topicId": "topic-14",
    "difficulty": "advanced",
    "estimatedTime": 8,
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
      "question": "What is the correct anatomical landmark for insertion during female catheterization?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Vaginal orifice", "isCorrect": false },
        { "id": "b", "text": "Urethral meatus", "isCorrect": true },
        { "id": "c", "text": "Clitoris", "isCorrect": false },
        { "id": "d", "text": "Anus", "isCorrect": false }
      ],
      "explanation": "The catheter must be inserted into the urethral meatus, located between the clitoris and the vaginal orifice."
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "question": "During male catheterization, at what angle should the penis be held to straighten the urethra?",
      "points": 10,
      "options": [
        { "id": "a", "text": "45 degrees", "isCorrect": false },
        { "id": "b", "text": "90 degrees", "isCorrect": true },
        { "id": "c", "text": "180 degrees", "isCorrect": false },
        { "id": "d", "text": "It should be held flat", "isCorrect": false }
      ],
      "explanation": "Holding the penis at a 90-degree angle to the body helps straighten the urethral canal for easier insertion."
    },
    {
      "id": "q3",
      "type": "true-false",
      "question": "In an uncircumcised male, the foreskin must be replaced over the glans immediately after the procedure.",
      "points": 10,
      "correctAnswer": true,
      "explanation": "Failure to replace the foreskin can lead to paraphimosis (constricting edema), which is a medical emergency."
    },
    {
      "id": "q4",
      "type": "multiple-choice",
      "question": "Which position is standard for female patients during catheterization to allow for best visualization?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Prone", "isCorrect": false },
        { "id": "b", "text": "Sims", "isCorrect": false },
        { "id": "c", "text": "Dorsal recumbent", "isCorrect": true },
        { "id": "d", "text": "Trendelenburg", "isCorrect": false }
      ],
      "explanation": "The dorsal recumbent position (on back with knees flexed and legs apart) provides the necessary exposure for the procedure."
    },
    {
      "id": "q5",
      "type": "multiple-select",
      "question": "What are valid clinical indications for urinary catheterization? (Select all that apply)",
      "points": 15,
      "options": [
        { "id": "a", "text": "Continuous monitoring of urinary output", "isCorrect": true },
        { "id": "b", "text": "Pre and post abdominal surgery", "isCorrect": true },
        { "id": "c", "text": "Relief of urinary retention", "isCorrect": true },
        { "id": "d", "text": "Patient convenience for not using the bathroom", "isCorrect": false }
      ],
      "partialCredit": true,
      "explanation": "Catheterization should only be performed for specific medical indications, never for the convenience of the patient or staff, due to the high risk of infection."
    }
  ]
});
