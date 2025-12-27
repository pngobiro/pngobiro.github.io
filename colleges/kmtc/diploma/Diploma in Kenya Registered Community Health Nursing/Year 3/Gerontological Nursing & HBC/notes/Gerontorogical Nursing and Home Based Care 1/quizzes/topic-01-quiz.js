registerQuiz("topic-01-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-01-quiz",
  "metadata": {
    "title": "Gerontological Nursing Assessment",
    "description": "Test your knowledge on aging theories, physiological changes, and care of the elderly.",
    "topicId": "topic-01",
    "difficulty": "intermediate",
    "estimatedTime": 15,
    "passingScore": 70,
    "createdAt": "2025-12-26T10:00:00Z",
    "tags": ["gerontology", "aging", "nursing", "physiology"]
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
      "question": "Which term best describes the branch of gerontology involved in the medical care of the aged?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Gerontology", "isCorrect": false },
        { "id": "b", "text": "Geriatrics", "isCorrect": true },
        { "id": "c", "text": "Senescence", "isCorrect": false },
        { "id": "d", "text": "Palliative Care", "isCorrect": false }
      ],
      "explanation": "Geriatrics is the specific branch concerned with medical care, while Gerontology is the broader study of aging processes."
    },
    {
      "id": "q2",
      "type": "matching",
      "question": "Match the Aging Theory to its definition:",
      "points": 20,
      "pairs": [
        { "id": "p1", "left": "Disengagement Theory", "right": "Natural withdrawal from social roles" },
        { "id": "p2", "left": "Activity Theory", "right": "Active people are more satisfied" },
        { "id": "p3", "left": "Continuity Theory", "right": "Maintaining past behaviors and personalities" },
        { "id": "p4", "left": "Wear and Tear Theory", "right": "Body tissues damage over time like a machine" }
      ],
      "explanation": "Different theories explain aging differently: Disengagement focuses on withdrawal, Activity on engagement, Continuity on consistency, and Wear & Tear on physical degradation."
    },
    {
      "id": "q3",
      "type": "multiple-select",
      "question": "Which of the following are common degenerative changes in the Integumentary (Skin) System? (Select all that apply)",
      "points": 15,
      "options": [
        { "id": "a", "text": "Increased activity of oil glands", "isCorrect": false },
        { "id": "b", "text": "Loss of skin elasticity", "isCorrect": true },
        { "id": "c", "text": "Thickening and brittleness of nails", "isCorrect": true },
        { "id": "d", "text": "Decreased sensitivity to temperature", "isCorrect": false },
        { "id": "e", "text": "Reduced blood flow interfering with healing", "isCorrect": true }
      ],
      "explanation": "The skin becomes drier (less oil), loses elasticity, nails become brittle, and healing slows. Sensitivity to temperature actually INCREASES due to loss of subcutaneous fat."
    },
    {
      "id": "q4",
      "type": "fill-blank",
      "question": "The loss of muscle mass and function associated with aging is called __b1__.",
      "points": 10,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["sarcopenia"], "caseSensitive": false }
      ],
      "explanation": "Sarcopenia involves the degenerative loss of skeletal muscle mass, quality, and strength."
    },
    {
      "id": "q5",
      "type": "true-false",
      "question": "According to the WHO classification, an 'Advanced-old' person is aged between 65 and 75 years.",
      "points": 10,
      "correctAnswer": false,
      "explanation": "False. WHO classifies 65-75 as 'Young-old' and 75-85 as 'Advanced-old'."
    },
    {
      "id": "q6",
      "type": "multiple-choice",
      "question": "Which management strategy is appropriate for an elderly patient with respiratory changes?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Encourage shallow breathing", "isCorrect": false },
        { "id": "b", "text": "Keep the patient flat in bed at all times", "isCorrect": false },
        { "id": "c", "text": "Encourage sleeping in semi-fowlers position", "isCorrect": true },
        { "id": "d", "text": "Avoid coughing to prevent strain", "isCorrect": false }
      ],
      "explanation": "Sleeping in semi-fowlers position (elevated) helps lung expansion. Deep breathing and coughing are encouraged to clear secretions."
    },
    {
      "id": "q7",
      "type": "multiple-choice",
      "question": "What is 'Ageism'?",
      "points": 10,
      "options": [
        { "id": "a", "text": "The study of aging populations", "isCorrect": false },
        { "id": "b", "text": "Prejudgement and discrimination based on age", "isCorrect": true },
        { "id": "c", "text": "The biological process of growing old", "isCorrect": false },
        { "id": "d", "text": "A government policy for the elderly", "isCorrect": false }
      ],
      "explanation": "Ageism is the stereotyping and discrimination against individuals or groups on the basis of their age."
    },
    {
      "id": "q8",
      "type": "multiple-select",
      "question": "Select the correct changes associated with the aging Nervous System: (Select all that apply)",
      "points": 15,
      "options": [
        { "id": "a", "text": "Decreased blood flow to the brain", "isCorrect": true },
        { "id": "b", "text": "Increased number of brain cells", "isCorrect": false },
        { "id": "c", "text": "Diminished sensory perception (taste, vision)", "isCorrect": true },
        { "id": "d", "text": "Nerve endings become less sensitive to pain", "isCorrect": true }
      ],
      "explanation": "The nervous system sees reduced blood flow, cell loss, diminished senses, and reduced pain sensitivity."
    },
    {
      "id": "q9",
      "type": "true-false",
      "question": "Reversible and treatable conditions in the elderly (like malnutrition) are often under-diagnosed because symptoms are mistaken for old age.",
      "points": 10,
      "correctAnswer": true,
      "explanation": "True. A key principle of gerontological nursing is recognizing that symptoms should not automatically be attributed to aging."
    },
    {
      "id": "q10",
      "type": "multiple-choice",
      "question": "Which interviewing skill is most important when assessing an elderly patient?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Speak only to the caregiver to save time", "isCorrect": false },
        { "id": "b", "text": "Speak facing the patient so they can see your face", "isCorrect": true },
        { "id": "c", "text": "Use complex medical terminology", "isCorrect": false },
        { "id": "d", "text": "Agree with ageist remarks to build rapport", "isCorrect": false }
      ],
      "explanation": "Facing the patient aids those with hearing/visual impairments and shows respect. You should address the patient directly."
    }
  ]
});