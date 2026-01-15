registerQuiz("topic-07-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-07-quiz",
  "metadata": {
    "title": "Genitourinary and Skin Quiz",
    "description": "Evaluate understanding of the renal system, urinary disorders, and skin conditions.",
    "topicId": "topic-07-genitourinary-integuments",
    "difficulty": "intermediate",
    "estimatedTime": 20,
    "passingScore": 75,
    "createdAt": "2025-12-25T12:00:00Z"
  },
  "questions": [
    {
      "id": "q1",
      "type": "fill-blank",
      "question": "The functional unit of the kidney is the __1__.",
      "points": 10,
      "blanks": [
        { "id": "1", "acceptedAnswers": ["nephron"], "caseSensitive": false }
      ],
      "explanation": "There are over 1 million nephrons in each kidney responsible for filtration and urine formation."
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "question": "Which phase of Acute Renal Failure is characterized by urine output of less than 400ml/day?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Diuretic Phase", "isCorrect": false },
        { "id": "b", "text": "Oliguric Phase", "isCorrect": true },
        { "id": "c", "text": "Recovery Phase", "isCorrect": false },
        { "id": "d", "text": "Onset Phase", "isCorrect": false }
      ],
      "explanation": "Oliguria is defined as urine output < 400ml/day. This occurs in the Oliguric phase of ARF."
    },
    {
      "id": "q3",
      "type": "matching",
      "question": "Match the urinary disorder to its location:",
      "points": 15,
      "pairs": [
        { "id": "p1", "left": "Cystitis", "right": "Bladder" },
        { "id": "p2", "left": "Pyelonephritis", "right": "Kidney" },
        { "id": "p3", "left": "Urethritis", "right": "Urethra" },
        { "id": "p4", "left": "Hydronephrosis", "right": "Renal Pelvis (Dilation)" }
      ]
    },
    {
      "id": "q4",
      "type": "fill-blank",
      "question": "The __1__ formula is used to calculate fluid resuscitation in burn patients.",
      "points": 10,
      "blanks": [
        { "id": "1", "acceptedAnswers": ["parkland", "parkland's"], "caseSensitive": false }
      ],
      "explanation": "The Parkland formula (4ml x kg x %TBSA) is the standard for burn fluid resuscitation."
    },
    {
      "id": "q5",
      "type": "multiple-select",
      "question": "Select the correct dietary modifications for Chronic Renal Failure. Select all that apply:",
      "points": 15,
      "options": [
        { "id": "a", "text": "Restrict Protein", "isCorrect": true },
        { "id": "b", "text": "Restrict Sodium", "isCorrect": true },
        { "id": "c", "text": "High Potassium Diet", "isCorrect": false },
        { "id": "d", "text": "Restrict Potassium", "isCorrect": true },
        { "id": "e", "text": "High Protein Diet", "isCorrect": false }
      ],
      "partialCredit": true,
      "explanation": "In CRF, the kidneys cannot excrete waste products effectively. Protein is restricted to reduce nitrogenous waste (urea), and electrolytes (Na, K) are restricted to prevent imbalance."
    },
    {
      "id": "q6",
      "type": "image-based",
      "question": "Identify the structure of the kidney labeled in the diagram:",
      "points": 10,
      "imageUrl": "../assets/images/image-20260110-e40db4a8.jpeg",
      "imageAlt": "Cross section of a kidney",
      "options": [
        { "id": "a", "text": "Cortex", "isCorrect": false },
        { "id": "b", "text": "Medulla", "isCorrect": false },
        { "id": "c", "text": "Pelvis", "isCorrect": true },
        { "id": "d", "text": "Ureter", "isCorrect": false }
      ],
      "explanation": "The pelvis is the funnel-shaped structure that collects urine from the calyces."
    }
  ]
});