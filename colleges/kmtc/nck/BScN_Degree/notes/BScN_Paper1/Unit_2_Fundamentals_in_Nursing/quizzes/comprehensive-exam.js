
registerQuiz("comprehensive-exam", {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "Comprehensive Final Exam: Unit 2",
        "description": "A comprehensive assessment covering Infection Prevention, Basic Nursing Procedures, Clinical Diagnosis, and Safe Drug Use.",
        "examType": "comprehensive",
        "topicsCovered": ["topic-01", "topic-02", "topic-03", "topic-04"],
        "difficulty": "advanced",
        "estimatedTime": 60,
        "passingScore": 80,
        "createdAt": "2026-01-10T10:00:00Z",
        "tags": ["final", "nursing-fundamentals", "exam"]
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
        // TOPIC 1: INFECTION PREVENTION
        {
            "id": "comp-t1-q1",
            "type": "multiple-choice",
            "topicId": "topic-01",
            "topicName": "Infection Prevention",
            "question": "Which of the following is the single most effective method of preventing the transfer of micro-organisms in a health facility?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Wearing sterile gloves", "isCorrect": false },
                { "id": "b", "text": "Hand washing", "isCorrect": true },
                { "id": "c", "text": "Fumigation", "isCorrect": false },
                { "id": "d", "text": "Using prophylactic antibiotics", "isCorrect": false }
            ],
            "explanation": "Washing hands before and after contact with each patient is the single most effective method of preventing infection transmission."
        },
        {
            "id": "comp-t1-q2",
            "type": "fill-blank",
            "topicId": "topic-01",
            "topicName": "Infection Prevention",
            "question": "To decontaminate instruments effectively, they should be soaked in a __b1__% chlorine solution for __b2__ minutes immediately after use.",
            "points": 2,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["0.5", "0.5%"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["10", "ten"], "caseSensitive": false }
            ],
            "explanation": "Decontamination requires soaking in 0.5% chlorine solution for 10 minutes to kill viruses like HIV and Hepatitis B."
        },
        {
            "id": "comp-t1-q3",
            "type": "matching",
            "topicId": "topic-01",
            "topicName": "Infection Prevention",
            "question": "Match the waste type with the recommended disposal method:",
            "points": 4,
            "pairs": [
                { "id": "p1", "left": "Sharps (Needles/Scalpels)", "right": "Puncture-resistant container" },
                { "id": "p2", "left": "General Waste (Paper)", "right": "Black/Standard container" },
                { "id": "p3", "left": "Medical Waste (Blood/Tissue)", "right": "Red/Color-coded container" },
                { "id": "p4", "left": "Liquid Waste", "right": "Sluice/Drain (carefully poured)" }
            ],
            "explanation": "Sharps must go in puncture-resistant containers to prevent injury. Medical waste goes in color-coded bins (usually red). General waste goes in standard bins."
        },
        {
            "id": "comp-t1-q4",
            "type": "multiple-select",
            "topicId": "topic-01",
            "topicName": "Infection Prevention",
            "question": "Select all statements that are TRUE regarding the use of gloves: (Select all that apply)",
            "points": 2,
            "options": [
                { "id": "a", "text": "Disposable gloves can be washed and reused if not torn.", "isCorrect": false },
                { "id": "b", "text": "Hands must be washed after removing gloves.", "isCorrect": true },
                { "id": "c", "text": "Utility gloves should be used for housekeeping and cleaning instruments.", "isCorrect": true },
                { "id": "d", "text": "Sterile surgical gloves are required for making a bed.", "isCorrect": false }
            ],
            "explanation": "Disposable gloves should never be reused. Hands must always be washed after removal. Utility gloves are for heavy-duty tasks."
        },
        {
            "id": "comp-t1-q5",
            "type": "true-false",
            "topicId": "topic-01",
            "topicName": "Infection Prevention",
            "question": "High Level Disinfection (HLD) by boiling guarantees the destruction of all bacterial endospores.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "HLD kills all micro-organisms but does NOT reliably kill all bacterial endospores (like tetanus). Only sterilization does that."
        },

        // TOPIC 2: BASIC PROCEDURES
        {
            "id": "comp-t2-q1",
            "type": "ordering",
            "topicId": "topic-02",
            "topicName": "Basic Procedures",
            "question": "Arrange the stages of dying according to Dr. Elisabeth Kubler Ross in the correct chronological order:",
            "points": 3,
            "items": [
                { "id": "i1", "text": "Denial", "correctPosition": 1 },
                { "id": "i2", "text": "Anger", "correctPosition": 2 },
                { "id": "i3", "text": "Bargaining", "correctPosition": 3 },
                { "id": "i4", "text": "Depression", "correctPosition": 4 },
                { "id": "i5", "text": "Acceptance", "correctPosition": 5 }
            ],
            "explanation": "The stages are Denial, Anger, Bargaining, Depression, and Acceptance (DABDA)."
        },
        {
            "id": "comp-t2-q2",
            "type": "fill-blank",
            "topicId": "topic-02",
            "topicName": "Basic Procedures",
            "question": "To calculate the drops per minute for an IV infusion, the formula is: (Volume in ml  x  __b1__) / Time in minutes.",
            "points": 2,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["drop factor", "drip factor"], "caseSensitive": false }
            ],
            "explanation": "Formula: (Total Volume x Drop Factor) / Time in Minutes = Drops per Minute."
        },
        {
            "id": "comp-t2-q3",
            "type": "multiple-choice",
            "topicId": "topic-02",
            "topicName": "Basic Procedures",
            "question": "Which position is most appropriate when examining a female patient's genitalia?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Sims position", "isCorrect": false },
                { "id": "b", "text": "Lithotomy position", "isCorrect": true },
                { "id": "c", "text": "Prone position", "isCorrect": false },
                { "id": "d", "text": "Fowler's position", "isCorrect": false }
            ],
            "explanation": "The lithotomy position (heels together, knees apart/flexed) provides the best access for female genital and pelvic examinations."
        },
        {
            "id": "comp-t2-q4",
            "type": "matching",
            "topicId": "topic-02",
            "topicName": "Basic Procedures",
            "question": "Match the injection type with the correct angle of insertion:",
            "points": 3,
            "pairs": [
                { "id": "p1", "left": "Intramuscular (IM)", "right": "90 degrees" },
                { "id": "p2", "left": "Subcutaneous (SC)", "right": "45 degrees" },
                { "id": "p3", "left": "Intradermal (ID)", "right": "10-15 degrees" }
            ],
            "explanation": "IM is 90°, SC is 45° (into fatty tissue), and ID is 10-15° (just under the skin)."
        },
        {
            "id": "comp-t2-q5",
            "type": "multiple-choice",
            "topicId": "topic-02",
            "topicName": "Basic Procedures",
            "question": "When collecting a mid-stream urine specimen for culture and sensitivity, what is the crucial first step for the patient?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Drink 1 liter of water", "isCorrect": false },
                { "id": "b", "text": "Clean the genital area", "isCorrect": true },
                { "id": "c", "text": "Void the entire bladder content into the bottle", "isCorrect": false },
                { "id": "d", "text": "Collect the first morning urine only", "isCorrect": false }
            ],
            "explanation": "Cleaning the genital area is essential to prevent contamination of the specimen with external flora."
        },

        // TOPIC 3: CLINICAL DIAGNOSIS
        {
            "id": "comp-t3-q1",
            "type": "ordering",
            "topicId": "topic-03",
            "topicName": "Clinical Diagnosis",
            "question": "Place the steps of an Abdominal Examination in the correct order to avoid altering bowel sounds:",
            "points": 3,
            "items": [
                { "id": "i1", "text": "Inspection", "correctPosition": 1 },
                { "id": "i2", "text": "Auscultation", "correctPosition": 2 },
                { "id": "i3", "text": "Palpation", "correctPosition": 3 },
                { "id": "i4", "text": "Percussion", "correctPosition": 4 }
            ],
            "explanation": "For the abdomen, Auscultation comes second (after inspection) because palpation and percussion can alter bowel motility/sounds."
        },
        {
            "id": "comp-t3-q2",
            "type": "matching",
            "topicId": "topic-03",
            "topicName": "Clinical Diagnosis",
            "question": "Match the percussion sound with the underlying structure:",
            "points": 4,
            "pairs": [
                { "id": "p1", "left": "Resonance", "right": "Normal lung tissue" },
                { "id": "p2", "left": "Dullness", "right": "Solid organ (Liver)" },
                { "id": "p3", "left": "Tympany", "right": "Air-filled stomach" },
                { "id": "p4", "left": "Hyper-resonance", "right": "Emphysematous lung" }
            ],
            "explanation": "Resonance = air filled lung; Dullness = solid organ/fluid; Tympany = hollow drum (stomach); Hyper-resonance = over-inflated lung."
        },
        {
            "id": "comp-t3-q3",
            "type": "multiple-choice",
            "topicId": "topic-03",
            "topicName": "Clinical Diagnosis",
            "question": "Which of the following describes 'Tactile Fremitus'?",
            "points": 1,
            "options": [
                { "id": "a", "text": "A clicking sound in the joints", "isCorrect": false },
                { "id": "b", "text": "Vibration felt on the chest wall when the patient speaks", "isCorrect": true },
                { "id": "c", "text": "A visual distortion of the chest", "isCorrect": false },
                { "id": "d", "text": "Fluid shifting in the abdomen", "isCorrect": false }
            ],
            "explanation": "Tactile fremitus is the vibration perceived by touch on the chest wall when voice sounds are transmitted through the bronchi."
        },
        {
            "id": "comp-t3-q4",
            "type": "fill-blank",
            "topicId": "topic-03",
            "topicName": "Clinical Diagnosis",
            "question": "The __b1__ complaint is the specific issue or symptom that brings the patient to seek medical help.",
            "points": 1,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["chief", "main", "presenting"], "caseSensitive": false }
            ],
            "explanation": "The Chief Complaint (CC) is the primary reason for the visit."
        },
        {
            "id": "comp-t3-q5",
            "type": "true-false",
            "topicId": "topic-03",
            "topicName": "Clinical Diagnosis",
            "question": "During a health history interview, you should strictly avoid open-ended questions to save time.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "Open-ended questions (e.g., 'Tell me about it') are encouraged to facilitate spontaneous information flow and better understanding."
        },

        // TOPIC 4: SAFE DRUG USE
        {
            "id": "comp-t4-q1",
            "type": "multiple-select",
            "topicId": "topic-04",
            "topicName": "Safe Drug Use",
            "question": "Which of the following are included in the 'Five Rights' of drug administration? (Select all that apply)",
            "points": 2,
            "options": [
                { "id": "a", "text": "Right Patient", "isCorrect": true },
                { "id": "b", "text": "Right Drug", "isCorrect": true },
                { "id": "c", "text": "Right Doctor", "isCorrect": false },
                { "id": "d", "text": "Right Dose", "isCorrect": true },
                { "id": "e", "text": "Right Price", "isCorrect": false }
            ],
            "explanation": "The Five Rights are: Right Patient, Right Drug, Right Dose, Right Route, and Right Time."
        },
        {
            "id": "comp-t4-q2",
            "type": "multiple-choice",
            "topicId": "topic-04",
            "topicName": "Safe Drug Use",
            "question": "According to the Narcotic Drugs Act, how must controlled drugs be stored in a hospital ward?",
            "points": 1,
            "options": [
                { "id": "a", "text": "On the top shelf of the medicine trolley", "isCorrect": false },
                { "id": "b", "text": "In a locked container within a locked cupboard (Double Lock)", "isCorrect": true },
                { "id": "c", "text": "In the fridge", "isCorrect": false },
                { "id": "d", "text": "In the nurse's pocket", "isCorrect": false }
            ],
            "explanation": "Controlled drugs (DDA) must be stored in a double-locked system (locked container within a locked cupboard)."
        },
        {
            "id": "comp-t4-q3",
            "type": "matching",
            "topicId": "topic-04",
            "topicName": "Safe Drug Use",
            "question": "Match the pharmacokinetic process with its primary site/definition:",
            "points": 4,
            "pairs": [
                { "id": "p1", "left": "Metabolism", "right": "Liver (enzymatic breakdown)" },
                { "id": "p2", "left": "Excretion", "right": "Kidneys (elimination)" },
                { "id": "p3", "left": "Absorption", "right": "Passage into blood stream" },
                { "id": "p4", "left": "Distribution", "right": "Transport to tissues" }
            ],
            "explanation": "Metabolism occurs mainly in the liver; excretion primarily in the kidneys; absorption is entry into circulation; distribution is transport to tissues."
        },
        {
            "id": "comp-t4-q4",
            "type": "fill-blank",
            "topicId": "topic-04",
            "topicName": "Safe Drug Use",
            "question": "An __b1__ reaction is a genetically determined, unexpected response to a drug (e.g., extreme sensitivity to low doses).",
            "points": 2,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["idiosyncratic", "idiosyncrasy"], "caseSensitive": false }
            ],
            "explanation": "Idiosyncratic reactions are unusual, genetically determined responses different from allergic or toxic reactions."
        },
        {
            "id": "comp-t4-q5",
            "type": "true-false",
            "topicId": "topic-04",
            "topicName": "Safe Drug Use",
            "question": "A 'Generic Name' is the official, approved name of a drug, while a 'Trade Name' is the brand name owned by a manufacturer.",
            "points": 1,
            "correctAnswer": true,
            "explanation": "Generic names (e.g., Paracetamol) are official; Trade names (e.g., Panadol) are proprietary brands."
        }
    ]
});