// topic-06-quiz.js
registerQuiz("topic-06-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-06-quiz",
  "metadata": {
    "title": "Community Strategy Quiz",
    "description": "Test your knowledge on the Community Strategy, KEPH, and community roles.",
    "topicId": "topic-06",
    "difficulty": "intermediate",
    "estimatedTime": 15,
    "passingScore": 70,
    "createdAt": "2026-01-21T00:00:00Z",
    "updatedAt": "2026-01-21T00:00:00Z",
    "tags": ["keph", "strategy", "mobilization"]
  },
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "question": "What is the 'Community Strategy'?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "An approach ensuring communities have the capacity and motivation to take up their essential role in health care delivery (Level 1).", "isCorrect": true },
        { "id": "opt2", "text": "A plan to build more hospitals.", "isCorrect": false },
        { "id": "opt3", "text": "A strategy for private health insurance.", "isCorrect": false },
        { "id": "opt4", "text": "A method for surgical procedures.", "isCorrect": false }
      ],
      "explanation": "Community strategy focuses on Level 1 services and community empowerment."
    },
    {
      "id": "q2",
      "type": "fill-blank",
      "question": "The __b1__ Essential Package for Health (KEPH) supports the goals of the National Health Sector Strategic Plan (NHSSP II).",
      "points": 1,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["Kenya"], "caseSensitive": false }
      ],
      "explanation": "KEPH stands for Kenya Essential Package for Health."
    },
    {
      "id": "q3",
      "type": "multiple-select",
      "question": "Which of the following are roles of households and the community?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "Health promotion (diet, exercise)", "isCorrect": true },
        { "id": "opt2", "text": "Disease prevention (hygiene, safe water)", "isCorrect": true },
        { "id": "opt3", "text": "Care seeking compliance", "isCorrect": true },
        { "id": "opt4", "text": "Governance of health services", "isCorrect": true },
        { "id": "opt5", "text": "Prescribing medication", "isCorrect": false }
      ],
      "explanation": "Households promote health, prevent disease, seek care, and participate in governance. Prescribing is a professional role."
    },
    {
      "id": "q4",
      "type": "ordering",
      "question": "Order the steps of Community Mobilization.",
      "points": 1,
      "items": [
        { "id": "s1", "text": "Getting to know community & create interest", "correctPosition": 1 },
        { "id": "s2", "text": "Analysis & Problem Identification", "correctPosition": 2 },
        { "id": "s3", "text": "Decision making & selection of leaders", "correctPosition": 3 },
        { "id": "s4", "text": "Planning", "correctPosition": 4 },
        { "id": "s5", "text": "Project implementation", "correctPosition": 5 },
        { "id": "s6", "text": "Evaluation", "correctPosition": 6 }
      ],
      "explanation": "Mobilization: Engagement -> Analysis -> Decisions -> Planning -> Implementation -> Evaluation."
    },
    {
      "id": "q5",
      "type": "multiple-select",
      "question": "Which principles apply to Adult Learning?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "Adults are internally motivated and self-directed", "isCorrect": true },
        { "id": "opt2", "text": "Adults bring life experiences to learning", "isCorrect": true },
        { "id": "opt3", "text": "Adults are goal oriented", "isCorrect": true },
        { "id": "opt4", "text": "Adults are practical", "isCorrect": true },
        { "id": "opt5", "text": "Adults learn best by passive listening", "isCorrect": false }
      ],
      "explanation": "Adults are self-directed, experience-based, goal-oriented, practical, and need respect. Passive listening is ineffective."
    },
    {
      "id": "q6",
      "type": "multiple-choice",
      "question": "What is the primary goal of the Community Strategy?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "To enhance community access to health care to improve productivity and reduce poverty/deaths.", "isCorrect": true },
        { "id": "opt2", "text": "To increase taxes for healthcare.", "isCorrect": false },
        { "id": "opt3", "text": "To centralize all health services.", "isCorrect": false },
        { "id": "opt4", "text": "To eliminate all traditional medicine.", "isCorrect": false }
      ],
      "explanation": "The goal is improving access, productivity, and reducing mortality/poverty."
    }
  ]
});