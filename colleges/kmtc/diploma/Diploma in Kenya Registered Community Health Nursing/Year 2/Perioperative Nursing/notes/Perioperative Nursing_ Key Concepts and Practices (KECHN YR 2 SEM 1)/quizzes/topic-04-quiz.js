registerQuiz("topic-04-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-04-quiz",
  "metadata": {
    "title": "Infection Control & PPE Quiz",
    "description": "Evaluate your knowledge of aseptic technique, scrubbing, and PPE protocols.",
    "topicId": "topic-04",
    "difficulty": "intermediate",
    "estimatedTime": 12,
    "passingScore": 80,
    "createdAt": "2025-12-29T12:00:00Z"
  },
  "questions": [
    {
      "id": "q1",
      "type": "ordering",
      "question": "Identify the correct sequence for DONNING (putting on) PPE:",
      "points": 15,
      "items": [
        { "id": "i1", "text": "Gown", "correctPosition": 1 },
        { "id": "i2", "text": "Mask or Respirator", "correctPosition": 2 },
        { "id": "i3", "text": "Goggles or Face Shield", "correctPosition": 3 },
        { "id": "i4", "text": "Gloves", "correctPosition": 4 }
      ],
      "explanation": "Gown -> Mask -> Eye Protection -> Gloves."
    },
    {
      "id": "q2",
      "type": "ordering",
      "question": "Identify the correct sequence for DOFFING (removing) PPE:",
      "points": 15,
      "items": [
        { "id": "i1", "text": "Gloves", "correctPosition": 1 },
        { "id": "i2", "text": "Face Shield or Goggles", "correctPosition": 2 },
        { "id": "i3", "text": "Gown", "correctPosition": 3 },
        { "id": "i4", "text": "Mask or Respirator", "correctPosition": 4 }
      ],
      "explanation": "Gloves (most contaminated) -> Eyes -> Gown -> Mask (last)."
    },
    {
      "id": "q3",
      "type": "true-false",
      "question": "It is acceptable to hang a used mask around your neck for later use.",
      "points": 5,
      "correctAnswer": false,
      "explanation": "Masks should not be left around the neck or put in pockets. They should be discarded after use."
    },
    {
      "id": "q4",
      "type": "multiple-choice",
      "question": "When scrubbing with 'Hibiscrub', the recommended duration is:",
      "points": 10,
      "options": [
        { "id": "a", "text": "Five minutes", "isCorrect": false },
        { "id": "b", "text": "Two minutes", "isCorrect": true },
        { "id": "c", "text": "Ten minutes", "isCorrect": false },
        { "id": "d", "text": "Thirty seconds", "isCorrect": false }
      ],
      "explanation": "Hibiscrub requires a two-minute scrub. Gamophen soap requires five minutes."
    },
    {
      "id": "q5",
      "type": "multiple-select",
      "question": "Which of the following principles of sterile field maintenance are correct? (Select all that apply)",
      "points": 15,
      "options": [
        { "id": "a", "text": "Only the top surface of a draped table is sterile", "isCorrect": true },
        { "id": "b", "text": "Sterile items below waist level are sterile", "isCorrect": false },
        { "id": "c", "text": "Edges of a sterile field are unsterile", "isCorrect": true },
        { "id": "d", "text": "If in doubt, consider it unsterile", "isCorrect": true }
      ],
      "explanation": "Items below waist level are considered unsterile. All other options are correct principles."
    },
    {
      "id": "q6",
      "type": "fill-blank",
      "question": "Sterile gowns are considered sterile in front from the chest to the level of the __b1__.",
      "points": 10,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["sterile field", "table"], "caseSensitive": false }
      ],
      "explanation": "The gown is sterile from chest to the level of the sterile field."
    },
    {
      "id": "q7",
      "type": "true-false",
      "question": "Home laundering of theatre attire is recommended to save hospital resources.",
      "points": 5,
      "correctAnswer": false,
      "explanation": "Home laundering is NOT recommended due to the risk of cross-contamination and lack of quality control."
    },
    {
      "id": "q8",
      "type": "matching",
      "question": "Match the PPE item with its primary function:",
      "points": 15,
      "pairs": [
        { "id": "p1", "left": "Mask", "right": "Protect nose/mouth from airborne pathogens" },
        { "id": "p2", "left": "Goggles", "right": "Protect eyes from splashes" },
        { "id": "p3", "left": "Lead Apron", "right": "Protect against radiation" },
        { "id": "p4", "left": "Gloves", "right": "Protect hands from fluids" }
      ],
      "explanation": "Standard PPE functions."
    }
  ]
});