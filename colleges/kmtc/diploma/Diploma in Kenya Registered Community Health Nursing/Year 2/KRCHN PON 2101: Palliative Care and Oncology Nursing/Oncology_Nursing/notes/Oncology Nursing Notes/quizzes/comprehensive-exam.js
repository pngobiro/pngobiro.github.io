registerQuiz("comprehensive-exam", {
  "schemaVersion": "1.0",
  "quizId": "comprehensive-exam",
  "metadata": {
    "title": "Comprehensive Final Exam",
    "description": "A comprehensive assessment covering Cellular Biology, Epidemiology, Diagnosis, Treatment, and Oncologic Emergencies.",
    "examType": "comprehensive",
    "topicsCovered": ["topic-01", "topic-02", "topic-03", "topic-04", "topic-05"],
    "difficulty": "advanced",
    "estimatedTime": 60,
    "passingScore": 75,
    "createdAt": "2025-12-27T00:00:00Z",
    "tags": ["final", "exam", "nursing", "oncology", "comprehensive"]
  },
  "settings": {
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "showFeedback": "end",
    "allowRetry": false,
    "showCorrectAnswers": true,
    "timeLimit": 3600
  },
  "questions": [
    /* ========================================================================
       TOPIC 1: CELLULAR BIOLOGY & EVOLUTION
       ======================================================================== */
    {
      "id": "comp-q1",
      "topicId": "topic-01",
      "topicName": "Cellular Biology",
      "type": "matching",
      "question": "Match the type of cellular adaptation to its correct definition:",
      "points": 5,
      "pairs": [
        { "id": "p1", "left": "Hyperplasia", "right": "Increase in the number of normal cells" },
        { "id": "p2", "left": "Metaplasia", "right": "Conversion from one normal cell type to another" },
        { "id": "p3", "left": "Dysplasia", "right": "Alteration in shape, size, and appearance (reversible)" },
        { "id": "p4", "left": "Anaplasia", "right": "Disorganized, irregular cells with loss of differentiation" }
      ],
      "explanation": "Hyperplasia is an increase in number. Metaplasia is a conversion of cell type. Dysplasia is a reversible alteration in organization. Anaplasia is a loss of differentiation always resulting in malignancy."
    },
    {
      "id": "comp-q2",
      "topicId": "topic-01",
      "topicName": "Cellular Biology",
      "type": "multiple-select",
      "question": "Which of the following are characteristics of **malignant** cells? (Select all that apply)",
      "points": 5,
      "options": [
        { "id": "a", "text": "Rapid cell division and growth", "isCorrect": true },
        { "id": "b", "text": "Exhibit contact inhibition", "isCorrect": false },
        { "id": "c", "text": "Ability to migrate (metastasize)", "isCorrect": true },
        { "id": "d", "text": "Encapsulated within a fibrous capsule", "isCorrect": false },
        { "id": "e", "text": "Loss of differentiation", "isCorrect": true }
      ],
      "explanation": "Malignant cells divide rapidly, lack contact inhibition (they invade), have the ability to metastasize, and lose differentiation. Benign tumors are typically encapsulated; malignant ones are not."
    },
    {
      "id": "comp-q3",
      "topicId": "topic-01",
      "topicName": "Cellular Biology",
      "type": "fill-blank",
      "question": "__b1__ refers to the process whereby cells develop specific structures and functions to specialize in tasks, whereas __b2__ refers to normal cell suicide.",
      "points": 5,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["differentiation", "Differentiation"], "caseSensitive": false },
        { "id": "b2", "acceptedAnswers": ["apoptosis", "Apoptosis"], "caseSensitive": false }
      ],
      "explanation": "Differentiation is the specialization of cells. Apoptosis is programmed cell death (cell suicide)."
    },
    {
      "id": "comp-q4",
      "topicId": "topic-01",
      "topicName": "Cellular Biology",
      "type": "true-false",
      "question": "A benign neoplasm grows by infiltrating surrounding tissues and often metastasizes.",
      "points": 2,
      "correctAnswer": false,
      "explanation": "False. Benign neoplasms grow by expansion and are usually encapsulated; they do NOT infiltrate or metastasize. Malignant neoplasms grow by infiltration."
    },
    {
      "id": "comp-q5",
      "topicId": "topic-01",
      "topicName": "Cellular Biology",
      "type": "multiple-choice",
      "question": "Which term describes a tumor arising from supportive tissues such as bone or muscle?",
      "points": 3,
      "options": [
        { "id": "a", "text": "Carcinoma", "isCorrect": false },
        { "id": "b", "text": "Adenocarcinoma", "isCorrect": false },
        { "id": "c", "text": "Sarcoma", "isCorrect": true },
        { "id": "d", "text": "Lymphoma", "isCorrect": false }
      ],
      "explanation": "Sarcomas arise from supportive tissues (connective tissue, bone, muscle). Carcinomas arise from epithelial tissue. Adenocarcinomas arise from glandular tissue."
    },

    /* ========================================================================
       TOPIC 2: EPIDEMIOLOGY & PREVENTION
       ======================================================================== */
    {
      "id": "comp-q6",
      "topicId": "topic-02",
      "topicName": "Epidemiology",
      "type": "multiple-choice",
      "question": "According to the American Cancer Society's 'CAUTION US' acronym, what does the 'I' stand for?",
      "points": 3,
      "options": [
        { "id": "a", "text": "Infection that persists", "isCorrect": false },
        { "id": "b", "text": "Indigestion or difficulty in swallowing", "isCorrect": true },
        { "id": "c", "text": "Irregular bleeding", "isCorrect": false },
        { "id": "d", "text": "Increased pain at night", "isCorrect": false }
      ],
      "explanation": "'I' stands for Indigestion or difficulty in swallowing."
    },
    {
      "id": "comp-q7",
      "topicId": "topic-02",
      "topicName": "Epidemiology",
      "type": "multiple-select",
      "question": "Which of the following are considered **secondary** prevention (screening) methods? (Select all that apply)",
      "points": 5,
      "options": [
        { "id": "a", "text": "Monthly breast self-examination", "isCorrect": true },
        { "id": "b", "text": "Smoking cessation education", "isCorrect": false },
        { "id": "c", "text": "Annual Pap smear", "isCorrect": true },
        { "id": "d", "text": "Digital Rectal Examination (DRE)", "isCorrect": true },
        { "id": "e", "text": "Eating a high-fiber diet", "isCorrect": false }
      ],
      "explanation": "Secondary prevention involves screening and early detection (exams, tests). Primary prevention involves avoiding risk factors (diet, smoking cessation)."
    },
    {
      "id": "comp-q8",
      "topicId": "topic-02",
      "topicName": "Epidemiology",
      "type": "matching",
      "question": "Match the carcinogen to the specific type of cancer it is associated with:",
      "points": 5,
      "pairs": [
        { "id": "p1", "left": "Benzene", "right": "Leukemia" },
        { "id": "p2", "left": "Asbestos", "right": "Lung/Peritoneum" },
        { "id": "p3", "left": "Hepatitis B", "right": "Liver" },
        { "id": "p4", "left": "Tobacco", "right": "Lung/Esophagus/Mouth" }
      ],
      "explanation": "Benzene is linked to Leukemia; Asbestos to Lung cancer; Hepatitis B is a viral carcinogen for Liver cancer; Tobacco causes multiple cancers including Lung."
    },
    {
      "id": "comp-q9",
      "topicId": "topic-02",
      "topicName": "Epidemiology",
      "type": "multiple-choice",
      "question": "Which cancer has the highest incidence in males in the Philippines?",
      "points": 3,
      "options": [
        { "id": "a", "text": "Lung Cancer", "isCorrect": false },
        { "id": "b", "text": "Prostate Cancer", "isCorrect": true },
        { "id": "c", "text": "Colorectal Cancer", "isCorrect": false },
        { "id": "d", "text": "Liver Cancer", "isCorrect": false }
      ],
      "explanation": "The highest cancer incidence in males in order of frequency is prostate cancer, followed by lung cancer and colorectal cancer."
    },
    {
      "id": "comp-q10",
      "topicId": "topic-02",
      "topicName": "Epidemiology",
      "type": "multiple-choice",
      "question": "Which dietary habit is recommended to reduce cancer risk?",
      "points": 3,
      "options": [
        { "id": "a", "text": "Increase consumption of salt-cured foods", "isCorrect": false },
        { "id": "b", "text": "Include cruciferous vegetables (broccoli, cabbage) in the diet", "isCorrect": true },
        { "id": "c", "text": "High fat, low fiber diet", "isCorrect": false },
        { "id": "d", "text": "Reduce intake of Vitamin A and C", "isCorrect": false }
      ],
      "explanation": "Recommendations include eating more high fiber foods, including cruciferous vegetables, and foods rich in Vitamin A and C."
    },

    /* ========================================================================
       TOPIC 3: DIAGNOSIS & CLASSIFICATION
       ======================================================================== */
    {
      "id": "comp-q11",
      "topicId": "topic-03",
      "topicName": "Diagnosis",
      "type": "multiple-choice",
      "question": "In the TNM staging system, what does 'N1' indicate?",
      "points": 4,
      "options": [
        { "id": "a", "text": "No abnormal lymph nodes detected", "isCorrect": false },
        { "id": "b", "text": "Inability to assess regional nodes", "isCorrect": false },
        { "id": "c", "text": "Regional nodes involved, no metastasis detected", "isCorrect": true },
        { "id": "d", "text": "Distant metastasis including distant lymph nodes", "isCorrect": false }
      ],
      "explanation": "N1 indicates regional lymph nodes are involved. N0 is no involvement; Nx is inability to assess; M indicates metastasis."
    },
    {
      "id": "comp-q12",
      "topicId": "topic-03",
      "topicName": "Diagnosis",
      "type": "matching",
      "question": "Match the tumor marker to the specific cancer it identifies:",
      "points": 5,
      "pairs": [
        { "id": "p1", "left": "PSA (Prostatic Specific Antigen)", "right": "Prostate Cancer" },
        { "id": "p2", "left": "CEA (Carcinoembryonic Antigen)", "right": "Colon/Breast/Lung (Oncofetal)" },
        { "id": "p3", "left": "HCG (Human Chorionic Gonadotropin)", "right": "Hormone-secreting malignancy" },
        { "id": "p4", "left": "AFP (Alpha-fetoprotein)", "right": "Liver/Testicular (Oncofetal)" }
      ],
      "explanation": "PSA is tissue-specific for prostate. CEA and AFP are oncofetal antigens. HCG is a hormone marker."
    },
    {
      "id": "comp-q13",
      "topicId": "topic-03",
      "topicName": "Diagnosis",
      "type": "multiple-choice",
      "question": "A Pap smear result of **Class III** indicates:",
      "points": 3,
      "options": [
        { "id": "a", "text": "Normal", "isCorrect": false },
        { "id": "b", "text": "Inflammation", "isCorrect": false },
        { "id": "c", "text": "Mild to moderate dysplasia", "isCorrect": true },
        { "id": "d", "text": "Probably malignant", "isCorrect": false }
      ],
      "explanation": "Class I: Normal; Class II: Inflammation; Class III: Mild to moderate dysplasia; Class IV: Probably malignant; Class V: Malignant."
    },
    {
      "id": "comp-q14",
      "topicId": "topic-03",
      "topicName": "Diagnosis",
      "type": "true-false",
      "question": "An excisional biopsy involves removing the entire tumor for examination.",
      "points": 2,
      "correctAnswer": true,
      "explanation": "True. Excisional biopsy removes the entire lesion/tumor. Incisional removes a sample/wedge."
    },
    {
      "id": "comp-q15",
      "topicId": "topic-03",
      "topicName": "Diagnosis",
      "type": "fill-blank",
      "question": "The three components of the TNM system stand for __b1__, __b2__, and __b3__.",
      "points": 6,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["Tumor", "tumor size", "tumor"], "caseSensitive": false },
        { "id": "b2", "acceptedAnswers": ["Node", "lymph node", "nodes"], "caseSensitive": false },
        { "id": "b3", "acceptedAnswers": ["Metastasis", "metastases"], "caseSensitive": false }
      ],
      "explanation": "T = Tumor size, N = Lymph Node involvement, M = Metastasis."
    },

    /* ========================================================================
       TOPIC 4: TREATMENT MODALITIES
       ======================================================================== */
    {
      "id": "comp-q16",
      "topicId": "topic-04",
      "topicName": "Treatment",
      "type": "multiple-select",
      "question": "What are the three cardinal principles of radiation protection? (Select three)",
      "points": 5,
      "options": [
        { "id": "a", "text": "Time", "isCorrect": true },
        { "id": "b", "text": "Distance", "isCorrect": true },
        { "id": "c", "text": "Shielding", "isCorrect": true },
        { "id": "d", "text": "Isolation", "isCorrect": false },
        { "id": "e", "text": "Hygiene", "isCorrect": false }
      ],
      "explanation": "The principles are Time (minimize), Distance (maximize), and Shielding (use lead)."
    },
    {
      "id": "comp-q17",
      "topicId": "topic-04",
      "topicName": "Treatment",
      "type": "multiple-choice",
      "question": "In the event of a dislodged internal radiation implant, what is the priority nursing action?",
      "points": 5,
      "options": [
        { "id": "a", "text": "Pick it up with gloved hands and dispose of it.", "isCorrect": false },
        { "id": "b", "text": "Call the physician immediately and leave the room.", "isCorrect": false },
        { "id": "c", "text": "Use long-handled forceps to place it in a lead container.", "isCorrect": true },
        { "id": "d", "text": "Cover it with a blanket to block radiation.", "isCorrect": false }
      ],
      "explanation": "Never touch an implant directly. Use long-handled forceps and place it in a lead container."
    },
    {
      "id": "comp-q18",
      "topicId": "topic-04",
      "topicName": "Treatment",
      "type": "true-false",
      "question": "Clients receiving external radiation therapy (teletherapy) pose a radiation risk to others and must be isolated.",
      "points": 2,
      "correctAnswer": false,
      "explanation": "False. Clients receiving external radiation do not retain radiation and do not pose a risk to others. Clients with internal implants (brachytherapy) do pose a risk."
    },
    {
      "id": "comp-q19",
      "topicId": "topic-04",
      "topicName": "Treatment",
      "type": "multiple-choice",
      "question": "Which skin care instruction is appropriate for a client receiving external radiation?",
      "points": 3,
      "options": [
        { "id": "a", "text": "Scrub the markings off after each treatment.", "isCorrect": false },
        { "id": "b", "text": "Apply lotions and powders to the area to prevent itching.", "isCorrect": false },
        { "id": "c", "text": "Wash the area with plain water and pat dry.", "isCorrect": true },
        { "id": "d", "text": "Use a heating pad on the area to relieve pain.", "isCorrect": false }
      ],
      "explanation": "Wash with plain water, pat dry. Do not remove markings. Avoid lotions, powders, and extreme temperatures (heat/cold)."
    },
    {
      "id": "comp-q20",
      "topicId": "topic-04",
      "topicName": "Treatment",
      "type": "fill-blank",
      "question": "In __b1__ bone marrow transplantation, the client is infused with donor marrow, whereas in __b2__ BMT, the client's own marrow is used.",
      "points": 4,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["allogenic", "allogeneic"], "caseSensitive": false },
        { "id": "b2", "acceptedAnswers": ["autologous"], "caseSensitive": false }
      ],
      "explanation": "Allogenic = donor (healthy individual). Autologous = self (own marrow harvested during remission)."
    },

    /* ========================================================================
       TOPIC 5: ONCOLOGIC EMERGENCIES
       ======================================================================== */
    {
      "id": "comp-q21",
      "topicId": "topic-05",
      "topicName": "Emergencies",
      "type": "multiple-choice",
      "question": "What is an early sign of Superior Vena Cava Syndrome (SVCS)?",
      "points": 4,
      "options": [
        { "id": "a", "text": "Cyanosis", "isCorrect": false },
        { "id": "b", "text": "Hypotension", "isCorrect": false },
        { "id": "c", "text": "Periorbital and facial edema", "isCorrect": true },
        { "id": "d", "text": "Altered mental status", "isCorrect": false }
      ],
      "explanation": "Early signs are periorbital/facial edema (especially in the morning). Cyanosis, hypotension, and altered mental status are late signs."
    },
    {
      "id": "comp-q22",
      "topicId": "topic-05",
      "topicName": "Emergencies",
      "type": "multiple-select",
      "question": "Which of the following are clinical manifestations of Disseminated Intravascular Coagulopathy (DIC)? (Select all that apply)",
      "points": 5,
      "options": [
        { "id": "a", "text": "Abnormal bleeding and hemorrhage", "isCorrect": true },
        { "id": "b", "text": "Tachycardia", "isCorrect": true },
        { "id": "c", "text": "Hypertension", "isCorrect": false },
        { "id": "d", "text": "Dyspnea", "isCorrect": true },
        { "id": "e", "text": "Oliguria", "isCorrect": true }
      ],
      "explanation": "DIC causes bleeding/hemorrhage due to depleted clotting factors, and signs of organ hypoperfusion (tachycardia, dyspnea, oliguria) due to micro-clots."
    },
    {
      "id": "comp-q23",
      "topicId": "topic-05",
      "topicName": "Emergencies",
      "type": "multiple-choice",
      "question": "Which intervention is appropriate for a client with cardiac tamponade?",
      "points": 4,
      "options": [
        { "id": "a", "text": "Administer anticoagulants", "isCorrect": false },
        { "id": "b", "text": "Place client in Trendelenburg position", "isCorrect": false },
        { "id": "c", "text": "Prepare for pericardiocentesis", "isCorrect": true },
        { "id": "d", "text": "Administer high-dose radiation immediately", "isCorrect": false }
      ],
      "explanation": "Pericardiocentesis (removing fluid from pericardial sac) is the treatment to relieve compression of the heart."
    },
    {
      "id": "comp-q24",
      "topicId": "topic-05",
      "topicName": "Emergencies",
      "type": "fill-blank",
      "question": "Spinal cord compression is often secondary to pressure from expanding __b1__. Early symptoms include back and __b2__ pain.",
      "points": 4,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["tumors", "tumor"], "caseSensitive": false },
        { "id": "b2", "acceptedAnswers": ["leg"], "caseSensitive": false }
      ],
      "explanation": "Compression is caused by tumors; early signs are back and leg pain, numbness, or tingling."
    },
    {
      "id": "comp-q25",
      "topicId": "topic-05",
      "topicName": "Emergencies",
      "type": "matching",
      "question": "Match the oncologic emergency to its key symptom:",
      "points": 5,
      "pairs": [
        { "id": "p1", "left": "Spinal Cord Compression", "right": "Paresthesias / Leg Pain" },
        { "id": "p2", "left": "SVCS", "right": "Facial Edema / Neck swelling" },
        { "id": "p3", "left": "DIC", "right": "Bleeding from venipuncture sites" },
        { "id": "p4", "left": "Cardiac Tamponade", "right": "Circulatory collapse / Distant heart sounds" }
      ],
      "explanation": "Each emergency has distinct presentation: SCC (neuro/back), SVCS (upper body edema), DIC (bleeding/clotting), Tamponade (heart compression signs)."
    }
  ]
});