registerQuiz("topic-08-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-08-quiz",
  "metadata": {
    "title": "Instrumentation & Counts Quiz",
    "description": "Test your knowledge of surgical instruments, sutures, and the critical swab count procedure.",
    "topicId": "topic-08",
    "difficulty": "advanced",
    "estimatedTime": 15,
    "passingScore": 85,
    "createdAt": "2025-12-29T12:00:00Z"
  },
  "questions": [
    {
      "id": "q1",
      "type": "matching",
      "question": "Match the instrument category with an example:",
      "points": 15,
      "pairs": [
        { "id": "p1", "left": "Cutting", "right": "Scalpel" },
        { "id": "p2", "left": "Clamping", "right": "Artery Forceps" },
        { "id": "p3", "left": "Exposing", "right": "Retractors" },
        { "id": "p4", "left": "Holding", "right": "Babcock's" }
      ],
      "explanation": "Scalpel cuts; Artery forceps clamp vessels; Retractors expose; Babcock's hold tissue."
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "question": "Which of the following is a Natural Absorbable suture?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Silk", "isCorrect": false },
        { "id": "b", "text": "Chromic Catgut", "isCorrect": true },
        { "id": "c", "text": "Nylon", "isCorrect": false },
        { "id": "d", "text": "Vicryl", "isCorrect": false }
      ],
      "explanation": "Catgut is natural and absorbable. Silk is natural non-absorbable. Nylon is synthetic non-absorbable. Vicryl is synthetic absorbable."
    },
    {
      "id": "q3",
      "type": "fill-blank",
      "question": "Suture size __b1__ is larger in diameter than suture size 2/0.",
      "points": 10,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["1", "0", "one", "zero"], "caseSensitive": false }
      ],
      "explanation": "Sizes 0 and 1 are larger than 2/0. (USP sizing: 1 > 0 > 2/0 > 3/0)."
    },
    {
      "id": "q4",
      "type": "true-false",
      "question": "If a swab bundle is found to be incorrect during the initial count, the nurse should add a loose swab to correct the number.",
      "points": 10,
      "correctAnswer": false,
      "explanation": "False. The ENTIRE incorrect bundle must be removed from the theatre to prevent confusion."
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "question": "Which type of needle causes less damage and is used on delicate tissues like the intestine?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Cutting needle", "isCorrect": false },
        { "id": "b", "text": "Round bodied needle", "isCorrect": true },
        { "id": "c", "text": "Straight needle", "isCorrect": false },
        { "id": "d", "text": "Traumatic needle", "isCorrect": false }
      ],
      "explanation": "Round bodied needles puncture rather than cut, making them safer for delicate tissues."
    },
    {
      "id": "q6",
      "type": "ordering",
      "question": "Arrange the steps for handling a lost swab in the correct order:",
      "points": 20,
      "items": [
        { "id": "i1", "text": "Inform surgeon & Recount", "correctPosition": 1 },
        { "id": "i2", "text": "Search cavity and theatre", "correctPosition": 2 },
        { "id": "i3", "text": "Take X-Ray", "correctPosition": 3 },
        { "id": "i4", "text": "Write incident statement", "correctPosition": 4 }
      ],
      "explanation": "Inform -> Search -> X-Ray -> Document."
    },
    {
      "id": "q7",
      "type": "multiple-select",
      "question": "When must swab counts be performed intra-operatively? (Select all that apply)",
      "points": 15,
      "options": [
        { "id": "a", "text": "Before peritoneum closure", "isCorrect": true },
        { "id": "b", "text": "Before fascia closure", "isCorrect": true },
        { "id": "c", "text": "Before skin suturing", "isCorrect": true },
        { "id": "d", "text": "Every 10 minutes", "isCorrect": false }
      ],
      "explanation": "Counts are done before closing peritoneum, fascia, and skin."
    },
    {
      "id": "q8",
      "type": "short-answer",
      "question": "What feature must all surgical swabs possess to be detectable if lost inside a patient?",
      "points": 10,
      "keywords": ["radio", "opaque", "x-ray", "marker", "raytec"],
      "minKeywords": 1,
      "modelAnswer": "They must have a radio-opaque marker (or X-ray detectable thread).",
      "explanation": "Radio-opaque markers allow swabs to be seen on an X-ray."
    }
  ]
});