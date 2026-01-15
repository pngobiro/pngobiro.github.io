registerQuiz("comprehensive-exam", {
  "schemaVersion": "1.0",
  "quizId": "comprehensive-exam",
  "metadata": {
    "title": "Comprehensive Final Exam",
    "description": "A comprehensive assessment covering all 10 topics of the Perioperative Nursing course, from history and admission to anaesthesia and recovery.",
    "examType": "comprehensive",
    "topicsCovered": [
      "topic-01", "topic-02", "topic-03", "topic-04", "topic-05", 
      "topic-06", "topic-07", "topic-08", "topic-09", "topic-10"
    ],
    "difficulty": "advanced",
    "estimatedTime": 60,
    "passingScore": 75,
    "createdAt": "2025-12-29T12:00:00Z",
    "tags": ["final", "comprehensive", "all-topics", "nursing"]
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
    /* --- TOPIC 01: Introduction & History --- */
    {
      "id": "hist-q1",
      "type": "multiple-choice",
      "topicId": "topic-01",
      "topicName": "Introduction & History",
      "question": "Which historical figure is credited with introducing the sterilization of dressings in 1886?",
      "points": 1,
      "options": [
        { "id": "a", "text": "Joseph Lister", "isCorrect": false },
        { "id": "b", "text": "Von Bergemen", "isCorrect": true },
        { "id": "c", "text": "Louis Pasteur", "isCorrect": false },
        { "id": "d", "text": "Joseph Priestly", "isCorrect": false }
      ],
      "explanation": "Von Bergemen introduced the sterilization of dressings in 1886. Joseph Lister used carbonic acid, and Louis Pasteur proved bacteria caused infections."
    },
    {
      "id": "hist-q2",
      "type": "multiple-choice",
      "topicId": "topic-01",
      "topicName": "Introduction & History",
      "question": "What was the primary contribution of Joseph Lister to surgery in 1865?",
      "points": 1,
      "options": [
        { "id": "a", "text": "Discovery of Ether", "isCorrect": false },
        { "id": "b", "text": "Introduction of gloves", "isCorrect": false },
        { "id": "c", "text": "Use of carbonic acid to reduce bacterial growth", "isCorrect": true },
        { "id": "d", "text": "Invention of the autoclave", "isCorrect": false }
      ],
      "explanation": "Joseph Lister introduced the use of carbonic acid to reduce the growth of bacteria in wounds."
    },

    /* --- TOPIC 02: Preoperative Care --- */
    {
      "id": "preop-q1",
      "type": "fill-blank",
      "topicId": "topic-02",
      "topicName": "Preoperative Care",
      "question": "To prevent aspiration during surgery, the patient is usually required to observe 'Nil by Mouth' (NPO) for __b1__ hours prior to the operation.",
      "points": 2,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["six", "6"], "caseSensitive": false }
      ],
      "explanation": "Fasting should usually start six hours before the operation to empty the stomach and prevent aspiration."
    },
    {
      "id": "preop-q2",
      "type": "multiple-select",
      "topicId": "topic-02",
      "topicName": "Preoperative Care",
      "question": "Which of the following are valid purposes of surgery? (Select all that apply)",
      "points": 2,
      "options": [
        { "id": "a", "text": "Diagnostic", "isCorrect": true },
        { "id": "b", "text": "Palliative", "isCorrect": true },
        { "id": "c", "text": "Ablative", "isCorrect": true },
        { "id": "d", "text": "Reconstructive", "isCorrect": true }
      ],
      "explanation": "All listed options are valid classifications of surgery purposes: Diagnostic (testing), Palliative (relief without cure), Ablative (removal of diseased tissue), and Reconstructive (restoration)."
    },

    /* --- TOPIC 03: Competencies & Phases --- */
    {
      "id": "phases-q1",
      "type": "ordering",
      "topicId": "topic-03",
      "topicName": "Competencies & Phases",
      "question": "Arranged the perioperative phases in chronological order:",
      "points": 3,
      "items": [
        { "id": "i1", "text": "Decision to perform surgery is made (Pre-operative)", "correctPosition": 1 },
        { "id": "i2", "text": "Patient is admitted to the Operating Room (Intra-operative)", "correctPosition": 2 },
        { "id": "i3", "text": "Patient is admitted to PACU (Post-operative)", "correctPosition": 3 }
      ],
      "explanation": "The perioperative period flows from Pre-operative (decision made) -> Intra-operative (entry to OR) -> Post-operative (admission to PACU)."
    },

    /* --- TOPIC 04: Infection Control & PPE --- */
    {
      "id": "ppe-q1",
      "type": "ordering",
      "topicId": "topic-04",
      "topicName": "Infection Control & PPE",
      "question": "Place the steps for DONNING (putting on) PPE in the correct sequence:",
      "points": 4,
      "items": [
        { "id": "i1", "text": "Gown", "correctPosition": 1 },
        { "id": "i2", "text": "Mask or Respirator", "correctPosition": 2 },
        { "id": "i3", "text": "Goggles or Face Shield", "correctPosition": 3 },
        { "id": "i4", "text": "Gloves", "correctPosition": 4 }
      ],
      "explanation": "Standard donning sequence: Gown first, then Mask, then Eye protection, and finally Gloves."
    },
    {
      "id": "asepsis-q1",
      "type": "true-false",
      "topicId": "topic-04",
      "topicName": "Infection Control & PPE",
      "question": "Sterile items that are out of vision or below waist level are considered sterile as long as they haven't touched the floor.",
      "points": 1,
      "correctAnswer": false,
      "explanation": "Sterile items out of vision or below waist level are considered UNSTERILE immediately."
    },

    /* --- TOPIC 05: Legal & Ethical --- */
    {
      "id": "legal-q1",
      "type": "short-answer",
      "topicId": "topic-05",
      "topicName": "Legal & Ethical Aspects",
      "question": "Define the bioethical principle of 'Non-maleficence'.",
      "points": 3,
      "keywords": ["do", "no", "harm", "avoid", "injury"],
      "minKeywords": 2,
      "modelAnswer": "Non-maleficence is the principle that directs health care providers to do no harm to the patient.",
      "explanation": "Non-maleficence fundamental means 'do no harm'."
    },
    {
      "id": "legal-q2",
      "type": "multiple-choice",
      "topicId": "topic-05",
      "topicName": "Legal & Ethical Aspects",
      "question": "In Kenya, what is the legal age of adulthood for signing an informed consent form?",
      "points": 1,
      "options": [
        { "id": "a", "text": "16 years", "isCorrect": false },
        { "id": "b", "text": "18 years", "isCorrect": true },
        { "id": "c", "text": "21 years", "isCorrect": false },
        { "id": "d", "text": "12 years", "isCorrect": false }
      ],
      "explanation": "Those below the legal age of adulthood (18 years in Kenya) are not legally bound to sign the consent form."
    },

    /* --- TOPIC 06: Theatre Design --- */
    {
      "id": "design-q1",
      "type": "multiple-choice",
      "topicId": "topic-06",
      "topicName": "Theatre Design",
      "question": "Which area of the surgical suite requires personnel to wear surgical attire (scrubs) and caps, but not necessarily masks?",
      "points": 2,
      "options": [
        { "id": "a", "text": "Unrestricted Area", "isCorrect": false },
        { "id": "b", "text": "Semi-restricted Area", "isCorrect": true },
        { "id": "c", "text": "Restricted Area", "isCorrect": false },
        { "id": "d", "text": "Public Corridor", "isCorrect": false }
      ],
      "explanation": "In semi-restricted areas (e.g., corridors leading to OR, processing areas), surgical attire and caps are required. Masks are required in Restricted areas."
    },
    {
      "id": "env-q1",
      "type": "fill-blank",
      "topicId": "topic-06",
      "topicName": "Theatre Design",
      "question": "Relative humidity in the operating theatre should be maintained between __b1__ percent.",
      "points": 2,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["50-55", "50 - 55", "50 to 55"], "caseSensitive": false }
      ],
      "explanation": "Relative humidity is maintained at between 50-55% to prevent heat/water loss and static electricity."
    },

    /* --- TOPIC 07: Surgical Team --- */
    {
      "id": "team-q1",
      "type": "matching",
      "topicId": "topic-07",
      "topicName": "Surgical Team",
      "question": "Match the nursing role with its primary responsibility:",
      "points": 4,
      "pairs": [
        { "id": "p1", "left": "Scrub Nurse", "right": "Maintains the sterile field and passes instruments" },
        { "id": "p2", "left": "Circulating Nurse", "right": "Coordinates activities outside the sterile field" },
        { "id": "p3", "left": "Anaesthetic Nurse", "right": "Assists with induction and reversal" },
        { "id": "p4", "left": "Nurse Manager", "right": "Ensures staffing and general cleanliness" }
      ],
      "explanation": "The Scrub nurse is sterile; the Circulating nurse is unsterile and coordinates; the Anaesthetic nurse assists the anaesthetist."
    },

    /* --- TOPIC 08: Instrumentation & Counts --- */
    {
      "id": "instr-q1",
      "type": "multiple-choice",
      "topicId": "topic-08",
      "topicName": "Instrumentation & Counts",
      "question": "Which of the following is an absorbable suture material?",
      "points": 1,
      "options": [
        { "id": "a", "text": "Silk", "isCorrect": false },
        { "id": "b", "text": "Nylon", "isCorrect": false },
        { "id": "c", "text": "Chromic Catgut", "isCorrect": true },
        { "id": "d", "text": "Polypropylene", "isCorrect": false }
      ],
      "explanation": "Chromic Catgut is a natural absorbable suture. Silk, Nylon, and Polypropylene are non-absorbable."
    },
    {
      "id": "count-q1",
      "type": "true-false",
      "topicId": "topic-08",
      "topicName": "Instrumentation & Counts",
      "question": "If a swab bundle is found to contain 4 swabs instead of the standard 5 during the initial count, the nurse should just add one loose swab to make it 5.",
      "points": 2,
      "correctAnswer": false,
      "explanation": "Incorrect. The entire incorrect bundle must be removed from the theatre immediately to prevent confusion."
    },

    /* --- TOPIC 09: Patient Management --- */
    {
      "id": "pos-q1",
      "type": "image-based",
      "topicId": "topic-09",
      "topicName": "Patient Management",
      "question": "Identify the surgical position shown in the image below:",
      "points": 3,
      "imageUrl": "assets/images/image-20251229-d79655d6.jpeg",
      "imageAlt": "Patient lying on back with legs raised in stirrups",
      "options": [
        { "id": "a", "text": "Trendelenburg", "isCorrect": false },
        { "id": "b", "text": "Lithotomy", "isCorrect": true },
        { "id": "c", "text": "Prone", "isCorrect": false },
        { "id": "d", "text": "Supine", "isCorrect": false }
      ],
      "explanation": "The image shows the Lithotomy position, with legs raised and supported in stirrups, commonly used for perineal operations."
    },
    {
      "id": "pos-q2",
      "type": "multiple-choice",
      "topicId": "topic-09",
      "topicName": "Patient Management",
      "question": "Which position is commonly used for pelvic operations where the head is tilted down 30-45 degrees?",
      "points": 1,
      "options": [
        { "id": "a", "text": "Reverse Trendelenburg", "isCorrect": false },
        { "id": "b", "text": "Trendelenburg", "isCorrect": true },
        { "id": "c", "text": "Kidney Position", "isCorrect": false },
        { "id": "d", "text": "Prone", "isCorrect": false }
      ],
      "explanation": "Trendelenburg position involves a head-down tilt to shift abdominal organs away from the pelvic area."
    },

    /* --- TOPIC 10: Anaesthesia & Recovery --- */
    {
      "id": "ana-q1",
      "type": "matching",
      "topicId": "topic-10",
      "topicName": "Anaesthesia & Recovery",
      "question": "Match the anaesthetic drug with its primary function/characteristic:",
      "points": 4,
      "pairs": [
        { "id": "p1", "left": "Suxamethonium (Scoline)", "right": "Short-acting muscle relaxant" },
        { "id": "p2", "left": "Atropine", "right": "Reduces secretions & prevents bradycardia" },
        { "id": "p3", "left": "Propofol", "right": "Induction agent (Milk of anaesthesia)" },
        { "id": "p4", "left": "Neostigmine", "right": "Reversal agent for non-depolarising relaxants" }
      ],
      "explanation": "Suxamethonium is a depolarizing relaxant; Atropine is an anticholinergic; Propofol is an IV induction agent; Neostigmine reverses muscle relaxants."
    },
    {
      "id": "ana-q2",
      "type": "ordering",
      "topicId": "topic-10",
      "topicName": "Anaesthesia & Recovery",
      "question": "Order the phases of General Anaesthesia:",
      "points": 4,
      "items": [
        { "id": "i1", "text": "Induction", "correctPosition": 1 },
        { "id": "i2", "text": "Maintenance", "correctPosition": 2 },
        { "id": "i3", "text": "Reversal / Emergence", "correctPosition": 3 },
        { "id": "i4", "text": "Recovery", "correctPosition": 4 }
      ],
      "explanation": "The sequence is Induction (going to sleep) -> Maintenance (surgery) -> Reversal (waking up) -> Recovery (PACU)."
    },
    {
      "id": "ana-q3",
      "type": "multiple-select",
      "topicId": "topic-10",
      "topicName": "Anaesthesia & Recovery",
      "question": "Select all the common anaesthetic emergencies listed in the curriculum:",
      "points": 3,
      "options": [
        { "id": "a", "text": "Cardiac Arrest", "isCorrect": true },
        { "id": "b", "text": "Anaphylactic Shock", "isCorrect": true },
        { "id": "c", "text": "Hyperglycemia", "isCorrect": false },
        { "id": "d", "text": "Malignant Hyperthermia", "isCorrect": false },
        { "id": "e", "text": "Respiratory Failure", "isCorrect": true }
      ],
      "explanation": "Cardiac Arrest, Anaphylactic Shock, and Respiratory Failure are explicitly listed as common anaesthetic emergencies in the text."
    }
  ]
});