registerQuiz("topic-02-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-02-quiz",
  "metadata": {
    "title": "Support and Locomotion Quiz",
    "description": "Test your knowledge on bones, joints, fractures, and musculoskeletal disorders.",
    "topicId": "topic-02-support-locomotion",
    "difficulty": "intermediate",
    "estimatedTime": 20,
    "passingScore": 75,
    "createdAt": "2025-12-25T12:00:00Z"
  },
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "question": "Which bone cells are responsible for bone resorption (shaping and maintenance)?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Osteoblasts", "isCorrect": false },
        { "id": "b", "text": "Osteoclasts", "isCorrect": true },
        { "id": "c", "text": "Osteocytes", "isCorrect": false },
        { "id": "d", "text": "Chondrocytes", "isCorrect": false }
      ],
      "explanation": "Osteoclasts are involved in the shaping of the bone through bone re-absorption. Osteoblasts are involved in bone building."
    },
    {
      "id": "q2",
      "type": "image-based",
      "question": "Identify the type of fracture shown in the image:",
      "points": 10,
      "imageUrl": "../assets/images/image-20260110-3ac48765.jpeg",
      "imageAlt": "Diagram of a bone broken but not penetrating the skin",
      "options": [
        { "id": "a", "text": "Open Fracture", "isCorrect": false },
        { "id": "b", "text": "Greenstick Fracture", "isCorrect": false },
        { "id": "c", "text": "Closed Fracture", "isCorrect": true },
        { "id": "d", "text": "Comminuted Fracture", "isCorrect": false }
      ],
      "explanation": "A closed fracture is one where there is no open wound communicating with the fracture site."
    },
    {
      "id": "q3",
      "type": "fill-blank",
      "question": "A lateral deviation of the spinal column is called __1__.",
      "points": 10,
      "blanks": [
        { "id": "1", "acceptedAnswers": ["scoliosis"], "caseSensitive": false }
      ],
      "explanation": "Scoliosis is the lateral deviation of the spine. Kyphosis is thoracic curvature, and Lordosis is lumbar curvature."
    },
    {
      "id": "q4",
      "type": "multiple-select",
      "question": "Select the correct principles of management for fractures. Select all that apply:",
      "points": 15,
      "options": [
        { "id": "a", "text": "Reduction", "isCorrect": true },
        { "id": "b", "text": "Immobilisation", "isCorrect": true },
        { "id": "c", "text": "Rehabilitation", "isCorrect": true },
        { "id": "d", "text": "Dislocation", "isCorrect": false }
      ],
      "partialCredit": true,
      "explanation": "The three main lines of fracture management are Reduction, Immobilisation, and Rehabilitation."
    },
    {
      "id": "q5",
      "type": "true-false",
      "question": "In Rheumatoid Arthritis, the disease typically begins in the articular cartilage.",
      "points": 5,
      "correctAnswer": false,
      "explanation": "Rheumatoid Arthritis begins in the synovial membrane (synovitis), which then leads to pannus formation and cartilage destruction. Osteoarthritis involves cartilage degeneration."
    },
    {
      "id": "q6",
      "type": "matching",
      "question": "Match the joint movement to its definition:",
      "points": 15,
      "pairs": [
        { "id": "p1", "left": "Abduction", "right": "Movement away from the midline" },
        { "id": "p2", "left": "Adduction", "right": "Movement towards the midline" },
        { "id": "p3", "left": "Supination", "right": "Turning the palm up" },
        { "id": "p4", "left": "Pronation", "right": "Turning the palm downwards" }
      ]
    },
    {
      "id": "q7",
      "type": "multiple-choice",
      "question": "Which of the following dietary recommendations is appropriate for a patient with Gout?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Increase intake of roast meat", "isCorrect": false },
        { "id": "b", "text": "Increase intake of liver and sardines", "isCorrect": false },
        { "id": "c", "text": "Avoid foods rich in purines", "isCorrect": true },
        { "id": "d", "text": "Decrease fluid intake", "isCorrect": false }
      ],
      "explanation": "Gout is caused by uric acid accumulation from purine metabolism. Patients should avoid purine-rich foods like organ meats and sardines."
    }
  ]
});