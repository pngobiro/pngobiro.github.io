registerQuiz("topic-01-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-01-quiz",
  "metadata": {
    "title": "Section 1: Concepts, Principles and Theories",
    "description": "Test your knowledge on mental health definitions, personality theories, and history of psychiatric nursing.",
    "topicId": "topic-01",
    "difficulty": "intermediate",
    "estimatedTime": 15,
    "passingScore": 70,
    "createdAt": "2026-01-17T00:00:00Z",
    "tags": ["mental health", "freud", "erikson", "history", "nursing"]
  },
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "question": "According to the World Health Organisation (WHO), mental health is defined as:",
      "points": 1,
      "options": [
        {
          "id": "opt1",
          "text": "The absence of mental illness or infirmity.",
          "isCorrect": false
        },
        {
          "id": "opt2",
          "text": "A state of emotional well-being which enables one to function comfortably within society and to be satisfied with one's own achievements.",
          "isCorrect": true
        },
        {
          "id": "opt3",
          "text": "The capacity for mature and flexible resolution of conflicts between instincts and reality.",
          "isCorrect": false
        },
        {
          "id": "opt4",
          "text": "The ability to carry out social roles and adapt to the environment.",
          "isCorrect": false
        }
      ],
      "explanation": "WHO defines mental health as 'a state of emotional well-being which enables one to function comfortably within society and to be satisfied with one's own achievements.'"
    },
    {
      "id": "q2",
      "type": "fill-blank",
      "question": "In psychoanalytic theory, the human personality is made up of three structures. The __id__ is primitive and driven by impulses, the __super_ego__ contains values and moral regulations, and the __ego__ is in contact with reality and mediates between the other two.",
      "points": 3,
      "blanks": [
        {
          "id": "id",
          "acceptedAnswers": ["id"],
          "caseSensitive": false
        },
        {
          "id": "super_ego",
          "acceptedAnswers": ["super ego", "superego"],
          "caseSensitive": false
        },
        {
          "id": "ego",
          "acceptedAnswers": ["ego"],
          "caseSensitive": false
        }
      ],
      "explanation": "Freud's structural model consists of the Id (instincts), Ego (reality), and Super Ego (morality)."
    },
    {
      "id": "q3",
      "type": "matching",
      "question": "Match the Erikson's Psychosocial Stage with the corresponding age group.",
      "points": 4,
      "pairs": [
        {
          "id": "p1",
          "left": "Trust versus Mistrust",
          "right": "Birth to 18 months"
        },
        {
          "id": "p2",
          "left": "Autonomy versus Shame and Doubt",
          "right": "18 months to 3 years"
        },
        {
          "id": "p3",
          "left": "Industry versus Inferiority",
          "right": "6 to 12 years"
        },
        {
          "id": "p4",
          "left": "Identity versus Role Confusion",
          "right": "12 to 20 years"
        }
      ]
    },
    {
      "id": "q4",
      "type": "multiple-select",
      "question": "Which of the following are considered 'Predisposing Factors' for mental illness?",
      "points": 2,
      "options": [
        {
          "id": "opt1",
          "text": "Adverse experiences in early life",
          "isCorrect": true
        },
        {
          "id": "opt2",
          "text": "Sudden loss of a job",
          "isCorrect": false
        },
        {
          "id": "opt3",
          "text": "Genetic or biological factors in infancy",
          "isCorrect": true
        },
        {
          "id": "opt4",
          "text": "Secondary demoralisation",
          "isCorrect": false
        }
      ],
      "explanation": "Predisposing factors determine likelihood (early life experiences, genetics). Sudden loss of a job is a Precipitating factor. Secondary demoralisation is a Perpetuating factor."
    },
    {
      "id": "q5",
      "type": "true-false",
      "question": "In the 'Humanitarian Period' of psychiatric history, Dr. Philippe Pinel is famous for unchaining patients at Bicetre Hospital in Paris.",
      "points": 1,
      "correctAnswer": true,
      "explanation": "Yes, Dr. Philippe Pinel unchained a group of patients in 1793 at Bicetre Hospital, advocating for kindness which led to marked improvements."
    },
    {
      "id": "q6",
      "type": "ordering",
      "question": "Arrange the Historical Periods of psychiatric nursing in chronological order.",
      "points": 3,
      "items": [
        {
          "id": "item1",
          "text": "Demonological Period",
          "correctPosition": 1
        },
        {
          "id": "item2",
          "text": "Political Period",
          "correctPosition": 2
        },
        {
          "id": "item3",
          "text": "Humanitarian Period",
          "correctPosition": 3
        },
        {
          "id": "item4",
          "text": "Scientific Period",
          "correctPosition": 4
        }
      ]
    },
    {
      "id": "q7",
      "type": "short-answer",
      "question": "What is the key principle of 'Empathy' in psychiatric nursing?",
      "points": 2,
      "keywords": ["shoes", "understand", "feeling", "cared"],
      "minKeywords": 2,
      "modelAnswer": "Empathy is putting yourself in another's shoes while remaining emotionally detached, to give the patient the feeling of being understood and cared about.",
      "explanation": "Empathy involves understanding the patient's perspective ('putting yourself in another's shoes') to make them feel understood and cared about."
    }
  ]
});