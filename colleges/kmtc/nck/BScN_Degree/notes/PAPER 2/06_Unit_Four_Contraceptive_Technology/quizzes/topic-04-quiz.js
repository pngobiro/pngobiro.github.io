// quizzes/topic-04-quiz.js
registerQuiz("topic-04-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-04-quiz",
  "metadata": {
    "title": "Other Methods Quiz",
    "description": "Evaluate your knowledge on IUCDs, VSC, and Barrier methods.",
    "topicId": "topic-04",
    "difficulty": "intermediate",
    "estimatedTime": 15,
    "passingScore": 80,
    "createdAt": "2026-01-13T00:00:00Z",
    "tags": ["IUCD", "VSC", "barrier"]
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
      "id": "t4-q1",
      "type": "matching",
      "question": "Match the IUCD mechanism (SOPIE) letter to its meaning:",
      "points": 10,
      "pairs": [
        { "id": "p1", "left": "S", "right": "Spermatozoa immobility" },
        { "id": "p2", "left": "O", "right": "Ovum motility increased" },
        { "id": "p3", "left": "P", "right": "Prostaglandin production" },
        { "id": "p4", "left": "I", "right": "Implantation interfered with" }
      ],
      "explanation": "SOPIE: Sperm immobility, Ovum motility, Prostaglandin, Implantation interference, Endometrial inflammation."
    },
    {
      "id": "t4-q2",
      "type": "image-based",
      "question": "Identify the contraceptive device shown in the diagram:",
      "points": 5,
      "media": {
        "type": "image",
        "url": "../assets/images/image-20260112-53ef62a3.jpeg",
        "alt": "Diagram of T-shaped device in uterus",
        "caption": "Device in Situ"
      },
      "options": [
        { "id": "opt1", "text": "Diaphragm", "isCorrect": false },
        { "id": "opt2", "text": "Intrauterine Contraceptive Device (IUCD)", "isCorrect": true },
        { "id": "opt3", "text": "Implant", "isCorrect": false },
        { "id": "opt4", "text": "Vaginal Sponge", "isCorrect": false }
      ],
      "explanation": "The image shows a T-shaped device (Copper T) located inside the uterine cavity."
    },
    {
      "id": "t4-q3",
      "type": "true-false",
      "question": "A man is immediately sterile after a vasectomy procedure.",
      "points": 5,
      "correctAnswer": false,
      "explanation": "Vasectomy is NOT effective immediately. Semen contains sperm for 3-4 months (10-15 ejaculations) post-procedure. Backup contraception is required."
    },
    {
      "id": "t4-q4",
      "type": "ordering",
      "question": "Order the steps of IUCD insertion:",
      "points": 10,
      "items": [
        { "id": "s1", "text": "Bimanual examination", "correctPosition": 1 },
        { "id": "s2", "text": "Insert speculum and visualize cervix", "correctPosition": 2 },
        { "id": "s3", "text": "Clean cervix with antiseptic", "correctPosition": 3 },
        { "id": "s4", "text": "Apply tenaculum", "correctPosition": 4 },
        { "id": "s5", "text": "Sound the uterus", "correctPosition": 5 },
        { "id": "s6", "text": "Load and insert IUCD", "correctPosition": 6 }
      ],
      "explanation": "Examination and cleaning precede stabilization (tenaculum) and measurement (sounding) before the actual insertion."
    },
    {
      "id": "t4-q5",
      "type": "multiple-choice",
      "question": "How long must a diaphragm remain in place after sexual intercourse?",
      "points": 5,
      "options": [
        { "id": "opt1", "text": "Remove immediately", "isCorrect": false },
        { "id": "opt2", "text": "1 hour", "isCorrect": false },
        { "id": "opt3", "text": "6 to 8 hours", "isCorrect": true },
        { "id": "opt4", "text": "24 hours", "isCorrect": false }
      ],
      "explanation": "To be effective, the diaphragm (and sponge) must remain in place for at least 6 hours after intercourse."
    }
  ]
});