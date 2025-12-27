registerQuiz("comprehensive-exam", {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "Comprehensive Final Exam: Oncology Nursing",
        "description": "A comprehensive assessment covering basic concepts, prevention, diagnosis, treatment modalities, emergencies, and specific cancer care.",
        "examType": "comprehensive",
        "topicsCovered": [
            "topic-01",
            "topic-02",
            "topic-03",
            "topic-04",
            "topic-05",
            "topic-06"
        ],
        "difficulty": "advanced",
        "estimatedTime": 45,
        "passingScore": 75,
        "createdAt": "2025-12-27T10:00:00Z",
        "tags": ["final", "comprehensive", "oncology", "ncm112"]
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
        /* --- TOPIC 1: BASIC CONCEPTS --- */
        {
            "id": "comp-t1-q1",
            "type": "multiple-choice",
            "question": "Which term describes the replacement of one adult cell type by a different adult cell type?",
            "points": 1,
            "topicId": "topic-01",
            "topicName": "Basic Concepts",
            "options": [
                { "id": "a", "text": "Dysplasia", "isCorrect": false },
                { "id": "b", "text": "Hyperplasia", "isCorrect": false },
                { "id": "c", "text": "Metaplasia", "isCorrect": true },
                { "id": "d", "text": "Anaplasia", "isCorrect": false }
            ],
            "explanation": "Metaplasia is the reversible replacement of one adult cell type by another, usually in response to chronic irritation."
        },
        {
            "id": "comp-t1-q2",
            "type": "matching",
            "question": "Match the tumor nomenclature with the correct tissue of origin.",
            "points": 4,
            "topicId": "topic-01",
            "topicName": "Basic Concepts",
            "pairs": [
                { "id": "p1", "left": "Adenocarcinoma", "right": "Glandular tissue" },
                { "id": "p2", "left": "Sarcoma", "right": "Connective/Supporting tissue" },
                { "id": "p3", "left": "Carcinoma", "right": "Epithelial tissue" },
                { "id": "p4", "left": "Osteoma", "right": "Bone (Benign)" }
            ]
        },
        {
            "id": "comp-t1-q3",
            "type": "multiple-select",
            "question": "Which of the following are characteristics of **Malignant** neoplasms? (Select all that apply)",
            "points": 2,
            "topicId": "topic-01",
            "topicName": "Basic Concepts",
            "options": [
                { "id": "a", "text": "Encapsulated", "isCorrect": false },
                { "id": "b", "text": "Infiltrates surrounding tissues", "isCorrect": true },
                { "id": "c", "text": "Poorly differentiated / Anaplastic", "isCorrect": true },
                { "id": "d", "text": "Grows slowly", "isCorrect": false },
                { "id": "e", "text": "Metastasis is common", "isCorrect": true }
            ],
            "explanation": "Malignant tumors are not encapsulated, grow rapidly, infiltrate surrounding tissues, are poorly differentiated, and commonly metastasize."
        },

        /* --- TOPIC 2: PREVENTION & DETECTION --- */
        {
            "id": "comp-t2-q1",
            "type": "fill-blank",
            "question": "In the CAUTION mnemonic for cancer warning signs, the letter 'T' stands for __b1__.",
            "points": 1,
            "topicId": "topic-02",
            "topicName": "Prevention & Detection",
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["thickening", "thickening or lump"], "caseSensitive": false }
            ],
            "explanation": "T stands for 'Thickening or lump in the breast or elsewhere'."
        },
        {
            "id": "comp-t2-q2",
            "type": "multiple-choice",
            "question": "According to ACS guidelines, women aged 40 and older should undergo which breast screening procedure annually?",
            "points": 1,
            "topicId": "topic-02",
            "topicName": "Prevention & Detection",
            "options": [
                { "id": "a", "text": "Breast Self-Exam only", "isCorrect": false },
                { "id": "b", "text": "Mammogram", "isCorrect": true },
                { "id": "c", "text": "Breast Biopsy", "isCorrect": false },
                { "id": "d", "text": "Genetic Testing", "isCorrect": false }
            ],
            "explanation": "Annual mammograms are recommended for women starting at age 40."
        },
        {
            "id": "comp-t2-q3",
            "type": "multiple-choice",
            "question": "Which of the following is considered a **Primary Prevention** strategy?",
            "points": 1,
            "topicId": "topic-02",
            "topicName": "Prevention & Detection",
            "options": [
                { "id": "a", "text": "Performing monthly breast self-exams", "isCorrect": false },
                { "id": "b", "text": "Undergoing a colonoscopy at age 50", "isCorrect": false },
                { "id": "c", "text": "Smoking cessation and avoiding tobacco", "isCorrect": true },
                { "id": "d", "text": "Getting a Pap smear", "isCorrect": false }
            ],
            "explanation": "Primary prevention aims to prevent disease occurrence (e.g., stopping smoking). Screening exams (BSE, colonoscopy, Pap smear) are Secondary prevention."
        },

        /* --- TOPIC 3: DIAGNOSTICS --- */
        {
            "id": "comp-t3-q1",
            "type": "multiple-choice",
            "question": "A Papanicolaou (Pap) smear result of **Class IV** indicates:",
            "points": 1,
            "topicId": "topic-03",
            "topicName": "Diagnostics",
            "options": [
                { "id": "a", "text": "Normal findings", "isCorrect": false },
                { "id": "b", "text": "Inflammation", "isCorrect": false },
                { "id": "c", "text": "Probably malignant", "isCorrect": true },
                { "id": "d", "text": "Mild dysplasia", "isCorrect": false }
            ],
            "explanation": "Class IV is interpreted as 'Probably malignant' and requires a biopsy."
        },
        {
            "id": "comp-t3-q2",
            "type": "matching",
            "question": "Match the tumor marker with the cancer type it is commonly associated with.",
            "points": 3,
            "topicId": "topic-03",
            "topicName": "Diagnostics",
            "pairs": [
                { "id": "p1", "left": "PSA (Prostate-Specific Antigen)", "right": "Prostate Cancer" },
                { "id": "p2", "left": "AFP (Alpha-fetoprotein)", "right": "Testicular/Liver Cancer" },
                { "id": "p3", "left": "CEA (Carcinoembryonic Antigen)", "right": "Colorectal/Breast Cancer" }
            ]
        },

        /* --- TOPIC 4: TREATMENT MODALITIES --- */
        {
            "id": "comp-t4-q1",
            "type": "multiple-choice",
            "question": "Which principle of radiation protection is correctly applied when a nurse limits the time spent near a radioactive source?",
            "points": 1,
            "topicId": "topic-04",
            "topicName": "Treatment Modalities",
            "options": [
                { "id": "a", "text": "Distance", "isCorrect": false },
                { "id": "b", "text": "Time", "isCorrect": true },
                { "id": "c", "text": "Shielding", "isCorrect": false },
                { "id": "d", "text": "Fractionation", "isCorrect": false }
            ],
            "explanation": "The three principles are Time, Distance, and Shielding. Limiting duration of exposure refers to Time."
        },
        {
            "id": "comp-t4-q2",
            "type": "multiple-select",
            "question": "Which of the following nursing interventions are appropriate for a patient with **Internal Radiation (Sealed Source)**? (Select all that apply)",
            "points": 2,
            "topicId": "topic-04",
            "topicName": "Treatment Modalities",
            "options": [
                { "id": "a", "text": "Place the client in a private room", "isCorrect": true },
                { "id": "b", "text": "Encourage frequent ambulation in the hallway", "isCorrect": false },
                { "id": "c", "text": "Insert a Foley catheter to prevent bladder distention", "isCorrect": true },
                { "id": "d", "text": "Keep long forceps and a lead container in the room", "isCorrect": true },
                { "id": "e", "text": "Assign a pregnant nurse to care for the client", "isCorrect": false }
            ],
            "explanation": "Patients should be on bed rest (not ambulating), have a Foley catheter, private room, and emergency equipment available. Pregnant staff should strictly avoid care."
        },
        {
            "id": "comp-t4-q3",
            "type": "short-answer",
            "question": "What is the term for the time after chemotherapy administration when the White Blood Cell (WBC) or platelet count is at its lowest point?",
            "points": 2,
            "topicId": "topic-04",
            "topicName": "Treatment Modalities",
            "keywords": ["nadir"],
            "minKeywords": 1,
            "modelAnswer": "Nadir",
            "explanation": "The 'Nadir' is the point of lowest blood cell count, usually occurring 7-14 days after chemotherapy."
        },

        /* --- TOPIC 5: EMERGENCIES --- */
        {
            "id": "comp-t5-q1",
            "type": "multiple-choice",
            "question": "Which oncologic emergency is characterized by the rapid release of intracellular potassium, phosphorus, and nucleic acid into the circulation?",
            "points": 1,
            "topicId": "topic-05",
            "topicName": "Oncologic Emergencies",
            "options": [
                { "id": "a", "text": "Hypercalcemia", "isCorrect": false },
                { "id": "b", "text": "Tumor Lysis Syndrome", "isCorrect": true },
                { "id": "c", "text": "SIADH", "isCorrect": false },
                { "id": "d", "text": "Superior Vena Cava Syndrome", "isCorrect": false }
            ],
            "explanation": "Tumor Lysis Syndrome (TLS) occurs when large numbers of cancer cells are destroyed rapidly, releasing their contents."
        },
        {
            "id": "comp-t5-q2",
            "type": "multiple-choice",
            "question": "A patient with cancer presents with confusion, muscle weakness, and decreased urine output. Lab results show hyponatremia (low sodium). Which emergency is most likely?",
            "points": 1,
            "topicId": "topic-05",
            "topicName": "Oncologic Emergencies",
            "options": [
                { "id": "a", "text": "Spinal Cord Compression", "isCorrect": false },
                { "id": "b", "text": "Hypercalcemia", "isCorrect": false },
                { "id": "c", "text": "SIADH", "isCorrect": true },
                { "id": "d", "text": "DIC", "isCorrect": false }
            ],
            "explanation": "Syndrome of Inappropriate Antidiuretic Hormone (SIADH) leads to water retention and dilutional hyponatremia."
        },
        {
            "id": "comp-t5-q3",
            "type": "multiple-choice",
            "question": "What is the primary treatment for **Hypercalcemia** in an oncologic patient?",
            "points": 1,
            "topicId": "topic-05",
            "topicName": "Oncologic Emergencies",
            "options": [
                { "id": "a", "text": "Fluid restriction", "isCorrect": false },
                { "id": "b", "text": "Administration of Calcitonin and hydration", "isCorrect": true },
                { "id": "c", "text": "Platelet transfusion", "isCorrect": false },
                { "id": "d", "text": "Pericardiocentesis", "isCorrect": false }
            ],
            "explanation": "Calcitonin and vigorous IV hydration are used to lower serum calcium levels."
        },

        /* --- TOPIC 6: SPECIFIC CANCERS --- */
        {
            "id": "comp-t6-q1",
            "type": "multiple-choice",
            "question": "Following a **radical mastectomy** on the right side, which nursing action is contraindicated on the affected arm?",
            "points": 1,
            "topicId": "topic-06",
            "topicName": "Care of Specific Cancers",
            "options": [
                { "id": "a", "text": "Applying lotion", "isCorrect": false },
                { "id": "b", "text": "Elevating the arm on a pillow", "isCorrect": false },
                { "id": "c", "text": "Taking blood pressure", "isCorrect": true },
                { "id": "d", "text": "Checking capillary refill", "isCorrect": false }
            ],
            "explanation": "BP measurements, IVs, and blood draws are contraindicated on the affected side to prevent lymphedema and compromised circulation."
        },
        {
            "id": "comp-t6-q2",
            "type": "multiple-choice",
            "question": "What is the priority assessment for a patient immediately following a **laryngectomy**?",
            "points": 1,
            "topicId": "topic-06",
            "topicName": "Care of Specific Cancers",
            "options": [
                { "id": "a", "text": "Nutritional status", "isCorrect": false },
                { "id": "b", "text": "Airway patency", "isCorrect": true },
                { "id": "c", "text": "Communication method", "isCorrect": false },
                { "id": "d", "text": "Wound healing", "isCorrect": false }
            ],
            "explanation": "Airway is always the priority (ABC). A permanent tracheostomy is created, and keeping it patent is critical."
        },
        {
            "id": "comp-t6-q3",
            "type": "matching",
            "question": "Match the urinary diversion type with its description.",
            "points": 3,
            "topicId": "topic-06",
            "topicName": "Care of Specific Cancers",
            "pairs": [
                { "id": "p1", "left": "Ileal Conduit", "right": "Ureters implanted into ileum segment; stoma created" },
                { "id": "p2", "left": "Koch Pouch", "right": "Continent reservoir; requires catheterization" },
                { "id": "p3", "left": "Ureterostomy", "right": "Ureters attached directly to abdominal surface" }
            ]
        },
        {
            "id": "comp-t6-q4",
            "type": "multiple-choice",
            "question": "Which symptom is most characteristic of **bladder cancer**?",
            "points": 1,
            "topicId": "topic-06",
            "topicName": "Care of Specific Cancers",
            "options": [
                { "id": "a", "text": "Painful urination", "isCorrect": false },
                { "id": "b", "text": "Painless hematuria", "isCorrect": true },
                { "id": "c", "text": "Flank pain", "isCorrect": false },
                { "id": "d", "text": "Proteinuria", "isCorrect": false }
            ],
            "explanation": "Painless hematuria (blood in urine without pain) is the hallmark sign of bladder cancer."
        },

        /* --- MIXED / SCENARIO QUESTIONS --- */
        {
            "id": "comp-mix-q1",
            "type": "true-false",
            "question": "A patient with a platelet count of 20,000/mm³ is at high risk for hemorrhage.",
            "points": 1,
            "topicId": "topic-04",
            "topicName": "Treatment Modalities",
            "correctAnswer": true,
            "explanation": "Normal platelet count is 150,000-400,000. A count of 20,000 indicates severe thrombocytopenia and a high risk of spontaneous bleeding."
        },
        {
            "id": "comp-mix-q2",
            "type": "ordering",
            "question": "Arrange the phases of the cell cycle in the correct order starting from the resting phase.",
            "points": 2,
            "topicId": "topic-04",
            "topicName": "Treatment Modalities",
            "items": [
                { "id": "i1", "text": "G0 (Resting)", "correctPosition": 1 },
                { "id": "i2", "text": "G1 (Cell Growth)", "correctPosition": 2 },
                { "id": "i3", "text": "S (DNA Synthesis)", "correctPosition": 3 },
                { "id": "i4", "text": "G2 (Preparation for Mitosis)", "correctPosition": 4 },
                { "id": "i5", "text": "M (Mitosis)", "correctPosition": 5 }
            ]
        },
        {
            "id": "comp-mix-q3",
            "type": "multiple-choice",
            "question": "A patient presents with back pain, numbness in the legs, and bladder incontinence. Which oncologic emergency should be suspected?",
            "points": 1,
            "topicId": "topic-05",
            "topicName": "Oncologic Emergencies",
            "options": [
                { "id": "a", "text": "Superior Vena Cava Syndrome", "isCorrect": false },
                { "id": "b", "text": "Spinal Cord Compression", "isCorrect": true },
                { "id": "c", "text": "Cardiac Tamponade", "isCorrect": false },
                { "id": "d", "text": "Hypercalcemia", "isCorrect": false }
            ],
            "explanation": "Back pain combined with neurologic deficits (numbness, incontinence) suggests Spinal Cord Compression."
        }
    ]
});