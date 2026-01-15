registerQuiz("topic-05-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-05-quiz",
  "metadata": {
    "title": "Absorption & Excretion Quiz",
    "description": "Assess your understanding of the Digestive, Respiratory, and Urinary systems.",
    "topicId": "topic-05-absorption-excretion",
    "difficulty": "advanced",
    "estimatedTime": 20,
    "passingScore": 70,
    "createdAt": "2022-05-20T00:00:00Z"
  },
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "question": "Where does the chemical digestion of protein begin?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Mouth", "isCorrect": false },
        { "id": "b", "text": "Stomach", "isCorrect": true },
        { "id": "c", "text": "Small Intestine", "isCorrect": false },
        { "id": "d", "text": "Large Intestine", "isCorrect": false }
      ],
      "explanation": "Protein digestion begins in the stomach with the enzyme Pepsin."
    },
    {
      "id": "q2",
      "type": "fill-blank",
      "question": "The functional unit of the kidney responsible for filtration is the __b1__.",
      "points": 10,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["nephron"], "caseSensitive": false }
      ],
      "explanation": "Each kidney contains over 1 million nephrons which filter blood to produce urine."
    },
    {
      "id": "q3",
      "type": "multiple-select",
      "question": "Select the functions of the Liver:",
      "points": 10,
      "options": [
        { "id": "a", "text": "Production of bile", "isCorrect": true },
        { "id": "b", "text": "Detoxification of chemicals", "isCorrect": true },
        { "id": "c", "text": "Storage of urine", "isCorrect": false },
        { "id": "d", "text": "Processing of nutrients", "isCorrect": true }
      ],
      "partialCredit": true
    },
    {
      "id": "q4",
      "type": "ordering",
      "question": "Order the flow of air through the respiratory system:",
      "points": 10,
      "items": [
        { "id": "i1", "text": "Nasal Cavity", "correctPosition": 1 },
        { "id": "i2", "text": "Pharynx", "correctPosition": 2 },
        { "id": "i3", "text": "Trachea", "correctPosition": 3 },
        { "id": "i4", "text": "Bronchi", "correctPosition": 4 },
        { "id": "i5", "text": "Alveoli", "correctPosition": 5 }
      ]
    },
    {
      "id": "q5",
      "type": "image-based",
      "question": "Click on the location of the Urinary Bladder:",
      "points": 10,
      "imageUrl": "../assets/images/image-20260110-414da6b1.jpeg",
      "imageAlt": "Urinary System Diagram",
      "hotspots": [
        { "id": "h1", "x": 50, "y": 80, "radius": 20, "label": "Bladder", "isCorrect": true },
        { "id": "h2", "x": 30, "y": 20, "radius": 15, "label": "Right Kidney", "isCorrect": false },
        { "id": "h3", "x": 70, "y": 20, "radius": 15, "label": "Left Kidney", "isCorrect": false }
      ]
    }
  ]
});