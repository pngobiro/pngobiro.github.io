/**
 * Quiz Data File (JSONP format)
 * Topic 4: High-Risk Neonate
 *
 * Usage in HTML:
 *   <div class="quiz-container"
 *        data-quiz-id="topic-04-quiz"
 *        data-quiz-js="../quizzes/topic-04-quiz.js">
 */

registerQuiz("topic-04-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-04-quiz",
  "metadata": {
    "title": "High-Risk Neonate",
    "description": "Identification and management of high-risk newborns and complications",
    "topicId": "topic-04",
    "difficulty": "advanced",
    "estimatedTime": 20,
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
      "question": "What is the definition of a preterm infant?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Born before 34 weeks gestation", "isCorrect": false },
        { "id": "b", "text": "Born before 37 weeks gestation", "isCorrect": true },
        { "id": "c", "text": "Born before 39 weeks gestation", "isCorrect": false },
        { "id": "d", "text": "Born before 40 weeks gestation", "isCorrect": false }
      ],
      "explanation": "A preterm infant is defined as one born before 37 completed weeks of gestation. Preterm infants are at increased risk for various complications."
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "question": "What is Respiratory Distress Syndrome (RDS) primarily caused by?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Congenital heart defect", "isCorrect": false },
        { "id": "b", "text": "Surfactant deficiency", "isCorrect": true },
        { "id": "c", "text": "Pneumonia", "isCorrect": false },
        { "id": "d", "text": "Meconium aspiration", "isCorrect": false }
      ],
      "explanation": "Respiratory Distress Syndrome (RDS) is primarily caused by surfactant deficiency, which is most common in preterm infants. Surfactant reduces surface tension in the alveoli and prevents collapse."
    },
    {
      "id": "q3",
      "type": "multiple-choice",
      "question": "What is the treatment of choice for severe RDS?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Oxygen therapy alone", "isCorrect": false },
        { "id": "b", "text": "Surfactant replacement therapy", "isCorrect": true },
        { "id": "c", "text": "Antibiotics", "isCorrect": false },
        { "id": "d", "text": "Diuretics", "isCorrect": false }
      ],
      "explanation": "Surfactant replacement therapy is the treatment of choice for severe RDS. It is administered directly into the trachea and helps improve lung compliance and oxygenation."
    },
    {
      "id": "q4",
      "type": "true-false",
      "question": "Neonatal hypoglycemia is defined as blood glucose below 2.6 mmol/L.",
      "points": 10,
      "correctAnswer": true,
      "explanation": "True. Neonatal hypoglycemia is generally defined as blood glucose below 2.6 mmol/L (47 mg/dL). It can cause neurological damage if not promptly recognized and treated."
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "question": "What is the most common cause of neonatal seizures?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Hypoglycemia", "isCorrect": false },
        { "id": "b", "text": "Hypoxic-ischemic encephalopathy", "isCorrect": true },
        { "id": "c", "text": "Meningitis", "isCorrect": false },
        { "id": "d", "text": "Electrolyte imbalance", "isCorrect": false }
      ],
      "explanation": "Hypoxic-ischemic encephalopathy (HIE) is the most common cause of neonatal seizures. It results from perinatal asphyxia and can lead to significant neurological impairment."
    },
    {
      "id": "q6",
      "type": "multiple-choice",
      "question": "What is the definition of low birth weight (LBW)?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Less than 1500 grams", "isCorrect": false },
        { "id": "b", "text": "Less than 2000 grams", "isCorrect": false },
        { "id": "c", "text": "Less than 2500 grams", "isCorrect": true },
        { "id": "d", "text": "Less than 3000 grams", "isCorrect": false }
      ],
      "explanation": "Low birth weight (LBW) is defined as birth weight less than 2500 grams. Very low birth weight (VLBW) is less than 1500 grams, and extremely low birth weight (ELBW) is less than 1000 grams."
    },
    {
      "id": "q7",
      "type": "multiple-select",
      "question": "Which of the following are risk factors for preterm birth? (Select all that apply)",
      "points": 10,
      "options": [
        { "id": "a", "text": "Multiple gestation", "isCorrect": true },
        { "id": "b", "text": "Maternal hypertension", "isCorrect": true },
        { "id": "c", "text": "Infection", "isCorrect": true },
        { "id": "d", "text": "Advanced maternal age", "isCorrect": false }
      ],
      "partialCredit": true,
      "explanation": "Risk factors for preterm birth include multiple gestation, maternal hypertension (preeclampsia), infection (chorioamnionitis, urinary tract infections), and previous preterm birth. Advanced maternal age is not a major risk factor."
    },
    {
      "id": "q8",
      "type": "multiple-choice",
      "question": "What is the primary complication of meconium aspiration syndrome?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Renal failure", "isCorrect": false },
        { "id": "b", "text": "Persistent pulmonary hypertension of the newborn (PPHN)", "isCorrect": true },
        { "id": "c", "text": "Gastrointestinal obstruction", "isCorrect": false },
        { "id": "d", "text": "Cardiac arrhythmia", "isCorrect": false }
      ],
      "explanation": "The primary complication of meconium aspiration syndrome is persistent pulmonary hypertension of the newborn (PPHN), which occurs when meconium causes severe lung inflammation and pulmonary vasoconstriction."
    },
    {
      "id": "q9",
      "type": "true-false",
      "question": "Kernicterus is a complication of untreated severe hyperbilirubinemia.",
      "points": 10,
      "correctAnswer": true,
      "explanation": "True. Kernicterus is a neurological syndrome caused by bilirubin deposition in the brain due to untreated severe hyperbilirubinemia. It can result in permanent neurological damage including hearing loss, cerebral palsy, and intellectual disability."
    },
    {
      "id": "q10",
      "type": "multiple-choice",
      "question": "What is the treatment for severe neonatal hyperbilirubinemia?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Antibiotics", "isCorrect": false },
        { "id": "b", "text": "Phototherapy", "isCorrect": true },
        { "id": "c", "text": "Blood transfusion", "isCorrect": false },
        { "id": "d", "text": "Corticosteroids", "isCorrect": false }
      ],
      "explanation": "Phototherapy is the treatment of choice for severe neonatal hyperbilirubinemia. It converts bilirubin to water-soluble forms that can be excreted. Exchange transfusion may be required for extreme cases unresponsive to phototherapy."
    },
    {
      "id": "q11",
      "type": "multiple-choice",
      "question": "What is the most common congenital heart defect in newborns?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Tetralogy of Fallot", "isCorrect": false },
        { "id": "b", "text": "Ventricular septal defect (VSD)", "isCorrect": true },
        { "id": "c", "text": "Atrial septal defect (ASD)", "isCorrect": false },
        { "id": "d", "text": "Patent ductus arteriosus (PDA)", "isCorrect": false }
      ],
      "explanation": "Ventricular septal defect (VSD) is the most common congenital heart defect, accounting for approximately 20-30% of all congenital heart defects. It is a hole in the septum between the ventricles."
    },
    {
      "id": "q12",
      "type": "multiple-choice",
      "question": "What is the definition of a small for gestational age (SGA) infant?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Below 10th percentile for gestational age", "isCorrect": true },
        { "id": "b", "text": "Below 25th percentile for gestational age", "isCorrect": false },
        { "id": "c", "text": "Below 50th percentile for gestational age", "isCorrect": false },
        { "id": "d", "text": "Below 5th percentile for gestational age", "isCorrect": false }
      ],
      "explanation": "A small for gestational age (SGA) infant is defined as one whose birth weight is below the 10th percentile for gestational age. SGA infants are at increased risk for hypoglycemia, hypothermia, and polycythemia."
    },
    {
      "id": "q13",
      "type": "true-false",
      "question": "Neonatal sepsis can be early-onset (within 72 hours) or late-onset (after 72 hours).",
      "points": 10,
      "correctAnswer": true,
      "explanation": "True. Neonatal sepsis is classified as early-onset (within 72 hours of birth, usually acquired from the mother) or late-onset (after 72 hours, usually acquired from the environment)."
    },
    {
      "id": "q14",
      "type": "multiple-choice",
      "question": "What is the most common organism causing early-onset neonatal sepsis?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Staphylococcus aureus", "isCorrect": false },
        { "id": "b", "text": "Escherichia coli", "isCorrect": false },
        { "id": "c", "text": "Group B Streptococcus (GBS)", "isCorrect": true },
        { "id": "d", "text": "Klebsiella pneumoniae", "isCorrect": false }
      ],
      "explanation": "Group B Streptococcus (GBS) is the most common organism causing early-onset neonatal sepsis. This is why intrapartum antibiotic prophylaxis is recommended for GBS-positive mothers."
    },
    {
      "id": "q15",
      "type": "multiple-choice",
      "question": "What is the primary treatment for neonatal hypoglycemia?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Insulin therapy", "isCorrect": false },
        { "id": "b", "text": "Glucose administration (oral or IV)", "isCorrect": true },
        { "id": "c", "text": "Corticosteroids", "isCorrect": false },
        { "id": "d", "text": "Diazoxide", "isCorrect": false }
      ],
      "explanation": "The primary treatment for neonatal hypoglycemia is glucose administration, either orally (if the infant can feed) or intravenously (for severe cases or when oral feeding is not possible)."
    }
  ]
});