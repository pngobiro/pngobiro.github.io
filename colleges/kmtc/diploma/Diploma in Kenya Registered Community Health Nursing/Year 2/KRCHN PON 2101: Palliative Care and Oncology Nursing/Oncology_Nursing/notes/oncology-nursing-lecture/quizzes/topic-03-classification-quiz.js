registerQuiz("topic-03-classification-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-03-classification-quiz",
  "metadata": {
    "title": "Classification & Staging Quiz",
    "description": "Test your knowledge of tumor grading and the TNM staging system.",
    "topicId": "topic-03-classification",
    "difficulty": "intermediate",
    "estimatedTime": 10,
    "passingScore": 70,
    "createdAt": "2025-12-27T00:00:00Z"
  },
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "question": "In the TNM staging system, what does the 'N' stand for?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Neoplasm", "isCorrect": false },
        { "id": "b", "text": "Number of tumors", "isCorrect": false },
        { "id": "c", "text": "Regional Lymph Nodes", "isCorrect": true },
        { "id": "d", "text": "Necrosis", "isCorrect": false }
      ],
      "explanation": "T = Primary Tumor, N = Regional Lymph Nodes, M = Distant Metastasis."
    },
    {
      "id": "q2",
      "type": "fill-blank",
      "question": "A tumor that is classified as Grade __1__ contains cells that are undifferentiated and immature (anaplasia).",
      "points": 10,
      "blanks": [
        { "id": "1", "acceptedAnswers": ["IV", "4", "four"], "caseSensitive": false }
      ],
      "explanation": "Grade IV represents the highest level of undifferentiation and anaplasia."
    },
    {
      "id": "q3",
      "type": "matching",
      "question": "Match the TNM notation with its meaning:",
      "points": 20,
      "pairs": [
        { "id": "p1", "left": "Tis", "right": "Carcinoma in situ" },
        { "id": "p2", "left": "N0", "right": "No regional lymph node metastasis" },
        { "id": "p3", "left": "M1", "right": "Distant metastasis present" },
        { "id": "p4", "left": "TX", "right": "Primary tumor cannot be assessed" }
      ]
    },
    {
      "id": "q4",
      "type": "multiple-choice",
      "question": "Which tumor marker is associated with prostate cancer?",
      "points": 10,
      "options": [
        { "id": "a", "text": "CEA", "isCorrect": false },
        { "id": "b", "text": "PSA", "isCorrect": true },
        { "id": "c", "text": "AFP", "isCorrect": false },
        { "id": "d", "text": "HCG", "isCorrect": false }
      ],
      "explanation": "PSA stands for Prostate-Specific Antigen, a marker used to screen for and monitor prostate cancer."
    },
    {
      "id": "q5",
      "type": "true-false",
      "question": "Grade I tumors differ slightly from normal cells and are well differentiated.",
      "points": 5,
      "correctAnswer": true,
      "explanation": "Grade I indicates mild dysplasia where cells still resemble the normal tissue of origin."
    }
  ]
});