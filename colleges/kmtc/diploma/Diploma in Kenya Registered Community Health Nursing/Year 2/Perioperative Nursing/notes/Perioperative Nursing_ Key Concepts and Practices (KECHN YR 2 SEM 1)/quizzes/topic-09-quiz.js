registerQuiz("topic-09-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-09-quiz",
  "metadata": {
    "title": "Patient Management Quiz",
    "description": "Assess your understanding of patient positioning, skin preparation, and draping.",
    "topicId": "topic-09",
    "difficulty": "intermediate",
    "estimatedTime": 10,
    "passingScore": 80,
    "createdAt": "2025-12-29T12:00:00Z"
  },
  "questions": [
    {
      "id": "q1",
      "type": "image-based",
      "question": "Identify the surgical position shown in the image:",
      "points": 15,
      "imageUrl": "../assets/images/image-20251229-d79655d6.jpeg",
      "imageAlt": "Patient with legs raised in stirrups",
      "options": [
        { "id": "a", "text": "Trendelenburg", "isCorrect": false },
        { "id": "b", "text": "Lithotomy", "isCorrect": true },
        { "id": "c", "text": "Supine", "isCorrect": false },
        { "id": "d", "text": "Prone", "isCorrect": false }
      ],
      "explanation": "The image shows the Lithotomy position (legs in stirrups), used for perineal operations."
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "question": "Which position involves the head being tilted down 30-45 degrees, commonly used for pelvic surgery?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Reverse Trendelenburg", "isCorrect": false },
        { "id": "b", "text": "Trendelenburg", "isCorrect": true },
        { "id": "c", "text": "Kidney Position", "isCorrect": false },
        { "id": "d", "text": "Prone", "isCorrect": false }
      ],
      "explanation": "Trendelenburg uses a head-down tilt to move organs away from the pelvis."
    },
    {
      "id": "q3",
      "type": "multiple-select",
      "question": "What are the goals of proper patient positioning? (Select all that apply)",
      "points": 15,
      "options": [
        { "id": "a", "text": "Maintain airway", "isCorrect": true },
        { "id": "b", "text": "Prevent nerve damage", "isCorrect": true },
        { "id": "c", "text": "Prevent pressure sores", "isCorrect": true },
        { "id": "d", "text": "Maintain circulation", "isCorrect": true }
      ],
      "explanation": "All options listed are core goals of safe patient positioning."
    },
    {
      "id": "q4",
      "type": "true-false",
      "question": "When placing a patient in Lithotomy position, legs must be raised one at a time to prevent back injury.",
      "points": 10,
      "correctAnswer": false,
      "explanation": "False. Legs must be raised SIMULTANEOUSLY to avoid injury."
    },
    {
      "id": "q5",
      "type": "fill-blank",
      "question": "The __b1__ position is used for operations on the back, where the patient lies face down.",
      "points": 10,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["prone"], "caseSensitive": false }
      ],
      "explanation": "Prone position is face down."
    },
    {
      "id": "q6",
      "type": "ordering",
      "question": "Order the steps of skin preparation:",
      "points": 15,
      "items": [
        { "id": "i1", "text": "Vigorous sponging with disinfectant", "correctPosition": 1 },
        { "id": "i2", "text": "Swabbing with iodine/spirit", "correctPosition": 2 },
        { "id": "i3", "text": "Draping the patient", "correctPosition": 3 }
      ],
      "explanation": "Clean/Scrub skin -> Apply antiseptic paint -> Drape."
    },
    {
      "id": "q7",
      "type": "short-answer",
      "question": "What is the purpose of 'draping' the patient?",
      "points": 10,
      "keywords": ["sterile", "field", "barrier", "contamination"],
      "minKeywords": 1,
      "modelAnswer": "To maintain an adequate sterile field around the surgical site.",
      "explanation": "Draping creates a sterile barrier around the incision site."
    },
    {
      "id": "q8",
      "type": "image-based",
      "question": "Which position is shown in the image below?",
      "points": 15,
      "imageUrl": "../assets/images/image-20251229-5cb1acf6.jpeg",
      "imageAlt": "Patient on side with waist elevated",
      "options": [
        { "id": "a", "text": "Lateral", "isCorrect": false },
        { "id": "b", "text": "Kidney Position", "isCorrect": true },
        { "id": "c", "text": "Sims Position", "isCorrect": false },
        { "id": "d", "text": "Jackknife", "isCorrect": false }
      ],
      "explanation": "The image shows the Kidney position with the bridge raised to expose the flank."
    }
  ]
});