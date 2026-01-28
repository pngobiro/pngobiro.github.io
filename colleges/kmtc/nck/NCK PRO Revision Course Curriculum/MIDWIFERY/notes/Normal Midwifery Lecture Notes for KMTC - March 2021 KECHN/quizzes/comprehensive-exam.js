
registerQuiz("comprehensive-exam", {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "Normal Midwifery Comprehensive Exam",
        "description": "Final assessment covering all modules: Normal Pregnancy, Labour, Puerperium, and Neonate.",
        "topicId": "comprehensive",
        "difficulty": "advanced",
        "estimatedTime": 45,
        "passingScore": 80,
        "createdAt": "2025-01-28T12:00:00Z",
        "updatedAt": "2025-01-28T12:00:00Z",
        "tags": ["midwifery", "pregnancy", "labour", "puerperium", "neonate", "final-exam"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "end",
        "allowRetry": true,
        "showCorrectAnswers": true,
        "timeLimit": 2700
    },
    "questions": [
        {
            "id": "q1",
            "type": "matching",
            "question": "Match the obstetric terminology with its correct definition:",
            "points": 2,
            "pairs": [
                {
                    "id": "p1",
                    "left": "Gravidity",
                    "right": "Total number of pregnancies regardless of outcome"
                },
                {
                    "id": "p2",
                    "left": "Parity",
                    "right": "Number of births after age of viability (28 weeks)"
                },
                {
                    "id": "p3",
                    "left": "Nulligravida",
                    "right": "A woman who has never been pregnant"
                },
                {
                    "id": "p4",
                    "left": "Multigravida",
                    "right": "A woman pregnant more than one time"
                }
            ],
            "explanation": "Gravidity refers to the number of times a woman has been pregnant. Parity refers to births after viability. Nulligravida is never pregnant, and Multigravida is multiple pregnancies."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "Which of the following is considered a POSITIVE sign of pregnancy?",
            "points": 1,
            "options": [
                {
                    "id": "opt1",
                    "text": "Morning sickness and amenorrhea",
                    "isCorrect": false
                },
                {
                    "id": "opt2",
                    "text": "Presence of fetal heart sounds",
                    "isCorrect": true
                },
                {
                    "id": "opt3",
                    "text": "Positive immunological pregnancy test",
                    "isCorrect": false
                },
                {
                    "id": "opt4",
                    "text": "Abdominal enlargement",
                    "isCorrect": false
                }
            ],
            "explanation": "Positive signs confirm pregnancy indisputably: fetal heart sounds, palpable/visible fetal movements, and visualization via ultrasound. Morning sickness is presumptive; a test is probable."
        },
        {
            "id": "q3",
            "type": "true-false",
            "question": "During pregnancy, cardiac output decreases by approximately 40% due to the demand of the fetus.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "Cardiac output INCREASES by approximately 40% during pregnancy, reaching maximum at 20-24 weeks to meet metabolic needs."
        },
        {
            "id": "q4",
            "type": "multiple-select",
            "question": "Select all appropriate management strategies for nausea and vomiting (morning sickness) in pregnancy:",
            "points": 2,
            "options": [
                {
                    "id": "opt1",
                    "text": "Eat small, frequent dry meals",
                    "isCorrect": true
                },
                {
                    "id": "opt2",
                    "text": "Drink fluids with meals to wash down food",
                    "isCorrect": false
                },
                {
                    "id": "opt3",
                    "text": "Eat a snack before bedtime or before getting up",
                    "isCorrect": true
                },
                {
                    "id": "opt4",
                    "text": "Avoid fatty and fried foods",
                    "isCorrect": true
                }
            ],
            "explanation": "Management includes small frequent meals, avoiding fluids *with* meals (drink between meals), having a snack before rising, and avoiding fatty foods."
        },
        {
            "id": "q5",
            "type": "ordering",
            "question": "Arrange the standard Focused Antenatal Care (FANC) visit schedule in the correct chronological order:",
            "points": 2,
            "items": [
                {
                    "id": "step1",
                    "text": "First visit: Less than 16 weeks",
                    "correctPosition": 1
                },
                {
                    "id": "step2",
                    "text": "Second visit: 16 - 28 weeks",
                    "correctPosition": 2
                },
                {
                    "id": "step3",
                    "text": "Third visit: 28 - 32 weeks",
                    "correctPosition": 3
                },
                {
                    "id": "step4",
                    "text": "Fourth visit: 32 - 40 weeks",
                    "correctPosition": 4
                }
            ],
            "explanation": "The standard FANC schedule is: <16 weeks, 16-28 weeks, 28-32 weeks, and 32-40 weeks."
        },
        {
            "id": "q6",
            "type": "multiple-select",
            "question": "Which of the following are DANGER SIGNS during pregnancy that require immediate attention?",
            "points": 2,
            "options": [
                {
                    "id": "opt1",
                    "text": "Vaginal bleeding",
                    "isCorrect": true
                },
                {
                    "id": "opt2",
                    "text": "Severe headache and blurred vision",
                    "isCorrect": true
                },
                {
                    "id": "opt3",
                    "text": "Frequent urination",
                    "isCorrect": false
                },
                {
                    "id": "opt4",
                    "text": "Reduced or absent fetal movements",
                    "isCorrect": true
                },
                {
                    "id": "opt5",
                    "text": "Mild backache",
                    "isCorrect": false
                }
            ],
            "explanation": "Danger signs include vaginal bleeding, severe headache/blurred vision (preeclampsia), and reduced fetal movement. Frequency and mild backache are common minor disorders."
        },
        {
            "id": "q7",
            "type": "multiple-choice",
            "question": "Which of the following is NOT one of the four pillars of eMTCT (Elimination of Mother to Child Transmission)?",
            "points": 1,
            "options": [
                {
                    "id": "opt1",
                    "text": "Prevention of HIV infection in women",
                    "isCorrect": false
                },
                {
                    "id": "opt2",
                    "text": "Prevention of unintended pregnancy in HIV+ women",
                    "isCorrect": false
                },
                {
                    "id": "opt3",
                    "text": "Mandatory isolation of HIV+ pregnant women",
                    "isCorrect": true
                },
                {
                    "id": "opt4",
                    "text": "Care and support to those living with HIV/AIDS",
                    "isCorrect": false
                }
            ],
            "explanation": "The pillars are: Primary prevention, Prevention of unintended pregnancy, eMTCT interventions (testing/ARVs), and Care/Support. Mandatory isolation is NOT a pillar and is unethical."
        },
        {
            "id": "q8",
            "type": "fill-blank",
            "question": "The final confirmation of HIV status for an HIV-exposed infant is determined by a PCR test at __b1__ months of age.",
            "points": 1,
            "blanks": [
                {
                    "id": "b1",
                    "acceptedAnswers": ["18", "eighteen"],
                    "caseSensitive": false
                }
            ],
            "explanation": "Infant PCR testing is done at 6 weeks, 6 months, 1 year, and finally at 18 months. The 18-month test is considered final."
        },
        {
            "id": "q9",
            "type": "matching",
            "question": "Match the stage of labour with its definition:",
            "points": 2,
            "pairs": [
                {
                    "id": "p1",
                    "left": "First Stage",
                    "right": "Onset of true labour to full cervical dilatation"
                },
                {
                    "id": "p2",
                    "left": "Second Stage",
                    "right": "Full dilatation to birth of the baby"
                },
                {
                    "id": "p3",
                    "left": "Third Stage",
                    "right": "Birth of the baby to delivery of placenta"
                },
                {
                    "id": "p4",
                    "left": "Fourth Stage",
                    "right": "Observation period (1 hour) after delivery"
                }
            ],
            "explanation": "First: Dilatation. Second: Expulsion of fetus. Third: Placenta. Fourth: Observation/Stabilization."
        },
        {
            "id": "q10",
            "type": "ordering",
            "question": "Order the mechanisms of labour for a vertex presentation:",
            "points": 3,
            "items": [
                {
                    "id": "step1",
                    "text": "Engagement and Descent",
                    "correctPosition": 1
                },
                {
                    "id": "step2",
                    "text": "Flexion",
                    "correctPosition": 2
                },
                {
                    "id": "step3",
                    "text": "Internal rotation of the head",
                    "correctPosition": 3
                },
                {
                    "id": "step4",
                    "text": "Extension of the head (birth of head)",
                    "correctPosition": 4
                },
                {
                    "id": "step5",
                    "text": "Restitution",
                    "correctPosition": 5
                },
                {
                    "id": "step6",
                    "text": "Internal rotation of shoulders",
                    "correctPosition": 6
                }
            ],
            "explanation": "Sequence: Engagement/Descent -> Flexion -> Internal Rotation -> Extension -> Restitution -> Internal Rotation of Shoulders -> Lateral Flexion -> Expulsion."
        },
        {
            "id": "q11",
            "type": "multiple-choice",
            "question": "On a Partograph, the Alert Line usually begins at what cervical dilatation?",
            "points": 1,
            "options": [
                {
                    "id": "opt1",
                    "text": "2 cm",
                    "isCorrect": false
                },
                {
                    "id": "opt2",
                    "text": "4 cm",
                    "isCorrect": true
                },
                {
                    "id": "opt3",
                    "text": "8 cm",
                    "isCorrect": false
                },
                {
                    "id": "opt4",
                    "text": "10 cm",
                    "isCorrect": false
                }
            ],
            "explanation": "The Partograph plotting typically begins in the active phase, which starts at 4 cm dilatation. The Alert Line starts here."
        },
        {
            "id": "q12",
            "type": "multiple-select",
            "question": "Identify the signs indicating the onset of the Second Stage of Labour:",
            "points": 2,
            "options": [
                {
                    "id": "opt1",
                    "text": "Full cervical dilatation (no cervix felt)",
                    "isCorrect": true
                },
                {
                    "id": "opt2",
                    "text": "Urge to push / bear down",
                    "isCorrect": true
                },
                {
                    "id": "opt3",
                    "text": "Gaping of the anus",
                    "isCorrect": true
                },
                {
                    "id": "opt4",
                    "text": "Contractions stop completely",
                    "isCorrect": false
                }
            ],
            "explanation": "Signs include full dilatation, urge to push, anal gaping, bulging perineum, and strong expulsive contractions."
        },
        {
            "id": "q13",
            "type": "multiple-choice",
            "question": "Which of the following is a component of Active Management of Third Stage of Labour (AMTSL)?",
            "points": 1,
            "options": [
                {
                    "id": "opt1",
                    "text": "Waiting for signs of placental separation before acting",
                    "isCorrect": false
                },
                {
                    "id": "opt2",
                    "text": "Administration of Uterotonics (Oxytocin) within 1 minute of birth",
                    "isCorrect": true
                },
                {
                    "id": "opt3",
                    "text": "Milking the cord towards the baby",
                    "isCorrect": false
                },
                {
                    "id": "opt4",
                    "text": "Applying fundal pressure",
                    "isCorrect": false
                }
            ],
            "explanation": "AMTSL involves: 1. Uterotonic administration (Oxytocin), 2. Controlled Cord Traction, 3. Uterine Massage. Waiting is expectant management."
        },
        {
            "id": "q14",
            "type": "fill-blank",
            "question": "The APGAR score assesses five signs: Appearance, Pulse, __b1__, Activity, and Respiration.",
            "points": 1,
            "blanks": [
                {
                    "id": "b1",
                    "acceptedAnswers": ["grimace", "Grimace"],
                    "caseSensitive": false
                }
            ],
            "explanation": "APGAR stands for Appearance, Pulse, Grimace (Reflex irritability), Activity (Muscle tone), and Respiration."
        },
        {
            "id": "q15",
            "type": "multiple-choice",
            "question": "By the end of the first week postpartum, the uterus should weigh approximately:",
            "points": 1,
            "options": [
                {
                    "id": "opt1",
                    "text": "900g",
                    "isCorrect": false
                },
                {
                    "id": "opt2",
                    "text": "450g",
                    "isCorrect": true
                },
                {
                    "id": "opt3",
                    "text": "200g",
                    "isCorrect": false
                },
                {
                    "id": "opt4",
                    "text": "60g",
                    "isCorrect": false
                }
            ],
            "explanation": "The uterus weighs ~900g after labour. It loses ~50% weight in the first week, reducing to ~450g."
        },
        {
            "id": "q16",
            "type": "matching",
            "question": "Match the type of Lochia with its description and timing:",
            "points": 2,
            "pairs": [
                {
                    "id": "p1",
                    "left": "Lochia Rubra",
                    "right": "Red, 1st to 3-4th day"
                },
                {
                    "id": "p2",
                    "left": "Lochia Serosa",
                    "right": "Pink/Brown, 5th to 9th day"
                },
                {
                    "id": "p3",
                    "left": "Lochia Alba",
                    "right": "Yellow/White, 10th day onwards"
                }
            ],
            "explanation": "Rubra is red (blood), Serosa is pink/brown (serum), Alba is white/yellow (leucocytes/mucus)."
        },
        {
            "id": "q17",
            "type": "multiple-choice",
            "question": "When is the FIRST Targeted Post-Natal Care (TPNC) visit/assessment scheduled?",
            "points": 1,
            "options": [
                {
                    "id": "opt1",
                    "text": "Within 48 hours of birth",
                    "isCorrect": true
                },
                {
                    "id": "opt2",
                    "text": "At 2 weeks",
                    "isCorrect": false
                },
                {
                    "id": "opt3",
                    "text": "At 6 weeks",
                    "isCorrect": false
                },
                {
                    "id": "opt4",
                    "text": "At 6 months",
                    "isCorrect": false
                }
            ],
            "explanation": "The first TPNC schedule is within 48 hours to detect immediate complications for mother and baby."
        },
        {
            "id": "q18",
            "type": "multiple-choice",
            "question": "The normal heart rate for a newborn varies between:",
            "points": 1,
            "options": [
                {
                    "id": "opt1",
                    "text": "60-80 bpm",
                    "isCorrect": false
                },
                {
                    "id": "opt2",
                    "text": "80-100 bpm",
                    "isCorrect": false
                },
                {
                    "id": "opt3",
                    "text": "120-160 bpm",
                    "isCorrect": true
                },
                {
                    "id": "opt4",
                    "text": "160-200 bpm",
                    "isCorrect": false
                }
            ],
            "explanation": "Normal newborn heart rate is 120-160 beats per minute."
        },
        {
            "id": "q19",
            "type": "matching",
            "question": "Match the newborn reflex with its description:",
            "points": 2,
            "pairs": [
                {
                    "id": "p1",
                    "left": "Moro Reflex",
                    "right": "Embracing movement (throwing arms out) when head drops back"
                },
                {
                    "id": "p2",
                    "left": "Rooting Reflex",
                    "right": "Turning head towards touch on cheek/mouth"
                },
                {
                    "id": "p3",
                    "left": "Grasping Reflex",
                    "right": "Fingers close around an object placed in hand"
                },
                {
                    "id": "p4",
                    "left": "Stepping Reflex",
                    "right": "Making walking movements when held upright"
                }
            ],
            "explanation": "Moro is the startle/embrace reflex. Rooting seeks the nipple. Grasping is palmar/plantar hold. Stepping simulates walking."
        },
        {
            "id": "q20",
            "type": "matching",
            "question": "Match the method of heat loss in a newborn with its mechanism:",
            "points": 2,
            "pairs": [
                {
                    "id": "p1",
                    "left": "Evaporation",
                    "right": "Wet surface exposed to air (drying amniotic fluid)"
                },
                {
                    "id": "p2",
                    "left": "Conduction",
                    "right": "Direct contact with cool objects"
                },
                {
                    "id": "p3",
                    "left": "Convection",
                    "right": "Surrounding cool air currents/drafts"
                },
                {
                    "id": "p4",
                    "left": "Radiation",
                    "right": "Transfer to cooler objects not in direct contact"
                }
            ],
            "explanation": "Evaporation (wet skin), Conduction (cold surface), Convection (drafts), Radiation (cold walls/windows)."
        }
    ]
});