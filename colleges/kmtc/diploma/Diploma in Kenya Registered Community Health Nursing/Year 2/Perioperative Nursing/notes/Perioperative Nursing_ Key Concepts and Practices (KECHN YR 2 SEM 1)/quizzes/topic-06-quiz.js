registerQuiz("topic-06-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-06-quiz",
  "metadata": {
    "title": "Theatre Design & Safety Quiz",
    "description": "Assess your knowledge of operating room zoning, safety features, and environmental standards.",
    "topicId": "topic-06",
    "difficulty": "beginner",
    "estimatedTime": 8,
    "passingScore": 80,
    "createdAt": "2025-12-29T12:00:00Z"
  },
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "question": "What is the standard measurement for an operating theatre?",
      "points": 10,
      "options": [
        { "id": "a", "text": "10 x 10 x 10 ft", "isCorrect": false },
        { "id": "b", "text": "20 x 20 x 10 ft", "isCorrect": true },
        { "id": "c", "text": "30 x 30 x 12 ft", "isCorrect": false },
        { "id": "d", "text": "15 x 15 x 8 ft", "isCorrect": false }
      ],
      "explanation": "The standard size is 20ft x 20ft x 10ft (400 sq.ft)."
    },
    {
      "id": "q2",
      "type": "fill-blank",
      "question": "The relative humidity in the operating theatre should be maintained between __b1__ percent.",
      "points": 10,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["50-55", "50 to 55", "50 - 55"], "caseSensitive": false }
      ],
      "explanation": "50-55% humidity prevents static electricity and dehydration of exposed tissues."
    },
    {
      "id": "q3",
      "type": "matching",
      "question": "Match the theatre zone with its requirements:",
      "points": 15,
      "pairs": [
        { "id": "p1", "left": "Unrestricted Area", "right": "Street clothes allowed (e.g., Lounge)" },
        { "id": "p2", "left": "Semi-restricted Area", "right": "Surgical attire and caps required" },
        { "id": "p3", "left": "Restricted Area", "right": "Masks, caps, and surgical attire mandatory" }
      ],
      "explanation": "Unrestricted=Street clothes; Semi-restricted=Scrubs+Caps; Restricted=Masks mandatory."
    },
    {
      "id": "q4",
      "type": "true-false",
      "question": "Operating theatre floors should be made of antistatic materials like terrazzo.",
      "points": 5,
      "correctAnswer": true,
      "explanation": "Antistatic floors prevent spark generation which could ignite flammable anaesthetic gases."
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "question": "Why are operating room walls typically painted a pastel colour like baby blue?",
      "points": 10,
      "options": [
        { "id": "a", "text": "To look nice", "isCorrect": false },
        { "id": "b", "text": "To reduce glare", "isCorrect": true },
        { "id": "c", "text": "To camouflage blood", "isCorrect": false },
        { "id": "d", "text": "To reflect heat", "isCorrect": false }
      ],
      "explanation": "Pastel colours reduce glare from the bright operating lights."
    },
    {
      "id": "q6",
      "type": "short-answer",
      "question": "What is the 'Cardinal Rule' of theatre traffic flow design?",
      "points": 15,
      "keywords": ["operated", "un-operated", "meet", "patient", "cross"],
      "minKeywords": 2,
      "modelAnswer": "Operated patients should not meet with un-operated patients.",
      "explanation": "Separating clean (un-operated) and dirty (operated) traffic prevents cross-contamination."
    }
  ]
});