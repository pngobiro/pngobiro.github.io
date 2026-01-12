// quizzes/topic-01-quiz.js
registerQuiz("topic-01-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-01-quiz",
  "metadata": {
    "title": "Principles & Assessment Quiz",
    "description": "Test your knowledge on family planning benefits, counseling, and patient assessment.",
    "topicId": "topic-01",
    "difficulty": "beginner",
    "estimatedTime": 10,
    "passingScore": 80,
    "createdAt": "2026-01-13T00:00:00Z",
    "tags": ["counseling", "assessment", "intro"]
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
      "id": "t1-q1",
      "type": "ordering",
      "question": "Arrange the steps of the GATHER counseling technique in the correct order:",
      "points": 10,
      "items": [
        { "id": "g", "text": "Greet", "correctPosition": 1 },
        { "id": "a", "text": "Ask", "correctPosition": 2 },
        { "id": "t", "text": "Tell", "correctPosition": 3 },
        { "id": "h", "text": "Help", "correctPosition": 4 },
        { "id": "e", "text": "Explain", "correctPosition": 5 },
        { "id": "r", "text": "Return", "correctPosition": 6 }
      ],
      "explanation": "The GATHER acronym stands for: Greet, Ask, Tell, Help, Explain, and Return."
    },
    {
      "id": "t1-q2",
      "type": "multiple-select",
      "question": "Which of the following conditions allow a provider to be reasonably sure a woman is NOT pregnant? (Select all that apply)",
      "points": 10,
      "options": [
        { "id": "opt1", "text": "She has had no intercourse since her last menses", "isCorrect": true },
        { "id": "opt2", "text": "She is within 7 days after the start of her menses", "isCorrect": true },
        { "id": "opt3", "text": "She is breastfeeding a 9-month-old baby", "isCorrect": false },
        { "id": "opt4", "text": "She is within 4 weeks postpartum (not breastfeeding)", "isCorrect": true },
        { "id": "opt5", "text": "She is 10 days post-abortion", "isCorrect": false }
      ],
      "explanation": "Pregnancy is unlikely if: no intercourse since LMP, within 7 days of menses start, within 4 weeks postpartum (non-lactating), within 7 days post-abortion, or fully breastfeeding <6 months amenorrhoeic."
    },
    {
      "id": "t1-q3",
      "type": "matching",
      "question": "Match the Pap Smear classification to its description:",
      "points": 10,
      "pairs": [
        { "id": "p1", "left": "Class I", "right": "Normal cells" },
        { "id": "p2", "left": "Class II", "right": "Minor infections (e.g., Moniliasis)" },
        { "id": "p3", "left": "Class III", "right": "Suspicious of malignancy" },
        { "id": "p4", "left": "Class V", "right": "Numerous malignant cells (definite cancer)" }
      ],
      "explanation": "Class I is normal. Class II is minor infection. Class III is suspicious (repeat in 3 months). Class IV/V indicate cancer cells."
    },
    {
      "id": "t1-q4",
      "type": "image-based",
      "question": "Which part of the breast examination is being demonstrated in this image?",
      "points": 5,
      "media": {
        "type": "image",
        "url": "../assets/images/image-20260112-3f92b4c3.jpeg",
        "alt": "Woman inspecting breasts in mirror",
        "caption": "Breast Examination Step"
      },
      "options": [
        { "id": "opt1", "text": "Palpation (Feeling for lumps)", "isCorrect": false },
        { "id": "opt2", "text": "Inspection (Visual check)", "isCorrect": true },
        { "id": "opt3", "text": "Expression (Checking discharge)", "isCorrect": false }
      ],
      "explanation": "The image shows inspection, where the woman looks for changes in size, shape, color, or dimpling while in different positions."
    },
    {
      "id": "t1-q5",
      "type": "multiple-choice",
      "question": "Ideally, what is the optimum spacing between births for the health of the child?",
      "points": 5,
      "options": [
        { "id": "opt1", "text": "12 to 18 months", "isCorrect": false },
        { "id": "opt2", "text": "18 to 24 months", "isCorrect": false },
        { "id": "opt3", "text": "27 to 38 months", "isCorrect": true },
        { "id": "opt4", "text": "48 to 60 months", "isCorrect": false }
      ],
      "explanation": "Children are healthier when the spacing between births is 27 to 38 months, allowing the mother time to nurse and care for the infant."
    }
  ]
});