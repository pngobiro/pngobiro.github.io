registerQuiz("topic-02-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-02-quiz",
  "metadata": {
    "title": "Mechanisms of Injury Quiz",
    "description": "Assess your understanding of kinetic energy, collision types, and specific injury patterns.",
    "topicId": "topic-02",
    "difficulty": "intermediate",
    "estimatedTime": 15,
    "passingScore": 80,
    "createdAt": "2026-02-04T00:00:00Z",
    "updatedAt": "2026-02-04T00:00:00Z",
    "tags": ["MOI", "collisions", "pedestrian", "falls"]
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
      "id": "t2-q1",
      "type": "multiple-choice",
      "question": "Which triad describes the pattern of injuries in children and people of short stature when struck by a vehicle?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "Waddell's Triad", "isCorrect": true },
        { "id": "opt2", "text": "O'Donohue's Triad", "isCorrect": false },
        { "id": "opt3", "text": "Cushing's Triad", "isCorrect": false },
        { "id": "opt4", "text": "Virchow's Triad", "isCorrect": false }
      ],
      "explanation": "Waddell's triad describes the injury pattern in children: Bumper hits femur, Hood hits chest/abdomen, Ground hits head."
    },
    {
      "id": "t2-q2",
      "type": "ordering",
      "question": "Arrange the sequence of impacts in a typical adult pedestrian injury (O'Donohue's Triad).",
      "points": 3,
      "items": [
        { "id": "step1", "text": "Bumper strikes lower legs (Tib-fib fracture)", "correctPosition": 1 },
        { "id": "step2", "text": "Body is thrown onto hood (Femur/pelvic fractures)", "correctPosition": 2 },
        { "id": "step3", "text": "Body strikes the ground or other object", "correctPosition": 3 }
      ],
      "explanation": "Adults typically turn away from the vehicle. First impact is bumper to legs, second is body to hood, third is body to ground."
    },
    {
      "id": "t2-q3",
      "type": "multiple-choice",
      "question": "In a 'Don Juan Syndrome' fall (landing on feet), which of the following injuries is MOST likely?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "Bilateral calcaneal (heel) fractures", "isCorrect": true },
        { "id": "opt2", "text": "Skull fracture", "isCorrect": false },
        { "id": "opt3", "text": "Rib fractures", "isCorrect": false },
        { "id": "opt4", "text": "Femur fracture", "isCorrect": false }
      ],
      "explanation": "Don Juan Syndrome involves landing on the feet, transmitting force up the skeletal system, commonly causing calcaneal fractures and lumbar compression fractures."
    },
    {
      "id": "t2-q4",
      "type": "multiple-select",
      "question": "Which of the following factors affect the severity of a stab wound? (Select all that apply)",
      "points": 2,
      "options": [
        { "id": "opt1", "text": "Anatomic area involved", "isCorrect": true },
        { "id": "opt2", "text": "Depth of penetration", "isCorrect": true },
        { "id": "opt3", "text": "Blade length", "isCorrect": true },
        { "id": "opt4", "text": "Angle of penetration", "isCorrect": true },
        { "id": "opt5", "text": "Wind speed", "isCorrect": false }
      ],
      "explanation": "Stab wound severity depends on the anatomy, depth, blade length, and angle of penetration."
    },
    {
      "id": "t2-q5",
      "type": "multiple-choice",
      "question": "Which type of collision is also known as a 'T-bone' collision?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "Lateral Impact Collision", "isCorrect": true },
        { "id": "opt2", "text": "Frontal Impact Collision", "isCorrect": false },
        { "id": "opt3", "text": "Rear-end Impact Collision", "isCorrect": false },
        { "id": "opt4", "text": "Rotational Impact", "isCorrect": false }
      ],
      "explanation": "Lateral impact collisions, where a vehicle is struck from the side, are often referred to as T-bone collisions."
    },
    {
      "id": "t2-q6",
      "type": "true-false",
      "question": "Organs that contain liquid are more easily compressed than organs that contain gas during an impact.",
      "points": 1,
      "correctAnswer": false,
      "explanation": "Organs that contain gas are easily compressed. Liquid-containing organs are less compressible and more prone to rupture under pressure."
    }
  ]
});