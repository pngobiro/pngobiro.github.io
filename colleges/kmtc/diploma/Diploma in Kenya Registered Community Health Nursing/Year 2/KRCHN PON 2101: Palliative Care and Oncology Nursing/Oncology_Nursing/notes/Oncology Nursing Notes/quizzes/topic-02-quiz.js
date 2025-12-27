registerQuiz("topic-02-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-02-quiz",
  "metadata": {
    "title": "Epidemiology & Prevention Quiz",
    "description": "Assess your understanding of cancer risk factors, carcinogens, screening guidelines, and warning signs.",
    "topicId": "topic-02",
    "difficulty": "intermediate",
    "estimatedTime": 15,
    "passingScore": 70,
    "createdAt": "2025-12-27T00:00:00Z",
    "tags": ["epidemiology", "prevention", "screening"]
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
      "type": "fill-blank",
      "question": "In the acronym CAUTION US for cancer warning signs, the 'C' stands for __b1__.",
      "points": 10,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["change in bowel or bladder habits", "change in bowel habits", "change in bladder habits"], "caseSensitive": false }
      ],
      "explanation": "C = Change in bowel or bladder habits."
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "question": "Which of the following is considered a **primary** prevention strategy?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Yearly Mammogram", "isCorrect": false },
        { "id": "b", "text": "Smoking Cessation", "isCorrect": true },
        { "id": "c", "text": "Colonoscopy", "isCorrect": false },
        { "id": "d", "text": "Pap Smear", "isCorrect": false }
      ],
      "explanation": "Primary prevention involves avoiding carcinogens (like smoking). Screenings (mammogram, colonoscopy, Pap smear) are secondary prevention."
    },
    {
      "id": "q3",
      "type": "matching",
      "question": "Match the specific carcinogen to the cancer it promotes:",
      "points": 20,
      "pairs": [
        { "id": "p1", "left": "Alcohol + Tobacco", "right": "Esophageal Cancer" },
        { "id": "p2", "left": "Asbestos", "right": "Lung/Peritoneum Cancer" },
        { "id": "p3", "left": "Benzene", "right": "Leukemia" },
        { "id": "p4", "left": "Human Papillomavirus (HPV)", "right": "Cervical Cancer" }
      ],
      "explanation": "Alcohol/Tobacco act synergistically. Asbestos causes mesothelioma/lung cancer. Benzene causes Leukemia. HPV is a viral cause of cervical cancer."
    },
    {
      "id": "q4",
      "type": "multiple-select",
      "question": "Which of the following dietary recommendations help prevent cancer? (Select all that apply)",
      "points": 15,
      "options": [
        { "id": "a", "text": "High fiber diet", "isCorrect": true },
        { "id": "b", "text": "High intake of cruciferous vegetables", "isCorrect": true },
        { "id": "c", "text": "High fat intake", "isCorrect": false },
        { "id": "d", "text": "Foods rich in Vitamin A and C", "isCorrect": true },
        { "id": "e", "text": "Frequent consumption of nitrate-cured foods", "isCorrect": false }
      ],
      "explanation": "High fiber, cruciferous veggies, and vitamins A/C are protective. High fat and nitrate-cured foods (like bacon/ham) increase risk."
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "question": "According to the American Cancer Society, at what age should men begin yearly Prostate-Specific Antigen (PSA) testing?",
      "points": 10,
      "options": [
        { "id": "a", "text": "40", "isCorrect": false },
        { "id": "b", "text": "50", "isCorrect": true },
        { "id": "c", "text": "60", "isCorrect": false },
        { "id": "d", "text": "65", "isCorrect": false }
      ],
      "explanation": "Yearly PSA and Digital Rectal Exams (DRE) are recommended beginning at age 50."
    },
    {
      "id": "q6",
      "type": "true-false",
      "question": "The single most important factor related to the development of cancer is gender.",
      "points": 5,
      "correctAnswer": false,
      "explanation": "False. The single most important factor is **Age** (increased risk over 65)."
    },
    {
      "id": "q7",
      "type": "ordering",
      "question": "Order the steps of Carcinogenesis:",
      "points": 15,
      "items": [
        { "id": "i1", "text": "Initiation (DNA damage by carcinogen)", "correctPosition": 1 },
        { "id": "i2", "text": "Promotion (Further damage, proliferation)", "correctPosition": 2 },
        { "id": "i3", "text": "Progression (Invasive behavior, metastasis)", "correctPosition": 3 }
      ],
      "explanation": "The process starts with Initiation (mutation), followed by Promotion (growth), and finally Progression (invasion)."
    },
    {
      "id": "q8",
      "type": "short-answer",
      "question": "List two examples of viral carcinogens mentioned in the text.",
      "points": 15,
      "keywords": ["epstein", "barr", "herpes", "papillomavirus", "hpv", "hepatitis", "cytomegalovirus"],
      "minKeywords": 2,
      "modelAnswer": "Examples include Epstein Barr, Genital Herpes, Papillomavirus (HPV), Hepatitis B, and Human Cytomegalovirus.",
      "maxLength": 200
    }
  ]
});