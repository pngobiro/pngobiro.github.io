registerQuiz("topic-07-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-07-quiz",
  "metadata": {
    "title": "Surgical Team Roles Quiz",
    "description": "Test your knowledge of the roles and responsibilities of the scrub nurse, circulating nurse, and other team members.",
    "topicId": "topic-07",
    "difficulty": "intermediate",
    "estimatedTime": 8,
    "passingScore": 80,
    "createdAt": "2025-12-29T12:00:00Z"
  },
  "questions": [
    {
      "id": "q1",
      "type": "matching",
      "question": "Match the nurse role with their primary duty:",
      "points": 20,
      "pairs": [
        { "id": "p1", "left": "Scrub Nurse", "right": "Maintains sterile field, passes instruments" },
        { "id": "p2", "left": "Circulating Nurse", "right": "Coordinates outside sterile field, records counts" },
        { "id": "p3", "left": "Anaesthetic Nurse", "right": "Assists with induction and airway equipment" },
        { "id": "p4", "left": "Nurse Manager", "right": "Ensures staffing and equipment functioning" }
      ],
      "explanation": "Scrub=Sterile; Circulating=Unsterile coordinator; Anaesthetic=Airway/Induction; Manager=Admin."
    },
    {
      "id": "q2",
      "type": "true-false",
      "question": "The scrub nurse remains sterile until the patient has left the operating room.",
      "points": 5,
      "correctAnswer": true,
      "explanation": "True. The sterile field must be maintained until the procedure is completely finished and the patient leaves."
    },
    {
      "id": "q3",
      "type": "multiple-select",
      "question": "Which of the following are duties of the Circulating Nurse? (Select all that apply)",
      "points": 15,
      "options": [
        { "id": "a", "text": "Passing instruments to the surgeon", "isCorrect": false },
        { "id": "b", "text": "Tying the backs of the sterile team's gowns", "isCorrect": true },
        { "id": "c", "text": "Recording swab counts", "isCorrect": true },
        { "id": "d", "text": "Opening sterile packs for the scrub nurse", "isCorrect": true }
      ],
      "explanation": "Passing instruments is a Scrub Nurse duty. The Circulating Nurse handles unsterile tasks and documentation."
    },
    {
      "id": "q4",
      "type": "multiple-choice",
      "question": "Who is responsible for checking the patient for diathermy burns after the operation?",
      "points": 10,
      "options": [
        { "id": "a", "text": "The Surgeon", "isCorrect": false },
        { "id": "b", "text": "The Anaesthetist", "isCorrect": false },
        { "id": "c", "text": "The Circulating Nurse", "isCorrect": true },
        { "id": "d", "text": "The Sluice Room Attendant", "isCorrect": false }
      ],
      "explanation": "The Circulating Nurse removes the diathermy plate and checks the skin integrity."
    },
    {
      "id": "q5",
      "type": "fill-blank",
      "question": "The __b1__ nurse counts instruments and swabs AUDIBLY with the circulating nurse.",
      "points": 10,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["scrub"], "caseSensitive": false }
      ],
      "explanation": "The Scrub nurse initiates the audible count with the Circulating nurse."
    },
    {
      "id": "q6",
      "type": "multiple-choice",
      "question": "Which team member decontaminates and cleans instruments after use?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Scrub Nurse", "isCorrect": false },
        { "id": "b", "text": "Sluice Room Attendant", "isCorrect": true },
        { "id": "c", "text": "Nurse Manager", "isCorrect": false },
        { "id": "d", "text": "Recovery Nurse", "isCorrect": false }
      ],
      "explanation": "The Sluice Room Attendant is responsible for cleaning and decontamination."
    }
  ]
});