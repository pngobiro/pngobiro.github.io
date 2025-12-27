registerQuiz("comprehensive-exam", {
  "schemaVersion": "1.0",
  "quizId": "comprehensive-exam",
  "metadata": {
    "title": "Oncology Nursing Comprehensive Final Exam",
    "description": "A comprehensive assessment covering all 11 topics.",
    "examType": "comprehensive",
    "topicsCovered": [
      "topic-01-introduction",
      "topic-02-carcinogenesis",
      "topic-03-classification",
      "topic-04-prevention",
      "topic-05-radiation-surgery",
      "topic-06-chemotherapy",
      "topic-07-male-reproductive",
      "topic-08-female-reproductive",
      "topic-09-gastrointestinal",
      "topic-10-respiratory",
      "topic-11-hematologic-skin"
    ],
    "difficulty": "intermediate",
    "estimatedTime": 60,
    "passingScore": 75,
    "createdAt": "2025-12-27T00:00:00Z",
    "tags": ["final", "comprehensive"]
  },
  "settings": {
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "showFeedback": "end",
    "allowRetry": true,
    "showCorrectAnswers": true,
    "timeLimit": 3600
  },
  "questions": [
    // --- Topic 1 ---
    {
      "id": "q1",
      "topicId": "topic-01-introduction",
      "topicName": "Introduction",
      "type": "multiple-choice",
      "question": "Which term describes the loss of cellular differentiation?",
      "points": 2,
      "options": [
        { "id": "a", "text": "Hyperplasia", "isCorrect": false },
        { "id": "b", "text": "Anaplasia", "isCorrect": true },
        { "id": "c", "text": "Metaplasia", "isCorrect": false },
        { "id": "d", "text": "Atrophy", "isCorrect": false }
      ]
    },
    // --- Topic 2 ---
    {
      "id": "q2",
      "topicId": "topic-02-carcinogenesis",
      "topicName": "Carcinogenesis",
      "type": "multiple-choice",
      "question": "The second stage of carcinogenesis, characterized by the reversible proliferation of altered cells, is:",
      "points": 2,
      "options": [
        { "id": "a", "text": "Initiation", "isCorrect": false },
        { "id": "b", "text": "Promotion", "isCorrect": true },
        { "id": "c", "text": "Progression", "isCorrect": false },
        { "id": "d", "text": "Metastasis", "isCorrect": false }
      ]
    },
    // --- Topic 3 ---
    {
      "id": "q3",
      "topicId": "topic-03-classification",
      "topicName": "Classification",
      "type": "multiple-choice",
      "question": "T0 in the TNM system means:",
      "points": 2,
      "options": [
        { "id": "a", "text": "Carcinoma in situ", "isCorrect": false },
        { "id": "b", "text": "No evidence of primary tumor", "isCorrect": true },
        { "id": "c", "text": "Tumor unassessable", "isCorrect": false },
        { "id": "d", "text": "Invasive tumor", "isCorrect": false }
      ]
    },
    // --- Topic 4 ---
    {
      "id": "q4",
      "topicId": "topic-04-prevention",
      "topicName": "Prevention",
      "type": "fill-blank",
      "question": "The 'N' in CAUTIONUS stands for __1__.",
      "points": 2,
      "blanks": [
        { "id": "1", "acceptedAnswers": ["nagging cough", "nagging cough or hoarseness"], "caseSensitive": false }
      ]
    },
    // --- Topic 5 ---
    {
      "id": "q5",
      "topicId": "topic-05-radiation-surgery",
      "topicName": "Radiation/Surgery",
      "type": "multiple-choice",
      "question": "What is the priority instruction for a patient with a sealed internal radiation implant?",
      "points": 3,
      "options": [
        { "id": "a", "text": "Ambulating in the hallway", "isCorrect": false },
        { "id": "b", "text": "Strict bed rest", "isCorrect": true },
        { "id": "c", "text": "High fiber diet", "isCorrect": false },
        { "id": "d", "text": "Frequent visitors", "isCorrect": false }
      ],
      "explanation": "To prevent displacement of the implant."
    },
    // --- Topic 6 ---
    {
      "id": "q6",
      "topicId": "topic-06-chemotherapy",
      "topicName": "Chemotherapy",
      "type": "multiple-choice",
      "question": "Which intervention is critical for a patient with thrombocytopenia?",
      "points": 3,
      "options": [
        { "id": "a", "text": "Avoid aspirin", "isCorrect": true },
        { "id": "b", "text": "Use a firm toothbrush", "isCorrect": false },
        { "id": "c", "text": "Encourage contact sports", "isCorrect": false },
        { "id": "d", "text": "Restrict fluids", "isCorrect": false }
      ]
    },
    // --- Topic 7 ---
    {
      "id": "q7",
      "topicId": "topic-07-male-reproductive",
      "topicName": "Male Reproductive",
      "type": "multiple-choice",
      "question": "At what age should men begin annual digital rectal exams for prostate cancer screening?",
      "points": 2,
      "options": [
        { "id": "a", "text": "30", "isCorrect": false },
        { "id": "b", "text": "40", "isCorrect": true },
        { "id": "c", "text": "60", "isCorrect": false },
        { "id": "d", "text": "70", "isCorrect": false }
      ]
    },
    // --- Topic 8 ---
    {
      "id": "q8",
      "topicId": "topic-08-female-reproductive",
      "topicName": "Female Reproductive",
      "type": "image-based",
      "question": "Which breast sign is shown in the image (edema/pitting)?",
      "points": 3,
      "media": {
        "type": "image",
        "url": "assets/images/image-20251227-16d01d41.jpeg",
        "alt": "Breast edema"
      },
      "options": [
        { "id": "a", "text": "Peau d'orange", "isCorrect": true },
        { "id": "b", "text": "Dimpling", "isCorrect": false },
        { "id": "c", "text": "Retraction", "isCorrect": false },
        { "id": "d", "text": "Erythema", "isCorrect": false }
      ]
    },
    // --- Topic 9 ---
    {
      "id": "q9",
      "topicId": "topic-09-gastrointestinal",
      "topicName": "Gastrointestinal",
      "type": "multiple-choice",
      "question": "A Billroth II procedure involves anastomosing the stomach to the:",
      "points": 2,
      "options": [
        { "id": "a", "text": "Duodenum", "isCorrect": false },
        { "id": "b", "text": "Jejunum", "isCorrect": true },
        { "id": "c", "text": "Ileum", "isCorrect": false },
        { "id": "d", "text": "Colon", "isCorrect": false }
      ]
    },
    // --- Topic 10 ---
    {
      "id": "q10",
      "topicId": "topic-10-respiratory",
      "topicName": "Respiratory",
      "type": "multiple-choice",
      "question": "Persistent hoarseness is an early sign of which cancer?",
      "points": 2,
      "options": [
        { "id": "a", "text": "Lung", "isCorrect": false },
        { "id": "b", "text": "Esophageal", "isCorrect": false },
        { "id": "c", "text": "Laryngeal", "isCorrect": true },
        { "id": "d", "text": "Thyroid", "isCorrect": false }
      ]
    },
    // --- Topic 11 ---
    {
      "id": "q11",
      "topicId": "topic-11-hematologic-skin",
      "topicName": "Hematologic/Skin",
      "type": "fill-blank",
      "question": "Reed-Sternberg cells are diagnostic for __1__ lymphoma.",
      "points": 2,
      "blanks": [
        { "id": "1", "acceptedAnswers": ["Hodgkin's", "Hodgkins", "Hodgkin"], "caseSensitive": false }
      ]
    }
  ]
});