registerQuiz("topic-04-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-04-quiz",
  "metadata": {
    "title": "Safe Motherhood Initiative",
    "description": "Evaluate your knowledge of the 8 pillars of Safe Motherhood, Essential Obstetric Care, and maternal mortality.",
    "topicId": "topic-04",
    "difficulty": "advanced",
    "estimatedTime": 15,
    "passingScore": 75,
    "createdAt": "2026-01-11T12:00:00Z"
  },
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "question": "What is the single leading cause of maternal death (accounting for approx. 25%)?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Sepsis", "isCorrect": false },
        { "id": "b", "text": "Postpartum Haemorrhage", "isCorrect": true },
        { "id": "c", "text": "Unsafe Abortion", "isCorrect": false },
        { "id": "d", "text": "Eclampsia", "isCorrect": false }
      ],
      "explanation": "Postpartum Haemorrhage (bleeding after delivery) causes ~25% of maternal deaths."
    },
    {
      "id": "q2",
      "type": "image-based",
      "question": "According to the graph, which period poses the HIGHEST risk for maternal death (50%)?",
      "points": 15,
      "imageUrl": "../assets/images/image-20260111-cb7f3147.jpeg",
      "imageAlt": "Graph of timing of maternal deaths",
      "options": [
        { "id": "a", "text": "During Pregnancy", "isCorrect": false },
        { "id": "b", "text": "Labour, delivery, and first 24 hours", "isCorrect": true },
        { "id": "c", "text": "2-7 weeks after delivery", "isCorrect": false },
        { "id": "d", "text": "2-3 weeks after delivery", "isCorrect": false }
      ],
      "explanation": "50% of maternal deaths occur during labour, delivery, and the immediate postpartum period (first 24 hours)."
    },
    {
      "id": "q3",
      "type": "multiple-select",
      "question": "Select the pillars of the Safe Motherhood Initiative from the list below. (Select all that apply)",
      "points": 15,
      "options": [
        { "id": "a", "text": "Family Planning", "isCorrect": true },
        { "id": "b", "text": "Focused Antenatal Care", "isCorrect": true },
        { "id": "c", "text": "Free Secondary Education", "isCorrect": false },
        { "id": "d", "text": "Essential Obstetric Care", "isCorrect": true },
        { "id": "e", "text": "Clean and Safe Delivery", "isCorrect": true }
      ],
      "partialCredit": true,
      "explanation": "The 8 pillars are: FP, ANC, Clean Delivery, EOC, Post Abortion Care, PMTCT, Postpartum Care, and Neonatal Care."
    },
    {
      "id": "q4",
      "type": "fill-blank",
      "question": "EOC stands for __b1__ Obstetric Care.",
      "points": 10,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["Essential"], "caseSensitive": false }
      ],
      "explanation": "Essential Obstetric Care (EOC) describes elements needed to manage pregnancy complications."
    },
    {
      "id": "q5",
      "type": "matching",
      "question": "Match the obstetric complication with its specific proven intervention:",
      "points": 20,
      "pairs": [
        { "id": "p1", "left": "Eclampsia", "right": "Anti-convulsants" },
        { "id": "p2", "left": "Obstructed Labour", "right": "Partograph / C-Section" },
        { "id": "p3", "left": "Sepsis", "right": "Antibiotics / Clean practices" },
        { "id": "p4", "left": "Unsafe Abortion", "right": "MVA (Manual Vacuum Aspiration)" }
      ]
    },
    {
      "id": "q6",
      "type": "true-false",
      "question": "Approximately 90% of maternal deaths could be prevented if timely and appropriate quality obstetric care were provided.",
      "points": 5,
      "correctAnswer": true,
      "explanation": "Most maternal deaths are due to direct obstetric causes that are preventable with existing medical interventions."
    },
    {
      "id": "q7",
      "type": "multiple-select",
      "question": "Which of the following are components of Basic Essential Obstetric Care? (Select all that apply)",
      "points": 15,
      "options": [
        { "id": "a", "text": "Parenteral antibiotics", "isCorrect": true },
        { "id": "b", "text": "Manual removal of placenta", "isCorrect": true },
        { "id": "c", "text": "Caesarean Section", "isCorrect": false },
        { "id": "d", "text": "Assisted vaginal delivery (Vacuum)", "isCorrect": true }
      ],
      "explanation": "Basic EOC includes antibiotics, oxytocics, anticonvulsants, manual placenta removal, MVA, and assisted delivery. C-Section is part of Comprehensive EOC."
    }
  ]
});