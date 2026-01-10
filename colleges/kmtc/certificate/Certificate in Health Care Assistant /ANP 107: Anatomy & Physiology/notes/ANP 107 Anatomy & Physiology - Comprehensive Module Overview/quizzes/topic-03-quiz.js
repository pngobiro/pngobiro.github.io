registerQuiz("topic-03-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-03-quiz",
  "metadata": {
    "title": "Integration & Coordination Quiz",
    "description": "Assess your knowledge of the Nervous System, Special Senses, and Endocrine System.",
    "topicId": "topic-03-integration-coordination",
    "difficulty": "intermediate",
    "estimatedTime": 15,
    "passingScore": 70,
    "createdAt": "2022-05-20T00:00:00Z"
  },
  "questions": [
    {
      "id": "q1",
      "type": "matching",
      "question": "Match the part of the neuron with its function:",
      "points": 10,
      "pairs": [
        { "id": "p1", "left": "Dendrite", "right": "Receives information" },
        { "id": "p2", "left": "Axon", "right": "Transmits signals away from soma" },
        { "id": "p3", "left": "Myelin Sheath", "right": "Insulates and speeds up transmission" },
        { "id": "p4", "left": "Terminal Buttons", "right": "Secretes neurotransmitters" }
      ]
    },
    {
      "id": "q2",
      "type": "fill-blank",
      "question": "The gap between two neurons where neurotransmitters are released is called the __b1__.",
      "points": 10,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["synapse", "synaptic cleft"], "caseSensitive": false }
      ],
      "explanation": "Neurons do not touch; they communicate across the synaptic cleft."
    },
    {
      "id": "q3",
      "type": "image-based",
      "question": "Identify the Cerebellum in the diagram below:",
      "points": 10,
      "imageUrl": "../assets/images/image-20260110-1d99aa87.jpeg",
      "imageAlt": "Anatomy of the brain",
      "hotspots": [
        { "id": "h1", "x": 75, "y": 70, "radius": 15, "label": "Cerebellum", "isCorrect": true },
        { "id": "h2", "x": 40, "y": 30, "radius": 20, "label": "Cerebrum", "isCorrect": false },
        { "id": "h3", "x": 50, "y": 80, "radius": 10, "label": "Brain Stem", "isCorrect": false }
      ]
    },
    {
      "id": "q4",
      "type": "multiple-choice",
      "question": "Which cranial nerve is responsible for the sense of smell?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Optic (II)", "isCorrect": false },
        { "id": "b", "text": "Olfactory (I)", "isCorrect": true },
        { "id": "c", "text": "Vagus (X)", "isCorrect": false },
        { "id": "d", "text": "Facial (VII)", "isCorrect": false }
      ]
    },
    {
      "id": "q5",
      "type": "multiple-select",
      "question": "Which hormones are secreted by the Anterior Pituitary gland? (Select all that apply)",
      "points": 10,
      "options": [
        { "id": "a", "text": "Thyroid Stimulating Hormone (TSH)", "isCorrect": true },
        { "id": "b", "text": "Growth Hormone", "isCorrect": true },
        { "id": "c", "text": "Oxytocin", "isCorrect": false },
        { "id": "d", "text": "Prolactin", "isCorrect": true }
      ],
      "explanation": "Oxytocin is secreted by the Posterior Pituitary. TSH, GH, and Prolactin come from the Anterior Pituitary."
    }
  ]
});