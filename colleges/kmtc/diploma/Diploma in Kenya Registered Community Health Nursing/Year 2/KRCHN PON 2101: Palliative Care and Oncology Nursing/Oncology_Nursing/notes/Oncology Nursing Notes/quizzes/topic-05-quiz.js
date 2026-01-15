registerQuiz("topic-05-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-05-quiz",
  "metadata": {
    "title": "Oncologic Emergencies Quiz",
    "description": "Test your ability to identify and manage critical oncologic emergencies like SVCS, DIC, and Cardiac Tamponade.",
    "topicId": "topic-05",
    "difficulty": "advanced",
    "estimatedTime": 10,
    "passingScore": 70,
    "createdAt": "2025-12-27T00:00:00Z",
    "tags": ["emergencies", "critical-care", "nursing"]
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
      "question": "What is an early sign of Superior Vena Cava Syndrome (SVCS)?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Cyanosis", "isCorrect": false },
        { "id": "b", "text": "Periorbital and facial edema", "isCorrect": true },
        { "id": "c", "text": " hypotension", "isCorrect": false },
        { "id": "d", "text": "Altered mental status", "isCorrect": false }
      ],
      "explanation": "Early signs include facial/periorbital edema (Stokes' sign). Cyanosis and hypotension are late signs."
    },
    {
      "id": "q2",
      "type": "fill-blank",
      "question": "__b1__ is a severe disorder of coagulation where abnormal clots form in microvasculature, depleting clotting factors and causing hemorrhage.",
      "points": 10,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["DIC", "Disseminated Intravascular Coagulopathy"], "caseSensitive": false }
      ],
      "explanation": "DIC (Disseminated Intravascular Coagulopathy) is the condition described."
    },
    {
      "id": "q3",
      "type": "multiple-select",
      "question": "Which interventions are appropriate for managing Cardiac Tamponade? (Select all that apply)",
      "points": 15,
      "options": [
        { "id": "a", "text": "Administer oxygen", "isCorrect": true },
        { "id": "b", "text": "Pericardiocentesis", "isCorrect": true },
        { "id": "c", "text": "Hemodynamic monitoring", "isCorrect": true },
        { "id": "d", "text": "Administer anticoagulants", "isCorrect": false },
        { "id": "e", "text": "Vasopressor agents", "isCorrect": true }
      ],
      "explanation": "Oxygen, monitoring, vasopressors, and Pericardiocentesis (to drain fluid) are correct. Anticoagulants are contraindicated if bleeding is the cause or risk."
    },
    {
      "id": "q4",
      "type": "matching",
      "question": "Match the emergency to its primary cause:",
      "points": 20,
      "pairs": [
        { "id": "p1", "left": "Spinal Cord Compression", "right": "Pressure from expanding tumors" },
        { "id": "p2", "left": "SVCS", "right": "Obstruction of venous circulation of head/neck" },
        { "id": "p3", "left": "Cardiac Tamponade", "right": "Pericardial effusion compressing the heart" },
        { "id": "p4", "left": "DIC", "right": "Sepsis triggering abnormal clotting" }
      ],
      "explanation": "SCC = tumor pressure on cord. SVCS = vein blockage. Tamponade = fluid compressing heart. DIC = sepsis/clotting cascade."
    },
    {
      "id": "q5",
      "type": "true-false",
      "question": "Early symptoms of Spinal Cord Compression include back and leg pain, numbness, and tingling.",
      "points": 5,
      "correctAnswer": true,
      "explanation": "True. Pain and paresthesias are early warning signs. Paralysis is a late sign."
    },
    {
      "id": "q6",
      "type": "short-answer",
      "question": "Why is the mortality rate for DIC greater than 70%?",
      "points": 15,
      "keywords": ["bleeding", "clotting", "depletion", "hypoxia", "organ", "failure", "factors"],
      "minKeywords": 2,
      "modelAnswer": "DIC involves both widespread clotting (causing tissue hypoxia/organ failure) and depletion of clotting factors (causing severe hemorrhage), making it very difficult to treat.",
      "maxLength": 300
    },
    {
      "id": "q7",
      "type": "multiple-choice",
      "question": "Which of the following is a late sign of Superior Vena Cava Syndrome?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Facial edema", "isCorrect": false },
        { "id": "b", "text": "Dyspnea", "isCorrect": false },
        { "id": "c", "text": "Cyanosis and altered mental status", "isCorrect": true },
        { "id": "d", "text": "Arm swelling", "isCorrect": false }
      ],
      "explanation": "Cyanosis and AMS indicate severe lack of oxygen/perfusion and are late, ominous signs."
    }
  ]
});