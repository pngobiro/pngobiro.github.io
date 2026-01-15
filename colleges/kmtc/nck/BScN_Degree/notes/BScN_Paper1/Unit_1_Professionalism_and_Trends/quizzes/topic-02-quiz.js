registerQuiz("topic-02-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-02-quiz",
  "metadata": {
    "title": "The Nursing Process Quiz",
    "description": "Evaluate your ability to apply the scientific method to nursing care.",
    "topicId": "topic-02",
    "difficulty": "intermediate",
    "estimatedTime": 20,
    "passingScore": 75,
    "createdAt": "2026-01-10T00:00:00Z",
    "tags": ["nursing-process", "clinical", "planning"]
  },
  "settings": {
    "shuffleQuestions": false,
    "shuffleOptions": true,
    "showFeedback": "immediate",
    "showCorrectAnswers": true
  },
  "questions": [
    {
      "id": "q1",
      "type": "ordering",
      "question": "Arrange the steps of the Nursing Process in their logical sequence:",
      "points": 15,
      "items": [
        { "id": "i1", "text": "Assessment", "correctPosition": 1 },
        { "id": "i2", "text": "Nursing Diagnosis", "correctPosition": 2 },
        { "id": "i3", "text": "Planning", "correctPosition": 3 },
        { "id": "i4", "text": "Implementation", "correctPosition": 4 },
        { "id": "i5", "text": "Evaluation", "correctPosition": 5 }
      ],
      "explanation": "ADPIE: Assessment, Diagnosis, Planning, Implementation, Evaluation."
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "question": "Which of the following is NOT a technique used during physical examination?",
      "points": 5,
      "options": [
        { "id": "a", "text": "Inspection", "isCorrect": false },
        { "id": "b", "text": "Palpation", "isCorrect": false },
        { "id": "c", "text": "Prescription", "isCorrect": true },
        { "id": "d", "text": "Auscultation", "isCorrect": false }
      ],
      "explanation": "The four techniques are Inspection, Palpation, Percussion, and Auscultation. Prescription is a medical intervention."
    },
    {
      "id": "q3",
      "type": "fill-blank",
      "question": "According to Maslow's Hierarchy of Needs, __b1__ needs such as breathing and food must be met before safety or esteem needs.",
      "points": 10,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["physiological", "physical", "basic"], "caseSensitive": false }
      ],
      "explanation": "Physiological needs are at the base of the pyramid and take highest priority."
    },
    {
      "id": "q4",
      "type": "matching",
      "question": "Match the type of goal with its definition:",
      "points": 15,
      "pairs": [
        { "id": "p1", "left": "Immediate Goal", "right": "Addresses existing, urgent problems" },
        { "id": "p2", "left": "Intermediate Goal", "right": "Addresses potential future problems" },
        { "id": "p3", "left": "Long Term Goal", "right": "Focuses on rehabilitation and prevention" }
      ],
      "explanation": "Goals are time-bound: Immediate (now), Intermediate (soon), Long-term (future)."
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "question": "What is the primary purpose of the 'Evaluation' step?",
      "points": 10,
      "options": [
        { "id": "a", "text": "To gather history from the patient", "isCorrect": false },
        { "id": "b", "text": "To determine if the patient has achieved the expected outcomes", "isCorrect": true },
        { "id": "c", "text": "To write medical orders", "isCorrect": false },
        { "id": "d", "text": "To diagnose the disease", "isCorrect": false }
      ],
      "explanation": "Evaluation determines the patient's response to interventions and the extent to which goals have been met."
    },
    {
      "id": "q6",
      "type": "image-based",
      "question": "Click on the area of the diagram representing the continuous nature of the nursing care plan cycle (the arrows/flow):",
      "points": 10,
      "imageUrl": "../assets/images/image-20260110-4624fb10.jpeg",
      "imageAlt": "Nursing Care Plan Cycle Diagram",
      "hotspots": [
        { "id": "h1", "x": 50, "y": 50, "radius": 40, "label": "Cycle Flow", "isCorrect": true }
      ],
      "explanation": "The nursing process is cyclical; evaluation leads back to assessment if goals are not met."
    },
    {
      "id": "q7",
      "type": "short-answer",
      "question": "Why is 'Interviewing' considered a critical skill in the Assessment phase?",
      "points": 15,
      "keywords": ["data", "history", "rapport", "trust", "communication", "information", "illness"],
      "minKeywords": 3,
      "modelAnswer": "Interviewing allows the nurse to collect the nursing history, determine the state of illness, and establish a relationship of mutual trust and respect with the patient.",
      "maxLength": 300
    },
    {
      "id": "q8",
      "type": "multiple-select",
      "question": "Which of the following are components of a Nursing Care Plan? (Select all that apply)",
      "points": 10,
      "options": [
        { "id": "a", "text": "Nursing Diagnosis", "isCorrect": true },
        { "id": "b", "text": "Expected Outcomes", "isCorrect": true },
        { "id": "c", "text": "Nursing Actions/Interventions", "isCorrect": true },
        { "id": "d", "text": "Rationale", "isCorrect": true },
        { "id": "e", "text": "Medical Diagnosis", "isCorrect": false }
      ],
      "partialCredit": true,
      "explanation": "A care plan typically includes Diagnosis, Objectives/Goals, Outcomes, Actions, Rationale, and Evaluation. Medical diagnosis is usually part of the patient profile but not a column in the nursing plan itself."
    }
  ]
});