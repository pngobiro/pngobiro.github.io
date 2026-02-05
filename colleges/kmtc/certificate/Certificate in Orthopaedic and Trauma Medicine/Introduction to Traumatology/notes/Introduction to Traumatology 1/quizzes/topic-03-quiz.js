registerQuiz("topic-03-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-03-quiz",
  "metadata": {
    "title": "Fracture Healing Quiz",
    "description": "Evaluate your knowledge on the physiology, stages, and factors affecting bone healing.",
    "topicId": "topic-03",
    "difficulty": "intermediate",
    "estimatedTime": 15,
    "passingScore": 80,
    "createdAt": "2026-02-04T00:00:00Z",
    "updatedAt": "2026-02-04T00:00:00Z",
    "tags": ["fracture healing", "bone physiology", "orthopaedics"]
  },
  "settings": {
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "showFeedback": "immediate",
    "allowRetry": true,
    "showCorrectAnswers": true,
    "timeLimit": 0
  },
  "questions": [
    {
      "id": "t3-q1",
      "type": "ordering",
      "question": "Place the stages of fracture healing in the correct chronological order.",
      "points": 5,
      "items": [
        { "id": "step1", "text": "Haematoma formation", "correctPosition": 1 },
        { "id": "step2", "text": "Fibrocartilage formation", "correctPosition": 2 },
        { "id": "step3", "text": "Callus formation", "correctPosition": 3 },
        { "id": "step4", "text": "Ossification", "correctPosition": 4 },
        { "id": "step5", "text": "Consolidation and remodeling", "correctPosition": 5 }
      ],
      "explanation": "The correct order is: Haematoma (inflammation) -> Fibrocartilage -> Callus (reparative) -> Ossification -> Consolidation and remodeling."
    },
    {
      "id": "t3-q2",
      "type": "multiple-choice",
      "question": "Which stage of fracture healing typically occurs within the first 24 hours after injury?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "Haematoma formation", "isCorrect": true },
        { "id": "opt2", "text": "Callus formation", "isCorrect": false },
        { "id": "opt3", "text": "Ossification", "isCorrect": false },
        { "id": "opt4", "text": "Remodeling", "isCorrect": false }
      ],
      "explanation": "Haematoma formation (inflammation phase) occurs within 24 hours of the injury as blood clots form at the fracture site."
    },
    {
      "id": "t3-q3",
      "type": "multiple-select",
      "question": "Select all the factors that ENHANCE fracture healing.",
      "points": 2,
      "options": [
        { "id": "opt1", "text": "Adequate blood supply", "isCorrect": true },
        { "id": "opt2", "text": "Immobilization of fracture fragments", "isCorrect": true },
        { "id": "opt3", "text": "Presence of infection", "isCorrect": false },
        { "id": "opt4", "text": "Excessive bone tissue fragments", "isCorrect": false },
        { "id": "opt5", "text": "Adequate nutrition", "isCorrect": true }
      ],
      "explanation": "Enhanced healing requires good blood supply, stability (immobilization), and nutrition. Infection and excessive movement hinder it."
    },
    {
      "id": "t3-q4",
      "type": "fill-blank",
      "question": "During the ossification stage, a permanent callus of true, rigid bone forms. This typically occurs during the __id1__ to __id2__ week of healing.",
      "points": 1,
      "blanks": [
        {
          "id": "id1",
          "acceptedAnswers": ["3rd", "3", "third"],
          "caseSensitive": false
        },
        {
          "id": "id2",
          "acceptedAnswers": ["10th", "10", "tenth"],
          "caseSensitive": false
        }
      ],
      "explanation": "Ossification typically occurs between the 3rd and 10th week of healing."
    },
    {
      "id": "t3-q5",
      "type": "multiple-choice",
      "question": "What is the primary cell type responsible for laying down new bone during the callus formation stage?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "Osteoblasts", "isCorrect": true },
        { "id": "opt2", "text": "Osteoclasts", "isCorrect": false },
        { "id": "opt3", "text": "Fibroblasts", "isCorrect": false },
        { "id": "opt4", "text": "Erythrocytes", "isCorrect": false }
      ],
      "explanation": "Osteoblasts are the bone-building cells responsible for laying down new bone matrix."
    },
    {
      "id": "t3-q6",
      "type": "multiple-choice",
      "question": "Remodeling of the bone is governed by which principle?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "Stress, function, and strain imposed on the bone", "isCorrect": true },
        { "id": "opt2", "text": "The patient's age only", "isCorrect": false },
        { "id": "opt3", "text": "The type of cast used", "isCorrect": false },
        { "id": "opt4", "text": "The amount of medication taken", "isCorrect": false }
      ],
      "explanation": "Wolf's Law suggests that bone remodels in response to the stress and strain placed upon it."
    }
  ]
});