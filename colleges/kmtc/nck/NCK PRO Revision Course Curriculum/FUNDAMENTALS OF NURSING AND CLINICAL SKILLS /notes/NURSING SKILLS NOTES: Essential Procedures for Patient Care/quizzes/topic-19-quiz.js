registerQuiz("topic-19-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-19-quiz",
  "metadata": {
    "title": "Wound Dressing Quiz",
    "description": "Test your knowledge of aseptic wound care and dressing procedures.",
    "topicId": "topic-19",
    "difficulty": "advanced",
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
      "question": "What is the correct technique for cleaning a wound during a dressing change?",
      "points": 10,
      "options": [
        { "id": "a", "text": "From outside to inside in a circular motion", "isCorrect": false },
        { "id": "b", "text": "From inside outward", "isCorrect": true },
        { "id": "c", "text": "Scrubbing back and forth", "isCorrect": false },
        { "id": "d", "text": "Dab the center and leave the edges", "isCorrect": false }
      ],
      "explanation": "Cleaning from the cleanest area (the wound itself) outward to the less clean area (surrounding skin) prevents the transfer of microorganisms into the wound."
    },
    {
      "id": "q2",
      "type": "true-false",
      "question": "Swabs used for cleaning a wound should be used only once and then discarded.",
      "points": 10,
      "correctAnswer": true,
      "explanation": "To maintain strict asepsis and prevent cross-contamination, a fresh swab must be used for each cleaning stroke."
    },
    {
      "id": "q3",
      "type": "multiple-choice",
      "question": "Why is it important to disinfect the dressing trolley with spirit and allow it to dry before use?",
      "points": 10,
      "options": [
        { "id": "a", "text": "To make it smell nice", "isCorrect": false },
        { "id": "b", "text": "To ensure a sterile working field", "isCorrect": true },
        { "id": "c", "text": "To cool down the metal", "isCorrect": false },
        { "id": "d", "text": "To remove the trolley's color", "isCorrect": false }
      ],
      "explanation": "Disinfecting the work surface is a core component of maintaining the sterile field required for invasive procedures like wound dressing."
    },
    {
      "id": "q4",
      "type": "multiple-select",
      "question": "Which of the following should be assessed before starting a wound dressing? (Select all that apply)",
      "points": 15,
      "options": [
        { "id": "a", "text": "Allergies to dressing materials", "isCorrect": true },
        { "id": "b", "text": "Need for analgesia (pain relief)", "isCorrect": true },
        { "id": "c", "text": "The patient's shoe size", "isCorrect": false },
        { "id": "d", "text": "The extent of skin impairment", "isCorrect": true }
      ],
      "partialCredit": true,
      "explanation": "Comprehensive assessment ensures the procedure is safe, effective, and as comfortable as possible for the patient."
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "question": "What is the primary purpose of a wound dressing?",
      "points": 10,
      "options": [
        { "id": "a", "text": "To hide the wound from the patient", "isCorrect": false },
        { "id": "b", "text": "To keep the wound free of microorganisms and enhance healing", "isCorrect": true },
        { "id": "c", "text": "To stop the patient from moving", "isCorrect": false },
        { "id": "d", "text": "To increase the cost of care", "isCorrect": false }
      ],
      "explanation": "Dressings provide a protective environment that prevents infection and promotes the body's natural healing mechanisms."
    }
  ]
});
