registerQuiz("topic-01-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-01-quiz",
  "metadata": {
    "title": "Levels of Organization Quiz",
    "description": "Assess your understanding of basic anatomical terminology, homeostasis, and body organization.",
    "topicId": "topic-01-levels-organization",
    "difficulty": "beginner",
    "estimatedTime": 10,
    "passingScore": 70,
    "createdAt": "2022-05-20T00:00:00Z"
  },
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "question": "What is the definition of Anatomy?",
      "points": 10,
      "options": [
        { "id": "a", "text": "The study of how the body parts work or function", "isCorrect": false },
        { "id": "b", "text": "The study of structures that make up the body and their relationships", "isCorrect": true },
        { "id": "c", "text": "The study of chemical processes in the body", "isCorrect": false },
        { "id": "d", "text": "The study of body tissues under a microscope only", "isCorrect": false }
      ],
      "explanation": "Anatomy is derived from the Greek 'Anatome' (to cut up) and refers to the study of body structures."
    },
    {
      "id": "q2",
      "type": "fill-blank",
      "question": "The relative stability of the body's internal environment is called __b1__.",
      "points": 10,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["homeostasis"], "caseSensitive": false }
      ],
      "explanation": "Homeostasis refers to the body's ability to maintain stable internal conditions despite external changes."
    },
    {
      "id": "q3",
      "type": "ordering",
      "question": "Arrange the levels of structural organization from smallest to largest:",
      "points": 10,
      "items": [
        { "id": "i1", "text": "Chemical (Atoms/Molecules)", "correctPosition": 1 },
        { "id": "i2", "text": "Cellular", "correctPosition": 2 },
        { "id": "i3", "text": "Tissue", "correctPosition": 3 },
        { "id": "i4", "text": "Organ", "correctPosition": 4 },
        { "id": "i5", "text": "System", "correctPosition": 5 },
        { "id": "i6", "text": "Organism", "correctPosition": 6 }
      ]
    },
    {
      "id": "q4",
      "type": "matching",
      "question": "Match the body plane with its description:",
      "points": 10,
      "pairs": [
        { "id": "p1", "left": "Sagittal Plane", "right": "Divides body into right and left halves" },
        { "id": "p2", "left": "Frontal Plane", "right": "Divides body into anterior and posterior sections" },
        { "id": "p3", "left": "Transverse Plane", "right": "Divides body into upper and lower sections" },
        { "id": "p4", "left": "Oblique Plane", "right": "Divides the body obliquely" }
      ]
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "question": "Which cavity contains the heart and lungs?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Abdominal Cavity", "isCorrect": false },
        { "id": "b", "text": "Pelvic Cavity", "isCorrect": false },
        { "id": "c", "text": "Thoracic Cavity", "isCorrect": true },
        { "id": "d", "text": "Vertebral Canal", "isCorrect": false }
      ],
      "explanation": "The thoracic cavity is part of the ventral body cavity and houses the heart and lungs, protected by the rib cage."
    }
  ]
});