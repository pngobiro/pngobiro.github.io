registerQuiz("comprehensive-exam", {
  "schemaVersion": "1.0",
  "quizId": "comprehensive-exam",
  "metadata": {
    "title": "Comprehensive Final Exam: Introduction to Traumatology 1",
    "description": "A comprehensive assessment covering Fundamentals, Mechanisms of Injury, and Fracture Healing.",
    "topicId": "comprehensive",
    "difficulty": "advanced",
    "estimatedTime": 60,
    "passingScore": 80,
    "createdAt": "2026-02-04T00:00:00Z",
    "updatedAt": "2026-02-04T00:00:00Z",
    "tags": ["exam", "comprehensive", "traumatology", "final"]
  },
  "settings": {
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "showFeedback": "end",
    "allowRetry": false,
    "showCorrectAnswers": true,
    "timeLimit": 3600
  },
  "questions": [
    // From Topic 1
    {
      "id": "comp-q1",
      "type": "multiple-choice",
      "question": "What is the definition of 'Traumatology'?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "The science or study of wounds and injuries caused by accidents or violence", "isCorrect": true },
        { "id": "opt2", "text": "The study of infectious diseases", "isCorrect": false },
        { "id": "opt3", "text": "The surgical treatment of cancer", "isCorrect": false },
        { "id": "opt4", "text": "The study of aging", "isCorrect": false }
      ],
      "explanation": "Traumatology deals with the study and treatment of wounds and injuries."
    },
    {
      "id": "comp-q2",
      "type": "multiple-choice",
      "question": "An Injury Severity Score (ISS) of ≥ 16 indicates which condition?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "Polytrauma", "isCorrect": true },
        { "id": "opt2", "text": "Minor trauma", "isCorrect": false },
        { "id": "opt3", "text": "Psychological trauma", "isCorrect": false },
        { "id": "opt4", "text": "Single system injury", "isCorrect": false }
      ],
      "explanation": "Polytrauma is defined by an ISS score of 16 or greater."
    },
    {
      "id": "comp-q3",
      "type": "true-false",
      "question": "Psychological trauma can occur without any physical injury.",
      "points": 1,
      "correctAnswer": true,
      "explanation": "Psychological trauma is damage to the mind due to a distressing event and does not require physical injury."
    },
    
    // From Topic 2
    {
      "id": "comp-q4",
      "type": "multiple-choice",
      "question": "In a child pedestrian injury (Waddell's Triad), which body part is typically struck by the vehicle's bumper?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "Femur/Pelvis", "isCorrect": true },
        { "id": "opt2", "text": "Head", "isCorrect": false },
        { "id": "opt3", "text": "Chest", "isCorrect": false },
        { "id": "opt4", "text": "Tibia/Fibula", "isCorrect": false }
      ],
      "explanation": "Due to their shorter stature, the bumper hits a child's femur/pelvis region."
    },
    {
      "id": "comp-q5",
      "type": "multiple-choice",
      "question": "Which type of collision impacts energy to the near-side occupant and offers little protection from seat belts?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "Lateral Impact (T-bone)", "isCorrect": true },
        { "id": "opt2", "text": "Rear-end Impact", "isCorrect": false },
        { "id": "opt3", "text": "Frontal Impact", "isCorrect": false },
        { "id": "opt4", "text": "Rollover", "isCorrect": false }
      ],
      "explanation": "Lateral impacts strike the side of the vehicle, directly affecting the occupant on that side with minimal crumple zone protection."
    },
    {
      "id": "comp-q6",
      "type": "multiple-select",
      "question": "Which of the following are potential injuries from a 'Don Juan Syndrome' fall (landing on feet)? (Select all that apply)",
      "points": 2,
      "options": [
        { "id": "opt1", "text": "Bilateral heel (calcaneal) fractures", "isCorrect": true },
        { "id": "opt2", "text": "Lumbar compression fractures", "isCorrect": true },
        { "id": "opt3", "text": "Colles' fractures (if hands used to break fall)", "isCorrect": true },
        { "id": "opt4", "text": "Cervical spine whiplash", "isCorrect": false }
      ],
      "explanation": "Landing on feet transmits force up the legs and spine, causing heel and vertebral fractures, and wrist fractures if hands are outstretched."
    },

    // From Topic 3
    {
      "id": "comp-q7",
      "type": "ordering",
      "question": "Order the stages of bone healing.",
      "points": 3,
      "items": [
        { "id": "step1", "text": "Inflammation (Haematoma)", "correctPosition": 1 },
        { "id": "step2", "text": "Reparative (Callus formation)", "correctPosition": 2 },
        { "id": "step3", "text": "Remodeling (Consolidation)", "correctPosition": 3 }
      ],
      "explanation": "The broad stages are Inflammation, Repair (Callus), and Remodeling."
    },
    {
      "id": "comp-q8",
      "type": "multiple-choice",
      "question": "Which factor would HINDER fracture healing?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "Presence of infection", "isCorrect": true },
        { "id": "opt2", "text": "Adequate immobilization", "isCorrect": false },
        { "id": "opt3", "text": "Good blood supply", "isCorrect": false },
        { "id": "opt4", "text": "Weight bearing (for some long bones)", "isCorrect": false }
      ],
      "explanation": "Infection significantly delays or prevents bone healing."
    },
    {
      "id": "comp-q9",
      "type": "fill-blank",
      "question": "The final stage of bone healing, where the bone is shaped to its original strength and structure, is called __id1__.",
      "points": 1,
      "blanks": [
        {
          "id": "id1",
          "acceptedAnswers": ["remodeling", "consolidation", "remodelling"],
          "caseSensitive": false
        }
      ],
      "explanation": "Remodeling is the final stage where the bone adapts to stress and returns to its original shape."
    },
    {
      "id": "comp-q10",
      "type": "multiple-choice",
      "question": "Which term describes a loose delicate mesh of fibrins that forms around a fracture site within 24 hours?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "Haematoma", "isCorrect": true },
        { "id": "opt2", "text": "Callus", "isCorrect": false },
        { "id": "opt3", "text": "Cartilage", "isCorrect": false },
        { "id": "opt4", "text": "Granulation tissue", "isCorrect": false }
      ],
      "explanation": "A haematoma (blood clot) forms immediately after the fracture to initiate healing."
    }
  ]
});