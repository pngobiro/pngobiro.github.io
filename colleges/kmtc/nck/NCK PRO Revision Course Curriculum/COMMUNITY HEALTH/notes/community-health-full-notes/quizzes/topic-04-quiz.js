// topic-04-quiz.js
registerQuiz("topic-04-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-04-quiz",
  "metadata": {
    "title": "Community Diagnosis Quiz",
    "description": "Test your knowledge on community diagnosis processes, indicators, and PRA methods.",
    "topicId": "topic-04",
    "difficulty": "intermediate",
    "estimatedTime": 15,
    "passingScore": 70,
    "createdAt": "2026-01-21T00:00:00Z",
    "updatedAt": "2026-01-21T00:00:00Z",
    "tags": ["diagnosis", "indicators", "pra"]
  },
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "question": "What is the primary purpose of 'Community Diagnosis'?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "To define existing problems, determine resources, and set priorities for health action.", "isCorrect": true },
        { "id": "opt2", "text": "To diagnose individual patients in a community setting.", "isCorrect": false },
        { "id": "opt3", "text": "To calculate the total cost of healthcare.", "isCorrect": false },
        { "id": "opt4", "text": "To appoint new community leaders.", "isCorrect": false }
      ],
      "explanation": "Community diagnosis defines problems, resources, and priorities for the community as a whole."
    },
    {
      "id": "q2",
      "type": "matching",
      "question": "Match the health indicator with its example.",
      "points": 1,
      "pairs": [
        { "id": "p1", "left": "Mortality Indicator", "right": "Crude death rate" },
        { "id": "p2", "left": "Morbidity Indicator", "right": "Incidence and prevalence" },
        { "id": "p3", "left": "Nutritional Indicator", "right": "Prevalence of low birth weight" },
        { "id": "p4", "left": "Health Care Delivery", "right": "Doctor/Population ratio" }
      ],
      "explanation": "Mortality=Death, Morbidity=Illness, Nutritional=Status, Delivery=Service availability."
    },
    {
      "id": "q3",
      "type": "ordering",
      "question": "Order the stages of the Community Diagnosis implementation process.",
      "points": 1,
      "items": [
        { "id": "s1", "text": "Initiation stage", "correctPosition": 1 },
        { "id": "s2", "text": "Data collection and analysis stage", "correctPosition": 2 },
        { "id": "s3", "text": "Diagnosis stage", "correctPosition": 3 },
        { "id": "s4", "text": "Dissemination stage", "correctPosition": 4 }
      ],
      "explanation": "Initiation -> Data Collection -> Diagnosis -> Dissemination."
    },
    {
      "id": "q4",
      "type": "multiple-select",
      "question": "Which of the following are methods of Participatory Rural Appraisal (PRA)?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "Triangulation", "isCorrect": true },
        { "id": "opt2", "text": "Observation", "isCorrect": true },
        { "id": "opt3", "text": "Ranking and Scoring", "isCorrect": true },
        { "id": "opt4", "text": "Participatory Mapping", "isCorrect": true },
        { "id": "opt5", "text": "Laboratory Testing", "isCorrect": false }
      ],
      "explanation": "PRA methods include triangulation, observation, semi-structured interviews, ranking, diagramming, and mapping."
    },
    {
      "id": "q5",
      "type": "fill-blank",
      "question": "The information collected in a community diagnosis is called health __b1__.",
      "points": 1,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["indicators"], "caseSensitive": false }
      ],
      "explanation": "Health indicators are the data points collected (mortality, morbidity, etc.)."
    },
    {
      "id": "q6",
      "type": "true-false",
      "question": "Triangulation in PRA refers to using a single method to collect data.",
      "correctAnswer": false,
      "points": 1,
      "explanation": "Triangulation is linking *different* survey methods to crosscheck information."
    }
  ]
});