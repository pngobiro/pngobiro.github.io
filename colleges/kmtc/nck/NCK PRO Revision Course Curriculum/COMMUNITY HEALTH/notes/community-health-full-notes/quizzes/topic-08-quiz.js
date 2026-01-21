// topic-08-quiz.js
registerQuiz("topic-08-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-08-quiz",
  "metadata": {
    "title": "Maternal & Child Health Quiz",
    "description": "Test your knowledge on immunization schedules, vaccines, and family planning.",
    "topicId": "topic-08",
    "difficulty": "advanced",
    "estimatedTime": 20,
    "passingScore": 70,
    "createdAt": "2026-01-21T00:00:00Z",
    "updatedAt": "2026-01-21T00:00:00Z",
    "tags": ["mch", "immunization", "family-planning"]
  },
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "question": "At what age is the Measles vaccine typically given in the KEPI schedule?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "9 months", "isCorrect": true },
        { "id": "opt2", "text": "Birth", "isCorrect": false },
        { "id": "opt3", "text": "6 weeks", "isCorrect": false },
        { "id": "opt4", "text": "14 weeks", "isCorrect": false }
      ],
      "explanation": "Measles vaccine is given at 9 months."
    },
    {
      "id": "q2",
      "type": "matching",
      "question": "Match the vaccine with its route of administration.",
      "points": 1,
      "pairs": [
        { "id": "p1", "left": "BCG", "right": "Intra-dermal" },
        { "id": "p2", "left": "OPV (Polio)", "right": "Oral (drops)" },
        { "id": "p3", "left": "Pentavalent (DPT-HeB-Hib)", "right": "Intramuscular (thigh)" },
        { "id": "p4", "left": "Measles", "right": "Subcutaneous (arm)" }
      ],
      "explanation": "BCG=ID, OPV=Oral, Penta=IM, Measles=Subcut."
    },
    {
      "id": "q3",
      "type": "matching",
      "question": "Match the Family Planning method with its category.",
      "points": 1,
      "pairs": [
        { "id": "p1", "left": "Withdrawal / Rhythm", "right": "Natural Method" },
        { "id": "p2", "left": "Condoms / Diaphragm", "right": "Barrier Method" },
        { "id": "p3", "left": "Pills / Implants", "right": "Hormonal Method" },
        { "id": "p4", "left": "Tubal Ligation / Vasectomy", "right": "Surgical Method" }
      ],
      "explanation": "Natural (behavioral), Barrier (physical), Hormonal (drug), Surgical (permanent)."
    },
    {
      "id": "q4",
      "type": "fill-blank",
      "question": "The Vitamin A dosage for a child aged 6-12 months is __b1__ IU.",
      "points": 1,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["100,000", "100000"], "caseSensitive": false }
      ],
      "explanation": "<6 mos: 50k; 6-12 mos: 100k; >12 mos: 200k."
    },
    {
      "id": "q5",
      "type": "ordering",
      "question": "Order the Tetanus Toxoid (TT) schedule for pregnant women.",
      "points": 1,
      "items": [
        { "id": "t1", "text": "1st dose (First contact/pregnancy)", "correctPosition": 1 },
        { "id": "t2", "text": "2nd dose (4 weeks after 1st)", "correctPosition": 2 },
        { "id": "t3", "text": "3rd dose (6 months after 2nd)", "correctPosition": 3 },
        { "id": "t4", "text": "4th dose (at least 1 year after 3rd)", "correctPosition": 4 },
        { "id": "t5", "text": "5th dose (at least 1 year after 4th)", "correctPosition": 5 }
      ],
      "explanation": "TT schedule: 1st contact -> 4wks -> 6mo -> 1yr -> 1yr."
    },
    {
      "id": "q6",
      "type": "true-false",
      "question": "BCG vaccine is given to protect against Tuberculosis.",
      "correctAnswer": true,
      "points": 1,
      "explanation": "BCG is the vaccine for Tuberculosis."
    }
  ]
});