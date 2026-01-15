
registerQuiz("comprehensive-exam", {
  "schemaVersion": "1.0",
  "quizId": "comprehensive-exam",
  "metadata": {
    "title": "Comprehensive Final Exam: Adult Nursing Unit Three",
    "description": "A comprehensive assessment covering body organisation, support systems, communication, digestion, respiration, circulation, genitourinary systems, and palliative care.",
    "examType": "comprehensive",
    "topicsCovered": [
      "topic-01-organisation",
      "topic-02-support-locomotion",
      "topic-03-communication-coordination",
      "topic-04-digestive-system",
      "topic-05-respiratory-system",
      "topic-06-circulatory-system",
      "topic-07-genitourinary-integuments",
      "topic-08-palliative-care"
    ],
    "difficulty": "advanced",
    "estimatedTime": 90,
    "passingScore": 75,
    "createdAt": "2025-12-25T12:00:00Z",
    "tags": ["final", "exam", "comprehensive", "adult-nursing"]
  },
  "settings": {
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "showFeedback": "end",
    "allowRetry": false,
    "showCorrectAnswers": true,
    "timeLimit": 5400
  },
  "questions": [
    /* ========================================================================
       TOPIC 1: ORGANISATION OF THE HUMAN BODY
       ======================================================================== */
    {
      "id": "comp-q01",
      "type": "multiple-choice",
      "topicId": "topic-01-organisation",
      "topicName": "Body Organisation",
      "question": "Which cell organelle is primarily responsible for the production of energy (ATP)?",
      "points": 1,
      "options": [
        { "id": "a", "text": "Ribosome", "isCorrect": false },
        { "id": "b", "text": "Mitochondria", "isCorrect": true },
        { "id": "c", "text": "Golgi Apparatus", "isCorrect": false },
        { "id": "d", "text": "Endoplasmic Reticulum", "isCorrect": false }
      ],
      "explanation": "Mitochondria are rod-shaped structures often referred to as the 'powerhouses' of the cell because they generate most of the cell's supply of adenosine triphosphate (ATP)."
    },
    {
      "id": "comp-q02",
      "type": "multiple-choice",
      "topicId": "topic-01-organisation",
      "topicName": "Body Organisation",
      "question": "A patient presents with dry skin, sunken eyes, tachycardia, and hypotension. Which fluid imbalance is most likely?",
      "points": 1,
      "options": [
        { "id": "a", "text": "Fluid Volume Excess", "isCorrect": false },
        { "id": "b", "text": "Fluid Volume Deficit", "isCorrect": true },
        { "id": "c", "text": "Hyponatraemia", "isCorrect": false },
        { "id": "d", "text": "Hyperkalaemia", "isCorrect": false }
      ],
      "explanation": "These are classic signs of dehydration or Fluid Volume Deficit. The body lacks sufficient fluid in the extracellular compartment."
    },
    {
      "id": "comp-q03",
      "type": "fill-blank",
      "topicId": "topic-01-organisation",
      "topicName": "Body Organisation",
      "question": "The movement of solvent molecules through a semi-permeable membrane from a region of lower solute concentration to higher solute concentration is called __1__.",
      "points": 1,
      "blanks": [
        { "id": "1", "acceptedAnswers": ["osmosis"], "caseSensitive": false }
      ],
      "explanation": "Osmosis is the specific term for water movement across a membrane to equalize concentration."
    },

    /* ========================================================================
       TOPIC 2: SUPPORT AND LOCOMOTION
       ======================================================================== */
    {
      "id": "comp-q04",
      "type": "image-based",
      "topicId": "topic-02-support-locomotion",
      "topicName": "Support & Locomotion",
      "question": "Identify the type of fracture shown in this diagram:",
      "points": 1,
      "imageUrl": "assets/images/image-20260110-09de8f6d.jpeg",
      "imageAlt": "Bone shattered into multiple fragments",
      "options": [
        { "id": "a", "text": "Greenstick", "isCorrect": false },
        { "id": "b", "text": "Comminuted", "isCorrect": true },
        { "id": "c", "text": "Transverse", "isCorrect": false },
        { "id": "d", "text": "Spiral", "isCorrect": false }
      ],
      "explanation": "A comminuted fracture is one where the bone has splintered into multiple fragments."
    },
    {
      "id": "comp-q05",
      "type": "matching",
      "topicId": "topic-02-support-locomotion",
      "topicName": "Support & Locomotion",
      "question": "Match the joint type to its example:",
      "points": 2,
      "pairs": [
        { "id": "p1", "left": "Sutures of the skull", "right": "Fibrous Joint" },
        { "id": "p2", "left": "Intervertebral discs", "right": "Cartilaginous Joint" },
        { "id": "p3", "left": "Hip joint", "right": "Synovial Joint" }
      ],
      "explanation": "Fibrous joints are immovable, cartilaginous are slightly movable, and synovial joints are freely movable."
    },
    {
      "id": "comp-q06",
      "type": "true-false",
      "topicId": "topic-02-support-locomotion",
      "topicName": "Support & Locomotion",
      "question": "Osteoporosis is characterized by a rate of bone resorption that exceeds the rate of bone formation.",
      "points": 1,
      "correctAnswer": true,
      "explanation": "In osteoporosis, the loss of organic matrix and mineral content leads to brittle, fragile bones."
    },

    /* ========================================================================
       TOPIC 3: COMMUNICATION AND COORDINATION
       ======================================================================== */
    {
      "id": "comp-q07",
      "type": "ordering",
      "topicId": "topic-03-communication-coordination",
      "topicName": "Nervous & Endocrine",
      "question": "Arrange the layers of meninges from OUTERMOST to INNERMOST:",
      "points": 1,
      "items": [
        { "id": "i1", "text": "Dura Mater", "correctPosition": 1 },
        { "id": "i2", "text": "Arachnoid Mater", "correctPosition": 2 },
        { "id": "i3", "text": "Pia Mater", "correctPosition": 3 }
      ],
      "explanation": "The Dura Mater is the tough outer layer, followed by the Arachnoid, and finally the delicate Pia Mater attached to the brain surface."
    },
    {
      "id": "comp-q08",
      "type": "multiple-choice",
      "topicId": "topic-03-communication-coordination",
      "topicName": "Nervous & Endocrine",
      "question": "A patient with a head injury opens eyes to pain, speaks incomprehensible sounds, and withdraws from pain. Calculate the Glasgow Coma Scale (GCS) score.",
      "points": 2,
      "options": [
        { "id": "a", "text": "GCS 7", "isCorrect": false },
        { "id": "b", "text": "GCS 8", "isCorrect": true },
        { "id": "c", "text": "GCS 9", "isCorrect": false },
        { "id": "d", "text": "GCS 10", "isCorrect": false }
      ],
      "explanation": "Eye opening to pain (2) + Incomprehensible sounds (2) + Withdrawal from pain (4) = Total 8."
    },
    {
      "id": "comp-q09",
      "type": "multiple-select",
      "topicId": "topic-03-communication-coordination",
      "topicName": "Nervous & Endocrine",
      "question": "Select the classic signs of Diabetes Mellitus (Hyperglycaemia). Select all that apply:",
      "points": 1,
      "options": [
        { "id": "a", "text": "Polyuria (Excessive urination)", "isCorrect": true },
        { "id": "b", "text": "Bradycardia (Slow heart rate)", "isCorrect": false },
        { "id": "c", "text": "Polydipsia (Excessive thirst)", "isCorrect": true },
        { "id": "d", "text": "Polyphagia (Excessive hunger)", "isCorrect": true }
      ],
      "partialCredit": true,
      "explanation": "The '3 Ps' of diabetes are Polyuria, Polydipsia, and Polyphagia."
    },

    /* ========================================================================
       TOPIC 4: DIGESTIVE SYSTEM
       ======================================================================== */
    {
      "id": "comp-q10",
      "type": "fill-blank",
      "topicId": "topic-04-digestive-system",
      "topicName": "Digestive System",
      "question": "The intrinsic factor, essential for the absorption of Vitamin __1__, is secreted by the __2__.",
      "points": 1,
      "blanks": [
        { "id": "1", "acceptedAnswers": ["B12", "b12"], "caseSensitive": false },
        { "id": "2", "acceptedAnswers": ["stomach", "gastric mucosa"], "caseSensitive": false }
      ],
      "explanation": "Intrinsic factor is secreted by the stomach and is required to absorb Vitamin B12 in the ileum."
    },
    {
      "id": "comp-q11",
      "type": "multiple-choice",
      "topicId": "topic-04-digestive-system",
      "topicName": "Digestive System",
      "question": "Which of the following complications is associated with portal hypertension in liver cirrhosis?",
      "points": 1,
      "options": [
        { "id": "a", "text": "Oesophageal varices", "isCorrect": true },
        { "id": "b", "text": "Cholelithiasis", "isCorrect": false },
        { "id": "c", "text": "Appendicitis", "isCorrect": false },
        { "id": "d", "text": "Diverticulitis", "isCorrect": false }
      ],
      "explanation": "Increased pressure in the portal vein forces blood into collateral vessels, causing varices in the oesophagus and stomach."
    },
    {
      "id": "comp-q12",
      "type": "matching",
      "topicId": "topic-04-digestive-system",
      "topicName": "Digestive System",
      "question": "Match the digestive organ with its function:",
      "points": 2,
      "pairs": [
        { "id": "p1", "left": "Liver", "right": "Bile production & detoxification" },
        { "id": "p2", "left": "Gall Bladder", "right": "Concentration & storage of bile" },
        { "id": "p3", "left": "Small Intestine", "right": "Absorption of nutrients" },
        { "id": "p4", "left": "Large Intestine", "right": "Absorption of water & Vitamin K synthesis" }
      ],
      "explanation": "Each organ has a distinct role in digestion and metabolism."
    },

    /* ========================================================================
       TOPIC 5: RESPIRATORY SYSTEM
       ======================================================================== */
    {
      "id": "comp-q13",
      "type": "image-based",
      "topicId": "topic-05-respiratory-system",
      "topicName": "Respiratory System",
      "question": "In the diagram of lung volumes, what does the arrow labeled 'A' represent?",
      "points": 1,
      "imageUrl": "assets/images/image-20260110-e57ac1ae.jpeg",
      "imageAlt": "Lung volumes chart showing tidal volume, IRV, ERV, and RV",
      "options": [
        { "id": "a", "text": "Tidal Volume", "isCorrect": false },
        { "id": "b", "text": "Vital Capacity", "isCorrect": true },
        { "id": "c", "text": "Residual Volume", "isCorrect": false },
        { "id": "d", "text": "Total Lung Capacity", "isCorrect": false }
      ],
      "hint": "It is the total amount of air that can be forcibly expired after a forcible inspiration.",
      "explanation": "Vital Capacity is the sum of Tidal Volume, Inspiratory Reserve Volume, and Expiratory Reserve Volume."
    },
    {
      "id": "comp-q14",
      "type": "multiple-choice",
      "topicId": "topic-05-respiratory-system",
      "topicName": "Respiratory System",
      "question": "Which nursing intervention is critical for a patient with a chest tube connected to an underwater seal drainage?",
      "points": 1,
      "options": [
        { "id": "a", "text": "Clamp the tube every 2 hours", "isCorrect": false },
        { "id": "b", "text": "Keep the drainage bottle above chest level", "isCorrect": false },
        { "id": "c", "text": "Ensure the drainage bottle remains below chest level", "isCorrect": true },
        { "id": "d", "text": "Milk the tubing vigorously every hour", "isCorrect": false }
      ],
      "explanation": "The drainage system must be kept below chest level to prevent backflow of fluid into the pleural space."
    },
    {
      "id": "comp-q15",
      "type": "true-false",
      "topicId": "topic-05-respiratory-system",
      "topicName": "Respiratory System",
      "question": "Status asthmaticus is a mild form of asthma that resolves spontaneously.",
      "points": 1,
      "correctAnswer": false,
      "explanation": "Status asthmaticus is severe bronchial asthma that is unresponsive to conventional therapy and lasts for more than 24 hours. It is a medical emergency."
    },

    /* ========================================================================
       TOPIC 6: CIRCULATORY SYSTEM
       ======================================================================== */
    {
      "id": "comp-q16",
      "type": "ordering",
      "topicId": "topic-06-circulatory-system",
      "topicName": "Circulatory System",
      "question": "Trace the path of blood through the heart starting from the Vena Cava:",
      "points": 2,
      "items": [
        { "id": "i1", "text": "Right Atrium", "correctPosition": 1 },
        { "id": "i2", "text": "Right Ventricle", "correctPosition": 2 },
        { "id": "i3", "text": "Pulmonary Artery", "correctPosition": 3 },
        { "id": "i4", "text": "Lungs", "correctPosition": 4 },
        { "id": "i5", "text": "Left Atrium", "correctPosition": 5 },
        { "id": "i6", "text": "Left Ventricle", "correctPosition": 6 }
      ],
      "explanation": "Blood enters the Right Atrium → Right Ventricle → Pulmonary Artery → Lungs → Pulmonary Veins → Left Atrium → Left Ventricle → Aorta."
    },
    {
      "id": "comp-q17",
      "type": "multiple-select",
      "topicId": "topic-06-circulatory-system",
      "topicName": "Circulatory System",
      "question": "Which of the following are clinical signs of Left-Sided Heart Failure? Select all that apply:",
      "points": 1,
      "options": [
        { "id": "a", "text": "Pulmonary Oedema", "isCorrect": true },
        { "id": "b", "text": "Ascites", "isCorrect": false },
        { "id": "c", "text": "Dyspnoea", "isCorrect": true },
        { "id": "d", "text": "Distended Jugular Veins", "isCorrect": false },
        { "id": "e", "text": "Cyanosis", "isCorrect": true }
      ],
      "partialCredit": true,
      "explanation": "Left-sided failure causes congestion in the pulmonary circulation (lungs), leading to dyspnoea, pulmonary oedema, and cyanosis. Ascites and distended veins are signs of Right-sided failure."
    },
    {
      "id": "comp-q18",
      "type": "short-answer",
      "topicId": "topic-06-circulatory-system",
      "topicName": "Circulatory System",
      "question": "What is the acronym used for the immediate management of a Myocardial Infarction?",
      "points": 1,
      "keywords": ["mona", "morphine", "oxygen", "nitroglycerin", "aspirin"],
      "minKeywords": 1,
      "modelAnswer": "MONA (Morphine, Oxygen, Nitroglycerin, Aspirin).",
      "explanation": "MONA stands for Morphine (for pain), Oxygen (for hypoxia), Nitroglycerin (vasodilation), and Aspirin (anti-platelet)."
    },

    /* ========================================================================
       TOPIC 7: GENITOURINARY & INTEGUMENTS
       ======================================================================== */
    {
      "id": "comp-q19",
      "type": "multiple-choice",
      "topicId": "topic-07-genitourinary-integuments",
      "topicName": "Genitourinary & Skin",
      "question": "In the oliguric phase of Acute Renal Failure, urine output drops below:",
      "points": 1,
      "options": [
        { "id": "a", "text": "1000 ml/day", "isCorrect": false },
        { "id": "b", "text": "400 ml/day", "isCorrect": true },
        { "id": "c", "text": "100 ml/day", "isCorrect": false },
        { "id": "d", "text": "2000 ml/day", "isCorrect": false }
      ],
      "explanation": "Oliguria is defined as urine output less than 400ml/day. Less than 100ml/day is anuria."
    },
    {
      "id": "comp-q20",
      "type": "fill-blank",
      "topicId": "topic-07-genitourinary-integuments",
      "topicName": "Genitourinary & Skin",
      "question": "The __1__ formula is used to calculate fluid resuscitation requirements for burn patients in the first 24 hours.",
      "points": 1,
      "blanks": [
        { "id": "1", "acceptedAnswers": ["parkland", "parkland's", "parklands"], "caseSensitive": false }
      ],
      "explanation": "The Parkland formula (4ml x kg body weight x %TBSA) is the standard for burn fluid resuscitation."
    },
    {
      "id": "comp-q21",
      "type": "matching",
      "topicId": "topic-07-genitourinary-integuments",
      "topicName": "Genitourinary & Skin",
      "question": "Match the skin condition to its description:",
      "points": 2,
      "pairs": [
        { "id": "p1", "left": "Psoriasis", "right": "Silvery scales on red plaques" },
        { "id": "p2", "left": "Tinea Corporis", "right": "Ringworm (Fungal)" },
        { "id": "p3", "left": "Scabies", "right": "Burrowing mite infestation" },
        { "id": "p4", "left": "Urticaria", "right": "Allergic wheals/hives" }
      ],
      "explanation": "Psoriasis is autoimmune; Tinea is fungal; Scabies is parasitic; Urticaria is allergic."
    },

    /* ========================================================================
       TOPIC 8: PALLIATIVE CARE
       ======================================================================== */
    {
      "id": "comp-q22",
      "type": "multiple-choice",
      "topicId": "topic-08-palliative-care",
      "topicName": "Palliative Care",
      "question": "Which of the following is NOT a core principle of palliative care?",
      "points": 1,
      "options": [
        { "id": "a", "text": "Pain relief", "isCorrect": false },
        { "id": "b", "text": "Affirming life", "isCorrect": false },
        { "id": "c", "text": "Hastening death", "isCorrect": true },
        { "id": "d", "text": "Supporting the family", "isCorrect": false }
      ],
      "explanation": "Palliative care regards dying as a normal process and intends neither to hasten nor postpone death."
    },
    {
      "id": "comp-q23",
      "type": "ordering",
      "topicId": "topic-08-palliative-care",
      "topicName": "Palliative Care",
      "question": "Order the steps of the WHO Analgesic Ladder from mild to severe pain:",
      "points": 1,
      "items": [
        { "id": "i1", "text": "Non-Opioids (e.g., Paracetamol)", "correctPosition": 1 },
        { "id": "i2", "text": "Mild Opioids (e.g., Codeine)", "correctPosition": 2 },
        { "id": "i3", "text": "Strong Opioids (e.g., Morphine)", "correctPosition": 3 }
      ],
      "explanation": "The ladder starts with non-opioids, moves to mild opioids (+/- non-opioids), and finally strong opioids for severe pain."
    },
    {
      "id": "comp-q24",
      "type": "matching",
      "topicId": "topic-08-palliative-care",
      "topicName": "Palliative Care",
      "question": "Match the stage of dying (Kubler-Ross) to the typical statement:",
      "points": 2,
      "pairs": [
        { "id": "p1", "left": "Denial", "right": "\"No, not me.\"" },
        { "id": "p2", "left": "Anger", "right": "\"Why me?\"" },
        { "id": "p3", "left": "Bargaining", "right": "\"Yes me, but...\"" },
        { "id": "p4", "left": "Acceptance", "right": "\"I am ready.\"" }
      ],
      "explanation": "These stages represent common psychological responses to terminal illness."
    }
  ]
});