// quizzes/topic-03-quiz.js
registerQuiz("topic-03-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-03-quiz",
  "metadata": {
    "title": "Hormonal Contraceptives Quiz",
    "description": "Test your knowledge of COCs, POPs, Injectables, and Implants.",
    "topicId": "topic-03",
    "difficulty": "intermediate",
    "estimatedTime": 15,
    "passingScore": 80,
    "createdAt": "2026-01-13T00:00:00Z",
    "tags": ["hormonal", "pills", "injections"]
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
      "id": "t3-q1",
      "type": "multiple-select",
      "question": "Which of the following are mechanisms of action for Combined Oral Contraceptives? (Select all that apply)",
      "points": 10,
      "options": [
        { "id": "opt1", "text": "Inhibits ovulation", "isCorrect": true },
        { "id": "opt2", "text": "Thickens cervical mucus", "isCorrect": true },
        { "id": "opt3", "text": "Makes endometrium hostile to implantation", "isCorrect": true },
        { "id": "opt4", "text": "Kills sperm on contact", "isCorrect": false }
      ],
      "explanation": "COCs work by inhibiting ovulation (suppressing FSH), thickening mucus to block sperm, and altering the endometrium. They are not spermicidal."
    },
    {
      "id": "t3-q2",
      "type": "fill-blank",
      "question": "Depo Provera (DMPA) is an injectable contraceptive given every __b1__ months.",
      "points": 10,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["3", "three"], "caseSensitive": false }
      ],
      "explanation": "Depo Provera is administered every 3 months (12 weeks)."
    },
    {
      "id": "t3-q3",
      "type": "multiple-choice",
      "question": "Which client is a suitable candidate for Progestin Only Pills (POPs) but NOT Combined Oral Contraceptives (COCs)?",
      "points": 5,
      "options": [
        { "id": "opt1", "text": "A woman with active liver disease", "isCorrect": false },
        { "id": "opt2", "text": "A breastfeeding mother 6 weeks postpartum", "isCorrect": true },
        { "id": "opt3", "text": "A woman who is pregnant", "isCorrect": false },
        { "id": "opt4", "text": "A woman with unexplained vaginal bleeding", "isCorrect": false }
      ],
      "explanation": "Breastfeeding mothers can use POPs after 6 weeks as they don't suppress lactation. COCs contain estrogen which may reduce milk supply."
    },
    {
      "id": "t3-q4",
      "type": "true-false",
      "question": "A woman who misses one Combined Oral Contraceptive pill should discard the pack and start a new one.",
      "points": 5,
      "correctAnswer": false,
      "explanation": "If one pill is missed, she should take it as soon as remembered (even if taking two at once) and continue the pack."
    },
    {
      "id": "t3-q5",
      "type": "multiple-choice",
      "question": "What is the effective duration of the Norplant/Jadelle implant?",
      "points": 5,
      "options": [
        { "id": "opt1", "text": "3 years", "isCorrect": false },
        { "id": "opt2", "text": "5 years", "isCorrect": true },
        { "id": "opt3", "text": "10 years", "isCorrect": false },
        { "id": "opt4", "text": "12 months", "isCorrect": false }
      ],
      "explanation": "Implants generally offer continuous long-term protection for 5 years."
    }
  ]
});