registerQuiz("topic-01-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-01-quiz",
  "metadata": {
    "title": "Fundamentals of Traumatology Quiz",
    "description": "Test your knowledge on the definitions, branches, and key terminologies in traumatology.",
    "topicId": "topic-01",
    "difficulty": "beginner",
    "estimatedTime": 10,
    "passingScore": 80,
    "createdAt": "2026-02-04T00:00:00Z",
    "updatedAt": "2026-02-04T00:00:00Z",
    "tags": ["traumatology", "definitions", "history", "terminologies"]
  },
  "settings": {
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "showFeedback": "immediate",
    "allowRetry": true,
    "showCorrectAnswers": true,
    "timeLimit": 0
  },
  "questions": [
    {
      "id": "t1-q1",
      "type": "multiple-choice",
      "question": "The term 'Traumatology' is derived from two Greek words, 'trauma' and 'logos'. What do these words mean?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "Injury and Science/Study", "isCorrect": true },
        { "id": "opt2", "text": "Accident and Treatment", "isCorrect": false },
        { "id": "opt3", "text": "Wound and Surgery", "isCorrect": false },
        { "id": "opt4", "text": "Pain and Healing", "isCorrect": false }
      ],
      "explanation": "Traumatology comes from 'trauma' meaning injury or wound, and 'logos' meaning science or study."
    },
    {
      "id": "t1-q2",
      "type": "multiple-choice",
      "question": "Polytrauma is defined as a condition where a person has subjected to multiple traumatic injuries. What Injury Severity Score (ISS) indicates polytrauma?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "ISS ≥ 16", "isCorrect": true },
        { "id": "opt2", "text": "ISS ≥ 10", "isCorrect": false },
        { "id": "opt3", "text": "ISS ≥ 25", "isCorrect": false },
        { "id": "opt4", "text": "ISS ≥ 5", "isCorrect": false }
      ],
      "explanation": "Polytrauma is defined via an Injury Severity Score (ISS) greater than or equal to 16."
    },
    {
      "id": "t1-q3",
      "type": "matching",
      "question": "Match the branch or type of trauma to its correct description.",
      "points": 3,
      "pairs": [
        { "id": "pair1", "left": "Medical Traumatology", "right": "Specializes in treatment of wounds/injuries from violence or accidents" },
        { "id": "pair2", "left": "Psychological Traumatology", "right": "Damage to the mind due to a distressing event" },
        { "id": "pair3", "left": "Penetrating Trauma", "right": "Injury where an object pierces the skin and enters body tissue" }
      ],
      "explanation": "Medical traumatology focuses on physical injuries and surgical therapy, while psychological traumatology deals with mental damage. Penetrating trauma involves a break in the skin."
    },
    {
      "id": "t1-q4",
      "type": "true-false",
      "question": "Blunt trauma always results in visible external damage to the skin.",
      "points": 1,
      "correctAnswer": false,
      "explanation": "Blunt trauma is non-penetrating. The skin is not necessarily broken and damage may not be visible externally, but injury may extend deep inside body tissues."
    },
    {
      "id": "t1-q5",
      "type": "multiple-choice",
      "question": "According to the global injury statistics presented, injury accounts for approximately what percentage of the world's deaths?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "10%", "isCorrect": true },
        { "id": "opt2", "text": "5%", "isCorrect": false },
        { "id": "opt3", "text": "25%", "isCorrect": false },
        { "id": "opt4", "text": "50%", "isCorrect": false }
      ],
      "explanation": "Injury accounts for 5.8 million deaths/year, which is approximately 10% of the world's deaths."
    },
    {
      "id": "t1-q6",
      "type": "fill-blank",
      "question": "The training program for medical providers in the management of acute trauma cases is known as __id1__ (use the acronym).",
      "points": 1,
      "blanks": [
        {
          "id": "id1",
          "acceptedAnswers": ["ATLS", "A.T.L.S"],
          "caseSensitive": false
        }
      ],
      "explanation": "ATLS stands for Advanced Trauma Life Support."
    }
  ]
});