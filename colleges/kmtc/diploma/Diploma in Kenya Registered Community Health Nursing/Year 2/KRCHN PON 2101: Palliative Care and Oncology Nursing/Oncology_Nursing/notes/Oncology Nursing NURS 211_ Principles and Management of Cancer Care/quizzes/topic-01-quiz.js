registerQuiz("topic-01-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-01-quiz",
  "metadata": {
    "title": "Immune System & Cancer Basics",
    "description": "Test your knowledge on innate vs. adaptive immunity, cancer terminology, and staging.",
    "topicId": "topic-01-basics",
    "difficulty": "beginner",
    "estimatedTime": 5,
    "passingScore": 70,
    "createdAt": "2025-12-27T12:00:00Z",
    "tags": ["immunity", "cancer-staging", "terminology"]
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
      "id": "q1",
      "type": "matching",
      "question": "Match the immune cell to its classification:",
      "points": 10,
      "pairs": [
        { "id": "p1", "left": "Neutrophils", "right": "Innate Immunity" },
        { "id": "p2", "left": "T Lymphocytes", "right": "Adaptive (Cell-Mediated) Immunity" },
        { "id": "p3", "left": "B Lymphocytes", "right": "Adaptive (Humoral) Immunity" },
        { "id": "p4", "left": "Natural Killer (NK) Cells", "right": "Innate Immunity" }
      ]
    },
    {
      "id": "q2",
      "type": "fill-blank",
      "question": "A benign tumor is __b1__, whereas a malignant tumor is __b2__.",
      "points": 10,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["not cancerous", "non-cancerous", "safe"], "caseSensitive": false },
        { "id": "b2", "acceptedAnswers": ["cancerous", "cancer"], "caseSensitive": false }
      ],
      "explanation": "Benign tumors do not spread; malignant tumors are cancerous and can metastasize."
    },
    {
      "id": "q3",
      "type": "multiple-choice",
      "question": "Which term refers to immature white blood cells found in abundance in leukemia?",
      "points": 5,
      "options": [
        { "id": "a", "text": "Platelets", "isCorrect": false },
        { "id": "b", "text": "Blasts", "isCorrect": true },
        { "id": "c", "text": "Macrophages", "isCorrect": false },
        { "id": "d", "text": "Antibodies", "isCorrect": false }
      ],
      "explanation": "'Blasts' are immature precursor cells that overcrowd the bone marrow in leukemia."
    },
    {
      "id": "q4",
      "type": "ordering",
      "question": "Arrange the cancer stages in order of severity (Least to Most):",
      "points": 10,
      "items": [
        { "id": "i1", "text": "Stage 1: Localized mass, no spread", "correctPosition": 1 },
        { "id": "i2", "text": "Stage 2: Affects nearby tissue, lymph nodes involved", "correctPosition": 2 },
        { "id": "i3", "text": "Stage 3: Regional spread to distant lymph nodes", "correctPosition": 3 },
        { "id": "i4", "text": "Stage 4: Distant spread (metastasis) to other organs", "correctPosition": 4 }
      ]
    },
    {
      "id": "q5",
      "type": "multiple-select",
      "question": "Which of the following suffixes indicates the tissue of origin correctly? (Select all that apply)",
      "points": 5,
      "options": [
        { "id": "a", "text": "-lymphoma (Lymphoid tissue)", "isCorrect": true },
        { "id": "b", "text": "-sarcoma (Epithelial surface)", "isCorrect": false },
        { "id": "c", "text": "-carcinoma (Epithelial surface)", "isCorrect": true },
        { "id": "d", "text": "-myeloma (Myeloid/Bone marrow tissue)", "isCorrect": true }
      ],
      "explanation": "Sarcoma arises from connective tissue, not epithelial. Carcinoma arises from epithelium."
    }
  ]
});