
registerQuiz("comprehensive-exam", {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "Comprehensive Final Exam",
        "description": "A comprehensive assessment covering all 20 topics of the Essential Knowledge and Skills for Healthcare Assistants course.",
        "examType": "comprehensive",
        "topicsCovered": [
            "topic-01", "topic-02", "topic-03", "topic-04", "topic-05", 
            "topic-06", "topic-07", "topic-08", "topic-09", "topic-10",
            "topic-11", "topic-12", "topic-13", "topic-14", "topic-15",
            "topic-16", "topic-17", "topic-18", "topic-19", "topic-20"
        ],
        "difficulty": "advanced",
        "estimatedTime": 45,
        "passingScore": 75,
        "createdAt": "2025-12-25T10:00:00Z",
        "tags": ["final", "certification", "comprehensive"]
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
        /* --- SECTION I: ROLES & REGS --- */
        {
            "id": "comp-q1",
            "type": "true-false",
            "question": "Currently, the title of 'Healthcare Assistant' is a protected title by law, requiring registration with the NMC.",
            "points": 1,
            "topicId": "topic-01",
            "topicName": "Roles & Regulation",
            "correctAnswer": false,
            "explanation": "There is currently no regulation of HCAs or APs, and the title is not protected."
        },
        
        /* --- SECTION II: FOUNDATIONS --- */
        {
            "id": "comp-q2",
            "type": "ordering",
            "question": "Arrange the stages of Gibbs' (1988) reflective cycle in the correct order:",
            "points": 2,
            "topicId": "topic-02",
            "topicName": "Reflective Practice",
            "items": [
                { "id": "i1", "text": "Description", "correctPosition": 1 },
                { "id": "i2", "text": "Feelings", "correctPosition": 2 },
                { "id": "i3", "text": "Evaluation", "correctPosition": 3 },
                { "id": "i4", "text": "Analysis", "correctPosition": 4 },
                { "id": "i5", "text": "Conclusion", "correctPosition": 5 },
                { "id": "i6", "text": "Action plan", "correctPosition": 6 }
            ],
            "explanation": "Gibbs' cycle moves from Description -> Feelings -> Evaluation -> Analysis -> Conclusion -> Action Plan."
        },
        {
            "id": "comp-q3",
            "type": "multiple-choice",
            "question": "Who is legally accountable for the *appropriateness* of delegating a task to a HCA?",
            "points": 1,
            "topicId": "topic-03",
            "topicName": "Accountability",
            "options": [
                { "id": "a", "text": "The HCA accepting the task", "isCorrect": false },
                { "id": "b", "text": "The registered nurse or doctor delegating the task", "isCorrect": true },
                { "id": "c", "text": "The practice manager", "isCorrect": false }
            ],
            "explanation": "The registered nurse or doctor is accountable for the appropriateness of the delegation."
        },
        {
            "id": "comp-q4",
            "type": "true-false",
            "question": "Clinical protocols are advisory only and should never be used without assessing the specific patient or situation first.",
            "points": 1,
            "topicId": "topic-04",
            "topicName": "Protocols",
            "correctAnswer": true,
            "explanation": "Protocols are advisory. Clinical judgement must be applied to the specific patient situation."
        },
        {
            "id": "comp-q5",
            "type": "multiple-select",
            "question": "Which of the following are considered barriers to effective communication? (Select all that apply)",
            "points": 1,
            "topicId": "topic-05",
            "topicName": "Communication",
            "options": [
                { "id": "a", "text": "Medical terminology/jargon", "isCorrect": true },
                { "id": "b", "text": "Mismatched agendas", "isCorrect": true },
                { "id": "c", "text": "Active listening", "isCorrect": false },
                { "id": "d", "text": "Fear and anxiety", "isCorrect": true }
            ],
            "explanation": "Barriers include jargon, mismatched agendas, fear/anxiety, and environmental distractions. Active listening facilitates communication."
        },
        {
            "id": "comp-q6",
            "type": "fill-blank",
            "question": "The __1__ Record Technique involves repeating the same phrase calmly to refuse a request without getting aggressive.",
            "points": 1,
            "topicId": "topic-06",
            "topicName": "Assertiveness",
            "blanks": [
                { "id": "1", "acceptedAnswers": ["Broken", "broken"], "caseSensitive": false }
            ],
            "explanation": "The Broken Record Technique is a key assertiveness skill."
        },
        {
            "id": "comp-q7",
            "type": "short-answer",
            "question": "According to the Caldicott Report, access to patient-identifiable information should be on what basis?",
            "points": 1,
            "topicId": "topic-07",
            "topicName": "Confidentiality",
            "keywords": ["need", "to", "know"],
            "minKeywords": 3,
            "modelAnswer": "Strict need-to-know basis.",
            "maxLength": 50
        },
        {
            "id": "comp-q8",
            "type": "multiple-select",
            "question": "Select the benefits of stopping smoking. (Select all that apply)",
            "points": 1,
            "topicId": "topic-08",
            "topicName": "Health Promotion",
            "options": [
                { "id": "a", "text": "Improved fertility", "isCorrect": true },
                { "id": "b", "text": "Lower cholesterol", "isCorrect": false },
                { "id": "c", "text": "Better breathing", "isCorrect": true },
                { "id": "d", "text": "Improved sense of smell/taste", "isCorrect": true }
            ],
            "explanation": "Smoking cessation improves fertility, breathing, and senses. Lowering cholesterol is primarily associated with diet/exercise."
        },
        {
            "id": "comp-q9",
            "type": "multiple-choice",
            "question": "According to WHO, which of these is NOT one of the '5 Moments for Hand Hygiene'?",
            "points": 1,
            "topicId": "topic-09",
            "topicName": "Infection Control",
            "options": [
                { "id": "a", "text": "Before touching a patient", "isCorrect": false },
                { "id": "b", "text": "After body fluid exposure risk", "isCorrect": false },
                { "id": "c", "text": "Before putting on gloves", "isCorrect": true },
                { "id": "d", "text": "After touching patient surroundings", "isCorrect": false }
            ],
            "explanation": "While you should wash hands before gloves, the specific '5 Moments' are: Before patient contact, Before aseptic task, After body fluid exposure, After patient contact, After contact with surroundings."
        },
        {
            "id": "comp-q10",
            "type": "true-false",
            "question": "Family members are the most appropriate chaperones for adult patients during intimate examinations.",
            "points": 1,
            "topicId": "topic-10",
            "topicName": "Chaperoning",
            "correctAnswer": false,
            "explanation": "Friends or relatives are no longer considered appropriate chaperones. An independent, trained staff member should be used."
        },

        /* --- SECTION III: CORE SKILLS --- */
        {
            "id": "comp-q11",
            "type": "fill-blank",
            "question": "A BMI of 30.0–34.9 is classified as __1__ Class 1.",
            "points": 1,
            "topicId": "topic-11",
            "topicName": "Physiological Measurements",
            "blanks": [
                { "id": "1", "acceptedAnswers": ["Obesity", "obesity", "Obese", "obese"], "caseSensitive": false }
            ],
            "explanation": "BMI 30.0+ indicates Obesity."
        },
        {
            "id": "comp-q12",
            "type": "image-based",
            "question": "Identify the Radial pulse location on the diagram:",
            "points": 2,
            "topicId": "topic-11",
            "topicName": "Physiological Measurements",
            "imageUrl": "assets/images/image-20260115-5d3857cd.jpeg",
            "imageAlt": "Diagram of pulse points",
            "hotspots": [
                { "id": "radial", "x": 92, "y": 48, "radius": 5, "label": "Radial Pulse", "isCorrect": true }
            ]
        },
        {
            "id": "comp-q13",
            "type": "multiple-choice",
            "question": "When measuring blood pressure, the point where the tapping sound disappears completely (silence) is known as:",
            "points": 1,
            "topicId": "topic-12",
            "topicName": "Blood Pressure",
            "options": [
                { "id": "a", "text": "Korotkoff 1", "isCorrect": false },
                { "id": "b", "text": "Korotkoff 4", "isCorrect": false },
                { "id": "c", "text": "Korotkoff 5", "isCorrect": true },
                { "id": "d", "text": "Systole", "isCorrect": false }
            ],
            "explanation": "Korotkoff 5 (silence) denotes the diastolic pressure."
        },
        {
            "id": "comp-q14",
            "type": "multiple-choice",
            "question": "Where should the V1 electrode be placed for a 12-lead ECG?",
            "points": 1,
            "topicId": "topic-13",
            "topicName": "Heart & ECG",
            "options": [
                { "id": "a", "text": "4th intercostal space, right sternal border", "isCorrect": true },
                { "id": "b", "text": "4th intercostal space, left sternal border", "isCorrect": false },
                { "id": "c", "text": "5th intercostal space, mid-clavicular line", "isCorrect": false },
                { "id": "d", "text": "Right wrist", "isCorrect": false }
            ],
            "explanation": "V1 is placed at the 4th intercostal space at the right sternal border."
        },
        {
            "id": "comp-q15",
            "type": "multiple-select",
            "question": "Which of the following practices can cause haemolysis during venepuncture? (Select all that apply)",
            "points": 1,
            "topicId": "topic-14",
            "topicName": "Venepuncture",
            "options": [
                { "id": "a", "text": "Using a needle that is too small", "isCorrect": true },
                { "id": "b", "text": "Prolonged use of the tourniquet", "isCorrect": true },
                { "id": "c", "text": "Allowing alcohol to dry completely", "isCorrect": false },
                { "id": "d", "text": "Vigorous shaking of the sample", "isCorrect": true }
            ],
            "explanation": "Haemolysis is caused by mechanical damage to cells via small needles, tourniquets left on too long, or vigorous shaking. Alcohol must dry to prevent stinging/haemolysis."
        },
        {
            "id": "comp-q16",
            "type": "short-answer",
            "question": "What might the presence of ketones in a diabetic patient's urine indicate?",
            "points": 2,
            "topicId": "topic-15",
            "topicName": "Urinalysis",
            "keywords": ["ketoacidosis", "uncontrolled", "control"],
            "minKeywords": 1,
            "modelAnswer": "It may indicate diabetic ketoacidosis (DKA) or uncontrolled diabetes.",
            "maxLength": 100
        },

        /* --- SECTION IV: ADVANCED SKILLS --- */
        {
            "id": "comp-q17",
            "type": "multiple-choice",
            "question": "What is the single most important risk factor for the development of a diabetic foot ulcer?",
            "points": 1,
            "topicId": "topic-16",
            "topicName": "Diabetic Foot",
            "options": [
                { "id": "a", "text": "Callus formation", "isCorrect": false },
                { "id": "b", "text": "Loss of protective sensation (LOPS)", "isCorrect": true },
                { "id": "c", "text": "Dry skin", "isCorrect": false },
                { "id": "d", "text": "Poor eyesight", "isCorrect": false }
            ],
            "explanation": "Loss of protective sensation (LOPS) due to neuropathy is the most significant risk factor."
        },
        {
            "id": "comp-q18",
            "type": "multiple-choice",
            "question": "Which phase of wound healing is characterized by the formation of new blood vessels and granulation tissue?",
            "points": 1,
            "topicId": "topic-17",
            "topicName": "Wound Care",
            "options": [
                { "id": "a", "text": "Inflammatory phase", "isCorrect": false },
                { "id": "b", "text": "Proliferation/Granulation phase", "isCorrect": true },
                { "id": "c", "text": "Maturation phase", "isCorrect": false },
                { "id": "d", "text": "Haemostasis", "isCorrect": false }
            ],
            "explanation": "The proliferation phase (days 3-14) involves angiogenesis and granulation."
        },
        {
            "id": "comp-q19",
            "type": "fill-blank",
            "question": "In spirometry, a low FEV1/FVC ratio indicates __1__ airways.",
            "points": 1,
            "topicId": "topic-18",
            "topicName": "Lung Function",
            "blanks": [
                { "id": "1", "acceptedAnswers": ["narrowed", "obstructed", "blocked"], "caseSensitive": false }
            ],
            "explanation": "A low ratio indicates obstruction or narrowed airways (e.g., COPD)."
        },
        {
            "id": "comp-q20",
            "type": "multiple-choice",
            "question": "What legal document must be in place for a HCA to administer an injection to a specific patient?",
            "points": 1,
            "topicId": "topic-19",
            "topicName": "Immunisation",
            "options": [
                { "id": "a", "text": "Patient Group Direction (PGD)", "isCorrect": false },
                { "id": "b", "text": "Patient Specific Direction (PSD)", "isCorrect": true },
                { "id": "c", "text": "Verbal instruction from a GP", "isCorrect": false },
                { "id": "d", "text": "Certificate of competence", "isCorrect": false }
            ],
            "explanation": "HCAs cannot use PGDs; they require a Patient Specific Direction (PSD) signed by a prescriber."
        },
        {
            "id": "comp-q21",
            "type": "true-false",
            "question": "Ear irrigation should be performed if the patient has a history of a perforated eardrum.",
            "points": 1,
            "topicId": "topic-20",
            "topicName": "Ear Irrigation",
            "correctAnswer": false,
            "explanation": "Current perforation is a contraindication. A healed perforation is a precaution requiring nurse/doctor assessment."
        },
        {
            "id": "comp-q22",
            "type": "short-answer",
            "question": "What angle should the needle be inserted for an intramuscular (IM) injection?",
            "points": 1,
            "topicId": "topic-19",
            "topicName": "Immunisation",
            "keywords": ["90", "degrees"],
            "minKeywords": 1,
            "modelAnswer": "90 degrees.",
            "maxLength": 50
        },
        {
            "id": "comp-q23",
            "type": "multiple-choice",
            "question": "When performing ear irrigation, where should the water jet be directed for the right ear?",
            "points": 1,
            "topicId": "topic-20",
            "topicName": "Ear Irrigation",
            "options": [
                { "id": "a", "text": "Directly at the eardrum", "isCorrect": false },
                { "id": "b", "text": "Towards the floor (6 o'clock)", "isCorrect": false },
                { "id": "c", "text": "Towards the back of the head (11 o'clock)", "isCorrect": true },
                { "id": "d", "text": "Towards the nose (3 o'clock)", "isCorrect": false }
            ],
            "explanation": "Direct towards the back of the head (11 o'clock for right ear, 1 o'clock for left ear) to avoid direct pressure on the TM."
        },
        {
            "id": "comp-q24",
            "type": "multiple-select",
            "question": "Which of the following are contraindications for the Live Attenuated Influenza Vaccine (Nasal Flu)? (Select all that apply)",
            "points": 1,
            "topicId": "topic-19",
            "topicName": "Immunisation",
            "options": [
                { "id": "a", "text": "Severe asthma/active wheeze", "isCorrect": true },
                { "id": "b", "text": "Pregnancy", "isCorrect": true },
                { "id": "c", "text": "Severe immunodeficiency", "isCorrect": true },
                { "id": "d", "text": "Egg allergy (mild)", "isCorrect": false }
            ],
            "explanation": "LAIV is a live vaccine and is contraindicated in severe asthma, pregnancy, and severe immunodeficiency."
        },
        {
            "id": "comp-q25",
            "type": "short-answer",
            "question": "What is the recommended temperature range for vaccine storage (the cold chain)?",
            "points": 1,
            "topicId": "topic-19",
            "topicName": "Immunisation",
            "keywords": ["2", "8", "degrees"],
            "minKeywords": 2,
            "modelAnswer": "2 to 8 degrees Celsius.",
            "maxLength": 50
        }
    ]
});