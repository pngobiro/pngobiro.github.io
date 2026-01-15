registerQuiz("comprehensive-exam", {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "Comprehensive Final Exam: Labour and Puerperium",
        "description": "A comprehensive assessment covering Normal Labour, Puerperium, Neonatal Physiology, High Risk Neonates, Infections, and Emergencies.",
        "examType": "comprehensive",
        "topicsCovered": [
            "topic-01-normal-labour",
            "topic-02-stages-puerperium",
            "topic-03-neonate-physiology",
            "topic-04-high-risk",
            "topic-05-infections",
            "topic-06-emergencies"
        ],
        "difficulty": "advanced",
        "estimatedTime": 60,
        "passingScore": 70,
        "createdAt": "2026-01-11T00:00:00Z",
        "tags": ["final", "comprehensive", "midwifery", "labour", "neonate"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "end",
        "allowRetry": true,
        "showCorrectAnswers": true,
        "timeLimit": 3600
    },
    "questions": [
        /* TOPIC 1: NORMAL LABOUR */
        {
            "id": "comp-t1-q1",
            "type": "multiple-choice",
            "question": "According to the definition provided, labour is the process whereby the foetus, placenta and membranes are expelled through the birth canal after how many weeks of gestation?",
            "points": 1,
            "topicId": "topic-01-normal-labour",
            "topicName": "Normal Labour (1st Stage)",
            "options": [
                { "id": "a", "text": "20 weeks", "isCorrect": false },
                { "id": "b", "text": "24 weeks", "isCorrect": false },
                { "id": "c", "text": "28 weeks", "isCorrect": true },
                { "id": "d", "text": "37 weeks", "isCorrect": false }
            ],
            "explanation": "Labour is described as the process whereby the foetus, placenta and membranes are expelled through the birth canal after 28 weeks of gestation."
        },
        {
            "id": "comp-t1-q2",
            "type": "matching",
            "question": "Match the characteristics to either True Labour or False Labour:",
            "points": 4,
            "topicId": "topic-01-normal-labour",
            "topicName": "Normal Labour (1st Stage)",
            "pairs": [
                { "id": "p1", "left": "Contractions", "right": "Regularly spaced in True Labour" },
                { "id": "p2", "left": "Interval", "right": "Gradually shortens in True Labour" },
                { "id": "p3", "left": "Location of pain", "right": "Lower abdomen in False Labour" },
                { "id": "p4", "left": "Cervical changes", "right": "Progressive effacement in True Labour" }
            ]
        },
        {
            "id": "comp-t1-q3",
            "type": "fill-blank",
            "question": "The neuromuscular harmony between the two poles or segments of the uterus throughout labour, where the upper pole contracts strongly and the lower pole contracts slightly, is known as __1__.",
            "points": 2,
            "topicId": "topic-01-normal-labour",
            "topicName": "Normal Labour (1st Stage)",
            "blanks": [
                { "id": "1", "acceptedAnswers": ["polarity"], "caseSensitive": false }
            ],
            "explanation": "Polarity describes the neuromuscular harmony between the two poles or segments of the uterus throughout labour."
        },
        {
            "id": "comp-t1-q4",
            "type": "multiple-choice",
            "question": "Which of the following is NOT a premonitory sign of labour?",
            "points": 1,
            "topicId": "topic-01-normal-labour",
            "topicName": "Normal Labour (1st Stage)",
            "options": [
                { "id": "a", "text": "Lightening", "isCorrect": false },
                { "id": "b", "text": "Frequency of micturition", "isCorrect": false },
                { "id": "c", "text": "Taking up of the cervix", "isCorrect": false },
                { "id": "d", "text": "Severe hypertension", "isCorrect": true }
            ],
            "explanation": "Pre-labour signs include Lightening, Frequency of Micturition, and Taking up of the cervix. Hypertension is a sign of a complication, not a normal premonitory sign."
        },

        /* TOPIC 2: STAGES 2-4 & PUERPERIUM */
        {
            "id": "comp-t2-q1",
            "type": "ordering",
            "question": "Arrange the cardinal movements of labour (vertex presentation) in the correct order:",
            "points": 5,
            "topicId": "topic-02-stages-puerperium",
            "topicName": "Stages 2-4 & Puerperium",
            "items": [
                { "id": "i1", "text": "Engagement", "correctPosition": 1 },
                { "id": "i2", "text": "Descent", "correctPosition": 2 },
                { "id": "i3", "text": "Flexion", "correctPosition": 3 },
                { "id": "i4", "text": "Internal rotation", "correctPosition": 4 },
                { "id": "i5", "text": "Extension", "correctPosition": 5 },
                { "id": "i6", "text": "Restitution (External rotation)", "correctPosition": 6 },
                { "id": "i7", "text": "Expulsion", "correctPosition": 7 }
            ],
            "explanation": "Remember the mnemonic: 'Every Decent Family In Europe Eats Eggs' (Engagement, Descent, Flexion, Internal rotation, Extension, External restitution, Expulsion)."
        },
        {
            "id": "comp-t2-q2",
            "type": "multiple-select",
            "question": "Select all signs evaluated in the APGAR score:",
            "points": 3,
            "topicId": "topic-02-stages-puerperium",
            "topicName": "Stages 2-4 & Puerperium",
            "options": [
                { "id": "a", "text": "Appearance (Colour)", "isCorrect": true },
                { "id": "b", "text": "Blood Pressure", "isCorrect": false },
                { "id": "c", "text": "Grimace (Reflex irritability)", "isCorrect": true },
                { "id": "d", "text": "Temperature", "isCorrect": false },
                { "id": "e", "text": "Activity (Muscle tone)", "isCorrect": true },
                { "id": "f", "text": "Pulse (Heart rate)", "isCorrect": true }
            ],
            "explanation": "APGAR stands for Appearance, Pulse, Grimace, Activity, and Respiration."
        },
        {
            "id": "comp-t2-q3",
            "type": "multiple-choice",
            "question": "The puerperium period covers how many weeks following delivery?",
            "points": 1,
            "topicId": "topic-02-stages-puerperium",
            "topicName": "Stages 2-4 & Puerperium",
            "options": [
                { "id": "a", "text": "2 to 4 weeks", "isCorrect": false },
                { "id": "b", "text": "6 to 8 weeks", "isCorrect": true },
                { "id": "c", "text": "10 to 12 weeks", "isCorrect": false },
                { "id": "d", "text": "6 months", "isCorrect": false }
            ],
            "explanation": "The puerperium period covers six to eight weeks following delivery or abortion."
        },
        {
            "id": "comp-t2-q4",
            "type": "true-false",
            "question": "During the third stage of labour, traction on the cord should be applied while the uterus is relaxed to speed up placental delivery.",
            "points": 1,
            "topicId": "topic-02-stages-puerperium",
            "topicName": "Stages 2-4 & Puerperium",
            "correctAnswer": false,
            "explanation": "False. The uterus must be firmly contracted before controlled cord traction is used to avoid inversion of the uterus."
        },

        /* TOPIC 3: NEONATE PHYSIOLOGY */
        {
            "id": "comp-t3-q1",
            "type": "image-based",
            "question": "Identify the reflex shown in the image below:",
            "points": 2,
            "topicId": "topic-03-neonate-physiology",
            "topicName": "The Neonate: Physiology",
            "imageUrl": "assets/images/image-20260111-13e37553.jpeg",
            "imageAlt": "Infant throwing arms out in embracing movement",
            "options": [
                { "id": "a", "text": "Rooting Reflex", "isCorrect": false },
                { "id": "b", "text": "Moro Reflex", "isCorrect": true },
                { "id": "c", "text": "Grasp Reflex", "isCorrect": false },
                { "id": "d", "text": "Tonic Neck Reflex", "isCorrect": false }
            ],
            "explanation": "The image shows the Moro reflex, where the baby throws out arms extending elbows and fingers with embracing movements."
        },
        {
            "id": "comp-t3-q2",
            "type": "multiple-choice",
            "question": "Which of the following describes the normal heart rate of a newborn?",
            "points": 1,
            "topicId": "topic-03-neonate-physiology",
            "topicName": "The Neonate: Physiology",
            "options": [
                { "id": "a", "text": "60-80 beats/min", "isCorrect": false },
                { "id": "b", "text": "80-100 beats/min", "isCorrect": false },
                { "id": "c", "text": "120-160 beats/min", "isCorrect": true },
                { "id": "d", "text": "160-200 beats/min", "isCorrect": false }
            ],
            "explanation": "The normal heart rate for a newborn is 120-160 beats per minute."
        },
        {
            "id": "comp-t3-q3",
            "type": "fill-blank",
            "question": "The first stool passed by the neonate, usually within the first two to three days, is called __1__.",
            "points": 1,
            "topicId": "topic-03-neonate-physiology",
            "topicName": "The Neonate: Physiology",
            "blanks": [
                { "id": "1", "acceptedAnswers": ["meconium"], "caseSensitive": false }
            ],
            "explanation": "Meconium is the dark greenish first stool passed by the neonate."
        },

        /* TOPIC 4: HIGH RISK NEONATE */
        {
            "id": "comp-t4-q1",
            "type": "multiple-choice",
            "question": "A preterm infant is defined as a baby born before which completed week of gestation?",
            "points": 1,
            "topicId": "topic-04-high-risk",
            "topicName": "High Risk Neonate",
            "options": [
                { "id": "a", "text": "35th week", "isCorrect": false },
                { "id": "b", "text": "37th week", "isCorrect": true },
                { "id": "c", "text": "38th week", "isCorrect": false },
                { "id": "d", "text": "40th week", "isCorrect": false }
            ],
            "explanation": "A preterm infant is a baby born before the 37th completed week of gestation."
        },
        {
            "id": "comp-t4-q2",
            "type": "matching",
            "question": "Match the characteristic to the correct infant type:",
            "points": 3,
            "topicId": "topic-04-high-risk",
            "topicName": "High Risk Neonate",
            "pairs": [
                { "id": "p1", "left": "Skin red and shiny, abundant lanugo", "right": "Preterm Infant" },
                { "id": "p2", "left": "Skin loose, dry, peeling, long nails", "right": "Post Term Infant" },
                { "id": "p3", "left": "Looks like 'worried old man', dry peeling skin", "right": "Small for Gestational Age (SGA)" }
            ]
        },
        {
            "id": "comp-t4-q3",
            "type": "multiple-choice",
            "question": "Physiological jaundice usually appears between which days of life?",
            "points": 1,
            "topicId": "topic-04-high-risk",
            "topicName": "High Risk Neonate",
            "options": [
                { "id": "a", "text": "Within the first 24 hours", "isCorrect": false },
                { "id": "b", "text": "3rd to 6th day", "isCorrect": true },
                { "id": "c", "text": "7th to 10th day", "isCorrect": false },
                { "id": "d", "text": "After 2 weeks", "isCorrect": false }
            ],
            "explanation": "Physiological jaundice occurs between the third to sixth day of life and disappears within the seventh to tenth day."
        },
        {
            "id": "comp-t4-q4",
            "type": "true-false",
            "question": "In Rhesus incompatibility, the mother is Rhesus Positive and the father is Rhesus Negative.",
            "points": 1,
            "topicId": "topic-04-high-risk",
            "topicName": "High Risk Neonate",
            "correctAnswer": false,
            "explanation": "False. Rhesus incompatibility occurs when a Rhesus Negative mother carries a Rhesus Positive foetus (from a Rhesus Positive father)."
        },

        /* TOPIC 5: INFECTIONS */
        {
            "id": "comp-t5-q1",
            "type": "multiple-select",
            "question": "Select the major criteria for WHO clinical case definition of paediatric HIV disease:",
            "points": 3,
            "topicId": "topic-05-infections",
            "topicName": "Neonatal Infections",
            "options": [
                { "id": "a", "text": "Weight loss or failure to thrive", "isCorrect": true },
                { "id": "b", "text": "Diarrhoea for more than one month", "isCorrect": true },
                { "id": "c", "text": "Generalized lymphadenopathy", "isCorrect": false },
                { "id": "d", "text": "Fever for more than one month", "isCorrect": true }
            ],
            "explanation": "The major criteria include weight loss/failure to thrive, diarrhoea for >1 month, and fever for >1 month."
        },
        {
            "id": "comp-t5-q2",
            "type": "multiple-choice",
            "question": "Which of the following is the most common form of intrauterine infection, often occurring after early rupture of membranes?",
            "points": 1,
            "topicId": "topic-05-infections",
            "topicName": "Neonatal Infections",
            "options": [
                { "id": "a", "text": "Transplacental infection", "isCorrect": false },
                { "id": "b", "text": "Ascending infection", "isCorrect": true },
                { "id": "c", "text": "Nosocomial infection", "isCorrect": false },
                { "id": "d", "text": "Intrapartum infection", "isCorrect": false }
            ],
            "explanation": "Ascending infections occur after early rupture of membranes and represent the most common form of intrauterine infection."
        },
        {
            "id": "comp-t5-q3",
            "type": "fill-blank",
            "question": "The causative organism for congenital syphilis which crosses the placental barrier is __1__.",
            "points": 2,
            "topicId": "topic-05-infections",
            "topicName": "Neonatal Infections",
            "blanks": [
                { "id": "1", "acceptedAnswers": ["Treponema pallidum", "T. pallidum"], "caseSensitive": false }
            ],
            "explanation": "The causative organism for syphilis is Treponema pallidum."
        },

        /* TOPIC 6: EMERGENCIES */
        {
            "id": "comp-t6-q1",
            "type": "multiple-choice",
            "question": "In the ABCDO of resuscitation, what does the 'C' stand for?",
            "points": 1,
            "topicId": "topic-06-emergencies",
            "topicName": "Neonatal Emergencies",
            "options": [
                { "id": "a", "text": "Colour", "isCorrect": false },
                { "id": "b", "text": "Cry", "isCorrect": false },
                { "id": "c", "text": "Circulation", "isCorrect": true },
                { "id": "d", "text": "Cord", "isCorrect": false }
            ],
            "explanation": "C stands for Circulation (heart beat/pulse). A=Airway, B=Breathing, D=Drugs, O=Observations."
        },
        {
            "id": "comp-t6-q2",
            "type": "multiple-choice",
            "question": "What is the primary cause of Respiratory Distress Syndrome (RDS) or Hyaline Membrane Disease in preterm infants?",
            "points": 1,
            "topicId": "topic-06-emergencies",
            "topicName": "Neonatal Emergencies",
            "options": [
                { "id": "a", "text": "Infection", "isCorrect": false },
                { "id": "b", "text": "Lack of pulmonary surfactant", "isCorrect": true },
                { "id": "c", "text": "Meconium aspiration", "isCorrect": false },
                { "id": "d", "text": "Congenital heart defect", "isCorrect": false }
            ],
            "explanation": "RDS is a disease of prematurity caused by lack of pulmonary surfactant."
        },
        {
            "id": "comp-t6-q3",
            "type": "image-based",
            "question": "Identify the type of birth injury shown in the diagram:",
            "points": 2,
            "topicId": "topic-06-emergencies",
            "topicName": "Neonatal Emergencies",
            "imageUrl": "assets/images/image-20260111-30b525cf.jpeg",
            "imageAlt": "Diagram of scalp swelling limited to one bone",
            "options": [
                { "id": "a", "text": "Caput Succedaneum", "isCorrect": false },
                { "id": "b", "text": "Cephalhematoma", "isCorrect": true },
                { "id": "c", "text": "Hydrocephalus", "isCorrect": false },
                { "id": "d", "text": "Subdural Haemorrhage", "isCorrect": false }
            ],
            "explanation": "The image depicts a Cephalhematoma, which is a sub-periosteal haematoma limited to one bone (does not cross suture lines)."
        },
        {
            "id": "comp-t6-q4",
            "type": "true-false",
            "question": "Haemorrhagic Disease of the Newborn is commonly due to a temporary deficiency of Vitamin K dependent clotting factors.",
            "points": 1,
            "topicId": "topic-06-emergencies",
            "topicName": "Neonatal Emergencies",
            "correctAnswer": true,
            "explanation": "HDN is due to deficiency of clotting factors II, VII, XI and X, which need Vitamin K for activation."
        }
    ]
});