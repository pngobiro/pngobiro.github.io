registerQuiz("comprehensive-exam", {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "Comprehensive Final Exam: Abnormal Labour and Puerperium",
        "description": "A comprehensive assessment covering Multiple Pregnancies, Abnormal Uterine Action, Trial of Labour, Abnormal Puerperium, and Obstetric Emergencies.",
        "examType": "comprehensive",
        "topicsCovered": [
            "topic-01-multiple-pregnancies",
            "topic-02-abnormal-uterine-action",
            "topic-03-trial-induction-prolonged-labour",
            "topic-04-abnormal-puerperium",
            "topic-05-obstetric-operations-emergencies"
        ],
        "difficulty": "advanced",
        "estimatedTime": 60,
        "passingScore": 75,
        "createdAt": "2026-01-12T00:00:00Z",
        "tags": ["final", "comprehensive", "midwifery", "abnormal-labour"]
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
        /* ========================================================================
           TOPIC 1: MULTIPLE PREGNANCIES
           ======================================================================== */
        {
            "id": "comp-q1",
            "type": "matching",
            "question": "Match the characteristics to the type of twin pregnancy:",
            "points": 10,
            "topicId": "topic-01-multiple-pregnancies",
            "topicName": "Multiple Pregnancies",
            "pairs": [
                { "id": "p1", "left": "Uniovular (Monozygotic)", "right": "One ovum, one spermatozoon" },
                { "id": "p2", "left": "Binovular (Dizygotic)", "right": "Two ova, two spermatozoa" },
                { "id": "p3", "left": "Placenta (Uniovular)", "right": "One placenta" },
                { "id": "p4", "left": "Sex (Binovular)", "right": "Same or different sexes" }
            ],
            "explanation": "Uniovular twins develop from a single fertilised ovum (identical), while binovular twins develop from two separate ova (fraternal)."
        },
        {
            "id": "comp-q2",
            "type": "multiple-choice",
            "question": "Which of the following is a clinical finding on palpation suggestive of multiple pregnancy?",
            "points": 5,
            "topicId": "topic-01-multiple-pregnancies",
            "topicName": "Multiple Pregnancies",
            "options": [
                { "id": "a", "text": "Fundal height is smaller than dates", "isCorrect": false },
                { "id": "b", "text": "One foetal pole is revealed at the fundus", "isCorrect": false },
                { "id": "c", "text": "Two foetal poles are revealed on fundal palpation", "isCorrect": true },
                { "id": "d", "text": "The head feels larger than expected for the size of the uterus", "isCorrect": false }
            ],
            "explanation": "In multiple pregnancy, fundal height is usually larger than dates, two foetal poles are felt at the fundus, and the head feels small relative to the uterus size."
        },
        {
            "id": "comp-q3",
            "type": "true-false",
            "question": "Locked twins is a common complication in multiple pregnancy deliveries.",
            "points": 5,
            "topicId": "topic-01-multiple-pregnancies",
            "topicName": "Multiple Pregnancies",
            "correctAnswer": false,
            "explanation": "Locked twins is a rare complication. However, malpresentation and delay in the second twin are more common."
        },
        {
            "id": "comp-q4",
            "type": "ordering",
            "question": "Order the steps for managing the delivery of the second twin:",
            "points": 10,
            "topicId": "topic-01-multiple-pregnancies",
            "topicName": "Multiple Pregnancies",
            "items": [
                { "id": "i1", "text": "Deliver the first twin", "correctPosition": 1 },
                { "id": "i2", "text": "Check the lie of the second twin", "correctPosition": 2 },
                { "id": "i3", "text": "Correct lie if necessary / Push presenting part down", "correctPosition": 3 },
                { "id": "i4", "text": "Rupture membranes", "correctPosition": 4 },
                { "id": "i5", "text": "Encourage mother to push", "correctPosition": 5 }
            ],
            "explanation": "After the first twin is born, the lie of the second must be checked and corrected if necessary before rupturing membranes to prevent cord prolapse."
        },

        /* ========================================================================
           TOPIC 2: ABNORMAL UTERINE ACTION
           ======================================================================== */
        {
            "id": "comp-q5",
            "type": "multiple-choice",
            "question": "What characterizes 'Precipitate Labour'?",
            "points": 5,
            "topicId": "topic-02-abnormal-uterine-action",
            "topicName": "Abnormal Uterine Action",
            "options": [
                { "id": "a", "text": "Weak, infrequent contractions", "isCorrect": false },
                { "id": "b", "text": "Delivery occurring within one hour due to strong, frequent contractions", "isCorrect": true },
                { "id": "c", "text": "Localized spasm of a muscle ring", "isCorrect": false },
                { "id": "d", "text": "Cervix failing to dilate despite normal contractions", "isCorrect": false }
            ],
            "explanation": "Precipitate labour involves strong, frequent contractions resulting in abnormally rapid progress (often under 1 hour), risking maternal and foetal trauma."
        },
        {
            "id": "comp-q6",
            "type": "fill-blank",
            "question": "A localized spasm of a ring of muscle fibres, often near the junction of the upper and lower uterine segments, is known as __b1__.",
            "points": 10,
            "topicId": "topic-02-abnormal-uterine-action",
            "topicName": "Abnormal Uterine Action",
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["constriction ring dystocia", "constriction ring", "constriction ring dystochia"], "caseSensitive": false }
            ],
            "explanation": "Constriction ring dystocia is a localized spasm. If it occurs in the third stage, it is known as an hourglass constriction."
        },
        {
            "id": "comp-q7",
            "type": "multiple-select",
            "question": "Select the correct management steps for Hypotonic Uterine Action (Select all that apply):",
            "points": 10,
            "topicId": "topic-02-abnormal-uterine-action",
            "topicName": "Abnormal Uterine Action",
            "options": [
                { "id": "a", "text": "Exclude cephalopelvic disproportion (CPD)", "isCorrect": true },
                { "id": "b", "text": "Immediately perform Caesarean section", "isCorrect": false },
                { "id": "c", "text": "Stimulate contractions (e.g., enema or oxytocin)", "isCorrect": true },
                { "id": "d", "text": "Monitor vital signs and foetal heart rate", "isCorrect": true }
            ],
            "partialCredit": true,
            "explanation": "Management involves ruling out CPD, reassuring/sedating the mother, stimulating contractions if safe, and close monitoring. C-section is for distress or failed progress."
        },

        /* ========================================================================
           TOPIC 3: TRIAL, INDUCTION & PROLONGED LABOUR
           ======================================================================== */
        {
            "id": "comp-q8",
            "type": "multiple-choice",
            "question": "A Bishop Score of 6 or more generally indicates:",
            "points": 5,
            "topicId": "topic-03-trial-induction-prolonged-labour",
            "topicName": "Trial & Induction",
            "options": [
                { "id": "a", "text": "The cervix is unfavourable for induction", "isCorrect": false },
                { "id": "b", "text": "The cervix is favourable for induction", "isCorrect": true },
                { "id": "c", "text": "Caesarean section is mandatory", "isCorrect": false },
                { "id": "d", "text": "The foetus is in breech presentation", "isCorrect": false }
            ],
            "explanation": "A Bishop Score of 6 or higher is considered favourable, meaning induction is likely to be successful."
        },
        {
            "id": "comp-q9",
            "type": "image-based",
            "question": "Identify the type of malpresentation shown in the diagram (A):",
            "points": 10,
            "topicId": "topic-03-trial-induction-prolonged-labour",
            "topicName": "Malpresentation",
            "imageUrl": "assets/images/image-20260112-bc03c174.jpeg",
            "imageAlt": "Diagram showing a foetus with head completely extended",
            "options": [
                { "id": "a", "text": "Vertex Presentation", "isCorrect": false },
                { "id": "b", "text": "Brow Presentation", "isCorrect": false },
                { "id": "c", "text": "Face Presentation", "isCorrect": true },
                { "id": "d", "text": "Shoulder Presentation", "isCorrect": false }
            ],
            "explanation": "Face presentation occurs when the head has complete extension, and the occiput is in contact with the spine."
        },
        {
            "id": "comp-q10",
            "type": "matching",
            "question": "Match the breech maneuver to its purpose:",
            "points": 10,
            "topicId": "topic-03-trial-induction-prolonged-labour",
            "topicName": "Breech Delivery",
            "pairs": [
                { "id": "p1", "left": "Burns Marshall Method", "right": "Delivery of the head" },
                { "id": "p2", "left": "Lovset Manoeuvre", "right": "Delivery of extended arms/shoulders" },
                { "id": "p3", "left": "Mauriceau-Smellie-Veit", "right": "Jaw flexion and shoulder traction (extended head)" },
                { "id": "p4", "left": "Pinard's Manoeuvre (implied)", "right": "Delivery of extended legs (flexing the knee)" }
            ],
            "explanation": "Burns Marshall uses gravity for the head; Lovset rotates the body for arms; Mauriceau-Smellie-Veit controls head flexion."
        },
        {
            "id": "comp-q11",
            "type": "multiple-choice",
            "question": "What is the defining characteristic of Obstructed Labour?",
            "points": 5,
            "topicId": "topic-03-trial-induction-prolonged-labour",
            "topicName": "Obstructed Labour",
            "options": [
                { "id": "a", "text": "Labour lasting more than 12 hours", "isCorrect": false },
                { "id": "b", "text": "No advance of presenting part despite strong contractions", "isCorrect": true },
                { "id": "c", "text": "Weak uterine contractions causing delay", "isCorrect": false },
                { "id": "d", "text": "Rapid expulsion of the foetus", "isCorrect": false }
            ],
            "explanation": "Obstructed labour is defined by the lack of advance of the presenting part in spite of strong uterine contractions."
        },

        /* ========================================================================
           TOPIC 4: ABNORMAL PUERPERIUM
           ======================================================================== */
        {
            "id": "comp-q12",
            "type": "fill-blank",
            "question": "Puerperal pyrexia is defined as a temperature of __b1__°C and above within 14-21 days following childbirth.",
            "points": 5,
            "topicId": "topic-04-abnormal-puerperium",
            "topicName": "Abnormal Puerperium",
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["38"], "caseSensitive": false }
            ],
            "explanation": "Puerperal pyrexia is a febrile condition of 38°C or higher."
        },
        {
            "id": "comp-q13",
            "type": "multiple-choice",
            "question": "Which organism is the main cause of breast infection (mastitis) and is found in dust/throat?",
            "points": 5,
            "topicId": "topic-04-abnormal-puerperium",
            "topicName": "Breast Disorders",
            "options": [
                { "id": "a", "text": "Escherichia coli", "isCorrect": false },
                { "id": "b", "text": "Staphylococcus aureus", "isCorrect": true },
                { "id": "c", "text": "Clostridium welchii", "isCorrect": false },
                { "id": "d", "text": "Streptococcus faecalis", "isCorrect": false }
            ],
            "explanation": "Staphylococcus aureus is an exogenous organism often found in dust/nasopharynx and is the primary cause of mastitis."
        },
        {
            "id": "comp-q14",
            "type": "short-answer",
            "question": "Describe the signs of a 'Severe Infection' in puerperal sepsis.",
            "points": 10,
            "topicId": "topic-04-abnormal-puerperium",
            "topicName": "Puerperal Sepsis",
            "keywords": ["fever", "39", "rigors", "pulse", "uterus", "tender", "vomiting", "anaemia"],
            "minKeywords": 3,
            "modelAnswer": "Persistent fever over 39°C, rigors, rapid pulse (140-160), tender/sub-involuted uterus, vomiting, and marked pallor/anaemia.",
            "maxLength": 200
        },

        /* ========================================================================
           TOPIC 5: OBSTETRIC OPERATIONS & EMERGENCIES
           ======================================================================== */
        {
            "id": "comp-q15",
            "type": "multiple-choice",
            "question": "What is Mendelson's Syndrome?",
            "points": 5,
            "topicId": "topic-05-obstetric-operations-emergencies",
            "topicName": "Anaesthesia",
            "options": [
                { "id": "a", "text": "A reaction to local anaesthesia", "isCorrect": false },
                { "id": "b", "text": "Compression of the inferior vena cava", "isCorrect": false },
                { "id": "c", "text": "Aspiration pneumonitis due to inhalation of acid gastric content", "isCorrect": true },
                { "id": "d", "text": "Accidental puncture of the dura", "isCorrect": false }
            ],
            "explanation": "Mendelson's Syndrome occurs when acid stomach contents are aspirated into the lungs, causing chemical pneumonitis."
        },
        {
            "id": "comp-q16",
            "type": "multiple-select",
            "question": "Which of the following are management steps for Cord Prolapse with a pulsating cord in the first stage? (Select all that apply)",
            "points": 10,
            "topicId": "topic-05-obstetric-operations-emergencies",
            "topicName": "Cord Prolapse",
            "options": [
                { "id": "a", "text": "Push up the presenting part to relieve compression", "isCorrect": true },
                { "id": "b", "text": "Place mother in knee-chest position", "isCorrect": true },
                { "id": "c", "text": "Immediate vacuum extraction", "isCorrect": false },
                { "id": "d", "text": "Prepare for emergency Caesarean section", "isCorrect": true }
            ],
            "partialCredit": true,
            "explanation": "If in the first stage, elevate the presenting part, use knee-chest position, and rush to C-section. Vacuum is for 2nd stage."
        },
        {
            "id": "comp-q17",
            "type": "fill-blank",
            "question": "Post Partum Haemorrhage (PPH) is defined as bleeding in excess of __b1__ mls from the genital tract.",
            "points": 5,
            "topicId": "topic-05-obstetric-operations-emergencies",
            "topicName": "PPH",
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["500"], "caseSensitive": false }
            ],
            "explanation": "PPH is blood loss >500ml."
        },
        {
            "id": "comp-q18",
            "type": "multiple-choice",
            "question": "Which manoeuvre involves flexing the mother's knees to her chest to resolve Shoulder Dystocia?",
            "points": 5,
            "topicId": "topic-05-obstetric-operations-emergencies",
            "topicName": "Shoulder Dystocia",
            "options": [
                { "id": "a", "text": "Rubin's Manoeuvre", "isCorrect": false },
                { "id": "b", "text": "McRoberts Manoeuvre", "isCorrect": true },
                { "id": "c", "text": "Zavanelli Manoeuvre", "isCorrect": false },
                { "id": "d", "text": "Mauriceau-Smellie-Veit Manoeuvre", "isCorrect": false }
            ],
            "explanation": "McRoberts manoeuvre involves flexing the mother's legs/knees onto her abdomen/chest to straighten the sacrum and rotate the symphysis pubis."
        },
        {
            "id": "comp-q19",
            "type": "ordering",
            "question": "Order the steps for performing an Episiotomy:",
            "points": 10,
            "topicId": "topic-05-obstetric-operations-emergencies",
            "topicName": "Episiotomy",
            "items": [
                { "id": "i1", "text": "Wait for head to reach pelvic floor / crowning", "correctPosition": 1 },
                { "id": "i2", "text": "Insert two fingers between perineum and foetal head", "correctPosition": 2 },
                { "id": "i3", "text": "Infiltrate with lignocaine", "correctPosition": 3 },
                { "id": "i4", "text": "Make incision at height of contraction", "correctPosition": 4 },
                { "id": "i5", "text": "Control delivery of head", "correctPosition": 5 }
            ],
            "explanation": "Timing is crucial; protect the head with fingers, anaesthetize, cut during contraction, and control delivery."
        },
        {
            "id": "comp-q20",
            "type": "multiple-choice",
            "question": "What is the 'Bandl's Ring' a sign of?",
            "points": 5,
            "topicId": "topic-05-obstetric-operations-emergencies",
            "topicName": "Obstructed Labour",
            "options": [
                { "id": "a", "text": "Normal labour progression", "isCorrect": false },
                { "id": "b", "text": "Impending rupture of the uterus / Obstructed labour", "isCorrect": true },
                { "id": "c", "text": "Placenta separation", "isCorrect": false },
                { "id": "d", "text": "Cervical dilation", "isCorrect": false }
            ],
            "explanation": "A Bandl's ring (pathological retraction ring) visible abdominally indicates the lower segment is thinning dangerously due to obstruction."
        },
        {
            "id": "comp-q21",
            "type": "true-false",
            "question": "A classical caesarean section incision is made directly into the upper uterine segment (body).",
            "points": 5,
            "topicId": "topic-05-obstetric-operations-emergencies",
            "topicName": "Caesarean Section",
            "correctAnswer": true,
            "explanation": "Classical C-section involves a vertical incision in the upper segment. It is rarely used now due to higher rupture risks."
        },
        {
            "id": "comp-q22",
            "type": "multiple-choice",
            "question": "What is Johnson's Manoeuvre used for?",
            "points": 5,
            "topicId": "topic-05-obstetric-operations-emergencies",
            "topicName": "Inversion of Uterus",
            "options": [
                { "id": "a", "text": "Delivering the aftercoming head", "isCorrect": false },
                { "id": "b", "text": "Replacing an acute inversion of the uterus", "isCorrect": true },
                { "id": "c", "text": "Rotating a posterior shoulder", "isCorrect": false },
                { "id": "d", "text": "External cephalic version", "isCorrect": false }
            ],
            "explanation": "Johnson's manoeuvre is the manual replacement of an inverted uterus by pushing the fundus up through the vagina."
        },
        {
            "id": "comp-q23",
            "type": "matching",
            "question": "Match the type of shock to its description:",
            "points": 10,
            "topicId": "topic-05-obstetric-operations-emergencies",
            "topicName": "Shock",
            "pairs": [
                { "id": "p1", "left": "Hypovolaemic", "right": "Reduction in intravascular volume (bleeding)" },
                { "id": "p2", "left": "Cardiogenic", "right": "Inability of the heart to pump blood" },
                { "id": "p3", "left": "Septic/Distributive", "right": "Maldistribution due to vascular malfunction/infection" }
            ],
            "explanation": "Hypovolaemic is fluid loss; Cardiogenic is pump failure; Distributive involves vessel dilation (often from sepsis)."
        }
    ]
});