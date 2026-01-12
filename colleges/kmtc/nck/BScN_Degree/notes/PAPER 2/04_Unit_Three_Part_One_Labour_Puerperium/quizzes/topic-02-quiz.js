/**
 * Quiz Data File (JSONP format)
 * Topic 2: Labour Stages & Puerperium
 *
 * Usage in HTML:
 *   <div class="quiz-container"
 *        data-quiz-id="topic-02-quiz"
 *        data-quiz-js="../quizzes/topic-02-quiz.js">
 */

registerQuiz("topic-02-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-02-quiz",
  "metadata": {
    "title": "Labour Stages & Puerperium",
    "description": "Comprehensive coverage of all labour stages and postpartum care",
    "topicId": "topic-02",
    "difficulty": "intermediate",
    "estimatedTime": 15,
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
      "question": "What are the three stages of labour?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Early, Active, Transition", "isCorrect": false },
        { "id": "b", "text": "Latent, Active, Expulsive", "isCorrect": false },
        { "id": "c", "text": "First (dilation), Second (delivery), Third (placental)", "isCorrect": true },
        { "id": "d", "text": "Pre-labour, Labour, Post-labour", "isCorrect": false }
      ],
      "explanation": "The three stages of labour are: First stage (cervical dilation), Second stage (delivery of the fetus), and Third stage (delivery of the placenta)."
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "question": "What is the normal duration of the second stage of labour in a primigravida?",
      "points": 10,
      "options": [
        { "id": "a", "text": "15-30 minutes", "isCorrect": false },
        { "id": "b", "text": "30-60 minutes", "isCorrect": false },
        { "id": "c", "text": "1-2 hours", "isCorrect": true },
        { "id": "d", "text": "2-3 hours", "isCorrect": false }
      ],
      "explanation": "The second stage of labour typically lasts 1-2 hours in a primigravida, while multiparas usually deliver within 30-60 minutes."
    },
    {
      "id": "q3",
      "type": "multiple-choice",
      "question": "What is the definition of the puerperium?",
      "points": 10,
      "options": [
        { "id": "a", "text": "The period from conception to birth", "isCorrect": false },
        { "id": "b", "text": "The period from birth to 6 weeks postpartum", "isCorrect": true },
        { "id": "c", "text": "The first 24 hours after delivery", "isCorrect": false },
        { "id": "d", "text": "The period from 6 weeks to 6 months postpartum", "isCorrect": false }
      ],
      "explanation": "The puerperium is defined as the period from the end of the third stage of labour until the involution of the uterus is complete, typically 6 weeks postpartum."
    },
    {
      "id": "q4",
      "type": "true-false",
      "question": "The third stage of labour begins with delivery of the baby and ends with delivery of the placenta.",
      "points": 10,
      "correctAnswer": true,
      "explanation": "True. The third stage of labour begins immediately after delivery of the fetus and ends with the delivery of the placenta and membranes."
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "question": "What is the normal duration of the third stage of labour?",
      "points": 10,
      "options": [
        { "id": "a", "text": "5-10 minutes", "isCorrect": false },
        { "id": "b", "text": "10-15 minutes", "isCorrect": false },
        { "id": "c", "text": "5-30 minutes", "isCorrect": true },
        { "id": "d", "text": "30-60 minutes", "isCorrect": false }
      ],
      "explanation": "The third stage of labour typically lasts 5-30 minutes. If it exceeds 30 minutes, it is considered prolonged and may require intervention."
    },
    {
      "id": "q6",
      "type": "multiple-choice",
      "question": "What is the most important sign of placental separation?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Lengthening of the umbilical cord", "isCorrect": false },
        { "id": "b", "text": "Gush of blood from the vagina", "isCorrect": false },
        { "id": "c", "text": "Uterus becomes globular and firm", "isCorrect": true },
        { "id": "d", "text": "All of the above", "isCorrect": false }
      ],
      "explanation": "The most reliable sign of placental separation is that the uterus becomes globular and firm. Other signs include lengthening of the umbilical cord and a gush of blood."
    },
    {
      "id": "q7",
      "type": "multiple-select",
      "question": "Which of the following are physiological changes during the puerperium? (Select all that apply)",
      "points": 10,
      "options": [
        { "id": "a", "text": "Uterine involution", "isCorrect": true },
        { "id": "b", "text": "Lochia discharge", "isCorrect": true },
        { "id": "c", "text": "Breast engorgement", "isCorrect": true },
        { "id": "d", "text": "Increased uterine size", "isCorrect": false }
      ],
      "partialCredit": true,
      "explanation": "Physiological changes during the puerperium include uterine involution (return to pre-pregnancy size), lochia discharge (postpartum bleeding), and breast engorgement as lactation begins. The uterus decreases in size, not increases."
    },
    {
      "id": "q8",
      "type": "multiple-choice",
      "question": "What is lochia rubra?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Red vaginal discharge occurring in the first 1-3 days postpartum", "isCorrect": true },
        { "id": "b", "text": "Pinkish-brown discharge occurring from day 4-10", "isCorrect": false },
        { "id": "c", "text": "White or yellowish discharge occurring after day 10", "isCorrect": false },
        { "id": "d", "text": "Abnormal foul-smelling discharge", "isCorrect": false }
      ],
      "explanation": "Lochia rubra is the red vaginal discharge that occurs in the first 1-3 days postpartum, consisting mainly of blood and decidual tissue."
    },
    {
      "id": "q9",
      "type": "true-false",
      "question": "Afterpains are uterine contractions that occur after delivery and are more common in multiparas.",
      "points": 10,
      "correctAnswer": true,
      "explanation": "True. Afterpains are uterine contractions that occur after delivery, typically during breastfeeding. They are more common and more intense in multiparas due to increased uterine tone."
    },
    {
      "id": "q10",
      "type": "multiple-choice",
      "question": "What is the normal rate of uterine involution?",
      "points": 10,
      "options": [
        { "id": "a", "text": "1 cm per day", "isCorrect": false },
        { "id": "b", "text": "1 fingerbreadth per day", "isCorrect": true },
        { "id": "c", "text": "2 cm per day", "isCorrect": false },
        { "id": "d", "text": "2 fingerbreadths per day", "isCorrect": false }
      ],
      "explanation": "The uterus normally involutes at a rate of approximately one fingerbreadth per day. By day 14, the fundus should no longer be palpable abdominally."
    },
    {
      "id": "q11",
      "type": "multiple-choice",
      "question": "What is the primary purpose of active management of the third stage of labour?",
      "points": 10,
      "options": [
        { "id": "a", "text": "To reduce pain", "isCorrect": false },
        { "id": "b", "text": "To prevent postpartum hemorrhage", "isCorrect": true },
        { "id": "c", "text": "To speed up delivery", "isCorrect": false },
        { "id": "d", "text": "To prevent infection", "isCorrect": false }
      ],
      "explanation": "Active management of the third stage of labour (including oxytocin administration, controlled cord traction, and uterine massage) is primarily aimed at preventing postpartum hemorrhage."
    },
    {
      "id": "q12",
      "type": "multiple-choice",
      "question": "What is the definition of lochia serosa?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Red discharge in the first 1-3 days", "isCorrect": false },
        { "id": "b", "text": "Pinkish-brown discharge from day 4-10", "isCorrect": true },
        { "id": "c", "text": "White or yellowish discharge after day 10", "isCorrect": false },
        { "id": "d", "text": "Foul-smelling discharge", "isCorrect": false }
      ],
      "explanation": "Lochia serosa is the pinkish-brown discharge that occurs from approximately day 4 to day 10 postpartum, consisting of serous fluid, red blood cells, and mucus."
    },
    {
      "id": "q13",
      "type": "true-false",
      "question": "Breastfeeding should be initiated within the first hour after birth.",
      "points": 10,
      "correctAnswer": true,
      "explanation": "True. Early initiation of breastfeeding within the first hour after birth (the 'golden hour') promotes bonding, stimulates milk production, and provides the newborn with colostrum rich in antibodies."
    },
    {
      "id": "q14",
      "type": "multiple-choice",
      "question": "What is the normal amount of lochia discharge in the first 24 hours postpartum?",
      "points": 10,
      "options": [
        { "id": "a", "text": "50-100 ml", "isCorrect": false },
        { "id": "b", "text": "100-200 ml", "isCorrect": false },
        { "id": "c", "text": "200-500 ml", "isCorrect": true },
        { "id": "d", "text": "500-1000 ml", "isCorrect": false }
      ],
      "explanation": "The normal amount of lochia discharge in the first 24 hours postpartum is approximately 200-500 ml. Excessive bleeding (>500 ml) indicates postpartum hemorrhage."
    },
    {
      "id": "q15",
      "type": "multiple-choice",
      "question": "What is lochia alba?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Red discharge in the first 1-3 days", "isCorrect": false },
        { "id": "b", "text": "Pinkish-brown discharge from day 4-10", "isCorrect": false },
        { "id": "c", "text": "White or yellowish discharge after day 10", "isCorrect": true },
        { "id": "d", "text": "Foul-smelling discharge", "isCorrect": false }
      ],
      "explanation": "Lochia alba is the white or yellowish discharge that occurs after approximately day 10 postpartum, consisting mainly of leukocytes, mucus, and decidual cells."
    }
  ]
});