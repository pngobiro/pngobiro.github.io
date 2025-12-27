registerQuiz("topic-02-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-02-quiz",
  "metadata": {
    "title": "Home Based Care Knowledge Check",
    "description": "Assess your understanding of HBC principles, providers, and community mobilization.",
    "topicId": "topic-02",
    "difficulty": "intermediate",
    "estimatedTime": 15,
    "passingScore": 70,
    "createdAt": "2025-12-26T10:00:00Z",
    "tags": ["home-based-care", "community-health", "chronic-disease"]
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
      "question": "Which of the following best defines Home Based Care (HBC)?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Care provided exclusively by doctors in a hospital setting", "isCorrect": false },
        { "id": "b", "text": "Care for chronic/terminally ill patients extended to the home via family and community participation", "isCorrect": true },
        { "id": "c", "text": "A specialized nursing home for the elderly", "isCorrect": false },
        { "id": "d", "text": "Financial aid provided by the government to the sick", "isCorrect": false }
      ],
      "explanation": "HBC is defined as care extended from the health facility to the patient's home involving family and community collaboration."
    },
    {
      "id": "q2",
      "type": "multiple-select",
      "question": "Which of the following are characteristics of a Chronic Disease? (Select all that apply)",
      "points": 15,
      "options": [
        { "id": "a", "text": "It is permanent", "isCorrect": true },
        { "id": "b", "text": "It leaves a residual disability", "isCorrect": true },
        { "id": "c", "text": "It is caused by reversible pathological conditions", "isCorrect": false },
        { "id": "d", "text": "It requires long-term supervision", "isCorrect": true }
      ],
      "explanation": "Chronic diseases are permanent, leave residual disability, require long-term supervision, and are caused by NON-reversible conditions."
    },
    {
      "id": "q3",
      "type": "matching",
      "question": "Match the HBC Component to its description:",
      "points": 20,
      "pairs": [
        { "id": "p1", "left": "Nursing Care", "right": "Hygiene, infection prevention, pain management" },
        { "id": "p2", "left": "Clinical Care", "right": "Diagnosis, drug adherence, treating complications" },
        { "id": "p3", "left": "Psycho-spiritual Care", "right": "Counseling, forgiveness, religious support" },
        { "id": "p4", "left": "Social Support", "right": "Meeting needs for love, belonging, and security" }
      ],
      "explanation": "Nursing care focuses on daily care tasks; Clinical care on medical treatment; Psycho-spiritual on emotional/spiritual health; Social support on belonging and security."
    },
    {
      "id": "q4",
      "type": "true-false",
      "question": "Home Based Care eliminates the need for any medical supervision or hospital visits.",
      "points": 10,
      "correctAnswer": false,
      "explanation": "False. HBC involves collaboration with health professionals and referral to hospitals when necessary."
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "question": "What is the primary role of the Patient in HBC?",
      "points": 10,
      "options": [
        { "id": "a", "text": "To provide drugs to the community", "isCorrect": false },
        { "id": "b", "text": "To act as the main player and participate in decision making", "isCorrect": true },
        { "id": "c", "text": "To diagnose their own illness", "isCorrect": false },
        { "id": "d", "text": "To supervise the Home Care Team", "isCorrect": false }
      ],
      "explanation": "The patient is the main player, provides a safe home, identifies caregivers, and participates in decision making."
    },
    {
      "id": "q6",
      "type": "multiple-select",
      "question": "What are the advantages of HBC to the Family? (Select all that apply)",
      "points": 15,
      "options": [
        { "id": "a", "text": "It is less expensive than hospital care", "isCorrect": true },
        { "id": "b", "text": "It improves family bonding", "isCorrect": true },
        { "id": "c", "text": "It allows family to spend last days with loved ones", "isCorrect": true },
        { "id": "d", "text": "It increases the risk of hospital acquired infections", "isCorrect": false }
      ],
      "explanation": "HBC is cost-effective, strengthens bonds, and allows for end-of-life presence. It REDUCES (not increases) hospital acquired infections."
    },
    {
      "id": "q7",
      "type": "ordering",
      "question": "Arrange the steps of Community Mobilization in order:",
      "points": 20,
      "items": [
        { "id": "s1", "text": "Planning and organizing self", "correctPosition": 1 },
        { "id": "s2", "text": "Enter the community", "correctPosition": 2 },
        { "id": "s3", "text": "Conduct mobilization session", "correctPosition": 3 },
        { "id": "s4", "text": "Monitor community response", "correctPosition": 4 }
      ],
      "explanation": "1. Plan -> 2. Enter -> 3. Conduct -> 4. Monitor."
    },
    {
      "id": "q8",
      "type": "fill-blank",
      "question": "The '4 Ms' of community resources are Money, Materials, __b1__, and Manpower.",
      "points": 10,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["minutes", "time", "Minutes"], "caseSensitive": false }
      ],
      "explanation": "The 4 Ms are Money, Materials, Minutes (Time), and Manpower."
    },
    {
      "id": "q9",
      "type": "multiple-choice",
      "question": "Which of the following is a hindrance to community mobilization?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Poor leadership", "isCorrect": true },
        { "id": "b", "text": "Involvement of religious leaders", "isCorrect": false },
        { "id": "c", "text": "Use of local language", "isCorrect": false },
        { "id": "d", "text": "Clear planning", "isCorrect": false }
      ],
      "explanation": "Poor leadership, lack of resources, and lack of information hinder mobilization. The others help it."
    },
    {
      "id": "q10",
      "type": "multiple-choice",
      "question": "What is 'Referral' in the context of HBC?",
      "points": 10,
      "options": [
        { "id": "a", "text": "A one-way transfer to a hospital", "isCorrect": false },
        { "id": "b", "text": "A two-way process of linking a client from one service to another", "isCorrect": true },
        { "id": "c", "text": "A method of fundraising", "isCorrect": false },
        { "id": "d", "text": "A type of physical therapy", "isCorrect": false }
      ],
      "explanation": "Referral is a two-way linking process (e.g., home to hospital and back) to ensure continuity of care."
    }
  ]
});