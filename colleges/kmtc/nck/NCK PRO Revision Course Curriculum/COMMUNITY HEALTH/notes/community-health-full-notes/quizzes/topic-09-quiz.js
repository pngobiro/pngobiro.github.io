// topic-09-quiz.js
registerQuiz("topic-09-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-09-quiz",
  "metadata": {
    "title": "Nutrition & Health Quiz",
    "description": "Assess your knowledge on malnutrition, dietary requirements, and nutrition epidemiology.",
    "topicId": "topic-09",
    "difficulty": "intermediate",
    "estimatedTime": 15,
    "passingScore": 70,
    "createdAt": "2026-01-21T00:00:00Z",
    "updatedAt": "2026-01-21T00:00:00Z",
    "tags": ["nutrition", "malnutrition", "diet"]
  },
  "questions": [
    {
      "id": "q1",
      "type": "matching",
      "question": "Match the type of malnutrition with its description.",
      "points": 1,
      "pairs": [
        { "id": "p1", "left": "Marasmus", "right": "Severe wasting of fat and muscle (calorie deficiency)" },
        { "id": "p2", "left": "Kwashiorkor", "right": "Bilateral pitting oedema (protein deficiency)" },
        { "id": "p3", "left": "Stunting", "right": "Chronic malnutrition (low height-for-age)" },
        { "id": "p4", "left": "Micronutrient Malnutrition", "right": "Deficiency in vitamins/minerals" }
      ],
      "explanation": "Marasmus = wasting; Kwashiorkor = edema; Stunting = short stature; Micronutrient = hidden hunger."
    },
    {
      "id": "q2",
      "type": "matching",
      "question": "Match the micronutrient deficiency with its effect.",
      "points": 1,
      "pairs": [
        { "id": "p1", "left": "Iron deficiency", "right": "Anaemia" },
        { "id": "p2", "left": "Iodine deficiency", "right": "Impaired thyroid/Mental retardation" },
        { "id": "p3", "left": "Vitamin A deficiency", "right": "Poor vision/Night blindness" },
        { "id": "p4", "left": "Vitamin D deficiency", "right": "Rickets" }
      ],
      "explanation": "Iron->Anaemia; Iodine->Goiter/Brain; Vit A->Eyes; Vit D->Bones."
    },
    {
      "id": "q3",
      "type": "multiple-select",
      "question": "Which of the following are components of Community Nutrition?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "Surveillance of food chain", "isCorrect": true },
        { "id": "opt2", "text": "Nutritional epidemiology", "isCorrect": true },
        { "id": "opt3", "text": "Nutrition education", "isCorrect": true },
        { "id": "opt4", "text": "Food and nutrition policy", "isCorrect": true },
        { "id": "opt5", "text": "Road construction", "isCorrect": false }
      ],
      "explanation": "Community nutrition includes surveillance, epidemiology, education, and policy."
    },
    {
      "id": "q4",
      "type": "multiple-choice",
      "question": "What is the definition of 'Nutrition'?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "The intake of food considered in relation to the body's dietary needs.", "isCorrect": true },
        { "id": "opt2", "text": "Cooking food properly.", "isCorrect": false },
        { "id": "opt3", "text": "Eating only vegetables.", "isCorrect": false },
        { "id": "opt4", "text": "Farming practices.", "isCorrect": false }
      ],
      "explanation": "Nutrition relates food intake to bodily needs."
    },
    {
      "id": "q5",
      "type": "true-false",
      "question": "Stunting (chronic malnutrition) becomes irreversible after a certain age.",
      "correctAnswer": true,
      "points": 1,
      "explanation": "Stunting often starts before birth or early childhood and can become irreversible if not addressed early."
    }
  ]
});