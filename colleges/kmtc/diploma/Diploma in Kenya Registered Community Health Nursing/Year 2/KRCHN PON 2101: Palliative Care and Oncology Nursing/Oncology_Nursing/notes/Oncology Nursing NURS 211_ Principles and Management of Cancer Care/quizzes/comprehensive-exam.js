
registerQuiz("comprehensive-exam", {
  "schemaVersion": "1.0",
  "quizId": "comprehensive-exam",
  "metadata": {
    "title": "Comprehensive Final Exam: Oncology Nursing",
    "description": "A comprehensive assessment covering all 9 topics of the NUR 101 Oncology course, including pathophysiology, treatments, specific cancer types, and oncologic emergencies.",
    "examType": "comprehensive",
    "topicsCovered": [
      "topic-01-basics",
      "topic-02-treatment",
      "topic-03-leukemia",
      "topic-04-lymphoma",
      "topic-05-lung-cancer",
      "topic-06-breast-cancer",
      "topic-07-prostate-cancer",
      "topic-08-testicular-cancer",
      "topic-09-emergencies"
    ],
    "difficulty": "advanced",
    "estimatedTime": 60,
    "passingScore": 75,
    "createdAt": "2025-12-27T12:00:00Z",
    "tags": ["final", "comprehensive", "nur-101"]
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
    /* --- TOPIC 1: BASICS --- */
    {
      "id": "t1-q1",
      "type": "matching",
      "topicId": "topic-01-basics",
      "topicName": "Immune System & Basics",
      "question": "Match the immune response type with its characteristics:",
      "points": 10,
      "pairs": [
        { "id": "p1", "left": "Innate Immunity", "right": "First line of defense, attacks indiscriminately" },
        { "id": "p2", "left": "Adaptive Immunity", "right": "Targets specific pathogens, creates memory" },
        { "id": "p3", "left": "Neutrophils", "right": "Part of Innate response" },
        { "id": "p4", "left": "B Lymphocytes", "right": "Part of Adaptive (Humoral) response" }
      ]
    },
    {
      "id": "t1-q2",
      "type": "multiple-choice",
      "topicId": "topic-01-basics",
      "topicName": "Immune System & Basics",
      "question": "Which term describes a tumor that is cancerous and capable of spreading?",
      "points": 5,
      "options": [
        { "id": "a", "text": "Benign", "isCorrect": false },
        { "id": "b", "text": "Malignant", "isCorrect": true },
        { "id": "c", "text": "Encapsulated", "isCorrect": false },
        { "id": "d", "text": "Hyperplastic", "isCorrect": false }
      ],
      "explanation": "Malignant tumors are cancerous, grow uncontrollably, and can metastasize."
    },
    {
      "id": "t1-q3",
      "type": "fill-blank",
      "topicId": "topic-01-basics",
      "topicName": "Immune System & Basics",
      "question": "A cancer arising from connective tissue is called a __b1__, while cancer arising from epithelial tissue is called a __b2__.",
      "points": 10,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["sarcoma"], "caseSensitive": false },
        { "id": "b2", "acceptedAnswers": ["carcinoma"], "caseSensitive": false }
      ]
    },
    {
      "id": "t1-q4",
      "type": "multiple-choice",
      "topicId": "topic-01-basics",
      "topicName": "Immune System & Basics",
      "question": "According to the staging system, what characterizes Stage 4 cancer?",
      "points": 5,
      "options": [
        { "id": "a", "text": "Localized to tissue of origin", "isCorrect": false },
        { "id": "b", "text": "Spread to nearby lymph nodes", "isCorrect": false },
        { "id": "c", "text": "Distant spread (metastasis) to other organs", "isCorrect": true },
        { "id": "d", "text": "Carcinoma in situ", "isCorrect": false }
      ],
      "explanation": "Stage 4 indicates distant spread (metastasis) to other tissues or organs beyond where it originated."
    },
    {
      "id": "t1-q5",
      "type": "multiple-select",
      "topicId": "topic-01-basics",
      "topicName": "Immune System & Basics",
      "question": "Select all options that are considered Classic Warning Signs of Cancer:",
      "points": 5,
      "options": [
        { "id": "a", "text": "Change in bowel or bladder habits", "isCorrect": true },
        { "id": "b", "text": "A sore that does not heal", "isCorrect": true },
        { "id": "c", "text": "Sudden weight gain", "isCorrect": false },
        { "id": "d", "text": "Indigestion or difficulty swallowing", "isCorrect": true },
        { "id": "e", "text": "Nagging cough or hoarseness", "isCorrect": true }
      ]
    },

    /* --- TOPIC 2: TREATMENT --- */
    {
      "id": "t2-q1",
      "type": "multiple-select",
      "topicId": "topic-02-treatment",
      "topicName": "Treatment & Safety",
      "question": "Which of the following are hematologic side effects of chemotherapy? (Select all that apply)",
      "points": 5,
      "options": [
        { "id": "a", "text": "Anemia", "isCorrect": true },
        { "id": "b", "text": "Thrombocytopenia", "isCorrect": true },
        { "id": "c", "text": "Neutropenia", "isCorrect": true },
        { "id": "d", "text": "Alopecia", "isCorrect": false },
        { "id": "e", "text": "Nausea", "isCorrect": false }
      ],
      "explanation": "Hematologic side effects affect blood cells: Anemia (RBCs), Thrombocytopenia (Platelets), and Neutropenia (WBCs)."
    },
    {
      "id": "t2-q2",
      "type": "multiple-choice",
      "topicId": "topic-02-treatment",
      "topicName": "Treatment & Safety",
      "question": "What are the three cardinal rules of radiation safety?",
      "points": 5,
      "options": [
        { "id": "a", "text": "Gown, Gloves, Mask", "isCorrect": false },
        { "id": "b", "text": "Time, Distance, Shielding", "isCorrect": true },
        { "id": "c", "text": "Wash, Rinse, Repeat", "isCorrect": false },
        { "id": "d", "text": "Assess, Diagnose, Plan", "isCorrect": false }
      ],
      "explanation": "Radiation safety relies on minimizing Time, maximizing Distance, and using appropriate Shielding."
    },
    {
      "id": "t2-q3",
      "type": "true-false",
      "topicId": "topic-02-treatment",
      "topicName": "Treatment & Safety",
      "question": "When handling oral chemotherapy at home, family members should wear gloves to prevent skin contact.",
      "points": 5,
      "correctAnswer": true,
      "explanation": "Chemotherapy is hazardous; caregivers must wear gloves to prevent absorption through the skin."
    },
    {
      "id": "t2-q4",
      "type": "multiple-select",
      "topicId": "topic-02-treatment",
      "topicName": "Treatment & Safety",
      "question": "Select the correct precautions for a patient with an internal radiation implant (Brachytherapy):",
      "points": 5,
      "options": [
        { "id": "a", "text": "Flush the toilet twice after use", "isCorrect": true },
        { "id": "b", "text": "Encourage visitors to sit on the bed", "isCorrect": false },
        { "id": "c", "text": "Wash laundry separately", "isCorrect": true },
        { "id": "d", "text": "Avoid contact with pregnant women and infants", "isCorrect": true },
        { "id": "e", "text": "Use shared utensils", "isCorrect": false }
      ]
    },
    {
      "id": "t2-q5",
      "type": "fill-blank",
      "topicId": "topic-02-treatment",
      "topicName": "Treatment & Safety",
      "question": "The loss of hair as a side effect of chemotherapy is medically known as __b1__.",
      "points": 5,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["alopecia"], "caseSensitive": false }
      ]
    },

    /* --- TOPIC 3: LEUKEMIA --- */
    {
      "id": "t3-q1",
      "type": "multiple-choice",
      "topicId": "topic-03-leukemia",
      "topicName": "Leukemia",
      "question": "A patient with Acute Lymphocytic Leukemia (ALL) has a fever of 38.7°C. What is the nurse's priority action?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Apply cool washcloths", "isCorrect": false },
        { "id": "b", "text": "Establish IV access", "isCorrect": true },
        { "id": "c", "text": "Administer acetaminophen", "isCorrect": false },
        { "id": "d", "text": "Document the finding", "isCorrect": false }
      ],
      "explanation": "In an immunocompromised patient, fever indicates potential sepsis. Immediate IV access is required for antibiotic administration."
    },
    {
      "id": "t3-q2",
      "type": "multiple-select",
      "topicId": "topic-03-leukemia",
      "topicName": "Leukemia",
      "question": "Which of the following are Neutropenic Precautions? (Select all that apply)",
      "points": 5,
      "options": [
        { "id": "a", "text": "No fresh flowers or plants", "isCorrect": true },
        { "id": "b", "text": "Private room with closed door", "isCorrect": true },
        { "id": "c", "text": "Strict hand washing", "isCorrect": true },
        { "id": "d", "text": "N95 respirator required for entry", "isCorrect": false },
        { "id": "e", "text": "No fresh fruits or vegetables", "isCorrect": true }
      ]
    },
    {
      "id": "t3-q3",
      "type": "matching",
      "topicId": "topic-03-leukemia",
      "topicName": "Leukemia",
      "question": "Match the Leukemia type with its characteristics:",
      "points": 5,
      "pairs": [
        { "id": "p1", "left": "Acute Lymphocytic Leukemia (ALL)", "right": "Common in children (2-5 yrs), 85% survival" },
        { "id": "p2", "left": "Acute Myelogenous Leukemia (AML)", "right": "Poor outcomes, 27% survival" }
      ]
    },
    {
      "id": "t3-q4",
      "type": "true-false",
      "topicId": "topic-03-leukemia",
      "topicName": "Leukemia",
      "question": "In leukemia, the bone marrow produces an abundance of mature, functional white blood cells.",
      "points": 5,
      "correctAnswer": false,
      "explanation": "Leukemia involves the production of immature, non-functional cells called 'blasts'."
    },
    {
      "id": "t3-q5",
      "type": "multiple-choice",
      "topicId": "topic-03-leukemia",
      "topicName": "Leukemia",
      "question": "Which symptom in a leukemia patient is primarily caused by thrombocytopenia?",
      "points": 5,
      "options": [
        { "id": "a", "text": "Fatigue", "isCorrect": false },
        { "id": "b", "text": "Fever", "isCorrect": false },
        { "id": "c", "text": "Bruising and bleeding", "isCorrect": true },
        { "id": "d", "text": "Bone pain", "isCorrect": false }
      ],
      "explanation": "Thrombocytopenia is a low platelet count, which impairs clotting and leads to bleeding and bruising."
    },

    /* --- TOPIC 4: LYMPHOMA --- */
    {
      "id": "t4-q1",
      "type": "multiple-choice",
      "topicId": "topic-04-lymphoma",
      "topicName": "Lymphoma",
      "question": "The presence of Reed-Sternberg cells is diagnostic for which condition?",
      "points": 5,
      "options": [
        { "id": "a", "text": "Non-Hodgkin's Lymphoma", "isCorrect": false },
        { "id": "b", "text": "Hodgkin's Lymphoma", "isCorrect": true },
        { "id": "c", "text": "Multiple Myeloma", "isCorrect": false },
        { "id": "d", "text": "Acute Lymphocytic Leukemia", "isCorrect": false }
      ]
    },
    {
      "id": "t4-q2",
      "type": "multiple-select",
      "topicId": "topic-04-lymphoma",
      "topicName": "Lymphoma",
      "question": "Select the characteristics of Non-Hodgkin's Lymphoma:",
      "points": 5,
      "options": [
        { "id": "a", "text": "Reed-Sternberg cells present", "isCorrect": false },
        { "id": "b", "text": "Multiple lymph nodes involved", "isCorrect": true },
        { "id": "c", "text": "Extranodal involvement is common", "isCorrect": true },
        { "id": "d", "text": "Localized, single group of nodes", "isCorrect": false }
      ]
    },
    {
      "id": "t4-q3",
      "type": "multiple-choice",
      "topicId": "topic-04-lymphoma",
      "topicName": "Lymphoma",
      "question": "Which of the following is a classic symptom of lymphoma?",
      "points": 5,
      "options": [
        { "id": "a", "text": "Painful, red lymph nodes", "isCorrect": false },
        { "id": "b", "text": "Painless swelling of lymph nodes", "isCorrect": true },
        { "id": "c", "text": "Bradycardia", "isCorrect": false },
        { "id": "d", "text": "Hypertension", "isCorrect": false }
      ]
    },
    {
      "id": "t4-q4",
      "type": "true-false",
      "topicId": "topic-04-lymphoma",
      "topicName": "Lymphoma",
      "question": "Non-Hodgkin's Lymphoma is more common than Hodgkin's Lymphoma.",
      "points": 5,
      "correctAnswer": true,
      "explanation": "Non-Hodgkin's Lymphoma is the most common type of lymphoma."
    },
    {
      "id": "t4-q5",
      "type": "multiple-select",
      "topicId": "topic-04-lymphoma",
      "topicName": "Lymphoma",
      "question": "Common assessment findings for lymphoma include: (Select all that apply)",
      "points": 5,
      "options": [
        { "id": "a", "text": "Night sweats", "isCorrect": true },
        { "id": "b", "text": "Weight gain", "isCorrect": false },
        { "id": "c", "text": "Fever", "isCorrect": true },
        { "id": "d", "text": "Enlarged liver or spleen", "isCorrect": true },
        { "id": "e", "text": "Unexplained weight loss", "isCorrect": true }
      ]
    },

    /* --- TOPIC 5: LUNG CANCER --- */
    {
      "id": "t5-q1",
      "type": "multiple-choice",
      "topicId": "topic-05-lung-cancer",
      "topicName": "Lung Cancer",
      "question": "What is the medical term for coughing up blood, a critical sign of lung cancer?",
      "points": 5,
      "options": [
        { "id": "a", "text": "Hematemesis", "isCorrect": false },
        { "id": "b", "text": "Hemoptysis", "isCorrect": true },
        { "id": "c", "text": "Epistaxis", "isCorrect": false },
        { "id": "d", "text": "Hematuria", "isCorrect": false }
      ]
    },
    {
      "id": "t5-q2",
      "type": "matching",
      "topicId": "topic-05-lung-cancer",
      "topicName": "Lung Cancer",
      "question": "Match the surgical procedure to its definition:",
      "points": 5,
      "pairs": [
        { "id": "p1", "left": "Pneumonectomy", "right": "Removal of entire lung" },
        { "id": "p2", "left": "Lobectomy", "right": "Removal of a lung lobe" },
        { "id": "p3", "left": "Wedge Resection", "right": "Removal of a small section of lung" }
      ]
    },
    {
      "id": "t5-q3",
      "type": "multiple-select",
      "topicId": "topic-05-lung-cancer",
      "topicName": "Lung Cancer",
      "question": "Select the signs and symptoms associated with lung cancer:",
      "points": 5,
      "options": [
        { "id": "a", "text": "Wheezing", "isCorrect": true },
        { "id": "b", "text": "Difficulty swallowing", "isCorrect": true },
        { "id": "c", "text": "Shortness of breath", "isCorrect": true },
        { "id": "d", "text": "Bradypnea", "isCorrect": false }
      ]
    },
    {
      "id": "t5-q4",
      "type": "multiple-choice",
      "topicId": "topic-05-lung-cancer",
      "topicName": "Lung Cancer",
      "question": "Which of the following is NOT a main type of lung cancer cell classification?",
      "points": 5,
      "options": [
        { "id": "a", "text": "Small cell", "isCorrect": false },
        { "id": "b", "text": "Squamous cell", "isCorrect": false },
        { "id": "c", "text": "Basal cell", "isCorrect": true },
        { "id": "d", "text": "Adenocarcinoma", "isCorrect": false }
      ],
      "explanation": "Basal cell is a type of skin cancer, not lung cancer."
    },
    {
      "id": "t5-q5",
      "type": "true-false",
      "topicId": "topic-05-lung-cancer",
      "topicName": "Lung Cancer",
      "question": "A wedge resection involves removing an entire lobe of the lung.",
      "points": 5,
      "correctAnswer": false,
      "explanation": "A wedge resection removes a small section; a lobectomy removes a lobe."
    },

    /* --- TOPIC 6: BREAST CANCER --- */
    {
      "id": "t6-q1",
      "type": "multiple-choice",
      "topicId": "topic-06-breast-cancer",
      "topicName": "Breast Cancer",
      "question": "What is 'Peau d'orange'?",
      "points": 5,
      "options": [
        { "id": "a", "text": "Discharge from the nipple", "isCorrect": false },
        { "id": "b", "text": "A pitted skin surface resembling an orange peel", "isCorrect": true },
        { "id": "c", "text": "Inversion of the nipple", "isCorrect": false },
        { "id": "d", "text": "A benign lump", "isCorrect": false }
      ]
    },
    {
      "id": "t6-q2",
      "type": "multiple-select",
      "topicId": "topic-06-breast-cancer",
      "topicName": "Breast Cancer",
      "question": "Which of the following are risk factors for breast cancer?",
      "points": 5,
      "options": [
        { "id": "a", "text": "Age 55+", "isCorrect": true },
        { "id": "b", "text": "BRCA1 or BRCA2 gene mutations", "isCorrect": true },
        { "id": "c", "text": "Male gender", "isCorrect": false },
        { "id": "d", "text": "Menopause", "isCorrect": true }
      ]
    },
    {
      "id": "t6-q3",
      "type": "multiple-choice",
      "topicId": "topic-06-breast-cancer",
      "topicName": "Breast Cancer",
      "question": "When is the best time to perform a breast self-examination?",
      "points": 5,
      "options": [
        { "id": "a", "text": "Any time", "isCorrect": false },
        { "id": "b", "text": "During menstruation", "isCorrect": false },
        { "id": "c", "text": "The same time each month", "isCorrect": true },
        { "id": "d", "text": "Immediately after ovulation", "isCorrect": false }
      ]
    },
    {
      "id": "t6-q4",
      "type": "multiple-select",
      "topicId": "topic-06-breast-cancer",
      "topicName": "Breast Cancer",
      "question": "Signs of breast cancer involving the nipple include:",
      "points": 5,
      "options": [
        { "id": "a", "text": "Inversion/Indrawn", "isCorrect": true },
        { "id": "b", "text": "Dimpling", "isCorrect": true },
        { "id": "c", "text": "Unusual discharge (clear or bloody)", "isCorrect": true },
        { "id": "d", "text": "Hyper-pigmentation only", "isCorrect": false }
      ]
    },
    {
      "id": "t6-q5",
      "type": "fill-blank",
      "topicId": "topic-06-breast-cancer",
      "topicName": "Breast Cancer",
      "question": "Removal of the entire breast tissue is called a __b1__, while removing only the tumor is called a __b2__.",
      "points": 5,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["mastectomy"], "caseSensitive": false },
        { "id": "b2", "acceptedAnswers": ["lumpectomy"], "caseSensitive": false }
      ]
    },

    /* --- TOPIC 7: PROSTATE CANCER --- */
    {
      "id": "t7-q1",
      "type": "multiple-choice",
      "topicId": "topic-07-prostate-cancer",
      "topicName": "Prostate Cancer",
      "question": "Bone pain in the lower back and pelvis in a patient with prostate cancer typically indicates:",
      "points": 5,
      "options": [
        { "id": "a", "text": "Urinary retention", "isCorrect": false },
        { "id": "b", "text": "Local infection", "isCorrect": false },
        { "id": "c", "text": "Metastasis", "isCorrect": true },
        { "id": "d", "text": "Kidney stones", "isCorrect": false }
      ]
    },
    {
      "id": "t7-q2",
      "type": "matching",
      "topicId": "topic-07-prostate-cancer",
      "topicName": "Prostate Cancer",
      "question": "Match the screening method with its description:",
      "points": 5,
      "pairs": [
        { "id": "p1", "left": "PSA", "right": "Blood test for prostate specific antigen" },
        { "id": "p2", "left": "DRE", "right": "Digital Rectal Exam" }
      ]
    },
    {
      "id": "t7-q3",
      "type": "multiple-select",
      "topicId": "topic-07-prostate-cancer",
      "topicName": "Prostate Cancer",
      "question": "Which of the following are common urinary symptoms of prostate cancer?",
      "points": 5,
      "options": [
        { "id": "a", "text": "Slow start of stream", "isCorrect": true },
        { "id": "b", "text": "Dribbling", "isCorrect": true },
        { "id": "c", "text": "Polyuria (excessive volume)", "isCorrect": false },
        { "id": "d", "text": "Urinary retention", "isCorrect": true },
        { "id": "e", "text": "Blood in urine", "isCorrect": true }
      ]
    },
    {
      "id": "t7-q4",
      "type": "multiple-select",
      "topicId": "topic-07-prostate-cancer",
      "topicName": "Prostate Cancer",
      "question": "Which groups are at higher risk for prostate cancer?",
      "points": 5,
      "options": [
        { "id": "a", "text": "African-American males", "isCorrect": true },
        { "id": "b", "text": "Men over 60", "isCorrect": true },
        { "id": "c", "text": "Asian males", "isCorrect": false },
        { "id": "d", "text": "Farmers and Painters", "isCorrect": true }
      ]
    },
    {
      "id": "t7-q5",
      "type": "true-false",
      "topicId": "topic-07-prostate-cancer",
      "topicName": "Prostate Cancer",
      "question": "A Radical Prostatectomy involves the removal of only the tumor, leaving the prostate gland intact.",
      "points": 5,
      "correctAnswer": false,
      "explanation": "Radical prostatectomy is the removal of the entire prostate gland."
    },

    /* --- TOPIC 8: TESTICULAR CANCER --- */
    {
      "id": "t8-q1",
      "type": "multiple-choice",
      "topicId": "topic-08-testicular-cancer",
      "topicName": "Testicular Cancer",
      "question": "Which of the following is a risk factor for testicular cancer?",
      "points": 5,
      "options": [
        { "id": "a", "text": "History of undescended testicle", "isCorrect": true },
        { "id": "b", "text": "Advanced age (>70)", "isCorrect": false },
        { "id": "c", "text": "High protein diet", "isCorrect": false },
        { "id": "d", "text": "Vasectomy", "isCorrect": false }
      ]
    },
    {
      "id": "t8-q2",
      "type": "ordering",
      "topicId": "topic-08-testicular-cancer",
      "topicName": "Testicular Cancer",
      "question": "Order the steps for a Testicular Self-Exam (TSE):",
      "points": 10,
      "items": [
        { "id": "i1", "text": "Perform during/after a warm bath or shower", "correctPosition": 1 },
        { "id": "i2", "text": "Cup one testicle at a time using both hands", "correctPosition": 2 },
        { "id": "i3", "text": "Roll testicle between thumb and fingers", "correctPosition": 3 },
        { "id": "i4", "text": "Feel for lumps or irregularities", "correctPosition": 4 }
      ]
    },
    {
      "id": "t8-q3",
      "type": "multiple-choice",
      "topicId": "topic-08-testicular-cancer",
      "topicName": "Testicular Cancer",
      "question": "What is the medical term for the surgical removal of a testicle?",
      "points": 5,
      "options": [
        { "id": "a", "text": "Prostatectomy", "isCorrect": false },
        { "id": "b", "text": "Orchiectomy", "isCorrect": true },
        { "id": "c", "text": "Vasectomy", "isCorrect": false },
        { "id": "d", "text": "Lobectomy", "isCorrect": false }
      ]
    },
    {
      "id": "t8-q4",
      "type": "multiple-select",
      "topicId": "topic-08-testicular-cancer",
      "topicName": "Testicular Cancer",
      "question": "Symptoms of testicular cancer include:",
      "points": 5,
      "options": [
        { "id": "a", "text": "Heaviness in scrotum", "isCorrect": true },
        { "id": "b", "text": "Gynecomastia", "isCorrect": true },
        { "id": "c", "text": "Lump or swelling", "isCorrect": true },
        { "id": "d", "text": "Urinary incontinence", "isCorrect": false }
      ]
    },
    {
      "id": "t8-q5",
      "type": "true-false",
      "topicId": "topic-08-testicular-cancer",
      "topicName": "Testicular Cancer",
      "question": "It is normal for one testicle to be slightly larger than the other.",
      "points": 5,
      "correctAnswer": true
    },

    /* --- TOPIC 9: EMERGENCIES --- */
    {
      "id": "t9-q1",
      "type": "multiple-select",
      "topicId": "topic-09-emergencies",
      "topicName": "Oncologic Emergencies",
      "question": "Which electrolyte imbalances are associated with Tumor Lysis Syndrome? (Select all that apply)",
      "points": 5,
      "options": [
        { "id": "a", "text": "Hyperkalemia (High Potassium)", "isCorrect": true },
        { "id": "b", "text": "Hyperuricemia (High Uric Acid)", "isCorrect": true },
        { "id": "c", "text": "Hyperphosphatemia (High Phosphate)", "isCorrect": true },
        { "id": "d", "text": "Hypercalcemia (High Calcium)", "isCorrect": false },
        { "id": "e", "text": "Hypocalcemia (Low Calcium)", "isCorrect": true }
      ]
    },
    {
      "id": "t9-q2",
      "type": "multiple-choice",
      "topicId": "topic-09-emergencies",
      "topicName": "Oncologic Emergencies",
      "question": "Superior Vena Cava Syndrome is typically caused by:",
      "points": 5,
      "options": [
        { "id": "a", "text": "Compression from a tumor", "isCorrect": true },
        { "id": "b", "text": "Low platelet count", "isCorrect": false },
        { "id": "c", "text": "Release of uric acid", "isCorrect": false },
        { "id": "d", "text": "Infection", "isCorrect": false }
      ]
    },
    {
      "id": "t9-q3",
      "type": "true-false",
      "topicId": "topic-09-emergencies",
      "topicName": "Oncologic Emergencies",
      "question": "DIC (Disseminated Intravascular Coagulation) is considered an oncologic emergency.",
      "points": 5,
      "correctAnswer": true
    },
    {
      "id": "t9-q4",
      "type": "fill-blank",
      "topicId": "topic-09-emergencies",
      "topicName": "Oncologic Emergencies",
      "question": "Tumor Lysis Syndrome leads to __b1__, or excess uric acid in the blood.",
      "points": 5,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["hyperuricemia"], "caseSensitive": false }
      ]
    },
    {
      "id": "t9-q5",
      "type": "multiple-choice",
      "topicId": "topic-09-emergencies",
      "topicName": "Oncologic Emergencies",
      "question": "Which condition is characterized by the rapid destruction of tumor cells releasing their contents into the bloodstream?",
      "points": 5,
      "options": [
        { "id": "a", "text": "Superior Vena Cava Syndrome", "isCorrect": false },
        { "id": "b", "text": "Tumor Lysis Syndrome", "isCorrect": true },
        { "id": "c", "text": "Sepsis", "isCorrect": false },
        { "id": "d", "text": "Thrombocytopenia", "isCorrect": false }
      ]
    }
  ]
});