registerQuiz("topic-06-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-06-quiz",
  "metadata": {
    "title": "Circulatory System Quiz",
    "description": "Test your knowledge of the heart, blood vessels, blood composition, and disorders.",
    "topicId": "topic-06-circulatory-system",
    "difficulty": "advanced",
    "estimatedTime": 25,
    "passingScore": 75,
    "createdAt": "2025-12-25T12:00:00Z"
  },
  "questions": [
    {
      "id": "q1",
      "type": "ordering",
      "question": "Trace the path of blood through the heart, starting from the Vena Cava:",
      "points": 15,
      "items": [
        { "id": "i1", "text": "Right Atrium", "correctPosition": 1 },
        { "id": "i2", "text": "Right Ventricle", "correctPosition": 2 },
        { "id": "i3", "text": "Pulmonary Artery", "correctPosition": 3 },
        { "id": "i4", "text": "Left Atrium", "correctPosition": 4 },
        { "id": "i5", "text": "Left Ventricle", "correctPosition": 5 },
        { "id": "i6", "text": "Aorta", "correctPosition": 6 }
      ],
      "explanation": "Blood enters the Right Atrium -> Right Ventricle -> Lungs (via Pulmonary Artery) -> Left Atrium (via Pulmonary Veins) -> Left Ventricle -> Body (via Aorta)."
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "question": "Which blood cell is primarily responsible for transporting oxygen?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Leucocyte", "isCorrect": false },
        { "id": "b", "text": "Thrombocyte", "isCorrect": false },
        { "id": "c", "text": "Erythrocyte", "isCorrect": true },
        { "id": "d", "text": "Lymphocyte", "isCorrect": false }
      ],
      "explanation": "Erythrocytes (Red Blood Cells) contain haemoglobin which binds to oxygen."
    },
    {
      "id": "q3",
      "type": "fill-blank",
      "question": "The pacemaker of the heart is the __1__ node.",
      "points": 10,
      "blanks": [
        { "id": "1", "acceptedAnswers": ["sinoatrial", "SA"], "caseSensitive": false }
      ],
      "explanation": "The Sinoatrial (SA) node initiates the electrical impulse for the heartbeat."
    },
    {
      "id": "q4",
      "type": "multiple-select",
      "question": "Identify the signs of Left-Sided Heart Failure (Select all that apply):",
      "points": 15,
      "options": [
        { "id": "a", "text": "Pulmonary Oedema", "isCorrect": true },
        { "id": "b", "text": "Ascites", "isCorrect": false },
        { "id": "c", "text": "Dyspnoea", "isCorrect": true },
        { "id": "d", "text": "Cyanosis", "isCorrect": true },
        { "id": "e", "text": "Hepatic engorgement", "isCorrect": false }
      ],
      "partialCredit": true,
      "explanation": "Left-sided failure causes congestion in the lungs (pulmonary oedema, dyspnoea, cyanosis). Right-sided failure causes systemic congestion (ascites, hepatic engorgement)."
    },
    {
      "id": "q5",
      "type": "matching",
      "question": "Match the blood group to its description:",
      "points": 15,
      "pairs": [
        { "id": "p1", "left": "Group A", "right": "Has A antigens" },
        { "id": "p2", "left": "Group B", "right": "Has B antigens" },
        { "id": "p3", "left": "Group AB", "right": "Universal Recipient" },
        { "id": "p4", "left": "Group O", "right": "Universal Donor" }
      ]
    },
    {
      "id": "q6",
      "type": "multiple-choice",
      "question": "What is the immediate management for a blood transfusion reaction?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Slow down the transfusion rate", "isCorrect": false },
        { "id": "b", "text": "Stop the transfusion immediately", "isCorrect": true },
        { "id": "c", "text": "Give an antipyretic", "isCorrect": false },
        { "id": "d", "text": "Elevate the patient's legs", "isCorrect": false }
      ],
      "explanation": "The infusion must be stopped immediately to prevent further administration of the incompatible blood."
    }
  ]
});