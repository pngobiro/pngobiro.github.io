// quizzes/topic-02-quiz.js
registerQuiz("topic-02-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-02-quiz",
  "metadata": {
    "title": "Natural Family Planning Quiz",
    "description": "Assess your understanding of fertility awareness methods and LAM.",
    "topicId": "topic-02",
    "difficulty": "intermediate",
    "estimatedTime": 15,
    "passingScore": 75,
    "createdAt": "2026-01-13T00:00:00Z",
    "tags": ["NFP", "fertility", "LAM"]
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
      "id": "t2-q1",
      "type": "fill-blank",
      "question": "In the Basal Body Temperature method, a rise of __b1__ to __b2__ degrees Celsius indicates ovulation has occurred.",
      "points": 10,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["0.2"], "caseSensitive": false },
        { "id": "b2", "acceptedAnswers": ["0.5"], "caseSensitive": false }
      ],
      "explanation": "Ovulation is followed by a temperature rise of 0.2°C to 0.5°C due to progesterone production."
    },
    {
      "id": "t2-q2",
      "type": "multiple-choice",
      "question": "Which characteristic of cervical mucus indicates the 'fertile' phase?",
      "points": 5,
      "options": [
        { "id": "opt1", "text": "Sticky and opaque", "isCorrect": false },
        { "id": "opt2", "text": "Scanty and thick", "isCorrect": false },
        { "id": "opt3", "text": "Slippery, stretchy, and clear", "isCorrect": true },
        { "id": "opt4", "text": "Dry and crumbly", "isCorrect": false }
      ],
      "explanation": "During the fertile phase (under estrogen influence), mucus becomes profuse, slippery, stretchy (like raw egg white), and clear."
    },
    {
      "id": "t2-q3",
      "type": "ordering",
      "question": "Place the phases of the menstrual cycle in the correct chronological order:",
      "points": 10,
      "items": [
        { "id": "ph1", "text": "Menstrual Phase", "correctPosition": 1 },
        { "id": "ph2", "text": "Proliferative Phase", "correctPosition": 2 },
        { "id": "ph3", "text": "Ovulation", "correctPosition": 3 },
        { "id": "ph4", "text": "Secretory (Luteal) Phase", "correctPosition": 4 }
      ],
      "explanation": "The cycle starts with Menstruation, followed by the Proliferative phase (follicular), Ovulation, and finally the Secretory (luteal) phase."
    },
    {
      "id": "t2-q4",
      "type": "multiple-select",
      "question": "Select all criteria required for the Lactational Amenorrhoea Method (LAM) to be effective:",
      "points": 10,
      "options": [
        { "id": "opt1", "text": "Baby is less than 6 months old", "isCorrect": true },
        { "id": "opt2", "text": "Mother is fully breastfeeding (day and night)", "isCorrect": true },
        { "id": "opt3", "text": "Mother has had her first menstrual period", "isCorrect": false },
        { "id": "opt4", "text": "Mother is amenorrhoeic (no menses)", "isCorrect": true },
        { "id": "opt5", "text": "Baby is supplemented with formula once a day", "isCorrect": false }
      ],
      "explanation": "LAM requires: Baby < 6 months, Amenorrhea (no menses), and Full breastfeeding (no supplements, on demand)."
    },
    {
      "id": "t2-q5",
      "type": "true-false",
      "question": "The sperm can live in the woman's reproductive tract for up to 3 days.",
      "points": 5,
      "correctAnswer": true,
      "explanation": "NFP relies on the fact that sperm can survive and retain fertilizing capacity for up to 3 days in the reproductive tract."
    }
  ]
});