registerQuiz("topic-03-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-03-quiz",
  "metadata": {
    "title": "Competencies & Phases Quiz",
    "description": "Test your knowledge of the core competency domains and the three perioperative phases.",
    "topicId": "topic-03",
    "difficulty": "intermediate",
    "estimatedTime": 8,
    "passingScore": 75,
    "createdAt": "2025-12-29T12:00:00Z"
  },
  "questions": [
    {
      "id": "q1",
      "type": "ordering",
      "question": "Place the perioperative phases in the correct chronological order:",
      "points": 15,
      "items": [
        { "id": "i1", "text": "Pre-operative", "correctPosition": 1 },
        { "id": "i2", "text": "Intra-operative", "correctPosition": 2 },
        { "id": "i3", "text": "Post-operative", "correctPosition": 3 }
      ],
      "explanation": "The sequence is Pre-operative (before), Intra-operative (during), and Post-operative (after)."
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "question": "Which core competency domain involves knowledge of anatomy, physiology, and aseptic technique?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Domain 1: Professional/Legal", "isCorrect": false },
        { "id": "b", "text": "Domain 2: Perioperative Care & Practice", "isCorrect": true },
        { "id": "c", "text": "Domain 3: Communication", "isCorrect": false },
        { "id": "d", "text": "Domain 4: Leadership", "isCorrect": false }
      ],
      "explanation": "Domain 2 covers the clinical and technical aspects of care, including anatomy and asepsis."
    },
    {
      "id": "q3",
      "type": "fill-blank",
      "question": "The __b1__ phase begins when the client arrives in the surgical area and lasts until admission to the PACU.",
      "points": 10,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["intra-operative", "intra operative", "intraoperative"], "caseSensitive": false }
      ],
      "explanation": "The Intra-operative phase covers the actual surgical procedure time."
    },
    {
      "id": "q4",
      "type": "multiple-select",
      "question": "Which of the following are components of Core Domain 1 (Professional, Legal, Ethical Practice)? (Select all that apply)",
      "points": 15,
      "options": [
        { "id": "a", "text": "Legislation", "isCorrect": true },
        { "id": "b", "text": "Professional Ethics", "isCorrect": true },
        { "id": "c", "text": "Surgical Techniques", "isCorrect": false },
        { "id": "d", "text": "Perioperative Philosophy", "isCorrect": true }
      ],
      "explanation": "Legislation, Ethics, and Philosophy fall under Domain 1. Surgical techniques fall under Domain 2."
    },
    {
      "id": "q5",
      "type": "true-false",
      "question": "The main goal of preoperative client teaching regarding leg exercises is to prevent deep vein thrombosis (DVT).",
      "points": 5,
      "correctAnswer": true,
      "explanation": "Leg exercises promote venous return and prevent stasis, reducing the risk of DVT."
    },
    {
      "id": "q6",
      "type": "matching",
      "question": "Match the core domain with its general aim:",
      "points": 20,
      "pairs": [
        { "id": "p1", "left": "Domain 3 (Communication)", "right": "Establish efficient relationships with patient/team" },
        { "id": "p2", "left": "Domain 4 (Leadership)", "right": "Manage groups and organizational resources" },
        { "id": "p3", "left": "Domain 5 (Education)", "right": "Develop enquiring mind and use research" }
      ],
      "explanation": "Domain 3 focuses on interaction; Domain 4 on management; Domain 5 on professional growth and research."
    }
  ]
});