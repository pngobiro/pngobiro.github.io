registerQuiz("topic-08-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-08-quiz",
  "metadata": {
    "title": "Disaster Management Quiz",
    "description": "Test your knowledge of hazards, risk calculation, and the 5-R strategy.",
    "topicId": "topic-08",
    "difficulty": "intermediate",
    "estimatedTime": 10,
    "passingScore": 70,
    "createdAt": "2026-01-20T10:00:00Z",
    "updatedAt": "2026-01-20T10:00:00Z",
    "tags": ["disaster", "risk", "mitigation"]
  },
  "questions": [
    {
      "id": "q1-t8",
      "type": "fill-blank",
      "question": "The formula for Risk is: Risk = __vulnerability__ x __hazard__.",
      "points": 2,
      "blanks": [
        { "id": "vulnerability", "acceptedAnswers": ["vulnerability"] },
        { "id": "hazard", "acceptedAnswers": ["hazard"] }
      ],
      "explanation": "Risk is a function of Vulnerability and Hazard."
    },
    {
      "id": "q2-t8",
      "type": "multiple-choice",
      "question": "Which of the following is considered a 'Hydro-meteorological' hazard?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "Earthquake", "isCorrect": false },
        { "id": "opt2", "text": "Flood", "isCorrect": true },
        { "id": "opt3", "text": "Volcano", "isCorrect": false },
        { "id": "opt4", "text": "Industrial accident", "isCorrect": false }
      ],
      "explanation": "Floods, droughts, and cyclones are water/climate related (hydro-meteorological)."
    },
    {
      "id": "q3-t8",
      "type": "ordering",
      "question": "Sequence the phases of the 'Five-R Strategy' in Disaster Management.",
      "points": 3,
      "items": [
        { "id": "i1", "text": "Rescue", "correctPosition": 1 },
        { "id": "i2", "text": "Relief", "correctPosition": 2 },
        { "id": "i3", "text": "Restoration", "correctPosition": 3 },
        { "id": "i4", "text": "Rehabilitation", "correctPosition": 4 },
        { "id": "i5", "text": "Reconstruction", "correctPosition": 5 }
      ]
    },
    {
      "id": "q4-t8",
      "type": "true-false",
      "question": "Mitigation refers to measures taken BEFORE a disaster to minimize its impact.",
      "points": 1,
      "correctAnswer": true,
      "explanation": "Mitigation involves long-term measures (pre-disaster) to reduce risk and impact."
    }
  ]
});