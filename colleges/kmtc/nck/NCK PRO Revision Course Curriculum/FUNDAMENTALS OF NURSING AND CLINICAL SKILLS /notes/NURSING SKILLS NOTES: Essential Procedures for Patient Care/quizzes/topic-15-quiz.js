registerQuiz("topic-15-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-15-quiz",
  "metadata": {
    "title": "Bladder Irrigation Quiz",
    "description": "Test your knowledge on the techniques and clinical rationales for performing bladder irrigation.",
    "topicId": "topic-15",
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
      "question": "What is the primary purpose of performing a bladder washout (irrigation)?",
      "points": 10,
      "options": [
        { "id": "a", "text": "To increase the patient's hydration", "isCorrect": false },
        { "id": "b", "text": "To relieve or prevent catheter blockage and instill local medication", "isCorrect": true },
        { "id": "c", "text": "To collect a sterile urine sample", "isCorrect": false },
        { "id": "d", "text": "To check for kidney stones", "isCorrect": false }
      ],
      "explanation": "Bladder irrigation is specifically designed to maintain catheter patency by clearing debris/clots and to deliver localized pharmacological treatments."
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "question": "Why must the nurse palpate the patient's abdomen before starting the irrigation?",
      "points": 10,
      "options": [
        { "id": "a", "text": "To check for muscle tone", "isCorrect": false },
        { "id": "b", "text": "To ensure the bladder is not already over-distended", "isCorrect": true },
        { "id": "c", "text": "To stimulate the urge to void", "isCorrect": false },
        { "id": "d", "text": "To check for appendicitis", "isCorrect": false }
      ],
      "explanation": "Injecting more fluid into an already distended bladder can cause extreme pain and potential injury."
    },
    {
      "id": "q3",
      "type": "true-false",
      "question": "Continuous irrigation involves using a roller clamp to regulate a constant drip rate of flushing fluid.",
      "points": 10,
      "correctAnswer": true,
      "explanation": "Continuous irrigation provides a steady flow of fluid to keep the bladder clear, especially after urological surgery."
    },
    {
      "id": "q4",
      "type": "multiple-choice",
      "question": "When should the irrigation port of the catheter be cleansed with antiseptic?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Only after the procedure", "isCorrect": false },
        { "id": "b", "text": "Before connecting the irrigation tubing", "isCorrect": true },
        { "id": "c", "text": "Once a day regardless of irrigation", "isCorrect": false },
        { "id": "d", "text": "Never", "isCorrect": false }
      ],
      "explanation": "Cleaning the port before connection is a critical aseptic step to prevent introducing microorganisms into the urological system."
    },
    {
      "id": "q5",
      "type": "multiple-select",
      "question": "Which of the following are indications for bladder irrigation? (Select all that apply)",
      "points": 15,
      "options": [
        { "id": "a", "text": "After prostatectomy surgery", "isCorrect": true },
        { "id": "b", "text": "Bladder inflammation or infection", "isCorrect": true },
        { "id": "c", "text": "Suspected blockage by blood clots", "isCorrect": true },
        { "id": "d", "text": "To test for pregnancy", "isCorrect": false }
      ],
      "partialCredit": true,
      "explanation": "Indications for irrigation relate to maintaining catheter patency and treating specific bladder conditions or post-surgical needs."
    }
  ]
});
