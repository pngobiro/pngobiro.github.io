registerQuiz("topic-03-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-03-quiz",
  "metadata": {
    "title": "Nervous and Endocrine Systems Quiz",
    "description": "Evaluate your knowledge of the nervous system, special senses, and endocrine disorders.",
    "topicId": "topic-03-communication-coordination",
    "difficulty": "advanced",
    "estimatedTime": 25,
    "passingScore": 70,
    "createdAt": "2025-12-25T12:00:00Z"
  },
  "questions": [
    {
      "id": "q1",
      "type": "ordering",
      "question": "Order the layers of the meninges from the outermost (skull) to the innermost (brain):",
      "points": 10,
      "items": [
        { "id": "i1", "text": "Dura Mater", "correctPosition": 1 },
        { "id": "i2", "text": "Arachnoid Mater", "correctPosition": 2 },
        { "id": "i3", "text": "Pia Mater", "correctPosition": 3 }
      ],
      "explanation": "The Dura mater is the tough outer layer, followed by the web-like Arachnoid, and the delicate Pia mater directly covering the brain."
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "question": "Which part of the brain controls balance and coordination of voluntary muscle movement?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Cerebrum", "isCorrect": false },
        { "id": "b", "text": "Medulla Oblongata", "isCorrect": false },
        { "id": "c", "text": "Cerebellum", "isCorrect": true },
        { "id": "d", "text": "Hypothalamus", "isCorrect": false }
      ],
      "explanation": "The Cerebellum is responsible for posture, balance, and coordination. The Medulla controls vital signs, and the Cerebrum controls mental activity."
    },
    {
      "id": "q3",
      "type": "fill-blank",
      "question": "A patient with a GCS (Glasgow Coma Scale) score of __1__ or less is generally considered to be in a coma.",
      "points": 10,
      "blanks": [
        { "id": "1", "acceptedAnswers": ["8", "eight"], "caseSensitive": false }
      ],
      "explanation": "A GCS score of 8 or less indicates a severe head injury and coma."
    },
    {
      "id": "q4",
      "type": "multiple-select",
      "question": "Which of the following are signs of increased Intracranial Pressure (ICP)? Select all that apply:",
      "points": 15,
      "options": [
        { "id": "a", "text": "Severe headache", "isCorrect": true },
        { "id": "b", "text": "Projectile vomiting", "isCorrect": true },
        { "id": "c", "text": "Tachycardia (fast heart rate)", "isCorrect": false },
        { "id": "d", "text": "Bradycardia (slow heart rate)", "isCorrect": true },
        { "id": "e", "text": "Pupil oedema (Papilloedema)", "isCorrect": true }
      ],
      "partialCredit": true,
      "explanation": "Increased ICP causes headache, projectile vomiting, papilloedema, and Cushing's triad (which includes bradycardia, not tachycardia)."
    },
    {
      "id": "q5",
      "type": "image-based",
      "question": "Identify the eye structure indicated by the arrow (the lens):",
      "points": 10,
      "imageUrl": "../assets/images/image-20260110-ec40a3c8.jpeg",
      "imageAlt": "Anatomy of the eye",
      "options": [
        { "id": "a", "text": "Cornea", "isCorrect": false },
        { "id": "b", "text": "Lens", "isCorrect": true },
        { "id": "c", "text": "Retina", "isCorrect": false },
        { "id": "d", "text": "Iris", "isCorrect": false }
      ],
      "explanation": "The lens lies behind the pupil and focuses light rays onto the retina."
    },
    {
      "id": "q6",
      "type": "matching",
      "question": "Match the hormone to the gland that secretes it:",
      "points": 15,
      "pairs": [
        { "id": "p1", "left": "Insulin", "right": "Pancreas (Islets of Langerhans)" },
        { "id": "p2", "left": "Thyroxine", "right": "Thyroid Gland" },
        { "id": "p3", "left": "Cortisol", "right": "Adrenal Cortex" },
        { "id": "p4", "left": "Growth Hormone", "right": "Anterior Pituitary" }
      ]
    },
    {
      "id": "q7",
      "type": "true-false",
      "question": "Type I Diabetes Mellitus is characterized by insulin resistance rather than a lack of insulin.",
      "points": 5,
      "correctAnswer": false,
      "explanation": "Type I Diabetes is Insulin Dependent (IDDM) due to a lack of insulin production. Type II is associated with insulin resistance."
    }
  ]
});