registerQuiz("topic-02-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-02-quiz",
  "metadata": {
    "title": "Health Services Organization Quiz",
    "description": "Assess your knowledge of the Kenyan health system structure and facility levels.",
    "topicId": "topic-02",
    "difficulty": "intermediate",
    "estimatedTime": 10,
    "passingScore": 70,
    "createdAt": "2026-01-20T10:00:00Z",
    "updatedAt": "2026-01-20T10:00:00Z",
    "tags": ["health-system", "levels", "referral"]
  },
  "questions": [
    {
      "id": "q1-t2",
      "type": "ordering",
      "question": "Order the levels of the Kenya health system from Level 1 (Lowest) to Level 6 (Highest).",
      "points": 3,
      "items": [
        { "id": "i1", "text": "Community Level", "correctPosition": 1 },
        { "id": "i2", "text": "Dispensaries", "correctPosition": 2 },
        { "id": "i3", "text": "Health Centres", "correctPosition": 3 },
        { "id": "i4", "text": "District Hospitals", "correctPosition": 4 },
        { "id": "i5", "text": "Provincial Hospitals", "correctPosition": 5 },
        { "id": "i6", "text": "National Referral Hospitals", "correctPosition": 6 }
      ]
    },
    {
      "id": "q2-t2",
      "type": "multiple-choice",
      "question": "Which level of facility is staffed primarily by enrolled nurses and public health technicians and serves as the first point of contact?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "Level 3 (Health Centres)", "isCorrect": false },
        { "id": "opt2", "text": "Level 2 (Dispensaries)", "isCorrect": true },
        { "id": "opt3", "text": "Level 4 (District Hospitals)", "isCorrect": false },
        { "id": "opt4", "text": "Level 1 (Community)", "isCorrect": false }
      ],
      "explanation": "Dispensaries (Level 2) are the lowest facility level and first point of contact, staffed by enrolled nurses."
    },
    {
      "id": "q3-t2",
      "type": "multiple-select",
      "question": "Which of the following are functions of National Referral Hospitals (Level 6)? (Select all that apply)",
      "points": 2,
      "options": [
        { "id": "opt1", "text": "Provide sophisticated diagnostic and therapeutic services", "isCorrect": true },
        { "id": "opt2", "text": "Act as Centres of Excellence", "isCorrect": true },
        { "id": "opt3", "text": "Coordinate community health workers directly", "isCorrect": false },
        { "id": "opt4", "text": "Support training of health workers", "isCorrect": true }
      ],
      "explanation": "National Referral Hospitals provide sophisticated services, training, and act as centres of excellence."
    },
    {
      "id": "q4-t2",
      "type": "true-false",
      "question": "The District Medical Officer of Health (DMOH) is responsible for the management of healthcare at the Provincial level.",
      "points": 1,
      "correctAnswer": false,
      "explanation": "The DMOH manages healthcare at the District level, not the Provincial level."
    }
  ]
});