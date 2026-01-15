/**
 * Quiz Data File (JSONP format)
 * Topic 3: Neonate Physiology
 *
 * Usage in HTML:
 *   <div class="quiz-container"
 *        data-quiz-id="topic-03-quiz"
 *        data-quiz-js="../quizzes/topic-03-quiz.js">
 */

registerQuiz("topic-03-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-03-quiz",
  "metadata": {
    "title": "Neonate Physiology",
    "description": "Understanding normal newborn physiology and adaptation to extrauterine life",
    "topicId": "topic-03",
    "difficulty": "beginner",
    "estimatedTime": 10,
    "passingScore": 70,
    "createdAt": "2026-01-12T00:00:00Z"
  },
  "settings": {
    "shuffleQuestions": false,
    "shuffleOptions": true,
    "showFeedback": "immediate",
    "allowRetry": true,
    "showCorrectAnswers": true
  },
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "question": "What is the normal respiratory rate for a newborn?",
      "points": 10,
      "options": [
        { "id": "a", "text": "20-30 breaths per minute", "isCorrect": false },
        { "id": "b", "text": "30-60 breaths per minute", "isCorrect": true },
        { "id": "c", "text": "60-80 breaths per minute", "isCorrect": false },
        { "id": "d", "text": "80-100 breaths per minute", "isCorrect": false }
      ],
      "explanation": "The normal respiratory rate for a newborn is 30-60 breaths per minute. Newborns breathe more rapidly than adults due to higher metabolic demands."
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "question": "What is the normal heart rate for a newborn?",
      "points": 10,
      "options": [
        { "id": "a", "text": "60-80 bpm", "isCorrect": false },
        { "id": "b", "text": "80-100 bpm", "isCorrect": false },
        { "id": "c", "text": "100-160 bpm", "isCorrect": true },
        { "id": "d", "text": "160-200 bpm", "isCorrect": false }
      ],
      "explanation": "The normal heart rate for a newborn is 100-160 beats per minute. Heart rate may vary with activity, crying, or sleep states."
    },
    {
      "id": "q3",
      "type": "multiple-choice",
      "question": "What is the normal body temperature for a newborn?",
      "points": 10,
      "options": [
        { "id": "a", "text": "35.5-36.5°C", "isCorrect": false },
        { "id": "b", "text": "36.5-37.5°C", "isCorrect": true },
        { "id": "c", "text": "37.5-38.5°C", "isCorrect": false },
        { "id": "d", "text": "38.5-39.5°C", "isCorrect": false }
      ],
      "explanation": "The normal body temperature for a newborn is 36.5-37.5°C (97.7-99.5°F). Newborns are at higher risk for hypothermia due to their large surface area-to-body weight ratio."
    },
    {
      "id": "q4",
      "type": "true-false",
      "question": "Newborns are obligate nose breathers.",
      "points": 10,
      "correctAnswer": true,
      "explanation": "True. Newborns are obligate nose breathers, meaning they prefer to breathe through their nose rather than their mouth. This is important for breastfeeding as it allows them to breathe while nursing."
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "question": "What is the normal birth weight range for a term infant?",
      "points": 10,
      "options": [
        { "id": "a", "text": "2000-2500 grams", "isCorrect": false },
        { "id": "b", "text": "2500-4000 grams", "isCorrect": true },
        { "id": "c", "text": "4000-4500 grams", "isCorrect": false },
        { "id": "d", "text": "4500-5000 grams", "isCorrect": false }
      ],
      "explanation": "The normal birth weight range for a term infant is 2500-4000 grams (5.5-8.8 lbs). Infants weighing less than 2500 grams are considered low birth weight."
    },
    {
      "id": "q6",
      "type": "multiple-choice",
      "question": "What is the Apgar score?",
      "points": 10,
      "options": [
        { "id": "a", "text": "A test for hearing ability", "isCorrect": false },
        { "id": "b", "text": "A rapid assessment of newborn's physical condition at birth", "isCorrect": true },
        { "id": "c", "text": "A screening test for genetic disorders", "isCorrect": false },
        { "id": "d", "text": "A measure of gestational age", "isCorrect": false }
      ],
      "explanation": "The Apgar score is a rapid assessment of a newborn's physical condition at 1 and 5 minutes after birth. It evaluates five criteria: Appearance, Pulse, Grimace, Activity, and Respiration."
    },
    {
      "id": "q7",
      "type": "multiple-select",
      "question": "Which of the following are components of the Apgar score? (Select all that apply)",
      "points": 10,
      "options": [
        { "id": "a", "text": "Heart rate", "isCorrect": true },
        { "id": "b", "text": "Respiratory effort", "isCorrect": true },
        { "id": "c", "text": "Muscle tone", "isCorrect": true },
        { "id": "d", "text": "Blood pressure", "isCorrect": false }
      ],
      "partialCredit": true,
      "explanation": "The Apgar score evaluates five criteria: Appearance (skin color), Pulse (heart rate), Grimace (reflex irritability), Activity (muscle tone), and Respiration (breathing effort). Blood pressure is not included."
    },
    {
      "id": "q8",
      "type": "multiple-choice",
      "question": "What is the normal blood glucose level for a newborn?",
      "points": 10,
      "options": [
        { "id": "a", "text": "1.0-1.5 mmol/L", "isCorrect": false },
        { "id": "b", "text": "2.2-4.4 mmol/L", "isCorrect": false },
        { "id": "c", "text": "2.6-7.0 mmol/L", "isCorrect": true },
        { "id": "d", "text": "7.0-10.0 mmol/L", "isCorrect": false }
      ],
      "explanation": "The normal blood glucose level for a newborn is 2.6-7.0 mmol/L (47-126 mg/dL). Levels below 2.6 mmol/L indicate neonatal hypoglycemia."
    },
    {
      "id": "q9",
      "type": "true-false",
      "question": "Physiological jaundice typically appears within the first 24 hours of life.",
      "points": 10,
      "correctAnswer": false,
      "explanation": "False. Physiological jaundice typically appears after 24 hours of life, usually on day 2-3. Jaundice appearing within the first 24 hours is considered pathological and requires investigation."
    },
    {
      "id": "q10",
      "type": "multiple-choice",
      "question": "What is the first meconium stool typically passed?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Within 6 hours of birth", "isCorrect": false },
        { "id": "b", "text": "Within 12-24 hours of birth", "isCorrect": true },
        { "id": "c", "text": "Within 48-72 hours of birth", "isCorrect": false },
        { "id": "d", "text": "After 5 days of birth", "isCorrect": false }
      ],
      "explanation": "The first meconium stool is typically passed within 12-24 hours of birth. Delayed passage of meconium beyond 48 hours may indicate Hirschsprung disease or other intestinal obstruction."
    }
  ]
});