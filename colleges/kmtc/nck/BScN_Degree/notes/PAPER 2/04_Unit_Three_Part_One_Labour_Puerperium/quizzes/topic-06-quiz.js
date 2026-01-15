/**
 * Quiz Data File (JSONP format)
 * Topic 6: Emergencies & Trauma
 *
 * Usage in HTML:
 *   <div class="quiz-container"
 *        data-quiz-id="topic-06-quiz"
 *        data-quiz-js="../quizzes/topic-06-quiz.js">
 */

registerQuiz("topic-06-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-06-quiz",
  "metadata": {
    "title": "Emergencies & Trauma",
    "description": "Emergency management of obstetric and neonatal complications",
    "topicId": "topic-06",
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
      "question": "What is the definition of postpartum hemorrhage (PPH)?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Blood loss > 300 ml after vaginal delivery", "isCorrect": false },
        { "id": "b", "text": "Blood loss > 500 ml after vaginal delivery or > 1000 ml after cesarean", "isCorrect": true },
        { "id": "c", "text": "Blood loss > 1000 ml after any delivery", "isCorrect": false },
        { "id": "d", "text": "Any bleeding requiring blood transfusion", "isCorrect": false }
      ],
      "explanation": "Postpartum hemorrhage (PPH) is defined as blood loss exceeding 500 ml after vaginal delivery or 1000 ml after cesarean delivery. It is a leading cause of maternal mortality worldwide."
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "question": "What are the '4 Ts' mnemonic for causes of postpartum hemorrhage?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Tone, Trauma, Tissue, Thrombin", "isCorrect": true },
        { "id": "b", "text": "Temperature, Trauma, Tissue, Thrombosis", "isCorrect": false },
        { "id": "c", "text": "Tension, Trauma, Tissue, Thrombosis", "isCorrect": false },
        { "id": "d", "text": "Tone, Temperature, Trauma, Thrombosis", "isCorrect": false }
      ],
      "explanation": "The '4 Ts' mnemonic for causes of PPH are: Tone (uterine atony), Trauma (genital tract trauma), Tissue (retained placental tissue), and Thrombin (coagulation disorders)."
    },
    {
      "id": "q3",
      "type": "multiple-choice",
      "question": "What is the most common cause of postpartum hemorrhage?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Genital tract trauma", "isCorrect": false },
        { "id": "b", "text": "Uterine atony", "isCorrect": true },
        { "id": "c", "text": "Retained placental tissue", "isCorrect": false },
        { "id": "d", "text": "Coagulation disorders", "isCorrect": false }
      ],
      "explanation": "Uterine atony (failure of the uterus to contract properly after delivery) is the most common cause of postpartum hemorrhage, accounting for approximately 70-80% of cases."
    },
    {
      "id": "q4",
      "type": "true-false",
      "question": "Uterine inversion is a life-threatening obstetric emergency requiring immediate manual replacement.",
      "points": 10,
      "correctAnswer": true,
      "explanation": "True. Uterine inversion is a life-threatening obstetric emergency where the uterus turns inside out. It requires immediate manual replacement of the uterus, along with uterotonic medications and fluid resuscitation."
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "question": "What is the first-line treatment for uterine atony?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Blood transfusion", "isCorrect": false },
        { "id": "b", "text": "Uterine massage and uterotonic medications (oxytocin)", "isCorrect": true },
        { "id": "c", "text": "Surgical intervention", "isCorrect": false },
        { "id": "d", "text": "Uterine packing", "isCorrect": false }
      ],
      "explanation": "The first-line treatment for uterine atony is uterine massage combined with uterotonic medications, particularly oxytocin. If these measures are ineffective, additional interventions such as misoprostol, carboprost, or surgical procedures may be required."
    },
    {
      "id": "q6",
      "type": "multiple-choice",
      "question": "What is the definition of eclampsia?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Hypertension with proteinuria after 20 weeks gestation", "isCorrect": false },
        { "id": "b", "text": "Severe hypertension without proteinuria", "isCorrect": false },
        { "id": "c", "text": "Convulsions in a woman with preeclampsia", "isCorrect": true },
        { "id": "d", "text": "Hypertension with edema", "isCorrect": false }
      ],
      "explanation": "Eclampsia is defined as the occurrence of convulsions (seizures) in a woman with preeclampsia. It is a life-threatening complication that requires immediate medical attention."
    },
    {
      "id": "q7",
      "type": "multiple-select",
      "question": "Which of the following are components of the management of eclampsia? (Select all that apply)",
      "points": 10,
      "options": [
        { "id": "a", "text": "Magnesium sulfate to prevent further seizures", "isCorrect": true },
        { "id": "b", "text": "Control of blood pressure with antihypertensives", "isCorrect": true },
        { "id": "c", "text": "Prompt delivery of the baby", "isCorrect": true },
        { "id": "d", "text": "Fluid restriction", "isCorrect": false }
      ],
      "partialCredit": true,
      "explanation": "Management of eclampsia includes magnesium sulfate to prevent further seizures, control of blood pressure with antihypertensive medications, and prompt delivery of the baby once the mother is stabilized. Fluid restriction is not part of standard management."
    },
    {
      "id": "q8",
      "type": "multiple-choice",
      "question": "What is the primary drug used to prevent and treat eclamptic seizures?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Diazepam", "isCorrect": false },
        { "id": "b", "text": "Magnesium sulfate", "isCorrect": true },
        { "id": "c", "text": "Phenytoin", "isCorrect": false },
        { "id": "d", "text": "Lorazepam", "isCorrect": false }
      ],
      "explanation": "Magnesium sulfate is the primary drug used to prevent and treat eclamptic seizures. It is more effective than other anticonvulsants and also has vasodilatory effects that help improve placental perfusion."
    },
    {
      "id": "q9",
      "type": "true-false",
      "question": "Shoulder dystocia is an obstetric emergency characterized by impaction of the fetal shoulders after delivery of the head.",
      "points": 10,
      "correctAnswer": true,
      "explanation": "True. Shoulder dystocia is an obstetric emergency where the fetal anterior shoulder becomes impacted behind the maternal symphysis pubis after delivery of the head. It requires immediate maneuvers to release the shoulder and prevent neonatal injury."
    },
    {
      "id": "q10",
      "type": "multiple-choice",
      "question": "What is the HELPERR mnemonic used for?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Management of postpartum hemorrhage", "isCorrect": false },
        { "id": "b", "text": "Management of shoulder dystocia", "isCorrect": true },
        { "id": "c", "text": "Management of eclampsia", "isCorrect": false },
        { "id": "d", "text": "Management of umbilical cord prolapse", "isCorrect": false }
      ],
      "explanation": "The HELPERR mnemonic is used for the systematic management of shoulder dystocia: H - Help, E - Episiotomy, L - Legs (McRoberts maneuver), P - Pressure (suprapubic), E - Enter maneuvers, R - Remove posterior arm, R - Roll patient."
    },
    {
      "id": "q11",
      "type": "multiple-choice",
      "question": "What is the definition of umbilical cord prolapse?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Umbilical cord wrapped around the fetal neck", "isCorrect": false },
        { "id": "b", "text": "Umbilical cord presenting before the fetus", "isCorrect": true },
        { "id": "c", "text": "Umbilical cord compression between fetus and pelvis", "isCorrect": false },
        { "id": "d", "text": "Short umbilical cord", "isCorrect": false }
      ],
      "explanation": "Umbilical cord prolapse is defined as the umbilical cord presenting before the fetus, usually after rupture of membranes. It is an obstetric emergency that requires immediate delivery to prevent fetal hypoxia."
    },
    {
      "id": "q12",
      "type": "multiple-choice",
      "question": "What is the immediate management for umbilical cord prolapse?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Wait for spontaneous delivery", "isCorrect": false },
        { "id": "b", "text": "Relieve cord pressure and expedite delivery (usually cesarean)", "isCorrect": true },
        { "id": "c", "text": "Administer oxytocin to speed up labor", "isCorrect": false },
        { "id": "d", "text": "Perform episiotomy", "isCorrect": false }
      ],
      "explanation": "Immediate management of umbilical cord prolapse includes relieving pressure on the cord (manually elevating the presenting part or placing the mother in knee-chest position) and expediting delivery, usually by emergency cesarean section."
    },
    {
      "id": "q13",
      "type": "true-false",
      "question": "Amniotic fluid embolism is a rare but highly fatal obstetric emergency.",
      "points": 10,
      "correctAnswer": true,
      "explanation": "True. Amniotic fluid embolism (AFE) is a rare but highly fatal obstetric emergency where amniotic fluid enters the maternal circulation, causing cardiovascular collapse and coagulopathy. Mortality rates range from 20-60%."
    },
    {
      "id": "q14",
      "type": "multiple-choice",
      "question": "What is the most common cause of maternal mortality in developing countries?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Eclampsia", "isCorrect": false },
        { "id": "b", "text": "Postpartum hemorrhage", "isCorrect": true },
        { "id": "c", "text": "Infection", "isCorrect": false },
        { "id": "d", "text": "Obstructed labor", "isCorrect": false }
      ],
      "explanation": "Postpartum hemorrhage is the most common cause of maternal mortality in developing countries, accounting for approximately 25-30% of maternal deaths. This is largely preventable with proper obstetric care."
    },
    {
      "id": "q15",
      "type": "multiple-choice",
      "question": "What is the management for amniotic fluid embolism?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Supportive care and immediate delivery", "isCorrect": true },
        { "id": "b", "text": "Anticoagulation therapy", "isCorrect": false },
        { "id": "c", "text": "Corticosteroids", "isCorrect": false },
        { "id": "d", "text": "Magnesium sulfate", "isCorrect": false }
      ],
      "explanation": "Management of amniotic fluid embolism is primarily supportive, including oxygen therapy, hemodynamic support, blood product replacement for coagulopathy, and immediate delivery if the fetus is still alive. There is no specific treatment for AFE."
    }
  ]
});