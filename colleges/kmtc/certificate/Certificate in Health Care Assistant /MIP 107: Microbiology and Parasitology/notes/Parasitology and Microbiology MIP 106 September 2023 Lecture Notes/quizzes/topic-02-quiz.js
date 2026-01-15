registerQuiz("topic-02-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-02-quiz",
  "metadata": {
    "title": "Cestodes & Trichinella Quiz",
    "description": "Assess your understanding of Tapeworms and Trichinella spiralis.",
    "topicId": "topic-02-cestodes-trichinella",
    "difficulty": "intermediate",
    "estimatedTime": 15,
    "passingScore": 70,
    "createdAt": "2025-12-25T00:00:00Z",
    "tags": ["cestodes", "tapeworms", "trichinella"]
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
      "question": "Which parasite is commonly known as the 'Beef Tapeworm'?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Taenia solium", "isCorrect": false },
        { "id": "b", "text": "Taenia saginata", "isCorrect": true },
        { "id": "c", "text": "Diphyllobothrium latum", "isCorrect": false },
        { "id": "d", "text": "Echinococcus granulosus", "isCorrect": false }
      ],
      "explanation": "Taenia saginata is the cow/beef tapeworm; T. solium is the pig tapeworm."
    },
    {
      "id": "q2",
      "type": "fill-blank",
      "question": "The larval stage of Taenia saginata that encysts in cattle muscle is called __b1__.",
      "points": 10,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["cysticercus bovis", "cystcercus bovis"], "caseSensitive": false }
      ],
      "explanation": "Larvae travel to predilection sites in cattle and encyst forming Cysticercus bovis."
    },
    {
      "id": "q3",
      "type": "matching",
      "question": "Match the tapeworm with its intermediate host:",
      "points": 15,
      "pairs": [
        { "id": "p1", "left": "Taenia saginata", "right": "Cattle/Cow" },
        { "id": "p2", "left": "Taenia solium", "right": "Pig" },
        { "id": "p3", "left": "Diphyllobothrium latum", "right": "Cyclops/Fish" }
      ],
      "explanation": "T. saginata uses cattle, T. solium uses pigs, and D. latum uses Cyclops and then Fish."
    },
    {
      "id": "q4",
      "type": "multiple-choice",
      "question": "Which symptom is specifically associated with Diphyllobothrium latum infection?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Anaemia", "isCorrect": true },
        { "id": "b", "text": "Elephantiasis", "isCorrect": false },
        { "id": "c", "text": "River blindness", "isCorrect": false },
        { "id": "d", "text": "Calabar swellings", "isCorrect": false }
      ],
      "explanation": "D. latum absorbs Vitamin B12 causing anemia."
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "question": "How do humans acquire Trichinosis (Trichinella spiralis)?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Walking barefoot", "isCorrect": false },
        { "id": "b", "text": "Ingestion of raw/undercooked pork", "isCorrect": true },
        { "id": "c", "text": "Mosquito bite", "isCorrect": false },
        { "id": "d", "text": "Drinking contaminated water", "isCorrect": false }
      ],
      "explanation": "Man is infected by ingestion of raw pork containing encysted larvae."
    },
    {
      "id": "q6",
      "type": "true-false",
      "question": "Cestodes have a complete alimentary canal.",
      "points": 10,
      "correctAnswer": false,
      "explanation": "Cestodes have NO alimentary canal; they absorb nutrients through their body wall. Nematodes have a complete alimentary canal."
    },
    {
      "id": "q7",
      "type": "multiple-select",
      "question": "Where are the places of predilection for Cysticercus bovis in cattle? (Select all that apply)",
      "points": 10,
      "options": [
        { "id": "a", "text": "Heart", "isCorrect": true },
        { "id": "b", "text": "Tongue", "isCorrect": true },
        { "id": "c", "text": "Intestines", "isCorrect": false },
        { "id": "d", "text": "Masseter muscles", "isCorrect": true }
      ],
      "partialCredit": true,
      "explanation": "The larvae migrate to active muscles: heart, tongue, masseter muscles, and diaphragm."
    },
    {
      "id": "q8",
      "type": "multiple-choice",
      "question": "Which parasite uses Cyclops (water fleas) as a first intermediate host?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Taenia saginata", "isCorrect": false },
        { "id": "b", "text": "Taenia solium", "isCorrect": false },
        { "id": "c", "text": "Diphyllobothrium latum", "isCorrect": true },
        { "id": "d", "text": "Trichinella spiralis", "isCorrect": false }
      ],
      "explanation": "D. latum eggs hatch into coracidium which is ingested by Cyclops."
    },
    {
      "id": "q9",
      "type": "fill-blank",
      "question": "Trichinella spiralis larvae encyst in the __b1__ muscle.",
      "points": 10,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["striated"], "caseSensitive": false }
      ],
      "explanation": "Larvae are transported to predilection sites including the tongue, diaphragm, and striated muscle."
    },
    {
      "id": "q10",
      "type": "short-answer",
      "question": "Name one prevention method for Taenia solium.",
      "points": 15,
      "keywords": ["cook", "cooking", "pork", "inspection", "disposal", "feaces", "feces", "restrict", "pigs"],
      "minKeywords": 1,
      "modelAnswer": "Thorough cooking of pork, thorough meat inspection, safe disposal of feaces, or restricting pigs."
    }
  ]
});