registerQuiz("topic-02-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-02-quiz",
  "metadata": {
    "title": "Section 2: Admission & Discharge Procedures",
    "description": "Test your knowledge on the Mental Health Act, admission forms, and legal provisions for mental health care.",
    "topicId": "topic-02",
    "difficulty": "intermediate",
    "estimatedTime": 15,
    "passingScore": 70,
    "createdAt": "2026-01-17T00:00:00Z",
    "tags": ["mental health act", "admission", "legal", "nursing"]
  },
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "question": "Which section of the Mental Health Act (Cap 248) deals with Voluntary Patients?",
      "points": 1,
      "options": [
        {
          "id": "opt1",
          "text": "Part V (Section 10)",
          "isCorrect": true
        },
        {
          "id": "opt2",
          "text": "Part VI (Section 14)",
          "isCorrect": false
        },
        {
          "id": "opt3",
          "text": "Part VII (Section 1b)",
          "isCorrect": false
        },
        {
          "id": "opt4",
          "text": "Part VIII (Section 17)",
          "isCorrect": false
        }
      ],
      "explanation": "Part V (Section 10) deals with Voluntary Patients who submit themselves for treatment."
    },
    {
      "id": "q2",
      "type": "matching",
      "question": "Match the MOH form number to its correct purpose for admission.",
      "points": 4,
      "pairs": [
        {
          "id": "p1",
          "left": "MOH 613",
          "right": "Voluntary patient (Self request)"
        },
        {
          "id": "p2",
          "left": "MOH 637",
          "right": "Voluntary patient (Under 16 years, by guardian)"
        },
        {
          "id": "p3",
          "left": "MOH 614",
          "right": "Involuntary patient (Application by husband/wife/relative)"
        },
        {
          "id": "p4",
          "left": "MOH 638",
          "right": "Emergency Admission (Police/Admin officer)"
        }
      ]
    },
    {
      "id": "q3",
      "type": "short-answer",
      "question": "Under emergency admission (Part VII), a patient should be reviewed after how many hours to determine if they are of sound mind?",
      "points": 2,
      "keywords": ["72", "72 hours", "seventy two"],
      "minKeywords": 1,
      "modelAnswer": "72 hours",
      "explanation": "The patient should be reviewed after 72 hours and can be discharged if found to be of sound mind."
    },
    {
      "id": "q4",
      "type": "multiple-select",
      "question": "Which of the following are offences under the Mental Health Act (Part XIV)?",
      "points": 3,
      "options": [
        {
          "id": "opt1",
          "text": "A person other than a medical practitioner signing certificates (Section 47)",
          "isCorrect": true
        },
        {
          "id": "opt2",
          "text": "Admitting a voluntary patient with Form MOH 613",
          "isCorrect": false
        },
        {
          "id": "opt3",
          "text": "Assisting the escape of a person suffering from mental disorder (Section 49)",
          "isCorrect": true
        },
        {
          "id": "opt4",
          "text": "Giving or selling articles to a patient without consent of person in charge (Section 52)",
          "isCorrect": true
        }
      ],
      "explanation": "Admitting a voluntary patient correctly is not an offence. Signing certificates without being a practitioner, assisting escape, and giving unauthorized articles are offences."
    },
    {
      "id": "q5",
      "type": "ordering",
      "question": "Arrange the phases of Memory checked during Mental Status Assessment from shortest duration to longest.",
      "points": 3,
      "items": [
        {
          "id": "item1",
          "text": "Immediate memory (min/hrs)",
          "correctPosition": 1
        },
        {
          "id": "item2",
          "text": "Recent memory (days, weeks, months)",
          "correctPosition": 2
        },
        {
          "id": "item3",
          "text": "Past or remote memory (10 years and above)",
          "correctPosition": 3
        }
      ]
    }
  ]
});