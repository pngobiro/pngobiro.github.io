registerQuiz("topic-02-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-02-quiz",
  "metadata": {
    "title": "Treatment & Safety Precautions",
    "description": "Assess your understanding of chemotherapy safety, side effects, and radiation protection.",
    "topicId": "topic-02-treatment",
    "difficulty": "intermediate",
    "estimatedTime": 5,
    "passingScore": 75,
    "createdAt": "2025-12-27T12:00:00Z",
    "tags": ["chemo", "radiation", "safety"]
  },
  "settings": {
    "shuffleQuestions": true,
    "showFeedback": "immediate"
  },
  "questions": [
    {
      "id": "q1",
      "type": "multiple-select",
      "question": "Which of the following are cardinal rules for External Radiation Protection? (Select all that apply)",
      "points": 5,
      "options": [
        { "id": "a", "text": "Maximize TIME spent with patient", "isCorrect": false },
        { "id": "b", "text": "Minimize TIME spent near source", "isCorrect": true },
        { "id": "c", "text": "Maximize DISTANCE from source", "isCorrect": true },
        { "id": "d", "text": "Use SHIELDING (e.g., lead aprons)", "isCorrect": true }
      ],
      "explanation": "The three principles are Time (minimize), Distance (maximize), and Shielding (use)."
    },
    {
      "id": "q2",
      "type": "true-false",
      "question": "A patient undergoing internal radiation therapy (brachytherapy) emits radiation and poses a risk to others.",
      "points": 5,
      "correctAnswer": true,
      "explanation": "With internal radiation, the radioactive source is inside the body, so the patient emits radiation for a period of time."
    },
    {
      "id": "q3",
      "type": "fill-blank",
      "question": "When handling hazardous chemotherapy drugs or bodily fluids, you should always wear __b1__ and wash hands with __b2__ and water.",
      "points": 10,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["gloves", "ppe"], "caseSensitive": false },
        { "id": "b2", "acceptedAnswers": ["soap"], "caseSensitive": false }
      ]
    },
    {
      "id": "q4",
      "type": "multiple-choice",
      "question": "Which side effect of chemotherapy increases the risk of bleeding?",
      "points": 5,
      "options": [
        { "id": "a", "text": "Anemia", "isCorrect": false },
        { "id": "b", "text": "Neutropenia", "isCorrect": false },
        { "id": "c", "text": "Thrombocytopenia", "isCorrect": true },
        { "id": "d", "text": "Alopecia", "isCorrect": false }
      ],
      "explanation": "Thrombocytopenia is a low platelet count, which affects blood clotting."
    },
    {
      "id": "q5",
      "type": "multiple-select",
      "question": "For a patient on home oral chemotherapy, which precautions are correct?",
      "points": 5,
      "options": [
        { "id": "a", "text": "Crush pills to make them easier to swallow", "isCorrect": false },
        { "id": "b", "text": "Wash hands before and after handling meds", "isCorrect": true },
        { "id": "c", "text": "Caregivers should wear gloves", "isCorrect": true },
        { "id": "d", "text": "Wash soiled laundry with the rest of the family's clothes", "isCorrect": false }
      ],
      "explanation": "Chemo pills should generally not be crushed (releases hazardous dust), and soiled laundry must be washed separately."
    }
  ]
});