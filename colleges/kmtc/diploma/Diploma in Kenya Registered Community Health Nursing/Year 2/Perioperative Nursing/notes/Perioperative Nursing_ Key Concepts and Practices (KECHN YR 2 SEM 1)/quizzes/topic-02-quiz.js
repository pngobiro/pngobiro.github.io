registerQuiz("topic-02-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-02-quiz",
  "metadata": {
    "title": "Preoperative Care Quiz",
    "description": "Assess your understanding of patient preparation, consent, and surgical classifications.",
    "topicId": "topic-02",
    "difficulty": "intermediate",
    "estimatedTime": 10,
    "passingScore": 75,
    "createdAt": "2025-12-29T12:00:00Z"
  },
  "questions": [
    {
      "id": "q1",
      "type": "fill-blank",
      "question": "Patients are typically required to observe 'Nil by Mouth' for __b1__ hours before an operation.",
      "points": 10,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["six", "6"], "caseSensitive": false }
      ],
      "explanation": "Fasting usually starts six hours before the operation to prevent aspiration."
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "question": "Which type of surgery is performed to remove a diseased tissue or organ, such as a cancerous tumor?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Palliative", "isCorrect": false },
        { "id": "b", "text": "Curative", "isCorrect": true },
        { "id": "c", "text": "Restorative", "isCorrect": false },
        { "id": "d", "text": "Diagnostic", "isCorrect": false }
      ],
      "explanation": "Curative surgery is performed to remove disease (e.g., cancer) from the body."
    },
    {
      "id": "q3",
      "type": "true-false",
      "question": "In Kenya, a person under the age of 18 can legally sign their own informed consent form for surgery.",
      "points": 5,
      "correctAnswer": false,
      "explanation": "False. Those under 18 are not legally bound to sign; consent must be signed by a parent or guardian."
    },
    {
      "id": "q4",
      "type": "matching",
      "question": "Match the purpose of surgery with its definition:",
      "points": 20,
      "pairs": [
        { "id": "p1", "left": "Palliative", "right": "Alleviate symptoms without curing" },
        { "id": "p2", "left": "Diagnostic", "right": "Determine nature of disease (e.g., biopsy)" },
        { "id": "p3", "left": "Restorative", "right": "Improve appearance or function" },
        { "id": "p4", "left": "Ablative", "right": "Destroy abnormal tissue (e.g., cardiac pathway)" }
      ],
      "explanation": "Palliative relieves pain; Diagnostic identifies disease; Restorative improves function/look; Ablative destroys tissue."
    },
    {
      "id": "q5",
      "type": "multiple-select",
      "question": "Which of the following are key variables affecting surgical outcomes? (Select all that apply)",
      "points": 15,
      "options": [
        { "id": "a", "text": "Age", "isCorrect": true },
        { "id": "b", "text": "Nutritional Status", "isCorrect": true },
        { "id": "c", "text": "Fluid Balance", "isCorrect": true },
        { "id": "d", "text": "Eye Color", "isCorrect": false }
      ],
      "explanation": "Age, nutrition, and fluid balance are critical physiological variables. Eye color does not affect surgical outcome."
    },
    {
      "id": "q6",
      "type": "ordering",
      "question": "Arrange the steps of preoperative skin preparation in the correct logical order:",
      "points": 15,
      "items": [
        { "id": "i1", "text": "Shave the site", "correctPosition": 1 },
        { "id": "i2", "text": "Clean with warm soapy water", "correctPosition": 2 },
        { "id": "i3", "text": "Apply antiseptic", "correctPosition": 3 }
      ],
      "explanation": "The site is typically shaved, then cleaned to remove debris/bacteria, and finally treated with antiseptic."
    },
    {
      "id": "q7",
      "type": "short-answer",
      "question": "Why should a patient give up smoking at least 48 hours before surgery?",
      "points": 15,
      "keywords": ["carboxyl", "haemoglobin", "hemoglobin", "reduce", "oxygen"],
      "minKeywords": 2,
      "modelAnswer": "To reduce carboxyl haemoglobin levels in the blood, improving oxygen carrying capacity.",
      "explanation": "Smoking increases carboxyl haemoglobin, which reduces the blood's ability to carry oxygen. Quitting 48h prior helps reduce this."
    }
  ]
});