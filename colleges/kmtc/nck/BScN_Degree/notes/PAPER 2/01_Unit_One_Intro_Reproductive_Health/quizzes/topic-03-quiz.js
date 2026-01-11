registerQuiz("topic-03-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-03-quiz",
  "metadata": {
    "title": "Gender Issues & Reproductive Rights",
    "description": "Test your knowledge on gender concepts, harmful cultural practices, and types of gender-based violence.",
    "topicId": "topic-03",
    "difficulty": "intermediate",
    "estimatedTime": 12,
    "passingScore": 70,
    "createdAt": "2026-01-11T12:00:00Z"
  },
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "question": "What is the difference between 'Gender' and 'Sex'?",
      "points": 10,
      "options": [
        { "id": "a", "text": "They are synonymous", "isCorrect": false },
        { "id": "b", "text": "Sex is biological; Gender refers to social/cultural roles", "isCorrect": true },
        { "id": "c", "text": "Gender is biological; Sex refers to social/cultural roles", "isCorrect": false },
        { "id": "d", "text": "Gender is fixed; Sex changes over time", "isCorrect": false }
      ],
      "explanation": "Sex refers to biological characteristics (male/female), while Gender refers to economic, social, or cultural attributes."
    },
    {
      "id": "q2",
      "type": "image-based",
      "question": "Which type of FGM involves the removal of the clitoris, labia minora, and stitching of the vulva (as shown in Fig 3.1)?",
      "points": 15,
      "imageUrl": "../assets/images/image-20260111-019bb16b.jpeg",
      "imageAlt": "Diagram of Infibulation",
      "options": [
        { "id": "a", "text": "Circumcision", "isCorrect": false },
        { "id": "b", "text": "Excision", "isCorrect": false },
        { "id": "c", "text": "Infibulation", "isCorrect": true },
        { "id": "d", "text": "Intermediate", "isCorrect": false }
      ],
      "explanation": "Infibulation is the most severe form, involving narrowing of the vaginal opening by cutting and stitching."
    },
    {
      "id": "q3",
      "type": "multiple-select",
      "question": "What are the potential consequences of Wife Inheritance? (Select all that apply)",
      "points": 15,
      "options": [
        { "id": "a", "text": "Spread of HIV/AIDS", "isCorrect": true },
        { "id": "b", "text": "Economic exploitation of widows", "isCorrect": true },
        { "id": "c", "text": "Improved reproductive health", "isCorrect": false },
        { "id": "d", "text": "Death of whole families", "isCorrect": true }
      ],
      "partialCredit": true,
      "explanation": "While traditionally intended for lineage, wife inheritance now facilitates the spread of HIV/AIDS and can lead to economic abuse."
    },
    {
      "id": "q4",
      "type": "matching",
      "question": "Match the form of abuse with its description:",
      "points": 20,
      "pairs": [
        { "id": "p1", "left": "Physical Abuse", "right": "Slapping, kicking, using weapons" },
        { "id": "p2", "left": "Economic Abuse", "right": "Denial of land ownership or income control" },
        { "id": "p3", "left": "Sexual Abuse", "right": "Rape, incest, forced prostitution" },
        { "id": "p4", "left": "Psychological Abuse", "right": "Verbal threats, isolation, deprivation" }
      ]
    },
    {
      "id": "q5",
      "type": "fill-blank",
      "question": "According to the World Bank, violence against women causes more death and disability in women aged 15-44 than __b1__, malaria, traffic accidents, and war combined.",
      "points": 10,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["cancer", "Cancer"], "caseSensitive": false }
      ],
      "explanation": "Gender-based violence is a leading cause of morbidity/mortality, exceeding cancer in this age group."
    },
    {
      "id": "q6",
      "type": "true-false",
      "question": "Rape is primarily motivated by sexual desire.",
      "points": 5,
      "correctAnswer": false,
      "explanation": "Rape rarely has anything to do with sex/seductiveness; it has everything to do with power and domination."
    }
  ]
});