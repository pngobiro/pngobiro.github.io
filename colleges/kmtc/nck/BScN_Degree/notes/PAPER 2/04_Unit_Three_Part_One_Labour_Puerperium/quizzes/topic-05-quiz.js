/**
 * Quiz Data File (JSONP format)
 * Topic 5: Neonatal Infections
 *
 * Usage in HTML:
 *   <div class="quiz-container"
 *        data-quiz-id="topic-05-quiz"
 *        data-quiz-js="../quizzes/topic-05-quiz.js">
 */

registerQuiz("topic-05-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-05-quiz",
  "metadata": {
    "title": "Neonatal Infections",
    "description": "Recognition, prevention, and management of neonatal infections",
    "topicId": "topic-05",
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
      "question": "What is the most common cause of early-onset neonatal sepsis?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Escherichia coli", "isCorrect": false },
        { "id": "b", "text": "Group B Streptococcus (GBS)", "isCorrect": true },
        { "id": "c", "text": "Staphylococcus aureus", "isCorrect": false },
        { "id": "d", "text": "Klebsiella pneumoniae", "isCorrect": false }
      ],
      "explanation": "Group B Streptococcus (GBS) is the most common cause of early-onset neonatal sepsis (within 72 hours of birth). It is typically acquired from the mother during delivery."
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "question": "What is the most common cause of late-onset neonatal sepsis?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Group B Streptococcus (GBS)", "isCorrect": false },
        { "id": "b", "text": "Coagulase-negative staphylococci", "isCorrect": true },
        { "id": "c", "text": "Escherichia coli", "isCorrect": false },
        { "id": "d", "text": "Listeria monocytogenes", "isCorrect": false }
      ],
      "explanation": "Coagulase-negative staphylococci are the most common cause of late-onset neonatal sepsis (after 72 hours), particularly in preterm infants with indwelling catheters or prolonged hospitalization."
    },
    {
      "id": "q3",
      "type": "multiple-choice",
      "question": "What is the definition of early-onset neonatal sepsis?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Within 24 hours of birth", "isCorrect": false },
        { "id": "b", "text": "Within 48 hours of birth", "isCorrect": false },
        { "id": "c", "text": "Within 72 hours of birth", "isCorrect": true },
        { "id": "d", "text": "Within 7 days of birth", "isCorrect": false }
      ],
      "explanation": "Early-onset neonatal sepsis is defined as infection occurring within 72 hours of birth. It is usually vertically transmitted from the mother during labor and delivery."
    },
    {
      "id": "q4",
      "type": "true-false",
      "question": "Ophthalmia neonatorum is a conjunctival infection that can be caused by gonorrhea or chlamydia.",
      "points": 10,
      "correctAnswer": true,
      "explanation": "True. Ophthalmia neonatorum is a conjunctival infection of newborns that can be caused by Neisseria gonorrhoeae or Chlamydia trachomatis transmitted from the mother during birth. It can lead to blindness if untreated."
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "question": "What is the prophylactic treatment for ophthalmia neonatorum?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Oral antibiotics", "isCorrect": false },
        { "id": "b", "text": "Topical erythromycin or tetracycline ointment", "isCorrect": true },
        { "id": "c", "text": "Intravenous antibiotics", "isCorrect": false },
        { "id": "d", "text": "Antiviral eye drops", "isCorrect": false }
      ],
      "explanation": "Prophylactic treatment for ophthalmia neonatorum consists of topical erythromycin or tetracycline ointment applied to both eyes shortly after birth to prevent gonococcal and chlamydial conjunctivitis."
    },
    {
      "id": "q6",
      "type": "multiple-choice",
      "question": "What is the most common clinical sign of neonatal sepsis?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Fever", "isCorrect": false },
        { "id": "b", "text": "Hypothermia", "isCorrect": true },
        { "id": "c", "text": "Rash", "isCorrect": false },
        { "id": "d", "text": "Seizures", "isCorrect": false }
      ],
      "explanation": "Hypothermia is the most common clinical sign of neonatal sepsis, especially in preterm infants. Newborns often present with temperature instability rather than the classic fever seen in older children and adults."
    },
    {
      "id": "q7",
      "type": "multiple-select",
      "question": "Which of the following are risk factors for neonatal sepsis? (Select all that apply)",
      "points": 10,
      "options": [
        { "id": "a", "text": "Premature rupture of membranes (PROM)", "isCorrect": true },
        { "id": "b", "text": "Prolonged labor", "isCorrect": true },
        { "id": "c", "text": "Maternal fever during labor", "isCorrect": true },
        { "id": "d", "text": "Cesarean section", "isCorrect": false }
      ],
      "partialCredit": true,
      "explanation": "Risk factors for neonatal sepsis include premature rupture of membranes (PROM), prolonged labor, maternal fever during labor, and maternal GBS colonization. Cesarean section is not a significant risk factor unless performed after prolonged labor or membrane rupture."
    },
    {
      "id": "q8",
      "type": "multiple-choice",
      "question": "What is the first-line antibiotic treatment for suspected early-onset neonatal sepsis?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Vancomycin alone", "isCorrect": false },
        { "id": "b", "text": "Ampicillin and gentamicin", "isCorrect": true },
        { "id": "c", "text": "Cefotaxime alone", "isCorrect": false },
        { "id": "d", "text": "Penicillin and erythromycin", "isCorrect": false }
      ],
      "explanation": "The first-line antibiotic treatment for suspected early-onset neonatal sepsis is ampicillin (to cover GBS and enterococci) plus gentamicin (to cover gram-negative organisms including E. coli)."
    },
    {
      "id": "q9",
      "type": "true-false",
      "question": "Neonatal tetanus is caused by contamination of the umbilical stump.",
      "points": 10,
      "correctAnswer": true,
      "explanation": "True. Neonatal tetanus is caused by contamination of the umbilical stump with Clostridium tetani spores, typically due to unhygienic delivery practices. It can be prevented by maternal tetanus immunization and clean cord care."
    },
    {
      "id": "q10",
      "type": "multiple-choice",
      "question": "What is the incubation period for neonatal tetanus?",
      "points": 10,
      "options": [
        { "id": "a", "text": "1-3 days", "isCorrect": false },
        { "id": "b", "text": "3-14 days", "isCorrect": true },
        { "id": "c", "text": "14-21 days", "isCorrect": false },
        { "id": "d", "text": "21-28 days", "isCorrect": false }
      ],
      "explanation": "The incubation period for neonatal tetanus is typically 3-14 days, with most cases occurring within the first week of life. Shorter incubation periods are associated with more severe disease and higher mortality."
    },
    {
      "id": "q11",
      "type": "multiple-choice",
      "question": "What is the most common congenital infection?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Cytomegalovirus (CMV)", "isCorrect": true },
        { "id": "b", "text": "Rubella", "isCorrect": false },
        { "id": "c", "text": "Toxoplasmosis", "isCorrect": false },
        { "id": "d", "text": "Syphilis", "isCorrect": false }
      ],
      "explanation": "Cytomegalovirus (CMV) is the most common congenital infection, affecting approximately 0.5-1% of all live births. Most infected infants are asymptomatic at birth, but some develop hearing loss, developmental delay, or other complications."
    },
    {
      "id": "q12",
      "type": "multiple-choice",
      "question": "What is the TORCH acronym used to describe?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Types of neonatal vaccines", "isCorrect": false },
        { "id": "b", "text": "Congenital infections that can cause similar clinical findings", "isCorrect": true },
        { "id": "c", "text": "Neonatal resuscitation steps", "isCorrect": false },
        { "id": "d", "text": "Neonatal screening tests", "isCorrect": false }
      ],
      "explanation": "The TORCH acronym describes congenital infections that can cause similar clinical findings: Toxoplasmosis, Other (syphilis, varicella, parvovirus), Rubella, Cytomegalovirus (CMV), and Herpes simplex virus."
    },
    {
      "id": "q13",
      "type": "true-false",
      "question": "Congenital syphilis can be prevented by treating the mother with penicillin during pregnancy.",
      "points": 10,
      "correctAnswer": true,
      "explanation": "True. Congenital syphilis can be effectively prevented by treating the mother with penicillin during pregnancy, preferably at least 30 days before delivery. Treatment of the mother also treats the fetus."
    },
    {
      "id": "q14",
      "type": "multiple-choice",
      "question": "What is the most common route of transmission for neonatal herpes simplex virus (HSV) infection?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Transplacental", "isCorrect": false },
        { "id": "b", "text": "Contact with infected maternal genital lesions during delivery", "isCorrect": true },
        { "id": "c", "text": "Postnatal exposure to infected caregivers", "isCorrect": false },
        { "id": "d", "text": "Breastfeeding", "isCorrect": false }
      ],
      "explanation": "The most common route of transmission for neonatal herpes simplex virus (HSV) infection is contact with infected maternal genital lesions during vaginal delivery. Cesarean section can reduce transmission risk if active lesions are present."
    },
    {
      "id": "q15",
      "type": "multiple-choice",
      "question": "What is the treatment for neonatal herpes simplex virus infection?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Acyclovir", "isCorrect": true },
        { "id": "b", "text": "Amoxicillin", "isCorrect": false },
        { "id": "c", "text": "Gentamicin", "isCorrect": false },
        { "id": "d", "text": "Fluconazole", "isCorrect": false }
      ],
      "explanation": "Acyclovir is the treatment of choice for neonatal herpes simplex virus infection. Intravenous acyclovir should be started promptly when HSV infection is suspected to reduce mortality and morbidity."
    }
  ]
});