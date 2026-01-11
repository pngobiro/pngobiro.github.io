registerQuiz("topic-02-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-02-quiz",
  "metadata": {
    "title": "Adolescent and Youth Health",
    "description": "Assess your understanding of adolescent development, reproductive health needs, and life planning skills.",
    "topicId": "topic-02",
    "difficulty": "intermediate",
    "estimatedTime": 10,
    "passingScore": 70,
    "createdAt": "2026-01-11T12:00:00Z"
  },
  "settings": {
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "showFeedback": "immediate",
    "allowRetry": true
  },
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "question": "According to statistics, approximately what percentage of Kenyan adolescents (15-19 years) are HIV positive (Females)?",
      "points": 10,
      "options": [
        { "id": "a", "text": "4.2%", "isCorrect": false },
        { "id": "b", "text": "10%", "isCorrect": false },
        { "id": "c", "text": "22.3%", "isCorrect": true },
        { "id": "d", "text": "45%", "isCorrect": false }
      ],
      "explanation": "HIV prevalence among adolescents 15-19 years stands at 22.3% for females and 4.2% for males."
    },
    {
      "id": "q2",
      "type": "matching",
      "question": "Match the hormone with its effect on secondary sexual characteristics:",
      "points": 15,
      "pairs": [
        { "id": "p1", "left": "Oestrogen", "right": "Breast development, hip broadening (Girls)" },
        { "id": "p2", "left": "Androgens", "right": "Voice deepening, muscular strength (Boys)" }
      ]
    },
    {
      "id": "q3",
      "type": "multiple-select",
      "question": "Which of the following are considered 'Life Planning Skills'? (Select all that apply)",
      "points": 15,
      "options": [
        { "id": "a", "text": "Values verification", "isCorrect": true },
        { "id": "b", "text": "Decision making abilities", "isCorrect": true },
        { "id": "c", "text": "Assertiveness", "isCorrect": true },
        { "id": "d", "text": "Passive compliance", "isCorrect": false }
      ],
      "explanation": "Life planning skills include values verification, decision making, communication, negotiation, and assertiveness."
    },
    {
      "id": "q4",
      "type": "true-false",
      "question": "Studies show that sex education encourages earlier and increased sexual activity among young people.",
      "points": 5,
      "correctAnswer": false,
      "explanation": "Studies have shown that sex education leads to safe behavior and does NOT encourage earlier or increased sexual activity."
    },
    {
      "id": "q5",
      "type": "fill-blank",
      "question": "The first ejaculation in boys is technically known as __b1__.",
      "points": 10,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["spermache", "Spermache"], "caseSensitive": false }
      ],
      "explanation": "Spermache refers to the first ejaculation, often occurring as nocturnal emissions."
    },
    {
      "id": "q6",
      "type": "multiple-choice",
      "question": "Which skill allows a young person to say 'NO' to drugs or sexual advances based on their beliefs?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Aggression", "isCorrect": false },
        { "id": "b", "text": "Assertiveness", "isCorrect": true },
        { "id": "c", "text": "Empathy", "isCorrect": false },
        { "id": "d", "text": "Negotiation", "isCorrect": false }
      ],
      "explanation": "Assertiveness means being confident and able to make a stand on one's words, actions, or beliefs without being aggressive."
    },
    {
      "id": "q7",
      "type": "multiple-select",
      "question": "Which of the following are principles for working effectively with young people? (Select all that apply)",
      "points": 10,
      "options": [
        { "id": "a", "text": "Identify and encourage peer leadership", "isCorrect": true },
        { "id": "b", "text": "Ensure privacy and confidentiality", "isCorrect": true },
        { "id": "c", "text": "Refer to providers of the same sex where possible", "isCorrect": true },
        { "id": "d", "text": "Treat them exactly like adults", "isCorrect": false }
      ],
      "explanation": "Young people have a specific culture and needs; they require privacy, confidentiality, and often respond better to peers or same-sex providers."
    }
  ]
});