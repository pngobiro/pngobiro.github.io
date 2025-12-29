registerQuiz("topic-10-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-10-quiz",
  "metadata": {
    "title": "Anaesthesia & Recovery Quiz",
    "description": "Test your knowledge of anaesthetic types, drugs, phases, and post-operative care.",
    "topicId": "topic-10",
    "difficulty": "advanced",
    "estimatedTime": 15,
    "passingScore": 80,
    "createdAt": "2025-12-29T12:00:00Z"
  },
  "questions": [
    {
      "id": "q1",
      "type": "matching",
      "question": "Match the drug with its function:",
      "points": 20,
      "pairs": [
        { "id": "p1", "left": "Suxamethonium", "right": "Short-acting muscle relaxant" },
        { "id": "p2", "left": "Atropine", "right": "Reduces secretions" },
        { "id": "p3", "left": "Propofol", "right": "Induction agent" },
        { "id": "p4", "left": "Pethidine", "right": "Analgesic" }
      ],
      "explanation": "Suxamethonium relaxes muscles; Atropine dries secretions; Propofol induces sleep; Pethidine relieves pain."
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "question": "What is the specific antidote/reversal agent for non-depolarising muscle relaxants?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Naloxone", "isCorrect": false },
        { "id": "b", "text": "Neostigmine", "isCorrect": true },
        { "id": "c", "text": "Adrenaline", "isCorrect": false },
        { "id": "d", "text": "Protamine", "isCorrect": false }
      ],
      "explanation": "Neostigmine reverses the effects of non-depolarising relaxants like Curare."
    },
    {
      "id": "q3",
      "type": "ordering",
      "question": "Arrange the phases of General Anaesthesia:",
      "points": 15,
      "items": [
        { "id": "i1", "text": "Induction", "correctPosition": 1 },
        { "id": "i2", "text": "Maintenance", "correctPosition": 2 },
        { "id": "i3", "text": "Reversal", "correctPosition": 3 },
        { "id": "i4", "text": "Recovery", "correctPosition": 4 }
      ],
      "explanation": "Induction -> Maintenance -> Reversal -> Recovery."
    },
    {
      "id": "q4",
      "type": "multiple-select",
      "question": "Which of the following are common anaesthetic emergencies? (Select all that apply)",
      "points": 15,
      "options": [
        { "id": "a", "text": "Cardiac Arrest", "isCorrect": true },
        { "id": "b", "text": "Anaphylactic Shock", "isCorrect": true },
        { "id": "c", "text": "Hypothermia", "isCorrect": true },
        { "id": "d", "text": "Hypertension", "isCorrect": false }
      ],
      "explanation": "Cardiac Arrest, Anaphylaxis, and Hypothermia are listed as emergencies. Hypertension is a condition but not typically classified as an acute 'emergency' in the same list context."
    },
    {
      "id": "q5",
      "type": "fill-blank",
      "question": "To maintain a clear airway in recovery, the patient should be placed in the __b1__ position.",
      "points": 10,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["recovery", "lateral", "left lateral"], "caseSensitive": false }
      ],
      "explanation": "The recovery (lateral) position prevents aspiration and keeps the airway clear."
    },
    {
      "id": "q6",
      "type": "short-answer",
      "question": "Why is early ambulation important in post-operative care?",
      "points": 15,
      "keywords": ["dvt", "thrombosis", "clot", "circulation", "embolism"],
      "minKeywords": 1,
      "modelAnswer": "To prevent Deep Vein Thrombosis (DVT) and pulmonary embolism.",
      "explanation": "Moving early improves circulation and prevents blood clots."
    },
    {
      "id": "q7",
      "type": "multiple-choice",
      "question": "Which anaesthetic technique involves injecting drug into the Dural sac containing CSF?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Epidural", "isCorrect": false },
        { "id": "b", "text": "Spinal", "isCorrect": true },
        { "id": "c", "text": "Nerve Block", "isCorrect": false },
        { "id": "d", "text": "Infiltration", "isCorrect": false }
      ],
      "explanation": "Spinal anaesthesia is injected into the CSF (subarachnoid space)."
    },
    {
      "id": "q8",
      "type": "true-false",
      "question": "Gastrointestinal motility usually returns to normal immediately after abdominal surgery.",
      "points": 5,
      "correctAnswer": false,
      "explanation": "False. It typically takes 3-4 days for GI motility to return (indicated by bowel sounds/flatus)."
    }
  ]
});