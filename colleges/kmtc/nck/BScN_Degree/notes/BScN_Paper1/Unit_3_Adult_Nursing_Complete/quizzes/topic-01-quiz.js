registerQuiz("topic-01-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-01-quiz",
  "metadata": {
    "title": "Organisation of the Human Body",
    "description": "Assess your understanding of cell structure, tissues, body fluids, and immune response.",
    "topicId": "topic-01-organisation",
    "difficulty": "beginner",
    "estimatedTime": 15,
    "passingScore": 70,
    "createdAt": "2025-12-25T12:00:00Z"
  },
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "question": "Which cell organelle is described as the factory for the production of energy?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Ribosome", "isCorrect": false },
        { "id": "b", "text": "Mitochondria", "isCorrect": true },
        { "id": "c", "text": "Golgi body", "isCorrect": false },
        { "id": "d", "text": "Lysosome", "isCorrect": false }
      ],
      "explanation": "Mitochondria are rod-shaped structures that act as factories for the production of energy."
    },
    {
      "id": "q2",
      "type": "fill-blank",
      "question": "The movement of solute materials from a region of higher concentration to that of lower concentration via a semi-permeable membrane is called __1__.",
      "points": 10,
      "blanks": [
        { "id": "1", "acceptedAnswers": ["osmosis"], "caseSensitive": false }
      ],
      "explanation": "Osmosis involves the movement of solutes across a semi-permeable membrane following a concentration gradient."
    },
    {
      "id": "q3",
      "type": "matching",
      "question": "Match the tissue type to its primary description:",
      "points": 15,
      "pairs": [
        { "id": "p1", "left": "Epithelial Tissue", "right": "Covers and protects body parts" },
        { "id": "p2", "left": "Connective Tissue", "right": "Supports body structures" },
        { "id": "p3", "left": "Muscle Tissue", "right": "Capable of stretching and contracting" },
        { "id": "p4", "left": "Nerve Tissue", "right": "Excitable and conducts impulses" }
      ]
    },
    {
      "id": "q4",
      "type": "multiple-choice",
      "question": "Which electrolyte is the most abundant ion in the intracellular compartment?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Sodium", "isCorrect": false },
        { "id": "b", "text": "Calcium", "isCorrect": false },
        { "id": "c", "text": "Potassium", "isCorrect": true },
        { "id": "d", "text": "Magnesium", "isCorrect": false }
      ],
      "explanation": "Potassium is the most abundant intracellular ion. Sodium is the most abundant extracellular ion."
    },
    {
      "id": "q5",
      "type": "true-false",
      "question": "Respiratory Alkalosis is characterized by a carbonic acid deficit, often due to hyperventilation.",
      "points": 5,
      "correctAnswer": true,
      "explanation": "Hyperventilation blows off CO2, leading to a carbonic acid deficit and a pH above 7.5."
    },
    {
      "id": "q6",
      "type": "multiple-choice",
      "question": "Which type of immunity is acquired when an individual is injected with antibodies (serum) from another person or animal?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Active Natural Immunity", "isCorrect": false },
        { "id": "b", "text": "Active Artificial Immunity", "isCorrect": false },
        { "id": "c", "text": "Passive Natural Immunity", "isCorrect": false },
        { "id": "d", "text": "Artificial Passive Immunity", "isCorrect": true }
      ],
      "explanation": "Artificial passive immunity involves receiving pre-formed antibodies, rather than the body producing them itself."
    },
    {
      "id": "q7",
      "type": "multiple-select",
      "question": "Select the classic signs of fluid volume deficit (dehydration). Select all that apply:",
      "points": 10,
      "options": [
        { "id": "a", "text": "Acute weight loss", "isCorrect": true },
        { "id": "b", "text": "Distended neck veins", "isCorrect": false },
        { "id": "c", "text": "Decreased urine output", "isCorrect": true },
        { "id": "d", "text": "Hypotension", "isCorrect": true },
        { "id": "e", "text": "Pounding pulse", "isCorrect": false }
      ],
      "partialCredit": true,
      "explanation": "Dehydration presents with weight loss, low urine output, and hypotension. Distended veins and pounding pulse are signs of fluid excess."
    },
    {
      "id": "q8",
      "type": "short-answer",
      "question": "Which specific species of parasite is the most common cause of malaria in Kenya?",
      "points": 10,
      "keywords": ["plasmodium", "falciparum", "plasmodium falciparum"],
      "minKeywords": 1,
      "modelAnswer": "Plasmodium falciparum",
      "explanation": "Plasmodium falciparum is the most common and dangerous species causing malaria in Kenya."
    }
  ]
});