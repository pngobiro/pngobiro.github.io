// topic-03-quiz.js
registerQuiz("topic-03-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-03-quiz",
  "metadata": {
    "title": "Non-Communicable Diseases Quiz",
    "description": "Check your knowledge on NCD risk factors, prevention levels, and behavior change.",
    "topicId": "topic-03",
    "difficulty": "intermediate",
    "estimatedTime": 15,
    "passingScore": 70,
    "createdAt": "2026-01-21T00:00:00Z",
    "updatedAt": "2026-01-21T00:00:00Z",
    "tags": ["ncd", "prevention", "lifestyle"]
  },
  "questions": [
    {
      "id": "q1",
      "type": "multiple-select",
      "question": "What are the four main types of Non-Communicable Diseases? (Select 4)",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "Cardiovascular diseases", "isCorrect": true },
        { "id": "opt2", "text": "Cancers", "isCorrect": true },
        { "id": "opt3", "text": "Chronic respiratory diseases", "isCorrect": true },
        { "id": "opt4", "text": "Diabetes", "isCorrect": true },
        { "id": "opt5", "text": "Malaria", "isCorrect": false },
        { "id": "opt6", "text": "HIV/AIDS", "isCorrect": false }
      ],
      "explanation": "The main NCDs are CVD, cancers, chronic respiratory diseases, and diabetes."
    },
    {
      "id": "q2",
      "type": "matching",
      "question": "Match the level of prevention with its goal.",
      "points": 1,
      "pairs": [
        { "id": "p1", "left": "Primary Prevention", "right": "Protect healthy people from developing disease" },
        { "id": "p2", "left": "Secondary Prevention", "right": "Halt/slow progress after diagnosis (disease control)" },
        { "id": "p3", "left": "Tertiary Prevention", "right": "Rehabilitation and managing chronic problems" }
      ],
      "explanation": "Primary = Prevent onset; Secondary = Early treatment/control; Tertiary = Rehab/Complication management."
    },
    {
      "id": "q3",
      "type": "multiple-choice",
      "question": "Which of the following is considered a 'High Risk' exposure for Ebola?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "Percutaneous exposure (needle stick) to body fluids of a symptomatic person.", "isCorrect": true },
        { "id": "opt2", "text": "Brief proximity (same room) with a symptomatic person.", "isCorrect": false },
        { "id": "opt3", "text": "Traveling on an aircraft with a symptomatic person.", "isCorrect": false },
        { "id": "opt4", "text": "Contact with an asymptomatic person who had contact.", "isCorrect": false }
      ],
      "explanation": "Direct exposure to fluids via needle stick or mucous membranes is High Risk. Others are Low or No Identifiable Risk."
    },
    {
      "id": "q4",
      "type": "fill-blank",
      "question": "Modifiable behavioral risk factors for NCDs include tobacco use, physical inactivity, __b1__, and harmful use of alcohol.",
      "points": 1,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["unhealthy diet", "poor diet"], "caseSensitive": false }
      ],
      "explanation": "The 4 main modifiable behaviors are tobacco, inactivity, unhealthy diet, and alcohol."
    },
    {
      "id": "q5",
      "type": "true-false",
      "question": "Tertiary prevention is aimed at the healthy population.",
      "correctAnswer": false,
      "points": 1,
      "explanation": "Tertiary prevention is aimed at the diseased or patient population to manage long-term problems. Primary prevention targets the healthy population."
    },
    {
      "id": "q6",
      "type": "ordering",
      "question": "Arrange the stages of change in behavior.",
      "points": 1,
      "items": [
        { "id": "s1", "text": "Awareness", "correctPosition": 1 },
        { "id": "s2", "text": "Accept responsibility", "correctPosition": 2 },
        { "id": "s3", "text": "Perception of options", "correctPosition": 3 },
        { "id": "s4", "text": "Making choices", "correctPosition": 4 },
        { "id": "s5", "text": "Experiment behavior", "correctPosition": 5 },
        { "id": "s6", "text": "Habitual behavior", "correctPosition": 6 }
      ],
      "explanation": "Change process: Awareness -> Responsibility -> Options -> Choices -> Experiment -> Habit."
    }
  ]
});