registerQuiz("topic-17-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-17-quiz",
  "metadata": {
    "title": "Catheter Removal Quiz",
    "description": "Test your knowledge on the safe and effective procedure for removing a urinary catheter.",
    "topicId": "topic-17",
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
      "question": "What must the nurse do before attempting to withdraw a urinary catheter?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Apply more lubricant", "isCorrect": false },
        { "id": "b", "text": "Withdraw all water from the retention balloon using a syringe", "isCorrect": true },
        { "id": "c", "text": "Ask the patient to cough", "isCorrect": false },
        { "id": "d", "text": "Cut the catheter with scissors", "isCorrect": false }
      ],
      "explanation": "If the balloon remains inflated, it will cause severe trauma to the urethra during withdrawal. All fluid must be removed first."
    },
    {
      "id": "q2",
      "type": "true-false",
      "question": "The catheter should be inspected for completeness immediately after removal.",
      "points": 10,
      "correctAnswer": true,
      "explanation": "Inspecting the catheter ensures that no fragments or parts have been left inside the patient's bladder or urethra."
    },
    {
      "id": "q3",
      "type": "multiple-choice",
      "question": "What is the primary rationale for encouraging increased fluid intake after catheter removal?",
      "points": 10,
      "options": [
        { "id": "a", "text": "To keep the patient busy", "isCorrect": false },
        { "id": "b", "text": "To flush the urinary system and stimulate normal voiding", "isCorrect": true },
        { "id": "c", "text": "To test the patient's swallowing reflex", "isCorrect": false },
        { "id": "d", "text": "To prevent hunger", "isCorrect": false }
      ],
      "explanation": "Fluids help dilute the urine, flush out any bacteria, and provide the necessary volume to stimulate the bladder for natural voiding."
    },
    {
      "id": "q4",
      "type": "multiple-select",
      "question": "Which of the following should be documented after catheter removal? (Select all that apply)",
      "points": 15,
      "options": [
        { "id": "a", "text": "Time of removal", "isCorrect": true },
        { "id": "b", "text": "Patient's tolerance of the procedure", "isCorrect": true },
        { "id": "c", "text": "Fluid intake and output for 24 hours", "isCorrect": true },
        { "id": "d", "text": "The patient's shoe size", "isCorrect": false }
      ],
      "partialCredit": true,
      "explanation": "Clinical documentation must capture the timing, the patient's physical response, and subsequent urological function."
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "question": "After removal, what urological complication should the nurse monitor for most closely?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Increased appetite", "isCorrect": false },
        { "id": "b", "text": "Urinary retention (inability to void)", "isCorrect": true },
        { "id": "c", "text": "Improved vision", "isCorrect": false },
        { "id": "d", "text": "Muscle aches in the arms", "isCorrect": false }
      ],
      "explanation": "Some patients may experience difficulty voiding naturally after long-term catheterization; retention must be identified and managed promptly."
    }
  ]
});
