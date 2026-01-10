registerQuiz("topic-04-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-04-quiz",
  "metadata": {
    "title": "Transportation Systems Quiz",
    "description": "Test your knowledge of the Cardiovascular and Lymphatic systems.",
    "topicId": "topic-04-transportation",
    "difficulty": "intermediate",
    "estimatedTime": 15,
    "passingScore": 70,
    "createdAt": "2022-05-20T00:00:00Z"
  },
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "question": "Which component of blood protects the body against infection?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Erythrocytes", "isCorrect": false },
        { "id": "b", "text": "Leukocytes", "isCorrect": true },
        { "id": "c", "text": "Thrombocytes", "isCorrect": false },
        { "id": "d", "text": "Plasma", "isCorrect": false }
      ],
      "explanation": "Leukocytes (White Blood Cells) are the body's defenders against pathogens."
    },
    {
      "id": "q2",
      "type": "fill-blank",
      "question": "The heart chamber that pumps oxygenated blood to the body is the __b1__.",
      "points": 10,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["left ventricle"], "caseSensitive": false }
      ],
      "explanation": "The left ventricle has the thickest wall to pump blood through the aorta to the systemic circulation."
    },
    {
      "id": "q3",
      "type": "ordering",
      "question": "Arrange the path of the heart's conduction system:",
      "points": 10,
      "items": [
        { "id": "i1", "text": "Sinoatrial (SA) Node", "correctPosition": 1 },
        { "id": "i2", "text": "Atrioventricular (AV) Node", "correctPosition": 2 },
        { "id": "i3", "text": "Bundle of His", "correctPosition": 3 },
        { "id": "i4", "text": "Purkinje Fibers", "correctPosition": 4 }
      ]
    },
    {
      "id": "q4",
      "type": "true-false",
      "question": "Arteries contain valves to prevent the backflow of blood.",
      "points": 10,
      "correctAnswer": false,
      "explanation": "False. Veins contain valves to prevent backflow. Arteries have thicker muscular walls to handle high pressure."
    },
    {
      "id": "q5",
      "type": "matching",
      "question": "Match the lymphatic structure with its function:",
      "points": 10,
      "pairs": [
        { "id": "p1", "left": "Lymph Nodes", "right": "Filtration of lymph" },
        { "id": "p2", "left": "Spleen", "right": "Destruction of old red blood cells" },
        { "id": "p3", "left": "Thymus", "right": "Processing of T-lymphocytes" },
        { "id": "p4", "left": "Thoracic Duct", "right": "Drains lymph from most of the body" }
      ]
    }
  ]
});