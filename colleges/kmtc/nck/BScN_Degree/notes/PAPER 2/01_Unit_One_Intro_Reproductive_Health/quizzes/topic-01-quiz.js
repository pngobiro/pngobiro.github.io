registerQuiz("topic-01-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-01-quiz",
  "metadata": {
    "title": "Historical Background & RH Policies",
    "description": "Test your knowledge on the evolution of RH programs, national guidelines, and the structure of health services in Kenya.",
    "topicId": "topic-01",
    "difficulty": "intermediate",
    "estimatedTime": 10,
    "passingScore": 70,
    "createdAt": "2026-01-11T12:00:00Z"
  },
  "settings": {
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "showFeedback": "immediate",
    "allowRetry": true,
    "showCorrectAnswers": true
  },
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "question": "Which international conference in 1994 marked the global shift from vertical programs to comprehensive, integrated reproductive health services?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Beijing Women's Conference", "isCorrect": false },
        { "id": "b", "text": "ICPD Cairo", "isCorrect": true },
        { "id": "c", "text": "Alma Ata Conference", "isCorrect": false },
        { "id": "d", "text": "Nairobi SMI Conference", "isCorrect": false }
      ],
      "explanation": "The 1994 International Conference on Population and Development (ICPD) in Cairo endorsed the Reproductive Health Agenda, shifting strategies to meet individual needs through comprehensive care."
    },
    {
      "id": "q2",
      "type": "fill-blank",
      "question": "The concept of providing RH services everyday, during the same visit, under one roof is often referred to as the '__b1__' approach.",
      "points": 10,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["supermarket", "Supermarket"], "caseSensitive": false }
      ],
      "explanation": "Integrated RH services create a 'supermarket approach' where a client can access multiple services (FP, ANC, etc.) in a single visit."
    },
    {
      "id": "q3",
      "type": "ordering",
      "question": "Arrange the following events in the evolution of RH programs in Kenya in chronological order:",
      "points": 15,
      "items": [
        { "id": "i1", "text": "Establishment of Family Planning Programme", "correctPosition": 1 },
        { "id": "i2", "text": "Establishment of MCH/FP Programme (Integration)", "correctPosition": 2 },
        { "id": "i3", "text": "Launch of Safe Motherhood Initiative (Nairobi)", "correctPosition": 3 },
        { "id": "i4", "text": "ICPD Cairo Conference", "correctPosition": 4 }
      ],
      "explanation": "FP Programme (1967) -> MCH/FP Integration (1974) -> SMI Launch (1987) -> ICPD Cairo (1994)."
    },
    {
      "id": "q4",
      "type": "matching",
      "question": "Match the level of service delivery with its primary provider/characteristic:",
      "points": 20,
      "pairs": [
        { "id": "p1", "left": "Community Level", "right": "CORPs and CBDs" },
        { "id": "p2", "left": "Dispensary (Primary)", "right": "Community Health Nurse" },
        { "id": "p3", "left": "Health Centre", "right": "Clinical Officer" },
        { "id": "p4", "left": "District Level", "right": "Medical Officer of Health" }
      ]
    },
    {
      "id": "q5",
      "type": "multiple-select",
      "question": "Which of the following are listed as priority components of the RH Implementation Plan? (Select all that apply)",
      "points": 15,
      "options": [
        { "id": "a", "text": "Safe Motherhood and Child Survival", "isCorrect": true },
        { "id": "b", "text": "Management of STIs/HIV/AIDS", "isCorrect": true },
        { "id": "c", "text": "Free housing for all mothers", "isCorrect": false },
        { "id": "d", "text": "Prevention and management of infertility", "isCorrect": true }
      ],
      "partialCredit": true,
      "explanation": "Priorities include Safe Motherhood, Family Planning, STI/HIV, Adolescent Health, Gender issues, Cancer screening, Infertility, and Care of the elderly."
    },
    {
      "id": "q6",
      "type": "true-false",
      "question": "According to the 1994 definition, Reproductive Health is merely the absence of disease or infirmity in the reproductive system.",
      "points": 5,
      "correctAnswer": false,
      "explanation": "RH is a state of complete physical, mental and social well-being, NOT merely the absence of disease."
    },
    {
      "id": "q7",
      "type": "image-based",
      "question": "Based on the graph, what was the approximate trend of the Kenyan population between 1948 and 1999?",
      "points": 10,
      "imageUrl": "../assets/images/image-20260111-da934a8f.jpeg",
      "imageAlt": "Graph showing Kenyan population growth",
      "options": [
        { "id": "a", "text": "It decreased steadily", "isCorrect": false },
        { "id": "b", "text": "It remained stagnant", "isCorrect": false },
        { "id": "c", "text": "It increased rapidly", "isCorrect": true },
        { "id": "d", "text": "It fluctuated randomly", "isCorrect": false }
      ],
      "explanation": "The population grew from approx 5.4m in 1948 to nearly 30m by 1999, doubling between 1979 and 1998."
    }
  ]
});