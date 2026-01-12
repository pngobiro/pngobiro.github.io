/**
 * Quiz Data File (JSONP format)
 * Topic 1: Normal Labour
 * 
 * Usage in HTML:
 *   <div class="quiz-container" 
 *        data-quiz-id="topic-01-quiz"
 *        data-quiz-js="../quizzes/topic-01-quiz.js">
 */

registerQuiz("topic-01-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-01-quiz",
  "metadata": {
    "title": "Normal Labour",
    "description": "Understanding the physiology and process of normal labour, including first stage management",
    "topicId": "topic-01",
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
      "question": "What is the definition of labour?",
      "points": 10,
      "options": [
        { "id": "a", "text": "The expulsion of the products of conception from the uterus", "isCorrect": false },
        { "id": "b", "text": "The process by which the fetus, placenta, and membranes are expelled from the uterus", "isCorrect": true },
        { "id": "c", "text": "The period from conception to birth", "isCorrect": false },
        { "id": "d", "text": "The delivery of the baby only", "isCorrect": false }
      ],
      "explanation": "Labour is defined as the process by which the fetus, placenta, and membranes are expelled from the uterus through the birth canal."
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "question": "What are the three 'Ps' of labour?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Pain, Pressure, Position", "isCorrect": false },
        { "id": "b", "text": "Power, Passageway, Passenger", "isCorrect": true },
        { "id": "c", "text": "Pelvis, Placenta, Presentation", "isCorrect": false },
        { "id": "d", "text": "Progress, Pattern, Position", "isCorrect": false }
      ],
      "explanation": "The three Ps of labour are: Power (uterine contractions), Passageway (pelvis and birth canal), and Passenger (fetus)."
    },
    {
      "id": "q3",
      "type": "true-false",
      "question": "The first stage of labour begins with regular uterine contractions and ends with complete cervical dilatation.",
      "points": 10,
      "correctAnswer": true,
      "explanation": "True. The first stage of labour begins with regular uterine contractions that result in cervical effacement and dilatation, and ends when the cervix is fully dilated (10 cm)."
    },
    {
      "id": "q4",
      "type": "multiple-choice",
      "question": "What is the normal duration of the first stage of labour in a primigravida?",
      "points": 10,
      "options": [
        { "id": "a", "text": "2-4 hours", "isCorrect": false },
        { "id": "b", "text": "6-12 hours", "isCorrect": false },
        { "id": "c", "text": "12-18 hours", "isCorrect": true },
        { "id": "d", "text": "24-36 hours", "isCorrect": false }
      ],
      "explanation": "In a primigravida (first pregnancy), the first stage of labour typically lasts 12-18 hours. Multiparas usually have shorter first stages."
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "question": "What is the definition of cervical effacement?",
      "points": 10,
      "options": [
        { "id": "a", "text": "The opening of the cervix", "isCorrect": false },
        { "id": "b", "text": "The thinning and shortening of the cervix", "isCorrect": true },
        { "id": "c", "text": "The movement of the cervix forward", "isCorrect": false },
        { "id": "d", "text": "The softening of the cervix", "isCorrect": false }
      ],
      "explanation": "Cervical effacement refers to the thinning and shortening of the cervix during labour, which allows it to open more easily."
    },
    {
      "id": "q6",
      "type": "multiple-select",
      "question": "Which of the following are signs of true labour? (Select all that apply)",
      "points": 10,
      "options": [
        { "id": "a", "text": "Regular contractions that increase in frequency and intensity", "isCorrect": true },
        { "id": "b", "text": "Pain relieved by walking", "isCorrect": false },
        { "id": "c", "text": "Bloody show", "isCorrect": true },
        { "id": "d", "text": "Cervical dilation and effacement", "isCorrect": true }
      ],
      "partialCredit": true,
      "explanation": "Signs of true labour include regular contractions that increase in frequency and intensity, bloody show (mucus plug discharge), and progressive cervical dilation and effacement. False labour contractions are typically irregular and may be relieved by walking."
    },
    {
      "id": "q7",
      "type": "multiple-choice",
      "question": "What is the normal fetal heart rate during labour?",
      "points": 10,
      "options": [
        { "id": "a", "text": "80-100 bpm", "isCorrect": false },
        { "id": "b", "text": "110-160 bpm", "isCorrect": true },
        { "id": "c", "text": "160-180 bpm", "isCorrect": false },
        { "id": "d", "text": "180-200 bpm", "isCorrect": false }
      ],
      "explanation": "The normal fetal heart rate during labour is 110-160 beats per minute. Rates outside this range may indicate fetal distress."
    },
    {
      "id": "q8",
      "type": "multiple-choice",
      "question": "What is the most common fetal presentation during labour?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Breech", "isCorrect": false },
        { "id": "b", "text": "Face", "isCorrect": false },
        { "id": "c", "text": "Cephalic", "isCorrect": true },
        { "id": "d", "text": "Shoulder", "isCorrect": false }
      ],
      "explanation": "Cephalic presentation (head first) is the most common fetal presentation, occurring in approximately 95-97% of deliveries."
    },
    {
      "id": "q9",
      "type": "true-false",
      "question": "The latent phase of the first stage of labour is typically longer than the active phase.",
      "points": 10,
      "correctAnswer": true,
      "explanation": "True. The latent phase (from onset of labour to 3-4 cm dilation) is typically longer than the active phase (from 4 cm to full dilation), though the active phase progresses more rapidly."
    },
    {
      "id": "q10",
      "type": "multiple-choice",
      "question": "What is the primary nursing intervention during the first stage of labour?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Administering pain medication", "isCorrect": false },
        { "id": "b", "text": "Monitoring fetal and maternal status", "isCorrect": true },
        { "id": "c", "text": "Preparing for delivery", "isCorrect": false },
        { "id": "d", "text": "Breaking the membranes", "isCorrect": false }
      ],
      "explanation": "The primary nursing intervention during the first stage of labour is continuous monitoring of fetal and maternal status, including fetal heart rate, uterine contractions, and maternal vital signs."
    }
  ]
});