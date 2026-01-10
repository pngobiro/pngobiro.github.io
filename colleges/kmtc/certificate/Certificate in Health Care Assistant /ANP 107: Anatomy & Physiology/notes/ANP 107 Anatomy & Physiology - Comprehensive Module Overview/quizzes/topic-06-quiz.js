registerQuiz("topic-06-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-06-quiz",
  "metadata": {
    "title": "Reproduction & Development Quiz",
    "description": "Test your knowledge on reproductive systems, genetics, and the menstrual cycle.",
    "topicId": "topic-06-reproduction",
    "difficulty": "intermediate",
    "estimatedTime": 15,
    "passingScore": 70,
    "createdAt": "2022-05-20T00:00:00Z"
  },
  "questions": [
    {
      "id": "q1",
      "type": "matching",
      "question": "Match the genetic term with its definition:",
      "points": 10,
      "pairs": [
        { "id": "p1", "left": "Genotype", "right": "Genetic constitution (e.g., TT)" },
        { "id": "p2", "left": "Phenotype", "right": "Outward physical expression" },
        { "id": "p3", "left": "Homozygous", "right": "Two identical alleles" },
        { "id": "p4", "left": "Heterozygous", "right": "Two different alleles" }
      ]
    },
    {
      "id": "q2",
      "type": "fill-blank",
      "question": "Ovulation typically occurs on day __b1__ of a 28-day menstrual cycle.",
      "points": 10,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["14", "fourteen"], "caseSensitive": false }
      ],
      "explanation": "Ovulation, the release of the oocyte, usually happens around day 14 triggered by an LH surge."
    },
    {
      "id": "q3",
      "type": "multiple-choice",
      "question": "Which male reproductive organ produces testosterone and sperm?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Prostate Gland", "isCorrect": false },
        { "id": "b", "text": "Epididymis", "isCorrect": false },
        { "id": "c", "text": "Testicles (Testes)", "isCorrect": true },
        { "id": "d", "text": "Vas Deferens", "isCorrect": false }
      ]
    },
    {
      "id": "q4",
      "type": "multiple-choice",
      "question": "Where does fertilization typically take place?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Uterus", "isCorrect": false },
        { "id": "b", "text": "Ovary", "isCorrect": false },
        { "id": "c", "text": "Vagina", "isCorrect": false },
        { "id": "d", "text": "Fallopian Tube (Ampulla)", "isCorrect": true }
      ],
      "explanation": "Fertilization occurs in the ampulla of the uterine (fallopian) tube before the embryo moves to the uterus for implantation."
    }
  ]
});