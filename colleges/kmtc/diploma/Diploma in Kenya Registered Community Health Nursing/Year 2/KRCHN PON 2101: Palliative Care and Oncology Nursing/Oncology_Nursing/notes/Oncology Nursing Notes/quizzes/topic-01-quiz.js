registerQuiz("topic-01-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-01-quiz",
  "metadata": {
    "title": "Cellular Biology & Evolution Quiz",
    "description": "Test your knowledge on normal vs. malignant cell characteristics, cellular adaptation, and cancer evolution.",
    "topicId": "topic-01",
    "difficulty": "beginner",
    "estimatedTime": 10,
    "passingScore": 70,
    "createdAt": "2025-12-27T00:00:00Z",
    "tags": ["cellular-biology", "oncology", "basics"]
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
      "type": "multiple-choice",
      "question": "Which cellular adaptation refers to an increase in the **number** of normal cells?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Hypertrophy", "isCorrect": false },
        { "id": "b", "text": "Hyperplasia", "isCorrect": true },
        { "id": "c", "text": "Metaplasia", "isCorrect": false },
        { "id": "d", "text": "Dysplasia", "isCorrect": false }
      ],
      "explanation": "Hyperplasia is the increase in the number of cells. Hypertrophy is the increase in size. Metaplasia is the conversion of cell type."
    },
    {
      "id": "q2",
      "type": "matching",
      "question": "Match the term to its correct definition:",
      "points": 20,
      "pairs": [
        { "id": "p1", "left": "Differentiation", "right": "Cells develop specific structures/functions" },
        { "id": "p2", "left": "Apoptosis", "right": "Programmed cell suicide" },
        { "id": "p3", "left": "Anaplasia", "right": "Loss of differentiation (malignant)" },
        { "id": "p4", "left": "Metastasis", "right": "Spread of cancer to distant sites" }
      ],
      "explanation": "Differentiation is specialization. Apoptosis is normal cell death. Anaplasia indicates malignancy. Metastasis is the spread of disease."
    },
    {
      "id": "q3",
      "type": "multiple-select",
      "question": "Select all characteristics that describe **Malignant** cells:",
      "points": 15,
      "options": [
        { "id": "a", "text": "Rapid cell division", "isCorrect": true },
        { "id": "b", "text": "Exhibit contact inhibition", "isCorrect": false },
        { "id": "c", "text": "Encapsulated", "isCorrect": false },
        { "id": "d", "text": "Ability to metastasize", "isCorrect": true },
        { "id": "e", "text": "Poorly differentiated", "isCorrect": true }
      ],
      "explanation": "Malignant cells divide rapidly, lack contact inhibition, metastasize, and are poorly differentiated. They are rarely encapsulated."
    },
    {
      "id": "q4",
      "type": "fill-blank",
      "question": "The term __b1__ refers to the conversion from the normal pattern of differentiation of one type of cell into another type of cell not normal for that tissue.",
      "points": 10,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["metaplasia", "Metaplasia"], "caseSensitive": false }
      ],
      "explanation": "Metaplasia is the reversible replacement of one mature cell type by another, often due to chronic irritation."
    },
    {
      "id": "q5",
      "type": "ordering",
      "question": "Arrange the steps of metastasis in the correct order:",
      "points": 15,
      "items": [
        { "id": "i1", "text": "Detachment (tumor cell loses cohesiveness)", "correctPosition": 1 },
        { "id": "i2", "text": "Migration (via lymph or blood)", "correctPosition": 2 },
        { "id": "i3", "text": "Dissemination (establishment at secondary site)", "correctPosition": 3 },
        { "id": "i4", "text": "Angiogenesis (vascularization of tumor)", "correctPosition": 4 }
      ],
      "explanation": "Cells first detach, then migrate through vessels, disseminate/implant at a new site, and finally develop their own blood supply (angiogenesis)."
    },
    {
      "id": "q6",
      "type": "true-false",
      "question": "Dysplasia is an alteration in the size, shape, and organization of cells and is always irreversible.",
      "points": 5,
      "correctAnswer": false,
      "explanation": "False. Dysplasia is often reversible if the irritant is removed. Anaplasia is irreversible and malignant."
    },
    {
      "id": "q7",
      "type": "short-answer",
      "question": "Briefly explain the concept of 'Contact Inhibition' in normal cells.",
      "points": 15,
      "keywords": ["stop", "growing", "touch", "boundary", "boundaries", "division", "contact"],
      "minKeywords": 2,
      "modelAnswer": "Contact inhibition is the property of normal cells to stop dividing and growing when they touch other cells or boundaries. Cancer cells lose this property and grow on top of one another.",
      "maxLength": 300
    },
    {
      "id": "q8",
      "type": "image-based",
      "question": "Identify the process shown where cells travel through the bloodstream to form a secondary tumor:",
      "points": 10,
      "imageUrl": "../assets/images/image-20251227-ce25a213.jpeg",
      "imageAlt": "Diagram showing cancer cells spreading via blood vessels",
      "options": [
        { "id": "a", "text": "Hypertrophy", "isCorrect": false },
        { "id": "b", "text": "Metastasis", "isCorrect": true },
        { "id": "c", "text": "Apoptosis", "isCorrect": false },
        { "id": "d", "text": "Differentiation", "isCorrect": false }
      ],
      "explanation": "The image depicts metastasis, where cancer cells spread from the primary site to distant organs via the circulation."
    }
  ]
});