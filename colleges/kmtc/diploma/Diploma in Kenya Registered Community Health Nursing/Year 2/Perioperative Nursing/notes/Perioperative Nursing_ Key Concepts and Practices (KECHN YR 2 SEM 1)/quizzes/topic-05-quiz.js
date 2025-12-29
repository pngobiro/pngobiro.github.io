registerQuiz("topic-05-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-05-quiz",
  "metadata": {
    "title": "Legal & Ethical Aspects Quiz",
    "description": "Test your understanding of bioethics, consent, and legal responsibilities in theatre.",
    "topicId": "topic-05",
    "difficulty": "advanced",
    "estimatedTime": 10,
    "passingScore": 80,
    "createdAt": "2025-12-29T12:00:00Z"
  },
  "questions": [
    {
      "id": "q1",
      "type": "matching",
      "question": "Match the bioethical principle with its definition:",
      "points": 20,
      "pairs": [
        { "id": "p1", "left": "Autonomy", "right": "Self-determination / Right to choose" },
        { "id": "p2", "left": "Beneficence", "right": "Doing good / Acting in best interest" },
        { "id": "p3", "left": "Non-maleficence", "right": "Do no harm" },
        { "id": "p4", "left": "Veracity", "right": "Truth telling" }
      ],
      "explanation": "Autonomy=Choice; Beneficence=Good; Non-maleficence=No Harm; Veracity=Truth."
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "question": "A patient is about to be induced for anesthesia when the surgeon asks a visitor to scrub in without the patient's prior knowledge. The patient looks uncomfortable. This situation primarily threatens which ethical principle?",
      "points": 15,
      "options": [
        { "id": "a", "text": "Justice", "isCorrect": false },
        { "id": "b", "text": "Autonomy", "isCorrect": true },
        { "id": "c", "text": "Beneficence", "isCorrect": false },
        { "id": "d", "text": "Fidelity", "isCorrect": false }
      ],
      "explanation": "This threatens Autonomy because the patient is put under duress and cannot freely refuse."
    },
    {
      "id": "q3",
      "type": "true-false",
      "question": "Consent for an operation should be obtained AFTER the patient has received pre-medication to ensure they are calm.",
      "points": 10,
      "correctAnswer": false,
      "explanation": "False. Pre-medication can impair reasoning. Consent MUST be obtained BEFORE pre-medication."
    },
    {
      "id": "q4",
      "type": "fill-blank",
      "question": "In Kenya, the legal age of adulthood for signing a consent form is __b1__ years.",
      "points": 10,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["18", "eighteen"], "caseSensitive": false }
      ],
      "explanation": "18 years is the legal age of adulthood in Kenya."
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "question": "Which of the following constitutes 'Negligence'?",
      "points": 10,
      "options": [
        { "id": "a", "text": "An honest clinical error that is disclosed", "isCorrect": false },
        { "id": "b", "text": "Failure to exercise care that a reasonable person would under similar circumstances", "isCorrect": true },
        { "id": "c", "text": "A known complication of surgery occurring despite proper care", "isCorrect": false },
        { "id": "d", "text": "Refusing to proceed with a surgery due to lack of experience", "isCorrect": false }
      ],
      "explanation": "Negligence is the failure to exercise reasonable care."
    },
    {
      "id": "q6",
      "type": "multiple-select",
      "question": "Which criteria must be met for a consent to be valid? (Select all that apply)",
      "points": 15,
      "options": [
        { "id": "a", "text": "Must be voluntary (not coerced)", "isCorrect": true },
        { "id": "b", "text": "Must be informed (risks explained)", "isCorrect": true },
        { "id": "c", "text": "Must be signed by a relative regardless of patient age", "isCorrect": false },
        { "id": "d", "text": "Must be given by a person of sound mind", "isCorrect": true }
      ],
      "explanation": "Consent must be voluntary, informed, and by a competent person. Relatives only sign for minors or incapacitated patients."
    }
  ]
});