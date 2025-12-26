registerQuiz("topic-03-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-03-quiz",
  "metadata": {
    "title": "Epidemiological Measures",
    "description": "Calculations and concepts of incidence, prevalence, and attack rates.",
    "topicId": "topic-03",
    "difficulty": "intermediate",
    "estimatedTime": 20,
    "passingScore": 70,
    "createdAt": "2025-12-26T10:00:00Z"
  },
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "question": "If you want to measure the RISK of developing a disease, which measure should you use?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Prevalence", "isCorrect": false },
        { "id": "b", "text": "Incidence", "isCorrect": true },
        { "id": "c", "text": "Mortality Rate", "isCorrect": false }
      ],
      "explanation": "Incidence measures new cases over time, representing the probability (risk) of transition from healthy to diseased."
    },
    {
      "id": "q2",
      "type": "short-answer",
      "question": "Calculate the prevalence per 1000: Population = 20,000. Existing cases = 200.",
      "points": 15,
      "keywords": ["10"],
      "modelAnswer": "10",
      "explanation": "(200 / 20,000) * 1,000 = 10 cases per 1,000 population."
    },
    {
      "id": "q3",
      "type": "fill-blank",
      "question": "Prevalence is approximately equal to Incidence multiplied by average __1__.",
      "points": 10,
      "blanks": [
        { "id": "1", "acceptedAnswers": ["duration", "Duration"], "caseSensitive": false }
      ],
      "explanation": "P = I × D. The longer the duration of a disease, the higher its prevalence."
    },
    {
      "id": "q4",
      "type": "multiple-select",
      "question": "Which of the following would INCREASE the prevalence of a disease? (Select all that apply)",
      "points": 10,
      "options": [
        { "id": "a", "text": "New treatment that cures the disease quickly", "isCorrect": false },
        { "id": "b", "text": "New treatment that prolongs life but doesn't cure", "isCorrect": true },
        { "id": "c", "text": "Increase in new cases (incidence)", "isCorrect": true },
        { "id": "d", "text": "High case-fatality rate", "isCorrect": false }
      ],
      "explanation": "Prolonging life increases duration (P=I×D). Increased incidence adds to the 'pool' of prevalence."
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "question": "In a food poisoning outbreak, 50 people ate chicken and 20 got sick. What is the Food Specific Attack Rate?",
      "points": 10,
      "options": [
        { "id": "a", "text": "20%", "isCorrect": false },
        { "id": "b", "text": "40%", "isCorrect": true },
        { "id": "c", "text": "50%", "isCorrect": false },
        { "id": "d", "text": "25%", "isCorrect": false }
      ],
      "explanation": "(20 sick / 50 exposed) * 100 = 40%."
    }
  ]
});